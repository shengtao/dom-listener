/**
 * Created with JetBrains WebStorm.
 * User: donglin
 * Date: 13-12-7
 * Time: 上午10:47
 * To change this template use File | Settings | File Templates.
 */
(function (lib) {
    if (typeof Zepto === 'undefined') {
        console.error('请加载Zepto库哦');
        return;
    }
    var $ = Zepto;

    lib.domListener = {
        defaultOpts: {
            target: '', // 监听目标
            // tobe: 现在是innerHTML
            // attrs: [], // 监听属性
            notify: true, // 桌面通知否?
            interval: 1000,
            notifyOpts: {
                openUrl: location.href, // 跳转默认为当前url
                icon: 'http://i.stack.imgur.com/dmHl0.png',
                title: '价格动态'
            }
        },

        init: function (opts) {
            this.opts = $.extend(true, {}, this.defaultOpts, opts);

            if (!this.opts.target) {
                console.error('监听目标没有被设定');
                return;
            }

            this.$target = $(this.opts.target);

            if (!this.$target) {
                console.warn('监听目标没有被找到');
            }

            // 默认监听innerHTML的变化
            // this.attr = this.opts.attr || ['html'];

            this.tick = null;
            this.oldVal = null; // value before change

            this.addEvents();
            this.startListen();
        },

        addEvents: function () {
            var that = this;

            $(document).on('dom:changed', function (e, attr, newVal, oldVal) {
                that._changeHandler(newVal, oldVal);
            });
        },

        // 开始监听
        startListen: function () {
            var that = this;
            this.tick = setInterval(function () {
                that._checkChange();
            }, this.opts.interval)
        },

        stopListen: function () {
            clearInterval(this.tick);
        },

        _checkChange: function () {
            var newVal = this.$target.html();
            var oldVal = this.oldVal;

            if (newVal != oldVal) {
                $(document.body).trigger('dom:changed', ['html', newVal, oldVal]);
                this.oldVal = newVal;
            }
        },

        _changeHandler: function (newVal, oldVal) {
            if (this.opts.notify) {
                var trend = parseFloat(newVal) > parseFloat(oldVal) ? '升了' : '降了';
                var text = trend + ': ' + '原 ' + oldVal + '; 现 ' + newVal;
                this.desktopNotify(text);
            } else {
                // tobe: 可能还有其他的打印方式
                console.log(attrs);
            }
        },

        desktopNotify: function (text) {
            var opts = this.opts.notifyOpts;

            var havePermission = window.webkitNotifications.checkPermission();
            if (havePermission == 0) {
                // 0 is PERMISSION_ALLOWED
                var notification = window.webkitNotifications.createNotification(
                    opts.icon,
                    opts.title,
                    text
                );

                notification.onclick = function () {
                    window.open(opts.openUrl);
                    notification.close();
                }

                notification.show();
            } else {
                window.webkitNotifications.requestPermission();
            }
        }
    }
})(window.lib || {})