(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Am(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var cc={exports:{}},wo={},fc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function O_(){if(pp)return dt;pp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function y(U,ne,Ue){this.props=U,this.context=ne,this.refs=R,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=y.prototype;function I(U,ne,Ue){this.props=U,this.context=ne,this.refs=R,this.updater=Ue||S}var L=I.prototype=new g;L.constructor=I,w(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,G=Object.prototype.hasOwnProperty,z={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function Y(U,ne,Ue){var Q,he={},Ee=null,ve=null;if(ne!=null)for(Q in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Ee=""+ne.key),ne)G.call(ne,Q)&&!N.hasOwnProperty(Q)&&(he[Q]=ne[Q]);var Te=arguments.length-2;if(Te===1)he.children=Ue;else if(1<Te){for(var Xe=Array(Te),Ve=0;Ve<Te;Ve++)Xe[Ve]=arguments[Ve+2];he.children=Xe}if(U&&U.defaultProps)for(Q in Te=U.defaultProps,Te)he[Q]===void 0&&(he[Q]=Te[Q]);return{$$typeof:s,type:U,key:Ee,ref:ve,props:he,_owner:z.current}}function P(U,ne){return{$$typeof:s,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function B(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ue){return ne[Ue]})}var oe=/\/+/g;function te(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):ne.toString(36)}function ce(U,ne,Ue,Q,he){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(Ee){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case s:case e:ve=!0}}if(ve)return ve=U,he=he(ve),U=Q===""?"."+te(ve,0):Q,C(he)?(Ue="",U!=null&&(Ue=U.replace(oe,"$&/")+"/"),ce(he,ne,Ue,"",function(Ve){return Ve})):he!=null&&(A(he)&&(he=P(he,Ue+(!he.key||ve&&ve.key===he.key?"":(""+he.key).replace(oe,"$&/")+"/")+U)),ne.push(he)),1;if(ve=0,Q=Q===""?".":Q+":",C(U))for(var Te=0;Te<U.length;Te++){Ee=U[Te];var Xe=Q+te(Ee,Te);ve+=ce(Ee,ne,Ue,Xe,he)}else if(Xe=x(U),typeof Xe=="function")for(U=Xe.call(U),Te=0;!(Ee=U.next()).done;)Ee=Ee.value,Xe=Q+te(Ee,Te++),ve+=ce(Ee,ne,Ue,Xe,he);else if(Ee==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function pe(U,ne,Ue){if(U==null)return U;var Q=[],he=0;return ce(U,Q,"","",function(Ee){return ne.call(Ue,Ee,he++)}),Q}function se(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ue)},function(Ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ue)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var le={current:null},k={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:k,ReactCurrentOwner:z};function re(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:pe,forEach:function(U,ne,Ue){pe(U,function(){ne.apply(this,arguments)},Ue)},count:function(U){var ne=0;return pe(U,function(){ne++}),ne},toArray:function(U){return pe(U,function(ne){return ne})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},dt.Component=y,dt.Fragment=n,dt.Profiler=a,dt.PureComponent=I,dt.StrictMode=r,dt.Suspense=p,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,dt.act=re,dt.cloneElement=function(U,ne,Ue){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=w({},U.props),he=U.key,Ee=U.ref,ve=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Ee=ne.ref,ve=z.current),ne.key!==void 0&&(he=""+ne.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Xe in ne)G.call(ne,Xe)&&!N.hasOwnProperty(Xe)&&(Q[Xe]=ne[Xe]===void 0&&Te!==void 0?Te[Xe]:ne[Xe])}var Xe=arguments.length-2;if(Xe===1)Q.children=Ue;else if(1<Xe){Te=Array(Xe);for(var Ve=0;Ve<Xe;Ve++)Te[Ve]=arguments[Ve+2];Q.children=Te}return{$$typeof:s,type:U.type,key:he,ref:Ee,props:Q,_owner:ve}},dt.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},dt.createElement=Y,dt.createFactory=function(U){var ne=Y.bind(null,U);return ne.type=U,ne},dt.createRef=function(){return{current:null}},dt.forwardRef=function(U){return{$$typeof:d,render:U}},dt.isValidElement=A,dt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:se}},dt.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},dt.startTransition=function(U){var ne=k.transition;k.transition={};try{U()}finally{k.transition=ne}},dt.unstable_act=re,dt.useCallback=function(U,ne){return le.current.useCallback(U,ne)},dt.useContext=function(U){return le.current.useContext(U)},dt.useDebugValue=function(){},dt.useDeferredValue=function(U){return le.current.useDeferredValue(U)},dt.useEffect=function(U,ne){return le.current.useEffect(U,ne)},dt.useId=function(){return le.current.useId()},dt.useImperativeHandle=function(U,ne,Ue){return le.current.useImperativeHandle(U,ne,Ue)},dt.useInsertionEffect=function(U,ne){return le.current.useInsertionEffect(U,ne)},dt.useLayoutEffect=function(U,ne){return le.current.useLayoutEffect(U,ne)},dt.useMemo=function(U,ne){return le.current.useMemo(U,ne)},dt.useReducer=function(U,ne,Ue){return le.current.useReducer(U,ne,Ue)},dt.useRef=function(U){return le.current.useRef(U)},dt.useState=function(U){return le.current.useState(U)},dt.useSyncExternalStore=function(U,ne,Ue){return le.current.useSyncExternalStore(U,ne,Ue)},dt.useTransition=function(){return le.current.useTransition()},dt.version="18.3.1",dt}var mp;function If(){return mp||(mp=1,fc.exports=O_()),fc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function k_(){if(gp)return wo;gp=1;var s=If(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(_ in p)r.call(p,_)&&!u.hasOwnProperty(_)&&(v[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:d,key:x,ref:S,props:v,_owner:a.current}}return wo.Fragment=n,wo.jsx=f,wo.jsxs=f,wo}var _p;function z_(){return _p||(_p=1,cc.exports=k_()),cc.exports}var Lo=z_(),Xc=If();const B_=Am(Xc);var $a={},dc={exports:{}},bn={},hc={exports:{}},pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function H_(){return vp||(vp=1,function(s){function e(k,ae){var re=k.length;k.push(ae);e:for(;0<re;){var U=re-1>>>1,ne=k[U];if(0<a(ne,ae))k[U]=ae,k[re]=ne,re=U;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var ae=k[0],re=k.pop();if(re!==ae){k[0]=re;e:for(var U=0,ne=k.length,Ue=ne>>>1;U<Ue;){var Q=2*(U+1)-1,he=k[Q],Ee=Q+1,ve=k[Ee];if(0>a(he,re))Ee<ne&&0>a(ve,he)?(k[U]=ve,k[Ee]=re,U=Ee):(k[U]=he,k[Q]=re,U=Q);else if(Ee<ne&&0>a(ve,re))k[U]=ve,k[Ee]=re,U=Ee;else break e}}return ae}function a(k,ae){var re=k.sortIndex-ae.sortIndex;return re!==0?re:k.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,v=null,x=3,S=!1,w=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var ae=n(m);ae!==null;){if(ae.callback===null)r(m);else if(ae.startTime<=k)r(m),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=n(m)}}function C(k){if(R=!1,L(k),!w)if(n(p)!==null)w=!0,se(G);else{var ae=n(m);ae!==null&&le(C,ae.startTime-k)}}function G(k,ae){w=!1,R&&(R=!1,g(Y),Y=-1),S=!0;var re=x;try{for(L(ae),v=n(p);v!==null&&(!(v.expirationTime>ae)||k&&!B());){var U=v.callback;if(typeof U=="function"){v.callback=null,x=v.priorityLevel;var ne=U(v.expirationTime<=ae);ae=s.unstable_now(),typeof ne=="function"?v.callback=ne:v===n(p)&&r(p),L(ae)}else r(p);v=n(p)}if(v!==null)var Ue=!0;else{var Q=n(m);Q!==null&&le(C,Q.startTime-ae),Ue=!1}return Ue}finally{v=null,x=re,S=!1}}var z=!1,N=null,Y=-1,P=5,A=-1;function B(){return!(s.unstable_now()-A<P)}function oe(){if(N!==null){var k=s.unstable_now();A=k;var ae=!0;try{ae=N(!0,k)}finally{ae?te():(z=!1,N=null)}}else z=!1}var te;if(typeof I=="function")te=function(){I(oe)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,pe=ce.port2;ce.port1.onmessage=oe,te=function(){pe.postMessage(null)}}else te=function(){y(oe,0)};function se(k){N=k,z||(z=!0,te())}function le(k,ae){Y=y(function(){k(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,se(G))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(x){case 1:case 2:case 3:var ae=3;break;default:ae=x}var re=x;x=ae;try{return k()}finally{x=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,ae){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=x;x=k;try{return ae()}finally{x=re}},s.unstable_scheduleCallback=function(k,ae,re){var U=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,k={id:_++,callback:ae,priorityLevel:k,startTime:re,expirationTime:ne,sortIndex:-1},re>U?(k.sortIndex=re,e(m,k),n(p)===null&&k===n(m)&&(R?(g(Y),Y=-1):R=!0,le(C,re-U))):(k.sortIndex=ne,e(p,k),w||S||(w=!0,se(G))),k},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(k){var ae=x;return function(){var re=x;x=ae;try{return k.apply(this,arguments)}finally{x=re}}}}(pc)),pc}var xp;function V_(){return xp||(xp=1,hc.exports=H_()),hc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function G_(){if(yp)return bn;yp=1;var s=If(),e=V_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return p.call(v,t)?!0:p.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,l,c,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);y[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),z=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),k=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,U;function ne(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ue=!1;function Q(t,i){if(!t||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var c=J.stack.split(`
`),h=l.stack.split(`
`),E=c.length-1,D=h.length-1;1<=E&&0<=D&&c[E]!==h[D];)D--;for(;1<=E&&0<=D;E--,D--)if(c[E]!==h[D]){if(E!==1||D!==1)do if(E--,D--,0>D||c[E]!==h[D]){var F=`
`+c[E].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=E&&0<=D);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function he(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case N:return"Fragment";case z:return"Portal";case P:return"Profiler";case Y:return"StrictMode";case te:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pe:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(t){var i=Xe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Pt(t){t._valueTracker||(t._valueTracker=Ve(t))}function bt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Xe(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function O(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function vn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=Te(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ct(t,i){pt(t,i);var o=Te(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(t,i.type,o):i.hasOwnProperty("defaultValue")&&Tt(t,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Tt(t,i,o){(i!=="number"||lt(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Ge=Array.isArray;function b(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+Te(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function M(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Ge(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Te(o)}}function fe(t,i){var o=Te(i.value),l=Te(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function He(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var we,Ke=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=we.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function qe(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(t){Ne.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),xe[i]=xe[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||xe.hasOwnProperty(t)&&xe[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Je(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var Fe=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(t,i){if(i){if(Fe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mt=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,ie=null,de=null;function be(t){if(t=uo(t)){if(typeof Ae!="function")throw Error(n(280));var i=t.stateNode;i&&(i=fa(i),Ae(t.stateNode,t.type,i))}}function Pe(t){ie?de?de.push(t):de=[t]:ie=t}function rt(){if(ie){var t=ie,i=de;if(de=ie=null,be(t),i)for(t=0;t<i.length;t++)be(i[t])}}function Lt(t,i){return t(i)}function jt(){}var vt=!1;function Tn(t,i,o){if(vt)return t(i,o);vt=!0;try{return Lt(t,i,o)}finally{vt=!1,(ie!==null||de!==null)&&(jt(),rt())}}function xn(t,i){var o=t.stateNode;if(o===null)return null;var l=fa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qr=!1;if(d)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{Qr=!1}function vi(t,i,o,l,c,h,E,D,F){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(ge){this.onError(ge)}}var xi=!1,Sr=null,Er=!1,Gi=null,Go={onError:function(t){xi=!0,Sr=t}};function Jr(t,i,o,l,c,h,E,D,F){xi=!1,Sr=null,vi.apply(Go,arguments)}function Wo(t,i,o,l,c,h,E,D,F){if(Jr.apply(this,arguments),xi){if(xi){var J=Sr;xi=!1,Sr=null}else throw Error(n(198));Er||(Er=!0,Gi=J)}}function li(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Xo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Yo(t){if(li(t)!==t)throw Error(n(188))}function Ul(t){var i=t.alternate;if(!i){if(i=li(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Yo(c),t;if(h===l)return Yo(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=h;else{for(var E=!1,D=c.child;D;){if(D===o){E=!0,o=c,l=h;break}if(D===l){E=!0,l=c,o=h;break}D=D.sibling}if(!E){for(D=h.child;D;){if(D===o){E=!0,o=h,l=c;break}if(D===l){E=!0,l=h,o=c;break}D=D.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function jo(t){return t=Ul(t),t!==null?qo(t):null}function qo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=qo(t);if(i!==null)return i;t=t.sibling}return null}var Ko=e.unstable_scheduleCallback,T=e.unstable_cancelCallback,W=e.unstable_shouldYield,ee=e.unstable_requestPaint,q=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,Se=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,Oe=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Qe=null,ze=null;function gt(t){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Qe,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:_t,zt=Math.log,Nt=Math.LN2;function _t(t){return t>>>=0,t===0?32:31-(zt(t)/Nt|0)|0}var je=64,Bt=4194304;function mt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function un(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,E=o&268435455;if(E!==0){var D=E&~c;D!==0?l=mt(D):(h&=E,h!==0&&(l=mt(h)))}else E=o&~c,E!==0?l=mt(E):h!==0&&(l=mt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-st(i),c=1<<o,l|=t[o],i&=~c;return l}function Wi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-st(h),D=1<<E,F=c[E];F===-1?((D&o)===0||(D&l)!==0)&&(c[E]=Wi(D,i)):F<=i&&(t.expiredLanes|=D),h&=~D}}function yi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ct(){var t=je;return je<<=1,(je&4194240)===0&&(je=64),t}function cn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Jt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=o}function on(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-st(o),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~h}}function en(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-st(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var xt=0;function ui(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var jf,Il,qf,Kf,$f,Nl=!1,$o=[],Xi=null,Yi=null,ji=null,js=new Map,qs=new Map,qi=[],sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zf(t,i){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function Ks(t,i,o,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=uo(i),i!==null&&Il(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function og(t,i,o,l,c){switch(i){case"focusin":return Xi=Ks(Xi,t,i,o,l,c),!0;case"dragenter":return Yi=Ks(Yi,t,i,o,l,c),!0;case"mouseover":return ji=Ks(ji,t,i,o,l,c),!0;case"pointerover":var h=c.pointerId;return js.set(h,Ks(js.get(h)||null,t,i,o,l,c)),!0;case"gotpointercapture":return h=c.pointerId,qs.set(h,Ks(qs.get(h)||null,t,i,o,l,c)),!0}return!1}function Qf(t){var i=Mr(t.target);if(i!==null){var o=li(i);if(o!==null){if(i=o.tag,i===13){if(i=Xo(o),i!==null){t.blockedOn=i,$f(t.priority,function(){qf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Ol(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Mt=l,o.target.dispatchEvent(l),Mt=null}else return i=uo(o),i!==null&&Il(i),t.blockedOn=o,!1;i.shift()}return!0}function Jf(t,i,o){Zo(t)&&o.delete(i)}function ag(){Nl=!1,Xi!==null&&Zo(Xi)&&(Xi=null),Yi!==null&&Zo(Yi)&&(Yi=null),ji!==null&&Zo(ji)&&(ji=null),js.forEach(Jf),qs.forEach(Jf)}function $s(t,i){t.blockedOn===i&&(t.blockedOn=null,Nl||(Nl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ag)))}function Zs(t){function i(c){return $s(c,t)}if(0<$o.length){$s($o[0],t);for(var o=1;o<$o.length;o++){var l=$o[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Xi!==null&&$s(Xi,t),Yi!==null&&$s(Yi,t),ji!==null&&$s(ji,t),js.forEach(i),qs.forEach(i),o=0;o<qi.length;o++)l=qi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<qi.length&&(o=qi[0],o.blockedOn===null);)Qf(o),o.blockedOn===null&&qi.shift()}var es=C.ReactCurrentBatchConfig,Qo=!0;function lg(t,i,o,l){var c=xt,h=es.transition;es.transition=null;try{xt=1,Fl(t,i,o,l)}finally{xt=c,es.transition=h}}function ug(t,i,o,l){var c=xt,h=es.transition;es.transition=null;try{xt=4,Fl(t,i,o,l)}finally{xt=c,es.transition=h}}function Fl(t,i,o,l){if(Qo){var c=Ol(t,i,o,l);if(c===null)eu(t,i,l,Jo,o),Zf(t,l);else if(og(c,t,i,o,l))l.stopPropagation();else if(Zf(t,l),i&4&&-1<sg.indexOf(t)){for(;c!==null;){var h=uo(c);if(h!==null&&jf(h),h=Ol(t,i,o,l),h===null&&eu(t,i,l,Jo,o),h===c)break;c=h}c!==null&&l.stopPropagation()}else eu(t,i,l,null,o)}}var Jo=null;function Ol(t,i,o,l){if(Jo=null,t=V(l),t=Mr(t),t!==null)if(i=li(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Xo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Jo=t,null}function ed(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case Se:return 1;case Re:return 4;case De:case Oe:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Ki=null,kl=null,ea=null;function td(){if(ea)return ea;var t,i=kl,o=i.length,l,c="value"in Ki?Ki.value:Ki.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var E=o-t;for(l=1;l<=E&&i[o-l]===c[h-l];l++);return ea=c.slice(t,1<l?1-l:void 0)}function ta(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function nd(){return!1}function In(t){function i(o,l,c,h,E){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?na:nd,this.isPropagationStopped=nd,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=In(ts),Qs=re({},ts,{view:0,detail:0}),cg=In(Qs),Bl,Hl,Js,ia=re({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Bl=t.screenX-Js.screenX,Hl=t.screenY-Js.screenY):Hl=Bl=0,Js=t),Bl)},movementY:function(t){return"movementY"in t?t.movementY:Hl}}),id=In(ia),fg=re({},ia,{dataTransfer:0}),dg=In(fg),hg=re({},Qs,{relatedTarget:0}),Vl=In(hg),pg=re({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),mg=In(pg),gg=re({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_g=In(gg),vg=re({},ts,{data:0}),rd=In(vg),xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Sg[t])?!!i[t]:!1}function Gl(){return Eg}var Mg=re({},Qs,{key:function(t){if(t.key){var i=xg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(t){return t.type==="keypress"?ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tg=In(Mg),wg=re({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=In(wg),Ag=re({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),Rg=In(Ag),Cg=re({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pg=In(Cg),bg=re({},ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dg=In(bg),Lg=[9,13,27,32],Wl=d&&"CompositionEvent"in window,eo=null;d&&"documentMode"in document&&(eo=document.documentMode);var Ug=d&&"TextEvent"in window&&!eo,od=d&&(!Wl||eo&&8<eo&&11>=eo),ad=" ",ld=!1;function ud(t,i){switch(t){case"keyup":return Lg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Ig(t,i){switch(t){case"compositionend":return cd(i);case"keypress":return i.which!==32?null:(ld=!0,ad);case"textInput":return t=i.data,t===ad&&ld?null:t;default:return null}}function Ng(t,i){if(ns)return t==="compositionend"||!Wl&&ud(t,i)?(t=td(),ea=kl=Ki=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return od&&i.locale!=="ko"?null:i.data;default:return null}}var Fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Fg[t.type]:i==="textarea"}function dd(t,i,o,l){Pe(l),i=la(i,"onChange"),0<i.length&&(o=new zl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var to=null,no=null;function Og(t){bd(t,0)}function ra(t){var i=as(t);if(bt(i))return t}function kg(t,i){if(t==="change")return i}var hd=!1;if(d){var Xl;if(d){var Yl="oninput"in document;if(!Yl){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),Yl=typeof pd.oninput=="function"}Xl=Yl}else Xl=!1;hd=Xl&&(!document.documentMode||9<document.documentMode)}function md(){to&&(to.detachEvent("onpropertychange",gd),no=to=null)}function gd(t){if(t.propertyName==="value"&&ra(no)){var i=[];dd(i,no,t,V(t)),Tn(Og,i)}}function zg(t,i,o){t==="focusin"?(md(),to=i,no=o,to.attachEvent("onpropertychange",gd)):t==="focusout"&&md()}function Bg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ra(no)}function Hg(t,i){if(t==="click")return ra(i)}function Vg(t,i){if(t==="input"||t==="change")return ra(i)}function Gg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:Gg;function io(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!p.call(i,c)||!$n(t[c],i[c]))return!1}return!0}function _d(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vd(t,i){var o=_d(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=_d(o)}}function xd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?xd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function yd(){for(var t=window,i=lt();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=lt(t.document)}return i}function jl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Wg(t){var i=yd(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&xd(o.ownerDocument.documentElement,o)){if(l!==null&&jl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=vd(o,h);var E=vd(o,l);c&&E&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xg=d&&"documentMode"in document&&11>=document.documentMode,is=null,ql=null,ro=null,Kl=!1;function Sd(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Kl||is==null||is!==lt(l)||(l=is,"selectionStart"in l&&jl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&io(ro,l)||(ro=l,l=la(ql,"onSelect"),0<l.length&&(i=new zl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function sa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},$l={},Ed={};d&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function oa(t){if($l[t])return $l[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ed)return $l[t]=i[o];return t}var Md=oa("animationend"),Td=oa("animationiteration"),wd=oa("animationstart"),Ad=oa("transitionend"),Rd=new Map,Cd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Rd.set(t,i),u(i,[t])}for(var Zl=0;Zl<Cd.length;Zl++){var Ql=Cd[Zl],Yg=Ql.toLowerCase(),jg=Ql[0].toUpperCase()+Ql.slice(1);$i(Yg,"on"+jg)}$i(Md,"onAnimationEnd"),$i(Td,"onAnimationIteration"),$i(wd,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(Ad,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Pd(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Wo(l,i,void 0,t),t.currentTarget=null}function bd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],F=D.instance,J=D.currentTarget;if(D=D.listener,F!==h&&c.isPropagationStopped())break e;Pd(c,D,J),h=F}else for(E=0;E<l.length;E++){if(D=l[E],F=D.instance,J=D.currentTarget,D=D.listener,F!==h&&c.isPropagationStopped())break e;Pd(c,D,J),h=F}}}if(Er)throw t=Gi,Er=!1,Gi=null,t}function Ut(t,i){var o=i[ou];o===void 0&&(o=i[ou]=new Set);var l=t+"__bubble";o.has(l)||(Dd(i,t,2,!1),o.add(l))}function Jl(t,i,o){var l=0;i&&(l|=4),Dd(o,t,l,i)}var aa="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[aa]){t[aa]=!0,r.forEach(function(o){o!=="selectionchange"&&(qg.has(o)||Jl(o,!1,t),Jl(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[aa]||(i[aa]=!0,Jl("selectionchange",!1,i))}}function Dd(t,i,o,l){switch(ed(i)){case 1:var c=lg;break;case 4:c=ug;break;default:c=Fl}o=c.bind(null,i,o,t),c=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function eu(t,i,o,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(E===4)for(E=l.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===c||F.nodeType===8&&F.parentNode===c))return;E=E.return}for(;D!==null;){if(E=Mr(D),E===null)return;if(F=E.tag,F===5||F===6){l=h=E;continue e}D=D.parentNode}}l=l.return}Tn(function(){var J=h,ge=V(o),ye=[];e:{var me=Rd.get(t);if(me!==void 0){var Le=zl,ke=t;switch(t){case"keypress":if(ta(o)===0)break e;case"keydown":case"keyup":Le=Tg;break;case"focusin":ke="focus",Le=Vl;break;case"focusout":ke="blur",Le=Vl;break;case"beforeblur":case"afterblur":Le=Vl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Rg;break;case Md:case Td:case wd:Le=mg;break;case Ad:Le=Pg;break;case"scroll":Le=cg;break;case"wheel":Le=Dg;break;case"copy":case"cut":case"paste":Le=_g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=sd}var Be=(i&4)!==0,Vt=!Be&&t==="scroll",j=Be?me!==null?me+"Capture":null:me;Be=[];for(var H=J,K;H!==null;){K=H;var Me=K.stateNode;if(K.tag===5&&Me!==null&&(K=Me,j!==null&&(Me=xn(H,j),Me!=null&&Be.push(ao(H,Me,K)))),Vt)break;H=H.return}0<Be.length&&(me=new Le(me,ke,null,o,ge),ye.push({event:me,listeners:Be}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",me&&o!==Mt&&(ke=o.relatedTarget||o.fromElement)&&(Mr(ke)||ke[Si]))break e;if((Le||me)&&(me=ge.window===ge?ge:(me=ge.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(ke=o.relatedTarget||o.toElement,Le=J,ke=ke?Mr(ke):null,ke!==null&&(Vt=li(ke),ke!==Vt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Le=null,ke=J),Le!==ke)){if(Be=id,Me="onMouseLeave",j="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Be=sd,Me="onPointerLeave",j="onPointerEnter",H="pointer"),Vt=Le==null?me:as(Le),K=ke==null?me:as(ke),me=new Be(Me,H+"leave",Le,o,ge),me.target=Vt,me.relatedTarget=K,Me=null,Mr(ge)===J&&(Be=new Be(j,H+"enter",ke,o,ge),Be.target=K,Be.relatedTarget=Vt,Me=Be),Vt=Me,Le&&ke)t:{for(Be=Le,j=ke,H=0,K=Be;K;K=ss(K))H++;for(K=0,Me=j;Me;Me=ss(Me))K++;for(;0<H-K;)Be=ss(Be),H--;for(;0<K-H;)j=ss(j),K--;for(;H--;){if(Be===j||j!==null&&Be===j.alternate)break t;Be=ss(Be),j=ss(j)}Be=null}else Be=null;Le!==null&&Ld(ye,me,Le,Be,!1),ke!==null&&Vt!==null&&Ld(ye,Vt,ke,Be,!0)}}e:{if(me=J?as(J):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var We=kg;else if(fd(me))if(hd)We=Vg;else{We=Bg;var $e=zg}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=Hg);if(We&&(We=We(t,J))){dd(ye,We,o,ge);break e}$e&&$e(t,me,J),t==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&Tt(me,"number",me.value)}switch($e=J?as(J):window,t){case"focusin":(fd($e)||$e.contentEditable==="true")&&(is=$e,ql=J,ro=null);break;case"focusout":ro=ql=is=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,Sd(ye,o,ge);break;case"selectionchange":if(Xg)break;case"keydown":case"keyup":Sd(ye,o,ge)}var Ze;if(Wl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ns?ud(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(od&&o.locale!=="ko"&&(ns||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ns&&(Ze=td()):(Ki=ge,kl="value"in Ki?Ki.value:Ki.textContent,ns=!0)),$e=la(J,nt),0<$e.length&&(nt=new rd(nt,t,null,o,ge),ye.push({event:nt,listeners:$e}),Ze?nt.data=Ze:(Ze=cd(o),Ze!==null&&(nt.data=Ze)))),(Ze=Ug?Ig(t,o):Ng(t,o))&&(J=la(J,"onBeforeInput"),0<J.length&&(ge=new rd("onBeforeInput","beforeinput",null,o,ge),ye.push({event:ge,listeners:J}),ge.data=Ze))}bd(ye,i)})}function ao(t,i,o){return{instance:t,listener:i,currentTarget:o}}function la(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=xn(t,o),h!=null&&l.unshift(ao(t,h,c)),h=xn(t,i),h!=null&&l.push(ao(t,h,c))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ld(t,i,o,l,c){for(var h=i._reactName,E=[];o!==null&&o!==l;){var D=o,F=D.alternate,J=D.stateNode;if(F!==null&&F===l)break;D.tag===5&&J!==null&&(D=J,c?(F=xn(o,h),F!=null&&E.unshift(ao(o,F,D))):c||(F=xn(o,h),F!=null&&E.push(ao(o,F,D)))),o=o.return}E.length!==0&&t.push({event:i,listeners:E})}var Kg=/\r\n?/g,$g=/\u0000|\uFFFD/g;function Ud(t){return(typeof t=="string"?t:""+t).replace(Kg,`
`).replace($g,"")}function ua(t,i,o){if(i=Ud(i),Ud(t)!==i&&o)throw Error(n(425))}function ca(){}var tu=null,nu=null;function iu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ru=typeof setTimeout=="function"?setTimeout:void 0,Zg=typeof clearTimeout=="function"?clearTimeout:void 0,Id=typeof Promise=="function"?Promise:void 0,Qg=typeof queueMicrotask=="function"?queueMicrotask:typeof Id<"u"?function(t){return Id.resolve(null).then(t).catch(Jg)}:ru;function Jg(t){setTimeout(function(){throw t})}function su(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),Zs(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);Zs(i)}function Zi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Nd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),ci="__reactFiber$"+os,lo="__reactProps$"+os,Si="__reactContainer$"+os,ou="__reactEvents$"+os,e_="__reactListeners$"+os,t_="__reactHandles$"+os;function Mr(t){var i=t[ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Si]||o[ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Nd(t);t!==null;){if(o=t[ci])return o;t=Nd(t)}return i}t=o,o=t.parentNode}return null}function uo(t){return t=t[ci]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fa(t){return t[lo]||null}var au=[],ls=-1;function Qi(t){return{current:t}}function It(t){0>ls||(t.current=au[ls],au[ls]=null,ls--)}function Dt(t,i){ls++,au[ls]=t.current,t.current=i}var Ji={},fn=Qi(Ji),wn=Qi(!1),Tr=Ji;function us(t,i){var o=t.type.contextTypes;if(!o)return Ji;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function An(t){return t=t.childContextTypes,t!=null}function da(){It(wn),It(fn)}function Fd(t,i,o){if(fn.current!==Ji)throw Error(n(168));Dt(fn,i),Dt(wn,o)}function Od(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,ve(t)||"Unknown",c));return re({},o,l)}function ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ji,Tr=fn.current,Dt(fn,t),Dt(wn,wn.current),!0}function kd(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Od(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,It(wn),It(fn),Dt(fn,t)):It(wn),Dt(wn,o)}var Ei=null,pa=!1,lu=!1;function zd(t){Ei===null?Ei=[t]:Ei.push(t)}function n_(t){pa=!0,zd(t)}function er(){if(!lu&&Ei!==null){lu=!0;var t=0,i=xt;try{var o=Ei;for(xt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ei=null,pa=!1}catch(c){throw Ei!==null&&(Ei=Ei.slice(t+1)),Ko(Se,er),c}finally{xt=i,lu=!1}}return null}var cs=[],fs=0,ma=null,ga=0,Hn=[],Vn=0,wr=null,Mi=1,Ti="";function Ar(t,i){cs[fs++]=ga,cs[fs++]=ma,ma=t,ga=i}function Bd(t,i,o){Hn[Vn++]=Mi,Hn[Vn++]=Ti,Hn[Vn++]=wr,wr=t;var l=Mi;t=Ti;var c=32-st(l)-1;l&=~(1<<c),o+=1;var h=32-st(i)+c;if(30<h){var E=c-c%5;h=(l&(1<<E)-1).toString(32),l>>=E,c-=E,Mi=1<<32-st(i)+c|o<<c|l,Ti=h+t}else Mi=1<<h|o<<c|l,Ti=t}function uu(t){t.return!==null&&(Ar(t,1),Bd(t,1,0))}function cu(t){for(;t===ma;)ma=cs[--fs],cs[fs]=null,ga=cs[--fs],cs[fs]=null;for(;t===wr;)wr=Hn[--Vn],Hn[Vn]=null,Ti=Hn[--Vn],Hn[Vn]=null,Mi=Hn[--Vn],Hn[Vn]=null}var Nn=null,Fn=null,Ft=!1,Zn=null;function Hd(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Vd(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Nn=t,Fn=Zi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Nn=t,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Mi,overflow:Ti}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Nn=t,Fn=null,!0):!1;default:return!1}}function fu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function du(t){if(Ft){var i=Fn;if(i){var o=i;if(!Vd(t,i)){if(fu(t))throw Error(n(418));i=Zi(o.nextSibling);var l=Nn;i&&Vd(t,i)?Hd(l,o):(t.flags=t.flags&-4097|2,Ft=!1,Nn=t)}}else{if(fu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Nn=t}}}function Gd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function _a(t){if(t!==Nn)return!1;if(!Ft)return Gd(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!iu(t.type,t.memoizedProps)),i&&(i=Fn)){if(fu(t))throw Wd(),Error(n(418));for(;i;)Hd(t,i),i=Zi(i.nextSibling)}if(Gd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Fn=Zi(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Fn=null}}else Fn=Nn?Zi(t.stateNode.nextSibling):null;return!0}function Wd(){for(var t=Fn;t;)t=Zi(t.nextSibling)}function ds(){Fn=Nn=null,Ft=!1}function hu(t){Zn===null?Zn=[t]:Zn.push(t)}var i_=C.ReactCurrentBatchConfig;function co(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var D=c.refs;E===null?delete D[h]:D[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function va(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Xd(t){var i=t._init;return i(t._payload)}function Yd(t){function i(j,H){if(t){var K=j.deletions;K===null?(j.deletions=[H],j.flags|=16):K.push(H)}}function o(j,H){if(!t)return null;for(;H!==null;)i(j,H),H=H.sibling;return null}function l(j,H){for(j=new Map;H!==null;)H.key!==null?j.set(H.key,H):j.set(H.index,H),H=H.sibling;return j}function c(j,H){return j=lr(j,H),j.index=0,j.sibling=null,j}function h(j,H,K){return j.index=K,t?(K=j.alternate,K!==null?(K=K.index,K<H?(j.flags|=2,H):K):(j.flags|=2,H)):(j.flags|=1048576,H)}function E(j){return t&&j.alternate===null&&(j.flags|=2),j}function D(j,H,K,Me){return H===null||H.tag!==6?(H=rc(K,j.mode,Me),H.return=j,H):(H=c(H,K),H.return=j,H)}function F(j,H,K,Me){var We=K.type;return We===N?ge(j,H,K.props.children,Me,K.key):H!==null&&(H.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===se&&Xd(We)===H.type)?(Me=c(H,K.props),Me.ref=co(j,H,K),Me.return=j,Me):(Me=Va(K.type,K.key,K.props,null,j.mode,Me),Me.ref=co(j,H,K),Me.return=j,Me)}function J(j,H,K,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=sc(K,j.mode,Me),H.return=j,H):(H=c(H,K.children||[]),H.return=j,H)}function ge(j,H,K,Me,We){return H===null||H.tag!==7?(H=Ir(K,j.mode,Me,We),H.return=j,H):(H=c(H,K),H.return=j,H)}function ye(j,H,K){if(typeof H=="string"&&H!==""||typeof H=="number")return H=rc(""+H,j.mode,K),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case G:return K=Va(H.type,H.key,H.props,null,j.mode,K),K.ref=co(j,null,H),K.return=j,K;case z:return H=sc(H,j.mode,K),H.return=j,H;case se:var Me=H._init;return ye(j,Me(H._payload),K)}if(Ge(H)||ae(H))return H=Ir(H,j.mode,K,null),H.return=j,H;va(j,H)}return null}function me(j,H,K,Me){var We=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return We!==null?null:D(j,H,""+K,Me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===We?F(j,H,K,Me):null;case z:return K.key===We?J(j,H,K,Me):null;case se:return We=K._init,me(j,H,We(K._payload),Me)}if(Ge(K)||ae(K))return We!==null?null:ge(j,H,K,Me,null);va(j,K)}return null}function Le(j,H,K,Me,We){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return j=j.get(K)||null,D(H,j,""+Me,We);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case G:return j=j.get(Me.key===null?K:Me.key)||null,F(H,j,Me,We);case z:return j=j.get(Me.key===null?K:Me.key)||null,J(H,j,Me,We);case se:var $e=Me._init;return Le(j,H,K,$e(Me._payload),We)}if(Ge(Me)||ae(Me))return j=j.get(K)||null,ge(H,j,Me,We,null);va(H,Me)}return null}function ke(j,H,K,Me){for(var We=null,$e=null,Ze=H,nt=H=0,rn=null;Ze!==null&&nt<K.length;nt++){Ze.index>nt?(rn=Ze,Ze=null):rn=Ze.sibling;var St=me(j,Ze,K[nt],Me);if(St===null){Ze===null&&(Ze=rn);break}t&&Ze&&St.alternate===null&&i(j,Ze),H=h(St,H,nt),$e===null?We=St:$e.sibling=St,$e=St,Ze=rn}if(nt===K.length)return o(j,Ze),Ft&&Ar(j,nt),We;if(Ze===null){for(;nt<K.length;nt++)Ze=ye(j,K[nt],Me),Ze!==null&&(H=h(Ze,H,nt),$e===null?We=Ze:$e.sibling=Ze,$e=Ze);return Ft&&Ar(j,nt),We}for(Ze=l(j,Ze);nt<K.length;nt++)rn=Le(Ze,j,nt,K[nt],Me),rn!==null&&(t&&rn.alternate!==null&&Ze.delete(rn.key===null?nt:rn.key),H=h(rn,H,nt),$e===null?We=rn:$e.sibling=rn,$e=rn);return t&&Ze.forEach(function(ur){return i(j,ur)}),Ft&&Ar(j,nt),We}function Be(j,H,K,Me){var We=ae(K);if(typeof We!="function")throw Error(n(150));if(K=We.call(K),K==null)throw Error(n(151));for(var $e=We=null,Ze=H,nt=H=0,rn=null,St=K.next();Ze!==null&&!St.done;nt++,St=K.next()){Ze.index>nt?(rn=Ze,Ze=null):rn=Ze.sibling;var ur=me(j,Ze,St.value,Me);if(ur===null){Ze===null&&(Ze=rn);break}t&&Ze&&ur.alternate===null&&i(j,Ze),H=h(ur,H,nt),$e===null?We=ur:$e.sibling=ur,$e=ur,Ze=rn}if(St.done)return o(j,Ze),Ft&&Ar(j,nt),We;if(Ze===null){for(;!St.done;nt++,St=K.next())St=ye(j,St.value,Me),St!==null&&(H=h(St,H,nt),$e===null?We=St:$e.sibling=St,$e=St);return Ft&&Ar(j,nt),We}for(Ze=l(j,Ze);!St.done;nt++,St=K.next())St=Le(Ze,j,nt,St.value,Me),St!==null&&(t&&St.alternate!==null&&Ze.delete(St.key===null?nt:St.key),H=h(St,H,nt),$e===null?We=St:$e.sibling=St,$e=St);return t&&Ze.forEach(function(F_){return i(j,F_)}),Ft&&Ar(j,nt),We}function Vt(j,H,K,Me){if(typeof K=="object"&&K!==null&&K.type===N&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var We=K.key,$e=H;$e!==null;){if($e.key===We){if(We=K.type,We===N){if($e.tag===7){o(j,$e.sibling),H=c($e,K.props.children),H.return=j,j=H;break e}}else if($e.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===se&&Xd(We)===$e.type){o(j,$e.sibling),H=c($e,K.props),H.ref=co(j,$e,K),H.return=j,j=H;break e}o(j,$e);break}else i(j,$e);$e=$e.sibling}K.type===N?(H=Ir(K.props.children,j.mode,Me,K.key),H.return=j,j=H):(Me=Va(K.type,K.key,K.props,null,j.mode,Me),Me.ref=co(j,H,K),Me.return=j,j=Me)}return E(j);case z:e:{for($e=K.key;H!==null;){if(H.key===$e)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){o(j,H.sibling),H=c(H,K.children||[]),H.return=j,j=H;break e}else{o(j,H);break}else i(j,H);H=H.sibling}H=sc(K,j.mode,Me),H.return=j,j=H}return E(j);case se:return $e=K._init,Vt(j,H,$e(K._payload),Me)}if(Ge(K))return ke(j,H,K,Me);if(ae(K))return Be(j,H,K,Me);va(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,H!==null&&H.tag===6?(o(j,H.sibling),H=c(H,K),H.return=j,j=H):(o(j,H),H=rc(K,j.mode,Me),H.return=j,j=H),E(j)):o(j,H)}return Vt}var hs=Yd(!0),jd=Yd(!1),xa=Qi(null),ya=null,ps=null,pu=null;function mu(){pu=ps=ya=null}function gu(t){var i=xa.current;It(xa),t._currentValue=i}function _u(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){ya=t,pu=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Rn=!0),t.firstContext=null)}function Gn(t){var i=t._currentValue;if(pu!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(ya===null)throw Error(n(308));ps=t,ya.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Rr=null;function vu(t){Rr===null?Rr=[t]:Rr.push(t)}function qd(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,vu(i)):(o.next=c.next,c.next=o),i.interleaved=o,wi(t,l)}function wi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var tr=!1;function xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function nr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,wi(t,o)}return c=l.interleaved,c===null?(i.next=i,vu(l)):(i.next=c.next,c.next=i),l.interleaved=i,wi(t,o)}function Sa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,en(t,o)}}function $d(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=E:h=h.next=E,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ea(t,i,o,l){var c=t.updateQueue;tr=!1;var h=c.firstBaseUpdate,E=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var F=D,J=F.next;F.next=null,E===null?h=J:E.next=J,E=F;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,D=ge.lastBaseUpdate,D!==E&&(D===null?ge.firstBaseUpdate=J:D.next=J,ge.lastBaseUpdate=F))}if(h!==null){var ye=c.baseState;E=0,ge=J=F=null,D=h;do{var me=D.lane,Le=D.eventTime;if((l&me)===me){ge!==null&&(ge=ge.next={eventTime:Le,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ke=t,Be=D;switch(me=i,Le=o,Be.tag){case 1:if(ke=Be.payload,typeof ke=="function"){ye=ke.call(Le,ye,me);break e}ye=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Be.payload,me=typeof ke=="function"?ke.call(Le,ye,me):ke,me==null)break e;ye=re({},ye,me);break e;case 2:tr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,me=c.effects,me===null?c.effects=[D]:me.push(D))}else Le={eventTime:Le,lane:me,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ge===null?(J=ge=Le,F=ye):ge=ge.next=Le,E|=me;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;me=D,D=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);if(ge===null&&(F=ye),c.baseState=F,c.firstBaseUpdate=J,c.lastBaseUpdate=ge,i=c.shared.interleaved,i!==null){c=i;do E|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);br|=E,t.lanes=E,t.memoizedState=ye}}function Zd(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var fo={},fi=Qi(fo),ho=Qi(fo),po=Qi(fo);function Cr(t){if(t===fo)throw Error(n(174));return t}function yu(t,i){switch(Dt(po,i),Dt(ho,t),Dt(fi,fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:He(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=He(i,t)}It(fi),Dt(fi,i)}function gs(){It(fi),It(ho),It(po)}function Qd(t){Cr(po.current);var i=Cr(fi.current),o=He(i,t.type);i!==o&&(Dt(ho,t),Dt(fi,o))}function Su(t){ho.current===t&&(It(fi),It(ho))}var Ot=Qi(0);function Ma(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Eu=[];function Mu(){for(var t=0;t<Eu.length;t++)Eu[t]._workInProgressVersionPrimary=null;Eu.length=0}var Ta=C.ReactCurrentDispatcher,Tu=C.ReactCurrentBatchConfig,Pr=0,kt=null,qt=null,tn=null,wa=!1,mo=!1,go=0,r_=0;function dn(){throw Error(n(321))}function wu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!$n(t[o],i[o]))return!1;return!0}function Au(t,i,o,l,c,h){if(Pr=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ta.current=t===null||t.memoizedState===null?l_:u_,t=o(l,c),mo){h=0;do{if(mo=!1,go=0,25<=h)throw Error(n(301));h+=1,tn=qt=null,i.updateQueue=null,Ta.current=c_,t=o(l,c)}while(mo)}if(Ta.current=Ca,i=qt!==null&&qt.next!==null,Pr=0,tn=qt=kt=null,wa=!1,i)throw Error(n(300));return t}function Ru(){var t=go!==0;return go=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?kt.memoizedState=tn=t:tn=tn.next=t,tn}function Wn(){if(qt===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=tn===null?kt.memoizedState:tn.next;if(i!==null)tn=i,qt=t;else{if(t===null)throw Error(n(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},tn===null?kt.memoizedState=tn=t:tn=tn.next=t}return tn}function _o(t,i){return typeof i=="function"?i(t):i}function Cu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=qt,c=l.baseQueue,h=o.pending;if(h!==null){if(c!==null){var E=c.next;c.next=h.next,h.next=E}l.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,l=l.baseState;var D=E=null,F=null,J=h;do{var ge=J.lane;if((Pr&ge)===ge)F!==null&&(F=F.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var ye={lane:ge,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};F===null?(D=F=ye,E=l):F=F.next=ye,kt.lanes|=ge,br|=ge}J=J.next}while(J!==null&&J!==h);F===null?E=l:F.next=D,$n(l,i.memoizedState)||(Rn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=F,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do h=c.lane,kt.lanes|=h,br|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Pu(t){var i=Wn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var E=c=c.next;do h=t(h,E.action),E=E.next;while(E!==c);$n(h,i.memoizedState)||(Rn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function Jd(){}function eh(t,i){var o=kt,l=Wn(),c=i(),h=!$n(l.memoizedState,c);if(h&&(l.memoizedState=c,Rn=!0),l=l.queue,bu(ih.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,vo(9,nh.bind(null,o,l,c,i),void 0,null),nn===null)throw Error(n(349));(Pr&30)!==0||th(o,i,c)}return c}function th(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function nh(t,i,o,l){i.value=o,i.getSnapshot=l,rh(i)&&sh(t)}function ih(t,i,o){return o(function(){rh(i)&&sh(t)})}function rh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!$n(t,o)}catch{return!0}}function sh(t){var i=wi(t,1);i!==null&&ti(i,t,1,-1)}function oh(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},i.queue=t,t=t.dispatch=a_.bind(null,kt,t),[i.memoizedState,t]}function vo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function ah(){return Wn().memoizedState}function Aa(t,i,o,l){var c=di();kt.flags|=t,c.memoizedState=vo(1|i,o,void 0,l===void 0?null:l)}function Ra(t,i,o,l){var c=Wn();l=l===void 0?null:l;var h=void 0;if(qt!==null){var E=qt.memoizedState;if(h=E.destroy,l!==null&&wu(l,E.deps)){c.memoizedState=vo(i,o,h,l);return}}kt.flags|=t,c.memoizedState=vo(1|i,o,h,l)}function lh(t,i){return Aa(8390656,8,t,i)}function bu(t,i){return Ra(2048,8,t,i)}function uh(t,i){return Ra(4,2,t,i)}function ch(t,i){return Ra(4,4,t,i)}function fh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function dh(t,i,o){return o=o!=null?o.concat([t]):null,Ra(4,4,fh.bind(null,i,t),o)}function Du(){}function hh(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&wu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function ph(t,i){var o=Wn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&wu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function mh(t,i,o){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=o):($n(o,i)||(o=Ct(),kt.lanes|=o,br|=o,t.baseState=!0),i)}function s_(t,i){var o=xt;xt=o!==0&&4>o?o:4,t(!0);var l=Tu.transition;Tu.transition={};try{t(!1),i()}finally{xt=o,Tu.transition=l}}function gh(){return Wn().memoizedState}function o_(t,i,o){var l=or(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},_h(t))vh(i,o);else if(o=qd(t,i,o,l),o!==null){var c=En();ti(o,t,l,c),xh(o,i,l)}}function a_(t,i,o){var l=or(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(_h(t))vh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,D=h(E,o);if(c.hasEagerState=!0,c.eagerState=D,$n(D,E)){var F=i.interleaved;F===null?(c.next=c,vu(i)):(c.next=F.next,F.next=c),i.interleaved=c;return}}catch{}finally{}o=qd(t,i,c,l),o!==null&&(c=En(),ti(o,t,l,c),xh(o,i,l))}}function _h(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function vh(t,i){mo=wa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function xh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,en(t,o)}}var Ca={readContext:Gn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},l_={readContext:Gn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Gn,useEffect:lh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Aa(4194308,4,fh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Aa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Aa(4,2,t,i)},useMemo:function(t,i){var o=di();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=di();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=o_.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:oh,useDebugValue:Du,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=oh(!1),i=t[0];return t=s_.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,c=di();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),nn===null)throw Error(n(349));(Pr&30)!==0||th(l,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,lh(ih.bind(null,l,h,t),[t]),l.flags|=2048,vo(9,nh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=di(),i=nn.identifierPrefix;if(Ft){var o=Ti,l=Mi;o=(l&~(1<<32-st(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=go++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=r_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},u_={readContext:Gn,useCallback:hh,useContext:Gn,useEffect:bu,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:Cu,useRef:ah,useState:function(){return Cu(_o)},useDebugValue:Du,useDeferredValue:function(t){var i=Wn();return mh(i,qt.memoizedState,t)},useTransition:function(){var t=Cu(_o)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:Jd,useSyncExternalStore:eh,useId:gh,unstable_isNewReconciler:!1},c_={readContext:Gn,useCallback:hh,useContext:Gn,useEffect:bu,useImperativeHandle:dh,useInsertionEffect:uh,useLayoutEffect:ch,useMemo:ph,useReducer:Pu,useRef:ah,useState:function(){return Pu(_o)},useDebugValue:Du,useDeferredValue:function(t){var i=Wn();return qt===null?i.memoizedState=t:mh(i,qt.memoizedState,t)},useTransition:function(){var t=Pu(_o)[0],i=Wn().memoizedState;return[t,i]},useMutableSource:Jd,useSyncExternalStore:eh,useId:gh,unstable_isNewReconciler:!1};function Qn(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Lu(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Pa={isMounted:function(t){return(t=t._reactInternals)?li(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=En(),c=or(t),h=Ai(l,c);h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ti(i,t,c,l),Sa(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=En(),c=or(t),h=Ai(l,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=nr(t,h,c),i!==null&&(ti(i,t,c,l),Sa(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=En(),l=or(t),c=Ai(o,l);c.tag=2,i!=null&&(c.callback=i),i=nr(t,c,l),i!==null&&(ti(i,t,l,o),Sa(i,t,l))}};function yh(t,i,o,l,c,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!io(o,l)||!io(c,h):!0}function Sh(t,i,o){var l=!1,c=Ji,h=i.contextType;return typeof h=="object"&&h!==null?h=Gn(h):(c=An(i)?Tr:fn.current,l=i.contextTypes,h=(l=l!=null)?us(t,c):Ji),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Pa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function Eh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Pa.enqueueReplaceState(i,i.state,null)}function Uu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},xu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Gn(h):(h=An(i)?Tr:fn.current,c.context=us(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Lu(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Pa.enqueueReplaceState(c,c.state,null),Ea(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function _s(t,i){try{var o="",l=i;do o+=he(l),l=l.return;while(l);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Iu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Nu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var f_=typeof WeakMap=="function"?WeakMap:Map;function Mh(t,i,o){o=Ai(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Fa||(Fa=!0,$u=l),Nu(t,i)},o}function Th(t,i,o){o=Ai(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Nu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Nu(t,i),typeof l!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function wh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new f_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=w_.bind(null,t,i,o),i.then(t,t))}function Ah(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Rh(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ai(-1,1),i.tag=2,nr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var d_=C.ReactCurrentOwner,Rn=!1;function Sn(t,i,o,l){i.child=t===null?jd(i,null,o,l):hs(i,t.child,o,l)}function Ch(t,i,o,l,c){o=o.render;var h=i.ref;return ms(i,c),l=Au(t,i,o,l,h,c),o=Ru(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ri(t,i,c)):(Ft&&o&&uu(i),i.flags|=1,Sn(t,i,l,c),i.child)}function Ph(t,i,o,l,c){if(t===null){var h=o.type;return typeof h=="function"&&!ic(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,bh(t,i,h,l,c)):(t=Va(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var E=h.memoizedProps;if(o=o.compare,o=o!==null?o:io,o(E,l)&&t.ref===i.ref)return Ri(t,i,c)}return i.flags|=1,t=lr(h,l),t.ref=i.ref,t.return=i,i.child=t}function bh(t,i,o,l,c){if(t!==null){var h=t.memoizedProps;if(io(h,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Rn=!0);else return i.lanes=t.lanes,Ri(t,i,c)}return Fu(t,i,o,l,c)}function Dh(t,i,o){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(xs,On),On|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(xs,On),On|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Dt(xs,On),On|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Dt(xs,On),On|=l;return Sn(t,i,c,o),i.child}function Lh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Fu(t,i,o,l,c){var h=An(o)?Tr:fn.current;return h=us(i,h),ms(i,c),o=Au(t,i,o,l,h,c),l=Ru(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ri(t,i,c)):(Ft&&l&&uu(i),i.flags|=1,Sn(t,i,o,c),i.child)}function Uh(t,i,o,l,c){if(An(o)){var h=!0;ha(i)}else h=!1;if(ms(i,c),i.stateNode===null)Da(t,i),Sh(i,o,l),Uu(i,o,l,c),l=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var F=E.context,J=o.contextType;typeof J=="object"&&J!==null?J=Gn(J):(J=An(o)?Tr:fn.current,J=us(i,J));var ge=o.getDerivedStateFromProps,ye=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==l||F!==J)&&Eh(i,E,l,J),tr=!1;var me=i.memoizedState;E.state=me,Ea(i,l,E,c),F=i.memoizedState,D!==l||me!==F||wn.current||tr?(typeof ge=="function"&&(Lu(i,o,ge,l),F=i.memoizedState),(D=tr||yh(i,o,D,l,me,F,J))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),E.props=l,E.state=F,E.context=J,l=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,Kd(t,i),D=i.memoizedProps,J=i.type===i.elementType?D:Qn(i.type,D),E.props=J,ye=i.pendingProps,me=E.context,F=o.contextType,typeof F=="object"&&F!==null?F=Gn(F):(F=An(o)?Tr:fn.current,F=us(i,F));var Le=o.getDerivedStateFromProps;(ge=typeof Le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==ye||me!==F)&&Eh(i,E,l,F),tr=!1,me=i.memoizedState,E.state=me,Ea(i,l,E,c);var ke=i.memoizedState;D!==ye||me!==ke||wn.current||tr?(typeof Le=="function"&&(Lu(i,o,Le,l),ke=i.memoizedState),(J=tr||yh(i,o,J,l,me,ke,F)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,ke,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,ke,F)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ke),E.props=l,E.state=ke,E.context=F,l=J):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Ou(t,i,o,l,h,c)}function Ou(t,i,o,l,c,h){Lh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return c&&kd(i,o,!1),Ri(t,i,h);l=i.stateNode,d_.current=i;var D=E&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=hs(i,t.child,null,h),i.child=hs(i,null,D,h)):Sn(t,i,D,h),i.memoizedState=l.state,c&&kd(i,o,!0),i.child}function Ih(t){var i=t.stateNode;i.pendingContext?Fd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Fd(t,i.context,!1),yu(t,i.containerInfo)}function Nh(t,i,o,l,c){return ds(),hu(c),i.flags|=256,Sn(t,i,o,l),i.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fh(t,i,o){var l=i.pendingProps,c=Ot.current,h=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Dt(Ot,c&1),t===null)return du(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=Ga(E,l,0,null),t=Ir(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=zu(o),i.memoizedState=ku,t):Bu(i,E));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return h_(t,i,E,l,D,c,o);if(h){h=l.fallback,E=i.mode,c=t.child,D=c.sibling;var F={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=lr(c,F),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?h=lr(D,h):(h=Ir(h,E,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?zu(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~o,i.memoizedState=ku,l}return h=t.child,t=h.sibling,l=lr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Bu(t,i){return i=Ga({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ba(t,i,o,l){return l!==null&&hu(l),hs(i,t.child,null,o),t=Bu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function h_(t,i,o,l,c,h,E){if(o)return i.flags&256?(i.flags&=-257,l=Iu(Error(n(422))),ba(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=Ga({mode:"visible",children:l.children},c,0,null),h=Ir(h,c,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&hs(i,t.child,null,E),i.child.memoizedState=zu(E),i.memoizedState=ku,h);if((i.mode&1)===0)return ba(t,i,E,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Iu(h,l,void 0),ba(t,i,E,l)}if(D=(E&t.childLanes)!==0,Rn||D){if(l=nn,l!==null){switch(E&-E){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|E))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,wi(t,c),ti(l,t,c,-1))}return nc(),l=Iu(Error(n(421))),ba(t,i,E,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=A_.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Fn=Zi(c.nextSibling),Nn=i,Ft=!0,Zn=null,t!==null&&(Hn[Vn++]=Mi,Hn[Vn++]=Ti,Hn[Vn++]=wr,Mi=t.id,Ti=t.overflow,wr=i),i=Bu(i,l.children),i.flags|=4096,i)}function Oh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),_u(t.return,i,o)}function Hu(t,i,o,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=c)}function kh(t,i,o){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(Sn(t,i,l.children,o),l=Ot.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oh(t,o,i);else if(t.tag===19)Oh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(Ot,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Ma(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Hu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Ma(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Hu(i,!0,o,null,h);break;case"together":Hu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Da(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ri(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),br|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=lr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=lr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function p_(t,i,o){switch(i.tag){case 3:Ih(i),ds();break;case 5:Qd(i);break;case 1:An(i.type)&&ha(i);break;case 4:yu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Dt(xa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(Ot,Ot.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Fh(t,i,o):(Dt(Ot,Ot.current&1),t=Ri(t,i,o),t!==null?t.sibling:null);Dt(Ot,Ot.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return kh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Dt(Ot,Ot.current),l)break;return null;case 22:case 23:return i.lanes=0,Dh(t,i,o)}return Ri(t,i,o)}var zh,Vu,Bh,Hh;zh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Vu=function(){},Bh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Cr(fi.current);var h=null;switch(o){case"input":c=O(t,c),l=O(t,l),h=[];break;case"select":c=re({},c,{value:void 0}),l=re({},l,{value:void 0}),h=[];break;case"textarea":c=M(t,c),l=M(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ca)}ft(o,l);var E;o=null;for(J in c)if(!l.hasOwnProperty(J)&&c.hasOwnProperty(J)&&c[J]!=null)if(J==="style"){var D=c[J];for(E in D)D.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in l){var F=l[J];if(D=c!=null?c[J]:void 0,l.hasOwnProperty(J)&&F!==D&&(F!=null||D!=null))if(J==="style")if(D){for(E in D)!D.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in F)F.hasOwnProperty(E)&&D[E]!==F[E]&&(o||(o={}),o[E]=F[E])}else o||(h||(h=[]),h.push(J,o)),o=F;else J==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,D=D?D.__html:void 0,F!=null&&D!==F&&(h=h||[]).push(J,F)):J==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(J,""+F):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(F!=null&&J==="onScroll"&&Ut("scroll",t),h||D===F||(h=[])):(h=h||[]).push(J,F))}o&&(h=h||[]).push("style",o);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},Hh=function(t,i,o,l){o!==l&&(i.flags|=4)};function xo(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function m_(t,i,o){var l=i.pendingProps;switch(cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return An(i.type)&&da(),hn(i),null;case 3:return l=i.stateNode,gs(),It(wn),It(fn),Mu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(_a(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Zn!==null&&(Ju(Zn),Zn=null))),Vu(t,i),hn(i),null;case 5:Su(i);var c=Cr(po.current);if(o=i.type,t!==null&&i.stateNode!=null)Bh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return hn(i),null}if(t=Cr(fi.current),_a(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[ci]=i,l[lo]=h,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(c=0;c<so.length;c++)Ut(so[c],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":vn(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":$(l,h),Ut("invalid",l)}ft(o,h),c=null;for(var E in h)if(h.hasOwnProperty(E)){var D=h[E];E==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&ua(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&ua(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Ut("scroll",l)}switch(o){case"input":Pt(l),Ye(l,h,!0);break;case"textarea":Pt(l),_e(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ca)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ue(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(o,{is:l.is}):(t=E.createElement(o),o==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,o),t[ci]=i,t[lo]=l,zh(t,i,!1,!1),i.stateNode=t;e:{switch(E=it(o,l),o){case"dialog":Ut("cancel",t),Ut("close",t),c=l;break;case"iframe":case"object":case"embed":Ut("load",t),c=l;break;case"video":case"audio":for(c=0;c<so.length;c++)Ut(so[c],t);c=l;break;case"source":Ut("error",t),c=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),c=l;break;case"details":Ut("toggle",t),c=l;break;case"input":vn(t,l),c=O(t,l),Ut("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=re({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":$(t,l),c=M(t,l),Ut("invalid",t);break;default:c=l}ft(o,c),D=c;for(h in D)if(D.hasOwnProperty(h)){var F=D[h];h==="style"?et(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Ke(t,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&qe(t,F):typeof F=="number"&&qe(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?F!=null&&h==="onScroll"&&Ut("scroll",t):F!=null&&L(t,h,F,E))}switch(o){case"input":Pt(t),Ye(t,l,!1);break;case"textarea":Pt(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Te(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?b(t,!!l.multiple,h,!1):l.defaultValue!=null&&b(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ca)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(t&&i.stateNode!=null)Hh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Cr(po.current),Cr(fi.current),_a(i)){if(l=i.stateNode,o=i.memoizedProps,l[ci]=i,(h=l.nodeValue!==o)&&(t=Nn,t!==null))switch(t.tag){case 3:ua(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return hn(i),null;case 13:if(It(Ot),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wd(),ds(),i.flags|=98560,h=!1;else if(h=_a(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;hn(i),h=!1}else Zn!==null&&(Ju(Zn),Zn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ot.current&1)!==0?Kt===0&&(Kt=3):nc())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return gs(),Vu(t,i),t===null&&oo(i.stateNode.containerInfo),hn(i),null;case 10:return gu(i.type._context),hn(i),null;case 17:return An(i.type)&&da(),hn(i),null;case 19:if(It(Ot),h=i.memoizedState,h===null)return hn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)xo(h,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Ma(t),E!==null){for(i.flags|=128,xo(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(Ot,Ot.current&1|2),i.child}t=t.sibling}h.tail!==null&&q()>ys&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ma(E),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Ft)return hn(i),null}else 2*q()-h.renderingStartTime>ys&&o!==1073741824&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(o=h.last,o!==null?o.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=q(),i.sibling=null,o=Ot.current,Dt(Ot,l?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return tc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(On&1073741824)!==0&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function g_(t,i){switch(cu(i),i.tag){case 1:return An(i.type)&&da(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),It(wn),It(fn),Mu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Su(i),null;case 13:if(It(Ot),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(Ot),null;case 4:return gs(),null;case 10:return gu(i.type._context),null;case 22:case 23:return tc(),null;case 24:return null;default:return null}}var La=!1,pn=!1,__=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function vs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ht(t,i,l)}else o.current=null}function Gu(t,i,o){try{o()}catch(l){Ht(t,i,l)}}var Vh=!1;function v_(t,i){if(tu=Qo,t=yd(),jl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var E=0,D=-1,F=-1,J=0,ge=0,ye=t,me=null;t:for(;;){for(var Le;ye!==o||c!==0&&ye.nodeType!==3||(D=E+c),ye!==h||l!==0&&ye.nodeType!==3||(F=E+l),ye.nodeType===3&&(E+=ye.nodeValue.length),(Le=ye.firstChild)!==null;)me=ye,ye=Le;for(;;){if(ye===t)break t;if(me===o&&++J===c&&(D=E),me===h&&++ge===l&&(F=E),(Le=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Le}o=D===-1||F===-1?null:{start:D,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(nu={focusedElem:t,selectionRange:o},Qo=!1,Ie=i;Ie!==null;)if(i=Ie,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ie=t;else for(;Ie!==null;){i=Ie;try{var ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var Be=ke.memoizedProps,Vt=ke.memoizedState,j=i.stateNode,H=j.getSnapshotBeforeUpdate(i.elementType===i.type?Be:Qn(i.type,Be),Vt);j.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){Ht(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,Ie=t;break}Ie=i.return}return ke=Vh,Vh=!1,ke}function yo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Gu(i,o,h)}c=c.next}while(c!==l)}}function Ua(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Wu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Gh(t){var i=t.alternate;i!==null&&(t.alternate=null,Gh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[lo],delete i[ou],delete i[e_],delete i[t_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wh(t){return t.tag===5||t.tag===3||t.tag===4}function Xh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ca));else if(l!==4&&(t=t.child,t!==null))for(Xu(t,i,o),t=t.sibling;t!==null;)Xu(t,i,o),t=t.sibling}function Yu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Yu(t,i,o),t=t.sibling;t!==null;)Yu(t,i,o),t=t.sibling}var an=null,Jn=!1;function ir(t,i,o){for(o=o.child;o!==null;)Yh(t,i,o),o=o.sibling}function Yh(t,i,o){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Qe,o)}catch{}switch(o.tag){case 5:pn||vs(o,i);case 6:var l=an,c=Jn;an=null,ir(t,i,o),an=l,Jn=c,an!==null&&(Jn?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(Jn?(t=an,o=o.stateNode,t.nodeType===8?su(t.parentNode,o):t.nodeType===1&&su(t,o),Zs(t)):su(an,o.stateNode));break;case 4:l=an,c=Jn,an=o.stateNode.containerInfo,Jn=!0,ir(t,i,o),an=l,Jn=c;break;case 0:case 11:case 14:case 15:if(!pn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Gu(o,i,E),c=c.next}while(c!==l)}ir(t,i,o);break;case 1:if(!pn&&(vs(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Ht(o,i,D)}ir(t,i,o);break;case 21:ir(t,i,o);break;case 22:o.mode&1?(pn=(l=pn)||o.memoizedState!==null,ir(t,i,o),pn=l):ir(t,i,o);break;default:ir(t,i,o)}}function jh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new __),i.forEach(function(l){var c=R_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function ei(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var h=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:an=D.stateNode,Jn=!1;break e;case 3:an=D.stateNode.containerInfo,Jn=!0;break e;case 4:an=D.stateNode.containerInfo,Jn=!0;break e}D=D.return}if(an===null)throw Error(n(160));Yh(h,E,c),an=null,Jn=!1;var F=c.alternate;F!==null&&(F.return=null),c.return=null}catch(J){Ht(c,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qh(i,t),i=i.sibling}function qh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(i,t),hi(t),l&4){try{yo(3,t,t.return),Ua(3,t)}catch(Be){Ht(t,t.return,Be)}try{yo(5,t,t.return)}catch(Be){Ht(t,t.return,Be)}}break;case 1:ei(i,t),hi(t),l&512&&o!==null&&vs(o,o.return);break;case 5:if(ei(i,t),hi(t),l&512&&o!==null&&vs(o,o.return),t.flags&32){var c=t.stateNode;try{qe(c,"")}catch(Be){Ht(t,t.return,Be)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,E=o!==null?o.memoizedProps:h,D=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&pt(c,h),it(D,E);var J=it(D,h);for(E=0;E<F.length;E+=2){var ge=F[E],ye=F[E+1];ge==="style"?et(c,ye):ge==="dangerouslySetInnerHTML"?Ke(c,ye):ge==="children"?qe(c,ye):L(c,ge,ye,J)}switch(D){case"input":ct(c,h);break;case"textarea":fe(c,h);break;case"select":var me=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Le=h.value;Le!=null?b(c,!!h.multiple,Le,!1):me!==!!h.multiple&&(h.defaultValue!=null?b(c,!!h.multiple,h.defaultValue,!0):b(c,!!h.multiple,h.multiple?[]:"",!1))}c[lo]=h}catch(Be){Ht(t,t.return,Be)}}break;case 6:if(ei(i,t),hi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Be){Ht(t,t.return,Be)}}break;case 3:if(ei(i,t),hi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(Be){Ht(t,t.return,Be)}break;case 4:ei(i,t),hi(t);break;case 13:ei(i,t),hi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Ku=q())),l&4&&jh(t);break;case 22:if(ge=o!==null&&o.memoizedState!==null,t.mode&1?(pn=(J=pn)||ge,ei(i,t),pn=J):ei(i,t),hi(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!ge&&(t.mode&1)!==0)for(Ie=t,ge=t.child;ge!==null;){for(ye=Ie=ge;Ie!==null;){switch(me=Ie,Le=me.child,me.tag){case 0:case 11:case 14:case 15:yo(4,me,me.return);break;case 1:vs(me,me.return);var ke=me.stateNode;if(typeof ke.componentWillUnmount=="function"){l=me,o=me.return;try{i=l,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(Be){Ht(l,o,Be)}}break;case 5:vs(me,me.return);break;case 22:if(me.memoizedState!==null){Zh(ye);continue}}Le!==null?(Le.return=me,Ie=Le):Zh(ye)}ge=ge.sibling}e:for(ge=null,ye=t;;){if(ye.tag===5){if(ge===null){ge=ye;try{c=ye.stateNode,J?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=ye.stateNode,F=ye.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,D.style.display=Je("display",E))}catch(Be){Ht(t,t.return,Be)}}}else if(ye.tag===6){if(ge===null)try{ye.stateNode.nodeValue=J?"":ye.memoizedProps}catch(Be){Ht(t,t.return,Be)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ge===ye&&(ge=null),ye=ye.return}ge===ye&&(ge=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ei(i,t),hi(t),l&4&&jh(t);break;case 21:break;default:ei(i,t),hi(t)}}function hi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Wh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(qe(c,""),l.flags&=-33);var h=Xh(t);Yu(t,h,c);break;case 3:case 4:var E=l.stateNode.containerInfo,D=Xh(t);Xu(t,D,E);break;default:throw Error(n(161))}}catch(F){Ht(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function x_(t,i,o){Ie=t,Kh(t)}function Kh(t,i,o){for(var l=(t.mode&1)!==0;Ie!==null;){var c=Ie,h=c.child;if(c.tag===22&&l){var E=c.memoizedState!==null||La;if(!E){var D=c.alternate,F=D!==null&&D.memoizedState!==null||pn;D=La;var J=pn;if(La=E,(pn=F)&&!J)for(Ie=c;Ie!==null;)E=Ie,F=E.child,E.tag===22&&E.memoizedState!==null?Qh(c):F!==null?(F.return=E,Ie=F):Qh(c);for(;h!==null;)Ie=h,Kh(h),h=h.sibling;Ie=c,La=D,pn=J}$h(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Ie=h):$h(t)}}function $h(t){for(;Ie!==null;){var i=Ie;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:pn||Ua(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!pn)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Qn(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Zd(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Zd(i,E,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ge=J.memoizedState;if(ge!==null){var ye=ge.dehydrated;ye!==null&&Zs(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||i.flags&512&&Wu(i)}catch(me){Ht(i,i.return,me)}}if(i===t){Ie=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ie=o;break}Ie=i.return}}function Zh(t){for(;Ie!==null;){var i=Ie;if(i===t){Ie=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ie=o;break}Ie=i.return}}function Qh(t){for(;Ie!==null;){var i=Ie;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ua(4,i)}catch(F){Ht(i,o,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(F){Ht(i,c,F)}}var h=i.return;try{Wu(i)}catch(F){Ht(i,h,F)}break;case 5:var E=i.return;try{Wu(i)}catch(F){Ht(i,E,F)}}}catch(F){Ht(i,i.return,F)}if(i===t){Ie=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Ie=D;break}Ie=i.return}}var y_=Math.ceil,Ia=C.ReactCurrentDispatcher,ju=C.ReactCurrentOwner,Xn=C.ReactCurrentBatchConfig,yt=0,nn=null,Wt=null,ln=0,On=0,xs=Qi(0),Kt=0,So=null,br=0,Na=0,qu=0,Eo=null,Cn=null,Ku=0,ys=1/0,Ci=null,Fa=!1,$u=null,rr=null,Oa=!1,sr=null,ka=0,Mo=0,Zu=null,za=-1,Ba=0;function En(){return(yt&6)!==0?q():za!==-1?za:za=q()}function or(t){return(t.mode&1)===0?1:(yt&2)!==0&&ln!==0?ln&-ln:i_.transition!==null?(Ba===0&&(Ba=Ct()),Ba):(t=xt,t!==0||(t=window.event,t=t===void 0?16:ed(t.type)),t)}function ti(t,i,o,l){if(50<Mo)throw Mo=0,Zu=null,Error(n(185));Jt(t,o,l),((yt&2)===0||t!==nn)&&(t===nn&&((yt&2)===0&&(Na|=o),Kt===4&&ar(t,ln)),Pn(t,l),o===1&&yt===0&&(i.mode&1)===0&&(ys=q()+500,pa&&er()))}function Pn(t,i){var o=t.callbackNode;yn(t,i);var l=un(t,t===nn?ln:0);if(l===0)o!==null&&T(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&T(o),i===1)t.tag===0?n_(ep.bind(null,t)):zd(ep.bind(null,t)),Qg(function(){(yt&6)===0&&er()}),o=null;else{switch(ui(l)){case 1:o=Se;break;case 4:o=Re;break;case 16:o=De;break;case 536870912:o=tt;break;default:o=De}o=lp(o,Jh.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Jh(t,i){if(za=-1,Ba=0,(yt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=un(t,t===nn?ln:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Ha(t,l);else{i=l;var c=yt;yt|=2;var h=np();(nn!==t||ln!==i)&&(Ci=null,ys=q()+500,Lr(t,i));do try{M_();break}catch(D){tp(t,D)}while(!0);mu(),Ia.current=h,yt=c,Wt!==null?i=0:(nn=null,ln=0,i=Kt)}if(i!==0){if(i===2&&(c=yi(t),c!==0&&(l=c,i=Qu(t,c))),i===1)throw o=So,Lr(t,0),ar(t,l),Pn(t,q()),o;if(i===6)ar(t,l);else{if(c=t.current.alternate,(l&30)===0&&!S_(c)&&(i=Ha(t,l),i===2&&(h=yi(t),h!==0&&(l=h,i=Qu(t,h))),i===1))throw o=So,Lr(t,0),ar(t,l),Pn(t,q()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,Cn,Ci);break;case 3:if(ar(t,l),(l&130023424)===l&&(i=Ku+500-q(),10<i)){if(un(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){En(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=ru(Ur.bind(null,t,Cn,Ci),i);break}Ur(t,Cn,Ci);break;case 4:if(ar(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var E=31-st(l);h=1<<E,E=i[E],E>c&&(c=E),l&=~h}if(l=c,l=q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*y_(l/1960))-l,10<l){t.timeoutHandle=ru(Ur.bind(null,t,Cn,Ci),l);break}Ur(t,Cn,Ci);break;case 5:Ur(t,Cn,Ci);break;default:throw Error(n(329))}}}return Pn(t,q()),t.callbackNode===o?Jh.bind(null,t):null}function Qu(t,i){var o=Eo;return t.current.memoizedState.isDehydrated&&(Lr(t,i).flags|=256),t=Ha(t,i),t!==2&&(i=Cn,Cn=o,i!==null&&Ju(i)),t}function Ju(t){Cn===null?Cn=t:Cn.push.apply(Cn,t)}function S_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],h=c.getSnapshot;c=c.value;try{if(!$n(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(t,i){for(i&=~qu,i&=~Na,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-st(i),l=1<<o;t[o]=-1,i&=~l}}function ep(t){if((yt&6)!==0)throw Error(n(327));Ss();var i=un(t,0);if((i&1)===0)return Pn(t,q()),null;var o=Ha(t,i);if(t.tag!==0&&o===2){var l=yi(t);l!==0&&(i=l,o=Qu(t,l))}if(o===1)throw o=So,Lr(t,0),ar(t,i),Pn(t,q()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,Cn,Ci),Pn(t,q()),null}function ec(t,i){var o=yt;yt|=1;try{return t(i)}finally{yt=o,yt===0&&(ys=q()+500,pa&&er())}}function Dr(t){sr!==null&&sr.tag===0&&(yt&6)===0&&Ss();var i=yt;yt|=1;var o=Xn.transition,l=xt;try{if(Xn.transition=null,xt=1,t)return t()}finally{xt=l,Xn.transition=o,yt=i,(yt&6)===0&&er()}}function tc(){On=xs.current,It(xs)}function Lr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Zg(o)),Wt!==null)for(o=Wt.return;o!==null;){var l=o;switch(cu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&da();break;case 3:gs(),It(wn),It(fn),Mu();break;case 5:Su(l);break;case 4:gs();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:gu(l.type._context);break;case 22:case 23:tc()}o=o.return}if(nn=t,Wt=t=lr(t.current,null),ln=On=i,Kt=0,So=null,qu=Na=br=0,Cn=Eo=null,Rr!==null){for(i=0;i<Rr.length;i++)if(o=Rr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,h=o.pending;if(h!==null){var E=h.next;h.next=c,l.next=E}o.pending=l}Rr=null}return t}function tp(t,i){do{var o=Wt;try{if(mu(),Ta.current=Ca,wa){for(var l=kt.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}wa=!1}if(Pr=0,tn=qt=kt=null,mo=!1,go=0,ju.current=null,o===null||o.return===null){Kt=1,So=i,Wt=null;break}e:{var h=t,E=o.return,D=o,F=i;if(i=ln,D.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var J=F,ge=D,ye=ge.tag;if((ge.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=ge.alternate;me?(ge.updateQueue=me.updateQueue,ge.memoizedState=me.memoizedState,ge.lanes=me.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Le=Ah(E);if(Le!==null){Le.flags&=-257,Rh(Le,E,D,h,i),Le.mode&1&&wh(h,J,i),i=Le,F=J;var ke=i.updateQueue;if(ke===null){var Be=new Set;Be.add(F),i.updateQueue=Be}else ke.add(F);break e}else{if((i&1)===0){wh(h,J,i),nc();break e}F=Error(n(426))}}else if(Ft&&D.mode&1){var Vt=Ah(E);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Rh(Vt,E,D,h,i),hu(_s(F,D));break e}}h=F=_s(F,D),Kt!==4&&(Kt=2),Eo===null?Eo=[h]:Eo.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var j=Mh(h,F,i);$d(h,j);break e;case 1:D=F;var H=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(rr===null||!rr.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Me=Th(h,D,i);$d(h,Me);break e}}h=h.return}while(h!==null)}rp(o)}catch(We){i=We,Wt===o&&o!==null&&(Wt=o=o.return);continue}break}while(!0)}function np(){var t=Ia.current;return Ia.current=Ca,t===null?Ca:t}function nc(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||(br&268435455)===0&&(Na&268435455)===0||ar(nn,ln)}function Ha(t,i){var o=yt;yt|=2;var l=np();(nn!==t||ln!==i)&&(Ci=null,Lr(t,i));do try{E_();break}catch(c){tp(t,c)}while(!0);if(mu(),yt=o,Ia.current=l,Wt!==null)throw Error(n(261));return nn=null,ln=0,Kt}function E_(){for(;Wt!==null;)ip(Wt)}function M_(){for(;Wt!==null&&!W();)ip(Wt)}function ip(t){var i=ap(t.alternate,t,On);t.memoizedProps=t.pendingProps,i===null?rp(t):Wt=i,ju.current=null}function rp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=m_(o,i,On),o!==null){Wt=o;return}}else{if(o=g_(o,i),o!==null){o.flags&=32767,Wt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Ur(t,i,o){var l=xt,c=Xn.transition;try{Xn.transition=null,xt=1,T_(t,i,o,l)}finally{Xn.transition=c,xt=l}return null}function T_(t,i,o,l){do Ss();while(sr!==null);if((yt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(on(t,h),t===nn&&(Wt=nn=null,ln=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Oa||(Oa=!0,lp(De,function(){return Ss(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Xn.transition,Xn.transition=null;var E=xt;xt=1;var D=yt;yt|=4,ju.current=null,v_(t,o),qh(o,t),Wg(nu),Qo=!!tu,nu=tu=null,t.current=o,x_(o),ee(),yt=D,xt=E,Xn.transition=h}else t.current=o;if(Oa&&(Oa=!1,sr=t,ka=c),h=t.pendingLanes,h===0&&(rr=null),gt(o.stateNode),Pn(t,q()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(Fa)throw Fa=!1,t=$u,$u=null,t;return(ka&1)!==0&&t.tag!==0&&Ss(),h=t.pendingLanes,(h&1)!==0?t===Zu?Mo++:(Mo=0,Zu=t):Mo=0,er(),null}function Ss(){if(sr!==null){var t=ui(ka),i=Xn.transition,o=xt;try{if(Xn.transition=null,xt=16>t?16:t,sr===null)var l=!1;else{if(t=sr,sr=null,ka=0,(yt&6)!==0)throw Error(n(331));var c=yt;for(yt|=4,Ie=t.current;Ie!==null;){var h=Ie,E=h.child;if((Ie.flags&16)!==0){var D=h.deletions;if(D!==null){for(var F=0;F<D.length;F++){var J=D[F];for(Ie=J;Ie!==null;){var ge=Ie;switch(ge.tag){case 0:case 11:case 15:yo(8,ge,h)}var ye=ge.child;if(ye!==null)ye.return=ge,Ie=ye;else for(;Ie!==null;){ge=Ie;var me=ge.sibling,Le=ge.return;if(Gh(ge),ge===J){Ie=null;break}if(me!==null){me.return=Le,Ie=me;break}Ie=Le}}}var ke=h.alternate;if(ke!==null){var Be=ke.child;if(Be!==null){ke.child=null;do{var Vt=Be.sibling;Be.sibling=null,Be=Vt}while(Be!==null)}}Ie=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,Ie=E;else e:for(;Ie!==null;){if(h=Ie,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:yo(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,Ie=j;break e}Ie=h.return}}var H=t.current;for(Ie=H;Ie!==null;){E=Ie;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Ie=K;else e:for(E=H;Ie!==null;){if(D=Ie,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ua(9,D)}}catch(We){Ht(D,D.return,We)}if(D===E){Ie=null;break e}var Me=D.sibling;if(Me!==null){Me.return=D.return,Ie=Me;break e}Ie=D.return}}if(yt=c,er(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Qe,t)}catch{}l=!0}return l}finally{xt=o,Xn.transition=i}}return!1}function sp(t,i,o){i=_s(o,i),i=Mh(t,i,1),t=nr(t,i,1),i=En(),t!==null&&(Jt(t,1,i),Pn(t,i))}function Ht(t,i,o){if(t.tag===3)sp(t,t,o);else for(;i!==null;){if(i.tag===3){sp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){t=_s(o,t),t=Th(i,t,1),i=nr(i,t,1),t=En(),i!==null&&(Jt(i,1,t),Pn(i,t));break}}i=i.return}}function w_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=En(),t.pingedLanes|=t.suspendedLanes&o,nn===t&&(ln&o)===o&&(Kt===4||Kt===3&&(ln&130023424)===ln&&500>q()-Ku?Lr(t,0):qu|=o),Pn(t,i)}function op(t,i){i===0&&((t.mode&1)===0?i=1:(i=Bt,Bt<<=1,(Bt&130023424)===0&&(Bt=4194304)));var o=En();t=wi(t,i),t!==null&&(Jt(t,i,o),Pn(t,o))}function A_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),op(t,o)}function R_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),op(t,o)}var ap;ap=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||wn.current)Rn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Rn=!1,p_(t,i,o);Rn=(t.flags&131072)!==0}else Rn=!1,Ft&&(i.flags&1048576)!==0&&Bd(i,ga,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Da(t,i),t=i.pendingProps;var c=us(i,fn.current);ms(i,o),c=Au(null,i,l,t,c,o);var h=Ru();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(l)?(h=!0,ha(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,xu(i),c.updater=Pa,i.stateNode=c,c._reactInternals=i,Uu(i,l,t,o),i=Ou(null,i,l,!0,h,o)):(i.tag=0,Ft&&h&&uu(i),Sn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(Da(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=P_(l),t=Qn(l,t),c){case 0:i=Fu(null,i,l,t,o);break e;case 1:i=Uh(null,i,l,t,o);break e;case 11:i=Ch(null,i,l,t,o);break e;case 14:i=Ph(null,i,l,Qn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),Fu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),Uh(t,i,l,c,o);case 3:e:{if(Ih(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Kd(t,i),Ea(i,l,null,o);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=_s(Error(n(423)),i),i=Nh(t,i,l,o,c);break e}else if(l!==c){c=_s(Error(n(424)),i),i=Nh(t,i,l,o,c);break e}else for(Fn=Zi(i.stateNode.containerInfo.firstChild),Nn=i,Ft=!0,Zn=null,o=jd(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ds(),l===c){i=Ri(t,i,o);break e}Sn(t,i,l,o)}i=i.child}return i;case 5:return Qd(i),t===null&&du(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,E=c.children,iu(l,c)?E=null:h!==null&&iu(l,h)&&(i.flags|=32),Lh(t,i),Sn(t,i,E,o),i.child;case 6:return t===null&&du(i),null;case 13:return Fh(t,i,o);case 4:return yu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):Sn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),Ch(t,i,l,c,o);case 7:return Sn(t,i,i.pendingProps,o),i.child;case 8:return Sn(t,i,i.pendingProps.children,o),i.child;case 12:return Sn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,E=c.value,Dt(xa,l._currentValue),l._currentValue=E,h!==null)if($n(h.value,E)){if(h.children===c.children&&!wn.current){i=Ri(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){E=h.child;for(var F=D.firstContext;F!==null;){if(F.context===l){if(h.tag===1){F=Ai(-1,o&-o),F.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var ge=J.pending;ge===null?F.next=F:(F.next=ge.next,ge.next=F),J.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),_u(h.return,o,i),D.lanes|=o;break}F=F.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=o,D=E.alternate,D!==null&&(D.lanes|=o),_u(E,o,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}Sn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,ms(i,o),c=Gn(c),l=l(c),i.flags|=1,Sn(t,i,l,o),i.child;case 14:return l=i.type,c=Qn(l,i.pendingProps),c=Qn(l.type,c),Ph(t,i,l,c,o);case 15:return bh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Qn(l,c),Da(t,i),i.tag=1,An(l)?(t=!0,ha(i)):t=!1,ms(i,o),Sh(i,l,c),Uu(i,l,c,o),Ou(null,i,l,!0,t,o);case 19:return kh(t,i,o);case 22:return Dh(t,i,o)}throw Error(n(156,i.tag))};function lp(t,i){return Ko(t,i)}function C_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,l){return new C_(t,i,o,l)}function ic(t){return t=t.prototype,!(!t||!t.isReactComponent)}function P_(t){if(typeof t=="function")return ic(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===pe)return 14}return 2}function lr(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Va(t,i,o,l,c,h){var E=2;if(l=t,typeof t=="function")ic(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case N:return Ir(o.children,c,h,i);case Y:E=8,c|=8;break;case P:return t=Yn(12,o,i,c|2),t.elementType=P,t.lanes=h,t;case te:return t=Yn(13,o,i,c),t.elementType=te,t.lanes=h,t;case ce:return t=Yn(19,o,i,c),t.elementType=ce,t.lanes=h,t;case le:return Ga(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:E=10;break e;case B:E=9;break e;case oe:E=11;break e;case pe:E=14;break e;case se:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(E,o,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ir(t,i,o,l){return t=Yn(7,t,l,i),t.lanes=o,t}function Ga(t,i,o,l){return t=Yn(22,t,l,i),t.elementType=le,t.lanes=o,t.stateNode={isHidden:!1},t}function rc(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function sc(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function b_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cn(0),this.expirationTimes=cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function oc(t,i,o,l,c,h,E,D,F){return t=new b_(t,i,o,D,F),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Yn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(h),t}function D_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function up(t){if(!t)return Ji;t=t._reactInternals;e:{if(li(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(An(o))return Od(t,o,i)}return i}function cp(t,i,o,l,c,h,E,D,F){return t=oc(o,l,!0,t,c,h,E,D,F),t.context=up(null),o=t.current,l=En(),c=or(o),h=Ai(l,c),h.callback=i??null,nr(o,h,c),t.current.lanes=c,Jt(t,c,l),Pn(t,l),t}function Wa(t,i,o,l){var c=i.current,h=En(),E=or(c);return o=up(o),i.context===null?i.context=o:i.pendingContext=o,i=Ai(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=nr(c,i,E),t!==null&&(ti(t,c,E,h),Sa(t,c,E)),E}function Xa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function ac(t,i){fp(t,i),(t=t.alternate)&&fp(t,i)}function L_(){return null}var dp=typeof reportError=="function"?reportError:function(t){console.error(t)};function lc(t){this._internalRoot=t}Ya.prototype.render=lc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Wa(t,i,null,null)},Ya.prototype.unmount=lc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){Wa(null,t,null,null)}),i[Si]=null}};function Ya(t){this._internalRoot=t}Ya.prototype.unstable_scheduleHydration=function(t){if(t){var i=Kf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<qi.length&&i!==0&&i<qi[o].priority;o++);qi.splice(o,0,t),o===0&&Qf(t)}};function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hp(){}function U_(t,i,o,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var J=Xa(E);h.call(J)}}var E=cp(i,l,t,0,null,!1,!1,"",hp);return t._reactRootContainer=E,t[Si]=E.current,oo(t.nodeType===8?t.parentNode:t),Dr(),E}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var J=Xa(F);D.call(J)}}var F=oc(t,0,!1,null,null,!1,!1,"",hp);return t._reactRootContainer=F,t[Si]=F.current,oo(t.nodeType===8?t.parentNode:t),Dr(function(){Wa(i,F,o,l)}),F}function qa(t,i,o,l,c){var h=o._reactRootContainer;if(h){var E=h;if(typeof c=="function"){var D=c;c=function(){var F=Xa(E);D.call(F)}}Wa(i,E,t,c)}else E=U_(o,i,t,c,l);return Xa(E)}jf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=mt(i.pendingLanes);o!==0&&(en(i,o|1),Pn(i,q()),(yt&6)===0&&(ys=q()+500,er()))}break;case 13:Dr(function(){var l=wi(t,1);if(l!==null){var c=En();ti(l,t,1,c)}}),ac(t,1)}},Il=function(t){if(t.tag===13){var i=wi(t,134217728);if(i!==null){var o=En();ti(i,t,134217728,o)}ac(t,134217728)}},qf=function(t){if(t.tag===13){var i=or(t),o=wi(t,i);if(o!==null){var l=En();ti(o,t,i,l)}ac(t,i)}},Kf=function(){return xt},$f=function(t,i){var o=xt;try{return xt=t,i()}finally{xt=o}},Ae=function(t,i,o){switch(i){case"input":if(ct(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=fa(l);if(!c)throw Error(n(90));bt(l),ct(l,c)}}}break;case"textarea":fe(t,o);break;case"select":i=o.value,i!=null&&b(t,!!o.multiple,i,!1)}},Lt=ec,jt=Dr;var I_={usingClientEntryPoint:!1,Events:[uo,as,fa,Pe,rt,ec]},To={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N_={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jo(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||L_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Qe=Ka.inject(N_),ze=Ka}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I_,bn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uc(i))throw Error(n(200));return D_(t,i,null,o)},bn.createRoot=function(t,i){if(!uc(t))throw Error(n(299));var o=!1,l="",c=dp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=oc(t,1,!1,null,null,o,!1,l,c),t[Si]=i.current,oo(t.nodeType===8?t.parentNode:t),new lc(i)},bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=jo(i),t=t===null?null:t.stateNode,t},bn.flushSync=function(t){return Dr(t)},bn.hydrate=function(t,i,o){if(!ja(i))throw Error(n(200));return qa(null,t,i,!0,o)},bn.hydrateRoot=function(t,i,o){if(!uc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,h="",E=dp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=cp(i,null,t,1,o??null,c,!1,h,E),t[Si]=i.current,oo(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new Ya(i)},bn.render=function(t,i,o){if(!ja(i))throw Error(n(200));return qa(null,t,i,!1,o)},bn.unmountComponentAtNode=function(t){if(!ja(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){qa(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},bn.unstable_batchedUpdates=ec,bn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!ja(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return qa(t,i,o,!1,l)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Sp;function W_(){if(Sp)return dc.exports;Sp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),dc.exports=G_(),dc.exports}var Ep;function X_(){if(Ep)return $a;Ep=1;var s=W_();return $a.createRoot=s.createRoot,$a.hydrateRoot=s.hydrateRoot,$a}var Y_=X_();const j_=Am(Y_);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="176",ks={ROTATE:0,DOLLY:1,PAN:2},Fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},q_=0,Mp=1,K_=2,Rm=1,$_=2,Ii=3,yr=0,Un=1,Ni=2,vr=0,zs=1,Tp=2,wp=3,Ap=4,Z_=5,Vr=100,Q_=101,J_=102,ev=103,tv=104,nv=200,iv=201,rv=202,sv=203,Yc=204,jc=205,ov=206,av=207,lv=208,uv=209,cv=210,fv=211,dv=212,hv=213,pv=214,qc=0,Kc=1,$c=2,Hs=3,Zc=4,Qc=5,Jc=6,ef=7,Cm=0,mv=1,gv=2,xr=0,_v=1,vv=2,xv=3,yv=4,Sv=5,Ev=6,Mv=7,Pm=300,Vs=301,Gs=302,tf=303,nf=304,bl=306,rf=1e3,Wr=1001,sf=1002,ai=1003,Tv=1004,Za=1005,mi=1006,mc=1007,Xr=1008,zi=1009,bm=1010,Dm=1011,Uo=1012,Ff=1013,jr=1014,Fi=1015,ko=1016,Of=1017,kf=1018,Io=1020,Lm=35902,Um=1021,Im=1022,oi=1023,No=1026,Fo=1027,Nm=1028,zf=1029,Fm=1030,Bf=1031,Hf=1033,yl=33776,Sl=33777,El=33778,Ml=33779,of=35840,af=35841,lf=35842,uf=35843,cf=36196,ff=37492,df=37496,hf=37808,pf=37809,mf=37810,gf=37811,_f=37812,vf=37813,xf=37814,yf=37815,Sf=37816,Ef=37817,Mf=37818,Tf=37819,wf=37820,Af=37821,Tl=36492,Rf=36494,Cf=36495,Om=36283,Pf=36284,bf=36285,Df=36286,wv=3200,Av=3201,Rv=0,Cv=1,_r="",qn="srgb",Ws="srgb-linear",Cl="linear",wt="srgb",Es=7680,Rp=519,Pv=512,bv=513,Dv=514,km=515,Lv=516,Uv=517,Iv=518,Nv=519,Cp=35044,Pp="300 es",Oi=2e3,Pl=2001;class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wl=Math.PI/180,Lf=180/Math.PI;function zo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function ht(s,e,n){return Math.max(e,Math.min(n,s))}function Fv(s,e){return(s%e+e)%e}function gc(s,e,n){return(1-n)*s+n*e}function Ao(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ov={DEG2RAD:wl};class ut{constructor(e=0,n=0){ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ht(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(ht(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,f,d,p,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=u,_[5]=p,_[6]=r,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],w=r[8],R=a[0],y=a[3],g=a[6],I=a[1],L=a[4],C=a[7],G=a[2],z=a[5],N=a[8];return u[0]=f*R+d*I+p*G,u[3]=f*y+d*L+p*z,u[6]=f*g+d*C+p*N,u[1]=m*R+_*I+v*G,u[4]=m*y+_*L+v*z,u[7]=m*g+_*C+v*N,u[2]=x*R+S*I+w*G,u[5]=x*y+S*L+w*z,u[8]=x*g+S*C+w*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return n*f*_-n*d*m-r*u*_+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=_*f-d*m,x=d*p-_*u,S=m*u-f*p,w=n*v+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(a*m-_*r)*R,e[2]=(d*r-a*f)*R,e[3]=x*R,e[4]=(_*n-a*p)*R,e[5]=(a*u-d*n)*R,e[6]=S*R,e[7]=(r*p-m*n)*R,e[8]=(f*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(_c.makeScale(e,n)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,n){return this.premultiply(_c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new ot;function zm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Oo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kv(){const s=Oo("canvas");return s.style.display="block",s}const bp={};function Al(s){s in bp||(bp[s]=!0,console.warn(s))}function zv(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function Bv(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dp=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vv(){const s={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(a,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===wt&&(a.r=ki(a.r),a.g=ki(a.g),a.b=ki(a.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===wt&&(a.r=Bs(a.r),a.g=Bs(a.g),a.b=Bs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_r?Cl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,f){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ws]:{primaries:e,whitePoint:r,transfer:Cl,toXYZ:Dp,fromXYZ:Lp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:e,whitePoint:r,transfer:wt,toXYZ:Dp,fromXYZ:Lp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),s}const Et=Vv();function ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ms;class Gv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ms===void 0&&(Ms=Oo("canvas")),Ms.width=e.width,Ms.height=e.height;const a=Ms.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ms}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oo("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=ki(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ki(n[r]/255)*255):n[r]=ki(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wv=0;class Vf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(vc(a[f].image)):u.push(vc(a[f]))}else u=vc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xv=0;class _n extends $r{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,r=Wr,a=Wr,u=mi,f=Xr,d=oi,p=zi,m=_n.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=zo(),this.name="",this.source=new Vf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rf:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rf:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Pm;_n.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,r=0,a=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],_=p[4],v=p[8],x=p[1],S=p[5],w=p[9],R=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-R)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+R)<.1&&Math.abs(w+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,C=(S+1)/2,G=(g+1)/2,z=(_+x)/4,N=(v+R)/4,Y=(w+y)/4;return L>C&&L>G?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=z/r,u=N/r):C>G?C<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(C),r=z/a,u=Y/a):G<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(G),r=N/u,a=Y/u),this.set(r,a,u,n),this}let I=Math.sqrt((y-w)*(y-w)+(v-R)*(v-R)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(y-w)/I,this.y=(v-R)/I,this.z=(x-_)/I,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this.w=ht(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this.w=ht(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ht(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yv extends $r{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth?r.depth:1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const a={width:e,height:n,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new _n(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Vf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends Yv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Bm extends _n{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jv extends _n{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ai,this.minFilter=ai,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[f+0],S=u[f+1],w=u[f+2],R=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=R;return}if(v!==R||p!==x||m!==S||_!==w){let y=1-d;const g=p*x+m*S+_*w+v*R,I=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const G=Math.sqrt(L),z=Math.atan2(G,g*I);y=Math.sin(y*z)/G,d=Math.sin(d*z)/G}const C=d*I;if(p=p*y+x*C,m=m*y+S*C,_=_*y+w*C,v=v*y+R*C,y===1-d){const G=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=G,m*=G,_*=G,v*=G}}e[n]=p,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],_=r[a+3],v=u[f],x=u[f+1],S=u[f+2],w=u[f+3];return e[n]=d*w+_*v+p*S-m*x,e[n+1]=p*w+_*x+m*v-d*S,e[n+2]=m*w+_*S+d*x-p*v,e[n+3]=_*w-d*v-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(a/2),v=d(u/2),x=p(r/2),S=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"YXZ":this._x=x*_*v+m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"ZXY":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v-x*S*w;break;case"ZYX":this._x=x*_*v-m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v+x*S*w;break;case"YZX":this._x=x*_*v+m*S*w,this._y=m*S*v+x*_*w,this._z=m*_*w-x*S*v,this._w=m*_*v-x*S*w;break;case"XZY":this._x=x*_*v-m*S*w,this._y=m*S*v-x*_*w,this._z=m*_*w+x*S*v,this._w=m*_*v+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],_=n[6],v=n[10],x=r+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-m)*S,this._z=(f-a)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(_-p)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(u+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(u-m)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(f-a)/S,this._x=(u+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,_=n._w;return this._x=r*_+f*d+a*m-u*p,this._y=a*_+f*p+u*d-r*m,this._z=u*_+f*m+r*p-a*d,this._w=f*_-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Up.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Up.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),_=2*(d*n-u*a),v=2*(u*r-f*n);return this.x=n+p*m+f*v-d*_,this.y=r+p*_+d*m-u*v,this.z=a+p*v+u*_-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ht(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(ht(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new Z,Up=new Kr;class Bo{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ni):ni.fromBufferAttribute(u,f),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Qa.copy(r.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Ja.subVectors(this.max,Ro),Ts.subVectors(e.a,Ro),ws.subVectors(e.b,Ro),As.subVectors(e.c,Ro),cr.subVectors(ws,Ts),fr.subVectors(As,ws),Nr.subVectors(Ts,As);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Nr.z,Nr.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Nr.z,0,-Nr.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Nr.y,Nr.x,0];return!yc(n,Ts,ws,As,Ja)||(n=[1,0,0,0,1,0,0,0,1],!yc(n,Ts,ws,As,Ja))?!1:(el.crossVectors(cr,fr),n=[el.x,el.y,el.z],yc(n,Ts,ws,As,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ni=new Z,Qa=new Bo,Ts=new Z,ws=new Z,As=new Z,cr=new Z,fr=new Z,Nr=new Z,Ro=new Z,Ja=new Z,el=new Z,Fr=new Z;function yc(s,e,n,r,a){for(let u=0,f=s.length-3;u<=f;u+=3){Fr.fromArray(s,u);const d=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),p=e.dot(Fr),m=n.dot(Fr),_=r.dot(Fr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const qv=new Bo,Co=new Z,Sc=new Z;class Gf{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):qv.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const n=Co.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Co,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Sc)),this.expandByPoint(Co.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new Z,Ec=new Z,tl=new Z,dr=new Z,Mc=new Z,nl=new Z,Tc=new Z;class Hm{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ec.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Ec);const u=e.distanceTo(n)*.5,f=-this.direction.dot(tl),d=dr.dot(this.direction),p=-dr.dot(tl),m=dr.lengthSq(),_=Math.abs(1-f*f);let v,x,S,w;if(_>0)if(v=f*p-d,x=f*d-p,w=u*_,v>=0)if(x>=-w)if(x<=w){const R=1/_;v*=R,x*=R,S=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x<=-w?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m):x<=w?(v=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+m):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+x*(x+2*p)+m);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Ec).addScaledVector(tl,x),S}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const r=bi.dot(this.direction),a=bi.dot(bi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,r,a,u){Mc.subVectors(n,e),nl.subVectors(r,e),Tc.crossVectors(Mc,nl);let f=this.direction.dot(Tc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;dr.subVectors(this.origin,e);const p=d*this.direction.dot(nl.crossVectors(dr,nl));if(p<0)return null;const m=d*this.direction.dot(Mc.cross(dr));if(m<0||p+m>f)return null;const _=-d*dr.dot(Tc);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,n,r,a,u,f,d,p,m,_,v,x,S,w,R,y){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,_,v,x,S,w,R,y)}set(e,n,r,a,u,f,d,p,m,_,v,x,S,w,R,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=w,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Rs.setFromMatrixColumn(e,0).length(),u=1/Rs.setFromMatrixColumn(e,1).length(),f=1/Rs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*_,S=f*v,w=d*_,R=d*v;n[0]=p*_,n[4]=-p*v,n[8]=m,n[1]=S+w*m,n[5]=x-R*m,n[9]=-d*p,n[2]=R-x*m,n[6]=w+S*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*_,S=p*v,w=m*_,R=m*v;n[0]=x+R*d,n[4]=w*d-S,n[8]=f*m,n[1]=f*v,n[5]=f*_,n[9]=-d,n[2]=S*d-w,n[6]=R+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*_,S=p*v,w=m*_,R=m*v;n[0]=x-R*d,n[4]=-f*v,n[8]=w+S*d,n[1]=S+w*d,n[5]=f*_,n[9]=R-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*_,S=f*v,w=d*_,R=d*v;n[0]=p*_,n[4]=w*m-S,n[8]=x*m+R,n[1]=p*v,n[5]=R*m+x,n[9]=S*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,S=f*m,w=d*p,R=d*m;n[0]=p*_,n[4]=R-x*v,n[8]=w*v+S,n[1]=v,n[5]=f*_,n[9]=-d*_,n[2]=-m*_,n[6]=S*v+w,n[10]=x-R*v}else if(e.order==="XZY"){const x=f*p,S=f*m,w=d*p,R=d*m;n[0]=p*_,n[4]=-v,n[8]=m*_,n[1]=x*v+R,n[5]=f*_,n[9]=S*v-w,n[2]=w*v-S,n[6]=d*_,n[10]=R*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kv,e,$v)}lookAt(e,n,r){const a=this.elements;return kn.subVectors(e,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),hr.crossVectors(r,kn),hr.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),hr.crossVectors(r,kn)),hr.normalize(),il.crossVectors(kn,hr),a[0]=hr.x,a[4]=il.x,a[8]=kn.x,a[1]=hr.y,a[5]=il.y,a[9]=kn.y,a[2]=hr.z,a[6]=il.z,a[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],w=r[2],R=r[6],y=r[10],g=r[14],I=r[3],L=r[7],C=r[11],G=r[15],z=a[0],N=a[4],Y=a[8],P=a[12],A=a[1],B=a[5],oe=a[9],te=a[13],ce=a[2],pe=a[6],se=a[10],le=a[14],k=a[3],ae=a[7],re=a[11],U=a[15];return u[0]=f*z+d*A+p*ce+m*k,u[4]=f*N+d*B+p*pe+m*ae,u[8]=f*Y+d*oe+p*se+m*re,u[12]=f*P+d*te+p*le+m*U,u[1]=_*z+v*A+x*ce+S*k,u[5]=_*N+v*B+x*pe+S*ae,u[9]=_*Y+v*oe+x*se+S*re,u[13]=_*P+v*te+x*le+S*U,u[2]=w*z+R*A+y*ce+g*k,u[6]=w*N+R*B+y*pe+g*ae,u[10]=w*Y+R*oe+y*se+g*re,u[14]=w*P+R*te+y*le+g*U,u[3]=I*z+L*A+C*ce+G*k,u[7]=I*N+L*B+C*pe+G*ae,u[11]=I*Y+L*oe+C*se+G*re,u[15]=I*P+L*te+C*le+G*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],w=e[3],R=e[7],y=e[11],g=e[15];return w*(+u*p*v-a*m*v-u*d*x+r*m*x+a*d*S-r*p*S)+R*(+n*p*S-n*m*x+u*f*x-a*f*S+a*m*_-u*p*_)+y*(+n*m*v-n*d*S-u*f*v+r*f*S+u*d*_-r*m*_)+g*(-a*d*_-n*p*v+n*d*x+a*f*v-r*f*x+r*p*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],w=e[12],R=e[13],y=e[14],g=e[15],I=v*y*m-R*x*m+R*p*S-d*y*S-v*p*g+d*x*g,L=w*x*m-_*y*m-w*p*S+f*y*S+_*p*g-f*x*g,C=_*R*m-w*v*m+w*d*S-f*R*S-_*d*g+f*v*g,G=w*v*p-_*R*p-w*d*x+f*R*x+_*d*y-f*v*y,z=n*I+r*L+a*C+u*G;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return e[0]=I*N,e[1]=(R*x*u-v*y*u-R*a*S+r*y*S+v*a*g-r*x*g)*N,e[2]=(d*y*u-R*p*u+R*a*m-r*y*m-d*a*g+r*p*g)*N,e[3]=(v*p*u-d*x*u-v*a*m+r*x*m+d*a*S-r*p*S)*N,e[4]=L*N,e[5]=(_*y*u-w*x*u+w*a*S-n*y*S-_*a*g+n*x*g)*N,e[6]=(w*p*u-f*y*u-w*a*m+n*y*m+f*a*g-n*p*g)*N,e[7]=(f*x*u-_*p*u+_*a*m-n*x*m-f*a*S+n*p*S)*N,e[8]=C*N,e[9]=(w*v*u-_*R*u-w*r*S+n*R*S+_*r*g-n*v*g)*N,e[10]=(f*R*u-w*d*u+w*r*m-n*R*m-f*r*g+n*d*g)*N,e[11]=(_*d*u-f*v*u-_*r*m+n*v*m+f*r*S-n*d*S)*N,e[12]=G*N,e[13]=(_*R*a-w*v*a+w*r*x-n*R*x-_*r*y+n*v*y)*N,e[14]=(w*d*a-f*R*a-w*r*p+n*R*p+f*r*y-n*d*y)*N,e[15]=(f*v*a-_*d*a+_*r*p-n*v*p-f*r*x+n*d*x)*N,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,_=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,_*d+r,_*p-a*f,0,m*p-a*d,_*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,_=f+f,v=d+d,x=u*m,S=u*_,w=u*v,R=f*_,y=f*v,g=d*v,I=p*m,L=p*_,C=p*v,G=r.x,z=r.y,N=r.z;return a[0]=(1-(R+g))*G,a[1]=(S+C)*G,a[2]=(w-L)*G,a[3]=0,a[4]=(S-C)*z,a[5]=(1-(x+g))*z,a[6]=(y+I)*z,a[7]=0,a[8]=(w+L)*N,a[9]=(y-I)*N,a[10]=(1-(x+R))*N,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=Rs.set(a[0],a[1],a[2]).length();const f=Rs.set(a[4],a[5],a[6]).length(),d=Rs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ii.copy(this);const m=1/u,_=1/f,v=1/d;return ii.elements[0]*=m,ii.elements[1]*=m,ii.elements[2]*=m,ii.elements[4]*=_,ii.elements[5]*=_,ii.elements[6]*=_,ii.elements[8]*=v,ii.elements[9]*=v,ii.elements[10]*=v,n.setFromRotationMatrix(ii),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Oi){const p=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(d===Oi)S=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Pl)S=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Oi){const p=this.elements,m=1/(n-e),_=1/(r-a),v=1/(f-u),x=(n+e)*m,S=(r+a)*_;let w,R;if(d===Oi)w=(f+u)*v,R=-2*v;else if(d===Pl)w=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Rs=new Z,ii=new Yt,Kv=new Z(0,0,0),$v=new Z(1,1,1),hr=new Z,il=new Z,kn=new Z,Ip=new Yt,Np=new Kr;class Bi{constructor(e=0,n=0,r=0,a=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(ht(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-ht(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(ht(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Np.setFromEuler(this),this.setFromQuaternion(Np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Vm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zv=0;const Fp=new Z,Cs=new Kr,Di=new Yt,rl=new Z,Po=new Z,Qv=new Z,Jv=new Kr,Op=new Z(1,0,0),kp=new Z(0,1,0),zp=new Z(0,0,1),Bp={type:"added"},e0={type:"removed"},Ps={type:"childadded",child:null},wc={type:"childremoved",child:null};class Bn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new Z,n=new Bi,r=new Kr,a=new Z(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ot}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,n){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?rl.copy(e):rl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(Po,rl,this.up):Di.lookAt(rl,Po,this.up),this.quaternion.setFromRotationMatrix(Di),a&&(Di.extractRotation(a.matrixWorld),Cs.setFromRotationMatrix(Di),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(e0),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bp),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,Qv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),_=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Bn.DEFAULT_UP=new Z(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new Z,Li=new Z,Ac=new Z,Ui=new Z,bs=new Z,Ds=new Z,Hp=new Z,Rc=new Z,Cc=new Z,Pc=new Z,bc=new Gt,Dc=new Gt,Lc=new Gt;class si{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ri.subVectors(e,n),a.cross(ri);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ri.subVectors(a,n),Li.subVectors(r,n),Ac.subVectors(e,n);const f=ri.dot(ri),d=ri.dot(Li),p=ri.dot(Ac),m=Li.dot(Li),_=Li.dot(Ac),v=f*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(m*p-d*_)*x,w=(f*_-d*p)*x;return u.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Ui)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ui.x),p.addScaledVector(f,Ui.y),p.addScaledVector(d,Ui.z),p)}static getInterpolatedAttribute(e,n,r,a,u,f){return bc.setScalar(0),Dc.setScalar(0),Lc.setScalar(0),bc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,r),Lc.fromBufferAttribute(e,a),f.setScalar(0),f.addScaledVector(bc,u.x),f.addScaledVector(Dc,u.y),f.addScaledVector(Lc,u.z),f}static isFrontFacing(e,n,r,a){return ri.subVectors(r,n),Li.subVectors(e,n),ri.cross(Li).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ri.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return si.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;bs.subVectors(a,r),Ds.subVectors(u,r),Rc.subVectors(e,r);const p=bs.dot(Rc),m=Ds.dot(Rc);if(p<=0&&m<=0)return n.copy(r);Cc.subVectors(e,a);const _=bs.dot(Cc),v=Ds.dot(Cc);if(_>=0&&v<=_)return n.copy(a);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),n.copy(r).addScaledVector(bs,f);Pc.subVectors(e,u);const S=bs.dot(Pc),w=Ds.dot(Pc);if(w>=0&&S<=w)return n.copy(u);const R=S*m-p*w;if(R<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Ds,d);const y=_*w-S*v;if(y<=0&&v-_>=0&&S-w>=0)return Hp.subVectors(u,a),d=(v-_)/(v-_+(S-w)),n.copy(a).addScaledVector(Hp,d);const g=1/(y+R+x);return f=R*g,d=x*g,n.copy(r).addScaledVector(bs,f).addScaledVector(Ds,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Uc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=Fv(e,1),n=ht(n,0,1),r=ht(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Uc(f,u,e+1/3),this.g=Uc(f,u,e),this.b=Uc(f,u,e-1/3)}return Et.toWorkingColorSpace(this,a),this}setStyle(e,n=qn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const r=Gm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Et.fromWorkingColorSpace(gn.copy(this),e),Math.round(ht(gn.r*255,0,255))*65536+Math.round(ht(gn.g*255,0,255))*256+Math.round(ht(gn.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(gn.copy(this),n);const r=gn.r,a=gn.g,u=gn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=_<=.5?v/(f+d):v/(2-f-d),f){case r:p=(a-u)/v+(a<u?6:0);break;case a:p=(u-r)/v+2;break;case u:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=qn){Et.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,a=gn.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(sl);const r=gc(pr.h,sl.h,n),a=gc(pr.s,sl.s,n),u=gc(pr.l,sl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Rt;Rt.NAMES=Gm;let t0=0;class Dl extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=zs,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=jc,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(r.blending=this.blending),this.side!==yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yc&&(r.blendSrc=this.blendSrc),this.blendDst!==jc&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wm extends Dl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new Z,ol=new ut;let n0=0;class _i{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Cp,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Dn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array),a=Dn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Dn(n,this.array),r=Dn(r,this.array),a=Dn(a,this.array),u=Dn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cp&&(e.usage=this.usage),e}}class Xm extends _i{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ym extends _i{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Yr extends _i{constructor(e,n,r){super(new Float32Array(e),n,r)}}let i0=0;const jn=new Yt,Ic=new Bn,Ls=new Z,zn=new Bo,bo=new Bo,sn=new Z;class Zr extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zm(e)?Ym:Xm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const f=e[a];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Yr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];zn.setFromBufferAttribute(u),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(sn.addVectors(zn.min,bo.min),zn.expandByPoint(sn),sn.addVectors(zn.max,bo.max),zn.expandByPoint(sn)):(zn.expandByPoint(bo.min),zn.expandByPoint(bo.max))}zn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)sn.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)sn.fromBufferAttribute(d,m),p&&(Ls.fromBufferAttribute(e,m),sn.add(Ls)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Y=0;Y<r.count;Y++)d[Y]=new Z,p[Y]=new Z;const m=new Z,_=new Z,v=new Z,x=new ut,S=new ut,w=new ut,R=new Z,y=new Z;function g(Y,P,A){m.fromBufferAttribute(r,Y),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(u,Y),S.fromBufferAttribute(u,P),w.fromBufferAttribute(u,A),_.sub(m),v.sub(m),S.sub(x),w.sub(x);const B=1/(S.x*w.y-w.x*S.y);isFinite(B)&&(R.copy(_).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(B),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-w.x).multiplyScalar(B),d[Y].add(R),d[P].add(R),d[A].add(R),p[Y].add(y),p[P].add(y),p[A].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Y=0,P=I.length;Y<P;++Y){const A=I[Y],B=A.start,oe=A.count;for(let te=B,ce=B+oe;te<ce;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new Z,C=new Z,G=new Z,z=new Z;function N(Y){G.fromBufferAttribute(a,Y),z.copy(G);const P=d[Y];L.copy(P),L.sub(G.multiplyScalar(G.dot(P))).normalize(),C.crossVectors(z,P);const B=C.dot(p[Y])<0?-1:1;f.setXYZW(Y,L.x,L.y,L.z,B)}for(let Y=0,P=I.length;Y<P;++Y){const A=I[Y],B=A.start,oe=A.count;for(let te=B,ce=B+oe;te<ce;te+=3)N(e.getX(te+0)),N(e.getX(te+1)),N(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new Z,u=new Z,f=new Z,d=new Z,p=new Z,m=new Z,_=new Z,v=new Z;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,y),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),d.add(_),p.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let S=0,w=0;for(let R=0,y=p.length;R<y;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let g=0;g<_;g++)x[w++]=m[S++]}return new _i(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zr,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[p]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vp=new Yt,Or=new Hm,al=new Gf,Gp=new Z,ll=new Z,ul=new Z,cl=new Z,Nc=new Z,fl=new Z,Wp=new Z,dl=new Z;class gi extends Bn{constructor(e=new Zr,n=new Wm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){fl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],v=u[p];_!==0&&(Nc.fromBufferAttribute(v,e),f?fl.addScaledVector(Nc,_):fl.addScaledVector(Nc.sub(n),_))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),al.copy(r.boundingSphere),al.applyMatrix4(u),Or.copy(e.ray).recast(e.near),!(al.containsPoint(Or.origin)===!1&&(Or.intersectSphere(al,Gp)===null||Or.origin.distanceToSquared(Gp)>(e.far-e.near)**2))&&(Vp.copy(u).invert(),Or.copy(e.ray).applyMatrix4(Vp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const y=x[w],g=f[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=I,G=L;C<G;C+=3){const z=d.getX(C),N=d.getX(C+1),Y=d.getX(C+2);a=hl(this,g,e,r,m,_,v,z,N,Y),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=w,g=R;y<g;y+=3){const I=d.getX(y),L=d.getX(y+1),C=d.getX(y+2);a=hl(this,f,e,r,m,_,v,I,L,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,R=x.length;w<R;w++){const y=x[w],g=f[y.materialIndex],I=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=I,G=L;C<G;C+=3){const z=C,N=C+1,Y=C+2;a=hl(this,g,e,r,m,_,v,z,N,Y),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let y=w,g=R;y<g;y+=3){const I=y,L=y+1,C=y+2;a=hl(this,f,e,r,m,_,v,I,L,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function r0(s,e,n,r,a,u,f,d){let p;if(e.side===Un?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===yr,d),p===null)return null;dl.copy(d),dl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(dl);return m<n.near||m>n.far?null:{distance:m,point:dl.clone(),object:s}}function hl(s,e,n,r,a,u,f,d,p,m){s.getVertexPosition(d,ll),s.getVertexPosition(p,ul),s.getVertexPosition(m,cl);const _=r0(s,e,n,r,ll,ul,cl,Wp);if(_){const v=new Z;si.getBarycoord(Wp,ll,ul,cl,v),a&&(_.uv=si.getInterpolatedAttribute(a,d,p,m,v,new ut)),u&&(_.uv1=si.getInterpolatedAttribute(u,d,p,m,v,new ut)),f&&(_.normal=si.getInterpolatedAttribute(f,d,p,m,v,new Z),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Z,materialIndex:0};si.getNormal(ll,ul,cl,x.normal),_.face=x,_.barycoord=v}return _}class Ho extends Zr{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],_=[],v=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Yr(m,3)),this.setAttribute("normal",new Yr(_,3)),this.setAttribute("uv",new Yr(v,2));function w(R,y,g,I,L,C,G,z,N,Y,P){const A=C/N,B=G/Y,oe=C/2,te=G/2,ce=z/2,pe=N+1,se=Y+1;let le=0,k=0;const ae=new Z;for(let re=0;re<se;re++){const U=re*B-te;for(let ne=0;ne<pe;ne++){const Ue=ne*A-oe;ae[R]=Ue*I,ae[y]=U*L,ae[g]=ce,m.push(ae.x,ae.y,ae.z),ae[R]=0,ae[y]=0,ae[g]=z>0?1:-1,_.push(ae.x,ae.y,ae.z),v.push(ne/N),v.push(1-re/Y),le+=1}}for(let re=0;re<Y;re++)for(let U=0;U<N;U++){const ne=x+U+pe*re,Ue=x+U+pe*(re+1),Q=x+(U+1)+pe*(re+1),he=x+(U+1)+pe*re;p.push(ne,Ue,he),p.push(Ue,Q,he),k+=6}d.addGroup(S,k,P),S+=k,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Mn(s){const e={};for(let n=0;n<s.length;n++){const r=Xs(s[n]);for(const a in r)e[a]=r[a]}return e}function s0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function jm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const o0={clone:Xs,merge:Mn};var a0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Dl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=s0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class qm extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Oi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new Z,Xp=new ut,Yp=new ut;class Kn extends qm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lf*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,Xp,Yp),n.subVectors(Yp,Xp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wl*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Is=1;class u0 extends Bn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Kn(Us,Is,e,n);a.layers=this.layers,this.add(a);const u=new Kn(Us,Is,e,n);u.layers=this.layers,this.add(u);const f=new Kn(Us,Is,e,n);f.layers=this.layers,this.add(f);const d=new Kn(Us,Is,e,n);d.layers=this.layers,this.add(d);const p=new Kn(Us,Is,e,n);p.layers=this.layers,this.add(p);const m=new Kn(Us,Is,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Km extends _n{constructor(e=[],n=Vs,r,a,u,f,d,p,m,_){super(e,n,r,a,u,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c0 extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Km(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ho(5,5,5),u=new Hi({name:"CubemapFromEquirect",uniforms:Xs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:vr});u.uniforms.tEquirect.value=n;const f=new gi(a,u),d=n.minFilter;return n.minFilter===Xr&&(n.minFilter=mi),new u0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}class pl extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f0={type:"move"};class Fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const R of e.hand.values()){const y=n.getJointPose(R,r),g=this._getHandJoint(m,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new pl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class d0 extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Oc=new Z,h0=new Z,p0=new ot;class gr{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Oc.subVectors(r,n).cross(h0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Oc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||p0.getNormalMatrix(e),a=this.coplanarPoint(Oc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Gf,ml=new Z;class $m{constructor(e=new gr,n=new gr,r=new gr,a=new gr,u=new gr,f=new gr){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Oi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],w=a[9],R=a[10],y=a[11],g=a[12],I=a[13],L=a[14],C=a[15];if(r[0].setComponents(p-u,x-m,y-S,C-g).normalize(),r[1].setComponents(p+u,x+m,y+S,C+g).normalize(),r[2].setComponents(p+f,x+_,y+w,C+I).normalize(),r[3].setComponents(p-f,x-_,y-w,C-I).normalize(),r[4].setComponents(p-d,x-v,y-R,C-L).normalize(),n===Oi)r[5].setComponents(p+d,x+v,y+R,C+L).normalize();else if(n===Pl)r[5].setComponents(d,v,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(ml.x=a.normal.x>0?e.max.x:e.min.x,ml.y=a.normal.y>0?e.max.y:e.min.y,ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class m0 extends _n{constructor(e,n,r,a,u,f,d,p,m){super(e,n,r,a,u,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zm extends _n{constructor(e,n,r=jr,a,u,f,d=ai,p=ai,m,_=No){if(_!==No&&_!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,u,f,d,p,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Vo extends Zr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,_=p+1,v=e/d,x=n/p,S=[],w=[],R=[],y=[];for(let g=0;g<_;g++){const I=g*x-f;for(let L=0;L<m;L++){const C=L*v-u;w.push(C,-I,0),R.push(0,0,1),y.push(L/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const L=I+m*g,C=I+m*(g+1),G=I+1+m*(g+1),z=I+1+m*g;S.push(L,C,z),S.push(C,G,z)}this.setIndex(S),this.setAttribute("position",new Yr(w,3)),this.setAttribute("normal",new Yr(R,3)),this.setAttribute("uv",new Yr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.widthSegments,e.heightSegments)}}class g0 extends Dl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _0 extends Dl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jp={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class v0{constructor(e,n,r){const a=this;let u=!1,f=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(_){d++,u===!1&&a.onStart!==void 0&&a.onStart(_,f,d),u=!0},this.itemEnd=function(_){f++,a.onProgress!==void 0&&a.onProgress(_,f,d),f===d&&(u=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(_){a.onError!==void 0&&a.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,v){return m.push(_,v),this},this.removeHandler=function(_){const v=m.indexOf(_);return v!==-1&&m.splice(v,2),this},this.getHandler=function(_){for(let v=0,x=m.length;v<x;v+=2){const S=m[v],w=m[v+1];if(S.global&&(S.lastIndex=0),S.test(_))return w}return null}}}const x0=new v0;class Wf{constructor(e){this.manager=e!==void 0?e:x0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,u){r.load(e,a,n,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wf.DEFAULT_MATERIAL_NAME="__DEFAULT";class y0 extends Wf{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,f=jp.get(e);if(f!==void 0)return u.manager.itemStart(e),setTimeout(function(){n&&n(f),u.manager.itemEnd(e)},0),f;const d=Oo("img");function p(){_(),jp.add(e,this),n&&n(this),u.manager.itemEnd(e)}function m(v){_(),a&&a(v),u.manager.itemError(e),u.manager.itemEnd(e)}function _(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class S0 extends Wf{constructor(e){super(e)}load(e,n,r,a){const u=new _n,f=new y0(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(d){u.image=d,u.needsUpdate=!0,n!==void 0&&n(u)},r,a),u}}class Qm extends qm{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class E0 extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class M0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=qp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function qp(){return performance.now()}class Kp{constructor(e=1,n=0,r=0){this.radius=e,this.phi=n,this.theta=r}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(ht(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class T0 extends $r{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function $p(s,e,n,r){const a=w0(r);switch(n){case Um:return s*e;case Nm:return s*e/a.components*a.byteLength;case zf:return s*e/a.components*a.byteLength;case Fm:return s*e*2/a.components*a.byteLength;case Bf:return s*e*2/a.components*a.byteLength;case Im:return s*e*3/a.components*a.byteLength;case oi:return s*e*4/a.components*a.byteLength;case Hf:return s*e*4/a.components*a.byteLength;case yl:case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case af:case uf:return Math.max(s,16)*Math.max(e,8)/4;case of:case lf:return Math.max(s,8)*Math.max(e,8)/2;case cf:case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Af:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Rf:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Om:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bf:case Df:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function w0(s){switch(s){case zi:case bm:return{byteLength:1,components:1};case Uo:case Dm:case ko:return{byteLength:2,components:1};case Of:case kf:return{byteLength:2,components:4};case jr:case Ff:case Fi:return{byteLength:4,components:1};case Lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jm(){let s=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function A0(s){const e=new WeakMap;function n(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const _=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<v.length;S++){const w=v[x],R=v[S];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++x,v[x]=R)}v.length=x+1;for(let S=0,w=v.length;S<w;S++){const R=v[S];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}var R0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,I0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,F0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B0=`#ifdef USE_IRIDESCENCE
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
#endif`,H0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$0=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",rx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,px=`#ifdef USE_GRADIENTMAP
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
}`,mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,xx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Ax=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ty=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,fy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sy=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ry=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Uy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Iy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Ny=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,By=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Gy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Xy=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Ky=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Zy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Jy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:R0,alphahash_pars_fragment:C0,alphamap_fragment:P0,alphamap_pars_fragment:b0,alphatest_fragment:D0,alphatest_pars_fragment:L0,aomap_fragment:U0,aomap_pars_fragment:I0,batching_pars_vertex:N0,batching_vertex:F0,begin_vertex:O0,beginnormal_vertex:k0,bsdfs:z0,iridescence_fragment:B0,bumpmap_pars_fragment:H0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:Y0,color_pars_fragment:j0,color_pars_vertex:q0,color_vertex:K0,common:$0,cube_uv_reflection_fragment:Z0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:J0,displacementmap_vertex:ex,emissivemap_fragment:tx,emissivemap_pars_fragment:nx,colorspace_fragment:ix,colorspace_pars_fragment:rx,envmap_fragment:sx,envmap_common_pars_fragment:ox,envmap_pars_fragment:ax,envmap_pars_vertex:lx,envmap_physical_pars_fragment:xx,envmap_vertex:ux,fog_vertex:cx,fog_pars_vertex:fx,fog_fragment:dx,fog_pars_fragment:hx,gradientmap_pars_fragment:px,lightmap_pars_fragment:mx,lights_lambert_fragment:gx,lights_lambert_pars_fragment:_x,lights_pars_begin:vx,lights_toon_fragment:yx,lights_toon_pars_fragment:Sx,lights_phong_fragment:Ex,lights_phong_pars_fragment:Mx,lights_physical_fragment:Tx,lights_physical_pars_fragment:wx,lights_fragment_begin:Ax,lights_fragment_maps:Rx,lights_fragment_end:Cx,logdepthbuf_fragment:Px,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Lx,map_fragment:Ux,map_pars_fragment:Ix,map_particle_fragment:Nx,map_particle_pars_fragment:Fx,metalnessmap_fragment:Ox,metalnessmap_pars_fragment:kx,morphinstance_vertex:zx,morphcolor_vertex:Bx,morphnormal_vertex:Hx,morphtarget_pars_vertex:Vx,morphtarget_vertex:Gx,normal_fragment_begin:Wx,normal_fragment_maps:Xx,normal_pars_fragment:Yx,normal_pars_vertex:jx,normal_vertex:qx,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Qx,iridescence_pars_fragment:Jx,opaque_fragment:ey,packing:ty,premultiplied_alpha_fragment:ny,project_vertex:iy,dithering_fragment:ry,dithering_pars_fragment:sy,roughnessmap_fragment:oy,roughnessmap_pars_fragment:ay,shadowmap_pars_fragment:ly,shadowmap_pars_vertex:uy,shadowmap_vertex:cy,shadowmask_pars_fragment:fy,skinbase_vertex:dy,skinning_pars_vertex:hy,skinning_vertex:py,skinnormal_vertex:my,specularmap_fragment:gy,specularmap_pars_fragment:_y,tonemapping_fragment:vy,tonemapping_pars_fragment:xy,transmission_fragment:yy,transmission_pars_fragment:Sy,uv_pars_fragment:Ey,uv_pars_vertex:My,uv_vertex:Ty,worldpos_vertex:wy,background_vert:Ay,background_frag:Ry,backgroundCube_vert:Cy,backgroundCube_frag:Py,cube_vert:by,cube_frag:Dy,depth_vert:Ly,depth_frag:Uy,distanceRGBA_vert:Iy,distanceRGBA_frag:Ny,equirect_vert:Fy,equirect_frag:Oy,linedashed_vert:ky,linedashed_frag:zy,meshbasic_vert:By,meshbasic_frag:Hy,meshlambert_vert:Vy,meshlambert_frag:Gy,meshmatcap_vert:Wy,meshmatcap_frag:Xy,meshnormal_vert:Yy,meshnormal_frag:jy,meshphong_vert:qy,meshphong_frag:Ky,meshphysical_vert:$y,meshphysical_frag:Zy,meshtoon_vert:Qy,meshtoon_frag:Jy,points_vert:eS,points_frag:tS,shadow_vert:nS,shadow_frag:iS,sprite_vert:rS,sprite_frag:sS},Ce={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},pi={basic:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Rt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Mn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Mn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Mn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Rt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Mn([Ce.points,Ce.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Mn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Mn([Ce.common,Ce.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Mn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Mn([Ce.sprite,Ce.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Mn([Ce.common,Ce.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Mn([Ce.lights,Ce.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};pi.physical={uniforms:Mn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const gl={r:0,b:0,g:0},zr=new Bi,oS=new Yt;function aS(s,e,n,r,a,u,f){const d=new Rt(0);let p=u===!0?0:1,m,_,v=null,x=0,S=null;function w(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:e).get(C)),C}function R(L){let C=!1;const G=w(L);G===null?g(d,p):G&&G.isColor&&(g(G,1),C=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,C){const G=w(C);G&&(G.isCubeTexture||G.mapping===bl)?(_===void 0&&(_=new gi(new Ho(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:Xs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,N,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),zr.copy(C.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(oS.makeRotationFromEuler(zr)),_.material.toneMapped=Et.getTransfer(G.colorSpace)!==wt,(v!==G||x!==G.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=G,x=G.version,S=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new gi(new Vo(2,2),new Hi({name:"BackgroundMaterial",uniforms:Xs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Et.getTransfer(G.colorSpace)!==wt,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||x!==G.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=G,x=G.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,C){L.getRGB(gl,jm(s)),r.buffers.color.setClear(gl.r,gl.g,gl.b,C,f)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),p=C,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,g(d,p)},render:R,addToRenderList:y,dispose:I}}function lS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(A,B,oe,te,ce){let pe=!1;const se=v(te,oe,B);u!==se&&(u=se,m(u.object)),pe=S(A,te,oe,ce),pe&&w(A,te,oe,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(pe||f)&&(f=!1,C(A,B,oe,te),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,B,oe){const te=oe.wireframe===!0;let ce=r[A.id];ce===void 0&&(ce={},r[A.id]=ce);let pe=ce[B.id];pe===void 0&&(pe={},ce[B.id]=pe);let se=pe[te];return se===void 0&&(se=x(p()),pe[te]=se),se}function x(A){const B=[],oe=[],te=[];for(let ce=0;ce<n;ce++)B[ce]=0,oe[ce]=0,te[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:oe,attributeDivisors:te,object:A,attributes:{},index:null}}function S(A,B,oe,te){const ce=u.attributes,pe=B.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){const re=ce[k];let U=pe[k];if(U===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;se++}return u.attributesNum!==se||u.index!==te}function w(A,B,oe,te){const ce={},pe=B.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){let re=pe[k];re===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),ce[k]=U,se++}u.attributes=ce,u.attributesNum=se,u.index=te}function R(){const A=u.newAttributes;for(let B=0,oe=A.length;B<oe;B++)A[B]=0}function y(A){g(A,0)}function g(A,B){const oe=u.newAttributes,te=u.enabledAttributes,ce=u.attributeDivisors;oe[A]=1,te[A]===0&&(s.enableVertexAttribArray(A),te[A]=1),ce[A]!==B&&(s.vertexAttribDivisor(A,B),ce[A]=B)}function I(){const A=u.newAttributes,B=u.enabledAttributes;for(let oe=0,te=B.length;oe<te;oe++)B[oe]!==A[oe]&&(s.disableVertexAttribArray(oe),B[oe]=0)}function L(A,B,oe,te,ce,pe,se){se===!0?s.vertexAttribIPointer(A,B,oe,ce,pe):s.vertexAttribPointer(A,B,oe,te,ce,pe)}function C(A,B,oe,te){R();const ce=te.attributes,pe=oe.getAttributes(),se=B.defaultAttributeValues;for(const le in pe){const k=pe[le];if(k.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),le==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),ae!==void 0){const re=ae.normalized,U=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ue=ne.buffer,Q=ne.type,he=ne.bytesPerElement,Ee=Q===s.INT||Q===s.UNSIGNED_INT||ae.gpuType===Ff;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Xe=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Ve=0;Ve<k.locationSize;Ve++)g(k.location+Ve,ve.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ve=0;Ve<k.locationSize;Ve++)y(k.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ve=0;Ve<k.locationSize;Ve++)L(k.location+Ve,U/k.locationSize,Q,re,Te*he,(Xe+U/k.locationSize*Ve)*he,Ee)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)g(k.location+ve,ae.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<k.locationSize;ve++)y(k.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ve=0;ve<k.locationSize;ve++)L(k.location+ve,U/k.locationSize,Q,re,U*he,U/k.locationSize*ve*he,Ee)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(k.location,re);break;case 3:s.vertexAttrib3fv(k.location,re);break;case 4:s.vertexAttrib4fv(k.location,re);break;default:s.vertexAttrib1fv(k.location,re)}}}}I()}function G(){Y();for(const A in r){const B=r[A];for(const oe in B){const te=B[oe];for(const ce in te)_(te[ce].object),delete te[ce];delete B[oe]}delete r[A]}}function z(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const oe in B){const te=B[oe];for(const ce in te)_(te[ce].object),delete te[ce];delete B[oe]}delete r[A.id]}function N(A){for(const B in r){const oe=r[B];if(oe[A.id]===void 0)continue;const te=oe[A.id];for(const ce in te)_(te[ce].object),delete te[ce];delete oe[A.id]}}function Y(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:P,dispose:G,releaseStatesOfGeometry:z,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:y,disableUnusedAttributes:I}}function uS(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function f(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function d(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let w=0;w<v;w++)S+=_[w];n.update(S,r,1)}function p(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)f(m[w],_[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let w=0;for(let R=0;R<v;R++)w+=_[R]*x[R];n.update(w,r,1)}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function cS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(N){return!(N!==oi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const Y=N===ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==zi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Fi&&!Y)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=w>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:G,maxSamples:z}}function fS(s){const e=this;let n=null,r=0,a=!1,u=!1;const f=new gr,d=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const w=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||w===null||w.length===0||u&&!y)u?_(null):m();else{const I=u?0:r,L=I*4;let C=g.clippingState||null;p.value=C,C=_(w,x,L,S);for(let G=0;G!==L;++G)C[G]=n[G];g.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,w){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=p.value,w!==!0||y===null){const g=S+R*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,C=S;L!==R;++L,C+=4)f.copy(v[L]).applyMatrix4(I,d),f.normal.toArray(y,C),y[C+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function dS(s){let e=new WeakMap;function n(f,d){return d===tf?f.mapping=Vs:d===nf&&(f.mapping=Gs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===tf||d===nf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new c0(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Os=4,Zp=[.125,.215,.35,.446,.526,.582],Gr=20,kc=new Qm,Qp=new Rt;let zc=null,Bc=0,Hc=0,Vc=!1;const Hr=(1+Math.sqrt(5))/2,Ns=1/Hr,Jp=[new Z(-Hr,Ns,0),new Z(Hr,Ns,0),new Z(-Ns,0,Hr),new Z(Ns,0,Hr),new Z(0,Hr,-Ns),new Z(0,Hr,Ns),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],hS=new Z;class em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,u={}){const{size:f=256,position:d=hS}=u;zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Bc,Hc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:ko,format:oi,colorSpace:Ws,depthBuffer:!1},a=tm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tm(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pS(u)),this._blurMaterial=mS(u,e,n)}return a}_compileMaterial(e){const n=new gi(this._lodPlanes[0],e);this._renderer.compile(n,kc)}_sceneToCubeUV(e,n,r,a,u){const p=new Kn(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(Qp),v.toneMapping=xr,v.autoClear=!1;const w=new Wm({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),R=new gi(new Ho,w);let y=!1;const g=e.background;g?g.isColor&&(w.color.copy(g),e.background=null,y=!0):(w.color.copy(Qp),y=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(p.up.set(0,m[I],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[I],u.y,u.z)):L===1?(p.up.set(0,0,m[I]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[I],u.z)):(p.up.set(0,m[I],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[I]));const C=this._cubeSize;_l(a,L*C,I>2?C:0,C,C),v.setRenderTarget(a),y&&v.render(R,p),v.render(e,p)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Vs||e.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nm());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new gi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;_l(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,kc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Jp[(a-u-1)%Jp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new gi(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Gr-1),R=u/w,y=isFinite(u)?1+Math.floor(_*R):Gr;y>Gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gr}`);const g=[];let I=0;for(let N=0;N<Gr;++N){const Y=N/R,P=Math.exp(-Y*Y/2);g.push(P),N===0?I+=P:N<y&&(I+=2*P)}for(let N=0;N<g.length;N++)g[N]=g[N]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=w,x.mipInt.value=L-r;const C=this._sizeLods[a],G=3*C*(a>L-Os?a-L+Os:0),z=4*(this._cubeSize-C);_l(n,G,z,3*C,2*C),p.setRenderTarget(n),p.render(v,kc)}}function pS(s){const e=[],n=[],r=[];let a=s;const u=s-Os+1+Zp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>s-Os?p=Zp[f-s+Os-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,w=6,R=3,y=2,g=1,I=new Float32Array(R*w*S),L=new Float32Array(y*w*S),C=new Float32Array(g*w*S);for(let z=0;z<S;z++){const N=z%3*2/3-1,Y=z>2?0:-1,P=[N,Y,0,N+2/3,Y,0,N+2/3,Y+1,0,N,Y,0,N+2/3,Y+1,0,N,Y+1,0];I.set(P,R*w*z),L.set(x,y*w*z);const A=[z,z,z,z,z,z];C.set(A,g*w*z)}const G=new Zr;G.setAttribute("position",new _i(I,R)),G.setAttribute("uv",new _i(L,y)),G.setAttribute("faceIndex",new _i(C,g)),e.push(G),a>Os&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function tm(s,e,n){const r=new qr(s,e,n);return r.texture.mapping=bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _l(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function mS(s,e,n){const r=new Float32Array(Gr),a=new Z(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function nm(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function im(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Xf(){return`

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
	`}function gS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===tf||p===nf,_=p===Vs||p===Gs;if(m||_){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new em(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new em(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function a(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function _S(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Al("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function vS(s,e,n,r){const a={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",f),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,w=v.attributes.position;let R=0;if(S!==null){const I=S.array;R=S.version;for(let L=0,C=I.length;L<C;L+=3){const G=I[L+0],z=I[L+1],N=I[L+2];x.push(G,z,z,N,N,G)}}else if(w!==void 0){const I=w.array;R=w.version;for(let L=0,C=I.length/3-1;L<C;L+=3){const G=L+0,z=L+1,N=L+2;x.push(G,z,z,N,N,G)}}else return;const y=new(zm(x)?Ym:Xm)(x,1);y.version=R;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function xS(s,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,S){s.drawElements(r,S,u,x*f),n.update(S,r,1)}function m(x,S,w){w!==0&&(s.drawElementsInstanced(r,S,u,x*f,w),n.update(S,r,w))}function _(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,w);let y=0;for(let g=0;g<w;g++)y+=S[g];n.update(y,r,1)}function v(x,S,w,R){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/f,S[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,R,0,w);let g=0;for(let I=0;I<w;I++)g+=S[I]*R[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function yS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function SS(s,e,n){const r=new WeakMap,a=new Gt;function u(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let A=function(){Y.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;w===!0&&(C=1),R===!0&&(C=2),y===!0&&(C=3);let G=d.attributes.position.count*C,z=1;G>e.maxTextureSize&&(z=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const N=new Float32Array(G*z*4*v),Y=new Bm(N,G,z,v);Y.type=Fi,Y.needsUpdate=!0;const P=C*4;for(let B=0;B<v;B++){const oe=g[B],te=I[B],ce=L[B],pe=G*z*4*B;for(let se=0;se<oe.count;se++){const le=se*P;w===!0&&(a.fromBufferAttribute(oe,se),N[pe+le+0]=a.x,N[pe+le+1]=a.y,N[pe+le+2]=a.z,N[pe+le+3]=0),R===!0&&(a.fromBufferAttribute(te,se),N[pe+le+4]=a.x,N[pe+le+5]=a.y,N[pe+le+6]=a.z,N[pe+le+7]=0),y===!0&&(a.fromBufferAttribute(ce,se),N[pe+le+8]=a.x,N[pe+le+9]=a.y,N[pe+le+10]=a.z,N[pe+le+11]=ce.itemSize===4?a.w:1)}}x={count:v,texture:Y,size:new ut(G,z)},r.set(d,x),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const R=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function ES(s,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,_=p.geometry,v=e.get(p,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}const eg=new _n,rm=new Zm(1,1),tg=new Bm,ng=new jv,ig=new Km,sm=[],om=[],am=new Float32Array(16),lm=new Float32Array(9),um=new Float32Array(4);function Ys(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=sm[a];if(u===void 0&&(u=new Float32Array(a),sm[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(u,d)}return u}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ll(s,e){let n=om[e];n===void 0&&(n=new Int32Array(e),om[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function MS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function TS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function wS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function AS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function RS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;um.set(r),s.uniformMatrix2fv(this.addr,!1,um),Qt(n,r)}}function CS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;lm.set(r),s.uniformMatrix3fv(this.addr,!1,lm),Qt(n,r)}}function PS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;am.set(r),s.uniformMatrix4fv(this.addr,!1,am),Qt(n,r)}}function bS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function DS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function LS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function US(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function IS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function NS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function FS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function OS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function kS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(rm.compareFunction=km,u=rm):u=eg,n.setTexture2D(e||u,a)}function zS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||ng,a)}function BS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||ig,a)}function HS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||tg,a)}function VS(s){switch(s){case 5126:return MS;case 35664:return TS;case 35665:return wS;case 35666:return AS;case 35674:return RS;case 35675:return CS;case 35676:return PS;case 5124:case 35670:return bS;case 35667:case 35671:return DS;case 35668:case 35672:return LS;case 35669:case 35673:return US;case 5125:return IS;case 36294:return NS;case 36295:return FS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return HS}}function GS(s,e){s.uniform1fv(this.addr,e)}function WS(s,e){const n=Ys(e,this.size,2);s.uniform2fv(this.addr,n)}function XS(s,e){const n=Ys(e,this.size,3);s.uniform3fv(this.addr,n)}function YS(s,e){const n=Ys(e,this.size,4);s.uniform4fv(this.addr,n)}function jS(s,e){const n=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function qS(s,e){const n=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function KS(s,e){const n=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function $S(s,e){s.uniform1iv(this.addr,e)}function ZS(s,e){s.uniform2iv(this.addr,e)}function QS(s,e){s.uniform3iv(this.addr,e)}function JS(s,e){s.uniform4iv(this.addr,e)}function eE(s,e){s.uniform1uiv(this.addr,e)}function tE(s,e){s.uniform2uiv(this.addr,e)}function nE(s,e){s.uniform3uiv(this.addr,e)}function iE(s,e){s.uniform4uiv(this.addr,e)}function rE(s,e,n){const r=this.cache,a=e.length,u=Ll(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||eg,u[f])}function sE(s,e,n){const r=this.cache,a=e.length,u=Ll(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||ng,u[f])}function oE(s,e,n){const r=this.cache,a=e.length,u=Ll(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||ig,u[f])}function aE(s,e,n){const r=this.cache,a=e.length,u=Ll(n,a);Zt(r,u)||(s.uniform1iv(this.addr,u),Qt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||tg,u[f])}function lE(s){switch(s){case 5126:return GS;case 35664:return WS;case 35665:return XS;case 35666:return YS;case 35674:return jS;case 35675:return qS;case 35676:return KS;case 5124:case 35670:return $S;case 35667:case 35671:return ZS;case 35668:case 35672:return QS;case 35669:case 35673:return JS;case 5125:return eE;case 36294:return tE;case 36295:return nE;case 36296:return iE;case 35678:case 36198:case 36298:case 36306:case 35682:return rE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return aE}}class uE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=VS(n.type)}}class cE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lE(n.type)}}class fE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function cm(s,e){s.seq.push(e),s.map[e.id]=e}function dE(s,e,n){const r=s.name,a=r.length;for(Gc.lastIndex=0;;){const u=Gc.exec(r),f=Gc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){cm(n,m===void 0?new uE(d,s,e):new cE(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new fE(d),cm(n,v)),n=v}}}class Rl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);dE(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function fm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const hE=37297;let pE=0;function mE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const dm=new ot;function gE(s){Et._getMatrix(dm,Et.workingColorSpace,s);const e=`mat3( ${dm.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case Cl:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function hm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+mE(s.getShaderSource(e),f)}else return a}function _E(s,e){const n=gE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function vE(s,e){let n;switch(e){case _v:n="Linear";break;case vv:n="Reinhard";break;case xv:n="Cineon";break;case yv:n="ACESFilmic";break;case Ev:n="AgX";break;case Mv:n="Neutral";break;case Sv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vl=new Z;function xE(){Et.getLuminanceCoefficients(vl);const s=vl.x.toFixed(4),e=vl.y.toFixed(4),n=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function SE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function EE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Do(s){return s!==""}function pm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ME=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uf(s){return s.replace(ME,wE)}const TE=new Map;function wE(s,e){let n=at[e];if(n===void 0){const r=TE.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Uf(n)}const AE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(s){return s.replace(AE,RE)}function RE(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function _m(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function PE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function DE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Cm:e="ENVMAP_BLENDING_MULTIPLY";break;case mv:e="ENVMAP_BLENDING_MIX";break;case gv:e="ENVMAP_BLENDING_ADD";break}return e}function LE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function UE(s,e,n,r){const a=s.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=CE(n),m=PE(n),_=bE(n),v=DE(n),x=LE(n),S=yE(n),w=SE(u),R=a.createProgram();let y,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Do).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Do).join(`
`),g.length>0&&(g+=`
`)):(y=[_m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),g=[_m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xr?"#define TONE_MAPPING":"",n.toneMapping!==xr?at.tonemapping_pars_fragment:"",n.toneMapping!==xr?vE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,_E("linearToOutputTexel",n.outputColorSpace),xE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Do).join(`
`)),f=Uf(f),f=pm(f,n),f=mm(f,n),d=Uf(d),d=pm(d,n),d=mm(d,n),f=gm(f),d=gm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=I+y+f,C=I+g+d,G=fm(a,a.VERTEX_SHADER,L),z=fm(a,a.FRAGMENT_SHADER,C);a.attachShader(R,G),a.attachShader(R,z),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function N(B){if(s.debug.checkShaderErrors){const oe=a.getProgramInfoLog(R).trim(),te=a.getShaderInfoLog(G).trim(),ce=a.getShaderInfoLog(z).trim();let pe=!0,se=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,G,z);else{const le=hm(a,G,"vertex"),k=hm(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+oe+`
`+le+`
`+k)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(te===""||ce==="")&&(se=!1);se&&(B.diagnostics={runnable:pe,programLog:oe,vertexShader:{log:te,prefix:y},fragmentShader:{log:ce,prefix:g}})}a.deleteShader(G),a.deleteShader(z),Y=new Rl(a,R),P=EE(a,R)}let Y;this.getUniforms=function(){return Y===void 0&&N(this),Y};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(R,hE)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=z,this}let IE=0;class NE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new FE(e),n.set(e,r)),r}}class FE{constructor(e){this.id=IE++,this.code=e,this.usedTimes=0}}function OE(s,e,n,r,a,u,f){const d=new Vm,p=new NE,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,A,B,oe,te){const ce=oe.fog,pe=te.geometry,se=P.isMeshStandardMaterial?oe.environment:null,le=(P.isMeshStandardMaterial?n:e).get(P.envMap||se),k=le&&le.mapping===bl?le.image.height:null,ae=w[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const re=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=re!==void 0?re.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Ue,Q,he,Ee;if(ae){const vt=pi[ae];Ue=vt.vertexShader,Q=vt.fragmentShader}else Ue=P.vertexShader,Q=P.fragmentShader,p.update(P),he=p.getVertexShaderID(P),Ee=p.getFragmentShaderID(P);const ve=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Xe=te.isInstancedMesh===!0,Ve=te.isBatchedMesh===!0,Pt=!!P.map,bt=!!P.matcap,lt=!!le,O=!!P.aoMap,vn=!!P.lightMap,pt=!!P.bumpMap,ct=!!P.normalMap,Ye=!!P.displacementMap,Tt=!!P.emissiveMap,Ge=!!P.metalnessMap,b=!!P.roughnessMap,M=P.anisotropy>0,$=P.clearcoat>0,fe=P.dispersion>0,_e=P.iridescence>0,ue=P.sheen>0,He=P.transmission>0,we=M&&!!P.anisotropyMap,Ke=$&&!!P.clearcoatMap,qe=$&&!!P.clearcoatNormalMap,xe=$&&!!P.clearcoatRoughnessMap,Ne=_e&&!!P.iridescenceMap,Je=_e&&!!P.iridescenceThicknessMap,et=ue&&!!P.sheenColorMap,Fe=ue&&!!P.sheenRoughnessMap,ft=!!P.specularMap,it=!!P.specularColorMap,Mt=!!P.specularIntensityMap,V=He&&!!P.transmissionMap,Ae=He&&!!P.thicknessMap,ie=!!P.gradientMap,de=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,rt=!!P.extensions;let Lt=xr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Lt=s.toneMapping);const jt={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:Q,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&te._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&te.instanceColor!==null,instancingMorph:Xe&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ws,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:bt,envMap:lt,envMapMode:lt&&le.mapping,envMapCubeUVHeight:k,aoMap:O,lightMap:vn,bumpMap:pt,normalMap:ct,displacementMap:x&&Ye,emissiveMap:Tt,normalMapObjectSpace:ct&&P.normalMapType===Cv,normalMapTangentSpace:ct&&P.normalMapType===Rv,metalnessMap:Ge,roughnessMap:b,anisotropy:M,anisotropyMap:we,clearcoat:$,clearcoatMap:Ke,clearcoatNormalMap:qe,clearcoatRoughnessMap:xe,dispersion:fe,iridescence:_e,iridescenceMap:Ne,iridescenceThicknessMap:Je,sheen:ue,sheenColorMap:et,sheenRoughnessMap:Fe,specularMap:ft,specularColorMap:it,specularIntensityMap:Mt,transmission:He,transmissionMap:V,thicknessMap:Ae,gradientMap:ie,opaque:P.transparent===!1&&P.blending===zs&&P.alphaToCoverage===!1,alphaMap:de,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:Pt&&R(P.map.channel),aoMapUv:O&&R(P.aoMap.channel),lightMapUv:vn&&R(P.lightMap.channel),bumpMapUv:pt&&R(P.bumpMap.channel),normalMapUv:ct&&R(P.normalMap.channel),displacementMapUv:Ye&&R(P.displacementMap.channel),emissiveMapUv:Tt&&R(P.emissiveMap.channel),metalnessMapUv:Ge&&R(P.metalnessMap.channel),roughnessMapUv:b&&R(P.roughnessMap.channel),anisotropyMapUv:we&&R(P.anisotropyMap.channel),clearcoatMapUv:Ke&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:qe&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&R(P.sheenRoughnessMap.channel),specularMapUv:ft&&R(P.specularMap.channel),specularColorMapUv:it&&R(P.specularColorMap.channel),specularIntensityMapUv:Mt&&R(P.specularIntensityMap.channel),transmissionMapUv:V&&R(P.transmissionMap.channel),thicknessMapUv:Ae&&R(P.thicknessMap.channel),alphaMapUv:de&&R(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ct||M),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!pe.attributes.uv&&(Pt||de),fog:!!ce,useFog:P.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&Et.getTransfer(P.map.colorSpace)===wt,decodeVideoTextureEmissive:Tt&&P.emissiveMap.isVideoTexture===!0&&Et.getTransfer(P.emissiveMap.colorSpace)===wt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Ni,flipSided:P.side===Un,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:rt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&P.extensions.multiDraw===!0||Ve)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)A.push(B),A.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(I(A,P),L(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function I(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function L(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const A=w[P.type];let B;if(A){const oe=pi[A];B=o0.clone(oe.uniforms)}else B=P.uniforms;return B}function G(P,A){let B;for(let oe=0,te=_.length;oe<te;oe++){const ce=_[oe];if(ce.cacheKey===A){B=ce,++B.usedTimes;break}}return B===void 0&&(B=new UE(s,A,P,u),_.push(B)),B}function z(P){if(--P.usedTimes===0){const A=_.indexOf(P);_[A]=_[_.length-1],_.pop(),P.destroy()}}function N(P){p.remove(P)}function Y(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:G,releaseProgram:z,releaseShaderCache:N,programs:_,dispose:Y}}function kE(){let s=new WeakMap;function e(f){return s.has(f)}function n(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function a(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function zE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function xm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(v,x,S,w,R,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:w,renderOrder:v.renderOrder,z:R,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=w,g.renderOrder=v.renderOrder,g.z=R,g.group=y),e++,g}function d(v,x,S,w,R,y){const g=f(v,x,S,w,R,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(v,x,S,w,R,y){const g=f(v,x,S,w,R,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||zE),r.length>1&&r.sort(x||vm),a.length>1&&a.sort(x||vm)}function _(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:_,sort:m}}function BE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let f;return u===void 0?(f=new xm,s.set(r,[f])):a>=u.length?(f=new xm,u.push(f)):f=u[a],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function HE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Rt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=n,n}}}function VE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let GE=0;function WE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function XE(s){const e=new HE,n=VE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const a=new Z,u=new Yt,f=new Yt;function d(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,w=0,R=0,y=0,g=0,I=0,L=0,C=0,G=0,z=0,N=0;m.sort(WE);for(let P=0,A=m.length;P<A;P++){const B=m[P],oe=B.color,te=B.intensity,ce=B.distance,pe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=oe.r*te,v+=oe.g*te,x+=oe.b*te;else if(B.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(B.sh.coefficients[se],te);N++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const le=B.shadow,k=n.get(B);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=pe,r.directionalShadowMatrix[S]=B.shadow.matrix,I++}r.directional[S]=se,S++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(oe).multiplyScalar(te),se.distance=ce,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,r.spot[R]=se;const le=B.shadow;if(B.map&&(r.spotLightMap[G]=B.map,G++,le.updateMatrices(B),B.castShadow&&z++),r.spotLightMatrix[R]=le.matrix,B.castShadow){const k=n.get(B);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,r.spotShadow[R]=k,r.spotShadowMap[R]=pe,C++}R++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(oe).multiplyScalar(te),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=se,y++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const le=B.shadow,k=n.get(B);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,k.shadowCameraNear=le.camera.near,k.shadowCameraFar=le.camera.far,r.pointShadow[w]=k,r.pointShadowMap[w]=pe,r.pointShadowMatrix[w]=B.shadow.matrix,L++}r.point[w]=se,w++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(te),se.groundColor.copy(B.groundColor).multiplyScalar(te),r.hemi[g]=se,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==S||Y.pointLength!==w||Y.spotLength!==R||Y.rectAreaLength!==y||Y.hemiLength!==g||Y.numDirectionalShadows!==I||Y.numPointShadows!==L||Y.numSpotShadows!==C||Y.numSpotMaps!==G||Y.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+G-z,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=N,Y.directionalLength=S,Y.pointLength=w,Y.spotLength=R,Y.rectAreaLength=y,Y.hemiLength=g,Y.numDirectionalShadows=I,Y.numPointShadows=L,Y.numSpotShadows=C,Y.numSpotMaps=G,Y.numLightProbes=N,r.version=GE++)}function p(m,_){let v=0,x=0,S=0,w=0,R=0;const y=_.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const L=m[g];if(L.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(L.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=r.rectArea[w];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),f.identity(),u.copy(L.matrixWorld),u.premultiply(y),f.extractRotation(u),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),w++}else if(L.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),R++}}}return{setup:d,setupView:p,state:r}}function ym(s){const e=new XE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function f(_){r.push(_)}function d(){e.setup(n)}function p(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function YE(s){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new ym(s),e.set(a,[d])):u>=f.length?(d=new ym(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const jE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qE=`uniform sampler2D shadow_pass;
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
}`;function KE(s,e,n){let r=new $m;const a=new ut,u=new ut,f=new Gt,d=new g0({depthPacking:Av}),p=new _0,m={},_=n.maxTextureSize,v={[yr]:Un,[Un]:yr,[Ni]:Ni},x=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:jE,fragmentShader:qE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new Zr;w.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new gi(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rm;let g=this.type;this.render=function(z,N,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(vr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=g!==Ii&&this.type===Ii,ce=g===Ii&&this.type!==Ii;for(let pe=0,se=z.length;pe<se;pe++){const le=z[pe],k=le.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ae=k.getFrameExtents();if(a.multiply(ae),u.copy(k.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ae.x),a.x=u.x*ae.x,k.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ae.y),a.y=u.y*ae.y,k.mapSize.y=u.y)),k.map===null||te===!0||ce===!0){const U=this.type!==Ii?{minFilter:ai,magFilter:ai}:{};k.map!==null&&k.map.dispose(),k.map=new qr(a.x,a.y,U),k.map.texture.name=le.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const re=k.getViewportCount();for(let U=0;U<re;U++){const ne=k.getViewport(U);f.set(u.x*ne.x,u.y*ne.y,u.x*ne.z,u.y*ne.w),oe.viewport(f),k.updateMatrices(le,U),r=k.getFrustum(),C(N,Y,k.camera,le,this.type)}k.isPointLightShadow!==!0&&this.type===Ii&&I(k,Y),k.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,B)};function I(z,N){const Y=e.update(R);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new qr(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(N,null,Y,x,R,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(N,null,Y,S,R,null)}function L(z,N,Y,P){let A=null;const B=Y.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(B!==void 0)A=B;else if(A=Y.isPointLight===!0?p:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const oe=A.uuid,te=N.uuid;let ce=m[oe];ce===void 0&&(ce={},m[oe]=ce);let pe=ce[te];pe===void 0&&(pe=A.clone(),ce[te]=pe,N.addEventListener("dispose",G)),A=pe}if(A.visible=N.visible,A.wireframe=N.wireframe,P===Ii?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:v[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,Y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const oe=s.properties.get(A);oe.light=Y}return A}function C(z,N,Y,P,A){if(z.visible===!1)return;if(z.layers.test(N.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Ii)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,z.matrixWorld);const te=e.update(z),ce=z.material;if(Array.isArray(ce)){const pe=te.groups;for(let se=0,le=pe.length;se<le;se++){const k=pe[se],ae=ce[k.materialIndex];if(ae&&ae.visible){const re=L(z,ae,P,A);z.onBeforeShadow(s,z,N,Y,te,re,k),s.renderBufferDirect(Y,null,te,re,z,k),z.onAfterShadow(s,z,N,Y,te,re,k)}}}else if(ce.visible){const pe=L(z,ce,P,A);z.onBeforeShadow(s,z,N,Y,te,pe,null),s.renderBufferDirect(Y,null,te,pe,z,null),z.onAfterShadow(s,z,N,Y,te,pe,null)}}const oe=z.children;for(let te=0,ce=oe.length;te<ce;te++)C(oe[te],N,Y,P,A)}function G(z){z.target.removeEventListener("dispose",G);for(const Y in m){const P=m[Y],A=z.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const $E={[qc]:Kc,[$c]:Jc,[Zc]:ef,[Hs]:Qc,[Kc]:qc,[Jc]:$c,[ef]:Zc,[Qc]:Hs};function ZE(s,e){function n(){let V=!1;const Ae=new Gt;let ie=null;const de=new Gt(0,0,0,0);return{setMask:function(be){ie!==be&&!V&&(s.colorMask(be,be,be,be),ie=be)},setLocked:function(be){V=be},setClear:function(be,Pe,rt,Lt,jt){jt===!0&&(be*=Lt,Pe*=Lt,rt*=Lt),Ae.set(be,Pe,rt,Lt),de.equals(Ae)===!1&&(s.clearColor(be,Pe,rt,Lt),de.copy(Ae))},reset:function(){V=!1,ie=null,de.set(-1,0,0,0)}}}function r(){let V=!1,Ae=!1,ie=null,de=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const rt=e.get("EXT_clip_control");Pe?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Ae=Pe;const Lt=be;be=null,this.setClear(Lt)}},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!V&&(s.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(Ae&&(Pe=$E[Pe]),de!==Pe){switch(Pe){case qc:s.depthFunc(s.NEVER);break;case Kc:s.depthFunc(s.ALWAYS);break;case $c:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case Zc:s.depthFunc(s.EQUAL);break;case Qc:s.depthFunc(s.GEQUAL);break;case Jc:s.depthFunc(s.GREATER);break;case ef:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),s.clearDepth(Pe),be=Pe)},reset:function(){V=!1,ie=null,de=null,be=null,Ae=!1}}}function a(){let V=!1,Ae=null,ie=null,de=null,be=null,Pe=null,rt=null,Lt=null,jt=null;return{setTest:function(vt){V||(vt?ve(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(vt){Ae!==vt&&!V&&(s.stencilMask(vt),Ae=vt)},setFunc:function(vt,Tn,xn){(ie!==vt||de!==Tn||be!==xn)&&(s.stencilFunc(vt,Tn,xn),ie=vt,de=Tn,be=xn)},setOp:function(vt,Tn,xn){(Pe!==vt||rt!==Tn||Lt!==xn)&&(s.stencilOp(vt,Tn,xn),Pe=vt,rt=Tn,Lt=xn)},setLocked:function(vt){V=vt},setClear:function(vt){jt!==vt&&(s.clearStencil(vt),jt=vt)},reset:function(){V=!1,Ae=null,ie=null,de=null,be=null,Pe=null,rt=null,Lt=null,jt=null}}}const u=new n,f=new r,d=new a,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],w=null,R=!1,y=null,g=null,I=null,L=null,C=null,G=null,z=null,N=new Rt(0,0,0),Y=0,P=!1,A=null,B=null,oe=null,te=null,ce=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(k)[1]),se=le>=1):k.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),se=le>=2);let ae=null,re={};const U=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),Ue=new Gt().fromArray(U),Q=new Gt().fromArray(ne);function he(V,Ae,ie,de){const be=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(V,Pe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<ie;rt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Ae+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Pe}const Ee={};Ee[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),f.setFunc(Hs),pt(!1),ct(Mp),ve(s.CULL_FACE),O(vr);function ve(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function Te(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function Xe(V,Ae){return v[V]!==Ae?(s.bindFramebuffer(V,Ae),v[V]=Ae,V===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ae),V===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ve(V,Ae){let ie=S,de=!1;if(V){ie=x.get(Ae),ie===void 0&&(ie=[],x.set(Ae,ie));const be=V.textures;if(ie.length!==be.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,rt=be.length;Pe<rt;Pe++)ie[Pe]=s.COLOR_ATTACHMENT0+Pe;ie.length=be.length,de=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,de=!0);de&&s.drawBuffers(ie)}function Pt(V){return w!==V?(s.useProgram(V),w=V,!0):!1}const bt={[Vr]:s.FUNC_ADD,[Q_]:s.FUNC_SUBTRACT,[J_]:s.FUNC_REVERSE_SUBTRACT};bt[ev]=s.MIN,bt[tv]=s.MAX;const lt={[nv]:s.ZERO,[iv]:s.ONE,[rv]:s.SRC_COLOR,[Yc]:s.SRC_ALPHA,[cv]:s.SRC_ALPHA_SATURATE,[lv]:s.DST_COLOR,[ov]:s.DST_ALPHA,[sv]:s.ONE_MINUS_SRC_COLOR,[jc]:s.ONE_MINUS_SRC_ALPHA,[uv]:s.ONE_MINUS_DST_COLOR,[av]:s.ONE_MINUS_DST_ALPHA,[fv]:s.CONSTANT_COLOR,[dv]:s.ONE_MINUS_CONSTANT_COLOR,[hv]:s.CONSTANT_ALPHA,[pv]:s.ONE_MINUS_CONSTANT_ALPHA};function O(V,Ae,ie,de,be,Pe,rt,Lt,jt,vt){if(V===vr){R===!0&&(Te(s.BLEND),R=!1);return}if(R===!1&&(ve(s.BLEND),R=!0),V!==Z_){if(V!==y||vt!==P){if((g!==Vr||C!==Vr)&&(s.blendEquation(s.FUNC_ADD),g=Vr,C=Vr),vt)switch(V){case zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tp:s.blendFunc(s.ONE,s.ONE);break;case wp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ap:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ap:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,L=null,G=null,z=null,N.set(0,0,0),Y=0,y=V,P=vt}return}be=be||Ae,Pe=Pe||ie,rt=rt||de,(Ae!==g||be!==C)&&(s.blendEquationSeparate(bt[Ae],bt[be]),g=Ae,C=be),(ie!==I||de!==L||Pe!==G||rt!==z)&&(s.blendFuncSeparate(lt[ie],lt[de],lt[Pe],lt[rt]),I=ie,L=de,G=Pe,z=rt),(Lt.equals(N)===!1||jt!==Y)&&(s.blendColor(Lt.r,Lt.g,Lt.b,jt),N.copy(Lt),Y=jt),y=V,P=!1}function vn(V,Ae){V.side===Ni?Te(s.CULL_FACE):ve(s.CULL_FACE);let ie=V.side===Un;Ae&&(ie=!ie),pt(ie),V.blending===zs&&V.transparent===!1?O(vr):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),f.setFunc(V.depthFunc),f.setTest(V.depthTest),f.setMask(V.depthWrite),u.setMask(V.colorWrite);const de=V.stencilWrite;d.setTest(de),de&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Tt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(V){A!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),A=V)}function ct(V){V!==q_?(ve(s.CULL_FACE),V!==B&&(V===Mp?s.cullFace(s.BACK):V===K_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),B=V}function Ye(V){V!==oe&&(se&&s.lineWidth(V),oe=V)}function Tt(V,Ae,ie){V?(ve(s.POLYGON_OFFSET_FILL),(te!==Ae||ce!==ie)&&(s.polygonOffset(Ae,ie),te=Ae,ce=ie)):Te(s.POLYGON_OFFSET_FILL)}function Ge(V){V?ve(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function b(V){V===void 0&&(V=s.TEXTURE0+pe-1),ae!==V&&(s.activeTexture(V),ae=V)}function M(V,Ae,ie){ie===void 0&&(ae===null?ie=s.TEXTURE0+pe-1:ie=ae);let de=re[ie];de===void 0&&(de={type:void 0,texture:void 0},re[ie]=de),(de.type!==V||de.texture!==Ae)&&(ae!==ie&&(s.activeTexture(ie),ae=ie),s.bindTexture(V,Ae||Ee[V]),de.type=V,de.texture=Ae)}function $(){const V=re[ae];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function fe(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function He(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xe(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(V){Ue.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ue.copy(V))}function Fe(V){Q.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Q.copy(V))}function ft(V,Ae){let ie=m.get(Ae);ie===void 0&&(ie=new WeakMap,m.set(Ae,ie));let de=ie.get(V);de===void 0&&(de=s.getUniformBlockIndex(Ae,V.name),ie.set(V,de))}function it(V,Ae){const de=m.get(Ae).get(V);p.get(Ae)!==de&&(s.uniformBlockBinding(Ae,de,V.__bindingPointIndex),p.set(Ae,de))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ae=null,re={},v={},x=new WeakMap,S=[],w=null,R=!1,y=null,g=null,I=null,L=null,C=null,G=null,z=null,N=new Rt(0,0,0),Y=0,P=!1,A=null,B=null,oe=null,te=null,ce=null,Ue.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:ve,disable:Te,bindFramebuffer:Xe,drawBuffers:Ve,useProgram:Pt,setBlending:O,setMaterial:vn,setFlipSided:pt,setCullFace:ct,setLineWidth:Ye,setPolygonOffset:Tt,setScissorTest:Ge,activeTexture:b,bindTexture:M,unbindTexture:$,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:Ne,texImage3D:Je,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:qe,texStorage3D:xe,texSubImage2D:ue,texSubImage3D:He,compressedTexSubImage2D:we,compressedTexSubImage3D:Ke,scissor:et,viewport:Fe,reset:Mt}}function QE(s,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ut,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(b,M){return S?new OffscreenCanvas(b,M):Oo("canvas")}function R(b,M,$){let fe=1;const _e=Ge(b);if((_e.width>$||_e.height>$)&&(fe=$/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ue=Math.floor(fe*_e.width),He=Math.floor(fe*_e.height);v===void 0&&(v=w(ue,He));const we=M?w(ue,He):v;return we.width=ue,we.height=He,we.getContext("2d").drawImage(b,0,0,ue,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ue+"x"+He+")."),we}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),b;return b}function y(b){return b.generateMipmaps}function g(b){s.generateMipmap(b)}function I(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(b,M,$,fe,_e=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ue=M;if(M===s.RED&&($===s.FLOAT&&(ue=s.R32F),$===s.HALF_FLOAT&&(ue=s.R16F),$===s.UNSIGNED_BYTE&&(ue=s.R8)),M===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.R8UI),$===s.UNSIGNED_SHORT&&(ue=s.R16UI),$===s.UNSIGNED_INT&&(ue=s.R32UI),$===s.BYTE&&(ue=s.R8I),$===s.SHORT&&(ue=s.R16I),$===s.INT&&(ue=s.R32I)),M===s.RG&&($===s.FLOAT&&(ue=s.RG32F),$===s.HALF_FLOAT&&(ue=s.RG16F),$===s.UNSIGNED_BYTE&&(ue=s.RG8)),M===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RG8UI),$===s.UNSIGNED_SHORT&&(ue=s.RG16UI),$===s.UNSIGNED_INT&&(ue=s.RG32UI),$===s.BYTE&&(ue=s.RG8I),$===s.SHORT&&(ue=s.RG16I),$===s.INT&&(ue=s.RG32I)),M===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),$===s.UNSIGNED_INT&&(ue=s.RGB32UI),$===s.BYTE&&(ue=s.RGB8I),$===s.SHORT&&(ue=s.RGB16I),$===s.INT&&(ue=s.RGB32I)),M===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),$===s.UNSIGNED_INT&&(ue=s.RGBA32UI),$===s.BYTE&&(ue=s.RGBA8I),$===s.SHORT&&(ue=s.RGBA16I),$===s.INT&&(ue=s.RGBA32I)),M===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),M===s.RGBA){const He=_e?Cl:Et.getTransfer(fe);$===s.FLOAT&&(ue=s.RGBA32F),$===s.HALF_FLOAT&&(ue=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ue=He===wt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(b,M){let $;return b?M===null||M===jr||M===Io?$=s.DEPTH24_STENCIL8:M===Fi?$=s.DEPTH32F_STENCIL8:M===Uo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jr||M===Io?$=s.DEPTH_COMPONENT24:M===Fi?$=s.DEPTH_COMPONENT32F:M===Uo&&($=s.DEPTH_COMPONENT16),$}function G(b,M){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==ai&&b.minFilter!==mi?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function z(b){const M=b.target;M.removeEventListener("dispose",z),Y(M),M.isVideoTexture&&_.delete(M)}function N(b){const M=b.target;M.removeEventListener("dispose",N),A(M)}function Y(b){const M=r.get(b);if(M.__webglInit===void 0)return;const $=b.source,fe=x.get($);if(fe){const _e=fe[M.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(b),Object.keys(fe).length===0&&x.delete($)}r.remove(b)}function P(b){const M=r.get(b);s.deleteTexture(M.__webglTexture);const $=b.source,fe=x.get($);delete fe[M.__cacheKey],f.memory.textures--}function A(b){const M=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(M.__webglFramebuffer[fe]))for(let _e=0;_e<M.__webglFramebuffer[fe].length;_e++)s.deleteFramebuffer(M.__webglFramebuffer[fe][_e]);else s.deleteFramebuffer(M.__webglFramebuffer[fe]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[fe])}else{if(Array.isArray(M.__webglFramebuffer))for(let fe=0;fe<M.__webglFramebuffer.length;fe++)s.deleteFramebuffer(M.__webglFramebuffer[fe]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let fe=0;fe<M.__webglColorRenderbuffer.length;fe++)M.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[fe]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=b.textures;for(let fe=0,_e=$.length;fe<_e;fe++){const ue=r.get($[fe]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),f.memory.textures--),r.remove($[fe])}r.remove(b)}let B=0;function oe(){B=0}function te(){const b=B;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),B+=1,b}function ce(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function pe(b,M){const $=r.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){const fe=b.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q($,b,M);return}}n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+M)}function se(b,M){const $=r.get(b);if(b.version>0&&$.__version!==b.version){Q($,b,M);return}n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+M)}function le(b,M){const $=r.get(b);if(b.version>0&&$.__version!==b.version){Q($,b,M);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+M)}function k(b,M){const $=r.get(b);if(b.version>0&&$.__version!==b.version){he($,b,M);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+M)}const ae={[rf]:s.REPEAT,[Wr]:s.CLAMP_TO_EDGE,[sf]:s.MIRRORED_REPEAT},re={[ai]:s.NEAREST,[Tv]:s.NEAREST_MIPMAP_NEAREST,[Za]:s.NEAREST_MIPMAP_LINEAR,[mi]:s.LINEAR,[mc]:s.LINEAR_MIPMAP_NEAREST,[Xr]:s.LINEAR_MIPMAP_LINEAR},U={[Pv]:s.NEVER,[Nv]:s.ALWAYS,[bv]:s.LESS,[km]:s.LEQUAL,[Dv]:s.EQUAL,[Iv]:s.GEQUAL,[Lv]:s.GREATER,[Uv]:s.NOTEQUAL};function ne(b,M){if(M.type===Fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===mi||M.magFilter===mc||M.magFilter===Za||M.magFilter===Xr||M.minFilter===mi||M.minFilter===mc||M.minFilter===Za||M.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,ae[M.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ae[M.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ae[M.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,re[M.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,U[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ai||M.minFilter!==Za&&M.minFilter!==Xr||M.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ue(b,M){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",z));const fe=M.source;let _e=x.get(fe);_e===void 0&&(_e={},x.set(fe,_e));const ue=ce(M);if(ue!==b.__cacheKey){_e[ue]===void 0&&(_e[ue]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,$=!0),_e[ue].usedTimes++;const He=_e[b.__cacheKey];He!==void 0&&(_e[b.__cacheKey].usedTimes--,He.usedTimes===0&&P(M)),b.__cacheKey=ue,b.__webglTexture=_e[ue].texture}return $}function Q(b,M,$){let fe=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(fe=s.TEXTURE_3D);const _e=Ue(b,M),ue=M.source;n.bindTexture(fe,b.__webglTexture,s.TEXTURE0+$);const He=r.get(ue);if(ue.version!==He.__version||_e===!0){n.activeTexture(s.TEXTURE0+$);const we=Et.getPrimaries(Et.workingColorSpace),Ke=M.colorSpace===_r?null:Et.getPrimaries(M.colorSpace),qe=M.colorSpace===_r||we===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let xe=R(M.image,!1,a.maxTextureSize);xe=Tt(M,xe);const Ne=u.convert(M.format,M.colorSpace),Je=u.convert(M.type);let et=L(M.internalFormat,Ne,Je,M.colorSpace,M.isVideoTexture);ne(fe,M);let Fe;const ft=M.mipmaps,it=M.isVideoTexture!==!0,Mt=He.__version===void 0||_e===!0,V=ue.dataReady,Ae=G(M,xe);if(M.isDepthTexture)et=C(M.format===Fo,M.type),Mt&&(it?n.texStorage2D(s.TEXTURE_2D,1,et,xe.width,xe.height):n.texImage2D(s.TEXTURE_2D,0,et,xe.width,xe.height,0,Ne,Je,null));else if(M.isDataTexture)if(ft.length>0){it&&Mt&&n.texStorage2D(s.TEXTURE_2D,Ae,et,ft[0].width,ft[0].height);for(let ie=0,de=ft.length;ie<de;ie++)Fe=ft[ie],it?V&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,Fe.width,Fe.height,Ne,Je,Fe.data):n.texImage2D(s.TEXTURE_2D,ie,et,Fe.width,Fe.height,0,Ne,Je,Fe.data);M.generateMipmaps=!1}else it?(Mt&&n.texStorage2D(s.TEXTURE_2D,Ae,et,xe.width,xe.height),V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,xe.width,xe.height,Ne,Je,xe.data)):n.texImage2D(s.TEXTURE_2D,0,et,xe.width,xe.height,0,Ne,Je,xe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&Mt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,et,ft[0].width,ft[0].height,xe.depth);for(let ie=0,de=ft.length;ie<de;ie++)if(Fe=ft[ie],M.format!==oi)if(Ne!==null)if(it){if(V)if(M.layerUpdates.size>0){const be=$p(Fe.width,Fe.height,M.format,M.type);for(const Pe of M.layerUpdates){const rt=Fe.data.subarray(Pe*be/Fe.data.BYTES_PER_ELEMENT,(Pe+1)*be/Fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Pe,Fe.width,Fe.height,1,Ne,rt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Fe.width,Fe.height,xe.depth,Ne,Fe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,et,Fe.width,Fe.height,xe.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Fe.width,Fe.height,xe.depth,Ne,Je,Fe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ie,et,Fe.width,Fe.height,xe.depth,0,Ne,Je,Fe.data)}else{it&&Mt&&n.texStorage2D(s.TEXTURE_2D,Ae,et,ft[0].width,ft[0].height);for(let ie=0,de=ft.length;ie<de;ie++)Fe=ft[ie],M.format!==oi?Ne!==null?it?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,Fe.width,Fe.height,Ne,Fe.data):n.compressedTexImage2D(s.TEXTURE_2D,ie,et,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,Fe.width,Fe.height,Ne,Je,Fe.data):n.texImage2D(s.TEXTURE_2D,ie,et,Fe.width,Fe.height,0,Ne,Je,Fe.data)}else if(M.isDataArrayTexture)if(it){if(Mt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,et,xe.width,xe.height,xe.depth),V)if(M.layerUpdates.size>0){const ie=$p(xe.width,xe.height,M.format,M.type);for(const de of M.layerUpdates){const be=xe.data.subarray(de*ie/xe.data.BYTES_PER_ELEMENT,(de+1)*ie/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,xe.width,xe.height,1,Ne,Je,be)}M.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ne,Je,xe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,et,xe.width,xe.height,xe.depth,0,Ne,Je,xe.data);else if(M.isData3DTexture)it?(Mt&&n.texStorage3D(s.TEXTURE_3D,Ae,et,xe.width,xe.height,xe.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ne,Je,xe.data)):n.texImage3D(s.TEXTURE_3D,0,et,xe.width,xe.height,xe.depth,0,Ne,Je,xe.data);else if(M.isFramebufferTexture){if(Mt)if(it)n.texStorage2D(s.TEXTURE_2D,Ae,et,xe.width,xe.height);else{let ie=xe.width,de=xe.height;for(let be=0;be<Ae;be++)n.texImage2D(s.TEXTURE_2D,be,et,ie,de,0,Ne,Je,null),ie>>=1,de>>=1}}else if(ft.length>0){if(it&&Mt){const ie=Ge(ft[0]);n.texStorage2D(s.TEXTURE_2D,Ae,et,ie.width,ie.height)}for(let ie=0,de=ft.length;ie<de;ie++)Fe=ft[ie],it?V&&n.texSubImage2D(s.TEXTURE_2D,ie,0,0,Ne,Je,Fe):n.texImage2D(s.TEXTURE_2D,ie,et,Ne,Je,Fe);M.generateMipmaps=!1}else if(it){if(Mt){const ie=Ge(xe);n.texStorage2D(s.TEXTURE_2D,Ae,et,ie.width,ie.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,Je,xe)}else n.texImage2D(s.TEXTURE_2D,0,et,Ne,Je,xe);y(M)&&g(fe),He.__version=ue.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function he(b,M,$){if(M.image.length!==6)return;const fe=Ue(b,M),_e=M.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+$);const ue=r.get(_e);if(_e.version!==ue.__version||fe===!0){n.activeTexture(s.TEXTURE0+$);const He=Et.getPrimaries(Et.workingColorSpace),we=M.colorSpace===_r?null:Et.getPrimaries(M.colorSpace),Ke=M.colorSpace===_r||He===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,xe=M.image[0]&&M.image[0].isDataTexture,Ne=[];for(let de=0;de<6;de++)!qe&&!xe?Ne[de]=R(M.image[de],!0,a.maxCubemapSize):Ne[de]=xe?M.image[de].image:M.image[de],Ne[de]=Tt(M,Ne[de]);const Je=Ne[0],et=u.convert(M.format,M.colorSpace),Fe=u.convert(M.type),ft=L(M.internalFormat,et,Fe,M.colorSpace),it=M.isVideoTexture!==!0,Mt=ue.__version===void 0||fe===!0,V=_e.dataReady;let Ae=G(M,Je);ne(s.TEXTURE_CUBE_MAP,M);let ie;if(qe){it&&Mt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ft,Je.width,Je.height);for(let de=0;de<6;de++){ie=Ne[de].mipmaps;for(let be=0;be<ie.length;be++){const Pe=ie[be];M.format!==oi?et!==null?it?V&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,et,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ft,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,0,0,Pe.width,Pe.height,et,Fe,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be,ft,Pe.width,Pe.height,0,et,Fe,Pe.data)}}}else{if(ie=M.mipmaps,it&&Mt){ie.length>0&&Ae++;const de=Ge(Ne[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,ft,de.width,de.height)}for(let de=0;de<6;de++)if(xe){it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne[de].width,Ne[de].height,et,Fe,Ne[de].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,Ne[de].width,Ne[de].height,0,et,Fe,Ne[de].data);for(let be=0;be<ie.length;be++){const rt=ie[be].image[de].image;it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,rt.width,rt.height,et,Fe,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ft,rt.width,rt.height,0,et,Fe,rt.data)}}else{it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,et,Fe,Ne[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,et,Fe,Ne[de]);for(let be=0;be<ie.length;be++){const Pe=ie[be];it?V&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,0,0,et,Fe,Pe.image[de]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be+1,ft,et,Fe,Pe.image[de])}}}y(M)&&g(s.TEXTURE_CUBE_MAP),ue.__version=_e.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Ee(b,M,$,fe,_e,ue){const He=u.convert($.format,$.colorSpace),we=u.convert($.type),Ke=L($.internalFormat,He,we,$.colorSpace),qe=r.get(M),xe=r.get($);if(xe.__renderTarget=M,!qe.__hasExternalTextures){const Ne=Math.max(1,M.width>>ue),Je=Math.max(1,M.height>>ue);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,ue,Ke,Ne,Je,M.depth,0,He,we,null):n.texImage2D(_e,ue,Ke,Ne,Je,0,He,we,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),ct(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,_e,xe.__webglTexture,0,pt(M)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,_e,xe.__webglTexture,ue),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(b,M,$){if(s.bindRenderbuffer(s.RENDERBUFFER,b),M.depthBuffer){const fe=M.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,ue=C(M.stencilBuffer,_e),He=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=pt(M);ct(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ue,M.width,M.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ue,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ue,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,b)}else{const fe=M.textures;for(let _e=0;_e<fe.length;_e++){const ue=fe[_e],He=u.convert(ue.format,ue.colorSpace),we=u.convert(ue.type),Ke=L(ue.internalFormat,He,we,ue.colorSpace),qe=pt(M);$&&ct(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,Ke,M.width,M.height):ct(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,Ke,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ke,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(M.depthTexture);fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),pe(M.depthTexture,0);const _e=fe.__webglTexture,ue=pt(M);if(M.depthTexture.format===No)ct(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(M.depthTexture.format===Fo)ct(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Xe(b){const M=r.get(b),$=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const fe=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),fe){const _e=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),M.__depthDisposeCallback=_e}M.__boundDepthTexture=fe}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const fe=b.texture.mipmaps;fe&&fe.length>0?Te(M.__webglFramebuffer[0],b):Te(M.__webglFramebuffer,b)}else if($){M.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[fe]),M.__webglDepthbuffer[fe]===void 0)M.__webglDepthbuffer[fe]=s.createRenderbuffer(),ve(M.__webglDepthbuffer[fe],b,!1);else{const _e=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ue)}}else{const fe=b.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),ve(M.__webglDepthbuffer,b,!1);else{const _e=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ue)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(b,M,$){const fe=r.get(b);M!==void 0&&Ee(fe.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Xe(b)}function Pt(b){const M=b.texture,$=r.get(b),fe=r.get(M);b.addEventListener("dispose",N);const _e=b.textures,ue=b.isWebGLCubeRenderTarget===!0,He=_e.length>1;if(He||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=M.version,f.memory.textures++),ue){$.__webglFramebuffer=[];for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[we]=[];for(let Ke=0;Ke<M.mipmaps.length;Ke++)$.__webglFramebuffer[we][Ke]=s.createFramebuffer()}else $.__webglFramebuffer[we]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let we=0;we<M.mipmaps.length;we++)$.__webglFramebuffer[we]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(He)for(let we=0,Ke=_e.length;we<Ke;we++){const qe=r.get(_e[we]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),f.memory.textures++)}if(b.samples>0&&ct(b)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<_e.length;we++){const Ke=_e[we];$.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const qe=u.convert(Ke.format,Ke.colorSpace),xe=u.convert(Ke.type),Ne=L(Ke.internalFormat,qe,xe,Ke.colorSpace,b.isXRRenderTarget===!0),Je=pt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Ne,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,$.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ve($.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,M);for(let we=0;we<6;we++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ke=0;Ke<M.mipmaps.length;Ke++)Ee($.__webglFramebuffer[we][Ke],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ke);else Ee($.__webglFramebuffer[we],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(M)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(He){for(let we=0,Ke=_e.length;we<Ke;we++){const qe=_e[we],xe=r.get(qe);n.bindTexture(s.TEXTURE_2D,xe.__webglTexture),ne(s.TEXTURE_2D,qe),Ee($.__webglFramebuffer,b,qe,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,0),y(qe)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let we=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(we=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,fe.__webglTexture),ne(we,M),M.mipmaps&&M.mipmaps.length>0)for(let Ke=0;Ke<M.mipmaps.length;Ke++)Ee($.__webglFramebuffer[Ke],b,M,s.COLOR_ATTACHMENT0,we,Ke);else Ee($.__webglFramebuffer,b,M,s.COLOR_ATTACHMENT0,we,0);y(M)&&g(we),n.unbindTexture()}b.depthBuffer&&Xe(b)}function bt(b){const M=b.textures;for(let $=0,fe=M.length;$<fe;$++){const _e=M[$];if(y(_e)){const ue=I(b),He=r.get(_e).__webglTexture;n.bindTexture(ue,He),g(ue),n.unbindTexture()}}}const lt=[],O=[];function vn(b){if(b.samples>0){if(ct(b)===!1){const M=b.textures,$=b.width,fe=b.height;let _e=s.COLOR_BUFFER_BIT;const ue=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(b),we=M.length>1;if(we)for(let qe=0;qe<M.length;qe++)n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Ke=b.texture.mipmaps;Ke&&Ke.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let qe=0;qe<M.length;qe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[qe]);const xe=r.get(M[qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,$,fe,0,0,$,fe,_e,s.NEAREST),p===!0&&(lt.length=0,O.length=0,lt.push(s.COLOR_ATTACHMENT0+qe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(lt.push(ue),O.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let qe=0;qe<M.length;qe++){n.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,He.__webglColorRenderbuffer[qe]);const xe=r.get(M[qe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,xe,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const M=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function pt(b){return Math.min(a.maxSamples,b.samples)}function ct(b){const M=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(b){const M=f.render.frame;_.get(b)!==M&&(_.set(b,M),b.update())}function Tt(b,M){const $=b.colorSpace,fe=b.format,_e=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==Ws&&$!==_r&&(Et.getTransfer($)===wt?(fe!==oi||_e!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),M}function Ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=pe,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=k,this.rebindTextures=Ve,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ct}function JE(s,e){function n(r,a=_r){let u;const f=Et.getTransfer(a);if(r===zi)return s.UNSIGNED_BYTE;if(r===Of)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Lm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===bm)return s.BYTE;if(r===Dm)return s.SHORT;if(r===Uo)return s.UNSIGNED_SHORT;if(r===Ff)return s.INT;if(r===jr)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===ko)return s.HALF_FLOAT;if(r===Um)return s.ALPHA;if(r===Im)return s.RGB;if(r===oi)return s.RGBA;if(r===No)return s.DEPTH_COMPONENT;if(r===Fo)return s.DEPTH_STENCIL;if(r===Nm)return s.RED;if(r===zf)return s.RED_INTEGER;if(r===Fm)return s.RG;if(r===Bf)return s.RG_INTEGER;if(r===Hf)return s.RGBA_INTEGER;if(r===yl||r===Sl||r===El||r===Ml)if(f===wt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===of||r===af||r===lf||r===uf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===of)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===af)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===uf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cf||r===ff||r===df)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===cf||r===ff)return f===wt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===df)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hf||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===yf||r===Sf||r===Ef||r===Mf||r===Tf||r===wf||r===Af)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===hf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_f)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ef)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wf)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Af)return f===wt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===Rf||r===Cf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Tl)return f===wt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Om||r===Pf||r===bf||r===Df)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Tl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Pf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Df)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Io?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const eM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new _n,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Hi({vertexShader:eM,fragmentShader:tM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new Vo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iM extends $r{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,S=null,w=null;const R=new nM,y=n.getContextAttributes();let g=null,I=null;const L=[],C=[],G=new ut;let z=null;const N=new Kn;N.viewport=new Gt;const Y=new Kn;Y.viewport=new Gt;const P=[N,Y],A=new E0;let B=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=L[Q];return he===void 0&&(he=new Fc,L[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=L[Q];return he===void 0&&(he=new Fc,L[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=L[Q];return he===void 0&&(he=new Fc,L[Q]=he),he.getHandSpace()};function te(Q){const he=C.indexOf(Q.inputSource);if(he===-1)return;const Ee=L[he];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,m||f),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ce(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",pe);for(let Q=0;Q<L.length;Q++){const he=C[Q];he!==null&&(C[Q]=null,L[Q].disconnect(he))}B=null,oe=null,R.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,I=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ve=null,Te=null;y.depth&&(Te=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=y.stencil?Fo:No,ve=y.stencil?Io:jr);const Xe={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Xe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new qr(x.textureWidth,x.textureHeight,{format:oi,type:zi,depthTexture:new Zm(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,Ee),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new qr(S.framebufferWidth,S.framebufferHeight,{format:oi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function pe(Q){for(let he=0;he<Q.removed.length;he++){const Ee=Q.removed[he],ve=C.indexOf(Ee);ve>=0&&(C[ve]=null,L[ve].disconnect(Ee))}for(let he=0;he<Q.added.length;he++){const Ee=Q.added[he];let ve=C.indexOf(Ee);if(ve===-1){for(let Xe=0;Xe<L.length;Xe++)if(Xe>=C.length){C.push(Ee),ve=Xe;break}else if(C[Xe]===null){C[Xe]=Ee,ve=Xe;break}if(ve===-1)break}const Te=L[ve];Te&&Te.connect(Ee)}}const se=new Z,le=new Z;function k(Q,he,Ee){se.setFromMatrixPosition(he.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);const ve=se.distanceTo(le),Te=he.projectionMatrix.elements,Xe=Ee.projectionMatrix.elements,Ve=Te[14]/(Te[10]-1),Pt=Te[14]/(Te[10]+1),bt=(Te[9]+1)/Te[5],lt=(Te[9]-1)/Te[5],O=(Te[8]-1)/Te[0],vn=(Xe[8]+1)/Xe[0],pt=Ve*O,ct=Ve*vn,Ye=ve/(-O+vn),Tt=Ye*-O;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Tt),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Ge=Ve+Ye,b=Pt+Ye,M=pt-Tt,$=ct+(ve-Tt),fe=bt*Pt/b*Ge,_e=lt*Pt/b*Ge;Q.projectionMatrix.makePerspective(M,$,fe,_e,Ge,b),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let he=Q.near,Ee=Q.far;R.texture!==null&&(R.depthNear>0&&(he=R.depthNear),R.depthFar>0&&(Ee=R.depthFar)),A.near=Y.near=N.near=he,A.far=Y.far=N.far=Ee,(B!==A.near||oe!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,oe=A.far),N.layers.mask=Q.layers.mask|2,Y.layers.mask=Q.layers.mask|4,A.layers.mask=N.layers.mask|Y.layers.mask;const ve=Q.parent,Te=A.cameras;ae(A,ve);for(let Xe=0;Xe<Te.length;Xe++)ae(Te[Xe],ve);Te.length===2?k(A,N,Y):A.projectionMatrix.copy(N.projectionMatrix),re(Q,A,ve)};function re(Q,he,Ee){Ee===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Lf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(A)};let U=null;function ne(Q,he){if(_=he.getViewerPose(m||f),w=he,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let ve=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ve=0;Ve<Ee.length;Ve++){const Pt=Ee[Ve];let bt=null;if(S!==null)bt=S.getViewport(Pt);else{const O=v.getViewSubImage(x,Pt);bt=O.viewport,Ve===0&&(e.setRenderTargetTextures(I,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(I))}let lt=P[Ve];lt===void 0&&(lt=new Kn,lt.layers.enable(Ve),lt.viewport=new Gt,P[Ve]=lt),lt.matrix.fromArray(Pt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(Pt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(bt.x,bt.y,bt.width,bt.height),Ve===0&&(A.matrix.copy(lt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(lt)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const Ve=v.getDepthInformation(Ee[0]);Ve&&Ve.isValid&&Ve.texture&&R.init(e,Ve,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const ve=C[Ee],Te=L[Ee];ve!==null&&Te!==void 0&&Te.update(ve,he,m||f)}U&&U(Q,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),w=null}const Ue=new Jm;Ue.setAnimationLoop(ne),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const Br=new Bi,rM=new Yt;function sM(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,jm(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,I,L,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(u(y,g),w(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),R(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,I,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Un&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Un&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const I=e.get(g),L=I.envMap,C=I.envMapRotation;L&&(y.envMap.value=L,Br.copy(C),Br.x*=-1,Br.y*=-1,Br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),y.envMapRotation.value.setFromMatrix4(rM.makeRotationFromEuler(Br)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,I,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*I,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,I){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Un&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const I=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function oM(s,e,n,r){let a={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,L){const C=L.program;r.uniformBlockBinding(I,C)}function m(I,L){let C=a[I.id];C===void 0&&(w(I),C=_(I),a[I.id]=C,I.addEventListener("dispose",y));const G=L.program;r.updateUBOMapping(I,G);const z=e.render.frame;u[I.id]!==z&&(x(I),u[I.id]=z)}function _(I){const L=v();I.__bindingPointIndex=L;const C=s.createBuffer(),G=I.__size,z=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,G,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function v(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const L=a[I.id],C=I.uniforms,G=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let z=0,N=C.length;z<N;z++){const Y=Array.isArray(C[z])?C[z]:[C[z]];for(let P=0,A=Y.length;P<A;P++){const B=Y[P];if(S(B,z,P,G)===!0){const oe=B.__offset,te=Array.isArray(B.value)?B.value:[B.value];let ce=0;for(let pe=0;pe<te.length;pe++){const se=te[pe],le=R(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,oe+ce,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,L,C,G){const z=I.value,N=L+"_"+C;if(G[N]===void 0)return typeof z=="number"||typeof z=="boolean"?G[N]=z:G[N]=z.clone(),!0;{const Y=G[N];if(typeof z=="number"||typeof z=="boolean"){if(Y!==z)return G[N]=z,!0}else if(Y.equals(z)===!1)return Y.copy(z),!0}return!1}function w(I){const L=I.uniforms;let C=0;const G=16;for(let N=0,Y=L.length;N<Y;N++){const P=Array.isArray(L[N])?L[N]:[L[N]];for(let A=0,B=P.length;A<B;A++){const oe=P[A],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let ce=0,pe=te.length;ce<pe;ce++){const se=te[ce],le=R(se),k=C%G,ae=k%le.boundary,re=k+ae;C+=ae,re!==0&&G-re<le.storage&&(C+=G-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const z=C%G;return z>0&&(C+=G-z),I.__size=C,I.__cache={},this}function R(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function y(I){const L=I.target;L.removeEventListener("dispose",y);const C=f.indexOf(L.__bindingPointIndex);f.splice(C,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class aM{constructor(e={}){const{canvas:n=kv(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const w=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const I=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let G=!1;this._outputColorSpace=qn;let z=0,N=0,Y=null,P=-1,A=null;const B=new Gt,oe=new Gt;let te=null;const ce=new Rt(0);let pe=0,se=n.width,le=n.height,k=1,ae=null,re=null;const U=new Gt(0,0,se,le),ne=new Gt(0,0,se,le);let Ue=!1;const Q=new $m;let he=!1,Ee=!1;const ve=new Yt,Te=new Yt,Xe=new Z,Ve=new Gt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function lt(){return Y===null?k:1}let O=r;function vn(T,W){return n.getContext(T,W)}try{const T={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nf}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),O===null){const W="webgl2";if(O=vn(W,T),O===null)throw vn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pt,ct,Ye,Tt,Ge,b,M,$,fe,_e,ue,He,we,Ke,qe,xe,Ne,Je,et,Fe,ft,it,Mt,V;function Ae(){pt=new _S(O),pt.init(),it=new JE(O,pt),ct=new cS(O,pt,e,it),Ye=new ZE(O,pt),ct.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Tt=new yS(O),Ge=new kE,b=new QE(O,pt,Ye,Ge,ct,it,Tt),M=new dS(C),$=new gS(C),fe=new A0(O),Mt=new lS(O,fe),_e=new vS(O,fe,Tt,Mt),ue=new ES(O,_e,fe,Tt),et=new SS(O,ct,b),xe=new fS(Ge),He=new OE(C,M,$,pt,ct,Mt,xe),we=new sM(C,Ge),Ke=new BE,qe=new YE(pt),Je=new aS(C,M,$,Ye,ue,S,p),Ne=new KE(C,ue,ct),V=new oM(O,Tt,ct,Ye),Fe=new uS(O,pt,Tt),ft=new xS(O,pt,Tt),Tt.programs=He.programs,C.capabilities=ct,C.extensions=pt,C.properties=Ge,C.renderLists=Ke,C.shadowMap=Ne,C.state=Ye,C.info=Tt}Ae();const ie=new iM(C,O);this.xr=ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(se,le,!1))},this.getSize=function(T){return T.set(se,le)},this.setSize=function(T,W,ee=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,le=W,n.width=Math.floor(T*k),n.height=Math.floor(W*k),ee===!0&&(n.style.width=T+"px",n.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(se*k,le*k).floor()},this.setDrawingBufferSize=function(T,W,ee){se=T,le=W,k=ee,n.width=Math.floor(T*ee),n.height=Math.floor(W*ee),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(B)},this.getViewport=function(T){return T.copy(U)},this.setViewport=function(T,W,ee,q){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,W,ee,q),Ye.viewport(B.copy(U).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,W,ee,q){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,W,ee,q),Ye.scissor(oe.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(T){Ye.setScissorTest(Ue=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,ee=!0){let q=0;if(T){let X=!1;if(Y!==null){const Se=Y.texture.format;X=Se===Hf||Se===Bf||Se===zf}if(X){const Se=Y.texture.type,Re=Se===zi||Se===jr||Se===Uo||Se===Io||Se===Of||Se===kf,De=Je.getClearColor(),Oe=Je.getClearAlpha(),tt=De.r,Qe=De.g,ze=De.b;Re?(w[0]=tt,w[1]=Qe,w[2]=ze,w[3]=Oe,O.clearBufferuiv(O.COLOR,0,w)):(R[0]=tt,R[1]=Qe,R[2]=ze,R[3]=Oe,O.clearBufferiv(O.COLOR,0,R))}else q|=O.COLOR_BUFFER_BIT}W&&(q|=O.DEPTH_BUFFER_BIT),ee&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Je.dispose(),Ke.dispose(),qe.dispose(),Ge.dispose(),M.dispose(),$.dispose(),ue.dispose(),Mt.dispose(),V.dispose(),He.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Qr),ie.removeEventListener("sessionend",Vi),vi.stop()};function de(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const T=Tt.autoReset,W=Ne.enabled,ee=Ne.autoUpdate,q=Ne.needsUpdate,X=Ne.type;Ae(),Tt.autoReset=T,Ne.enabled=W,Ne.autoUpdate=ee,Ne.needsUpdate=q,Ne.type=X}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function rt(T){const W=T.target;W.removeEventListener("dispose",rt),Lt(W)}function Lt(T){jt(T),Ge.remove(T)}function jt(T){const W=Ge.get(T).programs;W!==void 0&&(W.forEach(function(ee){He.releaseProgram(ee)}),T.isShaderMaterial&&He.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,ee,q,X,Se){W===null&&(W=Pt);const Re=X.isMesh&&X.matrixWorld.determinant()<0,De=Xo(T,W,ee,q,X);Ye.setMaterial(q,Re);let Oe=ee.index,tt=1;if(q.wireframe===!0){if(Oe=_e.getWireframeAttribute(ee),Oe===void 0)return;tt=2}const Qe=ee.drawRange,ze=ee.attributes.position;let gt=Qe.start*tt,st=(Qe.start+Qe.count)*tt;Se!==null&&(gt=Math.max(gt,Se.start*tt),st=Math.min(st,(Se.start+Se.count)*tt)),Oe!==null?(gt=Math.max(gt,0),st=Math.min(st,Oe.count)):ze!=null&&(gt=Math.max(gt,0),st=Math.min(st,ze.count));const zt=st-gt;if(zt<0||zt===1/0)return;Mt.setup(X,q,De,ee,Oe);let Nt,_t=Fe;if(Oe!==null&&(Nt=fe.get(Oe),_t=ft,_t.setIndex(Nt)),X.isMesh)q.wireframe===!0?(Ye.setLineWidth(q.wireframeLinewidth*lt()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(X.isLine){let je=q.linewidth;je===void 0&&(je=1),Ye.setLineWidth(je*lt()),X.isLineSegments?_t.setMode(O.LINES):X.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else X.isPoints?_t.setMode(O.POINTS):X.isSprite&&_t.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Al("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))_t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const je=X._multiDrawStarts,Bt=X._multiDrawCounts,mt=X._multiDrawCount,un=Oe?fe.get(Oe).bytesPerElement:1,Wi=Ge.get(q).currentProgram.getUniforms();for(let yn=0;yn<mt;yn++)Wi.setValue(O,"_gl_DrawID",yn),_t.render(je[yn]/un,Bt[yn])}else if(X.isInstancedMesh)_t.renderInstances(gt,zt,X.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Bt=Math.min(ee.instanceCount,je);_t.renderInstances(gt,zt,Bt)}else _t.render(gt,zt)};function vt(T,W,ee){T.transparent===!0&&T.side===Ni&&T.forceSinglePass===!1?(T.side=Un,T.needsUpdate=!0,Jr(T,W,ee),T.side=yr,T.needsUpdate=!0,Jr(T,W,ee),T.side=Ni):Jr(T,W,ee)}this.compile=function(T,W,ee=null){ee===null&&(ee=T),g=qe.get(ee),g.init(W),L.push(g),ee.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),T!==ee&&T.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const q=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const De=Se[Re];vt(De,ee,X),q.add(De)}else vt(Se,ee,X),q.add(Se)}),g=L.pop(),q},this.compileAsync=function(T,W,ee=null){const q=this.compile(T,W,ee);return new Promise(X=>{function Se(){if(q.forEach(function(Re){Ge.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){X(T);return}setTimeout(Se,10)}pt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Tn=null;function xn(T){Tn&&Tn(T)}function Qr(){vi.stop()}function Vi(){vi.start()}const vi=new Jm;vi.setAnimationLoop(xn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(T){Tn=T,ie.setAnimationLoop(T),T===null?vi.stop():vi.start()},ie.addEventListener("sessionstart",Qr),ie.addEventListener("sessionend",Vi),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(W),W=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,W,Y),g=qe.get(T,L.length),g.init(W),L.push(g),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Te),Ee=this.localClippingEnabled,he=xe.init(this.clippingPlanes,Ee),y=Ke.get(T,I.length),y.init(),I.push(y),ie.enabled===!0&&ie.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&xi(Se,W,-1/0,C.sortObjects)}xi(T,W,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ae,re),bt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,bt&&Je.addToRenderList(y,T),this.info.render.frame++,he===!0&&xe.beginShadows();const ee=g.state.shadowsArray;Ne.render(ee,T,W),he===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=y.opaque,X=y.transmissive;if(g.setupLights(),W.isArrayCamera){const Se=W.cameras;if(X.length>0)for(let Re=0,De=Se.length;Re<De;Re++){const Oe=Se[Re];Er(q,X,T,Oe)}bt&&Je.render(T);for(let Re=0,De=Se.length;Re<De;Re++){const Oe=Se[Re];Sr(y,T,Oe,Oe.viewport)}}else X.length>0&&Er(q,X,T,W),bt&&Je.render(T),Sr(y,T,W);Y!==null&&N===0&&(b.updateMultisampleRenderTarget(Y),b.updateRenderTargetMipmap(Y)),T.isScene===!0&&T.onAfterRender(C,T,W),Mt.resetDefaultState(),P=-1,A=null,L.pop(),L.length>0?(g=L[L.length-1],he===!0&&xe.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function xi(T,W,ee,q){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){q&&Ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const Re=ue.update(T),De=T.material;De.visible&&y.push(T,Re,De,ee,Ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const Re=ue.update(T),De=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ve.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ve.copy(Re.boundingSphere.center)),Ve.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Oe=Re.groups;for(let tt=0,Qe=Oe.length;tt<Qe;tt++){const ze=Oe[tt],gt=De[ze.materialIndex];gt&&gt.visible&&y.push(T,Re,gt,ee,Ve.z,ze)}}else De.visible&&y.push(T,Re,De,ee,Ve.z,null)}}const Se=T.children;for(let Re=0,De=Se.length;Re<De;Re++)xi(Se[Re],W,ee,q)}function Sr(T,W,ee,q){const X=T.opaque,Se=T.transmissive,Re=T.transparent;g.setupLightsView(ee),he===!0&&xe.setGlobalState(C.clippingPlanes,ee),q&&Ye.viewport(B.copy(q)),X.length>0&&Gi(X,W,ee),Se.length>0&&Gi(Se,W,ee),Re.length>0&&Gi(Re,W,ee),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Er(T,W,ee,q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new qr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?ko:zi,minFilter:Xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Se=g.state.transmissionRenderTarget[q.id],Re=q.viewport||B;Se.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const De=C.getRenderTarget();C.setRenderTarget(Se),C.getClearColor(ce),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),bt&&Je.render(ee);const Oe=C.toneMapping;C.toneMapping=xr;const tt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),he===!0&&xe.setGlobalState(C.clippingPlanes,q),Gi(T,ee,q),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ze=0,gt=W.length;ze<gt;ze++){const st=W[ze],zt=st.object,Nt=st.geometry,_t=st.material,je=st.group;if(_t.side===Ni&&zt.layers.test(q.layers)){const Bt=_t.side;_t.side=Un,_t.needsUpdate=!0,Go(zt,ee,q,Nt,_t,je),_t.side=Bt,_t.needsUpdate=!0,Qe=!0}}Qe===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}C.setRenderTarget(De),C.setClearColor(ce,pe),tt!==void 0&&(q.viewport=tt),C.toneMapping=Oe}function Gi(T,W,ee){const q=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Se=T.length;X<Se;X++){const Re=T[X],De=Re.object,Oe=Re.geometry,tt=Re.group;let Qe=Re.material;Qe.allowOverride===!0&&q!==null&&(Qe=q),De.layers.test(ee.layers)&&Go(De,W,ee,Oe,Qe,tt)}}function Go(T,W,ee,q,X,Se){T.onBeforeRender(C,W,ee,q,X,Se),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(C,W,ee,q,T,Se),X.transparent===!0&&X.side===Ni&&X.forceSinglePass===!1?(X.side=Un,X.needsUpdate=!0,C.renderBufferDirect(ee,W,q,X,T,Se),X.side=yr,X.needsUpdate=!0,C.renderBufferDirect(ee,W,q,X,T,Se),X.side=Ni):C.renderBufferDirect(ee,W,q,X,T,Se),T.onAfterRender(C,W,ee,q,X,Se)}function Jr(T,W,ee){W.isScene!==!0&&(W=Pt);const q=Ge.get(T),X=g.state.lights,Se=g.state.shadowsArray,Re=X.state.version,De=He.getParameters(T,X.state,Se,W,ee),Oe=He.getProgramCacheKey(De);let tt=q.programs;q.environment=T.isMeshStandardMaterial?W.environment:null,q.fog=W.fog,q.envMap=(T.isMeshStandardMaterial?$:M).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,tt===void 0&&(T.addEventListener("dispose",rt),tt=new Map,q.programs=tt);let Qe=tt.get(Oe);if(Qe!==void 0){if(q.currentProgram===Qe&&q.lightsStateVersion===Re)return li(T,De),Qe}else De.uniforms=He.getUniforms(T),T.onBeforeCompile(De,C),Qe=He.acquireProgram(De,Oe),tt.set(Oe,Qe),q.uniforms=De.uniforms;const ze=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=xe.uniform),li(T,De),q.needsLights=Ul(T),q.lightsStateVersion=Re,q.needsLights&&(ze.ambientLightColor.value=X.state.ambient,ze.lightProbe.value=X.state.probe,ze.directionalLights.value=X.state.directional,ze.directionalLightShadows.value=X.state.directionalShadow,ze.spotLights.value=X.state.spot,ze.spotLightShadows.value=X.state.spotShadow,ze.rectAreaLights.value=X.state.rectArea,ze.ltc_1.value=X.state.rectAreaLTC1,ze.ltc_2.value=X.state.rectAreaLTC2,ze.pointLights.value=X.state.point,ze.pointLightShadows.value=X.state.pointShadow,ze.hemisphereLights.value=X.state.hemi,ze.directionalShadowMap.value=X.state.directionalShadowMap,ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ze.spotShadowMap.value=X.state.spotShadowMap,ze.spotLightMatrix.value=X.state.spotLightMatrix,ze.spotLightMap.value=X.state.spotLightMap,ze.pointShadowMap.value=X.state.pointShadowMap,ze.pointShadowMatrix.value=X.state.pointShadowMatrix),q.currentProgram=Qe,q.uniformsList=null,Qe}function Wo(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=Rl.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function li(T,W){const ee=Ge.get(T);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Xo(T,W,ee,q,X){W.isScene!==!0&&(W=Pt),b.resetTextureUnits();const Se=W.fog,Re=q.isMeshStandardMaterial?W.environment:null,De=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ws,Oe=(q.isMeshStandardMaterial?$:M).get(q.envMap||Re),tt=q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Qe=!!ee.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!ee.morphAttributes.position,gt=!!ee.morphAttributes.normal,st=!!ee.morphAttributes.color;let zt=xr;q.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(zt=C.toneMapping);const Nt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=Nt!==void 0?Nt.length:0,je=Ge.get(q),Bt=g.state.lights;if(he===!0&&(Ee===!0||T!==A)){const on=T===A&&q.id===P;xe.setState(q,T,on)}let mt=!1;q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Bt.state.version||je.outputColorSpace!==De||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isBatchedMesh&&je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&je.instancingMorph===!1&&X.morphTexture!==null||je.envMap!==Oe||q.fog===!0&&je.fog!==Se||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==xe.numPlanes||je.numIntersection!==xe.numIntersection)||je.vertexAlphas!==tt||je.vertexTangents!==Qe||je.morphTargets!==ze||je.morphNormals!==gt||je.morphColors!==st||je.toneMapping!==zt||je.morphTargetsCount!==_t)&&(mt=!0):(mt=!0,je.__version=q.version);let un=je.currentProgram;mt===!0&&(un=Jr(q,W,X));let Wi=!1,yn=!1,yi=!1;const Ct=un.getUniforms(),cn=je.uniforms;if(Ye.useProgram(un.program)&&(Wi=!0,yn=!0,yi=!0),q.id!==P&&(P=q.id,yn=!0),Wi||A!==T){Ye.buffers.depth.getReversed()?(ve.copy(T.projectionMatrix),Bv(ve),Hv(ve),Ct.setValue(O,"projectionMatrix",ve)):Ct.setValue(O,"projectionMatrix",T.projectionMatrix),Ct.setValue(O,"viewMatrix",T.matrixWorldInverse);const en=Ct.map.cameraPosition;en!==void 0&&en.setValue(O,Xe.setFromMatrixPosition(T.matrixWorld)),ct.logarithmicDepthBuffer&&Ct.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ct.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,yn=!0,yi=!0)}if(X.isSkinnedMesh){Ct.setOptional(O,X,"bindMatrix"),Ct.setOptional(O,X,"bindMatrixInverse");const on=X.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ct.setValue(O,"boneTexture",on.boneTexture,b))}X.isBatchedMesh&&(Ct.setOptional(O,X,"batchingTexture"),Ct.setValue(O,"batchingTexture",X._matricesTexture,b),Ct.setOptional(O,X,"batchingIdTexture"),Ct.setValue(O,"batchingIdTexture",X._indirectTexture,b),Ct.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Ct.setValue(O,"batchingColorTexture",X._colorsTexture,b));const Jt=ee.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&et.update(X,ee,un),(yn||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,Ct.setValue(O,"receiveShadow",X.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(cn.envMap.value=Oe,cn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&W.environment!==null&&(cn.envMapIntensity.value=W.environmentIntensity),yn&&(Ct.setValue(O,"toneMappingExposure",C.toneMappingExposure),je.needsLights&&Yo(cn,yi),Se&&q.fog===!0&&we.refreshFogUniforms(cn,Se),we.refreshMaterialUniforms(cn,q,k,le,g.state.transmissionRenderTarget[T.id]),Rl.upload(O,Wo(je),cn,b)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Rl.upload(O,Wo(je),cn,b),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ct.setValue(O,"center",X.center),Ct.setValue(O,"modelViewMatrix",X.modelViewMatrix),Ct.setValue(O,"normalMatrix",X.normalMatrix),Ct.setValue(O,"modelMatrix",X.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const on=q.uniformsGroups;for(let en=0,xt=on.length;en<xt;en++){const ui=on[en];V.update(ui,un),V.bind(ui,un)}}return un}function Yo(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Ul(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,W,ee){const q=Ge.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Ge.get(T.texture).__webglTexture=W,Ge.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:ee,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){const ee=Ge.get(T);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0};const jo=O.createFramebuffer();this.setRenderTarget=function(T,W=0,ee=0){Y=T,z=W,N=ee;let q=!0,X=null,Se=!1,Re=!1;if(T){const Oe=Ge.get(T);if(Oe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(O.FRAMEBUFFER,null),q=!1;else if(Oe.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Oe.__hasExternalTextures)b.rebindTextures(T,Ge.get(T.texture).__webglTexture,Ge.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ze=T.depthTexture;if(Oe.__boundDepthTexture!==ze){if(ze!==null&&Ge.has(ze)&&(T.width!==ze.image.width||T.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const tt=T.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Re=!0);const Qe=Ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?X=Qe[W][ee]:X=Qe[W],Se=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?X=Ge.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?X=Qe[ee]:X=Qe,B.copy(T.viewport),oe.copy(T.scissor),te=T.scissorTest}else B.copy(U).multiplyScalar(k).floor(),oe.copy(ne).multiplyScalar(k).floor(),te=Ue;if(ee!==0&&(X=jo),Ye.bindFramebuffer(O.FRAMEBUFFER,X)&&q&&Ye.drawBuffers(T,X),Ye.viewport(B),Ye.scissor(oe),Ye.setScissorTest(te),Se){const Oe=Ge.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,ee)}else if(Re){const Oe=Ge.get(T.texture),tt=W;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.__webglTexture,ee,tt)}else if(T!==null&&ee!==0){const Oe=Ge.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Oe.__webglTexture,ee)}P=-1},this.readRenderTargetPixels=function(T,W,ee,q,X,Se,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){Ye.bindFramebuffer(O.FRAMEBUFFER,De);try{const Oe=T.texture,tt=Oe.format,Qe=Oe.type;if(!ct.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-q&&ee>=0&&ee<=T.height-X&&O.readPixels(W,ee,q,X,it.convert(tt),it.convert(Qe),Se)}finally{const Oe=Y!==null?Ge.get(Y).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,W,ee,q,X,Se,Re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De)if(W>=0&&W<=T.width-q&&ee>=0&&ee<=T.height-X){Ye.bindFramebuffer(O.FRAMEBUFFER,De);const Oe=T.texture,tt=Oe.format,Qe=Oe.type;if(!ct.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.bufferData(O.PIXEL_PACK_BUFFER,Se.byteLength,O.STREAM_READ),O.readPixels(W,ee,q,X,it.convert(tt),it.convert(Qe),0);const gt=Y!==null?Ge.get(Y).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,gt);const st=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await zv(O,st,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ze),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Se),O.deleteBuffer(ze),O.deleteSync(st),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,ee=0){const q=Math.pow(2,-ee),X=Math.floor(T.image.width*q),Se=Math.floor(T.image.height*q),Re=W!==null?W.x:0,De=W!==null?W.y:0;b.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,ee,0,0,Re,De,X,Se),Ye.unbindTexture()};const qo=O.createFramebuffer(),Ko=O.createFramebuffer();this.copyTextureToTexture=function(T,W,ee=null,q=null,X=0,Se=null){Se===null&&(X!==0?(Al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=X,X=0):Se=0);let Re,De,Oe,tt,Qe,ze,gt,st,zt;const Nt=T.isCompressedTexture?T.mipmaps[Se]:T.image;if(ee!==null)Re=ee.max.x-ee.min.x,De=ee.max.y-ee.min.y,Oe=ee.isBox3?ee.max.z-ee.min.z:1,tt=ee.min.x,Qe=ee.min.y,ze=ee.isBox3?ee.min.z:0;else{const Jt=Math.pow(2,-X);Re=Math.floor(Nt.width*Jt),De=Math.floor(Nt.height*Jt),T.isDataArrayTexture?Oe=Nt.depth:T.isData3DTexture?Oe=Math.floor(Nt.depth*Jt):Oe=1,tt=0,Qe=0,ze=0}q!==null?(gt=q.x,st=q.y,zt=q.z):(gt=0,st=0,zt=0);const _t=it.convert(W.format),je=it.convert(W.type);let Bt;W.isData3DTexture?(b.setTexture3D(W,0),Bt=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(b.setTexture2DArray(W,0),Bt=O.TEXTURE_2D_ARRAY):(b.setTexture2D(W,0),Bt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const mt=O.getParameter(O.UNPACK_ROW_LENGTH),un=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Wi=O.getParameter(O.UNPACK_SKIP_PIXELS),yn=O.getParameter(O.UNPACK_SKIP_ROWS),yi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Nt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Nt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,tt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ze);const Ct=T.isDataArrayTexture||T.isData3DTexture,cn=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const Jt=Ge.get(T),on=Ge.get(W),en=Ge.get(Jt.__renderTarget),xt=Ge.get(on.__renderTarget);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,en.__webglFramebuffer),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ui=0;ui<Oe;ui++)Ct&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(T).__webglTexture,X,ze+ui),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(W).__webglTexture,Se,zt+ui)),O.blitFramebuffer(tt,Qe,Re,De,gt,st,Re,De,O.DEPTH_BUFFER_BIT,O.NEAREST);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||Ge.has(T)){const Jt=Ge.get(T),on=Ge.get(W);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,qo),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ko);for(let en=0;en<Oe;en++)Ct?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Jt.__webglTexture,X,ze+en):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Jt.__webglTexture,X),cn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,on.__webglTexture,Se,zt+en):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,on.__webglTexture,Se),X!==0?O.blitFramebuffer(tt,Qe,Re,De,gt,st,Re,De,O.COLOR_BUFFER_BIT,O.NEAREST):cn?O.copyTexSubImage3D(Bt,Se,gt,st,zt+en,tt,Qe,Re,De):O.copyTexSubImage2D(Bt,Se,gt,st,tt,Qe,Re,De);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else cn?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Bt,Se,gt,st,zt,Re,De,Oe,_t,je,Nt.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Bt,Se,gt,st,zt,Re,De,Oe,_t,Nt.data):O.texSubImage3D(Bt,Se,gt,st,zt,Re,De,Oe,_t,je,Nt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Se,gt,st,Re,De,_t,je,Nt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Se,gt,st,Nt.width,Nt.height,_t,Nt.data):O.texSubImage2D(O.TEXTURE_2D,Se,gt,st,Re,De,_t,je,Nt);O.pixelStorei(O.UNPACK_ROW_LENGTH,mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,un),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Wi),O.pixelStorei(O.UNPACK_SKIP_ROWS,yn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,yi),Se===0&&W.generateMipmaps&&O.generateMipmap(Bt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(T,W,ee=null,q=null,X=0){return Al('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,W,ee,q,X)},this.initRenderTarget=function(T){Ge.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),Ye.unbindTexture()},this.resetState=function(){z=0,N=0,Y=null,Ye.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}const Sm={type:"change"},Yf={type:"start"},rg={type:"end"},xl=new Hm,Em=new gr,lM=Math.cos(70*Ov.DEG2RAD),$t=new Z,Ln=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wc=1e-6;class uM extends T0{constructor(e,n=null){super(e,n),this.state=At.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:Fs.ROTATE,TWO:Fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Kr,this._lastTargetPosition=new Z,this._quat=new Kr().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kp,this._sphericalDelta=new Kp,this._scale=1,this._panOffset=new Z,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new Z,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fM.bind(this),this._onPointerDown=cM.bind(this),this._onPointerUp=dM.bind(this),this._onContextMenu=xM.bind(this),this._onMouseWheel=mM.bind(this),this._onKeyDown=gM.bind(this),this._onTouchStart=_M.bind(this),this._onTouchMove=vM.bind(this),this._onMouseDown=hM.bind(this),this._onMouseMove=pM.bind(this),this._interceptControlDown=yM.bind(this),this._interceptControlUp=SM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sm),this.update(),this.state=At.NONE}update(e=null){const n=this.object.position;$t.copy(n).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Ln:r>Math.PI&&(r-=Ln),a<-Math.PI?a+=Ln:a>Math.PI&&(a-=Ln),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=f!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),n.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=$t.length();f=this._clampDistance(d*this._scale);const p=d-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),u=!!p}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=p!==this.object.zoom;const m=new Z(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),f=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(xl.origin.copy(this.object.position),xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xl.direction))<lM?this.object.lookAt(this.target):(Em.setFromNormalAndCoplanarPoint(this.object.up,this.target),xl.intersectPlane(Em,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>Wc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wc||this._lastTargetPosition.distanceToSquared(this.target)>Wc?(this.dispatchEvent(Sm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ln/60*this.autoRotateSpeed*e:Ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){$t.setFromMatrixColumn(n,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,n){this.screenSpacePanning===!0?$t.setFromMatrixColumn(n,1):($t.setFromMatrixColumn(n,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,n){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;$t.copy(a).sub(this.target);let u=$t.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*u/r.clientHeight,this.object.matrix),this._panUp(2*n*u/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,u=n-r.top,f=r.width,d=r.height;this._mouse.x=a/f*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,u=Math.sqrt(r*r+a*a);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),u=.5*(e.pageY+r.y);this._rotateEnd.set(a,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/n.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),r=e.pageX-n.x,a=e.pageY-n.y,u=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(e.pageX+n.x)*.5,d=(e.pageY+n.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ut,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function cM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function fM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function dM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rg),this.state=At.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function hM(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=At.DOLLY;break;case ks.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=At.ROTATE}break;case ks.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Yf)}function pM(s){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function mM(s){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(s.preventDefault(),this.dispatchEvent(Yf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(rg))}function gM(s){this.enabled!==!1&&this._handleKeyDown(s)}function _M(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=At.TOUCH_ROTATE;break;case Fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case Fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=At.TOUCH_DOLLY_PAN;break;case Fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Yf)}function vM(s){switch(this._trackPointer(s),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=At.NONE}}function xM(s){this.enabled!==!1&&s.preventDefault()}function yM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const EM="/black-hole/assets/sky2-D3y3u35A.jpg",MM=`
# define SPEED_OF_LIGHT 1.0
# define EVENT_HORIZON_RADIUS 1.0
# define BACKGROUND_DISTANCE 10000.0
# define PROJECTION_DISTANCE 1.0
# define SCALE_FACTOR 1.0
# define PI 3.14159265359

// ----------
// -uniforms-
// ----------
uniform float uAccretionDisk;
uniform sampler2D uCanvasTexture;
uniform vec2 uResolution;
uniform vec3 uCameraPosition;
uniform vec3 uCameraForward;
uniform vec3 uCameraRight;
uniform vec3 uCameraUp;
uniform float uPov;
uniform int uMaxIterations;
uniform float uStepSize;
uniform float uDiskTime;

// -----------
// -variables-
// -----------

vec3 bh_pos = vec3(0.0, 0.0, 0.0);

float innerDiskRadius = 2.0;
float outerDiskRadius = 8.0;


// -----------------
// MATRIX TRANSFORMS
// -----------------
mat4 identityMat(){
    return mat4(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
}

mat4 translate_ColOrder(float x, float y, float z){
    return mat4(
        1, 0, 0, x,
        0, 1, 0, y,
        0, 0, 1, z,
        0, 0, 0, 1
    );
}

mat4 translate_RowOrder(float x, float y, float z){
    return mat4(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1
    );
}

mat4 scale(float x, float y, float z){
    return mat4(
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1
    );
}

mat4 rotate_x(float theta){
    return mat4(
        1, 0, 0, 0,
        0, cos(theta), -sin(theta), 0,
        0, sin(theta), cos(theta), 0,
        0, 0, 0, 1
    );
}

mat4 rotate_y(float theta){
    return mat4(
        cos(theta), 0, sin(theta), 0,
        0, 1, 0, 0,
        -sin(theta), 0, cos(theta), 0,
        0, 0, 0, 1
    );
}

mat4 rotate_z(float theta){
    return mat4(
        cos(theta), -sin(theta), 0, 0,
        sin(theta), cos(theta), 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    );
}

// ---------------------------
// -- FBM -> ACCRETION DISK---
// ---------------------------
float hash(float n) { 
      return fract(sin(n) * 753.5453123); 
}

float MappingRange(float X, float A, float B, float C, float D){
    //(X-A)/(B-A) * (D-C) + C
    return (X - A) / (B - A) * (D - C) + C;
}

float noise(vec3 x) {
      vec3 p = floor(x);
      vec3 f = fract(x);
      f = f * f * (3.0 - 2.0 * f);
      float n = p.x + p.y * 157.0 + 113.0 * p.z;

      return mix(mix(mix(hash(n + 0.0), hash(n + 1.0), f.x),
          mix(hash(n + 157.0), hash(n + 158.0), f.x), f.y),
          mix(mix(hash(n + 113.0), hash(n + 114.0), f.x),
          mix(hash(n + 270.0), hash(n + 271.0), f.x), f.y), f.z);
}

// open this article to learn more about the FBM
// https://iquilezles.org/articles/fbm/
float fbm(vec3 pos, const int numOctaves, const float iterScale, const float detail, const float weight) {
      float mul = weight;
      float add = 1.0 - 0.5 * mul;
      float t = noise(pos) * mul + add;

      for (int i = 1; i < numOctaves; ++i) {
          pos *= iterScale;
          mul = exp2(log2(weight) - float(i) / detail);
          add = 1.0 - 0.5 * mul;
          t *= noise(pos) * mul + add;
      }
      
      return t;
}

//--------------------------------------------------
//-ADJUST COORDINATE FROM PIXEL TO WORLD COORDINATE-
//--------------------------------------------------
struct Ray{
    vec4 origin;
    vec4 direction;
};

Ray pixelToWorldRay(){
    float pov_rad = radians(uPov);
    float image_plane_height = PROJECTION_DISTANCE * 2.0 * tan(0.5 * pov_rad);
    vec2 screen = (gl_FragCoord.xy / uResolution.xy) * 2.0 - 1.0;
    screen.x *= uResolution.x / uResolution.y;
    vec3 direction = normalize(
        uCameraForward * PROJECTION_DISTANCE +
        uCameraRight * screen.x * image_plane_height * 0.5 +
        uCameraUp * screen.y * image_plane_height * 0.5
    );

    Ray ray;
    ray.origin = vec4(uCameraPosition, 1.0);
    ray.direction = vec4(direction, 0.0);

    return ray;
}

// -----------------------------------
//      ------- BLACK HOLE --------
// -----------------------------------

// relativistic orbital dynamics
// The Newtonian gravity that appears when deriving orbits from 
// schwarzschild metric
vec3 geodesic_equation(vec3 position, float h2){
    return -(3.0/2.0) * h2 * position / pow(length(position), 5.0);
}

vec4 intersect_sphere(Ray ray, float radius){
    float a = dot(ray.direction, ray.direction);
    float b = dot(ray.direction, ray.origin) * 2.0;
    float c = dot(ray.origin, ray.origin) - radius * radius;

    float d = b * b - 4.0 * a * c;
    float q = -0.5 * (b + sign(b) * sqrt(d));

    float r1 = q/a;
    float r2 = c/q;

    float i = max(r1, r2);
    return ray.origin + i * ray.direction;
}

vec4 GetColor(Ray ray){
    vec4 positioned = intersect_sphere(ray, BACKGROUND_DISTANCE);

    // Polar coordinate of the intersection.
    float dist = length(vec2(positioned.x, positioned.z));
    float theta = atan(positioned.x / positioned.z);
    float new_z = positioned.y;
    // map the polar coordinates to the texture
    vec2 new_coord = vec2(theta/PI + 0.5, new_z/(2.0 * BACKGROUND_DISTANCE) + 0.5);

    return texture2D(uCanvasTexture, new_coord);
}

vec3 accretionDiskColor(vec3 hit, Ray ray, float stepSize){
    float radius = length(hit.xz);
    float radial_t = clamp((radius - innerDiskRadius) / (outerDiskRadius - innerDiskRadius), 0.0, 1.0);
    float angle = atan(hit.z, hit.x);
    float disk_time = uDiskTime;

    float coherent_rotation = disk_time * 0.09;
    float kepler_rotation = disk_time * 0.34 / pow(radius, 1.5);
    float arm_angle = angle - coherent_rotation;
    float local_angle = angle - coherent_rotation - kepler_rotation;

    vec2 arm_sample = vec2(cos(arm_angle), sin(arm_angle)) * radius;
    vec2 local_sample = vec2(cos(local_angle), sin(local_angle)) * radius;

    float fine_noise = fbm(vec3(local_sample * 1.7, radial_t * 3.4), 4, 2.15, 1.1, 0.9);
    float grain_noise = fbm(vec3(local_sample * 4.2, radial_t * 7.0 + disk_time * 0.012), 3, 2.4, 1.0, 0.75);

    float pitch = 3.55;
    float two_arm_spiral = 2.0 * arm_angle - pitch * log(radius / innerDiskRadius);
    float three_arm_detail = 3.0 * arm_angle - pitch * 1.28 * log(radius / innerDiskRadius) + fine_noise * 0.55;
    float primary_arm = pow(0.5 + 0.5 * cos(two_arm_spiral), 5.0);
    float secondary_arm = pow(0.5 + 0.5 * cos(three_arm_detail), 8.0);
    float arm_mask = clamp(primary_arm + secondary_arm * 0.35, 0.0, 1.0);
    float spiral_structure = mix(0.48, 2.35, smoothstep(0.08, 0.82, arm_mask));

    float rotating_streaks = 0.5 + 0.5 * sin(local_angle * 11.0 + radius * 3.8 + fine_noise * 2.2);
    float hot_streaks = mix(0.78, 1.48, smoothstep(0.54, 0.96, rotating_streaks));

    float inner_edge = smoothstep(innerDiskRadius, innerDiskRadius + 0.35, radius);
    float outer_edge = 1.0 - smoothstep(outerDiskRadius - 1.2, outerDiskRadius, radius);
    float disk_alpha = inner_edge * outer_edge;

    float heat = pow(1.0 - radial_t, 1.55);
    vec3 hot_color = vec3(1.0, 0.88, 0.58);
    vec3 mid_color = vec3(1.0, 0.42, 0.12);
    vec3 outer_color = vec3(0.42, 0.09, 0.035);
    vec3 disk_color = mix(mid_color, outer_color, smoothstep(0.32, 1.0, radial_t));
    disk_color = mix(disk_color, hot_color, 1.0 - smoothstep(0.0, 0.18, radial_t));

    vec3 tangent = normalize(vec3(-hit.z, 0.0, hit.x));
    float orbital_alignment = dot(normalize(ray.direction.xyz), tangent);
    float doppler = pow(clamp(1.0 + orbital_alignment * 0.68, 0.34, 1.92), 2.0);

    float turbulence = mix(0.78, 1.28, fine_noise) * mix(0.90, 1.14, grain_noise);
    float optical_depth = clamp(stepSize * 22.0, 0.18, 2.05);
    float luminosity = disk_alpha * optical_depth * (0.68 + heat * 4.4) * spiral_structure * hot_streaks * turbulence * doppler;

    return disk_color * luminosity;
}

vec4 compute(inout vec3 position, inout vec3 velocity, inout Ray ray){
    // check if an object is in the event horizon or not
    // and perform the integration 
    // we gonna use the Runge kutta integration , because it's more accurate than euler integration

    // angular momentum constants in the geodesic equation
    vec3 perpendicular = cross(position, velocity);
    float mag = length(perpendicular);
    float h2 = pow(mag, 2.0);

    vec4 color = vec4(1.0);

    for(int i = 0; i < uMaxIterations; i++){
        // calculate the distance between the ray and the black hole 
        // assuming the black hole is at : vec3(0, 0, 0);
        float dist = length(position);

        float step_size = dist * dist * uStepSize;
        vec3 rk_delta = velocity * step_size;

        // RK-4 = runge-kutta integration
        vec3 k1 = step_size * geodesic_equation(position, h2);
        vec3 k2 = step_size * geodesic_equation(position + rk_delta + 0.5 * k1, h2);
        vec3 k3 = step_size * geodesic_equation(position + rk_delta + 0.5 * k2, h2);
        vec3 k4 = step_size * geodesic_equation(position + rk_delta + k3, h2);

        vec3 d = (k1 + 2.0 * (k2 + k3) + k4) / 6.0;

        vec3 previousPosition = position;
        vec3 nextPosition = position + rk_delta;

        if(uAccretionDisk == 1.0 && abs(previousPosition.y - nextPosition.y) > 0.0001 && previousPosition.y * nextPosition.y <= 0.0){
            float crossing = previousPosition.y / (previousPosition.y - nextPosition.y);
            if(crossing >= 0.0 && crossing <= 1.0){
                vec3 disk_hit = mix(previousPosition, nextPosition, crossing);
                float disk_radius = length(disk_hit.xz);

                if(disk_radius > innerDiskRadius && disk_radius < outerDiskRadius){
                    vec3 hit_velocity = normalize(velocity + d * crossing);
                    Ray background_ray;
                    background_ray.origin = vec4(disk_hit, 1.0);
                    background_ray.direction = vec4(hit_velocity, 0.0);

                    vec3 disk_emission = accretionDiskColor(disk_hit, background_ray, step_size);
                    return GetColor(background_ray) + vec4(disk_emission, 1.0);
                }
            }
        }

        if(dist >= BACKGROUND_DISTANCE){
            break;
        }
        // In case the ray falls in the event horizon
        if(dist <= EVENT_HORIZON_RADIUS){
            // return true;
            return vec4(0.0, 0.0, 0.0, 1.0);
        }
        // update the position and velocity
        position += rk_delta;
        velocity += d;
    }

    ray.origin = vec4(position, 1.0);
    ray.direction = vec4(velocity, 0.0);

    return GetColor(ray);
}

void main() {
    Ray ray = pixelToWorldRay();

    vec3 position = vec3(ray.origin);
    vec3 velocity = SPEED_OF_LIGHT * normalize(vec3(ray.direction));
    
    vec4 color = compute(position, velocity, ray);

    //glow value
    float glow = 0.01/length(ray.origin);
    glow = clamp(glow, 0.0, 1.0) * 12.0;

    gl_FragColor = color + glow;
}
`,TM=`
  varying vec2 vu;
  uniform vec2 uResolution;
  
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vu = uv;
  }
`,Mm=75,Tm=400,wM=3,AM=80,wm=.01,RM=.95,CM=36,PM=()=>{const s=Xc.useRef(null);return Xc.useEffect(()=>{if(!s.current)return;const e=s.current,n=e.clientWidth||window.innerWidth,r=e.clientHeight||window.innerHeight,a=new d0,u=new Qm(-1,1,1,-1,0,1),f=new Kn(Mm,n/r,.1,1e3);f.position.set(0,.05,20),f.lookAt(0,0,0);const d=new aM({antialias:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(n,r),e.appendChild(d.domElement);const p=new uM(f,d.domElement);p.target.set(0,0,0),p.enableDamping=!0,p.dampingFactor=.08,p.enablePan=!1,p.autoRotate=!0,p.autoRotateSpeed=RM,p.minDistance=wM,p.maxDistance=AM,p.minPolarAngle=wm,p.maxPolarAngle=Math.PI-wm,p.update();const m=()=>{const C=document.createElement("canvas");C.width=1024,C.height=1024;const G=C.getContext("2d");if(!G)return null;const z=G.createRadialGradient(512,512,0,512,512,512);z.addColorStop(0,"#001a33"),z.addColorStop(1,"#000000"),G.fillStyle=z,G.fillRect(0,0,1024,1024),G.fillStyle="white";for(let N=0;N<200;N+=1){const Y=Math.random()*1024,P=Math.random()*1024,A=Math.random()*2+.5;G.globalAlpha=Math.random()*.8+.2,G.beginPath(),G.arc(Y,P,A,0,Math.PI*2),G.fill()}return G.globalAlpha=1,new m0(C)},_=new S0;let v=null;const x=_.load(EM,C=>{S.uniforms.uCanvasTexture.value=C},void 0,()=>{v=m(),v&&(S.uniforms.uCanvasTexture.value=v)}),S=new Hi({uniforms:{uAccretionDisk:{value:1},uResolution:{value:new ut(n,r)},uCanvasTexture:{value:x},uMaxIterations:{value:Tm},uPov:{value:Mm},uStepSize:{value:2.5/Tm},uCameraPosition:{value:f.position.clone()},uCameraForward:{value:new Z(0,0,-1)},uCameraRight:{value:new Z(1,0,0)},uCameraUp:{value:new Z(0,1,0)},uDiskTime:{value:0}},vertexShader:TM,fragmentShader:MM}),w=new gi(new Vo(2,2),S);a.add(w);const R=()=>{f.updateMatrixWorld(),f.getWorldDirection(S.uniforms.uCameraForward.value);const C=f.matrixWorld.elements;S.uniforms.uCameraPosition.value.copy(f.position),S.uniforms.uCameraRight.value.set(C[0],C[1],C[2]).normalize(),S.uniforms.uCameraUp.value.set(C[4],C[5],C[6]).normalize()},y=new M0;let g=0;const I=()=>{p.update(),R(),S.uniforms.uDiskTime.value=y.getElapsedTime()*CM,d.render(a,u),g=requestAnimationFrame(I)},L=()=>{const C=e.clientWidth||window.innerWidth,G=e.clientHeight||window.innerHeight;f.aspect=C/G,f.updateProjectionMatrix(),d.setSize(C,G),S.uniforms.uResolution.value.set(C,G)};return window.addEventListener("resize",L),I(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",L),p.dispose(),w.geometry.dispose(),S.dispose(),x.dispose(),v==null||v.dispose(),d.dispose(),e.contains(d.domElement)&&e.removeChild(d.domElement)}},[]),Lo.jsx("div",{ref:s,className:"simulation-canvas"})};function bM(){return Lo.jsx("div",{className:"App",children:Lo.jsx(PM,{})})}j_.createRoot(document.getElementById("root")).render(Lo.jsx(B_.StrictMode,{children:Lo.jsx(bM,{})}));
