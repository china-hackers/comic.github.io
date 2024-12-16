/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});/*! Hammer.JS - v2.0.6 - 2015-12-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2015 Jorik Tangelder;
 * Licensed under the  license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&hb(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return qb++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:tb?M:ub?P:sb?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ab&&d-e===0,g=b&(Cb|Db)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=mb(j.x)>mb(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===Ab||f.eventType===Cb)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Db&&(i>zb||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Eb:mb(a)>=mb(b)?0>a?Fb:Gb:0>b?Hb:Ib}function H(a,b,c){c||(c=Mb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Mb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Nb)+I(a[1],a[0],Nb)}function K(a,b){return H(b[0],b[1],Nb)/H(a[0],a[1],Nb)}function L(){this.evEl=Pb,this.evWin=Qb,this.allow=!0,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Tb,this.evWin=Ub,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=Wb,this.evWin=Xb,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Cb|Db)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=Zb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ab|Bb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ab)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Cb|Db)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a)}function S(a,b){this.manager=a,this.set(b)}function T(a){if(p(a,dc))return dc;var b=p(a,ec),c=p(a,fc);return b&&c?dc:b||c?b?ec:fc:p(a,cc)?cc:bc}function U(a){this.options=hb({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=gc,this.simultaneous={},this.requireFail=[]}function V(a){return a&lc?"cancel":a&jc?"end":a&ic?"move":a&hc?"start":""}function W(a){return a==Ib?"down":a==Hb?"up":a==Fb?"left":a==Gb?"right":""}function X(a,b){var c=b.manager;return c?c.get(a):a}function Y(){U.apply(this,arguments)}function Z(){Y.apply(this,arguments),this.pX=null,this.pY=null}function $(){Y.apply(this,arguments)}function _(){U.apply(this,arguments),this._timer=null,this._input=null}function ab(){Y.apply(this,arguments)}function bb(){Y.apply(this,arguments)}function cb(){U.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function db(a,b){return b=b||{},b.recognizers=l(b.recognizers,db.defaults.preset),new eb(a,b)}function eb(a,b){this.options=hb({},db.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=y(this),this.touchAction=new S(this,this.options.touchAction),fb(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function fb(a,b){var c=a.element;c.style&&g(a.options.cssProps,function(a,d){c.style[u(c.style,d)]=b?a:""})}function gb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var hb,ib=["","webkit","Moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now;hb="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var ob=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),pb=h(function(a,b){return ob(a,b,!0)},"merge","Use `assign`."),qb=1,rb=/mobile|tablet|ip(ad|hone|od)|android/i,sb="ontouchstart"in a,tb=u(a,"PointerEvent")!==d,ub=sb&&rb.test(navigator.userAgent),vb="touch",wb="pen",xb="mouse",yb="kinect",zb=25,Ab=1,Bb=2,Cb=4,Db=8,Eb=1,Fb=2,Gb=4,Hb=8,Ib=16,Jb=Fb|Gb,Kb=Hb|Ib,Lb=Jb|Kb,Mb=["x","y"],Nb=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Ob={mousedown:Ab,mousemove:Bb,mouseup:Cb},Pb="mousedown",Qb="mousemove mouseup";i(L,x,{handler:function(a){var b=Ob[a.type];b&Ab&&0===a.button&&(this.pressed=!0),b&Bb&&1!==a.which&&(b=Cb),this.pressed&&this.allow&&(b&Cb&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:xb,srcEvent:a}))}});var Rb={pointerdown:Ab,pointermove:Bb,pointerup:Cb,pointercancel:Db,pointerout:Db},Sb={2:vb,3:wb,4:xb,5:yb},Tb="pointerdown",Ub="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Tb="MSPointerDown",Ub="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Rb[d],f=Sb[a.pointerType]||a.pointerType,g=f==vb,h=r(b,a.pointerId,"pointerId");e&Ab&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Cb|Db)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Vb={touchstart:Ab,touchmove:Bb,touchend:Cb,touchcancel:Db},Wb="touchstart",Xb="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Vb[a.type];if(b===Ab&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Cb|Db)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:vb,srcEvent:a})}}});var Yb={touchstart:Ab,touchmove:Bb,touchend:Cb,touchcancel:Db},Zb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=Yb[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:vb,srcEvent:a})}}),i(R,x,{handler:function(a,b,c){var d=c.pointerType==vb,e=c.pointerType==xb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Cb|Db)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var $b=u(jb.style,"touchAction"),_b=$b!==d,ac="compute",bc="auto",cc="manipulation",dc="none",ec="pan-x",fc="pan-y";S.prototype={set:function(a){a==ac&&(a=this.compute()),_b&&this.manager.element.style&&(this.manager.element.style[$b]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),T(a.join(" "))},preventDefaults:function(a){if(!_b){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,dc),f=p(d,fc),g=p(d,ec);if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}if(!g||!f)return e||f&&c&Jb||g&&c&Kb?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var gc=1,hc=2,ic=4,jc=8,kc=jc,lc=16,mc=32;U.prototype={defaults:{},set:function(a){return hb(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=X(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=X(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=X(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=X(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;jc>d&&b(c.options.event+V(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=jc&&b(c.options.event+V(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=mc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(mc|gc)))return!1;a++}return!0},recognize:function(a){var b=hb({},a);return k(this.options.enable,[this,b])?(this.state&(kc|lc|mc)&&(this.state=gc),this.state=this.process(b),void(this.state&(hc|ic|jc|lc)&&this.tryEmit(b))):(this.reset(),void(this.state=mc))},process:function(){},getTouchAction:function(){},reset:function(){}},i(Y,U,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(hc|ic),e=this.attrTest(a);return d&&(c&Db||!e)?b|lc:d||e?c&Cb?b|jc:b&hc?b|ic:hc:mc}}),i(Z,Y,{defaults:{event:"pan",threshold:10,pointers:1,direction:Lb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Jb&&b.push(fc),a&Kb&&b.push(ec),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Jb?(e=0===f?Eb:0>f?Fb:Gb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Eb:0>g?Hb:Ib,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Y.prototype.attrTest.call(this,a)&&(this.state&hc||!(this.state&hc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=W(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i($,Y,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[dc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&hc)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(_,U,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[bc]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Cb|Db)&&!f)this.reset();else if(a.eventType&Ab)this.reset(),this._timer=e(function(){this.state=kc,this.tryEmit()},b.time,this);else if(a.eventType&Cb)return kc;return mc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===kc&&(a&&a.eventType&Cb?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),i(ab,Y,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[dc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&hc)}}),i(bb,Y,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Jb|Kb,pointers:1},getTouchAction:function(){return Z.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Jb|Kb)?b=a.overallVelocity:c&Jb?b=a.overallVelocityX:c&Kb&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&mb(b)>this.options.velocity&&a.eventType&Cb},emit:function(a){var b=W(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(cb,U,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[cc]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ab&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Cb)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=kc,this.tryEmit()},b.interval,this),hc):kc}return mc},failTimeout:function(){return this._timer=e(function(){this.state=mc},this.options.interval,this),mc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==kc&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),db.VERSION="2.0.6",db.defaults={domEvents:!1,touchAction:ac,enable:!0,inputTarget:null,inputClass:null,preset:[[ab,{enable:!1}],[$,{enable:!1},["rotate"]],[bb,{direction:Jb}],[Z,{direction:Jb},["swipe"]],[cb],[cb,{event:"doubletap",taps:2},["tap"]],[_]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var nc=1,oc=2;eb.prototype={set:function(a){return hb(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?oc:nc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&kc)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===oc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(hc|ic|jc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof U)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&gb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&fb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},hb(db,{INPUT_START:Ab,INPUT_MOVE:Bb,INPUT_END:Cb,INPUT_CANCEL:Db,STATE_POSSIBLE:gc,STATE_BEGAN:hc,STATE_CHANGED:ic,STATE_ENDED:jc,STATE_RECOGNIZED:kc,STATE_CANCELLED:lc,STATE_FAILED:mc,DIRECTION_NONE:Eb,DIRECTION_LEFT:Fb,DIRECTION_RIGHT:Gb,DIRECTION_UP:Hb,DIRECTION_DOWN:Ib,DIRECTION_HORIZONTAL:Jb,DIRECTION_VERTICAL:Kb,DIRECTION_ALL:Lb,Manager:eb,Input:x,TouchAction:S,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:U,AttrRecognizer:Y,Tap:cb,Pan:Z,Swipe:bb,Pinch:$,Rotate:ab,Press:_,on:m,off:n,each:g,merge:pb,extend:ob,assign:hb,inherit:i,bindFn:j,prefixed:u});var pc="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};pc.Hammer=db,"function"==typeof define&&define.amd?define(function(){return db}):"undefined"!=typeof module&&module.exports?module.exports=db:a[c]=db}(window,document,"Hammer");(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return  (function(modules) { // webpackBootstrap
 	// install a JSONP callback for chunk loading
 	var parentJsonpFunction = window["webpackJsonp"];
 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
 		// add "moreModules" to the modules object,
 		// then flag all "chunkIds" as loaded and fire callback
 		var moduleId, chunkId, i = 0, callbacks = [];
 		for(;i < chunkIds.length; i++) {
 			chunkId = chunkIds[i];
 			if(installedChunks[chunkId])
 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
 			installedChunks[chunkId] = 0;
 		}
 		for(moduleId in moreModules) {
 			modules[moduleId] = moreModules[moduleId];
 		}
 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
 		while(callbacks.length)
 			callbacks.shift().call(null, __webpack_require__);

 	};

 	// The module cache
 	var installedModules = {};

 	// object to store loaded and loading chunks
 	// "0" means "already loaded"
 	// Array means "loading", array contains callbacks
 	var installedChunks = {
 		0:0
 	};

 	// The require function
 	function __webpack_require__(moduleId) {

 		// Check if module is in cache
 		if(installedModules[moduleId])
 			return installedModules[moduleId].exports;

 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			exports: {},
 			id: moduleId,
 			loaded: false
 		};

 		// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.loaded = true;

 		// Return the exports of the module
 		return module.exports;
 	}

 	// This file contains only the entry chunk.
 	// The chunk loading function for additional chunks
 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
 		// "0" is the signal for "already loaded"
 		if(installedChunks[chunkId] === 0)
 			return callback.call(null, __webpack_require__);

 		// an array means "currently loading".
 		if(installedChunks[chunkId] !== undefined) {
 			installedChunks[chunkId].push(callback);
 		} else {
 			// start chunk loading
 			installedChunks[chunkId] = [callback];
 			var head = document.getElementsByTagName('head')[0];
 			var script = document.createElement('script');
 			script.type = 'text/javascript';
 			script.charset = 'utf-8';
 			script.async = true;

 			script.src = __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".chunk.js";
 			head.appendChild(script);
 		}
 	};

 	// expose the modules object (__webpack_modules__)
 	__webpack_require__.m = modules;

 	// expose the module cache
 	__webpack_require__.c = installedModules;

 	// __webpack_public_path__
 	__webpack_require__.p = "";

 	// Load entry module and return exports
 	return __webpack_require__(0);
 })
/************************************************************************/
 ([
/* 0 */
 function(module, exports, __webpack_require__) {

	// 保证按需加载的文件路径正确
	__webpack_require__.p = getJsDir('lrz') + '/';
	window.URL              = window.URL || window.webkitURL;

	var Promise          = __webpack_require__(1),
	    BlobFormDataShim = __webpack_require__(4),
	    exif             = __webpack_require__(5);


	var UA = (function (userAgent) {
	    var ISOldIOS     = /OS (\d)_.* like Mac OS X/g.exec(userAgent),
	        isOldAndroid = /Android (\d.*?);/g.exec(userAgent) || /Android\/(\d.*?) /g.exec(userAgent);

	    // 判断设备是否是IOS7以下
	    // 判断设备是否是android4.5以下
	    // 判断是否iOS
	    // 判断是否android
	    // 判断是否QQ浏览器
	    return {
	        oldIOS    : ISOldIOS ? +ISOldIOS.pop() < 8 : false,
	        oldAndroid: isOldAndroid ? +isOldAndroid.pop().substr(0, 3) < 4.5 : false,
	        iOS       : /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(userAgent),
	        android   : /Android/g.test(userAgent),
	        mQQBrowser: /MQQBrowser/g.test(userAgent)
	    }
	})(navigator.userAgent);


	function Lrz (file, opts) {
	    var that = this;

	    if (!file) throw new Error('没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7');

	    opts = opts || {};

	    that.defaults = {
	        width    : null,
	        height   : null,
	        fieldName: 'file',
	        quality  : 0.9
	    };

	    that.file = file;

	    for (var p in opts) {
	        if (!opts.hasOwnProperty(p)) continue;
	        that.defaults[p] = opts[p];
	    }

	    return this.init();
	}

	Lrz.prototype.init = function () {
	    var that         = this,
	        file         = that.file,
	        fileIsString = typeof file === 'string',
	        fileIsBase64 = /^data:/.test(file),
	        img          = new Image(),
	        canvas       = document.createElement('canvas'),
	        blob         = fileIsString ? file : URL.createObjectURL(file);

	    that.img    = img;
	    that.blob   = blob;
	    that.canvas = canvas;

	    if (fileIsString) {
	        that.fileName = fileIsBase64 ? 'base64.jpg' : (file.split('/').pop());
	    } else {
	        that.fileName = file.name;
	    }

	    if (!document.createElement('canvas').getContext) {
	        throw new Error('浏览器不支持canvas');
	    }

	    return new Promise(function (resolve, reject) {
	        img.onerror = function () {
	            throw new Error('加载图片文件失败');
	        };

	        img.onload = function () {
	            that._getBase64()
	                .then(function (base64) {
	                    if (base64.length < 10) reject('生成base64失败');

	                    return base64;
	                })
	                .then(function (base64) {
	                    var formData = null;

	                    // 压缩文件太大就采用源文件,且使用原生的FormData() @source #55
	                    if (typeof that.file === 'object' && base64.length > that.file.size) {
	                        formData = new FormData();
	                        file     = that.file;
	                    } else {
	                        formData = new BlobFormDataShim.FormData();
	                        file     = dataURItoBlob(base64);
	                    }

	                    formData.append(that.defaults.fieldName, file, (that.fileName.replace(/\..+/g, '.jpg')));

	                    resolve({
	                        formData : formData,
	                        fileLen : +file.size,
	                        base64  : base64,
	                        base64Len: base64.length,
	                        origin   : that.file,
	                        file   : file
	                    });

	                    // 释放内存
	                    for (var p in that) {
	                        if (!that.hasOwnProperty(p)) continue;

	                        that[p] = null;
	                    }
	                    URL.revokeObjectURL(that.blob);
	                });
	        };

	        // 如果传入的是base64在移动端会报错
	        !fileIsBase64 && (img.crossOrigin = "*");

	        img.src = blob;
	    });
	};

	Lrz.prototype._getBase64 = function () {
	    var that   = this,
	        img    = that.img,
	        file   = that.file,
	        canvas = that.canvas;

	    return new Promise(function (resolve) {
	        try {
	            // 传入blob在android4.3以下有bug
	            exif.getData(typeof file === 'object' ? file : img, function () {
	                that.orientation = exif.getTag(this, "Orientation");

	                that.resize = that._getResize();
	                that.ctx    = canvas.getContext('2d');

	                canvas.width  = that.resize.width;
	                canvas.height = that.resize.height;

	                // 设置为白色背景，jpg是不支持透明的，所以会被默认为canvas默认的黑色背景。
	                that.ctx.fillStyle = '#fff';
	                that.ctx.fillRect(0, 0, canvas.width, canvas.height);

	                // 根据设备对应处理方式
	                if (UA.oldIOS) {
	                    that._createBase64ForOldIOS().then(resolve);
	                }
	                else {
	                    that._createBase64().then(resolve);
	                }
	            });
	        } catch (err) {
	            // 这样能解决低内存设备闪退的问题吗？
	            throw new Error(err);
	        }
	    });
	};


	Lrz.prototype._createBase64ForOldIOS = function () {
	    var that        = this,
	        img         = that.img,
	        canvas      = that.canvas,
	        defaults    = that.defaults,
	        orientation = that.orientation;

	    return new Promise(function (resolve) {
	        __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(6)]; (function (MegaPixImage) {
	            var mpImg = new MegaPixImage(img);

	            if ("5678".indexOf(orientation) > -1) {
	                mpImg.render(canvas, {
	                    width      : canvas.height,
	                    height     : canvas.width,
	                    orientation: orientation
	                });
	            } else {
	                mpImg.render(canvas, {
	                    width      : canvas.width,
	                    height     : canvas.height,
	                    orientation: orientation
	                });
	            }

	            resolve(canvas.toDataURL('image/jpeg', defaults.quality));
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	    });
	};

	Lrz.prototype._createBase64 = function () {
	    var that        = this,
	        resize      = that.resize,
	        img         = that.img,
	        canvas      = that.canvas,
	        ctx         = that.ctx,
	        defaults    = that.defaults,
	        orientation = that.orientation;

	    // 调整为正确方向
	    switch (orientation) {
	        case 3:
	            ctx.rotate(180 * Math.PI / 180);
	            ctx.drawImage(img, -resize.width, -resize.height, resize.width, resize.height);
	            break;
	        case 6:
	            ctx.rotate(90 * Math.PI / 180);
	            ctx.drawImage(img, 0, -resize.width, resize.height, resize.width);
	            break;
	        case 8:
	            ctx.rotate(270 * Math.PI / 180);
	            ctx.drawImage(img, -resize.height, 0, resize.height, resize.width);
	            break;

	        case 2:
	            ctx.translate(resize.width, 0);
	            ctx.scale(-1, 1);
	            ctx.drawImage(img, 0, 0, resize.width, resize.height);
	            break;
	        case 4:
	            ctx.translate(resize.width, 0);
	            ctx.scale(-1, 1);
	            ctx.rotate(180 * Math.PI / 180);
	            ctx.drawImage(img, -resize.width, -resize.height, resize.width, resize.height);
	            break;
	        case 5:
	            ctx.translate(resize.width, 0);
	            ctx.scale(-1, 1);
	            ctx.rotate(90 * Math.PI / 180);
	            ctx.drawImage(img, 0, -resize.width, resize.height, resize.width);
	            break;
	        case 7:
	            ctx.translate(resize.width, 0);
	            ctx.scale(-1, 1);
	            ctx.rotate(270 * Math.PI / 180);
	            ctx.drawImage(img, -resize.height, 0, resize.height, resize.width);
	            break;

	        default:
	            ctx.drawImage(img, 0, 0, resize.width, resize.height);
	    }

	    return new Promise(function (resolve) {
	        if (UA.oldAndroid || !navigator.userAgent) {
	            __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(7)]; (function (JPEGEncoder) {
	                var encoder = new JPEGEncoder(),
	                    img     = ctx.getImageData(0, 0, canvas.width, canvas.height);

	                resolve(encoder.encode(img, defaults.quality * 100));
	            }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));})
	        }
	        else {
	            resolve(canvas.toDataURL('image/jpeg', defaults.quality));
	        }
	    });
	};

	Lrz.prototype._getResize = function () {
	    var that        = this,
	        img         = that.img,
	        defaults    = that.defaults,
	        width       = defaults.width,
	        height      = defaults.height,
	        orientation = that.orientation;

	    var ret = {
	        width : img.width,
	        height: img.height
	    };

	    if ("5678".indexOf(orientation) > -1) {
	        ret.width  = img.height;
	        ret.height = img.width;
	    }

	    // 如果原图小于设定，采用原图
	    if (ret.width < width || ret.height < height) {
	        return ret;
	    }

	    var scale = ret.width / ret.height;

	    if (width && height) {
	        if (scale >= width / height) {
	            if (ret.width > width) {
	                ret.width  = width;
	                ret.height = Math.ceil(width / scale);
	            }
	        } else {
	            if (ret.height > height) {
	                ret.height = height;
	                ret.width  = Math.ceil(height * scale);
	            }
	        }
	    }
	    else if (width) {
	        if (width < ret.width) {
	            ret.width  = width;
	            ret.height = Math.ceil(width / scale);
	        }
	    }
	    else if (height) {
	        if (height < ret.height) {
	            ret.width  = Math.ceil(height * scale);
	            ret.height = height;
	        }
	    }

	    // 超过这个值base64无法生成，在IOS上
	    while (ret.width >= 3264 || ret.height >= 2448) {
	        ret.width *= 0.8;
	        ret.height *= 0.8;
	    }

	    return ret;
	};

	/**
	 * 获取当前js文件所在路径，必须得在代码顶部执行此函数
	 * @returns {string}
	 */
	function getJsDir (src) {
	    var script = null;

	    if (src) {
	        script = [].filter.call(document.scripts, function (v) {
	            return v.src.indexOf(src) !== -1;
	        })[0];
	    } else {
	        script = document.scripts[document.scripts.length - 1];
	    }

	    if (!script) return null;

	    return script.src.substr(0, script.src.lastIndexOf('/'));
	}


	/**
	 * 转换成formdata
	 * @param dataURI
	 * @returns {*}
	 *
	 * @source http://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
	 */
	function dataURItoBlob (dataURI) {
	    // convert base64/URLEncoded data component to raw binary data held in a string
	    var byteString;
	    if (dataURI.split(',')[0].indexOf('base64') >= 0)
	        byteString = atob(dataURI.split(',')[1]);
	    else
	        byteString = unescape(dataURI.split(',')[1]);

	    // separate out the mime component
	    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

	    // write the bytes of the string to a typed array
	    var ia = new Uint8Array(byteString.length);
	    for (var i = 0; i < byteString.length; i++) {
	        ia[i] = byteString.charCodeAt(i);
	    }

	    return new BlobFormDataShim.Blob([ia.buffer], {type: mimeString});
	}

	window.lrz = function (file, opts) {
	    return new Lrz(file, opts);
	};

	// 版本号来自package.json，构建时自动填充
	window.lrz.version = '__packageJSON.version__';

	module.exports = window.lrz;
 },
