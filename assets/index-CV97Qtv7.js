(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var gh={exports:{}},Vo={};var $_;function _M(){if($_)return Vo;$_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=t,Vo.jsx=i,Vo.jsxs=i,Vo}var t0;function vM(){return t0||(t0=1,gh.exports=_M()),gh.exports}var ft=vM(),_h={exports:{}},ae={};var e0;function xM(){if(e0)return ae;e0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function S(I,$,xt){this.props=I,this.context=$,this.refs=M,this.updater=xt||b}S.prototype.isReactComponent={},S.prototype.setState=function(I,$){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,$,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function w(){}w.prototype=S.prototype;function N(I,$,xt){this.props=I,this.context=$,this.refs=M,this.updater=xt||b}var P=N.prototype=new w;P.constructor=N,C(P,S.prototype),P.isPureReactComponent=!0;var G=Array.isArray;function U(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(I,$,xt){var At=xt.ref;return{$$typeof:r,type:I,key:$,ref:At!==void 0?At:null,props:xt}}function Y(I,$){return O(I.type,$,I.props)}function B(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function j(I){var $={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(xt){return $[xt]})}var V=/\/+/g;function ct(I,$){return typeof I=="object"&&I!==null&&I.key!=null?j(""+I.key):$.toString(36)}function W(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(U,U):(I.status="pending",I.then(function($){I.status==="pending"&&(I.status="fulfilled",I.value=$)},function($){I.status==="pending"&&(I.status="rejected",I.reason=$)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function L(I,$,xt,At,Dt){var ot=typeof I;(ot==="undefined"||ot==="boolean")&&(I=null);var Mt=!1;if(I===null)Mt=!0;else switch(ot){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(I.$$typeof){case r:case t:Mt=!0;break;case _:return Mt=I._init,L(Mt(I._payload),$,xt,At,Dt)}}if(Mt)return Dt=Dt(I),Mt=At===""?"."+ct(I,0):At,G(Dt)?(xt="",Mt!=null&&(xt=Mt.replace(V,"$&/")+"/"),L(Dt,$,xt,"",function(te){return te})):Dt!=null&&(B(Dt)&&(Dt=Y(Dt,xt+(Dt.key==null||I&&I.key===Dt.key?"":(""+Dt.key).replace(V,"$&/")+"/")+Mt)),$.push(Dt)),1;Mt=0;var bt=At===""?".":At+":";if(G(I))for(var Ht=0;Ht<I.length;Ht++)At=I[Ht],ot=bt+ct(At,Ht),Mt+=L(At,$,xt,ot,Dt);else if(Ht=y(I),typeof Ht=="function")for(I=Ht.call(I),Ht=0;!(At=I.next()).done;)At=At.value,ot=bt+ct(At,Ht++),Mt+=L(At,$,xt,ot,Dt);else if(ot==="object"){if(typeof I.then=="function")return L(W(I),$,xt,At,Dt);throw $=String(I),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function z(I,$,xt){if(I==null)return I;var At=[],Dt=0;return L(I,At,"","",function(ot){return $.call(xt,ot,Dt++)}),At}function tt(I){if(I._status===-1){var $=I._result;$=$(),$.then(function(xt){(I._status===0||I._status===-1)&&(I._status=1,I._result=xt)},function(xt){(I._status===0||I._status===-1)&&(I._status=2,I._result=xt)}),I._status===-1&&(I._status=0,I._result=$)}if(I._status===1)return I._result.default;throw I._result}var mt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},St={map:z,forEach:function(I,$,xt){z(I,function(){$.apply(this,arguments)},xt)},count:function(I){var $=0;return z(I,function(){$++}),$},toArray:function(I){return z(I,function($){return $})||[]},only:function(I){if(!B(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ae.Activity=v,ae.Children=St,ae.Component=S,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=N,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ae.__COMPILER_RUNTIME={__proto__:null,c:function(I){return F.H.useMemoCache(I)}},ae.cache=function(I){return function(){return I.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(I,$,xt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var At=C({},I.props),Dt=I.key;if($!=null)for(ot in $.key!==void 0&&(Dt=""+$.key),$)!T.call($,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&$.ref===void 0||(At[ot]=$[ot]);var ot=arguments.length-2;if(ot===1)At.children=xt;else if(1<ot){for(var Mt=Array(ot),bt=0;bt<ot;bt++)Mt[bt]=arguments[bt+2];At.children=Mt}return O(I.type,Dt,At)},ae.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ae.createElement=function(I,$,xt){var At,Dt={},ot=null;if($!=null)for(At in $.key!==void 0&&(ot=""+$.key),$)T.call($,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Dt[At]=$[At]);var Mt=arguments.length-2;if(Mt===1)Dt.children=xt;else if(1<Mt){for(var bt=Array(Mt),Ht=0;Ht<Mt;Ht++)bt[Ht]=arguments[Ht+2];Dt.children=bt}if(I&&I.defaultProps)for(At in Mt=I.defaultProps,Mt)Dt[At]===void 0&&(Dt[At]=Mt[At]);return O(I,ot,Dt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(I){return{$$typeof:p,render:I}},ae.isValidElement=B,ae.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:tt}},ae.memo=function(I,$){return{$$typeof:d,type:I,compare:$===void 0?null:$}},ae.startTransition=function(I){var $=F.T,xt={};F.T=xt;try{var At=I(),Dt=F.S;Dt!==null&&Dt(xt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(U,mt)}catch(ot){mt(ot)}finally{$!==null&&xt.types!==null&&($.types=xt.types),F.T=$}},ae.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ae.use=function(I){return F.H.use(I)},ae.useActionState=function(I,$,xt){return F.H.useActionState(I,$,xt)},ae.useCallback=function(I,$){return F.H.useCallback(I,$)},ae.useContext=function(I){return F.H.useContext(I)},ae.useDebugValue=function(){},ae.useDeferredValue=function(I,$){return F.H.useDeferredValue(I,$)},ae.useEffect=function(I,$){return F.H.useEffect(I,$)},ae.useEffectEvent=function(I){return F.H.useEffectEvent(I)},ae.useId=function(){return F.H.useId()},ae.useImperativeHandle=function(I,$,xt){return F.H.useImperativeHandle(I,$,xt)},ae.useInsertionEffect=function(I,$){return F.H.useInsertionEffect(I,$)},ae.useLayoutEffect=function(I,$){return F.H.useLayoutEffect(I,$)},ae.useMemo=function(I,$){return F.H.useMemo(I,$)},ae.useOptimistic=function(I,$){return F.H.useOptimistic(I,$)},ae.useReducer=function(I,$,xt){return F.H.useReducer(I,$,xt)},ae.useRef=function(I){return F.H.useRef(I)},ae.useState=function(I){return F.H.useState(I)},ae.useSyncExternalStore=function(I,$,xt){return F.H.useSyncExternalStore(I,$,xt)},ae.useTransition=function(){return F.H.useTransition()},ae.version="19.2.6",ae}var n0;function Jd(){return n0||(n0=1,_h.exports=xM()),_h.exports}var we=Jd(),vh={exports:{}},ko={},xh={exports:{}},Sh={};var i0;function SM(){return i0||(i0=1,(function(r){function t(L,z){var tt=L.length;L.push(z);t:for(;0<tt;){var mt=tt-1>>>1,St=L[mt];if(0<l(St,z))L[mt]=z,L[tt]=St,tt=mt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var z=L[0],tt=L.pop();if(tt!==z){L[0]=tt;t:for(var mt=0,St=L.length,I=St>>>1;mt<I;){var $=2*(mt+1)-1,xt=L[$],At=$+1,Dt=L[At];if(0>l(xt,tt))At<St&&0>l(Dt,xt)?(L[mt]=Dt,L[At]=tt,mt=At):(L[mt]=xt,L[$]=tt,mt=$);else if(At<St&&0>l(Dt,tt))L[mt]=Dt,L[At]=tt,mt=At;else break t}}return z}function l(L,z){var tt=L.sortIndex-z.sortIndex;return tt!==0?tt:L.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],_=1,v=null,g=3,y=!1,b=!1,C=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(L){for(var z=i(d);z!==null;){if(z.callback===null)s(d);else if(z.startTime<=L)s(d),z.sortIndex=z.expirationTime,t(m,z);else break;z=i(d)}}function G(L){if(C=!1,P(L),!b)if(i(m)!==null)b=!0,U||(U=!0,j());else{var z=i(d);z!==null&&W(G,z.startTime-L)}}var U=!1,F=-1,T=5,O=-1;function Y(){return M?!0:!(r.unstable_now()-O<T)}function B(){if(M=!1,U){var L=r.unstable_now();O=L;var z=!0;try{t:{b=!1,C&&(C=!1,w(F),F=-1),y=!0;var tt=g;try{e:{for(P(L),v=i(m);v!==null&&!(v.expirationTime>L&&Y());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,g=v.priorityLevel;var St=mt(v.expirationTime<=L);if(L=r.unstable_now(),typeof St=="function"){v.callback=St,P(L),z=!0;break e}v===i(m)&&s(m),P(L)}else s(m);v=i(m)}if(v!==null)z=!0;else{var I=i(d);I!==null&&W(G,I.startTime-L),z=!1}}break t}finally{v=null,g=tt,y=!1}z=void 0}}finally{z?j():U=!1}}}var j;if(typeof N=="function")j=function(){N(B)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,ct=V.port2;V.port1.onmessage=B,j=function(){ct.postMessage(null)}}else j=function(){S(B,0)};function W(L,z){F=S(function(){L(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(L){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var tt=g;g=z;try{return L()}finally{g=tt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var tt=g;g=L;try{return z()}finally{g=tt}},r.unstable_scheduleCallback=function(L,z,tt){var mt=r.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?mt+tt:mt):tt=mt,L){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=tt+St,L={id:_++,callback:z,priorityLevel:L,startTime:tt,expirationTime:St,sortIndex:-1},tt>mt?(L.sortIndex=tt,t(d,L),i(m)===null&&L===i(d)&&(C?(w(F),F=-1):C=!0,W(G,tt-mt))):(L.sortIndex=St,t(m,L),b||y||(b=!0,U||(U=!0,j()))),L},r.unstable_shouldYield=Y,r.unstable_wrapCallback=function(L){var z=g;return function(){var tt=g;g=z;try{return L.apply(this,arguments)}finally{g=tt}}}})(Sh)),Sh}var a0;function MM(){return a0||(a0=1,xh.exports=SM()),xh.exports}var Mh={exports:{}},Pn={};var s0;function yM(){if(s0)return Pn;s0=1;var r=Jd();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:d,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,_)},Pn.flushSync=function(m){var d=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=_,s.d.f()}},Pn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,v=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Pn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Pn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=p(_,d.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Pn.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,d){return m(d)},Pn.useFormState=function(m,d,_){return h.H.useFormState(m,d,_)},Pn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Pn.version="19.2.6",Pn}var r0;function EM(){if(r0)return Mh.exports;r0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Mh.exports=yM(),Mh.exports}var o0;function bM(){if(o0)return ko;o0=1;var r=MM(),t=Jd(),i=EM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=f;break}if(R===o){x=!0,o=u,a=f;break}R=R.sibling}if(!x){for(R=f.child;R;){if(R===a){x=!0,a=f,o=u;break}if(R===o){x=!0,o=f,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var V=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===V?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case U:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var W=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},mt=[],St=-1;function I(e){return{current:e}}function $(e){0>St||(e.current=mt[St],mt[St]=null,St--)}function xt(e,n){St++,mt[St]=e.current,e.current=n}var At=I(null),Dt=I(null),ot=I(null),Mt=I(null);function bt(e,n){switch(xt(ot,n),xt(Dt,e),xt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?y_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=y_(n),e=E_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(At),xt(At,e)}function Ht(){$(At),$(Dt),$(ot)}function te(e){e.memoizedState!==null&&xt(Mt,e);var n=At.current,a=E_(n,e.type);n!==a&&(xt(Dt,e),xt(At,a))}function Qt(e){Dt.current===e&&($(At),$(Dt)),Mt.current===e&&($(Mt),Bo._currentValue=tt)}var We,he;function Se(e){if(We===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);We=n&&n[1]||"",he=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+e+he}var Ne=!1;function ce(e,n){if(!e||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(lt){var rt=lt}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(lt){rt=lt}e.call(vt.prototype)}}else{try{throw Error()}catch(lt){rt=lt}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(lt){if(lt&&rt&&typeof lt.stack=="string")return[lt.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],R=f[1];if(x&&R){var H=x.split(`
`),nt=R.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===nt.length)for(o=H.length-1,u=nt.length-1;1<=o&&0<=u&&H[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==nt[u]){var dt=`
`+H[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Se(a):""}function ln(e,n){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==n&&n!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Se("Activity");default:return""}}function je(e){try{var n="",a=null;do n+=ln(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var An=Object.prototype.hasOwnProperty,q=r.unstable_scheduleCallback,en=r.unstable_cancelCallback,de=r.unstable_shouldYield,He=r.unstable_requestPaint,Rt=r.unstable_now,Qe=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,J=r.unstable_NormalPriority,_t=r.unstable_LowPriority,Et=r.unstable_IdlePriority,Ct=r.log,Nt=r.unstable_setDisableYieldValue,ut=null,ht=null;function Ot(e){if(typeof Ct=="function"&&Nt(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ut,e)}catch{}}var Pt=Math.clz32?Math.clz32:ne,Ut=Math.log,wt=Math.LN2;function ne(e){return e>>>=0,e===0?32:31-(Ut(e)/wt|0)|0}var ie=256,me=262144,k=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Tt(o):(x&=R,x!==0?u=Tt(x):a||(a=R&~e,a!==0&&(u=Tt(a))))):(R=o&~f,R!==0?u=Tt(R):x!==0?u=Tt(x):a||(a=o&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Lt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var e=k;return k<<=1,(k&62914560)===0&&(k=4194304),e}function qt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ee(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nn(e,n,a,o,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(a=x&~a;0<a;){var dt=31-Pt(a),vt=1<<dt;R[dt]=0,H[dt]=-1;var rt=nt[dt];if(rt!==null)for(nt[dt]=null,dt=0;dt<rt.length;dt++){var lt=rt[dt];lt!==null&&(lt.lane&=-536870913)}a&=~vt}o!==0&&De(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function De(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function gi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function $n(e,n){var a=n&-n;return a=(a&42)!==0?1:ms(a),(a&(e.suspendedLanes|n))!==0?0:a}function ms(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kr(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:q_(e.type))}function Qr(e,n){var a=z.p;try{return z.p=e,n()}finally{z.p=a}}var Nn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Nn,Rn="__reactProps$"+Nn,Ki="__reactContainer$"+Nn,Aa="__reactEvents$"+Nn,ol="__reactListeners$"+Nn,Ys="__reactHandles$"+Nn,Jr="__reactResources$"+Nn,Ra="__reactMarker$"+Nn;function $r(e){delete e[cn],delete e[Rn],delete e[Aa],delete e[ol],delete e[Ys]}function Ca(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ki]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=D_(e);e!==null;){if(a=e[cn])return a;e=D_(e)}return n}e=a,a=e.parentNode}return null}function wa(e){if(e=e[cn]||e[Ki]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function gs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Da(e){var n=e[Jr];return n||(n=e[Jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(e){e[Ra]=!0}var ll=new Set,A={};function Z(e,n){st(e,n),st(e+"Capture",n)}function st(e,n){for(A[e]=n,e=0;e<n.length;e++)ll.add(n[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},It={};function Vt(e){return An.call(It,e)?!0:An.call(at,e)?!1:it.test(e)?It[e]=!0:(at[e]=!0,!1)}function Ft(e,n,a){if(Vt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function re(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ae(e){if(!e._valueTracker){var n=re(e)?"checked":"value";e._valueTracker=jt(e,n,""+e[n])}}function Je(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=re(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function qe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oe=/[\n"\\]/g;function Pe(e){return e.replace(Oe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(e,n,a,o,u,f,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Zt(n)):e.value!==""+Zt(n)&&(e.value=""+Zt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?ge(e,x,Zt(n)):a!=null?ge(e,x,Zt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Zt(R):e.removeAttribute("name")}function On(e,n,a,o,u,f,x,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ae(e);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ae(e)}function ge(e,n,a){n==="number"&&qe(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ti(e,n,a){if(n!=null&&(n=""+Zt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Zt(a):""}function Ri(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(W(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Zt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ae(e)}function ei(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Fe=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $e(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Fe.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ci(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&$e(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&$e(e,f,n[f])}function Le(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ua=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _s(e){return Ua.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var hu=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,Zs=null;function Mp(e){var n=wa(e);if(n&&(e=n.stateNode)){var a=e[Rn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Gt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Rn]||null;if(!u)throw Error(s(90));Gt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Je(o)}break t;case"textarea":ti(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vn(e,!!a.multiple,n,!1)}}}var pu=!1;function yp(e,n,a){if(pu)return e(n,a);pu=!0;try{var o=e(n);return o}finally{if(pu=!1,(js!==null||Zs!==null)&&(Zl(),js&&(n=js,e=Zs,Zs=js=null,Mp(n),e)))for(n=0;n<e.length;n++)Mp(e[n])}}function to(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Rn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(Ji)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){mu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{mu=!1}var La=null,gu=null,cl=null;function Ep(){if(cl)return cl;var e,n=gu,a=n.length,o,u="value"in La?La.value:La.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function bp(){return!1}function kn(e){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?fl:bp,this.isPropagationStopped=bp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=kn(vs),no=v({},vs,{view:0,detail:0}),mx=kn(no),_u,vu,io,dl=v({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(_u=e.screenX-io.screenX,vu=e.screenY-io.screenY):vu=_u=0,io=e),_u)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Tp=kn(dl),gx=v({},dl,{dataTransfer:0}),_x=kn(gx),vx=v({},no,{relatedTarget:0}),xu=kn(vx),xx=v({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=kn(xx),Mx=v({},vs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yx=kn(Mx),Ex=v({},vs,{data:0}),Ap=kn(Ex),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ax[e])?!!n[e]:!1}function Su(){return Rx}var Cx=v({},no,{key:function(e){if(e.key){var n=bx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wx=kn(Cx),Dx=v({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=kn(Dx),Ux=v({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),Lx=kn(Ux),Nx=v({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=kn(Nx),Px=v({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=kn(Px),Ix=v({},vs,{newState:0,oldState:0}),Bx=kn(Ix),zx=[9,13,27,32],Mu=Ji&&"CompositionEvent"in window,ao=null;Ji&&"documentMode"in document&&(ao=document.documentMode);var Hx=Ji&&"TextEvent"in window&&!ao,Cp=Ji&&(!Mu||ao&&8<ao&&11>=ao),wp=" ",Dp=!1;function Up(e,n){switch(e){case"keyup":return zx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function Gx(e,n){switch(e){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(Dp=!0,wp);case"textInput":return e=n.data,e===wp&&Dp?null:e;default:return null}}function Vx(e,n){if(Ks)return e==="compositionend"||!Mu&&Up(e,n)?(e=Ep(),cl=gu=La=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cp&&n.locale!=="ko"?null:n.data;default:return null}}var kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!kx[e.type]:n==="textarea"}function Op(e,n,a,o){js?Zs?Zs.push(o):Zs=[o]:js=o,n=nc(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var so=null,ro=null;function Xx(e){g_(e,0)}function pl(e){var n=gs(e);if(Je(n))return e}function Pp(e,n){if(e==="change")return n}var Fp=!1;if(Ji){var yu;if(Ji){var Eu="oninput"in document;if(!Eu){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),Eu=typeof Ip.oninput=="function"}yu=Eu}else yu=!1;Fp=yu&&(!document.documentMode||9<document.documentMode)}function Bp(){so&&(so.detachEvent("onpropertychange",zp),ro=so=null)}function zp(e){if(e.propertyName==="value"&&pl(ro)){var n=[];Op(n,ro,e,du(e)),yp(Xx,n)}}function Wx(e,n,a){e==="focusin"?(Bp(),so=n,ro=a,so.attachEvent("onpropertychange",zp)):e==="focusout"&&Bp()}function qx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(ro)}function Yx(e,n){if(e==="click")return pl(n)}function jx(e,n){if(e==="input"||e==="change")return pl(n)}function Zx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ni=typeof Object.is=="function"?Object.is:Zx;function oo(e,n){if(ni(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!An.call(n,u)||!ni(e[u],n[u]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gp(e,n){var a=Hp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hp(a)}}function Vp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=qe(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=qe(e.document)}return n}function bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Kx=Ji&&"documentMode"in document&&11>=document.documentMode,Qs=null,Tu=null,lo=null,Au=!1;function Xp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||Qs==null||Qs!==qe(o)||(o=Qs,"selectionStart"in o&&bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=nc(Tu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Qs)))}function xs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},Ru={},Wp={};Ji&&(Wp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Ss(e){if(Ru[e])return Ru[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wp)return Ru[e]=n[a];return e}var qp=Ss("animationend"),Yp=Ss("animationiteration"),jp=Ss("animationstart"),Qx=Ss("transitionrun"),Jx=Ss("transitionstart"),$x=Ss("transitioncancel"),Zp=Ss("transitionend"),Kp=new Map,Cu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cu.push("scrollEnd");function wi(e,n){Kp.set(e,n),Z(n,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],$s=0,wu=0;function gl(){for(var e=$s,n=wu=$s=0;n<e;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var f=_i[n];if(_i[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&Qp(a,u,f)}}function _l(e,n,a,o){_i[$s++]=e,_i[$s++]=n,_i[$s++]=a,_i[$s++]=o,wu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Du(e,n,a,o){return _l(e,n,a,o),vl(e)}function Ms(e,n){return _l(e,null,null,n),vl(e)}function Qp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function vl(e){if(50<Uo)throw Uo=0,Hf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var tr={};function tS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,o){return new tS(e,n,a,o)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $i(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,o,u,f){var x=0;if(o=e,typeof e=="function")Uu(e)&&(x=1);else if(typeof e=="string")x=sM(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ii(31,a,n,u),e.elementType=O,e.lanes=f,e;case C:return ys(a.children,u,f,n);case M:x=8,u|=24;break;case S:return e=ii(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case G:return e=ii(13,a,n,u),e.elementType=G,e.lanes=f,e;case U:return e=ii(19,a,n,u),e.elementType=U,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:x=10;break t;case w:x=9;break t;case P:x=11;break t;case F:x=14;break t;case T:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ii(x,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function ys(e,n,a,o){return e=ii(7,e,o,n),e.lanes=a,e}function Lu(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function $p(e){var n=ii(18,null,null,0);return n.stateNode=e,n}function Nu(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var tm=new WeakMap;function vi(e,n){if(typeof e=="object"&&e!==null){var a=tm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:je(n)},tm.set(e,n),n)}return{value:e,source:n,stack:je(n)}}var er=[],nr=0,Sl=null,co=0,xi=[],Si=0,Na=null,Ii=1,Bi="";function ta(e,n){er[nr++]=co,er[nr++]=Sl,Sl=e,co=n}function em(e,n,a){xi[Si++]=Ii,xi[Si++]=Bi,xi[Si++]=Na,Na=e;var o=Ii;e=Bi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ii=1<<32-Pt(n)+u|a<<u|o,Bi=f+e}else Ii=1<<f|a<<u|o,Bi=e}function Ou(e){e.return!==null&&(ta(e,1),em(e,1,0))}function Pu(e){for(;e===Sl;)Sl=er[--nr],er[nr]=null,co=er[--nr],er[nr]=null;for(;e===Na;)Na=xi[--Si],xi[Si]=null,Bi=xi[--Si],xi[Si]=null,Ii=xi[--Si],xi[Si]=null}function nm(e,n){xi[Si++]=Ii,xi[Si++]=Bi,xi[Si++]=Na,Ii=n.id,Bi=n.overflow,Na=e}var Cn=null,Ze=null,Ee=!1,Oa=null,Mi=!1,Fu=Error(s(519));function Pa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(vi(n,e)),Fu}function im(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[Rn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)ve(No[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Ri(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||S_(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||Pa(e,!0)}function am(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Cn=Cn.return}}function ir(e){if(e!==Cn)return!1;if(!Ee)return am(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||eh(e.type,e.memoizedProps)),a=!a),a&&Ze&&Pa(e),am(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=w_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=w_(e)}else n===27?(n=Ze,Za(e.type)?(e=rh,rh=null,Ze=e):Ze=n):Ze=Cn?Ei(e.stateNode.nextSibling):null;return!0}function Es(){Ze=Cn=null,Ee=!1}function Iu(){var e=Oa;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Oa=null),e}function uo(e){Oa===null?Oa=[e]:Oa.push(e)}var Bu=I(null),bs=null,ea=null;function Fa(e,n,a){xt(Bu,n._currentValue),n._currentValue=a}function na(e){e._currentValue=Bu.current,$(Bu)}function zu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Hu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var H=0;H<n.length;H++)if(R.context===n[H]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),zu(f.return,a,e),o||(x=null);break t}f=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),zu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ar(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;ni(u.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(u===Mt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Hu(n,e,a,o),n.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ts(e){bs=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return sm(bs,e)}function yl(e,n){return bs===null&&Ts(e),sm(e,n)}function sm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(e===null)throw Error(s(308));ea=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ea=ea.next=n;return a}var eS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},nS=r.unstable_scheduleCallback,iS=r.unstable_NormalPriority,dn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gu(){return{controller:new eS,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&nS(iS,function(){e.controller.abort()})}var ho=null,Vu=0,sr=0,rr=null;function aS(e,n){if(ho===null){var a=ho=[];Vu=0,sr=qf(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Vu++,n.then(rm,rm),n}function rm(){if(--Vu===0&&ho!==null){rr!==null&&(rr.status="fulfilled");var e=ho;ho=null,sr=0,rr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function sS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var om=L.S;L.S=function(e,n){Xg=Rt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&aS(e,n),om!==null&&om(e,n)};var As=I(null);function ku(){var e=As.current;return e!==null?e:Ye.pooledCache}function El(e,n){n===null?xt(As,As.current):xt(As,n.pool)}function lm(){var e=ku();return e===null?null:{parent:dn._currentValue,pool:e}}var or=Error(s(460)),Xu=Error(s(474)),bl=Error(s(542)),Tl={then:function(){}};function cm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function um(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e}throw Cs=n,or}}function Rs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,or):a}}var Cs=null;function fm(){if(Cs===null)throw Error(s(459));var e=Cs;return Cs=null,e}function hm(e){if(e===or||e===bl)throw Error(s(483))}var lr=null,po=0;function Al(e){var n=po;return po+=1,lr===null&&(lr=[]),um(lr,e,n)}function mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function dm(e){function n(K,X){if(e){var et=K.deletions;et===null?(K.deletions=[X],K.flags|=16):et.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=$i(K,X),K.index=0,K.sibling=null,K}function f(K,X,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<X?(K.flags|=67108866,X):et):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,X,et,gt){return X===null||X.tag!==6?(X=Lu(et,K.mode,gt),X.return=K,X):(X=u(X,et),X.return=K,X)}function H(K,X,et,gt){var Kt=et.type;return Kt===C?dt(K,X,et.props.children,gt,et.key):X!==null&&(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&Rs(Kt)===X.type)?(X=u(X,et.props),mo(X,et),X.return=K,X):(X=xl(et.type,et.key,et.props,null,K.mode,gt),mo(X,et),X.return=K,X)}function nt(K,X,et,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=Nu(et,K.mode,gt),X.return=K,X):(X=u(X,et.children||[]),X.return=K,X)}function dt(K,X,et,gt,Kt){return X===null||X.tag!==7?(X=ys(et,K.mode,gt,Kt),X.return=K,X):(X=u(X,et),X.return=K,X)}function vt(K,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Lu(""+X,K.mode,et),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return et=xl(X.type,X.key,X.props,null,K.mode,et),mo(et,X),et.return=K,et;case b:return X=Nu(X,K.mode,et),X.return=K,X;case T:return X=Rs(X),vt(K,X,et)}if(W(X)||j(X))return X=ys(X,K.mode,et,null),X.return=K,X;if(typeof X.then=="function")return vt(K,Al(X),et);if(X.$$typeof===N)return vt(K,yl(K,X),et);Rl(K,X)}return null}function rt(K,X,et,gt){var Kt=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Kt!==null?null:R(K,X,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===Kt?H(K,X,et,gt):null;case b:return et.key===Kt?nt(K,X,et,gt):null;case T:return et=Rs(et),rt(K,X,et,gt)}if(W(et)||j(et))return Kt!==null?null:dt(K,X,et,gt,null);if(typeof et.then=="function")return rt(K,X,Al(et),gt);if(et.$$typeof===N)return rt(K,X,yl(K,et),gt);Rl(K,et)}return null}function lt(K,X,et,gt,Kt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get(et)||null,R(X,K,""+gt,Kt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return K=K.get(gt.key===null?et:gt.key)||null,H(X,K,gt,Kt);case b:return K=K.get(gt.key===null?et:gt.key)||null,nt(X,K,gt,Kt);case T:return gt=Rs(gt),lt(K,X,et,gt,Kt)}if(W(gt)||j(gt))return K=K.get(et)||null,dt(X,K,gt,Kt,null);if(typeof gt.then=="function")return lt(K,X,et,Al(gt),Kt);if(gt.$$typeof===N)return lt(K,X,et,yl(X,gt),Kt);Rl(X,gt)}return null}function Wt(K,X,et,gt){for(var Kt=null,Re=null,Yt=X,ue=X=0,ye=null;Yt!==null&&ue<et.length;ue++){Yt.index>ue?(ye=Yt,Yt=null):ye=Yt.sibling;var Ce=rt(K,Yt,et[ue],gt);if(Ce===null){Yt===null&&(Yt=ye);break}e&&Yt&&Ce.alternate===null&&n(K,Yt),X=f(Ce,X,ue),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce,Yt=ye}if(ue===et.length)return a(K,Yt),Ee&&ta(K,ue),Kt;if(Yt===null){for(;ue<et.length;ue++)Yt=vt(K,et[ue],gt),Yt!==null&&(X=f(Yt,X,ue),Re===null?Kt=Yt:Re.sibling=Yt,Re=Yt);return Ee&&ta(K,ue),Kt}for(Yt=o(Yt);ue<et.length;ue++)ye=lt(Yt,K,ue,et[ue],gt),ye!==null&&(e&&ye.alternate!==null&&Yt.delete(ye.key===null?ue:ye.key),X=f(ye,X,ue),Re===null?Kt=ye:Re.sibling=ye,Re=ye);return e&&Yt.forEach(function(ts){return n(K,ts)}),Ee&&ta(K,ue),Kt}function $t(K,X,et,gt){if(et==null)throw Error(s(151));for(var Kt=null,Re=null,Yt=X,ue=X=0,ye=null,Ce=et.next();Yt!==null&&!Ce.done;ue++,Ce=et.next()){Yt.index>ue?(ye=Yt,Yt=null):ye=Yt.sibling;var ts=rt(K,Yt,Ce.value,gt);if(ts===null){Yt===null&&(Yt=ye);break}e&&Yt&&ts.alternate===null&&n(K,Yt),X=f(ts,X,ue),Re===null?Kt=ts:Re.sibling=ts,Re=ts,Yt=ye}if(Ce.done)return a(K,Yt),Ee&&ta(K,ue),Kt;if(Yt===null){for(;!Ce.done;ue++,Ce=et.next())Ce=vt(K,Ce.value,gt),Ce!==null&&(X=f(Ce,X,ue),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return Ee&&ta(K,ue),Kt}for(Yt=o(Yt);!Ce.done;ue++,Ce=et.next())Ce=lt(Yt,K,ue,Ce.value,gt),Ce!==null&&(e&&Ce.alternate!==null&&Yt.delete(Ce.key===null?ue:Ce.key),X=f(Ce,X,ue),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return e&&Yt.forEach(function(gM){return n(K,gM)}),Ee&&ta(K,ue),Kt}function ke(K,X,et,gt){if(typeof et=="object"&&et!==null&&et.type===C&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var Kt=et.key;X!==null;){if(X.key===Kt){if(Kt=et.type,Kt===C){if(X.tag===7){a(K,X.sibling),gt=u(X,et.props.children),gt.return=K,K=gt;break t}}else if(X.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&Rs(Kt)===X.type){a(K,X.sibling),gt=u(X,et.props),mo(gt,et),gt.return=K,K=gt;break t}a(K,X);break}else n(K,X);X=X.sibling}et.type===C?(gt=ys(et.props.children,K.mode,gt,et.key),gt.return=K,K=gt):(gt=xl(et.type,et.key,et.props,null,K.mode,gt),mo(gt,et),gt.return=K,K=gt)}return x(K);case b:t:{for(Kt=et.key;X!==null;){if(X.key===Kt)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){a(K,X.sibling),gt=u(X,et.children||[]),gt.return=K,K=gt;break t}else{a(K,X);break}else n(K,X);X=X.sibling}gt=Nu(et,K.mode,gt),gt.return=K,K=gt}return x(K);case T:return et=Rs(et),ke(K,X,et,gt)}if(W(et))return Wt(K,X,et,gt);if(j(et)){if(Kt=j(et),typeof Kt!="function")throw Error(s(150));return et=Kt.call(et),$t(K,X,et,gt)}if(typeof et.then=="function")return ke(K,X,Al(et),gt);if(et.$$typeof===N)return ke(K,X,yl(K,et),gt);Rl(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(a(K,X.sibling),gt=u(X,et),gt.return=K,K=gt):(a(K,X),gt=Lu(et,K.mode,gt),gt.return=K,K=gt),x(K)):a(K,X)}return function(K,X,et,gt){try{po=0;var Kt=ke(K,X,et,gt);return lr=null,Kt}catch(Yt){if(Yt===or||Yt===bl)throw Yt;var Re=ii(29,Yt,null,K.mode);return Re.lanes=gt,Re.return=K,Re}}}var ws=dm(!0),pm=dm(!1),Ia=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),Qp(e,null,a),n}return _l(e,o,n,a),vl(e)}function go(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gi(e,a)}}function Yu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ju=!1;function _o(){if(ju){var e=rr;if(e!==null)throw e}}function vo(e,n,a,o){ju=!1;var u=e.updateQueue;Ia=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var H=R,nt=H.next;H.next=null,x===null?f=nt:x.next=nt,x=H;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==x&&(R===null?dt.firstBaseUpdate=nt:R.next=nt,dt.lastBaseUpdate=H))}if(f!==null){var vt=u.baseState;x=0,dt=nt=H=null,R=f;do{var rt=R.lane&-536870913,lt=rt!==R.lane;if(lt?(Me&rt)===rt:(o&rt)===rt){rt!==0&&rt===sr&&(ju=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=e,$t=R;rt=n;var ke=a;switch($t.tag){case 1:if(Wt=$t.payload,typeof Wt=="function"){vt=Wt.call(ke,vt,rt);break t}vt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=$t.payload,rt=typeof Wt=="function"?Wt.call(ke,vt,rt):Wt,rt==null)break t;vt=v({},vt,rt);break t;case 2:Ia=!0}}rt=R.callback,rt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[rt]:lt.push(rt))}else lt={lane:rt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(nt=dt=lt,H=vt):dt=dt.next=lt,x|=rt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(H=vt),u.baseState=H,u.firstBaseUpdate=nt,u.lastBaseUpdate=dt,f===null&&(u.shared.lanes=0),Xa|=x,e.lanes=x,e.memoizedState=vt}}function mm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function gm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mm(a[e],n)}var cr=I(null),Cl=I(0);function _m(e,n){e=fa,xt(Cl,e),xt(cr,n),fa=e|n.baseLanes}function Zu(){xt(Cl,fa),xt(cr,cr.current)}function Ku(){fa=Cl.current,$(cr),$(Cl)}var ai=I(null),yi=null;function Ha(e){var n=e.alternate;xt(un,un.current&1),xt(ai,e),yi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(yi=e)}function Qu(e){xt(un,un.current),xt(ai,e),yi===null&&(yi=e)}function vm(e){e.tag===22?(xt(un,un.current),xt(ai,e),yi===null&&(yi=e)):Ga()}function Ga(){xt(un,un.current),xt(ai,ai.current)}function si(e){$(ai),yi===e&&(yi=null),$(un)}var un=I(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ah(a)||sh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,oe=null,Ge=null,pn=null,Dl=!1,ur=!1,Ds=!1,Ul=0,xo=0,fr=null,rS=0;function an(){throw Error(s(321))}function Ju(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ni(e[a],n[a]))return!1;return!0}function $u(e,n,a,o,u,f){return ia=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?eg:mf,Ds=!1,f=a(o,u),Ds=!1,ur&&(f=Sm(n,a,o,u)),xm(e),f}function xm(e){L.H=yo;var n=Ge!==null&&Ge.next!==null;if(ia=0,pn=Ge=oe=null,Dl=!1,xo=0,fr=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&Ml(e)&&(mn=!0))}function Sm(e,n,a,o){oe=e;var u=0;do{if(ur&&(fr=null),xo=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,pn=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=ng,f=n(a,o)}while(ur);return f}function oS(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?So(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(oe.flags|=1024),n}function tf(){var e=Ul!==0;return Ul=0,e}function ef(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function nf(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}ia=0,pn=Ge=oe=null,ur=!1,xo=Ul=0,fr=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?oe.memoizedState=pn=e:pn=pn.next=e,pn}function fn(){if(Ge===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=pn===null?oe.memoizedState:pn.next;if(n!==null)pn=n,Ge=e;else{if(e===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},pn===null?oe.memoizedState=pn=e:pn=pn.next=e}return pn}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(e){var n=xo;return xo+=1,fr===null&&(fr=[]),e=um(fr,e,n),n=oe,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?eg:mf),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return So(e);if(e.$$typeof===N)return wn(e)}throw Error(s(438,String(e)))}function af(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=Y;return n.index++,a}function aa(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=fn();return sf(n,Ge,e)}function sf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=x=null,H=null,nt=n,dt=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(Me&vt)===vt:(ia&vt)===vt){var rt=nt.revertLane;if(rt===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===sr&&(dt=!0);else if((ia&rt)===rt){nt=nt.next,rt===sr&&(dt=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(R=H=vt,x=f):H=H.next=vt,oe.lanes|=rt,Xa|=rt;vt=nt.action,Ds&&a(f,vt),f=nt.hasEagerState?nt.eagerState:a(f,vt)}else rt={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(R=H=rt,x=f):H=H.next=rt,oe.lanes|=vt,Xa|=vt;nt=nt.next}while(nt!==null&&nt!==n);if(H===null?x=f:H.next=R,!ni(f,e.memoizedState)&&(mn=!0,dt&&(a=rr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function rf(e){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);ni(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Mm(e,n,a){var o=oe,u=fn(),f=Ee;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ni((Ge||u).memoizedState,a);if(x&&(u.memoizedState=a,mn=!0),u=u.queue,cf(bm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Em.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));f||(ia&127)!==0||ym(o,n,a)}return a}function ym(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Ll(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Em(e,n,a,o){n.value=a,n.getSnapshot=o,Tm(n)&&Am(e)}function bm(e,n,a){return a(function(){Tm(n)&&Am(e)})}function Tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ni(e,a)}catch{return!0}}function Am(e){var n=Ms(e,2);n!==null&&jn(n,e,2)}function of(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),Ds){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},n}function Rm(e,n,a,o){return e.baseState=a,sf(e,Ge,typeof o=="function"?o:aa)}function lS(e,n,a,o,u){if(Il(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Cm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Cm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=L.T,x={};L.T=x;try{var R=a(u,o),H=L.S;H!==null&&H(x,R),wm(e,n,R)}catch(nt){lf(e,n,nt)}finally{f!==null&&x.types!==null&&(f.types=x.types),L.T=f}}else try{f=a(u,o),wm(e,n,f)}catch(nt){lf(e,n,nt)}}function wm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Dm(e,n,o)},function(o){return lf(e,n,o)}):Dm(e,n,a)}function Dm(e,n,a){n.status="fulfilled",n.value=a,Um(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Cm(e,a)))}function lf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Um(n),n=n.next;while(n!==o)}e.action=null}function Um(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Lm(e,n){return n}function Nm(e,n){if(Ee){var a=Ye.formState;if(a!==null){t:{var o=oe;if(Ee){if(Ze){e:{for(var u=Ze,f=Mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ei(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=Ei(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:n},a.queue=o,a=Jm.bind(null,oe,o),o.dispatch=a,o=of(!1),f=pf.bind(null,oe,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=lS.bind(null,oe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Om(e){var n=fn();return Pm(n,Ge,e)}function Pm(e,n,a){if(n=sf(e,n,Lm)[0],e=Ol(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=So(n)}catch(x){throw x===or?bl:x}else o=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,hr(9,{destroy:void 0},cS.bind(null,u,a),null)),[o,f,e]}function cS(e,n){e.action=n}function Fm(e){var n=fn(),a=Ge;if(a!==null)return Pm(n,a,e);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function hr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Ll(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Im(){return fn().memoizedState}function Pl(e,n,a,o){var u=zn();oe.flags|=e,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Fl(e,n,a,o){var u=fn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ge!==null&&o!==null&&Ju(o,Ge.memoizedState.deps)?u.memoizedState=hr(n,f,a,o):(oe.flags|=e,u.memoizedState=hr(1|n,f,a,o))}function Bm(e,n){Pl(8390656,8,e,n)}function cf(e,n){Fl(2048,8,e,n)}function uS(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Ll(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function zm(e){var n=fn().memoizedState;return uS({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Hm(e,n){return Fl(4,2,e,n)}function Gm(e,n){return Fl(4,4,e,n)}function Vm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function km(e,n,a){a=a!=null?a.concat([e]):null,Fl(4,4,Vm.bind(null,n,e),a)}function uf(){}function Xm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ju(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Wm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ju(n,o[1]))return o[0];if(o=e(),Ds){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o}function ff(e,n,a){return a===void 0||(ia&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=qg(),oe.lanes|=e,Xa|=e,a)}function qm(e,n,a,o){return ni(a,n)?a:cr.current!==null?(e=ff(e,a,o),ni(e,n)||(mn=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(Me&261930)===0?(mn=!0,e.memoizedState=a):(e=qg(),oe.lanes|=e,Xa|=e,n)}function Ym(e,n,a,o,u){var f=z.p;z.p=f!==0&&8>f?f:8;var x=L.T,R={};L.T=R,pf(e,!1,n,a);try{var H=u(),nt=L.S;if(nt!==null&&nt(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=sS(H,o);Mo(e,n,dt,li(e))}else Mo(e,n,o,li(e))}catch(vt){Mo(e,n,{then:function(){},status:"rejected",reason:vt},li())}finally{z.p=f,x!==null&&R.types!==null&&(x.types=R.types),L.T=x}}function fS(){}function hf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=jm(e).queue;Ym(e,u,n,tt,a===null?fS:function(){return Zm(e),a(o)})}function jm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:tt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Zm(e){var n=jm(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},li())}function df(){return wn(Bo)}function Km(){return fn().memoizedState}function Qm(){return fn().memoizedState}function hS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();e=Ba(a);var o=za(n,e,a);o!==null&&(jn(o,n,a),go(o,n,a)),n={cache:Gu()},e.payload=n;return}n=n.return}}function dS(e,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Il(e)?$m(n,a):(a=Du(e,n,a,o),a!==null&&(jn(a,e,o),tg(a,n,o)))}function Jm(e,n,a){var o=li();Mo(e,n,a,o)}function Mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(e))$m(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,R=f(x,a);if(u.hasEagerState=!0,u.eagerState=R,ni(R,x))return _l(e,n,u,0),Ye===null&&gl(),!1}catch{}if(a=Du(e,n,u,o),a!==null)return jn(a,e,o),tg(a,n,o),!0}return!1}function pf(e,n,a,o){if(o={lane:2,revertLane:qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Il(e)){if(n)throw Error(s(479))}else n=Du(e,a,o,2),n!==null&&jn(n,e,2)}function Il(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function $m(e,n){ur=Dl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function tg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gi(e,a)}}var yo={readContext:wn,use:Nl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};yo.useEffectEvent=an;var eg={readContext:wn,use:Nl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Bm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,Vm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Pl(4194308,4,e,n)},useInsertionEffect:function(e,n){Pl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(Ds){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var u=a(n);if(Ds){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=dS.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=of(e);var n=e.queue,a=Jm.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:uf,useDeferredValue:function(e,n){var a=zn();return ff(a,e,n)},useTransition:function(){var e=of(!1);return e=Ym.bind(null,oe,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=oe,u=zn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Me&127)!==0||ym(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Bm(bm.bind(null,o,f,e),[e]),o.flags|=2048,hr(9,{destroy:void 0},Em.bind(null,o,f,a,n),null),a},useId:function(){var e=zn(),n=Ye.identifierPrefix;if(Ee){var a=Bi,o=Ii;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=rS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:df,useFormState:Nm,useActionState:Nm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=pf.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:af,useCacheRefresh:function(){return zn().memoizedState=hS.bind(null,oe)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},mf={readContext:wn,use:Nl,useCallback:Xm,useContext:wn,useEffect:cf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:Ol,useRef:Im,useState:function(){return Ol(aa)},useDebugValue:uf,useDeferredValue:function(e,n){var a=fn();return qm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Ol(aa)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:Mm,useId:Km,useHostTransitionStatus:df,useFormState:Om,useActionState:Om,useOptimistic:function(e,n){var a=fn();return Rm(a,Ge,e,n)},useMemoCache:af,useCacheRefresh:Qm};mf.useEffectEvent=zm;var ng={readContext:wn,use:Nl,useCallback:Xm,useContext:wn,useEffect:cf,useImperativeHandle:km,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Wm,useReducer:rf,useRef:Im,useState:function(){return rf(aa)},useDebugValue:uf,useDeferredValue:function(e,n){var a=fn();return Ge===null?ff(a,e,n):qm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=rf(aa)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:So(e),n]},useSyncExternalStore:Mm,useId:Km,useHostTransitionStatus:df,useFormState:Fm,useActionState:Fm,useOptimistic:function(e,n){var a=fn();return Ge!==null?Rm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:af,useCacheRefresh:Qm};ng.useEffectEvent=zm;function gf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var _f={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=li(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(jn(n,e,o),go(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=li(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(jn(n,e,o),go(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=li(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(jn(n,e,a),go(n,e,a))}};function ig(e,n,a,o,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,f):!0}function ag(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&_f.enqueueReplaceState(n,n.state,null)}function Us(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function sg(e){ml(e)}function rg(e){console.error(e)}function og(e){ml(e)}function Bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function lg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vf(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(e,n)},a}function cg(e){return e=Ba(e),e.tag=3,e}function ug(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){lg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){lg(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function pS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?Kl():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),kf(e,o,u)),!1;case 22:return a.flags|=65536,o===Tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),kf(e,o,u)),!1}throw Error(s(435,a.tag))}return kf(e,o,u),Kl(),!1}if(Ee)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Fu&&(e=Error(s(422),{cause:o}),uo(vi(e,a)))):(o!==Fu&&(n=Error(s(423),{cause:o}),uo(vi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=vi(o,a),u=vf(e.stateNode,o,u),Yu(e,u),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:o});if(f=vi(f,a),Do===null?Do=[f]:Do.push(f),sn!==4&&(sn=2),n===null)return!0;o=vi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=vf(a.stateNode,o,e),Yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wa===null||!Wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=cg(u),ug(u,e,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var xf=Error(s(461)),mn=!1;function Dn(e,n,a,o){n.child=e===null?pm(n,null,a,o):ws(n,e.child,a,o)}function fg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Ts(n),o=$u(e,n,a,x,f,u),R=tf(),e!==null&&!mn?(ef(e,n,u),sa(e,n,u)):(Ee&&R&&Ou(n),n.flags|=1,Dn(e,n,o,u),n.child)}function hg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,dg(e,n,f,o,u)):(e=xl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Rf(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(x,o)&&e.ref===n.ref)return sa(e,n,u)}return n.flags|=1,e=$i(f,o),e.ref=n.ref,e.return=n,n.child=e}function dg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(oo(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,Rf(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,sa(e,n,u)}return Sf(e,n,a,o,u)}function pg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return mg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,f!==null?f.cachePool:null),f!==null?_m(n,f):Zu(),vm(n);else return o=n.lanes=536870912,mg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(El(n,f.cachePool),_m(n,f),Ga(),n.memoizedState=null):(e!==null&&El(n,null),Zu(),Ga());return Dn(e,n,u,a),n.child}function Eo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function mg(e,n,a,o,u){var f=ku();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&El(n,null),Zu(),vm(n),e!==null&&ar(e,n,o,!0),n.childLanes=u,null}function zl(e,n){return n=Gl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function gg(e,n,a){return ws(n,e.child,null,a),e=zl(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function mS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=zl(n,o),n.lanes=536870912,Eo(null,e);if(Qu(n),(e=Ze)?(e=C_(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=$p(e),a.return=n,n.child=a,Cn=n,Ze=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return zl(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Qu(n),u)if(n.flags&256)n.flags&=-257,n=gg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||ar(e,n,a,!1),u=(a&e.childLanes)!==0,mn||u){if(o=Ye,o!==null&&(x=$n(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Ms(e,x),jn(o,e,x),xf;Kl(),n=gg(e,n,a)}else e=f.treeContext,Ze=Ei(x.nextSibling),Cn=n,Ee=!0,Oa=null,Mi=!1,e!==null&&nm(n,e),n=zl(n,o),n.flags|=4096;return n}return e=$i(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Sf(e,n,a,o,u){return Ts(n),a=$u(e,n,a,o,void 0,u),o=tf(),e!==null&&!mn?(ef(e,n,u),sa(e,n,u)):(Ee&&o&&Ou(n),n.flags|=1,Dn(e,n,a,u),n.child)}function _g(e,n,a,o,u,f){return Ts(n),n.updateQueue=null,a=Sm(n,o,a,u),xm(e),o=tf(),e!==null&&!mn?(ef(e,n,f),sa(e,n,f)):(Ee&&o&&Ou(n),n.flags|=1,Dn(e,n,a,f),n.child)}function vg(e,n,a,o,u){if(Ts(n),n.stateNode===null){var f=tr,x=a.contextType;typeof x=="object"&&x!==null&&(f=wn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=_f,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Wu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?wn(x):tr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(gf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&_f.enqueueReplaceState(f,f.state,null),vo(n,o,f,u),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,H=Us(a,R);f.props=H;var nt=f.context,dt=a.contextType;x=tr,typeof dt=="object"&&dt!==null&&(x=wn(dt));var vt=a.getDerivedStateFromProps;dt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,dt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||nt!==x)&&ag(n,f,o,x),Ia=!1;var rt=n.memoizedState;f.state=rt,vo(n,o,f,u),_o(),nt=n.memoizedState,R||rt!==nt||Ia?(typeof vt=="function"&&(gf(n,a,vt,o),nt=n.memoizedState),(H=Ia||ig(n,a,H,o,rt,nt,x))?(dt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=x,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,qu(e,n),x=n.memoizedProps,dt=Us(a,x),f.props=dt,vt=n.pendingProps,rt=f.context,nt=a.contextType,H=tr,typeof nt=="object"&&nt!==null&&(H=wn(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==vt||rt!==H)&&ag(n,f,o,H),Ia=!1,rt=n.memoizedState,f.state=rt,vo(n,o,f,u),_o();var lt=n.memoizedState;x!==vt||rt!==lt||Ia||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof R=="function"&&(gf(n,a,R,o),lt=n.memoizedState),(dt=Ia||ig(n,a,dt,o,rt,lt,H)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,lt,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,lt,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=H,o=dt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Hl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=ws(n,e.child,null,u),n.child=ws(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=sa(e,n,u),e}function xg(e,n,a,o){return Es(),n.flags|=256,Dn(e,n,a,o),n.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yf(e){return{baseLanes:e,cachePool:lm()}}function Ef(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function Sg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?Ha(n):Ga(),(e=Ze)?(e=C_(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Na!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=$p(e),a.return=n,n.child=a,Cn=n,Ze=null)):e=null,e===null)throw Pa(n);return sh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ga(),u=n.mode,R=Gl({mode:"hidden",children:R},u),o=ys(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=yf(a),o.childLanes=Ef(e,x,a),n.memoizedState=Mf,Eo(null,o)):(Ha(n),bf(n,R))}var H=e.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(f)n.flags&256?(Ha(n),n.flags&=-257,n=Tf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),R=o.fallback,u=n.mode,o=Gl({mode:"visible",children:o.children},u),R=ys(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,ws(n,e.child,null,a),o=n.child,o.memoizedState=yf(a),o.childLanes=Ef(e,x,a),n.memoizedState=Mf,n=Eo(null,o));else if(Ha(n),sh(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var nt=x.dgst;x=nt,o=Error(s(419)),o.stack="",o.digest=x,uo({value:o,source:null,stack:null}),n=Tf(e,n,a)}else if(mn||ar(e,n,a,!1),x=(a&e.childLanes)!==0,mn||x){if(x=Ye,x!==null&&(o=$n(x,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Ms(e,o),jn(x,e,o),xf;ah(R)||Kl(),n=Tf(e,n,a)}else ah(R)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Ze=Ei(R.nextSibling),Cn=n,Ee=!0,Oa=null,Mi=!1,e!==null&&nm(n,e),n=bf(n,o.children),n.flags|=4096);return n}return u?(Ga(),R=o.fallback,u=n.mode,H=e.child,nt=H.sibling,o=$i(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,nt!==null?R=$i(nt,R):(R=ys(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Eo(null,o),o=n.child,R=e.child.memoizedState,R===null?R=yf(a):(u=R.cachePool,u!==null?(H=dn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=lm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Ef(e,x,a),n.memoizedState=Mf,Eo(e.child,o)):(Ha(n),a=e.child,e=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function bf(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=ii(22,e,null,n),e.lanes=0,e}function Tf(e,n,a){return ws(n,e.child,null,a),e=bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),zu(e.return,n,a)}function Af(e,n,a,o,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function yg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=un.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,xt(un,x),Dn(e,n,o,a),o=Ee?co:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mg(e,a,n);else if(e.tag===19)Mg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Af(n,!0,a,null,f,o);break;case"together":Af(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=$i(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=$i(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function gS(e,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),Fa(n,dn,e.memoizedState.cache),Es();break;case 27:case 5:te(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sg(e,n,a):(Ha(n),e=sa(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ar(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return yg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(un,un.current),o)break;return null;case 22:return n.lanes=0,pg(e,n,a,n.pendingProps);case 24:Fa(n,dn,e.memoizedState.cache)}return sa(e,n,a)}function Eg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Rf(e,a)&&(n.flags&128)===0)return mn=!1,gS(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ee&&(n.flags&1048576)!==0&&em(n,co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Rs(n.elementType),n.type=e,typeof e=="function")Uu(e)?(o=Us(e,o),n.tag=1,n=vg(null,n,e,o,a)):(n.tag=0,n=Sf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===P){n.tag=11,n=fg(null,n,e,o,a);break t}else if(u===F){n.tag=14,n=hg(null,n,e,o,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return Sf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Us(o,n.pendingProps),vg(e,n,o,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,qu(e,n),vo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Fa(n,dn,o),o!==f.cache&&Hu(n,[dn],a,!0),_o(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=xg(e,n,o,a);break t}else if(o!==u){u=vi(Error(s(424)),n),uo(u),n=xg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=Ei(e.firstChild),Cn=n,Ee=!0,Oa=null,Mi=!0,a=pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Es(),o===u){n=sa(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=O_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,o=ic(ot.current).createElement(a),o[cn]=n,o[Rn]=e,Un(o,a,e),hn(o),n.stateNode=o):n.memoizedState=O_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return te(n),e===null&&Ee&&(o=n.stateNode=U_(n.type,n.pendingProps,ot.current),Cn=n,Mi=!0,u=Ze,Za(n.type)?(rh=u,Ze=Ei(o.firstChild)):Ze=u),Dn(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=o=Ze)&&(o=qS(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Cn=n,Ze=Ei(o.firstChild),Mi=!1,u=!0):u=!1),u||Pa(n)),te(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,eh(u,f)?o=null:x!==null&&eh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=$u(e,n,oS,null,null,a),Bo._currentValue=u),Hl(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Ee&&((e=a=Ze)&&(a=YS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Cn=n,Ze=null,e=!0):e=!1),e||Pa(n)),null;case 13:return Sg(e,n,a);case 4:return bt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ws(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return fg(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ts(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return hg(e,n,n.type,n.pendingProps,a);case 15:return dg(e,n,n.type,n.pendingProps,a);case 19:return yg(e,n,a);case 31:return mS(e,n,a);case 22:return pg(e,n,a,n.pendingProps);case 24:return Ts(n),o=wn(dn),e===null?(u=ku(),u===null&&(u=Ye,f=Gu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Wu(n),Fa(n,dn,u)):((e.lanes&a)!==0&&(qu(e,n),vo(n,null,null,a),_o()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,dn,o)):(o=f.cache,Fa(n,dn,o),o!==u.cache&&Hu(n,[dn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(e){e.flags|=4}function Cf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Kg())e.flags|=8192;else throw Cs=Tl,Xu}else e.flags&=-16777217}function bg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!z_(n))if(Kg())e.flags|=8192;else throw Cs=Tl,Xu}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?yt():536870912,e.lanes|=n,gr|=n)}function bo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function _S(e,n,a){var o=n.pendingProps;switch(Pu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(dn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Iu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ra(n),f!==null?(Ke(n),bg(n,f)):(Ke(n),Cf(n,u,null,o,a))):f?f!==e.memoizedState?(ra(n),Ke(n),bg(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ra(n),Ke(n),Cf(n,u,e,o,a)),null;case 27:if(Qt(n),a=ot.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=At.current,ir(n)?im(n):(e=U_(u,o,a),n.stateNode=e,ra(n))}return Ke(n),null;case 5:if(Qt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=At.current,ir(n))im(n);else{var x=ic(ot.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[cn]=n,f[Rn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ra(n)}}return Ke(n),Cf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=ot.current,ir(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||S_(e.nodeValue,a)),e||Pa(n,!0)}else e=ic(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ir(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ir(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Iu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Ke(n),null);case 4:return Ht(),e===null&&Kf(n.stateNode.containerInfo),Ke(n),null;case 10:return na(n.type),Ke(n),null;case 19:if($(un),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)bo(o,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,bo(o,!1),e=f.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Jp(a,e),a=a.sibling;return xt(un,un.current&1|2),Ee&&ta(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Rt()>Yl&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304)}else{if(!u)if(e=wl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Ee)return Ke(n),null}else 2*Rt()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,bo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Rt(),e.sibling=null,a=un.current,xt(un,u?a&1|2:a&1),Ee&&ta(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return si(n),Ku(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&$(As),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(dn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function vS(e,n){switch(Pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return na(dn),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(un),null;case 4:return Ht(),null;case 10:return na(n.type),null;case 22:case 23:return si(n),Ku(),e!==null&&$(As),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return na(dn),null;case 25:return null;default:return null}}function Tg(e,n){switch(Pu(n),n.tag){case 3:na(dn),Ht();break;case 26:case 27:case 5:Qt(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:$(un);break;case 10:na(n.type);break;case 22:case 23:si(n),Ku(),e!==null&&$(As);break;case 24:na(dn)}}function To(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){Be(n,n.return,R)}}function Va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var H=a,nt=R;try{nt()}catch(dt){Be(u,H,dt)}}}o=o.next}while(o!==f)}}catch(dt){Be(n,n.return,dt)}}function Ag(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gm(n,a)}catch(o){Be(e,e.return,o)}}}function Rg(e,n,a){a.props=Us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function Ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function Cg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function wf(e,n,a){try{var o=e.stateNode;HS(o,e.type,a,n),o[Rn]=n}catch(u){Be(e,e.return,u)}}function wg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function Df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Uf(e,n,a),e=e.sibling;e!==null;)Uf(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function Dg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[cn]=e,n[Rn]=a}catch(f){Be(e,e.return,f)}}var oa=!1,gn=!1,Lf=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,En=null;function xS(e,n){if(e=e.containerInfo,$f=uc,e=kp(e),bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,R=-1,H=-1,nt=0,dt=0,vt=e,rt=null;e:for(;;){for(var lt;vt!==a||u!==0&&vt.nodeType!==3||(R=x+u),vt!==f||o!==0&&vt.nodeType!==3||(H=x+o),vt.nodeType===3&&(x+=vt.nodeValue.length),(lt=vt.firstChild)!==null;)rt=vt,vt=lt;for(;;){if(vt===e)break e;if(rt===a&&++nt===u&&(R=x),rt===f&&++dt===o&&(H=x),(lt=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=lt}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(th={focusedElem:e,selectionRange:a},uc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Wt=Us(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Be(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ih(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ih(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function Lg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(e,a),o&4&&To(5,a);break;case 1:if(ca(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Be(a,a.return,x)}else{var u=Us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Be(a,a.return,x)}}o&64&&Ag(a),o&512&&Ao(a,a.return);break;case 3:if(ca(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gm(e,n)}catch(x){Be(a,a.return,x)}}break;case 27:n===null&&o&4&&Dg(a);case 26:case 5:ca(e,a),n===null&&o&4&&Cg(a),o&512&&Ao(a,a.return);break;case 12:ca(e,a);break;case 31:ca(e,a),o&4&&Pg(e,a);break;case 13:ca(e,a),o&4&&Fg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=CS.bind(null,a),jS(e,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||gn,u=oa;var f=gn;oa=o,(gn=n)&&!f?ua(e,a,(a.subtreeFlags&8772)!==0):ca(e,a),oa=u,gn=f}break;case 30:break;default:ca(e,a)}}function Ng(e){var n=e.alternate;n!==null&&(e.alternate=null,Ng(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&$r(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Xn=!1;function la(e,n,a){for(a=a.child;a!==null;)Og(e,n,a),a=a.sibling}function Og(e,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:gn||zi(a,n),la(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||zi(a,n);var o=tn,u=Xn;Za(a.type)&&(tn=a.stateNode,Xn=!1),la(e,n,a),Po(a.stateNode),tn=o,Xn=u;break;case 5:gn||zi(a,n);case 6:if(o=tn,u=Xn,tn=null,la(e,n,a),tn=o,Xn=u,tn!==null)if(Xn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:tn!==null&&(Xn?(e=tn,A_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),br(e)):A_(tn,a.stateNode));break;case 4:o=tn,u=Xn,tn=a.stateNode.containerInfo,Xn=!0,la(e,n,a),tn=o,Xn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),gn||Va(4,a,n),la(e,n,a);break;case 1:gn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Rg(a,n,o)),la(e,n,a);break;case 21:la(e,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,la(e,n,a),gn=o;break;default:la(e,n,a)}}function Pg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{br(e)}catch(a){Be(n,n.return,a)}}}function Fg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{br(e)}catch(a){Be(n,n.return,a)}}function SS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ug),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ug),n;default:throw Error(s(435,e.tag))}}function Xl(e,n){var a=SS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=wS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,x=n,R=x;t:for(;R!==null;){switch(R.tag){case 27:if(Za(R.type)){tn=R.stateNode,Xn=!1;break t}break;case 5:tn=R.stateNode,Xn=!1;break t;case 3:case 4:tn=R.stateNode.containerInfo,Xn=!0;break t}R=R.return}if(tn===null)throw Error(s(160));Og(f,x,u),tn=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ig(n,e),n=n.sibling}var Di=null;function Ig(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Va(3,e,e.return),To(3,e),Va(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(gn||a===null||zi(a,a.return)),o&64&&oa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Di;if(Wn(n,e),qn(e),o&512&&(gn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ra]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[cn]=e,hn(f),o=f;break t;case"link":var x=I_("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(f=x[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(x=I_("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(f=x[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[cn]=e,hn(f),o=f}e.stateNode=o}else B_(u,e.type,e.stateNode);else e.stateNode=F_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?B_(u,e.type,e.stateNode):F_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&wf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(gn||a===null||zi(a,a.return)),a!==null&&o&4&&wf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(gn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{ei(u,"")}catch(Wt){Be(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,wf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Lf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){Be(e,e.return,Wt)}}break;case 3:if(rc=null,u=Di,Di=ac(n.containerInfo),Wn(n,e),Di=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(Wt){Be(e,e.return,Wt)}Lf&&(Lf=!1,Bg(e));break;case 4:o=Di,Di=ac(e.stateNode.containerInfo),Wn(n,e),qn(e),Di=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=Rt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,nt=oa,dt=gn;if(oa=nt||u,gn=dt||H,Wn(n,e),gn=dt,oa=nt,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||oa||gn||Ls(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=H.stateNode;var vt=H.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Wt){Be(H,H.return,Wt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Wt){Be(H,H.return,Wt)}}}else if(n.tag===18){if(a===null){H=n;try{var lt=H.stateNode;u?R_(lt,!0):R_(H.stateNode,!1)}catch(Wt){Be(H,H.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xl(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Xl(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(wg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Df(e);kl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(ei(x,""),a.flags&=-33);var R=Df(e);kl(e,R,x);break;case 3:case 4:var H=a.stateNode.containerInfo,nt=Df(e);Uf(e,nt,H);break;default:throw Error(s(161))}}catch(dt){Be(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Bg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lg(e,n.alternate,n),n=n.sibling}function Ls(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Ls(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rg(n,n.return,a),Ls(n);break;case 27:Po(n.stateNode);case 26:case 5:zi(n,n.return),Ls(n);break;case 22:n.memoizedState===null&&Ls(n);break;case 30:Ls(n);break;default:Ls(n)}e=e.sibling}}function ua(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ua(u,f,a),To(4,f);break;case 1:if(ua(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Be(o,o.return,nt)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)mm(H[u],R)}catch(nt){Be(o,o.return,nt)}}a&&x&64&&Ag(f),Ao(f,f.return);break;case 27:Dg(f);case 26:case 5:ua(u,f,a),a&&o===null&&x&4&&Cg(f),Ao(f,f.return);break;case 12:ua(u,f,a);break;case 31:ua(u,f,a),a&&x&4&&Pg(u,f);break;case 13:ua(u,f,a),a&&x&4&&Fg(u,f);break;case 22:f.memoizedState===null&&ua(u,f,a),Ao(f,f.return);break;case 30:break;default:ua(u,f,a)}n=n.sibling}}function Nf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fo(a))}function Of(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e))}function Ui(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zg(e,n,a,o),n=n.sibling}function zg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,o),u&2048&&To(9,n);break;case 1:Ui(e,n,a,o);break;case 3:Ui(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&fo(e)));break;case 12:if(u&2048){Ui(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,R=f.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Be(n,n.return,H)}}else Ui(e,n,a,o);break;case 31:Ui(e,n,a,o);break;case 13:Ui(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ui(e,n,a,o):Ro(e,n):f._visibility&2?Ui(e,n,a,o):(f._visibility|=2,dr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Nf(x,n);break;case 24:Ui(e,n,a,o),u&2048&&Of(n.alternate,n);break;default:Ui(e,n,a,o)}}function dr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,R=a,H=o,nt=x.flags;switch(x.tag){case 0:case 11:case 15:dr(f,x,R,H,u),To(8,x);break;case 23:break;case 22:var dt=x.stateNode;x.memoizedState!==null?dt._visibility&2?dr(f,x,R,H,u):Ro(f,x):(dt._visibility|=2,dr(f,x,R,H,u)),u&&nt&2048&&Nf(x.alternate,x);break;case 24:dr(f,x,R,H,u),u&&nt&2048&&Of(x.alternate,x);break;default:dr(f,x,R,H,u)}n=n.sibling}}function Ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Nf(o.alternate,o);break;case 24:Ro(a,o),u&2048&&Of(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var Co=8192;function pr(e,n,a){if(e.subtreeFlags&Co)for(e=e.child;e!==null;)Hg(e,n,a),e=e.sibling}function Hg(e,n,a){switch(e.tag){case 26:pr(e,n,a),e.flags&Co&&e.memoizedState!==null&&rM(a,Di,e.memoizedState,e.memoizedProps);break;case 5:pr(e,n,a);break;case 3:case 4:var o=Di;Di=ac(e.stateNode.containerInfo),pr(e,n,a),Di=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Co,Co=16777216,pr(e,n,a),Co=o):pr(e,n,a));break;default:pr(e,n,a)}}function Gg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function wo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,kg(o,e)}Gg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:wo(e),e.flags&2048&&Va(9,e,e.return);break;case 3:wo(e);break;case 12:wo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):wo(e);break;default:wo(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,kg(o,e)}Gg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function kg(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,f=o.return;if(Ng(o),o===a){En=null;break t}if(u!==null){u.return=f,En=u;break t}En=f}}}var MS={getCacheForType:function(e){var n=wn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(dn).controller.signal}},yS=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ye=null,_e=null,Me=0,Ie=0,ri=null,ka=!1,mr=!1,Pf=!1,fa=0,sn=0,Xa=0,Ns=0,Ff=0,oi=0,gr=0,Do=null,Yn=null,If=!1,ql=0,Xg=0,Yl=1/0,jl=null,Wa=null,xn=0,qa=null,_r=null,ha=0,Bf=0,zf=null,Wg=null,Uo=0,Hf=null;function li(){return(Ue&2)!==0&&Me!==0?Me&-Me:L.T!==null?qf():Kr()}function qg(){if(oi===0)if((Me&536870912)===0||Ee){var e=me;me<<=1,(me&3932160)===0&&(me=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function jn(e,n,a){(e===Ye&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(vr(e,0),Ya(e,Me,oi,!1)),ee(e,a),((Ue&2)===0||e!==Ye)&&(e===Ye&&((Ue&2)===0&&(Ns|=a),sn===4&&Ya(e,Me,oi,!1)),Hi(e))}function Yg(e,n,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=o?TS(e,n):Vf(e,n,!0),f=o;do{if(u===0){mr&&!o&&Ya(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!ES(a)){u=Vf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=e;u=Do;var H=R.current.memoizedState.isDehydrated;if(H&&(vr(R,x).flags|=256),x=Vf(R,x,!1),x!==2){if(Pf&&!H){R.errorRecoveryDisabledLanes|=f,Ns|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){vr(e,0),Ya(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ya(o,n,oi,!ka);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-Rt(),10<u)){if(Ya(o,n,oi,!ka),pt(o,0,!0)!==0)break t;ha=n,o.timeoutHandle=b_(jg.bind(null,o,a,Yn,jl,If,n,oi,Ns,gr,ka,f,"Throttled",-0,0),u);break t}jg(o,a,Yn,jl,If,n,oi,Ns,gr,ka,f,null,-0,0)}}break}while(!0);Hi(e)}function jg(e,n,a,o,u,f,x,R,H,nt,dt,vt,rt,lt){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},Hg(n,f,vt);var Wt=(f&62914560)===f?ql-Rt():(f&4194048)===f?Xg-Rt():0;if(Wt=oM(vt,Wt),Wt!==null){ha=f,e.cancelPendingCommit=Wt(n_.bind(null,e,n,f,a,o,u,x,R,H,dt,vt,null,rt,lt)),Ya(e,f,x,!nt);return}}n_(e,n,f,a,o,u,x,R,H)}function ES(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ni(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(e,n,a,o){n&=~Ff,n&=~Ns,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&De(e,a,n)}function Zl(){return(Ue&6)===0?(Lo(0),!1):!0}function Gf(){if(_e!==null){if(Ie===0)var e=_e.return;else e=_e,ea=bs=null,nf(e),lr=null,po=0,e=_e;for(;e!==null;)Tg(e.alternate,e),e=e.return;_e=null}}function vr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,kS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ha=0,Gf(),Ye=e,_e=a=$i(e.current,null),Me=n,Ie=0,ri=null,ka=!1,mr=Bt(e,n),Pf=!1,gr=oi=Ff=Ns=Xa=sn=0,Yn=Do=null,If=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),f=1<<u;n|=e[u],o&=~f}return fa=n,gl(),a}function Zg(e,n){oe=null,L.H=yo,n===or||n===bl?(n=fm(),Ie=3):n===Xu?(n=fm(),Ie=4):Ie=n===xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,_e===null&&(sn=1,Bl(e,vi(n,e.current)))}function Kg(){var e=ai.current;return e===null?!0:(Me&4194048)===Me?yi===null:(Me&62914560)===Me||(Me&536870912)!==0?e===yi:!1}function Qg(){var e=L.H;return L.H=yo,e===null?yo:e}function Jg(){var e=L.A;return L.A=MS,e}function Kl(){sn=4,ka||(Me&4194048)!==Me&&ai.current!==null||(mr=!0),(Xa&134217727)===0&&(Ns&134217727)===0||Ye===null||Ya(Ye,Me,oi,!1)}function Vf(e,n,a){var o=Ue;Ue|=2;var u=Qg(),f=Jg();(Ye!==e||Me!==n)&&(jl=null,vr(e,n)),n=!1;var x=sn;t:do try{if(Ie!==0&&_e!==null){var R=_e,H=ri;switch(Ie){case 8:Gf(),x=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var nt=Ie;if(Ie=0,ri=null,xr(e,R,H,nt),a&&mr){x=0;break t}break;default:nt=Ie,Ie=0,ri=null,xr(e,R,H,nt)}}bS(),x=sn;break}catch(dt){Zg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,ea=bs=null,Ue=o,L.H=u,L.A=f,_e===null&&(Ye=null,Me=0,gl()),x}function bS(){for(;_e!==null;)$g(_e)}function TS(e,n){var a=Ue;Ue|=2;var o=Qg(),u=Jg();Ye!==e||Me!==n?(jl=null,Yl=Rt()+500,vr(e,n)):mr=Bt(e,n);t:do try{if(Ie!==0&&_e!==null){n=_e;var f=ri;e:switch(Ie){case 1:Ie=0,ri=null,xr(e,n,f,1);break;case 2:case 9:if(cm(f)){Ie=0,ri=null,t_(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==e||(Ie=7),Hi(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:cm(f)?(Ie=0,ri=null,t_(n)):(Ie=0,ri=null,xr(e,n,f,7));break;case 5:var x=null;switch(_e.tag){case 26:x=_e.memoizedState;case 5:case 27:var R=_e;if(x?z_(x):R.stateNode.complete){Ie=0,ri=null;var H=R.sibling;if(H!==null)_e=H;else{var nt=R.return;nt!==null?(_e=nt,Ql(nt)):_e=null}break e}}Ie=0,ri=null,xr(e,n,f,5);break;case 6:Ie=0,ri=null,xr(e,n,f,6);break;case 8:Gf(),sn=6;break t;default:throw Error(s(462))}}AS();break}catch(dt){Zg(e,dt)}while(!0);return ea=bs=null,L.H=o,L.A=u,Ue=a,_e!==null?0:(Ye=null,Me=0,gl(),sn)}function AS(){for(;_e!==null&&!de();)$g(_e)}function $g(e){var n=Eg(e.alternate,e,fa);e.memoizedProps=e.pendingProps,n===null?Ql(e):_e=n}function t_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=_g(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=_g(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:nf(n);default:Tg(a,n),n=_e=Jp(n,fa),n=Eg(a,n,fa)}e.memoizedProps=e.pendingProps,n===null?Ql(e):_e=n}function xr(e,n,a,o){ea=bs=null,nf(n),lr=null,po=0;var u=n.return;try{if(pS(e,u,n,a,Me)){sn=1,Bl(e,vi(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;sn=1,Bl(e,vi(a,e.current)),_e=null;return}n.flags&32768?(Ee||o===1?e=!0:mr||(Me&536870912)!==0?e=!1:(ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),e_(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){e_(n,ka);return}e=n.return;var a=_S(n.alternate,n,fa);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);sn===0&&(sn=5)}function e_(e,n){do{var a=vS(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);sn=6,_e=null}function n_(e,n,a,o,u,f,x,R,H){e.cancelPendingCommit=null;do Jl();while(xn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=wu,nn(e,a,f,x,R,H),e===Ye&&(_e=Ye=null,Me=0),_r=n,qa=e,ha=a,Bf=f,zf=u,Wg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,DS(J,function(){return o_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=z.p,z.p=2,x=Ue,Ue|=4;try{xS(e,n,a)}finally{Ue=x,z.p=u,L.T=o}}xn=1,i_(),a_(),s_()}}function i_(){if(xn===1){xn=0;var e=qa,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=z.p;z.p=2;var u=Ue;Ue|=4;try{Ig(n,e);var f=th,x=kp(e.containerInfo),R=f.focusedElem,H=f.selectionRange;if(x!==R&&R&&R.ownerDocument&&Vp(R.ownerDocument.documentElement,R)){if(H!==null&&bu(R)){var nt=H.start,dt=H.end;if(dt===void 0&&(dt=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(dt,R.value.length);else{var vt=R.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var lt=rt.getSelection(),Wt=R.textContent.length,$t=Math.min(H.start,Wt),ke=H.end===void 0?$t:Math.min(H.end,Wt);!lt.extend&&$t>ke&&(x=ke,ke=$t,$t=x);var K=Gp(R,$t),X=Gp(R,ke);if(K&&X&&(lt.rangeCount!==1||lt.anchorNode!==K.node||lt.anchorOffset!==K.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var et=vt.createRange();et.setStart(K.node,K.offset),lt.removeAllRanges(),$t>ke?(lt.addRange(et),lt.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),lt.addRange(et))}}}}for(vt=[],lt=R;lt=lt.parentNode;)lt.nodeType===1&&vt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var gt=vt[R];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}uc=!!$f,th=$f=null}finally{Ue=u,z.p=o,L.T=a}}e.current=n,xn=2}}function a_(){if(xn===2){xn=0;var e=qa,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=z.p;z.p=2;var u=Ue;Ue|=4;try{Lg(e,n.alternate,n)}finally{Ue=u,z.p=o,L.T=a}}xn=3}}function s_(){if(xn===4||xn===3){xn=0,He();var e=qa,n=_r,a=ha,o=Wg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,_r=qa=null,r_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Wa=null),Zr(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=z.p,z.p=2,L.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var R=o[x];f(R.value,{componentStack:R.stack})}}finally{L.T=n,z.p=u}}(ha&3)!==0&&Jl(),Hi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Hf?Uo++:(Uo=0,Hf=e):Uo=0,Lo(0)}}function r_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,fo(n)))}function Jl(){return i_(),a_(),s_(),o_()}function o_(){if(xn!==5)return!1;var e=qa,n=Bf;Bf=0;var a=Zr(ha),o=L.T,u=z.p;try{z.p=32>a?32:a,L.T=null,a=zf,zf=null;var f=qa,x=ha;if(xn=0,_r=qa=null,ha=0,(Ue&6)!==0)throw Error(s(331));var R=Ue;if(Ue|=4,Vg(f.current),zg(f,f.current,x,a),Ue=R,Lo(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{z.p=u,L.T=o,r_(e,n)}}function l_(e,n,a){n=vi(a,n),n=vf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(ee(e,2),Hi(e))}function Be(e,n,a){if(e.tag===3)l_(e,e,a);else for(;n!==null;){if(n.tag===3){l_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){e=vi(a,e),a=cg(2),o=za(n,a,2),o!==null&&(ug(a,o,n,e),ee(o,2),Hi(o));break}}n=n.return}}function kf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new yS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),e=RS.bind(null,e,n,a),n.then(e,e))}function RS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Me&a)===a&&(sn===4||sn===3&&(Me&62914560)===Me&&300>Rt()-ql?(Ue&2)===0&&vr(e,0):Ff|=a,gr===Me&&(gr=0)),Hi(e)}function c_(e,n){n===0&&(n=yt()),e=Ms(e,n),e!==null&&(ee(e,n),Hi(e))}function CS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),c_(e,a)}function wS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),c_(e,a)}function DS(e,n){return q(e,n)}var $l=null,Sr=null,Xf=!1,tc=!1,Wf=!1,ja=0;function Hi(e){e!==Sr&&e.next===null&&(Sr===null?$l=Sr=e:Sr=Sr.next=e),tc=!0,Xf||(Xf=!0,LS())}function Lo(e,n){if(!Wf&&tc){Wf=!0;do for(var a=!1,o=$l;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(x&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,d_(o,f))}else f=Me,f=pt(o,o===Ye?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Bt(o,f)||(a=!0,d_(o,f));o=o.next}while(a);Wf=!1}}function US(){u_()}function u_(){tc=Xf=!1;var e=0;ja!==0&&VS()&&(e=ja);for(var n=Rt(),a=null,o=$l;o!==null;){var u=o.next,f=f_(o,n);f===0?(o.next=null,a===null?$l=u:a.next=u,u===null&&(Sr=a)):(a=o,(e!==0||(f&3)!==0)&&(tc=!0)),o=u}xn!==0&&xn!==5||Lo(e),ja!==0&&(ja=0)}function f_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Pt(f),R=1<<x,H=u[x];H===-1?((R&a)===0||(R&o)!==0)&&(u[x]=Lt(R,n)):H<=n&&(e.expiredLanes|=R),f&=~R}if(n=Ye,a=Me,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&en(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&en(o),Zr(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=Et;break;default:a=J}return o=h_.bind(null,e),a=q(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&en(o),e.callbackPriority=2,e.callbackNode=null,2}function h_(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Jl()&&e.callbackNode!==a)return null;var o=Me;return o=pt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Yg(e,o,n),f_(e,Rt()),e.callbackNode!=null&&e.callbackNode===a?h_.bind(null,e):null)}function d_(e,n){if(Jl())return null;Yg(e,n,!0)}function LS(){XS(function(){(Ue&6)!==0?q(D,US):u_()})}function qf(){if(ja===0){var e=sr;e===0&&(e=ie,ie<<=1,(ie&261888)===0&&(ie=256)),ja=e}return ja}function p_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_s(""+e)}function m_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function NS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=p_((u[Rn]||null).action),x=o.submitter;x&&(n=(n=x[Rn]||null)?p_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var R=new hl("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ja!==0){var H=x?m_(u,x):new FormData(u);hf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(R.preventDefault(),H=x?m_(u,x):new FormData(u),hf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Yf=0;Yf<Cu.length;Yf++){var jf=Cu[Yf],OS=jf.toLowerCase(),PS=jf[0].toUpperCase()+jf.slice(1);wi(OS,"on"+PS)}wi(qp,"onAnimationEnd"),wi(Yp,"onAnimationIteration"),wi(jp,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(Qx,"onTransitionRun"),wi(Jx,"onTransitionStart"),wi($x,"onTransitionCancel"),wi(Zp,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function g_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],H=R.instance,nt=R.currentTarget;if(R=R.listener,H!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(dt){ml(dt)}u.currentTarget=null,f=H}else for(x=0;x<o.length;x++){if(R=o[x],H=R.instance,nt=R.currentTarget,R=R.listener,H!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=nt;try{f(u)}catch(dt){ml(dt)}u.currentTarget=null,f=H}}}}function ve(e,n){var a=n[Aa];a===void 0&&(a=n[Aa]=new Set);var o=e+"__bubble";a.has(o)||(__(n,e,2,!1),a.add(o))}function Zf(e,n,a){var o=0;n&&(o|=4),__(a,e,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Kf(e){if(!e[ec]){e[ec]=!0,ll.forEach(function(a){a!=="selectionchange"&&(FS.has(a)||Zf(a,!1,e),Zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,Zf("selectionchange",!1,n))}}function __(e,n,a,o){switch(q_(n)){case 2:var u=uM;break;case 8:u=fM;break;default:u=fh}a=u.bind(null,n,a,e),u=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Qf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var H=x.tag;if((H===3||H===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=Ca(R),x===null)return;if(H=x.tag,H===5||H===6||H===26||H===27){o=f=x;continue t}R=R.parentNode}}o=o.return}yp(function(){var nt=f,dt=du(a),vt=[];t:{var rt=Kp.get(e);if(rt!==void 0){var lt=hl,Wt=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":lt=wx;break;case"focusin":Wt="focus",lt=xu;break;case"focusout":Wt="blur",lt=xu;break;case"beforeblur":case"afterblur":lt=xu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=_x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Lx;break;case qp:case Yp:case jp:lt=Sx;break;case Zp:lt=Ox;break;case"scroll":case"scrollend":lt=mx;break;case"wheel":lt=Fx;break;case"copy":case"cut":case"paste":lt=yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Rp;break;case"toggle":case"beforetoggle":lt=Bx}var $t=(n&4)!==0,ke=!$t&&(e==="scroll"||e==="scrollend"),K=$t?rt!==null?rt+"Capture":null:rt;$t=[];for(var X=nt,et;X!==null;){var gt=X;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||K===null||(gt=to(X,K),gt!=null&&$t.push(Oo(X,gt,et))),ke)break;X=X.return}0<$t.length&&(rt=new lt(rt,Wt,null,a,dt),vt.push({event:rt,listeners:$t}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",rt&&a!==hu&&(Wt=a.relatedTarget||a.fromElement)&&(Ca(Wt)||Wt[Ki]))break t;if((lt||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,lt?(Wt=a.relatedTarget||a.toElement,lt=nt,Wt=Wt?Ca(Wt):null,Wt!==null&&(ke=c(Wt),$t=Wt.tag,Wt!==ke||$t!==5&&$t!==27&&$t!==6)&&(Wt=null)):(lt=null,Wt=nt),lt!==Wt)){if($t=Tp,gt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&($t=Rp,gt="onPointerLeave",K="onPointerEnter",X="pointer"),ke=lt==null?rt:gs(lt),et=Wt==null?rt:gs(Wt),rt=new $t(gt,X+"leave",lt,a,dt),rt.target=ke,rt.relatedTarget=et,gt=null,Ca(dt)===nt&&($t=new $t(K,X+"enter",Wt,a,dt),$t.target=et,$t.relatedTarget=ke,gt=$t),ke=gt,lt&&Wt)e:{for($t=IS,K=lt,X=Wt,et=0,gt=K;gt;gt=$t(gt))et++;gt=0;for(var Kt=X;Kt;Kt=$t(Kt))gt++;for(;0<et-gt;)K=$t(K),et--;for(;0<gt-et;)X=$t(X),gt--;for(;et--;){if(K===X||X!==null&&K===X.alternate){$t=K;break e}K=$t(K),X=$t(X)}$t=null}else $t=null;lt!==null&&v_(vt,rt,lt,$t,!1),Wt!==null&&ke!==null&&v_(vt,ke,Wt,$t,!0)}}t:{if(rt=nt?gs(nt):window,lt=rt.nodeName&&rt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&rt.type==="file")var Re=Pp;else if(Np(rt))if(Fp)Re=jx;else{Re=qx;var Yt=Wx}else lt=rt.nodeName,!lt||lt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Le(nt.elementType)&&(Re=Pp):Re=Yx;if(Re&&(Re=Re(e,nt))){Op(vt,Re,a,dt);break t}Yt&&Yt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&ge(rt,"number",rt.value)}switch(Yt=nt?gs(nt):window,e){case"focusin":(Np(Yt)||Yt.contentEditable==="true")&&(Qs=Yt,Tu=nt,lo=null);break;case"focusout":lo=Tu=Qs=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Xp(vt,a,dt);break;case"selectionchange":if(Kx)break;case"keydown":case"keyup":Xp(vt,a,dt)}var ue;if(Mu)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Ks?Up(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Cp&&a.locale!=="ko"&&(Ks||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ks&&(ue=Ep()):(La=dt,gu="value"in La?La.value:La.textContent,Ks=!0)),Yt=nc(nt,ye),0<Yt.length&&(ye=new Ap(ye,e,null,a,dt),vt.push({event:ye,listeners:Yt}),ue?ye.data=ue:(ue=Lp(a),ue!==null&&(ye.data=ue)))),(ue=Hx?Gx(e,a):Vx(e,a))&&(ye=nc(nt,"onBeforeInput"),0<ye.length&&(Yt=new Ap("onBeforeInput","beforeinput",null,a,dt),vt.push({event:Yt,listeners:ye}),Yt.data=ue)),NS(vt,e,nt,a,dt)}g_(vt,n)})}function Oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=to(e,a),u!=null&&o.unshift(Oo(e,u,f)),u=to(e,n),u!=null&&o.push(Oo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function IS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v_(e,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var R=a,H=R.alternate,nt=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||nt===null||(H=nt,u?(nt=to(a,f),nt!=null&&x.unshift(Oo(a,nt,H))):u||(nt=to(a,f),nt!=null&&x.push(Oo(a,nt,H)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var BS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function x_(e){return(typeof e=="string"?e:""+e).replace(BS,`
`).replace(zS,"")}function S_(e,n){return n=x_(n),x_(e)===n}function Ve(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ei(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ei(e,""+o);break;case"className":Xt(e,"class",o);break;case"tabIndex":Xt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,o);break;case"style":Ci(e,o,f);break;case"data":if(n!=="object"){Xt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_s(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_s(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=_s(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ft(e,"popover",o);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ft(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fi.get(a)||a,Ft(e,a,o))}}function Jf(e,n,a,o,u,f){switch(a){case"style":Ci(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ei(e,o):(typeof o=="number"||typeof o=="bigint")&&ei(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Rn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ft(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,x,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var R=f=x=u=null,H=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":x=dt;break;case"checked":H=dt;break;case"defaultChecked":nt=dt;break;case"value":f=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,dt,a,null)}}On(e,f,R,H,nt,x,u,!1);return;case"select":ve("invalid",e),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Ve(e,n,u,R,a,null)}n=f,a=x,e.multiple=!!o,n!=null?vn(e,!!o,n,!1):a!=null&&vn(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ve(e,n,x,R,a,null)}Ri(e,o,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,H,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<No.length;o++)ve(No[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,nt,o,a,null)}return;default:if(Le(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&Jf(e,n,dt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ve(e,n,R,o,a,null))}function HS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,R=null,H=null,nt=null,dt=null;for(lt in a){var vt=a[lt];if(a.hasOwnProperty(lt)&&vt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":H=vt;default:o.hasOwnProperty(lt)||Ve(e,n,lt,null,o,vt)}}for(var rt in o){var lt=o[rt];if(vt=a[rt],o.hasOwnProperty(rt)&&(lt!=null||vt!=null))switch(rt){case"type":f=lt;break;case"name":u=lt;break;case"checked":nt=lt;break;case"defaultChecked":dt=lt;break;case"value":x=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==vt&&Ve(e,n,rt,lt,o,vt)}}Gt(e,x,R,H,nt,dt,f,u);return;case"select":lt=x=R=rt=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":lt=H;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":rt=f;break;case"defaultValue":R=f;break;case"multiple":x=f;default:f!==H&&Ve(e,n,u,f,o,H)}n=R,a=x,o=lt,rt!=null?vn(e,!!a,rt,!1):!!o!=!!a&&(n!=null?vn(e,!!a,n,!0):vn(e,!!a,a?[]:"",!1));return;case"textarea":lt=rt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ve(e,n,R,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":rt=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(e,n,x,u,o,f)}ti(e,rt,lt);return;case"option":for(var Wt in a)rt=a[Wt],a.hasOwnProperty(Wt)&&rt!=null&&!o.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:Ve(e,n,Wt,null,o,rt));for(H in o)rt=o[H],lt=a[H],o.hasOwnProperty(H)&&rt!==lt&&(rt!=null||lt!=null)&&(H==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":Ve(e,n,H,rt,o,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)rt=a[$t],a.hasOwnProperty($t)&&rt!=null&&!o.hasOwnProperty($t)&&Ve(e,n,$t,null,o,rt);for(nt in o)if(rt=o[nt],lt=a[nt],o.hasOwnProperty(nt)&&rt!==lt&&(rt!=null||lt!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Ve(e,n,nt,rt,o,lt)}return;default:if(Le(n)){for(var ke in a)rt=a[ke],a.hasOwnProperty(ke)&&rt!==void 0&&!o.hasOwnProperty(ke)&&Jf(e,n,ke,void 0,o,rt);for(dt in o)rt=o[dt],lt=a[dt],!o.hasOwnProperty(dt)||rt===lt||rt===void 0&&lt===void 0||Jf(e,n,dt,rt,o,lt);return}}for(var K in a)rt=a[K],a.hasOwnProperty(K)&&rt!=null&&!o.hasOwnProperty(K)&&Ve(e,n,K,null,o,rt);for(vt in o)rt=o[vt],lt=a[vt],!o.hasOwnProperty(vt)||rt===lt||rt==null&&lt==null||Ve(e,n,vt,rt,o,lt)}function M_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,R=u.duration;if(f&&R&&M_(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var H=a[o],nt=H.startTime;if(nt>R)break;var dt=H.transferSize,vt=H.initiatorType;dt&&M_(vt)&&(H=H.responseEnd,x+=dt*(H<R?1:(R-nt)/(H-nt)))}if(--o,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $f=null,th=null;function ic(e){return e.nodeType===9?e:e.ownerDocument}function y_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function eh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nh=null;function VS(){var e=window.event;return e&&e.type==="popstate"?e===nh?!1:(nh=e,!0):(nh=null,!1)}var b_=typeof setTimeout=="function"?setTimeout:void 0,kS=typeof clearTimeout=="function"?clearTimeout:void 0,T_=typeof Promise=="function"?Promise:void 0,XS=typeof queueMicrotask=="function"?queueMicrotask:typeof T_<"u"?function(e){return T_.resolve(null).then(e).catch(WS)}:b_;function WS(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function A_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),br(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var x=f.nextSibling,R=f.nodeName;f[Ra]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Po(e.ownerDocument.body);a=u}while(a);br(n)}function R_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ih(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ih(a),$r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function qS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ra])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function YS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ei(e.nextSibling),e===null))return null;return e}function C_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ei(e.nextSibling),e===null))return null;return e}function ah(e){return e.data==="$?"||e.data==="$~"}function sh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function jS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var rh=null;function w_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function D_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function U_(e,n,a){switch(n=ic(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);$r(e)}var bi=new Map,L_=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var da=z.d;z.d={f:ZS,r:KS,D:QS,C:JS,L:$S,m:tM,X:nM,S:eM,M:iM};function ZS(){var e=da.f(),n=Zl();return e||n}function KS(e){var n=wa(e);n!==null&&n.tag===5&&n.type==="form"?Zm(n):da.r(e)}var Mr=typeof document>"u"?null:document;function N_(e,n,a){var o=Mr;if(o&&typeof n=="string"&&n){var u=Pe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),L_.has(u)||(L_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),hn(n),o.head.appendChild(n)))}}function QS(e){da.D(e),N_("dns-prefetch",e,null)}function JS(e,n){da.C(e,n),N_("preconnect",e,n)}function $S(e,n,a){da.L(e,n,a);var o=Mr;if(o&&e&&n){var u='link[rel="preload"][as="'+Pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pe(a.imageSizes)+'"]')):u+='[href="'+Pe(e)+'"]';var f=u;switch(n){case"style":f=yr(e);break;case"script":f=Er(e)}bi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),bi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(f))||n==="script"&&o.querySelector(Io(f))||(n=o.createElement("link"),Un(n,"link",e),hn(n),o.head.appendChild(n)))}}function tM(e,n){da.m(e,n);var a=Mr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pe(o)+'"][href="'+Pe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(e)}if(!bi.has(f)&&(e=v({rel:"modulepreload",href:e},n),bi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}o=a.createElement("link"),Un(o,"link",e),hn(o),a.head.appendChild(o)}}}function eM(e,n,a){da.S(e,n,a);var o=Mr;if(o&&e){var u=Da(o).hoistableStyles,f=yr(e);n=n||"default";var x=u.get(f);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Fo(f)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=bi.get(f))&&oh(e,a);var H=x=o.createElement("link");hn(H),Un(H,"link",e),H._p=new Promise(function(nt,dt){H.onload=nt,H.onerror=dt}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,sc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(f,x)}}}function nM(e,n){da.X(e,n);var a=Mr;if(a&&e){var o=Da(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=v({src:e,async:!0},n),(n=bi.get(u))&&lh(e,n),f=a.createElement("script"),hn(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function iM(e,n){da.M(e,n);var a=Mr;if(a&&e){var o=Da(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=bi.get(u))&&lh(e,n),f=a.createElement("script"),hn(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function O_(e,n,a,o){var u=(u=ot.current)?ac(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=Da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yr(a.href);var f=Da(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(Fo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),bi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(e,a),f||aM(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=Da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function yr(e){return'href="'+Pe(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function P_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function aM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),hn(n),e.head.appendChild(n))}function Er(e){return'[src="'+Pe(e)+'"]'}function Io(e){return"script[async]"+e}function F_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Pe(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),hn(o),Un(o,"style",u),sc(o,a.precedence,e),n.instance=o;case"stylesheet":u=yr(a.href);var f=e.querySelector(Fo(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;o=P_(a),(u=bi.get(u))&&oh(o,u),f=(e.ownerDocument||e).createElement("link"),hn(f);var x=f;return x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),Un(f,"link",o),n.state.loading|=4,sc(f,a.precedence,e),n.instance=f;case"script":return f=Er(a.src),(u=e.querySelector(Io(f)))?(n.instance=u,hn(u),u):(o=a,(u=bi.get(f))&&(o=v({},a),lh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),hn(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,sc(o,a.precedence,e));return n.instance}function sc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function I_(e,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ra]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var R=o.get(x);R?R.push(f):o.set(x,[f])}}return o}function B_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function sM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function z_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function rM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(o.href),f=n.querySelector(Fo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=oc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,o=P_(o),(u=bi.get(u))&&oh(o,u),f=f.createElement("link"),hn(f);var x=f;x._p=new Promise(function(R,H){x.onload=R,x.onerror=H}),Un(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=oc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ch=0;function oM(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ch===0&&(ch=62500*GS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ch?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function oc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lc=new Map,n.forEach(lM,e),lc=null,oc.call(e))}function lM(e,n){if(!(n.state.loading&4)){var a=lc.get(e);if(a)var o=a.get(null);else{a=new Map,lc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=oc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:N,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function cM(e,n,a,o,u,f,x,R,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.hiddenUpdates=qt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function H_(e,n,a,o,u,f,x,R,H,nt,dt,vt){return e=new cM(e,n,a,x,H,nt,dt,vt,R),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),e.current=f,f.stateNode=e,n=Gu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Wu(f),e}function G_(e){return e?(e=tr,e):tr}function V_(e,n,a,o,u,f){u=G_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(e,o,n),a!==null&&(jn(a,e,n),go(a,e,n))}function k_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function uh(e,n){k_(e,n),(e=e.alternate)&&k_(e,n)}function X_(e){if(e.tag===13||e.tag===31){var n=Ms(e,67108864);n!==null&&jn(n,e,67108864),uh(e,67108864)}}function W_(e){if(e.tag===13||e.tag===31){var n=li();n=ms(n);var a=Ms(e,n);a!==null&&jn(a,e,n),uh(e,n)}}var uc=!0;function uM(e,n,a,o){var u=L.T;L.T=null;var f=z.p;try{z.p=2,fh(e,n,a,o)}finally{z.p=f,L.T=u}}function fM(e,n,a,o){var u=L.T;L.T=null;var f=z.p;try{z.p=8,fh(e,n,a,o)}finally{z.p=f,L.T=u}}function fh(e,n,a,o){if(uc){var u=hh(o);if(u===null)Qf(e,n,o,fc,a),Y_(e,o);else if(dM(u,e,n,a,o))o.stopPropagation();else if(Y_(e,o),n&4&&-1<hM.indexOf(e)){for(;u!==null;){var f=wa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Tt(f.pendingLanes);if(x!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var H=1<<31-Pt(x);R.entanglements[1]|=H,x&=~H}Hi(f),(Ue&6)===0&&(Yl=Rt()+500,Lo(0))}}break;case 31:case 13:R=Ms(f,2),R!==null&&jn(R,f,2),Zl(),uh(f,2)}if(f=hh(o),f===null&&Qf(e,n,o,fc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Qf(e,n,o,null,a)}}function hh(e){return e=du(e),dh(e)}var fc=null;function dh(e){if(fc=null,e=Ca(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function q_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case D:return 2;case E:return 8;case J:case _t:return 32;case Et:return 268435456;default:return 32}default:return 32}}var ph=!1,Ka=null,Qa=null,Ja=null,zo=new Map,Ho=new Map,$a=[],hM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y_(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=wa(n),n!==null&&X_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function dM(e,n,a,o,u){switch(n){case"focusin":return Ka=Go(Ka,e,n,a,o,u),!0;case"dragenter":return Qa=Go(Qa,e,n,a,o,u),!0;case"mouseover":return Ja=Go(Ja,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Go(zo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ho.set(f,Go(Ho.get(f)||null,e,n,a,o,u)),!0}return!1}function j_(e){var n=Ca(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Qr(e.priority,function(){W_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Qr(e.priority,function(){W_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=hh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);hu=o,a.target.dispatchEvent(o),hu=null}else return n=wa(a),n!==null&&X_(n),e.blockedOn=a,!1;n.shift()}return!0}function Z_(e,n,a){hc(e)&&a.delete(n)}function pM(){ph=!1,Ka!==null&&hc(Ka)&&(Ka=null),Qa!==null&&hc(Qa)&&(Qa=null),Ja!==null&&hc(Ja)&&(Ja=null),zo.forEach(Z_),Ho.forEach(Z_)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,ph||(ph=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,pM)))}var pc=null;function K_(e){pc!==e&&(pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(dh(o||a)===null)continue;break}var f=wa(a);f!==null&&(e.splice(n,3),n-=3,hf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function br(e){function n(H){return dc(H,e)}Ka!==null&&dc(Ka,e),Qa!==null&&dc(Qa,e),Ja!==null&&dc(Ja,e),zo.forEach(n),Ho.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)j_(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[Rn]||null;if(typeof f=="function")x||K_(a);else if(x){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Rn]||null)R=x.formAction;else if(dh(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),K_(a)}}}function Q_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function mh(e){this._internalRoot=e}mc.prototype.render=mh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=li();V_(a,o,e,n,null,null)},mc.prototype.unmount=mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;V_(e.current,2,null,e,null,null),Zl(),n[Ki]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&j_(e)}};var J_=t.version;if(J_!=="19.2.6")throw Error(s(527,J_,"19.2.6"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var mM={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ut=gc.inject(mM),ht=gc}catch{}}return ko.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=sg,f=rg,x=og;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=H_(e,1,!1,null,null,a,o,null,u,f,x,Q_),e[Ki]=n.current,Kf(e),new mh(n)},ko.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=sg,x=rg,R=og,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=H_(e,1,!0,n,a??null,o,u,H,f,x,R,Q_),n.context=G_(null),a=n.current,o=li(),o=ms(o),u=Ba(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,ee(n,a),Hi(n),e[Ki]=n.current,Kf(e),new mc(n)},ko.version="19.2.6",ko}var l0;function TM(){if(l0)return vh.exports;l0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vh.exports=bM(),vh.exports}var AM=TM();const RM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();var CM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const wM=we.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>we.createElement("svg",{ref:m,...CM,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Sv("lucide",l),...p},[...h.map(([d,_])=>we.createElement(d,_)),...Array.isArray(c)?c:[c]]));const Ws=(r,t)=>{const i=we.forwardRef(({className:s,...l},c)=>we.createElement(wM,{ref:c,iconNode:t,className:Sv(`lucide-${RM(r)}`,s),...l}));return i.displayName=`${r}`,i};const DM=Ws("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const UM=Ws("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);const LM=Ws("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);const NM=Ws("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const OM=Ws("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);const PM=Ws("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);const FM=Ws("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const $d="184",Hr={ROTATE:0,DOLLY:1,PAN:2},zr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},IM=0,c0=1,BM=2,qc=1,tp=2,Jo=3,fs=0,Qn=1,Sa=2,ya=0,Gr=1,u0=2,f0=3,h0=4,zM=5,Bs=100,HM=101,GM=102,VM=103,kM=104,XM=200,WM=201,qM=202,YM=203,sd=204,rd=205,jM=206,ZM=207,KM=208,QM=209,JM=210,$M=211,ty=212,ey=213,ny=214,od=0,ld=1,cd=2,kr=3,ud=4,fd=5,hd=6,dd=7,Mv=0,iy=1,ay=2,qi=0,yv=1,Ev=2,bv=3,Tv=4,Av=5,Rv=6,Cv=7,wv=300,ks=301,Xr=302,yh=303,Eh=304,ou=306,pd=1e3,Ma=1001,md=1002,Ln=1003,sy=1004,_c=1005,Bn=1006,bh=1007,Hs=1008,hi=1009,Dv=1010,Uv=1011,el=1012,ep=1013,ji=1014,Xi=1015,ba=1016,np=1017,ip=1018,nl=1020,Lv=35902,Nv=35899,Ov=1021,Pv=1022,Pi=1023,Ta=1026,Gs=1027,Fv=1028,ap=1029,Xs=1030,sp=1031,rp=1033,Yc=33776,jc=33777,Zc=33778,Kc=33779,gd=35840,_d=35841,vd=35842,xd=35843,Sd=36196,Md=37492,yd=37496,Ed=37488,bd=37489,Jc=37490,Td=37491,Ad=37808,Rd=37809,Cd=37810,wd=37811,Dd=37812,Ud=37813,Ld=37814,Nd=37815,Od=37816,Pd=37817,Fd=37818,Id=37819,Bd=37820,zd=37821,Hd=36492,Gd=36494,Vd=36495,kd=36283,Xd=36284,$c=36285,Wd=36286,ry=3200,qd=0,oy=1,ls="",Gn="srgb",tu="srgb-linear",eu="linear",ze="srgb",Tr=7680,d0=519,ly=512,cy=513,uy=514,op=515,fy=516,hy=517,lp=518,dy=519,p0=35044,m0="300 es",Wi=2e3,il=2001;function py(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function nu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function my(){const r=nu("canvas");return r.style.display="block",r}const g0={};function _0(...r){const t="THREE."+r.shift();console.log(t,...r)}function Iv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Jt(...r){r=Iv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Te(...r){r=Iv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Yd(...r){const t=r.join(" ");t in g0||(g0[t]=!0,Jt(...r))}function gy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const _y={[od]:ld,[cd]:hd,[ud]:dd,[kr]:fd,[ld]:od,[hd]:cd,[dd]:ud,[fd]:kr};class ps{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tl=Math.PI/180,jd=180/Math.PI;function al(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]).toLowerCase()}function xe(r,t,i){return Math.max(t,Math.min(i,r))}function vy(r,t){return(r%t+t)%t}function Th(r,t,i){return(1-i)*r+i*t}function Xo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xy={DEG2RAD:tl},gp=class gp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gp.prototype.isVector2=!0;let le=gp;class hs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],_=s[l+2],v=s[l+3],g=c[h+0],y=c[h+1],b=c[h+2],C=c[h+3];if(v!==C||m!==g||d!==y||_!==b){let M=m*g+d*y+_*b+v*C;M<0&&(g=-g,y=-y,b=-b,C=-C,M=-M);let S=1-p;if(M<.9995){const w=Math.acos(M),N=Math.sin(w);S=Math.sin(S*w)/N,p=Math.sin(p*w)/N,m=m*S+g*p,d=d*S+y*p,_=_*S+b*p,v=v*S+C*p}else{m=m*S+g*p,d=d*S+y*p,_=_*S+b*p,v=v*S+C*p;const w=1/Math.sqrt(m*m+d*d+_*_+v*v);m*=w,d*=w,_*=w,v*=w}}t[i]=m,t[i+1]=d,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],_=s[l+3],v=c[h],g=c[h+1],y=c[h+2],b=c[h+3];return t[i]=p*b+_*v+m*y-d*g,t[i+1]=m*b+_*g+d*v-p*y,t[i+2]=d*b+_*y+p*g-m*v,t[i+3]=_*b-p*v-m*g-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),_=p(l/2),v=p(c/2),g=m(s/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=g*_*v+d*y*b,this._y=d*y*v-g*_*b,this._z=d*_*b+g*y*v,this._w=d*_*v-g*y*b;break;case"YXZ":this._x=g*_*v+d*y*b,this._y=d*y*v-g*_*b,this._z=d*_*b-g*y*v,this._w=d*_*v+g*y*b;break;case"ZXY":this._x=g*_*v-d*y*b,this._y=d*y*v+g*_*b,this._z=d*_*b+g*y*v,this._w=d*_*v-g*y*b;break;case"ZYX":this._x=g*_*v-d*y*b,this._y=d*y*v+g*_*b,this._z=d*_*b-g*y*v,this._w=d*_*v+g*y*b;break;case"YZX":this._x=g*_*v+d*y*b,this._y=d*y*v+g*_*b,this._z=d*_*b-g*y*v,this._w=d*_*v-g*y*b;break;case"XZY":this._x=g*_*v-d*y*b,this._y=d*y*v-g*_*b,this._z=d*_*b+g*y*v,this._w=d*_*v+g*y*b;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],_=i[6],v=i[10],g=s+p+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-d)*y,this._z=(h-l)*y}else if(s>p&&s>v){const y=2*Math.sqrt(1+s-p-v);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+d)/y}else if(p>v){const y=2*Math.sqrt(1+p-s-v);this._w=(c-d)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+v-s-p);this._w=(h-l)/y,this._x=(c+d)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,_=i._w;return this._x=s*_+h*p+l*d-c*m,this._y=l*_+h*m+c*p-s*d,this._z=c*_+h*d+s*m-l*p,this._w=h*_-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,i=Math.sin(i*d)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _p=class _p{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(v0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(v0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),_=2*(p*i-c*l),v=2*(c*s-h*i);return this.x=i+m*d+h*v-p*_,this.y=s+m*_+p*d-c*v,this.z=l+m*v+c*_-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_p.prototype.isVector3=!0;let Q=_p;const Ah=new Q,v0=new hs,vp=class vp{constructor(t,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d)}set(t,i,s,l,c,h,p,m,d){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],_=s[4],v=s[7],g=s[2],y=s[5],b=s[8],C=l[0],M=l[3],S=l[6],w=l[1],N=l[4],P=l[7],G=l[2],U=l[5],F=l[8];return c[0]=h*C+p*w+m*G,c[3]=h*M+p*N+m*U,c[6]=h*S+p*P+m*F,c[1]=d*C+_*w+v*G,c[4]=d*M+_*N+v*U,c[7]=d*S+_*P+v*F,c[2]=g*C+y*w+b*G,c[5]=g*M+y*N+b*U,c[8]=g*S+y*P+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8];return i*h*_-i*p*d-s*c*_+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],v=_*h-p*d,g=p*m-_*c,y=d*c-h*m,b=i*v+s*g+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=v*C,t[1]=(l*d-_*s)*C,t[2]=(p*s-l*h)*C,t[3]=g*C,t[4]=(_*i-l*m)*C,t[5]=(l*c-p*i)*C,t[6]=y*C,t[7]=(s*m-d*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Rh.makeScale(t,i)),this}rotate(t){return this.premultiply(Rh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vp.prototype.isMatrix3=!0;let se=vp;const Rh=new se,x0=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S0=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sy(){const r={enabled:!0,workingColorSpace:tu,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ze&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Vr(l.r),l.g=Vr(l.g),l.b=Vr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ls?eu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Yd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Yd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[tu]:{primaries:t,whitePoint:s,transfer:eu,toXYZ:x0,fromXYZ:S0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:x0,fromXYZ:S0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),r}const be=Sy();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class My{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ar===void 0&&(Ar=nu("canvas")),Ar.width=t.width,Ar.height=t.height;const l=Ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=nu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ea(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yy=0;class cp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=al(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Ch(l[h].image)):c.push(Ch(l[h]))}else c=Ch(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?My.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let Ey=0;const wh=new Q;class Vn extends ps{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ma,l=Ma,c=Bn,h=Hs,p=Pi,m=hi,d=Vn.DEFAULT_ANISOTROPY,_=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=al(),this.name="",this.source=new cp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){Jt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Jt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pd:t.x=t.x-Math.floor(t.x);break;case Ma:t.x=t.x<0?0:1;break;case md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pd:t.y=t.y-Math.floor(t.y);break;case Ma:t.y=t.y<0?0:1;break;case md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=wv;Vn.DEFAULT_ANISOTROPY=1;const xp=class xp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],_=m[4],v=m[8],g=m[1],y=m[5],b=m[9],C=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+C)<.1&&Math.abs(b+M)<.1&&Math.abs(d+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(d+1)/2,P=(y+1)/2,G=(S+1)/2,U=(_+g)/4,F=(v+C)/4,T=(b+M)/4;return N>P&&N>G?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=U/s,c=F/s):P>G?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=U/l,c=T/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=F/c,l=T/c),this.set(s,l,c,i),this}let w=Math.sqrt((M-b)*(M-b)+(v-C)*(v-C)+(g-_)*(g-_));return Math.abs(w)<.001&&(w=1),this.x=(M-b)/w,this.y=(v-C)/w,this.z=(g-_)/w,this.w=Math.acos((d+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xp.prototype.isVector4=!0;let rn=xp;class by extends ps{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Vn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new cp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends by{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Bv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ty extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ru=class ru{constructor(t,i,s,l,c,h,p,m,d,_,v,g,y,b,C,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d,_,v,g,y,b,C,M)}set(t,i,s,l,c,h,p,m,d,_,v,g,y,b,C,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=p,S[13]=m,S[2]=d,S[6]=_,S[10]=v,S[14]=g,S[3]=y,S[7]=b,S[11]=C,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ru().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),h=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=h*_,y=h*v,b=p*_,C=p*v;i[0]=m*_,i[4]=-m*v,i[8]=d,i[1]=y+b*d,i[5]=g-C*d,i[9]=-p*m,i[2]=C-g*d,i[6]=b+y*d,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,y=m*v,b=d*_,C=d*v;i[0]=g+C*p,i[4]=b*p-y,i[8]=h*d,i[1]=h*v,i[5]=h*_,i[9]=-p,i[2]=y*p-b,i[6]=C+g*p,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,y=m*v,b=d*_,C=d*v;i[0]=g-C*p,i[4]=-h*v,i[8]=b+y*p,i[1]=y+b*p,i[5]=h*_,i[9]=C-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,y=h*v,b=p*_,C=p*v;i[0]=m*_,i[4]=b*d-y,i[8]=g*d+C,i[1]=m*v,i[5]=C*d+g,i[9]=y*d-b,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*d,b=p*m,C=p*d;i[0]=m*_,i[4]=C-g*v,i[8]=b*v+y,i[1]=v,i[5]=h*_,i[9]=-p*_,i[2]=-d*_,i[6]=y*v+b,i[10]=g-C*v}else if(t.order==="XZY"){const g=h*m,y=h*d,b=p*m,C=p*d;i[0]=m*_,i[4]=-v,i[8]=d*_,i[1]=g*v+C,i[5]=h*_,i[9]=y*v-b,i[2]=b*v-y,i[6]=p*_,i[10]=C*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ay,t,Ry)}lookAt(t,i,s){const l=this.elements;return ci.subVectors(t,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),es.crossVectors(s,ci),es.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),es.crossVectors(s,ci)),es.normalize(),vc.crossVectors(ci,es),l[0]=es.x,l[4]=vc.x,l[8]=ci.x,l[1]=es.y,l[5]=vc.y,l[9]=ci.y,l[2]=es.z,l[6]=vc.z,l[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],_=s[1],v=s[5],g=s[9],y=s[13],b=s[2],C=s[6],M=s[10],S=s[14],w=s[3],N=s[7],P=s[11],G=s[15],U=l[0],F=l[4],T=l[8],O=l[12],Y=l[1],B=l[5],j=l[9],V=l[13],ct=l[2],W=l[6],L=l[10],z=l[14],tt=l[3],mt=l[7],St=l[11],I=l[15];return c[0]=h*U+p*Y+m*ct+d*tt,c[4]=h*F+p*B+m*W+d*mt,c[8]=h*T+p*j+m*L+d*St,c[12]=h*O+p*V+m*z+d*I,c[1]=_*U+v*Y+g*ct+y*tt,c[5]=_*F+v*B+g*W+y*mt,c[9]=_*T+v*j+g*L+y*St,c[13]=_*O+v*V+g*z+y*I,c[2]=b*U+C*Y+M*ct+S*tt,c[6]=b*F+C*B+M*W+S*mt,c[10]=b*T+C*j+M*L+S*St,c[14]=b*O+C*V+M*z+S*I,c[3]=w*U+N*Y+P*ct+G*tt,c[7]=w*F+N*B+P*W+G*mt,c[11]=w*T+N*j+P*L+G*St,c[15]=w*O+N*V+P*z+G*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],_=t[2],v=t[6],g=t[10],y=t[14],b=t[3],C=t[7],M=t[11],S=t[15],w=m*y-d*g,N=p*y-d*v,P=p*g-m*v,G=h*y-d*_,U=h*g-m*_,F=h*v-p*_;return i*(C*w-M*N+S*P)-s*(b*w-M*G+S*U)+l*(b*N-C*G+S*F)-c*(b*P-C*U+M*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],v=t[9],g=t[10],y=t[11],b=t[12],C=t[13],M=t[14],S=t[15],w=i*p-s*h,N=i*m-l*h,P=i*d-c*h,G=s*m-l*p,U=s*d-c*p,F=l*d-c*m,T=_*C-v*b,O=_*M-g*b,Y=_*S-y*b,B=v*M-g*C,j=v*S-y*C,V=g*S-y*M,ct=w*V-N*j+P*B+G*Y-U*O+F*T;if(ct===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ct;return t[0]=(p*V-m*j+d*B)*W,t[1]=(l*j-s*V-c*B)*W,t[2]=(C*F-M*U+S*G)*W,t[3]=(g*U-v*F-y*G)*W,t[4]=(m*Y-h*V-d*O)*W,t[5]=(i*V-l*Y+c*O)*W,t[6]=(M*P-b*F-S*N)*W,t[7]=(_*F-g*P+y*N)*W,t[8]=(h*j-p*Y+d*T)*W,t[9]=(s*Y-i*j-c*T)*W,t[10]=(b*U-C*P+S*w)*W,t[11]=(v*P-_*U-y*w)*W,t[12]=(p*O-h*B-m*T)*W,t[13]=(i*B-s*O+l*T)*W,t[14]=(C*N-b*G-M*w)*W,t[15]=(_*G-v*N+g*w)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,_=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,_*p+s,_*m-l*h,0,d*m-l*p,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,_=h+h,v=p+p,g=c*d,y=c*_,b=c*v,C=h*_,M=h*v,S=p*v,w=m*d,N=m*_,P=m*v,G=s.x,U=s.y,F=s.z;return l[0]=(1-(C+S))*G,l[1]=(y+P)*G,l[2]=(b-N)*G,l[3]=0,l[4]=(y-P)*U,l[5]=(1-(g+S))*U,l[6]=(M+w)*U,l[7]=0,l[8]=(b+N)*F,l[9]=(M-w)*F,l[10]=(1-(g+C))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Rr.set(l[0],l[1],l[2]).length();const p=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Li.copy(this);const d=1/h,_=1/p,v=1/m;return Li.elements[0]*=d,Li.elements[1]*=d,Li.elements[2]*=d,Li.elements[4]*=_,Li.elements[5]*=_,Li.elements[6]*=_,Li.elements[8]*=v,Li.elements[9]*=v,Li.elements[10]*=v,i.setFromRotationMatrix(Li),s.x=h,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,h,p=Wi,m=!1){const d=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let b,C;if(m)b=c/(h-c),C=h*c/(h-c);else if(p===Wi)b=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(p===il)b=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,h,p=Wi,m=!1){const d=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,C;if(m)b=1/(h-c),C=h/(h-c);else if(p===Wi)b=-2/(h-c),C=-(h+c)/(h-c);else if(p===il)b=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};ru.prototype.isMatrix4=!0;let on=ru;const Rr=new Q,Li=new on,Ay=new Q(0,0,0),Ry=new Q(1,1,1),es=new Q,vc=new Q,ci=new Q,M0=new on,y0=new hs;class ds{constructor(t=0,i=0,s=0,l=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],_=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return M0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(M0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return y0.setFromEuler(this),this.setFromQuaternion(y0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ds.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cy=0;const E0=new Q,Cr=new hs,pa=new on,xc=new Q,Wo=new Q,wy=new Q,Dy=new hs,b0=new Q(1,0,0),T0=new Q(0,1,0),A0=new Q(0,0,1),R0={type:"added"},Uy={type:"removed"},wr={type:"childadded",child:null},Dh={type:"childremoved",child:null};class Tn extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new Q,i=new ds,s=new hs,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new se}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(b0,t)}rotateY(t){return this.rotateOnAxis(T0,t)}rotateZ(t){return this.rotateOnAxis(A0,t)}translateOnAxis(t,i){return E0.copy(t).applyQuaternion(this.quaternion),this.position.add(E0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(b0,t)}translateY(t){return this.translateOnAxis(T0,t)}translateZ(t){return this.translateOnAxis(A0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?xc.copy(t):xc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Wo,xc,this.up):pa.lookAt(xc,Wo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(pa),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(R0),wr.child=t,this.dispatchEvent(wr),wr.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Uy),Dh.child=t,this.dispatchEvent(Dh),Dh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(R0),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,wy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,Dy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const v=m[d];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),_=h(t.images),v=h(t.shapes),g=h(t.skeletons),y=h(t.animations),b=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new Q(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cs extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ly={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,s),S=this._getHandJoint(d,C);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),y=.02,b=.005;d.inputState.pinching&&g>y+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=y-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new cs;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Lh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class pe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=be.workingColorSpace){if(t=vy(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Lh(h,c,t+1/3),this.g=Lh(h,c,t),this.b=Lh(h,c,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=Gn){function s(c){c!==void 0&&parseFloat(c)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Jt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Gn){const s=Hv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=Vr(t.r),this.g=Vr(t.g),this.b=Vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return be.workingToColorSpace(In.copy(this),t),Math.round(xe(In.r*255,0,255))*65536+Math.round(xe(In.g*255,0,255))*256+Math.round(xe(In.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const _=(p+h)/2;if(p===h)m=0,d=0;else{const v=h-p;switch(d=_<=.5?v/(h+p):v/(2-h-p),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=d,t.l=_,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(In.copy(this),i),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Gn){be.workingToColorSpace(In.copy(this),t);const i=In.r,s=In.g,l=In.b;return t!==Gn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Sc);const s=Th(ns.h,Sc.h,i),l=Th(ns.s,Sc.s,i),c=Th(ns.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new pe;pe.NAMES=Hv;class lu{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new pe(t),this.near=i,this.far=s}clone(){return new lu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gv extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ds,this.environmentIntensity=1,this.environmentRotation=new ds,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new Q,ma=new Q,Nh=new Q,ga=new Q,Dr=new Q,Ur=new Q,C0=new Q,Oh=new Q,Ph=new Q,Fh=new Q,Ih=new rn,Bh=new rn,zh=new rn;class Ai{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ni.subVectors(l,i),ma.subVectors(s,i),Nh.subVectors(t,i);const h=Ni.dot(Ni),p=Ni.dot(ma),m=Ni.dot(Nh),d=ma.dot(ma),_=ma.dot(Nh),v=h*d-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(d*m-p*_)*g,b=(h*_-p*m)*g;return c.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(t,i,s,l,c,h,p,m){return this.getBarycoord(t,i,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(h,ga.y),m.addScaledVector(p,ga.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Ih.setScalar(0),Bh.setScalar(0),zh.setScalar(0),Ih.fromBufferAttribute(t,i),Bh.fromBufferAttribute(t,s),zh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Ih,c.x),h.addScaledVector(Bh,c.y),h.addScaledVector(zh,c.z),h}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),ma.subVectors(t,i),Ni.cross(ma).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ni.cross(ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,p;Dr.subVectors(l,s),Ur.subVectors(c,s),Oh.subVectors(t,s);const m=Dr.dot(Oh),d=Ur.dot(Oh);if(m<=0&&d<=0)return i.copy(s);Ph.subVectors(t,l);const _=Dr.dot(Ph),v=Ur.dot(Ph);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*d;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Dr,h);Fh.subVectors(t,c);const y=Dr.dot(Fh),b=Ur.dot(Fh);if(b>=0&&y<=b)return i.copy(c);const C=y*d-m*b;if(C<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(Ur,p);const M=_*b-y*v;if(M<=0&&v-_>=0&&y-b>=0)return C0.subVectors(c,l),p=(v-_)/(v-_+(y-b)),i.copy(l).addScaledVector(C0,p);const S=1/(M+C+g);return h=C*S,p=g*S,i.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class sl{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Oi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Oi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Oi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,Oi):Oi.fromBufferAttribute(c,h),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mc.copy(s.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),yc.subVectors(this.max,qo),Lr.subVectors(t.a,qo),Nr.subVectors(t.b,qo),Or.subVectors(t.c,qo),is.subVectors(Nr,Lr),as.subVectors(Or,Nr),Os.subVectors(Lr,Or);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Os.z,Os.y,is.z,0,-is.x,as.z,0,-as.x,Os.z,0,-Os.x,-is.y,is.x,0,-as.y,as.x,0,-Os.y,Os.x,0];return!Hh(i,Lr,Nr,Or,yc)||(i=[1,0,0,0,1,0,0,0,1],!Hh(i,Lr,Nr,Or,yc))?!1:(Ec.crossVectors(is,as),i=[Ec.x,Ec.y,Ec.z],Hh(i,Lr,Nr,Or,yc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_a),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _a=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Oi=new Q,Mc=new sl,Lr=new Q,Nr=new Q,Or=new Q,is=new Q,as=new Q,Os=new Q,qo=new Q,yc=new Q,Ec=new Q,Ps=new Q;function Hh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Ps.fromArray(r,c);const p=l.x*Math.abs(Ps.x)+l.y*Math.abs(Ps.y)+l.z*Math.abs(Ps.z),m=t.dot(Ps),d=i.dot(Ps),_=s.dot(Ps);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const _n=new Q,bc=new le;let Ny=0;class di extends ps{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ny++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=p0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Xo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Xo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Xo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Xo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Xo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==p0&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Vv extends di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class kv extends di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Jn extends di{constructor(t,i,s){super(new Float32Array(t),i,s)}}const Oy=new sl,Yo=new Q,Gh=new Q;class cu{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Oy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Gh)),this.expandByPoint(Yo.copy(t.center).sub(Gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Py=0;const Ti=new on,Vh=new Tn,Pr=new Q,ui=new sl,jo=new sl,bn=new Q;class pi extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(py(t)?kv:Vv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new se().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,i,s){return Ti.makeTranslation(t,i,s),this.applyMatrix4(Ti),this}scale(t,i,s){return Ti.makeScale(t,i,s),this.applyMatrix4(Ti),this}lookAt(t){return Vh.lookAt(t),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Jn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];jo.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(ui.min,jo.min),ui.expandByPoint(bn),bn.addVectors(ui.max,jo.max),ui.expandByPoint(bn)):(ui.expandByPoint(jo.min),ui.expandByPoint(jo.max))}ui.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)bn.fromBufferAttribute(p,d),m&&(Pr.fromBufferAttribute(t,d),bn.add(Pr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new Q,m[T]=new Q;const d=new Q,_=new Q,v=new Q,g=new le,y=new le,b=new le,C=new Q,M=new Q;function S(T,O,Y){d.fromBufferAttribute(s,T),_.fromBufferAttribute(s,O),v.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,T),y.fromBufferAttribute(c,O),b.fromBufferAttribute(c,Y),_.sub(d),v.sub(d),y.sub(g),b.sub(g);const B=1/(y.x*b.y-b.x*y.y);isFinite(B)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(v,-y.y).multiplyScalar(B),M.copy(v).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(B),p[T].add(C),p[O].add(C),p[Y].add(C),m[T].add(M),m[O].add(M),m[Y].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let T=0,O=w.length;T<O;++T){const Y=w[T],B=Y.start,j=Y.count;for(let V=B,ct=B+j;V<ct;V+=3)S(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const N=new Q,P=new Q,G=new Q,U=new Q;function F(T){G.fromBufferAttribute(l,T),U.copy(G);const O=p[T];N.copy(O),N.sub(G.multiplyScalar(G.dot(O))).normalize(),P.crossVectors(U,O);const B=P.dot(m[T])<0?-1:1;h.setXYZW(T,N.x,N.y,N.z,B)}for(let T=0,O=w.length;T<O;++T){const Y=w[T],B=Y.start,j=Y.count;for(let V=B,ct=B+j;V<ct;V+=3)F(t.getX(V+0)),F(t.getX(V+1)),F(t.getX(V+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new Q,c=new Q,h=new Q,p=new Q,m=new Q,d=new Q,_=new Q,v=new Q;if(t)for(let g=0,y=t.count;g<y;g+=3){const b=t.getX(g+0),C=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),p.add(_),m.add(_),d.add(_),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(p,m){const d=p.array,_=p.itemSize,v=p.normalized,g=new d.constructor(m.length*_);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){p.isInterleavedBufferAttribute?y=m[C]*p.data.stride+p.offset:y=m[C]*_;for(let S=0;S<_;S++)g[b++]=d[y++]}return new di(g,_,v)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let _=0,v=d.length;_<v;_++){const g=d[_],y=t(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let v=0,g=d.length;v<g;v++){const y=d[v];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(i))}const c=t.morphAttributes;for(const d in c){const _=[],v=c[d];for(let g=0,y=v.length;g<y;g++)_.push(v[g].clone(i));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,_=h.length;d<_;d++){const v=h[d];this.addGroup(v.start,v.count,v.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Fy=0;class qs extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Gr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=rd,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){Jt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Jt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==sd&&(s.blendSrc=this.blendSrc),this.blendDst!==rd&&(s.blendDst=this.blendDst),this.blendEquation!==Bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const va=new Q,kh=new Q,Tc=new Q,ss=new Q,Xh=new Q,Ac=new Q,Wh=new Q;class up{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,va)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=va.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){kh.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(kh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tc),p=ss.dot(this.direction),m=-ss.dot(Tc),d=ss.lengthSq(),_=Math.abs(1-h*h);let v,g,y,b;if(_>0)if(v=h*m-p,g=h*p-m,b=c*_,v>=0)if(g>=-b)if(g<=b){const C=1/_;v*=C,g*=C,y=v*(v+h*g+2*p)+g*(h*v+g+2*m)+d}else g=c,v=Math.max(0,-(h*g+p)),y=-v*v+g*(g+2*m)+d;else g=-c,v=Math.max(0,-(h*g+p)),y=-v*v+g*(g+2*m)+d;else g<=-b?(v=Math.max(0,-(-h*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+d):g<=b?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+d):(v=Math.max(0,-(h*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+d);else g=h>0?-c:c,v=Math.max(0,-(h*g+p)),y=-v*v+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(kh).addScaledVector(Tc,g),y}intersectSphere(t,i){va.subVectors(t.center,this.origin);const s=va.dot(this.direction),l=va.dot(va)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,p,m;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(p=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(p=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,va)!==null}intersectTriangle(t,i,s,l,c){Xh.subVectors(i,t),Ac.subVectors(s,t),Wh.crossVectors(Xh,Ac);let h=this.direction.dot(Wh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;ss.subVectors(this.origin,t);const m=p*this.direction.dot(Ac.crossVectors(ss,Ac));if(m<0)return null;const d=p*this.direction.dot(Xh.cross(ss));if(d<0||m+d>h)return null;const _=-p*ss.dot(Wh);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xv extends qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ds,this.combine=Mv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const w0=new on,Fs=new up,Rc=new cu,D0=new Q,Cc=new Q,wc=new Q,Dc=new Q,qh=new Q,Uc=new Q,U0=new Q,Lc=new Q;class mi extends Tn{constructor(t=new pi,i=new Xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Uc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const _=p[m],v=c[m];_!==0&&(qh.fromBufferAttribute(v,t),h?Uc.addScaledVector(qh,_):Uc.addScaledVector(qh.sub(i),_))}i.add(Uc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),Fs.copy(t.ray).recast(t.near),!(Rc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Rc,D0)===null||Fs.origin.distanceToSquared(D0)>(t.far-t.near)**2))&&(w0.copy(c).invert(),Fs.copy(t.ray).applyMatrix4(w0),!(s.boundingBox!==null&&Fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Fs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,C=g.length;b<C;b++){const M=g[b],S=h[M.materialIndex],w=Math.max(M.start,y.start),N=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let P=w,G=N;P<G;P+=3){const U=p.getX(P),F=p.getX(P+1),T=p.getX(P+2);l=Nc(this,S,t,s,d,_,v,U,F,T),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(p.count,y.start+y.count);for(let M=b,S=C;M<S;M+=3){const w=p.getX(M),N=p.getX(M+1),P=p.getX(M+2);l=Nc(this,h,t,s,d,_,v,w,N,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=g.length;b<C;b++){const M=g[b],S=h[M.materialIndex],w=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let P=w,G=N;P<G;P+=3){const U=P,F=P+1,T=P+2;l=Nc(this,S,t,s,d,_,v,U,F,T),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,S=C;M<S;M+=3){const w=M,N=M+1,P=M+2;l=Nc(this,h,t,s,d,_,v,w,N,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Iy(r,t,i,s,l,c,h,p){let m;if(t.side===Qn?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===fs,p),m===null)return null;Lc.copy(p),Lc.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Lc);return d<i.near||d>i.far?null:{distance:d,point:Lc.clone(),object:r}}function Nc(r,t,i,s,l,c,h,p,m,d){r.getVertexPosition(p,Cc),r.getVertexPosition(m,wc),r.getVertexPosition(d,Dc);const _=Iy(r,t,i,s,Cc,wc,Dc,U0);if(_){const v=new Q;Ai.getBarycoord(U0,Cc,wc,Dc,v),l&&(_.uv=Ai.getInterpolatedAttribute(l,p,m,d,v,new le)),c&&(_.uv1=Ai.getInterpolatedAttribute(c,p,m,d,v,new le)),h&&(_.normal=Ai.getInterpolatedAttribute(h,p,m,d,v,new Q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new Q,materialIndex:0};Ai.getNormal(Cc,wc,Dc,g.normal),_.face=g,_.barycoord=v}return _}class By extends Vn{constructor(t=null,i=1,s=1,l,c,h,p,m,d=Ln,_=Ln,v,g){super(null,h,p,m,d,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new Q,zy=new Q,Hy=new se;class os{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Yh.subVectors(s,i).cross(zy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Yh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Hy.getNormalMatrix(t),l=this.coplanarPoint(Yh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new cu,Gy=new le(.5,.5),Oc=new Q;class fp{constructor(t=new os,i=new os,s=new os,l=new os,c=new os,h=new os){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Wi,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],_=c[4],v=c[5],g=c[6],y=c[7],b=c[8],C=c[9],M=c[10],S=c[11],w=c[12],N=c[13],P=c[14],G=c[15];if(l[0].setComponents(d-h,y-_,S-b,G-w).normalize(),l[1].setComponents(d+h,y+_,S+b,G+w).normalize(),l[2].setComponents(d+p,y+v,S+C,G+N).normalize(),l[3].setComponents(d-p,y-v,S-C,G-N).normalize(),s)l[4].setComponents(m,g,M,P).normalize(),l[5].setComponents(d-m,y-g,S-M,G-P).normalize();else if(l[4].setComponents(d-m,y-g,S-M,G-P).normalize(),i===Wi)l[5].setComponents(d+m,y+g,S+M,G+P).normalize();else if(i===il)l[5].setComponents(m,g,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(t){Is.center.set(0,0,0);const i=Gy.distanceTo(t.center);return Is.radius=.7071067811865476+i,Is.applyMatrix4(t.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hp extends qs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const iu=new Q,au=new Q,L0=new on,Zo=new up,Pc=new cu,jh=new Q,N0=new Q;class Vy extends Tn{constructor(t=new pi,i=new hp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)iu.fromBufferAttribute(i,l-1),au.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=iu.distanceTo(au);t.setAttribute("lineDistance",new Jn(s,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,t.ray.intersectsSphere(Pc)===!1)return;L0.copy(l).invert(),Zo.copy(t.ray).applyMatrix4(L0);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const y=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=d){const S=_.getX(C),w=_.getX(C+1),N=Fc(this,t,Zo,m,S,w,C);N&&i.push(N)}if(this.isLineLoop){const C=_.getX(b-1),M=_.getX(y),S=Fc(this,t,Zo,m,C,M,b-1);S&&i.push(S)}}else{const y=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let C=y,M=b-1;C<M;C+=d){const S=Fc(this,t,Zo,m,C,C+1,C);S&&i.push(S)}if(this.isLineLoop){const C=Fc(this,t,Zo,m,b-1,y,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Fc(r,t,i,s,l,c,h){const p=r.geometry.attributes.position;if(iu.fromBufferAttribute(p,l),au.fromBufferAttribute(p,c),i.distanceSqToSegment(iu,au,jh,N0)>s)return;jh.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(jh);if(!(d<t.near||d>t.far))return{distance:d,point:N0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const O0=new Q,P0=new Q;class Wv extends Vy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)O0.fromBufferAttribute(i,l),P0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+O0.distanceTo(P0);t.setAttribute("lineDistance",new Jn(s,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qv extends Vn{constructor(t=[],i=ks,s,l,c,h,p,m,d,_){super(t,i,s,l,c,h,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wr extends Vn{constructor(t,i,s=ji,l,c,h,p=Ln,m=Ln,d,_=Ta,v=1){if(_!==Ta&&_!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,h,p,m,_,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ky extends Wr{constructor(t,i=ji,s=ks,l,c,h=Ln,p=Ln,m,d=Ta){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,p,m,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Yv extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rl extends pi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],_=[],v=[];let g=0,y=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Jn(d,3)),this.setAttribute("normal",new Jn(_,3)),this.setAttribute("uv",new Jn(v,2));function b(C,M,S,w,N,P,G,U,F,T,O){const Y=P/F,B=G/T,j=P/2,V=G/2,ct=U/2,W=F+1,L=T+1;let z=0,tt=0;const mt=new Q;for(let St=0;St<L;St++){const I=St*B-V;for(let $=0;$<W;$++){const xt=$*Y-j;mt[C]=xt*w,mt[M]=I*N,mt[S]=ct,d.push(mt.x,mt.y,mt.z),mt[C]=0,mt[M]=0,mt[S]=U>0?1:-1,_.push(mt.x,mt.y,mt.z),v.push($/F),v.push(1-St/T),z+=1}}for(let St=0;St<T;St++)for(let I=0;I<F;I++){const $=g+I+W*St,xt=g+I+W*(St+1),At=g+(I+1)+W*(St+1),Dt=g+(I+1)+W*St;m.push($,xt,Dt),m.push(xt,At,Dt),tt+=6}p.addGroup(y,tt,O),y+=tt,g+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const Ic=new Q,Bc=new Q,Zh=new Q,zc=new Ai;class jv extends pi{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(tl*i),h=t.getIndex(),p=t.getAttribute("position"),m=h?h.count:p.count,d=[0,0,0],_=["a","b","c"],v=new Array(3),g={},y=[];for(let b=0;b<m;b+=3){h?(d[0]=h.getX(b),d[1]=h.getX(b+1),d[2]=h.getX(b+2)):(d[0]=b,d[1]=b+1,d[2]=b+2);const{a:C,b:M,c:S}=zc;if(C.fromBufferAttribute(p,d[0]),M.fromBufferAttribute(p,d[1]),S.fromBufferAttribute(p,d[2]),zc.getNormal(Zh),v[0]=`${Math.round(C.x*l)},${Math.round(C.y*l)},${Math.round(C.z*l)}`,v[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,v[2]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let w=0;w<3;w++){const N=(w+1)%3,P=v[w],G=v[N],U=zc[_[w]],F=zc[_[N]],T=`${P}_${G}`,O=`${G}_${P}`;O in g&&g[O]?(Zh.dot(g[O].normal)<=c&&(y.push(U.x,U.y,U.z),y.push(F.x,F.y,F.z)),g[O]=null):T in g||(g[T]={index0:d[w],index1:d[N],normal:Zh.clone()})}}for(const b in g)if(g[b]){const{index0:C,index1:M}=g[b];Ic.fromBufferAttribute(p,C),Bc.fromBufferAttribute(p,M),y.push(Ic.x,Ic.y,Ic.z),y.push(Bc.x,Bc.y,Bc.z)}this.setAttribute("position",new Jn(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Yr extends pi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,_=m+1,v=t/p,g=i/m,y=[],b=[],C=[],M=[];for(let S=0;S<_;S++){const w=S*g-h;for(let N=0;N<d;N++){const P=N*v-c;b.push(P,-w,0),C.push(0,0,1),M.push(N/p),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<p;w++){const N=w+d*S,P=w+d*(S+1),G=w+1+d*(S+1),U=w+1+d*S;y.push(N,P,U),y.push(P,G,U)}this.setIndex(y),this.setAttribute("position",new Jn(b,3)),this.setAttribute("normal",new Jn(C,3)),this.setAttribute("uv",new Jn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zv extends qs{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function qr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(F0(l))l.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(F0(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=qr(r[i]);for(const l in s)t[l]=s[l]}return t}function F0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Xy(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Kv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const Wy={clone:qr,merge:Hn};var qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qy,this.fragmentShader=Yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=Xy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class jy extends Zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qv extends qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ds,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zy extends qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ky extends qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const I0={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(B0(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!B0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function B0(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Qy{constructor(t,i,s){const l=this;let c=!1,h=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){p++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,p),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,p),h===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return d.push(_,v),this},this.removeHandler=function(_){const v=d.indexOf(_);return v!==-1&&d.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=d.length;v<g;v+=2){const y=d[v],b=d[v+1];if(y.global&&(y.lastIndex=0),y.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Jy=new Qy;class dp{constructor(t){this.manager=t!==void 0?t:Jy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}dp.DEFAULT_MATERIAL_NAME="__DEFAULT";const xa={};class $y extends Error{constructor(t,i){super(t),this.response=i}}class tE extends dp{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=I0.get(`file:${t}`);if(c!==void 0){this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0);return}if(xa[t]!==void 0){xa[t].push({onLoad:i,onProgress:s,onError:l});return}xa[t]=[],xa[t].push({onLoad:i,onProgress:s,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,m=this.responseType;fetch(h).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Jt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const _=xa[t],v=d.body.getReader(),g=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=g?parseInt(g):0,b=y!==0;let C=0;const M=new ReadableStream({start(S){w();function w(){v.read().then(({done:N,value:P})=>{if(N)S.close();else{C+=P.byteLength;const G=new ProgressEvent("progress",{lengthComputable:b,loaded:C,total:y});for(let U=0,F=_.length;U<F;U++){const T=_[U];T.onProgress&&T.onProgress(G)}S.enqueue(P),w()}},N=>{S.error(N)})}}});return new Response(M)}else throw new $y(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(m){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(_=>new DOMParser().parseFromString(_,p));case"json":return d.json();default:if(p==="")return d.text();{const v=/charset="?([^;"\s]*)"?/i.exec(p),g=v&&v[1]?v[1].toLowerCase():void 0,y=new TextDecoder(g);return d.arrayBuffer().then(b=>y.decode(b))}}}).then(d=>{I0.add(`file:${t}`,d);const _=xa[t];delete xa[t];for(let v=0,g=_.length;v<g;v++){const y=_[v];y.onLoad&&y.onLoad(d)}}).catch(d=>{const _=xa[t];if(_===void 0)throw this.manager.itemError(t),d;delete xa[t];for(let v=0,g=_.length;v<g;v++){const y=_[v];y.onError&&y.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Jv extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class $v extends Jv{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const Kh=new on,z0=new Q,H0=new Q;class eE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fp,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;z0.setFromMatrixPosition(t.matrixWorld),i.position.copy(z0),H0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(H0),i.updateMatrixWorld(),Kh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===il||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hc=new Q,Gc=new hs,Gi=new Q;class tx extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hc,Gc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Gc,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Hc,Gc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Gc,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new Q,G0=new le,V0=new le;class fi extends tx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=jd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,i){return this.getViewBounds(t,G0,V0),i.subVectors(V0,G0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(tl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class pp extends tx{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nE extends eE{constructor(){super(new pp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class su extends Jv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new nE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Fr=-90,Ir=1;class iE extends Tn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Fr,Ir,t,i);l.layers=this.layers,this.add(l);const c=new fi(Fr,Ir,t,i);c.layers=this.layers,this.add(c);const h=new fi(Fr,Ir,t,i);h.layers=this.layers,this.add(h);const p=new fi(Fr,Ir,t,i);p.layers=this.layers,this.add(p);const m=new fi(Fr,Ir,t,i);m.layers=this.layers,this.add(m);const d=new fi(Fr,Ir,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===il)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class aE extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class sE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Jt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class k0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Sp=class Sp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Sp.prototype.isMatrix2=!0;let X0=Sp;class rE extends ps{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Jt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function W0(r,t,i,s){const l=oE(s);switch(i){case Ov:return r*t;case Fv:return r*t/l.components*l.byteLength;case ap:return r*t/l.components*l.byteLength;case Xs:return r*t*2/l.components*l.byteLength;case sp:return r*t*2/l.components*l.byteLength;case Pv:return r*t*3/l.components*l.byteLength;case Pi:return r*t*4/l.components*l.byteLength;case rp:return r*t*4/l.components*l.byteLength;case Yc:case jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _d:case xd:return Math.max(r,16)*Math.max(t,8)/4;case gd:case vd:return Math.max(r,8)*Math.max(t,8)/2;case Sd:case Md:case Ed:case bd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case yd:case Jc:case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ad:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case wd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Nd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Od:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case zd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Hd:case Gd:case Vd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case $c:case Wd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function oE(r){switch(r){case hi:case Dv:return{byteLength:1,components:1};case el:case Uv:case ba:return{byteLength:2,components:1};case np:case ip:return{byteLength:2,components:4};case ji:case ep:case Xi:return{byteLength:4,components:1};case Lv:case Nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);function ex(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function lE(r){const t=new WeakMap;function i(p,m){const d=p.array,_=p.usage,v=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,_),p.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,d){const _=m.array,v=m.updateRanges;if(r.bindBuffer(d,p),v.length===0)r.bufferSubData(d,0,_);else{v.sort((y,b)=>y.start-b.start);let g=0;for(let y=1;y<v.length;y++){const b=v[g],C=v[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++g,v[g]=C)}v.length=g+1;for(let y=0,b=v.length;y<b;y++){const C=v[y];r.bufferSubData(d,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var cE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uE=`#ifdef USE_ALPHAHASH
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
#endif`,fE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mE=`#ifdef USE_AOMAP
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
#endif`,gE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_E=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ME=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yE=`#ifdef USE_IRIDESCENCE
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
#endif`,EE=`#ifdef USE_BUMPMAP
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
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,UE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,LE=`#define PI 3.141592653589793
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
} // validated`,NE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OE=`vec3 transformedNormal = objectNormal;
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
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zE="gl_FragColor = linearToOutputTexel( gl_FragColor );",HE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,XE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KE=`#ifdef USE_GRADIENTMAP
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
}`,QE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tb=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,eb=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ab=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ob=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lb=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xb=`#if defined( USE_POINTS_UV )
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
#endif`,Sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`#ifdef USE_MORPHTARGETS
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
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lb=`#ifdef USE_NORMALMAP
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
#endif`,Nb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,jb=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Zb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,Qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jb=`#ifdef USE_SKINNING
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
#endif`,$b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iT=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uT=`uniform sampler2D t2D;
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`#include <common>
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
}`,gT=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_T=`#define DISTANCE
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
}`,vT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ST=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`uniform float scale;
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
}`,yT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,bT=`uniform vec3 diffuse;
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
}`,TT=`#define LAMBERT
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
}`,AT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,RT=`#define MATCAP
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
}`,CT=`#define MATCAP
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
}`,wT=`#define NORMAL
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
}`,DT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UT=`#define PHONG
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
}`,LT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,NT=`#define STANDARD
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
}`,OT=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,PT=`#define TOON
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
}`,FT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,IT=`uniform float size;
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
}`,BT=`uniform vec3 diffuse;
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
}`,zT=`#include <common>
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
}`,HT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,GT=`uniform float rotation;
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
}`,VT=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:cE,alphahash_pars_fragment:uE,alphamap_fragment:fE,alphamap_pars_fragment:hE,alphatest_fragment:dE,alphatest_pars_fragment:pE,aomap_fragment:mE,aomap_pars_fragment:gE,batching_pars_vertex:_E,batching_vertex:vE,begin_vertex:xE,beginnormal_vertex:SE,bsdfs:ME,iridescence_fragment:yE,bumpmap_pars_fragment:EE,clipping_planes_fragment:bE,clipping_planes_pars_fragment:TE,clipping_planes_pars_vertex:AE,clipping_planes_vertex:RE,color_fragment:CE,color_pars_fragment:wE,color_pars_vertex:DE,color_vertex:UE,common:LE,cube_uv_reflection_fragment:NE,defaultnormal_vertex:OE,displacementmap_pars_vertex:PE,displacementmap_vertex:FE,emissivemap_fragment:IE,emissivemap_pars_fragment:BE,colorspace_fragment:zE,colorspace_pars_fragment:HE,envmap_fragment:GE,envmap_common_pars_fragment:VE,envmap_pars_fragment:kE,envmap_pars_vertex:XE,envmap_physical_pars_fragment:eb,envmap_vertex:WE,fog_vertex:qE,fog_pars_vertex:YE,fog_fragment:jE,fog_pars_fragment:ZE,gradientmap_pars_fragment:KE,lightmap_pars_fragment:QE,lights_lambert_fragment:JE,lights_lambert_pars_fragment:$E,lights_pars_begin:tb,lights_toon_fragment:nb,lights_toon_pars_fragment:ib,lights_phong_fragment:ab,lights_phong_pars_fragment:sb,lights_physical_fragment:rb,lights_physical_pars_fragment:ob,lights_fragment_begin:lb,lights_fragment_maps:cb,lights_fragment_end:ub,lightprobes_pars_fragment:fb,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:db,logdepthbuf_pars_vertex:pb,logdepthbuf_vertex:mb,map_fragment:gb,map_pars_fragment:_b,map_particle_fragment:vb,map_particle_pars_fragment:xb,metalnessmap_fragment:Sb,metalnessmap_pars_fragment:Mb,morphinstance_vertex:yb,morphcolor_vertex:Eb,morphnormal_vertex:bb,morphtarget_pars_vertex:Tb,morphtarget_vertex:Ab,normal_fragment_begin:Rb,normal_fragment_maps:Cb,normal_pars_fragment:wb,normal_pars_vertex:Db,normal_vertex:Ub,normalmap_pars_fragment:Lb,clearcoat_normal_fragment_begin:Nb,clearcoat_normal_fragment_maps:Ob,clearcoat_pars_fragment:Pb,iridescence_pars_fragment:Fb,opaque_fragment:Ib,packing:Bb,premultiplied_alpha_fragment:zb,project_vertex:Hb,dithering_fragment:Gb,dithering_pars_fragment:Vb,roughnessmap_fragment:kb,roughnessmap_pars_fragment:Xb,shadowmap_pars_fragment:Wb,shadowmap_pars_vertex:qb,shadowmap_vertex:Yb,shadowmask_pars_fragment:jb,skinbase_vertex:Zb,skinning_pars_vertex:Kb,skinning_vertex:Qb,skinnormal_vertex:Jb,specularmap_fragment:$b,specularmap_pars_fragment:tT,tonemapping_fragment:eT,tonemapping_pars_fragment:nT,transmission_fragment:iT,transmission_pars_fragment:aT,uv_pars_fragment:sT,uv_pars_vertex:rT,uv_vertex:oT,worldpos_vertex:lT,background_vert:cT,background_frag:uT,backgroundCube_vert:fT,backgroundCube_frag:hT,cube_vert:dT,cube_frag:pT,depth_vert:mT,depth_frag:gT,distance_vert:_T,distance_frag:vT,equirect_vert:xT,equirect_frag:ST,linedashed_vert:MT,linedashed_frag:yT,meshbasic_vert:ET,meshbasic_frag:bT,meshlambert_vert:TT,meshlambert_frag:AT,meshmatcap_vert:RT,meshmatcap_frag:CT,meshnormal_vert:wT,meshnormal_frag:DT,meshphong_vert:UT,meshphong_frag:LT,meshphysical_vert:NT,meshphysical_frag:OT,meshtoon_vert:PT,meshtoon_frag:FT,points_vert:IT,points_frag:BT,shadow_vert:zT,shadow_frag:HT,sprite_vert:GT,sprite_frag:VT},zt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ki={basic:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Hn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Hn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new pe(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Hn([zt.points,zt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Hn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Hn([zt.common,zt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Hn([zt.sprite,zt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Hn([zt.common,zt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Hn([zt.lights,zt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};ki.physical={uniforms:Hn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Vc={r:0,b:0,g:0},kT=new on,nx=new se;nx.set(-1,0,0,0,1,0,0,0,1);function XT(r,t,i,s,l,c){const h=new pe(0);let p=l===!0?0:1,m,d,_=null,v=0,g=null;function y(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const P=w.backgroundBlurriness>0;N=t.get(N,P)}return N}function b(w){let N=!1;const P=y(w);P===null?M(h,p):P&&P.isColor&&(M(P,1),N=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(w,N){const P=y(N);P&&(P.isCubeTexture||P.mapping===ou)?(d===void 0&&(d=new mi(new rl(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:qr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=P,d.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(N.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(nx),d.material.toneMapped=be.getTransfer(P.colorSpace)!==ze,(_!==P||v!==P.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,_=P,v=P.version,g=r.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new mi(new Yr(2,2),new Zi({name:"BackgroundMaterial",uniforms:qr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=be.getTransfer(P.colorSpace)!==ze,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=P,v=P.version,g=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,N){w.getRGB(Vc,Kv(r)),i.buffers.color.setClear(Vc.r,Vc.g,Vc.b,N,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,N=1){h.set(w),p=N,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,M(h,p)},render:b,addToRenderList:C,dispose:S}}function WT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(B,j,V,ct,W){let L=!1;const z=v(B,ct,V,j);c!==z&&(c=z,d(c.object)),L=y(B,ct,V,W),L&&b(B,ct,V,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,P(B,j,V,ct),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function m(){return r.createVertexArray()}function d(B){return r.bindVertexArray(B)}function _(B){return r.deleteVertexArray(B)}function v(B,j,V,ct){const W=ct.wireframe===!0;let L=s[j.id];L===void 0&&(L={},s[j.id]=L);const z=B.isInstancedMesh===!0?B.id:0;let tt=L[z];tt===void 0&&(tt={},L[z]=tt);let mt=tt[V.id];mt===void 0&&(mt={},tt[V.id]=mt);let St=mt[W];return St===void 0&&(St=g(m()),mt[W]=St),St}function g(B){const j=[],V=[],ct=[];for(let W=0;W<i;W++)j[W]=0,V[W]=0,ct[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:V,attributeDivisors:ct,object:B,attributes:{},index:null}}function y(B,j,V,ct){const W=c.attributes,L=j.attributes;let z=0;const tt=V.getAttributes();for(const mt in tt)if(tt[mt].location>=0){const I=W[mt];let $=L[mt];if($===void 0&&(mt==="instanceMatrix"&&B.instanceMatrix&&($=B.instanceMatrix),mt==="instanceColor"&&B.instanceColor&&($=B.instanceColor)),I===void 0||I.attribute!==$||$&&I.data!==$.data)return!0;z++}return c.attributesNum!==z||c.index!==ct}function b(B,j,V,ct){const W={},L=j.attributes;let z=0;const tt=V.getAttributes();for(const mt in tt)if(tt[mt].location>=0){let I=L[mt];I===void 0&&(mt==="instanceMatrix"&&B.instanceMatrix&&(I=B.instanceMatrix),mt==="instanceColor"&&B.instanceColor&&(I=B.instanceColor));const $={};$.attribute=I,I&&I.data&&($.data=I.data),W[mt]=$,z++}c.attributes=W,c.attributesNum=z,c.index=ct}function C(){const B=c.newAttributes;for(let j=0,V=B.length;j<V;j++)B[j]=0}function M(B){S(B,0)}function S(B,j){const V=c.newAttributes,ct=c.enabledAttributes,W=c.attributeDivisors;V[B]=1,ct[B]===0&&(r.enableVertexAttribArray(B),ct[B]=1),W[B]!==j&&(r.vertexAttribDivisor(B,j),W[B]=j)}function w(){const B=c.newAttributes,j=c.enabledAttributes;for(let V=0,ct=j.length;V<ct;V++)j[V]!==B[V]&&(r.disableVertexAttribArray(V),j[V]=0)}function N(B,j,V,ct,W,L,z){z===!0?r.vertexAttribIPointer(B,j,V,W,L):r.vertexAttribPointer(B,j,V,ct,W,L)}function P(B,j,V,ct){C();const W=ct.attributes,L=V.getAttributes(),z=j.defaultAttributeValues;for(const tt in L){const mt=L[tt];if(mt.location>=0){let St=W[tt];if(St===void 0&&(tt==="instanceMatrix"&&B.instanceMatrix&&(St=B.instanceMatrix),tt==="instanceColor"&&B.instanceColor&&(St=B.instanceColor)),St!==void 0){const I=St.normalized,$=St.itemSize,xt=t.get(St);if(xt===void 0)continue;const At=xt.buffer,Dt=xt.type,ot=xt.bytesPerElement,Mt=Dt===r.INT||Dt===r.UNSIGNED_INT||St.gpuType===ep;if(St.isInterleavedBufferAttribute){const bt=St.data,Ht=bt.stride,te=St.offset;if(bt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<mt.locationSize;Qt++)S(mt.location+Qt,bt.meshPerAttribute);B.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Qt=0;Qt<mt.locationSize;Qt++)M(mt.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let Qt=0;Qt<mt.locationSize;Qt++)N(mt.location+Qt,$/mt.locationSize,Dt,I,Ht*ot,(te+$/mt.locationSize*Qt)*ot,Mt)}else{if(St.isInstancedBufferAttribute){for(let bt=0;bt<mt.locationSize;bt++)S(mt.location+bt,St.meshPerAttribute);B.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let bt=0;bt<mt.locationSize;bt++)M(mt.location+bt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let bt=0;bt<mt.locationSize;bt++)N(mt.location+bt,$/mt.locationSize,Dt,I,$*ot,$/mt.locationSize*bt*ot,Mt)}}else if(z!==void 0){const I=z[tt];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(mt.location,I);break;case 3:r.vertexAttrib3fv(mt.location,I);break;case 4:r.vertexAttrib4fv(mt.location,I);break;default:r.vertexAttrib1fv(mt.location,I)}}}}w()}function G(){O();for(const B in s){const j=s[B];for(const V in j){const ct=j[V];for(const W in ct){const L=ct[W];for(const z in L)_(L[z].object),delete L[z];delete ct[W]}}delete s[B]}}function U(B){if(s[B.id]===void 0)return;const j=s[B.id];for(const V in j){const ct=j[V];for(const W in ct){const L=ct[W];for(const z in L)_(L[z].object),delete L[z];delete ct[W]}}delete s[B.id]}function F(B){for(const j in s){const V=s[j];for(const ct in V){const W=V[ct];if(W[B.id]===void 0)continue;const L=W[B.id];for(const z in L)_(L[z].object),delete L[z];delete W[B.id]}}}function T(B){for(const j in s){const V=s[j],ct=B.isInstancedMesh===!0?B.id:0,W=V[ct];if(W!==void 0){for(const L in W){const z=W[L];for(const tt in z)_(z[tt].object),delete z[tt];delete W[L]}delete V[ct],Object.keys(V).length===0&&delete s[j]}}}function O(){Y(),h=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:Y,dispose:G,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:M,disableUnusedAttributes:w}}function qT(r,t,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,_){_!==0&&(r.drawArraysInstanced(s,m,d,_),i.update(d,s,_))}function p(m,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,_);let g=0;for(let y=0;y<_;y++)g+=d[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function YT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Pi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const T=F===ba&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==hi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Xi&&!T)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const _=m(d);_!==d&&(Jt("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:P,maxSamples:G,samples:U}}function jT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new os,p=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,y){const b=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,S=r.get(v);if(!l||b===null||b.length===0||c&&!M)c?_(null):d();else{const w=c?0:s,N=w*4;let P=S.clippingState||null;m.value=P,P=_(b,g,N,y);for(let G=0;G!==N;++G)P[G]=i[G];S.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,y,b){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const S=y+C*4,w=g.matrixWorldInverse;p.getNormalMatrix(w),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,P=y;N!==C;++N,P+=4)h.copy(v[N]).applyMatrix4(w,p),h.normal.toArray(M,P),M[P+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}const us=4,q0=[.125,.215,.35,.446,.526,.582],zs=20,ZT=256,Ko=new pp,Y0=new pe;let Qh=null,Jh=0,$h=0,td=!1;const KT=new Q;class j0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=KT}=c;Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qh,Jh,$h),this._renderer.xr.enabled=td,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ks||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ba,format:Pi,colorSpace:tu,depthBuffer:!1},l=Z0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z0(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QT(c)),this._blurMaterial=$T(c,t,i),this._ggxMaterial=JT(c,t,i)}return l}_compileMaterial(t){const i=new mi(new pi,t);this._renderer.compile(i,Ko)}_sceneToCubeUV(t,i,s,l,c){const m=new fi(90,1,i,s),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(Y0),v.toneMapping=qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new rl,new Xv({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let S=!1;const w=t.background;w?w.isColor&&(M.color.copy(w),t.background=null,S=!0):(M.color.copy(Y0),S=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):P===1?(m.up.set(0,0,d[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const G=this._cubeSize;Br(l,P*G,N>2?G:0,G,G),v.setRenderTarget(l),S&&v.render(C,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===ks||t.mapping===Xr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,y=v*g,{_lodMax:b}=this,C=this._sizeLods[s],M=3*C*(s>b-us?s-b+us:0),S=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,Br(c,M,S,3*C,2*C),l.setRenderTarget(c),l.render(p,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Br(t,M,S,3*C,2*C),l.setRenderTarget(t),l.render(p,Ko)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=d;const g=d.uniforms,y=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*zs-1),C=c/b,M=isFinite(c)?1+Math.floor(_*C):zs;M>zs&&Jt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${zs}`);const S=[];let w=0;for(let F=0;F<zs;++F){const T=F/C,O=Math.exp(-T*T/2);S.push(O),F===0?w+=O:F<M&&(w+=2*O)}for(let F=0;F<S.length;F++)S[F]=S[F]/w;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=b,g.mipInt.value=N-s;const P=this._sizeLods[l],G=3*P*(l>N-us?l-N+us:0),U=4*(this._cubeSize-P);Br(i,G,U,3*P,2*P),m.setRenderTarget(i),m.render(v,Ko)}}function QT(r){const t=[],i=[],s=[];let l=r;const c=r-us+1+q0.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>r-us?m=q0[h-r+us-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],y=6,b=6,C=3,M=2,S=1,w=new Float32Array(C*b*y),N=new Float32Array(M*b*y),P=new Float32Array(S*b*y);for(let U=0;U<y;U++){const F=U%3*2/3-1,T=U>2?0:-1,O=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];w.set(O,C*b*U),N.set(g,M*b*U);const Y=[U,U,U,U,U,U];P.set(Y,S*b*U)}const G=new pi;G.setAttribute("position",new di(w,C)),G.setAttribute("uv",new di(N,M)),G.setAttribute("faceIndex",new di(P,S)),s.push(new mi(G,null)),l>us&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Z0(r,t,i){const s=new Yi(r,t,i);return s.texture.mapping=ou,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function JT(r,t,i){return new Zi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function $T(r,t,i){const s=new Float32Array(zs),l=new Q(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:uu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function K0(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uu(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Q0(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function uu(){return`

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
	`}class ix extends Yi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new qv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new rl(5,5,5),c=new Zi({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:ya});c.uniforms.tEquirect.value=i;const h=new mi(l,c),p=i.minFilter;return i.minFilter===Hs&&(i.minFilter=Bn),new iE(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function t1(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===yh||y===Eh)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const C=new ix(b.height);return C.fromEquirectangularTexture(r,g),t.set(g,C),g.addEventListener("dispose",d),p(C.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,b=y===yh||y===Eh,C=y===ks||y===Xr;if(b||C){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new j0(r)),M=b?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const w=g.image;return b&&w&&w.height>0||C&&w&&m(w)?(s===null&&(s=new j0(r)),M=b?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function p(g,y){return y===yh?g.mapping=ks:y===Eh&&(g.mapping=Xr),g}function m(g){let y=0;const b=6;for(let C=0;C<b;C++)g[C]!==void 0&&y++;return y===b}function d(g){const y=g.target;y.removeEventListener("dispose",d);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function e1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Yd("WebGLRenderer: "+s+" extension not supported."),l}}}function n1(r,t,i,s){const l={},c=new WeakMap;function h(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function d(v){const g=[],y=v.index,b=v.attributes.position;let C=0;if(b===void 0)return;if(y!==null){const w=y.array;C=y.version;for(let N=0,P=w.length;N<P;N+=3){const G=w[N+0],U=w[N+1],F=w[N+2];g.push(G,U,U,F,F,G)}}else{const w=b.array;C=b.version;for(let N=0,P=w.length/3-1;N<P;N+=3){const G=N+0,U=N+1,F=N+2;g.push(G,U,U,F,F,G)}}const M=new(b.count>=65535?kv:Vv)(g,1);M.version=C;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function _(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&d(v)}else d(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:_}}function i1(r,t,i){let s;function l(v){s=v}let c,h;function p(v){c=v.type,h=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*h),i.update(g,s,1)}function d(v,g,y){y!==0&&(r.drawElementsInstanced(s,g,c,v*h,y),i.update(g,s,y))}function _(v,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,y);let C=0;for(let M=0;M<y;M++)C+=g[M];i.update(C,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_}function a1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Te("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function s1(r,t,i){const s=new WeakMap,l=new rn;function c(h,p,m){const d=h.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==v){let Y=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",Y)};var y=Y;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let P=0;b===!0&&(P=1),C===!0&&(P=2),M===!0&&(P=3);let G=p.attributes.position.count*P,U=1;G>t.maxTextureSize&&(U=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const F=new Float32Array(G*U*4*v),T=new Bv(F,G,U,v);T.type=Xi,T.needsUpdate=!0;const O=P*4;for(let B=0;B<v;B++){const j=S[B],V=w[B],ct=N[B],W=G*U*4*B;for(let L=0;L<j.count;L++){const z=L*O;b===!0&&(l.fromBufferAttribute(j,L),F[W+z+0]=l.x,F[W+z+1]=l.y,F[W+z+2]=l.z,F[W+z+3]=0),C===!0&&(l.fromBufferAttribute(V,L),F[W+z+4]=l.x,F[W+z+5]=l.y,F[W+z+6]=l.z,F[W+z+7]=0),M===!0&&(l.fromBufferAttribute(ct,L),F[W+z+8]=l.x,F[W+z+9]=l.y,F[W+z+10]=l.z,F[W+z+11]=ct.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new le(G,U)},s.set(p,g),p.addEventListener("dispose",Y)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function r1(r,t,i,s,l){let c=new WeakMap;function h(d){const _=l.render.frame,v=d.geometry,g=t.get(d,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==_&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function p(){c=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:p}}const o1={[yv]:"LINEAR_TONE_MAPPING",[Ev]:"REINHARD_TONE_MAPPING",[bv]:"CINEON_TONE_MAPPING",[Tv]:"ACES_FILMIC_TONE_MAPPING",[Rv]:"AGX_TONE_MAPPING",[Cv]:"NEUTRAL_TONE_MAPPING",[Av]:"CUSTOM_TONE_MAPPING"};function l1(r,t,i,s,l){const c=new Yi(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Wr(t,i):void 0}),h=new Yi(t,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),p=new pi;p.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Jn([0,2,0,0,2,0],2));const m=new jy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new mi(p,m),_=new pp(-1,1,1,-1,0,1);let v=null,g=null,y=!1,b,C=null,M=[],S=!1;this.setSize=function(w,N){c.setSize(w,N),h.setSize(w,N);for(let P=0;P<M.length;P++){const G=M[P];G.setSize&&G.setSize(w,N)}},this.setEffects=function(w){M=w,S=M.length>0&&M[0].isRenderPass===!0;const N=c.width,P=c.height;for(let G=0;G<M.length;G++){const U=M[G];U.setSize&&U.setSize(N,P)}},this.begin=function(w,N){if(y||w.toneMapping===qi&&M.length===0)return!1;if(C=N,N!==null){const P=N.width,G=N.height;(c.width!==P||c.height!==G)&&this.setSize(P,G)}return S===!1&&w.setRenderTarget(c),b=w.toneMapping,w.toneMapping=qi,!0},this.hasRenderPass=function(){return S},this.end=function(w,N){w.toneMapping=b,y=!0;let P=c,G=h;for(let U=0;U<M.length;U++){const F=M[U];if(F.enabled!==!1&&(F.render(w,G,P,N),F.needsSwap!==!1)){const T=P;P=G,G=T}}if(v!==w.outputColorSpace||g!==w.toneMapping){v=w.outputColorSpace,g=w.toneMapping,m.defines={},be.getTransfer(v)===ze&&(m.defines.SRGB_TRANSFER="");const U=o1[g];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,w.setRenderTarget(C),w.render(d,_),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const ax=new Vn,Zd=new Wr(1,1),sx=new Bv,rx=new Ty,ox=new qv,J0=[],$0=[],tv=new Float32Array(16),ev=new Float32Array(9),nv=new Float32Array(4);function jr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=J0[l];if(c===void 0&&(c=new Float32Array(l),J0[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,r[h].toArray(c,p)}return c}function Mn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function yn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function fu(r,t){let i=$0[t];i===void 0&&(i=new Int32Array(t),$0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function c1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function u1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2fv(this.addr,t),yn(i,t)}}function f1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Mn(i,t))return;r.uniform3fv(this.addr,t),yn(i,t)}}function h1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4fv(this.addr,t),yn(i,t)}}function d1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Mn(i,s))return;nv.set(s),r.uniformMatrix2fv(this.addr,!1,nv),yn(i,s)}}function p1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Mn(i,s))return;ev.set(s),r.uniformMatrix3fv(this.addr,!1,ev),yn(i,s)}}function m1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Mn(i,s))return;tv.set(s),r.uniformMatrix4fv(this.addr,!1,tv),yn(i,s)}}function g1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function _1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2iv(this.addr,t),yn(i,t)}}function v1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Mn(i,t))return;r.uniform3iv(this.addr,t),yn(i,t)}}function x1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4iv(this.addr,t),yn(i,t)}}function S1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function M1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2uiv(this.addr,t),yn(i,t)}}function y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Mn(i,t))return;r.uniform3uiv(this.addr,t),yn(i,t)}}function E1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4uiv(this.addr,t),yn(i,t)}}function b1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Zd.compareFunction=i.isReversedDepthBuffer()?lp:op,c=Zd):c=ax,i.setTexture2D(t||c,l)}function T1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||rx,l)}function A1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ox,l)}function R1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||sx,l)}function C1(r){switch(r){case 5126:return c1;case 35664:return u1;case 35665:return f1;case 35666:return h1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return S1;case 36294:return M1;case 36295:return y1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}function w1(r,t){r.uniform1fv(this.addr,t)}function D1(r,t){const i=jr(t,this.size,2);r.uniform2fv(this.addr,i)}function U1(r,t){const i=jr(t,this.size,3);r.uniform3fv(this.addr,i)}function L1(r,t){const i=jr(t,this.size,4);r.uniform4fv(this.addr,i)}function N1(r,t){const i=jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function O1(r,t){const i=jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function P1(r,t){const i=jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function F1(r,t){r.uniform1iv(this.addr,t)}function I1(r,t){r.uniform2iv(this.addr,t)}function B1(r,t){r.uniform3iv(this.addr,t)}function z1(r,t){r.uniform4iv(this.addr,t)}function H1(r,t){r.uniform1uiv(this.addr,t)}function G1(r,t){r.uniform2uiv(this.addr,t)}function V1(r,t){r.uniform3uiv(this.addr,t)}function k1(r,t){r.uniform4uiv(this.addr,t)}function X1(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Zd:h=ax;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,c[p])}function W1(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||rx,c[h])}function q1(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||ox,c[h])}function Y1(r,t,i){const s=this.cache,l=t.length,c=fu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||sx,c[h])}function j1(r){switch(r){case 5126:return w1;case 35664:return D1;case 35665:return U1;case 35666:return L1;case 35674:return N1;case 35675:return O1;case 35676:return P1;case 5124:case 35670:return F1;case 35667:case 35671:return I1;case 35668:case 35672:return B1;case 35669:case 35673:return z1;case 5125:return H1;case 36294:return G1;case 36295:return V1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}class Z1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=C1(i.type)}}class K1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=j1(i.type)}}class Q1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function iv(r,t){r.seq.push(t),r.map[t.id]=t}function J1(r,t,i){const s=r.name,l=s.length;for(ed.lastIndex=0;;){const c=ed.exec(s),h=ed.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){iv(i,d===void 0?new Z1(p,r,t):new K1(p,r,t));break}else{let v=i.map[p];v===void 0&&(v=new Q1(p),iv(i,v)),i=v}}}class Qc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=t.getActiveUniform(i,h),m=t.getUniformLocation(i,p.name);J1(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function av(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const $1=37297;let tA=0;function eA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const sv=new se;function nA(r){be._getMatrix(sv,be.workingColorSpace,r);const t=`mat3( ${sv.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(r)){case eu:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function rv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+eA(r.getShaderSource(t),p)}else return c}function iA(r,t){const i=nA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const aA={[yv]:"Linear",[Ev]:"Reinhard",[bv]:"Cineon",[Tv]:"ACESFilmic",[Rv]:"AgX",[Cv]:"Neutral",[Av]:"Custom"};function sA(r,t){const i=aA[t];return i===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const kc=new Q;function rA(){be.getLuminanceCoefficients(kc);const r=kc.x.toFixed(4),t=kc.y.toFixed(4),i=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function lA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function cA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:p}}return i}function $o(r){return r!==""}function ov(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(r){return r.replace(uA,hA)}const fA=new Map;function hA(r,t){let i=fe[t];if(i===void 0){const s=fA.get(t);if(s!==void 0)i=fe[s],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Kd(i)}const dA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cv(r){return r.replace(dA,pA)}function pA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function uv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const mA={[qc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function gA(r){return mA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _A={[ks]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[ou]:"ENVMAP_TYPE_CUBE_UV"};function vA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_A[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const xA={[Xr]:"ENVMAP_MODE_REFRACTION"};function SA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const MA={[Mv]:"ENVMAP_BLENDING_MULTIPLY",[iy]:"ENVMAP_BLENDING_MIX",[ay]:"ENVMAP_BLENDING_ADD"};function yA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":MA[r.combine]||"ENVMAP_BLENDING_NONE"}function EA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function bA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=gA(i),d=vA(i),_=SA(i),v=yA(i),g=EA(i),y=oA(i),b=lA(c),C=l.createProgram();let M,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),S.length>0&&(S+=`
`)):(M=[uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),S=[uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?fe.tonemapping_pars_fragment:"",i.toneMapping!==qi?sA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,iA("linearToOutputTexel",i.outputColorSpace),rA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),h=Kd(h),h=ov(h,i),h=lv(h,i),p=Kd(p),p=ov(p,i),p=lv(p,i),h=cv(h),p=cv(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===m0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=w+M+h,P=w+S+p,G=av(l,l.VERTEX_SHADER,N),U=av(l,l.FRAGMENT_SHADER,P);l.attachShader(C,G),l.attachShader(C,U),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function F(B){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(C)||"",V=l.getShaderInfoLog(G)||"",ct=l.getShaderInfoLog(U)||"",W=j.trim(),L=V.trim(),z=ct.trim();let tt=!0,mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(tt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,G,U);else{const St=rv(l,G,"vertex"),I=rv(l,U,"fragment");Te("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+St+`
`+I)}else W!==""?Jt("WebGLProgram: Program Info Log:",W):(L===""||z==="")&&(mt=!1);mt&&(B.diagnostics={runnable:tt,programLog:W,vertexShader:{log:L,prefix:M},fragmentShader:{log:z,prefix:S}})}l.deleteShader(G),l.deleteShader(U),T=new Qc(l,C),O=cA(l,C)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let O;this.getAttributes=function(){return O===void 0&&F(this),O};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(C,$1)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=U,this}let TA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new RA(t),i.set(t,s)),s}}class RA{constructor(t){this.id=TA++,this.code=t,this.usedTimes=0}}function CA(r){return r===Xs||r===Jc||r===$c}function wA(r,t,i,s,l,c){const h=new zv,p=new AA,m=new Set,d=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,O,Y,B,j,V){const ct=B.fog,W=j.geometry,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,tt=t.get(T.envMap||L,z),mt=tt&&tt.mapping===ou?tt.image.height:null,St=y[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&Jt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const I=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$=I!==void 0?I.length:0;let xt=0;W.morphAttributes.position!==void 0&&(xt=1),W.morphAttributes.normal!==void 0&&(xt=2),W.morphAttributes.color!==void 0&&(xt=3);let At,Dt,ot,Mt;if(St){const ee=ki[St];At=ee.vertexShader,Dt=ee.fragmentShader}else At=T.vertexShader,Dt=T.fragmentShader,p.update(T),ot=p.getVertexShaderID(T),Mt=p.getFragmentShaderID(T);const bt=r.getRenderTarget(),Ht=r.state.buffers.depth.getReversed(),te=j.isInstancedMesh===!0,Qt=j.isBatchedMesh===!0,We=!!T.map,he=!!T.matcap,Se=!!tt,Ne=!!T.aoMap,ce=!!T.lightMap,ln=!!T.bumpMap,je=!!T.normalMap,An=!!T.displacementMap,q=!!T.emissiveMap,en=!!T.metalnessMap,de=!!T.roughnessMap,He=T.anisotropy>0,Rt=T.clearcoat>0,Qe=T.dispersion>0,D=T.iridescence>0,E=T.sheen>0,J=T.transmission>0,_t=He&&!!T.anisotropyMap,Et=Rt&&!!T.clearcoatMap,Ct=Rt&&!!T.clearcoatNormalMap,Nt=Rt&&!!T.clearcoatRoughnessMap,ut=D&&!!T.iridescenceMap,ht=D&&!!T.iridescenceThicknessMap,Ot=E&&!!T.sheenColorMap,Pt=E&&!!T.sheenRoughnessMap,Ut=!!T.specularMap,wt=!!T.specularColorMap,ne=!!T.specularIntensityMap,ie=J&&!!T.transmissionMap,me=J&&!!T.thicknessMap,k=!!T.gradientMap,Tt=!!T.alphaMap,pt=T.alphaTest>0,Bt=!!T.alphaHash,Lt=!!T.extensions;let yt=qi;T.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(yt=r.toneMapping);const qt={shaderID:St,shaderType:T.type,shaderName:T.name,vertexShader:At,fragmentShader:Dt,defines:T.defines,customVertexShaderID:ot,customFragmentShaderID:Mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&j._colorsTexture!==null,instancing:te,instancingColor:te&&j.instanceColor!==null,instancingMorph:te&&j.morphTexture!==null,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:We,matcap:he,envMap:Se,envMapMode:Se&&tt.mapping,envMapCubeUVHeight:mt,aoMap:Ne,lightMap:ce,bumpMap:ln,normalMap:je,displacementMap:An,emissiveMap:q,normalMapObjectSpace:je&&T.normalMapType===oy,normalMapTangentSpace:je&&T.normalMapType===qd,packedNormalMap:je&&T.normalMapType===qd&&CA(T.normalMap.format),metalnessMap:en,roughnessMap:de,anisotropy:He,anisotropyMap:_t,clearcoat:Rt,clearcoatMap:Et,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Nt,dispersion:Qe,iridescence:D,iridescenceMap:ut,iridescenceThicknessMap:ht,sheen:E,sheenColorMap:Ot,sheenRoughnessMap:Pt,specularMap:Ut,specularColorMap:wt,specularIntensityMap:ne,transmission:J,transmissionMap:ie,thicknessMap:me,gradientMap:k,opaque:T.transparent===!1&&T.blending===Gr&&T.alphaToCoverage===!1,alphaMap:Tt,alphaTest:pt,alphaHash:Bt,combine:T.combine,mapUv:We&&b(T.map.channel),aoMapUv:Ne&&b(T.aoMap.channel),lightMapUv:ce&&b(T.lightMap.channel),bumpMapUv:ln&&b(T.bumpMap.channel),normalMapUv:je&&b(T.normalMap.channel),displacementMapUv:An&&b(T.displacementMap.channel),emissiveMapUv:q&&b(T.emissiveMap.channel),metalnessMapUv:en&&b(T.metalnessMap.channel),roughnessMapUv:de&&b(T.roughnessMap.channel),anisotropyMapUv:_t&&b(T.anisotropyMap.channel),clearcoatMapUv:Et&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(T.sheenRoughnessMap.channel),specularMapUv:Ut&&b(T.specularMap.channel),specularColorMapUv:wt&&b(T.specularColorMap.channel),specularIntensityMapUv:ne&&b(T.specularIntensityMap.channel),transmissionMapUv:ie&&b(T.transmissionMap.channel),thicknessMapUv:me&&b(T.thicknessMap.channel),alphaMapUv:Tt&&b(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(je||He),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!W.attributes.uv&&(We||Tt),fog:!!ct,useFog:T.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&je===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:j.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:yt,decodeVideoTexture:We&&T.map.isVideoTexture===!0&&be.getTransfer(T.map.colorSpace)===ze,decodeVideoTextureEmissive:q&&T.emissiveMap.isVideoTexture===!0&&be.getTransfer(T.emissiveMap.colorSpace)===ze,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Sa,flipSided:T.side===Qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Lt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&T.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function M(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)O.push(Y),O.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(S(O,T),w(O,T),O.push(r.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function S(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function w(T,O){h.disableAll(),O.instancing&&h.enable(0),O.instancingColor&&h.enable(1),O.instancingMorph&&h.enable(2),O.matcap&&h.enable(3),O.envMap&&h.enable(4),O.normalMapObjectSpace&&h.enable(5),O.normalMapTangentSpace&&h.enable(6),O.clearcoat&&h.enable(7),O.iridescence&&h.enable(8),O.alphaTest&&h.enable(9),O.vertexColors&&h.enable(10),O.vertexAlphas&&h.enable(11),O.vertexUv1s&&h.enable(12),O.vertexUv2s&&h.enable(13),O.vertexUv3s&&h.enable(14),O.vertexTangents&&h.enable(15),O.anisotropy&&h.enable(16),O.alphaHash&&h.enable(17),O.batching&&h.enable(18),O.dispersion&&h.enable(19),O.batchingColor&&h.enable(20),O.gradientMap&&h.enable(21),O.packedNormalMap&&h.enable(22),O.vertexNormals&&h.enable(23),T.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.reversedDepthBuffer&&h.enable(4),O.skinning&&h.enable(5),O.morphTargets&&h.enable(6),O.morphNormals&&h.enable(7),O.morphColors&&h.enable(8),O.premultipliedAlpha&&h.enable(9),O.shadowMapEnabled&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),O.decodeVideoTexture&&h.enable(19),O.decodeVideoTextureEmissive&&h.enable(20),O.alphaToCoverage&&h.enable(21),O.numLightProbeGrids>0&&h.enable(22),T.push(h.mask)}function N(T){const O=y[T.type];let Y;if(O){const B=ki[O];Y=Wy.clone(B.uniforms)}else Y=T.uniforms;return Y}function P(T,O){let Y=_.get(O);return Y!==void 0?++Y.usedTimes:(Y=new bA(r,O,T,l),d.push(Y),_.set(O,Y)),Y}function G(T){if(--T.usedTimes===0){const O=d.indexOf(T);d[O]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function U(T){p.remove(T)}function F(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:N,acquireProgram:P,releaseProgram:G,releaseShaderCache:U,programs:d,dispose:F}}function DA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function UA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function fv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function hv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,b,C,M,S){let w=r[t];return w===void 0?(w={id:g.id,object:g,geometry:y,material:b,materialVariant:h(g),groupOrder:C,renderOrder:g.renderOrder,z:M,group:S},r[t]=w):(w.id=g.id,w.object=g,w.geometry=y,w.material=b,w.materialVariant=h(g),w.groupOrder=C,w.renderOrder=g.renderOrder,w.z=M,w.group=S),t++,w}function m(g,y,b,C,M,S){const w=p(g,y,b,C,M,S);b.transmission>0?s.push(w):b.transparent===!0?l.push(w):i.push(w)}function d(g,y,b,C,M,S){const w=p(g,y,b,C,M,S);b.transmission>0?s.unshift(w):b.transparent===!0?l.unshift(w):i.unshift(w)}function _(g,y){i.length>1&&i.sort(g||UA),s.length>1&&s.sort(y||fv),l.length>1&&l.sort(y||fv)}function v(){for(let g=t,y=r.length;g<y;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:v,sort:_}}function LA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new hv,r.set(s,[h])):l>=c.length?(h=new hv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function NA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new pe};break;case"SpotLight":i={position:new Q,direction:new Q,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":i={color:new pe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function OA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let PA=0;function FA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function IA(r){const t=new NA,i=OA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new Q);const l=new Q,c=new on,h=new on;function p(d){let _=0,v=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,b=0,C=0,M=0,S=0,w=0,N=0,P=0,G=0,U=0,F=0;d.sort(FA);for(let O=0,Y=d.length;O<Y;O++){const B=d[O],j=B.color,V=B.intensity,ct=B.distance;let W=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Xs?W=B.shadow.map.texture:W=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)_+=j.r*V,v+=j.g*V,g+=j.b*V;else if(B.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(B.sh.coefficients[L],V);F++}else if(B.isDirectionalLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const z=B.shadow,tt=i.get(B);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,s.directionalShadow[y]=tt,s.directionalShadowMap[y]=W,s.directionalShadowMatrix[y]=B.shadow.matrix,w++}s.directional[y]=L,y++}else if(B.isSpotLight){const L=t.get(B);L.position.setFromMatrixPosition(B.matrixWorld),L.color.copy(j).multiplyScalar(V),L.distance=ct,L.coneCos=Math.cos(B.angle),L.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),L.decay=B.decay,s.spot[C]=L;const z=B.shadow;if(B.map&&(s.spotLightMap[G]=B.map,G++,z.updateMatrices(B),B.castShadow&&U++),s.spotLightMatrix[C]=z.matrix,B.castShadow){const tt=i.get(B);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,s.spotShadow[C]=tt,s.spotShadowMap[C]=W,P++}C++}else if(B.isRectAreaLight){const L=t.get(B);L.color.copy(j).multiplyScalar(V),L.halfWidth.set(B.width*.5,0,0),L.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=L,M++}else if(B.isPointLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),L.distance=B.distance,L.decay=B.decay,B.castShadow){const z=B.shadow,tt=i.get(B);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,tt.shadowCameraNear=z.camera.near,tt.shadowCameraFar=z.camera.far,s.pointShadow[b]=tt,s.pointShadowMap[b]=W,s.pointShadowMatrix[b]=B.shadow.matrix,N++}s.point[b]=L,b++}else if(B.isHemisphereLight){const L=t.get(B);L.skyColor.copy(B.color).multiplyScalar(V),L.groundColor.copy(B.groundColor).multiplyScalar(V),s.hemi[S]=L,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==y||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==M||T.hemiLength!==S||T.numDirectionalShadows!==w||T.numPointShadows!==N||T.numSpotShadows!==P||T.numSpotMaps!==G||T.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=P+G-U,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=F,T.directionalLength=y,T.pointLength=b,T.spotLength=C,T.rectAreaLength=M,T.hemiLength=S,T.numDirectionalShadows=w,T.numPointShadows=N,T.numSpotShadows=P,T.numSpotMaps=G,T.numLightProbes=F,s.version=PA++)}function m(d,_){let v=0,g=0,y=0,b=0,C=0;const M=_.matrixWorldInverse;for(let S=0,w=d.length;S<w;S++){const N=d[S];if(N.isDirectionalLight){const P=s.directional[v];P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),v++}else if(N.isSpotLight){const P=s.spot[y];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const P=s.rectArea[b];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(h),P.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const P=s.point[g];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),g++}else if(N.isHemisphereLight){const P=s.hemi[C];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(M),C++}}}return{setup:p,setupView:m,state:s}}function dv(r){const t=new IA(r),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){t.setup(i)}function _(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:d,setupLightsView:_,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function BA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new dv(r),t.set(l,[p])):c>=h.length?(p=new dv(r),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const zA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,GA=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],VA=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],pv=new on,Qo=new Q,nd=new Q;function kA(r,t,i){let s=new fp;const l=new le,c=new le,h=new rn,p=new Zy,m=new Ky,d={},_=i.maxTextureSize,v={[fs]:Qn,[Qn]:fs,[Sa]:Sa},g=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:zA,fragmentShader:HA}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const b=new pi;b.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new mi(b,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let S=this.type;this.render=function(U,F,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===tp&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=qc);const O=r.getRenderTarget(),Y=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),j=r.state;j.setBlending(ya),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=S!==this.type;V&&F.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(W=>W.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,W=U.length;ct<W;ct++){const L=U[ct],z=L.shadow;if(z===void 0){Jt("WebGLShadowMap:",L,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const tt=z.getFrameExtents();l.multiply(tt),c.copy(z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/tt.x),l.x=c.x*tt.x,z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/tt.y),l.y=c.y*tt.y,z.mapSize.y=c.y));const mt=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=mt,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Jo){if(L.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Yi(l.x,l.y,{format:Xs,type:ba,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),z.map.texture.name=L.name+".shadowMap",z.map.depthTexture=new Wr(l.x,l.y,Xi),z.map.depthTexture.name=L.name+".shadowMapDepth",z.map.depthTexture.format=Ta,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ln,z.map.depthTexture.magFilter=Ln}else L.isPointLight?(z.map=new ix(l.x),z.map.depthTexture=new ky(l.x,ji)):(z.map=new Yi(l.x,l.y),z.map.depthTexture=new Wr(l.x,l.y,ji)),z.map.depthTexture.name=L.name+".shadowMap",z.map.depthTexture.format=Ta,this.type===qc?(z.map.depthTexture.compareFunction=mt?lp:op,z.map.depthTexture.minFilter=Bn,z.map.depthTexture.magFilter=Bn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ln,z.map.depthTexture.magFilter=Ln);z.camera.updateProjectionMatrix()}const St=z.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<St;I++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,I),r.clear();else{I===0&&(r.setRenderTarget(z.map),r.clear());const $=z.getViewport(I);h.set(c.x*$.x,c.y*$.y,c.x*$.z,c.y*$.w),j.viewport(h)}if(L.isPointLight){const $=z.camera,xt=z.matrix,At=L.distance||$.far;At!==$.far&&($.far=At,$.updateProjectionMatrix()),Qo.setFromMatrixPosition(L.matrixWorld),$.position.copy(Qo),nd.copy($.position),nd.add(GA[I]),$.up.copy(VA[I]),$.lookAt(nd),$.updateMatrixWorld(),xt.makeTranslation(-Qo.x,-Qo.y,-Qo.z),pv.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),z._frustum.setFromProjectionMatrix(pv,$.coordinateSystem,$.reversedDepth)}else z.updateMatrices(L);s=z.getFrustum(),P(F,T,z.camera,L,this.type)}z.isPointLightShadow!==!0&&this.type===Jo&&w(z,T),z.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(O,Y,B)};function w(U,F){const T=t.update(C);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Yi(l.x,l.y,{format:Xs,type:ba})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(F,null,T,g,C,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(F,null,T,y,C,null)}function N(U,F,T,O){let Y=null;const B=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)Y=B;else if(Y=T.isPointLight===!0?m:p,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=Y.uuid,V=F.uuid;let ct=d[j];ct===void 0&&(ct={},d[j]=ct);let W=ct[V];W===void 0&&(W=Y.clone(),ct[V]=W,F.addEventListener("dispose",G)),Y=W}if(Y.visible=F.visible,Y.wireframe=F.wireframe,O===Jo?Y.side=F.shadowSide!==null?F.shadowSide:F.side:Y.side=F.shadowSide!==null?F.shadowSide:v[F.side],Y.alphaMap=F.alphaMap,Y.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Y.map=F.map,Y.clipShadows=F.clipShadows,Y.clippingPlanes=F.clippingPlanes,Y.clipIntersection=F.clipIntersection,Y.displacementMap=F.displacementMap,Y.displacementScale=F.displacementScale,Y.displacementBias=F.displacementBias,Y.wireframeLinewidth=F.wireframeLinewidth,Y.linewidth=F.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const j=r.properties.get(Y);j.light=T}return Y}function P(U,F,T,O,Y){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&Y===Jo)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const V=t.update(U),ct=U.material;if(Array.isArray(ct)){const W=V.groups;for(let L=0,z=W.length;L<z;L++){const tt=W[L],mt=ct[tt.materialIndex];if(mt&&mt.visible){const St=N(U,mt,O,Y);U.onBeforeShadow(r,U,F,T,V,St,tt),r.renderBufferDirect(T,null,V,St,U,tt),U.onAfterShadow(r,U,F,T,V,St,tt)}}}else if(ct.visible){const W=N(U,ct,O,Y);U.onBeforeShadow(r,U,F,T,V,W,null),r.renderBufferDirect(T,null,V,W,U,null),U.onAfterShadow(r,U,F,T,V,W,null)}}const j=U.children;for(let V=0,ct=j.length;V<ct;V++)P(j[V],F,T,O,Y)}function G(U){U.target.removeEventListener("dispose",G);for(const T in d){const O=d[T],Y=U.target.uuid;Y in O&&(O[Y].dispose(),delete O[Y])}}}function XA(r,t){function i(){let k=!1;const Tt=new rn;let pt=null;const Bt=new rn(0,0,0,0);return{setMask:function(Lt){pt!==Lt&&!k&&(r.colorMask(Lt,Lt,Lt,Lt),pt=Lt)},setLocked:function(Lt){k=Lt},setClear:function(Lt,yt,qt,ee,nn){nn===!0&&(Lt*=ee,yt*=ee,qt*=ee),Tt.set(Lt,yt,qt,ee),Bt.equals(Tt)===!1&&(r.clearColor(Lt,yt,qt,ee),Bt.copy(Tt))},reset:function(){k=!1,pt=null,Bt.set(-1,0,0,0)}}}function s(){let k=!1,Tt=!1,pt=null,Bt=null,Lt=null;return{setReversed:function(yt){if(Tt!==yt){const qt=t.get("EXT_clip_control");yt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Tt=yt;const ee=Lt;Lt=null,this.setClear(ee)}},getReversed:function(){return Tt},setTest:function(yt){yt?bt(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(yt){pt!==yt&&!k&&(r.depthMask(yt),pt=yt)},setFunc:function(yt){if(Tt&&(yt=_y[yt]),Bt!==yt){switch(yt){case od:r.depthFunc(r.NEVER);break;case ld:r.depthFunc(r.ALWAYS);break;case cd:r.depthFunc(r.LESS);break;case kr:r.depthFunc(r.LEQUAL);break;case ud:r.depthFunc(r.EQUAL);break;case fd:r.depthFunc(r.GEQUAL);break;case hd:r.depthFunc(r.GREATER);break;case dd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=yt}},setLocked:function(yt){k=yt},setClear:function(yt){Lt!==yt&&(Lt=yt,Tt&&(yt=1-yt),r.clearDepth(yt))},reset:function(){k=!1,pt=null,Bt=null,Lt=null,Tt=!1}}}function l(){let k=!1,Tt=null,pt=null,Bt=null,Lt=null,yt=null,qt=null,ee=null,nn=null;return{setTest:function(De){k||(De?bt(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(De){Tt!==De&&!k&&(r.stencilMask(De),Tt=De)},setFunc:function(De,gi,$n){(pt!==De||Bt!==gi||Lt!==$n)&&(r.stencilFunc(De,gi,$n),pt=De,Bt=gi,Lt=$n)},setOp:function(De,gi,$n){(yt!==De||qt!==gi||ee!==$n)&&(r.stencilOp(De,gi,$n),yt=De,qt=gi,ee=$n)},setLocked:function(De){k=De},setClear:function(De){nn!==De&&(r.clearStencil(De),nn=De)},reset:function(){k=!1,Tt=null,pt=null,Bt=null,Lt=null,yt=null,qt=null,ee=null,nn=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let _={},v={},g={},y=new WeakMap,b=[],C=null,M=!1,S=null,w=null,N=null,P=null,G=null,U=null,F=null,T=new pe(0,0,0),O=0,Y=!1,B=null,j=null,V=null,ct=null,W=null;const L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,tt=0;const mt=r.getParameter(r.VERSION);mt.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(mt)[1]),z=tt>=1):mt.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),z=tt>=2);let St=null,I={};const $=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),At=new rn().fromArray($),Dt=new rn().fromArray(xt);function ot(k,Tt,pt,Bt){const Lt=new Uint8Array(4),yt=r.createTexture();r.bindTexture(k,yt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<pt;qt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(Tt+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return yt}const Mt={};Mt[r.TEXTURE_2D]=ot(r.TEXTURE_2D,r.TEXTURE_2D,1),Mt[r.TEXTURE_CUBE_MAP]=ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[r.TEXTURE_2D_ARRAY]=ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Mt[r.TEXTURE_3D]=ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),bt(r.DEPTH_TEST),h.setFunc(kr),ln(!1),je(c0),bt(r.CULL_FACE),Ne(ya);function bt(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function Ht(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function te(k,Tt){return g[k]!==Tt?(r.bindFramebuffer(k,Tt),g[k]=Tt,k===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Tt),k===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Qt(k,Tt){let pt=b,Bt=!1;if(k){pt=y.get(Tt),pt===void 0&&(pt=[],y.set(Tt,pt));const Lt=k.textures;if(pt.length!==Lt.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,qt=Lt.length;yt<qt;yt++)pt[yt]=r.COLOR_ATTACHMENT0+yt;pt.length=Lt.length,Bt=!0}}else pt[0]!==r.BACK&&(pt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(pt)}function We(k){return C!==k?(r.useProgram(k),C=k,!0):!1}const he={[Bs]:r.FUNC_ADD,[HM]:r.FUNC_SUBTRACT,[GM]:r.FUNC_REVERSE_SUBTRACT};he[VM]=r.MIN,he[kM]=r.MAX;const Se={[XM]:r.ZERO,[WM]:r.ONE,[qM]:r.SRC_COLOR,[sd]:r.SRC_ALPHA,[JM]:r.SRC_ALPHA_SATURATE,[KM]:r.DST_COLOR,[jM]:r.DST_ALPHA,[YM]:r.ONE_MINUS_SRC_COLOR,[rd]:r.ONE_MINUS_SRC_ALPHA,[QM]:r.ONE_MINUS_DST_COLOR,[ZM]:r.ONE_MINUS_DST_ALPHA,[$M]:r.CONSTANT_COLOR,[ty]:r.ONE_MINUS_CONSTANT_COLOR,[ey]:r.CONSTANT_ALPHA,[ny]:r.ONE_MINUS_CONSTANT_ALPHA};function Ne(k,Tt,pt,Bt,Lt,yt,qt,ee,nn,De){if(k===ya){M===!0&&(Ht(r.BLEND),M=!1);return}if(M===!1&&(bt(r.BLEND),M=!0),k!==zM){if(k!==S||De!==Y){if((w!==Bs||G!==Bs)&&(r.blendEquation(r.FUNC_ADD),w=Bs,G=Bs),De)switch(k){case Gr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case u0:r.blendFunc(r.ONE,r.ONE);break;case f0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case h0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Te("WebGLState: Invalid blending: ",k);break}else switch(k){case Gr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case u0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case f0:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case h0:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",k);break}N=null,P=null,U=null,F=null,T.set(0,0,0),O=0,S=k,Y=De}return}Lt=Lt||Tt,yt=yt||pt,qt=qt||Bt,(Tt!==w||Lt!==G)&&(r.blendEquationSeparate(he[Tt],he[Lt]),w=Tt,G=Lt),(pt!==N||Bt!==P||yt!==U||qt!==F)&&(r.blendFuncSeparate(Se[pt],Se[Bt],Se[yt],Se[qt]),N=pt,P=Bt,U=yt,F=qt),(ee.equals(T)===!1||nn!==O)&&(r.blendColor(ee.r,ee.g,ee.b,nn),T.copy(ee),O=nn),S=k,Y=!1}function ce(k,Tt){k.side===Sa?Ht(r.CULL_FACE):bt(r.CULL_FACE);let pt=k.side===Qn;Tt&&(pt=!pt),ln(pt),k.blending===Gr&&k.transparent===!1?Ne(ya):Ne(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Bt=k.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function ln(k){B!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),B=k)}function je(k){k!==IM?(bt(r.CULL_FACE),k!==j&&(k===c0?r.cullFace(r.BACK):k===BM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),j=k}function An(k){k!==V&&(z&&r.lineWidth(k),V=k)}function q(k,Tt,pt){k?(bt(r.POLYGON_OFFSET_FILL),(ct!==Tt||W!==pt)&&(ct=Tt,W=pt,h.getReversed()&&(Tt=-Tt),r.polygonOffset(Tt,pt))):Ht(r.POLYGON_OFFSET_FILL)}function en(k){k?bt(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function de(k){k===void 0&&(k=r.TEXTURE0+L-1),St!==k&&(r.activeTexture(k),St=k)}function He(k,Tt,pt){pt===void 0&&(St===null?pt=r.TEXTURE0+L-1:pt=St);let Bt=I[pt];Bt===void 0&&(Bt={type:void 0,texture:void 0},I[pt]=Bt),(Bt.type!==k||Bt.texture!==Tt)&&(St!==pt&&(r.activeTexture(pt),St=pt),r.bindTexture(k,Tt||Mt[k]),Bt.type=k,Bt.texture=Tt)}function Rt(){const k=I[St];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Qe(){try{r.compressedTexImage2D(...arguments)}catch(k){Te("WebGLState:",k)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(k){Te("WebGLState:",k)}}function E(){try{r.texSubImage2D(...arguments)}catch(k){Te("WebGLState:",k)}}function J(){try{r.texSubImage3D(...arguments)}catch(k){Te("WebGLState:",k)}}function _t(){try{r.compressedTexSubImage2D(...arguments)}catch(k){Te("WebGLState:",k)}}function Et(){try{r.compressedTexSubImage3D(...arguments)}catch(k){Te("WebGLState:",k)}}function Ct(){try{r.texStorage2D(...arguments)}catch(k){Te("WebGLState:",k)}}function Nt(){try{r.texStorage3D(...arguments)}catch(k){Te("WebGLState:",k)}}function ut(){try{r.texImage2D(...arguments)}catch(k){Te("WebGLState:",k)}}function ht(){try{r.texImage3D(...arguments)}catch(k){Te("WebGLState:",k)}}function Ot(k){return v[k]!==void 0?v[k]:r.getParameter(k)}function Pt(k,Tt){v[k]!==Tt&&(r.pixelStorei(k,Tt),v[k]=Tt)}function Ut(k){At.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),At.copy(k))}function wt(k){Dt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Dt.copy(k))}function ne(k,Tt){let pt=d.get(Tt);pt===void 0&&(pt=new WeakMap,d.set(Tt,pt));let Bt=pt.get(k);Bt===void 0&&(Bt=r.getUniformBlockIndex(Tt,k.name),pt.set(k,Bt))}function ie(k,Tt){const Bt=d.get(Tt).get(k);m.get(Tt)!==Bt&&(r.uniformBlockBinding(Tt,Bt,k.__bindingPointIndex),m.set(Tt,Bt))}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},St=null,I={},g={},y=new WeakMap,b=[],C=null,M=!1,S=null,w=null,N=null,P=null,G=null,U=null,F=null,T=new pe(0,0,0),O=0,Y=!1,B=null,j=null,V=null,ct=null,W=null,At.set(0,0,r.canvas.width,r.canvas.height),Dt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:bt,disable:Ht,bindFramebuffer:te,drawBuffers:Qt,useProgram:We,setBlending:Ne,setMaterial:ce,setFlipSided:ln,setCullFace:je,setLineWidth:An,setPolygonOffset:q,setScissorTest:en,activeTexture:de,bindTexture:He,unbindTexture:Rt,compressedTexImage2D:Qe,compressedTexImage3D:D,texImage2D:ut,texImage3D:ht,pixelStorei:Pt,getParameter:Ot,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:Ct,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:_t,compressedTexSubImage3D:Et,scissor:Ut,viewport:wt,reset:me}}function WA(r,t,i,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new le,_=new WeakMap,v=new Set;let g;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,E){return b?new OffscreenCanvas(D,E):nu("canvas")}function M(D,E,J){let _t=1;const Et=Qe(D);if((Et.width>J||Et.height>J)&&(_t=J/Math.max(Et.width,Et.height)),_t<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ct=Math.floor(_t*Et.width),Nt=Math.floor(_t*Et.height);g===void 0&&(g=C(Ct,Nt));const ut=E?C(Ct,Nt):g;return ut.width=Ct,ut.height=Nt,ut.getContext("2d").drawImage(D,0,0,Ct,Nt),Jt("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+Ct+"x"+Nt+")."),ut}else return"data"in D&&Jt("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),D;return D}function S(D){return D.generateMipmaps}function w(D){r.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,E,J,_t,Et,Ct=!1){if(D!==null){if(r[D]!==void 0)return r[D];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Nt;_t&&(Nt=t.get("EXT_texture_norm16"),Nt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=E;if(E===r.RED&&(J===r.FLOAT&&(ut=r.R32F),J===r.HALF_FLOAT&&(ut=r.R16F),J===r.UNSIGNED_BYTE&&(ut=r.R8),J===r.UNSIGNED_SHORT&&Nt&&(ut=Nt.R16_EXT),J===r.SHORT&&Nt&&(ut=Nt.R16_SNORM_EXT)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.R8UI),J===r.UNSIGNED_SHORT&&(ut=r.R16UI),J===r.UNSIGNED_INT&&(ut=r.R32UI),J===r.BYTE&&(ut=r.R8I),J===r.SHORT&&(ut=r.R16I),J===r.INT&&(ut=r.R32I)),E===r.RG&&(J===r.FLOAT&&(ut=r.RG32F),J===r.HALF_FLOAT&&(ut=r.RG16F),J===r.UNSIGNED_BYTE&&(ut=r.RG8),J===r.UNSIGNED_SHORT&&Nt&&(ut=Nt.RG16_EXT),J===r.SHORT&&Nt&&(ut=Nt.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.RG8UI),J===r.UNSIGNED_SHORT&&(ut=r.RG16UI),J===r.UNSIGNED_INT&&(ut=r.RG32UI),J===r.BYTE&&(ut=r.RG8I),J===r.SHORT&&(ut=r.RG16I),J===r.INT&&(ut=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),J===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),J===r.UNSIGNED_INT&&(ut=r.RGB32UI),J===r.BYTE&&(ut=r.RGB8I),J===r.SHORT&&(ut=r.RGB16I),J===r.INT&&(ut=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),J===r.UNSIGNED_INT&&(ut=r.RGBA32UI),J===r.BYTE&&(ut=r.RGBA8I),J===r.SHORT&&(ut=r.RGBA16I),J===r.INT&&(ut=r.RGBA32I)),E===r.RGB&&(J===r.UNSIGNED_SHORT&&Nt&&(ut=Nt.RGB16_EXT),J===r.SHORT&&Nt&&(ut=Nt.RGB16_SNORM_EXT),J===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),E===r.RGBA){const ht=Ct?eu:be.getTransfer(Et);J===r.FLOAT&&(ut=r.RGBA32F),J===r.HALF_FLOAT&&(ut=r.RGBA16F),J===r.UNSIGNED_BYTE&&(ut=ht===ze?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT&&Nt&&(ut=Nt.RGBA16_EXT),J===r.SHORT&&Nt&&(ut=Nt.RGBA16_SNORM_EXT),J===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function G(D,E){let J;return D?E===null||E===ji||E===nl?J=r.DEPTH24_STENCIL8:E===Xi?J=r.DEPTH32F_STENCIL8:E===el&&(J=r.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===nl?J=r.DEPTH_COMPONENT24:E===Xi?J=r.DEPTH_COMPONENT32F:E===el&&(J=r.DEPTH_COMPONENT16),J}function U(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ln&&D.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function F(D){const E=D.target;E.removeEventListener("dispose",F),O(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),B(E)}function O(D){const E=s.get(D);if(E.__webglInit===void 0)return;const J=D.source,_t=y.get(J);if(_t){const Et=_t[E.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&Y(D),Object.keys(_t).length===0&&y.delete(J)}s.remove(D)}function Y(D){const E=s.get(D);r.deleteTexture(E.__webglTexture);const J=D.source,_t=y.get(J);delete _t[E.__cacheKey],h.memory.textures--}function B(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(E.__webglFramebuffer[_t]))for(let Et=0;Et<E.__webglFramebuffer[_t].length;Et++)r.deleteFramebuffer(E.__webglFramebuffer[_t][Et]);else r.deleteFramebuffer(E.__webglFramebuffer[_t]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[_t])}else{if(Array.isArray(E.__webglFramebuffer))for(let _t=0;_t<E.__webglFramebuffer.length;_t++)r.deleteFramebuffer(E.__webglFramebuffer[_t]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _t=0;_t<E.__webglColorRenderbuffer.length;_t++)E.__webglColorRenderbuffer[_t]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[_t]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=D.textures;for(let _t=0,Et=J.length;_t<Et;_t++){const Ct=s.get(J[_t]);Ct.__webglTexture&&(r.deleteTexture(Ct.__webglTexture),h.memory.textures--),s.remove(J[_t])}s.remove(D)}let j=0;function V(){j=0}function ct(){return j}function W(D){j=D}function L(){const D=j;return D>=l.maxTextures&&Jt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),j+=1,D}function z(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function tt(D,E){const J=s.get(D);if(D.isVideoTexture&&He(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const _t=D.image;if(_t===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(J,D,E);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function mt(D,E){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Ht(J,D,E);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function St(D,E){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Ht(J,D,E);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function I(D,E){const J=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){te(J,D,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const $={[pd]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[md]:r.MIRRORED_REPEAT},xt={[Ln]:r.NEAREST,[sy]:r.NEAREST_MIPMAP_NEAREST,[_c]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[bh]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},At={[ly]:r.NEVER,[dy]:r.ALWAYS,[cy]:r.LESS,[op]:r.LEQUAL,[uy]:r.EQUAL,[lp]:r.GEQUAL,[fy]:r.GREATER,[hy]:r.NOTEQUAL};function Dt(D,E){if(E.type===Xi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===bh||E.magFilter===_c||E.magFilter===Hs||E.minFilter===Bn||E.minFilter===bh||E.minFilter===_c||E.minFilter===Hs)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,$[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,$[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,$[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,xt[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==_c&&E.minFilter!==Hs||E.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function ot(D,E){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",F));const _t=E.source;let Et=y.get(_t);Et===void 0&&(Et={},y.set(_t,Et));const Ct=z(E);if(Ct!==D.__cacheKey){Et[Ct]===void 0&&(Et[Ct]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,J=!0),Et[Ct].usedTimes++;const Nt=Et[D.__cacheKey];Nt!==void 0&&(Et[D.__cacheKey].usedTimes--,Nt.usedTimes===0&&Y(E)),D.__cacheKey=Ct,D.__webglTexture=Et[Ct].texture}return J}function Mt(D,E,J){return Math.floor(Math.floor(D/J)/E)}function bt(D,E,J,_t){const Ct=D.updateRanges;if(Ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,J,_t,E.data);else{Ct.sort((Pt,Ut)=>Pt.start-Ut.start);let Nt=0;for(let Pt=1;Pt<Ct.length;Pt++){const Ut=Ct[Nt],wt=Ct[Pt],ne=Ut.start+Ut.count,ie=Mt(wt.start,E.width,4),me=Mt(Ut.start,E.width,4);wt.start<=ne+1&&ie===me&&Mt(wt.start+wt.count-1,E.width,4)===ie?Ut.count=Math.max(Ut.count,wt.start+wt.count-Ut.start):(++Nt,Ct[Nt]=wt)}Ct.length=Nt+1;const ut=i.getParameter(r.UNPACK_ROW_LENGTH),ht=i.getParameter(r.UNPACK_SKIP_PIXELS),Ot=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Pt=0,Ut=Ct.length;Pt<Ut;Pt++){const wt=Ct[Pt],ne=Math.floor(wt.start/4),ie=Math.ceil(wt.count/4),me=ne%E.width,k=Math.floor(ne/E.width),Tt=ie,pt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,me),i.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,me,k,Tt,pt,J,_t,E.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ut),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ot)}}function Ht(D,E,J){let _t=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_t=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_t=r.TEXTURE_3D);const Et=ot(D,E),Ct=E.source;i.bindTexture(_t,D.__webglTexture,r.TEXTURE0+J);const Nt=s.get(Ct);if(Ct.version!==Nt.__version||Et===!0){if(i.activeTexture(r.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pt=be.getPrimaries(be.workingColorSpace),Bt=E.colorSpace===ls?null:be.getPrimaries(E.colorSpace),Lt=E.colorSpace===ls||pt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let ht=M(E.image,!1,l.maxTextureSize);ht=Rt(E,ht);const Ot=c.convert(E.format,E.colorSpace),Pt=c.convert(E.type);let Ut=P(E.internalFormat,Ot,Pt,E.normalized,E.colorSpace,E.isVideoTexture);Dt(_t,E);let wt;const ne=E.mipmaps,ie=E.isVideoTexture!==!0,me=Nt.__version===void 0||Et===!0,k=Ct.dataReady,Tt=U(E,ht);if(E.isDepthTexture)Ut=G(E.format===Gs,E.type),me&&(ie?i.texStorage2D(r.TEXTURE_2D,1,Ut,ht.width,ht.height):i.texImage2D(r.TEXTURE_2D,0,Ut,ht.width,ht.height,0,Ot,Pt,null));else if(E.isDataTexture)if(ne.length>0){ie&&me&&i.texStorage2D(r.TEXTURE_2D,Tt,Ut,ne[0].width,ne[0].height);for(let pt=0,Bt=ne.length;pt<Bt;pt++)wt=ne[pt],ie?k&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,wt.width,wt.height,Ot,Pt,wt.data):i.texImage2D(r.TEXTURE_2D,pt,Ut,wt.width,wt.height,0,Ot,Pt,wt.data);E.generateMipmaps=!1}else ie?(me&&i.texStorage2D(r.TEXTURE_2D,Tt,Ut,ht.width,ht.height),k&&bt(E,ht,Ot,Pt)):i.texImage2D(r.TEXTURE_2D,0,Ut,ht.width,ht.height,0,Ot,Pt,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&me&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Ut,ne[0].width,ne[0].height,ht.depth);for(let pt=0,Bt=ne.length;pt<Bt;pt++)if(wt=ne[pt],E.format!==Pi)if(Ot!==null)if(ie){if(k)if(E.layerUpdates.size>0){const Lt=W0(wt.width,wt.height,E.format,E.type);for(const yt of E.layerUpdates){const qt=wt.data.subarray(yt*Lt/wt.data.BYTES_PER_ELEMENT,(yt+1)*Lt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,yt,wt.width,wt.height,1,Ot,qt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,ht.depth,Ot,wt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pt,Ut,wt.width,wt.height,ht.depth,0,wt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,ht.depth,Ot,Pt,wt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,pt,Ut,wt.width,wt.height,ht.depth,0,Ot,Pt,wt.data)}else{ie&&me&&i.texStorage2D(r.TEXTURE_2D,Tt,Ut,ne[0].width,ne[0].height);for(let pt=0,Bt=ne.length;pt<Bt;pt++)wt=ne[pt],E.format!==Pi?Ot!==null?ie?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,pt,0,0,wt.width,wt.height,Ot,wt.data):i.compressedTexImage2D(r.TEXTURE_2D,pt,Ut,wt.width,wt.height,0,wt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?k&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,wt.width,wt.height,Ot,Pt,wt.data):i.texImage2D(r.TEXTURE_2D,pt,Ut,wt.width,wt.height,0,Ot,Pt,wt.data)}else if(E.isDataArrayTexture)if(ie){if(me&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,Ut,ht.width,ht.height,ht.depth),k)if(E.layerUpdates.size>0){const pt=W0(ht.width,ht.height,E.format,E.type);for(const Bt of E.layerUpdates){const Lt=ht.data.subarray(Bt*pt/ht.data.BYTES_PER_ELEMENT,(Bt+1)*pt/ht.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Bt,ht.width,ht.height,1,Ot,Pt,Lt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Ot,Pt,ht.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ut,ht.width,ht.height,ht.depth,0,Ot,Pt,ht.data);else if(E.isData3DTexture)ie?(me&&i.texStorage3D(r.TEXTURE_3D,Tt,Ut,ht.width,ht.height,ht.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Ot,Pt,ht.data)):i.texImage3D(r.TEXTURE_3D,0,Ut,ht.width,ht.height,ht.depth,0,Ot,Pt,ht.data);else if(E.isFramebufferTexture){if(me)if(ie)i.texStorage2D(r.TEXTURE_2D,Tt,Ut,ht.width,ht.height);else{let pt=ht.width,Bt=ht.height;for(let Lt=0;Lt<Tt;Lt++)i.texImage2D(r.TEXTURE_2D,Lt,Ut,pt,Bt,0,Ot,Pt,null),pt>>=1,Bt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const pt=r.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ht.parentNode!==pt){pt.appendChild(ht),v.add(E),pt.onpaint=ee=>{const nn=ee.changedElements;for(const De of v)nn.includes(De.image)&&(De.needsUpdate=!0)},pt.requestPaint();return}const Bt=0,Lt=r.RGBA,yt=r.RGBA,qt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Bt,Lt,yt,qt,ht),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ne.length>0){if(ie&&me){const pt=Qe(ne[0]);i.texStorage2D(r.TEXTURE_2D,Tt,Ut,pt.width,pt.height)}for(let pt=0,Bt=ne.length;pt<Bt;pt++)wt=ne[pt],ie?k&&i.texSubImage2D(r.TEXTURE_2D,pt,0,0,Ot,Pt,wt):i.texImage2D(r.TEXTURE_2D,pt,Ut,Ot,Pt,wt);E.generateMipmaps=!1}else if(ie){if(me){const pt=Qe(ht);i.texStorage2D(r.TEXTURE_2D,Tt,Ut,pt.width,pt.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ot,Pt,ht)}else i.texImage2D(r.TEXTURE_2D,0,Ut,Ot,Pt,ht);S(E)&&w(_t),Nt.__version=Ct.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function te(D,E,J){if(E.image.length!==6)return;const _t=ot(D,E),Et=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+J);const Ct=s.get(Et);if(Et.version!==Ct.__version||_t===!0){i.activeTexture(r.TEXTURE0+J);const Nt=be.getPrimaries(be.workingColorSpace),ut=E.colorSpace===ls?null:be.getPrimaries(E.colorSpace),ht=E.colorSpace===ls||Nt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Ot=E.isCompressedTexture||E.image[0].isCompressedTexture,Pt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let yt=0;yt<6;yt++)!Ot&&!Pt?Ut[yt]=M(E.image[yt],!0,l.maxCubemapSize):Ut[yt]=Pt?E.image[yt].image:E.image[yt],Ut[yt]=Rt(E,Ut[yt]);const wt=Ut[0],ne=c.convert(E.format,E.colorSpace),ie=c.convert(E.type),me=P(E.internalFormat,ne,ie,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Tt=Ct.__version===void 0||_t===!0,pt=Et.dataReady;let Bt=U(E,wt);Dt(r.TEXTURE_CUBE_MAP,E);let Lt;if(Ot){k&&Tt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,me,wt.width,wt.height);for(let yt=0;yt<6;yt++){Lt=Ut[yt].mipmaps;for(let qt=0;qt<Lt.length;qt++){const ee=Lt[qt];E.format!==Pi?ne!==null?k?pt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,ee.width,ee.height,ne,ee.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,me,ee.width,ee.height,0,ee.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,ee.width,ee.height,ne,ie,ee.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,me,ee.width,ee.height,0,ne,ie,ee.data)}}}else{if(Lt=E.mipmaps,k&&Tt){Lt.length>0&&Bt++;const yt=Qe(Ut[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,me,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Pt){k?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ut[yt].width,Ut[yt].height,ne,ie,Ut[yt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,me,Ut[yt].width,Ut[yt].height,0,ne,ie,Ut[yt].data);for(let qt=0;qt<Lt.length;qt++){const nn=Lt[qt].image[yt].image;k?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,nn.width,nn.height,ne,ie,nn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,me,nn.width,nn.height,0,ne,ie,nn.data)}}else{k?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ne,ie,Ut[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,me,ne,ie,Ut[yt]);for(let qt=0;qt<Lt.length;qt++){const ee=Lt[qt];k?pt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,ne,ie,ee.image[yt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,me,ne,ie,ee.image[yt])}}}S(E)&&w(r.TEXTURE_CUBE_MAP),Ct.__version=Et.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Qt(D,E,J,_t,Et,Ct){const Nt=c.convert(J.format,J.colorSpace),ut=c.convert(J.type),ht=P(J.internalFormat,Nt,ut,J.normalized,J.colorSpace),Ot=s.get(E),Pt=s.get(J);if(Pt.__renderTarget=E,!Ot.__hasExternalTextures){const Ut=Math.max(1,E.width>>Ct),wt=Math.max(1,E.height>>Ct);Et===r.TEXTURE_3D||Et===r.TEXTURE_2D_ARRAY?i.texImage3D(Et,Ct,ht,Ut,wt,E.depth,0,Nt,ut,null):i.texImage2D(Et,Ct,ht,Ut,wt,0,Nt,ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),de(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,Et,Pt.__webglTexture,0,en(E)):(Et===r.TEXTURE_2D||Et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_t,Et,Pt.__webglTexture,Ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function We(D,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const _t=E.depthTexture,Et=_t&&_t.isDepthTexture?_t.type:null,Ct=G(E.stencilBuffer,Et),Nt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;de(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(E),Ct,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(E),Ct,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ct,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,D)}else{const _t=E.textures;for(let Et=0;Et<_t.length;Et++){const Ct=_t[Et],Nt=c.convert(Ct.format,Ct.colorSpace),ut=c.convert(Ct.type),ht=P(Ct.internalFormat,Nt,ut,Ct.normalized,Ct.colorSpace);de(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(E),ht,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(E),ht,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ht,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function he(D,E,J){const _t=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(E.depthTexture);if(Et.__renderTarget=E,(!Et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_t){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),Et.__webglTexture===void 0){Et.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Et.__webglTexture),Dt(r.TEXTURE_CUBE_MAP,E.depthTexture);const Ot=c.convert(E.depthTexture.format),Pt=c.convert(E.depthTexture.type);let Ut;E.depthTexture.format===Ta?Ut=r.DEPTH_COMPONENT24:E.depthTexture.format===Gs&&(Ut=r.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ut,E.width,E.height,0,Ot,Pt,null)}}else tt(E.depthTexture,0);const Ct=Et.__webglTexture,Nt=en(E),ut=_t?r.TEXTURE_CUBE_MAP_POSITIVE_X+J:r.TEXTURE_2D,ht=E.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ta)de(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ut,Ct,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ut,Ct,0);else if(E.depthTexture.format===Gs)de(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ut,Ct,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ut,Ct,0);else throw new Error("Unknown depthTexture format")}function Se(D){const E=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const _t=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_t){const Et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_t.removeEventListener("dispose",Et)};_t.addEventListener("dispose",Et),E.__depthDisposeCallback=Et}E.__boundDepthTexture=_t}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let _t=0;_t<6;_t++)he(E.__webglFramebuffer[_t],D,_t);else{const _t=D.texture.mipmaps;_t&&_t.length>0?he(E.__webglFramebuffer[0],D,0):he(E.__webglFramebuffer,D,0)}else if(J){E.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[_t]),E.__webglDepthbuffer[_t]===void 0)E.__webglDepthbuffer[_t]=r.createRenderbuffer(),We(E.__webglDepthbuffer[_t],D,!1);else{const Et=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer[_t];r.bindRenderbuffer(r.RENDERBUFFER,Ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,Ct)}}else{const _t=D.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),We(E.__webglDepthbuffer,D,!1);else{const Et=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,Ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(D,E,J){const _t=s.get(D);E!==void 0&&Qt(_t.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&Se(D)}function ce(D){const E=D.texture,J=s.get(D),_t=s.get(E);D.addEventListener("dispose",T);const Et=D.textures,Ct=D.isWebGLCubeRenderTarget===!0,Nt=Et.length>1;if(Nt||(_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture()),_t.__version=E.version,h.memory.textures++),Ct){J.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[ut]=[];for(let ht=0;ht<E.mipmaps.length;ht++)J.__webglFramebuffer[ut][ht]=r.createFramebuffer()}else J.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)J.__webglFramebuffer[ut]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let ut=0,ht=Et.length;ut<ht;ut++){const Ot=s.get(Et[ut]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=r.createTexture(),h.memory.textures++)}if(D.samples>0&&de(D)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ut=0;ut<Et.length;ut++){const ht=Et[ut];J.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[ut]);const Ot=c.convert(ht.format,ht.colorSpace),Pt=c.convert(ht.type),Ut=P(ht.internalFormat,Ot,Pt,ht.normalized,ht.colorSpace,D.isXRRenderTarget===!0),wt=en(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,Ut,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,J.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),We(J.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ct){i.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),Dt(r.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)Qt(J.__webglFramebuffer[ut][ht],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ht);else Qt(J.__webglFramebuffer[ut],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);S(E)&&w(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let ut=0,ht=Et.length;ut<ht;ut++){const Ot=Et[ut],Pt=s.get(Ot);let Ut=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ut=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Pt.__webglTexture),Dt(Ut,Ot),Qt(J.__webglFramebuffer,D,Ot,r.COLOR_ATTACHMENT0+ut,Ut,0),S(Ot)&&w(Ut)}i.unbindTexture()}else{let ut=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ut=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ut,_t.__webglTexture),Dt(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let ht=0;ht<E.mipmaps.length;ht++)Qt(J.__webglFramebuffer[ht],D,E,r.COLOR_ATTACHMENT0,ut,ht);else Qt(J.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,ut,0);S(E)&&w(ut),i.unbindTexture()}D.depthBuffer&&Se(D)}function ln(D){const E=D.textures;for(let J=0,_t=E.length;J<_t;J++){const Et=E[J];if(S(Et)){const Ct=N(D),Nt=s.get(Et).__webglTexture;i.bindTexture(Ct,Nt),w(Ct),i.unbindTexture()}}}const je=[],An=[];function q(D){if(D.samples>0){if(de(D)===!1){const E=D.textures,J=D.width,_t=D.height;let Et=r.COLOR_BUFFER_BIT;const Ct=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=s.get(D),ut=E.length>1;if(ut)for(let Ot=0;Ot<E.length;Ot++)i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const ht=D.texture.mipmaps;ht&&ht.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ot=0;Ot<E.length;Ot++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Et|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Et|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const Pt=s.get(E[Ot]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pt,0)}r.blitFramebuffer(0,0,J,_t,0,0,J,_t,Et,r.NEAREST),m===!0&&(je.length=0,An.length=0,je.push(r.COLOR_ATTACHMENT0+Ot),D.depthBuffer&&D.resolveDepthBuffer===!1&&(je.push(Ct),An.push(Ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,An)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,je))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let Ot=0;Ot<E.length;Ot++){i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const Pt=s.get(E[Ot]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.TEXTURE_2D,Pt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function en(D){return Math.min(l.maxSamples,D.samples)}function de(D){const E=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function He(D){const E=h.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function Rt(D,E){const J=D.colorSpace,_t=D.format,Et=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==tu&&J!==ls&&(be.getTransfer(J)===ze?(_t!==Pi||Et!==hi)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",J)),E}function Qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=L,this.resetTextureUnits=V,this.getTextureUnits=ct,this.setTextureUnits=W,this.setTexture2D=tt,this.setTexture2DArray=mt,this.setTexture3D=St,this.setTextureCube=I,this.rebindTextures=Ne,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function qA(r,t){function i(s,l=ls){let c;const h=be.getTransfer(l);if(s===hi)return r.UNSIGNED_BYTE;if(s===np)return r.UNSIGNED_SHORT_4_4_4_4;if(s===ip)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Lv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Nv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Dv)return r.BYTE;if(s===Uv)return r.SHORT;if(s===el)return r.UNSIGNED_SHORT;if(s===ep)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===ba)return r.HALF_FLOAT;if(s===Ov)return r.ALPHA;if(s===Pv)return r.RGB;if(s===Pi)return r.RGBA;if(s===Ta)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===Fv)return r.RED;if(s===ap)return r.RED_INTEGER;if(s===Xs)return r.RG;if(s===sp)return r.RG_INTEGER;if(s===rp)return r.RGBA_INTEGER;if(s===Yc||s===jc||s===Zc||s===Kc)if(h===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gd||s===_d||s===vd||s===xd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd||s===Md||s===yd||s===Ed||s===bd||s===Jc||s===Td)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Sd||s===Md)return h===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===yd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ed)return c.COMPRESSED_R11_EAC;if(s===bd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Jc)return c.COMPRESSED_RG11_EAC;if(s===Td)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===Fd||s===Id||s===Bd||s===zd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ad)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ud)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ld)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Od)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Id)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hd||s===Gd||s===Vd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Hd)return h===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===kd||s===Xd||s===$c||s===Wd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===kd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Xd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$c)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const YA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jA=`
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

}`;class ZA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Yv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Zi({vertexShader:YA,fragmentShader:jA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mi(new Yr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KA extends ps{constructor(t,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,_=null,v=null,g=null,y=null,b=null;const C=typeof XRWebGLBinding<"u",M=new ZA,S={},w=i.getContextAttributes();let N=null,P=null;const G=[],U=[],F=new le;let T=null;const O=new fi;O.viewport=new rn;const Y=new fi;Y.viewport=new rn;const B=[O,Y],j=new aE;let V=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let Mt=G[ot];return Mt===void 0&&(Mt=new Uh,G[ot]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(ot){let Mt=G[ot];return Mt===void 0&&(Mt=new Uh,G[ot]=Mt),Mt.getGripSpace()},this.getHand=function(ot){let Mt=G[ot];return Mt===void 0&&(Mt=new Uh,G[ot]=Mt),Mt.getHandSpace()};function W(ot){const Mt=U.indexOf(ot.inputSource);if(Mt===-1)return;const bt=G[Mt];bt!==void 0&&(bt.update(ot.inputSource,ot.frame,d||h),bt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function L(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",z);for(let ot=0;ot<G.length;ot++){const Mt=U[ot];Mt!==null&&(U[ot]=null,G[ot].disconnect(Mt))}V=null,ct=null,M.reset();for(const ot in S)delete S[ot];t.setRenderTarget(N),y=null,g=null,v=null,l=null,P=null,Dt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){c=ot,s.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){p=ot,s.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(ot){d=ot},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ot){if(l=ot,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",L),l.addEventListener("inputsourceschange",z),w.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ht=null,te=null;w.depth&&(te=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=w.stencil?Gs:Ta,Ht=w.stencil?nl:ji);const Qt={colorFormat:i.RGBA8,depthFormat:te,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Qt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),P=new Yi(g.textureWidth,g.textureHeight,{format:Pi,type:hi,depthTexture:new Wr(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const bt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Yi(y.framebufferWidth,y.framebufferHeight,{format:Pi,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Dt.setContext(l),Dt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function z(ot){for(let Mt=0;Mt<ot.removed.length;Mt++){const bt=ot.removed[Mt],Ht=U.indexOf(bt);Ht>=0&&(U[Ht]=null,G[Ht].disconnect(bt))}for(let Mt=0;Mt<ot.added.length;Mt++){const bt=ot.added[Mt];let Ht=U.indexOf(bt);if(Ht===-1){for(let Qt=0;Qt<G.length;Qt++)if(Qt>=U.length){U.push(bt),Ht=Qt;break}else if(U[Qt]===null){U[Qt]=bt,Ht=Qt;break}if(Ht===-1)break}const te=G[Ht];te&&te.connect(bt)}}const tt=new Q,mt=new Q;function St(ot,Mt,bt){tt.setFromMatrixPosition(Mt.matrixWorld),mt.setFromMatrixPosition(bt.matrixWorld);const Ht=tt.distanceTo(mt),te=Mt.projectionMatrix.elements,Qt=bt.projectionMatrix.elements,We=te[14]/(te[10]-1),he=te[14]/(te[10]+1),Se=(te[9]+1)/te[5],Ne=(te[9]-1)/te[5],ce=(te[8]-1)/te[0],ln=(Qt[8]+1)/Qt[0],je=We*ce,An=We*ln,q=Ht/(-ce+ln),en=q*-ce;if(Mt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(en),ot.translateZ(q),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),te[10]===-1)ot.projectionMatrix.copy(Mt.projectionMatrix),ot.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const de=We+q,He=he+q,Rt=je-en,Qe=An+(Ht-en),D=Se*he/He*de,E=Ne*he/He*de;ot.projectionMatrix.makePerspective(Rt,Qe,D,E,de,He),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function I(ot,Mt){Mt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(Mt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(l===null)return;let Mt=ot.near,bt=ot.far;M.texture!==null&&(M.depthNear>0&&(Mt=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),j.near=Y.near=O.near=Mt,j.far=Y.far=O.far=bt,(V!==j.near||ct!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),V=j.near,ct=j.far),j.layers.mask=ot.layers.mask|6,O.layers.mask=j.layers.mask&-5,Y.layers.mask=j.layers.mask&-3;const Ht=ot.parent,te=j.cameras;I(j,Ht);for(let Qt=0;Qt<te.length;Qt++)I(te[Qt],Ht);te.length===2?St(j,O,Y):j.projectionMatrix.copy(O.projectionMatrix),$(ot,j,Ht)};function $(ot,Mt,bt){bt===null?ot.matrix.copy(Mt.matrixWorld):(ot.matrix.copy(bt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(Mt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(Mt.projectionMatrix),ot.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=jd*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(ot){m=ot,g!==null&&(g.fixedFoveation=ot),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ot)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(ot){return S[ot]};let xt=null;function At(ot,Mt){if(_=Mt.getViewerPose(d||h),b=Mt,_!==null){const bt=_.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let Ht=!1;bt.length!==j.cameras.length&&(j.cameras.length=0,Ht=!0);for(let he=0;he<bt.length;he++){const Se=bt[he];let Ne=null;if(y!==null)Ne=y.getViewport(Se);else{const ln=v.getViewSubImage(g,Se);Ne=ln.viewport,he===0&&(t.setRenderTargetTextures(P,ln.colorTexture,ln.depthStencilTexture),t.setRenderTarget(P))}let ce=B[he];ce===void 0&&(ce=new fi,ce.layers.enable(he),ce.viewport=new rn,B[he]=ce),ce.matrix.fromArray(Se.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Se.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),he===0&&(j.matrix.copy(ce.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ht===!0&&j.cameras.push(ce)}const te=l.enabledFeatures;if(te&&te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const he=v.getDepthInformation(bt[0]);he&&he.isValid&&he.texture&&M.init(he,l.renderState)}if(te&&te.includes("camera-access")&&C){t.state.unbindTexture(),v=s.getBinding();for(let he=0;he<bt.length;he++){const Se=bt[he].camera;if(Se){let Ne=S[Se];Ne||(Ne=new Yv,S[Se]=Ne);const ce=v.getCameraImage(Se);Ne.sourceTexture=ce}}}}for(let bt=0;bt<G.length;bt++){const Ht=U[bt],te=G[bt];Ht!==null&&te!==void 0&&te.update(Ht,Mt,d||h)}xt&&xt(ot,Mt),Mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Mt}),b=null}const Dt=new ex;Dt.setAnimationLoop(At),this.setAnimationLoop=function(ot){xt=ot},this.dispose=function(){}}}const QA=new on,lx=new se;lx.set(-1,0,0,0,1,0,0,0,1);function JA(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,Kv(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,w,N,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,P)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),C(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&p(M,S)):S.isPointsMaterial?m(M,S,w,N):S.isSpriteMaterial?d(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Qn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Qn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const w=t.get(S),N=w.envMap,P=w.envMapRotation;N&&(M.envMap.value=N,M.envMapRotation.value.setFromMatrix4(QA.makeRotationFromEuler(P)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(lx),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function p(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,w,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*w,M.scale.value=N*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,w){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function C(M,S){const w=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function $A(r,t,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,N){const P=N.program;s.uniformBlockBinding(w,P)}function d(w,N){let P=l[w.id];P===void 0&&(b(w),P=_(w),l[w.id]=P,w.addEventListener("dispose",M));const G=N.program;s.updateUBOMapping(w,G);const U=t.render.frame;c[w.id]!==U&&(g(w),c[w.id]=U)}function _(w){const N=v();w.__bindingPointIndex=N;const P=r.createBuffer(),G=w.__size,U=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,G,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,P),P}function v(){for(let w=0;w<p;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const N=l[w.id],P=w.uniforms,G=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let U=0,F=P.length;U<F;U++){const T=Array.isArray(P[U])?P[U]:[P[U]];for(let O=0,Y=T.length;O<Y;O++){const B=T[O];if(y(B,U,O,G)===!0){const j=B.__offset,V=Array.isArray(B.value)?B.value:[B.value];let ct=0;for(let W=0;W<V.length;W++){const L=V[W],z=C(L);typeof L=="number"||typeof L=="boolean"?(B.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,j+ct,B.__data)):L.isMatrix3?(B.__data[0]=L.elements[0],B.__data[1]=L.elements[1],B.__data[2]=L.elements[2],B.__data[3]=0,B.__data[4]=L.elements[3],B.__data[5]=L.elements[4],B.__data[6]=L.elements[5],B.__data[7]=0,B.__data[8]=L.elements[6],B.__data[9]=L.elements[7],B.__data[10]=L.elements[8],B.__data[11]=0):ArrayBuffer.isView(L)?B.__data.set(new L.constructor(L.buffer,L.byteOffset,B.__data.length)):(L.toArray(B.__data,ct),ct+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,j,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(w,N,P,G){const U=w.value,F=N+"_"+P;if(G[F]===void 0)return typeof U=="number"||typeof U=="boolean"?G[F]=U:ArrayBuffer.isView(U)?G[F]=U.slice():G[F]=U.clone(),!0;{const T=G[F];if(typeof U=="number"||typeof U=="boolean"){if(T!==U)return G[F]=U,!0}else{if(ArrayBuffer.isView(U))return!0;if(T.equals(U)===!1)return T.copy(U),!0}}return!1}function b(w){const N=w.uniforms;let P=0;const G=16;for(let F=0,T=N.length;F<T;F++){const O=Array.isArray(N[F])?N[F]:[N[F]];for(let Y=0,B=O.length;Y<B;Y++){const j=O[Y],V=Array.isArray(j.value)?j.value:[j.value];for(let ct=0,W=V.length;ct<W;ct++){const L=V[ct],z=C(L),tt=P%G,mt=tt%z.boundary,St=tt+mt;P+=mt,St!==0&&G-St<z.storage&&(P+=G-St),j.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=P,P+=z.storage}}}const U=P%G;return U>0&&(P+=G-U),w.__size=P,w.__cache={},this}function C(w){const N={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(N.boundary=4,N.storage=4):w.isVector2?(N.boundary=8,N.storage=8):w.isVector3||w.isColor?(N.boundary=16,N.storage=12):w.isVector4?(N.boundary=16,N.storage=16):w.isMatrix3?(N.boundary=48,N.storage=48):w.isMatrix4?(N.boundary=64,N.storage=64):w.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(N.boundary=16,N.storage=w.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",w),N}function M(w){const N=w.target;N.removeEventListener("dispose",M);const P=h.indexOf(N.__bindingPointIndex);h.splice(P,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const w in l)r.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:m,update:d,dispose:S}}const tR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function eR(){return Vi===null&&(Vi=new By(tR,16,16,Xs,ba),Vi.name="DFG_LUT",Vi.minFilter=Bn,Vi.magFilter=Bn,Vi.wrapS=Ma,Vi.wrapT=Ma,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class cx{constructor(t={}){const{canvas:i=my(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=hi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const C=y,M=new Set([rp,sp,ap]),S=new Set([hi,ji,el,nl,np,ip]),w=new Uint32Array(4),N=new Int32Array(4),P=new Q;let G=null,U=null;const F=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let B=!1,j=null;this._outputColorSpace=Gn;let V=0,ct=0,W=null,L=-1,z=null;const tt=new rn,mt=new rn;let St=null;const I=new pe(0);let $=0,xt=i.width,At=i.height,Dt=1,ot=null,Mt=null;const bt=new rn(0,0,xt,At),Ht=new rn(0,0,xt,At);let te=!1;const Qt=new fp;let We=!1,he=!1;const Se=new on,Ne=new Q,ce=new rn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function An(){return W===null?Dt:1}let q=s;function en(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${$d}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",ee,!1),q===null){const Z="webgl2";if(q=en(Z,A),q===null)throw en(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Te("WebGLRenderer: "+A.message),A}let de,He,Rt,Qe,D,E,J,_t,Et,Ct,Nt,ut,ht,Ot,Pt,Ut,wt,ne,ie,me,k,Tt,pt;function Bt(){de=new e1(q),de.init(),k=new qA(q,de),He=new YT(q,de,t,k),Rt=new XA(q,de),He.reversedDepthBuffer&&g&&Rt.buffers.depth.setReversed(!0),Qe=new a1(q),D=new DA,E=new WA(q,de,Rt,D,He,k,Qe),J=new t1(Y),_t=new lE(q),Tt=new WT(q,_t),Et=new n1(q,_t,Qe,Tt),Ct=new r1(q,Et,_t,Tt,Qe),ne=new s1(q,He,E),Pt=new jT(D),Nt=new wA(Y,J,de,He,Tt,Pt),ut=new JA(Y,D),ht=new LA,Ot=new BA(de),wt=new XT(Y,J,Rt,Ct,b,m),Ut=new kA(Y,Ct,He),pt=new $A(q,Qe,He,Rt),ie=new qT(q,de,Qe),me=new i1(q,de,Qe),Qe.programs=Nt.programs,Y.capabilities=He,Y.extensions=de,Y.properties=D,Y.renderLists=ht,Y.shadowMap=Ut,Y.state=Rt,Y.info=Qe}Bt(),C!==hi&&(O=new l1(C,i.width,i.height,l,c));const Lt=new KA(Y,q);this.xr=Lt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(A){A!==void 0&&(Dt=A,this.setSize(xt,At,!1))},this.getSize=function(A){return A.set(xt,At)},this.setSize=function(A,Z,st=!0){if(Lt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=A,At=Z,i.width=Math.floor(A*Dt),i.height=Math.floor(Z*Dt),st===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(xt*Dt,At*Dt).floor()},this.setDrawingBufferSize=function(A,Z,st){xt=A,At=Z,Dt=st,i.width=Math.floor(A*st),i.height=Math.floor(Z*st),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(C===hi){Te("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){Jt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(tt)},this.getViewport=function(A){return A.copy(bt)},this.setViewport=function(A,Z,st,it){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,Z,st,it),Rt.viewport(tt.copy(bt).multiplyScalar(Dt).round())},this.getScissor=function(A){return A.copy(Ht)},this.setScissor=function(A,Z,st,it){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,Z,st,it),Rt.scissor(mt.copy(Ht).multiplyScalar(Dt).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){Rt.setScissorTest(te=A)},this.setOpaqueSort=function(A){ot=A},this.setTransparentSort=function(A){Mt=A},this.getClearColor=function(A){return A.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,st=!0){let it=0;if(A){let at=!1;if(W!==null){const It=W.texture.format;at=M.has(It)}if(at){const It=W.texture.type,Vt=S.has(It),Ft=wt.getClearColor(),Xt=wt.getClearAlpha(),kt=Ft.r,Zt=Ft.g,re=Ft.b;Vt?(w[0]=kt,w[1]=Zt,w[2]=re,w[3]=Xt,q.clearBufferuiv(q.COLOR,0,w)):(N[0]=kt,N[1]=Zt,N[2]=re,N[3]=Xt,q.clearBufferiv(q.COLOR,0,N))}else it|=q.COLOR_BUFFER_BIT}Z&&(it|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(it|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&q.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",ee,!1),wt.dispose(),ht.dispose(),Ot.dispose(),D.dispose(),J.dispose(),Ct.dispose(),Tt.dispose(),pt.dispose(),Nt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Kr),Lt.removeEventListener("sessionend",Qr),Nn.stop()};function yt(A){A.preventDefault(),_0("WebGLRenderer: Context Lost."),B=!0}function qt(){_0("WebGLRenderer: Context Restored."),B=!1;const A=Qe.autoReset,Z=Ut.enabled,st=Ut.autoUpdate,it=Ut.needsUpdate,at=Ut.type;Bt(),Qe.autoReset=A,Ut.enabled=Z,Ut.autoUpdate=st,Ut.needsUpdate=it,Ut.type=at}function ee(A){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nn(A){const Z=A.target;Z.removeEventListener("dispose",nn),De(Z)}function De(A){gi(A),D.remove(A)}function gi(A){const Z=D.get(A).programs;Z!==void 0&&(Z.forEach(function(st){Nt.releaseProgram(st)}),A.isShaderMaterial&&Nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,st,it,at,It){Z===null&&(Z=ln);const Vt=at.isMesh&&at.matrixWorld.determinant()<0,Ft=Ca(A,Z,st,it,at);Rt.setMaterial(it,Vt);let Xt=st.index,kt=1;if(it.wireframe===!0){if(Xt=Et.getWireframeAttribute(st),Xt===void 0)return;kt=2}const Zt=st.drawRange,re=st.attributes.position;let jt=Zt.start*kt,Ae=(Zt.start+Zt.count)*kt;It!==null&&(jt=Math.max(jt,It.start*kt),Ae=Math.min(Ae,(It.start+It.count)*kt)),Xt!==null?(jt=Math.max(jt,0),Ae=Math.min(Ae,Xt.count)):re!=null&&(jt=Math.max(jt,0),Ae=Math.min(Ae,re.count));const Je=Ae-jt;if(Je<0||Je===1/0)return;Tt.setup(at,it,Ft,st,Xt);let qe,Oe=ie;if(Xt!==null&&(qe=_t.get(Xt),Oe=me,Oe.setIndex(qe)),at.isMesh)it.wireframe===!0?(Rt.setLineWidth(it.wireframeLinewidth*An()),Oe.setMode(q.LINES)):Oe.setMode(q.TRIANGLES);else if(at.isLine){let Pe=it.linewidth;Pe===void 0&&(Pe=1),Rt.setLineWidth(Pe*An()),at.isLineSegments?Oe.setMode(q.LINES):at.isLineLoop?Oe.setMode(q.LINE_LOOP):Oe.setMode(q.LINE_STRIP)}else at.isPoints?Oe.setMode(q.POINTS):at.isSprite&&Oe.setMode(q.TRIANGLES);if(at.isBatchedMesh)if(de.get("WEBGL_multi_draw"))Oe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Pe=at._multiDrawStarts,Gt=at._multiDrawCounts,On=at._multiDrawCount,ge=Xt?_t.get(Xt).bytesPerElement:1,vn=D.get(it).currentProgram.getUniforms();for(let ti=0;ti<On;ti++)vn.setValue(q,"_gl_DrawID",ti),Oe.render(Pe[ti]/ge,Gt[ti])}else if(at.isInstancedMesh)Oe.renderInstances(jt,Je,at.count);else if(st.isInstancedBufferGeometry){const Pe=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Gt=Math.min(st.instanceCount,Pe);Oe.renderInstances(jt,Je,Gt)}else Oe.render(jt,Je)};function $n(A,Z,st){A.transparent===!0&&A.side===Sa&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Ys(A,Z,st),A.side=fs,A.needsUpdate=!0,Ys(A,Z,st),A.side=Sa):Ys(A,Z,st)}this.compile=function(A,Z,st=null){st===null&&(st=A),U=Ot.get(st),U.init(Z),T.push(U),st.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),A!==st&&A.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),U.setupLights();const it=new Set;return A.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const It=at.material;if(It)if(Array.isArray(It))for(let Vt=0;Vt<It.length;Vt++){const Ft=It[Vt];$n(Ft,st,at),it.add(Ft)}else $n(It,st,at),it.add(It)}),U=T.pop(),it},this.compileAsync=function(A,Z,st=null){const it=this.compile(A,Z,st);return new Promise(at=>{function It(){if(it.forEach(function(Vt){D.get(Vt).currentProgram.isReady()&&it.delete(Vt)}),it.size===0){at(A);return}setTimeout(It,10)}de.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let ms=null;function Zr(A){ms&&ms(A)}function Kr(){Nn.stop()}function Qr(){Nn.start()}const Nn=new ex;Nn.setAnimationLoop(Zr),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){ms=A,Lt.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Lt.addEventListener("sessionstart",Kr),Lt.addEventListener("sessionend",Qr),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;j!==null&&j.renderStart(A,Z);const st=Lt.enabled===!0&&Lt.isPresenting===!0,it=O!==null&&(W===null||st)&&O.begin(Y,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(Z),Z=Lt.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,Z,W),U=Ot.get(A,T.length),U.init(Z),U.state.textureUnits=E.getTextureUnits(),T.push(U),Se.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Qt.setFromProjectionMatrix(Se,Wi,Z.reversedDepth),he=this.localClippingEnabled,We=Pt.init(this.clippingPlanes,he),G=ht.get(A,F.length),G.init(),F.push(G),Lt.enabled===!0&&Lt.isPresenting===!0){const Vt=Y.xr.getDepthSensingMesh();Vt!==null&&cn(Vt,Z,-1/0,Y.sortObjects)}cn(A,Z,0,Y.sortObjects),G.finish(),Y.sortObjects===!0&&G.sort(ot,Mt),je=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,je&&wt.addToRenderList(G,A),this.info.render.frame++,We===!0&&Pt.beginShadows();const at=U.state.shadowsArray;if(Ut.render(at,A,Z),We===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&O.hasRenderPass())===!1){const Vt=G.opaque,Ft=G.transmissive;if(U.setupLights(),Z.isArrayCamera){const Xt=Z.cameras;if(Ft.length>0)for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt];Ki(Vt,Ft,A,re)}je&&wt.render(A);for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt];Rn(G,A,re,re.viewport)}}else Ft.length>0&&Ki(Vt,Ft,A,Z),je&&wt.render(A),Rn(G,A,Z)}W!==null&&ct===0&&(E.updateMultisampleRenderTarget(W),E.updateRenderTargetMipmap(W)),it&&O.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,Z),Tt.resetDefaultState(),L=-1,z=null,T.pop(),T.length>0?(U=T[T.length-1],E.setTextureUnits(U.state.textureUnits),We===!0&&Pt.setGlobalState(Y.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?G=F[F.length-1]:G=null,j!==null&&j.renderEnd()};function cn(A,Z,st,it){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qt.intersectsSprite(A)){it&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);const Vt=Ct.update(A),Ft=A.material;Ft.visible&&G.push(A,Vt,Ft,st,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qt.intersectsObject(A))){const Vt=Ct.update(A),Ft=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ce.copy(Vt.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(Ft)){const Xt=Vt.groups;for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt],jt=Ft[re.materialIndex];jt&&jt.visible&&G.push(A,Vt,jt,st,ce.z,re)}}else Ft.visible&&G.push(A,Vt,Ft,st,ce.z,null)}}const It=A.children;for(let Vt=0,Ft=It.length;Vt<Ft;Vt++)cn(It[Vt],Z,st,it)}function Rn(A,Z,st,it){const{opaque:at,transmissive:It,transparent:Vt}=A;U.setupLightsView(st),We===!0&&Pt.setGlobalState(Y.clippingPlanes,st),it&&Rt.viewport(tt.copy(it)),at.length>0&&Aa(at,Z,st),It.length>0&&Aa(It,Z,st),Vt.length>0&&Aa(Vt,Z,st),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Ki(A,Z,st,it){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[it.id]===void 0){const jt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[it.id]=new Yi(1,1,{generateMipmaps:!0,type:jt?ba:hi,minFilter:Hs,samples:Math.max(4,He.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const It=U.state.transmissionRenderTarget[it.id],Vt=it.viewport||tt;It.setSize(Vt.z*Y.transmissionResolutionScale,Vt.w*Y.transmissionResolutionScale);const Ft=Y.getRenderTarget(),Xt=Y.getActiveCubeFace(),kt=Y.getActiveMipmapLevel();Y.setRenderTarget(It),Y.getClearColor(I),$=Y.getClearAlpha(),$<1&&Y.setClearColor(16777215,.5),Y.clear(),je&&wt.render(st);const Zt=Y.toneMapping;Y.toneMapping=qi;const re=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),U.setupLightsView(it),We===!0&&Pt.setGlobalState(Y.clippingPlanes,it),Aa(A,st,it),E.updateMultisampleRenderTarget(It),E.updateRenderTargetMipmap(It),de.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ae=0,Je=Z.length;Ae<Je;Ae++){const qe=Z[Ae],{object:Oe,geometry:Pe,material:Gt,group:On}=qe;if(Gt.side===Sa&&Oe.layers.test(it.layers)){const ge=Gt.side;Gt.side=Qn,Gt.needsUpdate=!0,ol(Oe,st,it,Pe,Gt,On),Gt.side=ge,Gt.needsUpdate=!0,jt=!0}}jt===!0&&(E.updateMultisampleRenderTarget(It),E.updateRenderTargetMipmap(It))}Y.setRenderTarget(Ft,Xt,kt),Y.setClearColor(I,$),re!==void 0&&(it.viewport=re),Y.toneMapping=Zt}function Aa(A,Z,st){const it=Z.isScene===!0?Z.overrideMaterial:null;for(let at=0,It=A.length;at<It;at++){const Vt=A[at],{object:Ft,geometry:Xt,group:kt}=Vt;let Zt=Vt.material;Zt.allowOverride===!0&&it!==null&&(Zt=it),Ft.layers.test(st.layers)&&ol(Ft,Z,st,Xt,Zt,kt)}}function ol(A,Z,st,it,at,It){A.onBeforeRender(Y,Z,st,it,at,It),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),at.onBeforeRender(Y,Z,st,it,A,It),at.transparent===!0&&at.side===Sa&&at.forceSinglePass===!1?(at.side=Qn,at.needsUpdate=!0,Y.renderBufferDirect(st,Z,it,at,A,It),at.side=fs,at.needsUpdate=!0,Y.renderBufferDirect(st,Z,it,at,A,It),at.side=Sa):Y.renderBufferDirect(st,Z,it,at,A,It),A.onAfterRender(Y,Z,st,it,at,It)}function Ys(A,Z,st){Z.isScene!==!0&&(Z=ln);const it=D.get(A),at=U.state.lights,It=U.state.shadowsArray,Vt=at.state.version,Ft=Nt.getParameters(A,at.state,It,Z,st,U.state.lightProbeGridArray),Xt=Nt.getProgramCacheKey(Ft);let kt=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,it.fog=Z.fog;const Zt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=J.get(A.envMap||it.environment,Zt),it.envMapRotation=it.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",nn),kt=new Map,it.programs=kt);let re=kt.get(Xt);if(re!==void 0){if(it.currentProgram===re&&it.lightsStateVersion===Vt)return Ra(A,Ft),re}else Ft.uniforms=Nt.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,st,Ft),A.onBeforeCompile(Ft,Y),re=Nt.acquireProgram(Ft,Xt),kt.set(Xt,re),it.uniforms=Ft.uniforms;const jt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=Pt.uniform),Ra(A,Ft),it.needsLights=gs(A),it.lightsStateVersion=Vt,it.needsLights&&(jt.ambientLightColor.value=at.state.ambient,jt.lightProbe.value=at.state.probe,jt.directionalLights.value=at.state.directional,jt.directionalLightShadows.value=at.state.directionalShadow,jt.spotLights.value=at.state.spot,jt.spotLightShadows.value=at.state.spotShadow,jt.rectAreaLights.value=at.state.rectArea,jt.ltc_1.value=at.state.rectAreaLTC1,jt.ltc_2.value=at.state.rectAreaLTC2,jt.pointLights.value=at.state.point,jt.pointLightShadows.value=at.state.pointShadow,jt.hemisphereLights.value=at.state.hemi,jt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,jt.spotLightMatrix.value=at.state.spotLightMatrix,jt.spotLightMap.value=at.state.spotLightMap,jt.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=U.state.lightProbeGridArray.length>0,it.currentProgram=re,it.uniformsList=null,re}function Jr(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=Qc.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Ra(A,Z){const st=D.get(A);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function $r(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(Z.matrixWorld);for(let st=0,it=A.length;st<it;st++){const at=A[st];if(at.texture!==null&&at.boundingBox.containsPoint(P))return at}return null}function Ca(A,Z,st,it,at){Z.isScene!==!0&&(Z=ln),E.resetTextureUnits();const It=Z.fog,Vt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?Z.environment:null,Ft=W===null?Y.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:be.workingColorSpace,Xt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,kt=J.get(it.envMap||Vt,Xt),Zt=it.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,re=!!st.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),jt=!!st.morphAttributes.position,Ae=!!st.morphAttributes.normal,Je=!!st.morphAttributes.color;let qe=qi;it.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(qe=Y.toneMapping);const Oe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Pe=Oe!==void 0?Oe.length:0,Gt=D.get(it),On=U.state.lights;if(We===!0&&(he===!0||A!==z)){const Le=A===z&&it.id===L;Pt.setState(it,A,Le)}let ge=!1;it.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==On.state.version||Gt.outputColorSpace!==Ft||at.isBatchedMesh&&Gt.batching===!1||!at.isBatchedMesh&&Gt.batching===!0||at.isBatchedMesh&&Gt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Gt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Gt.instancing===!1||!at.isInstancedMesh&&Gt.instancing===!0||at.isSkinnedMesh&&Gt.skinning===!1||!at.isSkinnedMesh&&Gt.skinning===!0||at.isInstancedMesh&&Gt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Gt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Gt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Gt.instancingMorph===!1&&at.morphTexture!==null||Gt.envMap!==kt||it.fog===!0&&Gt.fog!==It||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Pt.numPlanes||Gt.numIntersection!==Pt.numIntersection)||Gt.vertexAlphas!==Zt||Gt.vertexTangents!==re||Gt.morphTargets!==jt||Gt.morphNormals!==Ae||Gt.morphColors!==Je||Gt.toneMapping!==qe||Gt.morphTargetsCount!==Pe||!!Gt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Gt.__version=it.version);let vn=Gt.currentProgram;ge===!0&&(vn=Ys(it,Z,at),j&&it.isNodeMaterial&&j.onUpdateProgram(it,vn,Gt));let ti=!1,Ri=!1,ei=!1;const Fe=vn.getUniforms(),$e=Gt.uniforms;if(Rt.useProgram(vn.program)&&(ti=!0,Ri=!0,ei=!0),it.id!==L&&(L=it.id,Ri=!0),Gt.needsLights){const Le=$r(U.state.lightProbeGridArray,at);Gt.lightProbeGrid!==Le&&(Gt.lightProbeGrid=Le,Ri=!0)}if(ti||z!==A){Rt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Fe.setValue(q,"projectionMatrix",A.projectionMatrix),Fe.setValue(q,"viewMatrix",A.matrixWorldInverse);const Fi=Fe.map.cameraPosition;Fi!==void 0&&Fi.setValue(q,Ne.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&Fe.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Fe.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,Ri=!0,ei=!0)}if(Gt.needsLights&&(On.state.directionalShadowMap.length>0&&Fe.setValue(q,"directionalShadowMap",On.state.directionalShadowMap,E),On.state.spotShadowMap.length>0&&Fe.setValue(q,"spotShadowMap",On.state.spotShadowMap,E),On.state.pointShadowMap.length>0&&Fe.setValue(q,"pointShadowMap",On.state.pointShadowMap,E)),at.isSkinnedMesh){Fe.setOptional(q,at,"bindMatrix"),Fe.setOptional(q,at,"bindMatrixInverse");const Le=at.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Fe.setValue(q,"boneTexture",Le.boneTexture,E))}at.isBatchedMesh&&(Fe.setOptional(q,at,"batchingTexture"),Fe.setValue(q,"batchingTexture",at._matricesTexture,E),Fe.setOptional(q,at,"batchingIdTexture"),Fe.setValue(q,"batchingIdTexture",at._indirectTexture,E),Fe.setOptional(q,at,"batchingColorTexture"),at._colorsTexture!==null&&Fe.setValue(q,"batchingColorTexture",at._colorsTexture,E));const Ci=st.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&ne.update(at,st,vn),(Ri||Gt.receiveShadow!==at.receiveShadow)&&(Gt.receiveShadow=at.receiveShadow,Fe.setValue(q,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&Z.environment!==null&&($e.envMapIntensity.value=Z.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=eR()),Ri){if(Fe.setValue(q,"toneMappingExposure",Y.toneMappingExposure),Gt.needsLights&&wa($e,ei),It&&it.fog===!0&&ut.refreshFogUniforms($e,It),ut.refreshMaterialUniforms($e,it,Dt,At,U.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const Le=Gt.lightProbeGrid;$e.probesSH.value=Le.texture,$e.probesMin.value.copy(Le.boundingBox.min),$e.probesMax.value.copy(Le.boundingBox.max),$e.probesResolution.value.copy(Le.resolution)}Qc.upload(q,Jr(Gt),$e,E)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Qc.upload(q,Jr(Gt),$e,E),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Fe.setValue(q,"center",at.center),Fe.setValue(q,"modelViewMatrix",at.modelViewMatrix),Fe.setValue(q,"normalMatrix",at.normalMatrix),Fe.setValue(q,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const Le=it.uniformsGroups;for(let Fi=0,Ua=Le.length;Fi<Ua;Fi++){const _s=Le[Fi];pt.update(_s,vn),pt.bind(_s,vn)}}return vn}function wa(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function gs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return ct},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,Z,st){const it=D.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=Z,D.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:st,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const st=D.get(A);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const Da=q.createFramebuffer();this.setRenderTarget=function(A,Z=0,st=0){W=A,V=Z,ct=st;let it=null,at=!1,It=!1;if(A){const Ft=D.get(A);if(Ft.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(q.FRAMEBUFFER,Ft.__webglFramebuffer),tt.copy(A.viewport),mt.copy(A.scissor),St=A.scissorTest,Rt.viewport(tt),Rt.scissor(mt),Rt.setScissorTest(St),L=-1;return}else if(Ft.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ft.__hasExternalTextures)E.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(Ft.__boundDepthTexture!==Zt){if(Zt!==null&&D.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(It=!0);const kt=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[Z])?it=kt[Z][st]:it=kt[Z],at=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?it=D.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?it=kt[st]:it=kt,tt.copy(A.viewport),mt.copy(A.scissor),St=A.scissorTest}else tt.copy(bt).multiplyScalar(Dt).floor(),mt.copy(Ht).multiplyScalar(Dt).floor(),St=te;if(st!==0&&(it=Da),Rt.bindFramebuffer(q.FRAMEBUFFER,it)&&Rt.drawBuffers(A,it),Rt.viewport(tt),Rt.scissor(mt),Rt.setScissorTest(St),at){const Ft=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft.__webglTexture,st)}else if(It){const Ft=Z;for(let Xt=0;Xt<A.textures.length;Xt++){const kt=D.get(A.textures[Xt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Xt,kt.__webglTexture,st,Ft)}}else if(A!==null&&st!==0){const Ft=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ft.__webglTexture,st)}L=-1},this.readRenderTargetPixels=function(A,Z,st,it,at,It,Vt,Ft=0){if(!(A&&A.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){Rt.bindFramebuffer(q.FRAMEBUFFER,Xt);try{const kt=A.textures[Ft],Zt=kt.format,re=kt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft),!He.textureFormatReadable(Zt)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(re)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-it&&st>=0&&st<=A.height-at&&q.readPixels(Z,st,it,at,k.convert(Zt),k.convert(re),It)}finally{const kt=W!==null?D.get(W).__webglFramebuffer:null;Rt.bindFramebuffer(q.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,Z,st,it,at,It,Vt,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(Z>=0&&Z<=A.width-it&&st>=0&&st<=A.height-at){Rt.bindFramebuffer(q.FRAMEBUFFER,Xt);const kt=A.textures[Ft],Zt=kt.format,re=kt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft),!He.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,jt),q.bufferData(q.PIXEL_PACK_BUFFER,It.byteLength,q.STREAM_READ),q.readPixels(Z,st,it,at,k.convert(Zt),k.convert(re),0);const Ae=W!==null?D.get(W).__webglFramebuffer:null;Rt.bindFramebuffer(q.FRAMEBUFFER,Ae);const Je=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await gy(q,Je,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,jt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,It),q.deleteBuffer(jt),q.deleteSync(Je),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,st=0){const it=Math.pow(2,-st),at=Math.floor(A.image.width*it),It=Math.floor(A.image.height*it),Vt=Z!==null?Z.x:0,Ft=Z!==null?Z.y:0;E.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,st,0,0,Vt,Ft,at,It),Rt.unbindTexture()};const hn=q.createFramebuffer(),ll=q.createFramebuffer();this.copyTextureToTexture=function(A,Z,st=null,it=null,at=0,It=0){let Vt,Ft,Xt,kt,Zt,re,jt,Ae,Je;const qe=A.isCompressedTexture?A.mipmaps[It]:A.image;if(st!==null)Vt=st.max.x-st.min.x,Ft=st.max.y-st.min.y,Xt=st.isBox3?st.max.z-st.min.z:1,kt=st.min.x,Zt=st.min.y,re=st.isBox3?st.min.z:0;else{const $e=Math.pow(2,-at);Vt=Math.floor(qe.width*$e),Ft=Math.floor(qe.height*$e),A.isDataArrayTexture?Xt=qe.depth:A.isData3DTexture?Xt=Math.floor(qe.depth*$e):Xt=1,kt=0,Zt=0,re=0}it!==null?(jt=it.x,Ae=it.y,Je=it.z):(jt=0,Ae=0,Je=0);const Oe=k.convert(Z.format),Pe=k.convert(Z.type);let Gt;Z.isData3DTexture?(E.setTexture3D(Z,0),Gt=q.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(E.setTexture2DArray(Z,0),Gt=q.TEXTURE_2D_ARRAY):(E.setTexture2D(Z,0),Gt=q.TEXTURE_2D),Rt.activeTexture(q.TEXTURE0),Rt.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Z.flipY),Rt.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Rt.pixelStorei(q.UNPACK_ALIGNMENT,Z.unpackAlignment);const On=Rt.getParameter(q.UNPACK_ROW_LENGTH),ge=Rt.getParameter(q.UNPACK_IMAGE_HEIGHT),vn=Rt.getParameter(q.UNPACK_SKIP_PIXELS),ti=Rt.getParameter(q.UNPACK_SKIP_ROWS),Ri=Rt.getParameter(q.UNPACK_SKIP_IMAGES);Rt.pixelStorei(q.UNPACK_ROW_LENGTH,qe.width),Rt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,qe.height),Rt.pixelStorei(q.UNPACK_SKIP_PIXELS,kt),Rt.pixelStorei(q.UNPACK_SKIP_ROWS,Zt),Rt.pixelStorei(q.UNPACK_SKIP_IMAGES,re);const ei=A.isDataArrayTexture||A.isData3DTexture,Fe=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const $e=D.get(A),Ci=D.get(Z),Le=D.get($e.__renderTarget),Fi=D.get(Ci.__renderTarget);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,Le.__webglFramebuffer),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ua=0;Ua<Xt;Ua++)ei&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(A).__webglTexture,at,re+Ua),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(Z).__webglTexture,It,Je+Ua)),q.blitFramebuffer(kt,Zt,Vt,Ft,jt,Ae,Vt,Ft,q.DEPTH_BUFFER_BIT,q.NEAREST);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(at!==0||A.isRenderTargetTexture||D.has(A)){const $e=D.get(A),Ci=D.get(Z);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,hn),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,ll);for(let Le=0;Le<Xt;Le++)ei?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$e.__webglTexture,at,re+Le):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,$e.__webglTexture,at),Fe?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ci.__webglTexture,It,Je+Le):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ci.__webglTexture,It),at!==0?q.blitFramebuffer(kt,Zt,Vt,Ft,jt,Ae,Vt,Ft,q.COLOR_BUFFER_BIT,q.NEAREST):Fe?q.copyTexSubImage3D(Gt,It,jt,Ae,Je+Le,kt,Zt,Vt,Ft):q.copyTexSubImage2D(Gt,It,jt,Ae,kt,Zt,Vt,Ft);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Fe?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Gt,It,jt,Ae,Je,Vt,Ft,Xt,Oe,Pe,qe.data):Z.isCompressedArrayTexture?q.compressedTexSubImage3D(Gt,It,jt,Ae,Je,Vt,Ft,Xt,Oe,qe.data):q.texSubImage3D(Gt,It,jt,Ae,Je,Vt,Ft,Xt,Oe,Pe,qe):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,It,jt,Ae,Vt,Ft,Oe,Pe,qe.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,It,jt,Ae,qe.width,qe.height,Oe,qe.data):q.texSubImage2D(q.TEXTURE_2D,It,jt,Ae,Vt,Ft,Oe,Pe,qe);Rt.pixelStorei(q.UNPACK_ROW_LENGTH,On),Rt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ge),Rt.pixelStorei(q.UNPACK_SKIP_PIXELS,vn),Rt.pixelStorei(q.UNPACK_SKIP_ROWS,ti),Rt.pixelStorei(q.UNPACK_SKIP_IMAGES,Ri),It===0&&Z.generateMipmaps&&q.generateMipmap(Gt),Rt.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Rt.unbindTexture()},this.resetState=function(){V=0,ct=0,W=null,Rt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}const mv={type:"change"},mp={type:"start"},ux={type:"end"},Xc=new up,gv=new os,nR=Math.cos(70*xy.DEG2RAD),Sn=new Q,Kn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},id=1e-6;class iR extends rE{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:zr.ROTATE,TWO:zr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new hs,this._lastTargetPosition=new Q,this._quat=new hs().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new k0,this._sphericalDelta=new k0,this._scale=1,this._panOffset=new Q,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new Q,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sR.bind(this),this._onPointerDown=aR.bind(this),this._onPointerUp=rR.bind(this),this._onContextMenu=dR.bind(this),this._onMouseWheel=cR.bind(this),this._onKeyDown=uR.bind(this),this._onTouchStart=fR.bind(this),this._onTouchMove=hR.bind(this),this._onMouseDown=oR.bind(this),this._onMouseMove=lR.bind(this),this._interceptControlDown=pR.bind(this),this._interceptControlUp=mR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mv),this.update(),this.state=Xe.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Sn.copy(i).sub(this.target),Sn.applyQuaternion(this._quat),this._spherical.setFromVector3(Sn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Sn.setFromSpherical(this._spherical),Sn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=Sn.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new Q(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=Sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Xc.origin.copy(this.object.position),Xc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xc.direction))<nR?this.object.lookAt(this.target):(gv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xc.intersectPlane(gv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>id||this._lastTargetPosition.distanceToSquared(this.target)>id?(this.dispatchEvent(mv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Sn.setFromMatrixColumn(i,0),Sn.multiplyScalar(-t),this._panOffset.add(Sn)}_panUp(t,i){this.screenSpacePanning===!0?Sn.setFromMatrixColumn(i,1):(Sn.setFromMatrixColumn(i,0),Sn.crossVectors(this.object.up,Sn)),Sn.multiplyScalar(t),this._panOffset.add(Sn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Sn.copy(l).sub(this.target);let c=Sn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function aR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function sR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function rR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ux),this.state=Xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function oR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Hr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Hr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(mp)}function lR(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function cR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(mp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(ux))}function uR(r){this.enabled!==!1&&this._handleKeyDown(r)}function fR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case zr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case zr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case zr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case zr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(mp)}function hR(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function dR(r){this.enabled!==!1&&r.preventDefault()}function pR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class fx extends dp{constructor(t){super(t)}load(t,i,s,l){const c=this,h=new tE(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(p){try{i(c.parse(p))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},s,l)}parse(t){function i(d){const _=new DataView(d),v=32/8*3+32/8*3*3+16/8,g=_.getUint32(80,!0);if(80+32/8+g*v===_.byteLength)return!0;const b=[115,111,108,105,100];for(let C=0;C<5;C++)if(s(b,_,C))return!1;return!0}function s(d,_,v){for(let g=0,y=d.length;g<y;g++)if(d[g]!==_.getUint8(v+g))return!1;return!0}function l(d){const _=new DataView(d),v=_.getUint32(80,!0);let g,y,b,C=!1,M,S,w,N,P;for(let B=0;B<70;B++)_.getUint32(B,!1)==1129270351&&_.getUint8(B+4)==82&&_.getUint8(B+5)==61&&(C=!0,M=new Float32Array(v*3*3),S=_.getUint8(B+6)/255,w=_.getUint8(B+7)/255,N=_.getUint8(B+8)/255,P=_.getUint8(B+9)/255);const G=84,U=50,F=new pi,T=new Float32Array(v*3*3),O=new Float32Array(v*3*3),Y=new pe;for(let B=0;B<v;B++){const j=G+B*U,V=_.getFloat32(j,!0),ct=_.getFloat32(j+4,!0),W=_.getFloat32(j+8,!0);if(C){const L=_.getUint16(j+48,!0);(L&32768)===0?(g=(L&31)/31,y=(L>>5&31)/31,b=(L>>10&31)/31):(g=S,y=w,b=N)}for(let L=1;L<=3;L++){const z=j+L*12,tt=B*3*3+(L-1)*3;T[tt]=_.getFloat32(z,!0),T[tt+1]=_.getFloat32(z+4,!0),T[tt+2]=_.getFloat32(z+8,!0),O[tt]=V,O[tt+1]=ct,O[tt+2]=W,C&&(Y.setRGB(g,y,b,Gn),M[tt]=Y.r,M[tt+1]=Y.g,M[tt+2]=Y.b)}}return F.setAttribute("position",new di(T,3)),F.setAttribute("normal",new di(O,3)),C&&(F.setAttribute("color",new di(M,3)),F.hasColors=!0,F.alpha=P),F}function c(d){const _=new pi,v=/solid([\s\S]*?)endsolid/g,g=/facet([\s\S]*?)endfacet/g,y=/solid\s(.+)/;let b=0;const C=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,M=new RegExp("vertex"+C+C+C,"g"),S=new RegExp("normal"+C+C+C,"g"),w=[],N=[],P=[],G=new Q;let U,F=0,T=0,O=0;for(;(U=v.exec(d))!==null;){T=O;const Y=U[0],B=(U=y.exec(Y))!==null?U[1]:"";for(P.push(B);(U=g.exec(Y))!==null;){let ct=0,W=0;const L=U[0];for(;(U=S.exec(L))!==null;)G.x=parseFloat(U[1]),G.y=parseFloat(U[2]),G.z=parseFloat(U[3]),W++;for(;(U=M.exec(L))!==null;)w.push(parseFloat(U[1]),parseFloat(U[2]),parseFloat(U[3])),N.push(G.x,G.y,G.z),ct++,O++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+b),ct!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+b),b++}const j=T,V=O-T;_.userData.groupNames=P,_.addGroup(j,V,F),F++}return _.setAttribute("position",new Jn(w,3)),_.setAttribute("normal",new Jn(N,3)),_}function h(d){return typeof d!="string"?new TextDecoder().decode(d):d}function p(d){if(typeof d=="string"){const _=new Uint8Array(d.length);for(let v=0;v<d.length;v++)_[v]=d.charCodeAt(v)&255;return _.buffer||_}else return d}const m=p(t);return i(m)?l(m):c(h(t))}}const ad={schema_version:1,paper:{title:"P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning",authors:["Yikang Yang¹,²,*","Zhanpeng Hu¹,*","Youtian Lin¹,²","Mengqi Zhou¹,²","Feihu Zhang²","Jiaheng Liu¹","Yao Yao¹"],affiliations:["¹Nanjing University","²DreamTech","*Equal contribution."],abstract:"Multimodal large language models can write code and interpret rendered images of 3D designs, but it remains unclear whether they can produce executable parametric 3D programs that are geometrically precise, semantically aligned and assembly-consistent. We introduce P3D-Bench, a benchmark that evaluates this ability under a unified protocol across three task families: text-conditioned part synthesis, image-conditioned multi-part reconstruction and image-plus-annotation assembly composition, with metrics that jointly probe executability, geometric fidelity, topology, text-grounded constraints, multiview semantic alignment and part-level assembly structure.",links:{code:"https://github.com/LucasQAQ/p3d"}},tasks:[{id:"text2cad",label:"Text-to-3D",formats:["JSON","OpenSCAD"],status:"interactive"},{id:"image2cad",label:"Image-to-3D",formats:["CadQuery","OpenSCAD","Three.js"],status:"reserved"},{id:"text_image2cad",label:"Assembly-3D",formats:["CadQuery","OpenSCAD"],status:"reserved"}],models:[],cases:[],runs:[],figures:[{id:"pipeline",title:"Pipeline figure placeholder",placeholder:!0},{id:"leaderboard",title:"Leaderboard placeholder",placeholder:!0}],gallery:[]};function Vs(r){return r?r.startsWith("http")||r.startsWith("/")?r:`${"./".endsWith("/")?"./":".//"}demo/${r}`:""}function gR(){const[r,t]=we.useState(ad),[i,s]=we.useState("text2cad"),[l,c]=we.useState(""),[h,p]=we.useState(""),[m,d]=we.useState("descriptive"),[_,v]=we.useState("openscad"),[g,y]=we.useState("");we.useEffect(()=>{fetch(Vs("manifest.json")).then(V=>V.ok?V.json():ad).then(V=>t(V)).catch(()=>t(ad))},[]);const b=we.useMemo(()=>r.runs.filter(V=>V.task===i),[r,i]),C=we.useMemo(()=>r.cases.filter(V=>V.task===i||b.some(ct=>ct.case_id===V.id)),[r,i,b]),M=we.useMemo(()=>b.filter(V=>!l||V.case_id===l),[l,b]),S=we.useMemo(()=>r.models.filter(V=>M.some(ct=>ct.model===V.id)),[M,r.models]),w=we.useMemo(()=>M.filter(V=>!h||V.model===h),[M,h]),N=we.useMemo(()=>Array.from(new Set(w.map(V=>V.spec))).sort(),[w]),P=we.useMemo(()=>w.filter(V=>!m||V.spec===m),[w,m]),G=we.useMemo(()=>Array.from(new Set(P.map(V=>V.format))).sort(),[P]);we.useEffect(()=>{(!l||!C.some(V=>V.id===l))&&C[0]&&c(C[0].id),(!h||!S.some(V=>V.id===h))&&S[0]&&p(S[0].id),(!m||!N.includes(m))&&N[0]&&d(N[0]),(!_||!G.includes(_))&&G[0]&&v(G[0])},[l,C,_,G,h,S,m,N]);const U=b.find(V=>V.case_id===l&&V.model===h&&V.spec===m&&V.format===_),F=r.cases.find(V=>V.id===l),T=r.models.find(V=>V.id===h),O=we.useMemo(()=>_R(r),[r]),Y=we.useMemo(()=>O.slice(0,16),[O]),B=we.useMemo(()=>r.tasks.filter(V=>V.status==="interactive"),[r]);we.useEffect(()=>{const V=U?.assets.generated;if(!V){y("");return}fetch(Vs(V)).then(ct=>ct.ok?ct.text():"").then(y).catch(()=>y(""))},[U]);const j=r.paper;return ft.jsxs("main",{children:[ft.jsxs("nav",{className:"nav",children:[ft.jsx("a",{className:"brand",href:"#top",children:"P3D-Bench"}),ft.jsxs("div",{children:[ft.jsx("a",{href:"#results",children:"Results"}),ft.jsx("a",{href:"#pipeline",children:"Pipeline"}),ft.jsx("a",{href:"#gallery",children:"Viewer"})]})]}),ft.jsxs("section",{id:"top",className:"hero",children:[ft.jsxs("div",{className:"hero-copy",children:[ft.jsx("p",{className:"eyebrow",children:"Parametric 3D CAD Benchmark"}),ft.jsxs("h1",{className:"hero-title",children:[ft.jsx("span",{children:"P3D-Bench"}),ft.jsxs("small",{children:["Benchmarking MLLMs for ",ft.jsx("em",{children:"Parametric 3D"})," Generation and ",ft.jsx("em",{children:"Structural Reasoning"})]})]}),ft.jsx("div",{className:"authors",children:j.authors.map(V=>ft.jsx("span",{className:"author-name",children:yR(V)},V))}),ft.jsx("div",{className:"affiliations",children:j.affiliations?.map(V=>ft.jsx("span",{className:"affiliation-item",children:ER(V)},V))}),ft.jsxs("div",{className:"actions",children:[ft.jsxs("a",{href:j.links?.paper||"#pipeline",children:[ft.jsx(DM,{size:17})," Paper"]}),ft.jsxs("a",{href:j.links?.code||"https://github.com/LucasQAQ/p3d",children:[ft.jsx(NM,{size:17})," Page Repo"]}),ft.jsxs("a",{href:"#results",children:[ft.jsx(FM,{size:17})," Demo"]}),ft.jsxs("a",{href:"#citation",children:[ft.jsx(UM,{size:17})," BibTeX"]})]})]}),ft.jsx(xR,{items:Y}),ft.jsxs("div",{className:"abstract-panel",children:[ft.jsx("p",{className:"eyebrow",children:"Abstract"}),ft.jsx("p",{className:"abstract",children:j.abstract})]})]}),ft.jsx("section",{className:"task-strip",children:B.map(V=>ft.jsxs("button",{className:i===V.id?"task-card active":"task-card",onClick:()=>s(V.id),children:[ft.jsx("span",{children:V.label}),ft.jsx("strong",{children:V.formats.join(" / ")}),ft.jsx("em",{children:"public demo"})]},V.id))}),ft.jsxs("section",{id:"results",className:"section",children:[ft.jsxs("div",{className:"section-heading",children:[ft.jsx("p",{className:"eyebrow",children:"Interactive Results"}),ft.jsx("h2",{children:"Choose a case, model, input specification, and output format."})]}),b.length?ft.jsxs("div",{className:"workbench",children:[ft.jsxs("aside",{className:"controls",children:[ft.jsx(Wc,{label:"Case",value:l,options:C.map(V=>[V.id,V.title]),onChange:c}),ft.jsx(Wc,{label:"Model",value:h,options:S.map(V=>[V.id,V.label]),onChange:p}),ft.jsx(Wc,{label:"Spec",value:m,options:N.map(V=>[V,V]),onChange:d}),ft.jsx(Wc,{label:"Format",value:_,options:G.map(V=>[V,V.toUpperCase()]),onChange:v}),ft.jsxs("div",{className:"condition",children:[ft.jsx("span",{children:"Input"}),ft.jsx("p",{children:U?.condition||F?.title||"No result is available for this combination yet."})]})]}),ft.jsxs("div",{className:"result-stage",children:[ft.jsxs("div",{className:"render-pair",children:[ft.jsx(px,{title:"Ground Truth",src:U?.assets.gt_render}),ft.jsx(SR,{run:U,title:F?.title||"Prediction",subtitle:`${T?.label||U?.model||""}${U?` / ${U.format.toUpperCase()}`:""}`})]}),ft.jsx(bR,{run:U}),ft.jsxs("div",{className:"code-panel",children:[ft.jsxs("div",{className:"panel-title",children:[ft.jsx(LM,{size:18})," Generated ",U?.format?.toUpperCase()||"Artifact"]}),ft.jsx("pre",{children:ft.jsx("code",{children:g||"No generated artifact is bundled for this run."})})]})]})]}):ft.jsx(Qd,{title:"Results reserved",text:"The task contract is implemented in the repo. Public precomputed results for this task will be added in the next bundle."})]}),ft.jsxs("section",{id:"pipeline",className:"section",children:[ft.jsxs("div",{className:"section-heading",children:[ft.jsx("p",{className:"eyebrow",children:"Pipeline and Main Figures"}),ft.jsx("h2",{children:"Task protocol, format coverage, and leaderboard figures."})]}),ft.jsx("div",{className:"figure-grid",children:(r.figures||[]).filter(V=>V.id!=="teaser").map(V=>V.placeholder?ft.jsx(Qd,{title:V.title,text:"Figure placeholder. Replace with the final paper asset when ready."},V.id):ft.jsxs("figure",{className:"paper-figure",children:[ft.jsx("img",{src:Vs(V.src),alt:V.title}),ft.jsx("figcaption",{children:V.title})]},V.id))})]}),ft.jsxs("section",{id:"gallery",className:"section",children:[ft.jsxs("div",{className:"section-heading",children:[ft.jsx("p",{className:"eyebrow",children:"Text-to-3D Render Showcase"}),ft.jsx("h2",{children:"Executable CAD programs as live geometry."})]}),ft.jsx(vR,{items:O})]}),ft.jsxs("section",{id:"citation",className:"section citation",children:[ft.jsxs("div",{className:"citation-heading",children:[ft.jsx("h2",{children:"Citation"}),ft.jsx("p",{className:"citation-format",children:"BibTeX"})]}),ft.jsx("pre",{children:ft.jsx("code",{children:`@article{p3dbench2026,
  title={P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning},
  author={Yang, Yikang and Hu, Zhanpeng and Lin, Youtian and Zhou, Mengqi and Zhang, Feihu and Liu, Jiaheng and Yao, Yao},
  year={2026}
}`})})]})]})}function _R(r){const t=["gemini-reason","claude-reason","qwen-reason","gpt55-reason"],i=["json","openscad","json","openscad"],s=new Map(r.models.map(h=>[h.id,h.label])),l=new Map(r.cases.map(h=>[h.id,h.title])),c=new Map;return r.runs.filter(h=>h.task==="text2cad"&&h.assets.pred_render&&h.assets.mesh&&h.valid!==!1).forEach(h=>{const p=c.get(h.case_id)||[];p.push(h),c.set(h.case_id,p)}),r.cases.filter(h=>h.task==="text2cad").map((h,p)=>{const m=t[p%t.length],d=i[p%i.length];return[...c.get(h.id)||[]].sort((v,g)=>{const y=+(v.model!==m)-+(g.model!==m);if(y)return y;const b=+(v.format!==d)-+(g.format!==d);return b||v.id.localeCompare(g.id)})[0]}).filter(h=>!!h).map(h=>({id:h.id,title:l.get(h.case_id)||`Case ${h.case_id.split("/").pop()||h.case_id}`,subtitle:`${s.get(h.model)||h.model} / ${h.format.toUpperCase()}`,src:h.assets.pred_render||"",mesh:h.assets.mesh||""}))}function vR({items:r}){const[t,i]=we.useState(""),s=r.find(l=>l.id===t)||r[0];return we.useEffect(()=>{!t&&r[0]&&i(r[0].id)},[r,t]),r.length?ft.jsx("div",{className:"render-showcase",children:ft.jsxs("div",{className:"viewer-shell",children:[ft.jsxs("div",{className:"viewer-stage",children:[ft.jsx(hx,{item:s}),ft.jsxs("div",{className:"viewer-meta",children:[ft.jsx("span",{children:"Text-to-3D CAD"}),ft.jsx("strong",{children:s.title}),ft.jsx("em",{children:s.subtitle})]})]}),ft.jsxs("div",{className:"viewer-rail",children:[ft.jsxs("div",{className:"viewer-rail-header",children:[ft.jsxs("span",{children:[r.length," cases"]}),ft.jsx("strong",{children:"Bundled STL demo set"})]}),r.map((l,c)=>ft.jsxs("button",{className:l.id===s.id?"viewer-case active":"viewer-case",onClick:()=>i(l.id),style:{"--case-accent":_v[c%_v.length]},children:[ft.jsx("img",{src:Vs(l.src),alt:l.title}),ft.jsx("span",{children:l.title}),ft.jsx("strong",{children:l.subtitle})]},l.id))]})]})}):ft.jsx(Qd,{title:"Render showcase reserved",text:"Curated demo renders will appear here when bundled."})}const _v=["#16a47a","#2d69c4","#d8733f","#7668d8","#0e9daa","#d19b2d"];function xR({items:r}){const t=we.useRef(null);return we.useEffect(()=>{const i=t.current;if(!i||!r.length)return;const s=new Gv;s.background=new pe(16251124),s.fog=new lu(16251124,8.8,14.5);const l=new fi(30,1,.01,100);l.position.set(0,3.05,5.9),l.lookAt(0,0,0);const c=new cx({antialias:!0,alpha:!1});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(16251124,1),c.outputColorSpace=Gn,c.shadowMap.enabled=!0,c.shadowMap.type=tp,i.appendChild(c.domElement),s.add(new $v(16777215,14279132,2.4));const h=new su(16777215,3.4);h.position.set(4.5,6.5,5.2),h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=.1,h.shadow.camera.far=16,s.add(h);const p=new su(9291451,1.25);p.position.set(-5,3,-3),s.add(p);const m=new cs;m.position.set(0,.16,-.05),s.add(m);const d=new mi(new Yr(7.6,3.6),new Zv({color:5269087,opacity:.08}));d.rotation.x=-Math.PI/2,d.position.y=-.84,d.receiveShadow=!0,m.add(d);const _=r.slice(0,16),v=[15985367,14675174,15265269,15785429,14934768,14477807],g=new fx,y=[d.geometry],b=[d.material],C=[],M=[];let S=!1;_.forEach((F,T)=>{const O=T%8,Y=Math.floor(T/8),B=Y===0?.18:-.12,j=new cs;j.position.set((O-3.5)*.76,B,(Y-.5)*.95),j.rotation.y=(O-3.5)*.04,m.add(j),C.push(j),M.push(B),g.load(Vs(F.mesh),V=>{if(S){V.dispose();return}V.computeVertexNormals(),V.computeBoundingBox(),V.center();const ct=V.boundingBox,W=new Q;ct?.getSize(W);const L=Math.max(W.x,W.y,W.z)||1;V.scale(1.08/L,1.08/L,1.08/L),y.push(V);const z=new Qv({color:v[T%v.length],roughness:.58,metalness:.04});b.push(z);const tt=new cs;tt.rotation.x=-Math.PI/2,tt.rotation.z=(T%2?-1:1)*.18;const mt=new mi(V,z);mt.castShadow=!0,mt.receiveShadow=!0,tt.add(mt);const St=new jv(V,30),I=new hp({color:6713707,transparent:!0,opacity:.22});y.push(St),b.push(I),tt.add(new Wv(St,I)),j.add(tt)})});const w=()=>{const{clientWidth:F,clientHeight:T}=i,O=Math.max(320,F),Y=Math.max(360,T);c.setSize(O,Y,!1),l.aspect=O/Y,l.updateProjectionMatrix()},N=new ResizeObserver(w);N.observe(i),w();let P=0;const G=new sE,U=()=>{const F=G.getElapsedTime();P=requestAnimationFrame(U),m.rotation.y=Math.sin(F*.34)*.085,C.forEach((T,O)=>{T.position.y=M[O]+Math.sin(F*.9+O*.57)*.045}),c.render(s,l)};return U(),()=>{S=!0,cancelAnimationFrame(P),N.disconnect(),y.forEach(F=>F.dispose()),b.forEach(F=>F.dispose()),c.dispose(),c.domElement.remove()}},[r]),ft.jsx("div",{className:"hero-visual hero-cad-scene",children:ft.jsx("div",{className:"hero-cad-canvas",ref:t})})}function SR({run:r,title:t,subtitle:i}){return r?.assets.mesh?ft.jsxs("figure",{className:"render-card result-viewer-card",children:[ft.jsx("span",{children:"Prediction"}),ft.jsx("div",{className:"result-viewer",children:ft.jsx(hx,{item:{id:r.id,title:t,subtitle:i,src:r.assets.pred_render||"",mesh:r.assets.mesh},variant:"result"})})]}):ft.jsx(px,{title:"Prediction",src:r?.assets.pred_render})}function hx({item:r,variant:t="showcase"}){const i=we.useRef(null);return we.useEffect(()=>{const s=i.current;if(!s||!r.mesh)return;const l=new Gv;l.background=new pe(16251892),l.fog=new lu(16251892,6.5,11.5);const c=new fi(38,1,.01,100);c.position.set(3.6,2.35,t==="result"?4.35:4.7);const h=new cx({antialias:!0,alpha:!1});h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setClearColor(16251892,1),h.outputColorSpace=Gn,h.shadowMap.enabled=!0,h.shadowMap.type=tp,s.appendChild(h.domElement);const p=new iR(c,h.domElement);p.enableDamping=!0,p.autoRotate=!0,p.autoRotateSpeed=1.2,p.enablePan=!1,p.minDistance=2.2,p.maxDistance=7.5,l.add(new $v(16777215,11450547,2.1));const m=new su(16777215,3);m.position.set(3.5,4.5,3.2),m.castShadow=!0,m.shadow.mapSize.set(1024,1024),l.add(m);const d=new su(10214604,1.2);d.position.set(-3,2,-2.5),l.add(d);const _=new mi(new Yr(6,4),new Zv({color:5465695,opacity:.09}));_.rotation.x=-Math.PI/2,_.position.y=-1.06,_.receiveShadow=!0,l.add(_);const v=new cs;v.rotation.x=-Math.PI/2,l.add(v);let g=!1,y=0,b=null,C=null,M=null,S=null;new fx().load(Vs(r.mesh),U=>{if(g){U.dispose();return}U.computeVertexNormals(),U.computeBoundingBox(),U.center();const F=U.boundingBox,T=new Q;F?.getSize(T);const O=Math.max(T.x,T.y,T.z)||1,Y=t==="result"?2.32:2.08;U.scale(Y/O,Y/O,Y/O),U.computeBoundingBox(),b=U;const B=new Qv({color:16117212,roughness:.62,metalness:.05,emissive:2760981,emissiveIntensity:.02});C=B;const j=new mi(U,B);j.castShadow=!0,j.receiveShadow=!0,v.add(j),M=new jv(U,28),S=new hp({color:8288107,transparent:!0,opacity:t==="result"?.22:.26}),v.add(new Wv(M,S))});const N=()=>{const{clientWidth:U,clientHeight:F}=s,T=Math.max(320,U),O=Math.max(360,F);h.setSize(T,O,!1),c.aspect=T/O,c.updateProjectionMatrix()},P=new ResizeObserver(N);P.observe(s),N();const G=()=>{y=requestAnimationFrame(G),p.update(),h.render(l,c)};return G(),()=>{g=!0,cancelAnimationFrame(y),P.disconnect(),p.dispose(),b?.dispose(),C?.dispose(),M?.dispose(),S?.dispose(),_.geometry.dispose(),_.material.dispose(),h.dispose(),h.domElement.remove()}},[r.id,r.mesh,t]),ft.jsx("div",{className:"cad-viewer",ref:i})}function Wc({label:r,value:t,options:i,onChange:s}){return ft.jsxs("label",{className:"select-label",children:[ft.jsx("span",{children:r}),ft.jsx("select",{value:t,onChange:l=>s(l.target.value),children:i.map(([l,c])=>ft.jsx("option",{value:l,children:c},l))})]})}const MR={"⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9"};function dx(r){return r.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,t=>MR[t]||t)}function yR(r){const t=r.match(/^(.+?)([⁰¹²³⁴⁵⁶⁷⁸⁹,\*]+)$/);return t?ft.jsxs(ft.Fragment,{children:[t[1],ft.jsx("sup",{children:dx(t[2])})]}):r}function ER(r){const t=r.match(/^([⁰¹²³⁴⁵⁶⁷⁸⁹]+)(.+)$/);return t?ft.jsxs(ft.Fragment,{children:[ft.jsx("sup",{children:dx(t[1])}),t[2]]}):r}function px({title:r,src:t}){return ft.jsxs("figure",{className:"render-card",children:[ft.jsx("span",{children:r}),t?ft.jsx("img",{src:Vs(t),alt:r}):ft.jsxs("div",{className:"render-missing",children:[ft.jsx(OM,{}),"No render"]})]})}function bR({run:r}){const t=AR(r);return ft.jsx("div",{className:"metrics",children:t.length?t.map(i=>ft.jsxs("div",{className:"metric",children:[ft.jsx("span",{children:i.label}),ft.jsx("strong",{children:i.value})]},i.key)):ft.jsx("div",{className:"metric metric-empty",children:"No metrics bundled for this run."})})}const vv=["chamfer_distance","hausdorff_distance","f_score_005","f_score_001","normal_consistency","iou_csg","iou_voxel","pred_open_edge_ratio","qa_overall","qa_overall_accuracy","qa_semantic","qa_parametric","judge_geometry","judge_semantic","judge_aesthetics"],TR={chamfer_distance:"Chamfer",hausdorff_distance:"Hausdorff",f_score_005:"F@0.05",f_score_001:"F@0.01",normal_consistency:"Normal",iou_csg:"IoU CSG",iou_voxel:"IoU voxel",pred_open_edge_ratio:"Open edge",qa_overall:"Overall QA",qa_overall_accuracy:"Overall QA",qa_semantic:"Semantic QA",qa_parametric:"Parametric QA",judge_geometry:"Geometry score",judge_semantic:"Semantic score",judge_aesthetics:"Aesthetic score"};function AR(r){if(!r)return[];const t=r.metrics||{},s=[...vv.filter(l=>xv(l,t[l],r)),...Object.keys(t).filter(l=>!vv.includes(l)&&xv(l,t[l],r)).sort()].map(l=>({key:l,label:TR[l]||l.replace(/_/g," "),value:CR(l,t[l])}));return r.valid!==null&&r.valid!==void 0&&s.unshift({key:"valid",label:"Executable",value:r.valid?"yes":"no"}),s}function xv(r,t,i){return!(!RR(t)||r==="qa_parametric"&&i.spec!=="parametric"||r==="qa_parametric"&&typeof t=="number"&&t<=0)}function RR(r){return r!=null&&r!==""&&!(typeof r=="number"&&Number.isNaN(r))}function CR(r,t){return typeof t!="number"||r.startsWith("judge_")&&Number.isInteger(t)?String(t):r==="pred_open_edge_ratio"?t.toFixed(3):r.includes("chamfer")||r.includes("hausdorff")?t===0?"0":t<.01?t.toFixed(4):t.toFixed(3):t<1?t.toFixed(3):t.toFixed(2)}function Qd({title:r,text:t}){return ft.jsxs("div",{className:"placeholder",children:[ft.jsx(PM,{size:32}),ft.jsx("h3",{children:r}),ft.jsx("p",{children:t})]})}AM.createRoot(document.getElementById("root")).render(ft.jsx(gR,{}));
