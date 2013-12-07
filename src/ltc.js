/*
* @require zepto, lib/dom-listener.js
* */

;(function () {
    var domListener = lib.domListener;

    console.log(location.href);

    domListener.init({
        minDiff: '0.5',
        notifyOpts: {
            openUrl: 'https://www.okcoin.com/buy.do',
            stayTime: 8000
        }
    });
})()