/* 1 */
 function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {

	    // Use polyfill for setImmediate for performance gains
	    var asap = (typeof setImmediate === 'function' && setImmediate) ||
	        function (fn) {
	            setTimeout(fn, 1);
	        };

	    // Polyfill for Function.prototype.bind
	    function bind (fn, thisArg) {
	        return function () {
	            fn.apply(thisArg, arguments);
	        }
	    }

	    var isArray = Array.isArray || function (value) {
	            return Object.prototype.toString.call(value) === "[object Array]"
	        };

	    function Promise (fn) {
	        if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
	        if (typeof fn !== 'function') throw new TypeError('not a function');
	        this._state     = null;
	        this._value     = null;
	        this._deferreds = []

	        doResolve(fn, bind(resolve, this), bind(reject, this))
	    }

	    function handle (deferred) {
	        var me = this;
	        if (this._state === null) {
	            this._deferreds.push(deferred);
	            return
	        }
	        asap(function () {
	            var cb = me._state ? deferred.onFulfilled : deferred.onRejected
	            if (cb === null) {
	                (me._state ? deferred.resolve : deferred.reject)(me._value);
	                return;
	            }
	            var ret;
	            try {
	                ret = cb(me._value);
	            }
	            catch (e) {
	                deferred.reject(e);
	                return;
	            }
	            deferred.resolve(ret);
	        })
	    }

	    function resolve (newValue) {
	        try { //Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	            if (newValue === this) throw new TypeError('A promise cannot be resolved with itself.');
	            if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
	                var then = newValue.then;
	                if (typeof then === 'function') {
	                    doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
	                    return;
	                }
	            }
	            this._state = true;
	            this._value = newValue;
	            finale.call(this);
	        } catch (e) {
	            reject.call(this, e);
	        }
	    }

	    function reject (newValue) {
	        this._state = false;
	        this._value = newValue;
	        finale.call(this);
	    }

	    function finale () {
	        for (var i = 0, len = this._deferreds.length; i < len; i++) {
	            handle.call(this, this._deferreds[i]);
	        }
	        this._deferreds = null;
	    }

	    function Handler (onFulfilled, onRejected, resolve, reject) {
	        this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	        this.onRejected  = typeof onRejected === 'function' ? onRejected : null;
	        this.resolve     = resolve;
	        this.reject      = reject;
	    }

	    /**
	     * Take a potentially misbehaving resolver function and make sure
	     * onFulfilled and onRejected are only called once.
	     *
	     * Makes no guarantees about asynchrony.
	     */
	    function doResolve (fn, onFulfilled, onRejected) {
	        var done = false;
	        try {
	            fn(function (value) {
	                if (done) return;
	                done = true;
	                onFulfilled(value);
	            }, function (reason) {
	                if (done) return;
	                done = true;
	                onRejected(reason);
	            })
	        } catch (ex) {
	            if (done) return;
	            done = true;
	            onRejected(ex);
	        }
	    }

	    Promise.prototype['catch'] = function (onRejected) {
	        return this.then(null, onRejected);
	    };

	    Promise.prototype.then = function (onFulfilled, onRejected) {
	        var me = this;
	        return new Promise(function (resolve, reject) {
	            handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
	        })
	    };

	    Promise.all = function () {
	        var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);

	        return new Promise(function (resolve, reject) {
	            if (args.length === 0) return resolve([]);
	            var remaining = args.length;

	            function res (i, val) {
	                try {
	                    if (val && (typeof val === 'object' || typeof val === 'function')) {
	                        var then = val.then;
	                        if (typeof then === 'function') {
	                            then.call(val, function (val) {
	                                res(i, val)
	                            }, reject);
	                            return;
	                        }
	                    }
	                    args[i] = val;
	                    if (--remaining === 0) {
	                        resolve(args);
	                    }
	                } catch (ex) {
	                    reject(ex);
	                }
	            }

	            for (var i = 0; i < args.length; i++) {
	                res(i, args[i]);
	            }
	        });
	    };

	    Promise.resolve = function (value) {
	        if (value && typeof value === 'object' && value.constructor === Promise) {
	            return value;
	        }

	        return new Promise(function (resolve) {
	            resolve(value);
	        });
	    };

	    Promise.reject = function (value) {
	        return new Promise(function (resolve, reject) {
	            reject(value);
	        });
	    };

	    Promise.race = function (values) {
	        return new Promise(function (resolve, reject) {
	            for (var i = 0, len = values.length; i < len; i++) {
	                values[i].then(resolve, reject);
	            }
	        });
	    };

	    /**
	     * Set the immediate function to execute callbacks
	     * @param fn {function} Function to execute
	     * @private
	     */
	    Promise._setImmediateFn = function _setImmediateFn (fn) {
	        asap = fn;
	    };


	    Promise.prototype.always = function (callback) {
	        var constructor = this.constructor;

	        return this.then(function (value) {
	            return constructor.resolve(callback()).then(function () {
	                return value;
	            });
	        }, function (reason) {
	            return constructor.resolve(callback()).then(function () {
	                throw reason;
	            });
	        });
	    };

	    if (typeof module !== 'undefined' && module.exports) {
	        module.exports = Promise;
	    } else if (!root.Promise) {
	        root.Promise = Promise;
	    }

	})(this);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate))

 },
