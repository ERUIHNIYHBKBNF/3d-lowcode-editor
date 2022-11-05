(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function qg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ts={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),$g=Symbol.for("react.portal"),Yg=Symbol.for("react.fragment"),Zg=Symbol.for("react.strict_mode"),Kg=Symbol.for("react.profiler"),Qg=Symbol.for("react.provider"),Jg=Symbol.for("react.context"),e0=Symbol.for("react.forward_ref"),t0=Symbol.for("react.suspense"),n0=Symbol.for("react.memo"),i0=Symbol.for("react.lazy"),Df=Symbol.iterator;function r0(n){return n===null||typeof n!="object"?null:(n=Df&&n[Df]||n["@@iterator"],typeof n=="function"?n:null)}var sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},op=Object.assign,ap={};function ps(n,e,t){this.props=n,this.context=e,this.refs=ap,this.updater=t||sp}ps.prototype.isReactComponent={};ps.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ps.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function lp(){}lp.prototype=ps.prototype;function Ac(n,e,t){this.props=n,this.context=e,this.refs=ap,this.updater=t||sp}var Lc=Ac.prototype=new lp;Lc.constructor=Ac;op(Lc,ps.prototype);Lc.isPureReactComponent=!0;var Rf=Array.isArray,up=Object.prototype.hasOwnProperty,Pc={current:null},cp={key:!0,ref:!0,__self:!0,__source:!0};function fp(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)up.call(e,i)&&!cp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:go,type:n,key:s,ref:o,props:r,_owner:Pc.current}}function s0(n,e){return{$$typeof:go,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Dc(n){return typeof n=="object"&&n!==null&&n.$$typeof===go}function o0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var If=/\/+/g;function Ml(n,e){return typeof n=="object"&&n!==null&&n.key!=null?o0(""+n.key):e.toString(36)}function fa(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case go:case $g:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ml(o,0):i,Rf(r)?(t="",n!=null&&(t=n.replace(If,"$&/")+"/"),fa(r,e,t,"",function(u){return u})):r!=null&&(Dc(r)&&(r=s0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(If,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ml(s,a);o+=fa(s,e,t,l,r)}else if(l=r0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ml(s,a++),o+=fa(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function To(n,e,t){if(n==null)return n;var i=[],r=0;return fa(n,i,"","",function(s){return e.call(t,s,r++)}),i}function a0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var It={current:null},da={transition:null},l0={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:da,ReactCurrentOwner:Pc};Le.Children={map:To,forEach:function(n,e,t){To(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return To(n,function(){e++}),e},toArray:function(n){return To(n,function(e){return e})||[]},only:function(n){if(!Dc(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Le.Component=ps;Le.Fragment=Yg;Le.Profiler=Kg;Le.PureComponent=Ac;Le.StrictMode=Zg;Le.Suspense=t0;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l0;Le.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=op({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pc.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)up.call(e,l)&&!cp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:go,type:n.type,key:r,ref:s,props:i,_owner:o}};Le.createContext=function(n){return n={$$typeof:Jg,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Qg,_context:n},n.Consumer=n};Le.createElement=fp;Le.createFactory=function(n){var e=fp.bind(null,n);return e.type=n,e};Le.createRef=function(){return{current:null}};Le.forwardRef=function(n){return{$$typeof:e0,render:n}};Le.isValidElement=Dc;Le.lazy=function(n){return{$$typeof:i0,_payload:{_status:-1,_result:n},_init:a0}};Le.memo=function(n,e){return{$$typeof:n0,type:n,compare:e===void 0?null:e}};Le.startTransition=function(n){var e=da.transition;da.transition={};try{n()}finally{da.transition=e}};Le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Le.useCallback=function(n,e){return It.current.useCallback(n,e)};Le.useContext=function(n){return It.current.useContext(n)};Le.useDebugValue=function(){};Le.useDeferredValue=function(n){return It.current.useDeferredValue(n)};Le.useEffect=function(n,e){return It.current.useEffect(n,e)};Le.useId=function(){return It.current.useId()};Le.useImperativeHandle=function(n,e,t){return It.current.useImperativeHandle(n,e,t)};Le.useInsertionEffect=function(n,e){return It.current.useInsertionEffect(n,e)};Le.useLayoutEffect=function(n,e){return It.current.useLayoutEffect(n,e)};Le.useMemo=function(n,e){return It.current.useMemo(n,e)};Le.useReducer=function(n,e,t){return It.current.useReducer(n,e,t)};Le.useRef=function(n){return It.current.useRef(n)};Le.useState=function(n){return It.current.useState(n)};Le.useSyncExternalStore=function(n,e,t){return It.current.useSyncExternalStore(n,e,t)};Le.useTransition=function(){return It.current.useTransition()};Le.version="18.2.0";(function(n){n.exports=Le})(ts);const u0=qg(ts.exports);var Au={},dp={exports:{}},Kt={},hp={exports:{}},pp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,L){var D=I.length;I.push(L);e:for(;0<D;){var $=D-1>>>1,W=I[$];if(0<r(W,L))I[$]=L,I[D]=W,D=$;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var L=I[0],D=I.pop();if(D!==L){I[0]=D;e:for(var $=0,W=I.length,te=W>>>1;$<te;){var oe=2*($+1)-1,_e=I[oe],G=oe+1,Pe=I[G];if(0>r(_e,D))G<W&&0>r(Pe,_e)?(I[$]=Pe,I[G]=D,$=G):(I[$]=_e,I[oe]=D,$=oe);else if(G<W&&0>r(Pe,D))I[$]=Pe,I[G]=D,$=G;else break e}}return L}function r(I,L){var D=I.sortIndex-L.sortIndex;return D!==0?D:I.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,x=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var L=t(u);L!==null;){if(L.callback===null)i(u);else if(L.startTime<=I)i(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=t(u)}}function y(I){if(p=!1,_(I),!x)if(t(l)!==null)x=!0,Y(w);else{var L=t(u);L!==null&&Q(y,L.startTime-I)}}function w(I,L){x=!1,p&&(p=!1,m(S),S=-1),g=!0;var D=d;try{for(_(L),f=t(l);f!==null&&(!(f.expirationTime>L)||I&&!q());){var $=f.callback;if(typeof $=="function"){f.callback=null,d=f.priorityLevel;var W=$(f.expirationTime<=L);L=n.unstable_now(),typeof W=="function"?f.callback=W:f===t(l)&&i(l),_(L)}else i(l);f=t(l)}if(f!==null)var te=!0;else{var oe=t(u);oe!==null&&Q(y,oe.startTime-L),te=!1}return te}finally{f=null,d=D,g=!1}}var T=!1,A=null,S=-1,b=5,R=-1;function q(){return!(n.unstable_now()-R<b)}function ee(){if(A!==null){var I=n.unstable_now();R=I;var L=!0;try{L=A(!0,I)}finally{L?V():(T=!1,A=null)}}else T=!1}var V;if(typeof v=="function")V=function(){v(ee)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,X=k.port2;k.port1.onmessage=ee,V=function(){X.postMessage(null)}}else V=function(){h(ee,0)};function Y(I){A=I,T||(T=!0,V())}function Q(I,L){S=h(function(){I(n.unstable_now())},L)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){x||g||(x=!0,Y(w))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(d){case 1:case 2:case 3:var L=3;break;default:L=d}var D=d;d=L;try{return I()}finally{d=D}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,L){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var D=d;d=I;try{return L()}finally{d=D}},n.unstable_scheduleCallback=function(I,L,D){var $=n.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?$+D:$):D=$,I){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=D+W,I={id:c++,callback:L,priorityLevel:I,startTime:D,expirationTime:W,sortIndex:-1},D>$?(I.sortIndex=D,e(u,I),t(l)===null&&I===t(u)&&(p?(m(S),S=-1):p=!0,Q(y,D-$))):(I.sortIndex=W,e(l,I),x||g||(x=!0,Y(w))),I},n.unstable_shouldYield=q,n.unstable_wrapCallback=function(I){var L=d;return function(){var D=d;d=L;try{return I.apply(this,arguments)}finally{d=D}}}})(pp);(function(n){n.exports=pp})(hp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=ts.exports,Zt=hp.exports;function Z(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gp=new Set,Zs={};function dr(n,e){ns(n,e),ns(n+"Capture",e)}function ns(n,e){for(Zs[n]=e,n=0;n<e.length;n++)gp.add(e[n])}var ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,c0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nf={},zf={};function f0(n){return Lu.call(zf,n)?!0:Lu.call(Nf,n)?!1:c0.test(n)?zf[n]=!0:(Nf[n]=!0,!1)}function d0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function h0(n,e,t,i){if(e===null||typeof e>"u"||d0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){yt[n]=new Nt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];yt[e]=new Nt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){yt[n]=new Nt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){yt[n]=new Nt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){yt[n]=new Nt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){yt[n]=new Nt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){yt[n]=new Nt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){yt[n]=new Nt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){yt[n]=new Nt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Rc=/[\-:]([a-z])/g;function Ic(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Rc,Ic);yt[e]=new Nt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Rc,Ic);yt[e]=new Nt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Rc,Ic);yt[e]=new Nt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){yt[n]=new Nt(n,1,!1,n.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){yt[n]=new Nt(n,1,!1,n.toLowerCase(),null,!0,!0)});function Nc(n,e,t,i){var r=yt.hasOwnProperty(e)?yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(h0(e,t,r,i)&&(t=null),i||r===null?f0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ri=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),Nr=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),zc=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),vp=Symbol.for("react.provider"),_p=Symbol.for("react.context"),Fc=Symbol.for("react.forward_ref"),Du=Symbol.for("react.suspense"),Ru=Symbol.for("react.suspense_list"),kc=Symbol.for("react.memo"),pi=Symbol.for("react.lazy"),xp=Symbol.for("react.offscreen"),Ff=Symbol.iterator;function ys(n){return n===null||typeof n!="object"?null:(n=Ff&&n[Ff]||n["@@iterator"],typeof n=="function"?n:null)}var Ze=Object.assign,wl;function Rs(n){if(wl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);wl=e&&e[1]||""}return`
`+wl+n}var El=!1;function Tl(n,e){if(!n||El)return"";El=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{El=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Rs(n):""}function p0(n){switch(n.tag){case 5:return Rs(n.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 2:case 15:return n=Tl(n.type,!1),n;case 11:return n=Tl(n.type.render,!1),n;case 1:return n=Tl(n.type,!0),n;default:return""}}function Iu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case zr:return"Fragment";case Nr:return"Portal";case Pu:return"Profiler";case zc:return"StrictMode";case Du:return"Suspense";case Ru:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case _p:return(n.displayName||"Context")+".Consumer";case vp:return(n._context.displayName||"Context")+".Provider";case Fc:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kc:return e=n.displayName||null,e!==null?e:Iu(n.type)||"Memo";case pi:e=n._payload,n=n._init;try{return Iu(n(e))}catch{}}return null}function m0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(e);case 8:return e===zc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function yp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function g0(n){var e=yp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function bo(n){n._valueTracker||(n._valueTracker=g0(n))}function Sp(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=yp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ta(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Nu(n,e){var t=e.checked;return Ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function kf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Pi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mp(n,e){e=e.checked,e!=null&&Nc(n,"checked",e,!1)}function zu(n,e){Mp(n,e);var t=Pi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Fu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Fu(n,e.type,Pi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Uf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Fu(n,e,t){(e!=="number"||Ta(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Is=Array.isArray;function qr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Pi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ku(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return Ze({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Of(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Z(92));if(Is(t)){if(1<t.length)throw Error(Z(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Pi(t)}}function wp(n,e){var t=Pi(e.value),i=Pi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Bf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Ep(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Ep(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ao,Tp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ao.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ks(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Os={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v0=["Webkit","ms","Moz","O"];Object.keys(Os).forEach(function(n){v0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Os[e]=Os[n]})});function Cp(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Os.hasOwnProperty(n)&&Os[n]?(""+e).trim():e+"px"}function bp(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Cp(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var _0=Ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ou(n,e){if(e){if(_0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function Bu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vu=null;function Uc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Gu=null,$r=null,Yr=null;function Vf(n){if(n=xo(n)){if(typeof Gu!="function")throw Error(Z(280));var e=n.stateNode;e&&(e=tl(e),Gu(n.stateNode,n.type,e))}}function Ap(n){$r?Yr?Yr.push(n):Yr=[n]:$r=n}function Lp(){if($r){var n=$r,e=Yr;if(Yr=$r=null,Vf(n),e)for(n=0;n<e.length;n++)Vf(e[n])}}function Pp(n,e){return n(e)}function Dp(){}var Cl=!1;function Rp(n,e,t){if(Cl)return n(e,t);Cl=!0;try{return Pp(n,e,t)}finally{Cl=!1,($r!==null||Yr!==null)&&(Dp(),Lp())}}function Qs(n,e){var t=n.stateNode;if(t===null)return null;var i=tl(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Z(231,e,typeof t));return t}var Hu=!1;if(ei)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{Hu=!1}function x0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Bs=!1,Ca=null,ba=!1,Wu=null,y0={onError:function(n){Bs=!0,Ca=n}};function S0(n,e,t,i,r,s,o,a,l){Bs=!1,Ca=null,x0.apply(y0,arguments)}function M0(n,e,t,i,r,s,o,a,l){if(S0.apply(this,arguments),Bs){if(Bs){var u=Ca;Bs=!1,Ca=null}else throw Error(Z(198));ba||(ba=!0,Wu=u)}}function hr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ip(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Gf(n){if(hr(n)!==n)throw Error(Z(188))}function w0(n){var e=n.alternate;if(!e){if(e=hr(n),e===null)throw Error(Z(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Gf(r),n;if(s===i)return Gf(r),e;s=s.sibling}throw Error(Z(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Z(189))}}if(t.alternate!==i)throw Error(Z(190))}if(t.tag!==3)throw Error(Z(188));return t.stateNode.current===t?n:e}function Np(n){return n=w0(n),n!==null?zp(n):null}function zp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=zp(n);if(e!==null)return e;n=n.sibling}return null}var Fp=Zt.unstable_scheduleCallback,Hf=Zt.unstable_cancelCallback,E0=Zt.unstable_shouldYield,T0=Zt.unstable_requestPaint,Je=Zt.unstable_now,C0=Zt.unstable_getCurrentPriorityLevel,Oc=Zt.unstable_ImmediatePriority,kp=Zt.unstable_UserBlockingPriority,Aa=Zt.unstable_NormalPriority,b0=Zt.unstable_LowPriority,Up=Zt.unstable_IdlePriority,Ka=null,zn=null;function A0(n){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(Ka,n,void 0,(n.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:D0,L0=Math.log,P0=Math.LN2;function D0(n){return n>>>=0,n===0?32:31-(L0(n)/P0|0)|0}var Lo=64,Po=4194304;function Ns(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function La(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ns(a):(s&=o,s!==0&&(i=Ns(s)))}else o=t&~r,o!==0?i=Ns(o):s!==0&&(i=Ns(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Tn(e),r=1<<t,i|=n[t],e&=~r;return i}function R0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I0(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Tn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=R0(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ju(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Op(){var n=Lo;return Lo<<=1,(Lo&4194240)===0&&(Lo=64),n}function bl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function vo(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Tn(e),n[e]=t}function N0(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Tn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Bc(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Tn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ue=0;function Bp(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Vp,Vc,Gp,Hp,Wp,Xu=!1,Do=[],Si=null,Mi=null,wi=null,Js=new Map,eo=new Map,gi=[],z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wf(n,e){switch(n){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":Mi=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":Js.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(e.pointerId)}}function Ms(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xo(e),e!==null&&Vc(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function F0(n,e,t,i,r){switch(e){case"focusin":return Si=Ms(Si,n,e,t,i,r),!0;case"dragenter":return Mi=Ms(Mi,n,e,t,i,r),!0;case"mouseover":return wi=Ms(wi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Js.set(s,Ms(Js.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,eo.set(s,Ms(eo.get(s)||null,n,e,t,i,r)),!0}return!1}function jp(n){var e=qi(n.target);if(e!==null){var t=hr(e);if(t!==null){if(e=t.tag,e===13){if(e=Ip(t),e!==null){n.blockedOn=e,Wp(n.priority,function(){Gp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ha(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=qu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Vu=i,t.target.dispatchEvent(i),Vu=null}else return e=xo(t),e!==null&&Vc(e),n.blockedOn=t,!1;e.shift()}return!0}function jf(n,e,t){ha(n)&&t.delete(e)}function k0(){Xu=!1,Si!==null&&ha(Si)&&(Si=null),Mi!==null&&ha(Mi)&&(Mi=null),wi!==null&&ha(wi)&&(wi=null),Js.forEach(jf),eo.forEach(jf)}function ws(n,e){n.blockedOn===e&&(n.blockedOn=null,Xu||(Xu=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,k0)))}function to(n){function e(r){return ws(r,n)}if(0<Do.length){ws(Do[0],n);for(var t=1;t<Do.length;t++){var i=Do[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Si!==null&&ws(Si,n),Mi!==null&&ws(Mi,n),wi!==null&&ws(wi,n),Js.forEach(e),eo.forEach(e),t=0;t<gi.length;t++)i=gi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<gi.length&&(t=gi[0],t.blockedOn===null);)jp(t),t.blockedOn===null&&gi.shift()}var Zr=ri.ReactCurrentBatchConfig,Pa=!0;function U0(n,e,t,i){var r=Ue,s=Zr.transition;Zr.transition=null;try{Ue=1,Gc(n,e,t,i)}finally{Ue=r,Zr.transition=s}}function O0(n,e,t,i){var r=Ue,s=Zr.transition;Zr.transition=null;try{Ue=4,Gc(n,e,t,i)}finally{Ue=r,Zr.transition=s}}function Gc(n,e,t,i){if(Pa){var r=qu(n,e,t,i);if(r===null)kl(n,e,i,Da,t),Wf(n,i);else if(F0(r,n,e,t,i))i.stopPropagation();else if(Wf(n,i),e&4&&-1<z0.indexOf(n)){for(;r!==null;){var s=xo(r);if(s!==null&&Vp(s),s=qu(n,e,t,i),s===null&&kl(n,e,i,Da,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else kl(n,e,i,null,t)}}var Da=null;function qu(n,e,t,i){if(Da=null,n=Uc(i),n=qi(n),n!==null)if(e=hr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ip(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Da=n,null}function Xp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C0()){case Oc:return 1;case kp:return 4;case Aa:case b0:return 16;case Up:return 536870912;default:return 16}default:return 16}}var _i=null,Hc=null,pa=null;function qp(){if(pa)return pa;var n,e=Hc,t=e.length,i,r="value"in _i?_i.value:_i.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return pa=r.slice(n,1<i?1-i:void 0)}function ma(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ro(){return!0}function Xf(){return!1}function Qt(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ro:Xf,this.isPropagationStopped=Xf,this}return Ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=Qt(ms),_o=Ze({},ms,{view:0,detail:0}),B0=Qt(_o),Al,Ll,Es,Qa=Ze({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Es&&(Es&&n.type==="mousemove"?(Al=n.screenX-Es.screenX,Ll=n.screenY-Es.screenY):Ll=Al=0,Es=n),Al)},movementY:function(n){return"movementY"in n?n.movementY:Ll}}),qf=Qt(Qa),V0=Ze({},Qa,{dataTransfer:0}),G0=Qt(V0),H0=Ze({},_o,{relatedTarget:0}),Pl=Qt(H0),W0=Ze({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=Qt(W0),X0=Ze({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),q0=Qt(X0),$0=Ze({},ms,{data:0}),$f=Qt($0),Y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=K0[n])?!!e[n]:!1}function jc(){return Q0}var J0=Ze({},_o,{key:function(n){if(n.key){var e=Y0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Z0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(n){return n.type==="keypress"?ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ev=Qt(J0),tv=Ze({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=Qt(tv),nv=Ze({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),iv=Qt(nv),rv=Ze({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=Qt(rv),ov=Ze({},Qa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),av=Qt(ov),lv=[9,13,27,32],Xc=ei&&"CompositionEvent"in window,Vs=null;ei&&"documentMode"in document&&(Vs=document.documentMode);var uv=ei&&"TextEvent"in window&&!Vs,$p=ei&&(!Xc||Vs&&8<Vs&&11>=Vs),Zf=String.fromCharCode(32),Kf=!1;function Yp(n,e){switch(n){case"keyup":return lv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fr=!1;function cv(n,e){switch(n){case"compositionend":return Zp(e);case"keypress":return e.which!==32?null:(Kf=!0,Zf);case"textInput":return n=e.data,n===Zf&&Kf?null:n;default:return null}}function fv(n,e){if(Fr)return n==="compositionend"||!Xc&&Yp(n,e)?(n=qp(),pa=Hc=_i=null,Fr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $p&&e.locale!=="ko"?null:e.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!dv[n.type]:e==="textarea"}function Kp(n,e,t,i){Ap(i),e=Ra(e,"onChange"),0<e.length&&(t=new Wc("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Gs=null,no=null;function hv(n){lm(n,0)}function Ja(n){var e=Or(n);if(Sp(e))return n}function pv(n,e){if(n==="change")return e}var Qp=!1;if(ei){var Dl;if(ei){var Rl="oninput"in document;if(!Rl){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),Rl=typeof Jf.oninput=="function"}Dl=Rl}else Dl=!1;Qp=Dl&&(!document.documentMode||9<document.documentMode)}function ed(){Gs&&(Gs.detachEvent("onpropertychange",Jp),no=Gs=null)}function Jp(n){if(n.propertyName==="value"&&Ja(no)){var e=[];Kp(e,no,n,Uc(n)),Rp(hv,e)}}function mv(n,e,t){n==="focusin"?(ed(),Gs=e,no=t,Gs.attachEvent("onpropertychange",Jp)):n==="focusout"&&ed()}function gv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ja(no)}function vv(n,e){if(n==="click")return Ja(e)}function _v(n,e){if(n==="input"||n==="change")return Ja(e)}function xv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var bn=typeof Object.is=="function"?Object.is:xv;function io(n,e){if(bn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Lu.call(e,r)||!bn(n[r],e[r]))return!1}return!0}function td(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function nd(n,e){var t=td(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=td(t)}}function em(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?em(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function tm(){for(var n=window,e=Ta();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ta(n.document)}return e}function qc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function yv(n){var e=tm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&em(t.ownerDocument.documentElement,t)){if(i!==null&&qc(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=nd(t,s);var o=nd(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Sv=ei&&"documentMode"in document&&11>=document.documentMode,kr=null,$u=null,Hs=null,Yu=!1;function id(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yu||kr==null||kr!==Ta(i)||(i=kr,"selectionStart"in i&&qc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hs&&io(Hs,i)||(Hs=i,i=Ra($u,"onSelect"),0<i.length&&(e=new Wc("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=kr)))}function Io(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ur={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Il={},nm={};ei&&(nm=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function el(n){if(Il[n])return Il[n];if(!Ur[n])return n;var e=Ur[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in nm)return Il[n]=e[t];return n}var im=el("animationend"),rm=el("animationiteration"),sm=el("animationstart"),om=el("transitionend"),am=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(n,e){am.set(n,e),dr(e,[n])}for(var Nl=0;Nl<rd.length;Nl++){var zl=rd[Nl],Mv=zl.toLowerCase(),wv=zl[0].toUpperCase()+zl.slice(1);Ri(Mv,"on"+wv)}Ri(im,"onAnimationEnd");Ri(rm,"onAnimationIteration");Ri(sm,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(om,"onTransitionEnd");ns("onMouseEnter",["mouseout","mouseover"]);ns("onMouseLeave",["mouseout","mouseover"]);ns("onPointerEnter",["pointerout","pointerover"]);ns("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ev=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function sd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,M0(i,e,void 0,n),n.currentTarget=null}function lm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;sd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;sd(r,a,u),s=l}}}if(ba)throw n=Wu,ba=!1,Wu=null,n}function Ge(n,e){var t=e[ec];t===void 0&&(t=e[ec]=new Set);var i=n+"__bubble";t.has(i)||(um(e,n,2,!1),t.add(i))}function Fl(n,e,t){var i=0;e&&(i|=4),um(t,n,i,e)}var No="_reactListening"+Math.random().toString(36).slice(2);function ro(n){if(!n[No]){n[No]=!0,gp.forEach(function(t){t!=="selectionchange"&&(Ev.has(t)||Fl(t,!1,n),Fl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[No]||(e[No]=!0,Fl("selectionchange",!1,e))}}function um(n,e,t,i){switch(Xp(e)){case 1:var r=U0;break;case 4:r=O0;break;default:r=Gc}t=r.bind(null,e,t,n),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function kl(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=qi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Rp(function(){var u=s,c=Uc(t),f=[];e:{var d=am.get(n);if(d!==void 0){var g=Wc,x=n;switch(n){case"keypress":if(ma(t)===0)break e;case"keydown":case"keyup":g=ev;break;case"focusin":x="focus",g=Pl;break;case"focusout":x="blur",g=Pl;break;case"beforeblur":case"afterblur":g=Pl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=iv;break;case im:case rm:case sm:g=j0;break;case om:g=sv;break;case"scroll":g=B0;break;case"wheel":g=av;break;case"copy":case"cut":case"paste":g=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Yf}var p=(e&4)!==0,h=!p&&n==="scroll",m=p?d!==null?d+"Capture":null:d;p=[];for(var v=u,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,m!==null&&(y=Qs(v,m),y!=null&&p.push(so(v,y,_)))),h)break;v=v.return}0<p.length&&(d=new g(d,x,null,t,c),f.push({event:d,listeners:p}))}}if((e&7)===0){e:{if(d=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",d&&t!==Vu&&(x=t.relatedTarget||t.fromElement)&&(qi(x)||x[ti]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(x=t.relatedTarget||t.toElement,g=u,x=x?qi(x):null,x!==null&&(h=hr(x),x!==h||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(p=qf,y="onMouseLeave",m="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(p=Yf,y="onPointerLeave",m="onPointerEnter",v="pointer"),h=g==null?d:Or(g),_=x==null?d:Or(x),d=new p(y,v+"leave",g,t,c),d.target=h,d.relatedTarget=_,y=null,qi(c)===u&&(p=new p(m,v+"enter",x,t,c),p.target=_,p.relatedTarget=h,y=p),h=y,g&&x)t:{for(p=g,m=x,v=0,_=p;_;_=_r(_))v++;for(_=0,y=m;y;y=_r(y))_++;for(;0<v-_;)p=_r(p),v--;for(;0<_-v;)m=_r(m),_--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=_r(p),m=_r(m)}p=null}else p=null;g!==null&&od(f,d,g,p,!1),x!==null&&h!==null&&od(f,h,x,p,!0)}}e:{if(d=u?Or(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var w=pv;else if(Qf(d))if(Qp)w=_v;else{w=gv;var T=mv}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=vv);if(w&&(w=w(n,u))){Kp(f,w,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Fu(d,"number",d.value)}switch(T=u?Or(u):window,n){case"focusin":(Qf(T)||T.contentEditable==="true")&&(kr=T,$u=u,Hs=null);break;case"focusout":Hs=$u=kr=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,id(f,t,c);break;case"selectionchange":if(Sv)break;case"keydown":case"keyup":id(f,t,c)}var A;if(Xc)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Fr?Yp(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&($p&&t.locale!=="ko"&&(Fr||S!=="onCompositionStart"?S==="onCompositionEnd"&&Fr&&(A=qp()):(_i=c,Hc="value"in _i?_i.value:_i.textContent,Fr=!0)),T=Ra(u,S),0<T.length&&(S=new $f(S,n,null,t,c),f.push({event:S,listeners:T}),A?S.data=A:(A=Zp(t),A!==null&&(S.data=A)))),(A=uv?cv(n,t):fv(n,t))&&(u=Ra(u,"onBeforeInput"),0<u.length&&(c=new $f("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=A))}lm(f,e)})}function so(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ra(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qs(n,t),s!=null&&i.unshift(so(n,s,r)),s=Qs(n,e),s!=null&&i.push(so(n,s,r))),n=n.return}return i}function _r(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function od(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Qs(t,s),l!=null&&o.unshift(so(t,l,a))):r||(l=Qs(t,s),l!=null&&o.push(so(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Tv=/\r\n?/g,Cv=/\u0000|\uFFFD/g;function ad(n){return(typeof n=="string"?n:""+n).replace(Tv,`
`).replace(Cv,"")}function zo(n,e,t){if(e=ad(e),ad(n)!==e&&t)throw Error(Z(425))}function Ia(){}var Zu=null,Ku=null;function Qu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,bv=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,Av=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(n){return ld.resolve(null).then(n).catch(Lv)}:Ju;function Lv(n){setTimeout(function(){throw n})}function Ul(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),to(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);to(e)}function Ei(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function ud(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var gs=Math.random().toString(36).slice(2),Nn="__reactFiber$"+gs,oo="__reactProps$"+gs,ti="__reactContainer$"+gs,ec="__reactEvents$"+gs,Pv="__reactListeners$"+gs,Dv="__reactHandles$"+gs;function qi(n){var e=n[Nn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ti]||t[Nn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=ud(n);n!==null;){if(t=n[Nn])return t;n=ud(n)}return e}n=t,t=n.parentNode}return null}function xo(n){return n=n[Nn]||n[ti],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Or(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Z(33))}function tl(n){return n[oo]||null}var tc=[],Br=-1;function Ii(n){return{current:n}}function He(n){0>Br||(n.current=tc[Br],tc[Br]=null,Br--)}function Ve(n,e){Br++,tc[Br]=n.current,n.current=e}var Di={},bt=Ii(Di),Ot=Ii(!1),ir=Di;function is(n,e){var t=n.type.contextTypes;if(!t)return Di;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Bt(n){return n=n.childContextTypes,n!=null}function Na(){He(Ot),He(bt)}function cd(n,e,t){if(bt.current!==Di)throw Error(Z(168));Ve(bt,e),Ve(Ot,t)}function cm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Z(108,m0(n)||"Unknown",r));return Ze({},t,i)}function za(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Di,ir=bt.current,Ve(bt,n),Ve(Ot,Ot.current),!0}function fd(n,e,t){var i=n.stateNode;if(!i)throw Error(Z(169));t?(n=cm(n,e,ir),i.__reactInternalMemoizedMergedChildContext=n,He(Ot),He(bt),Ve(bt,n)):He(Ot),Ve(Ot,t)}var $n=null,nl=!1,Ol=!1;function fm(n){$n===null?$n=[n]:$n.push(n)}function Rv(n){nl=!0,fm(n)}function Ni(){if(!Ol&&$n!==null){Ol=!0;var n=0,e=Ue;try{var t=$n;for(Ue=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}$n=null,nl=!1}catch(r){throw $n!==null&&($n=$n.slice(n+1)),Fp(Oc,Ni),r}finally{Ue=e,Ol=!1}}return null}var Vr=[],Gr=0,Fa=null,ka=0,nn=[],rn=0,rr=null,Zn=1,Kn="";function Gi(n,e){Vr[Gr++]=ka,Vr[Gr++]=Fa,Fa=n,ka=e}function dm(n,e,t){nn[rn++]=Zn,nn[rn++]=Kn,nn[rn++]=rr,rr=n;var i=Zn;n=Kn;var r=32-Tn(i)-1;i&=~(1<<r),t+=1;var s=32-Tn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Zn=1<<32-Tn(e)+r|t<<r|i,Kn=s+n}else Zn=1<<s|t<<r|i,Kn=n}function $c(n){n.return!==null&&(Gi(n,1),dm(n,1,0))}function Yc(n){for(;n===Fa;)Fa=Vr[--Gr],Vr[Gr]=null,ka=Vr[--Gr],Vr[Gr]=null;for(;n===rr;)rr=nn[--rn],nn[rn]=null,Kn=nn[--rn],nn[rn]=null,Zn=nn[--rn],nn[rn]=null}var Yt=null,$t=null,Xe=!1,Sn=null;function hm(n,e){var t=an(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function dd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Yt=n,$t=Ei(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Yt=n,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=rr!==null?{id:Zn,overflow:Kn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=an(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Yt=n,$t=null,!0):!1;default:return!1}}function nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ic(n){if(Xe){var e=$t;if(e){var t=e;if(!dd(n,e)){if(nc(n))throw Error(Z(418));e=Ei(t.nextSibling);var i=Yt;e&&dd(n,e)?hm(i,t):(n.flags=n.flags&-4097|2,Xe=!1,Yt=n)}}else{if(nc(n))throw Error(Z(418));n.flags=n.flags&-4097|2,Xe=!1,Yt=n}}}function hd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yt=n}function Fo(n){if(n!==Yt)return!1;if(!Xe)return hd(n),Xe=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Qu(n.type,n.memoizedProps)),e&&(e=$t)){if(nc(n))throw pm(),Error(Z(418));for(;e;)hm(n,e),e=Ei(e.nextSibling)}if(hd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Z(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){$t=Ei(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}$t=null}}else $t=Yt?Ei(n.stateNode.nextSibling):null;return!0}function pm(){for(var n=$t;n;)n=Ei(n.nextSibling)}function rs(){$t=Yt=null,Xe=!1}function Zc(n){Sn===null?Sn=[n]:Sn.push(n)}var Iv=ri.ReactCurrentBatchConfig;function xn(n,e){if(n&&n.defaultProps){e=Ze({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Ua=Ii(null),Oa=null,Hr=null,Kc=null;function Qc(){Kc=Hr=Oa=null}function Jc(n){var e=Ua.current;He(Ua),n._currentValue=e}function rc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Kr(n,e){Oa=n,Kc=Hr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Ut=!0),n.firstContext=null)}function fn(n){var e=n._currentValue;if(Kc!==n)if(n={context:n,memoizedValue:e,next:null},Hr===null){if(Oa===null)throw Error(Z(308));Hr=n,Oa.dependencies={lanes:0,firstContext:n}}else Hr=Hr.next=n;return e}var $i=null;function ef(n){$i===null?$i=[n]:$i.push(n)}function mm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,ef(e)):(t.next=r.next,r.next=t),e.interleaved=t,ni(n,i)}function ni(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var mi=!1;function tf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gm(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ti(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Re&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ni(n,t)}return r=i.interleaved,r===null?(e.next=e,ef(i)):(e.next=r.next,r.next=e),i.interleaved=e,ni(n,t)}function ga(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bc(n,t)}}function pd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ba(n,e,t,i){var r=n.updateQueue;mi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,p=a;switch(d=e,g=t,p.tag){case 1:if(x=p.payload,typeof x=="function"){f=x.call(g,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=p.payload,d=typeof x=="function"?x.call(g,f,d):x,d==null)break e;f=Ze({},f,d);break e;case 2:mi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);or|=o,n.lanes=o,n.memoizedState=f}}function md(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Z(191,r));r.call(i)}}}var vm=new mp.Component().refs;function sc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ze({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var il={isMounted:function(n){return(n=n._reactInternals)?hr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Rt(),r=bi(n),s=Qn(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ti(n,s,r),e!==null&&(Cn(e,n,r,i),ga(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Rt(),r=bi(n),s=Qn(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ti(n,s,r),e!==null&&(Cn(e,n,r,i),ga(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Rt(),i=bi(n),r=Qn(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ti(n,r,i),e!==null&&(Cn(e,n,i,t),ga(e,n,i))}};function gd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(t,i)||!io(r,s):!0}function _m(n,e,t){var i=!1,r=Di,s=e.contextType;return typeof s=="object"&&s!==null?s=fn(s):(r=Bt(e)?ir:bt.current,i=e.contextTypes,s=(i=i!=null)?is(n,r):Di),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=il,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function vd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&il.enqueueReplaceState(e,e.state,null)}function oc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=vm,tf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=fn(s):(s=Bt(e)?ir:bt.current,r.context=is(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&il.enqueueReplaceState(r,r.state,null),Ba(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ts(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Z(309));var i=t.stateNode}if(!i)throw Error(Z(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===vm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Z(284));if(!t._owner)throw Error(Z(290,n))}return n}function ko(n,e){throw n=Object.prototype.toString.call(e),Error(Z(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function _d(n){var e=n._init;return e(n._payload)}function xm(n){function e(m,v){if(n){var _=m.deletions;_===null?(m.deletions=[v],m.flags|=16):_.push(v)}}function t(m,v){if(!n)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=Ai(m,v),m.index=0,m.sibling=null,m}function s(m,v,_){return m.index=_,n?(_=m.alternate,_!==null?(_=_.index,_<v?(m.flags|=2,v):_):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,v,_,y){return v===null||v.tag!==6?(v=Xl(_,m.mode,y),v.return=m,v):(v=r(v,_),v.return=m,v)}function l(m,v,_,y){var w=_.type;return w===zr?c(m,v,_.props.children,y,_.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===pi&&_d(w)===v.type)?(y=r(v,_.props),y.ref=Ts(m,v,_),y.return=m,y):(y=Ma(_.type,_.key,_.props,null,m.mode,y),y.ref=Ts(m,v,_),y.return=m,y)}function u(m,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=ql(_,m.mode,y),v.return=m,v):(v=r(v,_.children||[]),v.return=m,v)}function c(m,v,_,y,w){return v===null||v.tag!==7?(v=er(_,m.mode,y,w),v.return=m,v):(v=r(v,_),v.return=m,v)}function f(m,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Xl(""+v,m.mode,_),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Co:return _=Ma(v.type,v.key,v.props,null,m.mode,_),_.ref=Ts(m,null,v),_.return=m,_;case Nr:return v=ql(v,m.mode,_),v.return=m,v;case pi:var y=v._init;return f(m,y(v._payload),_)}if(Is(v)||ys(v))return v=er(v,m.mode,_,null),v.return=m,v;ko(m,v)}return null}function d(m,v,_,y){var w=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(m,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Co:return _.key===w?l(m,v,_,y):null;case Nr:return _.key===w?u(m,v,_,y):null;case pi:return w=_._init,d(m,v,w(_._payload),y)}if(Is(_)||ys(_))return w!==null?null:c(m,v,_,y,null);ko(m,_)}return null}function g(m,v,_,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(_)||null,a(v,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Co:return m=m.get(y.key===null?_:y.key)||null,l(v,m,y,w);case Nr:return m=m.get(y.key===null?_:y.key)||null,u(v,m,y,w);case pi:var T=y._init;return g(m,v,_,T(y._payload),w)}if(Is(y)||ys(y))return m=m.get(_)||null,c(v,m,y,w,null);ko(v,y)}return null}function x(m,v,_,y){for(var w=null,T=null,A=v,S=v=0,b=null;A!==null&&S<_.length;S++){A.index>S?(b=A,A=null):b=A.sibling;var R=d(m,A,_[S],y);if(R===null){A===null&&(A=b);break}n&&A&&R.alternate===null&&e(m,A),v=s(R,v,S),T===null?w=R:T.sibling=R,T=R,A=b}if(S===_.length)return t(m,A),Xe&&Gi(m,S),w;if(A===null){for(;S<_.length;S++)A=f(m,_[S],y),A!==null&&(v=s(A,v,S),T===null?w=A:T.sibling=A,T=A);return Xe&&Gi(m,S),w}for(A=i(m,A);S<_.length;S++)b=g(A,m,S,_[S],y),b!==null&&(n&&b.alternate!==null&&A.delete(b.key===null?S:b.key),v=s(b,v,S),T===null?w=b:T.sibling=b,T=b);return n&&A.forEach(function(q){return e(m,q)}),Xe&&Gi(m,S),w}function p(m,v,_,y){var w=ys(_);if(typeof w!="function")throw Error(Z(150));if(_=w.call(_),_==null)throw Error(Z(151));for(var T=w=null,A=v,S=v=0,b=null,R=_.next();A!==null&&!R.done;S++,R=_.next()){A.index>S?(b=A,A=null):b=A.sibling;var q=d(m,A,R.value,y);if(q===null){A===null&&(A=b);break}n&&A&&q.alternate===null&&e(m,A),v=s(q,v,S),T===null?w=q:T.sibling=q,T=q,A=b}if(R.done)return t(m,A),Xe&&Gi(m,S),w;if(A===null){for(;!R.done;S++,R=_.next())R=f(m,R.value,y),R!==null&&(v=s(R,v,S),T===null?w=R:T.sibling=R,T=R);return Xe&&Gi(m,S),w}for(A=i(m,A);!R.done;S++,R=_.next())R=g(A,m,S,R.value,y),R!==null&&(n&&R.alternate!==null&&A.delete(R.key===null?S:R.key),v=s(R,v,S),T===null?w=R:T.sibling=R,T=R);return n&&A.forEach(function(ee){return e(m,ee)}),Xe&&Gi(m,S),w}function h(m,v,_,y){if(typeof _=="object"&&_!==null&&_.type===zr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Co:e:{for(var w=_.key,T=v;T!==null;){if(T.key===w){if(w=_.type,w===zr){if(T.tag===7){t(m,T.sibling),v=r(T,_.props.children),v.return=m,m=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===pi&&_d(w)===T.type){t(m,T.sibling),v=r(T,_.props),v.ref=Ts(m,T,_),v.return=m,m=v;break e}t(m,T);break}else e(m,T);T=T.sibling}_.type===zr?(v=er(_.props.children,m.mode,y,_.key),v.return=m,m=v):(y=Ma(_.type,_.key,_.props,null,m.mode,y),y.ref=Ts(m,v,_),y.return=m,m=y)}return o(m);case Nr:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){t(m,v.sibling),v=r(v,_.children||[]),v.return=m,m=v;break e}else{t(m,v);break}else e(m,v);v=v.sibling}v=ql(_,m.mode,y),v.return=m,m=v}return o(m);case pi:return T=_._init,h(m,v,T(_._payload),y)}if(Is(_))return x(m,v,_,y);if(ys(_))return p(m,v,_,y);ko(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(t(m,v.sibling),v=r(v,_),v.return=m,m=v):(t(m,v),v=Xl(_,m.mode,y),v.return=m,m=v),o(m)):t(m,v)}return h}var ss=xm(!0),ym=xm(!1),yo={},Fn=Ii(yo),ao=Ii(yo),lo=Ii(yo);function Yi(n){if(n===yo)throw Error(Z(174));return n}function nf(n,e){switch(Ve(lo,e),Ve(ao,n),Ve(Fn,yo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Uu(e,n)}He(Fn),Ve(Fn,e)}function os(){He(Fn),He(ao),He(lo)}function Sm(n){Yi(lo.current);var e=Yi(Fn.current),t=Uu(e,n.type);e!==t&&(Ve(ao,n),Ve(Fn,t))}function rf(n){ao.current===n&&(He(Fn),He(ao))}var $e=Ii(0);function Va(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bl=[];function sf(){for(var n=0;n<Bl.length;n++)Bl[n]._workInProgressVersionPrimary=null;Bl.length=0}var va=ri.ReactCurrentDispatcher,Vl=ri.ReactCurrentBatchConfig,sr=0,Ye=null,st=null,dt=null,Ga=!1,Ws=!1,uo=0,Nv=0;function Mt(){throw Error(Z(321))}function of(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!bn(n[t],e[t]))return!1;return!0}function af(n,e,t,i,r,s){if(sr=s,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,va.current=n===null||n.memoizedState===null?Uv:Ov,n=t(i,r),Ws){s=0;do{if(Ws=!1,uo=0,25<=s)throw Error(Z(301));s+=1,dt=st=null,e.updateQueue=null,va.current=Bv,n=t(i,r)}while(Ws)}if(va.current=Ha,e=st!==null&&st.next!==null,sr=0,dt=st=Ye=null,Ga=!1,e)throw Error(Z(300));return n}function lf(){var n=uo!==0;return uo=0,n}function Rn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Ye.memoizedState=dt=n:dt=dt.next=n,dt}function dn(){if(st===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=st.next;var e=dt===null?Ye.memoizedState:dt.next;if(e!==null)dt=e,st=n;else{if(n===null)throw Error(Z(310));st=n,n={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},dt===null?Ye.memoizedState=dt=n:dt=dt.next=n}return dt}function co(n,e){return typeof e=="function"?e(n):e}function Gl(n){var e=dn(),t=e.queue;if(t===null)throw Error(Z(311));t.lastRenderedReducer=n;var i=st,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((sr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ye.lanes|=c,or|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,bn(i,e.memoizedState)||(Ut=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ye.lanes|=s,or|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Hl(n){var e=dn(),t=e.queue;if(t===null)throw Error(Z(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);bn(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Mm(){}function wm(n,e){var t=Ye,i=dn(),r=e(),s=!bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Ut=!0),i=i.queue,uf(Cm.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||dt!==null&&dt.memoizedState.tag&1){if(t.flags|=2048,fo(9,Tm.bind(null,t,i,r,e),void 0,null),pt===null)throw Error(Z(349));(sr&30)!==0||Em(t,e,r)}return r}function Em(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Tm(n,e,t,i){e.value=t,e.getSnapshot=i,bm(e)&&Am(n)}function Cm(n,e,t){return t(function(){bm(e)&&Am(n)})}function bm(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!bn(n,t)}catch{return!0}}function Am(n){var e=ni(n,1);e!==null&&Cn(e,n,1,-1)}function xd(n){var e=Rn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:n},e.queue=n,n=n.dispatch=kv.bind(null,Ye,n),[e.memoizedState,n]}function fo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ye.updateQueue,e===null?(e={lastEffect:null,stores:null},Ye.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Lm(){return dn().memoizedState}function _a(n,e,t,i){var r=Rn();Ye.flags|=n,r.memoizedState=fo(1|e,t,void 0,i===void 0?null:i)}function rl(n,e,t,i){var r=dn();i=i===void 0?null:i;var s=void 0;if(st!==null){var o=st.memoizedState;if(s=o.destroy,i!==null&&of(i,o.deps)){r.memoizedState=fo(e,t,s,i);return}}Ye.flags|=n,r.memoizedState=fo(1|e,t,s,i)}function yd(n,e){return _a(8390656,8,n,e)}function uf(n,e){return rl(2048,8,n,e)}function Pm(n,e){return rl(4,2,n,e)}function Dm(n,e){return rl(4,4,n,e)}function Rm(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Im(n,e,t){return t=t!=null?t.concat([n]):null,rl(4,4,Rm.bind(null,e,n),t)}function cf(){}function Nm(n,e){var t=dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&of(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function zm(n,e){var t=dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&of(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Fm(n,e,t){return(sr&21)===0?(n.baseState&&(n.baseState=!1,Ut=!0),n.memoizedState=t):(bn(t,e)||(t=Op(),Ye.lanes|=t,or|=t,n.baseState=!0),e)}function zv(n,e){var t=Ue;Ue=t!==0&&4>t?t:4,n(!0);var i=Vl.transition;Vl.transition={};try{n(!1),e()}finally{Ue=t,Vl.transition=i}}function km(){return dn().memoizedState}function Fv(n,e,t){var i=bi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Um(n))Om(e,t);else if(t=mm(n,e,t,i),t!==null){var r=Rt();Cn(t,n,i,r),Bm(t,e,i)}}function kv(n,e,t){var i=bi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Um(n))Om(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,bn(a,o)){var l=e.interleaved;l===null?(r.next=r,ef(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=mm(n,e,r,i),t!==null&&(r=Rt(),Cn(t,n,i,r),Bm(t,e,i))}}function Um(n){var e=n.alternate;return n===Ye||e!==null&&e===Ye}function Om(n,e){Ws=Ga=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Bm(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Bc(n,t)}}var Ha={readContext:fn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},Uv={readContext:fn,useCallback:function(n,e){return Rn().memoizedState=[n,e===void 0?null:e],n},useContext:fn,useEffect:yd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,_a(4194308,4,Rm.bind(null,e,n),t)},useLayoutEffect:function(n,e){return _a(4194308,4,n,e)},useInsertionEffect:function(n,e){return _a(4,2,n,e)},useMemo:function(n,e){var t=Rn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Rn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Fv.bind(null,Ye,n),[i.memoizedState,n]},useRef:function(n){var e=Rn();return n={current:n},e.memoizedState=n},useState:xd,useDebugValue:cf,useDeferredValue:function(n){return Rn().memoizedState=n},useTransition:function(){var n=xd(!1),e=n[0];return n=zv.bind(null,n[1]),Rn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ye,r=Rn();if(Xe){if(t===void 0)throw Error(Z(407));t=t()}else{if(t=e(),pt===null)throw Error(Z(349));(sr&30)!==0||Em(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,yd(Cm.bind(null,i,s,n),[n]),i.flags|=2048,fo(9,Tm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Rn(),e=pt.identifierPrefix;if(Xe){var t=Kn,i=Zn;t=(i&~(1<<32-Tn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=uo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Nv++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Ov={readContext:fn,useCallback:Nm,useContext:fn,useEffect:uf,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:Dm,useMemo:zm,useReducer:Gl,useRef:Lm,useState:function(){return Gl(co)},useDebugValue:cf,useDeferredValue:function(n){var e=dn();return Fm(e,st.memoizedState,n)},useTransition:function(){var n=Gl(co)[0],e=dn().memoizedState;return[n,e]},useMutableSource:Mm,useSyncExternalStore:wm,useId:km,unstable_isNewReconciler:!1},Bv={readContext:fn,useCallback:Nm,useContext:fn,useEffect:uf,useImperativeHandle:Im,useInsertionEffect:Pm,useLayoutEffect:Dm,useMemo:zm,useReducer:Hl,useRef:Lm,useState:function(){return Hl(co)},useDebugValue:cf,useDeferredValue:function(n){var e=dn();return st===null?e.memoizedState=n:Fm(e,st.memoizedState,n)},useTransition:function(){var n=Hl(co)[0],e=dn().memoizedState;return[n,e]},useMutableSource:Mm,useSyncExternalStore:wm,useId:km,unstable_isNewReconciler:!1};function as(n,e){try{var t="",i=e;do t+=p0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Wl(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function ac(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Vv=typeof WeakMap=="function"?WeakMap:Map;function Vm(n,e,t){t=Qn(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ja||(ja=!0,vc=i),ac(n,e)},t}function Gm(n,e,t){t=Qn(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){ac(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ac(n,e),typeof i!="function"&&(Ci===null?Ci=new Set([this]):Ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Sd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Vv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=t_.bind(null,n,e,t),e.then(n,n))}function Md(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function wd(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Qn(-1,1),e.tag=2,Ti(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var Gv=ri.ReactCurrentOwner,Ut=!1;function Dt(n,e,t,i){e.child=n===null?ym(e,null,t,i):ss(e,n.child,t,i)}function Ed(n,e,t,i,r){t=t.render;var s=e.ref;return Kr(e,r),i=af(n,e,t,i,s,r),t=lf(),n!==null&&!Ut?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ii(n,e,r)):(Xe&&t&&$c(e),e.flags|=1,Dt(n,e,i,r),e.child)}function Td(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!_f(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Hm(n,e,s,i,r)):(n=Ma(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:io,t(o,i)&&n.ref===e.ref)return ii(n,e,r)}return e.flags|=1,n=Ai(s,i),n.ref=e.ref,n.return=e,e.child=n}function Hm(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(io(s,i)&&n.ref===e.ref)if(Ut=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Ut=!0);else return e.lanes=n.lanes,ii(n,e,r)}return lc(n,e,t,i,r)}function Wm(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(jr,Xt),Xt|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ve(jr,Xt),Xt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ve(jr,Xt),Xt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ve(jr,Xt),Xt|=i;return Dt(n,e,r,t),e.child}function jm(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function lc(n,e,t,i,r){var s=Bt(t)?ir:bt.current;return s=is(e,s),Kr(e,r),t=af(n,e,t,i,s,r),i=lf(),n!==null&&!Ut?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ii(n,e,r)):(Xe&&i&&$c(e),e.flags|=1,Dt(n,e,t,r),e.child)}function Cd(n,e,t,i,r){if(Bt(t)){var s=!0;za(e)}else s=!1;if(Kr(e,r),e.stateNode===null)xa(n,e),_m(e,t,i),oc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=fn(u):(u=Bt(t)?ir:bt.current,u=is(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&vd(e,o,i,u),mi=!1;var d=e.memoizedState;o.state=d,Ba(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Ot.current||mi?(typeof c=="function"&&(sc(e,t,c,i),l=e.memoizedState),(a=mi||gd(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,gm(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:xn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=fn(l):(l=Bt(t)?ir:bt.current,l=is(e,l));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&vd(e,o,i,l),mi=!1,d=e.memoizedState,o.state=d,Ba(e,i,o,r);var x=e.memoizedState;a!==f||d!==x||Ot.current||mi?(typeof g=="function"&&(sc(e,t,g,i),x=e.memoizedState),(u=mi||gd(e,t,u,i,d,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return uc(n,e,t,i,s,r)}function uc(n,e,t,i,r,s){jm(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&fd(e,t,!1),ii(n,e,s);i=e.stateNode,Gv.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ss(e,n.child,null,s),e.child=ss(e,null,a,s)):Dt(n,e,a,s),e.memoizedState=i.state,r&&fd(e,t,!0),e.child}function Xm(n){var e=n.stateNode;e.pendingContext?cd(n,e.pendingContext,e.pendingContext!==e.context):e.context&&cd(n,e.context,!1),nf(n,e.containerInfo)}function bd(n,e,t,i,r){return rs(),Zc(r),e.flags|=256,Dt(n,e,t,i),e.child}var cc={dehydrated:null,treeContext:null,retryLane:0};function fc(n){return{baseLanes:n,cachePool:null,transitions:null}}function qm(n,e,t){var i=e.pendingProps,r=$e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ve($e,r&1),n===null)return ic(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=al(o,i,0,null),n=er(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=fc(t),e.memoizedState=cc,n):ff(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Hv(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ai(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ai(a,s):(s=er(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?fc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=cc,i}return s=n.child,n=s.sibling,i=Ai(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function ff(n,e){return e=al({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Uo(n,e,t,i){return i!==null&&Zc(i),ss(e,n.child,null,t),n=ff(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Hv(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Wl(Error(Z(422))),Uo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=al({mode:"visible",children:i.children},r,0,null),s=er(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&ss(e,n.child,null,o),e.child.memoizedState=fc(o),e.memoizedState=cc,s);if((e.mode&1)===0)return Uo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Z(419)),i=Wl(s,i,void 0),Uo(n,e,o,i)}if(a=(o&n.childLanes)!==0,Ut||a){if(i=pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ni(n,r),Cn(i,n,r,-1))}return vf(),i=Wl(Error(Z(421))),Uo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=n_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,$t=Ei(r.nextSibling),Yt=e,Xe=!0,Sn=null,n!==null&&(nn[rn++]=Zn,nn[rn++]=Kn,nn[rn++]=rr,Zn=n.id,Kn=n.overflow,rr=e),e=ff(e,i.children),e.flags|=4096,e)}function Ad(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),rc(n.return,e,t)}function jl(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function $m(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Dt(n,e,i.children,t),i=$e.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ad(n,t,e);else if(n.tag===19)Ad(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ve($e,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Va(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),jl(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Va(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}jl(e,!0,t,null,s);break;case"together":jl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xa(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ii(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),or|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(Z(153));if(e.child!==null){for(n=e.child,t=Ai(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ai(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Wv(n,e,t){switch(e.tag){case 3:Xm(e),rs();break;case 5:Sm(e);break;case 1:Bt(e.type)&&za(e);break;case 4:nf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ve(Ua,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ve($e,$e.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?qm(n,e,t):(Ve($e,$e.current&1),n=ii(n,e,t),n!==null?n.sibling:null);Ve($e,$e.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return $m(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ve($e,$e.current),i)break;return null;case 22:case 23:return e.lanes=0,Wm(n,e,t)}return ii(n,e,t)}var Ym,dc,Zm,Km;Ym=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};dc=function(){};Zm=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Yi(Fn.current);var s=null;switch(t){case"input":r=Nu(n,r),i=Nu(n,i),s=[];break;case"select":r=Ze({},r,{value:void 0}),i=Ze({},i,{value:void 0}),s=[];break;case"textarea":r=ku(n,r),i=ku(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ia)}Ou(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ge("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Km=function(n,e,t,i){t!==i&&(e.flags|=4)};function Cs(n,e){if(!Xe)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function wt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function jv(n,e,t){var i=e.pendingProps;switch(Yc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return Bt(e.type)&&Na(),wt(e),null;case 3:return i=e.stateNode,os(),He(Ot),He(bt),sf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Fo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Sn!==null&&(yc(Sn),Sn=null))),dc(n,e),wt(e),null;case 5:rf(e);var r=Yi(lo.current);if(t=e.type,n!==null&&e.stateNode!=null)Zm(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Z(166));return wt(e),null}if(n=Yi(Fn.current),Fo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Nn]=e,i[oo]=s,n=(e.mode&1)!==0,t){case"dialog":Ge("cancel",i),Ge("close",i);break;case"iframe":case"object":case"embed":Ge("load",i);break;case"video":case"audio":for(r=0;r<zs.length;r++)Ge(zs[r],i);break;case"source":Ge("error",i);break;case"img":case"image":case"link":Ge("error",i),Ge("load",i);break;case"details":Ge("toggle",i);break;case"input":kf(i,s),Ge("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ge("invalid",i);break;case"textarea":Of(i,s),Ge("invalid",i)}Ou(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,a,n),r=["children",""+a]):Zs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ge("scroll",i)}switch(t){case"input":bo(i),Uf(i,s,!0);break;case"textarea":bo(i),Bf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ia)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ep(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Nn]=e,n[oo]=i,Ym(n,e,!1,!1),e.stateNode=n;e:{switch(o=Bu(t,i),t){case"dialog":Ge("cancel",n),Ge("close",n),r=i;break;case"iframe":case"object":case"embed":Ge("load",n),r=i;break;case"video":case"audio":for(r=0;r<zs.length;r++)Ge(zs[r],n);r=i;break;case"source":Ge("error",n),r=i;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),r=i;break;case"details":Ge("toggle",n),r=i;break;case"input":kf(n,i),r=Nu(n,i),Ge("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ze({},i,{value:void 0}),Ge("invalid",n);break;case"textarea":Of(n,i),r=ku(n,i),Ge("invalid",n);break;default:r=i}Ou(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?bp(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ks(n,l):typeof l=="number"&&Ks(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ge("scroll",n):l!=null&&Nc(n,s,l,o))}switch(t){case"input":bo(n),Uf(n,i,!1);break;case"textarea":bo(n),Bf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Pi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?qr(n,!!i.multiple,s,!1):i.defaultValue!=null&&qr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ia)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(n&&e.stateNode!=null)Km(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Z(166));if(t=Yi(lo.current),Yi(Fn.current),Fo(e)){if(i=e.stateNode,t=e.memoizedProps,i[Nn]=e,(s=i.nodeValue!==t)&&(n=Yt,n!==null))switch(n.tag){case 3:zo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Nn]=e,e.stateNode=i}return wt(e),null;case 13:if(He($e),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&$t!==null&&(e.mode&1)!==0&&(e.flags&128)===0)pm(),rs(),e.flags|=98560,s=!1;else if(s=Fo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Z(317));s[Nn]=e}else rs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else Sn!==null&&(yc(Sn),Sn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||($e.current&1)!==0?ot===0&&(ot=3):vf())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return os(),dc(n,e),n===null&&ro(e.stateNode.containerInfo),wt(e),null;case 10:return Jc(e.type._context),wt(e),null;case 17:return Bt(e.type)&&Na(),wt(e),null;case 19:if(He($e),s=e.memoizedState,s===null)return wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Cs(s,!1);else{if(ot!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Va(n),o!==null){for(e.flags|=128,Cs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ve($e,$e.current&1|2),e.child}n=n.sibling}s.tail!==null&&Je()>ls&&(e.flags|=128,i=!0,Cs(s,!1),e.lanes=4194304)}else{if(!i)if(n=Va(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Xe)return wt(e),null}else 2*Je()-s.renderingStartTime>ls&&t!==1073741824&&(e.flags|=128,i=!0,Cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Je(),e.sibling=null,t=$e.current,Ve($e,i?t&1|2:t&1),e):(wt(e),null);case 22:case 23:return gf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Xt&1073741824)!==0&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function Xv(n,e){switch(Yc(e),e.tag){case 1:return Bt(e.type)&&Na(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return os(),He(Ot),He(bt),sf(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return rf(e),null;case 13:if(He($e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));rs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return He($e),null;case 4:return os(),null;case 10:return Jc(e.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var Oo=!1,Tt=!1,qv=typeof WeakSet=="function"?WeakSet:Set,le=null;function Wr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Qe(n,e,i)}else t.current=null}function hc(n,e,t){try{t()}catch(i){Qe(n,e,i)}}var Ld=!1;function $v(n,e){if(Zu=Pa,n=tm(),qc(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var g;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ku={focusedElem:n,selectionRange:t},Pa=!1,le=e;le!==null;)if(e=le,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,le=n;else for(;le!==null;){e=le;try{var x=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var p=x.memoizedProps,h=x.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:xn(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(y){Qe(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,le=n;break}le=e.return}return x=Ld,Ld=!1,x}function js(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&hc(e,t,s)}r=r.next}while(r!==i)}}function sl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function pc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Qm(n){var e=n.alternate;e!==null&&(n.alternate=null,Qm(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Nn],delete e[oo],delete e[ec],delete e[Pv],delete e[Dv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Jm(n){return n.tag===5||n.tag===3||n.tag===4}function Pd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Jm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ia));else if(i!==4&&(n=n.child,n!==null))for(mc(n,e,t),n=n.sibling;n!==null;)mc(n,e,t),n=n.sibling}function gc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(gc(n,e,t),n=n.sibling;n!==null;)gc(n,e,t),n=n.sibling}var _t=null,yn=!1;function oi(n,e,t){for(t=t.child;t!==null;)eg(n,e,t),t=t.sibling}function eg(n,e,t){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(Ka,t)}catch{}switch(t.tag){case 5:Tt||Wr(t,e);case 6:var i=_t,r=yn;_t=null,oi(n,e,t),_t=i,yn=r,_t!==null&&(yn?(n=_t,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):_t.removeChild(t.stateNode));break;case 18:_t!==null&&(yn?(n=_t,t=t.stateNode,n.nodeType===8?Ul(n.parentNode,t):n.nodeType===1&&Ul(n,t),to(n)):Ul(_t,t.stateNode));break;case 4:i=_t,r=yn,_t=t.stateNode.containerInfo,yn=!0,oi(n,e,t),_t=i,yn=r;break;case 0:case 11:case 14:case 15:if(!Tt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&hc(t,e,o),r=r.next}while(r!==i)}oi(n,e,t);break;case 1:if(!Tt&&(Wr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Qe(t,e,a)}oi(n,e,t);break;case 21:oi(n,e,t);break;case 22:t.mode&1?(Tt=(i=Tt)||t.memoizedState!==null,oi(n,e,t),Tt=i):oi(n,e,t);break;default:oi(n,e,t)}}function Dd(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new qv),e.forEach(function(i){var r=i_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function pn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_t=a.stateNode,yn=!1;break e;case 3:_t=a.stateNode.containerInfo,yn=!0;break e;case 4:_t=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(_t===null)throw Error(Z(160));eg(s,o,r),_t=null,yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Qe(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)tg(e,n),e=e.sibling}function tg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pn(e,n),Dn(n),i&4){try{js(3,n,n.return),sl(3,n)}catch(p){Qe(n,n.return,p)}try{js(5,n,n.return)}catch(p){Qe(n,n.return,p)}}break;case 1:pn(e,n),Dn(n),i&512&&t!==null&&Wr(t,t.return);break;case 5:if(pn(e,n),Dn(n),i&512&&t!==null&&Wr(t,t.return),n.flags&32){var r=n.stateNode;try{Ks(r,"")}catch(p){Qe(n,n.return,p)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Mp(r,s),Bu(a,o);var u=Bu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?bp(r,f):c==="dangerouslySetInnerHTML"?Tp(r,f):c==="children"?Ks(r,f):Nc(r,c,f,u)}switch(a){case"input":zu(r,s);break;case"textarea":wp(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qr(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?qr(r,!!s.multiple,s.defaultValue,!0):qr(r,!!s.multiple,s.multiple?[]:"",!1))}r[oo]=s}catch(p){Qe(n,n.return,p)}}break;case 6:if(pn(e,n),Dn(n),i&4){if(n.stateNode===null)throw Error(Z(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(p){Qe(n,n.return,p)}}break;case 3:if(pn(e,n),Dn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(p){Qe(n,n.return,p)}break;case 4:pn(e,n),Dn(n);break;case 13:pn(e,n),Dn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pf=Je())),i&4&&Dd(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Tt=(u=Tt)||c,pn(e,n),Tt=u):pn(e,n),Dn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(le=n,c=n.child;c!==null;){for(f=le=c;le!==null;){switch(d=le,g=d.child,d.tag){case 0:case 11:case 14:case 15:js(4,d,d.return);break;case 1:Wr(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(p){Qe(i,t,p)}}break;case 5:Wr(d,d.return);break;case 22:if(d.memoizedState!==null){Id(f);continue}}g!==null?(g.return=d,le=g):Id(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cp("display",o))}catch(p){Qe(n,n.return,p)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(p){Qe(n,n.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pn(e,n),Dn(n),i&4&&Dd(n);break;case 21:break;default:pn(e,n),Dn(n)}}function Dn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Jm(t)){var i=t;break e}t=t.return}throw Error(Z(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ks(r,""),i.flags&=-33);var s=Pd(n);gc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Pd(n);mc(n,a,o);break;default:throw Error(Z(161))}}catch(l){Qe(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Yv(n,e,t){le=n,ng(n)}function ng(n,e,t){for(var i=(n.mode&1)!==0;le!==null;){var r=le,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Oo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Tt;a=Oo;var u=Tt;if(Oo=o,(Tt=l)&&!u)for(le=r;le!==null;)o=le,l=o.child,o.tag===22&&o.memoizedState!==null?Nd(r):l!==null?(l.return=o,le=l):Nd(r);for(;s!==null;)le=s,ng(s),s=s.sibling;le=r,Oo=a,Tt=u}Rd(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,le=s):Rd(n)}}function Rd(n){for(;le!==null;){var e=le;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Tt||sl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Tt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:xn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&md(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}md(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&to(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}Tt||e.flags&512&&pc(e)}catch(d){Qe(e,e.return,d)}}if(e===n){le=null;break}if(t=e.sibling,t!==null){t.return=e.return,le=t;break}le=e.return}}function Id(n){for(;le!==null;){var e=le;if(e===n){le=null;break}var t=e.sibling;if(t!==null){t.return=e.return,le=t;break}le=e.return}}function Nd(n){for(;le!==null;){var e=le;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{sl(4,e)}catch(l){Qe(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Qe(e,r,l)}}var s=e.return;try{pc(e)}catch(l){Qe(e,s,l)}break;case 5:var o=e.return;try{pc(e)}catch(l){Qe(e,o,l)}}}catch(l){Qe(e,e.return,l)}if(e===n){le=null;break}var a=e.sibling;if(a!==null){a.return=e.return,le=a;break}le=e.return}}var Zv=Math.ceil,Wa=ri.ReactCurrentDispatcher,df=ri.ReactCurrentOwner,un=ri.ReactCurrentBatchConfig,Re=0,pt=null,nt=null,xt=0,Xt=0,jr=Ii(0),ot=0,ho=null,or=0,ol=0,hf=0,Xs=null,Ft=null,pf=0,ls=1/0,Xn=null,ja=!1,vc=null,Ci=null,Bo=!1,xi=null,Xa=0,qs=0,_c=null,ya=-1,Sa=0;function Rt(){return(Re&6)!==0?Je():ya!==-1?ya:ya=Je()}function bi(n){return(n.mode&1)===0?1:(Re&2)!==0&&xt!==0?xt&-xt:Iv.transition!==null?(Sa===0&&(Sa=Op()),Sa):(n=Ue,n!==0||(n=window.event,n=n===void 0?16:Xp(n.type)),n)}function Cn(n,e,t,i){if(50<qs)throw qs=0,_c=null,Error(Z(185));vo(n,t,i),((Re&2)===0||n!==pt)&&(n===pt&&((Re&2)===0&&(ol|=t),ot===4&&vi(n,xt)),Vt(n,i),t===1&&Re===0&&(e.mode&1)===0&&(ls=Je()+500,nl&&Ni()))}function Vt(n,e){var t=n.callbackNode;I0(n,e);var i=La(n,n===pt?xt:0);if(i===0)t!==null&&Hf(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Hf(t),e===1)n.tag===0?Rv(zd.bind(null,n)):fm(zd.bind(null,n)),Av(function(){(Re&6)===0&&Ni()}),t=null;else{switch(Bp(i)){case 1:t=Oc;break;case 4:t=kp;break;case 16:t=Aa;break;case 536870912:t=Up;break;default:t=Aa}t=cg(t,ig.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ig(n,e){if(ya=-1,Sa=0,(Re&6)!==0)throw Error(Z(327));var t=n.callbackNode;if(Qr()&&n.callbackNode!==t)return null;var i=La(n,n===pt?xt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=qa(n,i);else{e=i;var r=Re;Re|=2;var s=sg();(pt!==n||xt!==e)&&(Xn=null,ls=Je()+500,Ji(n,e));do try{Jv();break}catch(a){rg(n,a)}while(1);Qc(),Wa.current=s,Re=r,nt!==null?e=0:(pt=null,xt=0,e=ot)}if(e!==0){if(e===2&&(r=ju(n),r!==0&&(i=r,e=xc(n,r))),e===1)throw t=ho,Ji(n,0),vi(n,i),Vt(n,Je()),t;if(e===6)vi(n,i);else{if(r=n.current.alternate,(i&30)===0&&!Kv(r)&&(e=qa(n,i),e===2&&(s=ju(n),s!==0&&(i=s,e=xc(n,s))),e===1))throw t=ho,Ji(n,0),vi(n,i),Vt(n,Je()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Z(345));case 2:Hi(n,Ft,Xn);break;case 3:if(vi(n,i),(i&130023424)===i&&(e=pf+500-Je(),10<e)){if(La(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Rt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ju(Hi.bind(null,n,Ft,Xn),e);break}Hi(n,Ft,Xn);break;case 4:if(vi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Tn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Je()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Zv(i/1960))-i,10<i){n.timeoutHandle=Ju(Hi.bind(null,n,Ft,Xn),i);break}Hi(n,Ft,Xn);break;case 5:Hi(n,Ft,Xn);break;default:throw Error(Z(329))}}}return Vt(n,Je()),n.callbackNode===t?ig.bind(null,n):null}function xc(n,e){var t=Xs;return n.current.memoizedState.isDehydrated&&(Ji(n,e).flags|=256),n=qa(n,e),n!==2&&(e=Ft,Ft=t,e!==null&&yc(e)),n}function yc(n){Ft===null?Ft=n:Ft.push.apply(Ft,n)}function Kv(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!bn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vi(n,e){for(e&=~hf,e&=~ol,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Tn(e),i=1<<t;n[t]=-1,e&=~i}}function zd(n){if((Re&6)!==0)throw Error(Z(327));Qr();var e=La(n,0);if((e&1)===0)return Vt(n,Je()),null;var t=qa(n,e);if(n.tag!==0&&t===2){var i=ju(n);i!==0&&(e=i,t=xc(n,i))}if(t===1)throw t=ho,Ji(n,0),vi(n,e),Vt(n,Je()),t;if(t===6)throw Error(Z(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Hi(n,Ft,Xn),Vt(n,Je()),null}function mf(n,e){var t=Re;Re|=1;try{return n(e)}finally{Re=t,Re===0&&(ls=Je()+500,nl&&Ni())}}function ar(n){xi!==null&&xi.tag===0&&(Re&6)===0&&Qr();var e=Re;Re|=1;var t=un.transition,i=Ue;try{if(un.transition=null,Ue=1,n)return n()}finally{Ue=i,un.transition=t,Re=e,(Re&6)===0&&Ni()}}function gf(){Xt=jr.current,He(jr)}function Ji(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,bv(t)),nt!==null)for(t=nt.return;t!==null;){var i=t;switch(Yc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Na();break;case 3:os(),He(Ot),He(bt),sf();break;case 5:rf(i);break;case 4:os();break;case 13:He($e);break;case 19:He($e);break;case 10:Jc(i.type._context);break;case 22:case 23:gf()}t=t.return}if(pt=n,nt=n=Ai(n.current,null),xt=Xt=e,ot=0,ho=null,hf=ol=or=0,Ft=Xs=null,$i!==null){for(e=0;e<$i.length;e++)if(t=$i[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}$i=null}return n}function rg(n,e){do{var t=nt;try{if(Qc(),va.current=Ha,Ga){for(var i=Ye.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ga=!1}if(sr=0,dt=st=Ye=null,Ws=!1,uo=0,df.current=null,t===null||t.return===null){ot=1,ho=e,nt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Md(o);if(g!==null){g.flags&=-257,wd(g,o,a,s,e),g.mode&1&&Sd(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var p=new Set;p.add(l),e.updateQueue=p}else x.add(l);break e}else{if((e&1)===0){Sd(s,u,e),vf();break e}l=Error(Z(426))}}else if(Xe&&a.mode&1){var h=Md(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),wd(h,o,a,s,e),Zc(as(l,a));break e}}s=l=as(l,a),ot!==4&&(ot=2),Xs===null?Xs=[s]:Xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Vm(s,l,e);pd(s,m);break e;case 1:a=l;var v=s.type,_=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ci===null||!Ci.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Gm(s,a,e);pd(s,y);break e}}s=s.return}while(s!==null)}ag(t)}catch(w){e=w,nt===t&&t!==null&&(nt=t=t.return);continue}break}while(1)}function sg(){var n=Wa.current;return Wa.current=Ha,n===null?Ha:n}function vf(){(ot===0||ot===3||ot===2)&&(ot=4),pt===null||(or&268435455)===0&&(ol&268435455)===0||vi(pt,xt)}function qa(n,e){var t=Re;Re|=2;var i=sg();(pt!==n||xt!==e)&&(Xn=null,Ji(n,e));do try{Qv();break}catch(r){rg(n,r)}while(1);if(Qc(),Re=t,Wa.current=i,nt!==null)throw Error(Z(261));return pt=null,xt=0,ot}function Qv(){for(;nt!==null;)og(nt)}function Jv(){for(;nt!==null&&!E0();)og(nt)}function og(n){var e=ug(n.alternate,n,Xt);n.memoizedProps=n.pendingProps,e===null?ag(n):nt=e,df.current=null}function ag(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=jv(t,e,Xt),t!==null){nt=t;return}}else{if(t=Xv(t,e),t!==null){t.flags&=32767,nt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ot=6,nt=null;return}}if(e=e.sibling,e!==null){nt=e;return}nt=e=n}while(e!==null);ot===0&&(ot=5)}function Hi(n,e,t){var i=Ue,r=un.transition;try{un.transition=null,Ue=1,e_(n,e,t,i)}finally{un.transition=r,Ue=i}return null}function e_(n,e,t,i){do Qr();while(xi!==null);if((Re&6)!==0)throw Error(Z(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Z(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(N0(n,s),n===pt&&(nt=pt=null,xt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Bo||(Bo=!0,cg(Aa,function(){return Qr(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=un.transition,un.transition=null;var o=Ue;Ue=1;var a=Re;Re|=4,df.current=null,$v(n,t),tg(t,n),yv(Ku),Pa=!!Zu,Ku=Zu=null,n.current=t,Yv(t),T0(),Re=a,Ue=o,un.transition=s}else n.current=t;if(Bo&&(Bo=!1,xi=n,Xa=r),s=n.pendingLanes,s===0&&(Ci=null),A0(t.stateNode),Vt(n,Je()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ja)throw ja=!1,n=vc,vc=null,n;return(Xa&1)!==0&&n.tag!==0&&Qr(),s=n.pendingLanes,(s&1)!==0?n===_c?qs++:(qs=0,_c=n):qs=0,Ni(),null}function Qr(){if(xi!==null){var n=Bp(Xa),e=un.transition,t=Ue;try{if(un.transition=null,Ue=16>n?16:n,xi===null)var i=!1;else{if(n=xi,xi=null,Xa=0,(Re&6)!==0)throw Error(Z(331));var r=Re;for(Re|=4,le=n.current;le!==null;){var s=le,o=s.child;if((le.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(le=u;le!==null;){var c=le;switch(c.tag){case 0:case 11:case 15:js(8,c,s)}var f=c.child;if(f!==null)f.return=c,le=f;else for(;le!==null;){c=le;var d=c.sibling,g=c.return;if(Qm(c),c===u){le=null;break}if(d!==null){d.return=g,le=d;break}le=g}}}var x=s.alternate;if(x!==null){var p=x.child;if(p!==null){x.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}le=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,le=o;else e:for(;le!==null;){if(s=le,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:js(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,le=m;break e}le=s.return}}var v=n.current;for(le=v;le!==null;){o=le;var _=o.child;if((o.subtreeFlags&2064)!==0&&_!==null)_.return=o,le=_;else e:for(o=v;le!==null;){if(a=le,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(w){Qe(a,a.return,w)}if(a===o){le=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,le=y;break e}le=a.return}}if(Re=r,Ni(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(Ka,n)}catch{}i=!0}return i}finally{Ue=t,un.transition=e}}return!1}function Fd(n,e,t){e=as(t,e),e=Vm(n,e,1),n=Ti(n,e,1),e=Rt(),n!==null&&(vo(n,1,e),Vt(n,e))}function Qe(n,e,t){if(n.tag===3)Fd(n,n,t);else for(;e!==null;){if(e.tag===3){Fd(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ci===null||!Ci.has(i))){n=as(t,n),n=Gm(e,n,1),e=Ti(e,n,1),n=Rt(),e!==null&&(vo(e,1,n),Vt(e,n));break}}e=e.return}}function t_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Rt(),n.pingedLanes|=n.suspendedLanes&t,pt===n&&(xt&t)===t&&(ot===4||ot===3&&(xt&130023424)===xt&&500>Je()-pf?Ji(n,0):hf|=t),Vt(n,e)}function lg(n,e){e===0&&((n.mode&1)===0?e=1:(e=Po,Po<<=1,(Po&130023424)===0&&(Po=4194304)));var t=Rt();n=ni(n,e),n!==null&&(vo(n,e,t),Vt(n,t))}function n_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),lg(n,t)}function i_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Z(314))}i!==null&&i.delete(e),lg(n,t)}var ug;ug=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ot.current)Ut=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Ut=!1,Wv(n,e,t);Ut=(n.flags&131072)!==0}else Ut=!1,Xe&&(e.flags&1048576)!==0&&dm(e,ka,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xa(n,e),n=e.pendingProps;var r=is(e,bt.current);Kr(e,t),r=af(null,e,i,n,r,t);var s=lf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(i)?(s=!0,za(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tf(e),r.updater=il,e.stateNode=r,r._reactInternals=e,oc(e,i,n,t),e=uc(null,e,i,!0,s,t)):(e.tag=0,Xe&&s&&$c(e),Dt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(xa(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=s_(i),n=xn(i,n),r){case 0:e=lc(null,e,i,n,t);break e;case 1:e=Cd(null,e,i,n,t);break e;case 11:e=Ed(null,e,i,n,t);break e;case 14:e=Td(null,e,i,xn(i.type,n),t);break e}throw Error(Z(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xn(i,r),lc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xn(i,r),Cd(n,e,i,r,t);case 3:e:{if(Xm(e),n===null)throw Error(Z(387));i=e.pendingProps,s=e.memoizedState,r=s.element,gm(n,e),Ba(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=as(Error(Z(423)),e),e=bd(n,e,i,t,r);break e}else if(i!==r){r=as(Error(Z(424)),e),e=bd(n,e,i,t,r);break e}else for($t=Ei(e.stateNode.containerInfo.firstChild),Yt=e,Xe=!0,Sn=null,t=ym(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(rs(),i===r){e=ii(n,e,t);break e}Dt(n,e,i,t)}e=e.child}return e;case 5:return Sm(e),n===null&&ic(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Qu(i,r)?o=null:s!==null&&Qu(i,s)&&(e.flags|=32),jm(n,e),Dt(n,e,o,t),e.child;case 6:return n===null&&ic(e),null;case 13:return qm(n,e,t);case 4:return nf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ss(e,null,i,t):Dt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xn(i,r),Ed(n,e,i,r,t);case 7:return Dt(n,e,e.pendingProps,t),e.child;case 8:return Dt(n,e,e.pendingProps.children,t),e.child;case 12:return Dt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ve(Ua,i._currentValue),i._currentValue=o,s!==null)if(bn(s.value,o)){if(s.children===r.children&&!Ot.current){e=ii(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Qn(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),rc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Z(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),rc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Kr(e,t),r=fn(r),i=i(r),e.flags|=1,Dt(n,e,i,t),e.child;case 14:return i=e.type,r=xn(i,e.pendingProps),r=xn(i.type,r),Td(n,e,i,r,t);case 15:return Hm(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:xn(i,r),xa(n,e),e.tag=1,Bt(i)?(n=!0,za(e)):n=!1,Kr(e,t),_m(e,i,r),oc(e,i,r,t),uc(null,e,i,!0,n,t);case 19:return $m(n,e,t);case 22:return Wm(n,e,t)}throw Error(Z(156,e.tag))};function cg(n,e){return Fp(n,e)}function r_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(n,e,t,i){return new r_(n,e,t,i)}function _f(n){return n=n.prototype,!(!n||!n.isReactComponent)}function s_(n){if(typeof n=="function")return _f(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Fc)return 11;if(n===kc)return 14}return 2}function Ai(n,e){var t=n.alternate;return t===null?(t=an(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ma(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")_f(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case zr:return er(t.children,r,s,e);case zc:o=8,r|=8;break;case Pu:return n=an(12,t,e,r|2),n.elementType=Pu,n.lanes=s,n;case Du:return n=an(13,t,e,r),n.elementType=Du,n.lanes=s,n;case Ru:return n=an(19,t,e,r),n.elementType=Ru,n.lanes=s,n;case xp:return al(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case vp:o=10;break e;case _p:o=9;break e;case Fc:o=11;break e;case kc:o=14;break e;case pi:o=16,i=null;break e}throw Error(Z(130,n==null?n:typeof n,""))}return e=an(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function er(n,e,t,i){return n=an(7,n,i,e),n.lanes=t,n}function al(n,e,t,i){return n=an(22,n,i,e),n.elementType=xp,n.lanes=t,n.stateNode={isHidden:!1},n}function Xl(n,e,t){return n=an(6,n,null,e),n.lanes=t,n}function ql(n,e,t){return e=an(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function o_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xf(n,e,t,i,r,s,o,a,l){return n=new o_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},tf(s),n}function a_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function fg(n){if(!n)return Di;n=n._reactInternals;e:{if(hr(n)!==n||n.tag!==1)throw Error(Z(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Z(171))}if(n.tag===1){var t=n.type;if(Bt(t))return cm(n,t,e)}return e}function dg(n,e,t,i,r,s,o,a,l){return n=xf(t,i,!0,n,r,s,o,a,l),n.context=fg(null),t=n.current,i=Rt(),r=bi(t),s=Qn(i,r),s.callback=e!=null?e:null,Ti(t,s,r),n.current.lanes=r,vo(n,r,i),Vt(n,i),n}function ll(n,e,t,i){var r=e.current,s=Rt(),o=bi(r);return t=fg(t),e.context===null?e.context=t:e.pendingContext=t,e=Qn(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ti(r,e,o),n!==null&&(Cn(n,r,o,s),ga(n,r,o)),o}function $a(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function kd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function yf(n,e){kd(n,e),(n=n.alternate)&&kd(n,e)}function l_(){return null}var hg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sf(n){this._internalRoot=n}ul.prototype.render=Sf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Z(409));ll(n,e,null,null)};ul.prototype.unmount=Sf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ar(function(){ll(null,n,null,null)}),e[ti]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var e=Hp();n={blockedOn:null,target:n,priority:e};for(var t=0;t<gi.length&&e!==0&&e<gi[t].priority;t++);gi.splice(t,0,n),t===0&&jp(n)}};function Mf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ud(){}function u_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=$a(o);s.call(u)}}var o=dg(e,i,n,0,null,!1,!1,"",Ud);return n._reactRootContainer=o,n[ti]=o.current,ro(n.nodeType===8?n.parentNode:n),ar(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=$a(l);a.call(u)}}var l=xf(n,0,!1,null,null,!1,!1,"",Ud);return n._reactRootContainer=l,n[ti]=l.current,ro(n.nodeType===8?n.parentNode:n),ar(function(){ll(e,l,t,i)}),l}function fl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=$a(o);a.call(l)}}ll(e,o,n,r)}else o=u_(t,e,n,r,i);return $a(o)}Vp=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ns(e.pendingLanes);t!==0&&(Bc(e,t|1),Vt(e,Je()),(Re&6)===0&&(ls=Je()+500,Ni()))}break;case 13:ar(function(){var i=ni(n,1);if(i!==null){var r=Rt();Cn(i,n,1,r)}}),yf(n,1)}};Vc=function(n){if(n.tag===13){var e=ni(n,134217728);if(e!==null){var t=Rt();Cn(e,n,134217728,t)}yf(n,134217728)}};Gp=function(n){if(n.tag===13){var e=bi(n),t=ni(n,e);if(t!==null){var i=Rt();Cn(t,n,e,i)}yf(n,e)}};Hp=function(){return Ue};Wp=function(n,e){var t=Ue;try{return Ue=n,e()}finally{Ue=t}};Gu=function(n,e,t){switch(e){case"input":if(zu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=tl(i);if(!r)throw Error(Z(90));Sp(i),zu(i,r)}}}break;case"textarea":wp(n,t);break;case"select":e=t.value,e!=null&&qr(n,!!t.multiple,e,!1)}};Pp=mf;Dp=ar;var c_={usingClientEntryPoint:!1,Events:[xo,Or,tl,Ap,Lp,mf]},bs={findFiberByHostInstance:qi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},f_={bundleType:bs.bundleType,version:bs.version,rendererPackageName:bs.rendererPackageName,rendererConfig:bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Np(n),n===null?null:n.stateNode},findFiberByHostInstance:bs.findFiberByHostInstance||l_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{Ka=Vo.inject(f_),zn=Vo}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c_;Kt.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(Z(200));return a_(n,e,null,t)};Kt.createRoot=function(n,e){if(!Mf(n))throw Error(Z(299));var t=!1,i="",r=hg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xf(n,1,!1,null,null,t,!1,i,r),n[ti]=e.current,ro(n.nodeType===8?n.parentNode:n),new Sf(e)};Kt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Z(188)):(n=Object.keys(n).join(","),Error(Z(268,n)));return n=Np(e),n=n===null?null:n.stateNode,n};Kt.flushSync=function(n){return ar(n)};Kt.hydrate=function(n,e,t){if(!cl(e))throw Error(Z(200));return fl(null,n,e,!0,t)};Kt.hydrateRoot=function(n,e,t){if(!Mf(n))throw Error(Z(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=hg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=dg(e,null,n,1,t!=null?t:null,r,!1,s,o),n[ti]=e.current,ro(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new ul(e)};Kt.render=function(n,e,t){if(!cl(e))throw Error(Z(200));return fl(null,n,e,!1,t)};Kt.unmountComponentAtNode=function(n){if(!cl(n))throw Error(Z(40));return n._reactRootContainer?(ar(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[ti]=null})}),!0):!1};Kt.unstable_batchedUpdates=mf;Kt.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!cl(t))throw Error(Z(200));if(n==null||n._reactInternals===void 0)throw Error(Z(38));return fl(n,e,t,!1,i)};Kt.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=Kt})(dp);var Od=dp.exports;Au.createRoot=Od.createRoot,Au.hydrateRoot=Od.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="146",d_=0,Bd=1,h_=2,pg=1,p_=2,Fs=3,us=0,cn=1,yi=2,Li=0,Jr=1,Vd=2,Gd=3,Hd=4,m_=5,Ir=100,g_=101,v_=102,Wd=103,jd=104,__=200,x_=201,y_=202,S_=203,mg=204,gg=205,M_=206,w_=207,E_=208,T_=209,C_=210,b_=0,A_=1,L_=2,Sc=3,P_=4,D_=5,R_=6,I_=7,dl=0,N_=1,z_=2,Jn=0,F_=1,k_=2,U_=3,O_=4,B_=5,vg=300,cs=301,fs=302,Mc=303,wc=304,hl=306,Ya=1e3,Mn=1001,Ec=1002,kt=1003,Xd=1004,qd=1005,sn=1006,V_=1007,pl=1008,lr=1009,G_=1010,H_=1011,_g=1012,W_=1013,Zi=1014,Ki=1015,po=1016,j_=1017,X_=1018,es=1020,q_=1021,$_=1022,wn=1023,Y_=1024,Z_=1025,tr=1026,ds=1027,K_=1028,Q_=1029,J_=1030,ex=1031,tx=1033,$l=33776,Yl=33777,Zl=33778,Kl=33779,$d=35840,Yd=35841,Zd=35842,Kd=35843,nx=36196,Qd=37492,Jd=37496,eh=37808,th=37809,nh=37810,ih=37811,rh=37812,sh=37813,oh=37814,ah=37815,lh=37816,uh=37817,ch=37818,fh=37819,dh=37820,hh=37821,ph=36492,ur=3e3,qe=3001,ix=3200,rx=3201,ml=0,sx=1,qn="srgb",Qi="srgb-linear",Ql=7680,ox=519,mh=35044,gh="300 es",Tc=1035;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jl=Math.PI/180,vh=180/Math.PI;function So(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function ax(n,e){return(n%e+e)%e}function eu(n,e,t){return(1-t)*n+t*e}function _h(n){return(n&n-1)===0&&n!==0}function Cc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Go(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ln{constructor(){ln.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],g=i[5],x=i[8],p=r[0],h=r[3],m=r[6],v=r[1],_=r[4],y=r[7],w=r[2],T=r[5],A=r[8];return s[0]=o*p+a*v+l*w,s[3]=o*h+a*_+l*T,s[6]=o*m+a*y+l*A,s[1]=u*p+c*v+f*w,s[4]=u*h+c*_+f*T,s[7]=u*m+c*y+f*A,s[2]=d*p+g*v+x*w,s[5]=d*h+g*_+x*T,s[8]=d*m+g*y+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,g=u*s-o*l,x=t*f+i*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/x;return e[0]=f*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=d*p,e[4]=(c*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=g*p,e[7]=(i*l-u*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*c,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function xg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const tu={[qn]:{[Qi]:nr},[Qi]:{[qn]:wa}},mn={legacyMode:!0,get workingColorSpace(){return Qi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(tu[e]&&tu[e][t]!==void 0){const i=tu[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},gn={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function nu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Wo(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ae{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qi){return this.r=e,this.g=t,this.b=i,mn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qi){if(e=ax(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=nu(o,s,e+1/3),this.g=nu(o,s,e),this.b=nu(o,s,e-1/3)}return mn.toWorkingColorSpace(this,r),this}setStyle(e,t=qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,mn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,mn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,mn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,mn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=qn){const i=yg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return mn.fromWorkingColorSpace(Wo(this,rt),e),qt(rt.r*255,0,255)<<16^qt(rt.g*255,0,255)<<8^qt(rt.b*255,0,255)<<0}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qi){mn.fromWorkingColorSpace(Wo(this,rt),t);const i=rt.r,r=rt.g,s=rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Qi){return mn.fromWorkingColorSpace(Wo(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=qn){return mn.fromWorkingColorSpace(Wo(this,rt),e),e!==qn?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(gn),gn.h+=e,gn.s+=t,gn.l+=i,this.setHSL(gn.h,gn.s,gn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(Ho);const i=eu(gn.h,Ho.h,t),r=eu(gn.s,Ho.s,t),s=eu(gn.l,Ho.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ae.NAMES=yg;let xr;class Sg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=mo("canvas")),xr.width=e.width,xr.height=e.height;const i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=nr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nr(t[i]/255)*255):t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Mg{constructor(e=null){this.isSource=!0,this.uuid=So(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(iu(r[o].image)):s.push(iu(r[o]))}else s=iu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function iu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lx=0;class hn extends vs{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=Mn,r=Mn,s=sn,o=pl,a=wn,l=lr,u=1,c=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=So(),this.name="",this.source=new Mg(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ln,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ya:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ya:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=vg;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],g=l[5],x=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-p)<.01&&Math.abs(x-h)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+p)<.1&&Math.abs(x+h)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,y=(g+1)/2,w=(m+1)/2,T=(c+d)/4,A=(f+p)/4,S=(x+h)/4;return _>y&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=A/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=S/s),this.set(i,r,s,t),this}let v=Math.sqrt((h-x)*(h-x)+(f-p)*(f-p)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(h-x)/v,this.y=(f-p)/v,this.z=(d-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cr extends vs{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wg extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ux extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],g=s[o+1],x=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=x,e[t+3]=p;return}if(f!==p||l!==d||u!==g||c!==x){let h=1-a;const m=l*d+u*g+c*x+f*p,v=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const w=Math.sqrt(_),T=Math.atan2(w,m*v);h=Math.sin(h*T)/w,a=Math.sin(a*T)/w}const y=a*v;if(l=l*h+d*y,u=u*h+g*y,c=c*h+x*y,f=f*h+p*y,h===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],g=s[o+2],x=s[o+3];return e[t]=a*x+c*f+l*g-u*d,e[t+1]=l*x+c*d+u*f-a*g,e[t+2]=u*x+c*g+a*d-l*f,e[t+3]=c*x-a*f-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*g*x,this._y=u*g*f-d*c*x,this._z=u*c*x+d*g*f,this._w=u*c*f-d*g*x;break;case"YXZ":this._x=d*c*f+u*g*x,this._y=u*g*f-d*c*x,this._z=u*c*x-d*g*f,this._w=u*c*f+d*g*x;break;case"ZXY":this._x=d*c*f-u*g*x,this._y=u*g*f+d*c*x,this._z=u*c*x+d*g*f,this._w=u*c*f-d*g*x;break;case"ZYX":this._x=d*c*f-u*g*x,this._y=u*g*f+d*c*x,this._z=u*c*x-d*g*f,this._w=u*c*f+d*g*x;break;case"YZX":this._x=d*c*f+u*g*x,this._y=u*g*f+d*c*x,this._z=u*c*x-d*g*f,this._w=u*c*f-d*g*x;break;case"XZY":this._x=d*c*f-u*g*x,this._y=u*g*f-d*c*x,this._z=u*c*x+d*g*f,this._w=u*c*f+d*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,f=l*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new z,xh=new Mo;class wo{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<t&&(t=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<t&&(t=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Oi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Oi)}else i.boundingBox===null&&i.computeBoundingBox(),su.copy(i.boundingBox),su.applyMatrix4(e.matrixWorld),this.union(su);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),jo.subVectors(this.max,As),yr.subVectors(e.a,As),Sr.subVectors(e.b,As),Mr.subVectors(e.c,As),ai.subVectors(Sr,yr),li.subVectors(Mr,Sr),Bi.subVectors(yr,Mr);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Bi.z,Bi.y,ai.z,0,-ai.x,li.z,0,-li.x,Bi.z,0,-Bi.x,-ai.y,ai.x,0,-li.y,li.x,0,-Bi.y,Bi.x,0];return!ou(t,yr,Sr,Mr,jo)||(t=[1,0,0,0,1,0,0,0,1],!ou(t,yr,Sr,Mr,jo))?!1:(Xo.crossVectors(ai,li),t=[Xo.x,Xo.y,Xo.z],ou(t,yr,Sr,Mr,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Oi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new z,new z,new z,new z,new z,new z,new z,new z],Oi=new z,su=new wo,yr=new z,Sr=new z,Mr=new z,ai=new z,li=new z,Bi=new z,As=new z,jo=new z,Xo=new z,Vi=new z;function ou(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Vi.fromArray(n,s);const a=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),u=t.dot(Vi),c=i.dot(Vi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const cx=new wo,Ls=new z,au=new z;class gl{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(au)),this.expandByPoint(Ls.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new z,lu=new z,qo=new z,ui=new z,uu=new z,$o=new z,cu=new z;class Eg{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.direction).multiplyScalar(t).add(this.origin),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){lu.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(lu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=ui.dot(this.direction),l=-ui.dot(qo),u=ui.lengthSq(),c=Math.abs(1-o*o);let f,d,g,x;if(c>0)if(f=o*l-a,d=o*a-l,x=s*c,f>=0)if(d>=-x)if(d<=x){const p=1/c;f*=p,d*=p,g=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(qo).multiplyScalar(d).add(lu),g}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),r=Gn.dot(Gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,r,s){uu.subVectors(t,e),$o.subVectors(i,e),cu.crossVectors(uu,$o);let o=this.direction.dot(cu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,e);const l=a*this.direction.dot($o.crossVectors(ui,$o));if(l<0)return null;const u=a*this.direction.dot(uu.cross(ui));if(u<0||l+u>o)return null;const c=-a*ui.dot(cu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,f,d,g,x,p,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=g,m[7]=x,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/wr.setFromMatrixColumn(e,0).length(),s=1/wr.setFromMatrixColumn(e,1).length(),o=1/wr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,g=o*f,x=a*c,p=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=g+x*u,t[5]=d-p*u,t[9]=-a*l,t[2]=p-d*u,t[6]=x+g*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,g=l*f,x=u*c,p=u*f;t[0]=d+p*a,t[4]=x*a-g,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=g*a-x,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,g=l*f,x=u*c,p=u*f;t[0]=d-p*a,t[4]=-o*f,t[8]=x+g*a,t[1]=g+x*a,t[5]=o*c,t[9]=p-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,g=o*f,x=a*c,p=a*f;t[0]=l*c,t[4]=x*u-g,t[8]=d*u+p,t[1]=l*f,t[5]=p*u+d,t[9]=g*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,x=a*l,p=a*u;t[0]=l*c,t[4]=p-d*f,t[8]=x*f+g,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=g*f+x,t[10]=d-p*f}else if(e.order==="XZY"){const d=o*l,g=o*u,x=a*l,p=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+p,t[5]=o*c,t[9]=g*f-x,t[2]=x*f-g,t[6]=a*c,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fx,e,dx)}lookAt(e,t,i){const r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),ci.crossVectors(i,Wt),ci.lengthSq()===0&&(Math.abs(i.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),ci.crossVectors(i,Wt)),ci.normalize(),Yo.crossVectors(Wt,ci),r[0]=ci.x,r[4]=Yo.x,r[8]=Wt.x,r[1]=ci.y,r[5]=Yo.y,r[9]=Wt.y,r[2]=ci.z,r[6]=Yo.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],g=i[13],x=i[2],p=i[6],h=i[10],m=i[14],v=i[3],_=i[7],y=i[11],w=i[15],T=r[0],A=r[4],S=r[8],b=r[12],R=r[1],q=r[5],ee=r[9],V=r[13],k=r[2],X=r[6],Y=r[10],Q=r[14],I=r[3],L=r[7],D=r[11],$=r[15];return s[0]=o*T+a*R+l*k+u*I,s[4]=o*A+a*q+l*X+u*L,s[8]=o*S+a*ee+l*Y+u*D,s[12]=o*b+a*V+l*Q+u*$,s[1]=c*T+f*R+d*k+g*I,s[5]=c*A+f*q+d*X+g*L,s[9]=c*S+f*ee+d*Y+g*D,s[13]=c*b+f*V+d*Q+g*$,s[2]=x*T+p*R+h*k+m*I,s[6]=x*A+p*q+h*X+m*L,s[10]=x*S+p*ee+h*Y+m*D,s[14]=x*b+p*V+h*Q+m*$,s[3]=v*T+_*R+y*k+w*I,s[7]=v*A+_*q+y*X+w*L,s[11]=v*S+_*ee+y*Y+w*D,s[15]=v*b+_*V+y*Q+w*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],g=e[14],x=e[3],p=e[7],h=e[11],m=e[15];return x*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*g-i*l*g)+p*(+t*l*g-t*u*d+s*o*d-r*o*g+r*u*c-s*l*c)+h*(+t*u*f-t*a*g-s*o*f+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],g=e[11],x=e[12],p=e[13],h=e[14],m=e[15],v=f*h*u-p*d*u+p*l*g-a*h*g-f*l*m+a*d*m,_=x*d*u-c*h*u-x*l*g+o*h*g+c*l*m-o*d*m,y=c*p*u-x*f*u+x*a*g-o*p*g-c*a*m+o*f*m,w=x*f*l-c*p*l-x*a*d+o*p*d+c*a*h-o*f*h,T=t*v+i*_+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(p*d*s-f*h*s-p*r*g+i*h*g+f*r*m-i*d*m)*A,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*m+i*l*m)*A,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*g-i*l*g)*A,e[4]=_*A,e[5]=(c*h*s-x*d*s+x*r*g-t*h*g-c*r*m+t*d*m)*A,e[6]=(x*l*s-o*h*s-x*r*u+t*h*u+o*r*m-t*l*m)*A,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*g+t*l*g)*A,e[8]=y*A,e[9]=(x*f*s-c*p*s-x*i*g+t*p*g+c*i*m-t*f*m)*A,e[10]=(o*p*s-x*a*s+x*i*u-t*p*u-o*i*m+t*a*m)*A,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*g-t*a*g)*A,e[12]=w*A,e[13]=(c*p*r-x*f*r+x*i*d-t*p*d-c*i*h+t*f*h)*A,e[14]=(x*a*r-o*p*r-x*i*l+t*p*l+o*i*h-t*a*h)*A,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,g=s*c,x=s*f,p=o*c,h=o*f,m=a*f,v=l*u,_=l*c,y=l*f,w=i.x,T=i.y,A=i.z;return r[0]=(1-(p+m))*w,r[1]=(g+y)*w,r[2]=(x-_)*w,r[3]=0,r[4]=(g-y)*T,r[5]=(1-(d+m))*T,r[6]=(h+v)*T,r[7]=0,r[8]=(x+_)*A,r[9]=(h-v)*A,r[10]=(1-(d+p))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=wr.set(r[0],r[1],r[2]).length();const o=wr.set(r[4],r[5],r[6]).length(),a=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const u=1/s,c=1/o,f=1/a;return vn.elements[0]*=u,vn.elements[1]*=u,vn.elements[2]*=u,vn.elements[4]*=c,vn.elements[5]*=c,vn.elements[6]*=c,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,t.setFromRotationMatrix(vn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),f=(t+e)*l,d=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wr=new z,vn=new it,fx=new z(0,0,0),dx=new z(1,1,1),ci=new z,Yo=new z,Wt=new z,yh=new it,Sh=new Mo;class Eo{constructor(e=0,t=0,i=0,r=Eo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Eo.DefaultOrder="XYZ";Eo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Tg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hx=0;const Mh=new z,Er=new Mo,Hn=new it,Zo=new z,Ps=new z,px=new z,mx=new Mo,wh=new z(1,0,0),Eh=new z(0,1,0),Th=new z(0,0,1),gx={type:"added"},Ch={type:"removed"};class mt extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DefaultUp.clone();const e=new z,t=new Eo,i=new Mo,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new ln}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=mt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DefaultMatrixWorldAutoUpdate,this.layers=new Tg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,t){return Mh.copy(e).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zo.copy(e):Zo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ps,Zo,this.up):Hn.lookAt(Zo,Ps,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(Hn),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ch)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ch)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DefaultUp=new z(0,1,0);mt.DefaultMatrixAutoUpdate=!0;mt.DefaultMatrixWorldAutoUpdate=!0;const _n=new z,Wn=new z,fu=new z,jn=new z,Tr=new z,Cr=new z,bh=new z,du=new z,hu=new z,pu=new z;class Yn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),Wn.subVectors(i,t),fu.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Wn),l=_n.dot(fu),u=Wn.dot(Wn),c=Wn.dot(fu),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,g=(u*l-a*c)*d,x=(o*c-a*l)*d;return s.set(1-g-x,x,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,jn),jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,jn),l.set(0,0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),Wn.subVectors(e,t),_n.cross(Wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),_n.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Yn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Tr.subVectors(r,i),Cr.subVectors(s,i),du.subVectors(e,i);const l=Tr.dot(du),u=Cr.dot(du);if(l<=0&&u<=0)return t.copy(i);hu.subVectors(e,r);const c=Tr.dot(hu),f=Cr.dot(hu);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Tr,o);pu.subVectors(e,s);const g=Tr.dot(pu),x=Cr.dot(pu);if(x>=0&&g<=x)return t.copy(s);const p=g*u-l*x;if(p<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Cr,a);const h=c*x-g*f;if(h<=0&&f-c>=0&&g-x>=0)return bh.subVectors(s,r),a=(f-c)/(f-c+(g-x)),t.copy(r).addScaledVector(bh,a);const m=1/(h+p+d);return o=p*m,a=d*m,t.copy(i).addScaledVector(Tr,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vx=0;class zi extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=So(),this.name="",this.type="Material",this.blending=Jr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=mg,this.blendDst=gg,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ox,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ql,this.stencilZFail=Ql,this.stencilZPass=Ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cg extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new z,Ko=new Ne;class kn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=mh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Go(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Go(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Go(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class bg extends kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ag extends kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _x=0;const tn=new it,mu=new mt,br=new z,jt=new wo,Ds=new wo,ft=new z;class An extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xg(e)?Ag:bg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ln().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(jt.min,Ds.min),jt.expandByPoint(ft),ft.addVectors(jt.max,Ds.max),jt.expandByPoint(ft)):(jt.expandByPoint(Ds.min),jt.expandByPoint(Ds.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ft.fromBufferAttribute(a,u),l&&(br.fromBufferAttribute(e,u),ft.add(br)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let R=0;R<a;R++)u[R]=new z,c[R]=new z;const f=new z,d=new z,g=new z,x=new Ne,p=new Ne,h=new Ne,m=new z,v=new z;function _(R,q,ee){f.fromArray(r,R*3),d.fromArray(r,q*3),g.fromArray(r,ee*3),x.fromArray(o,R*2),p.fromArray(o,q*2),h.fromArray(o,ee*2),d.sub(f),g.sub(f),p.sub(x),h.sub(x);const V=1/(p.x*h.y-h.x*p.y);!isFinite(V)||(m.copy(d).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(V),v.copy(g).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(V),u[R].add(m),u[q].add(m),u[ee].add(m),c[R].add(v),c[q].add(v),c[ee].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let R=0,q=y.length;R<q;++R){const ee=y[R],V=ee.start,k=ee.count;for(let X=V,Y=V+k;X<Y;X+=3)_(i[X+0],i[X+1],i[X+2])}const w=new z,T=new z,A=new z,S=new z;function b(R){A.fromArray(s,R*3),S.copy(A);const q=u[R];w.copy(q),w.sub(A.multiplyScalar(A.dot(q))).normalize(),T.crossVectors(S,q);const V=T.dot(c[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=V}for(let R=0,q=y.length;R<q;++R){const ee=y[R],V=ee.start,k=ee.count;for(let X=V,Y=V+k;X<Y;X+=3)b(i[X+0]),b(i[X+1]),b(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,f=new z;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let g=0,x=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*c;for(let m=0;m<c;m++)d[x++]=u[g++]}return new kn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new An,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],g=e(d,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,g=f.length;d<g;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ah=new it,Ar=new Eg,gu=new gl,fi=new z,di=new z,hi=new z,vu=new z,_u=new z,xu=new z,Qo=new z,Jo=new z,ea=new z,ta=new Ne,na=new Ne,ia=new Ne,yu=new z,ra=new z;class En extends mt{constructor(e=new An,t=new Cg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),gu.copy(i.boundingSphere),gu.applyMatrix4(s),e.ray.intersectsSphere(gu)===!1)||(Ah.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Ah),i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,g=i.groups,x=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],_=Math.max(m.start,x.start),y=Math.min(a.count,Math.min(m.start+m.count,x.start+x.count));for(let w=_,T=y;w<T;w+=3){const A=a.getX(w),S=a.getX(w+1),b=a.getX(w+2);o=sa(this,v,e,Ar,l,u,c,f,d,A,S,b),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(a.count,x.start+x.count);for(let m=p,v=h;m<v;m+=3){const _=a.getX(m),y=a.getX(m+1),w=a.getX(m+2);o=sa(this,r,e,Ar,l,u,c,f,d,_,y,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],_=Math.max(m.start,x.start),y=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let w=_,T=y;w<T;w+=3){const A=w,S=w+1,b=w+2;o=sa(this,v,e,Ar,l,u,c,f,d,A,S,b),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,x.start),h=Math.min(l.count,x.start+x.count);for(let m=p,v=h;m<v;m+=3){const _=m,y=m+1,w=m+2;o=sa(this,r,e,Ar,l,u,c,f,d,_,y,w),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function xx(n,e,t,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==yi,a),l===null)return null;ra.copy(a),ra.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ra);return u<t.near||u>t.far?null:{distance:u,point:ra.clone(),object:n}}function sa(n,e,t,i,r,s,o,a,l,u,c,f){fi.fromBufferAttribute(r,u),di.fromBufferAttribute(r,c),hi.fromBufferAttribute(r,f);const d=n.morphTargetInfluences;if(s&&d){Qo.set(0,0,0),Jo.set(0,0,0),ea.set(0,0,0);for(let x=0,p=s.length;x<p;x++){const h=d[x],m=s[x];h!==0&&(vu.fromBufferAttribute(m,u),_u.fromBufferAttribute(m,c),xu.fromBufferAttribute(m,f),o?(Qo.addScaledVector(vu,h),Jo.addScaledVector(_u,h),ea.addScaledVector(xu,h)):(Qo.addScaledVector(vu.sub(fi),h),Jo.addScaledVector(_u.sub(di),h),ea.addScaledVector(xu.sub(hi),h)))}fi.add(Qo),di.add(Jo),hi.add(ea)}n.isSkinnedMesh&&(n.boneTransform(u,fi),n.boneTransform(c,di),n.boneTransform(f,hi));const g=xx(n,e,t,i,fi,di,hi,yu);if(g){a&&(ta.fromBufferAttribute(a,u),na.fromBufferAttribute(a,c),ia.fromBufferAttribute(a,f),g.uv=Yn.getUV(yu,fi,di,hi,ta,na,ia,new Ne)),l&&(ta.fromBufferAttribute(l,u),na.fromBufferAttribute(l,c),ia.fromBufferAttribute(l,f),g.uv2=Yn.getUV(yu,fi,di,hi,ta,na,ia,new Ne));const x={a:u,b:c,c:f,normal:new z,materialIndex:0};Yn.getNormal(fi,di,hi,x.normal),g.face=x}return g}class pr extends An{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,g=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(f,2));function x(p,h,m,v,_,y,w,T,A,S,b){const R=y/A,q=w/S,ee=y/2,V=w/2,k=T/2,X=A+1,Y=S+1;let Q=0,I=0;const L=new z;for(let D=0;D<Y;D++){const $=D*q-V;for(let W=0;W<X;W++){const te=W*R-ee;L[p]=te*v,L[h]=$*_,L[m]=k,u.push(L.x,L.y,L.z),L[p]=0,L[h]=0,L[m]=T>0?1:-1,c.push(L.x,L.y,L.z),f.push(W/A),f.push(1-D/S),Q+=1}}for(let D=0;D<S;D++)for(let $=0;$<A;$++){const W=d+$+X*D,te=d+$+X*(D+1),oe=d+($+1)+X*(D+1),_e=d+($+1)+X*D;l.push(W,te,_e),l.push(te,oe,_e),I+=6}a.addGroup(g,I,b),g+=I,d+=Q}}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=hs(n[t]);for(const r in i)e[r]=i[r]}return e}function yx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const Sx={clone:hs,merge:Pt};var Mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mx,this.fragmentShader=wx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lg extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Lg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vh*2*Math.atan(Math.tan(Jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=90,Pr=1;class Ex extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new on(Lr,Pr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new z(1,0,0)),this.add(r);const s=new on(Lr,Pr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new z(-1,0,0)),this.add(s);const o=new on(Lr,Pr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new z(0,1,0)),this.add(o);const a=new on(Lr,Pr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new z(0,-1,0)),this.add(a);const l=new on(Lr,Pr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new z(0,0,1)),this.add(l);const u=new on(Lr,Pr,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new z(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Jn,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Pg extends hn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:cs,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tx extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pr(5,5,5),s=new fr({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Li});s.uniforms.tEquirect.value=t;const o=new En(r,s),a=t.minFilter;return t.minFilter===pl&&(t.minFilter=sn),new Ex(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Su=new z,Cx=new z,bx=new ln;class Wi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Su.subVectors(i,t).cross(Cx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bx.getNormalMatrix(e),r=this.coplanarPoint(Su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new gl,oa=new z;class Ef{constructor(e=new Wi,t=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],g=i[9],x=i[10],p=i[11],h=i[12],m=i[13],v=i[14],_=i[15];return t[0].setComponents(a-r,f-l,p-d,_-h).normalize(),t[1].setComponents(a+r,f+l,p+d,_+h).normalize(),t[2].setComponents(a+s,f+u,p+g,_+m).normalize(),t[3].setComponents(a-s,f-u,p-g,_-m).normalize(),t[4].setComponents(a-o,f-c,p-x,_-v).normalize(),t[5].setComponents(a+o,f+c,p+x,_+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(oa.x=r.normal.x>0?e.max.x:e.min.x,oa.y=r.normal.y>0?e.max.y:e.min.y,oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ax(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,f,d),u.onUploadCallback();let x;if(f instanceof Float32Array)x=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(f instanceof Int16Array)x=5122;else if(f instanceof Uint32Array)x=5125;else if(f instanceof Int32Array)x=5124;else if(f instanceof Int8Array)x=5120;else if(f instanceof Uint8Array)x=5121;else if(f instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,g=c.updateRange;n.bindBuffer(f,u),g.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):n.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class Tf extends An{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,g=[],x=[],p=[],h=[];for(let m=0;m<c;m++){const v=m*d-o;for(let _=0;_<u;_++){const y=_*f-s;x.push(y,-v,0),p.push(0,0,1),h.push(_/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const _=v+u*m,y=v+u*(m+1),w=v+1+u*(m+1),T=v+1+u*m;g.push(_,y,T),g.push(y,w,T)}this.setIndex(g),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(p,3)),this.setAttribute("uv",new Ct(h,2))}static fromJSON(e){return new Tf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ix=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zx="vec3 transformed = vec3( position );",Fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ux=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ox=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$x=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",ny=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,my=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,vy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_y=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,wy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ty=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,by=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ay=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ly=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ny=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,By=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Hy=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,$y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,eS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,aS=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lS=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,uS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,dS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_S=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,xS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,SS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,MS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,wS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ES=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,TS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,CS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,IS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,US=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,OS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$S=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:Lx,alphamap_pars_fragment:Px,alphatest_fragment:Dx,alphatest_pars_fragment:Rx,aomap_fragment:Ix,aomap_pars_fragment:Nx,begin_vertex:zx,beginnormal_vertex:Fx,bsdfs:kx,iridescence_fragment:Ux,bumpmap_pars_fragment:Ox,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:Vx,clipping_planes_pars_vertex:Gx,clipping_planes_vertex:Hx,color_fragment:Wx,color_pars_fragment:jx,color_pars_vertex:Xx,color_vertex:qx,common:$x,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:Zx,displacementmap_pars_vertex:Kx,displacementmap_vertex:Qx,emissivemap_fragment:Jx,emissivemap_pars_fragment:ey,encodings_fragment:ty,encodings_pars_fragment:ny,envmap_fragment:iy,envmap_common_pars_fragment:ry,envmap_pars_fragment:sy,envmap_pars_vertex:oy,envmap_physical_pars_fragment:_y,envmap_vertex:ay,fog_vertex:ly,fog_pars_vertex:uy,fog_fragment:cy,fog_pars_fragment:fy,gradientmap_pars_fragment:dy,lightmap_fragment:hy,lightmap_pars_fragment:py,lights_lambert_fragment:my,lights_lambert_pars_fragment:gy,lights_pars_begin:vy,lights_toon_fragment:xy,lights_toon_pars_fragment:yy,lights_phong_fragment:Sy,lights_phong_pars_fragment:My,lights_physical_fragment:wy,lights_physical_pars_fragment:Ey,lights_fragment_begin:Ty,lights_fragment_maps:Cy,lights_fragment_end:by,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ly,logdepthbuf_pars_vertex:Py,logdepthbuf_vertex:Dy,map_fragment:Ry,map_pars_fragment:Iy,map_particle_fragment:Ny,map_particle_pars_fragment:zy,metalnessmap_fragment:Fy,metalnessmap_pars_fragment:ky,morphcolor_vertex:Uy,morphnormal_vertex:Oy,morphtarget_pars_vertex:By,morphtarget_vertex:Vy,normal_fragment_begin:Gy,normal_fragment_maps:Hy,normal_pars_fragment:Wy,normal_pars_vertex:jy,normal_vertex:Xy,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:$y,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:Zy,iridescence_pars_fragment:Ky,output_fragment:Qy,packing:Jy,premultiplied_alpha_fragment:eS,project_vertex:tS,dithering_fragment:nS,dithering_pars_fragment:iS,roughnessmap_fragment:rS,roughnessmap_pars_fragment:sS,shadowmap_pars_fragment:oS,shadowmap_pars_vertex:aS,shadowmap_vertex:lS,shadowmask_pars_fragment:uS,skinbase_vertex:cS,skinning_pars_vertex:fS,skinning_vertex:dS,skinnormal_vertex:hS,specularmap_fragment:pS,specularmap_pars_fragment:mS,tonemapping_fragment:gS,tonemapping_pars_fragment:vS,transmission_fragment:_S,transmission_pars_fragment:xS,uv_pars_fragment:yS,uv_pars_vertex:SS,uv_vertex:MS,uv2_pars_fragment:wS,uv2_pars_vertex:ES,uv2_vertex:TS,worldpos_vertex:CS,background_vert:bS,background_frag:AS,backgroundCube_vert:LS,backgroundCube_frag:PS,cube_vert:DS,cube_frag:RS,depth_vert:IS,depth_frag:NS,distanceRGBA_vert:zS,distanceRGBA_frag:FS,equirect_vert:kS,equirect_frag:US,linedashed_vert:OS,linedashed_frag:BS,meshbasic_vert:VS,meshbasic_frag:GS,meshlambert_vert:HS,meshlambert_frag:WS,meshmatcap_vert:jS,meshmatcap_frag:XS,meshnormal_vert:qS,meshnormal_frag:$S,meshphong_vert:YS,meshphong_frag:ZS,meshphysical_vert:KS,meshphysical_frag:QS,meshtoon_vert:JS,meshtoon_frag:eM,points_vert:tM,points_frag:nM,shadow_vert:iM,shadow_frag:rM,sprite_vert:sM,sprite_frag:oM},ie={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ln},uv2Transform:{value:new ln},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ln}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ln}}},In={basic:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Pt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Pt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Pt([ie.points,ie.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Pt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Pt([ie.common,ie.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Pt([ie.sprite,ie.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ln},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Pt([ie.common,ie.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Pt([ie.lights,ie.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};In.physical={uniforms:Pt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function aM(n,e,t,i,r,s,o){const a=new Ae(0);let l=s===!0?0:1,u,c,f=null,d=0,g=null;function x(h,m){let v=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_));const y=n.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(_=null),_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===hl)?(c===void 0&&(c=new En(new pr(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:hs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,(f!==_||d!==_.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,g=n.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new En(new Tf(2,2),new fr({name:"BackgroundMaterial",uniforms:hs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,g=n.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function p(h,m){i.buffers.color.setClear(h.r,h.g,h.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(h,m=1){a.set(h),l=m,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,p(a,l)},render:x}}function lM(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function f(k,X,Y,Q,I){let L=!1;if(o){const D=p(Q,Y,X);u!==D&&(u=D,g(u.object)),L=m(k,Q,Y,I),L&&v(k,Q,Y,I)}else{const D=X.wireframe===!0;(u.geometry!==Q.id||u.program!==Y.id||u.wireframe!==D)&&(u.geometry=Q.id,u.program=Y.id,u.wireframe=D,L=!0)}I!==null&&t.update(I,34963),(L||c)&&(c=!1,S(k,X,Y,Q),I!==null&&n.bindBuffer(34963,t.get(I).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(k){return i.isWebGL2?n.bindVertexArray(k):s.bindVertexArrayOES(k)}function x(k){return i.isWebGL2?n.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function p(k,X,Y){const Q=Y.wireframe===!0;let I=a[k.id];I===void 0&&(I={},a[k.id]=I);let L=I[X.id];L===void 0&&(L={},I[X.id]=L);let D=L[Q];return D===void 0&&(D=h(d()),L[Q]=D),D}function h(k){const X=[],Y=[],Q=[];for(let I=0;I<r;I++)X[I]=0,Y[I]=0,Q[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Y,attributeDivisors:Q,object:k,attributes:{},index:null}}function m(k,X,Y,Q){const I=u.attributes,L=X.attributes;let D=0;const $=Y.getAttributes();for(const W in $)if($[W].location>=0){const oe=I[W];let _e=L[W];if(_e===void 0&&(W==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),W==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor)),oe===void 0||oe.attribute!==_e||_e&&oe.data!==_e.data)return!0;D++}return u.attributesNum!==D||u.index!==Q}function v(k,X,Y,Q){const I={},L=X.attributes;let D=0;const $=Y.getAttributes();for(const W in $)if($[W].location>=0){let oe=L[W];oe===void 0&&(W==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),W==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor));const _e={};_e.attribute=oe,oe&&oe.data&&(_e.data=oe.data),I[W]=_e,D++}u.attributes=I,u.attributesNum=D,u.index=Q}function _(){const k=u.newAttributes;for(let X=0,Y=k.length;X<Y;X++)k[X]=0}function y(k){w(k,0)}function w(k,X){const Y=u.newAttributes,Q=u.enabledAttributes,I=u.attributeDivisors;Y[k]=1,Q[k]===0&&(n.enableVertexAttribArray(k),Q[k]=1),I[k]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,X),I[k]=X)}function T(){const k=u.newAttributes,X=u.enabledAttributes;for(let Y=0,Q=X.length;Y<Q;Y++)X[Y]!==k[Y]&&(n.disableVertexAttribArray(Y),X[Y]=0)}function A(k,X,Y,Q,I,L){i.isWebGL2===!0&&(Y===5124||Y===5125)?n.vertexAttribIPointer(k,X,Y,I,L):n.vertexAttribPointer(k,X,Y,Q,I,L)}function S(k,X,Y,Q){if(i.isWebGL2===!1&&(k.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const I=Q.attributes,L=Y.getAttributes(),D=X.defaultAttributeValues;for(const $ in L){const W=L[$];if(W.location>=0){let te=I[$];if(te===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(te=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(te=k.instanceColor)),te!==void 0){const oe=te.normalized,_e=te.itemSize,G=t.get(te);if(G===void 0)continue;const Pe=G.buffer,xe=G.type,Me=G.bytesPerElement;if(te.isInterleavedBufferAttribute){const ue=te.data,Be=ue.stride,Ce=te.offset;if(ue.isInstancedInterleavedBuffer){for(let ge=0;ge<W.locationSize;ge++)w(W.location+ge,ue.meshPerAttribute);k.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<W.locationSize;ge++)y(W.location+ge);n.bindBuffer(34962,Pe);for(let ge=0;ge<W.locationSize;ge++)A(W.location+ge,_e/W.locationSize,xe,oe,Be*Me,(Ce+_e/W.locationSize*ge)*Me)}else{if(te.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)w(W.location+ue,te.meshPerAttribute);k.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ue=0;ue<W.locationSize;ue++)y(W.location+ue);n.bindBuffer(34962,Pe);for(let ue=0;ue<W.locationSize;ue++)A(W.location+ue,_e/W.locationSize,xe,oe,_e*Me,_e/W.locationSize*ue*Me)}}else if(D!==void 0){const oe=D[$];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(W.location,oe);break;case 3:n.vertexAttrib3fv(W.location,oe);break;case 4:n.vertexAttrib4fv(W.location,oe);break;default:n.vertexAttrib1fv(W.location,oe)}}}}T()}function b(){ee();for(const k in a){const X=a[k];for(const Y in X){const Q=X[Y];for(const I in Q)x(Q[I].object),delete Q[I];delete X[Y]}delete a[k]}}function R(k){if(a[k.id]===void 0)return;const X=a[k.id];for(const Y in X){const Q=X[Y];for(const I in Q)x(Q[I].object),delete Q[I];delete X[Y]}delete a[k.id]}function q(k){for(const X in a){const Y=a[X];if(Y[k.id]===void 0)continue;const Q=Y[k.id];for(const I in Q)x(Q[I].object),delete Q[I];delete Y[k.id]}}function ee(){V(),c=!0,u!==l&&(u=l,g(u.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ee,resetDefaultState:V,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:q,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function uM(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,g;if(r)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function cM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),d=n.getParameter(35660),g=n.getParameter(3379),x=n.getParameter(34076),p=n.getParameter(34921),h=n.getParameter(36347),m=n.getParameter(36348),v=n.getParameter(36349),_=d>0,y=o||e.has("OES_texture_float"),w=_&&y,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:T}}function fM(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Wi,a=new ln,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,g){const x=f.length!==0||d||i!==0||r;return r=d,t=c(f,g,0),i=f.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,g){const x=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,m=n.get(f);if(!r||x===null||x.length===0||s&&!h)s?c(null):u();else{const v=s?0:i,_=v*4;let y=m.clippingState||null;l.value=y,y=c(x,d,_,g);for(let w=0;w!==_;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,g,x){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,x!==!0||h===null){const m=g+p*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(h===null||h.length<m)&&(h=new Float32Array(m));for(let _=0,y=g;_!==p;++_,y+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(h,y),h[y+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function dM(n){let e=new WeakMap;function t(o,a){return a===Mc?o.mapping=cs:a===wc&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Mc||a===wc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Tx(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Rg extends Lg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=4,Lh=[.125,.215,.35,.446,.526,.582],Xi=20,Mu=new Rg,Ph=new Ae;let wu=null;const ji=(1+Math.sqrt(5))/2,Rr=1/ji,Dh=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ji,Rr),new z(0,ji,-Rr),new z(Rr,0,ji),new z(-Rr,0,ji),new z(ji,Rr,0),new z(-ji,Rr,0)];class Rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){wu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wu),e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:po,format:wn,encoding:ur,depthBuffer:!1},r=Ih(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hM(s)),this._blurMaterial=pM(s,e,t)}return r}_compileMaterial(e){const t=new En(this._lodPlanes[0],e);this._renderer.compile(t,Mu)}_sceneToCubeUV(e,t,i,r){const a=new on(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Ph),c.toneMapping=Jn,c.autoClear=!1;const g=new Cg({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),x=new En(new pr,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(Ph),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;aa(r,v*_,m>2?_:0,_,_),c.setRenderTarget(r),p&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===cs||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new En(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;aa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Mu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dh[(r-1)%Dh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new En(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Xi-1),p=s/x,h=isFinite(s)?1+Math.floor(c*p):Xi;h>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Xi}`);const m=[];let v=0;for(let A=0;A<Xi;++A){const S=A/p,b=Math.exp(-S*S/2);m.push(b),A===0?v+=b:A<h&&(v+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/v;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const y=this._sizeLods[r],w=3*y*(r>_-Xr?r-_+Xr:0),T=4*(this._cubeSize-y);aa(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(f,Mu)}}function hM(n){const e=[],t=[],i=[];let r=n;const s=n-Xr+1+Lh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Xr?l=Lh[o-n+Xr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],g=6,x=6,p=3,h=2,m=1,v=new Float32Array(p*x*g),_=new Float32Array(h*x*g),y=new Float32Array(m*x*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,S=T>2?0:-1,b=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];v.set(b,p*x*T),_.set(d,h*x*T);const R=[T,T,T,T,T,T];y.set(R,m*x*T)}const w=new An;w.setAttribute("position",new kn(v,p)),w.setAttribute("uv",new kn(_,h)),w.setAttribute("faceIndex",new kn(y,m)),e.push(w),r>Xr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ih(n,e,t){const i=new cr(n,e,t);return i.texture.mapping=hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pM(n,e,t){const i=new Float32Array(Xi),r=new z(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Nh(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function zh(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Cf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Mc||l===wc,c=l===cs||l===fs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Rh(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Rh(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function vM(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],34962);const g=f.morphAttributes;for(const x in g){const p=g[x];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(f){const d=[],g=f.index,x=f.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let _=0,y=v.length;_<y;_+=3){const w=v[_+0],T=v[_+1],A=v[_+2];d.push(w,T,T,A,A,w)}}else{const v=x.array;p=x.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const w=_+0,T=_+1,A=_+2;d.push(w,T,T,A,A,w)}}const h=new(xg(d)?Ag:bg)(d,1);h.version=p;const m=s.get(f);m&&e.remove(m),s.set(f,h)}function c(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function _M(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,g){n.drawElements(s,g,a,d*l),t.update(g,s,1)}function f(d,g,x){if(x===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,d*l,x),t.update(g,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function xM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yM(n,e){return n[0]-e[0]}function SM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function MM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new ht,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=x!==void 0?x.length:0;let h=s.get(c);if(h===void 0||h.count!==p){let X=function(){V.dispose(),s.delete(c),c.removeEventListener("dispose",X)};h!==void 0&&h.texture.dispose();const _=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],S=c.morphAttributes.color||[];let b=0;_===!0&&(b=1),y===!0&&(b=2),w===!0&&(b=3);let R=c.attributes.position.count*b,q=1;R>e.maxTextureSize&&(q=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ee=new Float32Array(R*q*4*p),V=new wg(ee,R,q,p);V.type=Ki,V.needsUpdate=!0;const k=b*4;for(let Y=0;Y<p;Y++){const Q=T[Y],I=A[Y],L=S[Y],D=R*q*4*Y;for(let $=0;$<Q.count;$++){const W=$*k;_===!0&&(o.fromBufferAttribute(Q,$),ee[D+W+0]=o.x,ee[D+W+1]=o.y,ee[D+W+2]=o.z,ee[D+W+3]=0),y===!0&&(o.fromBufferAttribute(I,$),ee[D+W+4]=o.x,ee[D+W+5]=o.y,ee[D+W+6]=o.z,ee[D+W+7]=0),w===!0&&(o.fromBufferAttribute(L,$),ee[D+W+8]=o.x,ee[D+W+9]=o.y,ee[D+W+10]=o.z,ee[D+W+11]=L.itemSize===4?o.w:1)}}h={count:p,texture:V,size:new Ne(R,q)},s.set(c,h),c.addEventListener("dispose",X)}let m=0;for(let _=0;_<g.length;_++)m+=g[_];const v=c.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",g),d.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}else{const x=g===void 0?0:g.length;let p=i[c.id];if(p===void 0||p.length!==x){p=[];for(let y=0;y<x;y++)p[y]=[y,0];i[c.id]=p}for(let y=0;y<x;y++){const w=p[y];w[0]=y,w[1]=g[y]}p.sort(SM);for(let y=0;y<8;y++)y<x&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(yM);const h=c.morphAttributes.position,m=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const w=a[y],T=w[0],A=w[1];T!==Number.MAX_SAFE_INTEGER&&A?(h&&c.getAttribute("morphTarget"+y)!==h[T]&&c.setAttribute("morphTarget"+y,h[T]),m&&c.getAttribute("morphNormal"+y)!==m[T]&&c.setAttribute("morphNormal"+y,m[T]),r[y]=A,v+=A):(h&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),m&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const _=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function wM(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Ig=new hn,Ng=new wg,zg=new ux,Fg=new Pg,Fh=[],kh=[],Uh=new Float32Array(16),Oh=new Float32Array(9),Bh=new Float32Array(4);function _s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Fh[r];if(s===void 0&&(s=new Float32Array(r),Fh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function at(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vl(n,e){let t=kh[e];t===void 0&&(t=new Int32Array(e),kh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function EM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function TM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2fv(this.addr,e),lt(t,e)}}function CM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;n.uniform3fv(this.addr,e),lt(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4fv(this.addr,e),lt(t,e)}}function AM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;Bh.set(i),n.uniformMatrix2fv(this.addr,!1,Bh),lt(t,i)}}function LM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;Oh.set(i),n.uniformMatrix3fv(this.addr,!1,Oh),lt(t,i)}}function PM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;Uh.set(i),n.uniformMatrix4fv(this.addr,!1,Uh),lt(t,i)}}function DM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function RM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2iv(this.addr,e),lt(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3iv(this.addr,e),lt(t,e)}}function NM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4iv(this.addr,e),lt(t,e)}}function zM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2uiv(this.addr,e),lt(t,e)}}function kM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3uiv(this.addr,e),lt(t,e)}}function UM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4uiv(this.addr,e),lt(t,e)}}function OM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ig,r)}function BM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zg,r)}function VM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fg,r)}function GM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ng,r)}function HM(n){switch(n){case 5126:return EM;case 35664:return TM;case 35665:return CM;case 35666:return bM;case 35674:return AM;case 35675:return LM;case 35676:return PM;case 5124:case 35670:return DM;case 35667:case 35671:return RM;case 35668:case 35672:return IM;case 35669:case 35673:return NM;case 5125:return zM;case 36294:return FM;case 36295:return kM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return GM}}function WM(n,e){n.uniform1fv(this.addr,e)}function jM(n,e){const t=_s(e,this.size,2);n.uniform2fv(this.addr,t)}function XM(n,e){const t=_s(e,this.size,3);n.uniform3fv(this.addr,t)}function qM(n,e){const t=_s(e,this.size,4);n.uniform4fv(this.addr,t)}function $M(n,e){const t=_s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YM(n,e){const t=_s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ZM(n,e){const t=_s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KM(n,e){n.uniform1iv(this.addr,e)}function QM(n,e){n.uniform2iv(this.addr,e)}function JM(n,e){n.uniform3iv(this.addr,e)}function e1(n,e){n.uniform4iv(this.addr,e)}function t1(n,e){n.uniform1uiv(this.addr,e)}function n1(n,e){n.uniform2uiv(this.addr,e)}function i1(n,e){n.uniform3uiv(this.addr,e)}function r1(n,e){n.uniform4uiv(this.addr,e)}function s1(n,e,t){const i=this.cache,r=e.length,s=vl(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ig,s[o])}function o1(n,e,t){const i=this.cache,r=e.length,s=vl(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zg,s[o])}function a1(n,e,t){const i=this.cache,r=e.length,s=vl(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Fg,s[o])}function l1(n,e,t){const i=this.cache,r=e.length,s=vl(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ng,s[o])}function u1(n){switch(n){case 5126:return WM;case 35664:return jM;case 35665:return XM;case 35666:return qM;case 35674:return $M;case 35675:return YM;case 35676:return ZM;case 5124:case 35670:return KM;case 35667:case 35671:return QM;case 35668:case 35672:return JM;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return l1}}class c1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=HM(t.type)}}class f1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=u1(t.type)}}class d1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function Vh(n,e){n.seq.push(e),n.map[e.id]=e}function h1(n,e,t){const i=n.name,r=i.length;for(Eu.lastIndex=0;;){const s=Eu.exec(i),o=Eu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Vh(t,u===void 0?new c1(a,n,e):new f1(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new d1(a),Vh(t,f)),t=f}}}class Ea{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);h1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Gh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let p1=0;function m1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function g1(n){switch(n){case ur:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Hh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+m1(n.getShaderSource(e),o)}else return r}function v1(n,e){const t=g1(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function _1(n,e){let t;switch(e){case F_:t="Linear";break;case k_:t="Reinhard";break;case U_:t="OptimizedCineon";break;case O_:t="ACESFilmic";break;case B_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function x1(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ks).join(`
`)}function y1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function S1(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ks(n){return n!==""}function Wh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(n){return n.replace(M1,w1)}function w1(n,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return bc(t)}const E1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(n){return n.replace(E1,T1)}function T1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===p_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fs&&(e="SHADOWMAP_TYPE_VSM"),e}function b1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cs:case fs:e="ENVMAP_TYPE_CUBE";break;case hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function L1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dl:e="ENVMAP_BLENDING_MULTIPLY";break;case N_:e="ENVMAP_BLENDING_MIX";break;case z_:e="ENVMAP_BLENDING_ADD";break}return e}function P1(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function D1(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=C1(t),u=b1(t),c=A1(t),f=L1(t),d=P1(t),g=t.isWebGL2?"":x1(t),x=y1(s),p=r.createProgram();let h,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[x].filter(ks).join(`
`),h.length>0&&(h+=`
`),m=[g,x].filter(ks).join(`
`),m.length>0&&(m+=`
`)):(h=[qh(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),m=[g,qh(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Ee.tonemapping_pars_fragment:"",t.toneMapping!==Jn?_1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,v1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),o=bc(o),o=Wh(o,t),o=jh(o,t),a=bc(a),a=Wh(a,t),a=jh(a,t),o=Xh(o),a=Xh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=v+h+o,y=v+m+a,w=Gh(r,35633,_),T=Gh(r,35632,y);if(r.attachShader(p,w),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(p).trim(),R=r.getShaderInfoLog(w).trim(),q=r.getShaderInfoLog(T).trim();let ee=!0,V=!0;if(r.getProgramParameter(p,35714)===!1){ee=!1;const k=Hh(r,w,"vertex"),X=Hh(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+b+`
`+k+`
`+X)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(R===""||q==="")&&(V=!1);V&&(this.diagnostics={runnable:ee,programLog:b,vertexShader:{log:R,prefix:h},fragmentShader:{log:q,prefix:m}})}r.deleteShader(w),r.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new Ea(r,p)),A};let S;return this.getAttributes=function(){return S===void 0&&(S=S1(r,p)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let R1=0;class I1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new N1(e),t.set(e,i)),i}}class N1{constructor(e){this.id=R1++,this.code=e,this.usedTimes=0}}function z1(n,e,t,i,r,s,o){const a=new Tg,l=new I1,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S,b,R,q,ee){const V=q.fog,k=ee.geometry,X=S.isMeshStandardMaterial?q.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),Q=!!Y&&Y.mapping===hl?Y.image.height:null,I=x[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const L=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,D=L!==void 0?L.length:0;let $=0;k.morphAttributes.position!==void 0&&($=1),k.morphAttributes.normal!==void 0&&($=2),k.morphAttributes.color!==void 0&&($=3);let W,te,oe,_e;if(I){const Be=In[I];W=Be.vertexShader,te=Be.fragmentShader}else W=S.vertexShader,te=S.fragmentShader,l.update(S),oe=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);const G=n.getRenderTarget(),Pe=S.alphaTest>0,xe=S.clearcoat>0,Me=S.iridescence>0;return{isWebGL2:c,shaderID:I,shaderName:S.type,vertexShader:W,fragmentShader:te,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,instancing:ee.isInstancedMesh===!0,instancingColor:ee.isInstancedMesh===!0&&ee.instanceColor!==null,supportsVertexTextures:d,outputEncoding:G===null?n.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:ur,map:!!S.map,matcap:!!S.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:Q,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===sx,tangentSpaceNormalMap:S.normalMapType===ml,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===qe,clearcoat:xe,clearcoatMap:xe&&!!S.clearcoatMap,clearcoatRoughnessMap:xe&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!S.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!S.iridescenceMap,iridescenceThicknessMap:Me&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===Jr,alphaMap:!!S.alphaMap,alphaTest:Pe,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!k.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!V,useFog:S.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ee.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:$,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:Jn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yi,flipSided:S.side===cn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)b.push(R),b.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(m(b,S),v(b,S),b.push(n.outputEncoding)),b.push(S.customProgramCacheKey),b.join()}function m(S,b){S.push(b.precision),S.push(b.outputEncoding),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.combine),S.push(b.vertexUvs),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.physicallyCorrectLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.specularIntensityMap&&a.enable(15),b.specularColorMap&&a.enable(16),b.transmission&&a.enable(17),b.transmissionMap&&a.enable(18),b.thicknessMap&&a.enable(19),b.sheen&&a.enable(20),b.sheenColorMap&&a.enable(21),b.sheenRoughnessMap&&a.enable(22),b.decodeVideoTexture&&a.enable(23),b.opaque&&a.enable(24),S.push(a.mask)}function _(S){const b=x[S.type];let R;if(b){const q=In[b];R=Sx.clone(q.uniforms)}else R=S.uniforms;return R}function y(S,b){let R;for(let q=0,ee=u.length;q<ee;q++){const V=u[q];if(V.cacheKey===b){R=V,++R.usedTimes;break}}return R===void 0&&(R=new D1(n,b,S,s),u.push(R)),R}function w(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function A(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:A}}function F1(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function k1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $h(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,g,x,p,h){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:g,groupOrder:x,renderOrder:f.renderOrder,z:p,group:h},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=g,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=p,m.group=h),e++,m}function a(f,d,g,x,p,h){const m=o(f,d,g,x,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(f,d,g,x,p,h){const m=o(f,d,g,x,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||k1),i.length>1&&i.sort(d||$h),r.length>1&&r.sort(d||$h)}function c(){for(let f=e,d=n.length;f<d;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function U1(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Yh,n.set(i,[o])):r>=s.length?(o=new Yh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function O1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ae};break;case"SpotLight":t={position:new z,direction:new z,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function B1(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let V1=0;function G1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function H1(n,e){const t=new O1,i=B1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new z);const s=new z,o=new it,a=new it;function l(c,f){let d=0,g=0,x=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let p=0,h=0,m=0,v=0,_=0,y=0,w=0,T=0,A=0,S=0;c.sort(G1);const b=f!==!0?Math.PI:1;for(let q=0,ee=c.length;q<ee;q++){const V=c[q],k=V.color,X=V.intensity,Y=V.distance,Q=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)d+=k.r*X*b,g+=k.g*X*b,x+=k.b*X*b;else if(V.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],X);else if(V.isDirectionalLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity*b),V.castShadow){const L=V.shadow,D=i.get(V);D.shadowBias=L.bias,D.shadowNormalBias=L.normalBias,D.shadowRadius=L.radius,D.shadowMapSize=L.mapSize,r.directionalShadow[p]=D,r.directionalShadowMap[p]=Q,r.directionalShadowMatrix[p]=V.shadow.matrix,y++}r.directional[p]=I,p++}else if(V.isSpotLight){const I=t.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(k).multiplyScalar(X*b),I.distance=Y,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[m]=I;const L=V.shadow;if(V.map&&(r.spotLightMap[A]=V.map,A++,L.updateMatrices(V),V.castShadow&&S++),r.spotLightMatrix[m]=L.matrix,V.castShadow){const D=i.get(V);D.shadowBias=L.bias,D.shadowNormalBias=L.normalBias,D.shadowRadius=L.radius,D.shadowMapSize=L.mapSize,r.spotShadow[m]=D,r.spotShadowMap[m]=Q,T++}m++}else if(V.isRectAreaLight){const I=t.get(V);I.color.copy(k).multiplyScalar(X),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[v]=I,v++}else if(V.isPointLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity*b),I.distance=V.distance,I.decay=V.decay,V.castShadow){const L=V.shadow,D=i.get(V);D.shadowBias=L.bias,D.shadowNormalBias=L.normalBias,D.shadowRadius=L.radius,D.shadowMapSize=L.mapSize,D.shadowCameraNear=L.camera.near,D.shadowCameraFar=L.camera.far,r.pointShadow[h]=D,r.pointShadowMap[h]=Q,r.pointShadowMatrix[h]=V.shadow.matrix,w++}r.point[h]=I,h++}else if(V.isHemisphereLight){const I=t.get(V);I.skyColor.copy(V.color).multiplyScalar(X*b),I.groundColor.copy(V.groundColor).multiplyScalar(X*b),r.hemi[_]=I,_++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_FLOAT_1,r.rectAreaLTC2=ie.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ie.LTC_HALF_1,r.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=x;const R=r.hash;(R.directionalLength!==p||R.pointLength!==h||R.spotLength!==m||R.rectAreaLength!==v||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==w||R.numSpotShadows!==T||R.numSpotMaps!==A)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=h,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+A-S,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=S,R.directionalLength=p,R.pointLength=h,R.spotLength=m,R.rectAreaLength=v,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=w,R.numSpotShadows=T,R.numSpotMaps=A,r.version=V1++)}function u(c,f){let d=0,g=0,x=0,p=0,h=0;const m=f.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const y=c[v];if(y.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(y.isSpotLight){const w=r.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),x++}else if(y.isRectAreaLight){const w=r.rectArea[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),g++}else if(y.isHemisphereLight){const w=r.hemi[h];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function Zh(n,e){const t=new H1(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function W1(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Zh(n,e),t.set(s,[l])):o>=a.length?(l=new Zh(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class j1 extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X1 extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y1(n,e,t){let i=new Ef;const r=new Ne,s=new Ne,o=new ht,a=new j1({depthPacking:rx}),l=new X1,u={},c=t.maxTextureSize,f={0:cn,1:us,2:yi},d=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:q1,fragmentShader:$1}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new An;x.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new En(x,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pg,this.render=function(y,w,T){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||y.length===0)return;const A=n.getRenderTarget(),S=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Li),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let q=0,ee=y.length;q<ee;q++){const V=y[q],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const X=k.getFrameExtents();if(r.multiply(X),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null){const Q=this.type!==Fs?{minFilter:kt,magFilter:kt}:{};k.map=new cr(r.x,r.y,Q),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const Y=k.getViewportCount();for(let Q=0;Q<Y;Q++){const I=k.getViewport(Q);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),R.viewport(o),k.updateMatrices(V,Q),i=k.getFrustum(),_(w,T,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===Fs&&m(k,T),k.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(A,S,b)};function m(y,w){const T=e.update(p);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,g.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new cr(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(w,null,T,d,p,null),g.uniforms.shadow_pass.value=y.mapPass.texture,g.uniforms.resolution.value=y.mapSize,g.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(w,null,T,g,p,null)}function v(y,w,T,A,S,b){let R=null;const q=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(q!==void 0?R=q:R=T.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const ee=R.uuid,V=w.uuid;let k=u[ee];k===void 0&&(k={},u[ee]=k);let X=k[V];X===void 0&&(X=R.clone(),k[V]=X),R=X}return R.visible=w.visible,R.wireframe=w.wireframe,b===Fs?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(T.matrixWorld),R.nearDistance=A,R.farDistance=S),R}function _(y,w,T,A,S){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Fs)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const q=e.update(y),ee=y.material;if(Array.isArray(ee)){const V=q.groups;for(let k=0,X=V.length;k<X;k++){const Y=V[k],Q=ee[Y.materialIndex];if(Q&&Q.visible){const I=v(y,Q,A,T.near,T.far,S);n.renderBufferDirect(T,null,q,I,y,Y)}}}else if(ee.visible){const V=v(y,ee,A,T.near,T.far,S);n.renderBufferDirect(T,null,q,V,y,null)}}const R=y.children;for(let q=0,ee=R.length;q<ee;q++)_(R[q],w,T,A,S)}}function Z1(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const B=new ht;let K=null;const ae=new ht(0,0,0,0);return{setMask:function(fe){K!==fe&&!P&&(n.colorMask(fe,fe,fe,fe),K=fe)},setLocked:function(fe){P=fe},setClear:function(fe,ze,ct,St,Fi){Fi===!0&&(fe*=St,ze*=St,ct*=St),B.set(fe,ze,ct,St),ae.equals(B)===!1&&(n.clearColor(fe,ze,ct,St),ae.copy(B))},reset:function(){P=!1,K=null,ae.set(-1,0,0,0)}}}function s(){let P=!1,B=null,K=null,ae=null;return{setTest:function(fe){fe?Pe(2929):xe(2929)},setMask:function(fe){B!==fe&&!P&&(n.depthMask(fe),B=fe)},setFunc:function(fe){if(K!==fe){switch(fe){case b_:n.depthFunc(512);break;case A_:n.depthFunc(519);break;case L_:n.depthFunc(513);break;case Sc:n.depthFunc(515);break;case P_:n.depthFunc(514);break;case D_:n.depthFunc(518);break;case R_:n.depthFunc(516);break;case I_:n.depthFunc(517);break;default:n.depthFunc(515)}K=fe}},setLocked:function(fe){P=fe},setClear:function(fe){ae!==fe&&(n.clearDepth(fe),ae=fe)},reset:function(){P=!1,B=null,K=null,ae=null}}}function o(){let P=!1,B=null,K=null,ae=null,fe=null,ze=null,ct=null,St=null,Fi=null;return{setTest:function(je){P||(je?Pe(2960):xe(2960))},setMask:function(je){B!==je&&!P&&(n.stencilMask(je),B=je)},setFunc:function(je,Bn,Jt){(K!==je||ae!==Bn||fe!==Jt)&&(n.stencilFunc(je,Bn,Jt),K=je,ae=Bn,fe=Jt)},setOp:function(je,Bn,Jt){(ze!==je||ct!==Bn||St!==Jt)&&(n.stencilOp(je,Bn,Jt),ze=je,ct=Bn,St=Jt)},setLocked:function(je){P=je},setClear:function(je){Fi!==je&&(n.clearStencil(je),Fi=je)},reset:function(){P=!1,B=null,K=null,ae=null,fe=null,ze=null,ct=null,St=null,Fi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},g={},x=new WeakMap,p=[],h=null,m=!1,v=null,_=null,y=null,w=null,T=null,A=null,S=null,b=!1,R=null,q=null,ee=null,V=null,k=null;const X=n.getParameter(35661);let Y=!1,Q=0;const I=n.getParameter(7938);I.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(I)[1]),Y=Q>=1):I.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Y=Q>=2);let L=null,D={};const $=n.getParameter(3088),W=n.getParameter(2978),te=new ht().fromArray($),oe=new ht().fromArray(W);function _e(P,B,K){const ae=new Uint8Array(4),fe=n.createTexture();n.bindTexture(P,fe),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let ze=0;ze<K;ze++)n.texImage2D(B+ze,0,6408,1,1,0,6408,5121,ae);return fe}const G={};G[3553]=_e(3553,3553,1),G[34067]=_e(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Pe(2929),l.setFunc(Sc),At(!1),Ln(Bd),Pe(2884),gt(Li);function Pe(P){d[P]!==!0&&(n.enable(P),d[P]=!0)}function xe(P){d[P]!==!1&&(n.disable(P),d[P]=!1)}function Me(P,B){return g[P]!==B?(n.bindFramebuffer(P,B),g[P]=B,i&&(P===36009&&(g[36160]=B),P===36160&&(g[36009]=B)),!0):!1}function ue(P,B){let K=p,ae=!1;if(P)if(K=x.get(B),K===void 0&&(K=[],x.set(B,K)),P.isWebGLMultipleRenderTargets){const fe=P.texture;if(K.length!==fe.length||K[0]!==36064){for(let ze=0,ct=fe.length;ze<ct;ze++)K[ze]=36064+ze;K.length=fe.length,ae=!0}}else K[0]!==36064&&(K[0]=36064,ae=!0);else K[0]!==1029&&(K[0]=1029,ae=!0);ae&&(t.isWebGL2?n.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Be(P){return h!==P?(n.useProgram(P),h=P,!0):!1}const Ce={[Ir]:32774,[g_]:32778,[v_]:32779};if(i)Ce[Wd]=32775,Ce[jd]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ce[Wd]=P.MIN_EXT,Ce[jd]=P.MAX_EXT)}const ge={[__]:0,[x_]:1,[y_]:768,[mg]:770,[C_]:776,[E_]:774,[M_]:772,[S_]:769,[gg]:771,[T_]:775,[w_]:773};function gt(P,B,K,ae,fe,ze,ct,St){if(P===Li){m===!0&&(xe(3042),m=!1);return}if(m===!1&&(Pe(3042),m=!0),P!==m_){if(P!==v||St!==b){if((_!==Ir||T!==Ir)&&(n.blendEquation(32774),_=Ir,T=Ir),St)switch(P){case Jr:n.blendFuncSeparate(1,771,1,771);break;case Vd:n.blendFunc(1,1);break;case Gd:n.blendFuncSeparate(0,769,0,1);break;case Hd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Jr:n.blendFuncSeparate(770,771,1,771);break;case Vd:n.blendFunc(770,1);break;case Gd:n.blendFuncSeparate(0,769,0,1);break;case Hd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,w=null,A=null,S=null,v=P,b=St}return}fe=fe||B,ze=ze||K,ct=ct||ae,(B!==_||fe!==T)&&(n.blendEquationSeparate(Ce[B],Ce[fe]),_=B,T=fe),(K!==y||ae!==w||ze!==A||ct!==S)&&(n.blendFuncSeparate(ge[K],ge[ae],ge[ze],ge[ct]),y=K,w=ae,A=ze,S=ct),v=P,b=null}function zt(P,B){P.side===yi?xe(2884):Pe(2884);let K=P.side===cn;B&&(K=!K),At(K),P.blending===Jr&&P.transparent===!1?gt(Li):gt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ae=P.stencilWrite;u.setTest(ae),ae&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Oe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pe(32926):xe(32926)}function At(P){R!==P&&(P?n.frontFace(2304):n.frontFace(2305),R=P)}function Ln(P){P!==d_?(Pe(2884),P!==q&&(P===Bd?n.cullFace(1029):P===h_?n.cullFace(1028):n.cullFace(1032))):xe(2884),q=P}function vt(P){P!==ee&&(Y&&n.lineWidth(P),ee=P)}function Oe(P,B,K){P?(Pe(32823),(V!==B||k!==K)&&(n.polygonOffset(B,K),V=B,k=K)):xe(32823)}function Un(P){P?Pe(3089):xe(3089)}function On(P){P===void 0&&(P=33984+X-1),L!==P&&(n.activeTexture(P),L=P)}function C(P,B,K){K===void 0&&(L===null?K=33984+X-1:K=L);let ae=D[K];ae===void 0&&(ae={type:void 0,texture:void 0},D[K]=ae),(ae.type!==P||ae.texture!==B)&&(L!==K&&(n.activeTexture(K),L=K),n.bindTexture(P,B||G[P]),ae.type=P,ae.texture=B)}function M(){const P=D[L];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){te.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),te.copy(P))}function de(P){oe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),oe.copy(P))}function Ie(P,B){let K=f.get(B);K===void 0&&(K=new WeakMap,f.set(B,K));let ae=K.get(P);ae===void 0&&(ae=n.getUniformBlockIndex(B,P.name),K.set(P,ae))}function We(P,B){const ae=f.get(B).get(P);c.get(P)!==ae&&(n.uniformBlockBinding(B,ae,P.__bindingPointIndex),c.set(P,ae))}function ut(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},L=null,D={},g={},x=new WeakMap,p=[],h=null,m=!1,v=null,_=null,y=null,w=null,T=null,A=null,S=null,b=!1,R=null,q=null,ee=null,V=null,k=null,te.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Pe,disable:xe,bindFramebuffer:Me,drawBuffers:ue,useProgram:Be,setBlending:gt,setMaterial:zt,setFlipSided:At,setCullFace:Ln,setLineWidth:vt,setPolygonOffset:Oe,setScissorTest:Un,activeTexture:On,bindTexture:C,unbindTexture:M,compressedTexImage2D:O,compressedTexImage3D:J,texImage2D:ve,texImage3D:ce,updateUBOMapping:Ie,uniformBlockBinding:We,texStorage2D:j,texStorage3D:pe,texSubImage2D:ne,texSubImage3D:re,compressedTexSubImage2D:ye,compressedTexSubImage3D:se,scissor:me,viewport:de,reset:ut}}function K1(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),x=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return m?new OffscreenCanvas(C,M):mo("canvas")}function _(C,M,O,J){let ne=1;if((C.width>J||C.height>J)&&(ne=J/Math.max(C.width,C.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const re=M?Cc:Math.floor,ye=re(ne*C.width),se=re(ne*C.height);p===void 0&&(p=v(ye,se));const j=O?v(ye,se):p;return j.width=ye,j.height=se,j.getContext("2d").drawImage(C,0,0,ye,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+se+")."),j}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return _h(C.width)&&_h(C.height)}function w(C){return a?!1:C.wrapS!==Mn||C.wrapT!==Mn||C.minFilter!==kt&&C.minFilter!==sn}function T(C,M){return C.generateMipmaps&&M&&C.minFilter!==kt&&C.minFilter!==sn}function A(C){n.generateMipmap(C)}function S(C,M,O,J,ne=!1){if(a===!1)return M;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=M;return M===6403&&(O===5126&&(re=33326),O===5131&&(re=33325),O===5121&&(re=33321)),M===33319&&(O===5126&&(re=33328),O===5131&&(re=33327),O===5121&&(re=33323)),M===6408&&(O===5126&&(re=34836),O===5131&&(re=34842),O===5121&&(re=J===qe&&ne===!1?35907:32856),O===32819&&(re=32854),O===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function b(C,M,O){return T(C,O)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){return C===kt||C===Xd||C===qd?9728:9729}function q(C){const M=C.target;M.removeEventListener("dispose",q),V(M),M.isVideoTexture&&x.delete(M)}function ee(C){const M=C.target;M.removeEventListener("dispose",ee),X(M)}function V(C){const M=i.get(C);if(M.__webglInit===void 0)return;const O=C.source,J=h.get(O);if(J){const ne=J[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&k(C),Object.keys(J).length===0&&h.delete(O)}i.remove(C)}function k(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const O=C.source,J=h.get(O);delete J[M.__cacheKey],o.memory.textures--}function X(C){const M=C.texture,O=i.get(C),J=i.get(M);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)n.deleteFramebuffer(O.__webglFramebuffer[ne]),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[ne]);else{if(n.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ne=0;ne<O.__webglColorRenderbuffer.length;ne++)O.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[ne]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,re=M.length;ne<re;ne++){const ye=i.get(M[ne]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(C)}let Y=0;function Q(){Y=0}function I(){const C=Y;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Y+=1,C}function L(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.encoding),M.join()}function D(C,M){const O=i.get(C);if(C.isVideoTexture&&Un(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(O,C,M);return}}t.bindTexture(3553,O.__webglTexture,33984+M)}function $(C,M){const O=i.get(C);if(C.version>0&&O.__version!==C.version){xe(O,C,M);return}t.bindTexture(35866,O.__webglTexture,33984+M)}function W(C,M){const O=i.get(C);if(C.version>0&&O.__version!==C.version){xe(O,C,M);return}t.bindTexture(32879,O.__webglTexture,33984+M)}function te(C,M){const O=i.get(C);if(C.version>0&&O.__version!==C.version){Me(O,C,M);return}t.bindTexture(34067,O.__webglTexture,33984+M)}const oe={[Ya]:10497,[Mn]:33071,[Ec]:33648},_e={[kt]:9728,[Xd]:9984,[qd]:9986,[sn]:9729,[V_]:9985,[pl]:9987};function G(C,M,O){if(O?(n.texParameteri(C,10242,oe[M.wrapS]),n.texParameteri(C,10243,oe[M.wrapT]),(C===32879||C===35866)&&n.texParameteri(C,32882,oe[M.wrapR]),n.texParameteri(C,10240,_e[M.magFilter]),n.texParameteri(C,10241,_e[M.minFilter])):(n.texParameteri(C,10242,33071),n.texParameteri(C,10243,33071),(C===32879||C===35866)&&n.texParameteri(C,32882,33071),(M.wrapS!==Mn||M.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,10240,R(M.magFilter)),n.texParameteri(C,10241,R(M.minFilter)),M.minFilter!==kt&&M.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.type===Ki&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===po&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(C,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Pe(C,M){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",q));const J=M.source;let ne=h.get(J);ne===void 0&&(ne={},h.set(J,ne));const re=L(M);if(re!==C.__cacheKey){ne[re]===void 0&&(ne[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[re].usedTimes++;const ye=ne[C.__cacheKey];ye!==void 0&&(ne[C.__cacheKey].usedTimes--,ye.usedTimes===0&&k(M)),C.__cacheKey=re,C.__webglTexture=ne[re].texture}return O}function xe(C,M,O){let J=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=35866),M.isData3DTexture&&(J=32879);const ne=Pe(C,M),re=M.source;t.bindTexture(J,C.__webglTexture,33984+O);const ye=i.get(re);if(re.version!==ye.__version||ne===!0){t.activeTexture(33984+O),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const se=w(M)&&y(M.image)===!1;let j=_(M.image,se,!1,c);j=On(M,j);const pe=y(j)||a,ve=s.convert(M.format,M.encoding);let ce=s.convert(M.type),me=S(M.internalFormat,ve,ce,M.encoding,M.isVideoTexture);G(J,M,pe);let de;const Ie=M.mipmaps,We=a&&M.isVideoTexture!==!0,ut=ye.__version===void 0||ne===!0,P=b(M,j,pe);if(M.isDepthTexture)me=6402,a?M.type===Ki?me=36012:M.type===Zi?me=33190:M.type===es?me=35056:me=33189:M.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===tr&&me===6402&&M.type!==_g&&M.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Zi,ce=s.convert(M.type)),M.format===ds&&me===6402&&(me=34041,M.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=es,ce=s.convert(M.type))),ut&&(We?t.texStorage2D(3553,1,me,j.width,j.height):t.texImage2D(3553,0,me,j.width,j.height,0,ve,ce,null));else if(M.isDataTexture)if(Ie.length>0&&pe){We&&ut&&t.texStorage2D(3553,P,me,Ie[0].width,Ie[0].height);for(let B=0,K=Ie.length;B<K;B++)de=Ie[B],We?t.texSubImage2D(3553,B,0,0,de.width,de.height,ve,ce,de.data):t.texImage2D(3553,B,me,de.width,de.height,0,ve,ce,de.data);M.generateMipmaps=!1}else We?(ut&&t.texStorage2D(3553,P,me,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,ve,ce,j.data)):t.texImage2D(3553,0,me,j.width,j.height,0,ve,ce,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&ut&&t.texStorage3D(35866,P,me,Ie[0].width,Ie[0].height,j.depth);for(let B=0,K=Ie.length;B<K;B++)de=Ie[B],M.format!==wn?ve!==null?We?t.compressedTexSubImage3D(35866,B,0,0,0,de.width,de.height,j.depth,ve,de.data,0,0):t.compressedTexImage3D(35866,B,me,de.width,de.height,j.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(35866,B,0,0,0,de.width,de.height,j.depth,ve,ce,de.data):t.texImage3D(35866,B,me,de.width,de.height,j.depth,0,ve,ce,de.data)}else{We&&ut&&t.texStorage2D(3553,P,me,Ie[0].width,Ie[0].height);for(let B=0,K=Ie.length;B<K;B++)de=Ie[B],M.format!==wn?ve!==null?We?t.compressedTexSubImage2D(3553,B,0,0,de.width,de.height,ve,de.data):t.compressedTexImage2D(3553,B,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(3553,B,0,0,de.width,de.height,ve,ce,de.data):t.texImage2D(3553,B,me,de.width,de.height,0,ve,ce,de.data)}else if(M.isDataArrayTexture)We?(ut&&t.texStorage3D(35866,P,me,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,ve,ce,j.data)):t.texImage3D(35866,0,me,j.width,j.height,j.depth,0,ve,ce,j.data);else if(M.isData3DTexture)We?(ut&&t.texStorage3D(32879,P,me,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,ve,ce,j.data)):t.texImage3D(32879,0,me,j.width,j.height,j.depth,0,ve,ce,j.data);else if(M.isFramebufferTexture){if(ut)if(We)t.texStorage2D(3553,P,me,j.width,j.height);else{let B=j.width,K=j.height;for(let ae=0;ae<P;ae++)t.texImage2D(3553,ae,me,B,K,0,ve,ce,null),B>>=1,K>>=1}}else if(Ie.length>0&&pe){We&&ut&&t.texStorage2D(3553,P,me,Ie[0].width,Ie[0].height);for(let B=0,K=Ie.length;B<K;B++)de=Ie[B],We?t.texSubImage2D(3553,B,0,0,ve,ce,de):t.texImage2D(3553,B,me,ve,ce,de);M.generateMipmaps=!1}else We?(ut&&t.texStorage2D(3553,P,me,j.width,j.height),t.texSubImage2D(3553,0,0,0,ve,ce,j)):t.texImage2D(3553,0,me,ve,ce,j);T(M,pe)&&A(J),ye.__version=re.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Me(C,M,O){if(M.image.length!==6)return;const J=Pe(C,M),ne=M.source;t.bindTexture(34067,C.__webglTexture,33984+O);const re=i.get(ne);if(ne.version!==re.__version||J===!0){t.activeTexture(33984+O),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,j=[];for(let B=0;B<6;B++)!ye&&!se?j[B]=_(M.image[B],!1,!0,u):j[B]=se?M.image[B].image:M.image[B],j[B]=On(M,j[B]);const pe=j[0],ve=y(pe)||a,ce=s.convert(M.format,M.encoding),me=s.convert(M.type),de=S(M.internalFormat,ce,me,M.encoding),Ie=a&&M.isVideoTexture!==!0,We=re.__version===void 0||J===!0;let ut=b(M,pe,ve);G(34067,M,ve);let P;if(ye){Ie&&We&&t.texStorage2D(34067,ut,de,pe.width,pe.height);for(let B=0;B<6;B++){P=j[B].mipmaps;for(let K=0;K<P.length;K++){const ae=P[K];M.format!==wn?ce!==null?Ie?t.compressedTexSubImage2D(34069+B,K,0,0,ae.width,ae.height,ce,ae.data):t.compressedTexImage2D(34069+B,K,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+B,K,0,0,ae.width,ae.height,ce,me,ae.data):t.texImage2D(34069+B,K,de,ae.width,ae.height,0,ce,me,ae.data)}}}else{P=M.mipmaps,Ie&&We&&(P.length>0&&ut++,t.texStorage2D(34067,ut,de,j[0].width,j[0].height));for(let B=0;B<6;B++)if(se){Ie?t.texSubImage2D(34069+B,0,0,0,j[B].width,j[B].height,ce,me,j[B].data):t.texImage2D(34069+B,0,de,j[B].width,j[B].height,0,ce,me,j[B].data);for(let K=0;K<P.length;K++){const fe=P[K].image[B].image;Ie?t.texSubImage2D(34069+B,K+1,0,0,fe.width,fe.height,ce,me,fe.data):t.texImage2D(34069+B,K+1,de,fe.width,fe.height,0,ce,me,fe.data)}}else{Ie?t.texSubImage2D(34069+B,0,0,0,ce,me,j[B]):t.texImage2D(34069+B,0,de,ce,me,j[B]);for(let K=0;K<P.length;K++){const ae=P[K];Ie?t.texSubImage2D(34069+B,K+1,0,0,ce,me,ae.image[B]):t.texImage2D(34069+B,K+1,de,ce,me,ae.image[B])}}}T(M,ve)&&A(34067),re.__version=ne.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ue(C,M,O,J,ne){const re=s.convert(O.format,O.encoding),ye=s.convert(O.type),se=S(O.internalFormat,re,ye,O.encoding);i.get(M).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,se,M.width,M.height,M.depth,0,re,ye,null):t.texImage2D(ne,0,se,M.width,M.height,0,re,ye,null)),t.bindFramebuffer(36160,C),Oe(M)?d.framebufferTexture2DMultisampleEXT(36160,J,ne,i.get(O).__webglTexture,0,vt(M)):(ne===3553||ne>=34069&&ne<=34074)&&n.framebufferTexture2D(36160,J,ne,i.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(C,M,O){if(n.bindRenderbuffer(36161,C),M.depthBuffer&&!M.stencilBuffer){let J=33189;if(O||Oe(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ki?J=36012:ne.type===Zi&&(J=33190));const re=vt(M);Oe(M)?d.renderbufferStorageMultisampleEXT(36161,re,J,M.width,M.height):n.renderbufferStorageMultisample(36161,re,J,M.width,M.height)}else n.renderbufferStorage(36161,J,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,C)}else if(M.depthBuffer&&M.stencilBuffer){const J=vt(M);O&&Oe(M)===!1?n.renderbufferStorageMultisample(36161,J,35056,M.width,M.height):Oe(M)?d.renderbufferStorageMultisampleEXT(36161,J,35056,M.width,M.height):n.renderbufferStorage(36161,34041,M.width,M.height),n.framebufferRenderbuffer(36160,33306,36161,C)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<J.length;ne++){const re=J[ne],ye=s.convert(re.format,re.encoding),se=s.convert(re.type),j=S(re.internalFormat,ye,se,re.encoding),pe=vt(M);O&&Oe(M)===!1?n.renderbufferStorageMultisample(36161,pe,j,M.width,M.height):Oe(M)?d.renderbufferStorageMultisampleEXT(36161,pe,j,M.width,M.height):n.renderbufferStorage(36161,j,M.width,M.height)}}n.bindRenderbuffer(36161,null)}function Ce(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const J=i.get(M.depthTexture).__webglTexture,ne=vt(M);if(M.depthTexture.format===tr)Oe(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,ne):n.framebufferTexture2D(36160,36096,3553,J,0);else if(M.depthTexture.format===ds)Oe(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,ne):n.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function ge(C){const M=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ce(M.__webglFramebuffer,C)}else if(O){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=n.createRenderbuffer(),Be(M.__webglDepthbuffer[J],C,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Be(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function gt(C,M,O){const J=i.get(C);M!==void 0&&ue(J.__webglFramebuffer,C,C.texture,36064,3553),O!==void 0&&ge(C)}function zt(C){const M=C.texture,O=i.get(C),J=i.get(M);C.addEventListener("dispose",ee),C.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,o.memory.textures++);const ne=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,ye=y(C)||a;if(ne){O.__webglFramebuffer=[];for(let se=0;se<6;se++)O.__webglFramebuffer[se]=n.createFramebuffer()}else{if(O.__webglFramebuffer=n.createFramebuffer(),re)if(r.drawBuffers){const se=C.texture;for(let j=0,pe=se.length;j<pe;j++){const ve=i.get(se[j]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Oe(C)===!1){const se=re?M:[M];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let j=0;j<se.length;j++){const pe=se[j];O.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(36161,O.__webglColorRenderbuffer[j]);const ve=s.convert(pe.format,pe.encoding),ce=s.convert(pe.type),me=S(pe.internalFormat,ve,ce,pe.encoding,C.isXRRenderTarget===!0),de=vt(C);n.renderbufferStorageMultisample(36161,de,me,C.width,C.height),n.framebufferRenderbuffer(36160,36064+j,36161,O.__webglColorRenderbuffer[j])}n.bindRenderbuffer(36161,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,J.__webglTexture),G(34067,M,ye);for(let se=0;se<6;se++)ue(O.__webglFramebuffer[se],C,M,36064,34069+se);T(M,ye)&&A(34067),t.unbindTexture()}else if(re){const se=C.texture;for(let j=0,pe=se.length;j<pe;j++){const ve=se[j],ce=i.get(ve);t.bindTexture(3553,ce.__webglTexture),G(3553,ve,ye),ue(O.__webglFramebuffer,C,ve,36064+j,3553),T(ve,ye)&&A(3553)}t.unbindTexture()}else{let se=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?se=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,J.__webglTexture),G(se,M,ye),ue(O.__webglFramebuffer,C,M,36064,se),T(M,ye)&&A(se),t.unbindTexture()}C.depthBuffer&&ge(C)}function At(C){const M=y(C)||a,O=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let J=0,ne=O.length;J<ne;J++){const re=O[J];if(T(re,M)){const ye=C.isWebGLCubeRenderTarget?34067:3553,se=i.get(re).__webglTexture;t.bindTexture(ye,se),A(ye),t.unbindTexture()}}}function Ln(C){if(a&&C.samples>0&&Oe(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],O=C.width,J=C.height;let ne=16384;const re=[],ye=C.stencilBuffer?33306:36096,se=i.get(C),j=C.isWebGLMultipleRenderTargets===!0;if(j)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,se.__webglFramebuffer),n.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,se.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){re.push(36064+pe),C.depthBuffer&&re.push(ye);const ve=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(ve===!1&&(C.depthBuffer&&(ne|=256),C.stencilBuffer&&(ne|=1024)),j&&n.framebufferRenderbuffer(36008,36064,36161,se.__webglColorRenderbuffer[pe]),ve===!0&&(n.invalidateFramebuffer(36008,[ye]),n.invalidateFramebuffer(36009,[ye])),j){const ce=i.get(M[pe]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ce,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,ne,9728),g&&n.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+pe,36161,se.__webglColorRenderbuffer[pe]);const ve=i.get(M[pe]).__webglTexture;t.bindFramebuffer(36160,se.__webglFramebuffer),n.framebufferTexture2D(36009,36064+pe,3553,ve,0)}t.bindFramebuffer(36009,se.__webglMultisampledFramebuffer)}}function vt(C){return Math.min(f,C.samples)}function Oe(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Un(C){const M=o.render.frame;x.get(C)!==M&&(x.set(C,M),C.update())}function On(C,M){const O=C.encoding,J=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Tc||O!==ur&&(O===qe?a===!1?e.has("EXT_sRGB")===!0&&J===wn?(C.format=Tc,C.minFilter=sn,C.generateMipmaps=!1):M=Sg.sRGBToLinear(M):(J!==wn||ne!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),M}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.setTexture2D=D,this.setTexture2DArray=$,this.setTexture3D=W,this.setTextureCube=te,this.rebindTextures=gt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Oe}function Q1(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===lr)return 5121;if(s===j_)return 32819;if(s===X_)return 32820;if(s===G_)return 5120;if(s===H_)return 5122;if(s===_g)return 5123;if(s===W_)return 5124;if(s===Zi)return 5125;if(s===Ki)return 5126;if(s===po)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===q_)return 6406;if(s===wn)return 6408;if(s===Y_)return 6409;if(s===Z_)return 6410;if(s===tr)return 6402;if(s===ds)return 34041;if(s===K_)return 6403;if(s===$_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Tc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Q_)return 36244;if(s===J_)return 33319;if(s===ex)return 33320;if(s===tx)return 36249;if(s===$l||s===Yl||s===Zl||s===Kl)if(o===qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$l)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$l)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===Yd||s===Zd||s===Kd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$d)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qd||s===Jd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Qd)return o===qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jd)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===uh||s===ch||s===fh||s===dh||s===hh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===eh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===th)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ih)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ah)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===uh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ch)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hh)return o===qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ph)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ph)return o===qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===es?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class J1 extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class la extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ew={type:"move"};class Tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const v=new la;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[p.jointName]=v,u.add(v)}const m=u.joints[p.jointName];h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),g=.02,x=.005;u.inputState.pinching&&d>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ew)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class tw extends hn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:tr,c!==tr&&c!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===tr&&(i=Zi),i===void 0&&c===ds&&(i=es),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1}}class nw extends vs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,g=null;const x=t.getContextAttributes();let p=null,h=null;const m=[],v=[],_=new on;_.layers.enable(1),_.viewport=new ht;const y=new on;y.layers.enable(2),y.viewport=new ht;const w=[_,y],T=new J1;T.layers.enable(1),T.layers.enable(2);let A=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let D=m[L];return D===void 0&&(D=new Tu,m[L]=D),D.getTargetRaySpace()},this.getControllerGrip=function(L){let D=m[L];return D===void 0&&(D=new Tu,m[L]=D),D.getGripSpace()},this.getHand=function(L){let D=m[L];return D===void 0&&(D=new Tu,m[L]=D),D.getHandSpace()};function b(L){const D=v.indexOf(L.inputSource);if(D===-1)return;const $=m[D];$!==void 0&&$.dispatchEvent({type:L.type,data:L.inputSource})}function R(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",q);for(let L=0;L<m.length;L++){const D=v[L];D!==null&&(v[L]=null,m[L].disconnect(D))}A=null,S=null,e.setRenderTarget(p),d=null,f=null,c=null,r=null,h=null,I.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",R),r.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const D={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,D),r.updateRenderState({baseLayer:d}),h=new cr(d.framebufferWidth,d.framebufferHeight,{format:wn,type:lr,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let D=null,$=null,W=null;x.depth&&(W=x.stencil?35056:33190,D=x.stencil?ds:tr,$=x.stencil?es:Zi);const te={colorFormat:32856,depthFormat:W,scaleFactor:s};c=new XRWebGLBinding(r,t),f=c.createProjectionLayer(te),r.updateRenderState({layers:[f]}),h=new cr(f.textureWidth,f.textureHeight,{format:wn,type:lr,depthTexture:new tw(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const oe=e.properties.get(h);oe.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),I.setContext(r),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function q(L){for(let D=0;D<L.removed.length;D++){const $=L.removed[D],W=v.indexOf($);W>=0&&(v[W]=null,m[W].dispatchEvent({type:"disconnected",data:$}))}for(let D=0;D<L.added.length;D++){const $=L.added[D];let W=v.indexOf($);if(W===-1){for(let oe=0;oe<m.length;oe++)if(oe>=v.length){v.push($),W=oe;break}else if(v[oe]===null){v[oe]=$,W=oe;break}if(W===-1)break}const te=m[W];te&&te.dispatchEvent({type:"connected",data:$})}}const ee=new z,V=new z;function k(L,D,$){ee.setFromMatrixPosition(D.matrixWorld),V.setFromMatrixPosition($.matrixWorld);const W=ee.distanceTo(V),te=D.projectionMatrix.elements,oe=$.projectionMatrix.elements,_e=te[14]/(te[10]-1),G=te[14]/(te[10]+1),Pe=(te[9]+1)/te[5],xe=(te[9]-1)/te[5],Me=(te[8]-1)/te[0],ue=(oe[8]+1)/oe[0],Be=_e*Me,Ce=_e*ue,ge=W/(-Me+ue),gt=ge*-Me;D.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(gt),L.translateZ(ge),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const zt=_e+ge,At=G+ge,Ln=Be-gt,vt=Ce+(W-gt),Oe=Pe*G/At*zt,Un=xe*G/At*zt;L.projectionMatrix.makePerspective(Ln,vt,Oe,Un,zt,At)}function X(L,D){D===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(D.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;T.near=y.near=_.near=L.near,T.far=y.far=_.far=L.far,(A!==T.near||S!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),A=T.near,S=T.far);const D=L.parent,$=T.cameras;X(T,D);for(let te=0;te<$.length;te++)X($[te],D);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),L.matrix.copy(T.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);const W=L.children;for(let te=0,oe=W.length;te<oe;te++)W[te].updateMatrixWorld(!0);$.length===2?k(T,_,y):T.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(L){f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)};let Y=null;function Q(L,D){if(u=D.getViewerPose(l||o),g=D,u!==null){const $=u.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let W=!1;$.length!==T.cameras.length&&(T.cameras.length=0,W=!0);for(let te=0;te<$.length;te++){const oe=$[te];let _e=null;if(d!==null)_e=d.getViewport(oe);else{const Pe=c.getViewSubImage(f,oe);_e=Pe.viewport,te===0&&(e.setRenderTargetTextures(h,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(h))}let G=w[te];G===void 0&&(G=new on,G.layers.enable(te),G.viewport=new ht,w[te]=G),G.matrix.fromArray(oe.transform.matrix),G.projectionMatrix.fromArray(oe.projectionMatrix),G.viewport.set(_e.x,_e.y,_e.width,_e.height),te===0&&T.matrix.copy(G.matrix),W===!0&&T.cameras.push(G)}}for(let $=0;$<m.length;$++){const W=v[$],te=m[$];W!==null&&te!==void 0&&te.update(W,D,l||o)}Y&&Y(L,D),g=null}const I=new Dg;I.setAnimationLoop(Q),this.setAnimationLoop=function(L){Y=L},this.dispose=function(){}}}function iw(n,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,v,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),c(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,_)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),x(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,m,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===cn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===cn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let _;h.aoMap?_=h.aoMap:h.lightMap&&(_=h.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,m,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===cn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function rw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function u(v,_){let y=r[v.id];y===void 0&&(x(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",h));const w=_.program;i.updateUBOMapping(v,w);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function c(v){const _=f();v.__bindingPointIndex=_;const y=n.createBuffer(),w=v.__size,T=v.usage;return n.bindBuffer(35345,y),n.bufferData(35345,w,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,_,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],y=v.uniforms,w=v.__cache;n.bindBuffer(35345,_);for(let T=0,A=y.length;T<A;T++){const S=y[T];if(g(S,T,w)===!0){const b=S.value,R=S.__offset;typeof b=="number"?(S.__data[0]=b,n.bufferSubData(35345,R,S.__data)):(S.value.isMatrix3?(S.__data[0]=S.value.elements[0],S.__data[1]=S.value.elements[1],S.__data[2]=S.value.elements[2],S.__data[3]=S.value.elements[0],S.__data[4]=S.value.elements[3],S.__data[5]=S.value.elements[4],S.__data[6]=S.value.elements[5],S.__data[7]=S.value.elements[0],S.__data[8]=S.value.elements[6],S.__data[9]=S.value.elements[7],S.__data[10]=S.value.elements[8],S.__data[11]=S.value.elements[0]):b.toArray(S.__data),n.bufferSubData(35345,R,S.__data))}}n.bindBuffer(35345,null)}function g(v,_,y){const w=v.value;if(y[_]===void 0)return typeof w=="number"?y[_]=w:y[_]=w.clone(),!0;if(typeof w=="number"){if(y[_]!==w)return y[_]=w,!0}else{const T=y[_];if(T.equals(w)===!1)return T.copy(w),!0}return!1}function x(v){const _=v.uniforms;let y=0;const w=16;let T=0;for(let A=0,S=_.length;A<S;A++){const b=_[A],R=p(b);if(b.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=y,A>0){T=y%w;const q=w-T;T!==0&&q-R.boundary<0&&(y+=w-T,b.__offset=y)}y+=R.storage}return T=y%w,T>0&&(y+=w-T),v.__size=y,v.__cache={},this}function p(v){const _=v.value,y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function h(v){const _=v.target;_.removeEventListener("dispose",h);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function sw(){const n=mo("canvas");return n.style.display="block",n}function kg(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:sw(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let f=null,d=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ur,this.physicallyCorrectLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,m=0,v=0,_=null,y=-1,w=null;const T=new ht,A=new ht;let S=null,b=e.width,R=e.height,q=1,ee=null,V=null;const k=new ht(0,0,b,R),X=new ht(0,0,b,R);let Y=!1;const Q=new Ef;let I=!1,L=!1,D=null;const $=new it,W=new Ne,te=new z,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return _===null?q:1}let G=t;function Pe(E,F){for(let U=0;U<E.length;U++){const N=E[U],H=e.getContext(N,F);if(H!==null)return H}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wf}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),G=Pe(F,E),G===null)throw Pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,Me,ue,Be,Ce,ge,gt,zt,At,Ln,vt,Oe,Un,On,C,M,O,J,ne,re,ye,se,j,pe;function ve(){xe=new gM(G),Me=new cM(G,xe,n),xe.init(Me),se=new Q1(G,xe,Me),ue=new Z1(G,xe,Me),Be=new xM,Ce=new F1,ge=new K1(G,xe,ue,Ce,Me,se,Be),gt=new dM(p),zt=new mM(p),At=new Ax(G,Me),j=new lM(G,xe,At,Me),Ln=new vM(G,At,Be,j),vt=new wM(G,Ln,At,Be),ne=new MM(G,Me,ge),M=new fM(Ce),Oe=new z1(p,gt,zt,xe,Me,j,M),Un=new iw(p,Ce),On=new U1,C=new W1(xe,Me),J=new aM(p,gt,zt,ue,vt,c,o),O=new Y1(p,vt,Me),pe=new rw(G,Be,Me,ue),re=new uM(G,xe,Be,Me),ye=new _M(G,xe,Be,Me),Be.programs=Oe.programs,p.capabilities=Me,p.extensions=xe,p.properties=Ce,p.renderLists=On,p.shadowMap=O,p.state=ue,p.info=Be}ve();const ce=new nw(p,G);this.xr=ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(b,R,!1))},this.getSize=function(E){return E.set(b,R)},this.setSize=function(E,F,U){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=E,R=F,e.width=Math.floor(E*q),e.height=Math.floor(F*q),U!==!1&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(b*q,R*q).floor()},this.setDrawingBufferSize=function(E,F,U){b=E,R=F,q=U,e.width=Math.floor(E*U),e.height=Math.floor(F*U),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(k)},this.setViewport=function(E,F,U,N){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,F,U,N),ue.viewport(T.copy(k).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,F,U,N){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,F,U,N),ue.scissor(A.copy(X).multiplyScalar(q).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){ue.setScissorTest(Y=E)},this.setOpaqueSort=function(E){ee=E},this.setTransparentSort=function(E){V=E},this.getClearColor=function(E){return E.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(E=!0,F=!0,U=!0){let N=0;E&&(N|=16384),F&&(N|=256),U&&(N|=1024),G.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),On.dispose(),C.dispose(),Ce.dispose(),gt.dispose(),zt.dispose(),vt.dispose(),j.dispose(),pe.dispose(),Oe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ae),ce.removeEventListener("sessionend",fe),D&&(D.dispose(),D=null),ze.stop()};function me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=Be.autoReset,F=O.enabled,U=O.autoUpdate,N=O.needsUpdate,H=O.type;ve(),Be.autoReset=E,O.enabled=F,O.autoUpdate=U,O.needsUpdate=N,O.type=H}function Ie(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function We(E){const F=E.target;F.removeEventListener("dispose",We),ut(F)}function ut(E){P(E),Ce.remove(E)}function P(E){const F=Ce.get(E).programs;F!==void 0&&(F.forEach(function(U){Oe.releaseProgram(U)}),E.isShaderMaterial&&Oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,U,N,H,he){F===null&&(F=oe);const Se=H.isMesh&&H.matrixWorld.determinant()<0,Te=Hg(E,F,U,N,H);ue.setMaterial(N,Se);let we=U.index;const Fe=U.attributes.position;if(we===null){if(Fe===void 0||Fe.count===0)return}else if(we.count===0)return;let be=1;N.wireframe===!0&&(we=Ln.getWireframeAttribute(U),be=2),j.setup(H,N,Te,U,we);let De,Ke=re;we!==null&&(De=At.get(we),Ke=ye,Ke.setIndex(De));const ki=we!==null?we.count:Fe.count,mr=U.drawRange.start*be,gr=U.drawRange.count*be,Pn=he!==null?he.start*be:0,ke=he!==null?he.count*be:1/0,vr=Math.max(mr,Pn),et=Math.min(ki,mr+gr,Pn+ke)-1,en=Math.max(0,et-vr+1);if(en!==0){if(H.isMesh)N.wireframe===!0?(ue.setLineWidth(N.wireframeLinewidth*_e()),Ke.setMode(1)):Ke.setMode(4);else if(H.isLine){let si=N.linewidth;si===void 0&&(si=1),ue.setLineWidth(si*_e()),H.isLineSegments?Ke.setMode(1):H.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else H.isPoints?Ke.setMode(0):H.isSprite&&Ke.setMode(4);if(H.isInstancedMesh)Ke.renderInstances(vr,en,H.count);else if(U.isInstancedBufferGeometry){const si=Math.min(U.instanceCount,U._maxInstanceCount);Ke.renderInstances(vr,en,si)}else Ke.render(vr,en)}},this.compile=function(E,F){function U(N,H,he){N.transparent===!0&&N.side===yi?(N.side=cn,N.needsUpdate=!0,Jt(N,H,he),N.side=us,N.needsUpdate=!0,Jt(N,H,he),N.side=yi):Jt(N,H,he)}d=C.get(E),d.init(),x.push(d),E.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(p.physicallyCorrectLights),E.traverse(function(N){const H=N.material;if(H)if(Array.isArray(H))for(let he=0;he<H.length;he++){const Se=H[he];U(Se,E,N)}else U(H,E,N)}),x.pop(),d=null};let B=null;function K(E){B&&B(E)}function ae(){ze.stop()}function fe(){ze.start()}const ze=new Dg;ze.setAnimationLoop(K),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(E){B=E,ce.setAnimationLoop(E),E===null?ze.stop():ze.start()},ce.addEventListener("sessionstart",ae),ce.addEventListener("sessionend",fe),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,F,_),d=C.get(E,x.length),d.init(),x.push(d),$.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix($),L=this.localClippingEnabled,I=M.init(this.clippingPlanes,L,F),f=On.get(E,g.length),f.init(),g.push(f),ct(E,F,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ee,V),I===!0&&M.beginShadows();const U=d.state.shadowsArray;if(O.render(U,E,F),I===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(f,E),d.setupLights(p.physicallyCorrectLights),F.isArrayCamera){const N=F.cameras;for(let H=0,he=N.length;H<he;H++){const Se=N[H];St(f,E,Se,Se.viewport)}}else St(f,E,F);_!==null&&(ge.updateMultisampleRenderTarget(_),ge.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(p,E,F),j.resetDefaultState(),y=-1,w=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function ct(E,F,U,N){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)U=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){N&&te.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const Se=vt.update(E),Te=E.material;Te.visible&&f.push(E,Se,Te,U,te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Be.render.frame&&(E.skeleton.update(),E.skeleton.frame=Be.render.frame),!E.frustumCulled||Q.intersectsObject(E))){N&&te.setFromMatrixPosition(E.matrixWorld).applyMatrix4($);const Se=vt.update(E),Te=E.material;if(Array.isArray(Te)){const we=Se.groups;for(let Fe=0,be=we.length;Fe<be;Fe++){const De=we[Fe],Ke=Te[De.materialIndex];Ke&&Ke.visible&&f.push(E,Se,Ke,U,te.z,De)}}else Te.visible&&f.push(E,Se,Te,U,te.z,null)}}const he=E.children;for(let Se=0,Te=he.length;Se<Te;Se++)ct(he[Se],F,U,N)}function St(E,F,U,N){const H=E.opaque,he=E.transmissive,Se=E.transparent;d.setupLightsView(U),he.length>0&&Fi(H,F,U),N&&ue.viewport(T.copy(N)),H.length>0&&je(H,F,U),he.length>0&&je(he,F,U),Se.length>0&&je(Se,F,U),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Fi(E,F,U){const N=Me.isWebGL2;D===null&&(D=new cr(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?po:lr,minFilter:pl,samples:N&&s===!0?4:0})),p.getDrawingBufferSize(W),N?D.setSize(W.x,W.y):D.setSize(Cc(W.x),Cc(W.y));const H=p.getRenderTarget();p.setRenderTarget(D),p.clear();const he=p.toneMapping;p.toneMapping=Jn,je(E,F,U),p.toneMapping=he,ge.updateMultisampleRenderTarget(D),ge.updateRenderTargetMipmap(D),p.setRenderTarget(H)}function je(E,F,U){const N=F.isScene===!0?F.overrideMaterial:null;for(let H=0,he=E.length;H<he;H++){const Se=E[H],Te=Se.object,we=Se.geometry,Fe=N===null?Se.material:N,be=Se.group;Te.layers.test(U.layers)&&Bn(Te,F,U,we,Fe,be)}}function Bn(E,F,U,N,H,he){E.onBeforeRender(p,F,U,N,H,he),E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(p,F,U,N,E,he),H.transparent===!0&&H.side===yi?(H.side=cn,H.needsUpdate=!0,p.renderBufferDirect(U,F,N,H,E,he),H.side=us,H.needsUpdate=!0,p.renderBufferDirect(U,F,N,H,E,he),H.side=yi):p.renderBufferDirect(U,F,N,H,E,he),E.onAfterRender(p,F,U,N,H,he)}function Jt(E,F,U){F.isScene!==!0&&(F=oe);const N=Ce.get(E),H=d.state.lights,he=d.state.shadowsArray,Se=H.state.version,Te=Oe.getParameters(E,H.state,he,F,U),we=Oe.getProgramCacheKey(Te);let Fe=N.programs;N.environment=E.isMeshStandardMaterial?F.environment:null,N.fog=F.fog,N.envMap=(E.isMeshStandardMaterial?zt:gt).get(E.envMap||N.environment),Fe===void 0&&(E.addEventListener("dispose",We),Fe=new Map,N.programs=Fe);let be=Fe.get(we);if(be!==void 0){if(N.currentProgram===be&&N.lightsStateVersion===Se)return Lf(E,Te),be}else Te.uniforms=Oe.getUniforms(E),E.onBuild(U,Te,p),E.onBeforeCompile(Te,p),be=Oe.acquireProgram(Te,we),Fe.set(we,be),N.uniforms=Te.uniforms;const De=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=M.uniform),Lf(E,Te),N.needsLights=jg(E),N.lightsStateVersion=Se,N.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMap.value=H.state.directionalShadowMap,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotShadowMap.value=H.state.spotShadowMap,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMap.value=H.state.pointShadowMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix);const Ke=be.getUniforms(),ki=Ea.seqWithValue(Ke.seq,De);return N.currentProgram=be,N.uniformsList=ki,be}function Lf(E,F){const U=Ce.get(E);U.outputEncoding=F.outputEncoding,U.instancing=F.instancing,U.skinning=F.skinning,U.morphTargets=F.morphTargets,U.morphNormals=F.morphNormals,U.morphColors=F.morphColors,U.morphTargetsCount=F.morphTargetsCount,U.numClippingPlanes=F.numClippingPlanes,U.numIntersection=F.numClipIntersection,U.vertexAlphas=F.vertexAlphas,U.vertexTangents=F.vertexTangents,U.toneMapping=F.toneMapping}function Hg(E,F,U,N,H){F.isScene!==!0&&(F=oe),ge.resetTextureUnits();const he=F.fog,Se=N.isMeshStandardMaterial?F.environment:null,Te=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:ur,we=(N.isMeshStandardMaterial?zt:gt).get(N.envMap||Se),Fe=N.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,be=!!N.normalMap&&!!U.attributes.tangent,De=!!U.morphAttributes.position,Ke=!!U.morphAttributes.normal,ki=!!U.morphAttributes.color,mr=N.toneMapped?p.toneMapping:Jn,gr=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Pn=gr!==void 0?gr.length:0,ke=Ce.get(N),vr=d.state.lights;if(I===!0&&(L===!0||E!==w)){const Gt=E===w&&N.id===y;M.setState(N,E,Gt)}let et=!1;N.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==vr.state.version||ke.outputEncoding!==Te||H.isInstancedMesh&&ke.instancing===!1||!H.isInstancedMesh&&ke.instancing===!0||H.isSkinnedMesh&&ke.skinning===!1||!H.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==we||N.fog===!0&&ke.fog!==he||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==M.numPlanes||ke.numIntersection!==M.numIntersection)||ke.vertexAlphas!==Fe||ke.vertexTangents!==be||ke.morphTargets!==De||ke.morphNormals!==Ke||ke.morphColors!==ki||ke.toneMapping!==mr||Me.isWebGL2===!0&&ke.morphTargetsCount!==Pn)&&(et=!0):(et=!0,ke.__version=N.version);let en=ke.currentProgram;et===!0&&(en=Jt(N,F,H));let si=!1,xs=!1,xl=!1;const Lt=en.getUniforms(),Ui=ke.uniforms;if(ue.useProgram(en.program)&&(si=!0,xs=!0,xl=!0),N.id!==y&&(y=N.id,xs=!0),si||w!==E){if(Lt.setValue(G,"projectionMatrix",E.projectionMatrix),Me.logarithmicDepthBuffer&&Lt.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,xs=!0,xl=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Gt=Lt.map.cameraPosition;Gt!==void 0&&Gt.setValue(G,te.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Lt.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||H.isSkinnedMesh)&&Lt.setValue(G,"viewMatrix",E.matrixWorldInverse)}if(H.isSkinnedMesh){Lt.setOptional(G,H,"bindMatrix"),Lt.setOptional(G,H,"bindMatrixInverse");const Gt=H.skeleton;Gt&&(Me.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Lt.setValue(G,"boneTexture",Gt.boneTexture,ge),Lt.setValue(G,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yl=U.morphAttributes;if((yl.position!==void 0||yl.normal!==void 0||yl.color!==void 0&&Me.isWebGL2===!0)&&ne.update(H,U,N,en),(xs||ke.receiveShadow!==H.receiveShadow)&&(ke.receiveShadow=H.receiveShadow,Lt.setValue(G,"receiveShadow",H.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Ui.envMap.value=we,Ui.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),xs&&(Lt.setValue(G,"toneMappingExposure",p.toneMappingExposure),ke.needsLights&&Wg(Ui,xl),he&&N.fog===!0&&Un.refreshFogUniforms(Ui,he),Un.refreshMaterialUniforms(Ui,N,q,R,D),Ea.upload(G,ke.uniformsList,Ui,ge)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ea.upload(G,ke.uniformsList,Ui,ge),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Lt.setValue(G,"center",H.center),Lt.setValue(G,"modelViewMatrix",H.modelViewMatrix),Lt.setValue(G,"normalMatrix",H.normalMatrix),Lt.setValue(G,"modelMatrix",H.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Gt=N.uniformsGroups;for(let Sl=0,Xg=Gt.length;Sl<Xg;Sl++)if(Me.isWebGL2){const Pf=Gt[Sl];pe.update(Pf,en),pe.bind(Pf,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function Wg(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function jg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,F,U){Ce.get(E.texture).__webglTexture=F,Ce.get(E.depthTexture).__webglTexture=U;const N=Ce.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=U===void 0,N.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){const U=Ce.get(E);U.__webglFramebuffer=F,U.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,U=0){_=E,m=F,v=U;let N=!0,H=null,he=!1,Se=!1;if(E){const we=Ce.get(E);we.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),N=!1):we.__webglFramebuffer===void 0?ge.setupRenderTarget(E):we.__hasExternalTextures&&ge.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture);const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Se=!0);const be=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(H=be[F],he=!0):Me.isWebGL2&&E.samples>0&&ge.useMultisampledRTT(E)===!1?H=Ce.get(E).__webglMultisampledFramebuffer:H=be,T.copy(E.viewport),A.copy(E.scissor),S=E.scissorTest}else T.copy(k).multiplyScalar(q).floor(),A.copy(X).multiplyScalar(q).floor(),S=Y;if(ue.bindFramebuffer(36160,H)&&Me.drawBuffers&&N&&ue.drawBuffers(E,H),ue.viewport(T),ue.scissor(A),ue.setScissorTest(S),he){const we=Ce.get(E.texture);G.framebufferTexture2D(36160,36064,34069+F,we.__webglTexture,U)}else if(Se){const we=Ce.get(E.texture),Fe=F||0;G.framebufferTextureLayer(36160,36064,we.__webglTexture,U||0,Fe)}y=-1},this.readRenderTargetPixels=function(E,F,U,N,H,he,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){ue.bindFramebuffer(36160,Te);try{const we=E.texture,Fe=we.format,be=we.type;if(Fe!==wn&&se.convert(Fe)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=be===po&&(xe.has("EXT_color_buffer_half_float")||Me.isWebGL2&&xe.has("EXT_color_buffer_float"));if(be!==lr&&se.convert(be)!==G.getParameter(35738)&&!(be===Ki&&(Me.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-N&&U>=0&&U<=E.height-H&&G.readPixels(F,U,N,H,se.convert(Fe),se.convert(be),he)}finally{const we=_!==null?Ce.get(_).__webglFramebuffer:null;ue.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(E,F,U=0){const N=Math.pow(2,-U),H=Math.floor(F.image.width*N),he=Math.floor(F.image.height*N);ge.setTexture2D(F,0),G.copyTexSubImage2D(3553,U,0,0,E.x,E.y,H,he),ue.unbindTexture()},this.copyTextureToTexture=function(E,F,U,N=0){const H=F.image.width,he=F.image.height,Se=se.convert(U.format),Te=se.convert(U.type);ge.setTexture2D(U,0),G.pixelStorei(37440,U.flipY),G.pixelStorei(37441,U.premultiplyAlpha),G.pixelStorei(3317,U.unpackAlignment),F.isDataTexture?G.texSubImage2D(3553,N,E.x,E.y,H,he,Se,Te,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(3553,N,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,Se,F.mipmaps[0].data):G.texSubImage2D(3553,N,E.x,E.y,Se,Te,F.image),N===0&&U.generateMipmaps&&G.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(E,F,U,N,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=E.max.x-E.min.x+1,Se=E.max.y-E.min.y+1,Te=E.max.z-E.min.z+1,we=se.convert(N.format),Fe=se.convert(N.type);let be;if(N.isData3DTexture)ge.setTexture3D(N,0),be=32879;else if(N.isDataArrayTexture)ge.setTexture2DArray(N,0),be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,N.flipY),G.pixelStorei(37441,N.premultiplyAlpha),G.pixelStorei(3317,N.unpackAlignment);const De=G.getParameter(3314),Ke=G.getParameter(32878),ki=G.getParameter(3316),mr=G.getParameter(3315),gr=G.getParameter(32877),Pn=U.isCompressedTexture?U.mipmaps[0]:U.image;G.pixelStorei(3314,Pn.width),G.pixelStorei(32878,Pn.height),G.pixelStorei(3316,E.min.x),G.pixelStorei(3315,E.min.y),G.pixelStorei(32877,E.min.z),U.isDataTexture||U.isData3DTexture?G.texSubImage3D(be,H,F.x,F.y,F.z,he,Se,Te,we,Fe,Pn.data):U.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(be,H,F.x,F.y,F.z,he,Se,Te,we,Pn.data)):G.texSubImage3D(be,H,F.x,F.y,F.z,he,Se,Te,we,Fe,Pn),G.pixelStorei(3314,De),G.pixelStorei(32878,Ke),G.pixelStorei(3316,ki),G.pixelStorei(3315,mr),G.pixelStorei(32877,gr),H===0&&N.generateMipmaps&&G.generateMipmap(be),ue.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ge.setTextureCube(E,0):E.isData3DTexture?ge.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ge.setTexture2DArray(E,0):ge.setTexture2D(E,0),ue.unbindTexture()},this.resetState=function(){m=0,v=0,_=null,ue.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ow extends kg{}ow.prototype.isWebGL1Renderer=!0;class aw extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class bf extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kh=new z,Qh=new z,Jh=new it,Cu=new Eg,ua=new gl;class lw extends mt{constructor(e=new An,t=new bf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Kh.fromBufferAttribute(t,r-1),Qh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Kh.distanceTo(Qh);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),ua.radius+=s,e.ray.intersectsSphere(ua)===!1)return;Jh.copy(r).invert(),Cu.copy(e.ray).applyMatrix4(Jh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new z,c=new z,f=new z,d=new z,g=this.isLineSegments?2:1,x=i.index,h=i.attributes.position;if(x!==null){const m=Math.max(0,o.start),v=Math.min(x.count,o.start+o.count);for(let _=m,y=v-1;_<y;_+=g){const w=x.getX(_),T=x.getX(_+1);if(u.fromBufferAttribute(h,w),c.fromBufferAttribute(h,T),Cu.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let _=m,y=v-1;_<y;_+=g){if(u.fromBufferAttribute(h,_),c.fromBufferAttribute(h,_+1),Cu.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ep=new z,tp=new z;class Ug extends lw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ep.fromBufferAttribute(t,r),tp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ep.distanceTo(tp);e.setAttribute("lineDistance",new Ct(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Af extends An{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new z,d=new z,g=[],x=[],p=[],h=[];for(let m=0;m<=i;m++){const v=[],_=m/i;let y=0;m==0&&o==0?y=.5/t:m==i&&l==Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const T=w/t;f.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),x.push(f.x,f.y,f.z),d.copy(f).normalize(),p.push(d.x,d.y,d.z),h.push(T+y,1-_),v.push(u++)}c.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){const _=c[m][v+1],y=c[m][v],w=c[m+1][v],T=c[m+1][v+1];(m!==0||o>0)&&g.push(_,y,T),(m!==i-1||l<Math.PI)&&g.push(y,w,T)}this.setIndex(g),this.setAttribute("position",new Ct(x,3)),this.setAttribute("normal",new Ct(p,3)),this.setAttribute("uv",new Ct(h,2))}static fromJSON(e){return new Af(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uw extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cw extends zi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fw extends zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const np={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dw{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const g=u[f],x=u[f+1];if(g.global&&(g.lastIndex=0),g.test(c))return x}return null}}}const hw=new dw;class Og{constructor(e){this.manager=e!==void 0?e:hw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class pw extends Og{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=np.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=mo("img");function l(){c(),np.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class mw extends Og{constructor(e){super(e)}load(e,t,i,r){const s=new hn,o=new pw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Bg extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class gw extends Bg{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bu=new it,ip=new z,rp=new z;class vw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _w extends vw{constructor(){super(new Rg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xw extends Bg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.target=new mt,this.shadow=new _w}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yw extends Ug{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ae(i),r=new Ae(r);const s=t/2,o=e/t,a=e/2,l=[],u=[];for(let d=0,g=0,x=-a;d<=t;d++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const p=d===s?i:r;p.toArray(u,g),g+=3,p.toArray(u,g),g+=3,p.toArray(u,g),g+=3,p.toArray(u,g),g+=3}const c=new An;c.setAttribute("position",new Ct(l,3)),c.setAttribute("color",new Ct(u,3));const f=new bf({vertexColors:!0,toneMapped:!1});super(c,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Sw extends Ug{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new An;r.setAttribute("position",new Ct(t,3)),r.setAttribute("color",new Ct(i,3));const s=new bf({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Ae,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);function Mw(){const n=new aw,e=new gw(16777215,16777215,.1);e.color.setHSL(.6,.6,.6),e.groundColor.setHSL(.1,1,.4),e.position.set(0,50,0),n.add(e);const t=new xw(16777215,.7);t.color.setHSL(.1,1,.95),t.position.set(-10,100,50),t.position.multiplyScalar(100),n.add(t),t.castShadow=!0,t.shadow.mapSize.width=4096,t.shadow.mapSize.height=4096;let i=200;t.shadow.camera.left=-i,t.shadow.camera.right=i,t.shadow.camera.top=i,t.shadow.camera.bottom=-i,t.shadow.camera.far=15e3;const r=new on(45,window.innerWidth/window.innerHeight,1,5e3);r.position.set(30,30,170);const s=new kg({antialias:!0});s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight);const o=new Sw(200);return n.add(o),[n,r,s]}function ww(n){const e={x:0,y:-.25,z:0},t={x:175,y:.5,z:175},i={x:175,y:4,z:.125},r=new yw(175,20,16777215,16777215);r.material.opacity=.5,r.material.transparent=!0,n.add(r);const s=Ew(e,t);n.add(s);const o=ca(0,1.75,87.5,i),a=ca(0,1.75,-87.5,i);[i.x,i.z]=[i.z,i.x];const l=ca(87.5,1.75,0,i),u=ca(-87.5,1.75,0,i);n.add(o,a,l,u)}function Ew(n,e){const t=new En(new pr(e.x,e.y,e.z),new cw({color:0,transparent:!0,opacity:.25}));return t.position.set(n.x,n.y,n.z),t.receiveShadow=!0,t}function ca(n,e,t,i){const r=new En(new pr(i.x,i.y,i.z),new uw({color:16777215,opacity:.75,transparent:!0}));return r.position.set(n,e,t),r.receiveShadow=!0,r}const Tw=""+new URL("earth.b54e0c8c.jpg",import.meta.url).href;function Cw(n){const t={x:0,y:2,z:0},i=bw(t.x,t.y,t.z,2);n.add(i)}function bw(n,e,t,i){const s=new mw().load(Tw);s.wrapS=s.wrapT=Ya,s.repeat.set(1,1),s.anisotropy=1,s.encoding=qe;const o=new En(new Af(i,32,32),new fw({map:s}));return o.geometry.computeBoundingSphere(),o.geometry.computeBoundingBox(),o.position.set(n,e,t),o.castShadow=!0,o.receiveShadow=!0,o}var Vg={exports:{}},_l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aw=ts.exports,Lw=Symbol.for("react.element"),Pw=Symbol.for("react.fragment"),Dw=Object.prototype.hasOwnProperty,Rw=Aw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iw={key:!0,ref:!0,__self:!0,__source:!0};function Gg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Dw.call(e,i)&&!Iw.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Lw,type:n,key:s,ref:o,props:r,_owner:Rw.current}}_l.Fragment=Pw;_l.jsx=Gg;_l.jsxs=Gg;(function(n){n.exports=_l})(Vg);const Za=Vg.exports.jsx;let Us,$s,Ys;function Nw(){$s.aspect=window.innerWidth/window.innerHeight,$s.updateProjectionMatrix(),Ys.setSize(window.innerWidth,window.innerHeight),Ys.render(Us,$s)}function zw(){var n;[Us,$s,Ys]=Mw(),(n=document.getElementById("canvas"))==null||n.appendChild(Ys.domElement),window.addEventListener("resize",Nw,!1),ww(Us),Cw(Us),Ys.render(Us,$s)}const Fw=n=>{const e=ts.exports.useRef(!1);ts.exports.useEffect(()=>{e.current||(e.current=!0,n())},[])};function kw(){return Fw(zw),Za("div",{id:"canvas"})}function Uw(){return Za(kw,{})}Au.createRoot(document.getElementById("root")).render(Za(u0.StrictMode,{children:Za(Uw,{})}));
