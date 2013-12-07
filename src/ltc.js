/*
* @require zepto, lib/dom-listener.js
* */

;(function () {
    var domListener = lib.domListener;

    console.log(location.href);

    domListener.init({
        target: '.newvalue .red'
    });
})()