/* 2 */
 function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(3).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate, __webpack_require__(2).clearImmediate))

 },
/* 3 */
 function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


 },
/* 4 */
 function(module, exports) {

	//@source https://xts.so/demo/compress/index.html

	// 早期版本的浏览器需要用BlobBuilder来构造Blob，创建一个通用构造器来兼容早期版本
	var BlobConstructor = ((function () {
	    try {
	        new Blob();
	        return true;
	    } catch (e) {
	        return false;
	    }
	})()) ? window.Blob : function (parts, opts) {
	    var bb = new (
	        window.BlobBuilder
	        || window.WebKitBlobBuilder
	        || window.MSBlobBuilder
	        || window.MozBlobBuilder
	    );
	    parts.forEach(function (p) {
	        bb.append(p);
	    });

	    return bb.getBlob(opts ? opts.type : undefined);
	};

	// Android上的AppleWebKit 534以前的内核存在一个Bug，
	// 导致FormData加入一个Blob对象后，上传的文件是0字节
	function hasFormDataBug () {
	    var bCheck = ~navigator.userAgent.indexOf('Android')
	        && ~navigator.vendor.indexOf('Google')
	        && !~navigator.userAgent.indexOf('Chrome');

	    // QQ X5浏览器也有这个BUG
	    return bCheck && navigator.userAgent.match(/AppleWebKit\/(\d+)/) && navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() <= 534 || /MQQBrowser/g.test(navigator.userAgent);
	}
	var FormDataShim=(function(){
	    var formDataShimNums = 0;
	    return function FormDataShim () {
	        var
	        // Store a reference to this
	        o        = this,
	    
	        // Data to be sent
	        parts = [],
	    
	        // Boundary parameter for separating the multipart values
	        boundary = Array(21).join('-') + (+new Date() * (1e16 * Math.random())).toString(36),
	    
	        // Store the current XHR send method so we can safely override it
	        oldSend  = XMLHttpRequest.prototype.send;
	        this.getParts = function () {
	            return parts.toString();
	        };
	        this.append   = function (name, value, filename) {
	            parts.push('--' + boundary + '\r\nContent-Disposition: form-data; name="' + name + '"');
	    
	            if (value instanceof Blob) {
	                parts.push('; filename="' + (filename || 'blob') + '"\r\nContent-Type: ' + value.type + '\r\n\r\n');
	                parts.push(value);
	            }
	            else {
	                parts.push('\r\n\r\n' + value);
	            }
	            parts.push('\r\n');
	        };
	    
	        formDataShimNums++;
	        XMLHttpRequest.prototype.send = function (val) {
	            var fr,
	                data,
	                oXHR = this;
	    
	            if (val === o) {
	                // Append the final boundary string
	                parts.push('--' + boundary + '--\r\n');
	                // Create the blob
	                data = new BlobConstructor(parts);
	    
	                // Set up and read the blob into an array to be sent
	                fr         = new FileReader();
	                fr.onload  = function () {
	                    oldSend.call(oXHR, fr.result);
	                };
	                fr.onerror = function (err) {
	                    throw err;
	                };
	                fr.readAsArrayBuffer(data);
	    
	                // Set the multipart content type and boudary
	                this.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
	                formDataShimNums--;
	                if(formDataShimNums == 0){
	                    XMLHttpRequest.prototype.send = oldSend;
	                }
	            }
	            else {
	                oldSend.call(this, val);
	            }
	        };
	    };
	})();


	module.exports = {
	    Blob    : BlobConstructor,
	    FormData: hasFormDataBug() ? FormDataShim : FormData
	};


 },
