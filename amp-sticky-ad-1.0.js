(self.AMP=self.AMP||[]).push({n:"amp-sticky-ad",v:"1810152207300",f:(function(AMP,_){
var d;function k(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var e in b)if(Object.defineProperties){var n=Object.getOwnPropertyDescriptor(b,e);n&&Object.defineProperty(a,e,n)}else a[e]=b[e]};self.log=self.log||{user:null,dev:null,userForEmbed:null};var l=self.log;function m(){if(!l.user)throw Error("failed to call initLogConstructor");return l.user};function p(){var a,b=Object.create(null);a&&Object.assign(b,a);return b};function q(){var a,b;this.promise=new Promise(function(c,e){a=c;b=e});this.resolve=a;this.reject=b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function r(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function t(a){r(a.tagName,"AMP-");if(a.createdCallback)return Promise.resolve(a);if(!a.__AMP_UPG_PRM){var b=new q;a.__AMP_UPG_PRM=b.promise;a.__AMP_UPG_RES=b.resolve}return a.__AMP_UPG_PRM};var u,v="Webkit webkit Moz moz ms O o".split(" ");function w(a,b){void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function y(a){a=AMP.BaseElement.call(this,a)||this;a.m=a.getVsync();a.h=null;a.c=null;a.l=!1;a.j=null;a.w=!1;a.o=null;return a}k(y,AMP.BaseElement);d=y.prototype;
d.buildCallback=function(){var a=this;this.c=this.getViewport();this.element.classList.add("i-amphtml-sticky-ad-layout");var b=this.getRealChildren();m().assert(1==b.length&&"AMP-AD"==b[0].tagName,"amp-sticky-ad must have a single amp-ad child");this.h=b[0];this.setAsOwner(this.h);this.o=t(this.h).then(function(a){return a.whenBuilt()}).then(function(){return a.mutateElement(function(){w(a.element,!0)})});var c=this.win.document.createElement("amp-sticky-ad-top-padding");c.classList.add("amp-sticky-ad-top-padding");
this.element.insertBefore(c,this.h);this.win.setTimeout(function(){a.j=a.c.onScroll(function(){1<a.c.getScrollTop()&&z(a)})})};d.layoutCallback=function(){if(this.l){w(this.element,!0);var a=this.element.offsetHeight;this.c.updatePaddingBottom(a);this.updateInViewport(this.h,!0);this.scheduleLayout(this.h)}return Promise.resolve()};d.isAlwaysFixed=function(){return!0};d.unlayoutCallback=function(){this.c.updatePaddingBottom(0);return!0};d.detachedCallback=function(){A(this)};
d.collapsedCallback=function(){var a=this;this.w=!0;this.l=!1;w(this.element,!1);this.m.mutate(function(){a.c.updatePaddingBottom(0)})};function A(a){a.j&&(a.j(),a.j=null)}function z(a){A(a);a.o.then(function(){a.mutateElement(function(){a.w||(a.l=!0,B(a),a.c.addToFixedLayer(a.element,!0).then(function(){return C(a)}))})})}function C(a){t(a.h).then(function(b){b.whenBuilt().then(a.A.bind(a))})}
d.A=function(){var a=this,b=this.h;this.updateInViewport(b,!0);this.scheduleLayout(b);var c=b.signals();return Promise.race([c.whenSignal("render-start"),c.whenSignal("load-end")]).then(function(){var b;return a.measureElement(function(){b=(a.win.getComputedStyle(a.element)||p()).backgroundColor}).then(function(){return a.m.mutatePromise(function(){a.element.setAttribute("visible","");a.c.updatePaddingBottom(a.element.offsetHeight);var c=b,e=c.replace(/\(([^,]+),([^,]+),([^,)]+),[^)]+\)/g,"($1,$2,$3, 1)");
if(c!=e){m().warn("AMP-STICKY-AD","Do not allow container to be semitransparent");var c=a.element,f;f=c.style;if(r("background-color","--"))f="background-color";else{u||(u=p());var h=u["background-color"];if(!h){h="background-color";if(void 0===f["background-color"]){var g;b:{for(g=0;g<v.length;g++){var x=v[g]+"Background-color";if(void 0!==f[x]){g=x;break b}}g=""}void 0!==f[g]&&(h=g)}u["background-color"]=h}f=h}f&&(c.style[f]=e)}})})})};
function B(a){var b=a.win.document.createElement("button");b.classList.add("amp-sticky-ad-close-button");b.setAttribute("aria-label",a.element.getAttribute("data-close-button-aria-label")||"Close this ad");var c=a.B.bind(a);b.addEventListener("click",c);a.element.appendChild(b)}d.B=function(){var a=this;this.m.mutate(function(){a.l=!1;a.scheduleUnlayout(a.h);a.c.removeFromFixedLayer(a.element);var b=a.element;b.parentElement&&b.parentElement.removeChild(b);a.c.updatePaddingBottom(0)})};
(function(a){a.registerElement("amp-sticky-ad",y,"amp-sticky-ad{position:fixed!important;text-align:center;bottom:0!important;left:0;width:100%!important;z-index:11;max-height:100px!important;box-sizing:border-box;opacity:1!important;background-image:none!important;background-color:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important;margin-bottom:0!important}amp-sticky-ad-top-padding{display:block;width:100%!important;background:#fff;height:4px;max-height:5px!important;z-index:12}.i-amphtml-sticky-ad-layout{display:-webkit-box;display:-ms-flexbox;display:flex;visibility:hidden!important;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:visible!important;-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important}amp-sticky-ad[visible]{visibility:visible!important}.i-amphtml-sticky-ad-layout>amp-ad{display:block}.amp-sticky-ad-close-button{position:absolute;visibility:hidden;width:28px;height:28px;top:-28px;right:0;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E\");background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}amp-sticky-ad[visible]>.amp-sticky-ad-close-button{visibility:visible}.amp-sticky-ad-close-button:before{position:absolute;content:\"\";top:-20px;right:0;left:-20px;bottom:0}[dir=rtl] .amp-sticky-ad-close-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] .amp-sticky-ad-close-button:before{right:-20px;left:0}\n/*# sourceURL=/extensions/amp-sticky-ad/1.0/amp-sticky-ad.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-sticky-ad-1.0.js.map
