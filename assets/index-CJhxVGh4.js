(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Sh={exports:{}},Wo={};var r0;function Cy(){if(r0)return Wo;r0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=t,Wo.jsx=i,Wo.jsxs=i,Wo}var o0;function wy(){return o0||(o0=1,Sh.exports=Cy()),Sh.exports}var q=wy(),yh={exports:{}},ae={};var l0;function Dy(){if(l0)return ae;l0=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function M(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function S(F,J,St){this.props=F,this.context=J,this.refs=y,this.updater=St||T}S.prototype.isReactComponent={},S.prototype.setState=function(F,J){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,J,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function w(){}w.prototype=S.prototype;function O(F,J,St){this.props=F,this.context=J,this.refs=y,this.updater=St||T}var P=O.prototype=new w;P.constructor=O,C(P,S.prototype),P.isPureReactComponent=!0;var B=Array.isArray;function U(){}var N={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function I(F,J,St){var tt=St.ref;return{$$typeof:r,type:F,key:J,ref:tt!==void 0?tt:null,props:St}}function W(F,J){return I(F.type,J,F.props)}function z(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function Y(F){var J={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(St){return J[St]})}var ut=/\/+/g;function ft(F,J){return typeof F=="object"&&F!==null&&F.key!=null?Y(""+F.key):J.toString(36)}function X(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(U,U):(F.status="pending",F.then(function(J){F.status==="pending"&&(F.status="fulfilled",F.value=J)},function(J){F.status==="pending"&&(F.status="rejected",F.reason=J)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function L(F,J,St,tt,At){var lt=typeof F;(lt==="undefined"||lt==="boolean")&&(F=null);var Mt=!1;if(F===null)Mt=!0;else switch(lt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(F.$$typeof){case r:case t:Mt=!0;break;case _:return Mt=F._init,L(Mt(F._payload),J,St,tt,At)}}if(Mt)return At=At(F),Mt=tt===""?"."+ft(F,0):tt,B(At)?(St="",Mt!=null&&(St=Mt.replace(ut,"$&/")+"/"),L(At,J,St,"",function(te){return te})):At!=null&&(z(At)&&(At=W(At,St+(At.key==null||F&&F.key===At.key?"":(""+At.key).replace(ut,"$&/")+"/")+Mt)),J.push(At)),1;Mt=0;var Tt=tt===""?".":tt+":";if(B(F))for(var Ht=0;Ht<F.length;Ht++)tt=F[Ht],lt=Tt+ft(tt,Ht),Mt+=L(tt,J,St,lt,At);else if(Ht=M(F),typeof Ht=="function")for(F=Ht.call(F),Ht=0;!(tt=F.next()).done;)tt=tt.value,lt=Tt+ft(tt,Ht++),Mt+=L(tt,J,St,lt,At);else if(lt==="object"){if(typeof F.then=="function")return L(X(F),J,St,tt,At);throw J=String(F),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function H(F,J,St){if(F==null)return F;var tt=[],At=0;return L(F,tt,"","",function(lt){return J.call(St,lt,At++)}),tt}function et(F){if(F._status===-1){var J=F._result;J=J(),J.then(function(St){(F._status===0||F._status===-1)&&(F._status=1,F._result=St)},function(St){(F._status===0||F._status===-1)&&(F._status=2,F._result=St)}),F._status===-1&&(F._status=0,F._result=J)}if(F._status===1)return F._result.default;throw F._result}var gt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},yt={map:H,forEach:function(F,J,St){H(F,function(){J.apply(this,arguments)},St)},count:function(F){var J=0;return H(F,function(){J++}),J},toArray:function(F){return H(F,function(J){return J})||[]},only:function(F){if(!z(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ae.Activity=v,ae.Children=yt,ae.Component=S,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=O,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ae.__COMPILER_RUNTIME={__proto__:null,c:function(F){return N.H.useMemoCache(F)}},ae.cache=function(F){return function(){return F.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(F,J,St){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var tt=C({},F.props),At=F.key;if(J!=null)for(lt in J.key!==void 0&&(At=""+J.key),J)!b.call(J,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&J.ref===void 0||(tt[lt]=J[lt]);var lt=arguments.length-2;if(lt===1)tt.children=St;else if(1<lt){for(var Mt=Array(lt),Tt=0;Tt<lt;Tt++)Mt[Tt]=arguments[Tt+2];tt.children=Mt}return I(F.type,At,tt)},ae.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},ae.createElement=function(F,J,St){var tt,At={},lt=null;if(J!=null)for(tt in J.key!==void 0&&(lt=""+J.key),J)b.call(J,tt)&&tt!=="key"&&tt!=="__self"&&tt!=="__source"&&(At[tt]=J[tt]);var Mt=arguments.length-2;if(Mt===1)At.children=St;else if(1<Mt){for(var Tt=Array(Mt),Ht=0;Ht<Mt;Ht++)Tt[Ht]=arguments[Ht+2];At.children=Tt}if(F&&F.defaultProps)for(tt in Mt=F.defaultProps,Mt)At[tt]===void 0&&(At[tt]=Mt[tt]);return I(F,lt,At)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(F){return{$$typeof:p,render:F}},ae.isValidElement=z,ae.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:et}},ae.memo=function(F,J){return{$$typeof:d,type:F,compare:J===void 0?null:J}},ae.startTransition=function(F){var J=N.T,St={};N.T=St;try{var tt=F(),At=N.S;At!==null&&At(St,tt),typeof tt=="object"&&tt!==null&&typeof tt.then=="function"&&tt.then(U,gt)}catch(lt){gt(lt)}finally{J!==null&&St.types!==null&&(J.types=St.types),N.T=J}},ae.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ae.use=function(F){return N.H.use(F)},ae.useActionState=function(F,J,St){return N.H.useActionState(F,J,St)},ae.useCallback=function(F,J){return N.H.useCallback(F,J)},ae.useContext=function(F){return N.H.useContext(F)},ae.useDebugValue=function(){},ae.useDeferredValue=function(F,J){return N.H.useDeferredValue(F,J)},ae.useEffect=function(F,J){return N.H.useEffect(F,J)},ae.useEffectEvent=function(F){return N.H.useEffectEvent(F)},ae.useId=function(){return N.H.useId()},ae.useImperativeHandle=function(F,J,St){return N.H.useImperativeHandle(F,J,St)},ae.useInsertionEffect=function(F,J){return N.H.useInsertionEffect(F,J)},ae.useLayoutEffect=function(F,J){return N.H.useLayoutEffect(F,J)},ae.useMemo=function(F,J){return N.H.useMemo(F,J)},ae.useOptimistic=function(F,J){return N.H.useOptimistic(F,J)},ae.useReducer=function(F,J,St){return N.H.useReducer(F,J,St)},ae.useRef=function(F){return N.H.useRef(F)},ae.useState=function(F){return N.H.useState(F)},ae.useSyncExternalStore=function(F,J,St){return N.H.useSyncExternalStore(F,J,St)},ae.useTransition=function(){return N.H.useTransition()},ae.version="19.2.6",ae}var c0;function ap(){return c0||(c0=1,yh.exports=Dy()),yh.exports}var Ee=ap(),Mh={exports:{}},jo={},Eh={exports:{}},bh={};var u0;function Uy(){return u0||(u0=1,(function(r){function t(L,H){var et=L.length;L.push(H);t:for(;0<et;){var gt=et-1>>>1,yt=L[gt];if(0<l(yt,H))L[gt]=H,L[et]=yt,et=gt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var H=L[0],et=L.pop();if(et!==H){L[0]=et;t:for(var gt=0,yt=L.length,F=yt>>>1;gt<F;){var J=2*(gt+1)-1,St=L[J],tt=J+1,At=L[tt];if(0>l(St,et))tt<yt&&0>l(At,St)?(L[gt]=At,L[tt]=et,gt=tt):(L[gt]=St,L[J]=et,gt=J);else if(tt<yt&&0>l(At,et))L[gt]=At,L[tt]=et,gt=tt;else break t}}return H}function l(L,H){var et=L.sortIndex-H.sortIndex;return et!==0?et:L.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],_=1,v=null,g=3,M=!1,T=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function P(L){for(var H=i(d);H!==null;){if(H.callback===null)s(d);else if(H.startTime<=L)s(d),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(d)}}function B(L){if(C=!1,P(L),!T)if(i(m)!==null)T=!0,U||(U=!0,Y());else{var H=i(d);H!==null&&X(B,H.startTime-L)}}var U=!1,N=-1,b=5,I=-1;function W(){return y?!0:!(r.unstable_now()-I<b)}function z(){if(y=!1,U){var L=r.unstable_now();I=L;var H=!0;try{t:{T=!1,C&&(C=!1,w(N),N=-1),M=!0;var et=g;try{e:{for(P(L),v=i(m);v!==null&&!(v.expirationTime>L&&W());){var gt=v.callback;if(typeof gt=="function"){v.callback=null,g=v.priorityLevel;var yt=gt(v.expirationTime<=L);if(L=r.unstable_now(),typeof yt=="function"){v.callback=yt,P(L),H=!0;break e}v===i(m)&&s(m),P(L)}else s(m);v=i(m)}if(v!==null)H=!0;else{var F=i(d);F!==null&&X(B,F.startTime-L),H=!1}}break t}finally{v=null,g=et,M=!1}H=void 0}}finally{H?Y():U=!1}}}var Y;if(typeof O=="function")Y=function(){O(z)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,ft=ut.port2;ut.port1.onmessage=z,Y=function(){ft.postMessage(null)}}else Y=function(){S(z,0)};function X(L,H){N=S(function(){L(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(L){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var et=g;g=H;try{return L()}finally{g=et}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var et=g;g=L;try{return H()}finally{g=et}},r.unstable_scheduleCallback=function(L,H,et){var gt=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?gt+et:gt):et=gt,L){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=et+yt,L={id:_++,callback:H,priorityLevel:L,startTime:et,expirationTime:yt,sortIndex:-1},et>gt?(L.sortIndex=et,t(d,L),i(m)===null&&L===i(d)&&(C?(w(N),N=-1):C=!0,X(B,et-gt))):(L.sortIndex=yt,t(m,L),T||M||(T=!0,U||(U=!0,Y()))),L},r.unstable_shouldYield=W,r.unstable_wrapCallback=function(L){var H=g;return function(){var et=g;g=H;try{return L.apply(this,arguments)}finally{g=et}}}})(bh)),bh}var f0;function Ly(){return f0||(f0=1,Eh.exports=Uy()),Eh.exports}var Th={exports:{}},Pn={};var h0;function Ny(){if(h0)return Pn;h0=1;var r=ap();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:d,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,_)},Pn.flushSync=function(m){var d=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=_,s.d.f()}},Pn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,v=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Pn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Pn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=p(_,d.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Pn.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,d){return m(d)},Pn.useFormState=function(m,d,_){return h.H.useFormState(m,d,_)},Pn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Pn.version="19.2.6",Pn}var d0;function Oy(){if(d0)return Th.exports;d0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Th.exports=Ny(),Th.exports}var p0;function Py(){if(p0)return jo;p0=1;var r=Ly(),t=ap(),i=Oy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=f;break}if(R===o){x=!0,o=u,a=f;break}R=R.sibling}if(!x){for(R=f.child;R;){if(R===a){x=!0,a=f,o=u;break}if(R===o){x=!0,o=f,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),O=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case B:return"Suspense";case U:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case O:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var X=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},gt=[],yt=-1;function F(e){return{current:e}}function J(e){0>yt||(e.current=gt[yt],gt[yt]=null,yt--)}function St(e,n){yt++,gt[yt]=e.current,e.current=n}var tt=F(null),At=F(null),lt=F(null),Mt=F(null);function Tt(e,n){switch(St(lt,n),St(At,e),St(tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?w_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=w_(n),e=D_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(tt),St(tt,e)}function Ht(){J(tt),J(At),J(lt)}function te(e){e.memoizedState!==null&&St(Mt,e);var n=tt.current,a=D_(n,e.type);n!==a&&(St(At,e),St(tt,a))}function Qt(e){At.current===e&&(J(tt),J(At)),Mt.current===e&&(J(Mt),Go._currentValue=et)}var We,he;function Se(e){if(We===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);We=n&&n[1]||"",he=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+e+he}var Ne=!1;function ce(e,n){if(!e||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ct){var ot=ct}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ct){ot=ct}e.call(xt.prototype)}}else{try{throw Error()}catch(ct){ot=ct}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ct){if(ct&&ot&&typeof ct.stack=="string")return[ct.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],R=f[1];if(x&&R){var G=x.split(`
`),it=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===it.length)for(o=G.length-1,u=it.length-1;1<=o&&0<=u&&G[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==it[u]){var pt=`
`+G[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Se(a):""}function ln(e,n){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==n&&n!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Se("Activity");default:return""}}function Ye(e){try{var n="",a=null;do n+=ln(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var An=Object.prototype.hasOwnProperty,j=r.unstable_scheduleCallback,en=r.unstable_cancelCallback,de=r.unstable_shouldYield,He=r.unstable_requestPaint,Ct=r.unstable_now,Qe=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,$=r.unstable_NormalPriority,vt=r.unstable_LowPriority,bt=r.unstable_IdlePriority,wt=r.log,Nt=r.unstable_setDisableYieldValue,ht=null,dt=null;function Ot(e){if(typeof wt=="function"&&Nt(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ht,e)}catch{}}var Pt=Math.clz32?Math.clz32:ne,Ut=Math.log,Dt=Math.LN2;function ne(e){return e>>>=0,e===0?32:31-(Ut(e)/Dt|0)|0}var ie=256,me=262144,V=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Rt(o):(x&=R,x!==0?u=Rt(x):a||(a=R&~e,a!==0&&(u=Rt(a))))):(R=o&~f,R!==0?u=Rt(R):x!==0?u=Rt(x):a||(a=o&~e,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Lt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var e=V;return V<<=1,(V&62914560)===0&&(V=4194304),e}function jt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ee(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nn(e,n,a,o,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,it=e.hiddenUpdates;for(a=x&~a;0<a;){var pt=31-Pt(a),xt=1<<pt;R[pt]=0,G[pt]=-1;var ot=it[pt];if(ot!==null)for(it[pt]=null,pt=0;pt<ot.length;pt++){var ct=ot[pt];ct!==null&&(ct.lane&=-536870913)}a&=~xt}o!==0&&De(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function De(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function gi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function $n(e,n){var a=n&-n;return a=(a&42)!==0?1:gs(a),(a&(e.suspendedLanes|n))!==0?0:a}function gs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Jr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $r(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:$_(e.type))}function to(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var Nn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Nn,Rn="__reactProps$"+Nn,Qi="__reactContainer$"+Nn,Ra="__reactEvents$"+Nn,ul="__reactListeners$"+Nn,qs="__reactHandles$"+Nn,eo="__reactResources$"+Nn,Ca="__reactMarker$"+Nn;function no(e){delete e[cn],delete e[Rn],delete e[Ra],delete e[ul],delete e[qs]}function wa(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Qi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=F_(e);e!==null;){if(a=e[cn])return a;e=F_(e)}return n}e=a,a=e.parentNode}return null}function Da(e){if(e=e[cn]||e[Qi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function _s(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ua(e){var n=e[eo];return n||(n=e[eo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(e){e[Ca]=!0}var fl=new Set,A={};function Z(e,n){rt(e,n),rt(e+"Capture",n)}function rt(e,n){for(A[e]=n,e=0;e<n.length;e++)fl.add(n[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},Ft={};function Vt(e){return An.call(Ft,e)?!0:An.call(st,e)?!1:at.test(e)?Ft[e]=!0:(st[e]=!0,!1)}function It(e,n,a){if(Vt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function re(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Re(e){if(!e._valueTracker){var n=re(e)?"checked":"value";e._valueTracker=Yt(e,n,""+e[n])}}function Je(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=re(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oe=/[\n"\\]/g;function Pe(e){return e.replace(Oe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(e,n,a,o,u,f,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Zt(n)):e.value!==""+Zt(n)&&(e.value=""+Zt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?ge(e,x,Zt(n)):a!=null?ge(e,x,Zt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Zt(R):e.removeAttribute("name")}function On(e,n,a,o,u,f,x,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Re(e);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Re(e)}function ge(e,n,a){n==="number"&&je(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ti(e,n,a){if(n!=null&&(n=""+Zt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Zt(a):""}function Ri(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(X(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Zt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Re(e)}function ei(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ie=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $e(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ie.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ci(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&$e(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&$e(e,f,n[f])}function Le(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),La=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vs(e){return La.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var gu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Zs=null;function Cp(e){var n=Da(e);if(n&&(e=n.stateNode)){var a=e[Rn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Gt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Rn]||null;if(!u)throw Error(s(90));Gt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Je(o)}break t;case"textarea":ti(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vn(e,!!a.multiple,n,!1)}}}var vu=!1;function wp(e,n,a){if(vu)return e(n,a);vu=!0;try{var o=e(n);return o}finally{if(vu=!1,(Ys!==null||Zs!==null)&&(Jl(),Ys&&(n=Ys,e=Zs,Zs=Ys=null,Cp(n),e)))for(n=0;n<e.length;n++)Cp(e[n])}}function io(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Rn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if($i)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){xu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{xu=!1}var Na=null,Su=null,hl=null;function Dp(){if(hl)return hl;var e,n=Su,a=n.length,o,u="value"in Na?Na.value:Na.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return hl=u.slice(e,1<o?1-o:void 0)}function dl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function pl(){return!0}function Up(){return!1}function kn(e){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?pl:Up,this.isPropagationStopped=Up,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=kn(xs),so=v({},xs,{view:0,detail:0}),Ax=kn(so),yu,Mu,ro,gl=v({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(yu=e.screenX-ro.screenX,Mu=e.screenY-ro.screenY):Mu=yu=0,ro=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Lp=kn(gl),Rx=v({},gl,{dataTransfer:0}),Cx=kn(Rx),wx=v({},so,{relatedTarget:0}),Eu=kn(wx),Dx=v({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=kn(Dx),Lx=v({},xs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nx=kn(Lx),Ox=v({},xs,{data:0}),Np=kn(Ox),Px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fx[e])?!!n[e]:!1}function bu(){return Bx}var zx=v({},so,{key:function(e){if(e.key){var n=Px[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ix[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hx=kn(zx),Gx=v({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=kn(Gx),Vx=v({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),kx=kn(Vx),Xx=v({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wx=kn(Xx),jx=v({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qx=kn(jx),Yx=v({},xs,{newState:0,oldState:0}),Zx=kn(Yx),Kx=[9,13,27,32],Tu=$i&&"CompositionEvent"in window,oo=null;$i&&"documentMode"in document&&(oo=document.documentMode);var Qx=$i&&"TextEvent"in window&&!oo,Pp=$i&&(!Tu||oo&&8<oo&&11>=oo),Ip=" ",Fp=!1;function Bp(e,n){switch(e){case"keyup":return Kx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function Jx(e,n){switch(e){case"compositionend":return zp(n);case"keypress":return n.which!==32?null:(Fp=!0,Ip);case"textInput":return e=n.data,e===Ip&&Fp?null:e;default:return null}}function $x(e,n){if(Ks)return e==="compositionend"||!Tu&&Bp(e,n)?(e=Dp(),hl=Su=Na=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pp&&n.locale!=="ko"?null:n.data;default:return null}}var tS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!tS[e.type]:n==="textarea"}function Gp(e,n,a,o){Ys?Zs?Zs.push(o):Zs=[o]:Ys=o,n=sc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var lo=null,co=null;function eS(e){E_(e,0)}function _l(e){var n=_s(e);if(Je(n))return e}function Vp(e,n){if(e==="change")return n}var kp=!1;if($i){var Au;if($i){var Ru="oninput"in document;if(!Ru){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Ru=typeof Xp.oninput=="function"}Au=Ru}else Au=!1;kp=Au&&(!document.documentMode||9<document.documentMode)}function Wp(){lo&&(lo.detachEvent("onpropertychange",jp),co=lo=null)}function jp(e){if(e.propertyName==="value"&&_l(co)){var n=[];Gp(n,co,e,_u(e)),wp(eS,n)}}function nS(e,n,a){e==="focusin"?(Wp(),lo=n,co=a,lo.attachEvent("onpropertychange",jp)):e==="focusout"&&Wp()}function iS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _l(co)}function aS(e,n){if(e==="click")return _l(n)}function sS(e,n){if(e==="input"||e==="change")return _l(n)}function rS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ni=typeof Object.is=="function"?Object.is:rS;function uo(e,n){if(ni(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!An.call(n,u)||!ni(e[u],n[u]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,n){var a=qp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qp(a)}}function Zp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=je(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=je(e.document)}return n}function Cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var oS=$i&&"documentMode"in document&&11>=document.documentMode,Qs=null,wu=null,fo=null,Du=!1;function Qp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||Qs==null||Qs!==je(o)||(o=Qs,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=sc(wu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Qs)))}function Ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},Uu={},Jp={};$i&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function ys(e){if(Uu[e])return Uu[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jp)return Uu[e]=n[a];return e}var $p=ys("animationend"),tm=ys("animationiteration"),em=ys("animationstart"),lS=ys("transitionrun"),cS=ys("transitionstart"),uS=ys("transitioncancel"),nm=ys("transitionend"),im=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function wi(e,n){im.set(e,n),Z(n,[e])}var vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],$s=0,Nu=0;function xl(){for(var e=$s,n=Nu=$s=0;n<e;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var f=_i[n];if(_i[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&am(a,u,f)}}function Sl(e,n,a,o){_i[$s++]=e,_i[$s++]=n,_i[$s++]=a,_i[$s++]=o,Nu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ou(e,n,a,o){return Sl(e,n,a,o),yl(e)}function Ms(e,n){return Sl(e,null,null,n),yl(e)}function am(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function yl(e){if(50<Oo)throw Oo=0,Xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var tr={};function fS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,o){return new fS(e,n,a,o)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function sm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ml(e,n,a,o,u,f){var x=0;if(o=e,typeof e=="function")Pu(e)&&(x=1);else if(typeof e=="string")x=gy(e,a,tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=ii(31,a,n,u),e.elementType=I,e.lanes=f,e;case C:return Es(a.children,u,f,n);case y:x=8,u|=24;break;case S:return e=ii(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case B:return e=ii(13,a,n,u),e.elementType=B,e.lanes=f,e;case U:return e=ii(19,a,n,u),e.elementType=U,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:x=10;break t;case w:x=9;break t;case P:x=11;break t;case N:x=14;break t;case b:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ii(x,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Es(e,n,a,o){return e=ii(7,e,o,n),e.lanes=a,e}function Iu(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function rm(e){var n=ii(18,null,null,0);return n.stateNode=e,n}function Fu(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var om=new WeakMap;function vi(e,n){if(typeof e=="object"&&e!==null){var a=om.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ye(n)},om.set(e,n),n)}return{value:e,source:n,stack:Ye(n)}}var er=[],nr=0,El=null,ho=0,xi=[],Si=0,Oa=null,Fi=1,Bi="";function ea(e,n){er[nr++]=ho,er[nr++]=El,El=e,ho=n}function lm(e,n,a){xi[Si++]=Fi,xi[Si++]=Bi,xi[Si++]=Oa,Oa=e;var o=Fi;e=Bi;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Fi=1<<32-Pt(n)+u|a<<u|o,Bi=f+e}else Fi=1<<f|a<<u|o,Bi=e}function Bu(e){e.return!==null&&(ea(e,1),lm(e,1,0))}function zu(e){for(;e===El;)El=er[--nr],er[nr]=null,ho=er[--nr],er[nr]=null;for(;e===Oa;)Oa=xi[--Si],xi[Si]=null,Bi=xi[--Si],xi[Si]=null,Fi=xi[--Si],xi[Si]=null}function cm(e,n){xi[Si++]=Fi,xi[Si++]=Bi,xi[Si++]=Oa,Fi=n.id,Bi=n.overflow,Oa=e}var Cn=null,Ze=null,be=!1,Pa=null,yi=!1,Hu=Error(s(519));function Ia(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(vi(n,e)),Hu}function um(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[Rn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)ve(Io[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Ri(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||R_(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Ia(e,!0)}function fm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Cn=Cn.return}}function ir(e){if(e!==Cn)return!1;if(!be)return fm(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sh(e.type,e.memoizedProps)),a=!a),a&&Ze&&Ia(e),fm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=I_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=I_(e)}else n===27?(n=Ze,Ka(e.type)?(e=uh,uh=null,Ze=e):Ze=n):Ze=Cn?Ei(e.stateNode.nextSibling):null;return!0}function bs(){Ze=Cn=null,be=!1}function Gu(){var e=Pa;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Pa=null),e}function po(e){Pa===null?Pa=[e]:Pa.push(e)}var Vu=F(null),Ts=null,na=null;function Fa(e,n,a){St(Vu,n._currentValue),n._currentValue=a}function ia(e){e._currentValue=Vu.current,J(Vu)}function ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Xu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),ku(f.return,a,e),o||(x=null);break t}f=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ku(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function ar(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;ni(u.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(u===Mt.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Go):e=[Go])}u=u.return}e!==null&&Xu(n,e,a,o),n.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Ts=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return hm(Ts,e)}function Tl(e,n){return Ts===null&&As(e),hm(e,n)}function hm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(e===null)throw Error(s(308));na=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else na=na.next=n;return a}var hS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},dS=r.unstable_scheduleCallback,pS=r.unstable_NormalPriority,dn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new hS,data:new Map,refCount:0}}function mo(e){e.refCount--,e.refCount===0&&dS(pS,function(){e.controller.abort()})}var go=null,ju=0,sr=0,rr=null;function mS(e,n){if(go===null){var a=go=[];ju=0,sr=Kf(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ju++,n.then(dm,dm),n}function dm(){if(--ju===0&&go!==null){rr!==null&&(rr.status="fulfilled");var e=go;go=null,sr=0,rr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function gS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var pm=L.S;L.S=function(e,n){Qg=Ct(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&mS(e,n),pm!==null&&pm(e,n)};var Rs=F(null);function qu(){var e=Rs.current;return e!==null?e:qe.pooledCache}function Al(e,n){n===null?St(Rs,Rs.current):St(Rs,n.pool)}function mm(){var e=qu();return e===null?null:{parent:dn._currentValue,pool:e}}var or=Error(s(460)),Yu=Error(s(474)),Rl=Error(s(542)),Cl={then:function(){}};function gm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _m(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xm(e),e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,xm(e),e}throw ws=n,or}}function Cs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ws=a,or):a}}var ws=null;function vm(){if(ws===null)throw Error(s(459));var e=ws;return ws=null,e}function xm(e){if(e===or||e===Rl)throw Error(s(483))}var lr=null,_o=0;function wl(e){var n=_o;return _o+=1,lr===null&&(lr=[]),_m(lr,e,n)}function vo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Dl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Sm(e){function n(K,k){if(e){var nt=K.deletions;nt===null?(K.deletions=[k],K.flags|=16):nt.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=ta(K,k),K.index=0,K.sibling=null,K}function f(K,k,nt){return K.index=nt,e?(nt=K.alternate,nt!==null?(nt=nt.index,nt<k?(K.flags|=67108866,k):nt):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,k,nt,_t){return k===null||k.tag!==6?(k=Iu(nt,K.mode,_t),k.return=K,k):(k=u(k,nt),k.return=K,k)}function G(K,k,nt,_t){var Kt=nt.type;return Kt===C?pt(K,k,nt.props.children,_t,nt.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&Cs(Kt)===k.type)?(k=u(k,nt.props),vo(k,nt),k.return=K,k):(k=Ml(nt.type,nt.key,nt.props,null,K.mode,_t),vo(k,nt),k.return=K,k)}function it(K,k,nt,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==nt.containerInfo||k.stateNode.implementation!==nt.implementation?(k=Fu(nt,K.mode,_t),k.return=K,k):(k=u(k,nt.children||[]),k.return=K,k)}function pt(K,k,nt,_t,Kt){return k===null||k.tag!==7?(k=Es(nt,K.mode,_t,Kt),k.return=K,k):(k=u(k,nt),k.return=K,k)}function xt(K,k,nt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Iu(""+k,K.mode,nt),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return nt=Ml(k.type,k.key,k.props,null,K.mode,nt),vo(nt,k),nt.return=K,nt;case T:return k=Fu(k,K.mode,nt),k.return=K,k;case b:return k=Cs(k),xt(K,k,nt)}if(X(k)||Y(k))return k=Es(k,K.mode,nt,null),k.return=K,k;if(typeof k.then=="function")return xt(K,wl(k),nt);if(k.$$typeof===O)return xt(K,Tl(K,k),nt);Dl(K,k)}return null}function ot(K,k,nt,_t){var Kt=k!==null?k.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Kt!==null?null:R(K,k,""+nt,_t);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case M:return nt.key===Kt?G(K,k,nt,_t):null;case T:return nt.key===Kt?it(K,k,nt,_t):null;case b:return nt=Cs(nt),ot(K,k,nt,_t)}if(X(nt)||Y(nt))return Kt!==null?null:pt(K,k,nt,_t,null);if(typeof nt.then=="function")return ot(K,k,wl(nt),_t);if(nt.$$typeof===O)return ot(K,k,Tl(K,nt),_t);Dl(K,nt)}return null}function ct(K,k,nt,_t,Kt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get(nt)||null,R(k,K,""+_t,Kt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case M:return K=K.get(_t.key===null?nt:_t.key)||null,G(k,K,_t,Kt);case T:return K=K.get(_t.key===null?nt:_t.key)||null,it(k,K,_t,Kt);case b:return _t=Cs(_t),ct(K,k,nt,_t,Kt)}if(X(_t)||Y(_t))return K=K.get(nt)||null,pt(k,K,_t,Kt,null);if(typeof _t.then=="function")return ct(K,k,nt,wl(_t),Kt);if(_t.$$typeof===O)return ct(K,k,nt,Tl(k,_t),Kt);Dl(k,_t)}return null}function Wt(K,k,nt,_t){for(var Kt=null,Ce=null,qt=k,ue=k=0,Me=null;qt!==null&&ue<nt.length;ue++){qt.index>ue?(Me=qt,qt=null):Me=qt.sibling;var we=ot(K,qt,nt[ue],_t);if(we===null){qt===null&&(qt=Me);break}e&&qt&&we.alternate===null&&n(K,qt),k=f(we,k,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we,qt=Me}if(ue===nt.length)return a(K,qt),be&&ea(K,ue),Kt;if(qt===null){for(;ue<nt.length;ue++)qt=xt(K,nt[ue],_t),qt!==null&&(k=f(qt,k,ue),Ce===null?Kt=qt:Ce.sibling=qt,Ce=qt);return be&&ea(K,ue),Kt}for(qt=o(qt);ue<nt.length;ue++)Me=ct(qt,K,ue,nt[ue],_t),Me!==null&&(e&&Me.alternate!==null&&qt.delete(Me.key===null?ue:Me.key),k=f(Me,k,ue),Ce===null?Kt=Me:Ce.sibling=Me,Ce=Me);return e&&qt.forEach(function(es){return n(K,es)}),be&&ea(K,ue),Kt}function $t(K,k,nt,_t){if(nt==null)throw Error(s(151));for(var Kt=null,Ce=null,qt=k,ue=k=0,Me=null,we=nt.next();qt!==null&&!we.done;ue++,we=nt.next()){qt.index>ue?(Me=qt,qt=null):Me=qt.sibling;var es=ot(K,qt,we.value,_t);if(es===null){qt===null&&(qt=Me);break}e&&qt&&es.alternate===null&&n(K,qt),k=f(es,k,ue),Ce===null?Kt=es:Ce.sibling=es,Ce=es,qt=Me}if(we.done)return a(K,qt),be&&ea(K,ue),Kt;if(qt===null){for(;!we.done;ue++,we=nt.next())we=xt(K,we.value,_t),we!==null&&(k=f(we,k,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return be&&ea(K,ue),Kt}for(qt=o(qt);!we.done;ue++,we=nt.next())we=ct(qt,K,ue,we.value,_t),we!==null&&(e&&we.alternate!==null&&qt.delete(we.key===null?ue:we.key),k=f(we,k,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return e&&qt.forEach(function(Ry){return n(K,Ry)}),be&&ea(K,ue),Kt}function ke(K,k,nt,_t){if(typeof nt=="object"&&nt!==null&&nt.type===C&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case M:t:{for(var Kt=nt.key;k!==null;){if(k.key===Kt){if(Kt=nt.type,Kt===C){if(k.tag===7){a(K,k.sibling),_t=u(k,nt.props.children),_t.return=K,K=_t;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&Cs(Kt)===k.type){a(K,k.sibling),_t=u(k,nt.props),vo(_t,nt),_t.return=K,K=_t;break t}a(K,k);break}else n(K,k);k=k.sibling}nt.type===C?(_t=Es(nt.props.children,K.mode,_t,nt.key),_t.return=K,K=_t):(_t=Ml(nt.type,nt.key,nt.props,null,K.mode,_t),vo(_t,nt),_t.return=K,K=_t)}return x(K);case T:t:{for(Kt=nt.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===nt.containerInfo&&k.stateNode.implementation===nt.implementation){a(K,k.sibling),_t=u(k,nt.children||[]),_t.return=K,K=_t;break t}else{a(K,k);break}else n(K,k);k=k.sibling}_t=Fu(nt,K.mode,_t),_t.return=K,K=_t}return x(K);case b:return nt=Cs(nt),ke(K,k,nt,_t)}if(X(nt))return Wt(K,k,nt,_t);if(Y(nt)){if(Kt=Y(nt),typeof Kt!="function")throw Error(s(150));return nt=Kt.call(nt),$t(K,k,nt,_t)}if(typeof nt.then=="function")return ke(K,k,wl(nt),_t);if(nt.$$typeof===O)return ke(K,k,Tl(K,nt),_t);Dl(K,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,k!==null&&k.tag===6?(a(K,k.sibling),_t=u(k,nt),_t.return=K,K=_t):(a(K,k),_t=Iu(nt,K.mode,_t),_t.return=K,K=_t),x(K)):a(K,k)}return function(K,k,nt,_t){try{_o=0;var Kt=ke(K,k,nt,_t);return lr=null,Kt}catch(qt){if(qt===or||qt===Rl)throw qt;var Ce=ii(29,qt,null,K.mode);return Ce.lanes=_t,Ce.return=K,Ce}}}var Ds=Sm(!0),ym=Sm(!1),Ba=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=yl(e),am(e,null,a),n}return Sl(e,o,n,a),yl(e)}function xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gi(e,a)}}function Qu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ju=!1;function So(){if(Ju){var e=rr;if(e!==null)throw e}}function yo(e,n,a,o){Ju=!1;var u=e.updateQueue;Ba=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,it=G.next;G.next=null,x===null?f=it:x.next=it,x=G;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==x&&(R===null?pt.firstBaseUpdate=it:R.next=it,pt.lastBaseUpdate=G))}if(f!==null){var xt=u.baseState;x=0,pt=it=G=null,R=f;do{var ot=R.lane&-536870913,ct=ot!==R.lane;if(ct?(ye&ot)===ot:(o&ot)===ot){ot!==0&&ot===sr&&(Ju=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=e,$t=R;ot=n;var ke=a;switch($t.tag){case 1:if(Wt=$t.payload,typeof Wt=="function"){xt=Wt.call(ke,xt,ot);break t}xt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=$t.payload,ot=typeof Wt=="function"?Wt.call(ke,xt,ot):Wt,ot==null)break t;xt=v({},xt,ot);break t;case 2:Ba=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[ot]:ct.push(ot))}else ct={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(it=pt=ct,G=xt):pt=pt.next=ct,x|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);pt===null&&(G=xt),u.baseState=G,u.firstBaseUpdate=it,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),Wa|=x,e.lanes=x,e.memoizedState=xt}}function Mm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Em(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Mm(a[e],n)}var cr=F(null),Ul=F(0);function bm(e,n){e=ha,St(Ul,e),St(cr,n),ha=e|n.baseLanes}function $u(){St(Ul,ha),St(cr,cr.current)}function tf(){ha=Ul.current,J(cr),J(Ul)}var ai=F(null),Mi=null;function Ga(e){var n=e.alternate;St(un,un.current&1),St(ai,e),Mi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(Mi=e)}function ef(e){St(un,un.current),St(ai,e),Mi===null&&(Mi=e)}function Tm(e){e.tag===22?(St(un,un.current),St(ai,e),Mi===null&&(Mi=e)):Va()}function Va(){St(un,un.current),St(ai,ai.current)}function si(e){J(ai),Mi===e&&(Mi=null),J(un)}var un=F(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lh(a)||ch(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aa=0,oe=null,Ge=null,pn=null,Nl=!1,ur=!1,Us=!1,Ol=0,Mo=0,fr=null,_S=0;function an(){throw Error(s(321))}function nf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ni(e[a],n[a]))return!1;return!0}function af(e,n,a,o,u,f){return aa=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?lg:xf,Us=!1,f=a(o,u),Us=!1,ur&&(f=Rm(n,a,o,u)),Am(e),f}function Am(e){L.H=To;var n=Ge!==null&&Ge.next!==null;if(aa=0,pn=Ge=oe=null,Nl=!1,Mo=0,fr=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&bl(e)&&(mn=!0))}function Rm(e,n,a,o){oe=e;var u=0;do{if(ur&&(fr=null),Mo=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,pn=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=cg,f=n(a,o)}while(ur);return f}function vS(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?Eo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(oe.flags|=1024),n}function sf(){var e=Ol!==0;return Ol=0,e}function rf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function of(e){if(Nl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Nl=!1}aa=0,pn=Ge=oe=null,ur=!1,Mo=Ol=0,fr=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?oe.memoizedState=pn=e:pn=pn.next=e,pn}function fn(){if(Ge===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=pn===null?oe.memoizedState:pn.next;if(n!==null)pn=n,Ge=e;else{if(e===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},pn===null?oe.memoizedState=pn=e:pn=pn.next=e}return pn}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var n=Mo;return Mo+=1,fr===null&&(fr=[]),e=_m(fr,e,n),n=oe,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?lg:xf),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===O)return wn(e)}throw Error(s(438,String(e)))}function lf(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=W;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Fl(e){var n=fn();return cf(n,Ge,e)}function cf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=x=null,G=null,it=n,pt=!1;do{var xt=it.lane&-536870913;if(xt!==it.lane?(ye&xt)===xt:(aa&xt)===xt){var ot=it.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),xt===sr&&(pt=!0);else if((aa&ot)===ot){it=it.next,ot===sr&&(pt=!0);continue}else xt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(R=G=xt,x=f):G=G.next=xt,oe.lanes|=ot,Wa|=ot;xt=it.action,Us&&a(f,xt),f=it.hasEagerState?it.eagerState:a(f,xt)}else ot={lane:xt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(R=G=ot,x=f):G=G.next=ot,oe.lanes|=xt,Wa|=xt;it=it.next}while(it!==null&&it!==n);if(G===null?x=f:G.next=R,!ni(f,e.memoizedState)&&(mn=!0,pt&&(a=rr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function uf(e){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);ni(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Cm(e,n,a){var o=oe,u=fn(),f=be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ni((Ge||u).memoizedState,a);if(x&&(u.memoizedState=a,mn=!0),u=u.queue,df(Um.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Dm.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));f||(aa&127)!==0||wm(o,n,a)}return a}function wm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Pl(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Dm(e,n,a,o){n.value=a,n.getSnapshot=o,Lm(n)&&Nm(e)}function Um(e,n,a){return a(function(){Lm(n)&&Nm(e)})}function Lm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ni(e,a)}catch{return!0}}function Nm(e){var n=Ms(e,2);n!==null&&Yn(n,e,2)}function ff(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),Us){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function Om(e,n,a,o){return e.baseState=a,cf(e,Ge,typeof o=="function"?o:sa)}function xS(e,n,a,o,u){if(Hl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Pm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Pm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=L.T,x={};L.T=x;try{var R=a(u,o),G=L.S;G!==null&&G(x,R),Im(e,n,R)}catch(it){hf(e,n,it)}finally{f!==null&&x.types!==null&&(f.types=x.types),L.T=f}}else try{f=a(u,o),Im(e,n,f)}catch(it){hf(e,n,it)}}function Im(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Fm(e,n,o)},function(o){return hf(e,n,o)}):Fm(e,n,a)}function Fm(e,n,a){n.status="fulfilled",n.value=a,Bm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Pm(e,a)))}function hf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==o)}e.action=null}function Bm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function zm(e,n){return n}function Hm(e,n){if(be){var a=qe.formState;if(a!==null){t:{var o=oe;if(be){if(Ze){e:{for(var u=Ze,f=yi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ei(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=Ei(u.nextSibling),o=u.data==="F!";break t}}Ia(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:n},a.queue=o,a=sg.bind(null,oe,o),o.dispatch=a,o=ff(!1),f=vf.bind(null,oe,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=xS.bind(null,oe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Gm(e){var n=fn();return Vm(n,Ge,e)}function Vm(e,n,a){if(n=cf(e,n,zm)[0],e=Fl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(x){throw x===or?Rl:x}else o=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,hr(9,{destroy:void 0},SS.bind(null,u,a),null)),[o,f,e]}function SS(e,n){e.action=n}function km(e){var n=fn(),a=Ge;if(a!==null)return Vm(n,a,e);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function hr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Pl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Xm(){return fn().memoizedState}function Bl(e,n,a,o){var u=zn();oe.flags|=e,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function zl(e,n,a,o){var u=fn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ge!==null&&o!==null&&nf(o,Ge.memoizedState.deps)?u.memoizedState=hr(n,f,a,o):(oe.flags|=e,u.memoizedState=hr(1|n,f,a,o))}function Wm(e,n){Bl(8390656,8,e,n)}function df(e,n){zl(2048,8,e,n)}function yS(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Pl(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function jm(e){var n=fn().memoizedState;return yS({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function qm(e,n){return zl(4,2,e,n)}function Ym(e,n){return zl(4,4,e,n)}function Zm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Km(e,n,a){a=a!=null?a.concat([e]):null,zl(4,4,Zm.bind(null,n,e),a)}function pf(){}function Qm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Jm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=e(),Us){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o}function mf(e,n,a){return a===void 0||(aa&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=$g(),oe.lanes|=e,Wa|=e,a)}function $m(e,n,a,o){return ni(a,n)?a:cr.current!==null?(e=mf(e,a,o),ni(e,n)||(mn=!0),e):(aa&42)===0||(aa&1073741824)!==0&&(ye&261930)===0?(mn=!0,e.memoizedState=a):(e=$g(),oe.lanes|=e,Wa|=e,n)}function tg(e,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var x=L.T,R={};L.T=R,vf(e,!1,n,a);try{var G=u(),it=L.S;if(it!==null&&it(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pt=gS(G,o);bo(e,n,pt,li(e))}else bo(e,n,o,li(e))}catch(xt){bo(e,n,{then:function(){},status:"rejected",reason:xt},li())}finally{H.p=f,x!==null&&R.types!==null&&(x.types=R.types),L.T=x}}function MS(){}function gf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=eg(e).queue;tg(e,u,n,et,a===null?MS:function(){return ng(e),a(o)})}function eg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ng(e){var n=eg(e);n.next===null&&(n=e.alternate.memoizedState),bo(e,n.next.queue,{},li())}function _f(){return wn(Go)}function ig(){return fn().memoizedState}function ag(){return fn().memoizedState}function ES(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();e=za(a);var o=Ha(n,e,a);o!==null&&(Yn(o,n,a),xo(o,n,a)),n={cache:Wu()},e.payload=n;return}n=n.return}}function bS(e,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?rg(n,a):(a=Ou(e,n,a,o),a!==null&&(Yn(a,e,o),og(a,n,o)))}function sg(e,n,a){var o=li();bo(e,n,a,o)}function bo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))rg(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,R=f(x,a);if(u.hasEagerState=!0,u.eagerState=R,ni(R,x))return Sl(e,n,u,0),qe===null&&xl(),!1}catch{}if(a=Ou(e,n,u,o),a!==null)return Yn(a,e,o),og(a,n,o),!0}return!1}function vf(e,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(s(479))}else n=Ou(e,a,o,2),n!==null&&Yn(n,e,2)}function Hl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function rg(e,n){ur=Nl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function og(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gi(e,a)}}var To={readContext:wn,use:Il,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};To.useEffectEvent=an;var lg={readContext:wn,use:Il,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Wm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Bl(4194308,4,Zm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Bl(4194308,4,e,n)},useInsertionEffect:function(e,n){Bl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var o=e();if(Us){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=zn();if(a!==void 0){var u=a(n);if(Us){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=bS.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=ff(e);var n=e.queue,a=sg.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(e,n){var a=zn();return mf(a,e,n)},useTransition:function(){var e=ff(!1);return e=tg.bind(null,oe,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=oe,u=zn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(ye&127)!==0||wm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Wm(Um.bind(null,o,f,e),[e]),o.flags|=2048,hr(9,{destroy:void 0},Dm.bind(null,o,f,a,n),null),a},useId:function(){var e=zn(),n=qe.identifierPrefix;if(be){var a=Bi,o=Fi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_S++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:_f,useFormState:Hm,useActionState:Hm,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:lf,useCacheRefresh:function(){return zn().memoizedState=ES.bind(null,oe)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:wn,use:Il,useCallback:Qm,useContext:wn,useEffect:df,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:Fl,useRef:Xm,useState:function(){return Fl(sa)},useDebugValue:pf,useDeferredValue:function(e,n){var a=fn();return $m(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Fl(sa)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:Cm,useId:ig,useHostTransitionStatus:_f,useFormState:Gm,useActionState:Gm,useOptimistic:function(e,n){var a=fn();return Om(a,Ge,e,n)},useMemoCache:lf,useCacheRefresh:ag};xf.useEffectEvent=jm;var cg={readContext:wn,use:Il,useCallback:Qm,useContext:wn,useEffect:df,useImperativeHandle:Km,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Jm,useReducer:uf,useRef:Xm,useState:function(){return uf(sa)},useDebugValue:pf,useDeferredValue:function(e,n){var a=fn();return Ge===null?mf(a,e,n):$m(a,Ge.memoizedState,e,n)},useTransition:function(){var e=uf(sa)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:Cm,useId:ig,useHostTransitionStatus:_f,useFormState:km,useActionState:km,useOptimistic:function(e,n){var a=fn();return Ge!==null?Om(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:ag};cg.useEffectEvent=jm;function Sf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=li(),u=za(o);u.payload=n,a!=null&&(u.callback=a),n=Ha(e,u,o),n!==null&&(Yn(n,e,o),xo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=li(),u=za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(e,u,o),n!==null&&(Yn(n,e,o),xo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=li(),o=za(a);o.tag=2,n!=null&&(o.callback=n),n=Ha(e,o,a),n!==null&&(Yn(n,e,a),xo(n,e,a))}};function ug(e,n,a,o,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(u,f):!0}function fg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&yf.enqueueReplaceState(n,n.state,null)}function Ls(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function hg(e){vl(e)}function dg(e){console.error(e)}function pg(e){vl(e)}function Gl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function mg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mf(e,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(e,n)},a}function gg(e){return e=za(e),e.tag=3,e}function _g(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){mg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){mg(n,a,o),typeof u!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function TS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return Mi===null?$l():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),qf(e,o,u)),!1;case 22:return a.flags|=65536,o===Cl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),qf(e,o,u)),!1}throw Error(s(435,a.tag))}return qf(e,o,u),$l(),!1}if(be)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(e=Error(s(422),{cause:o}),po(vi(e,a)))):(o!==Hu&&(n=Error(s(423),{cause:o}),po(vi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=vi(o,a),u=Mf(e.stateNode,o,u),Qu(e,u),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:o});if(f=vi(f,a),No===null?No=[f]:No.push(f),sn!==4&&(sn=2),n===null)return!0;o=vi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Mf(a.stateNode,o,e),Qu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ja===null||!ja.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=gg(u),_g(u,e,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(s(461)),mn=!1;function Dn(e,n,a,o){n.child=e===null?ym(n,null,a,o):Ds(n,e.child,a,o)}function vg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return As(n),o=af(e,n,a,x,f,u),R=sf(),e!==null&&!mn?(rf(e,n,u),ra(e,n,u)):(be&&R&&Bu(n),n.flags|=1,Dn(e,n,o,u),n.child)}function xg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Sg(e,n,f,o,u)):(e=Ml(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Uf(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(x,o)&&e.ref===n.ref)return ra(e,n,u)}return n.flags|=1,e=ta(f,o),e.ref=n.ref,e.return=n,n.child=e}function Sg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(uo(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,Uf(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,ra(e,n,u)}return bf(e,n,a,o,u)}function yg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Mg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Al(n,f!==null?f.cachePool:null),f!==null?bm(n,f):$u(),Tm(n);else return o=n.lanes=536870912,Mg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Al(n,f.cachePool),bm(n,f),Va(),n.memoizedState=null):(e!==null&&Al(n,null),$u(),Va());return Dn(e,n,u,a),n.child}function Ao(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Mg(e,n,a,o,u){var f=qu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Al(n,null),$u(),Tm(n),e!==null&&ar(e,n,o,!0),n.childLanes=u,null}function Vl(e,n){return n=Xl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Eg(e,n,a){return Ds(n,e.child,null,a),e=Vl(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function AS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(be){if(o.mode==="hidden")return e=Vl(n,o),n.lanes=536870912,Ao(null,e);if(ef(n),(e=Ze)?(e=P_(e,yi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Fi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=n,n.child=a,Cn=n,Ze=null)):e=null,e===null)throw Ia(n);return n.lanes=536870912,null}return Vl(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=Eg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||ar(e,n,a,!1),u=(a&e.childLanes)!==0,mn||u){if(o=qe,o!==null&&(x=$n(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Ms(e,x),Yn(o,e,x),Ef;$l(),n=Eg(e,n,a)}else e=f.treeContext,Ze=Ei(x.nextSibling),Cn=n,be=!0,Pa=null,yi=!1,e!==null&&cm(n,e),n=Vl(n,o),n.flags|=4096;return n}return e=ta(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function kl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function bf(e,n,a,o,u){return As(n),a=af(e,n,a,o,void 0,u),o=sf(),e!==null&&!mn?(rf(e,n,u),ra(e,n,u)):(be&&o&&Bu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function bg(e,n,a,o,u,f){return As(n),n.updateQueue=null,a=Rm(n,o,a,u),Am(e),o=sf(),e!==null&&!mn?(rf(e,n,f),ra(e,n,f)):(be&&o&&Bu(n),n.flags|=1,Dn(e,n,a,f),n.child)}function Tg(e,n,a,o,u){if(As(n),n.stateNode===null){var f=tr,x=a.contextType;typeof x=="object"&&x!==null&&(f=wn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Zu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?wn(x):tr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Sf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&yf.enqueueReplaceState(f,f.state,null),yo(n,o,f,u),So(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=Ls(a,R);f.props=G;var it=f.context,pt=a.contextType;x=tr,typeof pt=="object"&&pt!==null&&(x=wn(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||it!==x)&&fg(n,f,o,x),Ba=!1;var ot=n.memoizedState;f.state=ot,yo(n,o,f,u),So(),it=n.memoizedState,R||ot!==it||Ba?(typeof xt=="function"&&(Sf(n,a,xt,o),it=n.memoizedState),(G=Ba||ug(n,a,G,o,ot,it,x))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=x,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ku(e,n),x=n.memoizedProps,pt=Ls(a,x),f.props=pt,xt=n.pendingProps,ot=f.context,it=a.contextType,G=tr,typeof it=="object"&&it!==null&&(G=wn(it)),R=a.getDerivedStateFromProps,(it=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==xt||ot!==G)&&fg(n,f,o,G),Ba=!1,ot=n.memoizedState,f.state=ot,yo(n,o,f,u),So();var ct=n.memoizedState;x!==xt||ot!==ct||Ba||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof R=="function"&&(Sf(n,a,R,o),ct=n.memoizedState),(pt=Ba||ug(n,a,pt,o,ot,ct,G)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ct,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ct,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),f.props=o,f.state=ct,f.context=G,o=pt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,kl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ds(n,e.child,null,u),n.child=Ds(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ra(e,n,u),e}function Ag(e,n,a,o){return bs(),n.flags|=256,Dn(e,n,a,o),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(e){return{baseLanes:e,cachePool:mm()}}function Rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function Rg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(u?Ga(n):Va(),(e=Ze)?(e=P_(e,yi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Oa!==null?{id:Fi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=rm(e),a.return=n,n.child=a,Cn=n,Ze=null)):e=null,e===null)throw Ia(n);return ch(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Va(),u=n.mode,R=Xl({mode:"hidden",children:R},u),o=Es(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(e,x,a),n.memoizedState=Tf,Ao(null,o)):(Ga(n),Cf(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Ga(n),n.flags&=-257,n=wf(e,n,a)):n.memoizedState!==null?(Va(),n.child=e.child,n.flags|=128,n=null):(Va(),R=o.fallback,u=n.mode,o=Xl({mode:"visible",children:o.children},u),R=Es(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ds(n,e.child,null,a),o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(e,x,a),n.memoizedState=Tf,n=Ao(null,o));else if(Ga(n),ch(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var it=x.dgst;x=it,o=Error(s(419)),o.stack="",o.digest=x,po({value:o,source:null,stack:null}),n=wf(e,n,a)}else if(mn||ar(e,n,a,!1),x=(a&e.childLanes)!==0,mn||x){if(x=qe,x!==null&&(o=$n(x,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Ms(e,o),Yn(x,e,o),Ef;lh(R)||$l(),n=wf(e,n,a)}else lh(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Ze=Ei(R.nextSibling),Cn=n,be=!0,Pa=null,yi=!1,e!==null&&cm(n,e),n=Cf(n,o.children),n.flags|=4096);return n}return u?(Va(),R=o.fallback,u=n.mode,G=e.child,it=G.sibling,o=ta(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,it!==null?R=ta(it,R):(R=Es(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ao(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Af(a):(u=R.cachePool,u!==null?(G=dn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=mm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Rf(e,x,a),n.memoizedState=Tf,Ao(e.child,o)):(Ga(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Cf(e,n){return n=Xl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Xl(e,n){return e=ii(22,e,null,n),e.lanes=0,e}function wf(e,n,a){return Ds(n,e.child,null,a),e=Cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ku(e.return,n,a)}function Df(e,n,a,o,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function wg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=un.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,St(un,x),Dn(e,n,o,a),o=be?ho:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cg(e,a,n);else if(e.tag===19)Cg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ll(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Df(n,!0,a,null,f,o);break;case"together":Df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function RS(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Fa(n,dn,e.memoizedState.cache),bs();break;case 27:case 5:te(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rg(e,n,a):(Ga(n),e=ra(e,n,a),e!==null?e.sibling:null);Ga(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ar(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return wg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(un,un.current),o)break;return null;case 22:return n.lanes=0,yg(e,n,a,n.pendingProps);case 24:Fa(n,dn,e.memoizedState.cache)}return ra(e,n,a)}function Dg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Uf(e,a)&&(n.flags&128)===0)return mn=!1,RS(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,be&&(n.flags&1048576)!==0&&lm(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Cs(n.elementType),n.type=e,typeof e=="function")Pu(e)?(o=Ls(e,o),n.tag=1,n=Tg(null,n,e,o,a)):(n.tag=0,n=bf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===P){n.tag=11,n=vg(null,n,e,o,a);break t}else if(u===N){n.tag=14,n=xg(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return bf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ls(o,n.pendingProps),Tg(e,n,o,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ku(e,n),yo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Fa(n,dn,o),o!==f.cache&&Xu(n,[dn],a,!0),So(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ag(e,n,o,a);break t}else if(o!==u){u=vi(Error(s(424)),n),po(u),n=Ag(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=Ei(e.firstChild),Cn=n,be=!0,Pa=null,yi=!0,a=ym(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),o===u){n=ra(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return kl(e,n),e===null?(a=G_(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,o=rc(lt.current).createElement(a),o[cn]=n,o[Rn]=e,Un(o,a,e),hn(o),n.stateNode=o):n.memoizedState=G_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return te(n),e===null&&be&&(o=n.stateNode=B_(n.type,n.pendingProps,lt.current),Cn=n,yi=!0,u=Ze,Ka(n.type)?(uh=u,Ze=Ei(o.firstChild)):Ze=u),Dn(e,n,n.pendingProps.children,a),kl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((u=o=Ze)&&(o=iy(o,n.type,n.pendingProps,yi),o!==null?(n.stateNode=o,Cn=n,Ze=Ei(o.firstChild),yi=!1,u=!0):u=!1),u||Ia(n)),te(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,sh(u,f)?o=null:x!==null&&sh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=af(e,n,vS,null,null,a),Go._currentValue=u),kl(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&be&&((e=a=Ze)&&(a=ay(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Cn=n,Ze=null,e=!0):e=!1),e||Ia(n)),null;case 13:return Rg(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ds(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return vg(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,As(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return xg(e,n,n.type,n.pendingProps,a);case 15:return Sg(e,n,n.type,n.pendingProps,a);case 19:return wg(e,n,a);case 31:return AS(e,n,a);case 22:return yg(e,n,a,n.pendingProps);case 24:return As(n),o=wn(dn),e===null?(u=qu(),u===null&&(u=qe,f=Wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Zu(n),Fa(n,dn,u)):((e.lanes&a)!==0&&(Ku(e,n),yo(n,null,null,a),So()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,dn,o)):(o=f.cache,Fa(n,dn,o),o!==u.cache&&Xu(n,[dn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function oa(e){e.flags|=4}function Lf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(i_())e.flags|=8192;else throw ws=Cl,Yu}else e.flags&=-16777217}function Ug(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!j_(n))if(i_())e.flags|=8192;else throw ws=Cl,Yu}function Wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Et():536870912,e.lanes|=n,gr|=n)}function Ro(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function CS(e,n,a){var o=n.pendingProps;switch(zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ia(dn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(n)?oa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(oa(n),f!==null?(Ke(n),Ug(n,f)):(Ke(n),Lf(n,u,null,o,a))):f?f!==e.memoizedState?(oa(n),Ke(n),Ug(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&oa(n),Ke(n),Lf(n,u,e,o,a)),null;case 27:if(Qt(n),a=lt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=tt.current,ir(n)?um(n):(e=B_(u,o,a),n.stateNode=e,oa(n))}return Ke(n),null;case 5:if(Qt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=tt.current,ir(n))um(n);else{var x=rc(lt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[cn]=n,f[Rn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&oa(n)}}return Ke(n),Lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&oa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=lt.current,ir(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||R_(e.nodeValue,a)),e||Ia(n,!0)}else e=rc(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ir(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ir(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Wl(n,n.updateQueue),Ke(n),null);case 4:return Ht(),e===null&&th(n.stateNode.containerInfo),Ke(n),null;case 10:return ia(n.type),Ke(n),null;case 19:if(J(un),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ro(o,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ll(e),f!==null){for(n.flags|=128,Ro(o,!1),e=f.updateQueue,n.updateQueue=e,Wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)sm(a,e),a=a.sibling;return St(un,un.current&1|2),be&&ea(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Ct()>Kl&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ll(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Wl(n,e),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!be)return Ke(n),null}else 2*Ct()-o.renderingStartTime>Kl&&a!==536870912&&(n.flags|=128,u=!0,Ro(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ct(),e.sibling=null,a=un.current,St(un,u?a&1|2:a&1),be&&ea(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return si(n),tf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(Rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ia(dn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function wS(e,n){switch(zu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ia(dn),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(un),null;case 4:return Ht(),null;case 10:return ia(n.type),null;case 22:case 23:return si(n),tf(),e!==null&&J(Rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ia(dn),null;case 25:return null;default:return null}}function Lg(e,n){switch(zu(n),n.tag){case 3:ia(dn),Ht();break;case 26:case 27:case 5:Qt(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:J(un);break;case 10:ia(n.type);break;case 22:case 23:si(n),tf(),e!==null&&J(Rs);break;case 24:ia(dn)}}function Co(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){Be(n,n.return,R)}}function ka(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var G=a,it=R;try{it()}catch(pt){Be(u,G,pt)}}}o=o.next}while(o!==f)}}catch(pt){Be(n,n.return,pt)}}function Ng(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Em(n,a)}catch(o){Be(e,e.return,o)}}}function Og(e,n,a){a.props=Ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function wo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function Pg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Nf(e,n,a){try{var o=e.stateNode;QS(o,e.type,a,n),o[Rn]=n}catch(u){Be(e,e.return,u)}}function Ig(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ka(e.type)||e.tag===4}function Of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ig(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(o!==4&&(o===27&&Ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Pf(e,n,a),e=e.sibling;e!==null;)Pf(e,n,a),e=e.sibling}function jl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,n,a),e=e.sibling;e!==null;)jl(e,n,a),e=e.sibling}function Fg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[cn]=e,n[Rn]=a}catch(f){Be(e,e.return,f)}}var la=!1,gn=!1,If=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,En=null;function DS(e,n){if(e=e.containerInfo,ih=dc,e=Kp(e),Cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,R=-1,G=-1,it=0,pt=0,xt=e,ot=null;e:for(;;){for(var ct;xt!==a||u!==0&&xt.nodeType!==3||(R=x+u),xt!==f||o!==0&&xt.nodeType!==3||(G=x+o),xt.nodeType===3&&(x+=xt.nodeValue.length),(ct=xt.firstChild)!==null;)ot=xt,xt=ct;for(;;){if(xt===e)break e;if(ot===a&&++it===u&&(R=x),ot===f&&++pt===o&&(G=x),(ct=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=ct}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(ah={focusedElem:e,selectionRange:a},dc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Wt=Ls(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Be(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)oh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function zg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),o&4&&Co(5,a);break;case 1:if(ua(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Be(a,a.return,x)}else{var u=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Be(a,a.return,x)}}o&64&&Ng(a),o&512&&wo(a,a.return);break;case 3:if(ua(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Em(e,n)}catch(x){Be(a,a.return,x)}}break;case 27:n===null&&o&4&&Fg(a);case 26:case 5:ua(e,a),n===null&&o&4&&Pg(a),o&512&&wo(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),o&4&&Vg(e,a);break;case 13:ua(e,a),o&4&&kg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=zS.bind(null,a),sy(e,a))));break;case 22:if(o=a.memoizedState!==null||la,!o){n=n!==null&&n.memoizedState!==null||gn,u=la;var f=gn;la=o,(gn=n)&&!f?fa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),la=u,gn=f}break;case 30:break;default:ua(e,a)}}function Hg(e){var n=e.alternate;n!==null&&(e.alternate=null,Hg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&no(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Xn=!1;function ca(e,n,a){for(a=a.child;a!==null;)Gg(e,n,a),a=a.sibling}function Gg(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:gn||zi(a,n),ca(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||zi(a,n);var o=tn,u=Xn;Ka(a.type)&&(tn=a.stateNode,Xn=!1),ca(e,n,a),Bo(a.stateNode),tn=o,Xn=u;break;case 5:gn||zi(a,n);case 6:if(o=tn,u=Xn,tn=null,ca(e,n,a),tn=o,Xn=u,tn!==null)if(Xn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:tn!==null&&(Xn?(e=tn,N_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),br(e)):N_(tn,a.stateNode));break;case 4:o=tn,u=Xn,tn=a.stateNode.containerInfo,Xn=!0,ca(e,n,a),tn=o,Xn=u;break;case 0:case 11:case 14:case 15:ka(2,a,n),gn||ka(4,a,n),ca(e,n,a);break;case 1:gn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Og(a,n,o)),ca(e,n,a);break;case 21:ca(e,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,ca(e,n,a),gn=o;break;default:ca(e,n,a)}}function Vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{br(e)}catch(a){Be(n,n.return,a)}}}function kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{br(e)}catch(a){Be(n,n.return,a)}}function US(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Bg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Bg),n;default:throw Error(s(435,e.tag))}}function ql(e,n){var a=US(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=HS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,x=n,R=x;t:for(;R!==null;){switch(R.tag){case 27:if(Ka(R.type)){tn=R.stateNode,Xn=!1;break t}break;case 5:tn=R.stateNode,Xn=!1;break t;case 3:case 4:tn=R.stateNode.containerInfo,Xn=!0;break t}R=R.return}if(tn===null)throw Error(s(160));Gg(f,x,u),tn=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Xg(n,e),n=n.sibling}var Di=null;function Xg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),jn(e),o&4&&(ka(3,e,e.return),Co(3,e),ka(5,e,e.return));break;case 1:Wn(n,e),jn(e),o&512&&(gn||a===null||zi(a,a.return)),o&64&&la&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Di;if(Wn(n,e),jn(e),o&512&&(gn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ca]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[cn]=e,hn(f),o=f;break t;case"link":var x=X_("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(f=x[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(x=X_("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(f=x[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[cn]=e,hn(f),o=f}e.stateNode=o}else W_(u,e.type,e.stateNode);else e.stateNode=k_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?W_(u,e.type,e.stateNode):k_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Nf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),jn(e),o&512&&(gn||a===null||zi(a,a.return)),a!==null&&o&4&&Nf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),jn(e),o&512&&(gn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{ei(u,"")}catch(Wt){Be(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Nf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(If=!0);break;case 6:if(Wn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){Be(e,e.return,Wt)}}break;case 3:if(cc=null,u=Di,Di=oc(n.containerInfo),Wn(n,e),Di=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(Wt){Be(e,e.return,Wt)}If&&(If=!1,Wg(e));break;case 4:o=Di,Di=oc(e.stateNode.containerInfo),Wn(n,e),jn(e),Di=o;break;case 12:Wn(n,e),jn(e);break;case 31:Wn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 13:Wn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=Ct()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,it=la,pt=gn;if(la=it||u,gn=pt||G,Wn(n,e),gn=pt,la=it,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||la||gn||Ns(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=G.stateNode;var xt=G.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Wt){Be(G,G.return,Wt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Wt){Be(G,G.return,Wt)}}}else if(n.tag===18){if(a===null){G=n;try{var ct=G.stateNode;u?O_(ct,!0):O_(G.stateNode,!1)}catch(Wt){Be(G,G.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ql(e,a))));break;case 19:Wn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ql(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Ig(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Of(e);jl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(ei(x,""),a.flags&=-33);var R=Of(e);jl(e,R,x);break;case 3:case 4:var G=a.stateNode.containerInfo,it=Of(e);Pf(e,it,G);break;default:throw Error(s(161))}}catch(pt){Be(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Wg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Wg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zg(e,n.alternate,n),n=n.sibling}function Ns(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ka(4,n,n.return),Ns(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Og(n,n.return,a),Ns(n);break;case 27:Bo(n.stateNode);case 26:case 5:zi(n,n.return),Ns(n);break;case 22:n.memoizedState===null&&Ns(n);break;case 30:Ns(n);break;default:Ns(n)}e=e.sibling}}function fa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:fa(u,f,a),Co(4,f);break;case 1:if(fa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Be(o,o.return,it)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Mm(G[u],R)}catch(it){Be(o,o.return,it)}}a&&x&64&&Ng(f),wo(f,f.return);break;case 27:Fg(f);case 26:case 5:fa(u,f,a),a&&o===null&&x&4&&Pg(f),wo(f,f.return);break;case 12:fa(u,f,a);break;case 31:fa(u,f,a),a&&x&4&&Vg(u,f);break;case 13:fa(u,f,a),a&&x&4&&kg(u,f);break;case 22:f.memoizedState===null&&fa(u,f,a),wo(f,f.return);break;case 30:break;default:fa(u,f,a)}n=n.sibling}}function Ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&mo(a))}function Bf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mo(e))}function Ui(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jg(e,n,a,o),n=n.sibling}function jg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,o),u&2048&&Co(9,n);break;case 1:Ui(e,n,a,o);break;case 3:Ui(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&mo(e)));break;case 12:if(u&2048){Ui(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,R=f.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Be(n,n.return,G)}}else Ui(e,n,a,o);break;case 31:Ui(e,n,a,o);break;case 13:Ui(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ui(e,n,a,o):Do(e,n):f._visibility&2?Ui(e,n,a,o):(f._visibility|=2,dr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(x,n);break;case 24:Ui(e,n,a,o),u&2048&&Bf(n.alternate,n);break;default:Ui(e,n,a,o)}}function dr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,R=a,G=o,it=x.flags;switch(x.tag){case 0:case 11:case 15:dr(f,x,R,G,u),Co(8,x);break;case 23:break;case 22:var pt=x.stateNode;x.memoizedState!==null?pt._visibility&2?dr(f,x,R,G,u):Do(f,x):(pt._visibility|=2,dr(f,x,R,G,u)),u&&it&2048&&Ff(x.alternate,x);break;case 24:dr(f,x,R,G,u),u&&it&2048&&Bf(x.alternate,x);break;default:dr(f,x,R,G,u)}n=n.sibling}}function Do(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&Ff(o.alternate,o);break;case 24:Do(a,o),u&2048&&Bf(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Uo=8192;function pr(e,n,a){if(e.subtreeFlags&Uo)for(e=e.child;e!==null;)qg(e,n,a),e=e.sibling}function qg(e,n,a){switch(e.tag){case 26:pr(e,n,a),e.flags&Uo&&e.memoizedState!==null&&_y(a,Di,e.memoizedState,e.memoizedProps);break;case 5:pr(e,n,a);break;case 3:case 4:var o=Di;Di=oc(e.stateNode.containerInfo),pr(e,n,a),Di=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,pr(e,n,a),Uo=o):pr(e,n,a));break;default:pr(e,n,a)}}function Yg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Kg(o,e)}Yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zg(e),e=e.sibling}function Zg(e){switch(e.tag){case 0:case 11:case 15:Lo(e),e.flags&2048&&ka(9,e,e.return);break;case 3:Lo(e);break;case 12:Lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Yl(e)):Lo(e);break;default:Lo(e)}}function Yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Kg(o,e)}Yg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ka(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}e=e.sibling}}function Kg(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,f=o.return;if(Hg(o),o===a){En=null;break t}if(u!==null){u.return=f,En=u;break t}En=f}}}var LS={getCacheForType:function(e){var n=wn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(dn).controller.signal}},NS=typeof WeakMap=="function"?WeakMap:Map,Ue=0,qe=null,_e=null,ye=0,Fe=0,ri=null,Xa=!1,mr=!1,zf=!1,ha=0,sn=0,Wa=0,Os=0,Hf=0,oi=0,gr=0,No=null,qn=null,Gf=!1,Zl=0,Qg=0,Kl=1/0,Ql=null,ja=null,xn=0,qa=null,_r=null,da=0,Vf=0,kf=null,Jg=null,Oo=0,Xf=null;function li(){return(Ue&2)!==0&&ye!==0?ye&-ye:L.T!==null?Kf():$r()}function $g(){if(oi===0)if((ye&536870912)===0||be){var e=me;me<<=1,(me&3932160)===0&&(me=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function Yn(e,n,a){(e===qe&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(vr(e,0),Ya(e,ye,oi,!1)),ee(e,a),((Ue&2)===0||e!==qe)&&(e===qe&&((Ue&2)===0&&(Os|=a),sn===4&&Ya(e,ye,oi,!1)),Hi(e))}function t_(e,n,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=o?IS(e,n):jf(e,n,!0),f=o;do{if(u===0){mr&&!o&&Ya(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!OS(a)){u=jf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=e;u=No;var G=R.current.memoizedState.isDehydrated;if(G&&(vr(R,x).flags|=256),x=jf(R,x,!1),x!==2){if(zf&&!G){R.errorRecoveryDisabledLanes|=f,Os|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){vr(e,0),Ya(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ya(o,n,oi,!Xa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Zl+300-Ct(),10<u)){if(Ya(o,n,oi,!Xa),mt(o,0,!0)!==0)break t;da=n,o.timeoutHandle=U_(e_.bind(null,o,a,qn,Ql,Gf,n,oi,Os,gr,Xa,f,"Throttled",-0,0),u);break t}e_(o,a,qn,Ql,Gf,n,oi,Os,gr,Xa,f,null,-0,0)}}break}while(!0);Hi(e)}function e_(e,n,a,o,u,f,x,R,G,it,pt,xt,ot,ct){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},qg(n,f,xt);var Wt=(f&62914560)===f?Zl-Ct():(f&4194048)===f?Qg-Ct():0;if(Wt=vy(xt,Wt),Wt!==null){da=f,e.cancelPendingCommit=Wt(c_.bind(null,e,n,f,a,o,u,x,R,G,pt,xt,null,ot,ct)),Ya(e,f,x,!it);return}}c_(e,n,f,a,o,u,x,R,G)}function OS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ni(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(e,n,a,o){n&=~Hf,n&=~Os,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&De(e,a,n)}function Jl(){return(Ue&6)===0?(Po(0),!1):!0}function Wf(){if(_e!==null){if(Fe===0)var e=_e.return;else e=_e,na=Ts=null,of(e),lr=null,_o=0,e=_e;for(;e!==null;)Lg(e.alternate,e),e=e.return;_e=null}}function vr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ty(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),da=0,Wf(),qe=e,_e=a=ta(e.current,null),ye=n,Fe=0,ri=null,Xa=!1,mr=Bt(e,n),zf=!1,gr=oi=Hf=Os=Wa=sn=0,qn=No=null,Gf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),f=1<<u;n|=e[u],o&=~f}return ha=n,xl(),a}function n_(e,n){oe=null,L.H=To,n===or||n===Rl?(n=vm(),Fe=3):n===Yu?(n=vm(),Fe=4):Fe=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,_e===null&&(sn=1,Gl(e,vi(n,e.current)))}function i_(){var e=ai.current;return e===null?!0:(ye&4194048)===ye?Mi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Mi:!1}function a_(){var e=L.H;return L.H=To,e===null?To:e}function s_(){var e=L.A;return L.A=LS,e}function $l(){sn=4,Xa||(ye&4194048)!==ye&&ai.current!==null||(mr=!0),(Wa&134217727)===0&&(Os&134217727)===0||qe===null||Ya(qe,ye,oi,!1)}function jf(e,n,a){var o=Ue;Ue|=2;var u=a_(),f=s_();(qe!==e||ye!==n)&&(Ql=null,vr(e,n)),n=!1;var x=sn;t:do try{if(Fe!==0&&_e!==null){var R=_e,G=ri;switch(Fe){case 8:Wf(),x=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var it=Fe;if(Fe=0,ri=null,xr(e,R,G,it),a&&mr){x=0;break t}break;default:it=Fe,Fe=0,ri=null,xr(e,R,G,it)}}PS(),x=sn;break}catch(pt){n_(e,pt)}while(!0);return n&&e.shellSuspendCounter++,na=Ts=null,Ue=o,L.H=u,L.A=f,_e===null&&(qe=null,ye=0,xl()),x}function PS(){for(;_e!==null;)r_(_e)}function IS(e,n){var a=Ue;Ue|=2;var o=a_(),u=s_();qe!==e||ye!==n?(Ql=null,Kl=Ct()+500,vr(e,n)):mr=Bt(e,n);t:do try{if(Fe!==0&&_e!==null){n=_e;var f=ri;e:switch(Fe){case 1:Fe=0,ri=null,xr(e,n,f,1);break;case 2:case 9:if(gm(f)){Fe=0,ri=null,o_(n);break}n=function(){Fe!==2&&Fe!==9||qe!==e||(Fe=7),Hi(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:gm(f)?(Fe=0,ri=null,o_(n)):(Fe=0,ri=null,xr(e,n,f,7));break;case 5:var x=null;switch(_e.tag){case 26:x=_e.memoizedState;case 5:case 27:var R=_e;if(x?j_(x):R.stateNode.complete){Fe=0,ri=null;var G=R.sibling;if(G!==null)_e=G;else{var it=R.return;it!==null?(_e=it,tc(it)):_e=null}break e}}Fe=0,ri=null,xr(e,n,f,5);break;case 6:Fe=0,ri=null,xr(e,n,f,6);break;case 8:Wf(),sn=6;break t;default:throw Error(s(462))}}FS();break}catch(pt){n_(e,pt)}while(!0);return na=Ts=null,L.H=o,L.A=u,Ue=a,_e!==null?0:(qe=null,ye=0,xl(),sn)}function FS(){for(;_e!==null&&!de();)r_(_e)}function r_(e){var n=Dg(e.alternate,e,ha);e.memoizedProps=e.pendingProps,n===null?tc(e):_e=n}function o_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=bg(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=bg(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:of(n);default:Lg(a,n),n=_e=sm(n,ha),n=Dg(a,n,ha)}e.memoizedProps=e.pendingProps,n===null?tc(e):_e=n}function xr(e,n,a,o){na=Ts=null,of(n),lr=null,_o=0;var u=n.return;try{if(TS(e,u,n,a,ye)){sn=1,Gl(e,vi(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;sn=1,Gl(e,vi(a,e.current)),_e=null;return}n.flags&32768?(be||o===1?e=!0:mr||(ye&536870912)!==0?e=!1:(Xa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),l_(n,e)):tc(n)}function tc(e){var n=e;do{if((n.flags&32768)!==0){l_(n,Xa);return}e=n.return;var a=CS(n.alternate,n,ha);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);sn===0&&(sn=5)}function l_(e,n){do{var a=wS(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);sn=6,_e=null}function c_(e,n,a,o,u,f,x,R,G){e.cancelPendingCommit=null;do ec();while(xn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Nu,nn(e,a,f,x,R,G),e===qe&&(_e=qe=null,ye=0),_r=n,qa=e,da=a,Vf=f,kf=u,Jg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,GS($,function(){return p_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=H.p,H.p=2,x=Ue,Ue|=4;try{DS(e,n,a)}finally{Ue=x,H.p=u,L.T=o}}xn=1,u_(),f_(),h_()}}function u_(){if(xn===1){xn=0;var e=qa,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=H.p;H.p=2;var u=Ue;Ue|=4;try{Xg(n,e);var f=ah,x=Kp(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(x!==R&&R&&R.ownerDocument&&Zp(R.ownerDocument.documentElement,R)){if(G!==null&&Cu(R)){var it=G.start,pt=G.end;if(pt===void 0&&(pt=it),"selectionStart"in R)R.selectionStart=it,R.selectionEnd=Math.min(pt,R.value.length);else{var xt=R.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var ct=ot.getSelection(),Wt=R.textContent.length,$t=Math.min(G.start,Wt),ke=G.end===void 0?$t:Math.min(G.end,Wt);!ct.extend&&$t>ke&&(x=ke,ke=$t,$t=x);var K=Yp(R,$t),k=Yp(R,ke);if(K&&k&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var nt=xt.createRange();nt.setStart(K.node,K.offset),ct.removeAllRanges(),$t>ke?(ct.addRange(nt),ct.extend(k.node,k.offset)):(nt.setEnd(k.node,k.offset),ct.addRange(nt))}}}}for(xt=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&xt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xt.length;R++){var _t=xt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}dc=!!ih,ah=ih=null}finally{Ue=u,H.p=o,L.T=a}}e.current=n,xn=2}}function f_(){if(xn===2){xn=0;var e=qa,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=H.p;H.p=2;var u=Ue;Ue|=4;try{zg(e,n.alternate,n)}finally{Ue=u,H.p=o,L.T=a}}xn=3}}function h_(){if(xn===4||xn===3){xn=0,He();var e=qa,n=_r,a=da,o=Jg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,_r=qa=null,d_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ja=null),Jr(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=H.p,H.p=2,L.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var R=o[x];f(R.value,{componentStack:R.stack})}}finally{L.T=n,H.p=u}}(da&3)!==0&&ec(),Hi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Xf?Oo++:(Oo=0,Xf=e):Oo=0,Po(0)}}function d_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,mo(n)))}function ec(){return u_(),f_(),h_(),p_()}function p_(){if(xn!==5)return!1;var e=qa,n=Vf;Vf=0;var a=Jr(da),o=L.T,u=H.p;try{H.p=32>a?32:a,L.T=null,a=kf,kf=null;var f=qa,x=da;if(xn=0,_r=qa=null,da=0,(Ue&6)!==0)throw Error(s(331));var R=Ue;if(Ue|=4,Zg(f.current),jg(f,f.current,x,a),Ue=R,Po(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{H.p=u,L.T=o,d_(e,n)}}function m_(e,n,a){n=vi(a,n),n=Mf(e.stateNode,n,2),e=Ha(e,n,2),e!==null&&(ee(e,2),Hi(e))}function Be(e,n,a){if(e.tag===3)m_(e,e,a);else for(;n!==null;){if(n.tag===3){m_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ja===null||!ja.has(o))){e=vi(a,e),a=gg(2),o=Ha(n,a,2),o!==null&&(_g(a,o,n,e),ee(o,2),Hi(o));break}}n=n.return}}function qf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new NS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zf=!0,u.add(a),e=BS.bind(null,e,n,a),n.then(e,e))}function BS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ye&a)===a&&(sn===4||sn===3&&(ye&62914560)===ye&&300>Ct()-Zl?(Ue&2)===0&&vr(e,0):Hf|=a,gr===ye&&(gr=0)),Hi(e)}function g_(e,n){n===0&&(n=Et()),e=Ms(e,n),e!==null&&(ee(e,n),Hi(e))}function zS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),g_(e,a)}function HS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),g_(e,a)}function GS(e,n){return j(e,n)}var nc=null,Sr=null,Yf=!1,ic=!1,Zf=!1,Za=0;function Hi(e){e!==Sr&&e.next===null&&(Sr===null?nc=Sr=e:Sr=Sr.next=e),ic=!0,Yf||(Yf=!0,kS())}function Po(e,n){if(!Zf&&ic){Zf=!0;do for(var a=!1,o=nc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(x&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,S_(o,f))}else f=ye,f=mt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Bt(o,f)||(a=!0,S_(o,f));o=o.next}while(a);Zf=!1}}function VS(){__()}function __(){ic=Yf=!1;var e=0;Za!==0&&$S()&&(e=Za);for(var n=Ct(),a=null,o=nc;o!==null;){var u=o.next,f=v_(o,n);f===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(Sr=a)):(a=o,(e!==0||(f&3)!==0)&&(ic=!0)),o=u}xn!==0&&xn!==5||Po(e),Za!==0&&(Za=0)}function v_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Pt(f),R=1<<x,G=u[x];G===-1?((R&a)===0||(R&o)!==0)&&(u[x]=Lt(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=qe,a=ye,a=mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&en(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&en(o),Jr(a)){case 2:case 8:a=E;break;case 32:a=$;break;case 268435456:a=bt;break;default:a=$}return o=x_.bind(null,e),a=j(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&en(o),e.callbackPriority=2,e.callbackNode=null,2}function x_(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var o=ye;return o=mt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(t_(e,o,n),v_(e,Ct()),e.callbackNode!=null&&e.callbackNode===a?x_.bind(null,e):null)}function S_(e,n){if(ec())return null;t_(e,n,!0)}function kS(){ey(function(){(Ue&6)!==0?j(D,VS):__()})}function Kf(){if(Za===0){var e=sr;e===0&&(e=ie,ie<<=1,(ie&261888)===0&&(ie=256)),Za=e}return Za}function y_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vs(""+e)}function M_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function XS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=y_((u[Rn]||null).action),x=o.submitter;x&&(n=(n=x[Rn]||null)?y_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var R=new ml("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Za!==0){var G=x?M_(u,x):new FormData(u);gf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=x?M_(u,x):new FormData(u),gf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Qf=0;Qf<Lu.length;Qf++){var Jf=Lu[Qf],WS=Jf.toLowerCase(),jS=Jf[0].toUpperCase()+Jf.slice(1);wi(WS,"on"+jS)}wi($p,"onAnimationEnd"),wi(tm,"onAnimationIteration"),wi(em,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(lS,"onTransitionRun"),wi(cS,"onTransitionStart"),wi(uS,"onTransitionCancel"),wi(nm,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function E_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],G=R.instance,it=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=it;try{f(u)}catch(pt){vl(pt)}u.currentTarget=null,f=G}else for(x=0;x<o.length;x++){if(R=o[x],G=R.instance,it=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=it;try{f(u)}catch(pt){vl(pt)}u.currentTarget=null,f=G}}}}function ve(e,n){var a=n[Ra];a===void 0&&(a=n[Ra]=new Set);var o=e+"__bubble";a.has(o)||(b_(n,e,2,!1),a.add(o))}function $f(e,n,a){var o=0;n&&(o|=4),b_(a,e,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function th(e){if(!e[ac]){e[ac]=!0,fl.forEach(function(a){a!=="selectionchange"&&(qS.has(a)||$f(a,!1,e),$f(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ac]||(n[ac]=!0,$f("selectionchange",!1,n))}}function b_(e,n,a,o){switch($_(n)){case 2:var u=yy;break;case 8:u=My;break;default:u=mh}a=u.bind(null,n,a,e),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function eh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=wa(R),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){o=f=x;continue t}R=R.parentNode}}o=o.return}wp(function(){var it=f,pt=_u(a),xt=[];t:{var ot=im.get(e);if(ot!==void 0){var ct=ml,Wt=e;switch(e){case"keypress":if(dl(a)===0)break t;case"keydown":case"keyup":ct=Hx;break;case"focusin":Wt="focus",ct=Eu;break;case"focusout":Wt="blur",ct=Eu;break;case"beforeblur":case"afterblur":ct=Eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=kx;break;case $p:case tm:case em:ct=Ux;break;case nm:ct=Wx;break;case"scroll":case"scrollend":ct=Ax;break;case"wheel":ct=qx;break;case"copy":case"cut":case"paste":ct=Nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Op;break;case"toggle":case"beforetoggle":ct=Zx}var $t=(n&4)!==0,ke=!$t&&(e==="scroll"||e==="scrollend"),K=$t?ot!==null?ot+"Capture":null:ot;$t=[];for(var k=it,nt;k!==null;){var _t=k;if(nt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||nt===null||K===null||(_t=io(k,K),_t!=null&&$t.push(Fo(k,_t,nt))),ke)break;k=k.return}0<$t.length&&(ot=new ct(ot,Wt,null,a,pt),xt.push({event:ot,listeners:$t}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",ot&&a!==gu&&(Wt=a.relatedTarget||a.fromElement)&&(wa(Wt)||Wt[Qi]))break t;if((ct||ot)&&(ot=pt.window===pt?pt:(ot=pt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ct?(Wt=a.relatedTarget||a.toElement,ct=it,Wt=Wt?wa(Wt):null,Wt!==null&&(ke=c(Wt),$t=Wt.tag,Wt!==ke||$t!==5&&$t!==27&&$t!==6)&&(Wt=null)):(ct=null,Wt=it),ct!==Wt)){if($t=Lp,_t="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&($t=Op,_t="onPointerLeave",K="onPointerEnter",k="pointer"),ke=ct==null?ot:_s(ct),nt=Wt==null?ot:_s(Wt),ot=new $t(_t,k+"leave",ct,a,pt),ot.target=ke,ot.relatedTarget=nt,_t=null,wa(pt)===it&&($t=new $t(K,k+"enter",Wt,a,pt),$t.target=nt,$t.relatedTarget=ke,_t=$t),ke=_t,ct&&Wt)e:{for($t=YS,K=ct,k=Wt,nt=0,_t=K;_t;_t=$t(_t))nt++;_t=0;for(var Kt=k;Kt;Kt=$t(Kt))_t++;for(;0<nt-_t;)K=$t(K),nt--;for(;0<_t-nt;)k=$t(k),_t--;for(;nt--;){if(K===k||k!==null&&K===k.alternate){$t=K;break e}K=$t(K),k=$t(k)}$t=null}else $t=null;ct!==null&&T_(xt,ot,ct,$t,!1),Wt!==null&&ke!==null&&T_(xt,ke,Wt,$t,!0)}}t:{if(ot=it?_s(it):window,ct=ot.nodeName&&ot.nodeName.toLowerCase(),ct==="select"||ct==="input"&&ot.type==="file")var Ce=Vp;else if(Hp(ot))if(kp)Ce=sS;else{Ce=iS;var qt=nS}else ct=ot.nodeName,!ct||ct.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?it&&Le(it.elementType)&&(Ce=Vp):Ce=aS;if(Ce&&(Ce=Ce(e,it))){Gp(xt,Ce,a,pt);break t}qt&&qt(e,ot,it),e==="focusout"&&it&&ot.type==="number"&&it.memoizedProps.value!=null&&ge(ot,"number",ot.value)}switch(qt=it?_s(it):window,e){case"focusin":(Hp(qt)||qt.contentEditable==="true")&&(Qs=qt,wu=it,fo=null);break;case"focusout":fo=wu=Qs=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Qp(xt,a,pt);break;case"selectionchange":if(oS)break;case"keydown":case"keyup":Qp(xt,a,pt)}var ue;if(Tu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Ks?Bp(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(Pp&&a.locale!=="ko"&&(Ks||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Ks&&(ue=Dp()):(Na=pt,Su="value"in Na?Na.value:Na.textContent,Ks=!0)),qt=sc(it,Me),0<qt.length&&(Me=new Np(Me,e,null,a,pt),xt.push({event:Me,listeners:qt}),ue?Me.data=ue:(ue=zp(a),ue!==null&&(Me.data=ue)))),(ue=Qx?Jx(e,a):$x(e,a))&&(Me=sc(it,"onBeforeInput"),0<Me.length&&(qt=new Np("onBeforeInput","beforeinput",null,a,pt),xt.push({event:qt,listeners:Me}),qt.data=ue)),XS(xt,e,it,a,pt)}E_(xt,n)})}function Fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=io(e,a),u!=null&&o.unshift(Fo(e,u,f)),u=io(e,n),u!=null&&o.push(Fo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function YS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function T_(e,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var R=a,G=R.alternate,it=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||it===null||(G=it,u?(it=io(a,f),it!=null&&x.unshift(Fo(a,it,G))):u||(it=io(a,f),it!=null&&x.push(Fo(a,it,G)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var ZS=/\r\n?/g,KS=/\u0000|\uFFFD/g;function A_(e){return(typeof e=="string"?e:""+e).replace(ZS,`
`).replace(KS,"")}function R_(e,n){return n=A_(n),A_(e)===n}function Ve(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ei(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ei(e,""+o);break;case"className":Xt(e,"class",o);break;case"tabIndex":Xt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,o);break;case"style":Ci(e,o,f);break;case"data":if(n!=="object"){Xt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=vs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=vs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),It(e,"popover",o);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":It(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ii.get(a)||a,It(e,a,o))}}function nh(e,n,a,o,u,f){switch(a){case"style":Ci(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ei(e,o):(typeof o=="number"||typeof o=="bigint")&&ei(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Rn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):It(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,x,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var R=f=x=u=null,G=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":x=pt;break;case"checked":G=pt;break;case"defaultChecked":it=pt;break;case"value":f=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,pt,a,null)}}On(e,f,R,G,it,x,u,!1);return;case"select":ve("invalid",e),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Ve(e,n,u,R,a,null)}n=f,a=x,e.multiple=!!o,n!=null?vn(e,!!o,n,!1):a!=null&&vn(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ve(e,n,x,R,a,null)}Ri(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,G,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)ve(Io[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,it,o,a,null)}return;default:if(Le(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&nh(e,n,pt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ve(e,n,R,o,a,null))}function QS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,R=null,G=null,it=null,pt=null;for(ct in a){var xt=a[ct];if(a.hasOwnProperty(ct)&&xt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=xt;default:o.hasOwnProperty(ct)||Ve(e,n,ct,null,o,xt)}}for(var ot in o){var ct=o[ot];if(xt=a[ot],o.hasOwnProperty(ot)&&(ct!=null||xt!=null))switch(ot){case"type":f=ct;break;case"name":u=ct;break;case"checked":it=ct;break;case"defaultChecked":pt=ct;break;case"value":x=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==xt&&Ve(e,n,ot,ct,o,xt)}}Gt(e,x,R,G,it,pt,f,u);return;case"select":ct=x=R=ot=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ct=G;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ot=f;break;case"defaultValue":R=f;break;case"multiple":x=f;default:f!==G&&Ve(e,n,u,f,o,G)}n=R,a=x,o=ct,ot!=null?vn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?vn(e,!!a,n,!0):vn(e,!!a,a?[]:"",!1));return;case"textarea":ct=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ve(e,n,R,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":ot=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(e,n,x,u,o,f)}ti(e,ot,ct);return;case"option":for(var Wt in a)ot=a[Wt],a.hasOwnProperty(Wt)&&ot!=null&&!o.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:Ve(e,n,Wt,null,o,ot));for(G in o)ot=o[G],ct=a[G],o.hasOwnProperty(G)&&ot!==ct&&(ot!=null||ct!=null)&&(G==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ve(e,n,G,ot,o,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)ot=a[$t],a.hasOwnProperty($t)&&ot!=null&&!o.hasOwnProperty($t)&&Ve(e,n,$t,null,o,ot);for(it in o)if(ot=o[it],ct=a[it],o.hasOwnProperty(it)&&ot!==ct&&(ot!=null||ct!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Ve(e,n,it,ot,o,ct)}return;default:if(Le(n)){for(var ke in a)ot=a[ke],a.hasOwnProperty(ke)&&ot!==void 0&&!o.hasOwnProperty(ke)&&nh(e,n,ke,void 0,o,ot);for(pt in o)ot=o[pt],ct=a[pt],!o.hasOwnProperty(pt)||ot===ct||ot===void 0&&ct===void 0||nh(e,n,pt,ot,o,ct);return}}for(var K in a)ot=a[K],a.hasOwnProperty(K)&&ot!=null&&!o.hasOwnProperty(K)&&Ve(e,n,K,null,o,ot);for(xt in o)ot=o[xt],ct=a[xt],!o.hasOwnProperty(xt)||ot===ct||ot==null&&ct==null||Ve(e,n,xt,ot,o,ct)}function C_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function JS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,R=u.duration;if(f&&R&&C_(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],it=G.startTime;if(it>R)break;var pt=G.transferSize,xt=G.initiatorType;pt&&C_(xt)&&(G=G.responseEnd,x+=pt*(G<R?1:(R-it)/(G-it)))}if(--o,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ih=null,ah=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function w_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function sh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rh=null;function $S(){var e=window.event;return e&&e.type==="popstate"?e===rh?!1:(rh=e,!0):(rh=null,!1)}var U_=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,L_=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof L_<"u"?function(e){return L_.resolve(null).then(e).catch(ny)}:U_;function ny(e){setTimeout(function(){throw e})}function Ka(e){return e==="head"}function N_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),br(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,R=f.nodeName;f[Ca]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Bo(e.ownerDocument.body);a=u}while(a);br(n)}function O_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function oh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oh(a),no(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function iy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ca])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function ay(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ei(e.nextSibling),e===null))return null;return e}function P_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ei(e.nextSibling),e===null))return null;return e}function lh(e){return e.data==="$?"||e.data==="$~"}function ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var uh=null;function I_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function F_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function B_(e,n,a){switch(n=rc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);no(e)}var bi=new Map,z_=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=H.d;H.d={f:ry,r:oy,D:ly,C:cy,L:uy,m:fy,X:dy,S:hy,M:py};function ry(){var e=pa.f(),n=Jl();return e||n}function oy(e){var n=Da(e);n!==null&&n.tag===5&&n.type==="form"?ng(n):pa.r(e)}var yr=typeof document>"u"?null:document;function H_(e,n,a){var o=yr;if(o&&typeof n=="string"&&n){var u=Pe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),z_.has(u)||(z_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),hn(n),o.head.appendChild(n)))}}function ly(e){pa.D(e),H_("dns-prefetch",e,null)}function cy(e,n){pa.C(e,n),H_("preconnect",e,n)}function uy(e,n,a){pa.L(e,n,a);var o=yr;if(o&&e&&n){var u='link[rel="preload"][as="'+Pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pe(a.imageSizes)+'"]')):u+='[href="'+Pe(e)+'"]';var f=u;switch(n){case"style":f=Mr(e);break;case"script":f=Er(e)}bi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),bi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(f))||n==="script"&&o.querySelector(Ho(f))||(n=o.createElement("link"),Un(n,"link",e),hn(n),o.head.appendChild(n)))}}function fy(e,n){pa.m(e,n);var a=yr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pe(o)+'"][href="'+Pe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(e)}if(!bi.has(f)&&(e=v({rel:"modulepreload",href:e},n),bi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(f)))return}o=a.createElement("link"),Un(o,"link",e),hn(o),a.head.appendChild(o)}}}function hy(e,n,a){pa.S(e,n,a);var o=yr;if(o&&e){var u=Ua(o).hoistableStyles,f=Mr(e);n=n||"default";var x=u.get(f);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(zo(f)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=bi.get(f))&&fh(e,a);var G=x=o.createElement("link");hn(G),Un(G,"link",e),G._p=new Promise(function(it,pt){G.onload=it,G.onerror=pt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,lc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(f,x)}}}function dy(e,n){pa.X(e,n);var a=yr;if(a&&e){var o=Ua(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(e=v({src:e,async:!0},n),(n=bi.get(u))&&hh(e,n),f=a.createElement("script"),hn(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function py(e,n){pa.M(e,n);var a=yr;if(a&&e){var o=Ua(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=bi.get(u))&&hh(e,n),f=a.createElement("script"),hn(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function G_(e,n,a,o){var u=(u=lt.current)?oc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Mr(a.href),a=Ua(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Mr(a.href);var f=Ua(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(zo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),bi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(e,a),f||my(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=Ua(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Mr(e){return'href="'+Pe(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function V_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function my(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),hn(n),e.head.appendChild(n))}function Er(e){return'[src="'+Pe(e)+'"]'}function Ho(e){return"script[async]"+e}function k_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Pe(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),hn(o),Un(o,"style",u),lc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Mr(a.href);var f=e.querySelector(zo(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;o=V_(a),(u=bi.get(u))&&fh(o,u),f=(e.ownerDocument||e).createElement("link"),hn(f);var x=f;return x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Un(f,"link",o),n.state.loading|=4,lc(f,a.precedence,e),n.instance=f;case"script":return f=Er(a.src),(u=e.querySelector(Ho(f)))?(n.instance=u,hn(u),u):(o=a,(u=bi.get(f))&&(o=v({},a),hh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),hn(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,e));return n.instance}function lc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function fh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function hh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cc=null;function X_(e,n,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ca]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var R=o.get(x);R?R.push(f):o.set(x,[f])}}return o}function W_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function gy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function j_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _y(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Mr(o.href),f=n.querySelector(zo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=uc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,o=V_(o),(u=bi.get(u))&&fh(o,u),f=f.createElement("link"),hn(f);var x=f;x._p=new Promise(function(R,G){x.onload=R,x.onerror=G}),Un(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=uc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var dh=0;function vy(e,n){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&dh===0&&(dh=62500*JS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>dh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,n.forEach(xy,e),fc=null,uc.call(e))}function xy(e,n){if(!(n.state.loading&4)){var a=fc.get(e);if(a)var o=a.get(null);else{a=new Map,fc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Go={$$typeof:O,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function Sy(e,n,a,o,u,f,x,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jt(0),this.hiddenUpdates=jt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function q_(e,n,a,o,u,f,x,R,G,it,pt,xt){return e=new Sy(e,n,a,x,G,it,pt,xt,R),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),e.current=f,f.stateNode=e,n=Wu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Zu(f),e}function Y_(e){return e?(e=tr,e):tr}function Z_(e,n,a,o,u,f){u=Y_(u),o.context===null?o.context=u:o.pendingContext=u,o=za(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ha(e,o,n),a!==null&&(Yn(a,e,n),xo(a,e,n))}function K_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ph(e,n){K_(e,n),(e=e.alternate)&&K_(e,n)}function Q_(e){if(e.tag===13||e.tag===31){var n=Ms(e,67108864);n!==null&&Yn(n,e,67108864),ph(e,67108864)}}function J_(e){if(e.tag===13||e.tag===31){var n=li();n=gs(n);var a=Ms(e,n);a!==null&&Yn(a,e,n),ph(e,n)}}var dc=!0;function yy(e,n,a,o){var u=L.T;L.T=null;var f=H.p;try{H.p=2,mh(e,n,a,o)}finally{H.p=f,L.T=u}}function My(e,n,a,o){var u=L.T;L.T=null;var f=H.p;try{H.p=8,mh(e,n,a,o)}finally{H.p=f,L.T=u}}function mh(e,n,a,o){if(dc){var u=gh(o);if(u===null)eh(e,n,o,pc,a),t0(e,o);else if(by(u,e,n,a,o))o.stopPropagation();else if(t0(e,o),n&4&&-1<Ey.indexOf(e)){for(;u!==null;){var f=Da(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Rt(f.pendingLanes);if(x!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var G=1<<31-Pt(x);R.entanglements[1]|=G,x&=~G}Hi(f),(Ue&6)===0&&(Kl=Ct()+500,Po(0))}}break;case 31:case 13:R=Ms(f,2),R!==null&&Yn(R,f,2),Jl(),ph(f,2)}if(f=gh(o),f===null&&eh(e,n,o,pc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else eh(e,n,o,null,a)}}function gh(e){return e=_u(e),_h(e)}var pc=null;function _h(e){if(pc=null,e=wa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return pc=e,null}function $_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case D:return 2;case E:return 8;case $:case vt:return 32;case bt:return 268435456;default:return 32}default:return 32}}var vh=!1,Qa=null,Ja=null,$a=null,Vo=new Map,ko=new Map,ts=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t0(e,n){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Da(n),n!==null&&Q_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function by(e,n,a,o,u){switch(n){case"focusin":return Qa=Xo(Qa,e,n,a,o,u),!0;case"dragenter":return Ja=Xo(Ja,e,n,a,o,u),!0;case"mouseover":return $a=Xo($a,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Vo.set(f,Xo(Vo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,ko.set(f,Xo(ko.get(f)||null,e,n,a,o,u)),!0}return!1}function e0(e){var n=wa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,to(e.priority,function(){J_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,to(e.priority,function(){J_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=gh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=Da(a),n!==null&&Q_(n),e.blockedOn=a,!1;n.shift()}return!0}function n0(e,n,a){mc(e)&&a.delete(n)}function Ty(){vh=!1,Qa!==null&&mc(Qa)&&(Qa=null),Ja!==null&&mc(Ja)&&(Ja=null),$a!==null&&mc($a)&&($a=null),Vo.forEach(n0),ko.forEach(n0)}function gc(e,n){e.blockedOn===n&&(e.blockedOn=null,vh||(vh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ty)))}var _c=null;function i0(e){_c!==e&&(_c=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(_h(o||a)===null)continue;break}var f=Da(a);f!==null&&(e.splice(n,3),n-=3,gf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function br(e){function n(G){return gc(G,e)}Qa!==null&&gc(Qa,e),Ja!==null&&gc(Ja,e),$a!==null&&gc($a,e),Vo.forEach(n),ko.forEach(n);for(var a=0;a<ts.length;a++){var o=ts[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ts.length&&(a=ts[0],a.blockedOn===null);)e0(a),a.blockedOn===null&&ts.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[Rn]||null;if(typeof f=="function")x||i0(a);else if(x){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Rn]||null)R=x.formAction;else if(_h(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),i0(a)}}}function a0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xh(e){this._internalRoot=e}vc.prototype.render=xh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=li();Z_(a,o,e,n,null,null)},vc.prototype.unmount=xh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Z_(e.current,2,null,e,null,null),Jl(),n[Qi]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var n=$r();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ts.length&&n!==0&&n<ts[a].priority;a++);ts.splice(a,0,e),a===0&&e0(e)}};var s0=t.version;if(s0!=="19.2.6")throw Error(s(527,s0,"19.2.6"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Ay={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{ht=xc.inject(Ay),dt=xc}catch{}}return jo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=hg,f=dg,x=pg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=q_(e,1,!1,null,null,a,o,null,u,f,x,a0),e[Qi]=n.current,th(e),new xh(n)},jo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=hg,x=dg,R=pg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=q_(e,1,!0,n,a??null,o,u,G,f,x,R,a0),n.context=Y_(null),a=n.current,o=li(),o=gs(o),u=za(o),u.callback=null,Ha(a,u,o),a=o,n.current.lanes=a,ee(n,a),Hi(n),e[Qi]=n.current,th(e),new vc(n)},jo.version="19.2.6",jo}var m0;function Iy(){if(m0)return Mh.exports;m0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Mh.exports=Py(),Mh.exports}var Fy=Iy();const By=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();var zy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Hy=Ee.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>Ee.createElement("svg",{ref:m,...zy,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Cv("lucide",l),...p},[...h.map(([d,_])=>Ee.createElement(d,_)),...Array.isArray(c)?c:[c]]));const Ws=(r,t)=>{const i=Ee.forwardRef(({className:s,...l},c)=>Ee.createElement(Hy,{ref:c,iconNode:t,className:Cv(`lucide-${By(r)}`,s),...l}));return i.displayName=`${r}`,i};const Gy=Ws("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const Vy=Ws("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);const ky=Ws("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);const Xy=Ws("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const Wy=Ws("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);const jy=Ws("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);const qy=Ws("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const sp="184",Vr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yy=0,g0=1,Zy=2,Yc=1,rp=2,el=3,hs=0,Qn=1,ya=2,Ea=0,kr=1,_0=2,v0=3,x0=4,Ky=5,zs=100,Qy=101,Jy=102,$y=103,tM=104,eM=200,nM=201,iM=202,aM=203,ud=204,fd=205,sM=206,rM=207,oM=208,lM=209,cM=210,uM=211,fM=212,hM=213,dM=214,hd=0,dd=1,pd=2,Wr=3,md=4,gd=5,_d=6,vd=7,wv=0,pM=1,mM=2,ji=0,Dv=1,Uv=2,Lv=3,Nv=4,Ov=5,Pv=6,Iv=7,Fv=300,ks=301,jr=302,Ah=303,Rh=304,fu=306,xd=1e3,Ma=1001,Sd=1002,Ln=1003,gM=1004,Sc=1005,Bn=1006,Ch=1007,Gs=1008,hi=1009,Bv=1010,zv=1011,al=1012,op=1013,Zi=1014,Xi=1015,Ta=1016,lp=1017,cp=1018,sl=1020,Hv=35902,Gv=35899,Vv=1021,kv=1022,Pi=1023,Aa=1026,Vs=1027,Xv=1028,up=1029,Xs=1030,fp=1031,hp=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,yd=35840,Md=35841,Ed=35842,bd=35843,Td=36196,Ad=37492,Rd=37496,Cd=37488,wd=37489,eu=37490,Dd=37491,Ud=37808,Ld=37809,Nd=37810,Od=37811,Pd=37812,Id=37813,Fd=37814,Bd=37815,zd=37816,Hd=37817,Gd=37818,Vd=37819,kd=37820,Xd=37821,Wd=36492,jd=36494,qd=36495,Yd=36283,Zd=36284,nu=36285,Kd=36286,_M=3200,Qd=0,vM=1,cs="",Gn="srgb",iu="srgb-linear",au="linear",ze="srgb",Tr=7680,S0=519,xM=512,SM=513,yM=514,dp=515,MM=516,EM=517,pp=518,bM=519,y0=35044,M0="300 es",Wi=2e3,rl=2001;function TM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function AM(){const r=su("canvas");return r.style.display="block",r}const E0={};function b0(...r){const t="THREE."+r.shift();console.log(t,...r)}function Wv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Jt(...r){r=Wv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ae(...r){r=Wv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function Jd(...r){const t=r.join(" ");t in E0||(E0[t]=!0,Jt(...r))}function RM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const CM={[hd]:dd,[pd]:_d,[md]:vd,[Wr]:gd,[dd]:hd,[_d]:pd,[vd]:md,[gd]:Wr};class ms{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],il=Math.PI/180,$d=180/Math.PI;function ol(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function xe(r,t,i){return Math.max(t,Math.min(i,r))}function wM(r,t){return(r%t+t)%t}function wh(r,t,i){return(1-i)*r+i*t}function qo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const DM={DEG2RAD:il},Ep=class Ep{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ep.prototype.isVector2=!0;let le=Ep;class ds{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],_=s[l+2],v=s[l+3],g=c[h+0],M=c[h+1],T=c[h+2],C=c[h+3];if(v!==C||m!==g||d!==M||_!==T){let y=m*g+d*M+_*T+v*C;y<0&&(g=-g,M=-M,T=-T,C=-C,y=-y);let S=1-p;if(y<.9995){const w=Math.acos(y),O=Math.sin(w);S=Math.sin(S*w)/O,p=Math.sin(p*w)/O,m=m*S+g*p,d=d*S+M*p,_=_*S+T*p,v=v*S+C*p}else{m=m*S+g*p,d=d*S+M*p,_=_*S+T*p,v=v*S+C*p;const w=1/Math.sqrt(m*m+d*d+_*_+v*v);m*=w,d*=w,_*=w,v*=w}}t[i]=m,t[i+1]=d,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],_=s[l+3],v=c[h],g=c[h+1],M=c[h+2],T=c[h+3];return t[i]=p*T+_*v+m*M-d*g,t[i+1]=m*T+_*g+d*v-p*M,t[i+2]=d*T+_*M+p*g-m*v,t[i+3]=_*T-p*v-m*g-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),_=p(l/2),v=p(c/2),g=m(s/2),M=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*_*v+d*M*T,this._y=d*M*v-g*_*T,this._z=d*_*T+g*M*v,this._w=d*_*v-g*M*T;break;case"YXZ":this._x=g*_*v+d*M*T,this._y=d*M*v-g*_*T,this._z=d*_*T-g*M*v,this._w=d*_*v+g*M*T;break;case"ZXY":this._x=g*_*v-d*M*T,this._y=d*M*v+g*_*T,this._z=d*_*T+g*M*v,this._w=d*_*v-g*M*T;break;case"ZYX":this._x=g*_*v-d*M*T,this._y=d*M*v+g*_*T,this._z=d*_*T-g*M*v,this._w=d*_*v+g*M*T;break;case"YZX":this._x=g*_*v+d*M*T,this._y=d*M*v+g*_*T,this._z=d*_*T-g*M*v,this._w=d*_*v-g*M*T;break;case"XZY":this._x=g*_*v-d*M*T,this._y=d*M*v-g*_*T,this._z=d*_*T+g*M*v,this._w=d*_*v+g*M*T;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],_=i[6],v=i[10],g=s+p+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-d)*M,this._z=(h-l)*M}else if(s>p&&s>v){const M=2*Math.sqrt(1+s-p-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+d)/M}else if(p>v){const M=2*Math.sqrt(1+p-s-v);this._w=(c-d)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-p);this._w=(h-l)/M,this._x=(c+d)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,_=i._w;return this._x=s*_+h*p+l*d-c*m,this._y=l*_+h*m+c*p-s*d,this._z=c*_+h*d+s*m-l*p,this._w=h*_-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,i=Math.sin(i*d)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bp=class bp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(T0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(T0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),_=2*(p*i-c*l),v=2*(c*s-h*i);return this.x=i+m*d+h*v-p*_,this.y=s+m*_+p*d-c*v,this.z=l+m*v+c*_-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Dh.copy(this).projectOnVector(t),this.sub(Dh)}reflect(t){return this.sub(Dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bp.prototype.isVector3=!0;let Q=bp;const Dh=new Q,T0=new ds,Tp=class Tp{constructor(t,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d)}set(t,i,s,l,c,h,p,m,d){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],_=s[4],v=s[7],g=s[2],M=s[5],T=s[8],C=l[0],y=l[3],S=l[6],w=l[1],O=l[4],P=l[7],B=l[2],U=l[5],N=l[8];return c[0]=h*C+p*w+m*B,c[3]=h*y+p*O+m*U,c[6]=h*S+p*P+m*N,c[1]=d*C+_*w+v*B,c[4]=d*y+_*O+v*U,c[7]=d*S+_*P+v*N,c[2]=g*C+M*w+T*B,c[5]=g*y+M*O+T*U,c[8]=g*S+M*P+T*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8];return i*h*_-i*p*d-s*c*_+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],v=_*h-p*d,g=p*m-_*c,M=d*c-h*m,T=i*v+s*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=v*C,t[1]=(l*d-_*s)*C,t[2]=(p*s-l*h)*C,t[3]=g*C,t[4]=(_*i-l*m)*C,t[5]=(l*c-p*i)*C,t[6]=M*C,t[7]=(s*m-d*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Uh.makeScale(t,i)),this}rotate(t){return this.premultiply(Uh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Uh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Tp.prototype.isMatrix3=!0;let se=Tp;const Uh=new se,A0=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),R0=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UM(){const r={enabled:!0,workingColorSpace:iu,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ze&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Xr(l.r),l.g=Xr(l.g),l.b=Xr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cs?au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Jd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Jd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[iu]:{primaries:t,whitePoint:s,transfer:au,toXYZ:A0,fromXYZ:R0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:t,whitePoint:s,transfer:ze,toXYZ:A0,fromXYZ:R0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),r}const Te=UM();function ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class LM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ar===void 0&&(Ar=su("canvas")),Ar.width=t.width,Ar.height=t.height;const l=Ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=su("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ba(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let NM=0;class mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=ol(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Lh(l[h].image)):c.push(Lh(l[h]))}else c=Lh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Lh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let OM=0;const Nh=new Q;class Vn extends ms{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ma,l=Ma,c=Bn,h=Gs,p=Pi,m=hi,d=Vn.DEFAULT_ANISOTROPY,_=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=ol(),this.name="",this.source=new mp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){Jt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Jt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xd:t.x=t.x-Math.floor(t.x);break;case Ma:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xd:t.y=t.y-Math.floor(t.y);break;case Ma:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Fv;Vn.DEFAULT_ANISOTROPY=1;const Ap=class Ap{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],_=m[4],v=m[8],g=m[1],M=m[5],T=m[9],C=m[2],y=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+C)<.1&&Math.abs(T+y)<.1&&Math.abs(d+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(d+1)/2,P=(M+1)/2,B=(S+1)/2,U=(_+g)/4,N=(v+C)/4,b=(T+y)/4;return O>P&&O>B?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=U/s,c=N/s):P>B?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=U/l,c=b/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=N/c,l=b/c),this.set(s,l,c,i),this}let w=Math.sqrt((y-T)*(y-T)+(v-C)*(v-C)+(g-_)*(g-_));return Math.abs(w)<.001&&(w=1),this.x=(y-T)/w,this.y=(v-C)/w,this.z=(g-_)/w,this.w=Math.acos((d+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ap.prototype.isVector4=!0;let rn=Ap;class PM extends ms{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Vn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new mp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends PM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class jv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class IM extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=class uu{constructor(t,i,s,l,c,h,p,m,d,_,v,g,M,T,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d,_,v,g,M,T,C,y)}set(t,i,s,l,c,h,p,m,d,_,v,g,M,T,C,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=p,S[13]=m,S[2]=d,S[6]=_,S[10]=v,S[14]=g,S[3]=M,S[7]=T,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),h=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=h*_,M=h*v,T=p*_,C=p*v;i[0]=m*_,i[4]=-m*v,i[8]=d,i[1]=M+T*d,i[5]=g-C*d,i[9]=-p*m,i[2]=C-g*d,i[6]=T+M*d,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,M=m*v,T=d*_,C=d*v;i[0]=g+C*p,i[4]=T*p-M,i[8]=h*d,i[1]=h*v,i[5]=h*_,i[9]=-p,i[2]=M*p-T,i[6]=C+g*p,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,M=m*v,T=d*_,C=d*v;i[0]=g-C*p,i[4]=-h*v,i[8]=T+M*p,i[1]=M+T*p,i[5]=h*_,i[9]=C-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,M=h*v,T=p*_,C=p*v;i[0]=m*_,i[4]=T*d-M,i[8]=g*d+C,i[1]=m*v,i[5]=C*d+g,i[9]=M*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,M=h*d,T=p*m,C=p*d;i[0]=m*_,i[4]=C-g*v,i[8]=T*v+M,i[1]=v,i[5]=h*_,i[9]=-p*_,i[2]=-d*_,i[6]=M*v+T,i[10]=g-C*v}else if(t.order==="XZY"){const g=h*m,M=h*d,T=p*m,C=p*d;i[0]=m*_,i[4]=-v,i[8]=d*_,i[1]=g*v+C,i[5]=h*_,i[9]=M*v-T,i[2]=T*v-M,i[6]=p*_,i[10]=C*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(FM,t,BM)}lookAt(t,i,s){const l=this.elements;return ci.subVectors(t,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ns.crossVectors(s,ci),ns.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ns.crossVectors(s,ci)),ns.normalize(),yc.crossVectors(ci,ns),l[0]=ns.x,l[4]=yc.x,l[8]=ci.x,l[1]=ns.y,l[5]=yc.y,l[9]=ci.y,l[2]=ns.z,l[6]=yc.z,l[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],_=s[1],v=s[5],g=s[9],M=s[13],T=s[2],C=s[6],y=s[10],S=s[14],w=s[3],O=s[7],P=s[11],B=s[15],U=l[0],N=l[4],b=l[8],I=l[12],W=l[1],z=l[5],Y=l[9],ut=l[13],ft=l[2],X=l[6],L=l[10],H=l[14],et=l[3],gt=l[7],yt=l[11],F=l[15];return c[0]=h*U+p*W+m*ft+d*et,c[4]=h*N+p*z+m*X+d*gt,c[8]=h*b+p*Y+m*L+d*yt,c[12]=h*I+p*ut+m*H+d*F,c[1]=_*U+v*W+g*ft+M*et,c[5]=_*N+v*z+g*X+M*gt,c[9]=_*b+v*Y+g*L+M*yt,c[13]=_*I+v*ut+g*H+M*F,c[2]=T*U+C*W+y*ft+S*et,c[6]=T*N+C*z+y*X+S*gt,c[10]=T*b+C*Y+y*L+S*yt,c[14]=T*I+C*ut+y*H+S*F,c[3]=w*U+O*W+P*ft+B*et,c[7]=w*N+O*z+P*X+B*gt,c[11]=w*b+O*Y+P*L+B*yt,c[15]=w*I+O*ut+P*H+B*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],_=t[2],v=t[6],g=t[10],M=t[14],T=t[3],C=t[7],y=t[11],S=t[15],w=m*M-d*g,O=p*M-d*v,P=p*g-m*v,B=h*M-d*_,U=h*g-m*_,N=h*v-p*_;return i*(C*w-y*O+S*P)-s*(T*w-y*B+S*U)+l*(T*O-C*B+S*N)-c*(T*P-C*U+y*N)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],v=t[9],g=t[10],M=t[11],T=t[12],C=t[13],y=t[14],S=t[15],w=i*p-s*h,O=i*m-l*h,P=i*d-c*h,B=s*m-l*p,U=s*d-c*p,N=l*d-c*m,b=_*C-v*T,I=_*y-g*T,W=_*S-M*T,z=v*y-g*C,Y=v*S-M*C,ut=g*S-M*y,ft=w*ut-O*Y+P*z+B*W-U*I+N*b;if(ft===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ft;return t[0]=(p*ut-m*Y+d*z)*X,t[1]=(l*Y-s*ut-c*z)*X,t[2]=(C*N-y*U+S*B)*X,t[3]=(g*U-v*N-M*B)*X,t[4]=(m*W-h*ut-d*I)*X,t[5]=(i*ut-l*W+c*I)*X,t[6]=(y*P-T*N-S*O)*X,t[7]=(_*N-g*P+M*O)*X,t[8]=(h*Y-p*W+d*b)*X,t[9]=(s*W-i*Y-c*b)*X,t[10]=(T*U-C*P+S*w)*X,t[11]=(v*P-_*U-M*w)*X,t[12]=(p*I-h*z-m*b)*X,t[13]=(i*z-s*I+l*b)*X,t[14]=(C*O-T*B-y*w)*X,t[15]=(_*B-v*O+g*w)*X,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,_=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,_*p+s,_*m-l*h,0,d*m-l*p,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,_=h+h,v=p+p,g=c*d,M=c*_,T=c*v,C=h*_,y=h*v,S=p*v,w=m*d,O=m*_,P=m*v,B=s.x,U=s.y,N=s.z;return l[0]=(1-(C+S))*B,l[1]=(M+P)*B,l[2]=(T-O)*B,l[3]=0,l[4]=(M-P)*U,l[5]=(1-(g+S))*U,l[6]=(y+w)*U,l[7]=0,l[8]=(T+O)*N,l[9]=(y-w)*N,l[10]=(1-(g+C))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Rr.set(l[0],l[1],l[2]).length();const p=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Li.copy(this);const d=1/h,_=1/p,v=1/m;return Li.elements[0]*=d,Li.elements[1]*=d,Li.elements[2]*=d,Li.elements[4]*=_,Li.elements[5]*=_,Li.elements[6]*=_,Li.elements[8]*=v,Li.elements[9]*=v,Li.elements[10]*=v,i.setFromRotationMatrix(Li),s.x=h,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,h,p=Wi,m=!1){const d=this.elements,_=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let T,C;if(m)T=c/(h-c),C=h*c/(h-c);else if(p===Wi)T=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(p===rl)T=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,h,p=Wi,m=!1){const d=this.elements,_=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let T,C;if(m)T=1/(h-c),C=h/(h-c);else if(p===Wi)T=-2/(h-c),C=-(h+c)/(h-c);else if(p===rl)T=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};uu.prototype.isMatrix4=!0;let on=uu;const Rr=new Q,Li=new on,FM=new Q(0,0,0),BM=new Q(1,1,1),ns=new Q,yc=new Q,ci=new Q,C0=new on,w0=new ds;class ps{constructor(t=0,i=0,s=0,l=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],_=l[9],v=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return C0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(C0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return w0.setFromEuler(this),this.setFromQuaternion(w0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class qv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zM=0;const D0=new Q,Cr=new ds,ma=new on,Mc=new Q,Yo=new Q,HM=new Q,GM=new ds,U0=new Q(1,0,0),L0=new Q(0,1,0),N0=new Q(0,0,1),O0={type:"added"},VM={type:"removed"},wr={type:"childadded",child:null},Oh={type:"childremoved",child:null};class Tn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new Q,i=new ps,s=new ds,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new se}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(U0,t)}rotateY(t){return this.rotateOnAxis(L0,t)}rotateZ(t){return this.rotateOnAxis(N0,t)}translateOnAxis(t,i){return D0.copy(t).applyQuaternion(this.quaternion),this.position.add(D0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(U0,t)}translateY(t){return this.translateOnAxis(L0,t)}translateZ(t){return this.translateOnAxis(N0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Mc.copy(t):Mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Yo,Mc,this.up):ma.lookAt(Mc,Yo,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(ma),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(O0),wr.child=t,this.dispatchEvent(wr),wr.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VM),Oh.child=t,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(O0),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,HM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,GM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const v=m[d];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),_=h(t.images),v=h(t.shapes),g=h(t.skeletons),M=h(t.animations),T=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new Q(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class us extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kM={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,s),S=this._getHandJoint(d,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),M=.02,T=.005;d.inputState.pinching&&g>M+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=M-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(kM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new us;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Ih(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class pe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Te.workingColorSpace){if(t=wM(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Ih(h,c,t+1/3),this.g=Ih(h,c,t),this.b=Ih(h,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=Gn){function s(c){c!==void 0&&parseFloat(c)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Jt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Gn){const s=Yv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ba(t.r),this.g=ba(t.g),this.b=ba(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return Te.workingToColorSpace(Fn.copy(this),t),Math.round(xe(Fn.r*255,0,255))*65536+Math.round(xe(Fn.g*255,0,255))*256+Math.round(xe(Fn.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const _=(p+h)/2;if(p===h)m=0,d=0;else{const v=h-p;switch(d=_<=.5?v/(h+p):v/(2-h-p),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=d,t.l=_,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Gn){Te.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==Gn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(is),this.setHSL(is.h+t,is.s+i,is.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(is),t.getHSL(Ec);const s=wh(is.h,Ec.h,i),l=wh(is.s,Ec.s,i),c=wh(is.l,Ec.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new pe;pe.NAMES=Yv;class hu{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new pe(t),this.near=i,this.far=s}clone(){return new hu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zv extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new Q,ga=new Q,Fh=new Q,_a=new Q,Dr=new Q,Ur=new Q,P0=new Q,Bh=new Q,zh=new Q,Hh=new Q,Gh=new rn,Vh=new rn,kh=new rn;class Ai{constructor(t=new Q,i=new Q,s=new Q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ni.subVectors(l,i),ga.subVectors(s,i),Fh.subVectors(t,i);const h=Ni.dot(Ni),p=Ni.dot(ga),m=Ni.dot(Fh),d=ga.dot(ga),_=ga.dot(Fh),v=h*d-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,M=(d*m-p*_)*g,T=(h*_-p*m)*g;return c.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,i,s,l,c,h,p,m){return this.getBarycoord(t,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(h,_a.y),m.addScaledVector(p,_a.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Gh.setScalar(0),Vh.setScalar(0),kh.setScalar(0),Gh.fromBufferAttribute(t,i),Vh.fromBufferAttribute(t,s),kh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Gh,c.x),h.addScaledVector(Vh,c.y),h.addScaledVector(kh,c.z),h}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),ga.subVectors(t,i),Ni.cross(ga).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ni.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,p;Dr.subVectors(l,s),Ur.subVectors(c,s),Bh.subVectors(t,s);const m=Dr.dot(Bh),d=Ur.dot(Bh);if(m<=0&&d<=0)return i.copy(s);zh.subVectors(t,l);const _=Dr.dot(zh),v=Ur.dot(zh);if(_>=0&&v<=_)return i.copy(l);const g=m*v-_*d;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Dr,h);Hh.subVectors(t,c);const M=Dr.dot(Hh),T=Ur.dot(Hh);if(T>=0&&M<=T)return i.copy(c);const C=M*d-m*T;if(C<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Ur,p);const y=_*T-M*v;if(y<=0&&v-_>=0&&M-T>=0)return P0.subVectors(c,l),p=(v-_)/(v-_+(M-T)),i.copy(l).addScaledVector(P0,p);const S=1/(y+C+g);return h=C*S,p=g*S,i.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ll{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Oi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Oi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Oi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,Oi):Oi.fromBufferAttribute(c,h),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bc.copy(s.boundingBox)),bc.applyMatrix4(t.matrixWorld),this.union(bc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),Tc.subVectors(this.max,Zo),Lr.subVectors(t.a,Zo),Nr.subVectors(t.b,Zo),Or.subVectors(t.c,Zo),as.subVectors(Nr,Lr),ss.subVectors(Or,Nr),Ps.subVectors(Lr,Or);let i=[0,-as.z,as.y,0,-ss.z,ss.y,0,-Ps.z,Ps.y,as.z,0,-as.x,ss.z,0,-ss.x,Ps.z,0,-Ps.x,-as.y,as.x,0,-ss.y,ss.x,0,-Ps.y,Ps.x,0];return!Xh(i,Lr,Nr,Or,Tc)||(i=[1,0,0,0,1,0,0,0,1],!Xh(i,Lr,Nr,Or,Tc))?!1:(Ac.crossVectors(as,ss),i=[Ac.x,Ac.y,Ac.z],Xh(i,Lr,Nr,Or,Tc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(va),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const va=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Oi=new Q,bc=new ll,Lr=new Q,Nr=new Q,Or=new Q,as=new Q,ss=new Q,Ps=new Q,Zo=new Q,Tc=new Q,Ac=new Q,Is=new Q;function Xh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Is.fromArray(r,c);const p=l.x*Math.abs(Is.x)+l.y*Math.abs(Is.y)+l.z*Math.abs(Is.z),m=t.dot(Is),d=i.dot(Is),_=s.dot(Is);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const _n=new Q,Rc=new le;let XM=0;class di extends ms{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=y0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Rc.fromBufferAttribute(this,i),Rc.applyMatrix3(t),this.setXY(i,Rc.x,Rc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=qo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=qo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=qo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=qo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=qo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==y0&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Kv extends di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Qv extends di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Jn extends di{constructor(t,i,s){super(new Float32Array(t),i,s)}}const WM=new ll,Ko=new Q,Wh=new Q;class du{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):WM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const i=Ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ko,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Wh)),this.expandByPoint(Ko.copy(t.center).sub(Wh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let jM=0;const Ti=new on,jh=new Tn,Pr=new Q,ui=new ll,Qo=new ll,bn=new Q;class pi extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(TM(t)?Qv:Kv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new se().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,i,s){return Ti.makeTranslation(t,i,s),this.applyMatrix4(Ti),this}scale(t,i,s){return Ti.makeScale(t,i,s),this.applyMatrix4(Ti),this}lookAt(t){return jh.lookAt(t),jh.updateMatrix(),this.applyMatrix4(jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Jn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Qo.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(ui.min,Qo.min),ui.expandByPoint(bn),bn.addVectors(ui.max,Qo.max),ui.expandByPoint(bn)):(ui.expandByPoint(Qo.min),ui.expandByPoint(Qo.max))}ui.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)bn.fromBufferAttribute(p,d),m&&(Pr.fromBufferAttribute(t,d),bn.add(Pr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new Q,m[b]=new Q;const d=new Q,_=new Q,v=new Q,g=new le,M=new le,T=new le,C=new Q,y=new Q;function S(b,I,W){d.fromBufferAttribute(s,b),_.fromBufferAttribute(s,I),v.fromBufferAttribute(s,W),g.fromBufferAttribute(c,b),M.fromBufferAttribute(c,I),T.fromBufferAttribute(c,W),_.sub(d),v.sub(d),M.sub(g),T.sub(g);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(z),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(z),p[b].add(C),p[I].add(C),p[W].add(C),m[b].add(y),m[I].add(y),m[W].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let b=0,I=w.length;b<I;++b){const W=w[b],z=W.start,Y=W.count;for(let ut=z,ft=z+Y;ut<ft;ut+=3)S(t.getX(ut+0),t.getX(ut+1),t.getX(ut+2))}const O=new Q,P=new Q,B=new Q,U=new Q;function N(b){B.fromBufferAttribute(l,b),U.copy(B);const I=p[b];O.copy(I),O.sub(B.multiplyScalar(B.dot(I))).normalize(),P.crossVectors(U,I);const z=P.dot(m[b])<0?-1:1;h.setXYZW(b,O.x,O.y,O.z,z)}for(let b=0,I=w.length;b<I;++b){const W=w[b],z=W.start,Y=W.count;for(let ut=z,ft=z+Y;ut<ft;ut+=3)N(t.getX(ut+0)),N(t.getX(ut+1)),N(t.getX(ut+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new Q,c=new Q,h=new Q,p=new Q,m=new Q,d=new Q,_=new Q,v=new Q;if(t)for(let g=0,M=t.count;g<M;g+=3){const T=t.getX(g+0),C=t.getX(g+1),y=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),d.fromBufferAttribute(s,y),p.add(_),m.add(_),d.add(_),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(p,m){const d=p.array,_=p.itemSize,v=p.normalized,g=new d.constructor(m.length*_);let M=0,T=0;for(let C=0,y=m.length;C<y;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*_;for(let S=0;S<_;S++)g[T++]=d[M++]}return new di(g,_,v)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let _=0,v=d.length;_<v;_++){const g=d[_],M=t(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let v=0,g=d.length;v<g;v++){const M=d[v];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(i))}const c=t.morphAttributes;for(const d in c){const _=[],v=c[d];for(let g=0,M=v.length;g<M;g++)_.push(v[g].clone(i));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,_=h.length;d<_;d++){const v=h[d];this.addGroup(v.start,v.count,v.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let qM=0;class js extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=kr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=fd,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){Jt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Jt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ud&&(s.blendSrc=this.blendSrc),this.blendDst!==fd&&(s.blendDst=this.blendDst),this.blendEquation!==zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const xa=new Q,qh=new Q,Cc=new Q,rs=new Q,Yh=new Q,wc=new Q,Zh=new Q;class gp{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=xa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){qh.copy(t).add(i).multiplyScalar(.5),Cc.copy(i).sub(t).normalize(),rs.copy(this.origin).sub(qh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Cc),p=rs.dot(this.direction),m=-rs.dot(Cc),d=rs.lengthSq(),_=Math.abs(1-h*h);let v,g,M,T;if(_>0)if(v=h*m-p,g=h*p-m,T=c*_,v>=0)if(g>=-T)if(g<=T){const C=1/_;v*=C,g*=C,M=v*(v+h*g+2*p)+g*(h*v+g+2*m)+d}else g=c,v=Math.max(0,-(h*g+p)),M=-v*v+g*(g+2*m)+d;else g=-c,v=Math.max(0,-(h*g+p)),M=-v*v+g*(g+2*m)+d;else g<=-T?(v=Math.max(0,-(-h*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+d):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+d):(v=Math.max(0,-(h*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+d);else g=h>0?-c:c,v=Math.max(0,-(h*g+p)),M=-v*v+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(qh).addScaledVector(Cc,g),M}intersectSphere(t,i){xa.subVectors(t.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,p,m;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(p=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(p=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,xa)!==null}intersectTriangle(t,i,s,l,c){Yh.subVectors(i,t),wc.subVectors(s,t),Zh.crossVectors(Yh,wc);let h=this.direction.dot(Zh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;rs.subVectors(this.origin,t);const m=p*this.direction.dot(wc.crossVectors(rs,wc));if(m<0)return null;const d=p*this.direction.dot(Yh.cross(rs));if(d<0||m+d>h)return null;const _=-p*rs.dot(Zh);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jv extends js{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const I0=new on,Fs=new gp,Dc=new du,F0=new Q,Uc=new Q,Lc=new Q,Nc=new Q,Kh=new Q,Oc=new Q,B0=new Q,Pc=new Q;class mi extends Tn{constructor(t=new pi,i=new Jv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Oc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const _=p[m],v=c[m];_!==0&&(Kh.fromBufferAttribute(v,t),h?Oc.addScaledVector(Kh,_):Oc.addScaledVector(Kh.sub(i),_))}i.add(Oc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(c),Fs.copy(t.ray).recast(t.near),!(Dc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Dc,F0)===null||Fs.origin.distanceToSquared(F0)>(t.far-t.near)**2))&&(I0.copy(c).invert(),Fs.copy(t.ray).applyMatrix4(I0),!(s.boundingBox!==null&&Fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Fs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const y=g[T],S=h[y.materialIndex],w=Math.max(y.start,M.start),O=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let P=w,B=O;P<B;P+=3){const U=p.getX(P),N=p.getX(P+1),b=p.getX(P+2);l=Ic(this,S,t,s,d,_,v,U,N,b),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=T,S=C;y<S;y+=3){const w=p.getX(y),O=p.getX(y+1),P=p.getX(y+2);l=Ic(this,h,t,s,d,_,v,w,O,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const y=g[T],S=h[y.materialIndex],w=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let P=w,B=O;P<B;P+=3){const U=P,N=P+1,b=P+2;l=Ic(this,S,t,s,d,_,v,U,N,b),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=T,S=C;y<S;y+=3){const w=y,O=y+1,P=y+2;l=Ic(this,h,t,s,d,_,v,w,O,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function YM(r,t,i,s,l,c,h,p){let m;if(t.side===Qn?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===hs,p),m===null)return null;Pc.copy(p),Pc.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Pc);return d<i.near||d>i.far?null:{distance:d,point:Pc.clone(),object:r}}function Ic(r,t,i,s,l,c,h,p,m,d){r.getVertexPosition(p,Uc),r.getVertexPosition(m,Lc),r.getVertexPosition(d,Nc);const _=YM(r,t,i,s,Uc,Lc,Nc,B0);if(_){const v=new Q;Ai.getBarycoord(B0,Uc,Lc,Nc,v),l&&(_.uv=Ai.getInterpolatedAttribute(l,p,m,d,v,new le)),c&&(_.uv1=Ai.getInterpolatedAttribute(c,p,m,d,v,new le)),h&&(_.normal=Ai.getInterpolatedAttribute(h,p,m,d,v,new Q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new Q,materialIndex:0};Ai.getNormal(Uc,Lc,Nc,g.normal),_.face=g,_.barycoord=v}return _}class ZM extends Vn{constructor(t=null,i=1,s=1,l,c,h,p,m,d=Ln,_=Ln,v,g){super(null,h,p,m,d,_,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qh=new Q,KM=new Q,QM=new se;class ls{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Qh.subVectors(s,i).cross(KM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Qh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||QM.getNormalMatrix(t),l=this.coplanarPoint(Qh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new du,JM=new le(.5,.5),Fc=new Q;class _p{constructor(t=new ls,i=new ls,s=new ls,l=new ls,c=new ls,h=new ls){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Wi,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],_=c[4],v=c[5],g=c[6],M=c[7],T=c[8],C=c[9],y=c[10],S=c[11],w=c[12],O=c[13],P=c[14],B=c[15];if(l[0].setComponents(d-h,M-_,S-T,B-w).normalize(),l[1].setComponents(d+h,M+_,S+T,B+w).normalize(),l[2].setComponents(d+p,M+v,S+C,B+O).normalize(),l[3].setComponents(d-p,M-v,S-C,B-O).normalize(),s)l[4].setComponents(m,g,y,P).normalize(),l[5].setComponents(d-m,M-g,S-y,B-P).normalize();else if(l[4].setComponents(d-m,M-g,S-y,B-P).normalize(),i===Wi)l[5].setComponents(d+m,M+g,S+y,B+P).normalize();else if(i===rl)l[5].setComponents(m,g,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(t){Bs.center.set(0,0,0);const i=JM.distanceTo(t.center);return Bs.radius=.7071067811865476+i,Bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Fc.x=l.normal.x>0?t.max.x:t.min.x,Fc.y=l.normal.y>0?t.max.y:t.min.y,Fc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vp extends js{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ru=new Q,ou=new Q,z0=new on,Jo=new gp,Bc=new du,Jh=new Q,H0=new Q;class $M extends Tn{constructor(t=new pi,i=new vp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ru.fromBufferAttribute(i,l-1),ou.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ru.distanceTo(ou);t.setAttribute("lineDistance",new Jn(s,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=c,t.ray.intersectsSphere(Bc)===!1)return;z0.copy(l).invert(),Jo.copy(t.ray).applyMatrix4(z0);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const M=Math.max(0,h.start),T=Math.min(_.count,h.start+h.count);for(let C=M,y=T-1;C<y;C+=d){const S=_.getX(C),w=_.getX(C+1),O=zc(this,t,Jo,m,S,w,C);O&&i.push(O)}if(this.isLineLoop){const C=_.getX(T-1),y=_.getX(M),S=zc(this,t,Jo,m,C,y,T-1);S&&i.push(S)}}else{const M=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let C=M,y=T-1;C<y;C+=d){const S=zc(this,t,Jo,m,C,C+1,C);S&&i.push(S)}if(this.isLineLoop){const C=zc(this,t,Jo,m,T-1,M,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function zc(r,t,i,s,l,c,h){const p=r.geometry.attributes.position;if(ru.fromBufferAttribute(p,l),ou.fromBufferAttribute(p,c),i.distanceSqToSegment(ru,ou,Jh,H0)>s)return;Jh.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(Jh);if(!(d<t.near||d>t.far))return{distance:d,point:H0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const G0=new Q,V0=new Q;class $v extends $M{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)G0.fromBufferAttribute(i,l),V0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+G0.distanceTo(V0);t.setAttribute("lineDistance",new Jn(s,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tx extends Vn{constructor(t=[],i=ks,s,l,c,h,p,m,d,_){super(t,i,s,l,c,h,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qr extends Vn{constructor(t,i,s=Zi,l,c,h,p=Ln,m=Ln,d,_=Aa,v=1){if(_!==Aa&&_!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,h,p,m,_,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tE extends qr{constructor(t,i=Zi,s=ks,l,c,h=Ln,p=Ln,m,d=Aa){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,p,m,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ex extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cl extends pi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],_=[],v=[];let g=0,M=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Jn(d,3)),this.setAttribute("normal",new Jn(_,3)),this.setAttribute("uv",new Jn(v,2));function T(C,y,S,w,O,P,B,U,N,b,I){const W=P/N,z=B/b,Y=P/2,ut=B/2,ft=U/2,X=N+1,L=b+1;let H=0,et=0;const gt=new Q;for(let yt=0;yt<L;yt++){const F=yt*z-ut;for(let J=0;J<X;J++){const St=J*W-Y;gt[C]=St*w,gt[y]=F*O,gt[S]=ft,d.push(gt.x,gt.y,gt.z),gt[C]=0,gt[y]=0,gt[S]=U>0?1:-1,_.push(gt.x,gt.y,gt.z),v.push(J/N),v.push(1-yt/b),H+=1}}for(let yt=0;yt<b;yt++)for(let F=0;F<N;F++){const J=g+F+X*yt,St=g+F+X*(yt+1),tt=g+(F+1)+X*(yt+1),At=g+(F+1)+X*yt;m.push(J,St,At),m.push(St,tt,At),et+=6}p.addGroup(M,et,I),M+=et,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const Hc=new Q,Gc=new Q,$h=new Q,Vc=new Ai;class nx extends pi{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(il*i),h=t.getIndex(),p=t.getAttribute("position"),m=h?h.count:p.count,d=[0,0,0],_=["a","b","c"],v=new Array(3),g={},M=[];for(let T=0;T<m;T+=3){h?(d[0]=h.getX(T),d[1]=h.getX(T+1),d[2]=h.getX(T+2)):(d[0]=T,d[1]=T+1,d[2]=T+2);const{a:C,b:y,c:S}=Vc;if(C.fromBufferAttribute(p,d[0]),y.fromBufferAttribute(p,d[1]),S.fromBufferAttribute(p,d[2]),Vc.getNormal($h),v[0]=`${Math.round(C.x*l)},${Math.round(C.y*l)},${Math.round(C.z*l)}`,v[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,v[2]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let w=0;w<3;w++){const O=(w+1)%3,P=v[w],B=v[O],U=Vc[_[w]],N=Vc[_[O]],b=`${P}_${B}`,I=`${B}_${P}`;I in g&&g[I]?($h.dot(g[I].normal)<=c&&(M.push(U.x,U.y,U.z),M.push(N.x,N.y,N.z)),g[I]=null):b in g||(g[b]={index0:d[w],index1:d[O],normal:$h.clone()})}}for(const T in g)if(g[T]){const{index0:C,index1:y}=g[T];Hc.fromBufferAttribute(p,C),Gc.fromBufferAttribute(p,y),M.push(Hc.x,Hc.y,Hc.z),M.push(Gc.x,Gc.y,Gc.z)}this.setAttribute("position",new Jn(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Kr extends pi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,_=m+1,v=t/p,g=i/m,M=[],T=[],C=[],y=[];for(let S=0;S<_;S++){const w=S*g-h;for(let O=0;O<d;O++){const P=O*v-c;T.push(P,-w,0),C.push(0,0,1),y.push(O/p),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let w=0;w<p;w++){const O=w+d*S,P=w+d*(S+1),B=w+1+d*(S+1),U=w+1+d*S;M.push(O,P,U),M.push(P,B,U)}this.setIndex(M),this.setAttribute("position",new Jn(T,3)),this.setAttribute("normal",new Jn(C,3)),this.setAttribute("uv",new Jn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.width,t.height,t.widthSegments,t.heightSegments)}}class ix extends js{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pe(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function Yr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(k0(l))l.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(k0(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Yr(r[i]);for(const l in s)t[l]=s[l]}return t}function k0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function eE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function ax(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const nE={clone:Yr,merge:Hn};var iE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends js{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iE,this.fragmentShader=aE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=eE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class sE extends Ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sx extends js{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rE extends js{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oE extends js{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const X0={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(W0(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!W0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function W0(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class lE{constructor(t,i,s){const l=this;let c=!1,h=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){p++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,p),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,p),h===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,v){return d.push(_,v),this},this.removeHandler=function(_){const v=d.indexOf(_);return v!==-1&&d.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=d.length;v<g;v+=2){const M=d[v],T=d[v+1];if(M.global&&(M.lastIndex=0),M.test(_))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cE=new lE;class xp{constructor(t){this.manager=t!==void 0?t:cE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}xp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sa={};class uE extends Error{constructor(t,i){super(t),this.response=i}}class fE extends xp{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=X0.get(`file:${t}`);if(c!==void 0){this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0);return}if(Sa[t]!==void 0){Sa[t].push({onLoad:i,onProgress:s,onError:l});return}Sa[t]=[],Sa[t].push({onLoad:i,onProgress:s,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,m=this.responseType;fetch(h).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Jt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const _=Sa[t],v=d.body.getReader(),g=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),M=g?parseInt(g):0,T=M!==0;let C=0;const y=new ReadableStream({start(S){w();function w(){v.read().then(({done:O,value:P})=>{if(O)S.close();else{C+=P.byteLength;const B=new ProgressEvent("progress",{lengthComputable:T,loaded:C,total:M});for(let U=0,N=_.length;U<N;U++){const b=_[U];b.onProgress&&b.onProgress(B)}S.enqueue(P),w()}},O=>{S.error(O)})}}});return new Response(y)}else throw new uE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(m){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(_=>new DOMParser().parseFromString(_,p));case"json":return d.json();default:if(p==="")return d.text();{const v=/charset="?([^;"\s]*)"?/i.exec(p),g=v&&v[1]?v[1].toLowerCase():void 0,M=new TextDecoder(g);return d.arrayBuffer().then(T=>M.decode(T))}}}).then(d=>{X0.add(`file:${t}`,d);const _=Sa[t];delete Sa[t];for(let v=0,g=_.length;v<g;v++){const M=_[v];M.onLoad&&M.onLoad(d)}}).catch(d=>{const _=Sa[t];if(_===void 0)throw this.manager.itemError(t),d;delete Sa[t];for(let v=0,g=_.length;v<g;v++){const M=_[v];M.onError&&M.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class rx extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class ox extends rx{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const td=new on,j0=new Q,q0=new Q;class hE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;j0.setFromMatrixPosition(t.matrixWorld),i.position.copy(j0),q0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(q0),i.updateMatrixWorld(),td.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===rl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(td)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kc=new Q,Xc=new ds,Gi=new Q;class lx extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kc,Xc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Xc,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(kc,Xc,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,Xc,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const os=new Q,Y0=new le,Z0=new le;class fi extends lx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$d*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $d*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-t/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(os.x,os.y).multiplyScalar(-t/os.z)}getViewSize(t,i){return this.getViewBounds(t,Y0,Z0),i.subVectors(Z0,Y0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(il*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Sp extends lx{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class dE extends hE{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lu extends rx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new dE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Ir=-90,Fr=1;class pE extends Tn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Ir,Fr,t,i);l.layers=this.layers,this.add(l);const c=new fi(Ir,Fr,t,i);c.layers=this.layers,this.add(c);const h=new fi(Ir,Fr,t,i);h.layers=this.layers,this.add(h);const p=new fi(Ir,Fr,t,i);p.layers=this.layers,this.add(p);const m=new fi(Ir,Fr,t,i);m.layers=this.layers,this.add(m);const d=new fi(Ir,Fr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===rl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class mE extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class gE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Jt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class K0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Rp=class Rp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Rp.prototype.isMatrix2=!0;let Q0=Rp;class _E extends ms{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Jt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function J0(r,t,i,s){const l=vE(s);switch(i){case Vv:return r*t;case Xv:return r*t/l.components*l.byteLength;case up:return r*t/l.components*l.byteLength;case Xs:return r*t*2/l.components*l.byteLength;case fp:return r*t*2/l.components*l.byteLength;case kv:return r*t*3/l.components*l.byteLength;case Pi:return r*t*4/l.components*l.byteLength;case hp:return r*t*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Md:case bd:return Math.max(r,16)*Math.max(t,8)/4;case yd:case Ed:return Math.max(r,8)*Math.max(t,8)/2;case Td:case Ad:case Cd:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rd:case eu:case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Wd:case jd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Yd:case Zd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case nu:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vE(r){switch(r){case hi:case Bv:return{byteLength:1,components:1};case al:case zv:case Ta:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case Zi:case op:case Xi:return{byteLength:4,components:1};case Hv:case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);function cx(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function xE(r){const t=new WeakMap;function i(p,m){const d=p.array,_=p.usage,v=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,_),p.onUploadCallback();let M;if(d instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=r.SHORT;else if(d instanceof Uint32Array)M=r.UNSIGNED_INT;else if(d instanceof Int32Array)M=r.INT;else if(d instanceof Int8Array)M=r.BYTE;else if(d instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,d){const _=m.array,v=m.updateRanges;if(r.bindBuffer(d,p),v.length===0)r.bufferSubData(d,0,_);else{v.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<v.length;M++){const T=v[g],C=v[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,v[g]=C)}v.length=g+1;for(let M=0,T=v.length;M<T;M++){const C=v[M];r.bufferSubData(d,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var SE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yE=`#ifdef USE_ALPHAHASH
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
#endif`,ME=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AE=`#ifdef USE_AOMAP
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
#endif`,RE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CE=`#ifdef USE_BATCHING
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
#endif`,wE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NE=`#ifdef USE_IRIDESCENCE
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
#endif`,OE=`#ifdef USE_BUMPMAP
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
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,GE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kE=`#define PI 3.141592653589793
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
} // validated`,XE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WE=`vec3 transformedNormal = objectNormal;
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
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KE="gl_FragColor = linearToOutputTexel( gl_FragColor );",QE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ob=`#ifdef USE_GRADIENTMAP
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
}`,lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hb=`#ifdef USE_ENVMAP
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
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_b=`PhysicalMaterial material;
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
#endif`,vb=`uniform sampler2D dfgLUT;
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
}`,xb=`
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
#endif`,Sb=`#if defined( RE_IndirectDiffuse )
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
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Eb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Db=`#if defined( USE_POINTS_UV )
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
#endif`,Ub=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ob=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
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
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kb=`#ifdef USE_NORMALMAP
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
#endif`,Xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sT=`float getShadowMask() {
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
}`,rT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oT=`#ifdef USE_SKINNING
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
#endif`,lT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cT=`#ifdef USE_SKINNING
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
#endif`,uT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pT=`#ifdef USE_TRANSMISSION
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
#endif`,mT=`#ifdef USE_TRANSMISSION
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
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ST=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yT=`uniform sampler2D t2D;
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`#include <common>
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
}`,RT=`#if DEPTH_PACKING == 3200
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
}`,CT=`#define DISTANCE
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
}`,wT=`#define DISTANCE
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
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`uniform float scale;
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
}`,NT=`uniform vec3 diffuse;
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
}`,OT=`#include <common>
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
}`,PT=`uniform vec3 diffuse;
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
}`,IT=`#define LAMBERT
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
}`,FT=`#define LAMBERT
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
}`,BT=`#define MATCAP
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
}`,zT=`#define MATCAP
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
}`,HT=`#define NORMAL
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
}`,GT=`#define NORMAL
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
}`,VT=`#define PHONG
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
}`,kT=`#define PHONG
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
}`,XT=`#define STANDARD
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
}`,WT=`#define STANDARD
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
}`,jT=`#define TOON
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
}`,qT=`#define TOON
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
}`,YT=`uniform float size;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,KT=`#include <common>
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
}`,QT=`uniform vec3 color;
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
}`,JT=`uniform float rotation;
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
}`,$T=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:SE,alphahash_pars_fragment:yE,alphamap_fragment:ME,alphamap_pars_fragment:EE,alphatest_fragment:bE,alphatest_pars_fragment:TE,aomap_fragment:AE,aomap_pars_fragment:RE,batching_pars_vertex:CE,batching_vertex:wE,begin_vertex:DE,beginnormal_vertex:UE,bsdfs:LE,iridescence_fragment:NE,bumpmap_pars_fragment:OE,clipping_planes_fragment:PE,clipping_planes_pars_fragment:IE,clipping_planes_pars_vertex:FE,clipping_planes_vertex:BE,color_fragment:zE,color_pars_fragment:HE,color_pars_vertex:GE,color_vertex:VE,common:kE,cube_uv_reflection_fragment:XE,defaultnormal_vertex:WE,displacementmap_pars_vertex:jE,displacementmap_vertex:qE,emissivemap_fragment:YE,emissivemap_pars_fragment:ZE,colorspace_fragment:KE,colorspace_pars_fragment:QE,envmap_fragment:JE,envmap_common_pars_fragment:$E,envmap_pars_fragment:tb,envmap_pars_vertex:eb,envmap_physical_pars_fragment:hb,envmap_vertex:nb,fog_vertex:ib,fog_pars_vertex:ab,fog_fragment:sb,fog_pars_fragment:rb,gradientmap_pars_fragment:ob,lightmap_pars_fragment:lb,lights_lambert_fragment:cb,lights_lambert_pars_fragment:ub,lights_pars_begin:fb,lights_toon_fragment:db,lights_toon_pars_fragment:pb,lights_phong_fragment:mb,lights_phong_pars_fragment:gb,lights_physical_fragment:_b,lights_physical_pars_fragment:vb,lights_fragment_begin:xb,lights_fragment_maps:Sb,lights_fragment_end:yb,lightprobes_pars_fragment:Mb,logdepthbuf_fragment:Eb,logdepthbuf_pars_fragment:bb,logdepthbuf_pars_vertex:Tb,logdepthbuf_vertex:Ab,map_fragment:Rb,map_pars_fragment:Cb,map_particle_fragment:wb,map_particle_pars_fragment:Db,metalnessmap_fragment:Ub,metalnessmap_pars_fragment:Lb,morphinstance_vertex:Nb,morphcolor_vertex:Ob,morphnormal_vertex:Pb,morphtarget_pars_vertex:Ib,morphtarget_vertex:Fb,normal_fragment_begin:Bb,normal_fragment_maps:zb,normal_pars_fragment:Hb,normal_pars_vertex:Gb,normal_vertex:Vb,normalmap_pars_fragment:kb,clearcoat_normal_fragment_begin:Xb,clearcoat_normal_fragment_maps:Wb,clearcoat_pars_fragment:jb,iridescence_pars_fragment:qb,opaque_fragment:Yb,packing:Zb,premultiplied_alpha_fragment:Kb,project_vertex:Qb,dithering_fragment:Jb,dithering_pars_fragment:$b,roughnessmap_fragment:tT,roughnessmap_pars_fragment:eT,shadowmap_pars_fragment:nT,shadowmap_pars_vertex:iT,shadowmap_vertex:aT,shadowmask_pars_fragment:sT,skinbase_vertex:rT,skinning_pars_vertex:oT,skinning_vertex:lT,skinnormal_vertex:cT,specularmap_fragment:uT,specularmap_pars_fragment:fT,tonemapping_fragment:hT,tonemapping_pars_fragment:dT,transmission_fragment:pT,transmission_pars_fragment:mT,uv_pars_fragment:gT,uv_pars_vertex:_T,uv_vertex:vT,worldpos_vertex:xT,background_vert:ST,background_frag:yT,backgroundCube_vert:MT,backgroundCube_frag:ET,cube_vert:bT,cube_frag:TT,depth_vert:AT,depth_frag:RT,distance_vert:CT,distance_frag:wT,equirect_vert:DT,equirect_frag:UT,linedashed_vert:LT,linedashed_frag:NT,meshbasic_vert:OT,meshbasic_frag:PT,meshlambert_vert:IT,meshlambert_frag:FT,meshmatcap_vert:BT,meshmatcap_frag:zT,meshnormal_vert:HT,meshnormal_frag:GT,meshphong_vert:VT,meshphong_frag:kT,meshphysical_vert:XT,meshphysical_frag:WT,meshtoon_vert:jT,meshtoon_frag:qT,points_vert:YT,points_frag:ZT,shadow_vert:KT,shadow_frag:QT,sprite_vert:JT,sprite_frag:$T},zt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ki={basic:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Hn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Hn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new pe(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Hn([zt.points,zt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Hn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Hn([zt.common,zt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Hn([zt.sprite,zt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Hn([zt.common,zt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Hn([zt.lights,zt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};ki.physical={uniforms:Hn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Wc={r:0,b:0,g:0},t1=new on,ux=new se;ux.set(-1,0,0,0,1,0,0,0,1);function e1(r,t,i,s,l,c){const h=new pe(0);let p=l===!0?0:1,m,d,_=null,v=0,g=null;function M(w){let O=w.isScene===!0?w.background:null;if(O&&O.isTexture){const P=w.backgroundBlurriness>0;O=t.get(O,P)}return O}function T(w){let O=!1;const P=M(w);P===null?y(h,p):P&&P.isColor&&(y(P,1),O=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(w,O){const P=M(O);P&&(P.isCubeTexture||P.mapping===fu)?(d===void 0&&(d=new mi(new cl(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Yr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=P,d.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(t1.makeRotationFromEuler(O.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(ux),d.material.toneMapped=Te.getTransfer(P.colorSpace)!==ze,(_!==P||v!==P.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,_=P,v=P.version,g=r.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new mi(new Kr(2,2),new Ki({name:"BackgroundMaterial",uniforms:Yr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Te.getTransfer(P.colorSpace)!==ze,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=P,v=P.version,g=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function y(w,O){w.getRGB(Wc,ax(r)),i.buffers.color.setClear(Wc.r,Wc.g,Wc.b,O,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,O=1){h.set(w),p=O,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,y(h,p)},render:T,addToRenderList:C,dispose:S}}function n1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(z,Y,ut,ft,X){let L=!1;const H=v(z,ft,ut,Y);c!==H&&(c=H,d(c.object)),L=M(z,ft,ut,X),L&&T(z,ft,ut,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,P(z,Y,ut,ft),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function m(){return r.createVertexArray()}function d(z){return r.bindVertexArray(z)}function _(z){return r.deleteVertexArray(z)}function v(z,Y,ut,ft){const X=ft.wireframe===!0;let L=s[Y.id];L===void 0&&(L={},s[Y.id]=L);const H=z.isInstancedMesh===!0?z.id:0;let et=L[H];et===void 0&&(et={},L[H]=et);let gt=et[ut.id];gt===void 0&&(gt={},et[ut.id]=gt);let yt=gt[X];return yt===void 0&&(yt=g(m()),gt[X]=yt),yt}function g(z){const Y=[],ut=[],ft=[];for(let X=0;X<i;X++)Y[X]=0,ut[X]=0,ft[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ut,attributeDivisors:ft,object:z,attributes:{},index:null}}function M(z,Y,ut,ft){const X=c.attributes,L=Y.attributes;let H=0;const et=ut.getAttributes();for(const gt in et)if(et[gt].location>=0){const F=X[gt];let J=L[gt];if(J===void 0&&(gt==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),gt==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),F===void 0||F.attribute!==J||J&&F.data!==J.data)return!0;H++}return c.attributesNum!==H||c.index!==ft}function T(z,Y,ut,ft){const X={},L=Y.attributes;let H=0;const et=ut.getAttributes();for(const gt in et)if(et[gt].location>=0){let F=L[gt];F===void 0&&(gt==="instanceMatrix"&&z.instanceMatrix&&(F=z.instanceMatrix),gt==="instanceColor"&&z.instanceColor&&(F=z.instanceColor));const J={};J.attribute=F,F&&F.data&&(J.data=F.data),X[gt]=J,H++}c.attributes=X,c.attributesNum=H,c.index=ft}function C(){const z=c.newAttributes;for(let Y=0,ut=z.length;Y<ut;Y++)z[Y]=0}function y(z){S(z,0)}function S(z,Y){const ut=c.newAttributes,ft=c.enabledAttributes,X=c.attributeDivisors;ut[z]=1,ft[z]===0&&(r.enableVertexAttribArray(z),ft[z]=1),X[z]!==Y&&(r.vertexAttribDivisor(z,Y),X[z]=Y)}function w(){const z=c.newAttributes,Y=c.enabledAttributes;for(let ut=0,ft=Y.length;ut<ft;ut++)Y[ut]!==z[ut]&&(r.disableVertexAttribArray(ut),Y[ut]=0)}function O(z,Y,ut,ft,X,L,H){H===!0?r.vertexAttribIPointer(z,Y,ut,X,L):r.vertexAttribPointer(z,Y,ut,ft,X,L)}function P(z,Y,ut,ft){C();const X=ft.attributes,L=ut.getAttributes(),H=Y.defaultAttributeValues;for(const et in L){const gt=L[et];if(gt.location>=0){let yt=X[et];if(yt===void 0&&(et==="instanceMatrix"&&z.instanceMatrix&&(yt=z.instanceMatrix),et==="instanceColor"&&z.instanceColor&&(yt=z.instanceColor)),yt!==void 0){const F=yt.normalized,J=yt.itemSize,St=t.get(yt);if(St===void 0)continue;const tt=St.buffer,At=St.type,lt=St.bytesPerElement,Mt=At===r.INT||At===r.UNSIGNED_INT||yt.gpuType===op;if(yt.isInterleavedBufferAttribute){const Tt=yt.data,Ht=Tt.stride,te=yt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<gt.locationSize;Qt++)S(gt.location+Qt,Tt.meshPerAttribute);z.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Qt=0;Qt<gt.locationSize;Qt++)y(gt.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let Qt=0;Qt<gt.locationSize;Qt++)O(gt.location+Qt,J/gt.locationSize,At,F,Ht*lt,(te+J/gt.locationSize*Qt)*lt,Mt)}else{if(yt.isInstancedBufferAttribute){for(let Tt=0;Tt<gt.locationSize;Tt++)S(gt.location+Tt,yt.meshPerAttribute);z.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Tt=0;Tt<gt.locationSize;Tt++)y(gt.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let Tt=0;Tt<gt.locationSize;Tt++)O(gt.location+Tt,J/gt.locationSize,At,F,J*lt,J/gt.locationSize*Tt*lt,Mt)}}else if(H!==void 0){const F=H[et];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(gt.location,F);break;case 3:r.vertexAttrib3fv(gt.location,F);break;case 4:r.vertexAttrib4fv(gt.location,F);break;default:r.vertexAttrib1fv(gt.location,F)}}}}w()}function B(){I();for(const z in s){const Y=s[z];for(const ut in Y){const ft=Y[ut];for(const X in ft){const L=ft[X];for(const H in L)_(L[H].object),delete L[H];delete ft[X]}}delete s[z]}}function U(z){if(s[z.id]===void 0)return;const Y=s[z.id];for(const ut in Y){const ft=Y[ut];for(const X in ft){const L=ft[X];for(const H in L)_(L[H].object),delete L[H];delete ft[X]}}delete s[z.id]}function N(z){for(const Y in s){const ut=s[Y];for(const ft in ut){const X=ut[ft];if(X[z.id]===void 0)continue;const L=X[z.id];for(const H in L)_(L[H].object),delete L[H];delete X[z.id]}}}function b(z){for(const Y in s){const ut=s[Y],ft=z.isInstancedMesh===!0?z.id:0,X=ut[ft];if(X!==void 0){for(const L in X){const H=X[L];for(const et in H)_(H[et].object),delete H[et];delete X[L]}delete ut[ft],Object.keys(ut).length===0&&delete s[Y]}}}function I(){W(),h=!0,c!==l&&(c=l,d(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:I,resetDefaultState:W,dispose:B,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:y,disableUnusedAttributes:w}}function i1(r,t,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,_){_!==0&&(r.drawArraysInstanced(s,m,d,_),i.update(d,s,_))}function p(m,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,_);let g=0;for(let M=0;M<_;M++)g+=d[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function a1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==Pi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(N){const b=N===Ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==hi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Xi&&!b)}function m(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const _=m(d);_!==d&&(Jt("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:O,maxFragmentUniforms:P,maxSamples:B,samples:U}}function s1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ls,p=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||s!==0||l;return l=g,s=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,M){const T=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,S=r.get(v);if(!l||T===null||T.length===0||c&&!y)c?_(null):d();else{const w=c?0:s,O=w*4;let P=S.clippingState||null;m.value=P,P=_(T,g,O,M);for(let B=0;B!==O;++B)P[B]=i[B];S.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=w}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,M,T){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,T!==!0||y===null){const S=M+C*4,w=g.matrixWorldInverse;p.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let O=0,P=M;O!==C;++O,P+=4)h.copy(v[O]).applyMatrix4(w,p),h.normal.toArray(y,P),y[P+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}const fs=4,$0=[.125,.215,.35,.446,.526,.582],Hs=20,r1=256,$o=new Sp,tv=new pe;let ed=null,nd=0,id=0,ad=!1;const o1=new Q;class ev{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=o1}=c;ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ed,nd,id),this._renderer.xr.enabled=ad,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ks||t.mapping===jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ed=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ta,format:Pi,colorSpace:iu,depthBuffer:!1},l=nv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=l1(c)),this._blurMaterial=u1(c,t,i),this._ggxMaterial=c1(c,t,i)}return l}_compileMaterial(t){const i=new mi(new pi,t);this._renderer.compile(i,$o)}_sceneToCubeUV(t,i,s,l,c){const m=new fi(90,1,i,s),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(tv),v.toneMapping=ji,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new cl,new Jv({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let S=!1;const w=t.background;w?w.isColor&&(y.color.copy(w),t.background=null,S=!0):(y.color.copy(tv),S=!0);for(let O=0;O<6;O++){const P=O%3;P===0?(m.up.set(0,d[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[O],c.y,c.z)):P===1?(m.up.set(0,0,d[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[O],c.z)):(m.up.set(0,d[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[O]));const B=this._cubeSize;Br(l,P*B,O>2?B:0,B,B),v.setRenderTarget(l),S&&v.render(C,m),v.render(t,m)}v.toneMapping=M,v.autoClear=g,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===ks||t.mapping===jr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=av()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,$o)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,M=v*g,{_lodMax:T}=this,C=this._sizeLods[s],y=3*C*(s>T-fs?s-T+fs:0),S=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=T-i,Br(c,y,S,3*C,2*C),l.setRenderTarget(c),l.render(p,$o),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Br(t,y,S,3*C,2*C),l.setRenderTarget(t),l.render(p,$o)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=d;const g=d.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Hs-1),C=c/T,y=isFinite(c)?1+Math.floor(_*C):Hs;y>Hs&&Jt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Hs}`);const S=[];let w=0;for(let N=0;N<Hs;++N){const b=N/C,I=Math.exp(-b*b/2);S.push(I),N===0?w+=I:N<y&&(w+=2*I)}for(let N=0;N<S.length;N++)S[N]=S[N]/w;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:O}=this;g.dTheta.value=T,g.mipInt.value=O-s;const P=this._sizeLods[l],B=3*P*(l>O-fs?l-O+fs:0),U=4*(this._cubeSize-P);Br(i,B,U,3*P,2*P),m.setRenderTarget(i),m.render(v,$o)}}function l1(r){const t=[],i=[],s=[];let l=r;const c=r-fs+1+$0.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>r-fs?m=$0[h-r+fs-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,T=6,C=3,y=2,S=1,w=new Float32Array(C*T*M),O=new Float32Array(y*T*M),P=new Float32Array(S*T*M);for(let U=0;U<M;U++){const N=U%3*2/3-1,b=U>2?0:-1,I=[N,b,0,N+2/3,b,0,N+2/3,b+1,0,N,b,0,N+2/3,b+1,0,N,b+1,0];w.set(I,C*T*U),O.set(g,y*T*U);const W=[U,U,U,U,U,U];P.set(W,S*T*U)}const B=new pi;B.setAttribute("position",new di(w,C)),B.setAttribute("uv",new di(O,y)),B.setAttribute("faceIndex",new di(P,S)),s.push(new mi(B,null)),l>fs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function nv(r,t,i){const s=new qi(r,t,i);return s.texture.mapping=fu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function c1(r,t,i){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function u1(r,t,i){const s=new Float32Array(Hs),l=new Q(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function iv(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function av(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}class fx extends qi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new tx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cl(5,5,5),c=new Ki({name:"CubemapFromEquirect",uniforms:Yr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:Ea});c.uniforms.tEquirect.value=i;const h=new mi(l,c),p=i.minFilter;return i.minFilter===Gs&&(i.minFilter=Bn),new pE(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function f1(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?h(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ah||M===Rh)if(t.has(g)){const T=t.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new fx(T.height);return C.fromEquirectangularTexture(r,g),t.set(g,C),g.addEventListener("dispose",d),p(C.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const M=g.mapping,T=M===Ah||M===Rh,C=M===ks||M===jr;if(T||C){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new ev(r)),y=T?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const w=g.image;return T&&w&&w.height>0||C&&w&&m(w)?(s===null&&(s=new ev(r)),y=T?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function p(g,M){return M===Ah?g.mapping=ks:M===Rh&&(g.mapping=jr),g}function m(g){let M=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&M++;return M===T}function d(g){const M=g.target;M.removeEventListener("dispose",d);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function h1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Jd("WebGLRenderer: "+s+" extension not supported."),l}}}function d1(r,t,i,s){const l={},c=new WeakMap;function h(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER)}function d(v){const g=[],M=v.index,T=v.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const w=M.array;C=M.version;for(let O=0,P=w.length;O<P;O+=3){const B=w[O+0],U=w[O+1],N=w[O+2];g.push(B,U,U,N,N,B)}}else{const w=T.array;C=T.version;for(let O=0,P=w.length/3-1;O<P;O+=3){const B=O+0,U=O+1,N=O+2;g.push(B,U,U,N,N,B)}}const y=new(T.count>=65535?Qv:Kv)(g,1);y.version=C;const S=c.get(v);S&&t.remove(S),c.set(v,y)}function _(v){const g=c.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&d(v)}else d(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:_}}function p1(r,t,i){let s;function l(v){s=v}let c,h;function p(v){c=v.type,h=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*h),i.update(g,s,1)}function d(v,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,v*h,M),i.update(g,s,M))}function _(v,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,M);let C=0;for(let y=0;y<M;y++)C+=g[y];i.update(C,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_}function m1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ae("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function g1(r,t,i){const s=new WeakMap,l=new rn;function c(h,p,m){const d=h.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==v){let W=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",W)};var M=W;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let P=0;T===!0&&(P=1),C===!0&&(P=2),y===!0&&(P=3);let B=p.attributes.position.count*P,U=1;B>t.maxTextureSize&&(U=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const N=new Float32Array(B*U*4*v),b=new jv(N,B,U,v);b.type=Xi,b.needsUpdate=!0;const I=P*4;for(let z=0;z<v;z++){const Y=S[z],ut=w[z],ft=O[z],X=B*U*4*z;for(let L=0;L<Y.count;L++){const H=L*I;T===!0&&(l.fromBufferAttribute(Y,L),N[X+H+0]=l.x,N[X+H+1]=l.y,N[X+H+2]=l.z,N[X+H+3]=0),C===!0&&(l.fromBufferAttribute(ut,L),N[X+H+4]=l.x,N[X+H+5]=l.y,N[X+H+6]=l.z,N[X+H+7]=0),y===!0&&(l.fromBufferAttribute(ft,L),N[X+H+8]=l.x,N[X+H+9]=l.y,N[X+H+10]=l.z,N[X+H+11]=ft.itemSize===4?l.w:1)}}g={count:v,texture:b,size:new le(B,U)},s.set(p,g),p.addEventListener("dispose",W)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<d.length;y++)T+=d[y];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function _1(r,t,i,s,l){let c=new WeakMap;function h(d){const _=l.render.frame,v=d.geometry,g=t.get(d,v);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==_&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function p(){c=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:p}}const v1={[Dv]:"LINEAR_TONE_MAPPING",[Uv]:"REINHARD_TONE_MAPPING",[Lv]:"CINEON_TONE_MAPPING",[Nv]:"ACES_FILMIC_TONE_MAPPING",[Pv]:"AGX_TONE_MAPPING",[Iv]:"NEUTRAL_TONE_MAPPING",[Ov]:"CUSTOM_TONE_MAPPING"};function x1(r,t,i,s,l){const c=new qi(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new qr(t,i):void 0}),h=new qi(t,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),p=new pi;p.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Jn([0,2,0,0,2,0],2));const m=new sE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new mi(p,m),_=new Sp(-1,1,1,-1,0,1);let v=null,g=null,M=!1,T,C=null,y=[],S=!1;this.setSize=function(w,O){c.setSize(w,O),h.setSize(w,O);for(let P=0;P<y.length;P++){const B=y[P];B.setSize&&B.setSize(w,O)}},this.setEffects=function(w){y=w,S=y.length>0&&y[0].isRenderPass===!0;const O=c.width,P=c.height;for(let B=0;B<y.length;B++){const U=y[B];U.setSize&&U.setSize(O,P)}},this.begin=function(w,O){if(M||w.toneMapping===ji&&y.length===0)return!1;if(C=O,O!==null){const P=O.width,B=O.height;(c.width!==P||c.height!==B)&&this.setSize(P,B)}return S===!1&&w.setRenderTarget(c),T=w.toneMapping,w.toneMapping=ji,!0},this.hasRenderPass=function(){return S},this.end=function(w,O){w.toneMapping=T,M=!0;let P=c,B=h;for(let U=0;U<y.length;U++){const N=y[U];if(N.enabled!==!1&&(N.render(w,B,P,O),N.needsSwap!==!1)){const b=P;P=B,B=b}}if(v!==w.outputColorSpace||g!==w.toneMapping){v=w.outputColorSpace,g=w.toneMapping,m.defines={},Te.getTransfer(v)===ze&&(m.defines.SRGB_TRANSFER="");const U=v1[g];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,w.setRenderTarget(C),w.render(d,_),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const hx=new Vn,tp=new qr(1,1),dx=new jv,px=new IM,mx=new tx,sv=[],rv=[],ov=new Float32Array(16),lv=new Float32Array(9),cv=new Float32Array(4);function Qr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=sv[l];if(c===void 0&&(c=new Float32Array(l),sv[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,r[h].toArray(c,p)}return c}function yn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function mu(r,t){let i=rv[t];i===void 0&&(i=new Int32Array(t),rv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function S1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function y1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2fv(this.addr,t),Mn(i,t)}}function M1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yn(i,t))return;r.uniform3fv(this.addr,t),Mn(i,t)}}function E1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4fv(this.addr,t),Mn(i,t)}}function b1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;cv.set(s),r.uniformMatrix2fv(this.addr,!1,cv),Mn(i,s)}}function T1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;lv.set(s),r.uniformMatrix3fv(this.addr,!1,lv),Mn(i,s)}}function A1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Mn(i,t)}else{if(yn(i,s))return;ov.set(s),r.uniformMatrix4fv(this.addr,!1,ov),Mn(i,s)}}function R1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function C1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2iv(this.addr,t),Mn(i,t)}}function w1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3iv(this.addr,t),Mn(i,t)}}function D1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4iv(this.addr,t),Mn(i,t)}}function U1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function L1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;r.uniform2uiv(this.addr,t),Mn(i,t)}}function N1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;r.uniform3uiv(this.addr,t),Mn(i,t)}}function O1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;r.uniform4uiv(this.addr,t),Mn(i,t)}}function P1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(tp.compareFunction=i.isReversedDepthBuffer()?pp:dp,c=tp):c=hx,i.setTexture2D(t||c,l)}function I1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||px,l)}function F1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||mx,l)}function B1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||dx,l)}function z1(r){switch(r){case 5126:return S1;case 35664:return y1;case 35665:return M1;case 35666:return E1;case 35674:return b1;case 35675:return T1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return w1;case 35669:case 35673:return D1;case 5125:return U1;case 36294:return L1;case 36295:return N1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return B1}}function H1(r,t){r.uniform1fv(this.addr,t)}function G1(r,t){const i=Qr(t,this.size,2);r.uniform2fv(this.addr,i)}function V1(r,t){const i=Qr(t,this.size,3);r.uniform3fv(this.addr,i)}function k1(r,t){const i=Qr(t,this.size,4);r.uniform4fv(this.addr,i)}function X1(r,t){const i=Qr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function W1(r,t){const i=Qr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function j1(r,t){const i=Qr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function q1(r,t){r.uniform1iv(this.addr,t)}function Y1(r,t){r.uniform2iv(this.addr,t)}function Z1(r,t){r.uniform3iv(this.addr,t)}function K1(r,t){r.uniform4iv(this.addr,t)}function Q1(r,t){r.uniform1uiv(this.addr,t)}function J1(r,t){r.uniform2uiv(this.addr,t)}function $1(r,t){r.uniform3uiv(this.addr,t)}function tA(r,t){r.uniform4uiv(this.addr,t)}function eA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=tp:h=hx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,c[p])}function nA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||px,c[h])}function iA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||mx,c[h])}function aA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||dx,c[h])}function sA(r){switch(r){case 5126:return H1;case 35664:return G1;case 35665:return V1;case 35666:return k1;case 35674:return X1;case 35675:return W1;case 35676:return j1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return Z1;case 35669:case 35673:return K1;case 5125:return Q1;case 36294:return J1;case 36295:return $1;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return aA}}class rA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=z1(i.type)}}class oA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=sA(i.type)}}class lA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function uv(r,t){r.seq.push(t),r.map[t.id]=t}function cA(r,t,i){const s=r.name,l=s.length;for(sd.lastIndex=0;;){const c=sd.exec(s),h=sd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){uv(i,d===void 0?new rA(p,r,t):new oA(p,r,t));break}else{let v=i.map[p];v===void 0&&(v=new lA(p),uv(i,v)),i=v}}}class $c{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=t.getActiveUniform(i,h),m=t.getUniformLocation(i,p.name);cA(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function fv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const uA=37297;let fA=0;function hA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const hv=new se;function dA(r){Te._getMatrix(hv,Te.workingColorSpace,r);const t=`mat3( ${hv.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(r)){case au:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function dv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+hA(r.getShaderSource(t),p)}else return c}function pA(r,t){const i=dA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const mA={[Dv]:"Linear",[Uv]:"Reinhard",[Lv]:"Cineon",[Nv]:"ACESFilmic",[Pv]:"AgX",[Iv]:"Neutral",[Ov]:"Custom"};function gA(r,t){const i=mA[t];return i===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new Q;function _A(){Te.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),t=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function xA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function SA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:p}}return i}function nl(r){return r!==""}function pv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(r){return r.replace(yA,EA)}const MA=new Map;function EA(r,t){let i=fe[t];if(i===void 0){const s=MA.get(t);if(s!==void 0)i=fe[s],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ep(i)}const bA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(r){return r.replace(bA,TA)}function TA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function _v(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const AA={[Yc]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function RA(r){return AA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CA={[ks]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function wA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":CA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const DA={[jr]:"ENVMAP_MODE_REFRACTION"};function UA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":DA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LA={[wv]:"ENVMAP_BLENDING_MULTIPLY",[pM]:"ENVMAP_BLENDING_MIX",[mM]:"ENVMAP_BLENDING_ADD"};function NA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":LA[r.combine]||"ENVMAP_BLENDING_NONE"}function OA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function PA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=RA(i),d=wA(i),_=UA(i),v=NA(i),g=OA(i),M=vA(i),T=xA(c),C=l.createProgram();let y,S,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(nl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(nl).join(`
`),S.length>0&&(S+=`
`)):(y=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),S=[_v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?fe.tonemapping_pars_fragment:"",i.toneMapping!==ji?gA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,pA("linearToOutputTexel",i.outputColorSpace),_A(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(nl).join(`
`)),h=ep(h),h=pv(h,i),h=mv(h,i),p=ep(p),p=pv(p,i),p=mv(p,i),h=gv(h),p=gv(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===M0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===M0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=w+y+h,P=w+S+p,B=fv(l,l.VERTEX_SHADER,O),U=fv(l,l.FRAGMENT_SHADER,P);l.attachShader(C,B),l.attachShader(C,U),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function N(z){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(C)||"",ut=l.getShaderInfoLog(B)||"",ft=l.getShaderInfoLog(U)||"",X=Y.trim(),L=ut.trim(),H=ft.trim();let et=!0,gt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,B,U);else{const yt=dv(l,B,"vertex"),F=dv(l,U,"fragment");Ae("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+X+`
`+yt+`
`+F)}else X!==""?Jt("WebGLProgram: Program Info Log:",X):(L===""||H==="")&&(gt=!1);gt&&(z.diagnostics={runnable:et,programLog:X,vertexShader:{log:L,prefix:y},fragmentShader:{log:H,prefix:S}})}l.deleteShader(B),l.deleteShader(U),b=new $c(l,C),I=SA(l,C)}let b;this.getUniforms=function(){return b===void 0&&N(this),b};let I;this.getAttributes=function(){return I===void 0&&N(this),I};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=l.getProgramParameter(C,uA)),W},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=U,this}let IA=0;class FA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new BA(t),i.set(t,s)),s}}class BA{constructor(t){this.id=IA++,this.code=t,this.usedTimes=0}}function zA(r){return r===Xs||r===eu||r===nu}function HA(r,t,i,s,l,c){const h=new qv,p=new FA,m=new Set,d=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,I,W,z,Y,ut){const ft=z.fog,X=Y.geometry,L=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,et=t.get(b.envMap||L,H),gt=et&&et.mapping===fu?et.image.height:null,yt=M[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&Jt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const F=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,J=F!==void 0?F.length:0;let St=0;X.morphAttributes.position!==void 0&&(St=1),X.morphAttributes.normal!==void 0&&(St=2),X.morphAttributes.color!==void 0&&(St=3);let tt,At,lt,Mt;if(yt){const ee=ki[yt];tt=ee.vertexShader,At=ee.fragmentShader}else tt=b.vertexShader,At=b.fragmentShader,p.update(b),lt=p.getVertexShaderID(b),Mt=p.getFragmentShaderID(b);const Tt=r.getRenderTarget(),Ht=r.state.buffers.depth.getReversed(),te=Y.isInstancedMesh===!0,Qt=Y.isBatchedMesh===!0,We=!!b.map,he=!!b.matcap,Se=!!et,Ne=!!b.aoMap,ce=!!b.lightMap,ln=!!b.bumpMap,Ye=!!b.normalMap,An=!!b.displacementMap,j=!!b.emissiveMap,en=!!b.metalnessMap,de=!!b.roughnessMap,He=b.anisotropy>0,Ct=b.clearcoat>0,Qe=b.dispersion>0,D=b.iridescence>0,E=b.sheen>0,$=b.transmission>0,vt=He&&!!b.anisotropyMap,bt=Ct&&!!b.clearcoatMap,wt=Ct&&!!b.clearcoatNormalMap,Nt=Ct&&!!b.clearcoatRoughnessMap,ht=D&&!!b.iridescenceMap,dt=D&&!!b.iridescenceThicknessMap,Ot=E&&!!b.sheenColorMap,Pt=E&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,Dt=!!b.specularColorMap,ne=!!b.specularIntensityMap,ie=$&&!!b.transmissionMap,me=$&&!!b.thicknessMap,V=!!b.gradientMap,Rt=!!b.alphaMap,mt=b.alphaTest>0,Bt=!!b.alphaHash,Lt=!!b.extensions;let Et=ji;b.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Et=r.toneMapping);const jt={shaderID:yt,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:At,defines:b.defines,customVertexShaderID:lt,customFragmentShaderID:Mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&Y._colorsTexture!==null,instancing:te,instancingColor:te&&Y.instanceColor!==null,instancingMorph:te&&Y.morphTexture!==null,outputColorSpace:Tt===null?r.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:We,matcap:he,envMap:Se,envMapMode:Se&&et.mapping,envMapCubeUVHeight:gt,aoMap:Ne,lightMap:ce,bumpMap:ln,normalMap:Ye,displacementMap:An,emissiveMap:j,normalMapObjectSpace:Ye&&b.normalMapType===vM,normalMapTangentSpace:Ye&&b.normalMapType===Qd,packedNormalMap:Ye&&b.normalMapType===Qd&&zA(b.normalMap.format),metalnessMap:en,roughnessMap:de,anisotropy:He,anisotropyMap:vt,clearcoat:Ct,clearcoatMap:bt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Nt,dispersion:Qe,iridescence:D,iridescenceMap:ht,iridescenceThicknessMap:dt,sheen:E,sheenColorMap:Ot,sheenRoughnessMap:Pt,specularMap:Ut,specularColorMap:Dt,specularIntensityMap:ne,transmission:$,transmissionMap:ie,thicknessMap:me,gradientMap:V,opaque:b.transparent===!1&&b.blending===kr&&b.alphaToCoverage===!1,alphaMap:Rt,alphaTest:mt,alphaHash:Bt,combine:b.combine,mapUv:We&&T(b.map.channel),aoMapUv:Ne&&T(b.aoMap.channel),lightMapUv:ce&&T(b.lightMap.channel),bumpMapUv:ln&&T(b.bumpMap.channel),normalMapUv:Ye&&T(b.normalMap.channel),displacementMapUv:An&&T(b.displacementMap.channel),emissiveMapUv:j&&T(b.emissiveMap.channel),metalnessMapUv:en&&T(b.metalnessMap.channel),roughnessMapUv:de&&T(b.roughnessMap.channel),anisotropyMapUv:vt&&T(b.anisotropyMap.channel),clearcoatMapUv:bt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:wt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&T(b.sheenRoughnessMap.channel),specularMapUv:Ut&&T(b.specularMap.channel),specularColorMapUv:Dt&&T(b.specularColorMap.channel),specularIntensityMapUv:ne&&T(b.specularIntensityMap.channel),transmissionMapUv:ie&&T(b.transmissionMap.channel),thicknessMapUv:me&&T(b.thicknessMap.channel),alphaMapUv:Rt&&T(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ye||He),vertexNormals:!!X.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!X.attributes.uv&&(We||Rt),fog:!!ft,useFog:b.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||X.attributes.normal===void 0&&Ye===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:Y.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:St,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ut.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:Et,decodeVideoTexture:We&&b.map.isVideoTexture===!0&&Te.getTransfer(b.map.colorSpace)===ze,decodeVideoTextureEmissive:j&&b.emissiveMap.isVideoTexture===!0&&Te.getTransfer(b.emissiveMap.colorSpace)===ze,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ya,flipSided:b.side===Qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Lt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&b.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function y(b){const I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(const W in b.defines)I.push(W),I.push(b.defines[W]);return b.isRawShaderMaterial===!1&&(S(I,b),w(I,b),I.push(r.outputColorSpace)),I.push(b.customProgramCacheKey),I.join()}function S(b,I){b.push(I.precision),b.push(I.outputColorSpace),b.push(I.envMapMode),b.push(I.envMapCubeUVHeight),b.push(I.mapUv),b.push(I.alphaMapUv),b.push(I.lightMapUv),b.push(I.aoMapUv),b.push(I.bumpMapUv),b.push(I.normalMapUv),b.push(I.displacementMapUv),b.push(I.emissiveMapUv),b.push(I.metalnessMapUv),b.push(I.roughnessMapUv),b.push(I.anisotropyMapUv),b.push(I.clearcoatMapUv),b.push(I.clearcoatNormalMapUv),b.push(I.clearcoatRoughnessMapUv),b.push(I.iridescenceMapUv),b.push(I.iridescenceThicknessMapUv),b.push(I.sheenColorMapUv),b.push(I.sheenRoughnessMapUv),b.push(I.specularMapUv),b.push(I.specularColorMapUv),b.push(I.specularIntensityMapUv),b.push(I.transmissionMapUv),b.push(I.thicknessMapUv),b.push(I.combine),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.morphTargetsCount),b.push(I.morphAttributeCount),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numSpotLightMaps),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.numSpotLightShadowsWithMaps),b.push(I.numLightProbes),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection),b.push(I.depthPacking)}function w(b,I){h.disableAll(),I.instancing&&h.enable(0),I.instancingColor&&h.enable(1),I.instancingMorph&&h.enable(2),I.matcap&&h.enable(3),I.envMap&&h.enable(4),I.normalMapObjectSpace&&h.enable(5),I.normalMapTangentSpace&&h.enable(6),I.clearcoat&&h.enable(7),I.iridescence&&h.enable(8),I.alphaTest&&h.enable(9),I.vertexColors&&h.enable(10),I.vertexAlphas&&h.enable(11),I.vertexUv1s&&h.enable(12),I.vertexUv2s&&h.enable(13),I.vertexUv3s&&h.enable(14),I.vertexTangents&&h.enable(15),I.anisotropy&&h.enable(16),I.alphaHash&&h.enable(17),I.batching&&h.enable(18),I.dispersion&&h.enable(19),I.batchingColor&&h.enable(20),I.gradientMap&&h.enable(21),I.packedNormalMap&&h.enable(22),I.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),I.fog&&h.enable(0),I.useFog&&h.enable(1),I.flatShading&&h.enable(2),I.logarithmicDepthBuffer&&h.enable(3),I.reversedDepthBuffer&&h.enable(4),I.skinning&&h.enable(5),I.morphTargets&&h.enable(6),I.morphNormals&&h.enable(7),I.morphColors&&h.enable(8),I.premultipliedAlpha&&h.enable(9),I.shadowMapEnabled&&h.enable(10),I.doubleSided&&h.enable(11),I.flipSided&&h.enable(12),I.useDepthPacking&&h.enable(13),I.dithering&&h.enable(14),I.transmission&&h.enable(15),I.sheen&&h.enable(16),I.opaque&&h.enable(17),I.pointsUvs&&h.enable(18),I.decodeVideoTexture&&h.enable(19),I.decodeVideoTextureEmissive&&h.enable(20),I.alphaToCoverage&&h.enable(21),I.numLightProbeGrids>0&&h.enable(22),b.push(h.mask)}function O(b){const I=M[b.type];let W;if(I){const z=ki[I];W=nE.clone(z.uniforms)}else W=b.uniforms;return W}function P(b,I){let W=_.get(I);return W!==void 0?++W.usedTimes:(W=new PA(r,I,b,l),d.push(W),_.set(I,W)),W}function B(b){if(--b.usedTimes===0){const I=d.indexOf(b);d[I]=d[d.length-1],d.pop(),_.delete(b.cacheKey),b.destroy()}}function U(b){p.remove(b)}function N(){p.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:O,acquireProgram:P,releaseProgram:B,releaseShaderCache:U,programs:d,dispose:N}}function GA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function VA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function vv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function xv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,T,C,y,S){let w=r[t];return w===void 0?(w={id:g.id,object:g,geometry:M,material:T,materialVariant:h(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:S},r[t]=w):(w.id=g.id,w.object=g,w.geometry=M,w.material=T,w.materialVariant=h(g),w.groupOrder=C,w.renderOrder=g.renderOrder,w.z=y,w.group=S),t++,w}function m(g,M,T,C,y,S){const w=p(g,M,T,C,y,S);T.transmission>0?s.push(w):T.transparent===!0?l.push(w):i.push(w)}function d(g,M,T,C,y,S){const w=p(g,M,T,C,y,S);T.transmission>0?s.unshift(w):T.transparent===!0?l.unshift(w):i.unshift(w)}function _(g,M){i.length>1&&i.sort(g||VA),s.length>1&&s.sort(M||vv),l.length>1&&l.sort(M||vv)}function v(){for(let g=t,M=r.length;g<M;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:v,sort:_}}function kA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new xv,r.set(s,[h])):l>=c.length?(h=new xv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function XA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new pe};break;case"SpotLight":i={position:new Q,direction:new Q,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":i={color:new pe,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[t.id]=i,i}}}function WA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let jA=0;function qA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function YA(r){const t=new XA,i=WA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new Q);const l=new Q,c=new on,h=new on;function p(d){let _=0,v=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let M=0,T=0,C=0,y=0,S=0,w=0,O=0,P=0,B=0,U=0,N=0;d.sort(qA);for(let I=0,W=d.length;I<W;I++){const z=d[I],Y=z.color,ut=z.intensity,ft=z.distance;let X=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Xs?X=z.shadow.map.texture:X=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=Y.r*ut,v+=Y.g*ut,g+=Y.b*ut;else if(z.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(z.sh.coefficients[L],ut);N++}else if(z.isDirectionalLight){const L=t.get(z);if(L.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const H=z.shadow,et=i.get(z);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,s.directionalShadow[M]=et,s.directionalShadowMap[M]=X,s.directionalShadowMatrix[M]=z.shadow.matrix,w++}s.directional[M]=L,M++}else if(z.isSpotLight){const L=t.get(z);L.position.setFromMatrixPosition(z.matrixWorld),L.color.copy(Y).multiplyScalar(ut),L.distance=ft,L.coneCos=Math.cos(z.angle),L.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),L.decay=z.decay,s.spot[C]=L;const H=z.shadow;if(z.map&&(s.spotLightMap[B]=z.map,B++,H.updateMatrices(z),z.castShadow&&U++),s.spotLightMatrix[C]=H.matrix,z.castShadow){const et=i.get(z);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,s.spotShadow[C]=et,s.spotShadowMap[C]=X,P++}C++}else if(z.isRectAreaLight){const L=t.get(z);L.color.copy(Y).multiplyScalar(ut),L.halfWidth.set(z.width*.5,0,0),L.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=L,y++}else if(z.isPointLight){const L=t.get(z);if(L.color.copy(z.color).multiplyScalar(z.intensity),L.distance=z.distance,L.decay=z.decay,z.castShadow){const H=z.shadow,et=i.get(z);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,et.shadowCameraNear=H.camera.near,et.shadowCameraFar=H.camera.far,s.pointShadow[T]=et,s.pointShadowMap[T]=X,s.pointShadowMatrix[T]=z.shadow.matrix,O++}s.point[T]=L,T++}else if(z.isHemisphereLight){const L=t.get(z);L.skyColor.copy(z.color).multiplyScalar(ut),L.groundColor.copy(z.groundColor).multiplyScalar(ut),s.hemi[S]=L,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==M||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==y||b.hemiLength!==S||b.numDirectionalShadows!==w||b.numPointShadows!==O||b.numSpotShadows!==P||b.numSpotMaps!==B||b.numLightProbes!==N)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=P+B-U,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=N,b.directionalLength=M,b.pointLength=T,b.spotLength=C,b.rectAreaLength=y,b.hemiLength=S,b.numDirectionalShadows=w,b.numPointShadows=O,b.numSpotShadows=P,b.numSpotMaps=B,b.numLightProbes=N,s.version=jA++)}function m(d,_){let v=0,g=0,M=0,T=0,C=0;const y=_.matrixWorldInverse;for(let S=0,w=d.length;S<w;S++){const O=d[S];if(O.isDirectionalLight){const P=s.directional[v];P.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),v++}else if(O.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const P=s.rectArea[T];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(y),h.identity(),c.copy(O.matrixWorld),c.premultiply(y),h.extractRotation(c),P.halfWidth.set(O.width*.5,0,0),P.halfHeight.set(0,O.height*.5,0),P.halfWidth.applyMatrix4(h),P.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const P=s.point[g];P.position.setFromMatrixPosition(O.matrixWorld),P.position.applyMatrix4(y),g++}else if(O.isHemisphereLight){const P=s.hemi[C];P.direction.setFromMatrixPosition(O.matrixWorld),P.direction.transformDirection(y),C++}}}return{setup:p,setupView:m,state:s}}function Sv(r){const t=new YA(r),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){t.setup(i)}function _(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:d,setupLightsView:_,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function ZA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new Sv(r),t.set(l,[p])):c>=h.length?(p=new Sv(r),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const KA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QA=`uniform sampler2D shadow_pass;
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
}`,JA=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],$A=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],yv=new on,tl=new Q,rd=new Q;function tR(r,t,i){let s=new _p;const l=new le,c=new le,h=new rn,p=new rE,m=new oE,d={},_=i.maxTextureSize,v={[hs]:Qn,[Qn]:hs,[ya]:ya},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:KA,fragmentShader:QA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new pi;T.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new mi(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let S=this.type;this.render=function(U,N,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===rp&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yc);const I=r.getRenderTarget(),W=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Ea),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ut=S!==this.type;ut&&N.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(X=>X.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,X=U.length;ft<X;ft++){const L=U[ft],H=L.shadow;if(H===void 0){Jt("WebGLShadowMap:",L,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const et=H.getFrameExtents();l.multiply(et),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/et.x),l.x=c.x*et.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/et.y),l.y=c.y*et.y,H.mapSize.y=c.y));const gt=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=gt,H.map===null||ut===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===el){if(L.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new qi(l.x,l.y,{format:Xs,type:Ta,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),H.map.texture.name=L.name+".shadowMap",H.map.depthTexture=new qr(l.x,l.y,Xi),H.map.depthTexture.name=L.name+".shadowMapDepth",H.map.depthTexture.format=Aa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln}else L.isPointLight?(H.map=new fx(l.x),H.map.depthTexture=new tE(l.x,Zi)):(H.map=new qi(l.x,l.y),H.map.depthTexture=new qr(l.x,l.y,Zi)),H.map.depthTexture.name=L.name+".shadowMap",H.map.depthTexture.format=Aa,this.type===Yc?(H.map.depthTexture.compareFunction=gt?pp:dp,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln);H.camera.updateProjectionMatrix()}const yt=H.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<yt;F++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,F),r.clear();else{F===0&&(r.setRenderTarget(H.map),r.clear());const J=H.getViewport(F);h.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),Y.viewport(h)}if(L.isPointLight){const J=H.camera,St=H.matrix,tt=L.distance||J.far;tt!==J.far&&(J.far=tt,J.updateProjectionMatrix()),tl.setFromMatrixPosition(L.matrixWorld),J.position.copy(tl),rd.copy(J.position),rd.add(JA[F]),J.up.copy($A[F]),J.lookAt(rd),J.updateMatrixWorld(),St.makeTranslation(-tl.x,-tl.y,-tl.z),yv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(yv,J.coordinateSystem,J.reversedDepth)}else H.updateMatrices(L);s=H.getFrustum(),P(N,b,H.camera,L,this.type)}H.isPointLightShadow!==!0&&this.type===el&&w(H,b),H.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(I,W,z)};function w(U,N){const b=t.update(C);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,M.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new qi(l.x,l.y,{format:Xs,type:Ta})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(N,null,b,g,C,null),M.uniforms.shadow_pass.value=U.mapPass.texture,M.uniforms.resolution.value=U.mapSize,M.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(N,null,b,M,C,null)}function O(U,N,b,I){let W=null;const z=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)W=z;else if(W=b.isPointLight===!0?m:p,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Y=W.uuid,ut=N.uuid;let ft=d[Y];ft===void 0&&(ft={},d[Y]=ft);let X=ft[ut];X===void 0&&(X=W.clone(),ft[ut]=X,N.addEventListener("dispose",B)),W=X}if(W.visible=N.visible,W.wireframe=N.wireframe,I===el?W.side=N.shadowSide!==null?N.shadowSide:N.side:W.side=N.shadowSide!==null?N.shadowSide:v[N.side],W.alphaMap=N.alphaMap,W.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,W.map=N.map,W.clipShadows=N.clipShadows,W.clippingPlanes=N.clippingPlanes,W.clipIntersection=N.clipIntersection,W.displacementMap=N.displacementMap,W.displacementScale=N.displacementScale,W.displacementBias=N.displacementBias,W.wireframeLinewidth=N.wireframeLinewidth,W.linewidth=N.linewidth,b.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const Y=r.properties.get(W);Y.light=b}return W}function P(U,N,b,I,W){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&W===el)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const ut=t.update(U),ft=U.material;if(Array.isArray(ft)){const X=ut.groups;for(let L=0,H=X.length;L<H;L++){const et=X[L],gt=ft[et.materialIndex];if(gt&&gt.visible){const yt=O(U,gt,I,W);U.onBeforeShadow(r,U,N,b,ut,yt,et),r.renderBufferDirect(b,null,ut,yt,U,et),U.onAfterShadow(r,U,N,b,ut,yt,et)}}}else if(ft.visible){const X=O(U,ft,I,W);U.onBeforeShadow(r,U,N,b,ut,X,null),r.renderBufferDirect(b,null,ut,X,U,null),U.onAfterShadow(r,U,N,b,ut,X,null)}}const Y=U.children;for(let ut=0,ft=Y.length;ut<ft;ut++)P(Y[ut],N,b,I,W)}function B(U){U.target.removeEventListener("dispose",B);for(const b in d){const I=d[b],W=U.target.uuid;W in I&&(I[W].dispose(),delete I[W])}}}function eR(r,t){function i(){let V=!1;const Rt=new rn;let mt=null;const Bt=new rn(0,0,0,0);return{setMask:function(Lt){mt!==Lt&&!V&&(r.colorMask(Lt,Lt,Lt,Lt),mt=Lt)},setLocked:function(Lt){V=Lt},setClear:function(Lt,Et,jt,ee,nn){nn===!0&&(Lt*=ee,Et*=ee,jt*=ee),Rt.set(Lt,Et,jt,ee),Bt.equals(Rt)===!1&&(r.clearColor(Lt,Et,jt,ee),Bt.copy(Rt))},reset:function(){V=!1,mt=null,Bt.set(-1,0,0,0)}}}function s(){let V=!1,Rt=!1,mt=null,Bt=null,Lt=null;return{setReversed:function(Et){if(Rt!==Et){const jt=t.get("EXT_clip_control");Et?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),Rt=Et;const ee=Lt;Lt=null,this.setClear(ee)}},getReversed:function(){return Rt},setTest:function(Et){Et?Tt(r.DEPTH_TEST):Ht(r.DEPTH_TEST)},setMask:function(Et){mt!==Et&&!V&&(r.depthMask(Et),mt=Et)},setFunc:function(Et){if(Rt&&(Et=CM[Et]),Bt!==Et){switch(Et){case hd:r.depthFunc(r.NEVER);break;case dd:r.depthFunc(r.ALWAYS);break;case pd:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case md:r.depthFunc(r.EQUAL);break;case gd:r.depthFunc(r.GEQUAL);break;case _d:r.depthFunc(r.GREATER);break;case vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=Et}},setLocked:function(Et){V=Et},setClear:function(Et){Lt!==Et&&(Lt=Et,Rt&&(Et=1-Et),r.clearDepth(Et))},reset:function(){V=!1,mt=null,Bt=null,Lt=null,Rt=!1}}}function l(){let V=!1,Rt=null,mt=null,Bt=null,Lt=null,Et=null,jt=null,ee=null,nn=null;return{setTest:function(De){V||(De?Tt(r.STENCIL_TEST):Ht(r.STENCIL_TEST))},setMask:function(De){Rt!==De&&!V&&(r.stencilMask(De),Rt=De)},setFunc:function(De,gi,$n){(mt!==De||Bt!==gi||Lt!==$n)&&(r.stencilFunc(De,gi,$n),mt=De,Bt=gi,Lt=$n)},setOp:function(De,gi,$n){(Et!==De||jt!==gi||ee!==$n)&&(r.stencilOp(De,gi,$n),Et=De,jt=gi,ee=$n)},setLocked:function(De){V=De},setClear:function(De){nn!==De&&(r.clearStencil(De),nn=De)},reset:function(){V=!1,Rt=null,mt=null,Bt=null,Lt=null,Et=null,jt=null,ee=null,nn=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let _={},v={},g={},M=new WeakMap,T=[],C=null,y=!1,S=null,w=null,O=null,P=null,B=null,U=null,N=null,b=new pe(0,0,0),I=0,W=!1,z=null,Y=null,ut=null,ft=null,X=null;const L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,et=0;const gt=r.getParameter(r.VERSION);gt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(gt)[1]),H=et>=1):gt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(gt)[1]),H=et>=2);let yt=null,F={};const J=r.getParameter(r.SCISSOR_BOX),St=r.getParameter(r.VIEWPORT),tt=new rn().fromArray(J),At=new rn().fromArray(St);function lt(V,Rt,mt,Bt){const Lt=new Uint8Array(4),Et=r.createTexture();r.bindTexture(V,Et),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let jt=0;jt<mt;jt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(Rt+jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return Et}const Mt={};Mt[r.TEXTURE_2D]=lt(r.TEXTURE_2D,r.TEXTURE_2D,1),Mt[r.TEXTURE_CUBE_MAP]=lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[r.TEXTURE_2D_ARRAY]=lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Mt[r.TEXTURE_3D]=lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Tt(r.DEPTH_TEST),h.setFunc(Wr),ln(!1),Ye(g0),Tt(r.CULL_FACE),Ne(Ea);function Tt(V){_[V]!==!0&&(r.enable(V),_[V]=!0)}function Ht(V){_[V]!==!1&&(r.disable(V),_[V]=!1)}function te(V,Rt){return g[V]!==Rt?(r.bindFramebuffer(V,Rt),g[V]=Rt,V===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Rt),V===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Qt(V,Rt){let mt=T,Bt=!1;if(V){mt=M.get(Rt),mt===void 0&&(mt=[],M.set(Rt,mt));const Lt=V.textures;if(mt.length!==Lt.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let Et=0,jt=Lt.length;Et<jt;Et++)mt[Et]=r.COLOR_ATTACHMENT0+Et;mt.length=Lt.length,Bt=!0}}else mt[0]!==r.BACK&&(mt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(mt)}function We(V){return C!==V?(r.useProgram(V),C=V,!0):!1}const he={[zs]:r.FUNC_ADD,[Qy]:r.FUNC_SUBTRACT,[Jy]:r.FUNC_REVERSE_SUBTRACT};he[$y]=r.MIN,he[tM]=r.MAX;const Se={[eM]:r.ZERO,[nM]:r.ONE,[iM]:r.SRC_COLOR,[ud]:r.SRC_ALPHA,[cM]:r.SRC_ALPHA_SATURATE,[oM]:r.DST_COLOR,[sM]:r.DST_ALPHA,[aM]:r.ONE_MINUS_SRC_COLOR,[fd]:r.ONE_MINUS_SRC_ALPHA,[lM]:r.ONE_MINUS_DST_COLOR,[rM]:r.ONE_MINUS_DST_ALPHA,[uM]:r.CONSTANT_COLOR,[fM]:r.ONE_MINUS_CONSTANT_COLOR,[hM]:r.CONSTANT_ALPHA,[dM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ne(V,Rt,mt,Bt,Lt,Et,jt,ee,nn,De){if(V===Ea){y===!0&&(Ht(r.BLEND),y=!1);return}if(y===!1&&(Tt(r.BLEND),y=!0),V!==Ky){if(V!==S||De!==W){if((w!==zs||B!==zs)&&(r.blendEquation(r.FUNC_ADD),w=zs,B=zs),De)switch(V){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _0:r.blendFunc(r.ONE,r.ONE);break;case v0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case x0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ae("WebGLState: Invalid blending: ",V);break}else switch(V){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case v0:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case x0:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",V);break}O=null,P=null,U=null,N=null,b.set(0,0,0),I=0,S=V,W=De}return}Lt=Lt||Rt,Et=Et||mt,jt=jt||Bt,(Rt!==w||Lt!==B)&&(r.blendEquationSeparate(he[Rt],he[Lt]),w=Rt,B=Lt),(mt!==O||Bt!==P||Et!==U||jt!==N)&&(r.blendFuncSeparate(Se[mt],Se[Bt],Se[Et],Se[jt]),O=mt,P=Bt,U=Et,N=jt),(ee.equals(b)===!1||nn!==I)&&(r.blendColor(ee.r,ee.g,ee.b,nn),b.copy(ee),I=nn),S=V,W=!1}function ce(V,Rt){V.side===ya?Ht(r.CULL_FACE):Tt(r.CULL_FACE);let mt=V.side===Qn;Rt&&(mt=!mt),ln(mt),V.blending===kr&&V.transparent===!1?Ne(Ea):Ne(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const Bt=V.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(V.stencilWriteMask),p.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),p.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),j(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Tt(r.SAMPLE_ALPHA_TO_COVERAGE):Ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function ln(V){z!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),z=V)}function Ye(V){V!==Yy?(Tt(r.CULL_FACE),V!==Y&&(V===g0?r.cullFace(r.BACK):V===Zy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ht(r.CULL_FACE),Y=V}function An(V){V!==ut&&(H&&r.lineWidth(V),ut=V)}function j(V,Rt,mt){V?(Tt(r.POLYGON_OFFSET_FILL),(ft!==Rt||X!==mt)&&(ft=Rt,X=mt,h.getReversed()&&(Rt=-Rt),r.polygonOffset(Rt,mt))):Ht(r.POLYGON_OFFSET_FILL)}function en(V){V?Tt(r.SCISSOR_TEST):Ht(r.SCISSOR_TEST)}function de(V){V===void 0&&(V=r.TEXTURE0+L-1),yt!==V&&(r.activeTexture(V),yt=V)}function He(V,Rt,mt){mt===void 0&&(yt===null?mt=r.TEXTURE0+L-1:mt=yt);let Bt=F[mt];Bt===void 0&&(Bt={type:void 0,texture:void 0},F[mt]=Bt),(Bt.type!==V||Bt.texture!==Rt)&&(yt!==mt&&(r.activeTexture(mt),yt=mt),r.bindTexture(V,Rt||Mt[V]),Bt.type=V,Bt.texture=Rt)}function Ct(){const V=F[yt];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Qe(){try{r.compressedTexImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function E(){try{r.texSubImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function $(){try{r.texSubImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function vt(){try{r.compressedTexSubImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function bt(){try{r.compressedTexSubImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function wt(){try{r.texStorage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function Nt(){try{r.texStorage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function ht(){try{r.texImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function dt(){try{r.texImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function Ot(V){return v[V]!==void 0?v[V]:r.getParameter(V)}function Pt(V,Rt){v[V]!==Rt&&(r.pixelStorei(V,Rt),v[V]=Rt)}function Ut(V){tt.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),tt.copy(V))}function Dt(V){At.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),At.copy(V))}function ne(V,Rt){let mt=d.get(Rt);mt===void 0&&(mt=new WeakMap,d.set(Rt,mt));let Bt=mt.get(V);Bt===void 0&&(Bt=r.getUniformBlockIndex(Rt,V.name),mt.set(V,Bt))}function ie(V,Rt){const Bt=d.get(Rt).get(V);m.get(Rt)!==Bt&&(r.uniformBlockBinding(Rt,Bt,V.__bindingPointIndex),m.set(Rt,Bt))}function me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},v={},yt=null,F={},g={},M=new WeakMap,T=[],C=null,y=!1,S=null,w=null,O=null,P=null,B=null,U=null,N=null,b=new pe(0,0,0),I=0,W=!1,z=null,Y=null,ut=null,ft=null,X=null,tt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Tt,disable:Ht,bindFramebuffer:te,drawBuffers:Qt,useProgram:We,setBlending:Ne,setMaterial:ce,setFlipSided:ln,setCullFace:Ye,setLineWidth:An,setPolygonOffset:j,setScissorTest:en,activeTexture:de,bindTexture:He,unbindTexture:Ct,compressedTexImage2D:Qe,compressedTexImage3D:D,texImage2D:ht,texImage3D:dt,pixelStorei:Pt,getParameter:Ot,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:wt,texStorage3D:Nt,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:Ut,viewport:Dt,reset:me}}function nR(r,t,i,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new le,_=new WeakMap,v=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,E){return T?new OffscreenCanvas(D,E):su("canvas")}function y(D,E,$){let vt=1;const bt=Qe(D);if((bt.width>$||bt.height>$)&&(vt=$/Math.max(bt.width,bt.height)),vt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const wt=Math.floor(vt*bt.width),Nt=Math.floor(vt*bt.height);g===void 0&&(g=C(wt,Nt));const ht=E?C(wt,Nt):g;return ht.width=wt,ht.height=Nt,ht.getContext("2d").drawImage(D,0,0,wt,Nt),Jt("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+wt+"x"+Nt+")."),ht}else return"data"in D&&Jt("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),D;return D}function S(D){return D.generateMipmaps}function w(D){r.generateMipmap(D)}function O(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,E,$,vt,bt,wt=!1){if(D!==null){if(r[D]!==void 0)return r[D];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Nt;vt&&(Nt=t.get("EXT_texture_norm16"),Nt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=E;if(E===r.RED&&($===r.FLOAT&&(ht=r.R32F),$===r.HALF_FLOAT&&(ht=r.R16F),$===r.UNSIGNED_BYTE&&(ht=r.R8),$===r.UNSIGNED_SHORT&&Nt&&(ht=Nt.R16_EXT),$===r.SHORT&&Nt&&(ht=Nt.R16_SNORM_EXT)),E===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.R8UI),$===r.UNSIGNED_SHORT&&(ht=r.R16UI),$===r.UNSIGNED_INT&&(ht=r.R32UI),$===r.BYTE&&(ht=r.R8I),$===r.SHORT&&(ht=r.R16I),$===r.INT&&(ht=r.R32I)),E===r.RG&&($===r.FLOAT&&(ht=r.RG32F),$===r.HALF_FLOAT&&(ht=r.RG16F),$===r.UNSIGNED_BYTE&&(ht=r.RG8),$===r.UNSIGNED_SHORT&&Nt&&(ht=Nt.RG16_EXT),$===r.SHORT&&Nt&&(ht=Nt.RG16_SNORM_EXT)),E===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.RG8UI),$===r.UNSIGNED_SHORT&&(ht=r.RG16UI),$===r.UNSIGNED_INT&&(ht=r.RG32UI),$===r.BYTE&&(ht=r.RG8I),$===r.SHORT&&(ht=r.RG16I),$===r.INT&&(ht=r.RG32I)),E===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),$===r.UNSIGNED_INT&&(ht=r.RGB32UI),$===r.BYTE&&(ht=r.RGB8I),$===r.SHORT&&(ht=r.RGB16I),$===r.INT&&(ht=r.RGB32I)),E===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),$===r.UNSIGNED_INT&&(ht=r.RGBA32UI),$===r.BYTE&&(ht=r.RGBA8I),$===r.SHORT&&(ht=r.RGBA16I),$===r.INT&&(ht=r.RGBA32I)),E===r.RGB&&($===r.UNSIGNED_SHORT&&Nt&&(ht=Nt.RGB16_EXT),$===r.SHORT&&Nt&&(ht=Nt.RGB16_SNORM_EXT),$===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),E===r.RGBA){const dt=wt?au:Te.getTransfer(bt);$===r.FLOAT&&(ht=r.RGBA32F),$===r.HALF_FLOAT&&(ht=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ht=dt===ze?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT&&Nt&&(ht=Nt.RGBA16_EXT),$===r.SHORT&&Nt&&(ht=Nt.RGBA16_SNORM_EXT),$===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function B(D,E){let $;return D?E===null||E===Zi||E===sl?$=r.DEPTH24_STENCIL8:E===Xi?$=r.DEPTH32F_STENCIL8:E===al&&($=r.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Zi||E===sl?$=r.DEPTH_COMPONENT24:E===Xi?$=r.DEPTH_COMPONENT32F:E===al&&($=r.DEPTH_COMPONENT16),$}function U(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ln&&D.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function N(D){const E=D.target;E.removeEventListener("dispose",N),I(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&v.delete(E)}function b(D){const E=D.target;E.removeEventListener("dispose",b),z(E)}function I(D){const E=s.get(D);if(E.__webglInit===void 0)return;const $=D.source,vt=M.get($);if(vt){const bt=vt[E.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&W(D),Object.keys(vt).length===0&&M.delete($)}s.remove(D)}function W(D){const E=s.get(D);r.deleteTexture(E.__webglTexture);const $=D.source,vt=M.get($);delete vt[E.__cacheKey],h.memory.textures--}function z(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(E.__webglFramebuffer[vt]))for(let bt=0;bt<E.__webglFramebuffer[vt].length;bt++)r.deleteFramebuffer(E.__webglFramebuffer[vt][bt]);else r.deleteFramebuffer(E.__webglFramebuffer[vt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[vt])}else{if(Array.isArray(E.__webglFramebuffer))for(let vt=0;vt<E.__webglFramebuffer.length;vt++)r.deleteFramebuffer(E.__webglFramebuffer[vt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let vt=0;vt<E.__webglColorRenderbuffer.length;vt++)E.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[vt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=D.textures;for(let vt=0,bt=$.length;vt<bt;vt++){const wt=s.get($[vt]);wt.__webglTexture&&(r.deleteTexture(wt.__webglTexture),h.memory.textures--),s.remove($[vt])}s.remove(D)}let Y=0;function ut(){Y=0}function ft(){return Y}function X(D){Y=D}function L(){const D=Y;return D>=l.maxTextures&&Jt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),Y+=1,D}function H(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function et(D,E){const $=s.get(D);if(D.isVideoTexture&&He(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&$.__version!==D.version){const vt=D.image;if(vt===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht($,D,E);return}}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+E)}function gt(D,E){const $=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Ht($,D,E);return}else D.isExternalTexture&&($.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+E)}function yt(D,E){const $=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){Ht($,D,E);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+E)}function F(D,E){const $=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&$.__version!==D.version){te($,D,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+E)}const J={[xd]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[Sd]:r.MIRRORED_REPEAT},St={[Ln]:r.NEAREST,[gM]:r.NEAREST_MIPMAP_NEAREST,[Sc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Ch]:r.LINEAR_MIPMAP_NEAREST,[Gs]:r.LINEAR_MIPMAP_LINEAR},tt={[xM]:r.NEVER,[bM]:r.ALWAYS,[SM]:r.LESS,[dp]:r.LEQUAL,[yM]:r.EQUAL,[pp]:r.GEQUAL,[MM]:r.GREATER,[EM]:r.NOTEQUAL};function At(D,E){if(E.type===Xi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===Ch||E.magFilter===Sc||E.magFilter===Gs||E.minFilter===Bn||E.minFilter===Ch||E.minFilter===Sc||E.minFilter===Gs)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,J[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,J[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,J[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,St[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==Sc&&E.minFilter!==Gs||E.type===Xi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function lt(D,E){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",N));const vt=E.source;let bt=M.get(vt);bt===void 0&&(bt={},M.set(vt,bt));const wt=H(E);if(wt!==D.__cacheKey){bt[wt]===void 0&&(bt[wt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,$=!0),bt[wt].usedTimes++;const Nt=bt[D.__cacheKey];Nt!==void 0&&(bt[D.__cacheKey].usedTimes--,Nt.usedTimes===0&&W(E)),D.__cacheKey=wt,D.__webglTexture=bt[wt].texture}return $}function Mt(D,E,$){return Math.floor(Math.floor(D/$)/E)}function Tt(D,E,$,vt){const wt=D.updateRanges;if(wt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,$,vt,E.data);else{wt.sort((Pt,Ut)=>Pt.start-Ut.start);let Nt=0;for(let Pt=1;Pt<wt.length;Pt++){const Ut=wt[Nt],Dt=wt[Pt],ne=Ut.start+Ut.count,ie=Mt(Dt.start,E.width,4),me=Mt(Ut.start,E.width,4);Dt.start<=ne+1&&ie===me&&Mt(Dt.start+Dt.count-1,E.width,4)===ie?Ut.count=Math.max(Ut.count,Dt.start+Dt.count-Ut.start):(++Nt,wt[Nt]=Dt)}wt.length=Nt+1;const ht=i.getParameter(r.UNPACK_ROW_LENGTH),dt=i.getParameter(r.UNPACK_SKIP_PIXELS),Ot=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Pt=0,Ut=wt.length;Pt<Ut;Pt++){const Dt=wt[Pt],ne=Math.floor(Dt.start/4),ie=Math.ceil(Dt.count/4),me=ne%E.width,V=Math.floor(ne/E.width),Rt=ie,mt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,me),i.pixelStorei(r.UNPACK_SKIP_ROWS,V),i.texSubImage2D(r.TEXTURE_2D,0,me,V,Rt,mt,$,vt,E.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ht),i.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ot)}}function Ht(D,E,$){let vt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(vt=r.TEXTURE_3D);const bt=lt(D,E),wt=E.source;i.bindTexture(vt,D.__webglTexture,r.TEXTURE0+$);const Nt=s.get(wt);if(wt.version!==Nt.__version||bt===!0){if(i.activeTexture(r.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const mt=Te.getPrimaries(Te.workingColorSpace),Bt=E.colorSpace===cs?null:Te.getPrimaries(E.colorSpace),Lt=E.colorSpace===cs||mt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let dt=y(E.image,!1,l.maxTextureSize);dt=Ct(E,dt);const Ot=c.convert(E.format,E.colorSpace),Pt=c.convert(E.type);let Ut=P(E.internalFormat,Ot,Pt,E.normalized,E.colorSpace,E.isVideoTexture);At(vt,E);let Dt;const ne=E.mipmaps,ie=E.isVideoTexture!==!0,me=Nt.__version===void 0||bt===!0,V=wt.dataReady,Rt=U(E,dt);if(E.isDepthTexture)Ut=B(E.format===Vs,E.type),me&&(ie?i.texStorage2D(r.TEXTURE_2D,1,Ut,dt.width,dt.height):i.texImage2D(r.TEXTURE_2D,0,Ut,dt.width,dt.height,0,Ot,Pt,null));else if(E.isDataTexture)if(ne.length>0){ie&&me&&i.texStorage2D(r.TEXTURE_2D,Rt,Ut,ne[0].width,ne[0].height);for(let mt=0,Bt=ne.length;mt<Bt;mt++)Dt=ne[mt],ie?V&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,Ot,Pt,Dt.data):i.texImage2D(r.TEXTURE_2D,mt,Ut,Dt.width,Dt.height,0,Ot,Pt,Dt.data);E.generateMipmaps=!1}else ie?(me&&i.texStorage2D(r.TEXTURE_2D,Rt,Ut,dt.width,dt.height),V&&Tt(E,dt,Ot,Pt)):i.texImage2D(r.TEXTURE_2D,0,Ut,dt.width,dt.height,0,Ot,Pt,dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&me&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Ut,ne[0].width,ne[0].height,dt.depth);for(let mt=0,Bt=ne.length;mt<Bt;mt++)if(Dt=ne[mt],E.format!==Pi)if(Ot!==null)if(ie){if(V)if(E.layerUpdates.size>0){const Lt=J0(Dt.width,Dt.height,E.format,E.type);for(const Et of E.layerUpdates){const jt=Dt.data.subarray(Et*Lt/Dt.data.BYTES_PER_ELEMENT,(Et+1)*Lt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,Et,Dt.width,Dt.height,1,Ot,jt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Dt.width,Dt.height,dt.depth,Ot,Dt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,Ut,Dt.width,Dt.height,dt.depth,0,Dt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?V&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Dt.width,Dt.height,dt.depth,Ot,Pt,Dt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,mt,Ut,Dt.width,Dt.height,dt.depth,0,Ot,Pt,Dt.data)}else{ie&&me&&i.texStorage2D(r.TEXTURE_2D,Rt,Ut,ne[0].width,ne[0].height);for(let mt=0,Bt=ne.length;mt<Bt;mt++)Dt=ne[mt],E.format!==Pi?Ot!==null?ie?V&&i.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,Ot,Dt.data):i.compressedTexImage2D(r.TEXTURE_2D,mt,Ut,Dt.width,Dt.height,0,Dt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?V&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,Ot,Pt,Dt.data):i.texImage2D(r.TEXTURE_2D,mt,Ut,Dt.width,Dt.height,0,Ot,Pt,Dt.data)}else if(E.isDataArrayTexture)if(ie){if(me&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Ut,dt.width,dt.height,dt.depth),V)if(E.layerUpdates.size>0){const mt=J0(dt.width,dt.height,E.format,E.type);for(const Bt of E.layerUpdates){const Lt=dt.data.subarray(Bt*mt/dt.data.BYTES_PER_ELEMENT,(Bt+1)*mt/dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Bt,dt.width,dt.height,1,Ot,Pt,Lt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ot,Pt,dt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ut,dt.width,dt.height,dt.depth,0,Ot,Pt,dt.data);else if(E.isData3DTexture)ie?(me&&i.texStorage3D(r.TEXTURE_3D,Rt,Ut,dt.width,dt.height,dt.depth),V&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ot,Pt,dt.data)):i.texImage3D(r.TEXTURE_3D,0,Ut,dt.width,dt.height,dt.depth,0,Ot,Pt,dt.data);else if(E.isFramebufferTexture){if(me)if(ie)i.texStorage2D(r.TEXTURE_2D,Rt,Ut,dt.width,dt.height);else{let mt=dt.width,Bt=dt.height;for(let Lt=0;Lt<Rt;Lt++)i.texImage2D(r.TEXTURE_2D,Lt,Ut,mt,Bt,0,Ot,Pt,null),mt>>=1,Bt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const mt=r.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),dt.parentNode!==mt){mt.appendChild(dt),v.add(E),mt.onpaint=ee=>{const nn=ee.changedElements;for(const De of v)nn.includes(De.image)&&(De.needsUpdate=!0)},mt.requestPaint();return}const Bt=0,Lt=r.RGBA,Et=r.RGBA,jt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Bt,Lt,Et,jt,dt),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ne.length>0){if(ie&&me){const mt=Qe(ne[0]);i.texStorage2D(r.TEXTURE_2D,Rt,Ut,mt.width,mt.height)}for(let mt=0,Bt=ne.length;mt<Bt;mt++)Dt=ne[mt],ie?V&&i.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ot,Pt,Dt):i.texImage2D(r.TEXTURE_2D,mt,Ut,Ot,Pt,Dt);E.generateMipmaps=!1}else if(ie){if(me){const mt=Qe(dt);i.texStorage2D(r.TEXTURE_2D,Rt,Ut,mt.width,mt.height)}V&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ot,Pt,dt)}else i.texImage2D(r.TEXTURE_2D,0,Ut,Ot,Pt,dt);S(E)&&w(vt),Nt.__version=wt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function te(D,E,$){if(E.image.length!==6)return;const vt=lt(D,E),bt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+$);const wt=s.get(bt);if(bt.version!==wt.__version||vt===!0){i.activeTexture(r.TEXTURE0+$);const Nt=Te.getPrimaries(Te.workingColorSpace),ht=E.colorSpace===cs?null:Te.getPrimaries(E.colorSpace),dt=E.colorSpace===cs||Nt===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ot=E.isCompressedTexture||E.image[0].isCompressedTexture,Pt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let Et=0;Et<6;Et++)!Ot&&!Pt?Ut[Et]=y(E.image[Et],!0,l.maxCubemapSize):Ut[Et]=Pt?E.image[Et].image:E.image[Et],Ut[Et]=Ct(E,Ut[Et]);const Dt=Ut[0],ne=c.convert(E.format,E.colorSpace),ie=c.convert(E.type),me=P(E.internalFormat,ne,ie,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Rt=wt.__version===void 0||vt===!0,mt=bt.dataReady;let Bt=U(E,Dt);At(r.TEXTURE_CUBE_MAP,E);let Lt;if(Ot){V&&Rt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,me,Dt.width,Dt.height);for(let Et=0;Et<6;Et++){Lt=Ut[Et].mipmaps;for(let jt=0;jt<Lt.length;jt++){const ee=Lt[jt];E.format!==Pi?ne!==null?V?mt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,0,0,ee.width,ee.height,ne,ee.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,me,ee.width,ee.height,0,ee.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,0,0,ee.width,ee.height,ne,ie,ee.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,me,ee.width,ee.height,0,ne,ie,ee.data)}}}else{if(Lt=E.mipmaps,V&&Rt){Lt.length>0&&Bt++;const Et=Qe(Ut[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,me,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Pt){V?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Ut[Et].width,Ut[Et].height,ne,ie,Ut[Et].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,me,Ut[Et].width,Ut[Et].height,0,ne,ie,Ut[Et].data);for(let jt=0;jt<Lt.length;jt++){const nn=Lt[jt].image[Et].image;V?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,0,0,nn.width,nn.height,ne,ie,nn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,me,nn.width,nn.height,0,ne,ie,nn.data)}}else{V?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ne,ie,Ut[Et]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,me,ne,ie,Ut[Et]);for(let jt=0;jt<Lt.length;jt++){const ee=Lt[jt];V?mt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,0,0,ne,ie,ee.image[Et]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,me,ne,ie,ee.image[Et])}}}S(E)&&w(r.TEXTURE_CUBE_MAP),wt.__version=bt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Qt(D,E,$,vt,bt,wt){const Nt=c.convert($.format,$.colorSpace),ht=c.convert($.type),dt=P($.internalFormat,Nt,ht,$.normalized,$.colorSpace),Ot=s.get(E),Pt=s.get($);if(Pt.__renderTarget=E,!Ot.__hasExternalTextures){const Ut=Math.max(1,E.width>>wt),Dt=Math.max(1,E.height>>wt);bt===r.TEXTURE_3D||bt===r.TEXTURE_2D_ARRAY?i.texImage3D(bt,wt,dt,Ut,Dt,E.depth,0,Nt,ht,null):i.texImage2D(bt,wt,dt,Ut,Dt,0,Nt,ht,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),de(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,bt,Pt.__webglTexture,0,en(E)):(bt===r.TEXTURE_2D||bt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,bt,Pt.__webglTexture,wt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function We(D,E,$){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const vt=E.depthTexture,bt=vt&&vt.isDepthTexture?vt.type:null,wt=B(E.stencilBuffer,bt),Nt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;de(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(E),wt,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(E),wt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,wt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,D)}else{const vt=E.textures;for(let bt=0;bt<vt.length;bt++){const wt=vt[bt],Nt=c.convert(wt.format,wt.colorSpace),ht=c.convert(wt.type),dt=P(wt.internalFormat,Nt,ht,wt.normalized,wt.colorSpace);de(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(E),dt,E.width,E.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(E),dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function he(D,E,$){const vt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=s.get(E.depthTexture);if(bt.__renderTarget=E,(!bt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),vt){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,E.depthTexture.addEventListener("dispose",N)),bt.__webglTexture===void 0){bt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,bt.__webglTexture),At(r.TEXTURE_CUBE_MAP,E.depthTexture);const Ot=c.convert(E.depthTexture.format),Pt=c.convert(E.depthTexture.type);let Ut;E.depthTexture.format===Aa?Ut=r.DEPTH_COMPONENT24:E.depthTexture.format===Vs&&(Ut=r.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Ut,E.width,E.height,0,Ot,Pt,null)}}else et(E.depthTexture,0);const wt=bt.__webglTexture,Nt=en(E),ht=vt?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,dt=E.depthTexture.format===Vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Aa)de(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,ht,wt,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,dt,ht,wt,0);else if(E.depthTexture.format===Vs)de(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,ht,wt,0,Nt):r.framebufferTexture2D(r.FRAMEBUFFER,dt,ht,wt,0);else throw new Error("Unknown depthTexture format")}function Se(D){const E=s.get(D),$=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const vt=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),vt){const bt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,vt.removeEventListener("dispose",bt)};vt.addEventListener("dispose",bt),E.__depthDisposeCallback=bt}E.__boundDepthTexture=vt}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let vt=0;vt<6;vt++)he(E.__webglFramebuffer[vt],D,vt);else{const vt=D.texture.mipmaps;vt&&vt.length>0?he(E.__webglFramebuffer[0],D,0):he(E.__webglFramebuffer,D,0)}else if($){E.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[vt]),E.__webglDepthbuffer[vt]===void 0)E.__webglDepthbuffer[vt]=r.createRenderbuffer(),We(E.__webglDepthbuffer[vt],D,!1);else{const bt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=E.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,wt),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,wt)}}else{const vt=D.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),We(E.__webglDepthbuffer,D,!1);else{const bt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,wt),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,wt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(D,E,$){const vt=s.get(D);E!==void 0&&Qt(vt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&Se(D)}function ce(D){const E=D.texture,$=s.get(D),vt=s.get(E);D.addEventListener("dispose",b);const bt=D.textures,wt=D.isWebGLCubeRenderTarget===!0,Nt=bt.length>1;if(Nt||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=E.version,h.memory.textures++),wt){$.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[ht]=[];for(let dt=0;dt<E.mipmaps.length;dt++)$.__webglFramebuffer[ht][dt]=r.createFramebuffer()}else $.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)$.__webglFramebuffer[ht]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let ht=0,dt=bt.length;ht<dt;ht++){const Ot=s.get(bt[ht]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=r.createTexture(),h.memory.textures++)}if(D.samples>0&&de(D)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ht=0;ht<bt.length;ht++){const dt=bt[ht];$.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[ht]);const Ot=c.convert(dt.format,dt.colorSpace),Pt=c.convert(dt.type),Ut=P(dt.internalFormat,Ot,Pt,dt.normalized,dt.colorSpace,D.isXRRenderTarget===!0),Dt=en(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,Ut,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,$.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),We($.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(wt){i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),At(r.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)Qt($.__webglFramebuffer[ht][dt],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else Qt($.__webglFramebuffer[ht],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);S(E)&&w(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let ht=0,dt=bt.length;ht<dt;ht++){const Ot=bt[ht],Pt=s.get(Ot);let Ut=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ut=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Pt.__webglTexture),At(Ut,Ot),Qt($.__webglFramebuffer,D,Ot,r.COLOR_ATTACHMENT0+ht,Ut,0),S(Ot)&&w(Ut)}i.unbindTexture()}else{let ht=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ht=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ht,vt.__webglTexture),At(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)Qt($.__webglFramebuffer[dt],D,E,r.COLOR_ATTACHMENT0,ht,dt);else Qt($.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,ht,0);S(E)&&w(ht),i.unbindTexture()}D.depthBuffer&&Se(D)}function ln(D){const E=D.textures;for(let $=0,vt=E.length;$<vt;$++){const bt=E[$];if(S(bt)){const wt=O(D),Nt=s.get(bt).__webglTexture;i.bindTexture(wt,Nt),w(wt),i.unbindTexture()}}}const Ye=[],An=[];function j(D){if(D.samples>0){if(de(D)===!1){const E=D.textures,$=D.width,vt=D.height;let bt=r.COLOR_BUFFER_BIT;const wt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=s.get(D),ht=E.length>1;if(ht)for(let Ot=0;Ot<E.length;Ot++)i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const dt=D.texture.mipmaps;dt&&dt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ot=0;Ot<E.length;Ot++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(bt|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(bt|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const Pt=s.get(E[Ot]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pt,0)}r.blitFramebuffer(0,0,$,vt,0,0,$,vt,bt,r.NEAREST),m===!0&&(Ye.length=0,An.length=0,Ye.push(r.COLOR_ATTACHMENT0+Ot),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ye.push(wt),An.push(wt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,An)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ye))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let Ot=0;Ot<E.length;Ot++){i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ot]);const Pt=s.get(E[Ot]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.TEXTURE_2D,Pt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function en(D){return Math.min(l.maxSamples,D.samples)}function de(D){const E=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function He(D){const E=h.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function Ct(D,E){const $=D.colorSpace,vt=D.format,bt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==iu&&$!==cs&&(Te.getTransfer($)===ze?(vt!==Pi||bt!==hi)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",$)),E}function Qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=L,this.resetTextureUnits=ut,this.getTextureUnits=ft,this.setTextureUnits=X,this.setTexture2D=et,this.setTexture2DArray=gt,this.setTexture3D=yt,this.setTextureCube=F,this.rebindTextures=Ne,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function iR(r,t){function i(s,l=cs){let c;const h=Te.getTransfer(l);if(s===hi)return r.UNSIGNED_BYTE;if(s===lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Hv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Gv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Bv)return r.BYTE;if(s===zv)return r.SHORT;if(s===al)return r.UNSIGNED_SHORT;if(s===op)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===Xi)return r.FLOAT;if(s===Ta)return r.HALF_FLOAT;if(s===Vv)return r.ALPHA;if(s===kv)return r.RGB;if(s===Pi)return r.RGBA;if(s===Aa)return r.DEPTH_COMPONENT;if(s===Vs)return r.DEPTH_STENCIL;if(s===Xv)return r.RED;if(s===up)return r.RED_INTEGER;if(s===Xs)return r.RG;if(s===fp)return r.RG_INTEGER;if(s===hp)return r.RGBA_INTEGER;if(s===Zc||s===Kc||s===Qc||s===Jc)if(h===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yd||s===Md||s===Ed||s===bd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===yd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===eu||s===Dd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Td||s===Ad)return h===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Rd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Cd)return c.COMPRESSED_R11_EAC;if(s===wd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===eu)return c.COMPRESSED_RG11_EAC;if(s===Dd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===Id||s===Fd||s===Bd||s===zd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ud)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ld)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Nd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Od)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Id)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Hd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wd||s===jd||s===qd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Wd)return h===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===jd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yd||s===Zd||s===nu||s===Kd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Yd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const aR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sR=`
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

}`;class rR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ex(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ki({vertexShader:aR,fragmentShader:sR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mi(new Kr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oR extends ms{constructor(t,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,_=null,v=null,g=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",y=new rR,S={},w=i.getContextAttributes();let O=null,P=null;const B=[],U=[],N=new le;let b=null;const I=new fi;I.viewport=new rn;const W=new fi;W.viewport=new rn;const z=[I,W],Y=new mE;let ut=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let Mt=B[lt];return Mt===void 0&&(Mt=new Ph,B[lt]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(lt){let Mt=B[lt];return Mt===void 0&&(Mt=new Ph,B[lt]=Mt),Mt.getGripSpace()},this.getHand=function(lt){let Mt=B[lt];return Mt===void 0&&(Mt=new Ph,B[lt]=Mt),Mt.getHandSpace()};function X(lt){const Mt=U.indexOf(lt.inputSource);if(Mt===-1)return;const Tt=B[Mt];Tt!==void 0&&(Tt.update(lt.inputSource,lt.frame,d||h),Tt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function L(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",H);for(let lt=0;lt<B.length;lt++){const Mt=U[lt];Mt!==null&&(U[lt]=null,B[lt].disconnect(Mt))}ut=null,ft=null,y.reset();for(const lt in S)delete S[lt];t.setRenderTarget(O),M=null,g=null,v=null,l=null,P=null,At.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){c=lt,s.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){p=lt,s.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(lt){d=lt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(lt){if(l=lt,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",L),l.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(N),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ht=null,te=null;w.depth&&(te=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=w.stencil?Vs:Aa,Ht=w.stencil?sl:Zi);const Qt={colorFormat:i.RGBA8,depthFormat:te,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Qt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),P=new qi(g.textureWidth,g.textureHeight,{format:Pi,type:hi,depthTexture:new qr(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new qi(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),At.setContext(l),At.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(lt){for(let Mt=0;Mt<lt.removed.length;Mt++){const Tt=lt.removed[Mt],Ht=U.indexOf(Tt);Ht>=0&&(U[Ht]=null,B[Ht].disconnect(Tt))}for(let Mt=0;Mt<lt.added.length;Mt++){const Tt=lt.added[Mt];let Ht=U.indexOf(Tt);if(Ht===-1){for(let Qt=0;Qt<B.length;Qt++)if(Qt>=U.length){U.push(Tt),Ht=Qt;break}else if(U[Qt]===null){U[Qt]=Tt,Ht=Qt;break}if(Ht===-1)break}const te=B[Ht];te&&te.connect(Tt)}}const et=new Q,gt=new Q;function yt(lt,Mt,Tt){et.setFromMatrixPosition(Mt.matrixWorld),gt.setFromMatrixPosition(Tt.matrixWorld);const Ht=et.distanceTo(gt),te=Mt.projectionMatrix.elements,Qt=Tt.projectionMatrix.elements,We=te[14]/(te[10]-1),he=te[14]/(te[10]+1),Se=(te[9]+1)/te[5],Ne=(te[9]-1)/te[5],ce=(te[8]-1)/te[0],ln=(Qt[8]+1)/Qt[0],Ye=We*ce,An=We*ln,j=Ht/(-ce+ln),en=j*-ce;if(Mt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(en),lt.translateZ(j),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),te[10]===-1)lt.projectionMatrix.copy(Mt.projectionMatrix),lt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const de=We+j,He=he+j,Ct=Ye-en,Qe=An+(Ht-en),D=Se*he/He*de,E=Ne*he/He*de;lt.projectionMatrix.makePerspective(Ct,Qe,D,E,de,He),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function F(lt,Mt){Mt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(Mt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(l===null)return;let Mt=lt.near,Tt=lt.far;y.texture!==null&&(y.depthNear>0&&(Mt=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),Y.near=W.near=I.near=Mt,Y.far=W.far=I.far=Tt,(ut!==Y.near||ft!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ut=Y.near,ft=Y.far),Y.layers.mask=lt.layers.mask|6,I.layers.mask=Y.layers.mask&-5,W.layers.mask=Y.layers.mask&-3;const Ht=lt.parent,te=Y.cameras;F(Y,Ht);for(let Qt=0;Qt<te.length;Qt++)F(te[Qt],Ht);te.length===2?yt(Y,I,W):Y.projectionMatrix.copy(I.projectionMatrix),J(lt,Y,Ht)};function J(lt,Mt,Tt){Tt===null?lt.matrix.copy(Mt.matrixWorld):(lt.matrix.copy(Tt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(Mt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(Mt.projectionMatrix),lt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=$d*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(lt){m=lt,g!==null&&(g.fixedFoveation=lt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=lt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(lt){return S[lt]};let St=null;function tt(lt,Mt){if(_=Mt.getViewerPose(d||h),T=Mt,_!==null){const Tt=_.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let Ht=!1;Tt.length!==Y.cameras.length&&(Y.cameras.length=0,Ht=!0);for(let he=0;he<Tt.length;he++){const Se=Tt[he];let Ne=null;if(M!==null)Ne=M.getViewport(Se);else{const ln=v.getViewSubImage(g,Se);Ne=ln.viewport,he===0&&(t.setRenderTargetTextures(P,ln.colorTexture,ln.depthStencilTexture),t.setRenderTarget(P))}let ce=z[he];ce===void 0&&(ce=new fi,ce.layers.enable(he),ce.viewport=new rn,z[he]=ce),ce.matrix.fromArray(Se.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Se.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),he===0&&(Y.matrix.copy(ce.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ht===!0&&Y.cameras.push(ce)}const te=l.enabledFeatures;if(te&&te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const he=v.getDepthInformation(Tt[0]);he&&he.isValid&&he.texture&&y.init(he,l.renderState)}if(te&&te.includes("camera-access")&&C){t.state.unbindTexture(),v=s.getBinding();for(let he=0;he<Tt.length;he++){const Se=Tt[he].camera;if(Se){let Ne=S[Se];Ne||(Ne=new ex,S[Se]=Ne);const ce=v.getCameraImage(Se);Ne.sourceTexture=ce}}}}for(let Tt=0;Tt<B.length;Tt++){const Ht=U[Tt],te=B[Tt];Ht!==null&&te!==void 0&&te.update(Ht,Mt,d||h)}St&&St(lt,Mt),Mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Mt}),T=null}const At=new cx;At.setAnimationLoop(tt),this.setAnimationLoop=function(lt){St=lt},this.dispose=function(){}}}const lR=new on,gx=new se;gx.set(-1,0,0,0,1,0,0,0,1);function cR(r,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,ax(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,w,O,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),v(y,S)):S.isMeshPhongMaterial?(c(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,P)):S.isMeshMatcapMaterial?(c(y,S),T(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),C(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?m(y,S,w,O):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Qn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Qn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=t.get(S),O=w.envMap,P=w.envMapRotation;O&&(y.envMap.value=O,y.envMapRotation.value.setFromMatrix4(lR.makeRotationFromEuler(P)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(gx),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,w,O){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=O*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,w){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const w=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function uR(r,t,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,O){const P=O.program;s.uniformBlockBinding(w,P)}function d(w,O){let P=l[w.id];P===void 0&&(T(w),P=_(w),l[w.id]=P,w.addEventListener("dispose",y));const B=O.program;s.updateUBOMapping(w,B);const U=t.render.frame;c[w.id]!==U&&(g(w),c[w.id]=U)}function _(w){const O=v();w.__bindingPointIndex=O;const P=r.createBuffer(),B=w.__size,U=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,B,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,P),P}function v(){for(let w=0;w<p;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const O=l[w.id],P=w.uniforms,B=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let U=0,N=P.length;U<N;U++){const b=Array.isArray(P[U])?P[U]:[P[U]];for(let I=0,W=b.length;I<W;I++){const z=b[I];if(M(z,U,I,B)===!0){const Y=z.__offset,ut=Array.isArray(z.value)?z.value:[z.value];let ft=0;for(let X=0;X<ut.length;X++){const L=ut[X],H=C(L);typeof L=="number"||typeof L=="boolean"?(z.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,Y+ft,z.__data)):L.isMatrix3?(z.__data[0]=L.elements[0],z.__data[1]=L.elements[1],z.__data[2]=L.elements[2],z.__data[3]=0,z.__data[4]=L.elements[3],z.__data[5]=L.elements[4],z.__data[6]=L.elements[5],z.__data[7]=0,z.__data[8]=L.elements[6],z.__data[9]=L.elements[7],z.__data[10]=L.elements[8],z.__data[11]=0):ArrayBuffer.isView(L)?z.__data.set(new L.constructor(L.buffer,L.byteOffset,z.__data.length)):(L.toArray(z.__data,ft),ft+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(w,O,P,B){const U=w.value,N=O+"_"+P;if(B[N]===void 0)return typeof U=="number"||typeof U=="boolean"?B[N]=U:ArrayBuffer.isView(U)?B[N]=U.slice():B[N]=U.clone(),!0;{const b=B[N];if(typeof U=="number"||typeof U=="boolean"){if(b!==U)return B[N]=U,!0}else{if(ArrayBuffer.isView(U))return!0;if(b.equals(U)===!1)return b.copy(U),!0}}return!1}function T(w){const O=w.uniforms;let P=0;const B=16;for(let N=0,b=O.length;N<b;N++){const I=Array.isArray(O[N])?O[N]:[O[N]];for(let W=0,z=I.length;W<z;W++){const Y=I[W],ut=Array.isArray(Y.value)?Y.value:[Y.value];for(let ft=0,X=ut.length;ft<X;ft++){const L=ut[ft],H=C(L),et=P%B,gt=et%H.boundary,yt=et+gt;P+=gt,yt!==0&&B-yt<H.storage&&(P+=B-yt),Y.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=H.storage}}}const U=P%B;return U>0&&(P+=B-U),w.__size=P,w.__cache={},this}function C(w){const O={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(O.boundary=4,O.storage=4):w.isVector2?(O.boundary=8,O.storage=8):w.isVector3||w.isColor?(O.boundary=16,O.storage=12):w.isVector4?(O.boundary=16,O.storage=16):w.isMatrix3?(O.boundary=48,O.storage=48):w.isMatrix4?(O.boundary=64,O.storage=64):w.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(O.boundary=16,O.storage=w.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",w),O}function y(w){const O=w.target;O.removeEventListener("dispose",y);const P=h.indexOf(O.__bindingPointIndex);h.splice(P,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function S(){for(const w in l)r.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:m,update:d,dispose:S}}const fR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function hR(){return Vi===null&&(Vi=new ZM(fR,16,16,Xs,Ta),Vi.name="DFG_LUT",Vi.minFilter=Bn,Vi.magFilter=Bn,Vi.wrapS=Ma,Vi.wrapT=Ma,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class _x{constructor(t={}){const{canvas:i=AM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:M=hi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const C=M,y=new Set([hp,fp,up]),S=new Set([hi,Zi,al,sl,lp,cp]),w=new Uint32Array(4),O=new Int32Array(4),P=new Q;let B=null,U=null;const N=[],b=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let z=!1,Y=null;this._outputColorSpace=Gn;let ut=0,ft=0,X=null,L=-1,H=null;const et=new rn,gt=new rn;let yt=null;const F=new pe(0);let J=0,St=i.width,tt=i.height,At=1,lt=null,Mt=null;const Tt=new rn(0,0,St,tt),Ht=new rn(0,0,St,tt);let te=!1;const Qt=new _p;let We=!1,he=!1;const Se=new on,Ne=new Q,ce=new rn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function An(){return X===null?At:1}let j=s;function en(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sp}`),i.addEventListener("webglcontextlost",Et,!1),i.addEventListener("webglcontextrestored",jt,!1),i.addEventListener("webglcontextcreationerror",ee,!1),j===null){const Z="webgl2";if(j=en(Z,A),j===null)throw en(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ae("WebGLRenderer: "+A.message),A}let de,He,Ct,Qe,D,E,$,vt,bt,wt,Nt,ht,dt,Ot,Pt,Ut,Dt,ne,ie,me,V,Rt,mt;function Bt(){de=new h1(j),de.init(),V=new iR(j,de),He=new a1(j,de,t,V),Ct=new eR(j,de),He.reversedDepthBuffer&&g&&Ct.buffers.depth.setReversed(!0),Qe=new m1(j),D=new GA,E=new nR(j,de,Ct,D,He,V,Qe),$=new f1(W),vt=new xE(j),Rt=new n1(j,vt),bt=new d1(j,vt,Qe,Rt),wt=new _1(j,bt,vt,Rt,Qe),ne=new g1(j,He,E),Pt=new s1(D),Nt=new HA(W,$,de,He,Rt,Pt),ht=new cR(W,D),dt=new kA,Ot=new ZA(de),Dt=new e1(W,$,Ct,wt,T,m),Ut=new tR(W,wt,He),mt=new uR(j,Qe,He,Ct),ie=new i1(j,de,Qe),me=new p1(j,de,Qe),Qe.programs=Nt.programs,W.capabilities=He,W.extensions=de,W.properties=D,W.renderLists=dt,W.shadowMap=Ut,W.state=Ct,W.info=Qe}Bt(),C!==hi&&(I=new x1(C,i.width,i.height,l,c));const Lt=new oR(W,j);this.xr=Lt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return At},this.setPixelRatio=function(A){A!==void 0&&(At=A,this.setSize(St,tt,!1))},this.getSize=function(A){return A.set(St,tt)},this.setSize=function(A,Z,rt=!0){if(Lt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=A,tt=Z,i.width=Math.floor(A*At),i.height=Math.floor(Z*At),rt===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(St*At,tt*At).floor()},this.setDrawingBufferSize=function(A,Z,rt){St=A,tt=Z,At=rt,i.width=Math.floor(A*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(C===hi){Ae("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){Jt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(et)},this.getViewport=function(A){return A.copy(Tt)},this.setViewport=function(A,Z,rt,at){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,Z,rt,at),Ct.viewport(et.copy(Tt).multiplyScalar(At).round())},this.getScissor=function(A){return A.copy(Ht)},this.setScissor=function(A,Z,rt,at){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,Z,rt,at),Ct.scissor(gt.copy(Ht).multiplyScalar(At).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){Ct.setScissorTest(te=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){Mt=A},this.getClearColor=function(A){return A.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,rt=!0){let at=0;if(A){let st=!1;if(X!==null){const Ft=X.texture.format;st=y.has(Ft)}if(st){const Ft=X.texture.type,Vt=S.has(Ft),It=Dt.getClearColor(),Xt=Dt.getClearAlpha(),kt=It.r,Zt=It.g,re=It.b;Vt?(w[0]=kt,w[1]=Zt,w[2]=re,w[3]=Xt,j.clearBufferuiv(j.COLOR,0,w)):(O[0]=kt,O[1]=Zt,O[2]=re,O[3]=Xt,j.clearBufferiv(j.COLOR,0,O))}else at|=j.COLOR_BUFFER_BIT}Z&&(at|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(at|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&j.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Y=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Et,!1),i.removeEventListener("webglcontextrestored",jt,!1),i.removeEventListener("webglcontextcreationerror",ee,!1),Dt.dispose(),dt.dispose(),Ot.dispose(),D.dispose(),$.dispose(),wt.dispose(),Rt.dispose(),mt.dispose(),Nt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",$r),Lt.removeEventListener("sessionend",to),Nn.stop()};function Et(A){A.preventDefault(),b0("WebGLRenderer: Context Lost."),z=!0}function jt(){b0("WebGLRenderer: Context Restored."),z=!1;const A=Qe.autoReset,Z=Ut.enabled,rt=Ut.autoUpdate,at=Ut.needsUpdate,st=Ut.type;Bt(),Qe.autoReset=A,Ut.enabled=Z,Ut.autoUpdate=rt,Ut.needsUpdate=at,Ut.type=st}function ee(A){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nn(A){const Z=A.target;Z.removeEventListener("dispose",nn),De(Z)}function De(A){gi(A),D.remove(A)}function gi(A){const Z=D.get(A).programs;Z!==void 0&&(Z.forEach(function(rt){Nt.releaseProgram(rt)}),A.isShaderMaterial&&Nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,rt,at,st,Ft){Z===null&&(Z=ln);const Vt=st.isMesh&&st.matrixWorld.determinant()<0,It=wa(A,Z,rt,at,st);Ct.setMaterial(at,Vt);let Xt=rt.index,kt=1;if(at.wireframe===!0){if(Xt=bt.getWireframeAttribute(rt),Xt===void 0)return;kt=2}const Zt=rt.drawRange,re=rt.attributes.position;let Yt=Zt.start*kt,Re=(Zt.start+Zt.count)*kt;Ft!==null&&(Yt=Math.max(Yt,Ft.start*kt),Re=Math.min(Re,(Ft.start+Ft.count)*kt)),Xt!==null?(Yt=Math.max(Yt,0),Re=Math.min(Re,Xt.count)):re!=null&&(Yt=Math.max(Yt,0),Re=Math.min(Re,re.count));const Je=Re-Yt;if(Je<0||Je===1/0)return;Rt.setup(st,at,It,rt,Xt);let je,Oe=ie;if(Xt!==null&&(je=vt.get(Xt),Oe=me,Oe.setIndex(je)),st.isMesh)at.wireframe===!0?(Ct.setLineWidth(at.wireframeLinewidth*An()),Oe.setMode(j.LINES)):Oe.setMode(j.TRIANGLES);else if(st.isLine){let Pe=at.linewidth;Pe===void 0&&(Pe=1),Ct.setLineWidth(Pe*An()),st.isLineSegments?Oe.setMode(j.LINES):st.isLineLoop?Oe.setMode(j.LINE_LOOP):Oe.setMode(j.LINE_STRIP)}else st.isPoints?Oe.setMode(j.POINTS):st.isSprite&&Oe.setMode(j.TRIANGLES);if(st.isBatchedMesh)if(de.get("WEBGL_multi_draw"))Oe.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const Pe=st._multiDrawStarts,Gt=st._multiDrawCounts,On=st._multiDrawCount,ge=Xt?vt.get(Xt).bytesPerElement:1,vn=D.get(at).currentProgram.getUniforms();for(let ti=0;ti<On;ti++)vn.setValue(j,"_gl_DrawID",ti),Oe.render(Pe[ti]/ge,Gt[ti])}else if(st.isInstancedMesh)Oe.renderInstances(Yt,Je,st.count);else if(rt.isInstancedBufferGeometry){const Pe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Gt=Math.min(rt.instanceCount,Pe);Oe.renderInstances(Yt,Je,Gt)}else Oe.render(Yt,Je)};function $n(A,Z,rt){A.transparent===!0&&A.side===ya&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,qs(A,Z,rt),A.side=hs,A.needsUpdate=!0,qs(A,Z,rt),A.side=ya):qs(A,Z,rt)}this.compile=function(A,Z,rt=null){rt===null&&(rt=A),U=Ot.get(rt),U.init(Z),b.push(U),rt.traverseVisible(function(st){st.isLight&&st.layers.test(Z.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),A!==rt&&A.traverseVisible(function(st){st.isLight&&st.layers.test(Z.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),U.setupLights();const at=new Set;return A.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Ft=st.material;if(Ft)if(Array.isArray(Ft))for(let Vt=0;Vt<Ft.length;Vt++){const It=Ft[Vt];$n(It,rt,st),at.add(It)}else $n(Ft,rt,st),at.add(Ft)}),U=b.pop(),at},this.compileAsync=function(A,Z,rt=null){const at=this.compile(A,Z,rt);return new Promise(st=>{function Ft(){if(at.forEach(function(Vt){D.get(Vt).currentProgram.isReady()&&at.delete(Vt)}),at.size===0){st(A);return}setTimeout(Ft,10)}de.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let gs=null;function Jr(A){gs&&gs(A)}function $r(){Nn.stop()}function to(){Nn.start()}const Nn=new cx;Nn.setAnimationLoop(Jr),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){gs=A,Lt.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Lt.addEventListener("sessionstart",$r),Lt.addEventListener("sessionend",to),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Y!==null&&Y.renderStart(A,Z);const rt=Lt.enabled===!0&&Lt.isPresenting===!0,at=I!==null&&(X===null||rt)&&I.begin(W,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(Z),Z=Lt.getCamera()),A.isScene===!0&&A.onBeforeRender(W,A,Z,X),U=Ot.get(A,b.length),U.init(Z),U.state.textureUnits=E.getTextureUnits(),b.push(U),Se.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Qt.setFromProjectionMatrix(Se,Wi,Z.reversedDepth),he=this.localClippingEnabled,We=Pt.init(this.clippingPlanes,he),B=dt.get(A,N.length),B.init(),N.push(B),Lt.enabled===!0&&Lt.isPresenting===!0){const Vt=W.xr.getDepthSensingMesh();Vt!==null&&cn(Vt,Z,-1/0,W.sortObjects)}cn(A,Z,0,W.sortObjects),B.finish(),W.sortObjects===!0&&B.sort(lt,Mt),Ye=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Ye&&Dt.addToRenderList(B,A),this.info.render.frame++,We===!0&&Pt.beginShadows();const st=U.state.shadowsArray;if(Ut.render(st,A,Z),We===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&I.hasRenderPass())===!1){const Vt=B.opaque,It=B.transmissive;if(U.setupLights(),Z.isArrayCamera){const Xt=Z.cameras;if(It.length>0)for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt];Qi(Vt,It,A,re)}Ye&&Dt.render(A);for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt];Rn(B,A,re,re.viewport)}}else It.length>0&&Qi(Vt,It,A,Z),Ye&&Dt.render(A),Rn(B,A,Z)}X!==null&&ft===0&&(E.updateMultisampleRenderTarget(X),E.updateRenderTargetMipmap(X)),at&&I.end(W),A.isScene===!0&&A.onAfterRender(W,A,Z),Rt.resetDefaultState(),L=-1,H=null,b.pop(),b.length>0?(U=b[b.length-1],E.setTextureUnits(U.state.textureUnits),We===!0&&Pt.setGlobalState(W.clippingPlanes,U.state.camera)):U=null,N.pop(),N.length>0?B=N[N.length-1]:B=null,Y!==null&&Y.renderEnd()};function cn(A,Z,rt,at){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qt.intersectsSprite(A)){at&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);const Vt=wt.update(A),It=A.material;It.visible&&B.push(A,Vt,It,rt,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qt.intersectsObject(A))){const Vt=wt.update(A),It=A.material;if(at&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ce.copy(Vt.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(It)){const Xt=Vt.groups;for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const re=Xt[kt],Yt=It[re.materialIndex];Yt&&Yt.visible&&B.push(A,Vt,Yt,rt,ce.z,re)}}else It.visible&&B.push(A,Vt,It,rt,ce.z,null)}}const Ft=A.children;for(let Vt=0,It=Ft.length;Vt<It;Vt++)cn(Ft[Vt],Z,rt,at)}function Rn(A,Z,rt,at){const{opaque:st,transmissive:Ft,transparent:Vt}=A;U.setupLightsView(rt),We===!0&&Pt.setGlobalState(W.clippingPlanes,rt),at&&Ct.viewport(et.copy(at)),st.length>0&&Ra(st,Z,rt),Ft.length>0&&Ra(Ft,Z,rt),Vt.length>0&&Ra(Vt,Z,rt),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Qi(A,Z,rt,at){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[at.id]===void 0){const Yt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[at.id]=new qi(1,1,{generateMipmaps:!0,type:Yt?Ta:hi,minFilter:Gs,samples:Math.max(4,He.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Ft=U.state.transmissionRenderTarget[at.id],Vt=at.viewport||et;Ft.setSize(Vt.z*W.transmissionResolutionScale,Vt.w*W.transmissionResolutionScale);const It=W.getRenderTarget(),Xt=W.getActiveCubeFace(),kt=W.getActiveMipmapLevel();W.setRenderTarget(Ft),W.getClearColor(F),J=W.getClearAlpha(),J<1&&W.setClearColor(16777215,.5),W.clear(),Ye&&Dt.render(rt);const Zt=W.toneMapping;W.toneMapping=ji;const re=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),U.setupLightsView(at),We===!0&&Pt.setGlobalState(W.clippingPlanes,at),Ra(A,rt,at),E.updateMultisampleRenderTarget(Ft),E.updateRenderTargetMipmap(Ft),de.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Re=0,Je=Z.length;Re<Je;Re++){const je=Z[Re],{object:Oe,geometry:Pe,material:Gt,group:On}=je;if(Gt.side===ya&&Oe.layers.test(at.layers)){const ge=Gt.side;Gt.side=Qn,Gt.needsUpdate=!0,ul(Oe,rt,at,Pe,Gt,On),Gt.side=ge,Gt.needsUpdate=!0,Yt=!0}}Yt===!0&&(E.updateMultisampleRenderTarget(Ft),E.updateRenderTargetMipmap(Ft))}W.setRenderTarget(It,Xt,kt),W.setClearColor(F,J),re!==void 0&&(at.viewport=re),W.toneMapping=Zt}function Ra(A,Z,rt){const at=Z.isScene===!0?Z.overrideMaterial:null;for(let st=0,Ft=A.length;st<Ft;st++){const Vt=A[st],{object:It,geometry:Xt,group:kt}=Vt;let Zt=Vt.material;Zt.allowOverride===!0&&at!==null&&(Zt=at),It.layers.test(rt.layers)&&ul(It,Z,rt,Xt,Zt,kt)}}function ul(A,Z,rt,at,st,Ft){A.onBeforeRender(W,Z,rt,at,st,Ft),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),st.onBeforeRender(W,Z,rt,at,A,Ft),st.transparent===!0&&st.side===ya&&st.forceSinglePass===!1?(st.side=Qn,st.needsUpdate=!0,W.renderBufferDirect(rt,Z,at,st,A,Ft),st.side=hs,st.needsUpdate=!0,W.renderBufferDirect(rt,Z,at,st,A,Ft),st.side=ya):W.renderBufferDirect(rt,Z,at,st,A,Ft),A.onAfterRender(W,Z,rt,at,st,Ft)}function qs(A,Z,rt){Z.isScene!==!0&&(Z=ln);const at=D.get(A),st=U.state.lights,Ft=U.state.shadowsArray,Vt=st.state.version,It=Nt.getParameters(A,st.state,Ft,Z,rt,U.state.lightProbeGridArray),Xt=Nt.getProgramCacheKey(It);let kt=at.programs;at.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,at.fog=Z.fog;const Zt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;at.envMap=$.get(A.envMap||at.environment,Zt),at.envMapRotation=at.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",nn),kt=new Map,at.programs=kt);let re=kt.get(Xt);if(re!==void 0){if(at.currentProgram===re&&at.lightsStateVersion===Vt)return Ca(A,It),re}else It.uniforms=Nt.getUniforms(A),Y!==null&&A.isNodeMaterial&&Y.build(A,rt,It),A.onBeforeCompile(It,W),re=Nt.acquireProgram(It,Xt),kt.set(Xt,re),at.uniforms=It.uniforms;const Yt=at.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=Pt.uniform),Ca(A,It),at.needsLights=_s(A),at.lightsStateVersion=Vt,at.needsLights&&(Yt.ambientLightColor.value=st.state.ambient,Yt.lightProbe.value=st.state.probe,Yt.directionalLights.value=st.state.directional,Yt.directionalLightShadows.value=st.state.directionalShadow,Yt.spotLights.value=st.state.spot,Yt.spotLightShadows.value=st.state.spotShadow,Yt.rectAreaLights.value=st.state.rectArea,Yt.ltc_1.value=st.state.rectAreaLTC1,Yt.ltc_2.value=st.state.rectAreaLTC2,Yt.pointLights.value=st.state.point,Yt.pointLightShadows.value=st.state.pointShadow,Yt.hemisphereLights.value=st.state.hemi,Yt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Yt.spotLightMatrix.value=st.state.spotLightMatrix,Yt.spotLightMap.value=st.state.spotLightMap,Yt.pointShadowMatrix.value=st.state.pointShadowMatrix),at.lightProbeGrid=U.state.lightProbeGridArray.length>0,at.currentProgram=re,at.uniformsList=null,re}function eo(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=$c.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Ca(A,Z){const rt=D.get(A);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function no(A,Z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(Z.matrixWorld);for(let rt=0,at=A.length;rt<at;rt++){const st=A[rt];if(st.texture!==null&&st.boundingBox.containsPoint(P))return st}return null}function wa(A,Z,rt,at,st){Z.isScene!==!0&&(Z=ln),E.resetTextureUnits();const Ft=Z.fog,Vt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?Z.environment:null,It=X===null?W.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Te.workingColorSpace,Xt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,kt=$.get(at.envMap||Vt,Xt),Zt=at.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,re=!!rt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Yt=!!rt.morphAttributes.position,Re=!!rt.morphAttributes.normal,Je=!!rt.morphAttributes.color;let je=ji;at.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(je=W.toneMapping);const Oe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=Oe!==void 0?Oe.length:0,Gt=D.get(at),On=U.state.lights;if(We===!0&&(he===!0||A!==H)){const Le=A===H&&at.id===L;Pt.setState(at,A,Le)}let ge=!1;at.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==On.state.version||Gt.outputColorSpace!==It||st.isBatchedMesh&&Gt.batching===!1||!st.isBatchedMesh&&Gt.batching===!0||st.isBatchedMesh&&Gt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&Gt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&Gt.instancing===!1||!st.isInstancedMesh&&Gt.instancing===!0||st.isSkinnedMesh&&Gt.skinning===!1||!st.isSkinnedMesh&&Gt.skinning===!0||st.isInstancedMesh&&Gt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Gt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Gt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Gt.instancingMorph===!1&&st.morphTexture!==null||Gt.envMap!==kt||at.fog===!0&&Gt.fog!==Ft||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Pt.numPlanes||Gt.numIntersection!==Pt.numIntersection)||Gt.vertexAlphas!==Zt||Gt.vertexTangents!==re||Gt.morphTargets!==Yt||Gt.morphNormals!==Re||Gt.morphColors!==Je||Gt.toneMapping!==je||Gt.morphTargetsCount!==Pe||!!Gt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Gt.__version=at.version);let vn=Gt.currentProgram;ge===!0&&(vn=qs(at,Z,st),Y&&at.isNodeMaterial&&Y.onUpdateProgram(at,vn,Gt));let ti=!1,Ri=!1,ei=!1;const Ie=vn.getUniforms(),$e=Gt.uniforms;if(Ct.useProgram(vn.program)&&(ti=!0,Ri=!0,ei=!0),at.id!==L&&(L=at.id,Ri=!0),Gt.needsLights){const Le=no(U.state.lightProbeGridArray,st);Gt.lightProbeGrid!==Le&&(Gt.lightProbeGrid=Le,Ri=!0)}if(ti||H!==A){Ct.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ie.setValue(j,"projectionMatrix",A.projectionMatrix),Ie.setValue(j,"viewMatrix",A.matrixWorldInverse);const Ii=Ie.map.cameraPosition;Ii!==void 0&&Ii.setValue(j,Ne.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&Ie.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ie.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,Ri=!0,ei=!0)}if(Gt.needsLights&&(On.state.directionalShadowMap.length>0&&Ie.setValue(j,"directionalShadowMap",On.state.directionalShadowMap,E),On.state.spotShadowMap.length>0&&Ie.setValue(j,"spotShadowMap",On.state.spotShadowMap,E),On.state.pointShadowMap.length>0&&Ie.setValue(j,"pointShadowMap",On.state.pointShadowMap,E)),st.isSkinnedMesh){Ie.setOptional(j,st,"bindMatrix"),Ie.setOptional(j,st,"bindMatrixInverse");const Le=st.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Ie.setValue(j,"boneTexture",Le.boneTexture,E))}st.isBatchedMesh&&(Ie.setOptional(j,st,"batchingTexture"),Ie.setValue(j,"batchingTexture",st._matricesTexture,E),Ie.setOptional(j,st,"batchingIdTexture"),Ie.setValue(j,"batchingIdTexture",st._indirectTexture,E),Ie.setOptional(j,st,"batchingColorTexture"),st._colorsTexture!==null&&Ie.setValue(j,"batchingColorTexture",st._colorsTexture,E));const Ci=rt.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&ne.update(st,rt,vn),(Ri||Gt.receiveShadow!==st.receiveShadow)&&(Gt.receiveShadow=st.receiveShadow,Ie.setValue(j,"receiveShadow",st.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&Z.environment!==null&&($e.envMapIntensity.value=Z.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=hR()),Ri){if(Ie.setValue(j,"toneMappingExposure",W.toneMappingExposure),Gt.needsLights&&Da($e,ei),Ft&&at.fog===!0&&ht.refreshFogUniforms($e,Ft),ht.refreshMaterialUniforms($e,at,At,tt,U.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const Le=Gt.lightProbeGrid;$e.probesSH.value=Le.texture,$e.probesMin.value.copy(Le.boundingBox.min),$e.probesMax.value.copy(Le.boundingBox.max),$e.probesResolution.value.copy(Le.resolution)}$c.upload(j,eo(Gt),$e,E)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&($c.upload(j,eo(Gt),$e,E),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ie.setValue(j,"center",st.center),Ie.setValue(j,"modelViewMatrix",st.modelViewMatrix),Ie.setValue(j,"normalMatrix",st.normalMatrix),Ie.setValue(j,"modelMatrix",st.matrixWorld),at.uniformsGroups!==void 0){const Le=at.uniformsGroups;for(let Ii=0,La=Le.length;Ii<La;Ii++){const vs=Le[Ii];mt.update(vs,vn),mt.bind(vs,vn)}}return vn}function Da(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function _s(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ut},this.getActiveMipmapLevel=function(){return ft},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,Z,rt){const at=D.get(A);at.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=Z,D.get(A.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:rt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const rt=D.get(A);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const Ua=j.createFramebuffer();this.setRenderTarget=function(A,Z=0,rt=0){X=A,ut=Z,ft=rt;let at=null,st=!1,Ft=!1;if(A){const It=D.get(A);if(It.__useDefaultFramebuffer!==void 0){Ct.bindFramebuffer(j.FRAMEBUFFER,It.__webglFramebuffer),et.copy(A.viewport),gt.copy(A.scissor),yt=A.scissorTest,Ct.viewport(et),Ct.scissor(gt),Ct.setScissorTest(yt),L=-1;return}else if(It.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(It.__hasExternalTextures)E.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(It.__boundDepthTexture!==Zt){if(Zt!==null&&D.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ft=!0);const kt=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[Z])?at=kt[Z][rt]:at=kt[Z],st=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?at=D.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?at=kt[rt]:at=kt,et.copy(A.viewport),gt.copy(A.scissor),yt=A.scissorTest}else et.copy(Tt).multiplyScalar(At).floor(),gt.copy(Ht).multiplyScalar(At).floor(),yt=te;if(rt!==0&&(at=Ua),Ct.bindFramebuffer(j.FRAMEBUFFER,at)&&Ct.drawBuffers(A,at),Ct.viewport(et),Ct.scissor(gt),Ct.setScissorTest(yt),st){const It=D.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Z,It.__webglTexture,rt)}else if(Ft){const It=Z;for(let Xt=0;Xt<A.textures.length;Xt++){const kt=D.get(A.textures[Xt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Xt,kt.__webglTexture,rt,It)}}else if(A!==null&&rt!==0){const It=D.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,It.__webglTexture,rt)}L=-1},this.readRenderTargetPixels=function(A,Z,rt,at,st,Ft,Vt,It=0){if(!(A&&A.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){Ct.bindFramebuffer(j.FRAMEBUFFER,Xt);try{const kt=A.textures[It],Zt=kt.format,re=kt.type;if(A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+It),!He.textureFormatReadable(Zt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(re)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-at&&rt>=0&&rt<=A.height-st&&j.readPixels(Z,rt,at,st,V.convert(Zt),V.convert(re),Ft)}finally{const kt=X!==null?D.get(X).__webglFramebuffer:null;Ct.bindFramebuffer(j.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,Z,rt,at,st,Ft,Vt,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(Z>=0&&Z<=A.width-at&&rt>=0&&rt<=A.height-st){Ct.bindFramebuffer(j.FRAMEBUFFER,Xt);const kt=A.textures[It],Zt=kt.format,re=kt.type;if(A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+It),!He.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Yt),j.bufferData(j.PIXEL_PACK_BUFFER,Ft.byteLength,j.STREAM_READ),j.readPixels(Z,rt,at,st,V.convert(Zt),V.convert(re),0);const Re=X!==null?D.get(X).__webglFramebuffer:null;Ct.bindFramebuffer(j.FRAMEBUFFER,Re);const Je=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await RM(j,Je,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Yt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ft),j.deleteBuffer(Yt),j.deleteSync(Je),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,rt=0){const at=Math.pow(2,-rt),st=Math.floor(A.image.width*at),Ft=Math.floor(A.image.height*at),Vt=Z!==null?Z.x:0,It=Z!==null?Z.y:0;E.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,rt,0,0,Vt,It,st,Ft),Ct.unbindTexture()};const hn=j.createFramebuffer(),fl=j.createFramebuffer();this.copyTextureToTexture=function(A,Z,rt=null,at=null,st=0,Ft=0){let Vt,It,Xt,kt,Zt,re,Yt,Re,Je;const je=A.isCompressedTexture?A.mipmaps[Ft]:A.image;if(rt!==null)Vt=rt.max.x-rt.min.x,It=rt.max.y-rt.min.y,Xt=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,Zt=rt.min.y,re=rt.isBox3?rt.min.z:0;else{const $e=Math.pow(2,-st);Vt=Math.floor(je.width*$e),It=Math.floor(je.height*$e),A.isDataArrayTexture?Xt=je.depth:A.isData3DTexture?Xt=Math.floor(je.depth*$e):Xt=1,kt=0,Zt=0,re=0}at!==null?(Yt=at.x,Re=at.y,Je=at.z):(Yt=0,Re=0,Je=0);const Oe=V.convert(Z.format),Pe=V.convert(Z.type);let Gt;Z.isData3DTexture?(E.setTexture3D(Z,0),Gt=j.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(E.setTexture2DArray(Z,0),Gt=j.TEXTURE_2D_ARRAY):(E.setTexture2D(Z,0),Gt=j.TEXTURE_2D),Ct.activeTexture(j.TEXTURE0),Ct.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Z.flipY),Ct.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Ct.pixelStorei(j.UNPACK_ALIGNMENT,Z.unpackAlignment);const On=Ct.getParameter(j.UNPACK_ROW_LENGTH),ge=Ct.getParameter(j.UNPACK_IMAGE_HEIGHT),vn=Ct.getParameter(j.UNPACK_SKIP_PIXELS),ti=Ct.getParameter(j.UNPACK_SKIP_ROWS),Ri=Ct.getParameter(j.UNPACK_SKIP_IMAGES);Ct.pixelStorei(j.UNPACK_ROW_LENGTH,je.width),Ct.pixelStorei(j.UNPACK_IMAGE_HEIGHT,je.height),Ct.pixelStorei(j.UNPACK_SKIP_PIXELS,kt),Ct.pixelStorei(j.UNPACK_SKIP_ROWS,Zt),Ct.pixelStorei(j.UNPACK_SKIP_IMAGES,re);const ei=A.isDataArrayTexture||A.isData3DTexture,Ie=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const $e=D.get(A),Ci=D.get(Z),Le=D.get($e.__renderTarget),Ii=D.get(Ci.__renderTarget);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,Le.__webglFramebuffer),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let La=0;La<Xt;La++)ei&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,D.get(A).__webglTexture,st,re+La),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,D.get(Z).__webglTexture,Ft,Je+La)),j.blitFramebuffer(kt,Zt,Vt,It,Yt,Re,Vt,It,j.DEPTH_BUFFER_BIT,j.NEAREST);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(st!==0||A.isRenderTargetTexture||D.has(A)){const $e=D.get(A),Ci=D.get(Z);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,hn),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,fl);for(let Le=0;Le<Xt;Le++)ei?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,$e.__webglTexture,st,re+Le):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,$e.__webglTexture,st),Ie?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ci.__webglTexture,Ft,Je+Le):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ci.__webglTexture,Ft),st!==0?j.blitFramebuffer(kt,Zt,Vt,It,Yt,Re,Vt,It,j.COLOR_BUFFER_BIT,j.NEAREST):Ie?j.copyTexSubImage3D(Gt,Ft,Yt,Re,Je+Le,kt,Zt,Vt,It):j.copyTexSubImage2D(Gt,Ft,Yt,Re,kt,Zt,Vt,It);Ct.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Ie?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(Gt,Ft,Yt,Re,Je,Vt,It,Xt,Oe,Pe,je.data):Z.isCompressedArrayTexture?j.compressedTexSubImage3D(Gt,Ft,Yt,Re,Je,Vt,It,Xt,Oe,je.data):j.texSubImage3D(Gt,Ft,Yt,Re,Je,Vt,It,Xt,Oe,Pe,je):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ft,Yt,Re,Vt,It,Oe,Pe,je.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ft,Yt,Re,je.width,je.height,Oe,je.data):j.texSubImage2D(j.TEXTURE_2D,Ft,Yt,Re,Vt,It,Oe,Pe,je);Ct.pixelStorei(j.UNPACK_ROW_LENGTH,On),Ct.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ge),Ct.pixelStorei(j.UNPACK_SKIP_PIXELS,vn),Ct.pixelStorei(j.UNPACK_SKIP_ROWS,ti),Ct.pixelStorei(j.UNPACK_SKIP_IMAGES,Ri),Ft===0&&Z.generateMipmaps&&j.generateMipmap(Gt),Ct.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Ct.unbindTexture()},this.resetState=function(){ut=0,ft=0,X=null,Ct.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const Mv={type:"change"},yp={type:"start"},vx={type:"end"},qc=new gp,Ev=new ls,dR=Math.cos(70*DM.DEG2RAD),Sn=new Q,Kn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},od=1e-6;class pR extends _E{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new ds,this._lastTargetPosition=new Q,this._quat=new ds().setFromUnitVectors(t.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new K0,this._sphericalDelta=new K0,this._scale=1,this._panOffset=new Q,this._rotateStart=new le,this._rotateEnd=new le,this._rotateDelta=new le,this._panStart=new le,this._panEnd=new le,this._panDelta=new le,this._dollyStart=new le,this._dollyEnd=new le,this._dollyDelta=new le,this._dollyDirection=new Q,this._mouse=new le,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gR.bind(this),this._onPointerDown=mR.bind(this),this._onPointerUp=_R.bind(this),this._onContextMenu=bR.bind(this),this._onMouseWheel=SR.bind(this),this._onKeyDown=yR.bind(this),this._onTouchStart=MR.bind(this),this._onTouchMove=ER.bind(this),this._onMouseDown=vR.bind(this),this._onMouseMove=xR.bind(this),this._interceptControlDown=TR.bind(this),this._interceptControlUp=AR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mv),this.update(),this.state=Xe.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Sn.copy(i).sub(this.target),Sn.applyQuaternion(this._quat),this._spherical.setFromVector3(Sn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Sn.setFromSpherical(this._spherical),Sn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=Sn.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new Q(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=Sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(qc.origin.copy(this.object.position),qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qc.direction))<dR?this.object.lookAt(this.target):(Ev.setFromNormalAndCoplanarPoint(this.object.up,this.target),qc.intersectPlane(Ev,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>od||8*(1-this._lastQuaternion.dot(this.object.quaternion))>od||this._lastTargetPosition.distanceToSquared(this.target)>od?(this.dispatchEvent(Mv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Sn.setFromMatrixColumn(i,0),Sn.multiplyScalar(-t),this._panOffset.add(Sn)}_panUp(t,i){this.screenSpacePanning===!0?Sn.setFromMatrixColumn(i,1):(Sn.setFromMatrixColumn(i,0),Sn.crossVectors(this.object.up,Sn)),Sn.multiplyScalar(t),this._panOffset.add(Sn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Sn.copy(l).sub(this.target);let c=Sn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new le,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function mR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function _R(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vx),this.state=Xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function vR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Vr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Vr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(yp)}function xR(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function SR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(yp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(vx))}function yR(r){this.enabled!==!1&&this._handleKeyDown(r)}function MR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(yp)}function ER(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function bR(r){this.enabled!==!1&&r.preventDefault()}function TR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class xx extends xp{constructor(t){super(t)}load(t,i,s,l){const c=this,h=new fE(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(p){try{i(c.parse(p))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},s,l)}parse(t){function i(d){const _=new DataView(d),v=32/8*3+32/8*3*3+16/8,g=_.getUint32(80,!0);if(80+32/8+g*v===_.byteLength)return!0;const T=[115,111,108,105,100];for(let C=0;C<5;C++)if(s(T,_,C))return!1;return!0}function s(d,_,v){for(let g=0,M=d.length;g<M;g++)if(d[g]!==_.getUint8(v+g))return!1;return!0}function l(d){const _=new DataView(d),v=_.getUint32(80,!0);let g,M,T,C=!1,y,S,w,O,P;for(let z=0;z<70;z++)_.getUint32(z,!1)==1129270351&&_.getUint8(z+4)==82&&_.getUint8(z+5)==61&&(C=!0,y=new Float32Array(v*3*3),S=_.getUint8(z+6)/255,w=_.getUint8(z+7)/255,O=_.getUint8(z+8)/255,P=_.getUint8(z+9)/255);const B=84,U=50,N=new pi,b=new Float32Array(v*3*3),I=new Float32Array(v*3*3),W=new pe;for(let z=0;z<v;z++){const Y=B+z*U,ut=_.getFloat32(Y,!0),ft=_.getFloat32(Y+4,!0),X=_.getFloat32(Y+8,!0);if(C){const L=_.getUint16(Y+48,!0);(L&32768)===0?(g=(L&31)/31,M=(L>>5&31)/31,T=(L>>10&31)/31):(g=S,M=w,T=O)}for(let L=1;L<=3;L++){const H=Y+L*12,et=z*3*3+(L-1)*3;b[et]=_.getFloat32(H,!0),b[et+1]=_.getFloat32(H+4,!0),b[et+2]=_.getFloat32(H+8,!0),I[et]=ut,I[et+1]=ft,I[et+2]=X,C&&(W.setRGB(g,M,T,Gn),y[et]=W.r,y[et+1]=W.g,y[et+2]=W.b)}}return N.setAttribute("position",new di(b,3)),N.setAttribute("normal",new di(I,3)),C&&(N.setAttribute("color",new di(y,3)),N.hasColors=!0,N.alpha=P),N}function c(d){const _=new pi,v=/solid([\s\S]*?)endsolid/g,g=/facet([\s\S]*?)endfacet/g,M=/solid\s(.+)/;let T=0;const C=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+C+C+C,"g"),S=new RegExp("normal"+C+C+C,"g"),w=[],O=[],P=[],B=new Q;let U,N=0,b=0,I=0;for(;(U=v.exec(d))!==null;){b=I;const W=U[0],z=(U=M.exec(W))!==null?U[1]:"";for(P.push(z);(U=g.exec(W))!==null;){let ft=0,X=0;const L=U[0];for(;(U=S.exec(L))!==null;)B.x=parseFloat(U[1]),B.y=parseFloat(U[2]),B.z=parseFloat(U[3]),X++;for(;(U=y.exec(L))!==null;)w.push(parseFloat(U[1]),parseFloat(U[2]),parseFloat(U[3])),O.push(B.x,B.y,B.z),ft++,I++;X!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+T),ft!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+T),T++}const Y=b,ut=I-b;_.userData.groupNames=P,_.addGroup(Y,ut,N),N++}return _.setAttribute("position",new Jn(w,3)),_.setAttribute("normal",new Jn(O,3)),_}function h(d){return typeof d!="string"?new TextDecoder().decode(d):d}function p(d){if(typeof d=="string"){const _=new Uint8Array(d.length);for(let v=0;v<d.length;v++)_[v]=d.charCodeAt(v)&255;return _.buffer||_}else return d}const m=p(t);return i(m)?l(m):c(h(t))}}const ld={schema_version:1,paper:{title:"P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning",authors:["Yikang Yang¹,²,*","Zhanpeng Hu¹,*","Youtian Lin¹,²","Mengqi Zhou¹,²","Feihu Zhang²","Jiaheng Liu¹","Yao Yao¹"],affiliations:["¹Nanjing University","²DreamTech","*Equal contribution."],abstract:"Multimodal large language models can write code and interpret rendered images of 3D designs, but it remains unclear whether they can produce executable parametric 3D programs that are geometrically precise, semantically aligned and assembly-consistent. We introduce P3D-Bench, a benchmark that evaluates this ability under a unified protocol across three task families: text-conditioned part synthesis, image-conditioned multi-part reconstruction and image-plus-annotation assembly composition, with metrics that jointly probe executability, geometric fidelity, topology, text-grounded constraints, multiview semantic alignment and part-level assembly structure.",links:{code:"https://github.com/LucasQAQ/p3d"}},tasks:[{id:"text2cad",label:"Text-to-3D",formats:["JSON","OpenSCAD"],status:"interactive"},{id:"image2cad",label:"Image-to-3D",formats:["JSON","CadQuery","OpenSCAD","Three.js"],status:"interactive"},{id:"text_image2cad",label:"Assembly-3D",formats:["JSON","CadQuery","OpenSCAD"],status:"interactive"}],models:[],cases:[],runs:[],figures:[{id:"pipeline",title:"Pipeline figure placeholder",placeholder:!0},{id:"leaderboard",title:"Leaderboard placeholder",placeholder:!0}],gallery:[]};function Yi(r){return r?r.startsWith("http")||r.startsWith("/")?r:`${"./".endsWith("/")?"./":".//"}demo/${r}`:""}function RR(){const[r,t]=Ee.useState(ld),[i,s]=Ee.useState("text2cad"),[l,c]=Ee.useState(""),[h,p]=Ee.useState(""),[m,d]=Ee.useState("descriptive"),[_,v]=Ee.useState("openscad"),[g,M]=Ee.useState(""),[T,C]=Ee.useState(null);Ee.useEffect(()=>{fetch(Yi("manifest.json")).then(tt=>tt.ok?tt.json():ld).then(tt=>t(tt)).catch(()=>t(ld))},[]);const y=Ee.useMemo(()=>r.runs.filter(tt=>tt.task===i&&Sx(tt)),[r,i]),S=Ee.useMemo(()=>DR(y),[y]),w=Ee.useMemo(()=>y.filter(tt=>S.has(tt.case_id)),[y,S]),O=Ee.useMemo(()=>r.cases.filter(tt=>tt.task===i&&S.has(tt.id)),[S,r,i]),P=Ee.useMemo(()=>w.find(tt=>tt.case_id===l&&tt.model===h&&tt.format===_),[l,_,h,w]),B=Ee.useMemo(()=>P||zr(w.filter(tt=>tt.case_id===l&&tt.model===h))||zr(w.filter(tt=>tt.case_id===l))||zr(w),[l,P,h,w]),U=B?.case_id||l,N=B?.model||h,b=B?.spec||m,I=B?.format||_,W=Ee.useMemo(()=>w.filter(tt=>tt.case_id===U),[U,w]),z=Ee.useMemo(()=>r.models.filter(tt=>W.some(At=>At.model===tt.id)),[W,r.models]),Y=Ee.useMemo(()=>W.filter(tt=>tt.model===N),[N,W]),ut=Ee.useMemo(()=>Array.from(new Set(Y.map(tt=>tt.format))).sort((tt,At)=>Zr(tt)-Zr(At)),[Y]);Ee.useEffect(()=>{B&&(l!==B.case_id&&c(B.case_id),h!==B.model&&p(B.model),m!==B.spec&&d(B.spec),_!==B.format&&v(B.format))},[l,_,h,B,m]);const ft=r.cases.find(tt=>tt.id===U),X=r.models.find(tt=>tt.id===N),L=r.tasks.find(tt=>tt.id===B?.task),H=Ee.useMemo(()=>CR(r),[r]),et=Ee.useMemo(()=>H.slice(0,16),[H]),gt=Ee.useMemo(()=>r.tasks.filter(tt=>tt.status==="interactive"),[r]),yt=B?.condition||ft?.title||"No result is available for this combination yet.",F=B?{title:ft?.title||`Case ${B.case_id}`,taskLabel:L?.label||B.task,specLabel:np(B.spec),input:yt,inputImage:B.assets.input_image,subtitle:`${X?.label||B.model} / ${tu(B.format)}`}:null,J=tt=>{tt&&(c(tt.case_id),p(tt.model),d(tt.spec),v(tt.format))};Ee.useEffect(()=>{const tt=B?.assets.generated_json||B?.assets.generated;if(!tt){M("");return}fetch(Yi(tt)).then(At=>At.ok?At.text():"").then(M).catch(()=>M(""))},[B]);const St=r.paper;return q.jsxs("main",{children:[q.jsxs("nav",{className:"nav",children:[q.jsx("a",{className:"brand",href:"#top",children:"P3D-Bench"}),q.jsxs("div",{children:[q.jsx("a",{href:"#results",children:"Results"}),q.jsx("a",{href:"#pipeline",children:"Pipeline"}),q.jsx("a",{href:"#gallery",children:"Viewer"})]})]}),q.jsxs("section",{id:"top",className:"hero",children:[q.jsxs("div",{className:"hero-copy",children:[q.jsx("p",{className:"eyebrow",children:"Parametric 3D CAD Benchmark"}),q.jsxs("h1",{className:"hero-title",children:[q.jsx("span",{children:"P3D-Bench"}),q.jsxs("small",{children:["Benchmarking MLLMs for ",q.jsx("em",{children:"Parametric 3D"})," Generation and ",q.jsx("em",{children:"Structural Reasoning"})]})]}),q.jsx("div",{className:"authors",children:St.authors.map(tt=>q.jsx("span",{className:"author-name",children:XR(tt)},tt))}),q.jsx("div",{className:"affiliations",children:St.affiliations?.map(tt=>q.jsx("span",{className:"affiliation-item",children:WR(tt)},tt))}),q.jsxs("div",{className:"actions",children:[q.jsxs("a",{href:St.links?.paper||"#pipeline",children:[q.jsx(Gy,{size:17})," Paper"]}),q.jsxs("a",{href:St.links?.code||"https://github.com/LucasQAQ/p3d",children:[q.jsx(Xy,{size:17})," Page Repo"]}),q.jsxs("a",{href:"#results",children:[q.jsx(qy,{size:17})," Demo"]}),q.jsxs("a",{href:"#citation",children:[q.jsx(Vy,{size:17})," BibTeX"]})]})]}),q.jsx(HR,{items:et}),q.jsxs("div",{className:"abstract-panel",children:[q.jsx("p",{className:"eyebrow",children:"Abstract"}),q.jsx("p",{className:"abstract",children:St.abstract})]})]}),q.jsx("section",{className:"task-strip",children:gt.map(tt=>q.jsxs("button",{className:i===tt.id?"task-card active":"task-card",onClick:()=>s(tt.id),children:[q.jsx("span",{children:tt.label}),q.jsx("strong",{children:tt.formats.join(" / ")}),q.jsx("em",{children:"public demo"})]},tt.id))}),q.jsxs("section",{id:"results",className:"section",children:[q.jsxs("div",{className:"section-heading",children:[q.jsx("p",{className:"eyebrow",children:"Interactive Results"}),q.jsx("h2",{children:"Choose a case, model, and output format."})]}),w.length?q.jsxs("div",{className:"workbench",children:[q.jsxs("aside",{className:"controls",children:[q.jsx(cd,{label:"Case",value:U,options:O.map(tt=>[tt.id,tt.title]),onChange:tt=>J(zr(w.filter(At=>At.case_id===tt)))}),q.jsx(cd,{label:"Model",value:N,options:z.map(tt=>[tt.id,tt.label]),onChange:tt=>J(zr(W.filter(At=>At.model===tt)))}),q.jsx(cd,{label:"Format",value:I,options:ut.map(tt=>[tt,tu(tt)]),onChange:tt=>J(zr(Y.filter(At=>At.format===tt)))}),q.jsxs("div",{className:"select-label readonly-select",children:[q.jsx("span",{children:"Input protocol"}),q.jsx("strong",{children:np(b)})]}),q.jsxs("div",{className:"condition",children:[q.jsx("span",{children:"Input"}),B?.assets.input_image?q.jsx("img",{className:"condition-image",src:Yi(B.assets.input_image),alt:"Input reference"}):null,q.jsx("p",{children:yt}),F?q.jsx("button",{className:"condition-full-input",type:"button",onClick:()=>C(F),children:"View full input"}):null]})]}),q.jsxs("div",{className:"result-stage",children:[q.jsxs("div",{className:"render-pair",children:[q.jsx(GR,{run:B,title:ft?.title||"Ground Truth",subtitle:"Reference geometry"}),q.jsx(VR,{run:B,title:ft?.title||"Prediction",subtitle:`${X?.label||B?.model||""}${B?` / ${tu(B.format)}`:""}`})]}),q.jsx(jR,{run:B}),q.jsxs("div",{className:"code-panel",children:[q.jsxs("div",{className:"panel-title",children:[q.jsx(ky,{size:18})," Generated JSON"]}),q.jsx("pre",{children:q.jsx("code",{children:g||"No generated JSON is bundled for this run."})})]})]})]}):q.jsx(Tx,{title:"Results reserved",text:"The task contract is implemented in the repo. Public precomputed results for this task will be added in the next bundle."})]}),q.jsxs("section",{id:"pipeline",className:"section",children:[q.jsxs("div",{className:"section-heading",children:[q.jsx("p",{className:"eyebrow",children:"Pipeline and Leaderboard"}),q.jsx("h2",{children:"Pipeline placeholder and current per-task model rankings."})]}),q.jsx(OR,{})]}),q.jsxs("section",{id:"gallery",className:"section",children:[q.jsxs("div",{className:"section-heading",children:[q.jsx("p",{className:"eyebrow",children:"Live Render Showcase"}),q.jsx("h2",{children:"Curated predictions across text, image, and assembly prompts."})]}),q.jsx(zR,{items:H})]}),q.jsxs("section",{id:"citation",className:"section citation",children:[q.jsxs("div",{className:"citation-heading",children:[q.jsx("h2",{children:"Citation"}),q.jsx("p",{className:"citation-format",children:"BibTeX"})]}),q.jsx("pre",{children:q.jsx("code",{children:`@article{p3dbench2026,
  title={P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning},
  author={Yang, Yikang and Hu, Zhanpeng and Lin, Youtian and Zhou, Mengqi and Zhang, Feihu and Liu, Jiaheng and Yao, Yao},
  year={2026}
}`})})]}),T?q.jsx(yx,{item:T,onClose:()=>C(null)}):null]})}function CR(r){const t=["gpt55-reason","gemini-reason","claude-reason","kimi_k26-reason","doubao-reason","qwen-reason","mimo_omni-reason"],i=["json","openscad","json","openscad"],s=new Map(r.models.map(m=>[m.id,m.label])),l=new Map(r.tasks.map(m=>[m.id,m.label])),c=new Map(r.cases.map(m=>[m.id,m.title])),h=new Map;r.runs.filter(m=>Sx(m)&&m.valid!==!1).forEach(m=>{const d=`${m.task}/${m.case_id}`,_=h.get(d)||[];_.push(m),h.set(d,_)});const p=r.cases.map((m,d)=>{const _=t[d%t.length],v=i[d%i.length];return[...h.get(`${m.task}/${m.id}`)||[]].sort((M,T)=>{const C=cu(T)-cu(M);if(C)return C;const y=+(M.model!==_)-+(T.model!==_);if(y)return y;const S=+(M.format!==v)-+(T.format!==v);return S||M.id.localeCompare(T.id)})[0]}).filter(m=>!!m).map(m=>({id:m.id,task:m.task,title:c.get(m.case_id)||`Case ${m.case_id.split("/").pop()||m.case_id}`,subtitle:`${s.get(m.model)||m.model} / ${UR((h.get(`${m.task}/${m.case_id}`)||[]).filter(d=>d.model===m.model).map(d=>d.format))}`,taskLabel:l.get(m.task)||m.task,specLabel:np(m.spec),input:m.condition||c.get(m.case_id)||`Case ${m.case_id}`,inputImage:m.assets.input_image,src:m.assets.pred_render||"",mesh:m.assets.mesh||""}));return wR(p)}function wR(r){const t=["text2cad","image2cad","text_image2cad"],i=new Map;r.forEach(c=>i.set(c.task,[...i.get(c.task)||[],c]));const s=[];let l=0;for(;s.length<r.length;){let c=!1;for(const h of t){const p=i.get(h)?.[l];p&&(s.push(p),c=!0)}if(!c)break;l+=1}return s}function Sx(r){return!!((r.condition||"").trim()&&r.assets.generated_json&&r.assets.gt_mesh&&r.assets.gt_render&&r.assets.mesh&&r.assets.pred_render)}function DR(r){return new Set(r.map(t=>t.case_id))}function zr(r){return[...r].sort((t,i)=>{const s=+(i.valid!==!1)-+(t.valid!==!1);if(s)return s;const l=Zr(t.format)-Zr(i.format);if(l)return l;const c=cu(i)-cu(t);if(c)return c;const h=bv(t.spec)-bv(i.spec);return h||t.id.localeCompare(i.id)})[0]}function np(r){return r==="image"?"Image input":r==="image_text"?"Image + text input":r==="parametric"?"Parametric input":"Descriptive input"}function tu(r){return r==="json"?"JSON":r==="openscad"?"OpenSCAD":r==="cadquery"?"CadQuery":r==="threejs"?"Three.js":r}function UR(r){return Array.from(new Set(r)).sort((i,s)=>Zr(i)-Zr(s)).map(tu).join(" + ")}function bv(r){return r==="parametric"?0:r==="image_text"||r==="image"?1:r==="descriptive"?2:3}function Zr(r){return r==="json"?0:r==="openscad"?1:r==="cadquery"?2:r==="threejs"?3:4}const LR={openai:{color:"#202123",icon:"icons/src/openai.svg"},gemini:{color:"#14B86A",icon:"icons/src/gemini-color.svg"},claude:{color:"#D97757",icon:"icons/src/claude-color.svg"},kimi:{color:"#1783FF",icon:"icons/src/kimi-color.svg",tile:"#111619"},zai:{color:"#8E5CFB",icon:"icons/src/zai.svg"},doubao:{color:"#00A6B8",icon:"icons/src/bytedance-color.svg"},deepseek:{color:"#4D6BFE",icon:"icons/src/deepseek-color.svg"},qwen:{color:"#FF6003",icon:"icons/src/qwen-color.svg"},mimo:{color:"#FF6900",icon:"icons/src/xiaomimimo.svg",tile:"#111619",filter:"invert(1)"}},NR=[{title:"Text-to-3D",accent:"#285c8f",note:"Average score",rows:[{model:"GPT-5.5",family:"openai",score:.848},{model:"Gemini 3.1 Pro",family:"gemini",score:.835},{model:"Claude Opus 4.6",family:"claude",score:.831},{model:"Kimi K2.6",family:"kimi",score:.796},{model:"GLM-5.1",family:"zai",score:.782},{model:"Doubao Seed 2.0 Pro",family:"doubao",score:.762},{model:"DeepSeek V4 Pro",family:"deepseek",score:.762},{model:"Qwen3.6-Plus",family:"qwen",score:.748},{model:"MiMo v2.5 Pro",family:"mimo",score:.744},{model:"MiMo v2 Pro",family:"mimo",score:.741}]},{title:"Image-to-3D",accent:"#b46e4c",note:"Average score",rows:[{model:"GPT-5.5",family:"openai",score:.675},{model:"Gemini 3.1 Pro",family:"gemini",score:.667},{model:"Claude Opus 4.6",family:"claude",score:.62},{model:"Kimi K2.6",family:"kimi",score:.592},{model:"GLM 5V Turbo",family:"zai",score:.491},{model:"Qwen3.6-Plus",family:"qwen",score:.475},{model:"MiMo v2 Omni",family:"mimo",score:.452},{model:"Doubao Seed 2.0 Pro",family:"doubao",score:.437}]},{title:"Assembly-3D",accent:"#337665",note:"Average score",rows:[{model:"Gemini 3.1 Pro",family:"gemini",score:.659},{model:"GPT-5.5",family:"openai",score:.657},{model:"Claude Opus 4.6",family:"claude",score:.594},{model:"Kimi K2.6",family:"kimi",score:.538},{model:"MiMo v2 Omni",family:"mimo",score:.359},{model:"Qwen3.6-Plus",family:"qwen",score:.353},{model:"GLM 5V Turbo",family:"zai",score:.33},{model:"Doubao Seed 2.0 Pro",family:"doubao",score:.316}]}];function OR(){return q.jsxs("div",{className:"main-figures",children:[q.jsx(PR,{}),q.jsx(IR,{})]})}function PR(){return q.jsxs("article",{className:"pipeline-placeholder",children:[q.jsxs("div",{className:"pipeline-copy",children:[q.jsx("span",{children:"Pipeline figure"}),q.jsx("h3",{children:"Final paper pipeline placeholder."}),q.jsx("p",{children:"The updated pipeline figure will be integrated here after the paper asset is finalized."})]}),q.jsxs("div",{className:"pipeline-skeleton","aria-hidden":"true",children:[q.jsx("div",{className:"skeleton-node wide"}),q.jsx("div",{className:"skeleton-arrow"}),q.jsx("div",{className:"skeleton-node"}),q.jsx("div",{className:"skeleton-arrow"}),q.jsx("div",{className:"skeleton-node accent"})]})]})}function IR(){return q.jsxs("article",{className:"leaderboard-card",children:[q.jsxs("div",{className:"leaderboard-head",children:[q.jsxs("div",{children:[q.jsx("span",{children:"Current paper figure"}),q.jsx("h3",{children:"Per-task model leaderboard"})]}),q.jsx("p",{children:"Higher scores indicate stronger executable CAD generation under each task setting."})]}),q.jsxs("div",{className:"leaderboard-axis","aria-hidden":"true",children:[q.jsx("span",{children:"0.0"}),q.jsx("span",{children:"0.3"}),q.jsx("span",{children:"0.6"}),q.jsx("span",{children:"0.9"})]}),q.jsx("div",{className:"leaderboard-panels",children:NR.map(r=>q.jsx(FR,{task:r},r.title))})]})}function FR({task:r}){return q.jsxs("section",{className:"leaderboard-panel",style:{"--task-accent":r.accent},children:[q.jsxs("div",{className:"leaderboard-task",children:[q.jsx("h4",{children:r.title}),q.jsx("span",{children:r.note})]}),q.jsx("div",{className:"leaderboard-rows",children:r.rows.map((t,i)=>{const s=LR[t.family]||{color:r.accent,icon:"icons/src/openai.svg"},l=`${Math.max(2,t.score/.9*100)}%`;return q.jsxs("div",{className:"leaderboard-row",children:[q.jsxs("div",{className:"model-label",children:[q.jsx("span",{className:"model-rank",children:i+1}),q.jsx("span",{className:"model-mark",style:{"--model-tile":s.tile||"#fffdfa","--icon-filter":s.filter||"none"},children:q.jsx("img",{src:Yi(s.icon),alt:"","aria-hidden":"true"})}),q.jsx("strong",{children:t.model})]}),q.jsx("div",{className:"bar-track",children:q.jsx("span",{className:"bar-fill",style:{"--bar-color":s.color,"--bar-width":l}})}),q.jsx("em",{children:t.score.toFixed(3)})]},`${r.title}-${t.model}`)})})]})}function cu(r){const t=r.metrics||{};let i=r.valid===!1?-200:20;const s=BR(r);return i+=s*35,s||(i-=90),i+=Hr(t.qa_overall??t.qa_overall_accuracy)*120,i+=Hr(t.qa_semantic)*28,i+=Hr(t.qa_parametric)*16,i+=Hr(t.judge_geometry)*3,i+=Hr(t.judge_semantic)*3,i+=Hr(t.judge_aesthetics)*3,typeof t.chamfer_distance=="number"&&t.chamfer_distance>0&&(i+=Math.max(0,18-Math.log10(t.chamfer_distance*1e4+1)*5)),i}function Hr(r){return typeof r=="number"&&Number.isFinite(r)?r:0}function BR(r){return Object.entries(r.metrics||{}).filter(([t,i])=>ip(t,i,r)).length}function zR({items:r}){const[t,i]=Ee.useState(""),[s,l]=Ee.useState(null),c=r.find(h=>h.id===t)||r[0];return Ee.useEffect(()=>{!t&&r[0]&&i(r[0].id)},[r,t]),r.length?q.jsxs("div",{className:"render-showcase",children:[q.jsxs("div",{className:"viewer-shell",children:[q.jsxs("div",{className:"viewer-stage",children:[q.jsx(Mp,{item:c}),q.jsxs("div",{className:"viewer-meta",children:[q.jsxs("span",{children:[c.taskLabel," · ",c.specLabel]}),q.jsx("strong",{children:c.title}),c.inputImage?q.jsx("img",{className:"viewer-input-image",src:Yi(c.inputImage),alt:"Input reference"}):null,q.jsx("p",{children:c.input}),q.jsx("button",{className:"viewer-full-input",type:"button",onClick:()=>l(c),children:"View full input"}),q.jsx("em",{children:c.subtitle})]})]}),q.jsxs("div",{className:"viewer-rail",children:[q.jsxs("div",{className:"viewer-rail-header",children:[q.jsxs("span",{children:[r.length," cases"]}),q.jsx("strong",{children:"Bundled live geometry set"})]}),r.map((h,p)=>q.jsxs("button",{className:h.id===c.id?"viewer-case active":"viewer-case",onClick:()=>i(h.id),title:h.input,style:{"--case-accent":Tv[p%Tv.length]},children:[q.jsx("img",{src:Yi(h.src),alt:h.title}),q.jsxs("em",{className:"case-task",children:[h.taskLabel," · ",h.specLabel]}),q.jsx("span",{children:h.input}),q.jsx("strong",{children:h.subtitle})]},h.id))]})]}),s?q.jsx(yx,{item:s,onClose:()=>l(null)}):null]}):q.jsx(Tx,{title:"Render showcase reserved",text:"Curated demo renders will appear here when bundled."})}function yx({item:r,onClose:t}){return q.jsx("div",{className:"input-modal",role:"dialog","aria-modal":"true","aria-labelledby":"input-modal-title",onClick:t,children:q.jsxs("div",{className:"input-modal-panel",onClick:i=>i.stopPropagation(),children:[q.jsxs("div",{className:"input-modal-head",children:[q.jsxs("span",{children:[r.taskLabel," · ",r.specLabel]}),q.jsx("button",{type:"button",onClick:t,children:"Close"})]}),q.jsx("h3",{id:"input-modal-title",children:r.title}),r.inputImage?q.jsx("img",{className:"input-modal-image",src:Yi(r.inputImage),alt:"Input reference"}):null,q.jsx("p",{children:r.input}),q.jsx("em",{children:r.subtitle})]})})}const Tv=["#337665","#285c8f","#b46e4c","#6b6b9a","#2f7a86","#a88743"],Av={text2cad:{body:13017695,edge:6115125,shadow:5129782},image2cad:{body:7905674,edge:3692619,shadow:3362115},text_image2cad:{body:7376558,edge:3427171,shadow:3161936}};function Mx(r){return Av[r||""]||Av.text2cad}function HR({items:r}){const t=Ee.useRef(null);return Ee.useEffect(()=>{const i=t.current;if(!i||!r.length)return;const s=new Zv;s.background=new pe(14673887),s.fog=new hu(14673887,8.8,14.5);const l=new fi(30,1,.01,100);l.position.set(0,3.05,5.9),l.lookAt(0,0,0);const c=new _x({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(14673887,1),c.outputColorSpace=Gn,c.shadowMap.enabled=!0,c.shadowMap.type=rp,i.appendChild(c.domElement),s.add(new ox(16249832,11122094,2.25));const h=new lu(16773850,3.15);h.position.set(4.5,6.5,5.2),h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=.1,h.shadow.camera.far=16,s.add(h);const p=new lu(9291451,1.25);p.position.set(-5,3,-3),s.add(p);const m=new us;m.position.set(0,.16,-.05),s.add(m);const d=new mi(new Kr(7.6,3.6),new ix({color:3426627,opacity:.13}));d.rotation.x=-Math.PI/2,d.position.y=-.84,d.receiveShadow=!0,m.add(d);const _=r.slice(0,16),v=new xx,g=[d.geometry],M=[d.material],T=[],C=[];let y=!1;_.forEach((U,N)=>{const b=N%8,I=Math.floor(N/8),W=I===0?.18:-.12,z=new us;z.position.set((b-3.5)*.76,W,(I-.5)*.95),z.rotation.y=(b-3.5)*.04,m.add(z),T.push(z),C.push(W),v.load(Yi(U.mesh),Y=>{if(y){Y.dispose();return}Y.computeVertexNormals(),Y.computeBoundingBox(),Y.center();const ut=Y.boundingBox,ft=new Q;ut?.getSize(ft);const X=Math.max(ft.x,ft.y,ft.z)||1;Y.scale(1.08/X,1.08/X,1.08/X),g.push(Y);const L=Mx(U.task),H=new sx({color:L.body,roughness:.58,metalness:.04});M.push(H);const et=new us;et.rotation.x=-Math.PI/2,et.rotation.z=(N%2?-1:1)*.18;const gt=new mi(Y,H);gt.castShadow=!0,gt.receiveShadow=!0,et.add(gt);const yt=new nx(Y,30),F=new vp({color:L.edge,transparent:!0,opacity:.28});g.push(yt),M.push(F),et.add(new $v(yt,F)),z.add(et)})});const S=()=>{const{clientWidth:U,clientHeight:N}=i,b=Math.max(320,U),I=Math.max(360,N),W=b<560?.52:b<760?.78:1;m.scale.setScalar(W),l.position.set(0,b<560?3.32:3.05,b<560?8.15:b<760?6.55:5.9),l.lookAt(0,0,0),c.setSize(b,I,!1),l.aspect=b/I,l.updateProjectionMatrix()},w=new ResizeObserver(S);w.observe(i),S();let O=0;const P=new gE,B=()=>{const U=P.getElapsedTime();O=requestAnimationFrame(B),m.rotation.y=Math.sin(U*.34)*.085,T.forEach((N,b)=>{N.position.y=C[b]+Math.sin(U*.9+b*.57)*.045}),c.render(s,l)};return B(),()=>{y=!0,cancelAnimationFrame(O),w.disconnect(),g.forEach(U=>U.dispose()),M.forEach(U=>U.dispose()),c.dispose(),c.domElement.remove()}},[r]),q.jsx("div",{className:"hero-visual hero-cad-scene",children:q.jsx("div",{className:"hero-cad-canvas",ref:t})})}function GR({run:r,title:t,subtitle:i}){return r?.assets.gt_mesh?q.jsxs("figure",{className:"render-card result-viewer-card",children:[q.jsx("span",{children:"Ground Truth"}),q.jsx("div",{className:"result-viewer",children:q.jsx(Mp,{item:{id:`${r.case_id}-${r.spec}-ground-truth`,task:r.task,title:t,subtitle:i,src:r.assets.gt_render||"",mesh:r.assets.gt_mesh},variant:"result"})})]}):q.jsx(bx,{title:"Ground Truth",src:r?.assets.gt_render})}function VR({run:r,title:t,subtitle:i}){return r?.assets.mesh?q.jsxs("figure",{className:"render-card result-viewer-card",children:[q.jsx("span",{children:"Prediction"}),q.jsx("div",{className:"result-viewer",children:q.jsx(Mp,{item:{id:r.id,task:r.task,title:t,subtitle:i,src:r.assets.pred_render||"",mesh:r.assets.mesh},variant:"result"})})]}):q.jsx(bx,{title:"Prediction",src:r?.assets.pred_render})}function Mp({item:r,variant:t="showcase"}){const i=Ee.useRef(null);return Ee.useEffect(()=>{const s=i.current;if(!s||!r.mesh)return;const l=new Zv;l.background=new pe(15791342),l.fog=new hu(15791342,6.5,11.5);const c=Mx(r.task),h=new fi(38,1,.01,100);h.position.set(3.6,2.35,t==="result"?4.35:4.7);const p=new _x({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setClearColor(15791342,1),p.outputColorSpace=Gn,p.shadowMap.enabled=!0,p.shadowMap.type=rp,s.appendChild(p.domElement);const m=new pR(h,p.domElement);m.enableDamping=!0,m.autoRotate=!0,m.autoRotateSpeed=1.2,m.enablePan=!1,m.minDistance=2.2,m.maxDistance=7.5,l.add(new ox(16777215,11450547,2.1));const d=new lu(16777215,3);d.position.set(3.5,4.5,3.2),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),l.add(d);const _=new lu(10214604,1.2);_.position.set(-3,2,-2.5),l.add(_);const v=new mi(new Kr(6,4),new ix({color:c.shadow,opacity:.09}));v.rotation.x=-Math.PI/2,v.position.y=-1.06,v.receiveShadow=!0,l.add(v);const g=new us;g.rotation.x=-Math.PI/2,l.add(g);let M=!1,T=0,C=null,y=null,S=null,w=null;new xx().load(Yi(r.mesh),N=>{if(M){N.dispose();return}N.computeVertexNormals(),N.computeBoundingBox(),N.center();const b=N.boundingBox,I=new Q;b?.getSize(I);const W=Math.max(I.x,I.y,I.z)||1,z=t==="result"?2.32:2.08;N.scale(z/W,z/W,z/W),N.computeBoundingBox(),C=N;const Y=new sx({color:c.body,roughness:.62,metalness:.05,emissive:2760981,emissiveIntensity:.02});y=Y;const ut=new mi(N,Y);ut.castShadow=!0,ut.receiveShadow=!0,g.add(ut),S=new nx(N,28),w=new vp({color:c.edge,transparent:!0,opacity:t==="result"?.22:.26}),g.add(new $v(S,w))});const P=()=>{const{clientWidth:N,clientHeight:b}=s,I=Math.max(320,N),W=Math.max(360,b);p.setSize(I,W,!1),h.aspect=I/W,h.updateProjectionMatrix()},B=new ResizeObserver(P);B.observe(s),P();const U=()=>{T=requestAnimationFrame(U),m.update(),p.render(l,h)};return U(),()=>{M=!0,cancelAnimationFrame(T),B.disconnect(),m.dispose(),C?.dispose(),y?.dispose(),S?.dispose(),w?.dispose(),v.geometry.dispose(),v.material.dispose(),p.dispose(),p.domElement.remove()}},[r.id,r.mesh,t]),q.jsx("div",{className:"cad-viewer",ref:i})}function cd({label:r,value:t,options:i,onChange:s}){return q.jsxs("label",{className:"select-label",children:[q.jsx("span",{children:r}),q.jsx("select",{value:t,onChange:l=>s(l.target.value),children:i.map(([l,c])=>q.jsx("option",{value:l,children:c},l))})]})}const kR={"⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9"};function Ex(r){return r.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,t=>kR[t]||t)}function XR(r){const t=r.match(/^(.+?)([⁰¹²³⁴⁵⁶⁷⁸⁹,\*]+)$/);return t?q.jsxs(q.Fragment,{children:[t[1],q.jsx("sup",{children:Ex(t[2])})]}):r}function WR(r){const t=r.match(/^([⁰¹²³⁴⁵⁶⁷⁸⁹]+)(.+)$/);return t?q.jsxs(q.Fragment,{children:[q.jsx("sup",{children:Ex(t[1])}),t[2]]}):r}function bx({title:r,src:t}){return q.jsxs("figure",{className:"render-card",children:[q.jsx("span",{children:r}),t?q.jsx("img",{src:Yi(t),alt:r}):q.jsxs("div",{className:"render-missing",children:[q.jsx(Wy,{}),"No render"]})]})}function jR({run:r}){const t=YR(r);return t.length?q.jsx("div",{className:"metrics",children:t.length?t.map(i=>q.jsxs("div",{className:"metric",children:[q.jsx("span",{children:i.label}),q.jsx("strong",{children:i.value})]},i.key)):null}):null}const Rv=["chamfer_distance","hausdorff_distance","f_score_005","f_score_001","normal_consistency","iou_csg","iou_voxel","pred_open_edge_ratio","qa_overall","qa_overall_accuracy","qa_semantic","qa_parametric","judge_geometry","judge_semantic","judge_aesthetics"],qR={chamfer_distance:"Chamfer",hausdorff_distance:"Hausdorff",f_score_005:"F@0.05",f_score_001:"F@0.01",normal_consistency:"Normal",iou_csg:"IoU CSG",iou_voxel:"IoU voxel",pred_open_edge_ratio:"Open edge",qa_overall:"Overall QA",qa_overall_accuracy:"Overall QA",qa_semantic:"Semantic QA",qa_parametric:"Parametric QA",judge_geometry:"Geometry score",judge_semantic:"Semantic score",judge_aesthetics:"Aesthetic score",acc_cmd:"Command acc.",acc_param:"Parameter acc."};function YR(r){if(!r)return[];const t=r.metrics||{},s=[...Rv.filter(l=>ip(l,t[l],r)),...Object.keys(t).filter(l=>!Rv.includes(l)&&ip(l,t[l],r)).sort()].map(l=>({key:l,label:qR[l]||l.replace(/_/g," "),value:KR(l,t[l])}));return s.length&&r.valid!==null&&r.valid!==void 0&&s.unshift({key:"valid",label:"Executable",value:r.valid?"yes":"no"}),s}function ip(r,t,i){return!(!ZR(t)||r==="qa_parametric"&&i.spec!=="parametric"||r==="qa_parametric"&&typeof t=="number"&&t<=0)}function ZR(r){return r!=null&&r!==""&&!(typeof r=="number"&&Number.isNaN(r))}function KR(r,t){return typeof t!="number"||r.startsWith("judge_")&&Number.isInteger(t)?String(t):r==="pred_open_edge_ratio"?t.toFixed(3):r.includes("chamfer")||r.includes("hausdorff")?t===0?"0":t<.01?t.toFixed(4):t.toFixed(3):t<1?t.toFixed(3):t.toFixed(2)}function Tx({title:r,text:t}){return q.jsxs("div",{className:"placeholder",children:[q.jsx(jy,{size:32}),q.jsx("h3",{children:r}),q.jsx("p",{children:t})]})}Fy.createRoot(document.getElementById("root")).render(q.jsx(RR,{}));
