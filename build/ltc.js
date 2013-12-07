var Zepto=function(){function a(a){return null==a?String(a):V[W.call(a)]||"object"}function b(b){return"function"==a(b)}function c(a){return null!=a&&a==a.window}function d(a){return null!=a&&a.nodeType==a.DOCUMENT_NODE}function e(b){return"object"==a(b)}function f(a){return e(a)&&!c(a)&&Object.getPrototypeOf(a)==Object.prototype}function g(a){return a instanceof Array}function h(a){return"number"==typeof a.length}function i(a){return E.call(a,function(a){return null!=a})}function j(a){return a.length>0?y.fn.concat.apply([],a):a}function k(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(a){return a in H?H[a]:H[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function m(a,b){return"number"!=typeof b||I[k(a)]?b:b+"px"}function n(a){var b,c;return G[a]||(b=F.createElement(a),F.body.appendChild(b),c=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),"none"==c&&(c="block"),G[a]=c),G[a]}function o(a){return"children"in a?D.call(a.children):y.map(a.childNodes,function(a){return 1==a.nodeType?a:void 0})}function p(a,b,c){for(x in b)c&&(f(b[x])||g(b[x]))?(f(b[x])&&!f(a[x])&&(a[x]={}),g(b[x])&&!g(a[x])&&(a[x]=[]),p(a[x],b[x],c)):b[x]!==w&&(a[x]=b[x])}function q(a,b){return null==b?y(a):y(a).filter(b)}function r(a,c,d,e){return b(c)?c.call(a,d,e):c}function s(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}function t(a,b){var c=a.className,d=c&&c.baseVal!==w;return b===w?d?c.baseVal:c:(d?c.baseVal=b:a.className=b,void 0)}function u(a){var b;try{return a?"true"==a||("false"==a?!1:"null"==a?null:/^0/.test(a)||isNaN(b=Number(a))?/^[\[\{]/.test(a)?y.parseJSON(a):a:b):a}catch(c){return a}}function v(a,b){b(a);for(var c in a.childNodes)v(a.childNodes[c],b)}var w,x,y,z,A,B,C=[],D=C.slice,E=C.filter,F=window.document,G={},H={},I={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},J=/^\s*<(\w+|!)[^>]*>/,K=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,L=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,M=/^(?:body|html)$/i,N=/([A-Z])/g,O=["val","css","html","text","data","width","height","offset"],P=["after","prepend","before","append"],Q=F.createElement("table"),R=F.createElement("tr"),S={tr:F.createElement("tbody"),tbody:Q,thead:Q,tfoot:Q,td:R,th:R,"*":F.createElement("div")},T=/complete|loaded|interactive/,U=/^[\w-]*$/,V={},W=V.toString,X={},Y=F.createElement("div"),Z={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"};return X.matches=function(a,b){if(!b||!a||1!==a.nodeType)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=Y).appendChild(a),d=~X.qsa(e,b).indexOf(a),f&&Y.removeChild(a),d},A=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},B=function(a){return E.call(a,function(b,c){return a.indexOf(b)==c})},X.fragment=function(a,b,c){var d,e,g;return K.test(a)&&(d=y(F.createElement(RegExp.$1))),d||(a.replace&&(a=a.replace(L,"<$1></$2>")),b===w&&(b=J.test(a)&&RegExp.$1),b in S||(b="*"),g=S[b],g.innerHTML=""+a,d=y.each(D.call(g.childNodes),function(){g.removeChild(this)})),f(c)&&(e=y(d),y.each(c,function(a,b){O.indexOf(a)>-1?e[a](b):e.attr(a,b)})),d},X.Z=function(a,b){return a=a||[],a.__proto__=y.fn,a.selector=b||"",a},X.isZ=function(a){return a instanceof X.Z},X.init=function(a,c){var d;if(!a)return X.Z();if("string"==typeof a)if(a=a.trim(),"<"==a[0]&&J.test(a))d=X.fragment(a,RegExp.$1,c),a=null;else{if(c!==w)return y(c).find(a);d=X.qsa(F,a)}else{if(b(a))return y(F).ready(a);if(X.isZ(a))return a;if(g(a))d=i(a);else if(e(a))d=[a],a=null;else if(J.test(a))d=X.fragment(a.trim(),RegExp.$1,c),a=null;else{if(c!==w)return y(c).find(a);d=X.qsa(F,a)}}return X.Z(d,a)},y=function(a,b){return X.init(a,b)},y.extend=function(a){var b,c=D.call(arguments,1);return"boolean"==typeof a&&(b=a,a=c.shift()),c.forEach(function(c){p(a,c,b)}),a},X.qsa=function(a,b){var c,e="#"==b[0],f=!e&&"."==b[0],g=e||f?b.slice(1):b,h=U.test(g);return d(a)&&h&&e?(c=a.getElementById(g))?[c]:[]:1!==a.nodeType&&9!==a.nodeType?[]:D.call(h&&!e?f?a.getElementsByClassName(g):a.getElementsByTagName(b):a.querySelectorAll(b))},y.contains=function(a,b){return a!==b&&a.contains(b)},y.type=a,y.isFunction=b,y.isWindow=c,y.isArray=g,y.isPlainObject=f,y.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},y.inArray=function(a,b,c){return C.indexOf.call(b,a,c)},y.camelCase=A,y.trim=function(a){return null==a?"":String.prototype.trim.call(a)},y.uuid=0,y.support={},y.expr={},y.map=function(a,b){var c,d,e,f=[];if(h(a))for(d=0;d<a.length;d++)c=b(a[d],d),null!=c&&f.push(c);else for(e in a)c=b(a[e],e),null!=c&&f.push(c);return j(f)},y.each=function(a,b){var c,d;if(h(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},y.grep=function(a,b){return E.call(a,b)},window.JSON&&(y.parseJSON=JSON.parse),y.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()}),y.fn={forEach:C.forEach,reduce:C.reduce,push:C.push,sort:C.sort,indexOf:C.indexOf,concat:C.concat,map:function(a){return y(y.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return y(D.apply(this,arguments))},ready:function(a){return T.test(F.readyState)&&F.body?a(y):F.addEventListener("DOMContentLoaded",function(){a(y)},!1),this},get:function(a){return a===w?D.call(this):this[a>=0?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){return C.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return b(a)?this.not(this.not(a)):y(E.call(this,function(b){return X.matches(b,a)}))},add:function(a,b){return y(B(this.concat(y(a,b))))},is:function(a){return this.length>0&&X.matches(this[0],a)},not:function(a){var c=[];if(b(a)&&a.call!==w)this.each(function(b){a.call(this,b)||c.push(this)});else{var d="string"==typeof a?this.filter(a):h(a)&&b(a.item)?D.call(a):y(a);this.forEach(function(a){d.indexOf(a)<0&&c.push(a)})}return y(c)},has:function(a){return this.filter(function(){return e(a)?y.contains(this,a):y(this).find(a).size()})},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!e(a)?a:y(a)},last:function(){var a=this[this.length-1];return a&&!e(a)?a:y(a)},find:function(a){var b,c=this;return b="object"==typeof a?y(a).filter(function(){var a=this;return C.some.call(c,function(b){return y.contains(b,a)})}):1==this.length?y(X.qsa(this[0],a)):this.map(function(){return X.qsa(this,a)})},closest:function(a,b){var c=this[0],e=!1;for("object"==typeof a&&(e=y(a));c&&!(e?e.indexOf(c)>=0:X.matches(c,a));)c=c!==b&&!d(c)&&c.parentNode;return y(c)},parents:function(a){for(var b=[],c=this;c.length>0;)c=y.map(c,function(a){return(a=a.parentNode)&&!d(a)&&b.indexOf(a)<0?(b.push(a),a):void 0});return q(b,a)},parent:function(a){return q(B(this.pluck("parentNode")),a)},children:function(a){return q(this.map(function(){return o(this)}),a)},contents:function(){return this.map(function(){return D.call(this.childNodes)})},siblings:function(a){return q(this.map(function(a,b){return E.call(o(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return y.map(this,function(b){return b[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=n(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var c=b(a);if(this[0]&&!c)var d=y(a).get(0),e=d.parentNode||this.length>1;return this.each(function(b){y(this).wrapAll(c?a.call(this,b):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){y(this[0]).before(a=y(a));for(var b;(b=a.children()).length;)a=b.first();y(a).append(this)}return this},wrapInner:function(a){var c=b(a);return this.each(function(b){var d=y(this),e=d.contents(),f=c?a.call(this,b):a;e.length?e.wrapAll(f):d.append(f)})},unwrap:function(){return this.parent().each(function(){y(this).replaceWith(y(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var b=y(this);(a===w?"none"==b.css("display"):a)?b.show():b.hide()})},prev:function(a){return y(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return y(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(b){var c=this.innerHTML;y(this).empty().append(r(this,a,b,c))})},text:function(a){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=a===w?"":""+a})},attr:function(a,b){var c;return"string"==typeof a&&b===w?0==this.length||1!==this[0].nodeType?w:"value"==a&&"INPUT"==this[0].nodeName?this.val():!(c=this[0].getAttribute(a))&&a in this[0]?this[0][a]:c:this.each(function(c){if(1===this.nodeType)if(e(a))for(x in a)s(this,x,a[x]);else s(this,a,r(this,b,c,this.getAttribute(a)))})},removeAttr:function(a){return this.each(function(){1===this.nodeType&&s(this,a)})},prop:function(a,b){return a=Z[a]||a,b===w?this[0]&&this[0][a]:this.each(function(c){this[a]=r(this,b,c,this[a])})},data:function(a,b){var c=this.attr("data-"+a.replace(N,"-$1").toLowerCase(),b);return null!==c?u(c):w},val:function(a){return 0===arguments.length?this[0]&&(this[0].multiple?y(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(b){this.value=r(this,a,b,this.value)})},offset:function(a){if(a)return this.each(function(b){var c=y(this),d=r(this,a,b,c.offset()),e=c.offsetParent().offset(),f={top:d.top-e.top,left:d.left-e.left};"static"==c.css("position")&&(f.position="relative"),c.css(f)});if(0==this.length)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(b,c){if(arguments.length<2){var d=this[0],e=getComputedStyle(d,"");if(!d)return;if("string"==typeof b)return d.style[A(b)]||e.getPropertyValue(b);if(g(b)){var f={};return y.each(g(b)?b:[b],function(a,b){f[b]=d.style[A(b)]||e.getPropertyValue(b)}),f}}var h="";if("string"==a(b))c||0===c?h=k(b)+":"+m(b,c):this.each(function(){this.style.removeProperty(k(b))});else for(x in b)b[x]||0===b[x]?h+=k(x)+":"+m(x,b[x])+";":this.each(function(){this.style.removeProperty(k(x))});return this.each(function(){this.style.cssText+=";"+h})},index:function(a){return a?this.indexOf(y(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return a?C.some.call(this,function(a){return this.test(t(a))},l(a)):!1},addClass:function(a){return a?this.each(function(b){z=[];var c=t(this),d=r(this,a,b,c);d.split(/\s+/g).forEach(function(a){y(this).hasClass(a)||z.push(a)},this),z.length&&t(this,c+(c?" ":"")+z.join(" "))}):this},removeClass:function(a){return this.each(function(b){return a===w?t(this,""):(z=t(this),r(this,a,b,z).split(/\s+/g).forEach(function(a){z=z.replace(l(a)," ")}),t(this,z.trim()),void 0)})},toggleClass:function(a,b){return a?this.each(function(c){var d=y(this),e=r(this,a,c,t(this));e.split(/\s+/g).forEach(function(a){(b===w?!d.hasClass(a):b)?d.addClass(a):d.removeClass(a)})}):this},scrollTop:function(a){if(this.length){var b="scrollTop"in this[0];return a===w?b?this[0].scrollTop:this[0].pageYOffset:this.each(b?function(){this.scrollTop=a}:function(){this.scrollTo(this.scrollX,a)})}},scrollLeft:function(a){if(this.length){var b="scrollLeft"in this[0];return a===w?b?this[0].scrollLeft:this[0].pageXOffset:this.each(b?function(){this.scrollLeft=a}:function(){this.scrollTo(a,this.scrollY)})}},position:function(){if(this.length){var a=this[0],b=this.offsetParent(),c=this.offset(),d=M.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(y(a).css("margin-top"))||0,c.left-=parseFloat(y(a).css("margin-left"))||0,d.top+=parseFloat(y(b[0]).css("border-top-width"))||0,d.left+=parseFloat(y(b[0]).css("border-left-width"))||0,{top:c.top-d.top,left:c.left-d.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||F.body;a&&!M.test(a.nodeName)&&"static"==y(a).css("position");)a=a.offsetParent;return a})}},y.fn.detach=y.fn.remove,["width","height"].forEach(function(a){var b=a.replace(/./,function(a){return a[0].toUpperCase()});y.fn[a]=function(e){var f,g=this[0];return e===w?c(g)?g["inner"+b]:d(g)?g.documentElement["scroll"+b]:(f=this.offset())&&f[a]:this.each(function(b){g=y(this),g.css(a,r(this,e,b,g[a]()))})}}),P.forEach(function(b,c){var d=c%2;y.fn[b]=function(){var b,e,f=y.map(arguments,function(c){return b=a(c),"object"==b||"array"==b||null==c?c:X.fragment(c)}),g=this.length>1;return f.length<1?this:this.each(function(a,b){e=d?b:b.parentNode,b=0==c?b.nextSibling:1==c?b.firstChild:2==c?b:null,f.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!e)return y(a).remove();v(e.insertBefore(a,b),function(a){null!=a.nodeName&&"SCRIPT"===a.nodeName.toUpperCase()&&(!a.type||"text/javascript"===a.type)&&!a.src&&window.eval.call(window,a.innerHTML)})})})},y.fn[d?b+"To":"insert"+(c?"Before":"After")]=function(a){return y(a)[b](this),this}}),X.Z.prototype=y.fn,X.uniq=B,X.deserializeValue=u,y.zepto=X,y}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(a){function b(a){return a._zid||(a._zid=m++)}function c(a,c,f,g){if(c=d(c),c.ns)var h=e(c.ns);return(q[b(a)]||[]).filter(function(a){return!(!a||c.e&&a.e!=c.e||c.ns&&!h.test(a.ns)||f&&b(a.fn)!==b(f)||g&&a.sel!=g)})}function d(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function e(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function f(a,b){return a.del&&!s&&a.e in t||!!b}function g(a){return u[a]||s&&t[a]||a}function h(c,e,h,i,k,m,n){var o=b(c),p=q[o]||(q[o]=[]);e.split(/\s/).forEach(function(b){if("ready"==b)return a(document).ready(h);var e=d(b);e.fn=h,e.sel=k,e.e in u&&(h=function(b){var c=b.relatedTarget;return!c||c!==this&&!a.contains(this,c)?e.fn.apply(this,arguments):void 0}),e.del=m;var o=m||h;e.proxy=function(a){if(a=j(a),!a.isImmediatePropagationStopped()){a.data=i;var b=o.apply(c,a._args==l?[a]:[a].concat(a._args));return b===!1&&(a.preventDefault(),a.stopPropagation()),b}},e.i=p.length,p.push(e),"addEventListener"in c&&c.addEventListener(g(e.e),e.proxy,f(e,n))})}function i(a,d,e,h,i){var j=b(a);(d||"").split(/\s/).forEach(function(b){c(a,b,e,h).forEach(function(b){delete q[j][b.i],"removeEventListener"in a&&a.removeEventListener(g(b.e),b.proxy,f(b,i))})})}function j(b,c){return(c||!b.isDefaultPrevented)&&(c||(c=b),a.each(y,function(a,d){var e=c[a];b[a]=function(){return this[d]=v,e&&e.apply(c,arguments)},b[d]=w}),(c.defaultPrevented!==l?c.defaultPrevented:"returnValue"in c?c.returnValue===!1:c.getPreventDefault&&c.getPreventDefault())&&(b.isDefaultPrevented=v)),b}function k(a){var b,c={originalEvent:a};for(b in a)!x.test(b)&&a[b]!==l&&(c[b]=a[b]);return j(c,a)}var l,m=(a.zepto.qsa,1),n=Array.prototype.slice,o=a.isFunction,p=function(a){return"string"==typeof a},q={},r={},s="onfocusin"in window,t={focus:"focusin",blur:"focusout"},u={mouseenter:"mouseover",mouseleave:"mouseout"};r.click=r.mousedown=r.mouseup=r.mousemove="MouseEvents",a.event={add:h,remove:i},a.proxy=function(c,d){if(o(c)){var e=function(){return c.apply(d,arguments)};return e._zid=b(c),e}if(p(d))return a.proxy(c[d],c);throw new TypeError("expected function")},a.fn.bind=function(a,b,c){return this.on(a,b,c)},a.fn.unbind=function(a,b){return this.off(a,b)},a.fn.one=function(a,b,c,d){return this.on(a,b,c,d,1)};var v=function(){return!0},w=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(a,b,c){return this.on(b,a,c)},a.fn.undelegate=function(a,b,c){return this.off(b,a,c)},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d,e,f){var g,j,m=this;return b&&!p(b)?(a.each(b,function(a,b){m.on(a,c,d,b,f)}),m):(!p(c)&&!o(e)&&e!==!1&&(e=d,d=c,c=l),(o(d)||d===!1)&&(e=d,d=l),e===!1&&(e=w),m.each(function(l,m){f&&(g=function(a){return i(m,a.type,e),e.apply(this,arguments)}),c&&(j=function(b){var d,f=a(b.target).closest(c,m).get(0);return f&&f!==m?(d=a.extend(k(b),{currentTarget:f,liveFired:m}),(g||e).apply(f,[d].concat(n.call(arguments,1)))):void 0}),h(m,b,e,d,c,j||g)}))},a.fn.off=function(b,c,d){var e=this;return b&&!p(b)?(a.each(b,function(a,b){e.off(a,c,b)}),e):(!p(c)&&!o(d)&&d!==!1&&(d=c,c=l),d===!1&&(d=w),e.each(function(){i(this,b,d,c)}))},a.fn.trigger=function(b,c){return b=p(b)||a.isPlainObject(b)?a.Event(b):j(b),b._args=c,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(b):a(this).triggerHandler(b,c)})},a.fn.triggerHandler=function(b,d){var e,f;return this.each(function(g,h){e=k(p(b)?a.Event(b):b),e._args=d,e.target=h,a.each(c(h,b.type||b),function(a,b){return f=b.proxy(e),e.isImmediatePropagationStopped()?!1:void 0})}),f},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){p(a)||(b=a,a=b.type);var c=document.createEvent(r[a]||"Events"),d=!0;if(b)for(var e in b)"bubbles"==e?d=!!b[e]:c[e]=b[e];return c.initEvent(a,d,!0),j(c)}}(Zepto),function(a){function b(b,c,d){var e=a.Event(c);return a(b).trigger(e,d),!e.isDefaultPrevented()}function c(a,c,d,e){return a.global?b(c||s,d,e):void 0}function d(b){b.global&&0===a.active++&&c(b,null,"ajaxStart")}function e(b){b.global&&!--a.active&&c(b,null,"ajaxStop")}function f(a,b){var d=b.context;return b.beforeSend.call(d,a,b)===!1||c(b,d,"ajaxBeforeSend",[a,b])===!1?!1:(c(b,d,"ajaxSend",[a,b]),void 0)}function g(a,b,d,e){var f=d.context,g="success";d.success.call(f,a,g,b),e&&e.resolveWith(f,[a,g,b]),c(d,f,"ajaxSuccess",[b,d,a]),i(g,b,d)}function h(a,b,d,e,f){var g=e.context;e.error.call(g,d,b,a),f&&f.rejectWith(g,[d,b,a]),c(e,g,"ajaxError",[d,e,a||b]),i(b,d,e)}function i(a,b,d){var f=d.context;d.complete.call(f,b,a),c(d,f,"ajaxComplete",[b,d]),e(d)}function j(){}function k(a){return a&&(a=a.split(";",2)[0]),a&&(a==x?"html":a==w?"json":u.test(a)?"script":v.test(a)&&"xml")||"text"}function l(a,b){return""==b?a:(a+"&"+b).replace(/[&?]{1,2}/,"?")}function m(b){b.processData&&b.data&&"string"!=a.type(b.data)&&(b.data=a.param(b.data,b.traditional)),b.data&&(!b.type||"GET"==b.type.toUpperCase())&&(b.url=l(b.url,b.data),b.data=null)}function n(b,c,d,e){var f=!a.isFunction(c);return{url:b,data:f?c:void 0,success:f?a.isFunction(d)?d:void 0:c,dataType:f?e||d:d}}function o(b,c,d,e){var f,g=a.isArray(c),h=a.isPlainObject(c);a.each(c,function(c,i){f=a.type(i),e&&(c=d?e:e+"["+(h||"object"==f||"array"==f?c:"")+"]"),!e&&g?b.add(i.name,i.value):"array"==f||!d&&"object"==f?o(b,i,d,c):b.add(c,i)})}var p,q,r=0,s=window.document,t=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,u=/^(?:text|application)\/javascript/i,v=/^(?:text|application)\/xml/i,w="application/json",x="text/html",y=/^\s*$/;a.active=0,a.ajaxJSONP=function(b,c){if("type"in b){var d,e,i=b.jsonpCallback,j=(a.isFunction(i)?i():i)||"jsonp"+ ++r,k=s.createElement("script"),l=window[j],m=function(b){a(k).triggerHandler("error",b||"abort")},n={abort:m};return c&&c.promise(n),a(k).on("load error",function(f,i){clearTimeout(e),a(k).off().remove(),"error"!=f.type&&d?g(d[0],n,b,c):h(null,i||"error",n,b,c),window[j]=l,d&&a.isFunction(l)&&l(d[0]),l=d=void 0}),f(n,b)===!1?(m("abort"),n):(window[j]=function(){d=arguments},k.src=b.url.replace(/=\?/,"="+j),s.head.appendChild(k),b.timeout>0&&(e=setTimeout(function(){m("timeout")},b.timeout)),n)}return a.ajax(b)},a.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:w,xml:"application/xml, text/xml",html:x,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},a.ajax=function(b){var c=a.extend({},b||{}),e=a.Deferred&&a.Deferred();for(p in a.ajaxSettings)void 0===c[p]&&(c[p]=a.ajaxSettings[p]);d(c),c.crossDomain||(c.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(c.url)&&RegExp.$2!=window.location.host),c.url||(c.url=window.location.toString()),m(c),c.cache===!1&&(c.url=l(c.url,"_="+Date.now()));var i=c.dataType,n=/=\?/.test(c.url);if("jsonp"==i||n)return n||(c.url=l(c.url,c.jsonp?c.jsonp+"=?":c.jsonp===!1?"":"callback=?")),a.ajaxJSONP(c,e);var o,r=c.accepts[i],s={},t=/^([\w-]+:)\/\//.test(c.url)?RegExp.$1:window.location.protocol,u=c.xhr();if(e&&e.promise(u),c.crossDomain||(s["X-Requested-With"]="XMLHttpRequest"),s.Accept=r||"*/*",(r=c.mimeType||r)&&(r.indexOf(",")>-1&&(r=r.split(",",2)[0]),u.overrideMimeType&&u.overrideMimeType(r)),(c.contentType||c.contentType!==!1&&c.data&&"GET"!=c.type.toUpperCase())&&(s["Content-Type"]=c.contentType||"application/x-www-form-urlencoded"),c.headers=a.extend(s,c.headers||{}),u.onreadystatechange=function(){if(4==u.readyState){u.onreadystatechange=j,clearTimeout(o);var b,d=!1;if(u.status>=200&&u.status<300||304==u.status||0==u.status&&"file:"==t){i=i||k(c.mimeType||u.getResponseHeader("content-type")),b=u.responseText;try{"script"==i?(1,eval)(b):"xml"==i?b=u.responseXML:"json"==i&&(b=y.test(b)?null:a.parseJSON(b))}catch(f){d=f}d?h(d,"parsererror",u,c,e):g(b,u,c,e)}else h(u.statusText||null,u.status?"error":"abort",u,c,e)}},f(u,c)===!1)return u.abort(),h(null,"abort",u,c,e),u;if(c.xhrFields)for(q in c.xhrFields)u[q]=c.xhrFields[q];var v="async"in c?c.async:!0;u.open(c.type,c.url,v,c.username,c.password);for(q in c.headers)u.setRequestHeader(q,c.headers[q]);return c.timeout>0&&(o=setTimeout(function(){u.onreadystatechange=j,u.abort(),h(null,"timeout",u,c,e)},c.timeout)),u.send(c.data?c.data:null),u},a.get=function(){return a.ajax(n.apply(null,arguments))},a.post=function(){var b=n.apply(null,arguments);return b.type="POST",a.ajax(b)},a.getJSON=function(){var b=n.apply(null,arguments);return b.dataType="json",a.ajax(b)},a.fn.load=function(b,c,d){if(!this.length)return this;var e,f=this,g=b.split(/\s/),h=n(b,c,d),i=h.success;return g.length>1&&(h.url=g[0],e=g[1]),h.success=function(b){f.html(e?a("<div>").html(b.replace(t,"")).find(e):b),i&&i.apply(f,arguments)},a.ajax(h),this};var z=encodeURIComponent;a.param=function(a,b){var c=[];return c.add=function(a,b){this.push(z(a)+"="+z(b))},o(c,a,b),c.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b,c=[];return a([].slice.call(this.get(0).elements)).each(function(){b=a(this);var d=b.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=d&&"reset"!=d&&"button"!=d&&("radio"!=d&&"checkbox"!=d||this.checked)&&c.push({name:b.attr("name"),value:b.val()})}),c},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(a){"__proto__"in{}||a.extend(a.zepto,{Z:function(b,c){return b=b||[],a.extend(b,a.fn),b.selector=c||"",b.__Z=!0,b},isZ:function(b){return"array"===a.type(b)&&"__Z"in b}});try{getComputedStyle(void 0)}catch(b){var c=getComputedStyle;window.getComputedStyle=function(a){try{return c(a)}catch(b){return null}}}}(Zepto),function(a){if("undefined"==typeof Zepto)return console.error("请加载Zepto库哦"),void 0;var b=Zepto;a.domListener={defaultOpts:{target:"",notify:!0,interval:1e3,minDiff:5,notifyOpts:{openUrl:location.href,icon:"http://i.stack.imgur.com/dmHl0.png",title:"价格动态"}},init:function(a){return this.opts=b.extend(!0,{},this.defaultOpts,a),this.opts.target?(this.$target=b(this.opts.target),this.$target.length?(this.tick=null,this.oldVal=0,this.addEvents(),this.startListen(),void 0):(console.warn("监听目标没有被找到"),void 0)):(console.error("监听目标没有被设定"),void 0)},addEvents:function(){},startListen:function(){var a=this;this.tick=setInterval(function(){a._checkChange()},this.opts.interval)},stopListen:function(){clearInterval(this.tick)},_checkChange:function(){var a=parseFloat(this.$target.html().substr(1)),b=this.oldVal,c=Math.abs(a-b);if(c>=this.opts.minDiff){var d=parseFloat(a)>parseFloat(b)?"升了 ":"降了 ",e=d+c+"  现在 "+a;this.desktopNotify(e),this.oldVal=a}},desktopNotify:function(a){var b=this.opts.notifyOpts,c=window.webkitNotifications.checkPermission();if(0==c){var d=window.webkitNotifications.createNotification(b.icon,b.title,a);d.onclick=function(){window.open(b.openUrl),d.close()},d.show(),setTimeout(function(){d.cancel()},3e3)}else window.webkitNotifications.requestPermission()}}}(window.lib||(window.lib={})),function(){var a=lib.domListener;console.log(location.href),a.init({target:".newvalue .red"})}();