/* 5 */
 function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* exif */
	(function () {

	    var debug = false;

	    var root = this;

	    var EXIF = function (obj) {
	        if (obj instanceof EXIF) return obj;
	        if (!(this instanceof EXIF)) return new EXIF(obj);
	        this.EXIFwrapped = obj;
	    };

	    if (true) {
	        if (typeof module !== 'undefined' && module.exports) {
	            exports = module.exports = EXIF;
	        }
	        exports.EXIF = EXIF;
	    } else {
	        root.EXIF = EXIF;
	    }

	    var ExifTags = EXIF.Tags = {

	        // version tags
	        0x9000: "ExifVersion",             // EXIF version
	        0xA000: "FlashpixVersion",         // Flashpix format version

	        // colorspace tags
	        0xA001: "ColorSpace",              // Color space information tag

	        // image configuration
	        0xA002: "PixelXDimension",         // Valid width of meaningful image
	        0xA003: "PixelYDimension",         // Valid height of meaningful image
	        0x9101: "ComponentsConfiguration", // Information about channels
	        0x9102: "CompressedBitsPerPixel",  // Compressed bits per pixel

	        // user information
	        0x927C: "MakerNote",               // Any desired information written by the manufacturer
	        0x9286: "UserComment",             // Comments by user

	        // related file
	        0xA004: "RelatedSoundFile",        // Name of related sound file

	        // date and time
	        0x9003: "DateTimeOriginal",        // Date and time when the original image was generated
	        0x9004: "DateTimeDigitized",       // Date and time when the image was stored digitally
	        0x9290: "SubsecTime",              // Fractions of seconds for DateTime
	        0x9291: "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
	        0x9292: "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

	        // picture-taking conditions
	        0x829A: "ExposureTime",            // Exposure time (in seconds)
	        0x829D: "FNumber",                 // F number
	        0x8822: "ExposureProgram",         // Exposure program
	        0x8824: "SpectralSensitivity",     // Spectral sensitivity
	        0x8827: "ISOSpeedRatings",         // ISO speed rating
	        0x8828: "OECF",                    // Optoelectric conversion factor
	        0x9201: "ShutterSpeedValue",       // Shutter speed
	        0x9202: "ApertureValue",           // Lens aperture
	        0x9203: "BrightnessValue",         // Value of brightness
	        0x9204: "ExposureBias",            // Exposure bias
	        0x9205: "MaxApertureValue",        // Smallest F number of lens
	        0x9206: "SubjectDistance",         // Distance to subject in meters
	        0x9207: "MeteringMode",            // Metering mode
	        0x9208: "LightSource",             // Kind of light source
	        0x9209: "Flash",                   // Flash status
	        0x9214: "SubjectArea",             // Location and area of main subject
	        0x920A: "FocalLength",             // Focal length of the lens in mm
	        0xA20B: "FlashEnergy",             // Strobe energy in BCPS
	        0xA20C: "SpatialFrequencyResponse",    //
	        0xA20E: "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
	        0xA20F: "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
	        0xA210: "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
	        0xA214: "SubjectLocation",         // Location of subject in image
	        0xA215: "ExposureIndex",           // Exposure index selected on camera
	        0xA217: "SensingMethod",           // Image sensor type
	        0xA300: "FileSource",              // Image source (3 == DSC)
	        0xA301: "SceneType",               // Scene type (1 == directly photographed)
	        0xA302: "CFAPattern",              // Color filter array geometric pattern
	        0xA401: "CustomRendered",          // Special processing
	        0xA402: "ExposureMode",            // Exposure mode
	        0xA403: "WhiteBalance",            // 1 = auto white balance, 2 = manual
	        0xA404: "DigitalZoomRation",       // Digital zoom ratio
	        0xA405: "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
	        0xA406: "SceneCaptureType",        // Type of scene
	        0xA407: "GainControl",             // Degree of overall image gain adjustment
	        0xA408: "Contrast",                // Direction of contrast processing applied by camera
	        0xA409: "Saturation",              // Direction of saturation processing applied by camera
	        0xA40A: "Sharpness",               // Direction of sharpness processing applied by camera
	        0xA40B: "DeviceSettingDescription",    //
	        0xA40C: "SubjectDistanceRange",    // Distance to subject

	        // other tags
	        0xA005: "InteroperabilityIFDPointer",
	        0xA420: "ImageUniqueID"            // Identifier assigned uniquely to each image
	    };

	    var TiffTags = EXIF.TiffTags = {
	        0x0100: "ImageWidth",
	        0x0101: "ImageHeight",
	        0x8769: "ExifIFDPointer",
	        0x8825: "GPSInfoIFDPointer",
	        0xA005: "InteroperabilityIFDPointer",
	        0x0102: "BitsPerSample",
	        0x0103: "Compression",
	        0x0106: "PhotometricInterpretation",
	        0x0112: "Orientation",
	        0x0115: "SamplesPerPixel",
	        0x011C: "PlanarConfiguration",
	        0x0212: "YCbCrSubSampling",
	        0x0213: "YCbCrPositioning",
	        0x011A: "XResolution",
	        0x011B: "YResolution",
	        0x0128: "ResolutionUnit",
	        0x0111: "StripOffsets",
	        0x0116: "RowsPerStrip",
	        0x0117: "StripByteCounts",
	        0x0201: "JPEGInterchangeFormat",
	        0x0202: "JPEGInterchangeFormatLength",
	        0x012D: "TransferFunction",
	        0x013E: "WhitePoint",
	        0x013F: "PrimaryChromaticities",
	        0x0211: "YCbCrCoefficients",
	        0x0214: "ReferenceBlackWhite",
	        0x0132: "DateTime",
	        0x010E: "ImageDescription",
	        0x010F: "Make",
	        0x0110: "Model",
	        0x0131: "Software",
	        0x013B: "Artist",
	        0x8298: "Copyright"
	    };

	    var GPSTags = EXIF.GPSTags = {
	        0x0000: "GPSVersionID",
	        0x0001: "GPSLatitudeRef",
	        0x0002: "GPSLatitude",
	        0x0003: "GPSLongitudeRef",
	        0x0004: "GPSLongitude",
	        0x0005: "GPSAltitudeRef",
	        0x0006: "GPSAltitude",
	        0x0007: "GPSTimeStamp",
	        0x0008: "GPSSatellites",
	        0x0009: "GPSStatus",
	        0x000A: "GPSMeasureMode",
	        0x000B: "GPSDOP",
	        0x000C: "GPSSpeedRef",
	        0x000D: "GPSSpeed",
	        0x000E: "GPSTrackRef",
	        0x000F: "GPSTrack",
	        0x0010: "GPSImgDirectionRef",
	        0x0011: "GPSImgDirection",
	        0x0012: "GPSMapDatum",
	        0x0013: "GPSDestLatitudeRef",
	        0x0014: "GPSDestLatitude",
	        0x0015: "GPSDestLongitudeRef",
	        0x0016: "GPSDestLongitude",
	        0x0017: "GPSDestBearingRef",
	        0x0018: "GPSDestBearing",
	        0x0019: "GPSDestDistanceRef",
	        0x001A: "GPSDestDistance",
	        0x001B: "GPSProcessingMethod",
	        0x001C: "GPSAreaInformation",
	        0x001D: "GPSDateStamp",
	        0x001E: "GPSDifferential"
	    };

	    var StringValues = EXIF.StringValues = {
	        ExposureProgram     : {
	            0: "Not defined",
	            1: "Manual",
	            2: "Normal program",
	            3: "Aperture priority",
	            4: "Shutter priority",
	            5: "Creative program",
	            6: "Action program",
	            7: "Portrait mode",
	            8: "Landscape mode"
	        },
	        MeteringMode        : {
	            0  : "Unknown",
	            1  : "Average",
	            2  : "CenterWeightedAverage",
	            3  : "Spot",
	            4  : "MultiSpot",
	            5  : "Pattern",
	            6  : "Partial",
	            255: "Other"
	        },
	        LightSource         : {
	            0  : "Unknown",
	            1  : "Daylight",
	            2  : "Fluorescent",
	            3  : "Tungsten (incandescent light)",
	            4  : "Flash",
	            9  : "Fine weather",
	            10 : "Cloudy weather",
	            11 : "Shade",
	            12 : "Daylight fluorescent (D 5700 - 7100K)",
	            13 : "Day white fluorescent (N 4600 - 5400K)",
	            14 : "Cool white fluorescent (W 3900 - 4500K)",
	            15 : "White fluorescent (WW 3200 - 3700K)",
	            17 : "Standard light A",
	            18 : "Standard light B",
	            19 : "Standard light C",
	            20 : "D55",
	            21 : "D65",
	            22 : "D75",
	            23 : "D50",
	            24 : "ISO studio tungsten",
	            255: "Other"
	        },
	        Flash               : {
	            0x0000: "Flash did not fire",
	            0x0001: "Flash fired",
	            0x0005: "Strobe return light not detected",
	            0x0007: "Strobe return light detected",
	            0x0009: "Flash fired, compulsory flash mode",
	            0x000D: "Flash fired, compulsory flash mode, return light not detected",
	            0x000F: "Flash fired, compulsory flash mode, return light detected",
	            0x0010: "Flash did not fire, compulsory flash mode",
	            0x0018: "Flash did not fire, auto mode",
	            0x0019: "Flash fired, auto mode",
	            0x001D: "Flash fired, auto mode, return light not detected",
	            0x001F: "Flash fired, auto mode, return light detected",
	            0x0020: "No flash function",
	            0x0041: "Flash fired, red-eye reduction mode",
	            0x0045: "Flash fired, red-eye reduction mode, return light not detected",
	            0x0047: "Flash fired, red-eye reduction mode, return light detected",
	            0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
	            0x004D: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
	            0x004F: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
	            0x0059: "Flash fired, auto mode, red-eye reduction mode",
	            0x005D: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
	            0x005F: "Flash fired, auto mode, return light detected, red-eye reduction mode"
	        },
	        SensingMethod       : {
	            1: "Not defined",
	            2: "One-chip color area sensor",
	            3: "Two-chip color area sensor",
	            4: "Three-chip color area sensor",
	            5: "Color sequential area sensor",
	            7: "Trilinear sensor",
	            8: "Color sequential linear sensor"
	        },
	        SceneCaptureType    : {
	            0: "Standard",
	            1: "Landscape",
	            2: "Portrait",
	            3: "Night scene"
	        },
	        SceneType           : {
	            1: "Directly photographed"
	        },
	        CustomRendered      : {
	            0: "Normal process",
	            1: "Custom process"
	        },
	        WhiteBalance        : {
	            0: "Auto white balance",
	            1: "Manual white balance"
	        },
	        GainControl         : {
	            0: "None",
	            1: "Low gain up",
	            2: "High gain up",
	            3: "Low gain down",
	            4: "High gain down"
	        },
	        Contrast            : {
	            0: "Normal",
	            1: "Soft",
	            2: "Hard"
	        },
	        Saturation          : {
	            0: "Normal",
	            1: "Low saturation",
	            2: "High saturation"
	        },
	        Sharpness           : {
	            0: "Normal",
	            1: "Soft",
	            2: "Hard"
	        },
	        SubjectDistanceRange: {
	            0: "Unknown",
	            1: "Macro",
	            2: "Close view",
	            3: "Distant view"
	        },
	        FileSource          : {
	            3: "DSC"
	        },

	        Components: {
	            0: "",
	            1: "Y",
	            2: "Cb",
	            3: "Cr",
	            4: "R",
	            5: "G",
	            6: "B"
	        }
	    };

	    function addEvent (element, event, handler) {
	        if (element.addEventListener) {
	            element.addEventListener(event, handler, false);
	        } else if (element.attachEvent) {
	            element.attachEvent("on" + event, handler);
	        }
	    }

	    function imageHasData (img) {
	        return !!(img.exifdata);
	    }


	    function base64ToArrayBuffer (base64, contentType) {
	        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
	        base64     = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
	        var binary = atob(base64);
	        var len    = binary.length;
	        var buffer = new ArrayBuffer(len);
	        var view   = new Uint8Array(buffer);
	        for (var i = 0; i < len; i++) {
	            view[i] = binary.charCodeAt(i);
	        }
	        return buffer;
	    }

	    function objectURLToBlob (url, callback) {
	        var http          = new XMLHttpRequest();
	        http.open("GET", url, true);
	        http.responseType = "blob";
	        http.onload       = function (e) {
	            if (this.status == 200 || this.status === 0) {
	                callback(this.response);
	            }
	        };
	        http.send();
	    }

	    function getImageData (img, callback) {
	        function handleBinaryFile (binFile) {
	            var data     = findEXIFinJPEG(binFile);
	            var iptcdata = findIPTCinJPEG(binFile);
	            img.exifdata = data || {};
	            img.iptcdata = iptcdata || {};
	            if (callback) {
	                callback.call(img);
	            }
	        }

	        if (img.src) {
	            if (/^data\:/i.test(img.src)) { // Data URI
	                var arrayBuffer = base64ToArrayBuffer(img.src);
	                handleBinaryFile(arrayBuffer);

	            } else if (/^blob\:/i.test(img.src)) { // Object URL
	                var fileReader    = new FileReader();
	                fileReader.onload = function (e) {
	                    handleBinaryFile(e.target.result);
	                };
	                objectURLToBlob(img.src, function (blob) {
	                    fileReader.readAsArrayBuffer(blob);
	                });
	            } else {
	                var http          = new XMLHttpRequest();
	                http.onload       = function () {
	                    if (this.status == 200 || this.status === 0) {
	                        handleBinaryFile(http.response);
	                    } else {
	                        callback(new Error("Could not load image"));
	                    }
	                    http = null;
	                };
	                http.open("GET", img.src, true);
	                http.responseType = "arraybuffer";
	                http.send(null);
	            }
	        } else if (window.FileReader && (img instanceof window.Blob || img instanceof window.File)) {
	            var fileReader    = new FileReader();
	            fileReader.onload = function (e) {
	                if (debug) console.log("Got file of length " + e.target.result.byteLength);
	                handleBinaryFile(e.target.result);
	            };

	            fileReader.readAsArrayBuffer(img);
	        }
	    }

	    function findEXIFinJPEG (file) {
	        var dataView = new DataView(file);

	        if (debug) console.log("Got file of length " + file.byteLength);
	        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
	            if (debug) console.log("Not a valid JPEG");
	            return false; // not a valid jpeg
	        }

	        var offset = 2,
	            length = file.byteLength,
	            marker;

	        while (offset < length) {
	            if (dataView.getUint8(offset) != 0xFF) {
	                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
	                return false; // not a valid marker, something is wrong
	            }

	            marker = dataView.getUint8(offset + 1);
	            if (debug) console.log(marker);

	            // we could implement handling for other markers here,
	            // but we're only looking for 0xFFE1 for EXIF data

	            if (marker == 225) {
	                if (debug) console.log("Found 0xFFE1 marker");

	                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

	                // offset += 2 + file.getShortAt(offset+2, true);

	            } else {
	                offset += 2 + dataView.getUint16(offset + 2);
	            }

	        }

	    }

	    function findIPTCinJPEG (file) {
	        var dataView = new DataView(file);

	        if (debug) console.log("Got file of length " + file.byteLength);
	        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
	            if (debug) console.log("Not a valid JPEG");
	            return false; // not a valid jpeg
	        }

	        var offset = 2,
	            length = file.byteLength;


	        var isFieldSegmentStart = function (dataView, offset) {
	            return (
	                dataView.getUint8(offset) === 0x38 &&
	                dataView.getUint8(offset + 1) === 0x42 &&
	                dataView.getUint8(offset + 2) === 0x49 &&
	                dataView.getUint8(offset + 3) === 0x4D &&
	                dataView.getUint8(offset + 4) === 0x04 &&
	                dataView.getUint8(offset + 5) === 0x04
	            );
	        };

	        while (offset < length) {

	            if (isFieldSegmentStart(dataView, offset)) {

	                // Get the length of the name header (which is padded to an even number of bytes)
	                var nameHeaderLength = dataView.getUint8(offset + 7);
	                if (nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
	                // Check for pre photoshop 6 format
	                if (nameHeaderLength === 0) {
	                    // Always 4
	                    nameHeaderLength = 4;
	                }

	                var startOffset   = offset + 8 + nameHeaderLength;
	                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

	                return readIPTCData(file, startOffset, sectionLength);

	                break;

	            }


	            // Not the marker, continue searching
	            offset++;

	        }

	    }

	    var IptcFieldMap = {
	        0x78: 'caption',
	        0x6E: 'credit',
	        0x19: 'keywords',
	        0x37: 'dateCreated',
	        0x50: 'byline',
	        0x55: 'bylineTitle',
	        0x7A: 'captionWriter',
	        0x69: 'headline',
	        0x74: 'copyright',
	        0x0F: 'category'
	    };

	    function readIPTCData (file, startOffset, sectionLength) {
	        var dataView        = new DataView(file);
	        var data            = {};
	        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
	        var segmentStartPos = startOffset;
	        while (segmentStartPos < startOffset + sectionLength) {
	            if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
	                segmentType = dataView.getUint8(segmentStartPos + 2);
	                if (segmentType in IptcFieldMap) {
	                    dataSize    = dataView.getInt16(segmentStartPos + 3);
	                    segmentSize = dataSize + 5;
	                    fieldName   = IptcFieldMap[segmentType];
	                    fieldValue  = getStringFromDB(dataView, segmentStartPos + 5, dataSize);
	                    // Check if we already stored a value with this name
	                    if (data.hasOwnProperty(fieldName)) {
	                        // Value already stored with this name, create multivalue field
	                        if (data[fieldName] instanceof Array) {
	                            data[fieldName].push(fieldValue);
	                        }
	                        else {
	                            data[fieldName] = [data[fieldName], fieldValue];
	                        }
	                    }
	                    else {
	                        data[fieldName] = fieldValue;
	                    }
	                }

	            }
	            segmentStartPos++;
	        }
	        return data;
	    }


	    function readTags (file, tiffStart, dirStart, strings, bigEnd) {
	        var entries = file.getUint16(dirStart, !bigEnd),
	            tags    = {},
	            entryOffset, tag,
	            i;

	        for (i = 0; i < entries; i++) {
	            entryOffset = dirStart + i * 12 + 2;
	            tag         = strings[file.getUint16(entryOffset, !bigEnd)];
	            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
	            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
	        }
	        return tags;
	    }


	    function readTagValue (file, entryOffset, tiffStart, dirStart, bigEnd) {
	        var type        = file.getUint16(entryOffset + 2, !bigEnd),
	            numValues   = file.getUint32(entryOffset + 4, !bigEnd),
	            valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart,
	            offset,
	            vals, val, n,
	            numerator, denominator;

	        switch (type) {
	            case 1: // byte, 8-bit unsigned int
	            case 7: // undefined, 8-bit byte, value depending on field
	                if (numValues == 1) {
	                    return file.getUint8(entryOffset + 8, !bigEnd);
	                } else {
	                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
	                    vals   = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getUint8(offset + n);
	                    }
	                    return vals;
	                }

	            case 2: // ascii, 8-bit byte
	                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
	                return getStringFromDB(file, offset, numValues - 1);

	            case 3: // short, 16 bit int
	                if (numValues == 1) {
	                    return file.getUint16(entryOffset + 8, !bigEnd);
	                } else {
	                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
	                    vals   = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
	                    }
	                    return vals;
	                }

	            case 4: // long, 32 bit int
	                if (numValues == 1) {
	                    return file.getUint32(entryOffset + 8, !bigEnd);
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
	                    }
	                    return vals;
	                }

	            case 5:    // rational = two long values, first is numerator, second is denominator
	                if (numValues == 1) {
	                    numerator       = file.getUint32(valueOffset, !bigEnd);
	                    denominator     = file.getUint32(valueOffset + 4, !bigEnd);
	                    val             = new Number(numerator / denominator);
	                    val.numerator   = numerator;
	                    val.denominator = denominator;
	                    return val;
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        numerator           = file.getUint32(valueOffset + 8 * n, !bigEnd);
	                        denominator         = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
	                        vals[n]             = new Number(numerator / denominator);
	                        vals[n].numerator   = numerator;
	                        vals[n].denominator = denominator;
	                    }
	                    return vals;
	                }

	            case 9: // slong, 32 bit signed int
	                if (numValues == 1) {
	                    return file.getInt32(entryOffset + 8, !bigEnd);
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
	                    }
	                    return vals;
	                }

	            case 10: // signed rational, two slongs, first is numerator, second is denominator
	                if (numValues == 1) {
	                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
	                } else {
	                    vals = [];
	                    for (n = 0; n < numValues; n++) {
	                        vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
	                    }
	                    return vals;
	                }
	        }
	    }

	    function getStringFromDB (buffer, start, length) {
	        var outstr = "", n;
	        for (n = start; n < start + length; n++) {
	            outstr += String.fromCharCode(buffer.getUint8(n));
	        }
	        return outstr;
	    }

	    function readEXIFData (file, start) {
	        if (getStringFromDB(file, start, 4) != "Exif") {
	            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
	            return false;
	        }

	        var bigEnd,
	            tags, tag,
	            exifData, gpsData,
	            tiffOffset = start + 6;

	        // test for TIFF validity and endianness
	        if (file.getUint16(tiffOffset) == 0x4949) {
	            bigEnd = false;
	        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
	            bigEnd = true;
	        } else {
	            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
	            return false;
	        }

	        if (file.getUint16(tiffOffset + 2, !bigEnd) != 0x002A) {
	            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
	            return false;
	        }

	        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

	        if (firstIFDOffset < 0x00000008) {
	            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset + 4, !bigEnd));
	            return false;
	        }

	        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

	        if (tags.ExifIFDPointer) {
	            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
	            for (tag in exifData) {
	                switch (tag) {
	                    case "LightSource" :
	                    case "Flash" :
	                    case "MeteringMode" :
	                    case "ExposureProgram" :
	                    case "SensingMethod" :
	                    case "SceneCaptureType" :
	                    case "SceneType" :
	                    case "CustomRendered" :
	                    case "WhiteBalance" :
	                    case "GainControl" :
	                    case "Contrast" :
	                    case "Saturation" :
	                    case "Sharpness" :
	                    case "SubjectDistanceRange" :
	                    case "FileSource" :
	                        exifData[tag] = StringValues[tag][exifData[tag]];
	                        break;

	                    case "ExifVersion" :
	                    case "FlashpixVersion" :
	                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
	                        break;

	                    case "ComponentsConfiguration" :
	                        exifData[tag] =
	                            StringValues.Components[exifData[tag][0]] +
	                            StringValues.Components[exifData[tag][1]] +
	                            StringValues.Components[exifData[tag][2]] +
	                            StringValues.Components[exifData[tag][3]];
	                        break;
	                }
	                tags[tag] = exifData[tag];
	            }
	        }

	        if (tags.GPSInfoIFDPointer) {
	            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
	            for (tag in gpsData) {
	                switch (tag) {
	                    case "GPSVersionID" :
	                        gpsData[tag] = gpsData[tag][0] +
	                            "." + gpsData[tag][1] +
	                            "." + gpsData[tag][2] +
	                            "." + gpsData[tag][3];
	                        break;
	                }
	                tags[tag] = gpsData[tag];
	            }
	        }

	        return tags;
	    }

	    EXIF.getData = function (img, callback) {
	        if ((img instanceof Image || img instanceof HTMLImageElement) && !img.complete) return false;

	        if (!imageHasData(img)) {
	            getImageData(img, callback);
	        } else {
	            if (callback) {
	                callback.call(img);
	            }
	        }
	        return true;
	    }

	    EXIF.getTag = function (img, tag) {
	        if (!imageHasData(img)) return;
	        return img.exifdata[tag];
	    }

	    EXIF.getAllTags = function (img) {
	        if (!imageHasData(img)) return {};
	        var a,
	            data = img.exifdata,
	            tags = {};
	        for (a in data) {
	            if (data.hasOwnProperty(a)) {
	                tags[a] = data[a];
	            }
	        }
	        return tags;
	    }

	    EXIF.pretty = function (img) {
	        if (!imageHasData(img)) return "";
	        var a,
	            data      = img.exifdata,
	            strPretty = "";
	        for (a in data) {
	            if (data.hasOwnProperty(a)) {
	                if (typeof data[a] == "object") {
	                    if (data[a] instanceof Number) {
	                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
	                    } else {
	                        strPretty += a + " : [" + data[a].length + " values]\r\n";
	                    }
	                } else {
	                    strPretty += a + " : " + data[a] + "\r\n";
	                }
	            }
	        }
	        return strPretty;
	    }

	    EXIF.readFromBinaryFile = function (file) {
	        return findEXIFinJPEG(file);
	    }

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return EXIF;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	}.call(this));

 }
 ])
});
;