(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ag(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jr={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),Lg=Symbol.for("react.portal"),Pg=Symbol.for("react.fragment"),Dg=Symbol.for("react.strict_mode"),Rg=Symbol.for("react.profiler"),Ig=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),Fg=Symbol.for("react.forward_ref"),zg=Symbol.for("react.suspense"),kg=Symbol.for("react.memo"),Ug=Symbol.for("react.lazy"),Sf=Symbol.iterator;function Og(t){return t===null||typeof t!="object"?null:(t=Sf&&t[Sf]||t["@@iterator"],typeof t=="function"?t:null)}var Vh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gh=Object.assign,Wh={};function ds(t,e,n){this.props=t,this.context=e,this.refs=Wh,this.updater=n||Vh}ds.prototype.isReactComponent={};ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hh(){}Hh.prototype=ds.prototype;function vc(t,e,n){this.props=t,this.context=e,this.refs=Wh,this.updater=n||Vh}var xc=vc.prototype=new Hh;xc.constructor=vc;Gh(xc,ds.prototype);xc.isPureReactComponent=!0;var Mf=Array.isArray,Xh=Object.prototype.hasOwnProperty,yc={current:null},jh={key:!0,ref:!0,__self:!0,__source:!0};function qh(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xh.call(e,i)&&!jh.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:uo,type:t,key:s,ref:o,props:r,_owner:yc.current}}function Bg(t,e){return{$$typeof:uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sc(t){return typeof t=="object"&&t!==null&&t.$$typeof===uo}function Vg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wf=/\/+/g;function hl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vg(""+t.key):e.toString(36)}function ra(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case uo:case Lg:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+hl(o,0):i,Mf(r)?(n="",t!=null&&(n=t.replace(wf,"$&/")+"/"),ra(r,e,n,"",function(u){return u})):r!=null&&(Sc(r)&&(r=Bg(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Mf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+hl(s,a);o+=ra(s,e,n,l,r)}else if(l=Og(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+hl(s,a++),o+=ra(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function yo(t,e,n){if(t==null)return t;var i=[],r=0;return ra(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Gg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},sa={transition:null},Wg={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:sa,ReactCurrentOwner:yc};Ae.Children={map:yo,forEach:function(t,e,n){yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yo(t,function(){e++}),e},toArray:function(t){return yo(t,function(e){return e})||[]},only:function(t){if(!Sc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ae.Component=ds;Ae.Fragment=Pg;Ae.Profiler=Rg;Ae.PureComponent=vc;Ae.StrictMode=Dg;Ae.Suspense=zg;Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wg;Ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gh({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xh.call(e,l)&&!jh.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:uo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ae.createContext=function(t){return t={$$typeof:Ng,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ig,_context:t},t.Consumer=t};Ae.createElement=qh;Ae.createFactory=function(t){var e=qh.bind(null,t);return e.type=t,e};Ae.createRef=function(){return{current:null}};Ae.forwardRef=function(t){return{$$typeof:Fg,render:t}};Ae.isValidElement=Sc;Ae.lazy=function(t){return{$$typeof:Ug,_payload:{_status:-1,_result:t},_init:Gg}};Ae.memo=function(t,e){return{$$typeof:kg,type:t,compare:e===void 0?null:e}};Ae.startTransition=function(t){var e=sa.transition;sa.transition={};try{t()}finally{sa.transition=e}};Ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ae.useCallback=function(t,e){return Dt.current.useCallback(t,e)};Ae.useContext=function(t){return Dt.current.useContext(t)};Ae.useDebugValue=function(){};Ae.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};Ae.useEffect=function(t,e){return Dt.current.useEffect(t,e)};Ae.useId=function(){return Dt.current.useId()};Ae.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};Ae.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};Ae.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};Ae.useMemo=function(t,e){return Dt.current.useMemo(t,e)};Ae.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};Ae.useRef=function(t){return Dt.current.useRef(t)};Ae.useState=function(t){return Dt.current.useState(t)};Ae.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};Ae.useTransition=function(){return Dt.current.useTransition()};Ae.version="18.2.0";(function(t){t.exports=Ae})(Jr);const Hg=Ag(Jr.exports);var _u={},$h={exports:{}},Zt={},Yh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,L){var I=R.length;R.push(L);e:for(;0<I;){var q=I-1>>>1,j=R[q];if(0<r(j,L))R[q]=L,R[I]=j,I=q;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var L=R[0],I=R.pop();if(I!==L){R[0]=I;e:for(var q=0,j=R.length,K=j>>>1;q<K;){var oe=2*(q+1)-1,ve=R[oe],G=oe+1,Le=R[G];if(0>r(ve,I))G<j&&0>r(Le,ve)?(R[q]=Le,R[G]=I,q=G):(R[q]=ve,R[oe]=I,q=oe);else if(G<j&&0>r(Le,I))R[q]=Le,R[G]=I,q=G;else break e}}return L}function r(R,L){var I=R.sortIndex-L.sortIndex;return I!==0?I:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,x=!1,m=!1,h=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var L=n(u);L!==null;){if(L.callback===null)i(u);else if(L.startTime<=R)i(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(u)}}function S(R){if(m=!1,v(R),!x)if(n(l)!==null)x=!0,Z(M);else{var L=n(u);L!==null&&Q(S,L.startTime-R)}}function M(R,L){x=!1,m&&(m=!1,p(y),y=-1),g=!0;var I=f;try{for(v(L),d=n(l);d!==null&&(!(d.expirationTime>L)||R&&!$());){var q=d.callback;if(typeof q=="function"){d.callback=null,f=d.priorityLevel;var j=q(d.expirationTime<=L);L=t.unstable_now(),typeof j=="function"?d.callback=j:d===n(l)&&i(l),v(L)}else i(l);d=n(l)}if(d!==null)var K=!0;else{var oe=n(u);oe!==null&&Q(S,oe.startTime-L),K=!1}return K}finally{d=null,f=I,g=!1}}var C=!1,A=null,y=-1,b=5,D=-1;function $(){return!(t.unstable_now()-D<b)}function ie(){if(A!==null){var R=t.unstable_now();D=R;var L=!0;try{L=A(!0,R)}finally{L?U():(C=!1,A=null)}}else C=!1}var U;if(typeof _=="function")U=function(){_(ie)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,X=F.port2;F.port1.onmessage=ie,U=function(){X.postMessage(null)}}else U=function(){h(ie,0)};function Z(R){A=R,C||(C=!0,U())}function Q(R,L){y=h(function(){R(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){x||g||(x=!0,Z(M))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var I=f;f=L;try{return R()}finally{f=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var I=f;f=R;try{return L()}finally{f=I}},t.unstable_scheduleCallback=function(R,L,I){var q=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?q+I:q):I=q,R){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=I+j,R={id:c++,callback:L,priorityLevel:R,startTime:I,expirationTime:j,sortIndex:-1},I>q?(R.sortIndex=I,e(u,R),n(l)===null&&R===n(u)&&(m?(p(y),y=-1):m=!0,Q(S,I-q))):(R.sortIndex=j,e(l,R),x||g||(x=!0,Z(M))),R},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(R){var L=f;return function(){var I=f;f=L;try{return R.apply(this,arguments)}finally{f=I}}}})(Zh);(function(t){t.exports=Zh})(Yh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kh=Jr.exports,Yt=Yh.exports;function Y(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qh=new Set,Xs={};function fr(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(Xs[t]=e,t=0;t<e.length;t++)Qh.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,Xg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ef={},Tf={};function jg(t){return vu.call(Tf,t)?!0:vu.call(Ef,t)?!1:Xg.test(t)?Tf[t]=!0:(Ef[t]=!0,!1)}function qg(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $g(t,e,n,i){if(e===null||typeof e>"u"||qg(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xt[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xt[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xt[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xt[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xt[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xt[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xt[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xt[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xt[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mc=/[\-:]([a-z])/g;function wc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mc,wc);xt[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mc,wc);xt[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mc,wc);xt[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});xt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ec(t,e,n,i){var r=xt.hasOwnProperty(e)?xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($g(e,n,r,i)&&(n=null),i||r===null?jg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ii=Kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),Rr=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),Tc=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),Jh=Symbol.for("react.provider"),ep=Symbol.for("react.context"),Cc=Symbol.for("react.forward_ref"),yu=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),bc=Symbol.for("react.memo"),hi=Symbol.for("react.lazy"),tp=Symbol.for("react.offscreen"),Cf=Symbol.iterator;function vs(t){return t===null||typeof t!="object"?null:(t=Cf&&t[Cf]||t["@@iterator"],typeof t=="function"?t:null)}var Ye=Object.assign,pl;function Ps(t){if(pl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pl=e&&e[1]||""}return`
`+pl+t}var ml=!1;function gl(t,e){if(!t||ml)return"";ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ps(t):""}function Yg(t){switch(t.tag){case 5:return Ps(t.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return t=gl(t.type,!1),t;case 11:return t=gl(t.type.render,!1),t;case 1:return t=gl(t.type,!0),t;default:return""}}function Mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ir:return"Fragment";case Rr:return"Portal";case xu:return"Profiler";case Tc:return"StrictMode";case yu:return"Suspense";case Su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ep:return(t.displayName||"Context")+".Consumer";case Jh:return(t._context.displayName||"Context")+".Provider";case Cc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bc:return e=t.displayName||null,e!==null?e:Mu(t.type)||"Memo";case hi:e=t._payload,t=t._init;try{return Mu(t(e))}catch{}}return null}function Zg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mu(e);case 8:return e===Tc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Li(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function np(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kg(t){var e=np(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mo(t){t._valueTracker||(t._valueTracker=Kg(t))}function ip(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=np(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wu(t,e){var n=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function bf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Li(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rp(t,e){e=e.checked,e!=null&&Ec(t,"checked",e,!1)}function Eu(t,e){rp(t,e);var n=Li(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tu(t,e.type,Li(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Af(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tu(t,e,n){(e!=="number"||va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ds=Array.isArray;function Xr(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Li(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Y(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Y(92));if(Ds(n)){if(1<n.length)throw Error(Y(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Li(n)}}function sp(t,e){var n=Li(e.value),i=Li(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Pf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function op(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?op(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wo,ap=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qg=["Webkit","ms","Moz","O"];Object.keys(zs).forEach(function(t){Qg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zs[e]=zs[t]})});function lp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zs.hasOwnProperty(t)&&zs[t]?(""+e).trim():e+"px"}function up(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=lp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Jg=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(t,e){if(e){if(Jg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Y(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Y(62))}}function Lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pu=null;function Ac(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Du=null,jr=null,qr=null;function Df(t){if(t=ho(t)){if(typeof Du!="function")throw Error(Y(280));var e=t.stateNode;e&&(e=$a(e),Du(t.stateNode,t.type,e))}}function cp(t){jr?qr?qr.push(t):qr=[t]:jr=t}function fp(){if(jr){var t=jr,e=qr;if(qr=jr=null,Df(t),e)for(t=0;t<e.length;t++)Df(e[t])}}function dp(t,e){return t(e)}function hp(){}var _l=!1;function pp(t,e,n){if(_l)return t(e,n);_l=!0;try{return dp(t,e,n)}finally{_l=!1,(jr!==null||qr!==null)&&(hp(),fp())}}function qs(t,e){var n=t.stateNode;if(n===null)return null;var i=$a(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Y(231,e,typeof n));return n}var Ru=!1;if(Jn)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{Ru=!1}function e0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ks=!1,xa=null,ya=!1,Iu=null,t0={onError:function(t){ks=!0,xa=t}};function n0(t,e,n,i,r,s,o,a,l){ks=!1,xa=null,e0.apply(t0,arguments)}function i0(t,e,n,i,r,s,o,a,l){if(n0.apply(this,arguments),ks){if(ks){var u=xa;ks=!1,xa=null}else throw Error(Y(198));ya||(ya=!0,Iu=u)}}function dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rf(t){if(dr(t)!==t)throw Error(Y(188))}function r0(t){var e=t.alternate;if(!e){if(e=dr(t),e===null)throw Error(Y(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rf(r),t;if(s===i)return Rf(r),e;s=s.sibling}throw Error(Y(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?t:e}function gp(t){return t=r0(t),t!==null?_p(t):null}function _p(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_p(t);if(e!==null)return e;t=t.sibling}return null}var vp=Yt.unstable_scheduleCallback,If=Yt.unstable_cancelCallback,s0=Yt.unstable_shouldYield,o0=Yt.unstable_requestPaint,Je=Yt.unstable_now,a0=Yt.unstable_getCurrentPriorityLevel,Lc=Yt.unstable_ImmediatePriority,xp=Yt.unstable_UserBlockingPriority,Sa=Yt.unstable_NormalPriority,l0=Yt.unstable_LowPriority,yp=Yt.unstable_IdlePriority,Ha=null,Rn=null;function u0(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(Ha,t,void 0,(t.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:d0,c0=Math.log,f0=Math.LN2;function d0(t){return t>>>=0,t===0?32:31-(c0(t)/f0|0)|0}var Eo=64,To=4194304;function Rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ma(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Rs(a):(s&=o,s!==0&&(i=Rs(s)))}else o=n&~r,o!==0?i=Rs(o):s!==0&&(i=Rs(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Mn(e),r=1<<n,i|=t[n],e&=~r;return i}function h0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function p0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Mn(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=h0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sp(){var t=Eo;return Eo<<=1,(Eo&4194240)===0&&(Eo=64),t}function vl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mn(e),t[e]=n}function m0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Mn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Pc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Mn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ze=0;function Mp(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var wp,Dc,Ep,Tp,Cp,Fu=!1,Co=[],yi=null,Si=null,Mi=null,$s=new Map,Ys=new Map,mi=[],g0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,e){switch(t){case"focusin":case"focusout":yi=null;break;case"dragenter":case"dragleave":Si=null;break;case"mouseover":case"mouseout":Mi=null;break;case"pointerover":case"pointerout":$s.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function ys(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ho(e),e!==null&&Dc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _0(t,e,n,i,r){switch(e){case"focusin":return yi=ys(yi,t,e,n,i,r),!0;case"dragenter":return Si=ys(Si,t,e,n,i,r),!0;case"mouseover":return Mi=ys(Mi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $s.set(s,ys($s.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ys.set(s,ys(Ys.get(s)||null,t,e,n,i,r)),!0}return!1}function bp(t){var e=ji(t.target);if(e!==null){var n=dr(e);if(n!==null){if(e=n.tag,e===13){if(e=mp(n),e!==null){t.blockedOn=e,Cp(t.priority,function(){Ep(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Pu=i,n.target.dispatchEvent(i),Pu=null}else return e=ho(n),e!==null&&Dc(e),t.blockedOn=n,!1;e.shift()}return!0}function Ff(t,e,n){oa(t)&&n.delete(e)}function v0(){Fu=!1,yi!==null&&oa(yi)&&(yi=null),Si!==null&&oa(Si)&&(Si=null),Mi!==null&&oa(Mi)&&(Mi=null),$s.forEach(Ff),Ys.forEach(Ff)}function Ss(t,e){t.blockedOn===e&&(t.blockedOn=null,Fu||(Fu=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,v0)))}function Zs(t){function e(r){return Ss(r,t)}if(0<Co.length){Ss(Co[0],t);for(var n=1;n<Co.length;n++){var i=Co[n];i.blockedOn===t&&(i.blockedOn=null)}}for(yi!==null&&Ss(yi,t),Si!==null&&Ss(Si,t),Mi!==null&&Ss(Mi,t),$s.forEach(e),Ys.forEach(e),n=0;n<mi.length;n++)i=mi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<mi.length&&(n=mi[0],n.blockedOn===null);)bp(n),n.blockedOn===null&&mi.shift()}var $r=ii.ReactCurrentBatchConfig,wa=!0;function x0(t,e,n,i){var r=ze,s=$r.transition;$r.transition=null;try{ze=1,Rc(t,e,n,i)}finally{ze=r,$r.transition=s}}function y0(t,e,n,i){var r=ze,s=$r.transition;$r.transition=null;try{ze=4,Rc(t,e,n,i)}finally{ze=r,$r.transition=s}}function Rc(t,e,n,i){if(wa){var r=zu(t,e,n,i);if(r===null)Al(t,e,i,Ea,n),Nf(t,i);else if(_0(r,t,e,n,i))i.stopPropagation();else if(Nf(t,i),e&4&&-1<g0.indexOf(t)){for(;r!==null;){var s=ho(r);if(s!==null&&wp(s),s=zu(t,e,n,i),s===null&&Al(t,e,i,Ea,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Al(t,e,i,null,n)}}var Ea=null;function zu(t,e,n,i){if(Ea=null,t=Ac(i),t=ji(t),t!==null)if(e=dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ea=t,null}function Ap(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a0()){case Lc:return 1;case xp:return 4;case Sa:case l0:return 16;case yp:return 536870912;default:return 16}default:return 16}}var _i=null,Ic=null,aa=null;function Lp(){if(aa)return aa;var t,e=Ic,n=e.length,i,r="value"in _i?_i.value:_i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return aa=r.slice(t,1<i?1-i:void 0)}function la(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bo(){return!0}function zf(){return!1}function Kt(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bo:zf,this.isPropagationStopped=zf,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),e}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=Kt(hs),fo=Ye({},hs,{view:0,detail:0}),S0=Kt(fo),xl,yl,Ms,Xa=Ye({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ms&&(Ms&&t.type==="mousemove"?(xl=t.screenX-Ms.screenX,yl=t.screenY-Ms.screenY):yl=xl=0,Ms=t),xl)},movementY:function(t){return"movementY"in t?t.movementY:yl}}),kf=Kt(Xa),M0=Ye({},Xa,{dataTransfer:0}),w0=Kt(M0),E0=Ye({},fo,{relatedTarget:0}),Sl=Kt(E0),T0=Ye({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=Kt(T0),b0=Ye({},hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A0=Kt(b0),L0=Ye({},hs,{data:0}),Uf=Kt(L0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=R0[t])?!!e[t]:!1}function Fc(){return I0}var N0=Ye({},fo,{key:function(t){if(t.key){var e=P0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?D0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),F0=Kt(N0),z0=Ye({},Xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=Kt(z0),k0=Ye({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),U0=Kt(k0),O0=Ye({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=Kt(O0),V0=Ye({},Xa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=Kt(V0),W0=[9,13,27,32],zc=Jn&&"CompositionEvent"in window,Us=null;Jn&&"documentMode"in document&&(Us=document.documentMode);var H0=Jn&&"TextEvent"in window&&!Us,Pp=Jn&&(!zc||Us&&8<Us&&11>=Us),Bf=String.fromCharCode(32),Vf=!1;function Dp(t,e){switch(t){case"keyup":return W0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function X0(t,e){switch(t){case"compositionend":return Rp(e);case"keypress":return e.which!==32?null:(Vf=!0,Bf);case"textInput":return t=e.data,t===Bf&&Vf?null:t;default:return null}}function j0(t,e){if(Nr)return t==="compositionend"||!zc&&Dp(t,e)?(t=Lp(),aa=Ic=_i=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pp&&e.locale!=="ko"?null:e.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!q0[t.type]:e==="textarea"}function Ip(t,e,n,i){cp(i),e=Ta(e,"onChange"),0<e.length&&(n=new Nc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Os=null,Ks=null;function $0(t){Hp(t,0)}function ja(t){var e=kr(t);if(ip(e))return t}function Y0(t,e){if(t==="change")return e}var Np=!1;if(Jn){var Ml;if(Jn){var wl="oninput"in document;if(!wl){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),wl=typeof Wf.oninput=="function"}Ml=wl}else Ml=!1;Np=Ml&&(!document.documentMode||9<document.documentMode)}function Hf(){Os&&(Os.detachEvent("onpropertychange",Fp),Ks=Os=null)}function Fp(t){if(t.propertyName==="value"&&ja(Ks)){var e=[];Ip(e,Ks,t,Ac(t)),pp($0,e)}}function Z0(t,e,n){t==="focusin"?(Hf(),Os=e,Ks=n,Os.attachEvent("onpropertychange",Fp)):t==="focusout"&&Hf()}function K0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ja(Ks)}function Q0(t,e){if(t==="click")return ja(e)}function J0(t,e){if(t==="input"||t==="change")return ja(e)}function e_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:e_;function Qs(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vu.call(e,r)||!En(t[r],e[r]))return!1}return!0}function Xf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jf(t,e){var n=Xf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xf(n)}}function zp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kp(){for(var t=window,e=va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=va(t.document)}return e}function kc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function t_(t){var e=kp(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zp(n.ownerDocument.documentElement,n)){if(i!==null&&kc(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=jf(n,s);var o=jf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var n_=Jn&&"documentMode"in document&&11>=document.documentMode,Fr=null,ku=null,Bs=null,Uu=!1;function qf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uu||Fr==null||Fr!==va(i)||(i=Fr,"selectionStart"in i&&kc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bs&&Qs(Bs,i)||(Bs=i,i=Ta(ku,"onSelect"),0<i.length&&(e=new Nc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fr)))}function Ao(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zr={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},El={},Up={};Jn&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function qa(t){if(El[t])return El[t];if(!zr[t])return t;var e=zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Up)return El[t]=e[n];return t}var Op=qa("animationend"),Bp=qa("animationiteration"),Vp=qa("animationstart"),Gp=qa("transitionend"),Wp=new Map,$f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Di(t,e){Wp.set(t,e),fr(e,[t])}for(var Tl=0;Tl<$f.length;Tl++){var Cl=$f[Tl],i_=Cl.toLowerCase(),r_=Cl[0].toUpperCase()+Cl.slice(1);Di(i_,"on"+r_)}Di(Op,"onAnimationEnd");Di(Bp,"onAnimationIteration");Di(Vp,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(Gp,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function Yf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,i0(i,e,void 0,t),t.currentTarget=null}function Hp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Yf(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Yf(r,a,u),s=l}}}if(ya)throw t=Iu,ya=!1,Iu=null,t}function Ve(t,e){var n=e[Wu];n===void 0&&(n=e[Wu]=new Set);var i=t+"__bubble";n.has(i)||(Xp(e,t,2,!1),n.add(i))}function bl(t,e,n){var i=0;e&&(i|=4),Xp(n,t,i,e)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Js(t){if(!t[Lo]){t[Lo]=!0,Qh.forEach(function(n){n!=="selectionchange"&&(s_.has(n)||bl(n,!1,t),bl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lo]||(e[Lo]=!0,bl("selectionchange",!1,e))}}function Xp(t,e,n,i){switch(Ap(e)){case 1:var r=x0;break;case 4:r=y0;break;default:r=Rc}n=r.bind(null,e,n,t),r=void 0,!Ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Al(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ji(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}pp(function(){var u=s,c=Ac(n),d=[];e:{var f=Wp.get(t);if(f!==void 0){var g=Nc,x=t;switch(t){case"keypress":if(la(n)===0)break e;case"keydown":case"keyup":g=F0;break;case"focusin":x="focus",g=Sl;break;case"focusout":x="blur",g=Sl;break;case"beforeblur":case"afterblur":g=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=U0;break;case Op:case Bp:case Vp:g=C0;break;case Gp:g=B0;break;case"scroll":g=S0;break;case"wheel":g=G0;break;case"copy":case"cut":case"paste":g=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Of}var m=(e&4)!==0,h=!m&&t==="scroll",p=m?f!==null?f+"Capture":null:f;m=[];for(var _=u,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,p!==null&&(S=qs(_,p),S!=null&&m.push(eo(_,S,v)))),h)break;_=_.return}0<m.length&&(f=new g(f,x,null,n,c),d.push({event:f,listeners:m}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Pu&&(x=n.relatedTarget||n.fromElement)&&(ji(x)||x[ei]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?ji(x):null,x!==null&&(h=dr(x),x!==h||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(m=kf,S="onMouseLeave",p="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(m=Of,S="onPointerLeave",p="onPointerEnter",_="pointer"),h=g==null?f:kr(g),v=x==null?f:kr(x),f=new m(S,_+"leave",g,n,c),f.target=h,f.relatedTarget=v,S=null,ji(c)===u&&(m=new m(p,_+"enter",x,n,c),m.target=v,m.relatedTarget=h,S=m),h=S,g&&x)t:{for(m=g,p=x,_=0,v=m;v;v=gr(v))_++;for(v=0,S=p;S;S=gr(S))v++;for(;0<_-v;)m=gr(m),_--;for(;0<v-_;)p=gr(p),v--;for(;_--;){if(m===p||p!==null&&m===p.alternate)break t;m=gr(m),p=gr(p)}m=null}else m=null;g!==null&&Zf(d,f,g,m,!1),x!==null&&h!==null&&Zf(d,h,x,m,!0)}}e:{if(f=u?kr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var M=Y0;else if(Gf(f))if(Np)M=J0;else{M=K0;var C=Z0}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=Q0);if(M&&(M=M(t,u))){Ip(d,M,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Tu(f,"number",f.value)}switch(C=u?kr(u):window,t){case"focusin":(Gf(C)||C.contentEditable==="true")&&(Fr=C,ku=u,Bs=null);break;case"focusout":Bs=ku=Fr=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,qf(d,n,c);break;case"selectionchange":if(n_)break;case"keydown":case"keyup":qf(d,n,c)}var A;if(zc)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Nr?Dp(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Pp&&n.locale!=="ko"&&(Nr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Nr&&(A=Lp()):(_i=c,Ic="value"in _i?_i.value:_i.textContent,Nr=!0)),C=Ta(u,y),0<C.length&&(y=new Uf(y,t,null,n,c),d.push({event:y,listeners:C}),A?y.data=A:(A=Rp(n),A!==null&&(y.data=A)))),(A=H0?X0(t,n):j0(t,n))&&(u=Ta(u,"onBeforeInput"),0<u.length&&(c=new Uf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}Hp(d,e)})}function eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ta(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=qs(t,n),s!=null&&i.unshift(eo(t,s,r)),s=qs(t,e),s!=null&&i.push(eo(t,s,r))),t=t.return}return i}function gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=qs(n,s),l!=null&&o.unshift(eo(n,l,a))):r||(l=qs(n,s),l!=null&&o.push(eo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var o_=/\r\n?/g,a_=/\u0000|\uFFFD/g;function Kf(t){return(typeof t=="string"?t:""+t).replace(o_,`
`).replace(a_,"")}function Po(t,e,n){if(e=Kf(e),Kf(t)!==e&&n)throw Error(Y(425))}function Ca(){}var Ou=null,Bu=null;function Vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gu=typeof setTimeout=="function"?setTimeout:void 0,l_=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,u_=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(t){return Qf.resolve(null).then(t).catch(c_)}:Gu;function c_(t){setTimeout(function(){throw t})}function Ll(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Zs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Zs(e)}function wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),Dn="__reactFiber$"+ps,to="__reactProps$"+ps,ei="__reactContainer$"+ps,Wu="__reactEvents$"+ps,f_="__reactListeners$"+ps,d_="__reactHandles$"+ps;function ji(t){var e=t[Dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ei]||n[Dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jf(t);t!==null;){if(n=t[Dn])return n;t=Jf(t)}return e}t=n,n=t.parentNode}return null}function ho(t){return t=t[Dn]||t[ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Y(33))}function $a(t){return t[to]||null}var Hu=[],Ur=-1;function Ri(t){return{current:t}}function Ge(t){0>Ur||(t.current=Hu[Ur],Hu[Ur]=null,Ur--)}function Oe(t,e){Ur++,Hu[Ur]=t.current,t.current=e}var Pi={},Tt=Ri(Pi),kt=Ri(!1),nr=Pi;function ts(t,e){var n=t.type.contextTypes;if(!n)return Pi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Ut(t){return t=t.childContextTypes,t!=null}function ba(){Ge(kt),Ge(Tt)}function ed(t,e,n){if(Tt.current!==Pi)throw Error(Y(168));Oe(Tt,e),Oe(kt,n)}function jp(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Y(108,Zg(t)||"Unknown",r));return Ye({},n,i)}function Aa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pi,nr=Tt.current,Oe(Tt,t),Oe(kt,kt.current),!0}function td(t,e,n){var i=t.stateNode;if(!i)throw Error(Y(169));n?(t=jp(t,e,nr),i.__reactInternalMemoizedMergedChildContext=t,Ge(kt),Ge(Tt),Oe(Tt,t)):Ge(kt),Oe(kt,n)}var jn=null,Ya=!1,Pl=!1;function qp(t){jn===null?jn=[t]:jn.push(t)}function h_(t){Ya=!0,qp(t)}function Ii(){if(!Pl&&jn!==null){Pl=!0;var t=0,e=ze;try{var n=jn;for(ze=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}jn=null,Ya=!1}catch(r){throw jn!==null&&(jn=jn.slice(t+1)),vp(Lc,Ii),r}finally{ze=e,Pl=!1}}return null}var Or=[],Br=0,La=null,Pa=0,tn=[],nn=0,ir=null,$n=1,Yn="";function Vi(t,e){Or[Br++]=Pa,Or[Br++]=La,La=t,Pa=e}function $p(t,e,n){tn[nn++]=$n,tn[nn++]=Yn,tn[nn++]=ir,ir=t;var i=$n;t=Yn;var r=32-Mn(i)-1;i&=~(1<<r),n+=1;var s=32-Mn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,$n=1<<32-Mn(e)+r|n<<r|i,Yn=s+t}else $n=1<<s|n<<r|i,Yn=t}function Uc(t){t.return!==null&&(Vi(t,1),$p(t,1,0))}function Oc(t){for(;t===La;)La=Or[--Br],Or[Br]=null,Pa=Or[--Br],Or[Br]=null;for(;t===ir;)ir=tn[--nn],tn[nn]=null,Yn=tn[--nn],tn[nn]=null,$n=tn[--nn],tn[nn]=null}var qt=null,jt=null,Xe=!1,xn=null;function Yp(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qt=t,jt=wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qt=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ir!==null?{id:$n,overflow:Yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qt=t,jt=null,!0):!1;default:return!1}}function Xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ju(t){if(Xe){var e=jt;if(e){var n=e;if(!nd(t,e)){if(Xu(t))throw Error(Y(418));e=wi(n.nextSibling);var i=qt;e&&nd(t,e)?Yp(i,n):(t.flags=t.flags&-4097|2,Xe=!1,qt=t)}}else{if(Xu(t))throw Error(Y(418));t.flags=t.flags&-4097|2,Xe=!1,qt=t}}}function id(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qt=t}function Do(t){if(t!==qt)return!1;if(!Xe)return id(t),Xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vu(t.type,t.memoizedProps)),e&&(e=jt)){if(Xu(t))throw Zp(),Error(Y(418));for(;e;)Yp(t,e),e=wi(e.nextSibling)}if(id(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Y(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=qt?wi(t.stateNode.nextSibling):null;return!0}function Zp(){for(var t=jt;t;)t=wi(t.nextSibling)}function ns(){jt=qt=null,Xe=!1}function Bc(t){xn===null?xn=[t]:xn.push(t)}var p_=ii.ReactCurrentBatchConfig;function _n(t,e){if(t&&t.defaultProps){e=Ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Da=Ri(null),Ra=null,Vr=null,Vc=null;function Gc(){Vc=Vr=Ra=null}function Wc(t){var e=Da.current;Ge(Da),t._currentValue=e}function qu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Yr(t,e){Ra=t,Vc=Vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(zt=!0),t.firstContext=null)}function cn(t){var e=t._currentValue;if(Vc!==t)if(t={context:t,memoizedValue:e,next:null},Vr===null){if(Ra===null)throw Error(Y(308));Vr=t,Ra.dependencies={lanes:0,firstContext:t}}else Vr=Vr.next=t;return e}var qi=null;function Hc(t){qi===null?qi=[t]:qi.push(t)}function Kp(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Hc(e)):(n.next=r.next,r.next=n),e.interleaved=n,ti(t,i)}function ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pi=!1;function Xc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ei(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(De&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ti(t,n)}return r=i.interleaved,r===null?(e.next=e,Hc(i)):(e.next=r.next,r.next=e),i.interleaved=e,ti(t,n)}function ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pc(t,n)}}function rd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ia(t,e,n,i){var r=t.updateQueue;pi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,m=a;switch(f=e,g=n,m.tag){case 1:if(x=m.payload,typeof x=="function"){d=x.call(g,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=m.payload,f=typeof x=="function"?x.call(g,d,f):x,f==null)break e;d=Ye({},d,f);break e;case 2:pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);sr|=o,t.lanes=o,t.memoizedState=d}}function sd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Y(191,r));r.call(i)}}}var Jp=new Kh.Component().refs;function $u(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Za={isMounted:function(t){return(t=t._reactInternals)?dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Pt(),r=Ci(t),s=Kn(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ei(t,s,r),e!==null&&(wn(e,t,r,i),ua(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Pt(),r=Ci(t),s=Kn(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ei(t,s,r),e!==null&&(wn(e,t,r,i),ua(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),i=Ci(t),r=Kn(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ei(t,r,i),e!==null&&(wn(e,t,i,n),ua(e,t,i))}};function od(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qs(n,i)||!Qs(r,s):!0}function em(t,e,n){var i=!1,r=Pi,s=e.contextType;return typeof s=="object"&&s!==null?s=cn(s):(r=Ut(e)?nr:Tt.current,i=e.contextTypes,s=(i=i!=null)?ts(t,r):Pi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Za,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ad(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Za.enqueueReplaceState(e,e.state,null)}function Yu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Jp,Xc(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=cn(s):(s=Ut(e)?nr:Tt.current,r.context=ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($u(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Za.enqueueReplaceState(r,r.state,null),Ia(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var i=n.stateNode}if(!i)throw Error(Y(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Jp&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,t))}return t}function Ro(t,e){throw t=Object.prototype.toString.call(e),Error(Y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ld(t){var e=t._init;return e(t._payload)}function tm(t){function e(p,_){if(t){var v=p.deletions;v===null?(p.deletions=[_],p.flags|=16):v.push(_)}}function n(p,_){if(!t)return null;for(;_!==null;)e(p,_),_=_.sibling;return null}function i(p,_){for(p=new Map;_!==null;)_.key!==null?p.set(_.key,_):p.set(_.index,_),_=_.sibling;return p}function r(p,_){return p=bi(p,_),p.index=0,p.sibling=null,p}function s(p,_,v){return p.index=v,t?(v=p.alternate,v!==null?(v=v.index,v<_?(p.flags|=2,_):v):(p.flags|=2,_)):(p.flags|=1048576,_)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,_,v,S){return _===null||_.tag!==6?(_=kl(v,p.mode,S),_.return=p,_):(_=r(_,v),_.return=p,_)}function l(p,_,v,S){var M=v.type;return M===Ir?c(p,_,v.props.children,S,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===hi&&ld(M)===_.type)?(S=r(_,v.props),S.ref=ws(p,_,v),S.return=p,S):(S=ma(v.type,v.key,v.props,null,p.mode,S),S.ref=ws(p,_,v),S.return=p,S)}function u(p,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Ul(v,p.mode,S),_.return=p,_):(_=r(_,v.children||[]),_.return=p,_)}function c(p,_,v,S,M){return _===null||_.tag!==7?(_=Ji(v,p.mode,S,M),_.return=p,_):(_=r(_,v),_.return=p,_)}function d(p,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=kl(""+_,p.mode,v),_.return=p,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case So:return v=ma(_.type,_.key,_.props,null,p.mode,v),v.ref=ws(p,null,_),v.return=p,v;case Rr:return _=Ul(_,p.mode,v),_.return=p,_;case hi:var S=_._init;return d(p,S(_._payload),v)}if(Ds(_)||vs(_))return _=Ji(_,p.mode,v,null),_.return=p,_;Ro(p,_)}return null}function f(p,_,v,S){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(p,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case So:return v.key===M?l(p,_,v,S):null;case Rr:return v.key===M?u(p,_,v,S):null;case hi:return M=v._init,f(p,_,M(v._payload),S)}if(Ds(v)||vs(v))return M!==null?null:c(p,_,v,S,null);Ro(p,v)}return null}function g(p,_,v,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(v)||null,a(_,p,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case So:return p=p.get(S.key===null?v:S.key)||null,l(_,p,S,M);case Rr:return p=p.get(S.key===null?v:S.key)||null,u(_,p,S,M);case hi:var C=S._init;return g(p,_,v,C(S._payload),M)}if(Ds(S)||vs(S))return p=p.get(v)||null,c(_,p,S,M,null);Ro(_,S)}return null}function x(p,_,v,S){for(var M=null,C=null,A=_,y=_=0,b=null;A!==null&&y<v.length;y++){A.index>y?(b=A,A=null):b=A.sibling;var D=f(p,A,v[y],S);if(D===null){A===null&&(A=b);break}t&&A&&D.alternate===null&&e(p,A),_=s(D,_,y),C===null?M=D:C.sibling=D,C=D,A=b}if(y===v.length)return n(p,A),Xe&&Vi(p,y),M;if(A===null){for(;y<v.length;y++)A=d(p,v[y],S),A!==null&&(_=s(A,_,y),C===null?M=A:C.sibling=A,C=A);return Xe&&Vi(p,y),M}for(A=i(p,A);y<v.length;y++)b=g(A,p,y,v[y],S),b!==null&&(t&&b.alternate!==null&&A.delete(b.key===null?y:b.key),_=s(b,_,y),C===null?M=b:C.sibling=b,C=b);return t&&A.forEach(function($){return e(p,$)}),Xe&&Vi(p,y),M}function m(p,_,v,S){var M=vs(v);if(typeof M!="function")throw Error(Y(150));if(v=M.call(v),v==null)throw Error(Y(151));for(var C=M=null,A=_,y=_=0,b=null,D=v.next();A!==null&&!D.done;y++,D=v.next()){A.index>y?(b=A,A=null):b=A.sibling;var $=f(p,A,D.value,S);if($===null){A===null&&(A=b);break}t&&A&&$.alternate===null&&e(p,A),_=s($,_,y),C===null?M=$:C.sibling=$,C=$,A=b}if(D.done)return n(p,A),Xe&&Vi(p,y),M;if(A===null){for(;!D.done;y++,D=v.next())D=d(p,D.value,S),D!==null&&(_=s(D,_,y),C===null?M=D:C.sibling=D,C=D);return Xe&&Vi(p,y),M}for(A=i(p,A);!D.done;y++,D=v.next())D=g(A,p,y,D.value,S),D!==null&&(t&&D.alternate!==null&&A.delete(D.key===null?y:D.key),_=s(D,_,y),C===null?M=D:C.sibling=D,C=D);return t&&A.forEach(function(ie){return e(p,ie)}),Xe&&Vi(p,y),M}function h(p,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Ir&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case So:e:{for(var M=v.key,C=_;C!==null;){if(C.key===M){if(M=v.type,M===Ir){if(C.tag===7){n(p,C.sibling),_=r(C,v.props.children),_.return=p,p=_;break e}}else if(C.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===hi&&ld(M)===C.type){n(p,C.sibling),_=r(C,v.props),_.ref=ws(p,C,v),_.return=p,p=_;break e}n(p,C);break}else e(p,C);C=C.sibling}v.type===Ir?(_=Ji(v.props.children,p.mode,S,v.key),_.return=p,p=_):(S=ma(v.type,v.key,v.props,null,p.mode,S),S.ref=ws(p,_,v),S.return=p,p=S)}return o(p);case Rr:e:{for(C=v.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(p,_.sibling),_=r(_,v.children||[]),_.return=p,p=_;break e}else{n(p,_);break}else e(p,_);_=_.sibling}_=Ul(v,p.mode,S),_.return=p,p=_}return o(p);case hi:return C=v._init,h(p,_,C(v._payload),S)}if(Ds(v))return x(p,_,v,S);if(vs(v))return m(p,_,v,S);Ro(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(p,_.sibling),_=r(_,v),_.return=p,p=_):(n(p,_),_=kl(v,p.mode,S),_.return=p,p=_),o(p)):n(p,_)}return h}var is=tm(!0),nm=tm(!1),po={},In=Ri(po),no=Ri(po),io=Ri(po);function $i(t){if(t===po)throw Error(Y(174));return t}function jc(t,e){switch(Oe(io,e),Oe(no,t),Oe(In,po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bu(e,t)}Ge(In),Oe(In,e)}function rs(){Ge(In),Ge(no),Ge(io)}function im(t){$i(io.current);var e=$i(In.current),n=bu(e,t.type);e!==n&&(Oe(no,t),Oe(In,n))}function qc(t){no.current===t&&(Ge(In),Ge(no))}var je=Ri(0);function Na(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dl=[];function $c(){for(var t=0;t<Dl.length;t++)Dl[t]._workInProgressVersionPrimary=null;Dl.length=0}var ca=ii.ReactCurrentDispatcher,Rl=ii.ReactCurrentBatchConfig,rr=0,$e=null,rt=null,ft=null,Fa=!1,Vs=!1,ro=0,m_=0;function St(){throw Error(Y(321))}function Yc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function Zc(t,e,n,i,r,s){if(rr=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ca.current=t===null||t.memoizedState===null?x_:y_,t=n(i,r),Vs){s=0;do{if(Vs=!1,ro=0,25<=s)throw Error(Y(301));s+=1,ft=rt=null,e.updateQueue=null,ca.current=S_,t=n(i,r)}while(Vs)}if(ca.current=za,e=rt!==null&&rt.next!==null,rr=0,ft=rt=$e=null,Fa=!1,e)throw Error(Y(300));return t}function Kc(){var t=ro!==0;return ro=0,t}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?$e.memoizedState=ft=t:ft=ft.next=t,ft}function fn(){if(rt===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=ft===null?$e.memoizedState:ft.next;if(e!==null)ft=e,rt=t;else{if(t===null)throw Error(Y(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},ft===null?$e.memoizedState=ft=t:ft=ft.next=t}return ft}function so(t,e){return typeof e=="function"?e(t):e}function Il(t){var e=fn(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var i=rt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,$e.lanes|=c,sr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,En(i,e.memoizedState)||(zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,$e.lanes|=s,sr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nl(t){var e=fn(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);En(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function rm(){}function sm(t,e){var n=$e,i=fn(),r=e(),s=!En(i.memoizedState,r);if(s&&(i.memoizedState=r,zt=!0),i=i.queue,Qc(lm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,oo(9,am.bind(null,n,i,r,e),void 0,null),dt===null)throw Error(Y(349));(rr&30)!==0||om(n,e,r)}return r}function om(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function am(t,e,n,i){e.value=n,e.getSnapshot=i,um(e)&&cm(t)}function lm(t,e,n){return n(function(){um(e)&&cm(t)})}function um(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function cm(t){var e=ti(t,1);e!==null&&wn(e,t,1,-1)}function ud(t){var e=Ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},e.queue=t,t=t.dispatch=v_.bind(null,$e,t),[e.memoizedState,t]}function oo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function fm(){return fn().memoizedState}function fa(t,e,n,i){var r=Ln();$e.flags|=t,r.memoizedState=oo(1|e,n,void 0,i===void 0?null:i)}function Ka(t,e,n,i){var r=fn();i=i===void 0?null:i;var s=void 0;if(rt!==null){var o=rt.memoizedState;if(s=o.destroy,i!==null&&Yc(i,o.deps)){r.memoizedState=oo(e,n,s,i);return}}$e.flags|=t,r.memoizedState=oo(1|e,n,s,i)}function cd(t,e){return fa(8390656,8,t,e)}function Qc(t,e){return Ka(2048,8,t,e)}function dm(t,e){return Ka(4,2,t,e)}function hm(t,e){return Ka(4,4,t,e)}function pm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mm(t,e,n){return n=n!=null?n.concat([t]):null,Ka(4,4,pm.bind(null,e,t),n)}function Jc(){}function gm(t,e){var n=fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yc(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function _m(t,e){var n=fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yc(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function vm(t,e,n){return(rr&21)===0?(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n):(En(n,e)||(n=Sp(),$e.lanes|=n,sr|=n,t.baseState=!0),e)}function g_(t,e){var n=ze;ze=n!==0&&4>n?n:4,t(!0);var i=Rl.transition;Rl.transition={};try{t(!1),e()}finally{ze=n,Rl.transition=i}}function xm(){return fn().memoizedState}function __(t,e,n){var i=Ci(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ym(t))Sm(e,n);else if(n=Kp(t,e,n,i),n!==null){var r=Pt();wn(n,t,i,r),Mm(n,e,i)}}function v_(t,e,n){var i=Ci(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ym(t))Sm(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,En(a,o)){var l=e.interleaved;l===null?(r.next=r,Hc(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Kp(t,e,r,i),n!==null&&(r=Pt(),wn(n,t,i,r),Mm(n,e,i))}}function ym(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function Sm(t,e){Vs=Fa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mm(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pc(t,n)}}var za={readContext:cn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},x_={readContext:cn,useCallback:function(t,e){return Ln().memoizedState=[t,e===void 0?null:e],t},useContext:cn,useEffect:cd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fa(4194308,4,pm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fa(4194308,4,t,e)},useInsertionEffect:function(t,e){return fa(4,2,t,e)},useMemo:function(t,e){var n=Ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ln();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=__.bind(null,$e,t),[i.memoizedState,t]},useRef:function(t){var e=Ln();return t={current:t},e.memoizedState=t},useState:ud,useDebugValue:Jc,useDeferredValue:function(t){return Ln().memoizedState=t},useTransition:function(){var t=ud(!1),e=t[0];return t=g_.bind(null,t[1]),Ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=$e,r=Ln();if(Xe){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=e(),dt===null)throw Error(Y(349));(rr&30)!==0||om(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,cd(lm.bind(null,i,s,t),[t]),i.flags|=2048,oo(9,am.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ln(),e=dt.identifierPrefix;if(Xe){var n=Yn,i=$n;n=(i&~(1<<32-Mn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=m_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},y_={readContext:cn,useCallback:gm,useContext:cn,useEffect:Qc,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:_m,useReducer:Il,useRef:fm,useState:function(){return Il(so)},useDebugValue:Jc,useDeferredValue:function(t){var e=fn();return vm(e,rt.memoizedState,t)},useTransition:function(){var t=Il(so)[0],e=fn().memoizedState;return[t,e]},useMutableSource:rm,useSyncExternalStore:sm,useId:xm,unstable_isNewReconciler:!1},S_={readContext:cn,useCallback:gm,useContext:cn,useEffect:Qc,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:_m,useReducer:Nl,useRef:fm,useState:function(){return Nl(so)},useDebugValue:Jc,useDeferredValue:function(t){var e=fn();return rt===null?e.memoizedState=t:vm(e,rt.memoizedState,t)},useTransition:function(){var t=Nl(so)[0],e=fn().memoizedState;return[t,e]},useMutableSource:rm,useSyncExternalStore:sm,useId:xm,unstable_isNewReconciler:!1};function ss(t,e){try{var n="",i=e;do n+=Yg(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Fl(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Zu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var M_=typeof WeakMap=="function"?WeakMap:Map;function wm(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ua||(Ua=!0,oc=i),Zu(t,e)},n}function Em(t,e,n){n=Kn(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Zu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zu(t,e),typeof i!="function"&&(Ti===null?Ti=new Set([this]):Ti.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new M_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=z_.bind(null,t,e,n),e.then(t,t))}function dd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function hd(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,Ei(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var w_=ii.ReactCurrentOwner,zt=!1;function Lt(t,e,n,i){e.child=t===null?nm(e,null,n,i):is(e,t.child,n,i)}function pd(t,e,n,i,r){n=n.render;var s=e.ref;return Yr(e,r),i=Zc(t,e,n,i,s,r),n=Kc(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ni(t,e,r)):(Xe&&n&&Uc(e),e.flags|=1,Lt(t,e,i,r),e.child)}function md(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!lf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Tm(t,e,s,i,r)):(t=ma(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qs,n(o,i)&&t.ref===e.ref)return ni(t,e,r)}return e.flags|=1,t=bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Tm(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Qs(s,i)&&t.ref===e.ref)if(zt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(zt=!0);else return e.lanes=t.lanes,ni(t,e,r)}return Ku(t,e,n,i,r)}function Cm(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(Wr,Ht),Ht|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Oe(Wr,Ht),Ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Oe(Wr,Ht),Ht|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Oe(Wr,Ht),Ht|=i;return Lt(t,e,r,n),e.child}function bm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ku(t,e,n,i,r){var s=Ut(n)?nr:Tt.current;return s=ts(e,s),Yr(e,r),n=Zc(t,e,n,i,s,r),i=Kc(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ni(t,e,r)):(Xe&&i&&Uc(e),e.flags|=1,Lt(t,e,n,r),e.child)}function gd(t,e,n,i,r){if(Ut(n)){var s=!0;Aa(e)}else s=!1;if(Yr(e,r),e.stateNode===null)da(t,e),em(e,n,i),Yu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=cn(u):(u=Ut(n)?nr:Tt.current,u=ts(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&ad(e,o,i,u),pi=!1;var f=e.memoizedState;o.state=f,Ia(e,i,o,r),l=e.memoizedState,a!==i||f!==l||kt.current||pi?(typeof c=="function"&&($u(e,n,c,i),l=e.memoizedState),(a=pi||od(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Qp(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_n(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=cn(l):(l=Ut(n)?nr:Tt.current,l=ts(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&ad(e,o,i,l),pi=!1,f=e.memoizedState,o.state=f,Ia(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||kt.current||pi?(typeof g=="function"&&($u(e,n,g,i),x=e.memoizedState),(u=pi||od(e,n,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Qu(t,e,n,i,s,r)}function Qu(t,e,n,i,r,s){bm(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&td(e,n,!1),ni(t,e,s);i=e.stateNode,w_.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=is(e,t.child,null,s),e.child=is(e,null,a,s)):Lt(t,e,a,s),e.memoizedState=i.state,r&&td(e,n,!0),e.child}function Am(t){var e=t.stateNode;e.pendingContext?ed(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ed(t,e.context,!1),jc(t,e.containerInfo)}function _d(t,e,n,i,r){return ns(),Bc(r),e.flags|=256,Lt(t,e,n,i),e.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function ec(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lm(t,e,n){var i=e.pendingProps,r=je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Oe(je,r&1),t===null)return ju(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=el(o,i,0,null),t=Ji(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ec(n),e.memoizedState=Ju,t):ef(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return E_(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=bi(a,s):(s=Ji(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ec(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ju,i}return s=t.child,t=s.sibling,i=bi(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ef(t,e){return e=el({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Io(t,e,n,i){return i!==null&&Bc(i),is(e,t.child,null,n),t=ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function E_(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Fl(Error(Y(422))),Io(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=el({mode:"visible",children:i.children},r,0,null),s=Ji(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&is(e,t.child,null,o),e.child.memoizedState=ec(o),e.memoizedState=Ju,s);if((e.mode&1)===0)return Io(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Y(419)),i=Fl(s,i,void 0),Io(t,e,o,i)}if(a=(o&t.childLanes)!==0,zt||a){if(i=dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ti(t,r),wn(i,t,r,-1))}return af(),i=Fl(Error(Y(421))),Io(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=k_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,jt=wi(r.nextSibling),qt=e,Xe=!0,xn=null,t!==null&&(tn[nn++]=$n,tn[nn++]=Yn,tn[nn++]=ir,$n=t.id,Yn=t.overflow,ir=e),e=ef(e,i.children),e.flags|=4096,e)}function vd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),qu(t.return,e,n)}function zl(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Pm(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Lt(t,e,i.children,n),i=je.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vd(t,n,e);else if(t.tag===19)vd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Oe(je,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Na(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zl(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Na(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zl(e,!0,n,null,s);break;case"together":zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function da(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),sr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(Y(153));if(e.child!==null){for(t=e.child,n=bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function T_(t,e,n){switch(e.tag){case 3:Am(e),ns();break;case 5:im(e);break;case 1:Ut(e.type)&&Aa(e);break;case 4:jc(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Oe(Da,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Oe(je,je.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Lm(t,e,n):(Oe(je,je.current&1),t=ni(t,e,n),t!==null?t.sibling:null);Oe(je,je.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return Pm(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Oe(je,je.current),i)break;return null;case 22:case 23:return e.lanes=0,Cm(t,e,n)}return ni(t,e,n)}var Dm,tc,Rm,Im;Dm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tc=function(){};Rm=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,$i(In.current);var s=null;switch(n){case"input":r=wu(t,r),i=wu(t,i),s=[];break;case"select":r=Ye({},r,{value:void 0}),i=Ye({},i,{value:void 0}),s=[];break;case"textarea":r=Cu(t,r),i=Cu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ca)}Au(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Im=function(t,e,n,i){n!==i&&(e.flags|=4)};function Es(t,e){if(!Xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function C_(t,e,n){var i=e.pendingProps;switch(Oc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return Ut(e.type)&&ba(),Mt(e),null;case 3:return i=e.stateNode,rs(),Ge(kt),Ge(Tt),$c(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Do(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,xn!==null&&(uc(xn),xn=null))),tc(t,e),Mt(e),null;case 5:qc(e);var r=$i(io.current);if(n=e.type,t!==null&&e.stateNode!=null)Rm(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Y(166));return Mt(e),null}if(t=$i(In.current),Do(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Dn]=e,i[to]=s,t=(e.mode&1)!==0,n){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(r=0;r<Is.length;r++)Ve(Is[r],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":bf(i,s),Ve("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",i);break;case"textarea":Lf(i,s),Ve("invalid",i)}Au(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Po(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Po(i.textContent,a,t),r=["children",""+a]):Xs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ve("scroll",i)}switch(n){case"input":Mo(i),Af(i,s,!0);break;case"textarea":Mo(i),Pf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ca)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=op(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Dn]=e,t[to]=i,Dm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lu(n,i),n){case"dialog":Ve("cancel",t),Ve("close",t),r=i;break;case"iframe":case"object":case"embed":Ve("load",t),r=i;break;case"video":case"audio":for(r=0;r<Is.length;r++)Ve(Is[r],t);r=i;break;case"source":Ve("error",t),r=i;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),r=i;break;case"details":Ve("toggle",t),r=i;break;case"input":bf(t,i),r=wu(t,i),Ve("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ye({},i,{value:void 0}),Ve("invalid",t);break;case"textarea":Lf(t,i),r=Cu(t,i),Ve("invalid",t);break;default:r=i}Au(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?up(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ap(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&js(t,l):typeof l=="number"&&js(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ve("scroll",t):l!=null&&Ec(t,s,l,o))}switch(n){case"input":Mo(t),Af(t,i,!1);break;case"textarea":Mo(t),Pf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Li(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Xr(t,!!i.multiple,s,!1):i.defaultValue!=null&&Xr(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ca)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mt(e),null;case 6:if(t&&e.stateNode!=null)Im(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Y(166));if(n=$i(io.current),$i(In.current),Do(e)){if(i=e.stateNode,n=e.memoizedProps,i[Dn]=e,(s=i.nodeValue!==n)&&(t=qt,t!==null))switch(t.tag){case 3:Po(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Po(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Dn]=e,e.stateNode=i}return Mt(e),null;case 13:if(Ge(je),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xe&&jt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Zp(),ns(),e.flags|=98560,s=!1;else if(s=Do(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Y(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));s[Dn]=e}else ns(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mt(e),s=!1}else xn!==null&&(uc(xn),xn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(je.current&1)!==0?st===0&&(st=3):af())),e.updateQueue!==null&&(e.flags|=4),Mt(e),null);case 4:return rs(),tc(t,e),t===null&&Js(e.stateNode.containerInfo),Mt(e),null;case 10:return Wc(e.type._context),Mt(e),null;case 17:return Ut(e.type)&&ba(),Mt(e),null;case 19:if(Ge(je),s=e.memoizedState,s===null)return Mt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Es(s,!1);else{if(st!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Na(t),o!==null){for(e.flags|=128,Es(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Oe(je,je.current&1|2),e.child}t=t.sibling}s.tail!==null&&Je()>os&&(e.flags|=128,i=!0,Es(s,!1),e.lanes=4194304)}else{if(!i)if(t=Na(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Xe)return Mt(e),null}else 2*Je()-s.renderingStartTime>os&&n!==1073741824&&(e.flags|=128,i=!0,Es(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Je(),e.sibling=null,n=je.current,Oe(je,i?n&1|2:n&1),e):(Mt(e),null);case 22:case 23:return of(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Ht&1073741824)!==0&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),null;case 24:return null;case 25:return null}throw Error(Y(156,e.tag))}function b_(t,e){switch(Oc(e),e.tag){case 1:return Ut(e.type)&&ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return rs(),Ge(kt),Ge(Tt),$c(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return qc(e),null;case 13:if(Ge(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Y(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ge(je),null;case 4:return rs(),null;case 10:return Wc(e.type._context),null;case 22:case 23:return of(),null;case 24:return null;default:return null}}var No=!1,Et=!1,A_=typeof WeakSet=="function"?WeakSet:Set,le=null;function Gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Qe(t,e,i)}else n.current=null}function nc(t,e,n){try{n()}catch(i){Qe(t,e,i)}}var xd=!1;function L_(t,e){if(Ou=wa,t=kp(),kc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bu={focusedElem:t,selectionRange:n},wa=!1,le=e;le!==null;)if(e=le,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,le=t;else for(;le!==null;){e=le;try{var x=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var m=x.memoizedProps,h=x.memoizedState,p=e.stateNode,_=p.getSnapshotBeforeUpdate(e.elementType===e.type?m:_n(e.type,m),h);p.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(S){Qe(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,le=t;break}le=e.return}return x=xd,xd=!1,x}function Gs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nc(e,n,s)}r=r.next}while(r!==i)}}function Qa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ic(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nm(t){var e=t.alternate;e!==null&&(t.alternate=null,Nm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dn],delete e[to],delete e[Wu],delete e[f_],delete e[d_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fm(t){return t.tag===5||t.tag===3||t.tag===4}function yd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ca));else if(i!==4&&(t=t.child,t!==null))for(rc(t,e,n),t=t.sibling;t!==null;)rc(t,e,n),t=t.sibling}function sc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(sc(t,e,n),t=t.sibling;t!==null;)sc(t,e,n),t=t.sibling}var mt=null,vn=!1;function si(t,e,n){for(n=n.child;n!==null;)zm(t,e,n),n=n.sibling}function zm(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(Ha,n)}catch{}switch(n.tag){case 5:Et||Gr(n,e);case 6:var i=mt,r=vn;mt=null,si(t,e,n),mt=i,vn=r,mt!==null&&(vn?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(vn?(t=mt,n=n.stateNode,t.nodeType===8?Ll(t.parentNode,n):t.nodeType===1&&Ll(t,n),Zs(t)):Ll(mt,n.stateNode));break;case 4:i=mt,r=vn,mt=n.stateNode.containerInfo,vn=!0,si(t,e,n),mt=i,vn=r;break;case 0:case 11:case 14:case 15:if(!Et&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&nc(n,e,o),r=r.next}while(r!==i)}si(t,e,n);break;case 1:if(!Et&&(Gr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Qe(n,e,a)}si(t,e,n);break;case 21:si(t,e,n);break;case 22:n.mode&1?(Et=(i=Et)||n.memoizedState!==null,si(t,e,n),Et=i):si(t,e,n);break;default:si(t,e,n)}}function Sd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new A_),e.forEach(function(i){var r=U_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,vn=!1;break e;case 3:mt=a.stateNode.containerInfo,vn=!0;break e;case 4:mt=a.stateNode.containerInfo,vn=!0;break e}a=a.return}if(mt===null)throw Error(Y(160));zm(s,o,r),mt=null,vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Qe(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)km(e,t),e=e.sibling}function km(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dn(e,t),An(t),i&4){try{Gs(3,t,t.return),Qa(3,t)}catch(m){Qe(t,t.return,m)}try{Gs(5,t,t.return)}catch(m){Qe(t,t.return,m)}}break;case 1:dn(e,t),An(t),i&512&&n!==null&&Gr(n,n.return);break;case 5:if(dn(e,t),An(t),i&512&&n!==null&&Gr(n,n.return),t.flags&32){var r=t.stateNode;try{js(r,"")}catch(m){Qe(t,t.return,m)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rp(r,s),Lu(a,o);var u=Lu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?up(r,d):c==="dangerouslySetInnerHTML"?ap(r,d):c==="children"?js(r,d):Ec(r,c,d,u)}switch(a){case"input":Eu(r,s);break;case"textarea":sp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Xr(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Xr(r,!!s.multiple,s.defaultValue,!0):Xr(r,!!s.multiple,s.multiple?[]:"",!1))}r[to]=s}catch(m){Qe(t,t.return,m)}}break;case 6:if(dn(e,t),An(t),i&4){if(t.stateNode===null)throw Error(Y(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(m){Qe(t,t.return,m)}}break;case 3:if(dn(e,t),An(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Zs(e.containerInfo)}catch(m){Qe(t,t.return,m)}break;case 4:dn(e,t),An(t);break;case 13:dn(e,t),An(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rf=Je())),i&4&&Sd(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(u=Et)||c,dn(e,t),Et=u):dn(e,t),An(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(le=t,c=t.child;c!==null;){for(d=le=c;le!==null;){switch(f=le,g=f.child,f.tag){case 0:case 11:case 14:case 15:Gs(4,f,f.return);break;case 1:Gr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(m){Qe(i,n,m)}}break;case 5:Gr(f,f.return);break;case 22:if(f.memoizedState!==null){wd(d);continue}}g!==null?(g.return=f,le=g):wd(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lp("display",o))}catch(m){Qe(t,t.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){Qe(t,t.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dn(e,t),An(t),i&4&&Sd(t);break;case 21:break;default:dn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fm(n)){var i=n;break e}n=n.return}throw Error(Y(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(js(r,""),i.flags&=-33);var s=yd(t);sc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=yd(t);rc(t,a,o);break;default:throw Error(Y(161))}}catch(l){Qe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function P_(t,e,n){le=t,Um(t)}function Um(t,e,n){for(var i=(t.mode&1)!==0;le!==null;){var r=le,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||No;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Et;a=No;var u=Et;if(No=o,(Et=l)&&!u)for(le=r;le!==null;)o=le,l=o.child,o.tag===22&&o.memoizedState!==null?Ed(r):l!==null?(l.return=o,le=l):Ed(r);for(;s!==null;)le=s,Um(s),s=s.sibling;le=r,No=a,Et=u}Md(t)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,le=s):Md(t)}}function Md(t){for(;le!==null;){var e=le;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Et||Qa(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Et)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:_n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Zs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Et||e.flags&512&&ic(e)}catch(f){Qe(e,e.return,f)}}if(e===t){le=null;break}if(n=e.sibling,n!==null){n.return=e.return,le=n;break}le=e.return}}function wd(t){for(;le!==null;){var e=le;if(e===t){le=null;break}var n=e.sibling;if(n!==null){n.return=e.return,le=n;break}le=e.return}}function Ed(t){for(;le!==null;){var e=le;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qa(4,e)}catch(l){Qe(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Qe(e,r,l)}}var s=e.return;try{ic(e)}catch(l){Qe(e,s,l)}break;case 5:var o=e.return;try{ic(e)}catch(l){Qe(e,o,l)}}}catch(l){Qe(e,e.return,l)}if(e===t){le=null;break}var a=e.sibling;if(a!==null){a.return=e.return,le=a;break}le=e.return}}var D_=Math.ceil,ka=ii.ReactCurrentDispatcher,tf=ii.ReactCurrentOwner,ln=ii.ReactCurrentBatchConfig,De=0,dt=null,nt=null,_t=0,Ht=0,Wr=Ri(0),st=0,ao=null,sr=0,Ja=0,nf=0,Ws=null,Nt=null,rf=0,os=1/0,Hn=null,Ua=!1,oc=null,Ti=null,Fo=!1,vi=null,Oa=0,Hs=0,ac=null,ha=-1,pa=0;function Pt(){return(De&6)!==0?Je():ha!==-1?ha:ha=Je()}function Ci(t){return(t.mode&1)===0?1:(De&2)!==0&&_t!==0?_t&-_t:p_.transition!==null?(pa===0&&(pa=Sp()),pa):(t=ze,t!==0||(t=window.event,t=t===void 0?16:Ap(t.type)),t)}function wn(t,e,n,i){if(50<Hs)throw Hs=0,ac=null,Error(Y(185));co(t,n,i),((De&2)===0||t!==dt)&&(t===dt&&((De&2)===0&&(Ja|=n),st===4&&gi(t,_t)),Ot(t,i),n===1&&De===0&&(e.mode&1)===0&&(os=Je()+500,Ya&&Ii()))}function Ot(t,e){var n=t.callbackNode;p0(t,e);var i=Ma(t,t===dt?_t:0);if(i===0)n!==null&&If(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&If(n),e===1)t.tag===0?h_(Td.bind(null,t)):qp(Td.bind(null,t)),u_(function(){(De&6)===0&&Ii()}),n=null;else{switch(Mp(i)){case 1:n=Lc;break;case 4:n=xp;break;case 16:n=Sa;break;case 536870912:n=yp;break;default:n=Sa}n=jm(n,Om.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Om(t,e){if(ha=-1,pa=0,(De&6)!==0)throw Error(Y(327));var n=t.callbackNode;if(Zr()&&t.callbackNode!==n)return null;var i=Ma(t,t===dt?_t:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=Ba(t,i);else{e=i;var r=De;De|=2;var s=Vm();(dt!==t||_t!==e)&&(Hn=null,os=Je()+500,Qi(t,e));do try{N_();break}catch(a){Bm(t,a)}while(1);Gc(),ka.current=s,De=r,nt!==null?e=0:(dt=null,_t=0,e=st)}if(e!==0){if(e===2&&(r=Nu(t),r!==0&&(i=r,e=lc(t,r))),e===1)throw n=ao,Qi(t,0),gi(t,i),Ot(t,Je()),n;if(e===6)gi(t,i);else{if(r=t.current.alternate,(i&30)===0&&!R_(r)&&(e=Ba(t,i),e===2&&(s=Nu(t),s!==0&&(i=s,e=lc(t,s))),e===1))throw n=ao,Qi(t,0),gi(t,i),Ot(t,Je()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Y(345));case 2:Gi(t,Nt,Hn);break;case 3:if(gi(t,i),(i&130023424)===i&&(e=rf+500-Je(),10<e)){if(Ma(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Pt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gu(Gi.bind(null,t,Nt,Hn),e);break}Gi(t,Nt,Hn);break;case 4:if(gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Mn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Je()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*D_(i/1960))-i,10<i){t.timeoutHandle=Gu(Gi.bind(null,t,Nt,Hn),i);break}Gi(t,Nt,Hn);break;case 5:Gi(t,Nt,Hn);break;default:throw Error(Y(329))}}}return Ot(t,Je()),t.callbackNode===n?Om.bind(null,t):null}function lc(t,e){var n=Ws;return t.current.memoizedState.isDehydrated&&(Qi(t,e).flags|=256),t=Ba(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&uc(e)),t}function uc(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function R_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!En(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gi(t,e){for(e&=~nf,e&=~Ja,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mn(e),i=1<<n;t[n]=-1,e&=~i}}function Td(t){if((De&6)!==0)throw Error(Y(327));Zr();var e=Ma(t,0);if((e&1)===0)return Ot(t,Je()),null;var n=Ba(t,e);if(t.tag!==0&&n===2){var i=Nu(t);i!==0&&(e=i,n=lc(t,i))}if(n===1)throw n=ao,Qi(t,0),gi(t,e),Ot(t,Je()),n;if(n===6)throw Error(Y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gi(t,Nt,Hn),Ot(t,Je()),null}function sf(t,e){var n=De;De|=1;try{return t(e)}finally{De=n,De===0&&(os=Je()+500,Ya&&Ii())}}function or(t){vi!==null&&vi.tag===0&&(De&6)===0&&Zr();var e=De;De|=1;var n=ln.transition,i=ze;try{if(ln.transition=null,ze=1,t)return t()}finally{ze=i,ln.transition=n,De=e,(De&6)===0&&Ii()}}function of(){Ht=Wr.current,Ge(Wr)}function Qi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,l_(n)),nt!==null)for(n=nt.return;n!==null;){var i=n;switch(Oc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ba();break;case 3:rs(),Ge(kt),Ge(Tt),$c();break;case 5:qc(i);break;case 4:rs();break;case 13:Ge(je);break;case 19:Ge(je);break;case 10:Wc(i.type._context);break;case 22:case 23:of()}n=n.return}if(dt=t,nt=t=bi(t.current,null),_t=Ht=e,st=0,ao=null,nf=Ja=sr=0,Nt=Ws=null,qi!==null){for(e=0;e<qi.length;e++)if(n=qi[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}qi=null}return t}function Bm(t,e){do{var n=nt;try{if(Gc(),ca.current=za,Fa){for(var i=$e.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fa=!1}if(rr=0,ft=rt=$e=null,Vs=!1,ro=0,tf.current=null,n===null||n.return===null){st=1,ao=e,nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=_t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=dd(o);if(g!==null){g.flags&=-257,hd(g,o,a,s,e),g.mode&1&&fd(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var m=new Set;m.add(l),e.updateQueue=m}else x.add(l);break e}else{if((e&1)===0){fd(s,u,e),af();break e}l=Error(Y(426))}}else if(Xe&&a.mode&1){var h=dd(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),hd(h,o,a,s,e),Bc(ss(l,a));break e}}s=l=ss(l,a),st!==4&&(st=2),Ws===null?Ws=[s]:Ws.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=wm(s,l,e);rd(s,p);break e;case 1:a=l;var _=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ti===null||!Ti.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Em(s,a,e);rd(s,S);break e}}s=s.return}while(s!==null)}Wm(n)}catch(M){e=M,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(1)}function Vm(){var t=ka.current;return ka.current=za,t===null?za:t}function af(){(st===0||st===3||st===2)&&(st=4),dt===null||(sr&268435455)===0&&(Ja&268435455)===0||gi(dt,_t)}function Ba(t,e){var n=De;De|=2;var i=Vm();(dt!==t||_t!==e)&&(Hn=null,Qi(t,e));do try{I_();break}catch(r){Bm(t,r)}while(1);if(Gc(),De=n,ka.current=i,nt!==null)throw Error(Y(261));return dt=null,_t=0,st}function I_(){for(;nt!==null;)Gm(nt)}function N_(){for(;nt!==null&&!s0();)Gm(nt)}function Gm(t){var e=Xm(t.alternate,t,Ht);t.memoizedProps=t.pendingProps,e===null?Wm(t):nt=e,tf.current=null}function Wm(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=C_(n,e,Ht),n!==null){nt=n;return}}else{if(n=b_(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{st=6,nt=null;return}}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);st===0&&(st=5)}function Gi(t,e,n){var i=ze,r=ln.transition;try{ln.transition=null,ze=1,F_(t,e,n,i)}finally{ln.transition=r,ze=i}return null}function F_(t,e,n,i){do Zr();while(vi!==null);if((De&6)!==0)throw Error(Y(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Y(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(m0(t,s),t===dt&&(nt=dt=null,_t=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Fo||(Fo=!0,jm(Sa,function(){return Zr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=ln.transition,ln.transition=null;var o=ze;ze=1;var a=De;De|=4,tf.current=null,L_(t,n),km(n,t),t_(Bu),wa=!!Ou,Bu=Ou=null,t.current=n,P_(n),o0(),De=a,ze=o,ln.transition=s}else t.current=n;if(Fo&&(Fo=!1,vi=t,Oa=r),s=t.pendingLanes,s===0&&(Ti=null),u0(n.stateNode),Ot(t,Je()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ua)throw Ua=!1,t=oc,oc=null,t;return(Oa&1)!==0&&t.tag!==0&&Zr(),s=t.pendingLanes,(s&1)!==0?t===ac?Hs++:(Hs=0,ac=t):Hs=0,Ii(),null}function Zr(){if(vi!==null){var t=Mp(Oa),e=ln.transition,n=ze;try{if(ln.transition=null,ze=16>t?16:t,vi===null)var i=!1;else{if(t=vi,vi=null,Oa=0,(De&6)!==0)throw Error(Y(331));var r=De;for(De|=4,le=t.current;le!==null;){var s=le,o=s.child;if((le.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(le=u;le!==null;){var c=le;switch(c.tag){case 0:case 11:case 15:Gs(8,c,s)}var d=c.child;if(d!==null)d.return=c,le=d;else for(;le!==null;){c=le;var f=c.sibling,g=c.return;if(Nm(c),c===u){le=null;break}if(f!==null){f.return=g,le=f;break}le=g}}}var x=s.alternate;if(x!==null){var m=x.child;if(m!==null){x.child=null;do{var h=m.sibling;m.sibling=null,m=h}while(m!==null)}}le=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,le=o;else e:for(;le!==null;){if(s=le,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Gs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,le=p;break e}le=s.return}}var _=t.current;for(le=_;le!==null;){o=le;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,le=v;else e:for(o=_;le!==null;){if(a=le,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Qa(9,a)}}catch(M){Qe(a,a.return,M)}if(a===o){le=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,le=S;break e}le=a.return}}if(De=r,Ii(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(Ha,t)}catch{}i=!0}return i}finally{ze=n,ln.transition=e}}return!1}function Cd(t,e,n){e=ss(n,e),e=wm(t,e,1),t=Ei(t,e,1),e=Pt(),t!==null&&(co(t,1,e),Ot(t,e))}function Qe(t,e,n){if(t.tag===3)Cd(t,t,n);else for(;e!==null;){if(e.tag===3){Cd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ti===null||!Ti.has(i))){t=ss(n,t),t=Em(e,t,1),e=Ei(e,t,1),t=Pt(),e!==null&&(co(e,1,t),Ot(e,t));break}}e=e.return}}function z_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(_t&n)===n&&(st===4||st===3&&(_t&130023424)===_t&&500>Je()-rf?Qi(t,0):nf|=n),Ot(t,e)}function Hm(t,e){e===0&&((t.mode&1)===0?e=1:(e=To,To<<=1,(To&130023424)===0&&(To=4194304)));var n=Pt();t=ti(t,e),t!==null&&(co(t,e,n),Ot(t,n))}function k_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hm(t,n)}function U_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Y(314))}i!==null&&i.delete(e),Hm(t,n)}var Xm;Xm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)zt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return zt=!1,T_(t,e,n);zt=(t.flags&131072)!==0}else zt=!1,Xe&&(e.flags&1048576)!==0&&$p(e,Pa,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;da(t,e),t=e.pendingProps;var r=ts(e,Tt.current);Yr(e,n),r=Zc(null,e,i,t,r,n);var s=Kc();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(i)?(s=!0,Aa(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xc(e),r.updater=Za,e.stateNode=r,r._reactInternals=e,Yu(e,i,t,n),e=Qu(null,e,i,!0,s,n)):(e.tag=0,Xe&&s&&Uc(e),Lt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(da(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=B_(i),t=_n(i,t),r){case 0:e=Ku(null,e,i,t,n);break e;case 1:e=gd(null,e,i,t,n);break e;case 11:e=pd(null,e,i,t,n);break e;case 14:e=md(null,e,i,_n(i.type,t),n);break e}throw Error(Y(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),Ku(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),gd(t,e,i,r,n);case 3:e:{if(Am(e),t===null)throw Error(Y(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Qp(t,e),Ia(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ss(Error(Y(423)),e),e=_d(t,e,i,n,r);break e}else if(i!==r){r=ss(Error(Y(424)),e),e=_d(t,e,i,n,r);break e}else for(jt=wi(e.stateNode.containerInfo.firstChild),qt=e,Xe=!0,xn=null,n=nm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),i===r){e=ni(t,e,n);break e}Lt(t,e,i,n)}e=e.child}return e;case 5:return im(e),t===null&&ju(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Vu(i,r)?o=null:s!==null&&Vu(i,s)&&(e.flags|=32),bm(t,e),Lt(t,e,o,n),e.child;case 6:return t===null&&ju(e),null;case 13:return Lm(t,e,n);case 4:return jc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=is(e,null,i,n):Lt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),pd(t,e,i,r,n);case 7:return Lt(t,e,e.pendingProps,n),e.child;case 8:return Lt(t,e,e.pendingProps.children,n),e.child;case 12:return Lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Oe(Da,i._currentValue),i._currentValue=o,s!==null)if(En(s.value,o)){if(s.children===r.children&&!kt.current){e=ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Kn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),qu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Y(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Lt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Yr(e,n),r=cn(r),i=i(r),e.flags|=1,Lt(t,e,i,n),e.child;case 14:return i=e.type,r=_n(i,e.pendingProps),r=_n(i.type,r),md(t,e,i,r,n);case 15:return Tm(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:_n(i,r),da(t,e),e.tag=1,Ut(i)?(t=!0,Aa(e)):t=!1,Yr(e,n),em(e,i,r),Yu(e,i,r,n),Qu(null,e,i,!0,t,n);case 19:return Pm(t,e,n);case 22:return Cm(t,e,n)}throw Error(Y(156,e.tag))};function jm(t,e){return vp(t,e)}function O_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,i){return new O_(t,e,n,i)}function lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function B_(t){if(typeof t=="function")return lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Cc)return 11;if(t===bc)return 14}return 2}function bi(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ma(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")lf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ir:return Ji(n.children,r,s,e);case Tc:o=8,r|=8;break;case xu:return t=on(12,n,e,r|2),t.elementType=xu,t.lanes=s,t;case yu:return t=on(13,n,e,r),t.elementType=yu,t.lanes=s,t;case Su:return t=on(19,n,e,r),t.elementType=Su,t.lanes=s,t;case tp:return el(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jh:o=10;break e;case ep:o=9;break e;case Cc:o=11;break e;case bc:o=14;break e;case hi:o=16,i=null;break e}throw Error(Y(130,t==null?t:typeof t,""))}return e=on(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ji(t,e,n,i){return t=on(7,t,i,e),t.lanes=n,t}function el(t,e,n,i){return t=on(22,t,i,e),t.elementType=tp,t.lanes=n,t.stateNode={isHidden:!1},t}function kl(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function Ul(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function V_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function uf(t,e,n,i,r,s,o,a,l){return t=new V_(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=on(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(s),t}function G_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function qm(t){if(!t)return Pi;t=t._reactInternals;e:{if(dr(t)!==t||t.tag!==1)throw Error(Y(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Y(171))}if(t.tag===1){var n=t.type;if(Ut(n))return jp(t,n,e)}return e}function $m(t,e,n,i,r,s,o,a,l){return t=uf(n,i,!0,t,r,s,o,a,l),t.context=qm(null),n=t.current,i=Pt(),r=Ci(n),s=Kn(i,r),s.callback=e!=null?e:null,Ei(n,s,r),t.current.lanes=r,co(t,r,i),Ot(t,i),t}function tl(t,e,n,i){var r=e.current,s=Pt(),o=Ci(r);return n=qm(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ei(r,e,o),t!==null&&(wn(t,r,o,s),ua(t,r,o)),o}function Va(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cf(t,e){bd(t,e),(t=t.alternate)&&bd(t,e)}function W_(){return null}var Ym=typeof reportError=="function"?reportError:function(t){console.error(t)};function ff(t){this._internalRoot=t}nl.prototype.render=ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Y(409));tl(t,e,null,null)};nl.prototype.unmount=ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;or(function(){tl(null,t,null,null)}),e[ei]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mi.length&&e!==0&&e<mi[n].priority;n++);mi.splice(n,0,t),n===0&&bp(t)}};function df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ad(){}function H_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Va(o);s.call(u)}}var o=$m(e,i,t,0,null,!1,!1,"",Ad);return t._reactRootContainer=o,t[ei]=o.current,Js(t.nodeType===8?t.parentNode:t),or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Va(l);a.call(u)}}var l=uf(t,0,!1,null,null,!1,!1,"",Ad);return t._reactRootContainer=l,t[ei]=l.current,Js(t.nodeType===8?t.parentNode:t),or(function(){tl(e,l,n,i)}),l}function rl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Va(o);a.call(l)}}tl(e,o,t,r)}else o=H_(n,e,t,r,i);return Va(o)}wp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Rs(e.pendingLanes);n!==0&&(Pc(e,n|1),Ot(e,Je()),(De&6)===0&&(os=Je()+500,Ii()))}break;case 13:or(function(){var i=ti(t,1);if(i!==null){var r=Pt();wn(i,t,1,r)}}),cf(t,1)}};Dc=function(t){if(t.tag===13){var e=ti(t,134217728);if(e!==null){var n=Pt();wn(e,t,134217728,n)}cf(t,134217728)}};Ep=function(t){if(t.tag===13){var e=Ci(t),n=ti(t,e);if(n!==null){var i=Pt();wn(n,t,e,i)}cf(t,e)}};Tp=function(){return ze};Cp=function(t,e){var n=ze;try{return ze=t,e()}finally{ze=n}};Du=function(t,e,n){switch(e){case"input":if(Eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=$a(i);if(!r)throw Error(Y(90));ip(i),Eu(i,r)}}}break;case"textarea":sp(t,n);break;case"select":e=n.value,e!=null&&Xr(t,!!n.multiple,e,!1)}};dp=sf;hp=or;var X_={usingClientEntryPoint:!1,Events:[ho,kr,$a,cp,fp,sf]},Ts={findFiberByHostInstance:ji,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},j_={bundleType:Ts.bundleType,version:Ts.version,rendererPackageName:Ts.rendererPackageName,rendererConfig:Ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ts.findFiberByHostInstance||W_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{Ha=zo.inject(j_),Rn=zo}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X_;Zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(e))throw Error(Y(200));return G_(t,e,null,n)};Zt.createRoot=function(t,e){if(!df(t))throw Error(Y(299));var n=!1,i="",r=Ym;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=uf(t,1,!1,null,null,n,!1,i,r),t[ei]=e.current,Js(t.nodeType===8?t.parentNode:t),new ff(e)};Zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Y(188)):(t=Object.keys(t).join(","),Error(Y(268,t)));return t=gp(e),t=t===null?null:t.stateNode,t};Zt.flushSync=function(t){return or(t)};Zt.hydrate=function(t,e,n){if(!il(e))throw Error(Y(200));return rl(null,t,e,!0,n)};Zt.hydrateRoot=function(t,e,n){if(!df(t))throw Error(Y(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ym;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$m(e,null,t,1,n!=null?n:null,r,!1,s,o),t[ei]=e.current,Js(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nl(e)};Zt.render=function(t,e,n){if(!il(e))throw Error(Y(200));return rl(null,t,e,!1,n)};Zt.unmountComponentAtNode=function(t){if(!il(t))throw Error(Y(40));return t._reactRootContainer?(or(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[ei]=null})}),!0):!1};Zt.unstable_batchedUpdates=sf;Zt.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!il(n))throw Error(Y(200));if(t==null||t._reactInternals===void 0)throw Error(Y(38));return rl(t,e,n,!1,i)};Zt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Zt})($h);var Ld=$h.exports;_u.createRoot=Ld.createRoot,_u.hydrateRoot=Ld.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="146",q_=0,Pd=1,$_=2,Zm=1,Y_=2,Ns=3,as=0,un=1,xi=2,Ai=0,Kr=1,Dd=2,Rd=3,Id=4,Z_=5,Dr=100,K_=101,Q_=102,Nd=103,Fd=104,J_=200,ev=201,tv=202,nv=203,Km=204,Qm=205,iv=206,rv=207,sv=208,ov=209,av=210,lv=0,uv=1,cv=2,cc=3,fv=4,dv=5,hv=6,pv=7,Jm=0,mv=1,gv=2,Qn=0,_v=1,vv=2,xv=3,yv=4,Sv=5,eg=300,ls=301,us=302,fc=303,dc=304,sl=306,hc=1e3,yn=1001,pc=1002,Ft=1003,zd=1004,kd=1005,rn=1006,Mv=1007,ol=1008,ar=1009,wv=1010,Ev=1011,tg=1012,Tv=1013,Yi=1014,Zi=1015,lo=1016,Cv=1017,bv=1018,Qr=1020,Av=1021,Lv=1022,Sn=1023,Pv=1024,Dv=1025,er=1026,cs=1027,Rv=1028,Iv=1029,Nv=1030,Fv=1031,zv=1033,Ol=33776,Bl=33777,Vl=33778,Gl=33779,Ud=35840,Od=35841,Bd=35842,Vd=35843,kv=36196,Gd=37492,Wd=37496,Hd=37808,Xd=37809,jd=37810,qd=37811,$d=37812,Yd=37813,Zd=37814,Kd=37815,Qd=37816,Jd=37817,eh=37818,th=37819,nh=37820,ih=37821,rh=36492,lr=3e3,Ke=3001,Uv=3200,Ov=3201,Bv=0,Vv=1,Xn="srgb",Ki="srgb-linear",Wl=7680,Gv=519,sh=35044,oh="300 es",mc=1035;class ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hl=Math.PI/180,ah=180/Math.PI;function mo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[t&255]+wt[t>>8&255]+wt[t>>16&255]+wt[t>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[n&63|128]+wt[n>>8&255]+"-"+wt[n>>16&255]+wt[n>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function Wv(t,e){return(t%e+e)%e}function Xl(t,e,n){return(1-n)*t+n*e}function lh(t){return(t&t-1)===0&&t!==0}function gc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ko(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Vt(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,n=0){Be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class an{constructor(){an.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],x=i[8],m=r[0],h=r[3],p=r[6],_=r[1],v=r[4],S=r[7],M=r[2],C=r[5],A=r[8];return s[0]=o*m+a*_+l*M,s[3]=o*h+a*v+l*C,s[6]=o*p+a*S+l*A,s[1]=u*m+c*_+d*M,s[4]=u*h+c*v+d*C,s[7]=u*p+c*S+d*A,s[2]=f*m+g*_+x*M,s[5]=f*h+g*v+x*C,s[8]=f*p+g*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,x=n*d+i*f+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return e[0]=d*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=f*m,e[4]=(c*n-r*l)*m,e[5]=(r*s-a*n)*m,e[6]=g*m,e[7]=(i*l-u*n)*m,e[8]=(o*n-i*s)*m,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*u,r[6]=n*a+i*c,r[1]=-i*s+n*l,r[4]=-i*o+n*u,r[7]=-i*a+n*c,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ng(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ga(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ga(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const jl={[Xn]:{[Ki]:tr},[Ki]:{[Xn]:ga}},hn={legacyMode:!0,get workingColorSpace(){return Ki},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(jl[e]&&jl[e][n]!==void 0){const i=jl[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},it={r:0,g:0,b:0},pn={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function ql(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Oo(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,hn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ki){return this.r=e,this.g=n,this.b=i,hn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ki){if(e=Wv(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ql(o,s,e+1/3),this.g=ql(o,s,e),this.b=ql(o,s,e-1/3)}return hn.toWorkingColorSpace(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,hn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,hn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,hn.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,hn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Xn){const i=ig[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return hn.fromWorkingColorSpace(Oo(this,it),e),Xt(it.r*255,0,255)<<16^Xt(it.g*255,0,255)<<8^Xt(it.b*255,0,255)<<0}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ki){hn.fromWorkingColorSpace(Oo(this,it),n);const i=it.r,r=it.g,s=it.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Ki){return hn.fromWorkingColorSpace(Oo(this,it),n),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=Xn){return hn.fromWorkingColorSpace(Oo(this,it),e),e!==Xn?`color(${e} ${it.r} ${it.g} ${it.b})`:`rgb(${it.r*255|0},${it.g*255|0},${it.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(pn),pn.h+=e,pn.s+=n,pn.l+=i,this.setHSL(pn.h,pn.s,pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(pn),e.getHSL(Uo);const i=Xl(pn.h,Uo.h,n),r=Xl(pn.s,Uo.s,n),s=Xl(pn.l,Uo.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qe.NAMES=ig;let _r;class rg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_r===void 0&&(_r=Ga("canvas")),_r.width=e.width,_r.height=e.height;const i=_r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=_r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ga("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=tr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(tr(n[i]/255)*255):n[i]=tr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class sg{constructor(e=null){this.isSource=!0,this.uuid=mo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($l(r[o].image)):s.push($l(r[o]))}else s=$l(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $l(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hv=0;class Tn extends ms{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,i=yn,r=yn,s=rn,o=ol,a=Sn,l=ar,u=1,c=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=mo(),this.name="",this.source=new sg(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new an,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=eg;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],x=l[9],m=l[2],h=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-m)<.01&&Math.abs(x-h)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+m)<.1&&Math.abs(x+h)<.1&&Math.abs(u+g+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,S=(g+1)/2,M=(p+1)/2,C=(c+f)/4,A=(d+m)/4,y=(x+h)/4;return v>S&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=A/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=y/s),this.set(i,r,s,n),this}let _=Math.sqrt((h-x)*(h-x)+(d-m)*(d-m)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(h-x)/_,this.y=(d-m)/_,this.z=(f-c)/_,this.w=Math.acos((u+g+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ur extends ms{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:rn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new sg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class og extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xv extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class go{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],x=s[o+2],m=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=x,e[n+3]=m;return}if(d!==m||l!==f||u!==g||c!==x){let h=1-a;const p=l*f+u*g+c*x+d*m,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const M=Math.sqrt(v),C=Math.atan2(M,p*_);h=Math.sin(h*C)/M,a=Math.sin(a*C)/M}const S=a*_;if(l=l*h+f*S,u=u*h+g*S,c=c*h+x*S,d=d*h+m*S,h===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],x=s[o+3];return e[n]=a*x+c*d+l*g-u*f,e[n+1]=l*x+c*f+u*d-a*g,e[n+2]=u*x+c*g+a*f-l*d,e[n+3]=c*x-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"YXZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"ZXY":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"ZYX":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"YZX":this._x=f*c*d+u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d-f*g*x;break;case"XZY":this._x=f*c*d-u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(uh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,d=l*r+s*i-o*n,f=-s*n-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yl.copy(this).projectOnVector(e),this.sub(Yl)}reflect(e){return this.sub(Yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yl=new k,uh=new go;class _o{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<n&&(n=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ui.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Ui.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ui)}else i.boundingBox===null&&i.computeBoundingBox(),Zl.copy(i.boundingBox),Zl.applyMatrix4(e.matrixWorld),this.union(Zl);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Bo.subVectors(this.max,Cs),vr.subVectors(e.a,Cs),xr.subVectors(e.b,Cs),yr.subVectors(e.c,Cs),oi.subVectors(xr,vr),ai.subVectors(yr,xr),Oi.subVectors(vr,yr);let n=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Oi.z,Oi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Oi.z,0,-Oi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Oi.y,Oi.x,0];return!Kl(n,vr,xr,yr,Bo)||(n=[1,0,0,0,1,0,0,0,1],!Kl(n,vr,xr,yr,Bo))?!1:(Vo.crossVectors(oi,ai),n=[Vo.x,Vo.y,Vo.z],Kl(n,vr,xr,yr,Bo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ui.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new k,new k,new k,new k,new k,new k,new k,new k],Ui=new k,Zl=new _o,vr=new k,xr=new k,yr=new k,oi=new k,ai=new k,Oi=new k,Cs=new k,Bo=new k,Vo=new k,Bi=new k;function Kl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Bi.fromArray(t,s);const a=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),l=e.dot(Bi),u=n.dot(Bi),c=i.dot(Bi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const jv=new _o,bs=new k,Ql=new k;class pf{constructor(e=new k,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const n=bs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(Ql)),this.expandByPoint(bs.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new k,Jl=new k,Go=new k,li=new k,eu=new k,Wo=new k,tu=new k;class qv{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bn.copy(this.direction).multiplyScalar(n).add(this.origin),Bn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jl.copy(e).add(n).multiplyScalar(.5),Go.copy(n).sub(e).normalize(),li.copy(this.origin).sub(Jl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Go),a=li.dot(this.direction),l=-li.dot(Go),u=li.lengthSq(),c=Math.abs(1-o*o);let d,f,g,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const m=1/c;d*=m,f*=m,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Go).multiplyScalar(f).add(Jl),g}intersectSphere(e,n){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,n,i,r,s){eu.subVectors(n,e),Wo.subVectors(i,e),tu.crossVectors(eu,Wo);let o=this.direction.dot(tu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(Wo.crossVectors(li,Wo));if(l<0)return null;const u=a*this.direction.dot(eu.cross(li));if(u<0||l+u>o)return null;const c=-a*li.dot(tu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,d,f,g,x,m,h){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=g,p[7]=x,p[11]=m,p[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Sr.setFromMatrixColumn(e,0).length(),s=1/Sr.setFromMatrixColumn(e,1).length(),o=1/Sr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,x=a*c,m=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=g+x*u,n[5]=f-m*u,n[9]=-a*l,n[2]=m-f*u,n[6]=x+g*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,x=u*c,m=u*d;n[0]=f+m*a,n[4]=x*a-g,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=g*a-x,n[6]=m+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,x=u*c,m=u*d;n[0]=f-m*a,n[4]=-o*d,n[8]=x+g*a,n[1]=g+x*a,n[5]=o*c,n[9]=m-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,x=a*c,m=a*d;n[0]=l*c,n[4]=x*u-g,n[8]=f*u+m,n[1]=l*d,n[5]=m*u+f,n[9]=g*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,x=a*l,m=a*u;n[0]=l*c,n[4]=m-f*d,n[8]=x*d+g,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=g*d+x,n[10]=f-m*d}else if(e.order==="XZY"){const f=o*l,g=o*u,x=a*l,m=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+m,n[5]=o*c,n[9]=g*d-x,n[2]=x*d-g,n[6]=a*c,n[10]=m*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($v,e,Yv)}lookAt(e,n,i){const r=this.elements;return Gt.subVectors(e,n),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),ui.crossVectors(i,Gt),ui.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),ui.crossVectors(i,Gt)),ui.normalize(),Ho.crossVectors(Gt,ui),r[0]=ui.x,r[4]=Ho.x,r[8]=Gt.x,r[1]=ui.y,r[5]=Ho.y,r[9]=Gt.y,r[2]=ui.z,r[6]=Ho.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],x=i[2],m=i[6],h=i[10],p=i[14],_=i[3],v=i[7],S=i[11],M=i[15],C=r[0],A=r[4],y=r[8],b=r[12],D=r[1],$=r[5],ie=r[9],U=r[13],F=r[2],X=r[6],Z=r[10],Q=r[14],R=r[3],L=r[7],I=r[11],q=r[15];return s[0]=o*C+a*D+l*F+u*R,s[4]=o*A+a*$+l*X+u*L,s[8]=o*y+a*ie+l*Z+u*I,s[12]=o*b+a*U+l*Q+u*q,s[1]=c*C+d*D+f*F+g*R,s[5]=c*A+d*$+f*X+g*L,s[9]=c*y+d*ie+f*Z+g*I,s[13]=c*b+d*U+f*Q+g*q,s[2]=x*C+m*D+h*F+p*R,s[6]=x*A+m*$+h*X+p*L,s[10]=x*y+m*ie+h*Z+p*I,s[14]=x*b+m*U+h*Q+p*q,s[3]=_*C+v*D+S*F+M*R,s[7]=_*A+v*$+S*X+M*L,s[11]=_*y+v*ie+S*Z+M*I,s[15]=_*b+v*U+S*Q+M*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],x=e[3],m=e[7],h=e[11],p=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+m*(+n*l*g-n*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+h*(+n*u*d-n*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+p*(-r*a*c-n*l*d+n*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],x=e[12],m=e[13],h=e[14],p=e[15],_=d*h*u-m*f*u+m*l*g-a*h*g-d*l*p+a*f*p,v=x*f*u-c*h*u-x*l*g+o*h*g+c*l*p-o*f*p,S=c*m*u-x*d*u+x*a*g-o*m*g-c*a*p+o*d*p,M=x*d*l-c*m*l-x*a*f+o*m*f+c*a*h-o*d*h,C=n*_+i*v+r*S+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(m*f*s-d*h*s-m*r*g+i*h*g+d*r*p-i*f*p)*A,e[2]=(a*h*s-m*l*s+m*r*u-i*h*u-a*r*p+i*l*p)*A,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*A,e[4]=v*A,e[5]=(c*h*s-x*f*s+x*r*g-n*h*g-c*r*p+n*f*p)*A,e[6]=(x*l*s-o*h*s-x*r*u+n*h*u+o*r*p-n*l*p)*A,e[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*g+n*l*g)*A,e[8]=S*A,e[9]=(x*d*s-c*m*s-x*i*g+n*m*g+c*i*p-n*d*p)*A,e[10]=(o*m*s-x*a*s+x*i*u-n*m*u-o*i*p+n*a*p)*A,e[11]=(c*a*s-o*d*s-c*i*u+n*d*u+o*i*g-n*a*g)*A,e[12]=M*A,e[13]=(c*m*r-x*d*r+x*i*f-n*m*f-c*i*h+n*d*h)*A,e[14]=(x*a*r-o*m*r-x*i*l+n*m*l+o*i*h-n*a*h)*A,e[15]=(o*d*r-c*a*r+c*i*l-n*d*l-o*i*f+n*a*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,x=s*d,m=o*c,h=o*d,p=a*d,_=l*u,v=l*c,S=l*d,M=i.x,C=i.y,A=i.z;return r[0]=(1-(m+p))*M,r[1]=(g+S)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(f+p))*C,r[6]=(h+_)*C,r[7]=0,r[8]=(x+v)*A,r[9]=(h-_)*A,r[10]=(1-(f+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Sr.set(r[0],r[1],r[2]).length();const o=Sr.set(r[4],r[5],r[6]).length(),a=Sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const u=1/s,c=1/o,d=1/a;return mn.elements[0]*=u,mn.elements[1]*=u,mn.elements[2]*=u,mn.elements[4]*=c,mn.elements[5]*=c,mn.elements[6]*=c,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,n.setFromRotationMatrix(mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),d=(n+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Sr=new k,mn=new vt,$v=new k(0,0,0),Yv=new k(1,1,1),ui=new k,Ho=new k,Gt=new k,ch=new vt,fh=new go;class vo{constructor(e=0,n=0,i=0,r=vo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}vo.DefaultOrder="XYZ";vo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ag{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zv=0;const dh=new k,Mr=new go,Vn=new vt,Xo=new k,As=new k,Kv=new k,Qv=new go,hh=new k(1,0,0),ph=new k(0,1,0),mh=new k(0,0,1),Jv={type:"added"},gh={type:"removed"};class $t extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DefaultUp.clone();const e=new k,n=new vo,i=new go,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new an}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=$t.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=$t.DefaultMatrixWorldAutoUpdate,this.layers=new ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,n){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xo.copy(e):Xo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(As,Xo,this.up):Vn.lookAt(Xo,As,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),Mr.setFromRotationMatrix(Vn),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(gh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Qv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DefaultUp=new k(0,1,0);$t.DefaultMatrixAutoUpdate=!0;$t.DefaultMatrixWorldAutoUpdate=!0;const gn=new k,Gn=new k,nu=new k,Wn=new k,wr=new k,Er=new k,_h=new k,iu=new k,ru=new k,su=new k;class qn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),gn.subVectors(e,n),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){gn.subVectors(r,n),Gn.subVectors(i,n),nu.subVectors(e,n);const o=gn.dot(gn),a=gn.dot(Gn),l=gn.dot(nu),u=Gn.dot(Gn),c=Gn.dot(nu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-g-x,x,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Wn),Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Wn),l.set(0,0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l}static isFrontFacing(e,n,i,r){return gn.subVectors(i,n),Gn.subVectors(e,n),gn.cross(Gn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),gn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return qn.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;wr.subVectors(r,i),Er.subVectors(s,i),iu.subVectors(e,i);const l=wr.dot(iu),u=Er.dot(iu);if(l<=0&&u<=0)return n.copy(i);ru.subVectors(e,r);const c=wr.dot(ru),d=Er.dot(ru);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(wr,o);su.subVectors(e,s);const g=wr.dot(su),x=Er.dot(su);if(x>=0&&g<=x)return n.copy(s);const m=g*u-l*x;if(m<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Er,a);const h=c*x-g*d;if(h<=0&&d-c>=0&&g-x>=0)return _h.subVectors(s,r),a=(d-c)/(d-c+(g-x)),n.copy(r).addScaledVector(_h,a);const p=1/(h+m+f);return o=m*p,a=f*p,n.copy(i).addScaledVector(wr,o).addScaledVector(Er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ex=0;class al extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=Kr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Km,this.blendDst=Qm,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wl,this.stencilZFail=Wl,this.stencilZPass=Wl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mf extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new k,jo=new Be;class Nn{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=sh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)jo.fromBufferAttribute(this,n),jo.applyMatrix3(e),this.setXY(n,jo.x,jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)tt.fromBufferAttribute(this,n),tt.applyMatrix3(e),this.setXYZ(n,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)tt.fromBufferAttribute(this,n),tt.applyMatrix4(e),this.setXYZ(n,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tt.fromBufferAttribute(this,n),tt.applyNormalMatrix(e),this.setXYZ(n,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tt.fromBufferAttribute(this,n),tt.transformDirection(e),this.setXYZ(n,tt.x,tt.y,tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ko(n,this.array)),n}setX(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ko(n,this.array)),n}setY(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ko(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ko(n,this.array)),n}setW(e,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Vt(n,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lg extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ug extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Fn extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let tx=0;const en=new vt,ou=new $t,Tr=new k,Wt=new _o,Ls=new _o,ct=new k;class Ni extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ng(e)?ug:lg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new an().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,n,i){return en.makeTranslation(e,n,i),this.applyMatrix4(en),this}scale(e,n,i){return en.makeScale(e,n,i),this.applyMatrix4(en),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(Wt.min,Ls.min),Wt.expandByPoint(ct),ct.addVectors(Wt.max,Ls.max),Wt.expandByPoint(ct)):(Wt.expandByPoint(Ls.min),Wt.expandByPoint(Ls.max))}Wt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ct.fromBufferAttribute(a,u),l&&(Tr.fromBufferAttribute(e,u),ct.add(Tr)),r=Math.max(r,i.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let D=0;D<a;D++)u[D]=new k,c[D]=new k;const d=new k,f=new k,g=new k,x=new Be,m=new Be,h=new Be,p=new k,_=new k;function v(D,$,ie){d.fromArray(r,D*3),f.fromArray(r,$*3),g.fromArray(r,ie*3),x.fromArray(o,D*2),m.fromArray(o,$*2),h.fromArray(o,ie*2),f.sub(d),g.sub(d),m.sub(x),h.sub(x);const U=1/(m.x*h.y-h.x*m.y);!isFinite(U)||(p.copy(f).multiplyScalar(h.y).addScaledVector(g,-m.y).multiplyScalar(U),_.copy(g).multiplyScalar(m.x).addScaledVector(f,-h.x).multiplyScalar(U),u[D].add(p),u[$].add(p),u[ie].add(p),c[D].add(_),c[$].add(_),c[ie].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let D=0,$=S.length;D<$;++D){const ie=S[D],U=ie.start,F=ie.count;for(let X=U,Z=U+F;X<Z;X+=3)v(i[X+0],i[X+1],i[X+2])}const M=new k,C=new k,A=new k,y=new k;function b(D){A.fromArray(s,D*3),y.copy(A);const $=u[D];M.copy($),M.sub(A.multiplyScalar(A.dot($))).normalize(),C.crossVectors(y,$);const U=C.dot(c[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=U}for(let D=0,$=S.length;D<$;++D){const ie=S[D],U=ie.start,F=ie.count;for(let X=U,Z=U+F;X<Z;X+=3)b(i[X+0]),b(i[X+1]),b(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,c=new k,d=new k;if(e)for(let f=0,g=e.count;f<g;f+=3){const x=e.getX(f+0),m=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),o.fromBufferAttribute(n,h),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)ct.fromBufferAttribute(e,n),ct.normalize(),e.setXYZ(n,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,x=0;for(let m=0,h=l.length;m<h;m++){a.isInterleavedBufferAttribute?g=l[m]*a.data.stride+a.offset:g=l[m]*c;for(let p=0;p<c;p++)f[x++]=u[g++]}return new Nn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ni,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const vh=new vt,Cr=new qv,au=new pf,ci=new k,fi=new k,di=new k,lu=new k,uu=new k,cu=new k,qo=new k,$o=new k,Yo=new k,Zo=new Be,Ko=new Be,Qo=new Be,fu=new k,Jo=new k;class Zn extends $t{constructor(e=new Ni,n=new mf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),au.copy(i.boundingSphere),au.applyMatrix4(s),e.ray.intersectsSphere(au)===!1)||(vh.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(vh),i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,d=i.attributes.uv,f=i.attributes.uv2,g=i.groups,x=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,h=g.length;m<h;m++){const p=g[m],_=r[p.materialIndex],v=Math.max(p.start,x.start),S=Math.min(a.count,Math.min(p.start+p.count,x.start+x.count));for(let M=v,C=S;M<C;M+=3){const A=a.getX(M),y=a.getX(M+1),b=a.getX(M+2);o=ea(this,_,e,Cr,l,u,c,d,f,A,y,b),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,n.push(o))}}else{const m=Math.max(0,x.start),h=Math.min(a.count,x.start+x.count);for(let p=m,_=h;p<_;p+=3){const v=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);o=ea(this,r,e,Cr,l,u,c,d,f,v,S,M),o&&(o.faceIndex=Math.floor(p/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,h=g.length;m<h;m++){const p=g[m],_=r[p.materialIndex],v=Math.max(p.start,x.start),S=Math.min(l.count,Math.min(p.start+p.count,x.start+x.count));for(let M=v,C=S;M<C;M+=3){const A=M,y=M+1,b=M+2;o=ea(this,_,e,Cr,l,u,c,d,f,A,y,b),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,n.push(o))}}else{const m=Math.max(0,x.start),h=Math.min(l.count,x.start+x.count);for(let p=m,_=h;p<_;p+=3){const v=p,S=p+1,M=p+2;o=ea(this,r,e,Cr,l,u,c,d,f,v,S,M),o&&(o.faceIndex=Math.floor(p/3),n.push(o))}}}}function nx(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==xi,a),l===null)return null;Jo.copy(a),Jo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Jo);return u<n.near||u>n.far?null:{distance:u,point:Jo.clone(),object:t}}function ea(t,e,n,i,r,s,o,a,l,u,c,d){ci.fromBufferAttribute(r,u),fi.fromBufferAttribute(r,c),di.fromBufferAttribute(r,d);const f=t.morphTargetInfluences;if(s&&f){qo.set(0,0,0),$o.set(0,0,0),Yo.set(0,0,0);for(let x=0,m=s.length;x<m;x++){const h=f[x],p=s[x];h!==0&&(lu.fromBufferAttribute(p,u),uu.fromBufferAttribute(p,c),cu.fromBufferAttribute(p,d),o?(qo.addScaledVector(lu,h),$o.addScaledVector(uu,h),Yo.addScaledVector(cu,h)):(qo.addScaledVector(lu.sub(ci),h),$o.addScaledVector(uu.sub(fi),h),Yo.addScaledVector(cu.sub(di),h)))}ci.add(qo),fi.add($o),di.add(Yo)}t.isSkinnedMesh&&(t.boneTransform(u,ci),t.boneTransform(c,fi),t.boneTransform(d,di));const g=nx(t,e,n,i,ci,fi,di,fu);if(g){a&&(Zo.fromBufferAttribute(a,u),Ko.fromBufferAttribute(a,c),Qo.fromBufferAttribute(a,d),g.uv=qn.getUV(fu,ci,fi,di,Zo,Ko,Qo,new Be)),l&&(Zo.fromBufferAttribute(l,u),Ko.fromBufferAttribute(l,c),Qo.fromBufferAttribute(l,d),g.uv2=qn.getUV(fu,ci,fi,di,Zo,Ko,Qo,new Be));const x={a:u,b:c,c:d,normal:new k,materialIndex:0};qn.getNormal(ci,fi,di,x.normal),g.face=x}return g}class xo extends Ni{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fn(u,3)),this.setAttribute("normal",new Fn(c,3)),this.setAttribute("uv",new Fn(d,2));function x(m,h,p,_,v,S,M,C,A,y,b){const D=S/A,$=M/y,ie=S/2,U=M/2,F=C/2,X=A+1,Z=y+1;let Q=0,R=0;const L=new k;for(let I=0;I<Z;I++){const q=I*$-U;for(let j=0;j<X;j++){const K=j*D-ie;L[m]=K*_,L[h]=q*v,L[p]=F,u.push(L.x,L.y,L.z),L[m]=0,L[h]=0,L[p]=C>0?1:-1,c.push(L.x,L.y,L.z),d.push(j/A),d.push(1-I/y),Q+=1}}for(let I=0;I<y;I++)for(let q=0;q<A;q++){const j=f+q+X*I,K=f+q+X*(I+1),oe=f+(q+1)+X*(I+1),ve=f+(q+1)+X*I;l.push(j,K,ve),l.push(K,oe,ve),R+=6}a.addGroup(g,R,b),g+=R,f+=Q}}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function At(t){const e={};for(let n=0;n<t.length;n++){const i=fs(t[n]);for(const r in i)e[r]=i[r]}return e}function ix(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}const rx={clone:fs,merge:At};var sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sx,this.fragmentShader=ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class cg extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends cg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ah*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ah*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const br=90,Ar=1;class ax extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new sn(br,Ar,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new k(1,0,0)),this.add(r);const s=new sn(br,Ar,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new k(-1,0,0)),this.add(s);const o=new sn(br,Ar,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new k(0,1,0)),this.add(o);const a=new sn(br,Ar,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new k(0,-1,0)),this.add(a);const l=new sn(br,Ar,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new k(0,0,1)),this.add(l);const u=new sn(br,Ar,e,n);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new k(0,0,-1)),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Qn,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class fg extends Tn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:ls,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lx extends ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xo(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ai});s.uniforms.tEquirect.value=n;const o=new Zn(r,s),a=n.minFilter;return n.minFilter===ol&&(n.minFilter=rn),new ax(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const du=new k,ux=new k,cx=new an;class Wi{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=du.subVectors(i,n).cross(ux.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cx.getNormalMatrix(e),r=this.coplanarPoint(du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new pf,ta=new k;class dg{constructor(e=new Wi,n=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],h=i[12],p=i[13],_=i[14],v=i[15];return n[0].setComponents(a-r,d-l,m-f,v-h).normalize(),n[1].setComponents(a+r,d+l,m+f,v+h).normalize(),n[2].setComponents(a+s,d+u,m+g,v+p).normalize(),n[3].setComponents(a-s,d-u,m-g,v-p).normalize(),n[4].setComponents(a-o,d-c,m-x,v-_).normalize(),n[5].setComponents(a+o,d+c,m+x,v+_).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ta.x=r.normal.x>0?e.max.x:e.min.x,ta.y=r.normal.y>0?e.max.y:e.min.y,ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function fx(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=t.createBuffer();t.bindBuffer(c,g),t.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;t.bindBuffer(d,u),g.count===-1?t.bufferSubData(d,0,f):(n?t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):t.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class gf extends Ni{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,g=[],x=[],m=[],h=[];for(let p=0;p<c;p++){const _=p*f-o;for(let v=0;v<u;v++){const S=v*d-s;x.push(S,-_,0),m.push(0,0,1),h.push(v/a),h.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const v=_+u*p,S=_+u*(p+1),M=_+1+u*(p+1),C=_+1+u*p;g.push(v,S,C),g.push(S,M,C)}this.setIndex(g),this.setAttribute("position",new Fn(x,3)),this.setAttribute("normal",new Fn(m,3)),this.setAttribute("uv",new Fn(h,2))}static fromJSON(e){return new gf(e.width,e.height,e.widthSegments,e.heightSegments)}}var dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vx="vec3 transformed = vec3( position );",xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Sx=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dx=`#define PI 3.141592653589793
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
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ix=`vec3 transformedNormal = objectNormal;
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
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
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
}`,Zx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,ey=`uniform bool receiveShadow;
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
#endif`,ty=`#if defined( USE_ENVMAP )
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
#endif`,ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iy=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,oy=`PhysicalMaterial material;
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
#endif`,ay=`struct PhysicalMaterial {
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
}`,ly=`
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,fy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,py=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,my=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ey=`#ifdef USE_MORPHTARGETS
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
#endif`,Ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Cy=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
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
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,By=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xy=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jy=`float getShadowMask() {
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
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tS=`#ifdef USE_TRANSMISSION
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
#endif`,nS=`#ifdef USE_TRANSMISSION
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
#endif`,iS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,rS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,oS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,aS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,lS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,uS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gS=`#include <common>
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
}`,_S=`#if DEPTH_PACKING == 3200
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
}`,vS=`#define DISTANCE
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
}`,xS=`#define DISTANCE
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,MS=`uniform float scale;
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
}`,wS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,TS=`uniform vec3 diffuse;
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
}`,CS=`#define LAMBERT
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
}`,bS=`#define LAMBERT
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
}`,AS=`#define MATCAP
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
}`,LS=`#define MATCAP
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
}`,PS=`#define NORMAL
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
}`,DS=`#define NORMAL
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
}`,RS=`#define PHONG
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
}`,IS=`#define PHONG
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
}`,NS=`#define STANDARD
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
}`,FS=`#define STANDARD
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
}`,zS=`#define TOON
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
}`,kS=`#define TOON
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
}`,US=`uniform float size;
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
}`,OS=`uniform vec3 diffuse;
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
}`,BS=`#include <common>
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
}`,VS=`uniform vec3 color;
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
}`,GS=`uniform float rotation;
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
}`,WS=`uniform vec3 diffuse;
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
}`,Ee={alphamap_fragment:dx,alphamap_pars_fragment:hx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:_x,begin_vertex:vx,beginnormal_vertex:xx,bsdfs:yx,iridescence_fragment:Sx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:wx,clipping_planes_pars_fragment:Ex,clipping_planes_pars_vertex:Tx,clipping_planes_vertex:Cx,color_fragment:bx,color_pars_fragment:Ax,color_pars_vertex:Lx,color_vertex:Px,common:Dx,cube_uv_reflection_fragment:Rx,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Nx,displacementmap_vertex:Fx,emissivemap_fragment:zx,emissivemap_pars_fragment:kx,encodings_fragment:Ux,encodings_pars_fragment:Ox,envmap_fragment:Bx,envmap_common_pars_fragment:Vx,envmap_pars_fragment:Gx,envmap_pars_vertex:Wx,envmap_physical_pars_fragment:ty,envmap_vertex:Hx,fog_vertex:Xx,fog_pars_vertex:jx,fog_fragment:qx,fog_pars_fragment:$x,gradientmap_pars_fragment:Yx,lightmap_fragment:Zx,lightmap_pars_fragment:Kx,lights_lambert_fragment:Qx,lights_lambert_pars_fragment:Jx,lights_pars_begin:ey,lights_toon_fragment:ny,lights_toon_pars_fragment:iy,lights_phong_fragment:ry,lights_phong_pars_fragment:sy,lights_physical_fragment:oy,lights_physical_pars_fragment:ay,lights_fragment_begin:ly,lights_fragment_maps:uy,lights_fragment_end:cy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:dy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:py,map_fragment:my,map_pars_fragment:gy,map_particle_fragment:_y,map_particle_pars_fragment:vy,metalnessmap_fragment:xy,metalnessmap_pars_fragment:yy,morphcolor_vertex:Sy,morphnormal_vertex:My,morphtarget_pars_vertex:wy,morphtarget_vertex:Ey,normal_fragment_begin:Ty,normal_fragment_maps:Cy,normal_pars_fragment:by,normal_pars_vertex:Ay,normal_vertex:Ly,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Ny,output_fragment:Fy,packing:zy,premultiplied_alpha_fragment:ky,project_vertex:Uy,dithering_fragment:Oy,dithering_pars_fragment:By,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Hy,shadowmap_vertex:Xy,shadowmask_pars_fragment:jy,skinbase_vertex:qy,skinning_pars_vertex:$y,skinning_vertex:Yy,skinnormal_vertex:Zy,specularmap_fragment:Ky,specularmap_pars_fragment:Qy,tonemapping_fragment:Jy,tonemapping_pars_fragment:eS,transmission_fragment:tS,transmission_pars_fragment:nS,uv_pars_fragment:iS,uv_pars_vertex:rS,uv_vertex:sS,uv2_pars_fragment:oS,uv2_pars_vertex:aS,uv2_vertex:lS,worldpos_vertex:uS,background_vert:cS,background_frag:fS,backgroundCube_vert:dS,backgroundCube_frag:hS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:_S,distanceRGBA_vert:vS,distanceRGBA_frag:xS,equirect_vert:yS,equirect_frag:SS,linedashed_vert:MS,linedashed_frag:wS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:CS,meshlambert_frag:bS,meshmatcap_vert:AS,meshmatcap_frag:LS,meshnormal_vert:PS,meshnormal_frag:DS,meshphong_vert:RS,meshphong_frag:IS,meshphysical_vert:NS,meshphysical_frag:FS,meshtoon_vert:zS,meshtoon_frag:kS,points_vert:US,points_frag:OS,shadow_vert:BS,shadow_frag:VS,sprite_vert:GS,sprite_frag:WS},ne={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new an},uv2Transform:{value:new an},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new an}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new an}}},Pn={basic:{uniforms:At([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:At([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:At([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:At([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:At([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:At([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:At([ne.points,ne.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:At([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:At([ne.common,ne.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:At([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:At([ne.sprite,ne.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new an},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:At([ne.common,ne.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:At([ne.lights,ne.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Pn.physical={uniforms:At([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function HS(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,c,d=null,f=0,g=null;function x(h,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?n:e).get(v));const S=t.xr,M=S.getSession&&S.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?m(a,l):v&&v.isColor&&(m(v,1),_=!0),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===sl)?(c===void 0&&(c=new Zn(new xo(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:fs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,(d!==v||f!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,g=t.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Zn(new gf(2,2),new cr({name:"BackgroundMaterial",uniforms:fs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,g=t.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function m(h,p){i.buffers.color.setClear(h.r,h.g,h.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(h,p=1){a.set(h),l=p,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,m(a,l)},render:x}}function XS(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function d(F,X,Z,Q,R){let L=!1;if(o){const I=m(Q,Z,X);u!==I&&(u=I,g(u.object)),L=p(F,Q,Z,R),L&&_(F,Q,Z,R)}else{const I=X.wireframe===!0;(u.geometry!==Q.id||u.program!==Z.id||u.wireframe!==I)&&(u.geometry=Q.id,u.program=Z.id,u.wireframe=I,L=!0)}R!==null&&n.update(R,34963),(L||c)&&(c=!1,y(F,X,Z,Q),R!==null&&t.bindBuffer(34963,n.get(R).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(F){return i.isWebGL2?t.bindVertexArray(F):s.bindVertexArrayOES(F)}function x(F){return i.isWebGL2?t.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function m(F,X,Z){const Q=Z.wireframe===!0;let R=a[F.id];R===void 0&&(R={},a[F.id]=R);let L=R[X.id];L===void 0&&(L={},R[X.id]=L);let I=L[Q];return I===void 0&&(I=h(f()),L[Q]=I),I}function h(F){const X=[],Z=[],Q=[];for(let R=0;R<r;R++)X[R]=0,Z[R]=0,Q[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:Q,object:F,attributes:{},index:null}}function p(F,X,Z,Q){const R=u.attributes,L=X.attributes;let I=0;const q=Z.getAttributes();for(const j in q)if(q[j].location>=0){const oe=R[j];let ve=L[j];if(ve===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(ve=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(ve=F.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;I++}return u.attributesNum!==I||u.index!==Q}function _(F,X,Z,Q){const R={},L=X.attributes;let I=0;const q=Z.getAttributes();for(const j in q)if(q[j].location>=0){let oe=L[j];oe===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor));const ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),R[j]=ve,I++}u.attributes=R,u.attributesNum=I,u.index=Q}function v(){const F=u.newAttributes;for(let X=0,Z=F.length;X<Z;X++)F[X]=0}function S(F){M(F,0)}function M(F,X){const Z=u.newAttributes,Q=u.enabledAttributes,R=u.attributeDivisors;Z[F]=1,Q[F]===0&&(t.enableVertexAttribArray(F),Q[F]=1),R[F]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,X),R[F]=X)}function C(){const F=u.newAttributes,X=u.enabledAttributes;for(let Z=0,Q=X.length;Z<Q;Z++)X[Z]!==F[Z]&&(t.disableVertexAttribArray(Z),X[Z]=0)}function A(F,X,Z,Q,R,L){i.isWebGL2===!0&&(Z===5124||Z===5125)?t.vertexAttribIPointer(F,X,Z,R,L):t.vertexAttribPointer(F,X,Z,Q,R,L)}function y(F,X,Z,Q){if(i.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const R=Q.attributes,L=Z.getAttributes(),I=X.defaultAttributeValues;for(const q in L){const j=L[q];if(j.location>=0){let K=R[q];if(K===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(K=F.instanceColor)),K!==void 0){const oe=K.normalized,ve=K.itemSize,G=n.get(K);if(G===void 0)continue;const Le=G.buffer,xe=G.type,Me=G.bytesPerElement;if(K.isInterleavedBufferAttribute){const ue=K.data,Ue=ue.stride,Ce=K.offset;if(ue.isInstancedInterleavedBuffer){for(let ge=0;ge<j.locationSize;ge++)M(j.location+ge,ue.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<j.locationSize;ge++)S(j.location+ge);t.bindBuffer(34962,Le);for(let ge=0;ge<j.locationSize;ge++)A(j.location+ge,ve/j.locationSize,xe,oe,Ue*Me,(Ce+ve/j.locationSize*ge)*Me)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<j.locationSize;ue++)M(j.location+ue,K.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<j.locationSize;ue++)S(j.location+ue);t.bindBuffer(34962,Le);for(let ue=0;ue<j.locationSize;ue++)A(j.location+ue,ve/j.locationSize,xe,oe,ve*Me,ve/j.locationSize*ue*Me)}}else if(I!==void 0){const oe=I[q];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(j.location,oe);break;case 3:t.vertexAttrib3fv(j.location,oe);break;case 4:t.vertexAttrib4fv(j.location,oe);break;default:t.vertexAttrib1fv(j.location,oe)}}}}C()}function b(){ie();for(const F in a){const X=a[F];for(const Z in X){const Q=X[Z];for(const R in Q)x(Q[R].object),delete Q[R];delete X[Z]}delete a[F]}}function D(F){if(a[F.id]===void 0)return;const X=a[F.id];for(const Z in X){const Q=X[Z];for(const R in Q)x(Q[R].object),delete Q[R];delete X[Z]}delete a[F.id]}function $(F){for(const X in a){const Z=a[X];if(Z[F.id]===void 0)continue;const Q=Z[F.id];for(const R in Q)x(Q[R].object),delete Q[R];delete Z[F.id]}}function ie(){U(),c=!0,u!==l&&(u=l,g(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ie,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function jS(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=t,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),n.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function qS(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(34930),f=t.getParameter(35660),g=t.getParameter(3379),x=t.getParameter(34076),m=t.getParameter(34921),h=t.getParameter(36347),p=t.getParameter(36348),_=t.getParameter(36349),v=f>0,S=o||e.has("OES_texture_float"),M=v&&S,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:h,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:C}}function $S(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Wi,a=new an,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,g){const x=d.length!==0||f||i!==0||r;return r=f,n=c(d,g,0),i=d.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,f,g){const x=d.clippingPlanes,m=d.clipIntersection,h=d.clipShadows,p=t.get(d);if(!r||x===null||x.length===0||s&&!h)s?c(null):u();else{const _=s?0:i,v=_*4;let S=p.clippingState||null;l.value=S,S=c(x,f,v,g);for(let M=0;M!==v;++M)S[M]=n[M];p.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,x){const m=d!==null?d.length:0;let h=null;if(m!==0){if(h=l.value,x!==!0||h===null){const p=g+m*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(h===null||h.length<p)&&(h=new Float32Array(p));for(let v=0,S=g;v!==m;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,h}}function YS(t){let e=new WeakMap;function n(o,a){return a===fc?o.mapping=ls:a===dc&&(o.mapping=us),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===fc||a===dc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new lx(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ZS extends cg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Hr=4,xh=[.125,.215,.35,.446,.526,.582],Xi=20,hu=new ZS,yh=new qe;let pu=null;const Hi=(1+Math.sqrt(5))/2,Pr=1/Hi,Sh=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Hi,Pr),new k(0,Hi,-Pr),new k(Pr,0,Hi),new k(-Pr,0,Hi),new k(Hi,Pr,0),new k(-Hi,Pr,0)];class Mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){pu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pu),e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ls||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:lo,format:Sn,encoding:lr,depthBuffer:!1},r=wh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KS(s)),this._blurMaterial=QS(s,e,n)}return r}_compileMaterial(e){const n=new Zn(this._lodPlanes[0],e);this._renderer.compile(n,hu)}_sceneToCubeUV(e,n,i,r){const a=new sn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(yh),c.toneMapping=Qn,c.autoClear=!1;const g=new mf({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),x=new Zn(new xo,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(yh),m=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const v=this._cubeSize;na(r,_*v,p>2?v:0,v,v),c.setRenderTarget(r),m&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ls||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;na(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,hu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sh[(r-1)%Sh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Zn(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Xi-1),m=s/x,h=isFinite(s)?1+Math.floor(c*m):Xi;h>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Xi}`);const p=[];let _=0;for(let A=0;A<Xi;++A){const y=A/m,b=Math.exp(-y*y/2);p.push(b),A===0?_+=b:A<h&&(_+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const S=this._sizeLods[r],M=3*S*(r>v-Hr?r-v+Hr:0),C=4*(this._cubeSize-S);na(n,M,C,3*S,2*S),l.setRenderTarget(n),l.render(d,hu)}}function KS(t){const e=[],n=[],i=[];let r=t;const s=t-Hr+1+xh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Hr?l=xh[o-t+Hr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,x=6,m=3,h=2,p=1,_=new Float32Array(m*x*g),v=new Float32Array(h*x*g),S=new Float32Array(p*x*g);for(let C=0;C<g;C++){const A=C%3*2/3-1,y=C>2?0:-1,b=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];_.set(b,m*x*C),v.set(f,h*x*C);const D=[C,C,C,C,C,C];S.set(D,p*x*C)}const M=new Ni;M.setAttribute("position",new Nn(_,m)),M.setAttribute("uv",new Nn(v,h)),M.setAttribute("faceIndex",new Nn(S,p)),e.push(M),r>Hr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function wh(t,e,n){const i=new ur(t,e,n);return i.texture.mapping=sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function na(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function QS(t,e,n){const i=new Float32Array(Xi),r=new k(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Eh(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Th(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function _f(){return`

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
	`}function JS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===fc||l===dc,c=l===ls||l===us;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Mh(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new Mh(t));const f=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function e1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function t1(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const g=d.morphAttributes;for(const x in g){const m=g[x];for(let h=0,p=m.length;h<p;h++)e.update(m[h],34962)}}function u(d){const f=[],g=d.index,x=d.attributes.position;let m=0;if(g!==null){const _=g.array;m=g.version;for(let v=0,S=_.length;v<S;v+=3){const M=_[v+0],C=_[v+1],A=_[v+2];f.push(M,C,C,A,A,M)}}else{const _=x.array;m=x.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const M=v+0,C=v+1,A=v+2;f.push(M,C,C,A,A,M)}}const h=new(ng(f)?ug:lg)(f,1);h.version=m;const p=s.get(d);p&&e.remove(p),s.set(d,h)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function n1(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){t.drawElements(s,g,a,f*l),n.update(g,s,1)}function d(f,g,x){if(x===0)return;let m,h;if(r)m=t,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,f*l,x),n.update(g,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function i1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function r1(t,e){return t[0]-e[0]}function s1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function o1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new gt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=m!==void 0?m.length:0;let p=s.get(c);if(p===void 0||p.count!==h){let Z=function(){F.dispose(),s.delete(c),c.removeEventListener("dispose",Z)};var x=Z;p!==void 0&&p.texture.dispose();const S=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let D=0;S===!0&&(D=1),M===!0&&(D=2),C===!0&&(D=3);let $=c.attributes.position.count*D,ie=1;$>e.maxTextureSize&&(ie=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const U=new Float32Array($*ie*4*h),F=new og(U,$,ie,h);F.type=Zi,F.needsUpdate=!0;const X=D*4;for(let Q=0;Q<h;Q++){const R=A[Q],L=y[Q],I=b[Q],q=$*ie*4*Q;for(let j=0;j<R.count;j++){const K=j*X;S===!0&&(o.fromBufferAttribute(R,j),U[q+K+0]=o.x,U[q+K+1]=o.y,U[q+K+2]=o.z,U[q+K+3]=0),M===!0&&(o.fromBufferAttribute(L,j),U[q+K+4]=o.x,U[q+K+5]=o.y,U[q+K+6]=o.z,U[q+K+7]=0),C===!0&&(o.fromBufferAttribute(I,j),U[q+K+8]=o.x,U[q+K+9]=o.y,U[q+K+10]=o.z,U[q+K+11]=I.itemSize===4?o.w:1)}}p={count:h,texture:F,size:new Be($,ie)},s.set(c,p),c.addEventListener("dispose",Z)}let _=0;for(let S=0;S<g.length;S++)_+=g[S];const v=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",g),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const m=g===void 0?0:g.length;let h=i[c.id];if(h===void 0||h.length!==m){h=[];for(let M=0;M<m;M++)h[M]=[M,0];i[c.id]=h}for(let M=0;M<m;M++){const C=h[M];C[0]=M,C[1]=g[M]}h.sort(s1);for(let M=0;M<8;M++)M<m&&h[M][1]?(a[M][0]=h[M][0],a[M][1]=h[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(r1);const p=c.morphAttributes.position,_=c.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const C=a[M],A=C[0],y=C[1];A!==Number.MAX_SAFE_INTEGER&&y?(p&&c.getAttribute("morphTarget"+M)!==p[A]&&c.setAttribute("morphTarget"+M,p[A]),_&&c.getAttribute("morphNormal"+M)!==_[A]&&c.setAttribute("morphNormal"+M,_[A]),r[M]=y,v+=y):(p&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),_&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const S=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",S),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function a1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const pg=new Tn,mg=new og,gg=new Xv,_g=new fg,Ch=[],bh=[],Ah=new Float32Array(16),Lh=new Float32Array(9),Ph=new Float32Array(4);function gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ch[r];if(s===void 0&&(s=new Float32Array(r),Ch[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function at(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ll(t,e){let n=bh[e];n===void 0&&(n=new Int32Array(e),bh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function l1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function u1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ot(n,e))return;t.uniform2fv(this.addr,e),at(n,e)}}function c1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ot(n,e))return;t.uniform3fv(this.addr,e),at(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ot(n,e))return;t.uniform4fv(this.addr,e),at(n,e)}}function d1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),at(n,e)}else{if(ot(n,i))return;Ph.set(i),t.uniformMatrix2fv(this.addr,!1,Ph),at(n,i)}}function h1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),at(n,e)}else{if(ot(n,i))return;Lh.set(i),t.uniformMatrix3fv(this.addr,!1,Lh),at(n,i)}}function p1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),at(n,e)}else{if(ot(n,i))return;Ah.set(i),t.uniformMatrix4fv(this.addr,!1,Ah),at(n,i)}}function m1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function g1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ot(n,e))return;t.uniform2iv(this.addr,e),at(n,e)}}function _1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ot(n,e))return;t.uniform3iv(this.addr,e),at(n,e)}}function v1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ot(n,e))return;t.uniform4iv(this.addr,e),at(n,e)}}function x1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ot(n,e))return;t.uniform2uiv(this.addr,e),at(n,e)}}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ot(n,e))return;t.uniform3uiv(this.addr,e),at(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ot(n,e))return;t.uniform4uiv(this.addr,e),at(n,e)}}function w1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||pg,r)}function E1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||gg,r)}function T1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||_g,r)}function C1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||mg,r)}function b1(t){switch(t){case 5126:return l1;case 35664:return u1;case 35665:return c1;case 35666:return f1;case 35674:return d1;case 35675:return h1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return _1;case 35669:case 35673:return v1;case 5125:return x1;case 36294:return y1;case 36295:return S1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return C1}}function A1(t,e){t.uniform1fv(this.addr,e)}function L1(t,e){const n=gs(e,this.size,2);t.uniform2fv(this.addr,n)}function P1(t,e){const n=gs(e,this.size,3);t.uniform3fv(this.addr,n)}function D1(t,e){const n=gs(e,this.size,4);t.uniform4fv(this.addr,n)}function R1(t,e){const n=gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function I1(t,e){const n=gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function N1(t,e){const n=gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function F1(t,e){t.uniform1iv(this.addr,e)}function z1(t,e){t.uniform2iv(this.addr,e)}function k1(t,e){t.uniform3iv(this.addr,e)}function U1(t,e){t.uniform4iv(this.addr,e)}function O1(t,e){t.uniform1uiv(this.addr,e)}function B1(t,e){t.uniform2uiv(this.addr,e)}function V1(t,e){t.uniform3uiv(this.addr,e)}function G1(t,e){t.uniform4uiv(this.addr,e)}function W1(t,e,n){const i=this.cache,r=e.length,s=ll(n,r);ot(i,s)||(t.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||pg,s[o])}function H1(t,e,n){const i=this.cache,r=e.length,s=ll(n,r);ot(i,s)||(t.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||gg,s[o])}function X1(t,e,n){const i=this.cache,r=e.length,s=ll(n,r);ot(i,s)||(t.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||_g,s[o])}function j1(t,e,n){const i=this.cache,r=e.length,s=ll(n,r);ot(i,s)||(t.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||mg,s[o])}function q1(t){switch(t){case 5126:return A1;case 35664:return L1;case 35665:return P1;case 35666:return D1;case 35674:return R1;case 35675:return I1;case 35676:return N1;case 5124:case 35670:return F1;case 35667:case 35671:return z1;case 35668:case 35672:return k1;case 35669:case 35673:return U1;case 5125:return O1;case 36294:return B1;case 36295:return V1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return j1}}class $1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=b1(n.type)}}class Y1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=q1(n.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function Dh(t,e){t.seq.push(e),t.map[e.id]=e}function K1(t,e,n){const i=t.name,r=i.length;for(mu.lastIndex=0;;){const s=mu.exec(i),o=mu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Dh(n,u===void 0?new $1(a,t,e):new Y1(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new Z1(a),Dh(n,d)),n=d}}}class _a{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);K1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Rh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let Q1=0;function J1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function eM(t){switch(t){case lr:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Ih(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+J1(t.getShaderSource(e),o)}else return r}function tM(t,e){const n=eM(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function nM(t,e){let n;switch(e){case _v:n="Linear";break;case vv:n="Reinhard";break;case xv:n="OptimizedCineon";break;case yv:n="ACESFilmic";break;case Sv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function iM(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fs).join(`
`)}function rM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sM(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Fs(t){return t!==""}function Nh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(t){return t.replace(oM,aM)}function aM(t,e){const n=Ee[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return _c(n)}const lM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(t){return t.replace(lM,uM)}function uM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kh(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Y_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ns&&(e="SHADOWMAP_TYPE_VSM"),e}function fM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ls:case us:e="ENVMAP_TYPE_CUBE";break;case sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function hM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jm:e="ENVMAP_BLENDING_MULTIPLY";break;case mv:e="ENVMAP_BLENDING_MIX";break;case gv:e="ENVMAP_BLENDING_ADD";break}return e}function pM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function mM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=cM(n),u=fM(n),c=dM(n),d=hM(n),f=pM(n),g=n.isWebGL2?"":iM(n),x=rM(s),m=r.createProgram();let h,p,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=[x].filter(Fs).join(`
`),h.length>0&&(h+=`
`),p=[g,x].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(h=[kh(n),"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[g,kh(n),"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qn?"#define TONE_MAPPING":"",n.toneMapping!==Qn?Ee.tonemapping_pars_fragment:"",n.toneMapping!==Qn?nM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,tM("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fs).join(`
`)),o=_c(o),o=Nh(o,n),o=Fh(o,n),a=_c(a),a=Nh(a,n),a=Fh(a,n),o=zh(o),a=zh(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,p=["#define varying in",n.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=_+h+o,S=_+p+a,M=Rh(r,35633,v),C=Rh(r,35632,S);if(r.attachShader(m,M),r.attachShader(m,C),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),t.debug.checkShaderErrors){const b=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(M).trim(),$=r.getShaderInfoLog(C).trim();let ie=!0,U=!0;if(r.getProgramParameter(m,35714)===!1){ie=!1;const F=Ih(r,M,"vertex"),X=Ih(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+b+`
`+F+`
`+X)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(D===""||$==="")&&(U=!1);U&&(this.diagnostics={runnable:ie,programLog:b,vertexShader:{log:D,prefix:h},fragmentShader:{log:$,prefix:p}})}r.deleteShader(M),r.deleteShader(C);let A;this.getUniforms=function(){return A===void 0&&(A=new _a(r,m)),A};let y;return this.getAttributes=function(){return y===void 0&&(y=sM(r,m)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=n.shaderName,this.id=Q1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=C,this}let gM=0;class _M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vM(e),n.set(e,i)),i}}class vM{constructor(e){this.id=gM++,this.code=e,this.usedTimes=0}}function xM(t,e,n,i,r,s,o){const a=new ag,l=new _M,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,b,D,$,ie){const U=$.fog,F=ie.geometry,X=y.isMeshStandardMaterial?$.environment:null,Z=(y.isMeshStandardMaterial?n:e).get(y.envMap||X),Q=!!Z&&Z.mapping===sl?Z.image.height:null,R=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const L=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,I=L!==void 0?L.length:0;let q=0;F.morphAttributes.position!==void 0&&(q=1),F.morphAttributes.normal!==void 0&&(q=2),F.morphAttributes.color!==void 0&&(q=3);let j,K,oe,ve;if(R){const Ue=Pn[R];j=Ue.vertexShader,K=Ue.fragmentShader}else j=y.vertexShader,K=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),ve=l.getFragmentShaderID(y);const G=t.getRenderTarget(),Le=y.alphaTest>0,xe=y.clearcoat>0,Me=y.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:y.type,vertexShader:j,fragmentShader:K,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:ie.isInstancedMesh===!0,instancingColor:ie.isInstancedMesh===!0&&ie.instanceColor!==null,supportsVertexTextures:f,outputEncoding:G===null?t.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:lr,map:!!y.map,matcap:!!y.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:Q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Vv,tangentSpaceNormalMap:y.normalMapType===Bv,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ke,clearcoat:xe,clearcoatMap:xe&&!!y.clearcoatMap,clearcoatRoughnessMap:xe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!y.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!y.iridescenceMap,iridescenceThicknessMap:Me&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Kr,alphaMap:!!y.alphaMap,alphaTest:Le,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!F.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:Qn,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xi,flipSided:y.side===un,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)b.push(D),b.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(p(b,y),_(b,y),b.push(t.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function _(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.physicallyCorrectLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.specularIntensityMap&&a.enable(15),b.specularColorMap&&a.enable(16),b.transmission&&a.enable(17),b.transmissionMap&&a.enable(18),b.thicknessMap&&a.enable(19),b.sheen&&a.enable(20),b.sheenColorMap&&a.enable(21),b.sheenRoughnessMap&&a.enable(22),b.decodeVideoTexture&&a.enable(23),b.opaque&&a.enable(24),y.push(a.mask)}function v(y){const b=x[y.type];let D;if(b){const $=Pn[b];D=rx.clone($.uniforms)}else D=y.uniforms;return D}function S(y,b){let D;for(let $=0,ie=u.length;$<ie;$++){const U=u[$];if(U.cacheKey===b){D=U,++D.usedTimes;break}}return D===void 0&&(D=new mM(t,b,y,s),u.push(D)),D}function M(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:C,programs:u,dispose:A}}function yM(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function SM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Uh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Oh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,g,x,m,h){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:g,groupOrder:x,renderOrder:d.renderOrder,z:m,group:h},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=g,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=m,p.group=h),e++,p}function a(d,f,g,x,m,h){const p=o(d,f,g,x,m,h);g.transmission>0?i.push(p):g.transparent===!0?r.push(p):n.push(p)}function l(d,f,g,x,m,h){const p=o(d,f,g,x,m,h);g.transmission>0?i.unshift(p):g.transparent===!0?r.unshift(p):n.unshift(p)}function u(d,f){n.length>1&&n.sort(d||SM),i.length>1&&i.sort(f||Uh),r.length>1&&r.sort(f||Uh)}function c(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function MM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Oh,t.set(i,[o])):r>=s.length?(o=new Oh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function wM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new qe};break;case"SpotLight":n={position:new k,direction:new k,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function EM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let TM=0;function CM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function bM(t,e){const n=new wM,i=EM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new k);const s=new k,o=new vt,a=new vt;function l(c,d){let f=0,g=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let m=0,h=0,p=0,_=0,v=0,S=0,M=0,C=0,A=0,y=0;c.sort(CM);const b=d!==!0?Math.PI:1;for(let $=0,ie=c.length;$<ie;$++){const U=c[$],F=U.color,X=U.intensity,Z=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=F.r*X*b,g+=F.g*X*b,x+=F.b*X*b;else if(U.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(U.sh.coefficients[R],X);else if(U.isDirectionalLight){const R=n.get(U);if(R.color.copy(U.color).multiplyScalar(U.intensity*b),U.castShadow){const L=U.shadow,I=i.get(U);I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,r.directionalShadow[m]=I,r.directionalShadowMap[m]=Q,r.directionalShadowMatrix[m]=U.shadow.matrix,S++}r.directional[m]=R,m++}else if(U.isSpotLight){const R=n.get(U);R.position.setFromMatrixPosition(U.matrixWorld),R.color.copy(F).multiplyScalar(X*b),R.distance=Z,R.coneCos=Math.cos(U.angle),R.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),R.decay=U.decay,r.spot[p]=R;const L=U.shadow;if(U.map&&(r.spotLightMap[A]=U.map,A++,L.updateMatrices(U),U.castShadow&&y++),r.spotLightMatrix[p]=L.matrix,U.castShadow){const I=i.get(U);I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,r.spotShadow[p]=I,r.spotShadowMap[p]=Q,C++}p++}else if(U.isRectAreaLight){const R=n.get(U);R.color.copy(F).multiplyScalar(X),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),r.rectArea[_]=R,_++}else if(U.isPointLight){const R=n.get(U);if(R.color.copy(U.color).multiplyScalar(U.intensity*b),R.distance=U.distance,R.decay=U.decay,U.castShadow){const L=U.shadow,I=i.get(U);I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,I.shadowCameraNear=L.camera.near,I.shadowCameraFar=L.camera.far,r.pointShadow[h]=I,r.pointShadowMap[h]=Q,r.pointShadowMatrix[h]=U.shadow.matrix,M++}r.point[h]=R,h++}else if(U.isHemisphereLight){const R=n.get(U);R.skyColor.copy(U.color).multiplyScalar(X*b),R.groundColor.copy(U.groundColor).multiplyScalar(X*b),r.hemi[v]=R,v++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=x;const D=r.hash;(D.directionalLength!==m||D.pointLength!==h||D.spotLength!==p||D.rectAreaLength!==_||D.hemiLength!==v||D.numDirectionalShadows!==S||D.numPointShadows!==M||D.numSpotShadows!==C||D.numSpotMaps!==A)&&(r.directional.length=m,r.spot.length=p,r.rectArea.length=_,r.point.length=h,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=C+A-y,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=y,D.directionalLength=m,D.pointLength=h,D.spotLength=p,D.rectAreaLength=_,D.hemiLength=v,D.numDirectionalShadows=S,D.numPointShadows=M,D.numSpotShadows=C,D.numSpotMaps=A,r.version=TM++)}function u(c,d){let f=0,g=0,x=0,m=0,h=0;const p=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const S=c[_];if(S.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(S.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),x++}else if(S.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),g++}else if(S.isHemisphereLight){const M=r.hemi[h];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),h++}}}return{setup:l,setupView:u,state:r}}function Bh(t,e){const n=new bM(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function AM(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Bh(t,e),n.set(s,[l])):o>=a.length?(l=new Bh(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class LM extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PM extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RM=`uniform sampler2D shadow_pass;
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
}`;function IM(t,e,n){let i=new dg;const r=new Be,s=new Be,o=new gt,a=new LM({depthPacking:Ov}),l=new PM,u={},c=n.maxTextureSize,d={0:un,1:as,2:xi},f=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:DM,fragmentShader:RM}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new Ni;x.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Zn(x,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zm,this.render=function(S,M,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const A=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Ai),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let $=0,ie=S.length;$<ie;$++){const U=S[$],F=U.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const X=F.getFrameExtents();if(r.multiply(X),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,F.mapSize.y=s.y)),F.map===null){const Q=this.type!==Ns?{minFilter:Ft,magFilter:Ft}:{};F.map=new ur(r.x,r.y,Q),F.map.texture.name=U.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const Z=F.getViewportCount();for(let Q=0;Q<Z;Q++){const R=F.getViewport(Q);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),D.viewport(o),F.updateMatrices(U,Q),i=F.getFrustum(),v(M,C,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===Ns&&p(F,C),F.needsUpdate=!1}h.needsUpdate=!1,t.setRenderTarget(A,y,b)};function p(S,M){const C=e.update(m);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ur(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(M,null,C,f,m,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(M,null,C,g,m,null)}function _(S,M,C,A,y,b){let D=null;const $=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if($!==void 0?D=$:D=C.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const ie=D.uuid,U=M.uuid;let F=u[ie];F===void 0&&(F={},u[ie]=F);let X=F[U];X===void 0&&(X=D.clone(),F[U]=X),D=X}return D.visible=M.visible,D.wireframe=M.wireframe,b===Ns?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:d[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,C.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(C.matrixWorld),D.nearDistance=A,D.farDistance=y),D}function v(S,M,C,A,y){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Ns)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const $=e.update(S),ie=S.material;if(Array.isArray(ie)){const U=$.groups;for(let F=0,X=U.length;F<X;F++){const Z=U[F],Q=ie[Z.materialIndex];if(Q&&Q.visible){const R=_(S,Q,A,C.near,C.far,y);t.renderBufferDirect(C,null,$,R,S,Z)}}}else if(ie.visible){const U=_(S,ie,A,C.near,C.far,y);t.renderBufferDirect(C,null,$,U,S,null)}}const D=S.children;for(let $=0,ie=D.length;$<ie;$++)v(D[$],M,C,A,y)}}function NM(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const V=new gt;let J=null;const ae=new gt(0,0,0,0);return{setMask:function(fe){J!==fe&&!P&&(t.colorMask(fe,fe,fe,fe),J=fe)},setLocked:function(fe){P=fe},setClear:function(fe,Ie,ut,yt,Fi){Fi===!0&&(fe*=yt,Ie*=yt,ut*=yt),V.set(fe,Ie,ut,yt),ae.equals(V)===!1&&(t.clearColor(fe,Ie,ut,yt),ae.copy(V))},reset:function(){P=!1,J=null,ae.set(-1,0,0,0)}}}function s(){let P=!1,V=null,J=null,ae=null;return{setTest:function(fe){fe?Le(2929):xe(2929)},setMask:function(fe){V!==fe&&!P&&(t.depthMask(fe),V=fe)},setFunc:function(fe){if(J!==fe){switch(fe){case lv:t.depthFunc(512);break;case uv:t.depthFunc(519);break;case cv:t.depthFunc(513);break;case cc:t.depthFunc(515);break;case fv:t.depthFunc(514);break;case dv:t.depthFunc(518);break;case hv:t.depthFunc(516);break;case pv:t.depthFunc(517);break;default:t.depthFunc(515)}J=fe}},setLocked:function(fe){P=fe},setClear:function(fe){ae!==fe&&(t.clearDepth(fe),ae=fe)},reset:function(){P=!1,V=null,J=null,ae=null}}}function o(){let P=!1,V=null,J=null,ae=null,fe=null,Ie=null,ut=null,yt=null,Fi=null;return{setTest:function(He){P||(He?Le(2960):xe(2960))},setMask:function(He){V!==He&&!P&&(t.stencilMask(He),V=He)},setFunc:function(He,Un,Qt){(J!==He||ae!==Un||fe!==Qt)&&(t.stencilFunc(He,Un,Qt),J=He,ae=Un,fe=Qt)},setOp:function(He,Un,Qt){(Ie!==He||ut!==Un||yt!==Qt)&&(t.stencilOp(He,Un,Qt),Ie=He,ut=Un,yt=Qt)},setLocked:function(He){P=He},setClear:function(He){Fi!==He&&(t.clearStencil(He),Fi=He)},reset:function(){P=!1,V=null,J=null,ae=null,fe=null,Ie=null,ut=null,yt=null,Fi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},g={},x=new WeakMap,m=[],h=null,p=!1,_=null,v=null,S=null,M=null,C=null,A=null,y=null,b=!1,D=null,$=null,ie=null,U=null,F=null;const X=t.getParameter(35661);let Z=!1,Q=0;const R=t.getParameter(7938);R.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(R)[1]),Z=Q>=1):R.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),Z=Q>=2);let L=null,I={};const q=t.getParameter(3088),j=t.getParameter(2978),K=new gt().fromArray(q),oe=new gt().fromArray(j);function ve(P,V,J){const ae=new Uint8Array(4),fe=t.createTexture();t.bindTexture(P,fe),t.texParameteri(P,10241,9728),t.texParameteri(P,10240,9728);for(let Ie=0;Ie<J;Ie++)t.texImage2D(V+Ie,0,6408,1,1,0,6408,5121,ae);return fe}const G={};G[3553]=ve(3553,3553,1),G[34067]=ve(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Le(2929),l.setFunc(cc),Ct(!1),Cn(Pd),Le(2884),ht(Ai);function Le(P){f[P]!==!0&&(t.enable(P),f[P]=!0)}function xe(P){f[P]!==!1&&(t.disable(P),f[P]=!1)}function Me(P,V){return g[P]!==V?(t.bindFramebuffer(P,V),g[P]=V,i&&(P===36009&&(g[36160]=V),P===36160&&(g[36009]=V)),!0):!1}function ue(P,V){let J=m,ae=!1;if(P)if(J=x.get(V),J===void 0&&(J=[],x.set(V,J)),P.isWebGLMultipleRenderTargets){const fe=P.texture;if(J.length!==fe.length||J[0]!==36064){for(let Ie=0,ut=fe.length;Ie<ut;Ie++)J[Ie]=36064+Ie;J.length=fe.length,ae=!0}}else J[0]!==36064&&(J[0]=36064,ae=!0);else J[0]!==1029&&(J[0]=1029,ae=!0);ae&&(n.isWebGL2?t.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Ue(P){return h!==P?(t.useProgram(P),h=P,!0):!1}const Ce={[Dr]:32774,[K_]:32778,[Q_]:32779};if(i)Ce[Nd]=32775,Ce[Fd]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ce[Nd]=P.MIN_EXT,Ce[Fd]=P.MAX_EXT)}const ge={[J_]:0,[ev]:1,[tv]:768,[Km]:770,[av]:776,[sv]:774,[iv]:772,[nv]:769,[Qm]:771,[ov]:775,[rv]:773};function ht(P,V,J,ae,fe,Ie,ut,yt){if(P===Ai){p===!0&&(xe(3042),p=!1);return}if(p===!1&&(Le(3042),p=!0),P!==Z_){if(P!==_||yt!==b){if((v!==Dr||C!==Dr)&&(t.blendEquation(32774),v=Dr,C=Dr),yt)switch(P){case Kr:t.blendFuncSeparate(1,771,1,771);break;case Dd:t.blendFunc(1,1);break;case Rd:t.blendFuncSeparate(0,769,0,1);break;case Id:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Kr:t.blendFuncSeparate(770,771,1,771);break;case Dd:t.blendFunc(770,1);break;case Rd:t.blendFuncSeparate(0,769,0,1);break;case Id:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,M=null,A=null,y=null,_=P,b=yt}return}fe=fe||V,Ie=Ie||J,ut=ut||ae,(V!==v||fe!==C)&&(t.blendEquationSeparate(Ce[V],Ce[fe]),v=V,C=fe),(J!==S||ae!==M||Ie!==A||ut!==y)&&(t.blendFuncSeparate(ge[J],ge[ae],ge[Ie],ge[ut]),S=J,M=ae,A=Ie,y=ut),_=P,b=null}function It(P,V){P.side===xi?xe(2884):Le(2884);let J=P.side===un;V&&(J=!J),Ct(J),P.blending===Kr&&P.transparent===!1?ht(Ai):ht(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ae=P.stencilWrite;u.setTest(ae),ae&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ke(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Le(32926):xe(32926)}function Ct(P){D!==P&&(P?t.frontFace(2304):t.frontFace(2305),D=P)}function Cn(P){P!==q_?(Le(2884),P!==$&&(P===Pd?t.cullFace(1029):P===$_?t.cullFace(1028):t.cullFace(1032))):xe(2884),$=P}function pt(P){P!==ie&&(Z&&t.lineWidth(P),ie=P)}function ke(P,V,J){P?(Le(32823),(U!==V||F!==J)&&(t.polygonOffset(V,J),U=V,F=J)):xe(32823)}function zn(P){P?Le(3089):xe(3089)}function kn(P){P===void 0&&(P=33984+X-1),L!==P&&(t.activeTexture(P),L=P)}function T(P,V,J){J===void 0&&(L===null?J=33984+X-1:J=L);let ae=I[J];ae===void 0&&(ae={type:void 0,texture:void 0},I[J]=ae),(ae.type!==P||ae.texture!==V)&&(L!==J&&(t.activeTexture(J),L=J),t.bindTexture(P,V||G[P]),ae.type=P,ae.texture=V)}function w(){const P=I[L];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function B(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){K.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function de(P){oe.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),oe.copy(P))}function Re(P,V){let J=d.get(V);J===void 0&&(J=new WeakMap,d.set(V,J));let ae=J.get(P);ae===void 0&&(ae=t.getUniformBlockIndex(V,P.name),J.set(P,ae))}function We(P,V){const ae=d.get(V).get(P);c.get(P)!==ae&&(t.uniformBlockBinding(V,ae,P.__bindingPointIndex),c.set(P,ae))}function lt(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},L=null,I={},g={},x=new WeakMap,m=[],h=null,p=!1,_=null,v=null,S=null,M=null,C=null,A=null,y=null,b=!1,D=null,$=null,ie=null,U=null,F=null,K.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Le,disable:xe,bindFramebuffer:Me,drawBuffers:ue,useProgram:Ue,setBlending:ht,setMaterial:It,setFlipSided:Ct,setCullFace:Cn,setLineWidth:pt,setPolygonOffset:ke,setScissorTest:zn,activeTexture:kn,bindTexture:T,unbindTexture:w,compressedTexImage2D:B,compressedTexImage3D:ee,texImage2D:_e,texImage3D:ce,updateUBOMapping:Re,uniformBlockBinding:We,texStorage2D:H,texStorage3D:pe,texSubImage2D:te,texSubImage3D:re,compressedTexSubImage2D:ye,compressedTexSubImage3D:se,scissor:me,viewport:de,reset:lt}}function FM(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),x=new WeakMap;let m;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,w){return p?new OffscreenCanvas(T,w):Ga("canvas")}function v(T,w,B,ee){let te=1;if((T.width>ee||T.height>ee)&&(te=ee/Math.max(T.width,T.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const re=w?gc:Math.floor,ye=re(te*T.width),se=re(te*T.height);m===void 0&&(m=_(ye,se));const H=B?_(ye,se):m;return H.width=ye,H.height=se,H.getContext("2d").drawImage(T,0,0,ye,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ye+"x"+se+")."),H}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function S(T){return lh(T.width)&&lh(T.height)}function M(T){return a?!1:T.wrapS!==yn||T.wrapT!==yn||T.minFilter!==Ft&&T.minFilter!==rn}function C(T,w){return T.generateMipmaps&&w&&T.minFilter!==Ft&&T.minFilter!==rn}function A(T){t.generateMipmap(T)}function y(T,w,B,ee,te=!1){if(a===!1)return w;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re=w;return w===6403&&(B===5126&&(re=33326),B===5131&&(re=33325),B===5121&&(re=33321)),w===33319&&(B===5126&&(re=33328),B===5131&&(re=33327),B===5121&&(re=33323)),w===6408&&(B===5126&&(re=34836),B===5131&&(re=34842),B===5121&&(re=ee===Ke&&te===!1?35907:32856),B===32819&&(re=32854),B===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function b(T,w,B){return C(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==Ft&&T.minFilter!==rn?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function D(T){return T===Ft||T===zd||T===kd?9728:9729}function $(T){const w=T.target;w.removeEventListener("dispose",$),U(w),w.isVideoTexture&&x.delete(w)}function ie(T){const w=T.target;w.removeEventListener("dispose",ie),X(w)}function U(T){const w=i.get(T);if(w.__webglInit===void 0)return;const B=T.source,ee=h.get(B);if(ee){const te=ee[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&F(T),Object.keys(ee).length===0&&h.delete(B)}i.remove(T)}function F(T){const w=i.get(T);t.deleteTexture(w.__webglTexture);const B=T.source,ee=h.get(B);delete ee[w.__cacheKey],o.memory.textures--}function X(T){const w=T.texture,B=i.get(T),ee=i.get(w);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)t.deleteFramebuffer(B.__webglFramebuffer[te]),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer[te]);else{if(t.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&t.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&t.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let te=0;te<B.__webglColorRenderbuffer.length;te++)B.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(B.__webglColorRenderbuffer[te]);B.__webglDepthRenderbuffer&&t.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let te=0,re=w.length;te<re;te++){const ye=i.get(w[te]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(w[te])}i.remove(w),i.remove(T)}let Z=0;function Q(){Z=0}function R(){const T=Z;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Z+=1,T}function L(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function I(T,w){const B=i.get(T);if(T.isVideoTexture&&zn(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,T,w);return}}n.bindTexture(3553,B.__webglTexture,33984+w)}function q(T,w){const B=i.get(T);if(T.version>0&&B.__version!==T.version){xe(B,T,w);return}n.bindTexture(35866,B.__webglTexture,33984+w)}function j(T,w){const B=i.get(T);if(T.version>0&&B.__version!==T.version){xe(B,T,w);return}n.bindTexture(32879,B.__webglTexture,33984+w)}function K(T,w){const B=i.get(T);if(T.version>0&&B.__version!==T.version){Me(B,T,w);return}n.bindTexture(34067,B.__webglTexture,33984+w)}const oe={[hc]:10497,[yn]:33071,[pc]:33648},ve={[Ft]:9728,[zd]:9984,[kd]:9986,[rn]:9729,[Mv]:9985,[ol]:9987};function G(T,w,B){if(B?(t.texParameteri(T,10242,oe[w.wrapS]),t.texParameteri(T,10243,oe[w.wrapT]),(T===32879||T===35866)&&t.texParameteri(T,32882,oe[w.wrapR]),t.texParameteri(T,10240,ve[w.magFilter]),t.texParameteri(T,10241,ve[w.minFilter])):(t.texParameteri(T,10242,33071),t.texParameteri(T,10243,33071),(T===32879||T===35866)&&t.texParameteri(T,32882,33071),(w.wrapS!==yn||w.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,10240,D(w.magFilter)),t.texParameteri(T,10241,D(w.minFilter)),w.minFilter!==Ft&&w.minFilter!==rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.type===Zi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===lo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Le(T,w){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",$));const ee=w.source;let te=h.get(ee);te===void 0&&(te={},h.set(ee,te));const re=L(w);if(re!==T.__cacheKey){te[re]===void 0&&(te[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[re].usedTimes++;const ye=te[T.__cacheKey];ye!==void 0&&(te[T.__cacheKey].usedTimes--,ye.usedTimes===0&&F(w)),T.__cacheKey=re,T.__webglTexture=te[re].texture}return B}function xe(T,w,B){let ee=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=35866),w.isData3DTexture&&(ee=32879);const te=Le(T,w),re=w.source;n.bindTexture(ee,T.__webglTexture,33984+B);const ye=i.get(re);if(re.version!==ye.__version||te===!0){n.activeTexture(33984+B),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const se=M(w)&&S(w.image)===!1;let H=v(w.image,se,!1,c);H=kn(w,H);const pe=S(H)||a,_e=s.convert(w.format,w.encoding);let ce=s.convert(w.type),me=y(w.internalFormat,_e,ce,w.encoding,w.isVideoTexture);G(ee,w,pe);let de;const Re=w.mipmaps,We=a&&w.isVideoTexture!==!0,lt=ye.__version===void 0||te===!0,P=b(w,H,pe);if(w.isDepthTexture)me=6402,a?w.type===Zi?me=36012:w.type===Yi?me=33190:w.type===Qr?me=35056:me=33189:w.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===er&&me===6402&&w.type!==tg&&w.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Yi,ce=s.convert(w.type)),w.format===cs&&me===6402&&(me=34041,w.type!==Qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Qr,ce=s.convert(w.type))),lt&&(We?n.texStorage2D(3553,1,me,H.width,H.height):n.texImage2D(3553,0,me,H.width,H.height,0,_e,ce,null));else if(w.isDataTexture)if(Re.length>0&&pe){We&&lt&&n.texStorage2D(3553,P,me,Re[0].width,Re[0].height);for(let V=0,J=Re.length;V<J;V++)de=Re[V],We?n.texSubImage2D(3553,V,0,0,de.width,de.height,_e,ce,de.data):n.texImage2D(3553,V,me,de.width,de.height,0,_e,ce,de.data);w.generateMipmaps=!1}else We?(lt&&n.texStorage2D(3553,P,me,H.width,H.height),n.texSubImage2D(3553,0,0,0,H.width,H.height,_e,ce,H.data)):n.texImage2D(3553,0,me,H.width,H.height,0,_e,ce,H.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&lt&&n.texStorage3D(35866,P,me,Re[0].width,Re[0].height,H.depth);for(let V=0,J=Re.length;V<J;V++)de=Re[V],w.format!==Sn?_e!==null?We?n.compressedTexSubImage3D(35866,V,0,0,0,de.width,de.height,H.depth,_e,de.data,0,0):n.compressedTexImage3D(35866,V,me,de.width,de.height,H.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage3D(35866,V,0,0,0,de.width,de.height,H.depth,_e,ce,de.data):n.texImage3D(35866,V,me,de.width,de.height,H.depth,0,_e,ce,de.data)}else{We&&lt&&n.texStorage2D(3553,P,me,Re[0].width,Re[0].height);for(let V=0,J=Re.length;V<J;V++)de=Re[V],w.format!==Sn?_e!==null?We?n.compressedTexSubImage2D(3553,V,0,0,de.width,de.height,_e,de.data):n.compressedTexImage2D(3553,V,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage2D(3553,V,0,0,de.width,de.height,_e,ce,de.data):n.texImage2D(3553,V,me,de.width,de.height,0,_e,ce,de.data)}else if(w.isDataArrayTexture)We?(lt&&n.texStorage3D(35866,P,me,H.width,H.height,H.depth),n.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,_e,ce,H.data)):n.texImage3D(35866,0,me,H.width,H.height,H.depth,0,_e,ce,H.data);else if(w.isData3DTexture)We?(lt&&n.texStorage3D(32879,P,me,H.width,H.height,H.depth),n.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,_e,ce,H.data)):n.texImage3D(32879,0,me,H.width,H.height,H.depth,0,_e,ce,H.data);else if(w.isFramebufferTexture){if(lt)if(We)n.texStorage2D(3553,P,me,H.width,H.height);else{let V=H.width,J=H.height;for(let ae=0;ae<P;ae++)n.texImage2D(3553,ae,me,V,J,0,_e,ce,null),V>>=1,J>>=1}}else if(Re.length>0&&pe){We&&lt&&n.texStorage2D(3553,P,me,Re[0].width,Re[0].height);for(let V=0,J=Re.length;V<J;V++)de=Re[V],We?n.texSubImage2D(3553,V,0,0,_e,ce,de):n.texImage2D(3553,V,me,_e,ce,de);w.generateMipmaps=!1}else We?(lt&&n.texStorage2D(3553,P,me,H.width,H.height),n.texSubImage2D(3553,0,0,0,_e,ce,H)):n.texImage2D(3553,0,me,_e,ce,H);C(w,pe)&&A(ee),ye.__version=re.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Me(T,w,B){if(w.image.length!==6)return;const ee=Le(T,w),te=w.source;n.bindTexture(34067,T.__webglTexture,33984+B);const re=i.get(te);if(te.version!==re.__version||ee===!0){n.activeTexture(33984+B),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const ye=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,H=[];for(let V=0;V<6;V++)!ye&&!se?H[V]=v(w.image[V],!1,!0,u):H[V]=se?w.image[V].image:w.image[V],H[V]=kn(w,H[V]);const pe=H[0],_e=S(pe)||a,ce=s.convert(w.format,w.encoding),me=s.convert(w.type),de=y(w.internalFormat,ce,me,w.encoding),Re=a&&w.isVideoTexture!==!0,We=re.__version===void 0||ee===!0;let lt=b(w,pe,_e);G(34067,w,_e);let P;if(ye){Re&&We&&n.texStorage2D(34067,lt,de,pe.width,pe.height);for(let V=0;V<6;V++){P=H[V].mipmaps;for(let J=0;J<P.length;J++){const ae=P[J];w.format!==Sn?ce!==null?Re?n.compressedTexSubImage2D(34069+V,J,0,0,ae.width,ae.height,ce,ae.data):n.compressedTexImage2D(34069+V,J,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?n.texSubImage2D(34069+V,J,0,0,ae.width,ae.height,ce,me,ae.data):n.texImage2D(34069+V,J,de,ae.width,ae.height,0,ce,me,ae.data)}}}else{P=w.mipmaps,Re&&We&&(P.length>0&&lt++,n.texStorage2D(34067,lt,de,H[0].width,H[0].height));for(let V=0;V<6;V++)if(se){Re?n.texSubImage2D(34069+V,0,0,0,H[V].width,H[V].height,ce,me,H[V].data):n.texImage2D(34069+V,0,de,H[V].width,H[V].height,0,ce,me,H[V].data);for(let J=0;J<P.length;J++){const fe=P[J].image[V].image;Re?n.texSubImage2D(34069+V,J+1,0,0,fe.width,fe.height,ce,me,fe.data):n.texImage2D(34069+V,J+1,de,fe.width,fe.height,0,ce,me,fe.data)}}else{Re?n.texSubImage2D(34069+V,0,0,0,ce,me,H[V]):n.texImage2D(34069+V,0,de,ce,me,H[V]);for(let J=0;J<P.length;J++){const ae=P[J];Re?n.texSubImage2D(34069+V,J+1,0,0,ce,me,ae.image[V]):n.texImage2D(34069+V,J+1,de,ce,me,ae.image[V])}}}C(w,_e)&&A(34067),re.__version=te.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ue(T,w,B,ee,te){const re=s.convert(B.format,B.encoding),ye=s.convert(B.type),se=y(B.internalFormat,re,ye,B.encoding);i.get(w).__hasExternalTextures||(te===32879||te===35866?n.texImage3D(te,0,se,w.width,w.height,w.depth,0,re,ye,null):n.texImage2D(te,0,se,w.width,w.height,0,re,ye,null)),n.bindFramebuffer(36160,T),ke(w)?f.framebufferTexture2DMultisampleEXT(36160,ee,te,i.get(B).__webglTexture,0,pt(w)):(te===3553||te>=34069&&te<=34074)&&t.framebufferTexture2D(36160,ee,te,i.get(B).__webglTexture,0),n.bindFramebuffer(36160,null)}function Ue(T,w,B){if(t.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let ee=33189;if(B||ke(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===Zi?ee=36012:te.type===Yi&&(ee=33190));const re=pt(w);ke(w)?f.renderbufferStorageMultisampleEXT(36161,re,ee,w.width,w.height):t.renderbufferStorageMultisample(36161,re,ee,w.width,w.height)}else t.renderbufferStorage(36161,ee,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const ee=pt(w);B&&ke(w)===!1?t.renderbufferStorageMultisample(36161,ee,35056,w.width,w.height):ke(w)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,T)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<ee.length;te++){const re=ee[te],ye=s.convert(re.format,re.encoding),se=s.convert(re.type),H=y(re.internalFormat,ye,se,re.encoding),pe=pt(w);B&&ke(w)===!1?t.renderbufferStorageMultisample(36161,pe,H,w.width,w.height):ke(w)?f.renderbufferStorageMultisampleEXT(36161,pe,H,w.width,w.height):t.renderbufferStorage(36161,H,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function Ce(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),I(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,te=pt(w);if(w.depthTexture.format===er)ke(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):t.framebufferTexture2D(36160,36096,3553,ee,0);else if(w.depthTexture.format===cs)ke(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):t.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ge(T){const w=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ce(w.__webglFramebuffer,T)}else if(B){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(36160,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=t.createRenderbuffer(),Ue(w.__webglDepthbuffer[ee],T,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),Ue(w.__webglDepthbuffer,T,!1);n.bindFramebuffer(36160,null)}function ht(T,w,B){const ee=i.get(T);w!==void 0&&ue(ee.__webglFramebuffer,T,T.texture,36064,3553),B!==void 0&&ge(T)}function It(T){const w=T.texture,B=i.get(T),ee=i.get(w);T.addEventListener("dispose",ie),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=w.version,o.memory.textures++);const te=T.isWebGLCubeRenderTarget===!0,re=T.isWebGLMultipleRenderTargets===!0,ye=S(T)||a;if(te){B.__webglFramebuffer=[];for(let se=0;se<6;se++)B.__webglFramebuffer[se]=t.createFramebuffer()}else{if(B.__webglFramebuffer=t.createFramebuffer(),re)if(r.drawBuffers){const se=T.texture;for(let H=0,pe=se.length;H<pe;H++){const _e=i.get(se[H]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ke(T)===!1){const se=re?w:[w];B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let H=0;H<se.length;H++){const pe=se[H];B.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(36161,B.__webglColorRenderbuffer[H]);const _e=s.convert(pe.format,pe.encoding),ce=s.convert(pe.type),me=y(pe.internalFormat,_e,ce,pe.encoding,T.isXRRenderTarget===!0),de=pt(T);t.renderbufferStorageMultisample(36161,de,me,T.width,T.height),t.framebufferRenderbuffer(36160,36064+H,36161,B.__webglColorRenderbuffer[H])}t.bindRenderbuffer(36161,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(B.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(36160,null)}}if(te){n.bindTexture(34067,ee.__webglTexture),G(34067,w,ye);for(let se=0;se<6;se++)ue(B.__webglFramebuffer[se],T,w,36064,34069+se);C(w,ye)&&A(34067),n.unbindTexture()}else if(re){const se=T.texture;for(let H=0,pe=se.length;H<pe;H++){const _e=se[H],ce=i.get(_e);n.bindTexture(3553,ce.__webglTexture),G(3553,_e,ye),ue(B.__webglFramebuffer,T,_e,36064+H,3553),C(_e,ye)&&A(3553)}n.unbindTexture()}else{let se=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?se=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,ee.__webglTexture),G(se,w,ye),ue(B.__webglFramebuffer,T,w,36064,se),C(w,ye)&&A(se),n.unbindTexture()}T.depthBuffer&&ge(T)}function Ct(T){const w=S(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,te=B.length;ee<te;ee++){const re=B[ee];if(C(re,w)){const ye=T.isWebGLCubeRenderTarget?34067:3553,se=i.get(re).__webglTexture;n.bindTexture(ye,se),A(ye),n.unbindTexture()}}}function Cn(T){if(a&&T.samples>0&&ke(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,ee=T.height;let te=16384;const re=[],ye=T.stencilBuffer?33306:36096,se=i.get(T),H=T.isWebGLMultipleRenderTargets===!0;if(H)for(let pe=0;pe<w.length;pe++)n.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+pe,36161,null),n.bindFramebuffer(36160,se.__webglFramebuffer),t.framebufferTexture2D(36009,36064+pe,3553,null,0);n.bindFramebuffer(36008,se.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,se.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){re.push(36064+pe),T.depthBuffer&&re.push(ye);const _e=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(_e===!1&&(T.depthBuffer&&(te|=256),T.stencilBuffer&&(te|=1024)),H&&t.framebufferRenderbuffer(36008,36064,36161,se.__webglColorRenderbuffer[pe]),_e===!0&&(t.invalidateFramebuffer(36008,[ye]),t.invalidateFramebuffer(36009,[ye])),H){const ce=i.get(w[pe]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,ce,0)}t.blitFramebuffer(0,0,B,ee,0,0,B,ee,te,9728),g&&t.invalidateFramebuffer(36008,re)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),H)for(let pe=0;pe<w.length;pe++){n.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+pe,36161,se.__webglColorRenderbuffer[pe]);const _e=i.get(w[pe]).__webglTexture;n.bindFramebuffer(36160,se.__webglFramebuffer),t.framebufferTexture2D(36009,36064+pe,3553,_e,0)}n.bindFramebuffer(36009,se.__webglMultisampledFramebuffer)}}function pt(T){return Math.min(d,T.samples)}function ke(T){const w=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function zn(T){const w=o.render.frame;x.get(T)!==w&&(x.set(T,w),T.update())}function kn(T,w){const B=T.encoding,ee=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===mc||B!==lr&&(B===Ke?a===!1?e.has("EXT_sRGB")===!0&&ee===Sn?(T.format=mc,T.minFilter=rn,T.generateMipmaps=!1):w=rg.sRGBToLinear(w):(ee!==Sn||te!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),w}this.allocateTextureUnit=R,this.resetTextureUnits=Q,this.setTexture2D=I,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=ht,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ke}function zM(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===ar)return 5121;if(s===Cv)return 32819;if(s===bv)return 32820;if(s===wv)return 5120;if(s===Ev)return 5122;if(s===tg)return 5123;if(s===Tv)return 5124;if(s===Yi)return 5125;if(s===Zi)return 5126;if(s===lo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Av)return 6406;if(s===Sn)return 6408;if(s===Pv)return 6409;if(s===Dv)return 6410;if(s===er)return 6402;if(s===cs)return 34041;if(s===Rv)return 6403;if(s===Lv)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===mc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Iv)return 36244;if(s===Nv)return 33319;if(s===Fv)return 33320;if(s===zv)return 36249;if(s===Ol||s===Bl||s===Vl||s===Gl)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ol)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ol)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ud||s===Od||s===Bd||s===Vd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ud)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Od)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gd||s===Wd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Gd)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hd||s===Xd||s===jd||s===qd||s===$d||s===Yd||s===Zd||s===Kd||s===Qd||s===Jd||s===eh||s===th||s===nh||s===ih)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$d)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===eh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===th)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ih)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===rh)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Qr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class kM extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ia extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UM={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const h=n.getJointPose(m,i);if(u.joints[m.jointName]===void 0){const _=new ia;_.matrixAutoUpdate=!1,_.visible=!1,u.joints[m.jointName]=_,u.add(_)}const p=u.joints[m.jointName];h!==null&&(p.matrix.fromArray(h.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=h.radius),p.visible=h!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,x=.005;u.inputState.pinching&&f>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class OM extends Tn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:er,c!==er&&c!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===er&&(i=Yi),i===void 0&&c===cs&&(i=Qr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1}}class BM extends ms{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,d=null,f=null,g=null;const x=n.getContextAttributes();let m=null,h=null;const p=[],_=[],v=new sn;v.layers.enable(1),v.viewport=new gt;const S=new sn;S.layers.enable(2),S.viewport=new gt;const M=[v,S],C=new kM;C.layers.enable(1),C.layers.enable(2);let A=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let I=p[L];return I===void 0&&(I=new gu,p[L]=I),I.getTargetRaySpace()},this.getControllerGrip=function(L){let I=p[L];return I===void 0&&(I=new gu,p[L]=I),I.getGripSpace()},this.getHand=function(L){let I=p[L];return I===void 0&&(I=new gu,p[L]=I),I.getHandSpace()};function b(L){const I=_.indexOf(L.inputSource);if(I===-1)return;const q=p[I];q!==void 0&&q.dispatchEvent({type:L.type,data:L.inputSource})}function D(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",$);for(let L=0;L<p.length;L++){const I=_[L];I!==null&&(_[L]=null,p[L].disconnect(I))}A=null,y=null,e.setRenderTarget(m),f=null,d=null,c=null,r=null,h=null,R.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",D),r.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const I={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,I),r.updateRenderState({baseLayer:f}),h=new ur(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:ar,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let I=null,q=null,j=null;x.depth&&(j=x.stencil?35056:33190,I=x.stencil?cs:er,q=x.stencil?Qr:Yi);const K={colorFormat:32856,depthFormat:j,scaleFactor:s};c=new XRWebGLBinding(r,n),d=c.createProjectionLayer(K),r.updateRenderState({layers:[d]}),h=new ur(d.textureWidth,d.textureHeight,{format:Sn,type:ar,depthTexture:new OM(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const oe=e.properties.get(h);oe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),R.setContext(r),R.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function $(L){for(let I=0;I<L.removed.length;I++){const q=L.removed[I],j=_.indexOf(q);j>=0&&(_[j]=null,p[j].dispatchEvent({type:"disconnected",data:q}))}for(let I=0;I<L.added.length;I++){const q=L.added[I];let j=_.indexOf(q);if(j===-1){for(let oe=0;oe<p.length;oe++)if(oe>=_.length){_.push(q),j=oe;break}else if(_[oe]===null){_[oe]=q,j=oe;break}if(j===-1)break}const K=p[j];K&&K.dispatchEvent({type:"connected",data:q})}}const ie=new k,U=new k;function F(L,I,q){ie.setFromMatrixPosition(I.matrixWorld),U.setFromMatrixPosition(q.matrixWorld);const j=ie.distanceTo(U),K=I.projectionMatrix.elements,oe=q.projectionMatrix.elements,ve=K[14]/(K[10]-1),G=K[14]/(K[10]+1),Le=(K[9]+1)/K[5],xe=(K[9]-1)/K[5],Me=(K[8]-1)/K[0],ue=(oe[8]+1)/oe[0],Ue=ve*Me,Ce=ve*ue,ge=j/(-Me+ue),ht=ge*-Me;I.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ht),L.translateZ(ge),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const It=ve+ge,Ct=G+ge,Cn=Ue-ht,pt=Ce+(j-ht),ke=Le*G/Ct*It,zn=xe*G/Ct*It;L.projectionMatrix.makePerspective(Cn,pt,ke,zn,It,Ct)}function X(L,I){I===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(I.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;C.near=S.near=v.near=L.near,C.far=S.far=v.far=L.far,(A!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),A=C.near,y=C.far);const I=L.parent,q=C.cameras;X(C,I);for(let K=0;K<q.length;K++)X(q[K],I);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),L.matrix.copy(C.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);const j=L.children;for(let K=0,oe=j.length;K<oe;K++)j[K].updateMatrixWorld(!0);q.length===2?F(C,v,S):C.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(L){d!==null&&(d.fixedFoveation=L),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=L)};let Z=null;function Q(L,I){if(u=I.getViewerPose(l||o),g=I,u!==null){const q=u.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let j=!1;q.length!==C.cameras.length&&(C.cameras.length=0,j=!0);for(let K=0;K<q.length;K++){const oe=q[K];let ve=null;if(f!==null)ve=f.getViewport(oe);else{const Le=c.getViewSubImage(d,oe);ve=Le.viewport,K===0&&(e.setRenderTargetTextures(h,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(h))}let G=M[K];G===void 0&&(G=new sn,G.layers.enable(K),G.viewport=new gt,M[K]=G),G.matrix.fromArray(oe.transform.matrix),G.projectionMatrix.fromArray(oe.projectionMatrix),G.viewport.set(ve.x,ve.y,ve.width,ve.height),K===0&&C.matrix.copy(G.matrix),j===!0&&C.cameras.push(G)}}for(let q=0;q<p.length;q++){const j=_[q],K=p[q];j!==null&&K!==void 0&&K.update(j,I,l||o)}Z&&Z(L,I),g=null}const R=new hg;R.setAnimationLoop(Q),this.setAnimationLoop=function(L){Z=L},this.dispose=function(){}}}function VM(t,e){function n(m,h){m.fogColor.value.copy(h.color),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,p,_,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),c(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&f(m,h,v)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?a(m,h,p,_):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.bumpMap&&(m.bumpMap.value=h.bumpMap,m.bumpScale.value=h.bumpScale,h.side===un&&(m.bumpScale.value*=-1)),h.displacementMap&&(m.displacementMap.value=h.displacementMap,m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap),h.normalMap&&(m.normalMap.value=h.normalMap,m.normalScale.value.copy(h.normalScale),h.side===un&&m.normalScale.value.negate()),h.specularMap&&(m.specularMap.value=h.specularMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const p=e.get(h).envMap;if(p&&(m.envMap.value=p,m.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const S=t.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity);let _;h.map?_=h.map:h.specularMap?_=h.specularMap:h.displacementMap?_=h.displacementMap:h.normalMap?_=h.normalMap:h.bumpMap?_=h.bumpMap:h.roughnessMap?_=h.roughnessMap:h.metalnessMap?_=h.metalnessMap:h.alphaMap?_=h.alphaMap:h.emissiveMap?_=h.emissiveMap:h.clearcoatMap?_=h.clearcoatMap:h.clearcoatNormalMap?_=h.clearcoatNormalMap:h.clearcoatRoughnessMap?_=h.clearcoatRoughnessMap:h.iridescenceMap?_=h.iridescenceMap:h.iridescenceThicknessMap?_=h.iridescenceThicknessMap:h.specularIntensityMap?_=h.specularIntensityMap:h.specularColorMap?_=h.specularColorMap:h.transmissionMap?_=h.transmissionMap:h.thicknessMap?_=h.thicknessMap:h.sheenColorMap?_=h.sheenColorMap:h.sheenRoughnessMap&&(_=h.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let v;h.aoMap?v=h.aoMap:h.lightMap&&(v=h.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function a(m,h,p,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*p,m.scale.value=_*.5,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let v;h.map?v=h.map:h.alphaMap&&(v=h.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let p;h.map?p=h.map:h.alphaMap&&(p=h.alphaMap),p!==void 0&&(p.matrixAutoUpdate===!0&&p.updateMatrix(),m.uvTransform.value.copy(p.matrix))}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function c(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.roughness.value=h.roughness,m.metalness.value=h.metalness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,p){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),m.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===un&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=p.texture,m.transmissionSamplerSize.value.set(p.width,p.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap)}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){m.referencePosition.value.copy(h.referencePosition),m.nearDistance.value=h.nearDistance,m.farDistance.value=h.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function GM(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function u(_,v){let S=r[_.id];S===void 0&&(x(_),S=c(_),r[_.id]=S,_.addEventListener("dispose",h));const M=v.program;i.updateUBOMapping(_,M);const C=e.render.frame;s[_.id]!==C&&(f(_),s[_.id]=C)}function c(_){const v=d();_.__bindingPointIndex=v;const S=t.createBuffer(),M=_.__size,C=_.usage;return t.bindBuffer(35345,S),t.bufferData(35345,M,C),t.bindBuffer(35345,null),t.bindBufferBase(35345,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],S=_.uniforms,M=_.__cache;t.bindBuffer(35345,v);for(let C=0,A=S.length;C<A;C++){const y=S[C];if(g(y,C,M)===!0){const b=y.value,D=y.__offset;typeof b=="number"?(y.__data[0]=b,t.bufferSubData(35345,D,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):b.toArray(y.__data),t.bufferSubData(35345,D,y.__data))}}t.bindBuffer(35345,null)}function g(_,v,S){const M=_.value;if(S[v]===void 0)return typeof M=="number"?S[v]=M:S[v]=M.clone(),!0;if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{const C=S[v];if(C.equals(M)===!1)return C.copy(M),!0}return!1}function x(_){const v=_.uniforms;let S=0;const M=16;let C=0;for(let A=0,y=v.length;A<y;A++){const b=v[A],D=m(b);if(b.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,A>0){C=S%M;const $=M-C;C!==0&&$-D.boundary<0&&(S+=M-C,b.__offset=S)}S+=D.storage}return C=S%M,C>0&&(S+=M-C),_.__size=S,_.__cache={},this}function m(_){const v=_.value,S={boundary:0,storage:0};return typeof v=="number"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function h(_){const v=_.target;v.removeEventListener("dispose",h);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}function WM(){const t=Ga("canvas");return t.style.display="block",t}function vg(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:WM(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let d=null,f=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=lr,this.physicallyCorrectLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let h=!1,p=0,_=0,v=null,S=-1,M=null;const C=new gt,A=new gt;let y=null,b=e.width,D=e.height,$=1,ie=null,U=null;const F=new gt(0,0,b,D),X=new gt(0,0,b,D);let Z=!1;const Q=new dg;let R=!1,L=!1,I=null;const q=new vt,j=new Be,K=new k,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return v===null?$:1}let G=n;function Le(E,z){for(let O=0;O<E.length;O++){const N=E[O],W=e.getContext(N,z);if(W!==null)return W}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hf}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Re,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&z.shift(),G=Le(z,E),G===null)throw Le(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,Me,ue,Ue,Ce,ge,ht,It,Ct,Cn,pt,ke,zn,kn,T,w,B,ee,te,re,ye,se,H,pe;function _e(){xe=new e1(G),Me=new qS(G,xe,t),xe.init(Me),se=new zM(G,xe,Me),ue=new NM(G,xe,Me),Ue=new i1,Ce=new yM,ge=new FM(G,xe,ue,Ce,Me,se,Ue),ht=new YS(m),It=new JS(m),Ct=new fx(G,Me),H=new XS(G,xe,Ct,Me),Cn=new t1(G,Ct,Ue,H),pt=new a1(G,Cn,Ct,Ue),te=new o1(G,Me,ge),w=new $S(Ce),ke=new xM(m,ht,It,xe,Me,H,w),zn=new VM(m,Ce),kn=new MM,T=new AM(xe,Me),ee=new HS(m,ht,It,ue,pt,c,o),B=new IM(m,pt,Me),pe=new GM(G,Ue,Me,ue),re=new jS(G,xe,Ue,Me),ye=new n1(G,xe,Ue,Me),Ue.programs=ke.programs,m.capabilities=Me,m.extensions=xe,m.properties=Ce,m.renderLists=kn,m.shadowMap=B,m.state=ue,m.info=Ue}_e();const ce=new BM(m,G);this.xr=ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(b,D,!1))},this.getSize=function(E){return E.set(b,D)},this.setSize=function(E,z,O){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=E,D=z,e.width=Math.floor(E*$),e.height=Math.floor(z*$),O!==!1&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(b*$,D*$).floor()},this.setDrawingBufferSize=function(E,z,O){b=E,D=z,$=O,e.width=Math.floor(E*O),e.height=Math.floor(z*O),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,z,O,N){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,z,O,N),ue.viewport(C.copy(F).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,z,O,N){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,z,O,N),ue.scissor(A.copy(X).multiplyScalar($).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){ue.setScissorTest(Z=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,z=!0,O=!0){let N=0;E&&(N|=16384),z&&(N|=256),O&&(N|=1024),G.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),kn.dispose(),T.dispose(),Ce.dispose(),ht.dispose(),It.dispose(),pt.dispose(),H.dispose(),pe.dispose(),ke.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ae),ce.removeEventListener("sessionend",fe),I&&(I.dispose(),I=null),Ie.stop()};function me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=Ue.autoReset,z=B.enabled,O=B.autoUpdate,N=B.needsUpdate,W=B.type;_e(),Ue.autoReset=E,B.enabled=z,B.autoUpdate=O,B.needsUpdate=N,B.type=W}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function We(E){const z=E.target;z.removeEventListener("dispose",We),lt(z)}function lt(E){P(E),Ce.remove(E)}function P(E){const z=Ce.get(E).programs;z!==void 0&&(z.forEach(function(O){ke.releaseProgram(O)}),E.isShaderMaterial&&ke.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,O,N,W,he){z===null&&(z=oe);const Se=W.isMesh&&W.matrixWorld.determinant()<0,Te=Eg(E,z,O,N,W);ue.setMaterial(N,Se);let we=O.index;const Ne=O.attributes.position;if(we===null){if(Ne===void 0||Ne.count===0)return}else if(we.count===0)return;let be=1;N.wireframe===!0&&(we=Cn.getWireframeAttribute(O),be=2),H.setup(W,N,Te,O,we);let Pe,Ze=re;we!==null&&(Pe=Ct.get(we),Ze=ye,Ze.setIndex(Pe));const zi=we!==null?we.count:Ne.count,hr=O.drawRange.start*be,pr=O.drawRange.count*be,bn=he!==null?he.start*be:0,Fe=he!==null?he.count*be:1/0,mr=Math.max(hr,bn),et=Math.min(zi,hr+pr,bn+Fe)-1,Jt=Math.max(0,et-mr+1);if(Jt!==0){if(W.isMesh)N.wireframe===!0?(ue.setLineWidth(N.wireframeLinewidth*ve()),Ze.setMode(1)):Ze.setMode(4);else if(W.isLine){let ri=N.linewidth;ri===void 0&&(ri=1),ue.setLineWidth(ri*ve()),W.isLineSegments?Ze.setMode(1):W.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else W.isPoints?Ze.setMode(0):W.isSprite&&Ze.setMode(4);if(W.isInstancedMesh)Ze.renderInstances(mr,Jt,W.count);else if(O.isInstancedBufferGeometry){const ri=Math.min(O.instanceCount,O._maxInstanceCount);Ze.renderInstances(mr,Jt,ri)}else Ze.render(mr,Jt)}},this.compile=function(E,z){function O(N,W,he){N.transparent===!0&&N.side===xi?(N.side=un,N.needsUpdate=!0,Qt(N,W,he),N.side=as,N.needsUpdate=!0,Qt(N,W,he),N.side=xi):Qt(N,W,he)}f=T.get(E),f.init(),x.push(f),E.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(m.physicallyCorrectLights),E.traverse(function(N){const W=N.material;if(W)if(Array.isArray(W))for(let he=0;he<W.length;he++){const Se=W[he];O(Se,E,N)}else O(W,E,N)}),x.pop(),f=null};let V=null;function J(E){V&&V(E)}function ae(){Ie.stop()}function fe(){Ie.start()}const Ie=new hg;Ie.setAnimationLoop(J),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(E){V=E,ce.setAnimationLoop(E),E===null?Ie.stop():Ie.start()},ce.addEventListener("sessionstart",ae),ce.addEventListener("sessionend",fe),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,z,v),f=T.get(E,x.length),f.init(),x.push(f),q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(q),L=this.localClippingEnabled,R=w.init(this.clippingPlanes,L,z),d=kn.get(E,g.length),d.init(),g.push(d),ut(E,z,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(ie,U),R===!0&&w.beginShadows();const O=f.state.shadowsArray;if(B.render(O,E,z),R===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,E),f.setupLights(m.physicallyCorrectLights),z.isArrayCamera){const N=z.cameras;for(let W=0,he=N.length;W<he;W++){const Se=N[W];yt(d,E,Se,Se.viewport)}}else yt(d,E,z);v!==null&&(ge.updateMultisampleRenderTarget(v),ge.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(m,E,z),H.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function ut(E,z,O,N){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){N&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const Se=pt.update(E),Te=E.material;Te.visible&&d.push(E,Se,Te,O,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ue.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ue.render.frame),!E.frustumCulled||Q.intersectsObject(E))){N&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const Se=pt.update(E),Te=E.material;if(Array.isArray(Te)){const we=Se.groups;for(let Ne=0,be=we.length;Ne<be;Ne++){const Pe=we[Ne],Ze=Te[Pe.materialIndex];Ze&&Ze.visible&&d.push(E,Se,Ze,O,K.z,Pe)}}else Te.visible&&d.push(E,Se,Te,O,K.z,null)}}const he=E.children;for(let Se=0,Te=he.length;Se<Te;Se++)ut(he[Se],z,O,N)}function yt(E,z,O,N){const W=E.opaque,he=E.transmissive,Se=E.transparent;f.setupLightsView(O),he.length>0&&Fi(W,z,O),N&&ue.viewport(C.copy(N)),W.length>0&&He(W,z,O),he.length>0&&He(he,z,O),Se.length>0&&He(Se,z,O),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Fi(E,z,O){const N=Me.isWebGL2;I===null&&(I=new ur(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?lo:ar,minFilter:ol,samples:N&&s===!0?4:0})),m.getDrawingBufferSize(j),N?I.setSize(j.x,j.y):I.setSize(gc(j.x),gc(j.y));const W=m.getRenderTarget();m.setRenderTarget(I),m.clear();const he=m.toneMapping;m.toneMapping=Qn,He(E,z,O),m.toneMapping=he,ge.updateMultisampleRenderTarget(I),ge.updateRenderTargetMipmap(I),m.setRenderTarget(W)}function He(E,z,O){const N=z.isScene===!0?z.overrideMaterial:null;for(let W=0,he=E.length;W<he;W++){const Se=E[W],Te=Se.object,we=Se.geometry,Ne=N===null?Se.material:N,be=Se.group;Te.layers.test(O.layers)&&Un(Te,z,O,we,Ne,be)}}function Un(E,z,O,N,W,he){E.onBeforeRender(m,z,O,N,W,he),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(m,z,O,N,E,he),W.transparent===!0&&W.side===xi?(W.side=un,W.needsUpdate=!0,m.renderBufferDirect(O,z,N,W,E,he),W.side=as,W.needsUpdate=!0,m.renderBufferDirect(O,z,N,W,E,he),W.side=xi):m.renderBufferDirect(O,z,N,W,E,he),E.onAfterRender(m,z,O,N,W,he)}function Qt(E,z,O){z.isScene!==!0&&(z=oe);const N=Ce.get(E),W=f.state.lights,he=f.state.shadowsArray,Se=W.state.version,Te=ke.getParameters(E,W.state,he,z,O),we=ke.getProgramCacheKey(Te);let Ne=N.programs;N.environment=E.isMeshStandardMaterial?z.environment:null,N.fog=z.fog,N.envMap=(E.isMeshStandardMaterial?It:ht).get(E.envMap||N.environment),Ne===void 0&&(E.addEventListener("dispose",We),Ne=new Map,N.programs=Ne);let be=Ne.get(we);if(be!==void 0){if(N.currentProgram===be&&N.lightsStateVersion===Se)return xf(E,Te),be}else Te.uniforms=ke.getUniforms(E),E.onBuild(O,Te,m),E.onBeforeCompile(Te,m),be=ke.acquireProgram(Te,we),Ne.set(we,be),N.uniforms=Te.uniforms;const Pe=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=w.uniform),xf(E,Te),N.needsLights=Cg(E),N.lightsStateVersion=Se,N.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMap.value=W.state.directionalShadowMap,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotShadowMap.value=W.state.spotShadowMap,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMap.value=W.state.pointShadowMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix);const Ze=be.getUniforms(),zi=_a.seqWithValue(Ze.seq,Pe);return N.currentProgram=be,N.uniformsList=zi,be}function xf(E,z){const O=Ce.get(E);O.outputEncoding=z.outputEncoding,O.instancing=z.instancing,O.skinning=z.skinning,O.morphTargets=z.morphTargets,O.morphNormals=z.morphNormals,O.morphColors=z.morphColors,O.morphTargetsCount=z.morphTargetsCount,O.numClippingPlanes=z.numClippingPlanes,O.numIntersection=z.numClipIntersection,O.vertexAlphas=z.vertexAlphas,O.vertexTangents=z.vertexTangents,O.toneMapping=z.toneMapping}function Eg(E,z,O,N,W){z.isScene!==!0&&(z=oe),ge.resetTextureUnits();const he=z.fog,Se=N.isMeshStandardMaterial?z.environment:null,Te=v===null?m.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:lr,we=(N.isMeshStandardMaterial?It:ht).get(N.envMap||Se),Ne=N.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,be=!!N.normalMap&&!!O.attributes.tangent,Pe=!!O.morphAttributes.position,Ze=!!O.morphAttributes.normal,zi=!!O.morphAttributes.color,hr=N.toneMapped?m.toneMapping:Qn,pr=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,bn=pr!==void 0?pr.length:0,Fe=Ce.get(N),mr=f.state.lights;if(R===!0&&(L===!0||E!==M)){const Bt=E===M&&N.id===S;w.setState(N,E,Bt)}let et=!1;N.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==mr.state.version||Fe.outputEncoding!==Te||W.isInstancedMesh&&Fe.instancing===!1||!W.isInstancedMesh&&Fe.instancing===!0||W.isSkinnedMesh&&Fe.skinning===!1||!W.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==we||N.fog===!0&&Fe.fog!==he||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==w.numPlanes||Fe.numIntersection!==w.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==be||Fe.morphTargets!==Pe||Fe.morphNormals!==Ze||Fe.morphColors!==zi||Fe.toneMapping!==hr||Me.isWebGL2===!0&&Fe.morphTargetsCount!==bn)&&(et=!0):(et=!0,Fe.__version=N.version);let Jt=Fe.currentProgram;et===!0&&(Jt=Qt(N,z,W));let ri=!1,_s=!1,cl=!1;const bt=Jt.getUniforms(),ki=Fe.uniforms;if(ue.useProgram(Jt.program)&&(ri=!0,_s=!0,cl=!0),N.id!==S&&(S=N.id,_s=!0),ri||M!==E){if(bt.setValue(G,"projectionMatrix",E.projectionMatrix),Me.logarithmicDepthBuffer&&bt.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,_s=!0,cl=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Bt=bt.map.cameraPosition;Bt!==void 0&&Bt.setValue(G,K.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&bt.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||W.isSkinnedMesh)&&bt.setValue(G,"viewMatrix",E.matrixWorldInverse)}if(W.isSkinnedMesh){bt.setOptional(G,W,"bindMatrix"),bt.setOptional(G,W,"bindMatrixInverse");const Bt=W.skeleton;Bt&&(Me.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),bt.setValue(G,"boneTexture",Bt.boneTexture,ge),bt.setValue(G,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fl=O.morphAttributes;if((fl.position!==void 0||fl.normal!==void 0||fl.color!==void 0&&Me.isWebGL2===!0)&&te.update(W,O,N,Jt),(_s||Fe.receiveShadow!==W.receiveShadow)&&(Fe.receiveShadow=W.receiveShadow,bt.setValue(G,"receiveShadow",W.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(ki.envMap.value=we,ki.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),_s&&(bt.setValue(G,"toneMappingExposure",m.toneMappingExposure),Fe.needsLights&&Tg(ki,cl),he&&N.fog===!0&&zn.refreshFogUniforms(ki,he),zn.refreshMaterialUniforms(ki,N,$,D,I),_a.upload(G,Fe.uniformsList,ki,ge)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(_a.upload(G,Fe.uniformsList,ki,ge),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&bt.setValue(G,"center",W.center),bt.setValue(G,"modelViewMatrix",W.modelViewMatrix),bt.setValue(G,"normalMatrix",W.normalMatrix),bt.setValue(G,"modelMatrix",W.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Bt=N.uniformsGroups;for(let dl=0,bg=Bt.length;dl<bg;dl++)if(Me.isWebGL2){const yf=Bt[dl];pe.update(yf,Jt),pe.bind(yf,Jt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jt}function Tg(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Cg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,z,O){Ce.get(E.texture).__webglTexture=z,Ce.get(E.depthTexture).__webglTexture=O;const N=Ce.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=O===void 0,N.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){const O=Ce.get(E);O.__webglFramebuffer=z,O.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,O=0){v=E,p=z,_=O;let N=!0,W=null,he=!1,Se=!1;if(E){const we=Ce.get(E);we.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),N=!1):we.__webglFramebuffer===void 0?ge.setupRenderTarget(E):we.__hasExternalTextures&&ge.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture);const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);const be=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(W=be[z],he=!0):Me.isWebGL2&&E.samples>0&&ge.useMultisampledRTT(E)===!1?W=Ce.get(E).__webglMultisampledFramebuffer:W=be,C.copy(E.viewport),A.copy(E.scissor),y=E.scissorTest}else C.copy(F).multiplyScalar($).floor(),A.copy(X).multiplyScalar($).floor(),y=Z;if(ue.bindFramebuffer(36160,W)&&Me.drawBuffers&&N&&ue.drawBuffers(E,W),ue.viewport(C),ue.scissor(A),ue.setScissorTest(y),he){const we=Ce.get(E.texture);G.framebufferTexture2D(36160,36064,34069+z,we.__webglTexture,O)}else if(Se){const we=Ce.get(E.texture),Ne=z||0;G.framebufferTextureLayer(36160,36064,we.__webglTexture,O||0,Ne)}S=-1},this.readRenderTargetPixels=function(E,z,O,N,W,he,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){ue.bindFramebuffer(36160,Te);try{const we=E.texture,Ne=we.format,be=we.type;if(Ne!==Sn&&se.convert(Ne)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=be===lo&&(xe.has("EXT_color_buffer_half_float")||Me.isWebGL2&&xe.has("EXT_color_buffer_float"));if(be!==ar&&se.convert(be)!==G.getParameter(35738)&&!(be===Zi&&(Me.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-N&&O>=0&&O<=E.height-W&&G.readPixels(z,O,N,W,se.convert(Ne),se.convert(be),he)}finally{const we=v!==null?Ce.get(v).__webglFramebuffer:null;ue.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(E,z,O=0){const N=Math.pow(2,-O),W=Math.floor(z.image.width*N),he=Math.floor(z.image.height*N);ge.setTexture2D(z,0),G.copyTexSubImage2D(3553,O,0,0,E.x,E.y,W,he),ue.unbindTexture()},this.copyTextureToTexture=function(E,z,O,N=0){const W=z.image.width,he=z.image.height,Se=se.convert(O.format),Te=se.convert(O.type);ge.setTexture2D(O,0),G.pixelStorei(37440,O.flipY),G.pixelStorei(37441,O.premultiplyAlpha),G.pixelStorei(3317,O.unpackAlignment),z.isDataTexture?G.texSubImage2D(3553,N,E.x,E.y,W,he,Se,Te,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(3553,N,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,Se,z.mipmaps[0].data):G.texSubImage2D(3553,N,E.x,E.y,Se,Te,z.image),N===0&&O.generateMipmaps&&G.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(E,z,O,N,W=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=E.max.x-E.min.x+1,Se=E.max.y-E.min.y+1,Te=E.max.z-E.min.z+1,we=se.convert(N.format),Ne=se.convert(N.type);let be;if(N.isData3DTexture)ge.setTexture3D(N,0),be=32879;else if(N.isDataArrayTexture)ge.setTexture2DArray(N,0),be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,N.flipY),G.pixelStorei(37441,N.premultiplyAlpha),G.pixelStorei(3317,N.unpackAlignment);const Pe=G.getParameter(3314),Ze=G.getParameter(32878),zi=G.getParameter(3316),hr=G.getParameter(3315),pr=G.getParameter(32877),bn=O.isCompressedTexture?O.mipmaps[0]:O.image;G.pixelStorei(3314,bn.width),G.pixelStorei(32878,bn.height),G.pixelStorei(3316,E.min.x),G.pixelStorei(3315,E.min.y),G.pixelStorei(32877,E.min.z),O.isDataTexture||O.isData3DTexture?G.texSubImage3D(be,W,z.x,z.y,z.z,he,Se,Te,we,Ne,bn.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(be,W,z.x,z.y,z.z,he,Se,Te,we,bn.data)):G.texSubImage3D(be,W,z.x,z.y,z.z,he,Se,Te,we,Ne,bn),G.pixelStorei(3314,Pe),G.pixelStorei(32878,Ze),G.pixelStorei(3316,zi),G.pixelStorei(3315,hr),G.pixelStorei(32877,pr),W===0&&N.generateMipmaps&&G.generateMipmap(be),ue.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ge.setTextureCube(E,0):E.isData3DTexture?ge.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ge.setTexture2DArray(E,0):ge.setTexture2D(E,0),ue.unbindTexture()},this.resetState=function(){p=0,_=0,v=null,ue.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class HM extends vg{}HM.prototype.isWebGL1Renderer=!0;class XM extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.backgroundBlurriness=this.backgroundBlurriness),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class vf extends Ni{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new k,f=new k,g=[],x=[],m=[],h=[];for(let p=0;p<=i;p++){const _=[],v=p/i;let S=0;p==0&&o==0?S=.5/n:p==i&&l==Math.PI&&(S=-.5/n);for(let M=0;M<=n;M++){const C=M/n;d.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),h.push(C+S,1-v),_.push(u++)}c.push(_)}for(let p=0;p<i;p++)for(let _=0;_<n;_++){const v=c[p][_+1],S=c[p][_],M=c[p+1][_],C=c[p+1][_+1];(p!==0||o>0)&&g.push(v,S,C),(p!==i-1||l<Math.PI)&&g.push(S,M,C)}this.setIndex(g),this.setAttribute("position",new Fn(x,3)),this.setAttribute("normal",new Fn(m,3)),this.setAttribute("uv",new Fn(h,2))}static fromJSON(e){return new vf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);function jM(){const t=new vf(1,64,64),e=new mf({color:11206655,wireframe:!0,wireframeLinewidth:1});return new Zn(t,e)}var xg={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qM=Jr.exports,$M=Symbol.for("react.element"),YM=Symbol.for("react.fragment"),ZM=Object.prototype.hasOwnProperty,KM=qM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QM={key:!0,ref:!0,__self:!0,__source:!0};function yg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ZM.call(e,i)&&!QM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$M,type:t,key:s,ref:o,props:r,_owner:KM.current}}ul.Fragment=YM;ul.jsx=yg;ul.jsxs=yg;(function(t){t.exports=ul})(xg);const Wa=xg.exports.jsx;function JM(){const t=new XM,e=new sn(50,window.innerWidth/window.innerHeight,.01,2e3);e.position.z=2;const n=new vg;return[t,e,n]}function Sg(t,e,n){n.render(t,e)}const Mg=[];function wg(t,e,n){requestAnimationFrame(()=>wg(t,e,n)),Mg.forEach(i=>{var r;(r=i.animation)==null||r.call(i)}),Sg(t,e,n)}function ew(){var s;const[t,e,n]=JM();n.setSize(window.innerWidth,window.innerHeight),(s=document.getElementById("canvas"))==null||s.appendChild(n.domElement);function i(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),Sg(t,e,n)}window.addEventListener("resize",i,!1);const r=jM();r.animation=function(){this.rotation.x+=.001,this.rotation.y+=.001},Mg.push(r),t.add(r),wg(t,e,n)}const tw=t=>{const e=Jr.exports.useRef(!1);Jr.exports.useEffect(()=>{e.current||(e.current=!0,t())},[])};function nw(){return tw(ew),Wa("div",{id:"canvas"})}function iw(){return Wa(nw,{})}_u.createRoot(document.getElementById("root")).render(Wa(Hg.StrictMode,{children:Wa(iw,{})}));
