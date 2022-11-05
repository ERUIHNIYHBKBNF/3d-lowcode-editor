(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Gg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jr={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Symbol.for("react.element"),Wg=Symbol.for("react.portal"),Hg=Symbol.for("react.fragment"),Xg=Symbol.for("react.strict_mode"),jg=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Yg=Symbol.for("react.forward_ref"),Zg=Symbol.for("react.suspense"),Kg=Symbol.for("react.memo"),Qg=Symbol.for("react.lazy"),Af=Symbol.iterator;function Jg(n){return n===null||typeof n!="object"?null:(n=Af&&n[Af]||n["@@iterator"],typeof n=="function"?n:null)}var tp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},np=Object.assign,ip={};function ds(n,e,t){this.props=n,this.context=e,this.refs=ip,this.updater=t||tp}ds.prototype.isReactComponent={};ds.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ds.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function rp(){}rp.prototype=ds.prototype;function Tc(n,e,t){this.props=n,this.context=e,this.refs=ip,this.updater=t||tp}var Cc=Tc.prototype=new rp;Cc.constructor=Tc;np(Cc,ds.prototype);Cc.isPureReactComponent=!0;var Lf=Array.isArray,sp=Object.prototype.hasOwnProperty,bc={current:null},op={key:!0,ref:!0,__self:!0,__source:!0};function ap(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sp.call(e,i)&&!op.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:fo,type:n,key:s,ref:o,props:r,_owner:bc.current}}function e0(n,e){return{$$typeof:fo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ac(n){return typeof n=="object"&&n!==null&&n.$$typeof===fo}function t0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Pf=/\/+/g;function vl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?t0(""+n.key):e.toString(36)}function la(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case fo:case Wg:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+vl(o,0):i,Lf(r)?(t="",n!=null&&(t=n.replace(Pf,"$&/")+"/"),la(r,e,t,"",function(u){return u})):r!=null&&(Ac(r)&&(r=e0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Pf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Lf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+vl(s,a);o+=la(s,e,t,l,r)}else if(l=Jg(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+vl(s,a++),o+=la(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wo(n,e,t){if(n==null)return n;var i=[],r=0;return la(n,i,"","",function(s){return e.call(t,s,r++)}),i}function n0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Rt={current:null},ua={transition:null},i0={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:ua,ReactCurrentOwner:bc};Ae.Children={map:wo,forEach:function(n,e,t){wo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return wo(n,function(){e++}),e},toArray:function(n){return wo(n,function(e){return e})||[]},only:function(n){if(!Ac(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ae.Component=ds;Ae.Fragment=Hg;Ae.Profiler=jg;Ae.PureComponent=Tc;Ae.StrictMode=Xg;Ae.Suspense=Zg;Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i0;Ae.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=np({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bc.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)sp.call(e,l)&&!op.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:fo,type:n.type,key:r,ref:s,props:i,_owner:o}};Ae.createContext=function(n){return n={$$typeof:$g,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:qg,_context:n},n.Consumer=n};Ae.createElement=ap;Ae.createFactory=function(n){var e=ap.bind(null,n);return e.type=n,e};Ae.createRef=function(){return{current:null}};Ae.forwardRef=function(n){return{$$typeof:Yg,render:n}};Ae.isValidElement=Ac;Ae.lazy=function(n){return{$$typeof:Qg,_payload:{_status:-1,_result:n},_init:n0}};Ae.memo=function(n,e){return{$$typeof:Kg,type:n,compare:e===void 0?null:e}};Ae.startTransition=function(n){var e=ua.transition;ua.transition={};try{n()}finally{ua.transition=e}};Ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ae.useCallback=function(n,e){return Rt.current.useCallback(n,e)};Ae.useContext=function(n){return Rt.current.useContext(n)};Ae.useDebugValue=function(){};Ae.useDeferredValue=function(n){return Rt.current.useDeferredValue(n)};Ae.useEffect=function(n,e){return Rt.current.useEffect(n,e)};Ae.useId=function(){return Rt.current.useId()};Ae.useImperativeHandle=function(n,e,t){return Rt.current.useImperativeHandle(n,e,t)};Ae.useInsertionEffect=function(n,e){return Rt.current.useInsertionEffect(n,e)};Ae.useLayoutEffect=function(n,e){return Rt.current.useLayoutEffect(n,e)};Ae.useMemo=function(n,e){return Rt.current.useMemo(n,e)};Ae.useReducer=function(n,e,t){return Rt.current.useReducer(n,e,t)};Ae.useRef=function(n){return Rt.current.useRef(n)};Ae.useState=function(n){return Rt.current.useState(n)};Ae.useSyncExternalStore=function(n,e,t){return Rt.current.useSyncExternalStore(n,e,t)};Ae.useTransition=function(){return Rt.current.useTransition()};Ae.version="18.2.0";(function(n){n.exports=Ae})(Jr);const r0=Gg(Jr.exports);var Eu={},lp={exports:{}},Kt={},up={exports:{}},cp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(R,L){var I=R.length;R.push(L);e:for(;0<I;){var q=I-1>>>1,j=R[q];if(0<r(j,L))R[q]=L,R[I]=j,I=q;else break e}}function t(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var L=R[0],I=R.pop();if(I!==L){R[0]=I;e:for(var q=0,j=R.length,K=j>>>1;q<K;){var oe=2*(q+1)-1,ve=R[oe],G=oe+1,Le=R[G];if(0>r(ve,I))G<j&&0>r(Le,ve)?(R[q]=Le,R[G]=I,q=G):(R[q]=ve,R[oe]=I,q=oe);else if(G<j&&0>r(Le,I))R[q]=Le,R[G]=I,q=G;else break e}}return L}function r(R,L){var I=R.sortIndex-L.sortIndex;return I!==0?I:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,x=!1,m=!1,h=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var L=t(u);L!==null;){if(L.callback===null)i(u);else if(L.startTime<=R)i(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=t(u)}}function S(R){if(m=!1,v(R),!x)if(t(l)!==null)x=!0,Z(M);else{var L=t(u);L!==null&&Q(S,L.startTime-R)}}function M(R,L){x=!1,m&&(m=!1,p(y),y=-1),g=!0;var I=f;try{for(v(L),d=t(l);d!==null&&(!(d.expirationTime>L)||R&&!$());){var q=d.callback;if(typeof q=="function"){d.callback=null,f=d.priorityLevel;var j=q(d.expirationTime<=L);L=n.unstable_now(),typeof j=="function"?d.callback=j:d===t(l)&&i(l),v(L)}else i(l);d=t(l)}if(d!==null)var K=!0;else{var oe=t(u);oe!==null&&Q(S,oe.startTime-L),K=!1}return K}finally{d=null,f=I,g=!1}}var T=!1,A=null,y=-1,b=5,D=-1;function $(){return!(n.unstable_now()-D<b)}function ie(){if(A!==null){var R=n.unstable_now();D=R;var L=!0;try{L=A(!0,R)}finally{L?U():(T=!1,A=null)}}else T=!1}var U;if(typeof _=="function")U=function(){_(ie)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,X=F.port2;F.port1.onmessage=ie,U=function(){X.postMessage(null)}}else U=function(){h(ie,0)};function Z(R){A=R,T||(T=!0,U())}function Q(R,L){y=h(function(){R(n.unstable_now())},L)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_continueExecution=function(){x||g||(x=!0,Z(M))},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(R){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var I=f;f=L;try{return R()}finally{f=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var I=f;f=R;try{return L()}finally{f=I}},n.unstable_scheduleCallback=function(R,L,I){var q=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?q+I:q):I=q,R){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=I+j,R={id:c++,callback:L,priorityLevel:R,startTime:I,expirationTime:j,sortIndex:-1},I>q?(R.sortIndex=I,e(u,R),t(l)===null&&R===t(u)&&(m?(p(y),y=-1):m=!0,Q(S,I-q))):(R.sortIndex=j,e(l,R),x||g||(x=!0,Z(M))),R},n.unstable_shouldYield=$,n.unstable_wrapCallback=function(R){var L=f;return function(){var I=f;f=L;try{return R.apply(this,arguments)}finally{f=I}}}})(cp);(function(n){n.exports=cp})(up);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=Jr.exports,Zt=up.exports;function Y(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dp=new Set,qs={};function fr(n,e){es(n,e),es(n+"Capture",e)}function es(n,e){for(qs[n]=e,n=0;n<e.length;n++)dp.add(e[n])}var ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=Object.prototype.hasOwnProperty,s0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Df={},Rf={};function o0(n){return Tu.call(Rf,n)?!0:Tu.call(Df,n)?!1:s0.test(n)?Rf[n]=!0:(Df[n]=!0,!1)}function a0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function l0(n,e,t,i){if(e===null||typeof e>"u"||a0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function It(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){yt[n]=new It(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];yt[e]=new It(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){yt[n]=new It(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){yt[n]=new It(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){yt[n]=new It(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){yt[n]=new It(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){yt[n]=new It(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){yt[n]=new It(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){yt[n]=new It(n,5,!1,n.toLowerCase(),null,!1,!1)});var Lc=/[\-:]([a-z])/g;function Pc(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Lc,Pc);yt[e]=new It(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Lc,Pc);yt[e]=new It(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Lc,Pc);yt[e]=new It(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){yt[n]=new It(n,1,!1,n.toLowerCase(),null,!1,!1)});yt.xlinkHref=new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){yt[n]=new It(n,1,!1,n.toLowerCase(),null,!0,!0)});function Dc(n,e,t,i){var r=yt.hasOwnProperty(e)?yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l0(e,t,r,i)&&(t=null),i||r===null?o0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ri=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),Rr=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),Rc=Symbol.for("react.strict_mode"),Cu=Symbol.for("react.profiler"),hp=Symbol.for("react.provider"),pp=Symbol.for("react.context"),Ic=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),Nc=Symbol.for("react.memo"),pi=Symbol.for("react.lazy"),mp=Symbol.for("react.offscreen"),If=Symbol.iterator;function vs(n){return n===null||typeof n!="object"?null:(n=If&&n[If]||n["@@iterator"],typeof n=="function"?n:null)}var Ye=Object.assign,xl;function Ps(n){if(xl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);xl=e&&e[1]||""}return`
`+xl+n}var yl=!1;function Sl(n,e){if(!n||yl)return"";yl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ps(n):""}function u0(n){switch(n.tag){case 5:return Ps(n.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return n=Sl(n.type,!1),n;case 11:return n=Sl(n.type.render,!1),n;case 1:return n=Sl(n.type,!0),n;default:return""}}function Lu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ir:return"Fragment";case Rr:return"Portal";case Cu:return"Profiler";case Rc:return"StrictMode";case bu:return"Suspense";case Au:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case pp:return(n.displayName||"Context")+".Consumer";case hp:return(n._context.displayName||"Context")+".Provider";case Ic:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Nc:return e=n.displayName||null,e!==null?e:Lu(n.type)||"Memo";case pi:e=n._payload,n=n._init;try{return Lu(n(e))}catch{}}return null}function c0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(e);case 8:return e===Rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function gp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f0(n){var e=gp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function To(n){n._valueTracker||(n._valueTracker=f0(n))}function _p(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=gp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function wa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Pu(n,e){var t=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Nf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Pi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vp(n,e){e=e.checked,e!=null&&Dc(n,"checked",e,!1)}function Du(n,e){vp(n,e);var t=Pi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ru(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ru(n,e.type,Pi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function zf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ru(n,e,t){(e!=="number"||wa(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ds=Array.isArray;function Xr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Pi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Iu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Y(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ff(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Y(92));if(Ds(t)){if(1<t.length)throw Error(Y(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Pi(t)}}function xp(n,e){var t=Pi(e.value),i=Pi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function kf(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function yp(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?yp(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Co,Sp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Co.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function $s(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d0=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(n){d0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Fs[e]=Fs[n]})});function Mp(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Fs.hasOwnProperty(n)&&Fs[n]?(""+e).trim():e+"px"}function wp(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Mp(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var h0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zu(n,e){if(e){if(h0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Y(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Y(62))}}function Fu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ku=null;function zc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Uu=null,jr=null,qr=null;function Uf(n){if(n=mo(n)){if(typeof Uu!="function")throw Error(Y(280));var e=n.stateNode;e&&(e=Ja(e),Uu(n.stateNode,n.type,e))}}function Ep(n){jr?qr?qr.push(n):qr=[n]:jr=n}function Tp(){if(jr){var n=jr,e=qr;if(qr=jr=null,Uf(n),e)for(n=0;n<e.length;n++)Uf(e[n])}}function Cp(n,e){return n(e)}function bp(){}var Ml=!1;function Ap(n,e,t){if(Ml)return n(e,t);Ml=!0;try{return Cp(n,e,t)}finally{Ml=!1,(jr!==null||qr!==null)&&(bp(),Tp())}}function Ys(n,e){var t=n.stateNode;if(t===null)return null;var i=Ja(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Y(231,e,typeof t));return t}var Ou=!1;if(ei)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{Ou=!1}function p0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ks=!1,Ea=null,Ta=!1,Bu=null,m0={onError:function(n){ks=!0,Ea=n}};function g0(n,e,t,i,r,s,o,a,l){ks=!1,Ea=null,p0.apply(m0,arguments)}function _0(n,e,t,i,r,s,o,a,l){if(g0.apply(this,arguments),ks){if(ks){var u=Ea;ks=!1,Ea=null}else throw Error(Y(198));Ta||(Ta=!0,Bu=u)}}function dr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Lp(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Of(n){if(dr(n)!==n)throw Error(Y(188))}function v0(n){var e=n.alternate;if(!e){if(e=dr(n),e===null)throw Error(Y(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Of(r),n;if(s===i)return Of(r),e;s=s.sibling}throw Error(Y(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Y(189))}}if(t.alternate!==i)throw Error(Y(190))}if(t.tag!==3)throw Error(Y(188));return t.stateNode.current===t?n:e}function Pp(n){return n=v0(n),n!==null?Dp(n):null}function Dp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Dp(n);if(e!==null)return e;n=n.sibling}return null}var Rp=Zt.unstable_scheduleCallback,Bf=Zt.unstable_cancelCallback,x0=Zt.unstable_shouldYield,y0=Zt.unstable_requestPaint,Je=Zt.unstable_now,S0=Zt.unstable_getCurrentPriorityLevel,Fc=Zt.unstable_ImmediatePriority,Ip=Zt.unstable_UserBlockingPriority,Ca=Zt.unstable_NormalPriority,M0=Zt.unstable_LowPriority,Np=Zt.unstable_IdlePriority,Ya=null,In=null;function w0(n){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Ya,n,void 0,(n.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:C0,E0=Math.log,T0=Math.LN2;function C0(n){return n>>>=0,n===0?32:31-(E0(n)/T0|0)|0}var bo=64,Ao=4194304;function Rs(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ba(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Rs(a):(s&=o,s!==0&&(i=Rs(s)))}else o=t&~r,o!==0?i=Rs(o):s!==0&&(i=Rs(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-wn(e),r=1<<t,i|=n[t],e&=~r;return i}function b0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function A0(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=b0(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Vu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zp(){var n=bo;return bo<<=1,(bo&4194240)===0&&(bo=64),n}function wl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ho(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-wn(e),n[e]=t}function L0(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-wn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function kc(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-wn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Fe=0;function Fp(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kp,Uc,Up,Op,Bp,Gu=!1,Lo=[],Si=null,Mi=null,wi=null,Zs=new Map,Ks=new Map,gi=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vf(n,e){switch(n){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":Mi=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":Zs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(e.pointerId)}}function ys(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=mo(e),e!==null&&Uc(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function D0(n,e,t,i,r){switch(e){case"focusin":return Si=ys(Si,n,e,t,i,r),!0;case"dragenter":return Mi=ys(Mi,n,e,t,i,r),!0;case"mouseover":return wi=ys(wi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Zs.set(s,ys(Zs.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ks.set(s,ys(Ks.get(s)||null,n,e,t,i,r)),!0}return!1}function Vp(n){var e=ji(n.target);if(e!==null){var t=dr(e);if(t!==null){if(e=t.tag,e===13){if(e=Lp(t),e!==null){n.blockedOn=e,Bp(n.priority,function(){Up(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ca(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Wu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ku=i,t.target.dispatchEvent(i),ku=null}else return e=mo(t),e!==null&&Uc(e),n.blockedOn=t,!1;e.shift()}return!0}function Gf(n,e,t){ca(n)&&t.delete(e)}function R0(){Gu=!1,Si!==null&&ca(Si)&&(Si=null),Mi!==null&&ca(Mi)&&(Mi=null),wi!==null&&ca(wi)&&(wi=null),Zs.forEach(Gf),Ks.forEach(Gf)}function Ss(n,e){n.blockedOn===e&&(n.blockedOn=null,Gu||(Gu=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,R0)))}function Qs(n){function e(r){return Ss(r,n)}if(0<Lo.length){Ss(Lo[0],n);for(var t=1;t<Lo.length;t++){var i=Lo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Si!==null&&Ss(Si,n),Mi!==null&&Ss(Mi,n),wi!==null&&Ss(wi,n),Zs.forEach(e),Ks.forEach(e),t=0;t<gi.length;t++)i=gi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<gi.length&&(t=gi[0],t.blockedOn===null);)Vp(t),t.blockedOn===null&&gi.shift()}var $r=ri.ReactCurrentBatchConfig,Aa=!0;function I0(n,e,t,i){var r=Fe,s=$r.transition;$r.transition=null;try{Fe=1,Oc(n,e,t,i)}finally{Fe=r,$r.transition=s}}function N0(n,e,t,i){var r=Fe,s=$r.transition;$r.transition=null;try{Fe=4,Oc(n,e,t,i)}finally{Fe=r,$r.transition=s}}function Oc(n,e,t,i){if(Aa){var r=Wu(n,e,t,i);if(r===null)Il(n,e,i,La,t),Vf(n,i);else if(D0(r,n,e,t,i))i.stopPropagation();else if(Vf(n,i),e&4&&-1<P0.indexOf(n)){for(;r!==null;){var s=mo(r);if(s!==null&&kp(s),s=Wu(n,e,t,i),s===null&&Il(n,e,i,La,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Il(n,e,i,null,t)}}var La=null;function Wu(n,e,t,i){if(La=null,n=zc(i),n=ji(n),n!==null)if(e=dr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Lp(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return La=n,null}function Gp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S0()){case Fc:return 1;case Ip:return 4;case Ca:case M0:return 16;case Np:return 536870912;default:return 16}default:return 16}}var vi=null,Bc=null,fa=null;function Wp(){if(fa)return fa;var n,e=Bc,t=e.length,i,r="value"in vi?vi.value:vi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return fa=r.slice(n,1<i?1-i:void 0)}function da(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Po(){return!0}function Wf(){return!1}function Qt(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Po:Wf,this.isPropagationStopped=Wf,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),e}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=Qt(hs),po=Ye({},hs,{view:0,detail:0}),z0=Qt(po),El,Tl,Ms,Za=Ye({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ms&&(Ms&&n.type==="mousemove"?(El=n.screenX-Ms.screenX,Tl=n.screenY-Ms.screenY):Tl=El=0,Ms=n),El)},movementY:function(n){return"movementY"in n?n.movementY:Tl}}),Hf=Qt(Za),F0=Ye({},Za,{dataTransfer:0}),k0=Qt(F0),U0=Ye({},po,{relatedTarget:0}),Cl=Qt(U0),O0=Ye({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=Qt(O0),V0=Ye({},hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),G0=Qt(V0),W0=Ye({},hs,{data:0}),Xf=Qt(W0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=j0[n])?!!e[n]:!1}function Gc(){return q0}var $0=Ye({},po,{key:function(n){if(n.key){var e=H0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=da(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?X0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(n){return n.type==="keypress"?da(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?da(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Y0=Qt($0),Z0=Ye({},Za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=Qt(Z0),K0=Ye({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),Q0=Qt(K0),J0=Ye({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),e_=Qt(J0),t_=Ye({},Za,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),n_=Qt(t_),i_=[9,13,27,32],Wc=ei&&"CompositionEvent"in window,Us=null;ei&&"documentMode"in document&&(Us=document.documentMode);var r_=ei&&"TextEvent"in window&&!Us,Hp=ei&&(!Wc||Us&&8<Us&&11>=Us),qf=String.fromCharCode(32),$f=!1;function Xp(n,e){switch(n){case"keyup":return i_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Nr=!1;function s_(n,e){switch(n){case"compositionend":return jp(e);case"keypress":return e.which!==32?null:($f=!0,qf);case"textInput":return n=e.data,n===qf&&$f?null:n;default:return null}}function o_(n,e){if(Nr)return n==="compositionend"||!Wc&&Xp(n,e)?(n=Wp(),fa=Bc=vi=null,Nr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hp&&e.locale!=="ko"?null:e.data;default:return null}}var a_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!a_[n.type]:e==="textarea"}function qp(n,e,t,i){Ep(i),e=Pa(e,"onChange"),0<e.length&&(t=new Vc("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Os=null,Js=null;function l_(n){rm(n,0)}function Ka(n){var e=kr(n);if(_p(e))return n}function u_(n,e){if(n==="change")return e}var $p=!1;if(ei){var bl;if(ei){var Al="oninput"in document;if(!Al){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),Al=typeof Zf.oninput=="function"}bl=Al}else bl=!1;$p=bl&&(!document.documentMode||9<document.documentMode)}function Kf(){Os&&(Os.detachEvent("onpropertychange",Yp),Js=Os=null)}function Yp(n){if(n.propertyName==="value"&&Ka(Js)){var e=[];qp(e,Js,n,zc(n)),Ap(l_,e)}}function c_(n,e,t){n==="focusin"?(Kf(),Os=e,Js=t,Os.attachEvent("onpropertychange",Yp)):n==="focusout"&&Kf()}function f_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ka(Js)}function d_(n,e){if(n==="click")return Ka(e)}function h_(n,e){if(n==="input"||n==="change")return Ka(e)}function p_(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Tn=typeof Object.is=="function"?Object.is:p_;function eo(n,e){if(Tn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Tu.call(e,r)||!Tn(n[r],e[r]))return!1}return!0}function Qf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jf(n,e){var t=Qf(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Qf(t)}}function Zp(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Zp(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Kp(){for(var n=window,e=wa();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=wa(n.document)}return e}function Hc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function m_(n){var e=Kp(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Zp(t.ownerDocument.documentElement,t)){if(i!==null&&Hc(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Jf(t,s);var o=Jf(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var g_=ei&&"documentMode"in document&&11>=document.documentMode,zr=null,Hu=null,Bs=null,Xu=!1;function ed(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xu||zr==null||zr!==wa(i)||(i=zr,"selectionStart"in i&&Hc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bs&&eo(Bs,i)||(Bs=i,i=Pa(Hu,"onSelect"),0<i.length&&(e=new Vc("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=zr)))}function Do(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Fr={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Ll={},Qp={};ei&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function Qa(n){if(Ll[n])return Ll[n];if(!Fr[n])return n;var e=Fr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Qp)return Ll[n]=e[t];return n}var Jp=Qa("animationend"),em=Qa("animationiteration"),tm=Qa("animationstart"),nm=Qa("transitionend"),im=new Map,td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(n,e){im.set(n,e),fr(e,[n])}for(var Pl=0;Pl<td.length;Pl++){var Dl=td[Pl],__=Dl.toLowerCase(),v_=Dl[0].toUpperCase()+Dl.slice(1);Ri(__,"on"+v_)}Ri(Jp,"onAnimationEnd");Ri(em,"onAnimationIteration");Ri(tm,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(nm,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Is="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));function nd(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,_0(i,e,void 0,n),n.currentTarget=null}function rm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;nd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;nd(r,a,u),s=l}}}if(Ta)throw n=Bu,Ta=!1,Bu=null,n}function Ge(n,e){var t=e[Zu];t===void 0&&(t=e[Zu]=new Set);var i=n+"__bubble";t.has(i)||(sm(e,n,2,!1),t.add(i))}function Rl(n,e,t){var i=0;e&&(i|=4),sm(t,n,i,e)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function to(n){if(!n[Ro]){n[Ro]=!0,dp.forEach(function(t){t!=="selectionchange"&&(x_.has(t)||Rl(t,!1,n),Rl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ro]||(e[Ro]=!0,Rl("selectionchange",!1,e))}}function sm(n,e,t,i){switch(Gp(e)){case 1:var r=I0;break;case 4:r=N0;break;default:r=Oc}t=r.bind(null,e,t,n),r=void 0,!Ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Il(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ji(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ap(function(){var u=s,c=zc(t),d=[];e:{var f=im.get(n);if(f!==void 0){var g=Vc,x=n;switch(n){case"keypress":if(da(t)===0)break e;case"keydown":case"keyup":g=Y0;break;case"focusin":x="focus",g=Cl;break;case"focusout":x="blur",g=Cl;break;case"beforeblur":case"afterblur":g=Cl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=k0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Q0;break;case Jp:case em:case tm:g=B0;break;case nm:g=e_;break;case"scroll":g=z0;break;case"wheel":g=n_;break;case"copy":case"cut":case"paste":g=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jf}var m=(e&4)!==0,h=!m&&n==="scroll",p=m?f!==null?f+"Capture":null:f;m=[];for(var _=u,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,p!==null&&(S=Ys(_,p),S!=null&&m.push(no(_,S,v)))),h)break;_=_.return}0<m.length&&(f=new g(f,x,null,t,c),d.push({event:f,listeners:m}))}}if((e&7)===0){e:{if(f=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",f&&t!==ku&&(x=t.relatedTarget||t.fromElement)&&(ji(x)||x[ti]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=t.relatedTarget||t.toElement,g=u,x=x?ji(x):null,x!==null&&(h=dr(x),x!==h||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(m=Hf,S="onMouseLeave",p="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(m=jf,S="onPointerLeave",p="onPointerEnter",_="pointer"),h=g==null?f:kr(g),v=x==null?f:kr(x),f=new m(S,_+"leave",g,t,c),f.target=h,f.relatedTarget=v,S=null,ji(c)===u&&(m=new m(p,_+"enter",x,t,c),m.target=v,m.relatedTarget=h,S=m),h=S,g&&x)t:{for(m=g,p=x,_=0,v=m;v;v=gr(v))_++;for(v=0,S=p;S;S=gr(S))v++;for(;0<_-v;)m=gr(m),_--;for(;0<v-_;)p=gr(p),v--;for(;_--;){if(m===p||p!==null&&m===p.alternate)break t;m=gr(m),p=gr(p)}m=null}else m=null;g!==null&&id(d,f,g,m,!1),x!==null&&h!==null&&id(d,h,x,m,!0)}}e:{if(f=u?kr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var M=u_;else if(Yf(f))if($p)M=h_;else{M=f_;var T=c_}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=d_);if(M&&(M=M(n,u))){qp(d,M,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Ru(f,"number",f.value)}switch(T=u?kr(u):window,n){case"focusin":(Yf(T)||T.contentEditable==="true")&&(zr=T,Hu=u,Bs=null);break;case"focusout":Bs=Hu=zr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,ed(d,t,c);break;case"selectionchange":if(g_)break;case"keydown":case"keyup":ed(d,t,c)}var A;if(Wc)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Nr?Xp(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Hp&&t.locale!=="ko"&&(Nr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Nr&&(A=Wp()):(vi=c,Bc="value"in vi?vi.value:vi.textContent,Nr=!0)),T=Pa(u,y),0<T.length&&(y=new Xf(y,n,null,t,c),d.push({event:y,listeners:T}),A?y.data=A:(A=jp(t),A!==null&&(y.data=A)))),(A=r_?s_(n,t):o_(n,t))&&(u=Pa(u,"onBeforeInput"),0<u.length&&(c=new Xf("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=A))}rm(d,e)})}function no(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Pa(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ys(n,t),s!=null&&i.unshift(no(n,s,r)),s=Ys(n,e),s!=null&&i.push(no(n,s,r))),n=n.return}return i}function gr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function id(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ys(t,s),l!=null&&o.unshift(no(t,l,a))):r||(l=Ys(t,s),l!=null&&o.push(no(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var y_=/\r\n?/g,S_=/\u0000|\uFFFD/g;function rd(n){return(typeof n=="string"?n:""+n).replace(y_,`
`).replace(S_,"")}function Io(n,e,t){if(e=rd(e),rd(n)!==e&&t)throw Error(Y(425))}function Da(){}var ju=null,qu=null;function $u(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yu=typeof setTimeout=="function"?setTimeout:void 0,M_=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,w_=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(n){return sd.resolve(null).then(n).catch(E_)}:Yu;function E_(n){setTimeout(function(){throw n})}function Nl(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Qs(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Qs(e)}function Ei(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function od(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ps=Math.random().toString(36).slice(2),Rn="__reactFiber$"+ps,io="__reactProps$"+ps,ti="__reactContainer$"+ps,Zu="__reactEvents$"+ps,T_="__reactListeners$"+ps,C_="__reactHandles$"+ps;function ji(n){var e=n[Rn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ti]||t[Rn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=od(n);n!==null;){if(t=n[Rn])return t;n=od(n)}return e}n=t,t=n.parentNode}return null}function mo(n){return n=n[Rn]||n[ti],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function kr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Y(33))}function Ja(n){return n[io]||null}var Ku=[],Ur=-1;function Ii(n){return{current:n}}function We(n){0>Ur||(n.current=Ku[Ur],Ku[Ur]=null,Ur--)}function Ve(n,e){Ur++,Ku[Ur]=n.current,n.current=e}var Di={},Ct=Ii(Di),Ut=Ii(!1),nr=Di;function ts(n,e){var t=n.type.contextTypes;if(!t)return Di;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Ot(n){return n=n.childContextTypes,n!=null}function Ra(){We(Ut),We(Ct)}function ad(n,e,t){if(Ct.current!==Di)throw Error(Y(168));Ve(Ct,e),Ve(Ut,t)}function om(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Y(108,c0(n)||"Unknown",r));return Ye({},t,i)}function Ia(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Di,nr=Ct.current,Ve(Ct,n),Ve(Ut,Ut.current),!0}function ld(n,e,t){var i=n.stateNode;if(!i)throw Error(Y(169));t?(n=om(n,e,nr),i.__reactInternalMemoizedMergedChildContext=n,We(Ut),We(Ct),Ve(Ct,n)):We(Ut),Ve(Ut,t)}var qn=null,el=!1,zl=!1;function am(n){qn===null?qn=[n]:qn.push(n)}function b_(n){el=!0,am(n)}function Ni(){if(!zl&&qn!==null){zl=!0;var n=0,e=Fe;try{var t=qn;for(Fe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}qn=null,el=!1}catch(r){throw qn!==null&&(qn=qn.slice(n+1)),Rp(Fc,Ni),r}finally{Fe=e,zl=!1}}return null}var Or=[],Br=0,Na=null,za=0,nn=[],rn=0,ir=null,Yn=1,Zn="";function Vi(n,e){Or[Br++]=za,Or[Br++]=Na,Na=n,za=e}function lm(n,e,t){nn[rn++]=Yn,nn[rn++]=Zn,nn[rn++]=ir,ir=n;var i=Yn;n=Zn;var r=32-wn(i)-1;i&=~(1<<r),t+=1;var s=32-wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Yn=1<<32-wn(e)+r|t<<r|i,Zn=s+n}else Yn=1<<s|t<<r|i,Zn=n}function Xc(n){n.return!==null&&(Vi(n,1),lm(n,1,0))}function jc(n){for(;n===Na;)Na=Or[--Br],Or[Br]=null,za=Or[--Br],Or[Br]=null;for(;n===ir;)ir=nn[--rn],nn[rn]=null,Zn=nn[--rn],nn[rn]=null,Yn=nn[--rn],nn[rn]=null}var Yt=null,$t=null,je=!1,yn=null;function um(n,e){var t=an(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function ud(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Yt=n,$t=Ei(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Yt=n,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ir!==null?{id:Yn,overflow:Zn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=an(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Yt=n,$t=null,!0):!1;default:return!1}}function Qu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ju(n){if(je){var e=$t;if(e){var t=e;if(!ud(n,e)){if(Qu(n))throw Error(Y(418));e=Ei(t.nextSibling);var i=Yt;e&&ud(n,e)?um(i,t):(n.flags=n.flags&-4097|2,je=!1,Yt=n)}}else{if(Qu(n))throw Error(Y(418));n.flags=n.flags&-4097|2,je=!1,Yt=n}}}function cd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yt=n}function No(n){if(n!==Yt)return!1;if(!je)return cd(n),je=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!$u(n.type,n.memoizedProps)),e&&(e=$t)){if(Qu(n))throw cm(),Error(Y(418));for(;e;)um(n,e),e=Ei(e.nextSibling)}if(cd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Y(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){$t=Ei(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}$t=null}}else $t=Yt?Ei(n.stateNode.nextSibling):null;return!0}function cm(){for(var n=$t;n;)n=Ei(n.nextSibling)}function ns(){$t=Yt=null,je=!1}function qc(n){yn===null?yn=[n]:yn.push(n)}var A_=ri.ReactCurrentBatchConfig;function vn(n,e){if(n&&n.defaultProps){e=Ye({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Fa=Ii(null),ka=null,Vr=null,$c=null;function Yc(){$c=Vr=ka=null}function Zc(n){var e=Fa.current;We(Fa),n._currentValue=e}function ec(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Yr(n,e){ka=n,$c=Vr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(kt=!0),n.firstContext=null)}function fn(n){var e=n._currentValue;if($c!==n)if(n={context:n,memoizedValue:e,next:null},Vr===null){if(ka===null)throw Error(Y(308));Vr=n,ka.dependencies={lanes:0,firstContext:n}}else Vr=Vr.next=n;return e}var qi=null;function Kc(n){qi===null?qi=[n]:qi.push(n)}function fm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Kc(e)):(t.next=r.next,r.next=t),e.interleaved=t,ni(n,i)}function ni(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var mi=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dm(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ti(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(De&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ni(n,t)}return r=i.interleaved,r===null?(e.next=e,Kc(i)):(e.next=r.next,r.next=e),i.interleaved=e,ni(n,t)}function ha(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,kc(n,t)}}function fd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ua(n,e,t,i){var r=n.updateQueue;mi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,m=a;switch(f=e,g=t,m.tag){case 1:if(x=m.payload,typeof x=="function"){d=x.call(g,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=m.payload,f=typeof x=="function"?x.call(g,d,f):x,f==null)break e;d=Ye({},d,f);break e;case 2:mi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);sr|=o,n.lanes=o,n.memoizedState=d}}function dd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Y(191,r));r.call(i)}}}var hm=new fp.Component().refs;function tc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ye({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var tl={isMounted:function(n){return(n=n._reactInternals)?dr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Dt(),r=bi(n),s=Qn(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ti(n,s,r),e!==null&&(En(e,n,r,i),ha(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Dt(),r=bi(n),s=Qn(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ti(n,s,r),e!==null&&(En(e,n,r,i),ha(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Dt(),i=bi(n),r=Qn(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ti(n,r,i),e!==null&&(En(e,n,i,t),ha(e,n,i))}};function hd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!eo(t,i)||!eo(r,s):!0}function pm(n,e,t){var i=!1,r=Di,s=e.contextType;return typeof s=="object"&&s!==null?s=fn(s):(r=Ot(e)?nr:Ct.current,i=e.contextTypes,s=(i=i!=null)?ts(n,r):Di),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function pd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&tl.enqueueReplaceState(e,e.state,null)}function nc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=hm,Qc(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=fn(s):(s=Ot(e)?nr:Ct.current,r.context=ts(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tl.enqueueReplaceState(r,r.state,null),Ua(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ws(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Y(309));var i=t.stateNode}if(!i)throw Error(Y(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===hm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Y(284));if(!t._owner)throw Error(Y(290,n))}return n}function zo(n,e){throw n=Object.prototype.toString.call(e),Error(Y(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function md(n){var e=n._init;return e(n._payload)}function mm(n){function e(p,_){if(n){var v=p.deletions;v===null?(p.deletions=[_],p.flags|=16):v.push(_)}}function t(p,_){if(!n)return null;for(;_!==null;)e(p,_),_=_.sibling;return null}function i(p,_){for(p=new Map;_!==null;)_.key!==null?p.set(_.key,_):p.set(_.index,_),_=_.sibling;return p}function r(p,_){return p=Ai(p,_),p.index=0,p.sibling=null,p}function s(p,_,v){return p.index=v,n?(v=p.alternate,v!==null?(v=v.index,v<_?(p.flags|=2,_):v):(p.flags|=2,_)):(p.flags|=1048576,_)}function o(p){return n&&p.alternate===null&&(p.flags|=2),p}function a(p,_,v,S){return _===null||_.tag!==6?(_=Gl(v,p.mode,S),_.return=p,_):(_=r(_,v),_.return=p,_)}function l(p,_,v,S){var M=v.type;return M===Ir?c(p,_,v.props.children,S,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===pi&&md(M)===_.type)?(S=r(_,v.props),S.ref=ws(p,_,v),S.return=p,S):(S=xa(v.type,v.key,v.props,null,p.mode,S),S.ref=ws(p,_,v),S.return=p,S)}function u(p,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Wl(v,p.mode,S),_.return=p,_):(_=r(_,v.children||[]),_.return=p,_)}function c(p,_,v,S,M){return _===null||_.tag!==7?(_=Ji(v,p.mode,S,M),_.return=p,_):(_=r(_,v),_.return=p,_)}function d(p,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Gl(""+_,p.mode,v),_.return=p,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Eo:return v=xa(_.type,_.key,_.props,null,p.mode,v),v.ref=ws(p,null,_),v.return=p,v;case Rr:return _=Wl(_,p.mode,v),_.return=p,_;case pi:var S=_._init;return d(p,S(_._payload),v)}if(Ds(_)||vs(_))return _=Ji(_,p.mode,v,null),_.return=p,_;zo(p,_)}return null}function f(p,_,v,S){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(p,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Eo:return v.key===M?l(p,_,v,S):null;case Rr:return v.key===M?u(p,_,v,S):null;case pi:return M=v._init,f(p,_,M(v._payload),S)}if(Ds(v)||vs(v))return M!==null?null:c(p,_,v,S,null);zo(p,v)}return null}function g(p,_,v,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(v)||null,a(_,p,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Eo:return p=p.get(S.key===null?v:S.key)||null,l(_,p,S,M);case Rr:return p=p.get(S.key===null?v:S.key)||null,u(_,p,S,M);case pi:var T=S._init;return g(p,_,v,T(S._payload),M)}if(Ds(S)||vs(S))return p=p.get(v)||null,c(_,p,S,M,null);zo(_,S)}return null}function x(p,_,v,S){for(var M=null,T=null,A=_,y=_=0,b=null;A!==null&&y<v.length;y++){A.index>y?(b=A,A=null):b=A.sibling;var D=f(p,A,v[y],S);if(D===null){A===null&&(A=b);break}n&&A&&D.alternate===null&&e(p,A),_=s(D,_,y),T===null?M=D:T.sibling=D,T=D,A=b}if(y===v.length)return t(p,A),je&&Vi(p,y),M;if(A===null){for(;y<v.length;y++)A=d(p,v[y],S),A!==null&&(_=s(A,_,y),T===null?M=A:T.sibling=A,T=A);return je&&Vi(p,y),M}for(A=i(p,A);y<v.length;y++)b=g(A,p,y,v[y],S),b!==null&&(n&&b.alternate!==null&&A.delete(b.key===null?y:b.key),_=s(b,_,y),T===null?M=b:T.sibling=b,T=b);return n&&A.forEach(function($){return e(p,$)}),je&&Vi(p,y),M}function m(p,_,v,S){var M=vs(v);if(typeof M!="function")throw Error(Y(150));if(v=M.call(v),v==null)throw Error(Y(151));for(var T=M=null,A=_,y=_=0,b=null,D=v.next();A!==null&&!D.done;y++,D=v.next()){A.index>y?(b=A,A=null):b=A.sibling;var $=f(p,A,D.value,S);if($===null){A===null&&(A=b);break}n&&A&&$.alternate===null&&e(p,A),_=s($,_,y),T===null?M=$:T.sibling=$,T=$,A=b}if(D.done)return t(p,A),je&&Vi(p,y),M;if(A===null){for(;!D.done;y++,D=v.next())D=d(p,D.value,S),D!==null&&(_=s(D,_,y),T===null?M=D:T.sibling=D,T=D);return je&&Vi(p,y),M}for(A=i(p,A);!D.done;y++,D=v.next())D=g(A,p,y,D.value,S),D!==null&&(n&&D.alternate!==null&&A.delete(D.key===null?y:D.key),_=s(D,_,y),T===null?M=D:T.sibling=D,T=D);return n&&A.forEach(function(ie){return e(p,ie)}),je&&Vi(p,y),M}function h(p,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Ir&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Eo:e:{for(var M=v.key,T=_;T!==null;){if(T.key===M){if(M=v.type,M===Ir){if(T.tag===7){t(p,T.sibling),_=r(T,v.props.children),_.return=p,p=_;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===pi&&md(M)===T.type){t(p,T.sibling),_=r(T,v.props),_.ref=ws(p,T,v),_.return=p,p=_;break e}t(p,T);break}else e(p,T);T=T.sibling}v.type===Ir?(_=Ji(v.props.children,p.mode,S,v.key),_.return=p,p=_):(S=xa(v.type,v.key,v.props,null,p.mode,S),S.ref=ws(p,_,v),S.return=p,p=S)}return o(p);case Rr:e:{for(T=v.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(p,_.sibling),_=r(_,v.children||[]),_.return=p,p=_;break e}else{t(p,_);break}else e(p,_);_=_.sibling}_=Wl(v,p.mode,S),_.return=p,p=_}return o(p);case pi:return T=v._init,h(p,_,T(v._payload),S)}if(Ds(v))return x(p,_,v,S);if(vs(v))return m(p,_,v,S);zo(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(p,_.sibling),_=r(_,v),_.return=p,p=_):(t(p,_),_=Gl(v,p.mode,S),_.return=p,p=_),o(p)):t(p,_)}return h}var is=mm(!0),gm=mm(!1),go={},Nn=Ii(go),ro=Ii(go),so=Ii(go);function $i(n){if(n===go)throw Error(Y(174));return n}function Jc(n,e){switch(Ve(so,e),Ve(ro,n),Ve(Nn,go),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Nu(e,n)}We(Nn),Ve(Nn,e)}function rs(){We(Nn),We(ro),We(so)}function _m(n){$i(so.current);var e=$i(Nn.current),t=Nu(e,n.type);e!==t&&(Ve(ro,n),Ve(Nn,t))}function ef(n){ro.current===n&&(We(Nn),We(ro))}var qe=Ii(0);function Oa(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fl=[];function tf(){for(var n=0;n<Fl.length;n++)Fl[n]._workInProgressVersionPrimary=null;Fl.length=0}var pa=ri.ReactCurrentDispatcher,kl=ri.ReactCurrentBatchConfig,rr=0,$e=null,st=null,dt=null,Ba=!1,Vs=!1,oo=0,L_=0;function Mt(){throw Error(Y(321))}function nf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Tn(n[t],e[t]))return!1;return!0}function rf(n,e,t,i,r,s){if(rr=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pa.current=n===null||n.memoizedState===null?I_:N_,n=t(i,r),Vs){s=0;do{if(Vs=!1,oo=0,25<=s)throw Error(Y(301));s+=1,dt=st=null,e.updateQueue=null,pa.current=z_,n=t(i,r)}while(Vs)}if(pa.current=Va,e=st!==null&&st.next!==null,rr=0,dt=st=$e=null,Ba=!1,e)throw Error(Y(300));return n}function sf(){var n=oo!==0;return oo=0,n}function Pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?$e.memoizedState=dt=n:dt=dt.next=n,dt}function dn(){if(st===null){var n=$e.alternate;n=n!==null?n.memoizedState:null}else n=st.next;var e=dt===null?$e.memoizedState:dt.next;if(e!==null)dt=e,st=n;else{if(n===null)throw Error(Y(310));st=n,n={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},dt===null?$e.memoizedState=dt=n:dt=dt.next=n}return dt}function ao(n,e){return typeof e=="function"?e(n):e}function Ul(n){var e=dn(),t=e.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=n;var i=st,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((rr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,$e.lanes|=c,sr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Tn(i,e.memoizedState)||(kt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,$e.lanes|=s,sr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Ol(n){var e=dn(),t=e.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Tn(s,e.memoizedState)||(kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function vm(){}function xm(n,e){var t=$e,i=dn(),r=e(),s=!Tn(i.memoizedState,r);if(s&&(i.memoizedState=r,kt=!0),i=i.queue,of(Mm.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||dt!==null&&dt.memoizedState.tag&1){if(t.flags|=2048,lo(9,Sm.bind(null,t,i,r,e),void 0,null),pt===null)throw Error(Y(349));(rr&30)!==0||ym(t,e,r)}return r}function ym(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Sm(n,e,t,i){e.value=t,e.getSnapshot=i,wm(e)&&Em(n)}function Mm(n,e,t){return t(function(){wm(e)&&Em(n)})}function wm(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Tn(n,t)}catch{return!0}}function Em(n){var e=ni(n,1);e!==null&&En(e,n,1,-1)}function gd(n){var e=Pn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:n},e.queue=n,n=n.dispatch=R_.bind(null,$e,n),[e.memoizedState,n]}function lo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Tm(){return dn().memoizedState}function ma(n,e,t,i){var r=Pn();$e.flags|=n,r.memoizedState=lo(1|e,t,void 0,i===void 0?null:i)}function nl(n,e,t,i){var r=dn();i=i===void 0?null:i;var s=void 0;if(st!==null){var o=st.memoizedState;if(s=o.destroy,i!==null&&nf(i,o.deps)){r.memoizedState=lo(e,t,s,i);return}}$e.flags|=n,r.memoizedState=lo(1|e,t,s,i)}function _d(n,e){return ma(8390656,8,n,e)}function of(n,e){return nl(2048,8,n,e)}function Cm(n,e){return nl(4,2,n,e)}function bm(n,e){return nl(4,4,n,e)}function Am(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Lm(n,e,t){return t=t!=null?t.concat([n]):null,nl(4,4,Am.bind(null,e,n),t)}function af(){}function Pm(n,e){var t=dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&nf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Dm(n,e){var t=dn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&nf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Rm(n,e,t){return(rr&21)===0?(n.baseState&&(n.baseState=!1,kt=!0),n.memoizedState=t):(Tn(t,e)||(t=zp(),$e.lanes|=t,sr|=t,n.baseState=!0),e)}function P_(n,e){var t=Fe;Fe=t!==0&&4>t?t:4,n(!0);var i=kl.transition;kl.transition={};try{n(!1),e()}finally{Fe=t,kl.transition=i}}function Im(){return dn().memoizedState}function D_(n,e,t){var i=bi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Nm(n))zm(e,t);else if(t=fm(n,e,t,i),t!==null){var r=Dt();En(t,n,i,r),Fm(t,e,i)}}function R_(n,e,t){var i=bi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Nm(n))zm(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Tn(a,o)){var l=e.interleaved;l===null?(r.next=r,Kc(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=fm(n,e,r,i),t!==null&&(r=Dt(),En(t,n,i,r),Fm(t,e,i))}}function Nm(n){var e=n.alternate;return n===$e||e!==null&&e===$e}function zm(n,e){Vs=Ba=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Fm(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,kc(n,t)}}var Va={readContext:fn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},I_={readContext:fn,useCallback:function(n,e){return Pn().memoizedState=[n,e===void 0?null:e],n},useContext:fn,useEffect:_d,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ma(4194308,4,Am.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ma(4194308,4,n,e)},useInsertionEffect:function(n,e){return ma(4,2,n,e)},useMemo:function(n,e){var t=Pn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Pn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=D_.bind(null,$e,n),[i.memoizedState,n]},useRef:function(n){var e=Pn();return n={current:n},e.memoizedState=n},useState:gd,useDebugValue:af,useDeferredValue:function(n){return Pn().memoizedState=n},useTransition:function(){var n=gd(!1),e=n[0];return n=P_.bind(null,n[1]),Pn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=$e,r=Pn();if(je){if(t===void 0)throw Error(Y(407));t=t()}else{if(t=e(),pt===null)throw Error(Y(349));(rr&30)!==0||ym(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,_d(Mm.bind(null,i,s,n),[n]),i.flags|=2048,lo(9,Sm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Pn(),e=pt.identifierPrefix;if(je){var t=Zn,i=Yn;t=(i&~(1<<32-wn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=oo++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=L_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},N_={readContext:fn,useCallback:Pm,useContext:fn,useEffect:of,useImperativeHandle:Lm,useInsertionEffect:Cm,useLayoutEffect:bm,useMemo:Dm,useReducer:Ul,useRef:Tm,useState:function(){return Ul(ao)},useDebugValue:af,useDeferredValue:function(n){var e=dn();return Rm(e,st.memoizedState,n)},useTransition:function(){var n=Ul(ao)[0],e=dn().memoizedState;return[n,e]},useMutableSource:vm,useSyncExternalStore:xm,useId:Im,unstable_isNewReconciler:!1},z_={readContext:fn,useCallback:Pm,useContext:fn,useEffect:of,useImperativeHandle:Lm,useInsertionEffect:Cm,useLayoutEffect:bm,useMemo:Dm,useReducer:Ol,useRef:Tm,useState:function(){return Ol(ao)},useDebugValue:af,useDeferredValue:function(n){var e=dn();return st===null?e.memoizedState=n:Rm(e,st.memoizedState,n)},useTransition:function(){var n=Ol(ao)[0],e=dn().memoizedState;return[n,e]},useMutableSource:vm,useSyncExternalStore:xm,useId:Im,unstable_isNewReconciler:!1};function ss(n,e){try{var t="",i=e;do t+=u0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Bl(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function ic(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var F_=typeof WeakMap=="function"?WeakMap:Map;function km(n,e,t){t=Qn(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Wa||(Wa=!0,hc=i),ic(n,e)},t}function Um(n,e,t){t=Qn(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){ic(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ic(n,e),typeof i!="function"&&(Ci===null?Ci=new Set([this]):Ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function vd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new F_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Z_.bind(null,n,e,t),e.then(n,n))}function xd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function yd(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Qn(-1,1),e.tag=2,Ti(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var k_=ri.ReactCurrentOwner,kt=!1;function Pt(n,e,t,i){e.child=n===null?gm(e,null,t,i):is(e,n.child,t,i)}function Sd(n,e,t,i,r){t=t.render;var s=e.ref;return Yr(e,r),i=rf(n,e,t,i,s,r),t=sf(),n!==null&&!kt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ii(n,e,r)):(je&&t&&Xc(e),e.flags|=1,Pt(n,e,i,r),e.child)}function Md(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!mf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Om(n,e,s,i,r)):(n=xa(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:eo,t(o,i)&&n.ref===e.ref)return ii(n,e,r)}return e.flags|=1,n=Ai(s,i),n.ref=e.ref,n.return=e,e.child=n}function Om(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(eo(s,i)&&n.ref===e.ref)if(kt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(kt=!0);else return e.lanes=n.lanes,ii(n,e,r)}return rc(n,e,t,i,r)}function Bm(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(Wr,jt),jt|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ve(Wr,jt),jt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ve(Wr,jt),jt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ve(Wr,jt),jt|=i;return Pt(n,e,r,t),e.child}function Vm(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function rc(n,e,t,i,r){var s=Ot(t)?nr:Ct.current;return s=ts(e,s),Yr(e,r),t=rf(n,e,t,i,s,r),i=sf(),n!==null&&!kt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ii(n,e,r)):(je&&i&&Xc(e),e.flags|=1,Pt(n,e,t,r),e.child)}function wd(n,e,t,i,r){if(Ot(t)){var s=!0;Ia(e)}else s=!1;if(Yr(e,r),e.stateNode===null)ga(n,e),pm(e,t,i),nc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=fn(u):(u=Ot(t)?nr:Ct.current,u=ts(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&pd(e,o,i,u),mi=!1;var f=e.memoizedState;o.state=f,Ua(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Ut.current||mi?(typeof c=="function"&&(tc(e,t,c,i),l=e.memoizedState),(a=mi||hd(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,dm(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:vn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=fn(l):(l=Ot(t)?nr:Ct.current,l=ts(e,l));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&pd(e,o,i,l),mi=!1,f=e.memoizedState,o.state=f,Ua(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||Ut.current||mi?(typeof g=="function"&&(tc(e,t,g,i),x=e.memoizedState),(u=mi||hd(e,t,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return sc(n,e,t,i,s,r)}function sc(n,e,t,i,r,s){Vm(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ld(e,t,!1),ii(n,e,s);i=e.stateNode,k_.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=is(e,n.child,null,s),e.child=is(e,null,a,s)):Pt(n,e,a,s),e.memoizedState=i.state,r&&ld(e,t,!0),e.child}function Gm(n){var e=n.stateNode;e.pendingContext?ad(n,e.pendingContext,e.pendingContext!==e.context):e.context&&ad(n,e.context,!1),Jc(n,e.containerInfo)}function Ed(n,e,t,i,r){return ns(),qc(r),e.flags|=256,Pt(n,e,t,i),e.child}var oc={dehydrated:null,treeContext:null,retryLane:0};function ac(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wm(n,e,t){var i=e.pendingProps,r=qe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ve(qe,r&1),n===null)return Ju(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sl(o,i,0,null),n=Ji(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ac(t),e.memoizedState=oc,n):lf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return U_(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ai(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ai(a,s):(s=Ji(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ac(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=oc,i}return s=n.child,n=s.sibling,i=Ai(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function lf(n,e){return e=sl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Fo(n,e,t,i){return i!==null&&qc(i),is(e,n.child,null,t),n=lf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function U_(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Bl(Error(Y(422))),Fo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=sl({mode:"visible",children:i.children},r,0,null),s=Ji(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&is(e,n.child,null,o),e.child.memoizedState=ac(o),e.memoizedState=oc,s);if((e.mode&1)===0)return Fo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Y(419)),i=Bl(s,i,void 0),Fo(n,e,o,i)}if(a=(o&n.childLanes)!==0,kt||a){if(i=pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ni(n,r),En(i,n,r,-1))}return pf(),i=Bl(Error(Y(421))),Fo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=K_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,$t=Ei(r.nextSibling),Yt=e,je=!0,yn=null,n!==null&&(nn[rn++]=Yn,nn[rn++]=Zn,nn[rn++]=ir,Yn=n.id,Zn=n.overflow,ir=e),e=lf(e,i.children),e.flags|=4096,e)}function Td(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),ec(n.return,e,t)}function Vl(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Hm(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Pt(n,e,i.children,t),i=qe.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Td(n,t,e);else if(n.tag===19)Td(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ve(qe,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Oa(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Vl(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Oa(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Vl(e,!0,t,null,s);break;case"together":Vl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ga(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ii(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),sr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(Y(153));if(e.child!==null){for(n=e.child,t=Ai(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ai(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function O_(n,e,t){switch(e.tag){case 3:Gm(e),ns();break;case 5:_m(e);break;case 1:Ot(e.type)&&Ia(e);break;case 4:Jc(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ve(Fa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ve(qe,qe.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?Wm(n,e,t):(Ve(qe,qe.current&1),n=ii(n,e,t),n!==null?n.sibling:null);Ve(qe,qe.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return Hm(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ve(qe,qe.current),i)break;return null;case 22:case 23:return e.lanes=0,Bm(n,e,t)}return ii(n,e,t)}var Xm,lc,jm,qm;Xm=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};lc=function(){};jm=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,$i(Nn.current);var s=null;switch(t){case"input":r=Pu(n,r),i=Pu(n,i),s=[];break;case"select":r=Ye({},r,{value:void 0}),i=Ye({},i,{value:void 0}),s=[];break;case"textarea":r=Iu(n,r),i=Iu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Da)}zu(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ge("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};qm=function(n,e,t,i){t!==i&&(e.flags|=4)};function Es(n,e){if(!je)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function wt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function B_(n,e,t){var i=e.pendingProps;switch(jc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return Ot(e.type)&&Ra(),wt(e),null;case 3:return i=e.stateNode,rs(),We(Ut),We(Ct),tf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(No(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,yn!==null&&(gc(yn),yn=null))),lc(n,e),wt(e),null;case 5:ef(e);var r=$i(so.current);if(t=e.type,n!==null&&e.stateNode!=null)jm(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Y(166));return wt(e),null}if(n=$i(Nn.current),No(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Rn]=e,i[io]=s,n=(e.mode&1)!==0,t){case"dialog":Ge("cancel",i),Ge("close",i);break;case"iframe":case"object":case"embed":Ge("load",i);break;case"video":case"audio":for(r=0;r<Is.length;r++)Ge(Is[r],i);break;case"source":Ge("error",i);break;case"img":case"image":case"link":Ge("error",i),Ge("load",i);break;case"details":Ge("toggle",i);break;case"input":Nf(i,s),Ge("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ge("invalid",i);break;case"textarea":Ff(i,s),Ge("invalid",i)}zu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Io(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Io(i.textContent,a,n),r=["children",""+a]):qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ge("scroll",i)}switch(t){case"input":To(i),zf(i,s,!0);break;case"textarea":To(i),kf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Da)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=yp(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Rn]=e,n[io]=i,Xm(n,e,!1,!1),e.stateNode=n;e:{switch(o=Fu(t,i),t){case"dialog":Ge("cancel",n),Ge("close",n),r=i;break;case"iframe":case"object":case"embed":Ge("load",n),r=i;break;case"video":case"audio":for(r=0;r<Is.length;r++)Ge(Is[r],n);r=i;break;case"source":Ge("error",n),r=i;break;case"img":case"image":case"link":Ge("error",n),Ge("load",n),r=i;break;case"details":Ge("toggle",n),r=i;break;case"input":Nf(n,i),r=Pu(n,i),Ge("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ye({},i,{value:void 0}),Ge("invalid",n);break;case"textarea":Ff(n,i),r=Iu(n,i),Ge("invalid",n);break;default:r=i}zu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wp(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&$s(n,l):typeof l=="number"&&$s(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ge("scroll",n):l!=null&&Dc(n,s,l,o))}switch(t){case"input":To(n),zf(n,i,!1);break;case"textarea":To(n),kf(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Pi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Xr(n,!!i.multiple,s,!1):i.defaultValue!=null&&Xr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Da)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(n&&e.stateNode!=null)qm(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Y(166));if(t=$i(so.current),$i(Nn.current),No(e)){if(i=e.stateNode,t=e.memoizedProps,i[Rn]=e,(s=i.nodeValue!==t)&&(n=Yt,n!==null))switch(n.tag){case 3:Io(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Io(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Rn]=e,e.stateNode=i}return wt(e),null;case 13:if(We(qe),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(je&&$t!==null&&(e.mode&1)!==0&&(e.flags&128)===0)cm(),ns(),e.flags|=98560,s=!1;else if(s=No(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Y(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));s[Rn]=e}else ns(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else yn!==null&&(gc(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(qe.current&1)!==0?ot===0&&(ot=3):pf())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return rs(),lc(n,e),n===null&&to(e.stateNode.containerInfo),wt(e),null;case 10:return Zc(e.type._context),wt(e),null;case 17:return Ot(e.type)&&Ra(),wt(e),null;case 19:if(We(qe),s=e.memoizedState,s===null)return wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Es(s,!1);else{if(ot!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Oa(n),o!==null){for(e.flags|=128,Es(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ve(qe,qe.current&1|2),e.child}n=n.sibling}s.tail!==null&&Je()>os&&(e.flags|=128,i=!0,Es(s,!1),e.lanes=4194304)}else{if(!i)if(n=Oa(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return wt(e),null}else 2*Je()-s.renderingStartTime>os&&t!==1073741824&&(e.flags|=128,i=!0,Es(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Je(),e.sibling=null,t=qe.current,Ve(qe,i?t&1|2:t&1),e):(wt(e),null);case 22:case 23:return hf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(jt&1073741824)!==0&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(Y(156,e.tag))}function V_(n,e){switch(jc(e),e.tag){case 1:return Ot(e.type)&&Ra(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return rs(),We(Ut),We(Ct),tf(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return ef(e),null;case 13:if(We(qe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Y(340));ns()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return We(qe),null;case 4:return rs(),null;case 10:return Zc(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var ko=!1,Tt=!1,G_=typeof WeakSet=="function"?WeakSet:Set,le=null;function Gr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Qe(n,e,i)}else t.current=null}function uc(n,e,t){try{t()}catch(i){Qe(n,e,i)}}var Cd=!1;function W_(n,e){if(ju=Aa,n=Kp(),Hc(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var g;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(qu={focusedElem:n,selectionRange:t},Aa=!1,le=e;le!==null;)if(e=le,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,le=n;else for(;le!==null;){e=le;try{var x=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var m=x.memoizedProps,h=x.memoizedState,p=e.stateNode,_=p.getSnapshotBeforeUpdate(e.elementType===e.type?m:vn(e.type,m),h);p.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(S){Qe(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,le=n;break}le=e.return}return x=Cd,Cd=!1,x}function Gs(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&uc(e,t,s)}r=r.next}while(r!==i)}}function il(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function cc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $m(n){var e=n.alternate;e!==null&&(n.alternate=null,$m(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Rn],delete e[io],delete e[Zu],delete e[T_],delete e[C_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ym(n){return n.tag===5||n.tag===3||n.tag===4}function bd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function fc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Da));else if(i!==4&&(n=n.child,n!==null))for(fc(n,e,t),n=n.sibling;n!==null;)fc(n,e,t),n=n.sibling}function dc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(dc(n,e,t),n=n.sibling;n!==null;)dc(n,e,t),n=n.sibling}var vt=null,xn=!1;function oi(n,e,t){for(t=t.child;t!==null;)Zm(n,e,t),t=t.sibling}function Zm(n,e,t){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Ya,t)}catch{}switch(t.tag){case 5:Tt||Gr(t,e);case 6:var i=vt,r=xn;vt=null,oi(n,e,t),vt=i,xn=r,vt!==null&&(xn?(n=vt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):vt.removeChild(t.stateNode));break;case 18:vt!==null&&(xn?(n=vt,t=t.stateNode,n.nodeType===8?Nl(n.parentNode,t):n.nodeType===1&&Nl(n,t),Qs(n)):Nl(vt,t.stateNode));break;case 4:i=vt,r=xn,vt=t.stateNode.containerInfo,xn=!0,oi(n,e,t),vt=i,xn=r;break;case 0:case 11:case 14:case 15:if(!Tt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&uc(t,e,o),r=r.next}while(r!==i)}oi(n,e,t);break;case 1:if(!Tt&&(Gr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Qe(t,e,a)}oi(n,e,t);break;case 21:oi(n,e,t);break;case 22:t.mode&1?(Tt=(i=Tt)||t.memoizedState!==null,oi(n,e,t),Tt=i):oi(n,e,t);break;default:oi(n,e,t)}}function Ad(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new G_),e.forEach(function(i){var r=Q_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function hn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,xn=!1;break e;case 3:vt=a.stateNode.containerInfo,xn=!0;break e;case 4:vt=a.stateNode.containerInfo,xn=!0;break e}a=a.return}if(vt===null)throw Error(Y(160));Zm(s,o,r),vt=null,xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Qe(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Km(e,n),e=e.sibling}function Km(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hn(e,n),Ln(n),i&4){try{Gs(3,n,n.return),il(3,n)}catch(m){Qe(n,n.return,m)}try{Gs(5,n,n.return)}catch(m){Qe(n,n.return,m)}}break;case 1:hn(e,n),Ln(n),i&512&&t!==null&&Gr(t,t.return);break;case 5:if(hn(e,n),Ln(n),i&512&&t!==null&&Gr(t,t.return),n.flags&32){var r=n.stateNode;try{$s(r,"")}catch(m){Qe(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vp(r,s),Fu(a,o);var u=Fu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?wp(r,d):c==="dangerouslySetInnerHTML"?Sp(r,d):c==="children"?$s(r,d):Dc(r,c,d,u)}switch(a){case"input":Du(r,s);break;case"textarea":xp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Xr(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Xr(r,!!s.multiple,s.defaultValue,!0):Xr(r,!!s.multiple,s.multiple?[]:"",!1))}r[io]=s}catch(m){Qe(n,n.return,m)}}break;case 6:if(hn(e,n),Ln(n),i&4){if(n.stateNode===null)throw Error(Y(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Qe(n,n.return,m)}}break;case 3:if(hn(e,n),Ln(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(m){Qe(n,n.return,m)}break;case 4:hn(e,n),Ln(n);break;case 13:hn(e,n),Ln(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ff=Je())),i&4&&Ad(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Tt=(u=Tt)||c,hn(e,n),Tt=u):hn(e,n),Ln(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(le=n,c=n.child;c!==null;){for(d=le=c;le!==null;){switch(f=le,g=f.child,f.tag){case 0:case 11:case 14:case 15:Gs(4,f,f.return);break;case 1:Gr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(m){Qe(i,t,m)}}break;case 5:Gr(f,f.return);break;case 22:if(f.memoizedState!==null){Pd(d);continue}}g!==null?(g.return=f,le=g):Pd(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mp("display",o))}catch(m){Qe(n,n.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){Qe(n,n.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:hn(e,n),Ln(n),i&4&&Ad(n);break;case 21:break;default:hn(e,n),Ln(n)}}function Ln(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Ym(t)){var i=t;break e}t=t.return}throw Error(Y(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($s(r,""),i.flags&=-33);var s=bd(n);dc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=bd(n);fc(n,a,o);break;default:throw Error(Y(161))}}catch(l){Qe(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function H_(n,e,t){le=n,Qm(n)}function Qm(n,e,t){for(var i=(n.mode&1)!==0;le!==null;){var r=le,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ko;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Tt;a=ko;var u=Tt;if(ko=o,(Tt=l)&&!u)for(le=r;le!==null;)o=le,l=o.child,o.tag===22&&o.memoizedState!==null?Dd(r):l!==null?(l.return=o,le=l):Dd(r);for(;s!==null;)le=s,Qm(s),s=s.sibling;le=r,ko=a,Tt=u}Ld(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,le=s):Ld(n)}}function Ld(n){for(;le!==null;){var e=le;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Tt||il(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Tt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:vn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}dd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Qs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Tt||e.flags&512&&cc(e)}catch(f){Qe(e,e.return,f)}}if(e===n){le=null;break}if(t=e.sibling,t!==null){t.return=e.return,le=t;break}le=e.return}}function Pd(n){for(;le!==null;){var e=le;if(e===n){le=null;break}var t=e.sibling;if(t!==null){t.return=e.return,le=t;break}le=e.return}}function Dd(n){for(;le!==null;){var e=le;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{il(4,e)}catch(l){Qe(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Qe(e,r,l)}}var s=e.return;try{cc(e)}catch(l){Qe(e,s,l)}break;case 5:var o=e.return;try{cc(e)}catch(l){Qe(e,o,l)}}}catch(l){Qe(e,e.return,l)}if(e===n){le=null;break}var a=e.sibling;if(a!==null){a.return=e.return,le=a;break}le=e.return}}var X_=Math.ceil,Ga=ri.ReactCurrentDispatcher,uf=ri.ReactCurrentOwner,un=ri.ReactCurrentBatchConfig,De=0,pt=null,nt=null,xt=0,jt=0,Wr=Ii(0),ot=0,uo=null,sr=0,rl=0,cf=0,Ws=null,zt=null,ff=0,os=1/0,Xn=null,Wa=!1,hc=null,Ci=null,Uo=!1,xi=null,Ha=0,Hs=0,pc=null,_a=-1,va=0;function Dt(){return(De&6)!==0?Je():_a!==-1?_a:_a=Je()}function bi(n){return(n.mode&1)===0?1:(De&2)!==0&&xt!==0?xt&-xt:A_.transition!==null?(va===0&&(va=zp()),va):(n=Fe,n!==0||(n=window.event,n=n===void 0?16:Gp(n.type)),n)}function En(n,e,t,i){if(50<Hs)throw Hs=0,pc=null,Error(Y(185));ho(n,t,i),((De&2)===0||n!==pt)&&(n===pt&&((De&2)===0&&(rl|=t),ot===4&&_i(n,xt)),Bt(n,i),t===1&&De===0&&(e.mode&1)===0&&(os=Je()+500,el&&Ni()))}function Bt(n,e){var t=n.callbackNode;A0(n,e);var i=ba(n,n===pt?xt:0);if(i===0)t!==null&&Bf(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Bf(t),e===1)n.tag===0?b_(Rd.bind(null,n)):am(Rd.bind(null,n)),w_(function(){(De&6)===0&&Ni()}),t=null;else{switch(Fp(i)){case 1:t=Fc;break;case 4:t=Ip;break;case 16:t=Ca;break;case 536870912:t=Np;break;default:t=Ca}t=og(t,Jm.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Jm(n,e){if(_a=-1,va=0,(De&6)!==0)throw Error(Y(327));var t=n.callbackNode;if(Zr()&&n.callbackNode!==t)return null;var i=ba(n,n===pt?xt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Xa(n,i);else{e=i;var r=De;De|=2;var s=tg();(pt!==n||xt!==e)&&(Xn=null,os=Je()+500,Qi(n,e));do try{$_();break}catch(a){eg(n,a)}while(1);Yc(),Ga.current=s,De=r,nt!==null?e=0:(pt=null,xt=0,e=ot)}if(e!==0){if(e===2&&(r=Vu(n),r!==0&&(i=r,e=mc(n,r))),e===1)throw t=uo,Qi(n,0),_i(n,i),Bt(n,Je()),t;if(e===6)_i(n,i);else{if(r=n.current.alternate,(i&30)===0&&!j_(r)&&(e=Xa(n,i),e===2&&(s=Vu(n),s!==0&&(i=s,e=mc(n,s))),e===1))throw t=uo,Qi(n,0),_i(n,i),Bt(n,Je()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Y(345));case 2:Gi(n,zt,Xn);break;case 3:if(_i(n,i),(i&130023424)===i&&(e=ff+500-Je(),10<e)){if(ba(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Dt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Yu(Gi.bind(null,n,zt,Xn),e);break}Gi(n,zt,Xn);break;case 4:if(_i(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Je()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*X_(i/1960))-i,10<i){n.timeoutHandle=Yu(Gi.bind(null,n,zt,Xn),i);break}Gi(n,zt,Xn);break;case 5:Gi(n,zt,Xn);break;default:throw Error(Y(329))}}}return Bt(n,Je()),n.callbackNode===t?Jm.bind(null,n):null}function mc(n,e){var t=Ws;return n.current.memoizedState.isDehydrated&&(Qi(n,e).flags|=256),n=Xa(n,e),n!==2&&(e=zt,zt=t,e!==null&&gc(e)),n}function gc(n){zt===null?zt=n:zt.push.apply(zt,n)}function j_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Tn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _i(n,e){for(e&=~cf,e&=~rl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-wn(e),i=1<<t;n[t]=-1,e&=~i}}function Rd(n){if((De&6)!==0)throw Error(Y(327));Zr();var e=ba(n,0);if((e&1)===0)return Bt(n,Je()),null;var t=Xa(n,e);if(n.tag!==0&&t===2){var i=Vu(n);i!==0&&(e=i,t=mc(n,i))}if(t===1)throw t=uo,Qi(n,0),_i(n,e),Bt(n,Je()),t;if(t===6)throw Error(Y(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Gi(n,zt,Xn),Bt(n,Je()),null}function df(n,e){var t=De;De|=1;try{return n(e)}finally{De=t,De===0&&(os=Je()+500,el&&Ni())}}function or(n){xi!==null&&xi.tag===0&&(De&6)===0&&Zr();var e=De;De|=1;var t=un.transition,i=Fe;try{if(un.transition=null,Fe=1,n)return n()}finally{Fe=i,un.transition=t,De=e,(De&6)===0&&Ni()}}function hf(){jt=Wr.current,We(Wr)}function Qi(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,M_(t)),nt!==null)for(t=nt.return;t!==null;){var i=t;switch(jc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ra();break;case 3:rs(),We(Ut),We(Ct),tf();break;case 5:ef(i);break;case 4:rs();break;case 13:We(qe);break;case 19:We(qe);break;case 10:Zc(i.type._context);break;case 22:case 23:hf()}t=t.return}if(pt=n,nt=n=Ai(n.current,null),xt=jt=e,ot=0,uo=null,cf=rl=sr=0,zt=Ws=null,qi!==null){for(e=0;e<qi.length;e++)if(t=qi[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}qi=null}return n}function eg(n,e){do{var t=nt;try{if(Yc(),pa.current=Va,Ba){for(var i=$e.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ba=!1}if(rr=0,dt=st=$e=null,Vs=!1,oo=0,uf.current=null,t===null||t.return===null){ot=1,uo=e,nt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=xd(o);if(g!==null){g.flags&=-257,yd(g,o,a,s,e),g.mode&1&&vd(s,u,e),e=g,l=u;var x=e.updateQueue;if(x===null){var m=new Set;m.add(l),e.updateQueue=m}else x.add(l);break e}else{if((e&1)===0){vd(s,u,e),pf();break e}l=Error(Y(426))}}else if(je&&a.mode&1){var h=xd(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),yd(h,o,a,s,e),qc(ss(l,a));break e}}s=l=ss(l,a),ot!==4&&(ot=2),Ws===null?Ws=[s]:Ws.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=km(s,l,e);fd(s,p);break e;case 1:a=l;var _=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ci===null||!Ci.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Um(s,a,e);fd(s,S);break e}}s=s.return}while(s!==null)}ig(t)}catch(M){e=M,nt===t&&t!==null&&(nt=t=t.return);continue}break}while(1)}function tg(){var n=Ga.current;return Ga.current=Va,n===null?Va:n}function pf(){(ot===0||ot===3||ot===2)&&(ot=4),pt===null||(sr&268435455)===0&&(rl&268435455)===0||_i(pt,xt)}function Xa(n,e){var t=De;De|=2;var i=tg();(pt!==n||xt!==e)&&(Xn=null,Qi(n,e));do try{q_();break}catch(r){eg(n,r)}while(1);if(Yc(),De=t,Ga.current=i,nt!==null)throw Error(Y(261));return pt=null,xt=0,ot}function q_(){for(;nt!==null;)ng(nt)}function $_(){for(;nt!==null&&!x0();)ng(nt)}function ng(n){var e=sg(n.alternate,n,jt);n.memoizedProps=n.pendingProps,e===null?ig(n):nt=e,uf.current=null}function ig(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=B_(t,e,jt),t!==null){nt=t;return}}else{if(t=V_(t,e),t!==null){t.flags&=32767,nt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ot=6,nt=null;return}}if(e=e.sibling,e!==null){nt=e;return}nt=e=n}while(e!==null);ot===0&&(ot=5)}function Gi(n,e,t){var i=Fe,r=un.transition;try{un.transition=null,Fe=1,Y_(n,e,t,i)}finally{un.transition=r,Fe=i}return null}function Y_(n,e,t,i){do Zr();while(xi!==null);if((De&6)!==0)throw Error(Y(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Y(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(L0(n,s),n===pt&&(nt=pt=null,xt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Uo||(Uo=!0,og(Ca,function(){return Zr(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=un.transition,un.transition=null;var o=Fe;Fe=1;var a=De;De|=4,uf.current=null,W_(n,t),Km(t,n),m_(qu),Aa=!!ju,qu=ju=null,n.current=t,H_(t),y0(),De=a,Fe=o,un.transition=s}else n.current=t;if(Uo&&(Uo=!1,xi=n,Ha=r),s=n.pendingLanes,s===0&&(Ci=null),w0(t.stateNode),Bt(n,Je()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wa)throw Wa=!1,n=hc,hc=null,n;return(Ha&1)!==0&&n.tag!==0&&Zr(),s=n.pendingLanes,(s&1)!==0?n===pc?Hs++:(Hs=0,pc=n):Hs=0,Ni(),null}function Zr(){if(xi!==null){var n=Fp(Ha),e=un.transition,t=Fe;try{if(un.transition=null,Fe=16>n?16:n,xi===null)var i=!1;else{if(n=xi,xi=null,Ha=0,(De&6)!==0)throw Error(Y(331));var r=De;for(De|=4,le=n.current;le!==null;){var s=le,o=s.child;if((le.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(le=u;le!==null;){var c=le;switch(c.tag){case 0:case 11:case 15:Gs(8,c,s)}var d=c.child;if(d!==null)d.return=c,le=d;else for(;le!==null;){c=le;var f=c.sibling,g=c.return;if($m(c),c===u){le=null;break}if(f!==null){f.return=g,le=f;break}le=g}}}var x=s.alternate;if(x!==null){var m=x.child;if(m!==null){x.child=null;do{var h=m.sibling;m.sibling=null,m=h}while(m!==null)}}le=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,le=o;else e:for(;le!==null;){if(s=le,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Gs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,le=p;break e}le=s.return}}var _=n.current;for(le=_;le!==null;){o=le;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,le=v;else e:for(o=_;le!==null;){if(a=le,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:il(9,a)}}catch(M){Qe(a,a.return,M)}if(a===o){le=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,le=S;break e}le=a.return}}if(De=r,Ni(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Ya,n)}catch{}i=!0}return i}finally{Fe=t,un.transition=e}}return!1}function Id(n,e,t){e=ss(t,e),e=km(n,e,1),n=Ti(n,e,1),e=Dt(),n!==null&&(ho(n,1,e),Bt(n,e))}function Qe(n,e,t){if(n.tag===3)Id(n,n,t);else for(;e!==null;){if(e.tag===3){Id(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ci===null||!Ci.has(i))){n=ss(t,n),n=Um(e,n,1),e=Ti(e,n,1),n=Dt(),e!==null&&(ho(e,1,n),Bt(e,n));break}}e=e.return}}function Z_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Dt(),n.pingedLanes|=n.suspendedLanes&t,pt===n&&(xt&t)===t&&(ot===4||ot===3&&(xt&130023424)===xt&&500>Je()-ff?Qi(n,0):cf|=t),Bt(n,e)}function rg(n,e){e===0&&((n.mode&1)===0?e=1:(e=Ao,Ao<<=1,(Ao&130023424)===0&&(Ao=4194304)));var t=Dt();n=ni(n,e),n!==null&&(ho(n,e,t),Bt(n,t))}function K_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),rg(n,t)}function Q_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Y(314))}i!==null&&i.delete(e),rg(n,t)}var sg;sg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Ut.current)kt=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return kt=!1,O_(n,e,t);kt=(n.flags&131072)!==0}else kt=!1,je&&(e.flags&1048576)!==0&&lm(e,za,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ga(n,e),n=e.pendingProps;var r=ts(e,Ct.current);Yr(e,t),r=rf(null,e,i,n,r,t);var s=sf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(i)?(s=!0,Ia(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qc(e),r.updater=tl,e.stateNode=r,r._reactInternals=e,nc(e,i,n,t),e=sc(null,e,i,!0,s,t)):(e.tag=0,je&&s&&Xc(e),Pt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ga(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ev(i),n=vn(i,n),r){case 0:e=rc(null,e,i,n,t);break e;case 1:e=wd(null,e,i,n,t);break e;case 11:e=Sd(null,e,i,n,t);break e;case 14:e=Md(null,e,i,vn(i.type,n),t);break e}throw Error(Y(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),rc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),wd(n,e,i,r,t);case 3:e:{if(Gm(e),n===null)throw Error(Y(387));i=e.pendingProps,s=e.memoizedState,r=s.element,dm(n,e),Ua(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ss(Error(Y(423)),e),e=Ed(n,e,i,t,r);break e}else if(i!==r){r=ss(Error(Y(424)),e),e=Ed(n,e,i,t,r);break e}else for($t=Ei(e.stateNode.containerInfo.firstChild),Yt=e,je=!0,yn=null,t=gm(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ns(),i===r){e=ii(n,e,t);break e}Pt(n,e,i,t)}e=e.child}return e;case 5:return _m(e),n===null&&Ju(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,$u(i,r)?o=null:s!==null&&$u(i,s)&&(e.flags|=32),Vm(n,e),Pt(n,e,o,t),e.child;case 6:return n===null&&Ju(e),null;case 13:return Wm(n,e,t);case 4:return Jc(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=is(e,null,i,t):Pt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),Sd(n,e,i,r,t);case 7:return Pt(n,e,e.pendingProps,t),e.child;case 8:return Pt(n,e,e.pendingProps.children,t),e.child;case 12:return Pt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ve(Fa,i._currentValue),i._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===r.children&&!Ut.current){e=ii(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Qn(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),ec(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Y(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ec(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Yr(e,t),r=fn(r),i=i(r),e.flags|=1,Pt(n,e,i,t),e.child;case 14:return i=e.type,r=vn(i,e.pendingProps),r=vn(i.type,r),Md(n,e,i,r,t);case 15:return Om(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:vn(i,r),ga(n,e),e.tag=1,Ot(i)?(n=!0,Ia(e)):n=!1,Yr(e,t),pm(e,i,r),nc(e,i,r,t),sc(null,e,i,!0,n,t);case 19:return Hm(n,e,t);case 22:return Bm(n,e,t)}throw Error(Y(156,e.tag))};function og(n,e){return Rp(n,e)}function J_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(n,e,t,i){return new J_(n,e,t,i)}function mf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ev(n){if(typeof n=="function")return mf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ic)return 11;if(n===Nc)return 14}return 2}function Ai(n,e){var t=n.alternate;return t===null?(t=an(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function xa(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")mf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ir:return Ji(t.children,r,s,e);case Rc:o=8,r|=8;break;case Cu:return n=an(12,t,e,r|2),n.elementType=Cu,n.lanes=s,n;case bu:return n=an(13,t,e,r),n.elementType=bu,n.lanes=s,n;case Au:return n=an(19,t,e,r),n.elementType=Au,n.lanes=s,n;case mp:return sl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case hp:o=10;break e;case pp:o=9;break e;case Ic:o=11;break e;case Nc:o=14;break e;case pi:o=16,i=null;break e}throw Error(Y(130,n==null?n:typeof n,""))}return e=an(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Ji(n,e,t,i){return n=an(7,n,i,e),n.lanes=t,n}function sl(n,e,t,i){return n=an(22,n,i,e),n.elementType=mp,n.lanes=t,n.stateNode={isHidden:!1},n}function Gl(n,e,t){return n=an(6,n,null,e),n.lanes=t,n}function Wl(n,e,t){return e=an(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function tv(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function gf(n,e,t,i,r,s,o,a,l){return n=new tv(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(s),n}function nv(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ag(n){if(!n)return Di;n=n._reactInternals;e:{if(dr(n)!==n||n.tag!==1)throw Error(Y(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Y(171))}if(n.tag===1){var t=n.type;if(Ot(t))return om(n,t,e)}return e}function lg(n,e,t,i,r,s,o,a,l){return n=gf(t,i,!0,n,r,s,o,a,l),n.context=ag(null),t=n.current,i=Dt(),r=bi(t),s=Qn(i,r),s.callback=e!=null?e:null,Ti(t,s,r),n.current.lanes=r,ho(n,r,i),Bt(n,i),n}function ol(n,e,t,i){var r=e.current,s=Dt(),o=bi(r);return t=ag(t),e.context===null?e.context=t:e.pendingContext=t,e=Qn(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ti(r,e,o),n!==null&&(En(n,r,o,s),ha(n,r,o)),o}function ja(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function _f(n,e){Nd(n,e),(n=n.alternate)&&Nd(n,e)}function iv(){return null}var ug=typeof reportError=="function"?reportError:function(n){console.error(n)};function vf(n){this._internalRoot=n}al.prototype.render=vf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Y(409));ol(n,e,null,null)};al.prototype.unmount=vf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;or(function(){ol(null,n,null,null)}),e[ti]=null}};function al(n){this._internalRoot=n}al.prototype.unstable_scheduleHydration=function(n){if(n){var e=Op();n={blockedOn:null,target:n,priority:e};for(var t=0;t<gi.length&&e!==0&&e<gi[t].priority;t++);gi.splice(t,0,n),t===0&&Vp(n)}};function xf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ll(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zd(){}function rv(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ja(o);s.call(u)}}var o=lg(e,i,n,0,null,!1,!1,"",zd);return n._reactRootContainer=o,n[ti]=o.current,to(n.nodeType===8?n.parentNode:n),or(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ja(l);a.call(u)}}var l=gf(n,0,!1,null,null,!1,!1,"",zd);return n._reactRootContainer=l,n[ti]=l.current,to(n.nodeType===8?n.parentNode:n),or(function(){ol(e,l,t,i)}),l}function ul(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ja(o);a.call(l)}}ol(e,o,n,r)}else o=rv(t,e,n,r,i);return ja(o)}kp=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Rs(e.pendingLanes);t!==0&&(kc(e,t|1),Bt(e,Je()),(De&6)===0&&(os=Je()+500,Ni()))}break;case 13:or(function(){var i=ni(n,1);if(i!==null){var r=Dt();En(i,n,1,r)}}),_f(n,1)}};Uc=function(n){if(n.tag===13){var e=ni(n,134217728);if(e!==null){var t=Dt();En(e,n,134217728,t)}_f(n,134217728)}};Up=function(n){if(n.tag===13){var e=bi(n),t=ni(n,e);if(t!==null){var i=Dt();En(t,n,e,i)}_f(n,e)}};Op=function(){return Fe};Bp=function(n,e){var t=Fe;try{return Fe=n,e()}finally{Fe=t}};Uu=function(n,e,t){switch(e){case"input":if(Du(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ja(i);if(!r)throw Error(Y(90));_p(i),Du(i,r)}}}break;case"textarea":xp(n,t);break;case"select":e=t.value,e!=null&&Xr(n,!!t.multiple,e,!1)}};Cp=df;bp=or;var sv={usingClientEntryPoint:!1,Events:[mo,kr,Ja,Ep,Tp,df]},Ts={findFiberByHostInstance:ji,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ov={bundleType:Ts.bundleType,version:Ts.version,rendererPackageName:Ts.rendererPackageName,rendererConfig:Ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Pp(n),n===null?null:n.stateNode},findFiberByHostInstance:Ts.findFiberByHostInstance||iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Ya=Oo.inject(ov),In=Oo}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;Kt.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xf(e))throw Error(Y(200));return nv(n,e,null,t)};Kt.createRoot=function(n,e){if(!xf(n))throw Error(Y(299));var t=!1,i="",r=ug;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=gf(n,1,!1,null,null,t,!1,i,r),n[ti]=e.current,to(n.nodeType===8?n.parentNode:n),new vf(e)};Kt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Y(188)):(n=Object.keys(n).join(","),Error(Y(268,n)));return n=Pp(e),n=n===null?null:n.stateNode,n};Kt.flushSync=function(n){return or(n)};Kt.hydrate=function(n,e,t){if(!ll(e))throw Error(Y(200));return ul(null,n,e,!0,t)};Kt.hydrateRoot=function(n,e,t){if(!xf(n))throw Error(Y(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ug;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=lg(e,null,n,1,t!=null?t:null,r,!1,s,o),n[ti]=e.current,to(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new al(e)};Kt.render=function(n,e,t){if(!ll(e))throw Error(Y(200));return ul(null,n,e,!1,t)};Kt.unmountComponentAtNode=function(n){if(!ll(n))throw Error(Y(40));return n._reactRootContainer?(or(function(){ul(null,null,n,!1,function(){n._reactRootContainer=null,n[ti]=null})}),!0):!1};Kt.unstable_batchedUpdates=df;Kt.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!ll(t))throw Error(Y(200));if(n==null||n._reactInternals===void 0)throw Error(Y(38));return ul(n,e,t,!1,i)};Kt.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=Kt})(lp);var Fd=lp.exports;Eu.createRoot=Fd.createRoot,Eu.hydrateRoot=Fd.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yf="146",av=0,kd=1,lv=2,cg=1,uv=2,Ns=3,as=0,cn=1,yi=2,Li=0,Kr=1,Ud=2,Od=3,Bd=4,cv=5,Dr=100,fv=101,dv=102,Vd=103,Gd=104,hv=200,pv=201,mv=202,gv=203,fg=204,dg=205,_v=206,vv=207,xv=208,yv=209,Sv=210,Mv=0,wv=1,Ev=2,_c=3,Tv=4,Cv=5,bv=6,Av=7,hg=0,Lv=1,Pv=2,Jn=0,Dv=1,Rv=2,Iv=3,Nv=4,zv=5,pg=300,ls=301,us=302,vc=303,xc=304,cl=306,yc=1e3,Sn=1001,Sc=1002,Ft=1003,Wd=1004,Hd=1005,sn=1006,Fv=1007,fl=1008,ar=1009,kv=1010,Uv=1011,mg=1012,Ov=1013,Yi=1014,Zi=1015,co=1016,Bv=1017,Vv=1018,Qr=1020,Gv=1021,Wv=1022,Mn=1023,Hv=1024,Xv=1025,er=1026,cs=1027,jv=1028,qv=1029,$v=1030,Yv=1031,Zv=1033,Hl=33776,Xl=33777,jl=33778,ql=33779,Xd=35840,jd=35841,qd=35842,$d=35843,Kv=36196,Yd=37492,Zd=37496,Kd=37808,Qd=37809,Jd=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,sh=37816,oh=37817,ah=37818,lh=37819,uh=37820,ch=37821,fh=36492,lr=3e3,Ke=3001,Qv=3200,Jv=3201,ex=0,tx=1,jn="srgb",Ki="srgb-linear",$l=7680,nx=519,dh=35044,hh="300 es",Mc=1035;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=Math.PI/180,ph=180/Math.PI;function _o(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function ix(n,e){return(n%e+e)%e}function Zl(n,e,t){return(1-t)*n+t*e}function mh(n){return(n&n-1)===0&&n!==0}function wc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bo(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ln{constructor(){ln.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],g=i[5],x=i[8],m=r[0],h=r[3],p=r[6],_=r[1],v=r[4],S=r[7],M=r[2],T=r[5],A=r[8];return s[0]=o*m+a*_+l*M,s[3]=o*h+a*v+l*T,s[6]=o*p+a*S+l*A,s[1]=u*m+c*_+d*M,s[4]=u*h+c*v+d*T,s[7]=u*p+c*S+d*A,s[2]=f*m+g*_+x*M,s[5]=f*h+g*v+x*T,s[8]=f*p+g*S+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,g=u*s-o*l,x=t*d+i*f+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return e[0]=d*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=f*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=g*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*c,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function gg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ya(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Kl={[jn]:{[Ki]:tr},[Ki]:{[jn]:ya}},pn={legacyMode:!0,get workingColorSpace(){return Ki},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Kl[e]&&Kl[e][t]!==void 0){const i=Kl[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},_g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},mn={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function Ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Go(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ki){return this.r=e,this.g=t,this.b=i,pn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ki){if(e=ix(e,1),t=qt(t,0,1),i=qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ql(o,s,e+1/3),this.g=Ql(o,s,e),this.b=Ql(o,s,e-1/3)}return pn.toWorkingColorSpace(this,r),this}setStyle(e,t=jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,pn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,pn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,pn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,pn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=jn){const i=_g[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return pn.fromWorkingColorSpace(Go(this,rt),e),qt(rt.r*255,0,255)<<16^qt(rt.g*255,0,255)<<8^qt(rt.b*255,0,255)<<0}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ki){pn.fromWorkingColorSpace(Go(this,rt),t);const i=rt.r,r=rt.g,s=rt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ki){return pn.fromWorkingColorSpace(Go(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=jn){return pn.fromWorkingColorSpace(Go(this,rt),e),e!==jn?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(mn),mn.h+=e,mn.s+=t,mn.l+=i,this.setHSL(mn.h,mn.s,mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(Vo);const i=Zl(mn.h,Vo.h,t),r=Zl(mn.s,Vo.s,t),s=Zl(mn.l,Vo.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ke.NAMES=_g;let _r;class vg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=qa("canvas")),_r.width=e.width,_r.height=e.height;const i=_r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=tr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tr(t[i]/255)*255):t[i]=tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class xg{constructor(e=null){this.isSource=!0,this.uuid=_o(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jl(r[o].image)):s.push(Jl(r[o]))}else s=Jl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Jl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rx=0;class Cn extends ms{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,i=Sn,r=Sn,s=sn,o=fl,a=Mn,l=ar,u=1,c=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=_o(),this.name="",this.source=new xg(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ln,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yc:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yc:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=pg;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],g=l[5],x=l[9],m=l[2],h=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-m)<.01&&Math.abs(x-h)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+m)<.1&&Math.abs(x+h)<.1&&Math.abs(u+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,S=(g+1)/2,M=(p+1)/2,T=(c+f)/4,A=(d+m)/4,y=(x+h)/4;return v>S&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=y/s),this.set(i,r,s,t),this}let _=Math.sqrt((h-x)*(h-x)+(d-m)*(d-m)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(h-x)/_,this.y=(d-m)/_,this.z=(f-c)/_,this.w=Math.acos((u+g+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ur extends ms{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:sn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yg extends Cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sx extends Cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],g=s[o+1],x=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=x,e[t+3]=m;return}if(d!==m||l!==f||u!==g||c!==x){let h=1-a;const p=l*f+u*g+c*x+d*m,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const M=Math.sqrt(v),T=Math.atan2(M,p*_);h=Math.sin(h*T)/M,a=Math.sin(a*T)/M}const S=a*_;if(l=l*h+f*S,u=u*h+g*S,c=c*h+x*S,d=d*h+m*S,h===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],g=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*g-u*f,e[t+1]=l*x+c*f+u*d-a*g,e[t+2]=u*x+c*g+a*f-l*d,e[t+3]=c*x-a*d-l*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"YXZ":this._x=f*c*d+u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"ZXY":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d-f*g*x;break;case"ZYX":this._x=f*c*d-u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d+f*g*x;break;case"YZX":this._x=f*c*d+u*g*x,this._y=u*g*d+f*c*x,this._z=u*c*x-f*g*d,this._w=u*c*d-f*g*x;break;case"XZY":this._x=f*c*d-u*g*x,this._y=u*g*d-f*c*x,this._z=u*c*x+f*g*d,this._w=u*c*d+f*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>d){const g=2*Math.sqrt(1+i-a-d);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){const g=2*Math.sqrt(1+a-i-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+d-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eu=new z,gh=new vo;class xo{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Ui.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ui)}else i.boundingBox===null&&i.computeBoundingBox(),tu.copy(i.boundingBox),tu.applyMatrix4(e.matrixWorld),this.union(tu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cs),Wo.subVectors(this.max,Cs),vr.subVectors(e.a,Cs),xr.subVectors(e.b,Cs),yr.subVectors(e.c,Cs),ai.subVectors(xr,vr),li.subVectors(yr,xr),Oi.subVectors(vr,yr);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Oi.z,Oi.y,ai.z,0,-ai.x,li.z,0,-li.x,Oi.z,0,-Oi.x,-ai.y,ai.x,0,-li.y,li.x,0,-Oi.y,Oi.x,0];return!nu(t,vr,xr,yr,Wo)||(t=[1,0,0,0,1,0,0,0,1],!nu(t,vr,xr,yr,Wo))?!1:(Ho.crossVectors(ai,li),t=[Ho.x,Ho.y,Ho.z],nu(t,vr,xr,yr,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ui.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new z,new z,new z,new z,new z,new z,new z,new z],Ui=new z,tu=new xo,vr=new z,xr=new z,yr=new z,ai=new z,li=new z,Oi=new z,Cs=new z,Wo=new z,Ho=new z,Bi=new z;function nu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Bi.fromArray(n,s);const a=r.x*Math.abs(Bi.x)+r.y*Math.abs(Bi.y)+r.z*Math.abs(Bi.z),l=e.dot(Bi),u=t.dot(Bi),c=i.dot(Bi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ox=new xo,bs=new z,iu=new z;class dl{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ox.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(iu)),this.expandByPoint(bs.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new z,ru=new z,Xo=new z,ui=new z,su=new z,jo=new z,ou=new z;class Sg{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.direction).multiplyScalar(t).add(this.origin),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ru.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(ru);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Xo),a=ui.dot(this.direction),l=-ui.dot(Xo),u=ui.lengthSq(),c=Math.abs(1-o*o);let d,f,g,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const m=1/c;d*=m,f*=m,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Xo).multiplyScalar(f).add(ru),g}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,r,s){su.subVectors(t,e),jo.subVectors(i,e),ou.crossVectors(su,jo);let o=this.direction.dot(ou),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,e);const l=a*this.direction.dot(jo.crossVectors(ui,jo));if(l<0)return null;const u=a*this.direction.dot(su.cross(ui));if(u<0||l+u>o)return null;const c=-a*ui.dot(ou);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,d,f,g,x,m,h){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=g,p[7]=x,p[11]=m,p[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Sr.setFromMatrixColumn(e,0).length(),s=1/Sr.setFromMatrixColumn(e,1).length(),o=1/Sr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,g=o*d,x=a*c,m=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=g+x*u,t[5]=f-m*u,t[9]=-a*l,t[2]=m-f*u,t[6]=x+g*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,g=l*d,x=u*c,m=u*d;t[0]=f+m*a,t[4]=x*a-g,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=g*a-x,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,g=l*d,x=u*c,m=u*d;t[0]=f-m*a,t[4]=-o*d,t[8]=x+g*a,t[1]=g+x*a,t[5]=o*c,t[9]=m-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,g=o*d,x=a*c,m=a*d;t[0]=l*c,t[4]=x*u-g,t[8]=f*u+m,t[1]=l*d,t[5]=m*u+f,t[9]=g*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*u,x=a*l,m=a*u;t[0]=l*c,t[4]=m-f*d,t[8]=x*d+g,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=g*d+x,t[10]=f-m*d}else if(e.order==="XZY"){const f=o*l,g=o*u,x=a*l,m=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+m,t[5]=o*c,t[9]=g*d-x,t[2]=x*d-g,t[6]=a*c,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ax,e,lx)}lookAt(e,t,i){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),ci.crossVectors(i,Ht),ci.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),ci.crossVectors(i,Ht)),ci.normalize(),qo.crossVectors(Ht,ci),r[0]=ci.x,r[4]=qo.x,r[8]=Ht.x,r[1]=ci.y,r[5]=qo.y,r[9]=Ht.y,r[2]=ci.z,r[6]=qo.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],g=i[13],x=i[2],m=i[6],h=i[10],p=i[14],_=i[3],v=i[7],S=i[11],M=i[15],T=r[0],A=r[4],y=r[8],b=r[12],D=r[1],$=r[5],ie=r[9],U=r[13],F=r[2],X=r[6],Z=r[10],Q=r[14],R=r[3],L=r[7],I=r[11],q=r[15];return s[0]=o*T+a*D+l*F+u*R,s[4]=o*A+a*$+l*X+u*L,s[8]=o*y+a*ie+l*Z+u*I,s[12]=o*b+a*U+l*Q+u*q,s[1]=c*T+d*D+f*F+g*R,s[5]=c*A+d*$+f*X+g*L,s[9]=c*y+d*ie+f*Z+g*I,s[13]=c*b+d*U+f*Q+g*q,s[2]=x*T+m*D+h*F+p*R,s[6]=x*A+m*$+h*X+p*L,s[10]=x*y+m*ie+h*Z+p*I,s[14]=x*b+m*U+h*Q+p*q,s[3]=_*T+v*D+S*F+M*R,s[7]=_*A+v*$+S*X+M*L,s[11]=_*y+v*ie+S*Z+M*I,s[15]=_*b+v*U+S*Q+M*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],g=e[14],x=e[3],m=e[7],h=e[11],p=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*g-i*l*g)+m*(+t*l*g-t*u*f+s*o*f-r*o*g+r*u*c-s*l*c)+h*(+t*u*d-t*a*g-s*o*d+i*o*g+s*a*c-i*u*c)+p*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],g=e[11],x=e[12],m=e[13],h=e[14],p=e[15],_=d*h*u-m*f*u+m*l*g-a*h*g-d*l*p+a*f*p,v=x*f*u-c*h*u-x*l*g+o*h*g+c*l*p-o*f*p,S=c*m*u-x*d*u+x*a*g-o*m*g-c*a*p+o*d*p,M=x*d*l-c*m*l-x*a*f+o*m*f+c*a*h-o*d*h,T=t*_+i*v+r*S+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(m*f*s-d*h*s-m*r*g+i*h*g+d*r*p-i*f*p)*A,e[2]=(a*h*s-m*l*s+m*r*u-i*h*u-a*r*p+i*l*p)*A,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*g-i*l*g)*A,e[4]=v*A,e[5]=(c*h*s-x*f*s+x*r*g-t*h*g-c*r*p+t*f*p)*A,e[6]=(x*l*s-o*h*s-x*r*u+t*h*u+o*r*p-t*l*p)*A,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*g+t*l*g)*A,e[8]=S*A,e[9]=(x*d*s-c*m*s-x*i*g+t*m*g+c*i*p-t*d*p)*A,e[10]=(o*m*s-x*a*s+x*i*u-t*m*u-o*i*p+t*a*p)*A,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*g-t*a*g)*A,e[12]=M*A,e[13]=(c*m*r-x*d*r+x*i*f-t*m*f-c*i*h+t*d*h)*A,e[14]=(x*a*r-o*m*r-x*i*l+t*m*l+o*i*h-t*a*h)*A,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,g=s*c,x=s*d,m=o*c,h=o*d,p=a*d,_=l*u,v=l*c,S=l*d,M=i.x,T=i.y,A=i.z;return r[0]=(1-(m+p))*M,r[1]=(g+S)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(g-S)*T,r[5]=(1-(f+p))*T,r[6]=(h+_)*T,r[7]=0,r[8]=(x+v)*A,r[9]=(h-_)*A,r[10]=(1-(f+m))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Sr.set(r[0],r[1],r[2]).length();const o=Sr.set(r[4],r[5],r[6]).length(),a=Sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const u=1/s,c=1/o,d=1/a;return gn.elements[0]*=u,gn.elements[1]*=u,gn.elements[2]*=u,gn.elements[4]*=c,gn.elements[5]*=c,gn.elements[6]*=c,gn.elements[8]*=d,gn.elements[9]*=d,gn.elements[10]*=d,t.setFromRotationMatrix(gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,f=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Sr=new z,gn=new it,ax=new z(0,0,0),lx=new z(1,1,1),ci=new z,qo=new z,Ht=new z,_h=new it,vh=new vo;class yo{constructor(e=0,t=0,i=0,r=yo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}yo.DefaultOrder="XYZ";yo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ux=0;const xh=new z,Mr=new vo,Gn=new it,$o=new z,As=new z,cx=new z,fx=new vo,yh=new z(1,0,0),Sh=new z(0,1,0),Mh=new z(0,0,1),dx={type:"added"},wh={type:"removed"};class mt extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DefaultUp.clone();const e=new z,t=new yo,i=new vo,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new ln}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=mt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DefaultMatrixWorldAutoUpdate,this.layers=new Mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(Mh,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(Mh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$o.copy(e):$o.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(As,$o,this.up):Gn.lookAt($o,As,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),Mr.setFromRotationMatrix(Gn),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(wh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,cx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,fx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DefaultUp=new z(0,1,0);mt.DefaultMatrixAutoUpdate=!0;mt.DefaultMatrixWorldAutoUpdate=!0;const _n=new z,Wn=new z,au=new z,Hn=new z,wr=new z,Er=new z,Eh=new z,lu=new z,uu=new z,cu=new z;class $n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),Wn.subVectors(i,t),au.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Wn),l=_n.dot(au),u=Wn.dot(Wn),c=Wn.dot(au),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,g=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-g-x,x,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hn),Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Hn),l.set(0,0),l.addScaledVector(s,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),Wn.subVectors(e,t),_n.cross(Wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),_n.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return $n.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;wr.subVectors(r,i),Er.subVectors(s,i),lu.subVectors(e,i);const l=wr.dot(lu),u=Er.dot(lu);if(l<=0&&u<=0)return t.copy(i);uu.subVectors(e,r);const c=wr.dot(uu),d=Er.dot(uu);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(wr,o);cu.subVectors(e,s);const g=wr.dot(cu),x=Er.dot(cu);if(x>=0&&g<=x)return t.copy(s);const m=g*u-l*x;if(m<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Er,a);const h=c*x-g*d;if(h<=0&&d-c>=0&&g-x>=0)return Eh.subVectors(s,r),a=(d-c)/(d-c+(g-x)),t.copy(r).addScaledVector(Eh,a);const p=1/(h+m+f);return o=m*p,a=f*p,t.copy(i).addScaledVector(wr,o).addScaledVector(Er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let hx=0;class So extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=Kr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fg,this.blendDst=dg,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$l,this.stencilZFail=$l,this.stencilZPass=$l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sf extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new z,Yo=new Ue;class zn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=dh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class wg extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Eg extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vt extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let px=0;const tn=new it,fu=new mt,Tr=new z,Xt=new xo,Ls=new xo,ft=new z;class Fn extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gg(e)?Eg:wg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ln().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Xt.min,Ls.min),Xt.expandByPoint(ft),ft.addVectors(Xt.max,Ls.max),Xt.expandByPoint(ft)):(Xt.expandByPoint(Ls.min),Xt.expandByPoint(Ls.max))}Xt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ft.fromBufferAttribute(a,u),l&&(Tr.fromBufferAttribute(e,u),ft.add(Tr)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let D=0;D<a;D++)u[D]=new z,c[D]=new z;const d=new z,f=new z,g=new z,x=new Ue,m=new Ue,h=new Ue,p=new z,_=new z;function v(D,$,ie){d.fromArray(r,D*3),f.fromArray(r,$*3),g.fromArray(r,ie*3),x.fromArray(o,D*2),m.fromArray(o,$*2),h.fromArray(o,ie*2),f.sub(d),g.sub(d),m.sub(x),h.sub(x);const U=1/(m.x*h.y-h.x*m.y);!isFinite(U)||(p.copy(f).multiplyScalar(h.y).addScaledVector(g,-m.y).multiplyScalar(U),_.copy(g).multiplyScalar(m.x).addScaledVector(f,-h.x).multiplyScalar(U),u[D].add(p),u[$].add(p),u[ie].add(p),c[D].add(_),c[$].add(_),c[ie].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let D=0,$=S.length;D<$;++D){const ie=S[D],U=ie.start,F=ie.count;for(let X=U,Z=U+F;X<Z;X+=3)v(i[X+0],i[X+1],i[X+2])}const M=new z,T=new z,A=new z,y=new z;function b(D){A.fromArray(s,D*3),y.copy(A);const $=u[D];M.copy($),M.sub(A.multiplyScalar(A.dot($))).normalize(),T.crossVectors(y,$);const U=T.dot(c[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=U}for(let D=0,$=S.length;D<$;++D){const ie=S[D],U=ie.start,F=ie.count;for(let X=U,Z=U+F;X<Z;X+=3)b(i[X+0]),b(i[X+1]),b(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,d=new z;if(e)for(let f=0,g=e.count;f<g;f+=3){const x=e.getX(f+0),m=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,h),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let g=0,x=0;for(let m=0,h=l.length;m<h;m++){a.isInterleavedBufferAttribute?g=l[m]*a.data.stride+a.offset:g=l[m]*c;for(let p=0;p<c;p++)f[x++]=u[g++]}return new zn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],g=e(f,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const g=u[d];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,g=d.length;f<g;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Th=new it,Cr=new Sg,du=new dl,fi=new z,di=new z,hi=new z,hu=new z,pu=new z,mu=new z,Zo=new z,Ko=new z,Qo=new z,Jo=new Ue,ea=new Ue,ta=new Ue,gu=new z,na=new z;class Kn extends mt{constructor(e=new Fn,t=new Sf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),du.copy(i.boundingSphere),du.applyMatrix4(s),e.ray.intersectsSphere(du)===!1)||(Th.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(Th),i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,d=i.attributes.uv,f=i.attributes.uv2,g=i.groups,x=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,h=g.length;m<h;m++){const p=g[m],_=r[p.materialIndex],v=Math.max(p.start,x.start),S=Math.min(a.count,Math.min(p.start+p.count,x.start+x.count));for(let M=v,T=S;M<T;M+=3){const A=a.getX(M),y=a.getX(M+1),b=a.getX(M+2);o=ia(this,_,e,Cr,l,u,c,d,f,A,y,b),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,x.start),h=Math.min(a.count,x.start+x.count);for(let p=m,_=h;p<_;p+=3){const v=a.getX(p),S=a.getX(p+1),M=a.getX(p+2);o=ia(this,r,e,Cr,l,u,c,d,f,v,S,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,h=g.length;m<h;m++){const p=g[m],_=r[p.materialIndex],v=Math.max(p.start,x.start),S=Math.min(l.count,Math.min(p.start+p.count,x.start+x.count));for(let M=v,T=S;M<T;M+=3){const A=M,y=M+1,b=M+2;o=ia(this,_,e,Cr,l,u,c,d,f,A,y,b),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,x.start),h=Math.min(l.count,x.start+x.count);for(let p=m,_=h;p<_;p+=3){const v=p,S=p+1,M=p+2;o=ia(this,r,e,Cr,l,u,c,d,f,v,S,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function mx(n,e,t,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==yi,a),l===null)return null;na.copy(a),na.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(na);return u<t.near||u>t.far?null:{distance:u,point:na.clone(),object:n}}function ia(n,e,t,i,r,s,o,a,l,u,c,d){fi.fromBufferAttribute(r,u),di.fromBufferAttribute(r,c),hi.fromBufferAttribute(r,d);const f=n.morphTargetInfluences;if(s&&f){Zo.set(0,0,0),Ko.set(0,0,0),Qo.set(0,0,0);for(let x=0,m=s.length;x<m;x++){const h=f[x],p=s[x];h!==0&&(hu.fromBufferAttribute(p,u),pu.fromBufferAttribute(p,c),mu.fromBufferAttribute(p,d),o?(Zo.addScaledVector(hu,h),Ko.addScaledVector(pu,h),Qo.addScaledVector(mu,h)):(Zo.addScaledVector(hu.sub(fi),h),Ko.addScaledVector(pu.sub(di),h),Qo.addScaledVector(mu.sub(hi),h)))}fi.add(Zo),di.add(Ko),hi.add(Qo)}n.isSkinnedMesh&&(n.boneTransform(u,fi),n.boneTransform(c,di),n.boneTransform(d,hi));const g=mx(n,e,t,i,fi,di,hi,gu);if(g){a&&(Jo.fromBufferAttribute(a,u),ea.fromBufferAttribute(a,c),ta.fromBufferAttribute(a,d),g.uv=$n.getUV(gu,fi,di,hi,Jo,ea,ta,new Ue)),l&&(Jo.fromBufferAttribute(l,u),ea.fromBufferAttribute(l,c),ta.fromBufferAttribute(l,d),g.uv2=$n.getUV(gu,fi,di,hi,Jo,ea,ta,new Ue));const x={a:u,b:c,c:d,normal:new z,materialIndex:0};$n.getNormal(fi,di,hi,x.normal),g.face=x}return g}class Mo extends Fn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,g=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(d,2));function x(m,h,p,_,v,S,M,T,A,y,b){const D=S/A,$=M/y,ie=S/2,U=M/2,F=T/2,X=A+1,Z=y+1;let Q=0,R=0;const L=new z;for(let I=0;I<Z;I++){const q=I*$-U;for(let j=0;j<X;j++){const K=j*D-ie;L[m]=K*_,L[h]=q*v,L[p]=F,u.push(L.x,L.y,L.z),L[m]=0,L[h]=0,L[p]=T>0?1:-1,c.push(L.x,L.y,L.z),d.push(j/A),d.push(1-I/y),Q+=1}}for(let I=0;I<y;I++)for(let q=0;q<A;q++){const j=f+q+X*I,K=f+q+X*(I+1),oe=f+(q+1)+X*(I+1),ve=f+(q+1)+X*I;l.push(j,K,ve),l.push(K,oe,ve),R+=6}a.addGroup(g,R,b),g+=R,f+=Q}}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Lt(n){const e={};for(let t=0;t<n.length;t++){const i=fs(n[t]);for(const r in i)e[r]=i[r]}return e}function gx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const _x={clone:fs,merge:Lt};var vx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vx,this.fragmentShader=xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Tg extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Tg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ph*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ph*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const br=90,Ar=1;class yx extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new on(br,Ar,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new z(1,0,0)),this.add(r);const s=new on(br,Ar,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new z(-1,0,0)),this.add(s);const o=new on(br,Ar,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new z(0,1,0)),this.add(o);const a=new on(br,Ar,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new z(0,-1,0)),this.add(a);const l=new on(br,Ar,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new z(0,0,1)),this.add(l);const u=new on(br,Ar,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new z(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Jn,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Cg extends Cn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sx extends ur{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mo(5,5,5),s=new cr({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Li});s.uniforms.tEquirect.value=t;const o=new Kn(r,s),a=t.minFilter;return t.minFilter===fl&&(t.minFilter=sn),new yx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const _u=new z,Mx=new z,wx=new ln;class Wi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_u.subVectors(i,t).cross(Mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||wx.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new dl,ra=new z;class Mf{constructor(e=new Wi,t=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],h=i[12],p=i[13],_=i[14],v=i[15];return t[0].setComponents(a-r,d-l,m-f,v-h).normalize(),t[1].setComponents(a+r,d+l,m+f,v+h).normalize(),t[2].setComponents(a+s,d+u,m+g,v+p).normalize(),t[3].setComponents(a-s,d-u,m-g,v-p).normalize(),t[4].setComponents(a-o,d-c,m-x,v-_).normalize(),t[5].setComponents(a+o,d+c,m+x,v+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSprite(e){return Lr.center.set(0,0,0),Lr.radius=.7071067811865476,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ra.x=r.normal.x>0?e.max.x:e.min.x,ra.y=r.normal.y>0?e.max.y:e.min.y,ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ex(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,g=c.updateRange;n.bindBuffer(d,u),g.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):n.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class wf extends Fn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,g=[],x=[],m=[],h=[];for(let p=0;p<c;p++){const _=p*f-o;for(let v=0;v<u;v++){const S=v*d-s;x.push(S,-_,0),m.push(0,0,1),h.push(v/a),h.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const v=_+u*p,S=_+u*(p+1),M=_+1+u*(p+1),T=_+1+u*p;g.push(v,S,T),g.push(S,M,T)}this.setIndex(g),this.setAttribute("position",new Vt(x,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(h,2))}static fromJSON(e){return new wf(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Cx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dx="vec3 transformed = vec3( position );",Rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ix=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Nx=`#ifdef USE_IRIDESCENCE
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
#endif`,zx=`#ifdef USE_BUMPMAP
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
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hx=`#define PI 3.141592653589793
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
}`,Xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jx=`vec3 transformedNormal = objectNormal;
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
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jx=`#ifdef USE_ENVMAP
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
#endif`,ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
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
}`,uy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,hy=`uniform bool receiveShadow;
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
#endif`,py=`#if defined( USE_ENVMAP )
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
#endif`,my=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,xy=`PhysicalMaterial material;
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
#endif`,yy=`struct PhysicalMaterial {
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
}`,Sy=`
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ey=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ay=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ly=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ny=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zy=`#ifdef USE_MORPHNORMALS
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
#endif`,Fy=`#ifdef USE_MORPHTARGETS
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
#endif`,ky=`#ifdef USE_MORPHTARGETS
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
#endif`,Uy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Oy=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wy=`#ifdef USE_NORMALMAP
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
#endif`,Hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rS=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sS=`float getShadowMask() {
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
}`,oS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aS=`#ifdef USE_SKINNING
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
#endif`,lS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uS=`#ifdef USE_SKINNING
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
#endif`,cS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pS=`#ifdef USE_TRANSMISSION
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
#endif`,mS=`#ifdef USE_TRANSMISSION
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
#endif`,gS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_S=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,vS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,xS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,yS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,SS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,MS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ES=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LS=`#include <common>
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
}`,PS=`#if DEPTH_PACKING == 3200
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
}`,DS=`#define DISTANCE
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
}`,RS=`#define DISTANCE
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
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zS=`uniform float scale;
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
}`,FS=`uniform vec3 diffuse;
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
}`,kS=`#include <common>
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
}`,US=`uniform vec3 diffuse;
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
}`,OS=`#define LAMBERT
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
}`,BS=`#define LAMBERT
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
}`,VS=`#define MATCAP
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
}`,GS=`#define MATCAP
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
}`,WS=`#define NORMAL
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
}`,HS=`#define NORMAL
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
}`,XS=`#define PHONG
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
}`,jS=`#define PHONG
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
}`,qS=`#define STANDARD
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
}`,$S=`#define STANDARD
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
}`,YS=`#define TOON
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
}`,ZS=`#define TOON
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
}`,KS=`uniform float size;
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
}`,QS=`uniform vec3 diffuse;
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
}`,JS=`#include <common>
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
}`,e1=`uniform vec3 color;
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
}`,t1=`uniform float rotation;
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
}`,n1=`uniform vec3 diffuse;
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
}`,Ee={alphamap_fragment:Tx,alphamap_pars_fragment:Cx,alphatest_fragment:bx,alphatest_pars_fragment:Ax,aomap_fragment:Lx,aomap_pars_fragment:Px,begin_vertex:Dx,beginnormal_vertex:Rx,bsdfs:Ix,iridescence_fragment:Nx,bumpmap_pars_fragment:zx,clipping_planes_fragment:Fx,clipping_planes_pars_fragment:kx,clipping_planes_pars_vertex:Ux,clipping_planes_vertex:Ox,color_fragment:Bx,color_pars_fragment:Vx,color_pars_vertex:Gx,color_vertex:Wx,common:Hx,cube_uv_reflection_fragment:Xx,defaultnormal_vertex:jx,displacementmap_pars_vertex:qx,displacementmap_vertex:$x,emissivemap_fragment:Yx,emissivemap_pars_fragment:Zx,encodings_fragment:Kx,encodings_pars_fragment:Qx,envmap_fragment:Jx,envmap_common_pars_fragment:ey,envmap_pars_fragment:ty,envmap_pars_vertex:ny,envmap_physical_pars_fragment:py,envmap_vertex:iy,fog_vertex:ry,fog_pars_vertex:sy,fog_fragment:oy,fog_pars_fragment:ay,gradientmap_pars_fragment:ly,lightmap_fragment:uy,lightmap_pars_fragment:cy,lights_lambert_fragment:fy,lights_lambert_pars_fragment:dy,lights_pars_begin:hy,lights_toon_fragment:my,lights_toon_pars_fragment:gy,lights_phong_fragment:_y,lights_phong_pars_fragment:vy,lights_physical_fragment:xy,lights_physical_pars_fragment:yy,lights_fragment_begin:Sy,lights_fragment_maps:My,lights_fragment_end:wy,logdepthbuf_fragment:Ey,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:by,map_fragment:Ay,map_pars_fragment:Ly,map_particle_fragment:Py,map_particle_pars_fragment:Dy,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:Iy,morphcolor_vertex:Ny,morphnormal_vertex:zy,morphtarget_pars_vertex:Fy,morphtarget_vertex:ky,normal_fragment_begin:Uy,normal_fragment_maps:Oy,normal_pars_fragment:By,normal_pars_vertex:Vy,normal_vertex:Gy,normalmap_pars_fragment:Wy,clearcoat_normal_fragment_begin:Hy,clearcoat_normal_fragment_maps:Xy,clearcoat_pars_fragment:jy,iridescence_pars_fragment:qy,output_fragment:$y,packing:Yy,premultiplied_alpha_fragment:Zy,project_vertex:Ky,dithering_fragment:Qy,dithering_pars_fragment:Jy,roughnessmap_fragment:eS,roughnessmap_pars_fragment:tS,shadowmap_pars_fragment:nS,shadowmap_pars_vertex:iS,shadowmap_vertex:rS,shadowmask_pars_fragment:sS,skinbase_vertex:oS,skinning_pars_vertex:aS,skinning_vertex:lS,skinnormal_vertex:uS,specularmap_fragment:cS,specularmap_pars_fragment:fS,tonemapping_fragment:dS,tonemapping_pars_fragment:hS,transmission_fragment:pS,transmission_pars_fragment:mS,uv_pars_fragment:gS,uv_pars_vertex:_S,uv_vertex:vS,uv2_pars_fragment:xS,uv2_pars_vertex:yS,uv2_vertex:SS,worldpos_vertex:MS,background_vert:wS,background_frag:ES,backgroundCube_vert:TS,backgroundCube_frag:CS,cube_vert:bS,cube_frag:AS,depth_vert:LS,depth_frag:PS,distanceRGBA_vert:DS,distanceRGBA_frag:RS,equirect_vert:IS,equirect_frag:NS,linedashed_vert:zS,linedashed_frag:FS,meshbasic_vert:kS,meshbasic_frag:US,meshlambert_vert:OS,meshlambert_frag:BS,meshmatcap_vert:VS,meshmatcap_frag:GS,meshnormal_vert:WS,meshnormal_frag:HS,meshphong_vert:XS,meshphong_frag:jS,meshphysical_vert:qS,meshphysical_frag:$S,meshtoon_vert:YS,meshtoon_frag:ZS,points_vert:KS,points_frag:QS,shadow_vert:JS,shadow_frag:e1,sprite_vert:t1,sprite_frag:n1},ne={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ln},uv2Transform:{value:new ln},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ln}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ln}}},Dn={basic:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Lt([ne.points,ne.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Lt([ne.common,ne.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Lt([ne.sprite,ne.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ln},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Lt([ne.common,ne.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Lt([ne.lights,ne.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Dn.physical={uniforms:Lt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function i1(n,e,t,i,r,s,o){const a=new ke(0);let l=s===!0?0:1,u,c,d=null,f=0,g=null;function x(h,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v));const S=n.xr,M=S.getSession&&S.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?m(a,l):v&&v.isColor&&(m(v,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===cl)?(c===void 0&&(c=new Kn(new Mo(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:fs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,(d!==v||f!==v.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,g=n.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Kn(new wf(2,2),new cr({name:"BackgroundMaterial",uniforms:fs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,g=n.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null))}function m(h,p){i.buffers.color.setClear(h.r,h.g,h.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(h,p=1){a.set(h),l=p,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,m(a,l)},render:x}}function r1(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function d(F,X,Z,Q,R){let L=!1;if(o){const I=m(Q,Z,X);u!==I&&(u=I,g(u.object)),L=p(F,Q,Z,R),L&&_(F,Q,Z,R)}else{const I=X.wireframe===!0;(u.geometry!==Q.id||u.program!==Z.id||u.wireframe!==I)&&(u.geometry=Q.id,u.program=Z.id,u.wireframe=I,L=!0)}R!==null&&t.update(R,34963),(L||c)&&(c=!1,y(F,X,Z,Q),R!==null&&n.bindBuffer(34963,t.get(R).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function x(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function m(F,X,Z){const Q=Z.wireframe===!0;let R=a[F.id];R===void 0&&(R={},a[F.id]=R);let L=R[X.id];L===void 0&&(L={},R[X.id]=L);let I=L[Q];return I===void 0&&(I=h(f()),L[Q]=I),I}function h(F){const X=[],Z=[],Q=[];for(let R=0;R<r;R++)X[R]=0,Z[R]=0,Q[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:Q,object:F,attributes:{},index:null}}function p(F,X,Z,Q){const R=u.attributes,L=X.attributes;let I=0;const q=Z.getAttributes();for(const j in q)if(q[j].location>=0){const oe=R[j];let ve=L[j];if(ve===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(ve=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(ve=F.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;I++}return u.attributesNum!==I||u.index!==Q}function _(F,X,Z,Q){const R={},L=X.attributes;let I=0;const q=Z.getAttributes();for(const j in q)if(q[j].location>=0){let oe=L[j];oe===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(oe=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(oe=F.instanceColor));const ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),R[j]=ve,I++}u.attributes=R,u.attributesNum=I,u.index=Q}function v(){const F=u.newAttributes;for(let X=0,Z=F.length;X<Z;X++)F[X]=0}function S(F){M(F,0)}function M(F,X){const Z=u.newAttributes,Q=u.enabledAttributes,R=u.attributeDivisors;Z[F]=1,Q[F]===0&&(n.enableVertexAttribArray(F),Q[F]=1),R[F]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,X),R[F]=X)}function T(){const F=u.newAttributes,X=u.enabledAttributes;for(let Z=0,Q=X.length;Z<Q;Z++)X[Z]!==F[Z]&&(n.disableVertexAttribArray(Z),X[Z]=0)}function A(F,X,Z,Q,R,L){i.isWebGL2===!0&&(Z===5124||Z===5125)?n.vertexAttribIPointer(F,X,Z,R,L):n.vertexAttribPointer(F,X,Z,Q,R,L)}function y(F,X,Z,Q){if(i.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const R=Q.attributes,L=Z.getAttributes(),I=X.defaultAttributeValues;for(const q in L){const j=L[q];if(j.location>=0){let K=R[q];if(K===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(K=F.instanceColor)),K!==void 0){const oe=K.normalized,ve=K.itemSize,G=t.get(K);if(G===void 0)continue;const Le=G.buffer,xe=G.type,Me=G.bytesPerElement;if(K.isInterleavedBufferAttribute){const ue=K.data,Be=ue.stride,Ce=K.offset;if(ue.isInstancedInterleavedBuffer){for(let ge=0;ge<j.locationSize;ge++)M(j.location+ge,ue.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<j.locationSize;ge++)S(j.location+ge);n.bindBuffer(34962,Le);for(let ge=0;ge<j.locationSize;ge++)A(j.location+ge,ve/j.locationSize,xe,oe,Be*Me,(Ce+ve/j.locationSize*ge)*Me)}else{if(K.isInstancedBufferAttribute){for(let ue=0;ue<j.locationSize;ue++)M(j.location+ue,K.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ue=0;ue<j.locationSize;ue++)S(j.location+ue);n.bindBuffer(34962,Le);for(let ue=0;ue<j.locationSize;ue++)A(j.location+ue,ve/j.locationSize,xe,oe,ve*Me,ve/j.locationSize*ue*Me)}}else if(I!==void 0){const oe=I[q];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(j.location,oe);break;case 3:n.vertexAttrib3fv(j.location,oe);break;case 4:n.vertexAttrib4fv(j.location,oe);break;default:n.vertexAttrib1fv(j.location,oe)}}}}T()}function b(){ie();for(const F in a){const X=a[F];for(const Z in X){const Q=X[Z];for(const R in Q)x(Q[R].object),delete Q[R];delete X[Z]}delete a[F]}}function D(F){if(a[F.id]===void 0)return;const X=a[F.id];for(const Z in X){const Q=X[Z];for(const R in Q)x(Q[R].object),delete Q[R];delete X[Z]}delete a[F.id]}function $(F){for(const X in a){const Z=a[X];if(Z[F.id]===void 0)continue;const Q=Z[F.id];for(const R in Q)x(Q[R].object),delete Q[R];delete Z[F.id]}}function ie(){U(),c=!0,u!==l&&(u=l,g(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ie,resetDefaultState:U,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function s1(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function o1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),g=n.getParameter(3379),x=n.getParameter(34076),m=n.getParameter(34921),h=n.getParameter(36347),p=n.getParameter(36348),_=n.getParameter(36349),v=f>0,S=o||e.has("OES_texture_float"),M=v&&S,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:h,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:T}}function a1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Wi,a=new ln,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f,g){const x=d.length!==0||f||i!==0||r;return r=f,t=c(d,g,0),i=d.length,x},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(d,f,g){const x=d.clippingPlanes,m=d.clipIntersection,h=d.clipShadows,p=n.get(d);if(!r||x===null||x.length===0||s&&!h)s?c(null):u();else{const _=s?0:i,v=_*4;let S=p.clippingState||null;l.value=S,S=c(x,f,v,g);for(let M=0;M!==v;++M)S[M]=t[M];p.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,g,x){const m=d!==null?d.length:0;let h=null;if(m!==0){if(h=l.value,x!==!0||h===null){const p=g+m*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(h===null||h.length<p)&&(h=new Float32Array(p));for(let v=0,S=g;v!==m;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,h}}function l1(n){let e=new WeakMap;function t(o,a){return a===vc?o.mapping=ls:a===xc&&(o.mapping=us),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===vc||a===xc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Sx(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ag extends Tg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hr=4,Ch=[.125,.215,.35,.446,.526,.582],Xi=20,vu=new Ag,bh=new ke;let xu=null;const Hi=(1+Math.sqrt(5))/2,Pr=1/Hi,Ah=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Hi,Pr),new z(0,Hi,-Pr),new z(Pr,0,Hi),new z(-Pr,0,Hi),new z(Hi,Pr,0),new z(-Hi,Pr,0)];class Lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){xu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xu),e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:co,format:Mn,encoding:lr,depthBuffer:!1},r=Ph(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u1(s)),this._blurMaterial=c1(s,e,t)}return r}_compileMaterial(e){const t=new Kn(this._lodPlanes[0],e);this._renderer.compile(t,vu)}_sceneToCubeUV(e,t,i,r){const a=new on(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(bh),c.toneMapping=Jn,c.autoClear=!1;const g=new Sf({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),x=new Kn(new Mo,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(bh),m=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const v=this._cubeSize;sa(r,_*v,p>2?v:0,v,v),c.setRenderTarget(r),m&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ls||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Kn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;sa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,vu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ah[(r-1)%Ah.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Kn(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Xi-1),m=s/x,h=isFinite(s)?1+Math.floor(c*m):Xi;h>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Xi}`);const p=[];let _=0;for(let A=0;A<Xi;++A){const y=A/m,b=Math.exp(-y*y/2);p.push(b),A===0?_+=b:A<h&&(_+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const S=this._sizeLods[r],M=3*S*(r>v-Hr?r-v+Hr:0),T=4*(this._cubeSize-S);sa(t,M,T,3*S,2*S),l.setRenderTarget(t),l.render(d,vu)}}function u1(n){const e=[],t=[],i=[];let r=n;const s=n-Hr+1+Ch.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Hr?l=Ch[o-n+Hr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],g=6,x=6,m=3,h=2,p=1,_=new Float32Array(m*x*g),v=new Float32Array(h*x*g),S=new Float32Array(p*x*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,y=T>2?0:-1,b=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];_.set(b,m*x*T),v.set(f,h*x*T);const D=[T,T,T,T,T,T];S.set(D,p*x*T)}const M=new Fn;M.setAttribute("position",new zn(_,m)),M.setAttribute("uv",new zn(v,h)),M.setAttribute("faceIndex",new zn(S,p)),e.push(M),r>Hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ph(n,e,t){const i=new ur(n,e,t);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function c1(n,e,t){const i=new Float32Array(Xi),r=new z(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ef(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Dh(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ef(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Rh(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ef(){return`

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
	`}function f1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===vc||l===xc,c=l===ls||l===us;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Lh(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new Lh(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function d1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function h1(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const g=d.morphAttributes;for(const x in g){const m=g[x];for(let h=0,p=m.length;h<p;h++)e.update(m[h],34962)}}function u(d){const f=[],g=d.index,x=d.attributes.position;let m=0;if(g!==null){const _=g.array;m=g.version;for(let v=0,S=_.length;v<S;v+=3){const M=_[v+0],T=_[v+1],A=_[v+2];f.push(M,T,T,A,A,M)}}else{const _=x.array;m=x.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const M=v+0,T=v+1,A=v+2;f.push(M,T,T,A,A,M)}}const h=new(gg(f)?Eg:wg)(f,1);h.version=m;const p=s.get(d);p&&e.remove(p),s.set(d,h)}function c(d){const f=s.get(d);if(f){const g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function p1(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,g){n.drawElements(s,g,a,f*l),t.update(g,s,1)}function d(f,g,x){if(x===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,g,a,f*l,x),t.update(g,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function m1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function g1(n,e){return n[0]-e[0]}function _1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function v1(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new ht,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=m!==void 0?m.length:0;let p=s.get(c);if(p===void 0||p.count!==h){let Z=function(){F.dispose(),s.delete(c),c.removeEventListener("dispose",Z)};var x=Z;p!==void 0&&p.texture.dispose();const S=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let D=0;S===!0&&(D=1),M===!0&&(D=2),T===!0&&(D=3);let $=c.attributes.position.count*D,ie=1;$>e.maxTextureSize&&(ie=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const U=new Float32Array($*ie*4*h),F=new yg(U,$,ie,h);F.type=Zi,F.needsUpdate=!0;const X=D*4;for(let Q=0;Q<h;Q++){const R=A[Q],L=y[Q],I=b[Q],q=$*ie*4*Q;for(let j=0;j<R.count;j++){const K=j*X;S===!0&&(o.fromBufferAttribute(R,j),U[q+K+0]=o.x,U[q+K+1]=o.y,U[q+K+2]=o.z,U[q+K+3]=0),M===!0&&(o.fromBufferAttribute(L,j),U[q+K+4]=o.x,U[q+K+5]=o.y,U[q+K+6]=o.z,U[q+K+7]=0),T===!0&&(o.fromBufferAttribute(I,j),U[q+K+8]=o.x,U[q+K+9]=o.y,U[q+K+10]=o.z,U[q+K+11]=I.itemSize===4?o.w:1)}}p={count:h,texture:F,size:new Ue($,ie)},s.set(c,p),c.addEventListener("dispose",Z)}let _=0;for(let S=0;S<g.length;S++)_+=g[S];const v=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",g),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const m=g===void 0?0:g.length;let h=i[c.id];if(h===void 0||h.length!==m){h=[];for(let M=0;M<m;M++)h[M]=[M,0];i[c.id]=h}for(let M=0;M<m;M++){const T=h[M];T[0]=M,T[1]=g[M]}h.sort(_1);for(let M=0;M<8;M++)M<m&&h[M][1]?(a[M][0]=h[M][0],a[M][1]=h[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(g1);const p=c.morphAttributes.position,_=c.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const T=a[M],A=T[0],y=T[1];A!==Number.MAX_SAFE_INTEGER&&y?(p&&c.getAttribute("morphTarget"+M)!==p[A]&&c.setAttribute("morphTarget"+M,p[A]),_&&c.getAttribute("morphNormal"+M)!==_[A]&&c.setAttribute("morphNormal"+M,_[A]),r[M]=y,v+=y):(p&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),_&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const S=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function x1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Lg=new Cn,Pg=new yg,Dg=new sx,Rg=new Cg,Ih=[],Nh=[],zh=new Float32Array(16),Fh=new Float32Array(9),kh=new Float32Array(4);function gs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ih[r];if(s===void 0&&(s=new Float32Array(r),Ih[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function at(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hl(n,e){let t=Nh[e];t===void 0&&(t=new Int32Array(e),Nh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function y1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function S1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2fv(this.addr,e),lt(t,e)}}function M1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;n.uniform3fv(this.addr,e),lt(t,e)}}function w1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4fv(this.addr,e),lt(t,e)}}function E1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;kh.set(i),n.uniformMatrix2fv(this.addr,!1,kh),lt(t,i)}}function T1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;Fh.set(i),n.uniformMatrix3fv(this.addr,!1,Fh),lt(t,i)}}function C1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;zh.set(i),n.uniformMatrix4fv(this.addr,!1,zh),lt(t,i)}}function b1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function A1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2iv(this.addr,e),lt(t,e)}}function L1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3iv(this.addr,e),lt(t,e)}}function P1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4iv(this.addr,e),lt(t,e)}}function D1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2uiv(this.addr,e),lt(t,e)}}function I1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3uiv(this.addr,e),lt(t,e)}}function N1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4uiv(this.addr,e),lt(t,e)}}function z1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Lg,r)}function F1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Dg,r)}function k1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rg,r)}function U1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Pg,r)}function O1(n){switch(n){case 5126:return y1;case 35664:return S1;case 35665:return M1;case 35666:return w1;case 35674:return E1;case 35675:return T1;case 35676:return C1;case 5124:case 35670:return b1;case 35667:case 35671:return A1;case 35668:case 35672:return L1;case 35669:case 35673:return P1;case 5125:return D1;case 36294:return R1;case 36295:return I1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return k1;case 36289:case 36303:case 36311:case 36292:return U1}}function B1(n,e){n.uniform1fv(this.addr,e)}function V1(n,e){const t=gs(e,this.size,2);n.uniform2fv(this.addr,t)}function G1(n,e){const t=gs(e,this.size,3);n.uniform3fv(this.addr,t)}function W1(n,e){const t=gs(e,this.size,4);n.uniform4fv(this.addr,t)}function H1(n,e){const t=gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function X1(n,e){const t=gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function j1(n,e){const t=gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function q1(n,e){n.uniform1iv(this.addr,e)}function $1(n,e){n.uniform2iv(this.addr,e)}function Y1(n,e){n.uniform3iv(this.addr,e)}function Z1(n,e){n.uniform4iv(this.addr,e)}function K1(n,e){n.uniform1uiv(this.addr,e)}function Q1(n,e){n.uniform2uiv(this.addr,e)}function J1(n,e){n.uniform3uiv(this.addr,e)}function eM(n,e){n.uniform4uiv(this.addr,e)}function tM(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lg,s[o])}function nM(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Dg,s[o])}function iM(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rg,s[o])}function rM(n,e,t){const i=this.cache,r=e.length,s=hl(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Pg,s[o])}function sM(n){switch(n){case 5126:return B1;case 35664:return V1;case 35665:return G1;case 35666:return W1;case 35674:return H1;case 35675:return X1;case 35676:return j1;case 5124:case 35670:return q1;case 35667:case 35671:return $1;case 35668:case 35672:return Y1;case 35669:case 35673:return Z1;case 5125:return K1;case 36294:return Q1;case 36295:return J1;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return tM;case 35679:case 36299:case 36307:return nM;case 35680:case 36300:case 36308:case 36293:return iM;case 36289:case 36303:case 36311:case 36292:return rM}}class oM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=O1(t.type)}}class aM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=sM(t.type)}}class lM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const yu=/(\w+)(\])?(\[|\.)?/g;function Uh(n,e){n.seq.push(e),n.map[e.id]=e}function uM(n,e,t){const i=n.name,r=i.length;for(yu.lastIndex=0;;){const s=yu.exec(i),o=yu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Uh(t,u===void 0?new oM(a,n,e):new aM(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new lM(a),Uh(t,d)),t=d}}}class Sa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);uM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Oh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let cM=0;function fM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function dM(n){switch(n){case lr:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Bh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fM(n.getShaderSource(e),o)}else return r}function hM(n,e){const t=dM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function pM(n,e){let t;switch(e){case Dv:t="Linear";break;case Rv:t="Reinhard";break;case Iv:t="OptimizedCineon";break;case Nv:t="ACESFilmic";break;case zv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function gM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _M(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function zs(n){return n!==""}function Vh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(n){return n.replace(vM,xM)}function xM(n,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ec(t)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wh(n){return n.replace(yM,SM)}function SM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ns&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ls:case us:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function TM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hg:e="ENVMAP_BLENDING_MULTIPLY";break;case Lv:e="ENVMAP_BLENDING_MIX";break;case Pv:e="ENVMAP_BLENDING_ADD";break}return e}function CM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=MM(t),u=wM(t),c=EM(t),d=TM(t),f=CM(t),g=t.isWebGL2?"":mM(t),x=gM(s),m=r.createProgram();let h,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[x].filter(zs).join(`
`),h.length>0&&(h+=`
`),p=[g,x].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(h=[Hh(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[g,Hh(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Ee.tonemapping_pars_fragment:"",t.toneMapping!==Jn?pM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,hM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=Ec(o),o=Vh(o,t),o=Gh(o,t),a=Ec(a),a=Vh(a,t),a=Gh(a,t),o=Wh(o),a=Wh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,p=["#define varying in",t.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=_+h+o,S=_+p+a,M=Oh(r,35633,v),T=Oh(r,35632,S);if(r.attachShader(m,M),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(M).trim(),$=r.getShaderInfoLog(T).trim();let ie=!0,U=!0;if(r.getProgramParameter(m,35714)===!1){ie=!1;const F=Bh(r,M,"vertex"),X=Bh(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+b+`
`+F+`
`+X)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(D===""||$==="")&&(U=!1);U&&(this.diagnostics={runnable:ie,programLog:b,vertexShader:{log:D,prefix:h},fragmentShader:{log:$,prefix:p}})}r.deleteShader(M),r.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new Sa(r,m)),A};let y;return this.getAttributes=function(){return y===void 0&&(y=_M(r,m)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=T,this}let AM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PM(e),t.set(e,i)),i}}class PM{constructor(e){this.id=AM++,this.code=e,this.usedTimes=0}}function DM(n,e,t,i,r,s,o){const a=new Mg,l=new LM,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,b,D,$,ie){const U=$.fog,F=ie.geometry,X=y.isMeshStandardMaterial?$.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),Q=!!Z&&Z.mapping===cl?Z.image.height:null,R=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const L=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,I=L!==void 0?L.length:0;let q=0;F.morphAttributes.position!==void 0&&(q=1),F.morphAttributes.normal!==void 0&&(q=2),F.morphAttributes.color!==void 0&&(q=3);let j,K,oe,ve;if(R){const Be=Dn[R];j=Be.vertexShader,K=Be.fragmentShader}else j=y.vertexShader,K=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),ve=l.getFragmentShaderID(y);const G=n.getRenderTarget(),Le=y.alphaTest>0,xe=y.clearcoat>0,Me=y.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:y.type,vertexShader:j,fragmentShader:K,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:ie.isInstancedMesh===!0,instancingColor:ie.isInstancedMesh===!0&&ie.instanceColor!==null,supportsVertexTextures:f,outputEncoding:G===null?n.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:lr,map:!!y.map,matcap:!!y.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:Q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===tx,tangentSpaceNormalMap:y.normalMapType===ex,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ke,clearcoat:xe,clearcoatMap:xe&&!!y.clearcoatMap,clearcoatRoughnessMap:xe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!y.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!y.iridescenceMap,iridescenceThicknessMap:Me&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Kr,alphaMap:!!y.alphaMap,alphaTest:Le,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!F.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!U,useFog:y.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:ie.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Jn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===yi,flipSided:y.side===cn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)b.push(D),b.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(p(b,y),_(b,y),b.push(n.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function _(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.physicallyCorrectLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.specularIntensityMap&&a.enable(15),b.specularColorMap&&a.enable(16),b.transmission&&a.enable(17),b.transmissionMap&&a.enable(18),b.thicknessMap&&a.enable(19),b.sheen&&a.enable(20),b.sheenColorMap&&a.enable(21),b.sheenRoughnessMap&&a.enable(22),b.decodeVideoTexture&&a.enable(23),b.opaque&&a.enable(24),y.push(a.mask)}function v(y){const b=x[y.type];let D;if(b){const $=Dn[b];D=_x.clone($.uniforms)}else D=y.uniforms;return D}function S(y,b){let D;for(let $=0,ie=u.length;$<ie;$++){const U=u[$];if(U.cacheKey===b){D=U,++D.usedTimes;break}}return D===void 0&&(D=new bM(n,b,y,s),u.push(D)),D}function M(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:A}}function RM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function IM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,g,x,m,h){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:g,groupOrder:x,renderOrder:d.renderOrder,z:m,group:h},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=g,p.groupOrder=x,p.renderOrder=d.renderOrder,p.z=m,p.group=h),e++,p}function a(d,f,g,x,m,h){const p=o(d,f,g,x,m,h);g.transmission>0?i.push(p):g.transparent===!0?r.push(p):t.push(p)}function l(d,f,g,x,m,h){const p=o(d,f,g,x,m,h);g.transmission>0?i.unshift(p):g.transparent===!0?r.unshift(p):t.unshift(p)}function u(d,f){t.length>1&&t.sort(d||IM),i.length>1&&i.sort(f||Xh),r.length>1&&r.sort(f||Xh)}function c(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function NM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new jh,n.set(i,[o])):r>=s.length?(o=new jh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function zM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ke};break;case"SpotLight":t={position:new z,direction:new z,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function FM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kM=0;function UM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function OM(n,e){const t=new zM,i=FM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new z);const s=new z,o=new it,a=new it;function l(c,d){let f=0,g=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let m=0,h=0,p=0,_=0,v=0,S=0,M=0,T=0,A=0,y=0;c.sort(UM);const b=d!==!0?Math.PI:1;for(let $=0,ie=c.length;$<ie;$++){const U=c[$],F=U.color,X=U.intensity,Z=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=F.r*X*b,g+=F.g*X*b,x+=F.b*X*b;else if(U.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(U.sh.coefficients[R],X);else if(U.isDirectionalLight){const R=t.get(U);if(R.color.copy(U.color).multiplyScalar(U.intensity*b),U.castShadow){const L=U.shadow,I=i.get(U);I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,r.directionalShadow[m]=I,r.directionalShadowMap[m]=Q,r.directionalShadowMatrix[m]=U.shadow.matrix,S++}r.directional[m]=R,m++}else if(U.isSpotLight){const R=t.get(U);R.position.setFromMatrixPosition(U.matrixWorld),R.color.copy(F).multiplyScalar(X*b),R.distance=Z,R.coneCos=Math.cos(U.angle),R.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),R.decay=U.decay,r.spot[p]=R;const L=U.shadow;if(U.map&&(r.spotLightMap[A]=U.map,A++,L.updateMatrices(U),U.castShadow&&y++),r.spotLightMatrix[p]=L.matrix,U.castShadow){const I=i.get(U);I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,r.spotShadow[p]=I,r.spotShadowMap[p]=Q,T++}p++}else if(U.isRectAreaLight){const R=t.get(U);R.color.copy(F).multiplyScalar(X),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),r.rectArea[_]=R,_++}else if(U.isPointLight){const R=t.get(U);if(R.color.copy(U.color).multiplyScalar(U.intensity*b),R.distance=U.distance,R.decay=U.decay,U.castShadow){const L=U.shadow,I=i.get(U);I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,I.shadowCameraNear=L.camera.near,I.shadowCameraFar=L.camera.far,r.pointShadow[h]=I,r.pointShadowMap[h]=Q,r.pointShadowMatrix[h]=U.shadow.matrix,M++}r.point[h]=R,h++}else if(U.isHemisphereLight){const R=t.get(U);R.skyColor.copy(U.color).multiplyScalar(X*b),R.groundColor.copy(U.groundColor).multiplyScalar(X*b),r.hemi[v]=R,v++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=g,r.ambient[2]=x;const D=r.hash;(D.directionalLength!==m||D.pointLength!==h||D.spotLength!==p||D.rectAreaLength!==_||D.hemiLength!==v||D.numDirectionalShadows!==S||D.numPointShadows!==M||D.numSpotShadows!==T||D.numSpotMaps!==A)&&(r.directional.length=m,r.spot.length=p,r.rectArea.length=_,r.point.length=h,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+A-y,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=y,D.directionalLength=m,D.pointLength=h,D.spotLength=p,D.rectAreaLength=_,D.hemiLength=v,D.numDirectionalShadows=S,D.numPointShadows=M,D.numSpotShadows=T,D.numSpotMaps=A,r.version=kM++)}function u(c,d){let f=0,g=0,x=0,m=0,h=0;const p=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const S=c[_];if(S.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(S.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),x++}else if(S.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),g++}else if(S.isHemisphereLight){const M=r.hemi[h];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),h++}}}return{setup:l,setupView:u,state:r}}function qh(n,e){const t=new OM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function BM(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new qh(n,e),t.set(s,[l])):o>=a.length?(l=new qh(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class VM extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GM extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
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
}`;function XM(n,e,t){let i=new Mf;const r=new Ue,s=new Ue,o=new ht,a=new VM({depthPacking:Jv}),l=new GM,u={},c=t.maxTextureSize,d={0:cn,1:as,2:yi},f=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:WM,fragmentShader:HM}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const x=new Fn;x.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Kn(x,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cg,this.render=function(S,M,T){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const A=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Li),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let $=0,ie=S.length;$<ie;$++){const U=S[$],F=U.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const X=F.getFrameExtents();if(r.multiply(X),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,F.mapSize.y=s.y)),F.map===null){const Q=this.type!==Ns?{minFilter:Ft,magFilter:Ft}:{};F.map=new ur(r.x,r.y,Q),F.map.texture.name=U.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const Z=F.getViewportCount();for(let Q=0;Q<Z;Q++){const R=F.getViewport(Q);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),D.viewport(o),F.updateMatrices(U,Q),i=F.getFrustum(),v(M,T,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===Ns&&p(F,T),F.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(A,y,b)};function p(S,M){const T=e.update(m);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ur(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(M,null,T,f,m,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(M,null,T,g,m,null)}function _(S,M,T,A,y,b){let D=null;const $=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if($!==void 0?D=$:D=T.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const ie=D.uuid,U=M.uuid;let F=u[ie];F===void 0&&(F={},u[ie]=F);let X=F[U];X===void 0&&(X=D.clone(),F[U]=X),D=X}return D.visible=M.visible,D.wireframe=M.wireframe,b===Ns?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:d[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,T.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(T.matrixWorld),D.nearDistance=A,D.farDistance=y),D}function v(S,M,T,A,y){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Ns)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const $=e.update(S),ie=S.material;if(Array.isArray(ie)){const U=$.groups;for(let F=0,X=U.length;F<X;F++){const Z=U[F],Q=ie[Z.materialIndex];if(Q&&Q.visible){const R=_(S,Q,A,T.near,T.far,y);n.renderBufferDirect(T,null,$,R,S,Z)}}}else if(ie.visible){const U=_(S,ie,A,T.near,T.far,y);n.renderBufferDirect(T,null,$,U,S,null)}}const D=S.children;for(let $=0,ie=D.length;$<ie;$++)v(D[$],M,T,A,y)}}function jM(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const V=new ht;let J=null;const ae=new ht(0,0,0,0);return{setMask:function(fe){J!==fe&&!P&&(n.colorMask(fe,fe,fe,fe),J=fe)},setLocked:function(fe){P=fe},setClear:function(fe,Ie,ct,St,zi){zi===!0&&(fe*=St,Ie*=St,ct*=St),V.set(fe,Ie,ct,St),ae.equals(V)===!1&&(n.clearColor(fe,Ie,ct,St),ae.copy(V))},reset:function(){P=!1,J=null,ae.set(-1,0,0,0)}}}function s(){let P=!1,V=null,J=null,ae=null;return{setTest:function(fe){fe?Le(2929):xe(2929)},setMask:function(fe){V!==fe&&!P&&(n.depthMask(fe),V=fe)},setFunc:function(fe){if(J!==fe){switch(fe){case Mv:n.depthFunc(512);break;case wv:n.depthFunc(519);break;case Ev:n.depthFunc(513);break;case _c:n.depthFunc(515);break;case Tv:n.depthFunc(514);break;case Cv:n.depthFunc(518);break;case bv:n.depthFunc(516);break;case Av:n.depthFunc(517);break;default:n.depthFunc(515)}J=fe}},setLocked:function(fe){P=fe},setClear:function(fe){ae!==fe&&(n.clearDepth(fe),ae=fe)},reset:function(){P=!1,V=null,J=null,ae=null}}}function o(){let P=!1,V=null,J=null,ae=null,fe=null,Ie=null,ct=null,St=null,zi=null;return{setTest:function(Xe){P||(Xe?Le(2960):xe(2960))},setMask:function(Xe){V!==Xe&&!P&&(n.stencilMask(Xe),V=Xe)},setFunc:function(Xe,On,Jt){(J!==Xe||ae!==On||fe!==Jt)&&(n.stencilFunc(Xe,On,Jt),J=Xe,ae=On,fe=Jt)},setOp:function(Xe,On,Jt){(Ie!==Xe||ct!==On||St!==Jt)&&(n.stencilOp(Xe,On,Jt),Ie=Xe,ct=On,St=Jt)},setLocked:function(Xe){P=Xe},setClear:function(Xe){zi!==Xe&&(n.clearStencil(Xe),zi=Xe)},reset:function(){P=!1,V=null,J=null,ae=null,fe=null,Ie=null,ct=null,St=null,zi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},g={},x=new WeakMap,m=[],h=null,p=!1,_=null,v=null,S=null,M=null,T=null,A=null,y=null,b=!1,D=null,$=null,ie=null,U=null,F=null;const X=n.getParameter(35661);let Z=!1,Q=0;const R=n.getParameter(7938);R.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(R)[1]),Z=Q>=1):R.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),Z=Q>=2);let L=null,I={};const q=n.getParameter(3088),j=n.getParameter(2978),K=new ht().fromArray(q),oe=new ht().fromArray(j);function ve(P,V,J){const ae=new Uint8Array(4),fe=n.createTexture();n.bindTexture(P,fe),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let Ie=0;Ie<J;Ie++)n.texImage2D(V+Ie,0,6408,1,1,0,6408,5121,ae);return fe}const G={};G[3553]=ve(3553,3553,1),G[34067]=ve(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Le(2929),l.setFunc(_c),bt(!1),bn(kd),Le(2884),gt(Li);function Le(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function xe(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function Me(P,V){return g[P]!==V?(n.bindFramebuffer(P,V),g[P]=V,i&&(P===36009&&(g[36160]=V),P===36160&&(g[36009]=V)),!0):!1}function ue(P,V){let J=m,ae=!1;if(P)if(J=x.get(V),J===void 0&&(J=[],x.set(V,J)),P.isWebGLMultipleRenderTargets){const fe=P.texture;if(J.length!==fe.length||J[0]!==36064){for(let Ie=0,ct=fe.length;Ie<ct;Ie++)J[Ie]=36064+Ie;J.length=fe.length,ae=!0}}else J[0]!==36064&&(J[0]=36064,ae=!0);else J[0]!==1029&&(J[0]=1029,ae=!0);ae&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Be(P){return h!==P?(n.useProgram(P),h=P,!0):!1}const Ce={[Dr]:32774,[fv]:32778,[dv]:32779};if(i)Ce[Vd]=32775,Ce[Gd]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ce[Vd]=P.MIN_EXT,Ce[Gd]=P.MAX_EXT)}const ge={[hv]:0,[pv]:1,[mv]:768,[fg]:770,[Sv]:776,[xv]:774,[_v]:772,[gv]:769,[dg]:771,[yv]:775,[vv]:773};function gt(P,V,J,ae,fe,Ie,ct,St){if(P===Li){p===!0&&(xe(3042),p=!1);return}if(p===!1&&(Le(3042),p=!0),P!==cv){if(P!==_||St!==b){if((v!==Dr||T!==Dr)&&(n.blendEquation(32774),v=Dr,T=Dr),St)switch(P){case Kr:n.blendFuncSeparate(1,771,1,771);break;case Ud:n.blendFunc(1,1);break;case Od:n.blendFuncSeparate(0,769,0,1);break;case Bd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Kr:n.blendFuncSeparate(770,771,1,771);break;case Ud:n.blendFunc(770,1);break;case Od:n.blendFuncSeparate(0,769,0,1);break;case Bd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,M=null,A=null,y=null,_=P,b=St}return}fe=fe||V,Ie=Ie||J,ct=ct||ae,(V!==v||fe!==T)&&(n.blendEquationSeparate(Ce[V],Ce[fe]),v=V,T=fe),(J!==S||ae!==M||Ie!==A||ct!==y)&&(n.blendFuncSeparate(ge[J],ge[ae],ge[Ie],ge[ct]),S=J,M=ae,A=Ie,y=ct),_=P,b=null}function Nt(P,V){P.side===yi?xe(2884):Le(2884);let J=P.side===cn;V&&(J=!J),bt(J),P.blending===Kr&&P.transparent===!1?gt(Li):gt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ae=P.stencilWrite;u.setTest(ae),ae&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Oe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Le(32926):xe(32926)}function bt(P){D!==P&&(P?n.frontFace(2304):n.frontFace(2305),D=P)}function bn(P){P!==av?(Le(2884),P!==$&&(P===kd?n.cullFace(1029):P===lv?n.cullFace(1028):n.cullFace(1032))):xe(2884),$=P}function _t(P){P!==ie&&(Z&&n.lineWidth(P),ie=P)}function Oe(P,V,J){P?(Le(32823),(U!==V||F!==J)&&(n.polygonOffset(V,J),U=V,F=J)):xe(32823)}function kn(P){P?Le(3089):xe(3089)}function Un(P){P===void 0&&(P=33984+X-1),L!==P&&(n.activeTexture(P),L=P)}function C(P,V,J){J===void 0&&(L===null?J=33984+X-1:J=L);let ae=I[J];ae===void 0&&(ae={type:void 0,texture:void 0},I[J]=ae),(ae.type!==P||ae.texture!==V)&&(L!==J&&(n.activeTexture(J),L=J),n.bindTexture(P,V||G[P]),ae.type=P,ae.texture=V)}function w(){const P=I[L];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){K.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function de(P){oe.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),oe.copy(P))}function Re(P,V){let J=d.get(V);J===void 0&&(J=new WeakMap,d.set(V,J));let ae=J.get(P);ae===void 0&&(ae=n.getUniformBlockIndex(V,P.name),J.set(P,ae))}function He(P,V){const ae=d.get(V).get(P);c.get(P)!==ae&&(n.uniformBlockBinding(V,ae,P.__bindingPointIndex),c.set(P,ae))}function ut(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},L=null,I={},g={},x=new WeakMap,m=[],h=null,p=!1,_=null,v=null,S=null,M=null,T=null,A=null,y=null,b=!1,D=null,$=null,ie=null,U=null,F=null,K.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Le,disable:xe,bindFramebuffer:Me,drawBuffers:ue,useProgram:Be,setBlending:gt,setMaterial:Nt,setFlipSided:bt,setCullFace:bn,setLineWidth:_t,setPolygonOffset:Oe,setScissorTest:kn,activeTexture:Un,bindTexture:C,unbindTexture:w,compressedTexImage2D:B,compressedTexImage3D:ee,texImage2D:_e,texImage3D:ce,updateUBOMapping:Re,uniformBlockBinding:He,texStorage2D:H,texStorage3D:pe,texSubImage2D:te,texSubImage3D:re,compressedTexSubImage2D:ye,compressedTexSubImage3D:se,scissor:me,viewport:de,reset:ut}}function qM(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),x=new WeakMap;let m;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return p?new OffscreenCanvas(C,w):qa("canvas")}function v(C,w,B,ee){let te=1;if((C.width>ee||C.height>ee)&&(te=ee/Math.max(C.width,C.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const re=w?wc:Math.floor,ye=re(te*C.width),se=re(te*C.height);m===void 0&&(m=_(ye,se));const H=B?_(ye,se):m;return H.width=ye,H.height=se,H.getContext("2d").drawImage(C,0,0,ye,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+se+")."),H}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return mh(C.width)&&mh(C.height)}function M(C){return a?!1:C.wrapS!==Sn||C.wrapT!==Sn||C.minFilter!==Ft&&C.minFilter!==sn}function T(C,w){return C.generateMipmaps&&w&&C.minFilter!==Ft&&C.minFilter!==sn}function A(C){n.generateMipmap(C)}function y(C,w,B,ee,te=!1){if(a===!1)return w;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=w;return w===6403&&(B===5126&&(re=33326),B===5131&&(re=33325),B===5121&&(re=33321)),w===33319&&(B===5126&&(re=33328),B===5131&&(re=33327),B===5121&&(re=33323)),w===6408&&(B===5126&&(re=34836),B===5131&&(re=34842),B===5121&&(re=ee===Ke&&te===!1?35907:32856),B===32819&&(re=32854),B===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function b(C,w,B){return T(C,B)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function D(C){return C===Ft||C===Wd||C===Hd?9728:9729}function $(C){const w=C.target;w.removeEventListener("dispose",$),U(w),w.isVideoTexture&&x.delete(w)}function ie(C){const w=C.target;w.removeEventListener("dispose",ie),X(w)}function U(C){const w=i.get(C);if(w.__webglInit===void 0)return;const B=C.source,ee=h.get(B);if(ee){const te=ee[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&F(C),Object.keys(ee).length===0&&h.delete(B)}i.remove(C)}function F(C){const w=i.get(C);n.deleteTexture(w.__webglTexture);const B=C.source,ee=h.get(B);delete ee[w.__cacheKey],o.memory.textures--}function X(C){const w=C.texture,B=i.get(C),ee=i.get(w);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)n.deleteFramebuffer(B.__webglFramebuffer[te]),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[te]);else{if(n.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let te=0;te<B.__webglColorRenderbuffer.length;te++)B.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[te]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,re=w.length;te<re;te++){const ye=i.get(w[te]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(w[te])}i.remove(w),i.remove(C)}let Z=0;function Q(){Z=0}function R(){const C=Z;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Z+=1,C}function L(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function I(C,w){const B=i.get(C);if(C.isVideoTexture&&kn(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,C,w);return}}t.bindTexture(3553,B.__webglTexture,33984+w)}function q(C,w){const B=i.get(C);if(C.version>0&&B.__version!==C.version){xe(B,C,w);return}t.bindTexture(35866,B.__webglTexture,33984+w)}function j(C,w){const B=i.get(C);if(C.version>0&&B.__version!==C.version){xe(B,C,w);return}t.bindTexture(32879,B.__webglTexture,33984+w)}function K(C,w){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Me(B,C,w);return}t.bindTexture(34067,B.__webglTexture,33984+w)}const oe={[yc]:10497,[Sn]:33071,[Sc]:33648},ve={[Ft]:9728,[Wd]:9984,[Hd]:9986,[sn]:9729,[Fv]:9985,[fl]:9987};function G(C,w,B){if(B?(n.texParameteri(C,10242,oe[w.wrapS]),n.texParameteri(C,10243,oe[w.wrapT]),(C===32879||C===35866)&&n.texParameteri(C,32882,oe[w.wrapR]),n.texParameteri(C,10240,ve[w.magFilter]),n.texParameteri(C,10241,ve[w.minFilter])):(n.texParameteri(C,10242,33071),n.texParameteri(C,10243,33071),(C===32879||C===35866)&&n.texParameteri(C,32882,33071),(w.wrapS!==Sn||w.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,10240,D(w.magFilter)),n.texParameteri(C,10241,D(w.minFilter)),w.minFilter!==Ft&&w.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.type===Zi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===co&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Le(C,w){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",$));const ee=w.source;let te=h.get(ee);te===void 0&&(te={},h.set(ee,te));const re=L(w);if(re!==C.__cacheKey){te[re]===void 0&&(te[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[re].usedTimes++;const ye=te[C.__cacheKey];ye!==void 0&&(te[C.__cacheKey].usedTimes--,ye.usedTimes===0&&F(w)),C.__cacheKey=re,C.__webglTexture=te[re].texture}return B}function xe(C,w,B){let ee=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=35866),w.isData3DTexture&&(ee=32879);const te=Le(C,w),re=w.source;t.bindTexture(ee,C.__webglTexture,33984+B);const ye=i.get(re);if(re.version!==ye.__version||te===!0){t.activeTexture(33984+B),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const se=M(w)&&S(w.image)===!1;let H=v(w.image,se,!1,c);H=Un(w,H);const pe=S(H)||a,_e=s.convert(w.format,w.encoding);let ce=s.convert(w.type),me=y(w.internalFormat,_e,ce,w.encoding,w.isVideoTexture);G(ee,w,pe);let de;const Re=w.mipmaps,He=a&&w.isVideoTexture!==!0,ut=ye.__version===void 0||te===!0,P=b(w,H,pe);if(w.isDepthTexture)me=6402,a?w.type===Zi?me=36012:w.type===Yi?me=33190:w.type===Qr?me=35056:me=33189:w.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===er&&me===6402&&w.type!==mg&&w.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Yi,ce=s.convert(w.type)),w.format===cs&&me===6402&&(me=34041,w.type!==Qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Qr,ce=s.convert(w.type))),ut&&(He?t.texStorage2D(3553,1,me,H.width,H.height):t.texImage2D(3553,0,me,H.width,H.height,0,_e,ce,null));else if(w.isDataTexture)if(Re.length>0&&pe){He&&ut&&t.texStorage2D(3553,P,me,Re[0].width,Re[0].height);for(let V=0,J=Re.length;V<J;V++)de=Re[V],He?t.texSubImage2D(3553,V,0,0,de.width,de.height,_e,ce,de.data):t.texImage2D(3553,V,me,de.width,de.height,0,_e,ce,de.data);w.generateMipmaps=!1}else He?(ut&&t.texStorage2D(3553,P,me,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,_e,ce,H.data)):t.texImage2D(3553,0,me,H.width,H.height,0,_e,ce,H.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&ut&&t.texStorage3D(35866,P,me,Re[0].width,Re[0].height,H.depth);for(let V=0,J=Re.length;V<J;V++)de=Re[V],w.format!==Mn?_e!==null?He?t.compressedTexSubImage3D(35866,V,0,0,0,de.width,de.height,H.depth,_e,de.data,0,0):t.compressedTexImage3D(35866,V,me,de.width,de.height,H.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(35866,V,0,0,0,de.width,de.height,H.depth,_e,ce,de.data):t.texImage3D(35866,V,me,de.width,de.height,H.depth,0,_e,ce,de.data)}else{He&&ut&&t.texStorage2D(3553,P,me,Re[0].width,Re[0].height);for(let V=0,J=Re.length;V<J;V++)de=Re[V],w.format!==Mn?_e!==null?He?t.compressedTexSubImage2D(3553,V,0,0,de.width,de.height,_e,de.data):t.compressedTexImage2D(3553,V,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(3553,V,0,0,de.width,de.height,_e,ce,de.data):t.texImage2D(3553,V,me,de.width,de.height,0,_e,ce,de.data)}else if(w.isDataArrayTexture)He?(ut&&t.texStorage3D(35866,P,me,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,_e,ce,H.data)):t.texImage3D(35866,0,me,H.width,H.height,H.depth,0,_e,ce,H.data);else if(w.isData3DTexture)He?(ut&&t.texStorage3D(32879,P,me,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,_e,ce,H.data)):t.texImage3D(32879,0,me,H.width,H.height,H.depth,0,_e,ce,H.data);else if(w.isFramebufferTexture){if(ut)if(He)t.texStorage2D(3553,P,me,H.width,H.height);else{let V=H.width,J=H.height;for(let ae=0;ae<P;ae++)t.texImage2D(3553,ae,me,V,J,0,_e,ce,null),V>>=1,J>>=1}}else if(Re.length>0&&pe){He&&ut&&t.texStorage2D(3553,P,me,Re[0].width,Re[0].height);for(let V=0,J=Re.length;V<J;V++)de=Re[V],He?t.texSubImage2D(3553,V,0,0,_e,ce,de):t.texImage2D(3553,V,me,_e,ce,de);w.generateMipmaps=!1}else He?(ut&&t.texStorage2D(3553,P,me,H.width,H.height),t.texSubImage2D(3553,0,0,0,_e,ce,H)):t.texImage2D(3553,0,me,_e,ce,H);T(w,pe)&&A(ee),ye.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Me(C,w,B){if(w.image.length!==6)return;const ee=Le(C,w),te=w.source;t.bindTexture(34067,C.__webglTexture,33984+B);const re=i.get(te);if(te.version!==re.__version||ee===!0){t.activeTexture(33984+B),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const ye=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,H=[];for(let V=0;V<6;V++)!ye&&!se?H[V]=v(w.image[V],!1,!0,u):H[V]=se?w.image[V].image:w.image[V],H[V]=Un(w,H[V]);const pe=H[0],_e=S(pe)||a,ce=s.convert(w.format,w.encoding),me=s.convert(w.type),de=y(w.internalFormat,ce,me,w.encoding),Re=a&&w.isVideoTexture!==!0,He=re.__version===void 0||ee===!0;let ut=b(w,pe,_e);G(34067,w,_e);let P;if(ye){Re&&He&&t.texStorage2D(34067,ut,de,pe.width,pe.height);for(let V=0;V<6;V++){P=H[V].mipmaps;for(let J=0;J<P.length;J++){const ae=P[J];w.format!==Mn?ce!==null?Re?t.compressedTexSubImage2D(34069+V,J,0,0,ae.width,ae.height,ce,ae.data):t.compressedTexImage2D(34069+V,J,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+V,J,0,0,ae.width,ae.height,ce,me,ae.data):t.texImage2D(34069+V,J,de,ae.width,ae.height,0,ce,me,ae.data)}}}else{P=w.mipmaps,Re&&He&&(P.length>0&&ut++,t.texStorage2D(34067,ut,de,H[0].width,H[0].height));for(let V=0;V<6;V++)if(se){Re?t.texSubImage2D(34069+V,0,0,0,H[V].width,H[V].height,ce,me,H[V].data):t.texImage2D(34069+V,0,de,H[V].width,H[V].height,0,ce,me,H[V].data);for(let J=0;J<P.length;J++){const fe=P[J].image[V].image;Re?t.texSubImage2D(34069+V,J+1,0,0,fe.width,fe.height,ce,me,fe.data):t.texImage2D(34069+V,J+1,de,fe.width,fe.height,0,ce,me,fe.data)}}else{Re?t.texSubImage2D(34069+V,0,0,0,ce,me,H[V]):t.texImage2D(34069+V,0,de,ce,me,H[V]);for(let J=0;J<P.length;J++){const ae=P[J];Re?t.texSubImage2D(34069+V,J+1,0,0,ce,me,ae.image[V]):t.texImage2D(34069+V,J+1,de,ce,me,ae.image[V])}}}T(w,_e)&&A(34067),re.__version=te.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ue(C,w,B,ee,te){const re=s.convert(B.format,B.encoding),ye=s.convert(B.type),se=y(B.internalFormat,re,ye,B.encoding);i.get(w).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,se,w.width,w.height,w.depth,0,re,ye,null):t.texImage2D(te,0,se,w.width,w.height,0,re,ye,null)),t.bindFramebuffer(36160,C),Oe(w)?f.framebufferTexture2DMultisampleEXT(36160,ee,te,i.get(B).__webglTexture,0,_t(w)):(te===3553||te>=34069&&te<=34074)&&n.framebufferTexture2D(36160,ee,te,i.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(C,w,B){if(n.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let ee=33189;if(B||Oe(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===Zi?ee=36012:te.type===Yi&&(ee=33190));const re=_t(w);Oe(w)?f.renderbufferStorageMultisampleEXT(36161,re,ee,w.width,w.height):n.renderbufferStorageMultisample(36161,re,ee,w.width,w.height)}else n.renderbufferStorage(36161,ee,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const ee=_t(w);B&&Oe(w)===!1?n.renderbufferStorageMultisample(36161,ee,35056,w.width,w.height):Oe(w)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,C)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<ee.length;te++){const re=ee[te],ye=s.convert(re.format,re.encoding),se=s.convert(re.type),H=y(re.internalFormat,ye,se,re.encoding),pe=_t(w);B&&Oe(w)===!1?n.renderbufferStorageMultisample(36161,pe,H,w.width,w.height):Oe(w)?f.renderbufferStorageMultisampleEXT(36161,pe,H,w.width,w.height):n.renderbufferStorage(36161,H,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function Ce(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),I(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,te=_t(w);if(w.depthTexture.format===er)Oe(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):n.framebufferTexture2D(36160,36096,3553,ee,0);else if(w.depthTexture.format===cs)Oe(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):n.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function ge(C){const w=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ce(w.__webglFramebuffer,C)}else if(B){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=n.createRenderbuffer(),Be(w.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Be(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function gt(C,w,B){const ee=i.get(C);w!==void 0&&ue(ee.__webglFramebuffer,C,C.texture,36064,3553),B!==void 0&&ge(C)}function Nt(C){const w=C.texture,B=i.get(C),ee=i.get(w);C.addEventListener("dispose",ie),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,ye=S(C)||a;if(te){B.__webglFramebuffer=[];for(let se=0;se<6;se++)B.__webglFramebuffer[se]=n.createFramebuffer()}else{if(B.__webglFramebuffer=n.createFramebuffer(),re)if(r.drawBuffers){const se=C.texture;for(let H=0,pe=se.length;H<pe;H++){const _e=i.get(se[H]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Oe(C)===!1){const se=re?w:[w];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let H=0;H<se.length;H++){const pe=se[H];B.__webglColorRenderbuffer[H]=n.createRenderbuffer(),n.bindRenderbuffer(36161,B.__webglColorRenderbuffer[H]);const _e=s.convert(pe.format,pe.encoding),ce=s.convert(pe.type),me=y(pe.internalFormat,_e,ce,pe.encoding,C.isXRRenderTarget===!0),de=_t(C);n.renderbufferStorageMultisample(36161,de,me,C.width,C.height),n.framebufferRenderbuffer(36160,36064+H,36161,B.__webglColorRenderbuffer[H])}n.bindRenderbuffer(36161,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ee.__webglTexture),G(34067,w,ye);for(let se=0;se<6;se++)ue(B.__webglFramebuffer[se],C,w,36064,34069+se);T(w,ye)&&A(34067),t.unbindTexture()}else if(re){const se=C.texture;for(let H=0,pe=se.length;H<pe;H++){const _e=se[H],ce=i.get(_e);t.bindTexture(3553,ce.__webglTexture),G(3553,_e,ye),ue(B.__webglFramebuffer,C,_e,36064+H,3553),T(_e,ye)&&A(3553)}t.unbindTexture()}else{let se=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?se=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,ee.__webglTexture),G(se,w,ye),ue(B.__webglFramebuffer,C,w,36064,se),T(w,ye)&&A(se),t.unbindTexture()}C.depthBuffer&&ge(C)}function bt(C){const w=S(C)||a,B=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,te=B.length;ee<te;ee++){const re=B[ee];if(T(re,w)){const ye=C.isWebGLCubeRenderTarget?34067:3553,se=i.get(re).__webglTexture;t.bindTexture(ye,se),A(ye),t.unbindTexture()}}}function bn(C){if(a&&C.samples>0&&Oe(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],B=C.width,ee=C.height;let te=16384;const re=[],ye=C.stencilBuffer?33306:36096,se=i.get(C),H=C.isWebGLMultipleRenderTargets===!0;if(H)for(let pe=0;pe<w.length;pe++)t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,se.__webglFramebuffer),n.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,se.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,se.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){re.push(36064+pe),C.depthBuffer&&re.push(ye);const _e=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(_e===!1&&(C.depthBuffer&&(te|=256),C.stencilBuffer&&(te|=1024)),H&&n.framebufferRenderbuffer(36008,36064,36161,se.__webglColorRenderbuffer[pe]),_e===!0&&(n.invalidateFramebuffer(36008,[ye]),n.invalidateFramebuffer(36009,[ye])),H){const ce=i.get(w[pe]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ce,0)}n.blitFramebuffer(0,0,B,ee,0,0,B,ee,te,9728),g&&n.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let pe=0;pe<w.length;pe++){t.bindFramebuffer(36160,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+pe,36161,se.__webglColorRenderbuffer[pe]);const _e=i.get(w[pe]).__webglTexture;t.bindFramebuffer(36160,se.__webglFramebuffer),n.framebufferTexture2D(36009,36064+pe,3553,_e,0)}t.bindFramebuffer(36009,se.__webglMultisampledFramebuffer)}}function _t(C){return Math.min(d,C.samples)}function Oe(C){const w=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function kn(C){const w=o.render.frame;x.get(C)!==w&&(x.set(C,w),C.update())}function Un(C,w){const B=C.encoding,ee=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Mc||B!==lr&&(B===Ke?a===!1?e.has("EXT_sRGB")===!0&&ee===Mn?(C.format=Mc,C.minFilter=sn,C.generateMipmaps=!1):w=vg.sRGBToLinear(w):(ee!==Mn||te!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),w}this.allocateTextureUnit=R,this.resetTextureUnits=Q,this.setTexture2D=I,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=gt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Oe}function $M(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===ar)return 5121;if(s===Bv)return 32819;if(s===Vv)return 32820;if(s===kv)return 5120;if(s===Uv)return 5122;if(s===mg)return 5123;if(s===Ov)return 5124;if(s===Yi)return 5125;if(s===Zi)return 5126;if(s===co)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Gv)return 6406;if(s===Mn)return 6408;if(s===Hv)return 6409;if(s===Xv)return 6410;if(s===er)return 6402;if(s===cs)return 34041;if(s===jv)return 6403;if(s===Wv)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Mc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===qv)return 36244;if(s===$v)return 33319;if(s===Yv)return 33320;if(s===Zv)return 36249;if(s===Hl||s===Xl||s===jl||s===ql)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Hl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Hl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ql)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xd||s===jd||s===qd||s===$d)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Xd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$d)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Yd||s===Zd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Yd)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Zd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kd||s===Qd||s===Jd||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===uh||s===ch)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Kd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jd)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===eh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===th)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ih)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===oh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ah)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===uh)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ch)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===fh)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Qr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class YM extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oa extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZM={type:"move"};class Su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const h=t.getJointPose(m,i);if(u.joints[m.jointName]===void 0){const _=new oa;_.matrixAutoUpdate=!1,_.visible=!1,u.joints[m.jointName]=_,u.add(_)}const p=u.joints[m.jointName];h!==null&&(p.matrix.fromArray(h.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=h.radius),p.visible=h!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),g=.02,x=.005;u.inputState.pinching&&f>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class KM extends Cn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:er,c!==er&&c!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===er&&(i=Yi),i===void 0&&c===cs&&(i=Qr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1}}class QM extends ms{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,d=null,f=null,g=null;const x=t.getContextAttributes();let m=null,h=null;const p=[],_=[],v=new on;v.layers.enable(1),v.viewport=new ht;const S=new on;S.layers.enable(2),S.viewport=new ht;const M=[v,S],T=new YM;T.layers.enable(1),T.layers.enable(2);let A=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let I=p[L];return I===void 0&&(I=new Su,p[L]=I),I.getTargetRaySpace()},this.getControllerGrip=function(L){let I=p[L];return I===void 0&&(I=new Su,p[L]=I),I.getGripSpace()},this.getHand=function(L){let I=p[L];return I===void 0&&(I=new Su,p[L]=I),I.getHandSpace()};function b(L){const I=_.indexOf(L.inputSource);if(I===-1)return;const q=p[I];q!==void 0&&q.dispatchEvent({type:L.type,data:L.inputSource})}function D(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",$);for(let L=0;L<p.length;L++){const I=_[L];I!==null&&(_[L]=null,p[L].disconnect(I))}A=null,y=null,e.setRenderTarget(m),f=null,d=null,c=null,r=null,h=null,R.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",D),r.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const I={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,I),r.updateRenderState({baseLayer:f}),h=new ur(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:ar,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let I=null,q=null,j=null;x.depth&&(j=x.stencil?35056:33190,I=x.stencil?cs:er,q=x.stencil?Qr:Yi);const K={colorFormat:32856,depthFormat:j,scaleFactor:s};c=new XRWebGLBinding(r,t),d=c.createProjectionLayer(K),r.updateRenderState({layers:[d]}),h=new ur(d.textureWidth,d.textureHeight,{format:Mn,type:ar,depthTexture:new KM(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const oe=e.properties.get(h);oe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),R.setContext(r),R.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function $(L){for(let I=0;I<L.removed.length;I++){const q=L.removed[I],j=_.indexOf(q);j>=0&&(_[j]=null,p[j].dispatchEvent({type:"disconnected",data:q}))}for(let I=0;I<L.added.length;I++){const q=L.added[I];let j=_.indexOf(q);if(j===-1){for(let oe=0;oe<p.length;oe++)if(oe>=_.length){_.push(q),j=oe;break}else if(_[oe]===null){_[oe]=q,j=oe;break}if(j===-1)break}const K=p[j];K&&K.dispatchEvent({type:"connected",data:q})}}const ie=new z,U=new z;function F(L,I,q){ie.setFromMatrixPosition(I.matrixWorld),U.setFromMatrixPosition(q.matrixWorld);const j=ie.distanceTo(U),K=I.projectionMatrix.elements,oe=q.projectionMatrix.elements,ve=K[14]/(K[10]-1),G=K[14]/(K[10]+1),Le=(K[9]+1)/K[5],xe=(K[9]-1)/K[5],Me=(K[8]-1)/K[0],ue=(oe[8]+1)/oe[0],Be=ve*Me,Ce=ve*ue,ge=j/(-Me+ue),gt=ge*-Me;I.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(gt),L.translateZ(ge),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const Nt=ve+ge,bt=G+ge,bn=Be-gt,_t=Ce+(j-gt),Oe=Le*G/bt*Nt,kn=xe*G/bt*Nt;L.projectionMatrix.makePerspective(bn,_t,Oe,kn,Nt,bt)}function X(L,I){I===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(I.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;T.near=S.near=v.near=L.near,T.far=S.far=v.far=L.far,(A!==T.near||y!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),A=T.near,y=T.far);const I=L.parent,q=T.cameras;X(T,I);for(let K=0;K<q.length;K++)X(q[K],I);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),L.matrix.copy(T.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);const j=L.children;for(let K=0,oe=j.length;K<oe;K++)j[K].updateMatrixWorld(!0);q.length===2?F(T,v,S):T.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(L){d!==null&&(d.fixedFoveation=L),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=L)};let Z=null;function Q(L,I){if(u=I.getViewerPose(l||o),g=I,u!==null){const q=u.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let j=!1;q.length!==T.cameras.length&&(T.cameras.length=0,j=!0);for(let K=0;K<q.length;K++){const oe=q[K];let ve=null;if(f!==null)ve=f.getViewport(oe);else{const Le=c.getViewSubImage(d,oe);ve=Le.viewport,K===0&&(e.setRenderTargetTextures(h,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(h))}let G=M[K];G===void 0&&(G=new on,G.layers.enable(K),G.viewport=new ht,M[K]=G),G.matrix.fromArray(oe.transform.matrix),G.projectionMatrix.fromArray(oe.projectionMatrix),G.viewport.set(ve.x,ve.y,ve.width,ve.height),K===0&&T.matrix.copy(G.matrix),j===!0&&T.cameras.push(G)}}for(let q=0;q<p.length;q++){const j=_[q],K=p[q];j!==null&&K!==void 0&&K.update(j,I,l||o)}Z&&Z(L,I),g=null}const R=new bg;R.setAnimationLoop(Q),this.setAnimationLoop=function(L){Z=L},this.dispose=function(){}}}function JM(n,e){function t(m,h){m.fogColor.value.copy(h.color),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,p,_,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),c(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&f(m,h,v)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?a(m,h,p,_):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.bumpMap&&(m.bumpMap.value=h.bumpMap,m.bumpScale.value=h.bumpScale,h.side===cn&&(m.bumpScale.value*=-1)),h.displacementMap&&(m.displacementMap.value=h.displacementMap,m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap),h.normalMap&&(m.normalMap.value=h.normalMap,m.normalScale.value.copy(h.normalScale),h.side===cn&&m.normalScale.value.negate()),h.specularMap&&(m.specularMap.value=h.specularMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const p=e.get(h).envMap;if(p&&(m.envMap.value=p,m.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity);let _;h.map?_=h.map:h.specularMap?_=h.specularMap:h.displacementMap?_=h.displacementMap:h.normalMap?_=h.normalMap:h.bumpMap?_=h.bumpMap:h.roughnessMap?_=h.roughnessMap:h.metalnessMap?_=h.metalnessMap:h.alphaMap?_=h.alphaMap:h.emissiveMap?_=h.emissiveMap:h.clearcoatMap?_=h.clearcoatMap:h.clearcoatNormalMap?_=h.clearcoatNormalMap:h.clearcoatRoughnessMap?_=h.clearcoatRoughnessMap:h.iridescenceMap?_=h.iridescenceMap:h.iridescenceThicknessMap?_=h.iridescenceThicknessMap:h.specularIntensityMap?_=h.specularIntensityMap:h.specularColorMap?_=h.specularColorMap:h.transmissionMap?_=h.transmissionMap:h.thicknessMap?_=h.thicknessMap:h.sheenColorMap?_=h.sheenColorMap:h.sheenRoughnessMap&&(_=h.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let v;h.aoMap?v=h.aoMap:h.lightMap&&(v=h.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uv2Transform.value.copy(v.matrix))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function a(m,h,p,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*p,m.scale.value=_*.5,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let v;h.map?v=h.map:h.alphaMap&&(v=h.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let p;h.map?p=h.map:h.alphaMap&&(p=h.alphaMap),p!==void 0&&(p.matrixAutoUpdate===!0&&p.updateMatrix(),m.uvTransform.value.copy(p.matrix))}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function c(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.roughness.value=h.roughness,m.metalness.value=h.metalness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function f(m,h,p){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),m.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===cn&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=p.texture,m.transmissionSamplerSize.value.set(p.width,p.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap)}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){m.referencePosition.value.copy(h.referencePosition),m.nearDistance.value=h.nearDistance,m.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function ew(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function u(_,v){let S=r[_.id];S===void 0&&(x(_),S=c(_),r[_.id]=S,_.addEventListener("dispose",h));const M=v.program;i.updateUBOMapping(_,M);const T=e.render.frame;s[_.id]!==T&&(f(_),s[_.id]=T)}function c(_){const v=d();_.__bindingPointIndex=v;const S=n.createBuffer(),M=_.__size,T=_.usage;return n.bindBuffer(35345,S),n.bufferData(35345,M,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],S=_.uniforms,M=_.__cache;n.bindBuffer(35345,v);for(let T=0,A=S.length;T<A;T++){const y=S[T];if(g(y,T,M)===!0){const b=y.value,D=y.__offset;typeof b=="number"?(y.__data[0]=b,n.bufferSubData(35345,D,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):b.toArray(y.__data),n.bufferSubData(35345,D,y.__data))}}n.bindBuffer(35345,null)}function g(_,v,S){const M=_.value;if(S[v]===void 0)return typeof M=="number"?S[v]=M:S[v]=M.clone(),!0;if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{const T=S[v];if(T.equals(M)===!1)return T.copy(M),!0}return!1}function x(_){const v=_.uniforms;let S=0;const M=16;let T=0;for(let A=0,y=v.length;A<y;A++){const b=v[A],D=m(b);if(b.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,A>0){T=S%M;const $=M-T;T!==0&&$-D.boundary<0&&(S+=M-T,b.__offset=S)}S+=D.storage}return T=S%M,T>0&&(S+=M-T),_.__size=S,_.__cache={},this}function m(_){const v=_.value,S={boundary:0,storage:0};return typeof v=="number"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function h(_){const v=_.target;v.removeEventListener("dispose",h);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}function tw(){const n=qa("canvas");return n.style.display="block",n}function Ig(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:tw(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=lr,this.physicallyCorrectLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let h=!1,p=0,_=0,v=null,S=-1,M=null;const T=new ht,A=new ht;let y=null,b=e.width,D=e.height,$=1,ie=null,U=null;const F=new ht(0,0,b,D),X=new ht(0,0,b,D);let Z=!1;const Q=new Mf;let R=!1,L=!1,I=null;const q=new it,j=new Ue,K=new z,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return v===null?$:1}let G=t;function Le(E,k){for(let O=0;O<E.length;O++){const N=E[O],W=e.getContext(N,k);if(W!==null)return W}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yf}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Re,!1),G===null){const k=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&k.shift(),G=Le(k,E),G===null)throw Le(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,Me,ue,Be,Ce,ge,gt,Nt,bt,bn,_t,Oe,kn,Un,C,w,B,ee,te,re,ye,se,H,pe;function _e(){xe=new d1(G),Me=new o1(G,xe,n),xe.init(Me),se=new $M(G,xe,Me),ue=new jM(G,xe,Me),Be=new m1,Ce=new RM,ge=new qM(G,xe,ue,Ce,Me,se,Be),gt=new l1(m),Nt=new f1(m),bt=new Ex(G,Me),H=new r1(G,xe,bt,Me),bn=new h1(G,bt,Be,H),_t=new x1(G,bn,bt,Be),te=new v1(G,Me,ge),w=new a1(Ce),Oe=new DM(m,gt,Nt,xe,Me,H,w),kn=new JM(m,Ce),Un=new NM,C=new BM(xe,Me),ee=new i1(m,gt,Nt,ue,_t,c,o),B=new XM(m,_t,Me),pe=new ew(G,Be,Me,ue),re=new s1(G,xe,Be,Me),ye=new p1(G,xe,Be,Me),Be.programs=Oe.programs,m.capabilities=Me,m.extensions=xe,m.properties=Ce,m.renderLists=Un,m.shadowMap=B,m.state=ue,m.info=Be}_e();const ce=new QM(m,G);this.xr=ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(b,D,!1))},this.getSize=function(E){return E.set(b,D)},this.setSize=function(E,k,O){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=E,D=k,e.width=Math.floor(E*$),e.height=Math.floor(k*$),O!==!1&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(b*$,D*$).floor()},this.setDrawingBufferSize=function(E,k,O){b=E,D=k,$=O,e.width=Math.floor(E*O),e.height=Math.floor(k*O),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,k,O,N){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,k,O,N),ue.viewport(T.copy(F).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,k,O,N){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,k,O,N),ue.scissor(A.copy(X).multiplyScalar($).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){ue.setScissorTest(Z=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,k=!0,O=!0){let N=0;E&&(N|=16384),k&&(N|=256),O&&(N|=1024),G.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),Un.dispose(),C.dispose(),Ce.dispose(),gt.dispose(),Nt.dispose(),_t.dispose(),H.dispose(),pe.dispose(),Oe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ae),ce.removeEventListener("sessionend",fe),I&&(I.dispose(),I=null),Ie.stop()};function me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=Be.autoReset,k=B.enabled,O=B.autoUpdate,N=B.needsUpdate,W=B.type;_e(),Be.autoReset=E,B.enabled=k,B.autoUpdate=O,B.needsUpdate=N,B.type=W}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function He(E){const k=E.target;k.removeEventListener("dispose",He),ut(k)}function ut(E){P(E),Ce.remove(E)}function P(E){const k=Ce.get(E).programs;k!==void 0&&(k.forEach(function(O){Oe.releaseProgram(O)}),E.isShaderMaterial&&Oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,O,N,W,he){k===null&&(k=oe);const Se=W.isMesh&&W.matrixWorld.determinant()<0,Te=Ug(E,k,O,N,W);ue.setMaterial(N,Se);let we=O.index;const Ne=O.attributes.position;if(we===null){if(Ne===void 0||Ne.count===0)return}else if(we.count===0)return;let be=1;N.wireframe===!0&&(we=bn.getWireframeAttribute(O),be=2),H.setup(W,N,Te,O,we);let Pe,Ze=re;we!==null&&(Pe=bt.get(we),Ze=ye,Ze.setIndex(Pe));const Fi=we!==null?we.count:Ne.count,hr=O.drawRange.start*be,pr=O.drawRange.count*be,An=he!==null?he.start*be:0,ze=he!==null?he.count*be:1/0,mr=Math.max(hr,An),et=Math.min(Fi,hr+pr,An+ze)-1,en=Math.max(0,et-mr+1);if(en!==0){if(W.isMesh)N.wireframe===!0?(ue.setLineWidth(N.wireframeLinewidth*ve()),Ze.setMode(1)):Ze.setMode(4);else if(W.isLine){let si=N.linewidth;si===void 0&&(si=1),ue.setLineWidth(si*ve()),W.isLineSegments?Ze.setMode(1):W.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else W.isPoints?Ze.setMode(0):W.isSprite&&Ze.setMode(4);if(W.isInstancedMesh)Ze.renderInstances(mr,en,W.count);else if(O.isInstancedBufferGeometry){const si=Math.min(O.instanceCount,O._maxInstanceCount);Ze.renderInstances(mr,en,si)}else Ze.render(mr,en)}},this.compile=function(E,k){function O(N,W,he){N.transparent===!0&&N.side===yi?(N.side=cn,N.needsUpdate=!0,Jt(N,W,he),N.side=as,N.needsUpdate=!0,Jt(N,W,he),N.side=yi):Jt(N,W,he)}f=C.get(E),f.init(),x.push(f),E.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(m.physicallyCorrectLights),E.traverse(function(N){const W=N.material;if(W)if(Array.isArray(W))for(let he=0;he<W.length;he++){const Se=W[he];O(Se,E,N)}else O(W,E,N)}),x.pop(),f=null};let V=null;function J(E){V&&V(E)}function ae(){Ie.stop()}function fe(){Ie.start()}const Ie=new bg;Ie.setAnimationLoop(J),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(E){V=E,ce.setAnimationLoop(E),E===null?Ie.stop():Ie.start()},ce.addEventListener("sessionstart",ae),ce.addEventListener("sessionend",fe),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,k,v),f=C.get(E,x.length),f.init(),x.push(f),q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Q.setFromProjectionMatrix(q),L=this.localClippingEnabled,R=w.init(this.clippingPlanes,L,k),d=Un.get(E,g.length),d.init(),g.push(d),ct(E,k,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(ie,U),R===!0&&w.beginShadows();const O=f.state.shadowsArray;if(B.render(O,E,k),R===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,E),f.setupLights(m.physicallyCorrectLights),k.isArrayCamera){const N=k.cameras;for(let W=0,he=N.length;W<he;W++){const Se=N[W];St(d,E,Se,Se.viewport)}}else St(d,E,k);v!==null&&(ge.updateMultisampleRenderTarget(v),ge.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(m,E,k),H.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function ct(E,k,O,N){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){N&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const Se=_t.update(E),Te=E.material;Te.visible&&d.push(E,Se,Te,O,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Be.render.frame&&(E.skeleton.update(),E.skeleton.frame=Be.render.frame),!E.frustumCulled||Q.intersectsObject(E))){N&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const Se=_t.update(E),Te=E.material;if(Array.isArray(Te)){const we=Se.groups;for(let Ne=0,be=we.length;Ne<be;Ne++){const Pe=we[Ne],Ze=Te[Pe.materialIndex];Ze&&Ze.visible&&d.push(E,Se,Ze,O,K.z,Pe)}}else Te.visible&&d.push(E,Se,Te,O,K.z,null)}}const he=E.children;for(let Se=0,Te=he.length;Se<Te;Se++)ct(he[Se],k,O,N)}function St(E,k,O,N){const W=E.opaque,he=E.transmissive,Se=E.transparent;f.setupLightsView(O),he.length>0&&zi(W,k,O),N&&ue.viewport(T.copy(N)),W.length>0&&Xe(W,k,O),he.length>0&&Xe(he,k,O),Se.length>0&&Xe(Se,k,O),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function zi(E,k,O){const N=Me.isWebGL2;I===null&&(I=new ur(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?co:ar,minFilter:fl,samples:N&&s===!0?4:0})),m.getDrawingBufferSize(j),N?I.setSize(j.x,j.y):I.setSize(wc(j.x),wc(j.y));const W=m.getRenderTarget();m.setRenderTarget(I),m.clear();const he=m.toneMapping;m.toneMapping=Jn,Xe(E,k,O),m.toneMapping=he,ge.updateMultisampleRenderTarget(I),ge.updateRenderTargetMipmap(I),m.setRenderTarget(W)}function Xe(E,k,O){const N=k.isScene===!0?k.overrideMaterial:null;for(let W=0,he=E.length;W<he;W++){const Se=E[W],Te=Se.object,we=Se.geometry,Ne=N===null?Se.material:N,be=Se.group;Te.layers.test(O.layers)&&On(Te,k,O,we,Ne,be)}}function On(E,k,O,N,W,he){E.onBeforeRender(m,k,O,N,W,he),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(m,k,O,N,E,he),W.transparent===!0&&W.side===yi?(W.side=cn,W.needsUpdate=!0,m.renderBufferDirect(O,k,N,W,E,he),W.side=as,W.needsUpdate=!0,m.renderBufferDirect(O,k,N,W,E,he),W.side=yi):m.renderBufferDirect(O,k,N,W,E,he),E.onAfterRender(m,k,O,N,W,he)}function Jt(E,k,O){k.isScene!==!0&&(k=oe);const N=Ce.get(E),W=f.state.lights,he=f.state.shadowsArray,Se=W.state.version,Te=Oe.getParameters(E,W.state,he,k,O),we=Oe.getProgramCacheKey(Te);let Ne=N.programs;N.environment=E.isMeshStandardMaterial?k.environment:null,N.fog=k.fog,N.envMap=(E.isMeshStandardMaterial?Nt:gt).get(E.envMap||N.environment),Ne===void 0&&(E.addEventListener("dispose",He),Ne=new Map,N.programs=Ne);let be=Ne.get(we);if(be!==void 0){if(N.currentProgram===be&&N.lightsStateVersion===Se)return Cf(E,Te),be}else Te.uniforms=Oe.getUniforms(E),E.onBuild(O,Te,m),E.onBeforeCompile(Te,m),be=Oe.acquireProgram(Te,we),Ne.set(we,be),N.uniforms=Te.uniforms;const Pe=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=w.uniform),Cf(E,Te),N.needsLights=Bg(E),N.lightsStateVersion=Se,N.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMap.value=W.state.directionalShadowMap,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotShadowMap.value=W.state.spotShadowMap,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMap.value=W.state.pointShadowMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix);const Ze=be.getUniforms(),Fi=Sa.seqWithValue(Ze.seq,Pe);return N.currentProgram=be,N.uniformsList=Fi,be}function Cf(E,k){const O=Ce.get(E);O.outputEncoding=k.outputEncoding,O.instancing=k.instancing,O.skinning=k.skinning,O.morphTargets=k.morphTargets,O.morphNormals=k.morphNormals,O.morphColors=k.morphColors,O.morphTargetsCount=k.morphTargetsCount,O.numClippingPlanes=k.numClippingPlanes,O.numIntersection=k.numClipIntersection,O.vertexAlphas=k.vertexAlphas,O.vertexTangents=k.vertexTangents,O.toneMapping=k.toneMapping}function Ug(E,k,O,N,W){k.isScene!==!0&&(k=oe),ge.resetTextureUnits();const he=k.fog,Se=N.isMeshStandardMaterial?k.environment:null,Te=v===null?m.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:lr,we=(N.isMeshStandardMaterial?Nt:gt).get(N.envMap||Se),Ne=N.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,be=!!N.normalMap&&!!O.attributes.tangent,Pe=!!O.morphAttributes.position,Ze=!!O.morphAttributes.normal,Fi=!!O.morphAttributes.color,hr=N.toneMapped?m.toneMapping:Jn,pr=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,An=pr!==void 0?pr.length:0,ze=Ce.get(N),mr=f.state.lights;if(R===!0&&(L===!0||E!==M)){const Gt=E===M&&N.id===S;w.setState(N,E,Gt)}let et=!1;N.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==mr.state.version||ze.outputEncoding!==Te||W.isInstancedMesh&&ze.instancing===!1||!W.isInstancedMesh&&ze.instancing===!0||W.isSkinnedMesh&&ze.skinning===!1||!W.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==we||N.fog===!0&&ze.fog!==he||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==w.numPlanes||ze.numIntersection!==w.numIntersection)||ze.vertexAlphas!==Ne||ze.vertexTangents!==be||ze.morphTargets!==Pe||ze.morphNormals!==Ze||ze.morphColors!==Fi||ze.toneMapping!==hr||Me.isWebGL2===!0&&ze.morphTargetsCount!==An)&&(et=!0):(et=!0,ze.__version=N.version);let en=ze.currentProgram;et===!0&&(en=Jt(N,k,W));let si=!1,_s=!1,ml=!1;const At=en.getUniforms(),ki=ze.uniforms;if(ue.useProgram(en.program)&&(si=!0,_s=!0,ml=!0),N.id!==S&&(S=N.id,_s=!0),si||M!==E){if(At.setValue(G,"projectionMatrix",E.projectionMatrix),Me.logarithmicDepthBuffer&&At.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,_s=!0,ml=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Gt=At.map.cameraPosition;Gt!==void 0&&Gt.setValue(G,K.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&At.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||W.isSkinnedMesh)&&At.setValue(G,"viewMatrix",E.matrixWorldInverse)}if(W.isSkinnedMesh){At.setOptional(G,W,"bindMatrix"),At.setOptional(G,W,"bindMatrixInverse");const Gt=W.skeleton;Gt&&(Me.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),At.setValue(G,"boneTexture",Gt.boneTexture,ge),At.setValue(G,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gl=O.morphAttributes;if((gl.position!==void 0||gl.normal!==void 0||gl.color!==void 0&&Me.isWebGL2===!0)&&te.update(W,O,N,en),(_s||ze.receiveShadow!==W.receiveShadow)&&(ze.receiveShadow=W.receiveShadow,At.setValue(G,"receiveShadow",W.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(ki.envMap.value=we,ki.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),_s&&(At.setValue(G,"toneMappingExposure",m.toneMappingExposure),ze.needsLights&&Og(ki,ml),he&&N.fog===!0&&kn.refreshFogUniforms(ki,he),kn.refreshMaterialUniforms(ki,N,$,D,I),Sa.upload(G,ze.uniformsList,ki,ge)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Sa.upload(G,ze.uniformsList,ki,ge),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&At.setValue(G,"center",W.center),At.setValue(G,"modelViewMatrix",W.modelViewMatrix),At.setValue(G,"normalMatrix",W.normalMatrix),At.setValue(G,"modelMatrix",W.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Gt=N.uniformsGroups;for(let _l=0,Vg=Gt.length;_l<Vg;_l++)if(Me.isWebGL2){const bf=Gt[_l];pe.update(bf,en),pe.bind(bf,en)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return en}function Og(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Bg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,k,O){Ce.get(E.texture).__webglTexture=k,Ce.get(E.depthTexture).__webglTexture=O;const N=Ce.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=O===void 0,N.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const O=Ce.get(E);O.__webglFramebuffer=k,O.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,O=0){v=E,p=k,_=O;let N=!0,W=null,he=!1,Se=!1;if(E){const we=Ce.get(E);we.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),N=!1):we.__webglFramebuffer===void 0?ge.setupRenderTarget(E):we.__hasExternalTextures&&ge.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture);const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);const be=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(W=be[k],he=!0):Me.isWebGL2&&E.samples>0&&ge.useMultisampledRTT(E)===!1?W=Ce.get(E).__webglMultisampledFramebuffer:W=be,T.copy(E.viewport),A.copy(E.scissor),y=E.scissorTest}else T.copy(F).multiplyScalar($).floor(),A.copy(X).multiplyScalar($).floor(),y=Z;if(ue.bindFramebuffer(36160,W)&&Me.drawBuffers&&N&&ue.drawBuffers(E,W),ue.viewport(T),ue.scissor(A),ue.setScissorTest(y),he){const we=Ce.get(E.texture);G.framebufferTexture2D(36160,36064,34069+k,we.__webglTexture,O)}else if(Se){const we=Ce.get(E.texture),Ne=k||0;G.framebufferTextureLayer(36160,36064,we.__webglTexture,O||0,Ne)}S=-1},this.readRenderTargetPixels=function(E,k,O,N,W,he,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){ue.bindFramebuffer(36160,Te);try{const we=E.texture,Ne=we.format,be=we.type;if(Ne!==Mn&&se.convert(Ne)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=be===co&&(xe.has("EXT_color_buffer_half_float")||Me.isWebGL2&&xe.has("EXT_color_buffer_float"));if(be!==ar&&se.convert(be)!==G.getParameter(35738)&&!(be===Zi&&(Me.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-N&&O>=0&&O<=E.height-W&&G.readPixels(k,O,N,W,se.convert(Ne),se.convert(be),he)}finally{const we=v!==null?Ce.get(v).__webglFramebuffer:null;ue.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(E,k,O=0){const N=Math.pow(2,-O),W=Math.floor(k.image.width*N),he=Math.floor(k.image.height*N);ge.setTexture2D(k,0),G.copyTexSubImage2D(3553,O,0,0,E.x,E.y,W,he),ue.unbindTexture()},this.copyTextureToTexture=function(E,k,O,N=0){const W=k.image.width,he=k.image.height,Se=se.convert(O.format),Te=se.convert(O.type);ge.setTexture2D(O,0),G.pixelStorei(37440,O.flipY),G.pixelStorei(37441,O.premultiplyAlpha),G.pixelStorei(3317,O.unpackAlignment),k.isDataTexture?G.texSubImage2D(3553,N,E.x,E.y,W,he,Se,Te,k.image.data):k.isCompressedTexture?G.compressedTexSubImage2D(3553,N,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Se,k.mipmaps[0].data):G.texSubImage2D(3553,N,E.x,E.y,Se,Te,k.image),N===0&&O.generateMipmaps&&G.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(E,k,O,N,W=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=E.max.x-E.min.x+1,Se=E.max.y-E.min.y+1,Te=E.max.z-E.min.z+1,we=se.convert(N.format),Ne=se.convert(N.type);let be;if(N.isData3DTexture)ge.setTexture3D(N,0),be=32879;else if(N.isDataArrayTexture)ge.setTexture2DArray(N,0),be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,N.flipY),G.pixelStorei(37441,N.premultiplyAlpha),G.pixelStorei(3317,N.unpackAlignment);const Pe=G.getParameter(3314),Ze=G.getParameter(32878),Fi=G.getParameter(3316),hr=G.getParameter(3315),pr=G.getParameter(32877),An=O.isCompressedTexture?O.mipmaps[0]:O.image;G.pixelStorei(3314,An.width),G.pixelStorei(32878,An.height),G.pixelStorei(3316,E.min.x),G.pixelStorei(3315,E.min.y),G.pixelStorei(32877,E.min.z),O.isDataTexture||O.isData3DTexture?G.texSubImage3D(be,W,k.x,k.y,k.z,he,Se,Te,we,Ne,An.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(be,W,k.x,k.y,k.z,he,Se,Te,we,An.data)):G.texSubImage3D(be,W,k.x,k.y,k.z,he,Se,Te,we,Ne,An),G.pixelStorei(3314,Pe),G.pixelStorei(32878,Ze),G.pixelStorei(3316,Fi),G.pixelStorei(3315,hr),G.pixelStorei(32877,pr),W===0&&N.generateMipmaps&&G.generateMipmap(be),ue.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ge.setTextureCube(E,0):E.isData3DTexture?ge.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ge.setTexture2DArray(E,0):ge.setTexture2D(E,0),ue.unbindTexture()},this.resetState=function(){p=0,_=0,v=null,ue.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class nw extends Ig{}nw.prototype.isWebGL1Renderer=!0;class iw extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ng extends So{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $h=new z,Yh=new z,Zh=new it,Mu=new Sg,aa=new dl;class rw extends mt{constructor(e=new Fn,t=new Ng){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)$h.fromBufferAttribute(t,r-1),Yh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=$h.distanceTo(Yh);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(r),aa.radius+=s,e.ray.intersectsSphere(aa)===!1)return;Zh.copy(r).invert(),Mu.copy(e.ray).applyMatrix4(Zh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new z,c=new z,d=new z,f=new z,g=this.isLineSegments?2:1,x=i.index,h=i.attributes.position;if(x!==null){const p=Math.max(0,o.start),_=Math.min(x.count,o.start+o.count);for(let v=p,S=_-1;v<S;v+=g){const M=x.getX(v),T=x.getX(v+1);if(u.fromBufferAttribute(h,M),c.fromBufferAttribute(h,T),Mu.distanceSqToSegment(u,c,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(f);y<e.near||y>e.far||t.push({distance:y,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,S=_-1;v<S;v+=g){if(u.fromBufferAttribute(h,v),c.fromBufferAttribute(h,v+1),Mu.distanceSqToSegment(u,c,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Kh=new z,Qh=new z;class sw extends rw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Kh.fromBufferAttribute(t,r),Qh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Kh.distanceTo(Qh);e.setAttribute("lineDistance",new Vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tf extends Fn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new z,f=new z,g=[],x=[],m=[],h=[];for(let p=0;p<=i;p++){const _=[],v=p/i;let S=0;p==0&&o==0?S=.5/t:p==i&&l==Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const T=M/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),m.push(f.x,f.y,f.z),h.push(T+S,1-v),_.push(u++)}c.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){const v=c[p][_+1],S=c[p][_],M=c[p+1][_],T=c[p+1][_+1];(p!==0||o>0)&&g.push(v,S,T),(p!==i-1||l<Math.PI)&&g.push(S,M,T)}this.setIndex(g),this.setAttribute("position",new Vt(x,3)),this.setAttribute("normal",new Vt(m,3)),this.setAttribute("uv",new Vt(h,2))}static fromJSON(e){return new Tf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zg extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class ow extends zg{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wu=new it,Jh=new z,ep=new z;class aw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mf,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jh),ep.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ep),t.updateMatrixWorld(),wu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lw extends aw{constructor(){super(new Ag(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uw extends zg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DefaultUp),this.updateMatrix(),this.target=new mt,this.shadow=new lw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cw extends sw{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Fn;r.setAttribute("position",new Vt(t,3)),r.setAttribute("color",new Vt(i,3));const s=new Ng({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new ke,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yf);function fw(){const n=new iw;n.background=new ke(0);const e=new ow(16777215,16777215,.1);e.color.setHSL(.6,.6,.6),e.groundColor.setHSL(.1,1,.4),e.position.set(0,50,0),n.add(e);const t=new uw(16777215,.7);t.color.setHSL(.1,1,.95),t.position.set(-10,100,50),t.position.multiplyScalar(100),n.add(t),t.castShadow=!0,t.shadow.mapSize.width=4096,t.shadow.mapSize.height=4096;let i=200;t.shadow.camera.left=-i,t.shadow.camera.right=i,t.shadow.camera.top=i,t.shadow.camera.bottom=-i,t.shadow.camera.far=15e3;const r=new on(45,window.innerWidth/window.innerHeight,1,5e3);r.position.set(30,30,170);const s=new Ig({antialias:!0});s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight);const o=new cw(200);return n.add(o),[n,r,s]}function dw(){const n=new Tf(1,64,64),e=new Sf({color:11206655,wireframe:!0,wireframeLinewidth:1});return new Kn(n,e)}var Fg={exports:{}},pl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hw=Jr.exports,pw=Symbol.for("react.element"),mw=Symbol.for("react.fragment"),gw=Object.prototype.hasOwnProperty,_w=hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vw={key:!0,ref:!0,__self:!0,__source:!0};function kg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)gw.call(e,i)&&!vw.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:pw,type:n,key:s,ref:o,props:r,_owner:_w.current}}pl.Fragment=mw;pl.jsx=kg;pl.jsxs=kg;(function(n){n.exports=pl})(Fg);const $a=Fg.exports.jsx;let Ma,Xs,js;function xw(){Xs.aspect=window.innerWidth/window.innerHeight,Xs.updateProjectionMatrix(),js.setSize(window.innerWidth,window.innerHeight),js.render(Ma,Xs)}function yw(){var e;[Ma,Xs,js]=fw(),(e=document.getElementById("canvas"))==null||e.appendChild(js.domElement);const n=dw();Ma.add(n),window.addEventListener("resize",xw,!1),js.render(Ma,Xs)}const Sw=n=>{const e=Jr.exports.useRef(!1);Jr.exports.useEffect(()=>{e.current||(e.current=!0,n())},[])};function Mw(){return Sw(yw),$a("div",{id:"canvas"})}function ww(){return $a(Mw,{})}Eu.createRoot(document.getElementById("root")).render($a(r0.StrictMode,{children:$a(ww,{})}));
