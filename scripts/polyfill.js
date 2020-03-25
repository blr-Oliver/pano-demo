(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
navigator.browserInfo = {
	isOpera: !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
	isFirefox: typeof InstallTrigger !== 'undefined',
	isSafari: Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
	isChrome: !!window.chrome && !(!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0),
	isIE: /*@cc_on!@*/false || !!document.documentMode
};
