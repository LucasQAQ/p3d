(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Mh={exports:{}},jo={};var o_;function wM(){if(o_)return jo;o_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return jo.Fragment=t,jo.jsx=i,jo.jsxs=i,jo}var l_;function DM(){return l_||(l_=1,Mh.exports=wM()),Mh.exports}var j=DM(),yh={exports:{}},ae={};var c_;function UM(){if(c_)return ae;c_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),g=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(F,J,St){this.props=F,this.context=J,this.refs=M,this.updater=St||T}S.prototype.isReactComponent={},S.prototype.setState=function(F,J){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,J,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function C(){}C.prototype=S.prototype;function N(F,J,St){this.props=F,this.context=J,this.refs=M,this.updater=St||T}var P=N.prototype=new C;P.constructor=N,w(P,S.prototype),P.isPureReactComponent=!0;var z=Array.isArray;function U(){}var I={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function O(F,J,St){var At=St.ref;return{$$typeof:r,type:F,key:J,ref:At!==void 0?At:null,props:St}}function X(F,J){return O(F.type,J,F.props)}function B(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function K(F){var J={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(St){return J[St]})}var ct=/\/+/g;function ut(F,J){return typeof F=="object"&&F!==null&&F.key!=null?K(""+F.key):J.toString(36)}function W(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(U,U):(F.status="pending",F.then(function(J){F.status==="pending"&&(F.status="fulfilled",F.value=J)},function(J){F.status==="pending"&&(F.status="rejected",F.reason=J)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function L(F,J,St,At,Ct){var lt=typeof F;(lt==="undefined"||lt==="boolean")&&(F=null);var yt=!1;if(F===null)yt=!0;else switch(lt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(F.$$typeof){case r:case t:yt=!0;break;case _:return yt=F._init,L(yt(F._payload),J,St,At,Ct)}}if(yt)return Ct=Ct(F),yt=At===""?"."+ut(F,0):At,z(Ct)?(St="",yt!=null&&(St=yt.replace(ct,"$&/")+"/"),L(Ct,J,St,"",function(te){return te})):Ct!=null&&(B(Ct)&&(Ct=X(Ct,St+(Ct.key==null||F&&F.key===Ct.key?"":(""+Ct.key).replace(ct,"$&/")+"/")+yt)),J.push(Ct)),1;yt=0;var Z=At===""?".":At+":";if(z(F))for(var Tt=0;Tt<F.length;Tt++)At=F[Tt],lt=Z+ut(At,Tt),yt+=L(At,J,St,lt,Ct);else if(Tt=y(F),typeof Tt=="function")for(F=Tt.call(F),Tt=0;!(At=F.next()).done;)At=At.value,lt=Z+ut(At,Tt++),yt+=L(At,J,St,lt,Ct);else if(lt==="object"){if(typeof F.then=="function")return L(W(F),J,St,At,Ct);throw J=String(F),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return yt}function H(F,J,St){if(F==null)return F;var At=[],Ct=0;return L(F,At,"","",function(lt){return J.call(St,lt,Ct++)}),At}function et(F){if(F._status===-1){var J=F._result;J=J(),J.then(function(St){(F._status===0||F._status===-1)&&(F._status=1,F._result=St)},function(St){(F._status===0||F._status===-1)&&(F._status=2,F._result=St)}),F._status===-1&&(F._status=0,F._result=J)}if(F._status===1)return F._result.default;throw F._result}var mt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},Mt={map:H,forEach:function(F,J,St){H(F,function(){J.apply(this,arguments)},St)},count:function(F){var J=0;return H(F,function(){J++}),J},toArray:function(F){return H(F,function(J){return J})||[]},only:function(F){if(!B(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return ae.Activity=x,ae.Children=Mt,ae.Component=S,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=N,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ae.__COMPILER_RUNTIME={__proto__:null,c:function(F){return I.H.useMemoCache(F)}},ae.cache=function(F){return function(){return F.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(F,J,St){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var At=w({},F.props),Ct=F.key;if(J!=null)for(lt in J.key!==void 0&&(Ct=""+J.key),J)!b.call(J,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&J.ref===void 0||(At[lt]=J[lt]);var lt=arguments.length-2;if(lt===1)At.children=St;else if(1<lt){for(var yt=Array(lt),Z=0;Z<lt;Z++)yt[Z]=arguments[Z+2];At.children=yt}return O(F.type,Ct,At)},ae.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},ae.createElement=function(F,J,St){var At,Ct={},lt=null;if(J!=null)for(At in J.key!==void 0&&(lt=""+J.key),J)b.call(J,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ct[At]=J[At]);var yt=arguments.length-2;if(yt===1)Ct.children=St;else if(1<yt){for(var Z=Array(yt),Tt=0;Tt<yt;Tt++)Z[Tt]=arguments[Tt+2];Ct.children=Z}if(F&&F.defaultProps)for(At in yt=F.defaultProps,yt)Ct[At]===void 0&&(Ct[At]=yt[At]);return O(F,lt,Ct)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(F){return{$$typeof:p,render:F}},ae.isValidElement=B,ae.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:et}},ae.memo=function(F,J){return{$$typeof:d,type:F,compare:J===void 0?null:J}},ae.startTransition=function(F){var J=I.T,St={};I.T=St;try{var At=F(),Ct=I.S;Ct!==null&&Ct(St,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(U,mt)}catch(lt){mt(lt)}finally{J!==null&&St.types!==null&&(J.types=St.types),I.T=J}},ae.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ae.use=function(F){return I.H.use(F)},ae.useActionState=function(F,J,St){return I.H.useActionState(F,J,St)},ae.useCallback=function(F,J){return I.H.useCallback(F,J)},ae.useContext=function(F){return I.H.useContext(F)},ae.useDebugValue=function(){},ae.useDeferredValue=function(F,J){return I.H.useDeferredValue(F,J)},ae.useEffect=function(F,J){return I.H.useEffect(F,J)},ae.useEffectEvent=function(F){return I.H.useEffectEvent(F)},ae.useId=function(){return I.H.useId()},ae.useImperativeHandle=function(F,J,St){return I.H.useImperativeHandle(F,J,St)},ae.useInsertionEffect=function(F,J){return I.H.useInsertionEffect(F,J)},ae.useLayoutEffect=function(F,J){return I.H.useLayoutEffect(F,J)},ae.useMemo=function(F,J){return I.H.useMemo(F,J)},ae.useOptimistic=function(F,J){return I.H.useOptimistic(F,J)},ae.useReducer=function(F,J,St){return I.H.useReducer(F,J,St)},ae.useRef=function(F){return I.H.useRef(F)},ae.useState=function(F){return I.H.useState(F)},ae.useSyncExternalStore=function(F,J,St){return I.H.useSyncExternalStore(F,J,St)},ae.useTransition=function(){return I.H.useTransition()},ae.version="19.2.6",ae}var u_;function sp(){return u_||(u_=1,yh.exports=UM()),yh.exports}var Se=sp(),Eh={exports:{}},qo={},bh={exports:{}},Th={};var f_;function LM(){return f_||(f_=1,(function(r){function t(L,H){var et=L.length;L.push(H);t:for(;0<et;){var mt=et-1>>>1,Mt=L[mt];if(0<l(Mt,H))L[mt]=H,L[et]=Mt,et=mt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var H=L[0],et=L.pop();if(et!==H){L[0]=et;t:for(var mt=0,Mt=L.length,F=Mt>>>1;mt<F;){var J=2*(mt+1)-1,St=L[J],At=J+1,Ct=L[At];if(0>l(St,et))At<Mt&&0>l(Ct,St)?(L[mt]=Ct,L[At]=et,mt=At):(L[mt]=St,L[J]=et,mt=J);else if(At<Mt&&0>l(Ct,et))L[mt]=Ct,L[At]=et,mt=At;else break t}}return H}function l(L,H){var et=L.sortIndex-H.sortIndex;return et!==0?et:L.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],d=[],_=1,x=null,g=3,y=!1,T=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(L){for(var H=i(d);H!==null;){if(H.callback===null)s(d);else if(H.startTime<=L)s(d),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(d)}}function z(L){if(w=!1,P(L),!T)if(i(m)!==null)T=!0,U||(U=!0,K());else{var H=i(d);H!==null&&W(z,H.startTime-L)}}var U=!1,I=-1,b=5,O=-1;function X(){return M?!0:!(r.unstable_now()-O<b)}function B(){if(M=!1,U){var L=r.unstable_now();O=L;var H=!0;try{t:{T=!1,w&&(w=!1,C(I),I=-1),y=!0;var et=g;try{e:{for(P(L),x=i(m);x!==null&&!(x.expirationTime>L&&X());){var mt=x.callback;if(typeof mt=="function"){x.callback=null,g=x.priorityLevel;var Mt=mt(x.expirationTime<=L);if(L=r.unstable_now(),typeof Mt=="function"){x.callback=Mt,P(L),H=!0;break e}x===i(m)&&s(m),P(L)}else s(m);x=i(m)}if(x!==null)H=!0;else{var F=i(d);F!==null&&W(z,F.startTime-L),H=!1}}break t}finally{x=null,g=et,y=!1}H=void 0}}finally{H?K():U=!1}}}var K;if(typeof N=="function")K=function(){N(B)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,ut=ct.port2;ct.port1.onmessage=B,K=function(){ut.postMessage(null)}}else K=function(){S(B,0)};function W(L,H){I=S(function(){L(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(L){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var et=g;g=H;try{return L()}finally{g=et}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var et=g;g=L;try{return H()}finally{g=et}},r.unstable_scheduleCallback=function(L,H,et){var mt=r.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?mt+et:mt):et=mt,L){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=et+Mt,L={id:_++,callback:H,priorityLevel:L,startTime:et,expirationTime:Mt,sortIndex:-1},et>mt?(L.sortIndex=et,t(d,L),i(m)===null&&L===i(d)&&(w?(C(I),I=-1):w=!0,W(z,et-mt))):(L.sortIndex=Mt,t(m,L),T||y||(T=!0,U||(U=!0,K()))),L},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(L){var H=g;return function(){var et=g;g=H;try{return L.apply(this,arguments)}finally{g=et}}}})(Th)),Th}var h_;function NM(){return h_||(h_=1,bh.exports=LM()),bh.exports}var Ah={exports:{}},Pn={};var d_;function OM(){if(d_)return Pn;d_=1;var r=sp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:d,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,_)},Pn.flushSync=function(m){var d=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=_,s.d.f()}},Pn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:x,integrity:g,fetchPriority:y}):_==="script"&&s.d.X(m,{crossOrigin:x,integrity:g,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Pn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Pn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,x=p(_,d.crossOrigin);s.d.L(m,_,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Pn.preloadModule=function(m,d){if(typeof m=="string")if(d){var _=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,d){return m(d)},Pn.useFormState=function(m,d,_){return h.H.useFormState(m,d,_)},Pn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Pn.version="19.2.6",Pn}var p_;function PM(){if(p_)return Ah.exports;p_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ah.exports=OM(),Ah.exports}var m_;function IM(){if(m_)return qo;m_=1;var r=NM(),t=sp(),i=PM();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,R=u.child;R;){if(R===a){v=!0,a=u,o=f;break}if(R===o){v=!0,o=u,a=f;break}R=R.sibling}if(!v){for(R=f.child;R;){if(R===a){v=!0,a=f,o=u;break}if(R===o){v=!0,o=f,a=u;break}R=R.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case U:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case N:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var W=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},mt=[],Mt=-1;function F(e){return{current:e}}function J(e){0>Mt||(e.current=mt[Mt],mt[Mt]=null,Mt--)}function St(e,n){Mt++,mt[Mt]=e.current,e.current=n}var At=F(null),Ct=F(null),lt=F(null),yt=F(null);function Z(e,n){switch(St(lt,n),St(Ct,e),St(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?D0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=D0(n),e=U0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(At),St(At,e)}function Tt(){J(At),J(Ct),J(lt)}function te(e){e.memoizedState!==null&&St(yt,e);var n=At.current,a=U0(n,e.type);n!==a&&(St(Ct,e),St(At,a))}function Qt(e){Ct.current===e&&(J(At),J(Ct)),yt.current===e&&(J(yt),Vo._currentValue=et)}var We,de;function Me(e){if(We===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);We=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+e+de}var Ne=!1;function ce(e,n){if(!e||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ft){var ot=ft}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ft){ot=ft}e.call(xt.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],R=f[1];if(v&&R){var G=v.split(`
`),it=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===it.length)for(o=G.length-1,u=it.length-1;1<=o&&0<=u&&G[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==it[u]){var pt=`
`+G[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Me(a):""}function ln(e,n){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return e.child!==n&&n!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return Me("Activity");default:return""}}function Ye(e){try{var n="",a=null;do n+=ln(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var An=Object.prototype.hasOwnProperty,q=r.unstable_scheduleCallback,en=r.unstable_cancelCallback,pe=r.unstable_shouldYield,He=r.unstable_requestPaint,wt=r.unstable_now,Qe=r.unstable_getCurrentPriorityLevel,D=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,tt=r.unstable_NormalPriority,vt=r.unstable_LowPriority,bt=r.unstable_IdlePriority,Dt=r.log,Ot=r.unstable_setDisableYieldValue,ht=null,dt=null;function Pt(e){if(typeof Dt=="function"&&Ot(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ht,e)}catch{}}var It=Math.clz32?Math.clz32:ne,Lt=Math.log,Ut=Math.LN2;function ne(e){return e>>>=0,e===0?32:31-(Lt(e)/Ut|0)|0}var ie=256,ge=262144,V=4194304;function Rt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Rt(o):(v&=R,v!==0?u=Rt(v):a||(a=R&~e,a!==0&&(u=Rt(a))))):(R=o&~f,R!==0?u=Rt(R):v!==0?u=Rt(v):a||(a=o&~e,a!==0&&(u=Rt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Nt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var e=V;return V<<=1,(V&62914560)===0&&(V=4194304),e}function jt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ee(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nn(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,it=e.hiddenUpdates;for(a=v&~a;0<a;){var pt=31-It(a),xt=1<<pt;R[pt]=0,G[pt]=-1;var ot=it[pt];if(ot!==null)for(it[pt]=null,pt=0;pt<ot.length;pt++){var ft=ot[pt];ft!==null&&(ft.lane&=-536870913)}a&=~xt}o!==0&&De(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function De(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function gi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function $n(e,n){var a=n&-n;return a=(a&42)!==0?1:_s(a),(a&(e.suspendedLanes|n))!==0?0:a}function _s(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $r(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function to(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:t_(e.type))}function eo(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var Nn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Nn,Rn="__reactProps$"+Nn,Ji="__reactContainer$"+Nn,Ca="__reactEvents$"+Nn,hl="__reactListeners$"+Nn,Ys="__reactHandles$"+Nn,no="__reactResources$"+Nn,wa="__reactMarker$"+Nn;function io(e){delete e[cn],delete e[Rn],delete e[Ca],delete e[hl],delete e[Ys]}function Da(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ji]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=z0(e);e!==null;){if(a=e[cn])return a;e=z0(e)}return n}e=a,a=e.parentNode}return null}function Ua(e){if(e=e[cn]||e[Ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function vs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function La(e){var n=e[no];return n||(n=e[no]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(e){e[wa]=!0}var dl=new Set,A={};function Y(e,n){rt(e,n),rt(e+"Capture",n)}function rt(e,n){for(A[e]=n,e=0;e<n.length;e++)dl.add(n[e])}var at=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},zt={};function Vt(e){return An.call(zt,e)?!0:An.call(st,e)?!1:at.test(e)?zt[e]=!0:(st[e]=!0,!1)}function Ft(e,n,a){if(Vt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function kt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Re(e){if(!e._valueTracker){var n=oe(e)?"checked":"value";e._valueTracker=Yt(e,n,""+e[n])}}function Je(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=oe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oe=/[\n"\\]/g;function Pe(e){return e.replace(Oe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(e,n,a,o,u,f,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Zt(n)):e.value!==""+Zt(n)&&(e.value=""+Zt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?_e(e,v,Zt(n)):a!=null?_e(e,v,Zt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Zt(R):e.removeAttribute("name")}function On(e,n,a,o,u,f,v,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Re(e);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Re(e)}function _e(e,n,a){n==="number"&&je(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ti(e,n,a){if(n!=null&&(n=""+Zt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Zt(a):""}function Ri(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(W(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Zt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Re(e)}function ei(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ie=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $e(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ie.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ci(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&$e(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&$e(e,f,n[f])}function Le(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Na=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xs(e){return Na.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $i(){}var _u=null;function vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Ks=null;function wp(e){var n=Ua(e);if(n&&(e=n.stateNode)){var a=e[Rn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Gt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Rn]||null;if(!u)throw Error(s(90));Gt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Je(o)}break t;case"textarea":ti(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vn(e,!!a.multiple,n,!1)}}}var xu=!1;function Dp(e,n,a){if(xu)return e(n,a);xu=!0;try{var o=e(n);return o}finally{if(xu=!1,(Zs!==null||Ks!==null)&&(tc(),Zs&&(n=Zs,e=Ks,Ks=Zs=null,wp(n),e)))for(n=0;n<e.length;n++)wp(e[n])}}function ao(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Rn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(ta)try{var so={};Object.defineProperty(so,"passive",{get:function(){Su=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Su=!1}var Oa=null,Mu=null,pl=null;function Up(){if(pl)return pl;var e,n=Mu,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return pl=u.slice(e,1<o?1-o:void 0)}function ml(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function Lp(){return!1}function kn(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?gl:Lp,this.isPropagationStopped=Lp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=kn(Ss),ro=x({},Ss,{view:0,detail:0}),Rx=kn(ro),yu,Eu,oo,vl=x({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(yu=e.screenX-oo.screenX,Eu=e.screenY-oo.screenY):Eu=yu=0,oo=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:Eu}}),Np=kn(vl),Cx=x({},vl,{dataTransfer:0}),wx=kn(Cx),Dx=x({},ro,{relatedTarget:0}),bu=kn(Dx),Ux=x({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Lx=kn(Ux),Nx=x({},Ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ox=kn(Nx),Px=x({},Ss,{data:0}),Op=kn(Px),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=zx[e])?!!n[e]:!1}function Tu(){return Bx}var Hx=x({},ro,{key:function(e){if(e.key){var n=Ix[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gx=kn(Hx),Vx=x({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=kn(Vx),kx=x({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Xx=kn(kx),Wx=x({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=kn(Wx),qx=x({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=kn(qx),Zx=x({},Ss,{newState:0,oldState:0}),Kx=kn(Zx),Qx=[9,13,27,32],Au=ta&&"CompositionEvent"in window,lo=null;ta&&"documentMode"in document&&(lo=document.documentMode);var Jx=ta&&"TextEvent"in window&&!lo,Ip=ta&&(!Au||lo&&8<lo&&11>=lo),Fp=" ",zp=!1;function Bp(e,n){switch(e){case"keyup":return Qx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function $x(e,n){switch(e){case"compositionend":return Hp(n);case"keypress":return n.which!==32?null:(zp=!0,Fp);case"textInput":return e=n.data,e===Fp&&zp?null:e;default:return null}}function tS(e,n){if(Qs)return e==="compositionend"||!Au&&Bp(e,n)?(e=Up(),pl=Mu=Oa=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ip&&n.locale!=="ko"?null:n.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!eS[e.type]:n==="textarea"}function Vp(e,n,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=oc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var co=null,uo=null;function nS(e){b0(e,0)}function xl(e){var n=vs(e);if(Je(n))return e}function kp(e,n){if(e==="change")return n}var Xp=!1;if(ta){var Ru;if(ta){var Cu="oninput"in document;if(!Cu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Cu=typeof Wp.oninput=="function"}Ru=Cu}else Ru=!1;Xp=Ru&&(!document.documentMode||9<document.documentMode)}function jp(){co&&(co.detachEvent("onpropertychange",qp),uo=co=null)}function qp(e){if(e.propertyName==="value"&&xl(uo)){var n=[];Vp(n,uo,e,vu(e)),Dp(nS,n)}}function iS(e,n,a){e==="focusin"?(jp(),co=n,uo=a,co.attachEvent("onpropertychange",qp)):e==="focusout"&&jp()}function aS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(uo)}function sS(e,n){if(e==="click")return xl(n)}function rS(e,n){if(e==="input"||e==="change")return xl(n)}function oS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ni=typeof Object.is=="function"?Object.is:oS;function fo(e,n){if(ni(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!An.call(n,u)||!ni(e[u],n[u]))return!1}return!0}function Yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zp(e,n){var a=Yp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Yp(a)}}function Kp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Kp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=je(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=je(e.document)}return n}function wu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var lS=ta&&"documentMode"in document&&11>=document.documentMode,Js=null,Du=null,ho=null,Uu=!1;function Jp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uu||Js==null||Js!==je(o)||(o=Js,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=oc(Du,"onSelect"),0<o.length&&(n=new _l("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Js)))}function Ms(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var $s={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},Lu={},$p={};ta&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function ys(e){if(Lu[e])return Lu[e];if(!$s[e])return e;var n=$s[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in $p)return Lu[e]=n[a];return e}var tm=ys("animationend"),em=ys("animationiteration"),nm=ys("animationstart"),cS=ys("transitionrun"),uS=ys("transitionstart"),fS=ys("transitioncancel"),im=ys("transitionend"),am=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function wi(e,n){am.set(e,n),Y(n,[e])}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],tr=0,Ou=0;function Ml(){for(var e=tr,n=Ou=tr=0;n<e;){var a=_i[n];_i[n++]=null;var o=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var f=_i[n];if(_i[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&sm(a,u,f)}}function yl(e,n,a,o){_i[tr++]=e,_i[tr++]=n,_i[tr++]=a,_i[tr++]=o,Ou|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Pu(e,n,a,o){return yl(e,n,a,o),El(e)}function Es(e,n){return yl(e,null,null,n),El(e)}function sm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function El(e){if(50<Po)throw Po=0,Wf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var er={};function hS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,n,a,o){return new hS(e,n,a,o)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ea(e,n){var a=e.alternate;return a===null?(a=ii(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function rm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function bl(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")Iu(e)&&(v=1);else if(typeof e=="string")v=_M(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ii(31,a,n,u),e.elementType=O,e.lanes=f,e;case w:return bs(a.children,u,f,n);case M:v=8,u|=24;break;case S:return e=ii(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case z:return e=ii(13,a,n,u),e.elementType=z,e.lanes=f,e;case U:return e=ii(19,a,n,u),e.elementType=U,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break t;case C:v=9;break t;case P:v=11;break t;case I:v=14;break t;case b:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ii(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function bs(e,n,a,o){return e=ii(7,e,o,n),e.lanes=a,e}function Fu(e,n,a){return e=ii(6,e,null,n),e.lanes=a,e}function om(e){var n=ii(18,null,null,0);return n.stateNode=e,n}function zu(e,n,a){return n=ii(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var lm=new WeakMap;function vi(e,n){if(typeof e=="object"&&e!==null){var a=lm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ye(n)},lm.set(e,n),n)}return{value:e,source:n,stack:Ye(n)}}var nr=[],ir=0,Tl=null,po=0,xi=[],Si=0,Pa=null,zi=1,Bi="";function na(e,n){nr[ir++]=po,nr[ir++]=Tl,Tl=e,po=n}function cm(e,n,a){xi[Si++]=zi,xi[Si++]=Bi,xi[Si++]=Pa,Pa=e;var o=zi;e=Bi;var u=32-It(o)-1;o&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,zi=1<<32-It(n)+u|a<<u|o,Bi=f+e}else zi=1<<f|a<<u|o,Bi=e}function Bu(e){e.return!==null&&(na(e,1),cm(e,1,0))}function Hu(e){for(;e===Tl;)Tl=nr[--ir],nr[ir]=null,po=nr[--ir],nr[ir]=null;for(;e===Pa;)Pa=xi[--Si],xi[Si]=null,Bi=xi[--Si],xi[Si]=null,zi=xi[--Si],xi[Si]=null}function um(e,n){xi[Si++]=zi,xi[Si++]=Bi,xi[Si++]=Pa,zi=n.id,Bi=n.overflow,Pa=e}var Cn=null,Ze=null,be=!1,Ia=null,Mi=!1,Gu=Error(s(519));function Fa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(vi(n,e)),Gu}function fm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[Rn]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<Fo.length;a++)xe(Fo[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Ri(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||C0(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Fa(e,!0)}function hm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Cn=Cn.return}}function ar(e){if(e!==Cn)return!1;if(!be)return hm(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||rh(e.type,e.memoizedProps)),a=!a),a&&Ze&&Fa(e),hm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=F0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=F0(e)}else n===27?(n=Ze,Qa(e.type)?(e=fh,fh=null,Ze=e):Ze=n):Ze=Cn?Ei(e.stateNode.nextSibling):null;return!0}function Ts(){Ze=Cn=null,be=!1}function Vu(){var e=Ia;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Ia=null),e}function mo(e){Ia===null?Ia=[e]:Ia.push(e)}var ku=F(null),As=null,ia=null;function za(e,n,a){St(ku,n._currentValue),n._currentValue=a}function aa(e){e._currentValue=ku.current,J(ku)}function Xu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Wu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Xu(f.return,a,e),o||(v=null);break t}f=R.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Xu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function sr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var R=u.type;ni(u.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(u===yt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}u=u.return}e!==null&&Wu(n,e,a,o),n.flags|=262144}function Al(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rs(e){As=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return dm(As,e)}function Rl(e,n){return As===null&&Rs(e),dm(e,n)}function dm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(e===null)throw Error(s(308));ia=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ia=ia.next=n;return a}var dS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},pS=r.unstable_scheduleCallback,mS=r.unstable_NormalPriority,dn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new dS,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&pS(mS,function(){e.controller.abort()})}var _o=null,qu=0,rr=0,or=null;function gS(e,n){if(_o===null){var a=_o=[];qu=0,rr=Qf(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return qu++,n.then(pm,pm),n}function pm(){if(--qu===0&&_o!==null){or!==null&&(or.status="fulfilled");var e=_o;_o=null,rr=0,or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function _S(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var mm=L.S;L.S=function(e,n){Jg=wt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gS(e,n),mm!==null&&mm(e,n)};var Cs=F(null);function Yu(){var e=Cs.current;return e!==null?e:qe.pooledCache}function Cl(e,n){n===null?St(Cs,Cs.current):St(Cs,n.pool)}function gm(){var e=Yu();return e===null?null:{parent:dn._currentValue,pool:e}}var lr=Error(s(460)),Zu=Error(s(474)),wl=Error(s(542)),Dl={then:function(){}};function _m(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sm(e),e;default:if(typeof n.status=="string")n.then($i,$i);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sm(e),e}throw Ds=n,lr}}function ws(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ds=a,lr):a}}var Ds=null;function xm(){if(Ds===null)throw Error(s(459));var e=Ds;return Ds=null,e}function Sm(e){if(e===lr||e===wl)throw Error(s(483))}var cr=null,vo=0;function Ul(e){var n=vo;return vo+=1,cr===null&&(cr=[]),vm(cr,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ll(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Mm(e){function n(Q,k){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[k],Q.flags|=16):nt.push(k)}}function a(Q,k){if(!e)return null;for(;k!==null;)n(Q,k),k=k.sibling;return null}function o(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function u(Q,k){return Q=ea(Q,k),Q.index=0,Q.sibling=null,Q}function f(Q,k,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<k?(Q.flags|=67108866,k):nt):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function v(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,k,nt,_t){return k===null||k.tag!==6?(k=Fu(nt,Q.mode,_t),k.return=Q,k):(k=u(k,nt),k.return=Q,k)}function G(Q,k,nt,_t){var Kt=nt.type;return Kt===w?pt(Q,k,nt.props.children,_t,nt.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&ws(Kt)===k.type)?(k=u(k,nt.props),xo(k,nt),k.return=Q,k):(k=bl(nt.type,nt.key,nt.props,null,Q.mode,_t),xo(k,nt),k.return=Q,k)}function it(Q,k,nt,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==nt.containerInfo||k.stateNode.implementation!==nt.implementation?(k=zu(nt,Q.mode,_t),k.return=Q,k):(k=u(k,nt.children||[]),k.return=Q,k)}function pt(Q,k,nt,_t,Kt){return k===null||k.tag!==7?(k=bs(nt,Q.mode,_t,Kt),k.return=Q,k):(k=u(k,nt),k.return=Q,k)}function xt(Q,k,nt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Fu(""+k,Q.mode,nt),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return nt=bl(k.type,k.key,k.props,null,Q.mode,nt),xo(nt,k),nt.return=Q,nt;case T:return k=zu(k,Q.mode,nt),k.return=Q,k;case b:return k=ws(k),xt(Q,k,nt)}if(W(k)||K(k))return k=bs(k,Q.mode,nt,null),k.return=Q,k;if(typeof k.then=="function")return xt(Q,Ul(k),nt);if(k.$$typeof===N)return xt(Q,Rl(Q,k),nt);Ll(Q,k)}return null}function ot(Q,k,nt,_t){var Kt=k!==null?k.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Kt!==null?null:R(Q,k,""+nt,_t);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:return nt.key===Kt?G(Q,k,nt,_t):null;case T:return nt.key===Kt?it(Q,k,nt,_t):null;case b:return nt=ws(nt),ot(Q,k,nt,_t)}if(W(nt)||K(nt))return Kt!==null?null:pt(Q,k,nt,_t,null);if(typeof nt.then=="function")return ot(Q,k,Ul(nt),_t);if(nt.$$typeof===N)return ot(Q,k,Rl(Q,nt),_t);Ll(Q,nt)}return null}function ft(Q,k,nt,_t,Kt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get(nt)||null,R(k,Q,""+_t,Kt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case y:return Q=Q.get(_t.key===null?nt:_t.key)||null,G(k,Q,_t,Kt);case T:return Q=Q.get(_t.key===null?nt:_t.key)||null,it(k,Q,_t,Kt);case b:return _t=ws(_t),ft(Q,k,nt,_t,Kt)}if(W(_t)||K(_t))return Q=Q.get(nt)||null,pt(k,Q,_t,Kt,null);if(typeof _t.then=="function")return ft(Q,k,nt,Ul(_t),Kt);if(_t.$$typeof===N)return ft(Q,k,nt,Rl(k,_t),Kt);Ll(k,_t)}return null}function Wt(Q,k,nt,_t){for(var Kt=null,Ce=null,qt=k,ue=k=0,Ee=null;qt!==null&&ue<nt.length;ue++){qt.index>ue?(Ee=qt,qt=null):Ee=qt.sibling;var we=ot(Q,qt,nt[ue],_t);if(we===null){qt===null&&(qt=Ee);break}e&&qt&&we.alternate===null&&n(Q,qt),k=f(we,k,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we,qt=Ee}if(ue===nt.length)return a(Q,qt),be&&na(Q,ue),Kt;if(qt===null){for(;ue<nt.length;ue++)qt=xt(Q,nt[ue],_t),qt!==null&&(k=f(qt,k,ue),Ce===null?Kt=qt:Ce.sibling=qt,Ce=qt);return be&&na(Q,ue),Kt}for(qt=o(qt);ue<nt.length;ue++)Ee=ft(qt,Q,ue,nt[ue],_t),Ee!==null&&(e&&Ee.alternate!==null&&qt.delete(Ee.key===null?ue:Ee.key),k=f(Ee,k,ue),Ce===null?Kt=Ee:Ce.sibling=Ee,Ce=Ee);return e&&qt.forEach(function(ns){return n(Q,ns)}),be&&na(Q,ue),Kt}function $t(Q,k,nt,_t){if(nt==null)throw Error(s(151));for(var Kt=null,Ce=null,qt=k,ue=k=0,Ee=null,we=nt.next();qt!==null&&!we.done;ue++,we=nt.next()){qt.index>ue?(Ee=qt,qt=null):Ee=qt.sibling;var ns=ot(Q,qt,we.value,_t);if(ns===null){qt===null&&(qt=Ee);break}e&&qt&&ns.alternate===null&&n(Q,qt),k=f(ns,k,ue),Ce===null?Kt=ns:Ce.sibling=ns,Ce=ns,qt=Ee}if(we.done)return a(Q,qt),be&&na(Q,ue),Kt;if(qt===null){for(;!we.done;ue++,we=nt.next())we=xt(Q,we.value,_t),we!==null&&(k=f(we,k,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return be&&na(Q,ue),Kt}for(qt=o(qt);!we.done;ue++,we=nt.next())we=ft(qt,Q,ue,we.value,_t),we!==null&&(e&&we.alternate!==null&&qt.delete(we.key===null?ue:we.key),k=f(we,k,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return e&&qt.forEach(function(CM){return n(Q,CM)}),be&&na(Q,ue),Kt}function ke(Q,k,nt,_t){if(typeof nt=="object"&&nt!==null&&nt.type===w&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case y:t:{for(var Kt=nt.key;k!==null;){if(k.key===Kt){if(Kt=nt.type,Kt===w){if(k.tag===7){a(Q,k.sibling),_t=u(k,nt.props.children),_t.return=Q,Q=_t;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&ws(Kt)===k.type){a(Q,k.sibling),_t=u(k,nt.props),xo(_t,nt),_t.return=Q,Q=_t;break t}a(Q,k);break}else n(Q,k);k=k.sibling}nt.type===w?(_t=bs(nt.props.children,Q.mode,_t,nt.key),_t.return=Q,Q=_t):(_t=bl(nt.type,nt.key,nt.props,null,Q.mode,_t),xo(_t,nt),_t.return=Q,Q=_t)}return v(Q);case T:t:{for(Kt=nt.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===nt.containerInfo&&k.stateNode.implementation===nt.implementation){a(Q,k.sibling),_t=u(k,nt.children||[]),_t.return=Q,Q=_t;break t}else{a(Q,k);break}else n(Q,k);k=k.sibling}_t=zu(nt,Q.mode,_t),_t.return=Q,Q=_t}return v(Q);case b:return nt=ws(nt),ke(Q,k,nt,_t)}if(W(nt))return Wt(Q,k,nt,_t);if(K(nt)){if(Kt=K(nt),typeof Kt!="function")throw Error(s(150));return nt=Kt.call(nt),$t(Q,k,nt,_t)}if(typeof nt.then=="function")return ke(Q,k,Ul(nt),_t);if(nt.$$typeof===N)return ke(Q,k,Rl(Q,nt),_t);Ll(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,k!==null&&k.tag===6?(a(Q,k.sibling),_t=u(k,nt),_t.return=Q,Q=_t):(a(Q,k),_t=Fu(nt,Q.mode,_t),_t.return=Q,Q=_t),v(Q)):a(Q,k)}return function(Q,k,nt,_t){try{vo=0;var Kt=ke(Q,k,nt,_t);return cr=null,Kt}catch(qt){if(qt===lr||qt===wl)throw qt;var Ce=ii(29,qt,null,Q.mode);return Ce.lanes=_t,Ce.return=Q,Ce}}}var Us=Mm(!0),ym=Mm(!1),Ba=!1;function Ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(e),sm(e,null,a),n}return yl(e,o,n,a),El(e)}function So(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gi(e,a)}}function Ju(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var $u=!1;function Mo(){if($u){var e=or;if(e!==null)throw e}}function yo(e,n,a,o){$u=!1;var u=e.updateQueue;Ba=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,it=G.next;G.next=null,v===null?f=it:v.next=it,v=G;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,R=pt.lastBaseUpdate,R!==v&&(R===null?pt.firstBaseUpdate=it:R.next=it,pt.lastBaseUpdate=G))}if(f!==null){var xt=u.baseState;v=0,pt=it=G=null,R=f;do{var ot=R.lane&-536870913,ft=ot!==R.lane;if(ft?(ye&ot)===ot:(o&ot)===ot){ot!==0&&ot===rr&&($u=!0),pt!==null&&(pt=pt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=e,$t=R;ot=n;var ke=a;switch($t.tag){case 1:if(Wt=$t.payload,typeof Wt=="function"){xt=Wt.call(ke,xt,ot);break t}xt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=$t.payload,ot=typeof Wt=="function"?Wt.call(ke,xt,ot):Wt,ot==null)break t;xt=x({},xt,ot);break t;case 2:Ba=!0}}ot=R.callback,ot!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pt===null?(it=pt=ft,G=xt):pt=pt.next=ft,v|=ot;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);pt===null&&(G=xt),u.baseState=G,u.firstBaseUpdate=it,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),ja|=v,e.lanes=v,e.memoizedState=xt}}function Em(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function bm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Em(a[e],n)}var ur=F(null),Nl=F(0);function Tm(e,n){e=da,St(Nl,e),St(ur,n),da=e|n.baseLanes}function tf(){St(Nl,da),St(ur,ur.current)}function ef(){da=Nl.current,J(ur),J(Nl)}var ai=F(null),yi=null;function Va(e){var n=e.alternate;St(un,un.current&1),St(ai,e),yi===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(yi=e)}function nf(e){St(un,un.current),St(ai,e),yi===null&&(yi=e)}function Am(e){e.tag===22?(St(un,un.current),St(ai,e),yi===null&&(yi=e)):ka()}function ka(){St(un,un.current),St(ai,ai.current)}function si(e){J(ai),yi===e&&(yi=null),J(un)}var un=F(0);function Ol(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ch(a)||uh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,le=null,Ge=null,pn=null,Pl=!1,fr=!1,Ls=!1,Il=0,Eo=0,hr=null,vS=0;function an(){throw Error(s(321))}function af(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ni(e[a],n[a]))return!1;return!0}function sf(e,n,a,o,u,f){return sa=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?cg:Sf,Ls=!1,f=a(o,u),Ls=!1,fr&&(f=Cm(n,a,o,u)),Rm(e),f}function Rm(e){L.H=Ao;var n=Ge!==null&&Ge.next!==null;if(sa=0,pn=Ge=le=null,Pl=!1,Eo=0,hr=null,n)throw Error(s(300));e===null||mn||(e=e.dependencies,e!==null&&Al(e)&&(mn=!0))}function Cm(e,n,a,o){le=e;var u=0;do{if(fr&&(hr=null),Eo=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,pn=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=ug,f=n(a,o)}while(fr);return f}function xS(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?bo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(le.flags|=1024),n}function rf(){var e=Il!==0;return Il=0,e}function of(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function lf(e){if(Pl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Pl=!1}sa=0,pn=Ge=le=null,fr=!1,Eo=Il=0,hr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?le.memoizedState=pn=e:pn=pn.next=e,pn}function fn(){if(Ge===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=pn===null?le.memoizedState:pn.next;if(n!==null)pn=n,Ge=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},pn===null?le.memoizedState=pn=e:pn=pn.next=e}return pn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(e){var n=Eo;return Eo+=1,hr===null&&(hr=[]),e=vm(hr,e,n),n=le,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?cg:Sf),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bo(e);if(e.$$typeof===N)return wn(e)}throw Error(s(438,String(e)))}function cf(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=X;return n.index++,a}function ra(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=fn();return uf(n,Ge,e)}function uf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=v=null,G=null,it=n,pt=!1;do{var xt=it.lane&-536870913;if(xt!==it.lane?(ye&xt)===xt:(sa&xt)===xt){var ot=it.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),xt===rr&&(pt=!0);else if((sa&ot)===ot){it=it.next,ot===rr&&(pt=!0);continue}else xt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(R=G=xt,v=f):G=G.next=xt,le.lanes|=ot,ja|=ot;xt=it.action,Ls&&a(f,xt),f=it.hasEagerState?it.eagerState:a(f,xt)}else ot={lane:xt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(R=G=ot,v=f):G=G.next=ot,le.lanes|=xt,ja|=xt;it=it.next}while(it!==null&&it!==n);if(G===null?v=f:G.next=R,!ni(f,e.memoizedState)&&(mn=!0,pt&&(a=or,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ff(e){var n=fn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);ni(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function wm(e,n,a){var o=le,u=fn(),f=be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!ni((Ge||u).memoizedState,a);if(v&&(u.memoizedState=a,mn=!0),u=u.queue,pf(Lm.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,dr(9,{destroy:void 0},Um.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));f||(sa&127)!==0||Dm(o,n,a)}return a}function Dm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Fl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Um(e,n,a,o){n.value=a,n.getSnapshot=o,Nm(n)&&Om(e)}function Lm(e,n,a){return a(function(){Nm(n)&&Om(e)})}function Nm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ni(e,a)}catch{return!0}}function Om(e){var n=Es(e,2);n!==null&&Yn(n,e,2)}function hf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),Ls){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},n}function Pm(e,n,a,o){return e.baseState=a,uf(e,Ge,typeof o=="function"?o:ra)}function SS(e,n,a,o,u){if(Vl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Im(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Im(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=L.T,v={};L.T=v;try{var R=a(u,o),G=L.S;G!==null&&G(v,R),Fm(e,n,R)}catch(it){df(e,n,it)}finally{f!==null&&v.types!==null&&(f.types=v.types),L.T=f}}else try{f=a(u,o),Fm(e,n,f)}catch(it){df(e,n,it)}}function Fm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){zm(e,n,o)},function(o){return df(e,n,o)}):zm(e,n,a)}function zm(e,n,a){n.status="fulfilled",n.value=a,Bm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Im(e,a)))}function df(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Bm(n),n=n.next;while(n!==o)}e.action=null}function Bm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Hm(e,n){return n}function Gm(e,n){if(be){var a=qe.formState;if(a!==null){t:{var o=le;if(be){if(Ze){e:{for(var u=Ze,f=Mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ei(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=Ei(u.nextSibling),o=u.data==="F!";break t}}Fa(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:n},a.queue=o,a=rg.bind(null,le,o),o.dispatch=a,o=hf(!1),f=xf.bind(null,le,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=SS.bind(null,le,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Vm(e){var n=fn();return km(n,Ge,e)}function km(e,n,a){if(n=uf(e,n,Hm)[0],e=Bl(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=bo(n)}catch(v){throw v===lr?wl:v}else o=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,dr(9,{destroy:void 0},MS.bind(null,u,a),null)),[o,f,e]}function MS(e,n){e.action=n}function Xm(e){var n=fn(),a=Ge;if(a!==null)return km(n,a,e);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function dr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=Fl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Wm(){return fn().memoizedState}function Hl(e,n,a,o){var u=Bn();le.flags|=e,u.memoizedState=dr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Gl(e,n,a,o){var u=fn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ge!==null&&o!==null&&af(o,Ge.memoizedState.deps)?u.memoizedState=dr(n,f,a,o):(le.flags|=e,u.memoizedState=dr(1|n,f,a,o))}function jm(e,n){Hl(8390656,8,e,n)}function pf(e,n){Gl(2048,8,e,n)}function yS(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Fl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function qm(e){var n=fn().memoizedState;return yS({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Ym(e,n){return Gl(4,2,e,n)}function Zm(e,n){return Gl(4,4,e,n)}function Km(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qm(e,n,a){a=a!=null?a.concat([e]):null,Gl(4,4,Km.bind(null,n,e),a)}function mf(){}function Jm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&af(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function $m(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&af(n,o[1]))return o[0];if(o=e(),Ls){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o}function gf(e,n,a){return a===void 0||(sa&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=t0(),le.lanes|=e,ja|=e,a)}function tg(e,n,a,o){return ni(a,n)?a:ur.current!==null?(e=gf(e,a,o),ni(e,n)||(mn=!0),e):(sa&42)===0||(sa&1073741824)!==0&&(ye&261930)===0?(mn=!0,e.memoizedState=a):(e=t0(),le.lanes|=e,ja|=e,n)}function eg(e,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var v=L.T,R={};L.T=R,xf(e,!1,n,a);try{var G=u(),it=L.S;if(it!==null&&it(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pt=_S(G,o);To(e,n,pt,li(e))}else To(e,n,o,li(e))}catch(xt){To(e,n,{then:function(){},status:"rejected",reason:xt},li())}finally{H.p=f,v!==null&&R.types!==null&&(v.types=R.types),L.T=v}}function ES(){}function _f(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=ng(e).queue;eg(e,u,n,et,a===null?ES:function(){return ig(e),a(o)})}function ng(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ig(e){var n=ng(e);n.next===null&&(n=e.alternate.memoizedState),To(e,n.next.queue,{},li())}function vf(){return wn(Vo)}function ag(){return fn().memoizedState}function sg(){return fn().memoizedState}function bS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();e=Ha(a);var o=Ga(n,e,a);o!==null&&(Yn(o,n,a),So(o,n,a)),n={cache:ju()},e.payload=n;return}n=n.return}}function TS(e,n,a){var o=li();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(e)?og(n,a):(a=Pu(e,n,a,o),a!==null&&(Yn(a,e,o),lg(a,n,o)))}function rg(e,n,a){var o=li();To(e,n,a,o)}function To(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(e))og(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,R=f(v,a);if(u.hasEagerState=!0,u.eagerState=R,ni(R,v))return yl(e,n,u,0),qe===null&&Ml(),!1}catch{}if(a=Pu(e,n,u,o),a!==null)return Yn(a,e,o),lg(a,n,o),!0}return!1}function xf(e,n,a,o){if(o={lane:2,revertLane:Qf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(e)){if(n)throw Error(s(479))}else n=Pu(e,a,o,2),n!==null&&Yn(n,e,2)}function Vl(e){var n=e.alternate;return e===le||n!==null&&n===le}function og(e,n){fr=Pl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function lg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,gi(e,a)}}var Ao={readContext:wn,use:zl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Ao.useEffectEvent=an;var cg={readContext:wn,use:zl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:jm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Hl(4194308,4,Km.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Hl(4194308,4,e,n)},useInsertionEffect:function(e,n){Hl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(Ls){Pt(!0);try{e()}finally{Pt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(Ls){Pt(!0);try{a(n)}finally{Pt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=TS.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=hf(e);var n=e.queue,a=rg.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:mf,useDeferredValue:function(e,n){var a=Bn();return gf(a,e,n)},useTransition:function(){var e=hf(!1);return e=eg.bind(null,le,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=Bn();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(ye&127)!==0||Dm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,jm(Lm.bind(null,o,f,e),[e]),o.flags|=2048,dr(9,{destroy:void 0},Um.bind(null,o,f,a,n),null),a},useId:function(){var e=Bn(),n=qe.identifierPrefix;if(be){var a=Bi,o=zi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=vS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:vf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:cf,useCacheRefresh:function(){return Bn().memoizedState=bS.bind(null,le)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:wn,use:zl,useCallback:Jm,useContext:wn,useEffect:pf,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:$m,useReducer:Bl,useRef:Wm,useState:function(){return Bl(ra)},useDebugValue:mf,useDeferredValue:function(e,n){var a=fn();return tg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Bl(ra)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:wm,useId:ag,useHostTransitionStatus:vf,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,n){var a=fn();return Pm(a,Ge,e,n)},useMemoCache:cf,useCacheRefresh:sg};Sf.useEffectEvent=qm;var ug={readContext:wn,use:zl,useCallback:Jm,useContext:wn,useEffect:pf,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:$m,useReducer:ff,useRef:Wm,useState:function(){return ff(ra)},useDebugValue:mf,useDeferredValue:function(e,n){var a=fn();return Ge===null?gf(a,e,n):tg(a,Ge.memoizedState,e,n)},useTransition:function(){var e=ff(ra)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:wm,useId:ag,useHostTransitionStatus:vf,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,n){var a=fn();return Ge!==null?Pm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:sg};ug.useEffectEvent=qm;function Mf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=li(),u=Ha(o);u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(Yn(n,e,o),So(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=li(),u=Ha(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ga(e,u,o),n!==null&&(Yn(n,e,o),So(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=li(),o=Ha(a);o.tag=2,n!=null&&(o.callback=n),n=Ga(e,o,a),n!==null&&(Yn(n,e,a),So(n,e,a))}};function fg(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(u,f):!0}function hg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&yf.enqueueReplaceState(n,n.state,null)}function Ns(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function dg(e){Sl(e)}function pg(e){console.error(e)}function mg(e){Sl(e)}function kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function gg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ef(e,n,a){return a=Ha(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(e,n)},a}function _g(e){return e=Ha(e),e.tag=3,e}function vg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){gg(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){gg(n,a,o),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function AS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=ai.current,a!==null){switch(a.tag){case 31:case 13:return yi===null?ec():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yf(e,o,u)),!1;case 22:return a.flags|=65536,o===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yf(e,o,u)),!1}throw Error(s(435,a.tag))}return Yf(e,o,u),ec(),!1}if(be)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Gu&&(e=Error(s(422),{cause:o}),mo(vi(e,a)))):(o!==Gu&&(n=Error(s(423),{cause:o}),mo(vi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=vi(o,a),u=Ef(e.stateNode,o,u),Ju(e,u),sn!==4&&(sn=2)),!1;var f=Error(s(520),{cause:o});if(f=vi(f,a),Oo===null?Oo=[f]:Oo.push(f),sn!==4&&(sn=2),n===null)return!0;o=vi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Ef(a.stateNode,o,e),Ju(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=_g(u),vg(u,e,a,o),Ju(a,u),!1}a=a.return}while(a!==null);return!1}var bf=Error(s(461)),mn=!1;function Dn(e,n,a,o){n.child=e===null?ym(n,null,a,o):Us(n,e.child,a,o)}function xg(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var R in o)R!=="ref"&&(v[R]=o[R])}else v=o;return Rs(n),o=sf(e,n,a,v,f,u),R=rf(),e!==null&&!mn?(of(e,n,u),oa(e,n,u)):(be&&R&&Bu(n),n.flags|=1,Dn(e,n,o,u),n.child)}function Sg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Mg(e,n,f,o,u)):(e=bl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Lf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(v,o)&&e.ref===n.ref)return oa(e,n,u)}return n.flags|=1,e=ea(f,o),e.ref=n.ref,e.return=n,n.child=e}function Mg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(fo(f,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=f,Lf(e,u))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,oa(e,n,u)}return Tf(e,n,a,o,u)}function yg(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Eg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cl(n,f!==null?f.cachePool:null),f!==null?Tm(n,f):tf(),Am(n);else return o=n.lanes=536870912,Eg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Cl(n,f.cachePool),Tm(n,f),ka(),n.memoizedState=null):(e!==null&&Cl(n,null),tf(),ka());return Dn(e,n,u,a),n.child}function Ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Eg(e,n,a,o,u){var f=Yu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Cl(n,null),tf(),Am(n),e!==null&&sr(e,n,o,!0),n.childLanes=u,null}function Xl(e,n){return n=jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function bg(e,n,a){return Us(n,e.child,null,a),e=Xl(n,n.pendingProps),e.flags|=2,si(n),n.memoizedState=null,e}function RS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(be){if(o.mode==="hidden")return e=Xl(n,o),n.lanes=536870912,Ro(null,e);if(nf(n),(e=Ze)?(e=I0(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=om(e),a.return=n,n.child=a,Cn=n,Ze=null)):e=null,e===null)throw Fa(n);return n.lanes=536870912,null}return Xl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(nf(n),u)if(n.flags&256)n.flags&=-257,n=bg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||sr(e,n,a,!1),u=(a&e.childLanes)!==0,mn||u){if(o=qe,o!==null&&(v=$n(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Es(e,v),Yn(o,e,v),bf;ec(),n=bg(e,n,a)}else e=f.treeContext,Ze=Ei(v.nextSibling),Cn=n,be=!0,Ia=null,Mi=!1,e!==null&&um(n,e),n=Xl(n,o),n.flags|=4096;return n}return e=ea(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Tf(e,n,a,o,u){return Rs(n),a=sf(e,n,a,o,void 0,u),o=rf(),e!==null&&!mn?(of(e,n,u),oa(e,n,u)):(be&&o&&Bu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function Tg(e,n,a,o,u,f){return Rs(n),n.updateQueue=null,a=Cm(n,o,a,u),Rm(e),o=rf(),e!==null&&!mn?(of(e,n,f),oa(e,n,f)):(be&&o&&Bu(n),n.flags|=1,Dn(e,n,a,f),n.child)}function Ag(e,n,a,o,u){if(Rs(n),n.stateNode===null){var f=er,v=a.contextType;typeof v=="object"&&v!==null&&(f=wn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ku(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?wn(v):er,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Mf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&yf.enqueueReplaceState(f,f.state,null),yo(n,o,f,u),Mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,G=Ns(a,R);f.props=G;var it=f.context,pt=a.contextType;v=er,typeof pt=="object"&&pt!==null&&(v=wn(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||it!==v)&&hg(n,f,o,v),Ba=!1;var ot=n.memoizedState;f.state=ot,yo(n,o,f,u),Mo(),it=n.memoizedState,R||ot!==it||Ba?(typeof xt=="function"&&(Mf(n,a,xt,o),it=n.memoizedState),(G=Ba||fg(n,a,G,o,ot,it,v))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=v,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Qu(e,n),v=n.memoizedProps,pt=Ns(a,v),f.props=pt,xt=n.pendingProps,ot=f.context,it=a.contextType,G=er,typeof it=="object"&&it!==null&&(G=wn(it)),R=a.getDerivedStateFromProps,(it=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==xt||ot!==G)&&hg(n,f,o,G),Ba=!1,ot=n.memoizedState,f.state=ot,yo(n,o,f,u),Mo();var ft=n.memoizedState;v!==xt||ot!==ft||Ba||e!==null&&e.dependencies!==null&&Al(e.dependencies)?(typeof R=="function"&&(Mf(n,a,R,o),ft=n.memoizedState),(pt=Ba||fg(n,a,pt,o,ot,ft,G)||e!==null&&e.dependencies!==null&&Al(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ft,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ft,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),f.props=o,f.state=ft,f.context=G,o=pt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Wl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Us(n,e.child,null,u),n.child=Us(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=oa(e,n,u),e}function Rg(e,n,a,o){return Ts(),n.flags|=256,Dn(e,n,a,o),n.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(e){return{baseLanes:e,cachePool:gm()}}function Cf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function Cg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(u?Va(n):ka(),(e=Ze)?(e=I0(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=om(e),a.return=n,n.child=a,Cn=n,Ze=null)):e=null,e===null)throw Fa(n);return uh(e)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(ka(),u=n.mode,R=jl({mode:"hidden",children:R},u),o=bs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(e,v,a),n.memoizedState=Af,Ro(null,o)):(Va(n),wf(n,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(Va(n),n.flags&=-257,n=Df(e,n,a)):n.memoizedState!==null?(ka(),n.child=e.child,n.flags|=128,n=null):(ka(),R=o.fallback,u=n.mode,o=jl({mode:"visible",children:o.children},u),R=bs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Us(n,e.child,null,a),o=n.child,o.memoizedState=Rf(a),o.childLanes=Cf(e,v,a),n.memoizedState=Af,n=Ro(null,o));else if(Va(n),uh(R)){if(v=R.nextSibling&&R.nextSibling.dataset,v)var it=v.dgst;v=it,o=Error(s(419)),o.stack="",o.digest=v,mo({value:o,source:null,stack:null}),n=Df(e,n,a)}else if(mn||sr(e,n,a,!1),v=(a&e.childLanes)!==0,mn||v){if(v=qe,v!==null&&(o=$n(v,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Es(e,o),Yn(v,e,o),bf;ch(R)||ec(),n=Df(e,n,a)}else ch(R)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Ze=Ei(R.nextSibling),Cn=n,be=!0,Ia=null,Mi=!1,e!==null&&um(n,e),n=wf(n,o.children),n.flags|=4096);return n}return u?(ka(),R=o.fallback,u=n.mode,G=e.child,it=G.sibling,o=ea(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,it!==null?R=ea(it,R):(R=bs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ro(null,o),o=n.child,R=e.child.memoizedState,R===null?R=Rf(a):(u=R.cachePool,u!==null?(G=dn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=gm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Cf(e,v,a),n.memoizedState=Af,Ro(e.child,o)):(Va(n),a=e.child,e=a.sibling,a=ea(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function wf(e,n){return n=jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jl(e,n){return e=ii(22,e,null,n),e.lanes=0,e}function Df(e,n,a){return Us(n,e.child,null,a),e=wf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Xu(e.return,n,a)}function Uf(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Dg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=un.current,R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,St(un,v),Dn(e,n,o,a),o=be?po:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wg(e,a,n);else if(e.tag===19)wg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ol(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ol(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Uf(n,!0,a,null,f,o);break;case"together":Uf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(sr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ea(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ea(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Lf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Al(e)))}function CS(e,n,a){switch(n.tag){case 3:Z(n,n.stateNode.containerInfo),za(n,dn,e.memoizedState.cache),Ts();break;case 27:case 5:te(n);break;case 4:Z(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,nf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Cg(e,n,a):(Va(n),e=oa(e,n,a),e!==null?e.sibling:null);Va(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(sr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Dg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(un,un.current),o)break;return null;case 22:return n.lanes=0,yg(e,n,a,n.pendingProps);case 24:za(n,dn,e.memoizedState.cache)}return oa(e,n,a)}function Ug(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!Lf(e,a)&&(n.flags&128)===0)return mn=!1,CS(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,be&&(n.flags&1048576)!==0&&cm(n,po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ws(n.elementType),n.type=e,typeof e=="function")Iu(e)?(o=Ns(e,o),n.tag=1,n=Ag(null,n,e,o,a)):(n.tag=0,n=Tf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===P){n.tag=11,n=xg(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=Sg(null,n,e,o,a);break t}}throw n=ut(e)||e,Error(s(306,n,""))}}return n;case 0:return Tf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ns(o,n.pendingProps),Ag(e,n,o,u,a);case 3:t:{if(Z(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Qu(e,n),yo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,za(n,dn,o),o!==f.cache&&Wu(n,[dn],a,!0),Mo(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Rg(e,n,o,a);break t}else if(o!==u){u=vi(Error(s(424)),n),mo(u),n=Rg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ze=Ei(e.firstChild),Cn=n,be=!0,Ia=null,Mi=!0,a=ym(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ts(),o===u){n=oa(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return Wl(e,n),e===null?(a=V0(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,o=lc(lt.current).createElement(a),o[cn]=n,o[Rn]=e,Un(o,a,e),hn(o),n.stateNode=o):n.memoizedState=V0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return te(n),e===null&&be&&(o=n.stateNode=B0(n.type,n.pendingProps,lt.current),Cn=n,Mi=!0,u=Ze,Qa(n.type)?(fh=u,Ze=Ei(o.firstChild)):Ze=u),Dn(e,n,n.pendingProps.children,a),Wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((u=o=Ze)&&(o=aM(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Cn=n,Ze=Ei(o.firstChild),Mi=!1,u=!0):u=!1),u||Fa(n)),te(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,rh(u,f)?o=null:v!==null&&rh(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=sf(e,n,xS,null,null,a),Vo._currentValue=u),Wl(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&be&&((e=a=Ze)&&(a=sM(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Cn=n,Ze=null,e=!0):e=!1),e||Fa(n)),null;case 13:return Cg(e,n,a);case 4:return Z(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Us(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return xg(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,za(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Rs(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return Sg(e,n,n.type,n.pendingProps,a);case 15:return Mg(e,n,n.type,n.pendingProps,a);case 19:return Dg(e,n,a);case 31:return RS(e,n,a);case 22:return yg(e,n,a,n.pendingProps);case 24:return Rs(n),o=wn(dn),e===null?(u=Yu(),u===null&&(u=qe,f=ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ku(n),za(n,dn,u)):((e.lanes&a)!==0&&(Qu(e,n),yo(n,null,null,a),Mo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),za(n,dn,o)):(o=f.cache,za(n,dn,o),o!==u.cache&&Wu(n,[dn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(e){e.flags|=4}function Nf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(a0())e.flags|=8192;else throw Ds=Dl,Zu}else e.flags&=-16777217}function Lg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!q0(n))if(a0())e.flags|=8192;else throw Ds=Dl,Zu}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Et():536870912,e.lanes|=n,_r|=n)}function Co(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function wS(e,n,a){var o=n.pendingProps;switch(Hu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(dn),Tt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ar(n)?la(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(la(n),f!==null?(Ke(n),Lg(n,f)):(Ke(n),Nf(n,u,null,o,a))):f?f!==e.memoizedState?(la(n),Ke(n),Lg(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&la(n),Ke(n),Nf(n,u,e,o,a)),null;case 27:if(Qt(n),a=lt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=At.current,ar(n)?fm(n):(e=B0(u,o,a),n.stateNode=e,la(n))}return Ke(n),null;case 5:if(Qt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=At.current,ar(n))fm(n);else{var v=lc(lt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[cn]=n,f[Rn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&la(n)}}return Ke(n),Nf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=lt.current,ar(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||C0(e.nodeValue,a)),e||Fa(n,!0)}else e=lc(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ar(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ar(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else Ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Ke(n),null);case 4:return Tt(),e===null&&eh(n.stateNode.containerInfo),Ke(n),null;case 10:return aa(n.type),Ke(n),null;case 19:if(J(un),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Co(o,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ol(e),f!==null){for(n.flags|=128,Co(o,!1),e=f.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)rm(a,e),a=a.sibling;return St(un,un.current&1|2),be&&na(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&wt()>Jl&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304)}else{if(!u)if(e=Ol(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!be)return Ke(n),null}else 2*wt()-o.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=wt(),e.sibling=null,a=un.current,St(un,u?a&1|2:a&1),be&&na(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return si(n),ef(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(Cs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(dn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function DS(e,n){switch(Hu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return aa(dn),Tt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));Ts()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(si(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ts()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(un),null;case 4:return Tt(),null;case 10:return aa(n.type),null;case 22:case 23:return si(n),ef(),e!==null&&J(Cs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return aa(dn),null;case 25:return null;default:return null}}function Ng(e,n){switch(Hu(n),n.tag){case 3:aa(dn),Tt();break;case 26:case 27:case 5:Qt(n);break;case 4:Tt();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:J(un);break;case 10:aa(n.type);break;case 22:case 23:si(n),ef(),e!==null&&J(Cs);break;case 24:aa(dn)}}function wo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(R){ze(n,n.return,R)}}function Xa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,u=n;var G=a,it=R;try{it()}catch(pt){ze(u,G,pt)}}}o=o.next}while(o!==f)}}catch(pt){ze(n,n.return,pt)}}function Og(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{bm(n,a)}catch(o){ze(e,e.return,o)}}}function Pg(e,n,a){a.props=Ns(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ze(e,n,o)}}function Do(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ze(e,n,u)}}function Hi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function Ig(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function Of(e,n,a){try{var o=e.stateNode;JS(o,e.type,a,n),o[Rn]=n}catch(u){ze(e,e.return,u)}}function Fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function Pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function If(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(If(e,n,a),e=e.sibling;e!==null;)If(e,n,a),e=e.sibling}function Yl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Yl(e,n,a),e=e.sibling;e!==null;)Yl(e,n,a),e=e.sibling}function zg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[cn]=e,n[Rn]=a}catch(f){ze(e,e.return,f)}}var ca=!1,gn=!1,Ff=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,En=null;function US(e,n){if(e=e.containerInfo,ah=mc,e=Qp(e),wu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,R=-1,G=-1,it=0,pt=0,xt=e,ot=null;e:for(;;){for(var ft;xt!==a||u!==0&&xt.nodeType!==3||(R=v+u),xt!==f||o!==0&&xt.nodeType!==3||(G=v+o),xt.nodeType===3&&(v+=xt.nodeValue.length),(ft=xt.firstChild)!==null;)ot=xt,xt=ft;for(;;){if(xt===e)break e;if(ot===a&&++it===u&&(R=v),ot===f&&++pt===o&&(G=v),(ft=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=ft}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(sh={focusedElem:e,selectionRange:a},mc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Wt=Ns(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){ze(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)lh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function Hg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),o&4&&wo(5,a);break;case 1:if(fa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){ze(a,a.return,v)}else{var u=Ns(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ze(a,a.return,v)}}o&64&&Og(a),o&512&&Do(a,a.return);break;case 3:if(fa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bm(e,n)}catch(v){ze(a,a.return,v)}}break;case 27:n===null&&o&4&&zg(a);case 26:case 5:fa(e,a),n===null&&o&4&&Ig(a),o&512&&Do(a,a.return);break;case 12:fa(e,a);break;case 31:fa(e,a),o&4&&kg(e,a);break;case 13:fa(e,a),o&4&&Xg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=HS.bind(null,a),rM(e,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||gn,u=ca;var f=gn;ca=o,(gn=n)&&!f?ha(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),ca=u,gn=f}break;case 30:break;default:fa(e,a)}}function Gg(e){var n=e.alternate;n!==null&&(e.alternate=null,Gg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&io(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Xn=!1;function ua(e,n,a){for(a=a.child;a!==null;)Vg(e,n,a),a=a.sibling}function Vg(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:gn||Hi(a,n),ua(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Hi(a,n);var o=tn,u=Xn;Qa(a.type)&&(tn=a.stateNode,Xn=!1),ua(e,n,a),Bo(a.stateNode),tn=o,Xn=u;break;case 5:gn||Hi(a,n);case 6:if(o=tn,u=Xn,tn=null,ua(e,n,a),tn=o,Xn=u,tn!==null)if(Xn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{tn.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:tn!==null&&(Xn?(e=tn,O0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tr(e)):O0(tn,a.stateNode));break;case 4:o=tn,u=Xn,tn=a.stateNode.containerInfo,Xn=!0,ua(e,n,a),tn=o,Xn=u;break;case 0:case 11:case 14:case 15:Xa(2,a,n),gn||Xa(4,a,n),ua(e,n,a);break;case 1:gn||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Pg(a,n,o)),ua(e,n,a);break;case 21:ua(e,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,ua(e,n,a),gn=o;break;default:ua(e,n,a)}}function kg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tr(e)}catch(a){ze(n,n.return,a)}}}function Xg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(a){ze(n,n.return,a)}}function LS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Bg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Bg),n;default:throw Error(s(435,e.tag))}}function Zl(e,n){var a=LS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=GS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,R=v;t:for(;R!==null;){switch(R.tag){case 27:if(Qa(R.type)){tn=R.stateNode,Xn=!1;break t}break;case 5:tn=R.stateNode,Xn=!1;break t;case 3:case 4:tn=R.stateNode.containerInfo,Xn=!0;break t}R=R.return}if(tn===null)throw Error(s(160));Vg(f,v,u),tn=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wg(n,e),n=n.sibling}var Di=null;function Wg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),jn(e),o&4&&(Xa(3,e,e.return),wo(3,e),Xa(5,e,e.return));break;case 1:Wn(n,e),jn(e),o&512&&(gn||a===null||Hi(a,a.return)),o&64&&ca&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Di;if(Wn(n,e),jn(e),o&512&&(gn||a===null||Hi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[wa]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[cn]=e,hn(f),o=f;break t;case"link":var v=W0("link","href",u).get(o+(a.href||""));if(v){for(var R=0;R<v.length;R++)if(f=v[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(R,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(v=W0("meta","content",u).get(o+(a.content||""))){for(R=0;R<v.length;R++)if(f=v[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(R,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[cn]=e,hn(f),o=f}e.stateNode=o}else j0(u,e.type,e.stateNode);else e.stateNode=X0(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?j0(u,e.type,e.stateNode):X0(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Of(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),jn(e),o&512&&(gn||a===null||Hi(a,a.return)),a!==null&&o&4&&Of(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),jn(e),o&512&&(gn||a===null||Hi(a,a.return)),e.flags&32){u=e.stateNode;try{ei(u,"")}catch(Wt){ze(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Of(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Wn(n,e),jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){ze(e,e.return,Wt)}}break;case 3:if(fc=null,u=Di,Di=cc(n.containerInfo),Wn(n,e),Di=u,jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(Wt){ze(e,e.return,Wt)}Ff&&(Ff=!1,jg(e));break;case 4:o=Di,Di=cc(e.stateNode.containerInfo),Wn(n,e),jn(e),Di=o;break;case 12:Wn(n,e),jn(e);break;case 31:Wn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 13:Wn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=wt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,it=ca,pt=gn;if(ca=it||u,gn=pt||G,Wn(n,e),gn=pt,ca=it,jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ca||gn||Os(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{R=G.stateNode;var xt=G.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;R.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Wt){ze(G,G.return,Wt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Wt){ze(G,G.return,Wt)}}}else if(n.tag===18){if(a===null){G=n;try{var ft=G.stateNode;u?P0(ft,!0):P0(G.stateNode,!1)}catch(Wt){ze(G,G.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Zl(e,a))));break;case 19:Wn(n,e),jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Fg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Pf(e);Yl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(ei(v,""),a.flags&=-33);var R=Pf(e);Yl(e,R,v);break;case 3:case 4:var G=a.stateNode.containerInfo,it=Pf(e);If(e,it,G);break;default:throw Error(s(161))}}catch(pt){ze(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function jg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;jg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function fa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Hg(e,n.alternate,n),n=n.sibling}function Os(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Os(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Pg(n,n.return,a),Os(n);break;case 27:Bo(n.stateNode);case 26:case 5:Hi(n,n.return),Os(n);break;case 22:n.memoizedState===null&&Os(n);break;case 30:Os(n);break;default:Os(n)}e=e.sibling}}function ha(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,a),wo(4,f);break;case 1:if(ha(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){ze(o,o.return,it)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Em(G[u],R)}catch(it){ze(o,o.return,it)}}a&&v&64&&Og(f),Do(f,f.return);break;case 27:zg(f);case 26:case 5:ha(u,f,a),a&&o===null&&v&4&&Ig(f),Do(f,f.return);break;case 12:ha(u,f,a);break;case 31:ha(u,f,a),a&&v&4&&kg(u,f);break;case 13:ha(u,f,a),a&&v&4&&Xg(u,f);break;case 22:f.memoizedState===null&&ha(u,f,a),Do(f,f.return);break;case 30:break;default:ha(u,f,a)}n=n.sibling}}function zf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&go(a))}function Bf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e))}function Ui(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qg(e,n,a,o),n=n.sibling}function qg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(e,n,a,o),u&2048&&wo(9,n);break;case 1:Ui(e,n,a,o);break;case 3:Ui(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e)));break;case 12:if(u&2048){Ui(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,R=f.onPostCommit;typeof R=="function"&&R(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){ze(n,n.return,G)}}else Ui(e,n,a,o);break;case 31:Ui(e,n,a,o);break;case 13:Ui(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ui(e,n,a,o):Uo(e,n):f._visibility&2?Ui(e,n,a,o):(f._visibility|=2,pr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&zf(v,n);break;case 24:Ui(e,n,a,o),u&2048&&Bf(n.alternate,n);break;default:Ui(e,n,a,o)}}function pr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,R=a,G=o,it=v.flags;switch(v.tag){case 0:case 11:case 15:pr(f,v,R,G,u),wo(8,v);break;case 23:break;case 22:var pt=v.stateNode;v.memoizedState!==null?pt._visibility&2?pr(f,v,R,G,u):Uo(f,v):(pt._visibility|=2,pr(f,v,R,G,u)),u&&it&2048&&zf(v.alternate,v);break;case 24:pr(f,v,R,G,u),u&&it&2048&&Bf(v.alternate,v);break;default:pr(f,v,R,G,u)}n=n.sibling}}function Uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Uo(a,o),u&2048&&zf(o.alternate,o);break;case 24:Uo(a,o),u&2048&&Bf(o.alternate,o);break;default:Uo(a,o)}n=n.sibling}}var Lo=8192;function mr(e,n,a){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)Yg(e,n,a),e=e.sibling}function Yg(e,n,a){switch(e.tag){case 26:mr(e,n,a),e.flags&Lo&&e.memoizedState!==null&&vM(a,Di,e.memoizedState,e.memoizedProps);break;case 5:mr(e,n,a);break;case 3:case 4:var o=Di;Di=cc(e.stateNode.containerInfo),mr(e,n,a),Di=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Lo,Lo=16777216,mr(e,n,a),Lo=o):mr(e,n,a));break;default:mr(e,n,a)}}function Zg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function No(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Qg(o,e)}Zg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Kg(e),e=e.sibling}function Kg(e){switch(e.tag){case 0:case 11:case 15:No(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:No(e);break;case 12:No(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Kl(e)):No(e);break;default:No(e)}}function Kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Qg(o,e)}Zg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}e=e.sibling}}function Qg(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,f=o.return;if(Gg(o),o===a){En=null;break t}if(u!==null){u.return=f,En=u;break t}En=f}}}var NS={getCacheForType:function(e){var n=wn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(dn).controller.signal}},OS=typeof WeakMap=="function"?WeakMap:Map,Ue=0,qe=null,ve=null,ye=0,Fe=0,ri=null,Wa=!1,gr=!1,Hf=!1,da=0,sn=0,ja=0,Ps=0,Gf=0,oi=0,_r=0,Oo=null,qn=null,Vf=!1,Ql=0,Jg=0,Jl=1/0,$l=null,qa=null,xn=0,Ya=null,vr=null,pa=0,kf=0,Xf=null,$g=null,Po=0,Wf=null;function li(){return(Ue&2)!==0&&ye!==0?ye&-ye:L.T!==null?Qf():to()}function t0(){if(oi===0)if((ye&536870912)===0||be){var e=ge;ge<<=1,(ge&3932160)===0&&(ge=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function Yn(e,n,a){(e===qe&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(xr(e,0),Za(e,ye,oi,!1)),ee(e,a),((Ue&2)===0||e!==qe)&&(e===qe&&((Ue&2)===0&&(Ps|=a),sn===4&&Za(e,ye,oi,!1)),Gi(e))}function e0(e,n,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=o?FS(e,n):qf(e,n,!0),f=o;do{if(u===0){gr&&!o&&Za(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!PS(a)){u=qf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var R=e;u=Oo;var G=R.current.memoizedState.isDehydrated;if(G&&(xr(R,v).flags|=256),v=qf(R,v,!1),v!==2){if(Hf&&!G){R.errorRecoveryDisabledLanes|=f,Ps|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){xr(e,0),Za(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Za(o,n,oi,!Wa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ql+300-wt(),10<u)){if(Za(o,n,oi,!Wa),gt(o,0,!0)!==0)break t;pa=n,o.timeoutHandle=L0(n0.bind(null,o,a,qn,$l,Vf,n,oi,Ps,_r,Wa,f,"Throttled",-0,0),u);break t}n0(o,a,qn,$l,Vf,n,oi,Ps,_r,Wa,f,null,-0,0)}}break}while(!0);Gi(e)}function n0(e,n,a,o,u,f,v,R,G,it,pt,xt,ot,ft){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},Yg(n,f,xt);var Wt=(f&62914560)===f?Ql-wt():(f&4194048)===f?Jg-wt():0;if(Wt=xM(xt,Wt),Wt!==null){pa=f,e.cancelPendingCommit=Wt(u0.bind(null,e,n,f,a,o,u,v,R,G,pt,xt,null,ot,ft)),Za(e,f,v,!it);return}}u0(e,n,f,a,o,u,v,R,G)}function PS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ni(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(e,n,a,o){n&=~Gf,n&=~Ps,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&De(e,a,n)}function tc(){return(Ue&6)===0?(Io(0),!1):!0}function jf(){if(ve!==null){if(Fe===0)var e=ve.return;else e=ve,ia=As=null,lf(e),cr=null,vo=0,e=ve;for(;e!==null;)Ng(e.alternate,e),e=e.return;ve=null}}function xr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,eM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),pa=0,jf(),qe=e,ve=a=ea(e.current,null),ye=n,Fe=0,ri=null,Wa=!1,gr=Bt(e,n),Hf=!1,_r=oi=Gf=Ps=ja=sn=0,qn=Oo=null,Vf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),f=1<<u;n|=e[u],o&=~f}return da=n,Ml(),a}function i0(e,n){le=null,L.H=Ao,n===lr||n===wl?(n=xm(),Fe=3):n===Zu?(n=xm(),Fe=4):Fe=n===bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ri=n,ve===null&&(sn=1,kl(e,vi(n,e.current)))}function a0(){var e=ai.current;return e===null?!0:(ye&4194048)===ye?yi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===yi:!1}function s0(){var e=L.H;return L.H=Ao,e===null?Ao:e}function r0(){var e=L.A;return L.A=NS,e}function ec(){sn=4,Wa||(ye&4194048)!==ye&&ai.current!==null||(gr=!0),(ja&134217727)===0&&(Ps&134217727)===0||qe===null||Za(qe,ye,oi,!1)}function qf(e,n,a){var o=Ue;Ue|=2;var u=s0(),f=r0();(qe!==e||ye!==n)&&($l=null,xr(e,n)),n=!1;var v=sn;t:do try{if(Fe!==0&&ve!==null){var R=ve,G=ri;switch(Fe){case 8:jf(),v=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var it=Fe;if(Fe=0,ri=null,Sr(e,R,G,it),a&&gr){v=0;break t}break;default:it=Fe,Fe=0,ri=null,Sr(e,R,G,it)}}IS(),v=sn;break}catch(pt){i0(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ia=As=null,Ue=o,L.H=u,L.A=f,ve===null&&(qe=null,ye=0,Ml()),v}function IS(){for(;ve!==null;)o0(ve)}function FS(e,n){var a=Ue;Ue|=2;var o=s0(),u=r0();qe!==e||ye!==n?($l=null,Jl=wt()+500,xr(e,n)):gr=Bt(e,n);t:do try{if(Fe!==0&&ve!==null){n=ve;var f=ri;e:switch(Fe){case 1:Fe=0,ri=null,Sr(e,n,f,1);break;case 2:case 9:if(_m(f)){Fe=0,ri=null,l0(n);break}n=function(){Fe!==2&&Fe!==9||qe!==e||(Fe=7),Gi(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:_m(f)?(Fe=0,ri=null,l0(n)):(Fe=0,ri=null,Sr(e,n,f,7));break;case 5:var v=null;switch(ve.tag){case 26:v=ve.memoizedState;case 5:case 27:var R=ve;if(v?q0(v):R.stateNode.complete){Fe=0,ri=null;var G=R.sibling;if(G!==null)ve=G;else{var it=R.return;it!==null?(ve=it,nc(it)):ve=null}break e}}Fe=0,ri=null,Sr(e,n,f,5);break;case 6:Fe=0,ri=null,Sr(e,n,f,6);break;case 8:jf(),sn=6;break t;default:throw Error(s(462))}}zS();break}catch(pt){i0(e,pt)}while(!0);return ia=As=null,L.H=o,L.A=u,Ue=a,ve!==null?0:(qe=null,ye=0,Ml(),sn)}function zS(){for(;ve!==null&&!pe();)o0(ve)}function o0(e){var n=Ug(e.alternate,e,da);e.memoizedProps=e.pendingProps,n===null?nc(e):ve=n}function l0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Tg(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Tg(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:lf(n);default:Ng(a,n),n=ve=rm(n,da),n=Ug(a,n,da)}e.memoizedProps=e.pendingProps,n===null?nc(e):ve=n}function Sr(e,n,a,o){ia=As=null,lf(n),cr=null,vo=0;var u=n.return;try{if(AS(e,u,n,a,ye)){sn=1,kl(e,vi(a,e.current)),ve=null;return}}catch(f){if(u!==null)throw ve=u,f;sn=1,kl(e,vi(a,e.current)),ve=null;return}n.flags&32768?(be||o===1?e=!0:gr||(ye&536870912)!==0?e=!1:(Wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),c0(n,e)):nc(n)}function nc(e){var n=e;do{if((n.flags&32768)!==0){c0(n,Wa);return}e=n.return;var a=wS(n.alternate,n,da);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);sn===0&&(sn=5)}function c0(e,n){do{var a=DS(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);sn=6,ve=null}function u0(e,n,a,o,u,f,v,R,G){e.cancelPendingCommit=null;do ic();while(xn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Ou,nn(e,a,f,v,R,G),e===qe&&(ve=qe=null,ye=0),vr=n,Ya=e,pa=a,kf=f,Xf=u,$g=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,VS(tt,function(){return m0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,u=H.p,H.p=2,v=Ue,Ue|=4;try{US(e,n,a)}finally{Ue=v,H.p=u,L.T=o}}xn=1,f0(),h0(),d0()}}function f0(){if(xn===1){xn=0;var e=Ya,n=vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=H.p;H.p=2;var u=Ue;Ue|=4;try{Wg(n,e);var f=sh,v=Qp(e.containerInfo),R=f.focusedElem,G=f.selectionRange;if(v!==R&&R&&R.ownerDocument&&Kp(R.ownerDocument.documentElement,R)){if(G!==null&&wu(R)){var it=G.start,pt=G.end;if(pt===void 0&&(pt=it),"selectionStart"in R)R.selectionStart=it,R.selectionEnd=Math.min(pt,R.value.length);else{var xt=R.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),Wt=R.textContent.length,$t=Math.min(G.start,Wt),ke=G.end===void 0?$t:Math.min(G.end,Wt);!ft.extend&&$t>ke&&(v=ke,ke=$t,$t=v);var Q=Zp(R,$t),k=Zp(R,ke);if(Q&&k&&(ft.rangeCount!==1||ft.anchorNode!==Q.node||ft.anchorOffset!==Q.offset||ft.focusNode!==k.node||ft.focusOffset!==k.offset)){var nt=xt.createRange();nt.setStart(Q.node,Q.offset),ft.removeAllRanges(),$t>ke?(ft.addRange(nt),ft.extend(k.node,k.offset)):(nt.setEnd(k.node,k.offset),ft.addRange(nt))}}}}for(xt=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&xt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xt.length;R++){var _t=xt[R];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}mc=!!ah,sh=ah=null}finally{Ue=u,H.p=o,L.T=a}}e.current=n,xn=2}}function h0(){if(xn===2){xn=0;var e=Ya,n=vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=H.p;H.p=2;var u=Ue;Ue|=4;try{Hg(e,n.alternate,n)}finally{Ue=u,H.p=o,L.T=a}}xn=3}}function d0(){if(xn===4||xn===3){xn=0,He();var e=Ya,n=vr,a=pa,o=$g;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,vr=Ya=null,p0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(qa=null),$r(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=L.T,u=H.p,H.p=2,L.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var R=o[v];f(R.value,{componentStack:R.stack})}}finally{L.T=n,H.p=u}}(pa&3)!==0&&ic(),Gi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Wf?Po++:(Po=0,Wf=e):Po=0,Io(0)}}function p0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,go(n)))}function ic(){return f0(),h0(),d0(),m0()}function m0(){if(xn!==5)return!1;var e=Ya,n=kf;kf=0;var a=$r(pa),o=L.T,u=H.p;try{H.p=32>a?32:a,L.T=null,a=Xf,Xf=null;var f=Ya,v=pa;if(xn=0,vr=Ya=null,pa=0,(Ue&6)!==0)throw Error(s(331));var R=Ue;if(Ue|=4,Kg(f.current),qg(f,f.current,v,a),Ue=R,Io(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ht,f)}catch{}return!0}finally{H.p=u,L.T=o,p0(e,n)}}function g0(e,n,a){n=vi(a,n),n=Ef(e.stateNode,n,2),e=Ga(e,n,2),e!==null&&(ee(e,2),Gi(e))}function ze(e,n,a){if(e.tag===3)g0(e,e,a);else for(;n!==null;){if(n.tag===3){g0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){e=vi(a,e),a=_g(2),o=Ga(n,a,2),o!==null&&(vg(a,o,n,e),ee(o,2),Gi(o));break}}n=n.return}}function Yf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new OS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Hf=!0,u.add(a),e=BS.bind(null,e,n,a),n.then(e,e))}function BS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(ye&a)===a&&(sn===4||sn===3&&(ye&62914560)===ye&&300>wt()-Ql?(Ue&2)===0&&xr(e,0):Gf|=a,_r===ye&&(_r=0)),Gi(e)}function _0(e,n){n===0&&(n=Et()),e=Es(e,n),e!==null&&(ee(e,n),Gi(e))}function HS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),_0(e,a)}function GS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),_0(e,a)}function VS(e,n){return q(e,n)}var ac=null,Mr=null,Zf=!1,sc=!1,Kf=!1,Ka=0;function Gi(e){e!==Mr&&e.next===null&&(Mr===null?ac=Mr=e:Mr=Mr.next=e),sc=!0,Zf||(Zf=!0,XS())}function Io(e,n){if(!Kf&&sc){Kf=!0;do for(var a=!1,o=ac;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(v&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,M0(o,f))}else f=ye,f=gt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Bt(o,f)||(a=!0,M0(o,f));o=o.next}while(a);Kf=!1}}function kS(){v0()}function v0(){sc=Zf=!1;var e=0;Ka!==0&&tM()&&(e=Ka);for(var n=wt(),a=null,o=ac;o!==null;){var u=o.next,f=x0(o,n);f===0?(o.next=null,a===null?ac=u:a.next=u,u===null&&(Mr=a)):(a=o,(e!==0||(f&3)!==0)&&(sc=!0)),o=u}xn!==0&&xn!==5||Io(e),Ka!==0&&(Ka=0)}function x0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-It(f),R=1<<v,G=u[v];G===-1?((R&a)===0||(R&o)!==0)&&(u[v]=Nt(R,n)):G<=n&&(e.expiredLanes|=R),f&=~R}if(n=qe,a=ye,a=gt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&en(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&en(o),$r(a)){case 2:case 8:a=E;break;case 32:a=tt;break;case 268435456:a=bt;break;default:a=tt}return o=S0.bind(null,e),a=q(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&en(o),e.callbackPriority=2,e.callbackNode=null,2}function S0(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ic()&&e.callbackNode!==a)return null;var o=ye;return o=gt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(e0(e,o,n),x0(e,wt()),e.callbackNode!=null&&e.callbackNode===a?S0.bind(null,e):null)}function M0(e,n){if(ic())return null;e0(e,n,!0)}function XS(){nM(function(){(Ue&6)!==0?q(D,kS):v0()})}function Qf(){if(Ka===0){var e=rr;e===0&&(e=ie,ie<<=1,(ie&261888)===0&&(ie=256)),Ka=e}return Ka}function y0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xs(""+e)}function E0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function WS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=y0((u[Rn]||null).action),v=o.submitter;v&&(n=(n=v[Rn]||null)?y0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var R=new _l("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ka!==0){var G=v?E0(u,v):new FormData(u);_f(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=v?E0(u,v):new FormData(u),_f(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Jf=0;Jf<Nu.length;Jf++){var $f=Nu[Jf],jS=$f.toLowerCase(),qS=$f[0].toUpperCase()+$f.slice(1);wi(jS,"on"+qS)}wi(tm,"onAnimationEnd"),wi(em,"onAnimationIteration"),wi(nm,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(cS,"onTransitionRun"),wi(uS,"onTransitionStart"),wi(fS,"onTransitionCancel"),wi(im,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function b0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var R=o[v],G=R.instance,it=R.currentTarget;if(R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=it;try{f(u)}catch(pt){Sl(pt)}u.currentTarget=null,f=G}else for(v=0;v<o.length;v++){if(R=o[v],G=R.instance,it=R.currentTarget,R=R.listener,G!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=it;try{f(u)}catch(pt){Sl(pt)}u.currentTarget=null,f=G}}}}function xe(e,n){var a=n[Ca];a===void 0&&(a=n[Ca]=new Set);var o=e+"__bubble";a.has(o)||(T0(n,e,2,!1),a.add(o))}function th(e,n,a){var o=0;n&&(o|=4),T0(a,e,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function eh(e){if(!e[rc]){e[rc]=!0,dl.forEach(function(a){a!=="selectionchange"&&(YS.has(a)||th(a,!1,e),th(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rc]||(n[rc]=!0,th("selectionchange",!1,n))}}function T0(e,n,a,o){switch(t_(n)){case 2:var u=yM;break;case 8:u=EM;break;default:u=gh}a=u.bind(null,n,a,e),u=void 0,!Su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function nh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var R=o.stateNode.containerInfo;if(R===u)break;if(v===4)for(v=o.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;R!==null;){if(v=Da(R),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){o=f=v;continue t}R=R.parentNode}}o=o.return}Dp(function(){var it=f,pt=vu(a),xt=[];t:{var ot=am.get(e);if(ot!==void 0){var ft=_l,Wt=e;switch(e){case"keypress":if(ml(a)===0)break t;case"keydown":case"keyup":ft=Gx;break;case"focusin":Wt="focus",ft=bu;break;case"focusout":Wt="blur",ft=bu;break;case"beforeblur":case"afterblur":ft=bu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Xx;break;case tm:case em:case nm:ft=Lx;break;case im:ft=jx;break;case"scroll":case"scrollend":ft=Rx;break;case"wheel":ft=Yx;break;case"copy":case"cut":case"paste":ft=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Pp;break;case"toggle":case"beforetoggle":ft=Kx}var $t=(n&4)!==0,ke=!$t&&(e==="scroll"||e==="scrollend"),Q=$t?ot!==null?ot+"Capture":null:ot;$t=[];for(var k=it,nt;k!==null;){var _t=k;if(nt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||nt===null||Q===null||(_t=ao(k,Q),_t!=null&&$t.push(zo(k,_t,nt))),ke)break;k=k.return}0<$t.length&&(ot=new ft(ot,Wt,null,a,pt),xt.push({event:ot,listeners:$t}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ot&&a!==_u&&(Wt=a.relatedTarget||a.fromElement)&&(Da(Wt)||Wt[Ji]))break t;if((ft||ot)&&(ot=pt.window===pt?pt:(ot=pt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?(Wt=a.relatedTarget||a.toElement,ft=it,Wt=Wt?Da(Wt):null,Wt!==null&&(ke=c(Wt),$t=Wt.tag,Wt!==ke||$t!==5&&$t!==27&&$t!==6)&&(Wt=null)):(ft=null,Wt=it),ft!==Wt)){if($t=Np,_t="onMouseLeave",Q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&($t=Pp,_t="onPointerLeave",Q="onPointerEnter",k="pointer"),ke=ft==null?ot:vs(ft),nt=Wt==null?ot:vs(Wt),ot=new $t(_t,k+"leave",ft,a,pt),ot.target=ke,ot.relatedTarget=nt,_t=null,Da(pt)===it&&($t=new $t(Q,k+"enter",Wt,a,pt),$t.target=nt,$t.relatedTarget=ke,_t=$t),ke=_t,ft&&Wt)e:{for($t=ZS,Q=ft,k=Wt,nt=0,_t=Q;_t;_t=$t(_t))nt++;_t=0;for(var Kt=k;Kt;Kt=$t(Kt))_t++;for(;0<nt-_t;)Q=$t(Q),nt--;for(;0<_t-nt;)k=$t(k),_t--;for(;nt--;){if(Q===k||k!==null&&Q===k.alternate){$t=Q;break e}Q=$t(Q),k=$t(k)}$t=null}else $t=null;ft!==null&&A0(xt,ot,ft,$t,!1),Wt!==null&&ke!==null&&A0(xt,ke,Wt,$t,!0)}}t:{if(ot=it?vs(it):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var Ce=kp;else if(Gp(ot))if(Xp)Ce=rS;else{Ce=aS;var qt=iS}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?it&&Le(it.elementType)&&(Ce=kp):Ce=sS;if(Ce&&(Ce=Ce(e,it))){Vp(xt,Ce,a,pt);break t}qt&&qt(e,ot,it),e==="focusout"&&it&&ot.type==="number"&&it.memoizedProps.value!=null&&_e(ot,"number",ot.value)}switch(qt=it?vs(it):window,e){case"focusin":(Gp(qt)||qt.contentEditable==="true")&&(Js=qt,Du=it,ho=null);break;case"focusout":ho=Du=Js=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Jp(xt,a,pt);break;case"selectionchange":if(lS)break;case"keydown":case"keyup":Jp(xt,a,pt)}var ue;if(Au)t:{switch(e){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Qs?Bp(e,a)&&(Ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(Ip&&a.locale!=="ko"&&(Qs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Qs&&(ue=Up()):(Oa=pt,Mu="value"in Oa?Oa.value:Oa.textContent,Qs=!0)),qt=oc(it,Ee),0<qt.length&&(Ee=new Op(Ee,e,null,a,pt),xt.push({event:Ee,listeners:qt}),ue?Ee.data=ue:(ue=Hp(a),ue!==null&&(Ee.data=ue)))),(ue=Jx?$x(e,a):tS(e,a))&&(Ee=oc(it,"onBeforeInput"),0<Ee.length&&(qt=new Op("onBeforeInput","beforeinput",null,a,pt),xt.push({event:qt,listeners:Ee}),qt.data=ue)),WS(xt,e,it,a,pt)}b0(xt,n)})}function zo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function oc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ao(e,a),u!=null&&o.unshift(zo(e,u,f)),u=ao(e,n),u!=null&&o.push(zo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function ZS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function A0(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var R=a,G=R.alternate,it=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||it===null||(G=it,u?(it=ao(a,f),it!=null&&v.unshift(zo(a,it,G))):u||(it=ao(a,f),it!=null&&v.push(zo(a,it,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var KS=/\r\n?/g,QS=/\u0000|\uFFFD/g;function R0(e){return(typeof e=="string"?e:""+e).replace(KS,`
`).replace(QS,"")}function C0(e,n){return n=R0(n),R0(e)===n}function Ve(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ei(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ei(e,""+o);break;case"className":Xt(e,"class",o);break;case"tabIndex":Xt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,o);break;case"style":Ci(e,o,f);break;case"data":if(n!=="object"){Xt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=xs(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=xs(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=$i);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=xs(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Ft(e,"popover",o);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ft(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fi.get(a)||a,Ft(e,a,o))}}function ih(e,n,a,o,u,f){switch(a){case"style":Ci(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?ei(e,o):(typeof o=="number"||typeof o=="bigint")&&ei(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Rn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ft(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,v,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var R=f=v=u=null,G=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":v=pt;break;case"checked":G=pt;break;case"defaultChecked":it=pt;break;case"value":f=pt;break;case"defaultValue":R=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Ve(e,n,o,pt,a,null)}}On(e,f,R,G,it,v,u,!1);return;case"select":xe("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":v=R;break;case"multiple":o=R;default:Ve(e,n,u,R,a,null)}n=f,a=v,e.multiple=!!o,n!=null?vn(e,!!o,n,!1):a!=null&&vn(e,!!o,a,!0);return;case"textarea":xe("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ve(e,n,v,R,a,null)}Ri(e,o,u,f);return;case"option":for(G in a)a.hasOwnProperty(G)&&(o=a[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,G,o,a,null));return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<Fo.length;o++)xe(Fo[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,it,o,a,null)}return;default:if(Le(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&ih(e,n,pt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Ve(e,n,R,o,a,null))}function JS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,R=null,G=null,it=null,pt=null;for(ft in a){var xt=a[ft];if(a.hasOwnProperty(ft)&&xt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=xt;default:o.hasOwnProperty(ft)||Ve(e,n,ft,null,o,xt)}}for(var ot in o){var ft=o[ot];if(xt=a[ot],o.hasOwnProperty(ot)&&(ft!=null||xt!=null))switch(ot){case"type":f=ft;break;case"name":u=ft;break;case"checked":it=ft;break;case"defaultChecked":pt=ft;break;case"value":v=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==xt&&Ve(e,n,ot,ft,o,xt)}}Gt(e,v,R,G,it,pt,f,u);return;case"select":ft=v=R=ot=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ft=G;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ot=f;break;case"defaultValue":R=f;break;case"multiple":v=f;default:f!==G&&Ve(e,n,u,f,o,G)}n=R,a=v,o=ft,ot!=null?vn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?vn(e,!!a,n,!0):vn(e,!!a,a?[]:"",!1));return;case"textarea":ft=ot=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ve(e,n,R,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ot=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(e,n,v,u,o,f)}ti(e,ot,ft);return;case"option":for(var Wt in a)ot=a[Wt],a.hasOwnProperty(Wt)&&ot!=null&&!o.hasOwnProperty(Wt)&&(Wt==="selected"?e.selected=!1:Ve(e,n,Wt,null,o,ot));for(G in o)ot=o[G],ft=a[G],o.hasOwnProperty(G)&&ot!==ft&&(ot!=null||ft!=null)&&(G==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ve(e,n,G,ot,o,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)ot=a[$t],a.hasOwnProperty($t)&&ot!=null&&!o.hasOwnProperty($t)&&Ve(e,n,$t,null,o,ot);for(it in o)if(ot=o[it],ft=a[it],o.hasOwnProperty(it)&&ot!==ft&&(ot!=null||ft!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Ve(e,n,it,ot,o,ft)}return;default:if(Le(n)){for(var ke in a)ot=a[ke],a.hasOwnProperty(ke)&&ot!==void 0&&!o.hasOwnProperty(ke)&&ih(e,n,ke,void 0,o,ot);for(pt in o)ot=o[pt],ft=a[pt],!o.hasOwnProperty(pt)||ot===ft||ot===void 0&&ft===void 0||ih(e,n,pt,ot,o,ft);return}}for(var Q in a)ot=a[Q],a.hasOwnProperty(Q)&&ot!=null&&!o.hasOwnProperty(Q)&&Ve(e,n,Q,null,o,ot);for(xt in o)ot=o[xt],ft=a[xt],!o.hasOwnProperty(xt)||ot===ft||ot==null&&ft==null||Ve(e,n,xt,ot,o,ft)}function w0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $S(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,R=u.duration;if(f&&R&&w0(v)){for(v=0,R=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],it=G.startTime;if(it>R)break;var pt=G.transferSize,xt=G.initiatorType;pt&&w0(xt)&&(G=G.responseEnd,v+=pt*(G<R?1:(R-it)/(G-it)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ah=null,sh=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function D0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function U0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function rh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var oh=null;function tM(){var e=window.event;return e&&e.type==="popstate"?e===oh?!1:(oh=e,!0):(oh=null,!1)}var L0=typeof setTimeout=="function"?setTimeout:void 0,eM=typeof clearTimeout=="function"?clearTimeout:void 0,N0=typeof Promise=="function"?Promise:void 0,nM=typeof queueMicrotask=="function"?queueMicrotask:typeof N0<"u"?function(e){return N0.resolve(null).then(e).catch(iM)}:L0;function iM(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function O0(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Tr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,R=f.nodeName;f[wa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Bo(e.ownerDocument.body);a=u}while(a);Tr(n)}function P0(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function lh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lh(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function aM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ei(e.nextSibling),e===null)break}return null}function sM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ei(e.nextSibling),e===null))return null;return e}function I0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ei(e.nextSibling),e===null))return null;return e}function ch(e){return e.data==="$?"||e.data==="$~"}function uh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ei(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var fh=null;function F0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function z0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function B0(e,n,a){switch(n=lc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);io(e)}var bi=new Map,H0=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ma=H.d;H.d={f:oM,r:lM,D:cM,C:uM,L:fM,m:hM,X:pM,S:dM,M:mM};function oM(){var e=ma.f(),n=tc();return e||n}function lM(e){var n=Ua(e);n!==null&&n.tag===5&&n.type==="form"?ig(n):ma.r(e)}var yr=typeof document>"u"?null:document;function G0(e,n,a){var o=yr;if(o&&typeof n=="string"&&n){var u=Pe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),H0.has(u)||(H0.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),hn(n),o.head.appendChild(n)))}}function cM(e){ma.D(e),G0("dns-prefetch",e,null)}function uM(e,n){ma.C(e,n),G0("preconnect",e,n)}function fM(e,n,a){ma.L(e,n,a);var o=yr;if(o&&e&&n){var u='link[rel="preload"][as="'+Pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pe(a.imageSizes)+'"]')):u+='[href="'+Pe(e)+'"]';var f=u;switch(n){case"style":f=Er(e);break;case"script":f=br(e)}bi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),bi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ho(f))||n==="script"&&o.querySelector(Go(f))||(n=o.createElement("link"),Un(n,"link",e),hn(n),o.head.appendChild(n)))}}function hM(e,n){ma.m(e,n);var a=yr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pe(o)+'"][href="'+Pe(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=br(e)}if(!bi.has(f)&&(e=x({rel:"modulepreload",href:e},n),bi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(f)))return}o=a.createElement("link"),Un(o,"link",e),hn(o),a.head.appendChild(o)}}}function dM(e,n,a){ma.S(e,n,a);var o=yr;if(o&&e){var u=La(o).hoistableStyles,f=Er(e);n=n||"default";var v=u.get(f);if(!v){var R={loading:0,preload:null};if(v=o.querySelector(Ho(f)))R.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=bi.get(f))&&hh(e,a);var G=v=o.createElement("link");hn(G),Un(G,"link",e),G._p=new Promise(function(it,pt){G.onload=it,G.onerror=pt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,uc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:R},u.set(f,v)}}}function pM(e,n){ma.X(e,n);var a=yr;if(a&&e){var o=La(a).hoistableScripts,u=br(e),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(e=x({src:e,async:!0},n),(n=bi.get(u))&&dh(e,n),f=a.createElement("script"),hn(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function mM(e,n){ma.M(e,n);var a=yr;if(a&&e){var o=La(a).hoistableScripts,u=br(e),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=bi.get(u))&&dh(e,n),f=a.createElement("script"),hn(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function V0(e,n,a,o){var u=(u=lt.current)?cc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Er(a.href),a=La(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Er(a.href);var f=La(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Ho(e)))&&!f._p&&(v.instance=f,v.state.loading=5),bi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(e,a),f||gM(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=br(a),a=La(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Er(e){return'href="'+Pe(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function k0(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function gM(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),hn(n),e.head.appendChild(n))}function br(e){return'[src="'+Pe(e)+'"]'}function Go(e){return"script[async]"+e}function X0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Pe(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),hn(o),Un(o,"style",u),uc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Er(a.href);var f=e.querySelector(Ho(u));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;o=k0(a),(u=bi.get(u))&&hh(o,u),f=(e.ownerDocument||e).createElement("link"),hn(f);var v=f;return v._p=new Promise(function(R,G){v.onload=R,v.onerror=G}),Un(f,"link",o),n.state.loading|=4,uc(f,a.precedence,e),n.instance=f;case"script":return f=br(a.src),(u=e.querySelector(Go(f)))?(n.instance=u,hn(u),u):(o=a,(u=bi.get(f))&&(o=x({},a),dh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),hn(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,e));return n.instance}function uc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var R=o[v];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function hh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function dh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fc=null;function W0(e,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[wa]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var R=o.get(v);R?R.push(f):o.set(v,[f])}}return o}function j0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function _M(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function q0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vM(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Er(o.href),f=n.querySelector(Ho(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=hc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,hn(f);return}f=n.ownerDocument||n,o=k0(o),(u=bi.get(u))&&hh(o,u),f=f.createElement("link"),hn(f);var v=f;v._p=new Promise(function(R,G){v.onload=R,v.onerror=G}),Un(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ph=0;function xM(e,n){return e.stylesheets&&e.count===0&&pc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ph===0&&(ph=62500*$S());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ph?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function pc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,n.forEach(SM,e),dc=null,hc.call(e))}function SM(e,n){if(!(n.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Vo={$$typeof:N,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function MM(e,n,a,o,u,f,v,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jt(0),this.hiddenUpdates=jt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Y0(e,n,a,o,u,f,v,R,G,it,pt,xt){return e=new MM(e,n,a,v,G,it,pt,xt,R),n=1,f===!0&&(n|=24),f=ii(3,null,null,n),e.current=f,f.stateNode=e,n=ju(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ku(f),e}function Z0(e){return e?(e=er,e):er}function K0(e,n,a,o,u,f){u=Z0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ha(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ga(e,o,n),a!==null&&(Yn(a,e,n),So(a,e,n))}function Q0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function mh(e,n){Q0(e,n),(e=e.alternate)&&Q0(e,n)}function J0(e){if(e.tag===13||e.tag===31){var n=Es(e,67108864);n!==null&&Yn(n,e,67108864),mh(e,67108864)}}function $0(e){if(e.tag===13||e.tag===31){var n=li();n=_s(n);var a=Es(e,n);a!==null&&Yn(a,e,n),mh(e,n)}}var mc=!0;function yM(e,n,a,o){var u=L.T;L.T=null;var f=H.p;try{H.p=2,gh(e,n,a,o)}finally{H.p=f,L.T=u}}function EM(e,n,a,o){var u=L.T;L.T=null;var f=H.p;try{H.p=8,gh(e,n,a,o)}finally{H.p=f,L.T=u}}function gh(e,n,a,o){if(mc){var u=_h(o);if(u===null)nh(e,n,o,gc,a),e_(e,o);else if(TM(u,e,n,a,o))o.stopPropagation();else if(e_(e,o),n&4&&-1<bM.indexOf(e)){for(;u!==null;){var f=Ua(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Rt(f.pendingLanes);if(v!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var G=1<<31-It(v);R.entanglements[1]|=G,v&=~G}Gi(f),(Ue&6)===0&&(Jl=wt()+500,Io(0))}}break;case 31:case 13:R=Es(f,2),R!==null&&Yn(R,f,2),tc(),mh(f,2)}if(f=_h(o),f===null&&nh(e,n,o,gc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else nh(e,n,o,null,a)}}function _h(e){return e=vu(e),vh(e)}var gc=null;function vh(e){if(gc=null,e=Da(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return gc=e,null}function t_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case D:return 2;case E:return 8;case tt:case vt:return 32;case bt:return 268435456;default:return 32}default:return 32}}var xh=!1,Ja=null,$a=null,ts=null,ko=new Map,Xo=new Map,es=[],bM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e_(e,n){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function Wo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ua(n),n!==null&&J0(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function TM(e,n,a,o,u){switch(n){case"focusin":return Ja=Wo(Ja,e,n,a,o,u),!0;case"dragenter":return $a=Wo($a,e,n,a,o,u),!0;case"mouseover":return ts=Wo(ts,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return ko.set(f,Wo(ko.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Xo.set(f,Wo(Xo.get(f)||null,e,n,a,o,u)),!0}return!1}function n_(e){var n=Da(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,eo(e.priority,function(){$0(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,eo(e.priority,function(){$0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=_h(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);_u=o,a.target.dispatchEvent(o),_u=null}else return n=Ua(a),n!==null&&J0(n),e.blockedOn=a,!1;n.shift()}return!0}function i_(e,n,a){_c(e)&&a.delete(n)}function AM(){xh=!1,Ja!==null&&_c(Ja)&&(Ja=null),$a!==null&&_c($a)&&($a=null),ts!==null&&_c(ts)&&(ts=null),ko.forEach(i_),Xo.forEach(i_)}function vc(e,n){e.blockedOn===n&&(e.blockedOn=null,xh||(xh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,AM)))}var xc=null;function a_(e){xc!==e&&(xc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xc===e&&(xc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(vh(o||a)===null)continue;break}var f=Ua(a);f!==null&&(e.splice(n,3),n-=3,_f(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Tr(e){function n(G){return vc(G,e)}Ja!==null&&vc(Ja,e),$a!==null&&vc($a,e),ts!==null&&vc(ts,e),ko.forEach(n),Xo.forEach(n);for(var a=0;a<es.length;a++){var o=es[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)n_(a),a.blockedOn===null&&es.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[Rn]||null;if(typeof f=="function")v||a_(a);else if(v){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Rn]||null)R=v.formAction;else if(vh(u)!==null)continue}else R=v.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),a_(a)}}}function s_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sh(e){this._internalRoot=e}Sc.prototype.render=Sh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=li();K0(a,o,e,n,null,null)},Sc.prototype.unmount=Sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;K0(e.current,2,null,e,null,null),tc(),n[Ji]=null}};function Sc(e){this._internalRoot=e}Sc.prototype.unstable_scheduleHydration=function(e){if(e){var n=to();e={blockedOn:null,target:e,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,e),a===0&&n_(e)}};var r_=t.version;if(r_!=="19.2.6")throw Error(s(527,r_,"19.2.6"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var RM={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{ht=Mc.inject(RM),dt=Mc}catch{}}return qo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=dg,f=pg,v=mg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Y0(e,1,!1,null,null,a,o,null,u,f,v,s_),e[Ji]=n.current,eh(e),new Sh(n)},qo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=dg,v=pg,R=mg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Y0(e,1,!0,n,a??null,o,u,G,f,v,R,s_),n.context=Z0(null),a=n.current,o=li(),o=_s(o),u=Ha(o),u.callback=null,Ga(a,u,o),a=o,n.current.lanes=a,ee(n,a),Gi(n),e[Ji]=n.current,eh(e),new Sc(n)},qo.version="19.2.6",qo}var g_;function FM(){if(g_)return Eh.exports;g_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Eh.exports=IM(),Eh.exports}var zM=FM();const BM=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wv=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();var HM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const GM=Se.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>Se.createElement("svg",{ref:m,...HM,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:wv("lucide",l),...p},[...h.map(([d,_])=>Se.createElement(d,_)),...Array.isArray(c)?c:[c]]));const js=(r,t)=>{const i=Se.forwardRef(({className:s,...l},c)=>Se.createElement(GM,{ref:c,iconNode:t,className:wv(`lucide-${BM(r)}`,s),...l}));return i.displayName=`${r}`,i};const VM=js("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);const kM=js("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);const XM=js("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);const WM=js("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const jM=js("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);const qM=js("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);const YM=js("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const rp="184",Vr={ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ZM=0,__=1,KM=2,Kc=1,op=2,nl=3,ds=0,Qn=1,ya=2,ba=0,kr=1,v_=2,x_=3,S_=4,QM=5,Hs=100,JM=101,$M=102,ty=103,ey=104,ny=200,iy=201,ay=202,sy=203,fd=204,hd=205,ry=206,oy=207,ly=208,cy=209,uy=210,fy=211,hy=212,dy=213,py=214,dd=0,pd=1,md=2,jr=3,gd=4,_d=5,vd=6,xd=7,Dv=0,my=1,gy=2,Yi=0,Uv=1,Lv=2,Nv=3,fu=4,Ov=5,Pv=6,Iv=7,Fv=300,Xs=301,qr=302,Rh=303,Ch=304,hu=306,Sd=1e3,Ea=1001,Md=1002,Ln=1003,_y=1004,yc=1005,zn=1006,wh=1007,Vs=1008,hi=1009,zv=1010,Bv=1011,rl=1012,lp=1013,Ki=1014,ji=1015,Aa=1016,cp=1017,up=1018,ol=1020,Hv=35902,Gv=35899,Vv=1021,kv=1022,Pi=1023,Ra=1026,ks=1027,Xv=1028,fp=1029,Ws=1030,hp=1031,dp=1033,Qc=33776,Jc=33777,$c=33778,tu=33779,yd=35840,Ed=35841,bd=35842,Td=35843,Ad=36196,Rd=37492,Cd=37496,wd=37488,Dd=37489,nu=37490,Ud=37491,Ld=37808,Nd=37809,Od=37810,Pd=37811,Id=37812,Fd=37813,zd=37814,Bd=37815,Hd=37816,Gd=37817,Vd=37818,kd=37819,Xd=37820,Wd=37821,jd=36492,qd=36494,Yd=36495,Zd=36283,Kd=36284,iu=36285,Qd=36286,vy=3200,Jd=0,xy=1,us="",Gn="srgb",au="srgb-linear",su="linear",Be="srgb",Ar=7680,M_=519,Sy=512,My=513,yy=514,pp=515,Ey=516,by=517,mp=518,Ty=519,y_=35044,E_="300 es",qi=2e3,ll=2001;function Ay(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ru(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ry(){const r=ru("canvas");return r.style.display="block",r}const b_={};function T_(...r){const t="THREE."+r.shift();console.log(t,...r)}function Wv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Jt(...r){r=Wv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ae(...r){r=Wv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function $d(...r){const t=r.join(" ");t in b_||(b_[t]=!0,Jt(...r))}function Cy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const wy={[dd]:pd,[md]:vd,[gd]:xd,[jr]:_d,[pd]:dd,[vd]:md,[xd]:gd,[_d]:jr};class gs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,tp=180/Math.PI;function cl(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function me(r,t,i){return Math.max(t,Math.min(i,r))}function Dy(r,t){return(r%t+t)%t}function Dh(r,t,i){return(1-i)*r+i*t}function Yo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Uy={DEG2RAD:sl},bp=class bp{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bp.prototype.isVector2=!0;let re=bp;class ps{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],_=s[l+2],x=s[l+3],g=c[h+0],y=c[h+1],T=c[h+2],w=c[h+3];if(x!==w||m!==g||d!==y||_!==T){let M=m*g+d*y+_*T+x*w;M<0&&(g=-g,y=-y,T=-T,w=-w,M=-M);let S=1-p;if(M<.9995){const C=Math.acos(M),N=Math.sin(C);S=Math.sin(S*C)/N,p=Math.sin(p*C)/N,m=m*S+g*p,d=d*S+y*p,_=_*S+T*p,x=x*S+w*p}else{m=m*S+g*p,d=d*S+y*p,_=_*S+T*p,x=x*S+w*p;const C=1/Math.sqrt(m*m+d*d+_*_+x*x);m*=C,d*=C,_*=C,x*=C}}t[i]=m,t[i+1]=d,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],_=s[l+3],x=c[h],g=c[h+1],y=c[h+2],T=c[h+3];return t[i]=p*T+_*x+m*y-d*g,t[i+1]=m*T+_*g+d*x-p*y,t[i+2]=d*T+_*y+p*g-m*x,t[i+3]=_*T-p*x-m*g-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,p=Math.cos,m=Math.sin,d=p(s/2),_=p(l/2),x=p(c/2),g=m(s/2),y=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*_*x+d*y*T,this._y=d*y*x-g*_*T,this._z=d*_*T+g*y*x,this._w=d*_*x-g*y*T;break;case"YXZ":this._x=g*_*x+d*y*T,this._y=d*y*x-g*_*T,this._z=d*_*T-g*y*x,this._w=d*_*x+g*y*T;break;case"ZXY":this._x=g*_*x-d*y*T,this._y=d*y*x+g*_*T,this._z=d*_*T+g*y*x,this._w=d*_*x-g*y*T;break;case"ZYX":this._x=g*_*x-d*y*T,this._y=d*y*x+g*_*T,this._z=d*_*T-g*y*x,this._w=d*_*x+g*y*T;break;case"YZX":this._x=g*_*x+d*y*T,this._y=d*y*x+g*_*T,this._z=d*_*T-g*y*x,this._w=d*_*x-g*y*T;break;case"XZY":this._x=g*_*x-d*y*T,this._y=d*y*x-g*_*T,this._z=d*_*T+g*y*x,this._w=d*_*x+g*y*T;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],_=i[6],x=i[10],g=s+p+x;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-d)*y,this._z=(h-l)*y}else if(s>p&&s>x){const y=2*Math.sqrt(1+s-p-x);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+d)/y}else if(p>x){const y=2*Math.sqrt(1+p-s-x);this._w=(c-d)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+x-s-p);this._w=(h-l)/y,this._x=(c+d)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,p=i._x,m=i._y,d=i._z,_=i._w;return this._x=s*_+h*p+l*d-c*m,this._y=l*_+h*m+c*p-s*d,this._z=c*_+h*d+s*m-l*p,this._w=h*_-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),_=Math.sin(d);m=Math.sin(m*d)/_,i=Math.sin(i*d)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tp=class Tp{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(A_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(A_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,p=t.z,m=t.w,d=2*(h*l-p*s),_=2*(p*i-c*l),x=2*(c*s-h*i);return this.x=i+m*d+h*x-p*_,this.y=s+m*_+p*d-c*x,this.z=l+m*x+c*_-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Uh.copy(this).projectOnVector(t),this.sub(Uh)}reflect(t){return this.sub(Uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tp.prototype.isVector3=!0;let $=Tp;const Uh=new $,A_=new ps,Ap=class Ap{constructor(t,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d)}set(t,i,s,l,c,h,p,m,d){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],_=s[4],x=s[7],g=s[2],y=s[5],T=s[8],w=l[0],M=l[3],S=l[6],C=l[1],N=l[4],P=l[7],z=l[2],U=l[5],I=l[8];return c[0]=h*w+p*C+m*z,c[3]=h*M+p*N+m*U,c[6]=h*S+p*P+m*I,c[1]=d*w+_*C+x*z,c[4]=d*M+_*N+x*U,c[7]=d*S+_*P+x*I,c[2]=g*w+y*C+T*z,c[5]=g*M+y*N+T*U,c[8]=g*S+y*P+T*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8];return i*h*_-i*p*d-s*c*_+s*p*m+l*c*d-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],x=_*h-p*d,g=p*m-_*c,y=d*c-h*m,T=i*x+s*g+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=x*w,t[1]=(l*d-_*s)*w,t[2]=(p*s-l*h)*w,t[3]=g*w,t[4]=(_*i-l*m)*w,t[5]=(l*c-p*i)*w,t[6]=y*w,t[7]=(s*m-d*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+t,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Lh.makeScale(t,i)),this}rotate(t){return this.premultiply(Lh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Lh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ap.prototype.isMatrix3=!0;let se=Ap;const Lh=new se,R_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ly(){const r={enabled:!0,workingColorSpace:au,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Xr(l.r),l.g=Xr(l.g),l.b=Xr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===us?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return $d("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return $d("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[au]:{primaries:t,whitePoint:s,transfer:su,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),r}const Te=Ly();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Rr;class Ny{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Rr===void 0&&(Rr=ru("canvas")),Rr.width=t.width,Rr.height=t.height;const l=Rr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Rr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ru("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ta(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Oy=0;class gp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=cl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Nh(l[h].image)):c.push(Nh(l[h]))}else c=Nh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Nh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ny.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let Py=0;const Oh=new $;class Vn extends gs{constructor(t=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Ea,l=Ea,c=zn,h=Vs,p=Pi,m=hi,d=Vn.DEFAULT_ANISOTROPY,_=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=cl(),this.name="",this.source=new gp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){Jt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Jt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sd:t.x=t.x-Math.floor(t.x);break;case Ea:t.x=t.x<0?0:1;break;case Md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sd:t.y=t.y-Math.floor(t.y);break;case Ea:t.y=t.y<0?0:1;break;case Md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Fv;Vn.DEFAULT_ANISOTROPY=1;const Rp=class Rp{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],_=m[4],x=m[8],g=m[1],y=m[5],T=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(_-g)<.01&&Math.abs(x-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+w)<.1&&Math.abs(T+M)<.1&&Math.abs(d+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(d+1)/2,P=(y+1)/2,z=(S+1)/2,U=(_+g)/4,I=(x+w)/4,b=(T+M)/4;return N>P&&N>z?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=U/s,c=I/s):P>z?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=U/l,c=b/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=I/c,l=b/c),this.set(s,l,c,i),this}let C=Math.sqrt((M-T)*(M-T)+(x-w)*(x-w)+(g-_)*(g-_));return Math.abs(C)<.001&&(C=1),this.x=(M-T)/C,this.y=(x-w)/C,this.z=(g-_)/C,this.w=Math.acos((d+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rp.prototype.isVector4=!0;let rn=Rp;class Iy extends gs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Vn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new gp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Iy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class jv extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fy extends Vn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=class uu{constructor(t,i,s,l,c,h,p,m,d,_,x,g,y,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,p,m,d,_,x,g,y,T,w,M)}set(t,i,s,l,c,h,p,m,d,_,x,g,y,T,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=p,S[13]=m,S[2]=d,S[6]=_,S[10]=x,S[14]=g,S[3]=y,S[7]=T,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Cr.setFromMatrixColumn(t,0).length(),c=1/Cr.setFromMatrixColumn(t,1).length(),h=1/Cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),_=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const g=h*_,y=h*x,T=p*_,w=p*x;i[0]=m*_,i[4]=-m*x,i[8]=d,i[1]=y+T*d,i[5]=g-w*d,i[9]=-p*m,i[2]=w-g*d,i[6]=T+y*d,i[10]=h*m}else if(t.order==="YXZ"){const g=m*_,y=m*x,T=d*_,w=d*x;i[0]=g+w*p,i[4]=T*p-y,i[8]=h*d,i[1]=h*x,i[5]=h*_,i[9]=-p,i[2]=y*p-T,i[6]=w+g*p,i[10]=h*m}else if(t.order==="ZXY"){const g=m*_,y=m*x,T=d*_,w=d*x;i[0]=g-w*p,i[4]=-h*x,i[8]=T+y*p,i[1]=y+T*p,i[5]=h*_,i[9]=w-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(t.order==="ZYX"){const g=h*_,y=h*x,T=p*_,w=p*x;i[0]=m*_,i[4]=T*d-y,i[8]=g*d+w,i[1]=m*x,i[5]=w*d+g,i[9]=y*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*d,T=p*m,w=p*d;i[0]=m*_,i[4]=w-g*x,i[8]=T*x+y,i[1]=x,i[5]=h*_,i[9]=-p*_,i[2]=-d*_,i[6]=y*x+T,i[10]=g-w*x}else if(t.order==="XZY"){const g=h*m,y=h*d,T=p*m,w=p*d;i[0]=m*_,i[4]=-x,i[8]=d*_,i[1]=g*x+w,i[5]=h*_,i[9]=y*x-T,i[2]=T*x-y,i[6]=p*_,i[10]=w*x+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zy,t,By)}lookAt(t,i,s){const l=this.elements;return ci.subVectors(t,i),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),is.crossVectors(s,ci),is.lengthSq()===0&&(Math.abs(s.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),is.crossVectors(s,ci)),is.normalize(),Ec.crossVectors(ci,is),l[0]=is.x,l[4]=Ec.x,l[8]=ci.x,l[1]=is.y,l[5]=Ec.y,l[9]=ci.y,l[2]=is.z,l[6]=Ec.z,l[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],_=s[1],x=s[5],g=s[9],y=s[13],T=s[2],w=s[6],M=s[10],S=s[14],C=s[3],N=s[7],P=s[11],z=s[15],U=l[0],I=l[4],b=l[8],O=l[12],X=l[1],B=l[5],K=l[9],ct=l[13],ut=l[2],W=l[6],L=l[10],H=l[14],et=l[3],mt=l[7],Mt=l[11],F=l[15];return c[0]=h*U+p*X+m*ut+d*et,c[4]=h*I+p*B+m*W+d*mt,c[8]=h*b+p*K+m*L+d*Mt,c[12]=h*O+p*ct+m*H+d*F,c[1]=_*U+x*X+g*ut+y*et,c[5]=_*I+x*B+g*W+y*mt,c[9]=_*b+x*K+g*L+y*Mt,c[13]=_*O+x*ct+g*H+y*F,c[2]=T*U+w*X+M*ut+S*et,c[6]=T*I+w*B+M*W+S*mt,c[10]=T*b+w*K+M*L+S*Mt,c[14]=T*O+w*ct+M*H+S*F,c[3]=C*U+N*X+P*ut+z*et,c[7]=C*I+N*B+P*W+z*mt,c[11]=C*b+N*K+P*L+z*Mt,c[15]=C*O+N*ct+P*H+z*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],p=t[5],m=t[9],d=t[13],_=t[2],x=t[6],g=t[10],y=t[14],T=t[3],w=t[7],M=t[11],S=t[15],C=m*y-d*g,N=p*y-d*x,P=p*g-m*x,z=h*y-d*_,U=h*g-m*_,I=h*x-p*_;return i*(w*C-M*N+S*P)-s*(T*C-M*z+S*U)+l*(T*N-w*z+S*I)-c*(T*P-w*U+M*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],p=t[5],m=t[6],d=t[7],_=t[8],x=t[9],g=t[10],y=t[11],T=t[12],w=t[13],M=t[14],S=t[15],C=i*p-s*h,N=i*m-l*h,P=i*d-c*h,z=s*m-l*p,U=s*d-c*p,I=l*d-c*m,b=_*w-x*T,O=_*M-g*T,X=_*S-y*T,B=x*M-g*w,K=x*S-y*w,ct=g*S-y*M,ut=C*ct-N*K+P*B+z*X-U*O+I*b;if(ut===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ut;return t[0]=(p*ct-m*K+d*B)*W,t[1]=(l*K-s*ct-c*B)*W,t[2]=(w*I-M*U+S*z)*W,t[3]=(g*U-x*I-y*z)*W,t[4]=(m*X-h*ct-d*O)*W,t[5]=(i*ct-l*X+c*O)*W,t[6]=(M*P-T*I-S*N)*W,t[7]=(_*I-g*P+y*N)*W,t[8]=(h*K-p*X+d*b)*W,t[9]=(s*X-i*K-c*b)*W,t[10]=(T*U-w*P+S*C)*W,t[11]=(x*P-_*U-y*C)*W,t[12]=(p*O-h*B-m*b)*W,t[13]=(i*B-s*O+l*b)*W,t[14]=(w*N-T*z-M*C)*W,t[15]=(_*z-x*N+g*C)*W,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,p=t.y,m=t.z,d=c*h,_=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,_*p+s,_*m-l*h,0,d*m-l*p,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,_=h+h,x=p+p,g=c*d,y=c*_,T=c*x,w=h*_,M=h*x,S=p*x,C=m*d,N=m*_,P=m*x,z=s.x,U=s.y,I=s.z;return l[0]=(1-(w+S))*z,l[1]=(y+P)*z,l[2]=(T-N)*z,l[3]=0,l[4]=(y-P)*U,l[5]=(1-(g+S))*U,l[6]=(M+C)*U,l[7]=0,l[8]=(T+N)*I,l[9]=(M-C)*I,l[10]=(1-(g+w))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Cr.set(l[0],l[1],l[2]).length();const p=Cr.set(l[4],l[5],l[6]).length(),m=Cr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Li.copy(this);const d=1/h,_=1/p,x=1/m;return Li.elements[0]*=d,Li.elements[1]*=d,Li.elements[2]*=d,Li.elements[4]*=_,Li.elements[5]*=_,Li.elements[6]*=_,Li.elements[8]*=x,Li.elements[9]*=x,Li.elements[10]*=x,i.setFromRotationMatrix(Li),s.x=h,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,h,p=qi,m=!1){const d=this.elements,_=2*c/(i-t),x=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let T,w;if(m)T=c/(h-c),w=h*c/(h-c);else if(p===qi)T=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(p===ll)T=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=x,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,h,p=qi,m=!1){const d=this.elements,_=2/(i-t),x=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let T,w;if(m)T=1/(h-c),w=h/(h-c);else if(p===qi)T=-2/(h-c),w=-(h+c)/(h-c);else if(p===ll)T=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=x,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=T,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};uu.prototype.isMatrix4=!0;let on=uu;const Cr=new $,Li=new on,zy=new $(0,0,0),By=new $(1,1,1),is=new $,Ec=new $,ci=new $,w_=new on,D_=new ps;class ms{constructor(t=0,i=0,s=0,l=ms.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],_=l[9],x=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-me(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return w_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(w_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return D_.setFromEuler(this),this.setFromQuaternion(D_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ms.DEFAULT_ORDER="XYZ";class qv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hy=0;const U_=new $,wr=new ps,ga=new on,bc=new $,Zo=new $,Gy=new $,Vy=new ps,L_=new $(1,0,0),N_=new $(0,1,0),O_=new $(0,0,1),P_={type:"added"},ky={type:"removed"},Dr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Tn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new $,i=new ms,s=new ps,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new se}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(L_,t)}rotateY(t){return this.rotateOnAxis(N_,t)}rotateZ(t){return this.rotateOnAxis(O_,t)}translateOnAxis(t,i){return U_.copy(t).applyQuaternion(this.quaternion),this.position.add(U_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(L_,t)}translateY(t){return this.translateOnAxis(N_,t)}translateZ(t){return this.translateOnAxis(O_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bc.copy(t):bc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(Zo,bc,this.up):ga.lookAt(bc,Zo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(ga),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(P_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):Ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ky),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(P_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,t,Gy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,Vy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,_=m.length;d<_;d++){const x=m[d];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=h(t.geometries),m=h(t.materials),d=h(t.textures),_=h(t.images),x=h(t.shapes),g=h(t.skeletons),y=h(t.animations),T=h(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const _=p[d];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new $(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fs extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xy={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(d,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=d.joints["index-finger-tip"],x=d.joints["thumb-tip"],g=_.position.distanceTo(x.position),y=.02,T=.005;d.inputState.pinching&&g>y+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=y-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Xy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new fs;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function Fh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class fe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Te.workingColorSpace){if(t=Dy(t,1),i=me(i,0,1),s=me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Fh(h,c,t+1/3),this.g=Fh(h,c,t),this.b=Fh(h,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=Gn){function s(c){c!==void 0&&parseFloat(c)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:Jt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Gn){const s=Yv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gn){return Te.workingToColorSpace(Fn.copy(this),t),Math.round(me(Fn.r*255,0,255))*65536+Math.round(me(Fn.g*255,0,255))*256+Math.round(me(Fn.b*255,0,255))}getHexString(t=Gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const _=(p+h)/2;if(p===h)m=0,d=0;else{const x=h-p;switch(d=_<=.5?x/(h+p):x/(2-h-p),h){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=d,t.l=_,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Gn){Te.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==Gn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(as),this.setHSL(as.h+t,as.s+i,as.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(as),t.getHSL(Tc);const s=Dh(as.h,Tc.h,i),l=Dh(as.s,Tc.s,i),c=Dh(as.l,Tc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new fe;fe.NAMES=Yv;class du{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new fe(t),this.near=i,this.far=s}clone(){return new du(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zv extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ms,this.environmentIntensity=1,this.environmentRotation=new ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new $,_a=new $,zh=new $,va=new $,Ur=new $,Lr=new $,I_=new $,Bh=new $,Hh=new $,Gh=new $,Vh=new rn,kh=new rn,Xh=new rn;class Ai{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ni.subVectors(l,i),_a.subVectors(s,i),zh.subVectors(t,i);const h=Ni.dot(Ni),p=Ni.dot(_a),m=Ni.dot(zh),d=_a.dot(_a),_=_a.dot(zh),x=h*d-p*p;if(x===0)return c.set(0,0,0),null;const g=1/x,y=(d*m-p*_)*g,T=(h*_-p*m)*g;return c.set(1-y-T,T,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(t,i,s,l,c,h,p,m){return this.getBarycoord(t,i,s,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(h,va.y),m.addScaledVector(p,va.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Vh.setScalar(0),kh.setScalar(0),Xh.setScalar(0),Vh.fromBufferAttribute(t,i),kh.fromBufferAttribute(t,s),Xh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Vh,c.x),h.addScaledVector(kh,c.y),h.addScaledVector(Xh,c.z),h}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),_a.subVectors(t,i),Ni.cross(_a).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Ni.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,p;Ur.subVectors(l,s),Lr.subVectors(c,s),Bh.subVectors(t,s);const m=Ur.dot(Bh),d=Lr.dot(Bh);if(m<=0&&d<=0)return i.copy(s);Hh.subVectors(t,l);const _=Ur.dot(Hh),x=Lr.dot(Hh);if(_>=0&&x<=_)return i.copy(l);const g=m*x-_*d;if(g<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Ur,h);Gh.subVectors(t,c);const y=Ur.dot(Gh),T=Lr.dot(Gh);if(T>=0&&y<=T)return i.copy(c);const w=y*d-m*T;if(w<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Lr,p);const M=_*T-y*x;if(M<=0&&x-_>=0&&y-T>=0)return I_.subVectors(c,l),p=(x-_)/(x-_+(y-T)),i.copy(l).addScaledVector(I_,p);const S=1/(M+w+g);return h=w*S,p=g*S,i.copy(s).addScaledVector(Ur,h).addScaledVector(Lr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ul{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Oi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Oi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Oi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,Oi):Oi.fromBufferAttribute(c,h),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ac.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ac.copy(s.boundingBox)),Ac.applyMatrix4(t.matrixWorld),this.union(Ac)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ko),Rc.subVectors(this.max,Ko),Nr.subVectors(t.a,Ko),Or.subVectors(t.b,Ko),Pr.subVectors(t.c,Ko),ss.subVectors(Or,Nr),rs.subVectors(Pr,Or),Is.subVectors(Nr,Pr);let i=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Is.z,Is.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Is.z,0,-Is.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Is.y,Is.x,0];return!Wh(i,Nr,Or,Pr,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Wh(i,Nr,Or,Pr,Rc))?!1:(Cc.crossVectors(ss,rs),i=[Cc.x,Cc.y,Cc.z],Wh(i,Nr,Or,Pr,Rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xa=[new $,new $,new $,new $,new $,new $,new $,new $],Oi=new $,Ac=new ul,Nr=new $,Or=new $,Pr=new $,ss=new $,rs=new $,Is=new $,Ko=new $,Rc=new $,Cc=new $,Fs=new $;function Wh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){Fs.fromArray(r,c);const p=l.x*Math.abs(Fs.x)+l.y*Math.abs(Fs.y)+l.z*Math.abs(Fs.z),m=t.dot(Fs),d=i.dot(Fs),_=s.dot(Fs);if(Math.max(-Math.max(m,d,_),Math.min(m,d,_))>p)return!1}return!0}const _n=new $,wc=new re;let Wy=0;class di extends gs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=y_,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)wc.fromBufferAttribute(this,i),wc.applyMatrix3(t),this.setXY(i,wc.x,wc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Yo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Yo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Yo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Yo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Yo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==y_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Kv extends di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Qv extends di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Jn extends di{constructor(t,i,s){super(new Float32Array(t),i,s)}}const jy=new ul,Qo=new $,jh=new $;class pu{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):jy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qo.subVectors(t,this.center);const i=Qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Qo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qo.copy(t.center).add(jh)),this.expandByPoint(Qo.copy(t.center).sub(jh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let qy=0;const Ti=new on,qh=new Tn,Ir=new $,ui=new ul,Jo=new ul,bn=new $;class pi extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ay(t)?Qv:Kv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new se().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ti.makeRotationFromQuaternion(t),this.applyMatrix4(Ti),this}rotateX(t){return Ti.makeRotationX(t),this.applyMatrix4(Ti),this}rotateY(t){return Ti.makeRotationY(t),this.applyMatrix4(Ti),this}rotateZ(t){return Ti.makeRotationZ(t),this.applyMatrix4(Ti),this}translate(t,i,s){return Ti.makeTranslation(t,i,s),this.applyMatrix4(Ti),this}scale(t,i,s){return Ti.makeScale(t,i,s),this.applyMatrix4(Ti),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Jn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ul);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Jo.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(ui.min,Jo.min),ui.expandByPoint(bn),bn.addVectors(ui.max,Jo.max),ui.expandByPoint(bn)):(ui.expandByPoint(Jo.min),ui.expandByPoint(Jo.max))}ui.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,_=p.count;d<_;d++)bn.fromBufferAttribute(p,d),m&&(Ir.fromBufferAttribute(t,d),bn.add(Ir)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new $,m[b]=new $;const d=new $,_=new $,x=new $,g=new re,y=new re,T=new re,w=new $,M=new $;function S(b,O,X){d.fromBufferAttribute(s,b),_.fromBufferAttribute(s,O),x.fromBufferAttribute(s,X),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,O),T.fromBufferAttribute(c,X),_.sub(d),x.sub(d),y.sub(g),T.sub(g);const B=1/(y.x*T.y-T.x*y.y);isFinite(B)&&(w.copy(_).multiplyScalar(T.y).addScaledVector(x,-y.y).multiplyScalar(B),M.copy(x).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(B),p[b].add(w),p[O].add(w),p[X].add(w),m[b].add(M),m[O].add(M),m[X].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let b=0,O=C.length;b<O;++b){const X=C[b],B=X.start,K=X.count;for(let ct=B,ut=B+K;ct<ut;ct+=3)S(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const N=new $,P=new $,z=new $,U=new $;function I(b){z.fromBufferAttribute(l,b),U.copy(z);const O=p[b];N.copy(O),N.sub(z.multiplyScalar(z.dot(O))).normalize(),P.crossVectors(U,O);const B=P.dot(m[b])<0?-1:1;h.setXYZW(b,N.x,N.y,N.z,B)}for(let b=0,O=C.length;b<O;++b){const X=C[b],B=X.start,K=X.count;for(let ct=B,ut=B+K;ct<ut;ct+=3)I(t.getX(ct+0)),I(t.getX(ct+1)),I(t.getX(ct+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,h=new $,p=new $,m=new $,d=new $,_=new $,x=new $;if(t)for(let g=0,y=t.count;g<y;g+=3){const T=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),d.fromBufferAttribute(s,M),p.add(_),m.add(_),d.add(_),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),_.subVectors(h,c),x.subVectors(l,c),_.cross(x),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(p,m){const d=p.array,_=p.itemSize,x=p.normalized,g=new d.constructor(m.length*_);let y=0,T=0;for(let w=0,M=m.length;w<M;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*_;for(let S=0;S<_;S++)g[T++]=d[y++]}return new di(g,_,x)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let _=0,x=d.length;_<x;_++){const g=d[_],y=t(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],_=[];for(let x=0,g=d.length;x<g;x++){const y=d[x];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const _=l[d];this.setAttribute(d,_.clone(i))}const c=t.morphAttributes;for(const d in c){const _=[],x=c[d];for(let g=0,y=x.length;g<y;g++)_.push(x[g].clone(i));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,_=h.length;d<_;d++){const x=h[d];this.addGroup(x.start,x.count,x.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Yy=0;class qs extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=kr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=M_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){Jt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Jt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==ds&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==fd&&(s.blendSrc=this.blendSrc),this.blendDst!==hd&&(s.blendDst=this.blendDst),this.blendEquation!==Hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==M_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Sa=new $,Yh=new $,Dc=new $,os=new $,Zh=new $,Uc=new $,Kh=new $;class _p{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Yh.copy(t).add(i).multiplyScalar(.5),Dc.copy(i).sub(t).normalize(),os.copy(this.origin).sub(Yh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Dc),p=os.dot(this.direction),m=-os.dot(Dc),d=os.lengthSq(),_=Math.abs(1-h*h);let x,g,y,T;if(_>0)if(x=h*m-p,g=h*p-m,T=c*_,x>=0)if(g>=-T)if(g<=T){const w=1/_;x*=w,g*=w,y=x*(x+h*g+2*p)+g*(h*x+g+2*m)+d}else g=c,x=Math.max(0,-(h*g+p)),y=-x*x+g*(g+2*m)+d;else g=-c,x=Math.max(0,-(h*g+p)),y=-x*x+g*(g+2*m)+d;else g<=-T?(x=Math.max(0,-(-h*c+p)),g=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+d):g<=T?(x=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+d):(x=Math.max(0,-(h*c+p)),g=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+g*(g+2*m)+d);else g=h>0?-c:c,x=Math.max(0,-(h*g+p)),y=-x*x+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Yh).addScaledVector(Dc,g),y}intersectSphere(t,i){Sa.subVectors(t.center,this.origin);const s=Sa.dot(this.direction),l=Sa.dot(Sa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,p,m;const d=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return d>=0?(s=(t.min.x-g.x)*d,l=(t.max.x-g.x)*d):(s=(t.max.x-g.x)*d,l=(t.min.x-g.x)*d),_>=0?(c=(t.min.y-g.y)*_,h=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,h=(t.min.y-g.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),x>=0?(p=(t.min.z-g.z)*x,m=(t.max.z-g.z)*x):(p=(t.max.z-g.z)*x,m=(t.min.z-g.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Sa)!==null}intersectTriangle(t,i,s,l,c){Zh.subVectors(i,t),Uc.subVectors(s,t),Kh.crossVectors(Zh,Uc);let h=this.direction.dot(Kh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;os.subVectors(this.origin,t);const m=p*this.direction.dot(Uc.crossVectors(os,Uc));if(m<0)return null;const d=p*this.direction.dot(Zh.cross(os));if(d<0||m+d>h)return null;const _=-p*os.dot(Kh);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jv extends qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const F_=new on,zs=new _p,Lc=new pu,z_=new $,Nc=new $,Oc=new $,Pc=new $,Qh=new $,Ic=new $,B_=new $,Fc=new $;class mi extends Tn{constructor(t=new pi,i=new Jv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Ic.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const _=p[m],x=c[m];_!==0&&(Qh.fromBufferAttribute(x,t),h?Ic.addScaledVector(Qh,_):Ic.addScaledVector(Qh.sub(i),_))}i.add(Ic)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Lc.copy(s.boundingSphere),Lc.applyMatrix4(c),zs.copy(t.ray).recast(t.near),!(Lc.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Lc,z_)===null||zs.origin.distanceToSquared(z_)>(t.far-t.near)**2))&&(F_.copy(c).invert(),zs.copy(t.ray).applyMatrix4(F_),!(s.boundingBox!==null&&zs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,zs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,x=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],S=h[M.materialIndex],C=Math.max(M.start,y.start),N=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let P=C,z=N;P<z;P+=3){const U=p.getX(P),I=p.getX(P+1),b=p.getX(P+2);l=zc(this,S,t,s,d,_,x,U,I,b),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const C=p.getX(M),N=p.getX(M+1),P=p.getX(M+2);l=zc(this,h,t,s,d,_,x,C,N,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,w=g.length;T<w;T++){const M=g[T],S=h[M.materialIndex],C=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let P=C,z=N;P<z;P+=3){const U=P,I=P+1,b=P+2;l=zc(this,S,t,s,d,_,x,U,I,b),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=T,S=w;M<S;M+=3){const C=M,N=M+1,P=M+2;l=zc(this,h,t,s,d,_,x,C,N,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Zy(r,t,i,s,l,c,h,p){let m;if(t.side===Qn?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,t.side===ds,p),m===null)return null;Fc.copy(p),Fc.applyMatrix4(r.matrixWorld);const d=i.ray.origin.distanceTo(Fc);return d<i.near||d>i.far?null:{distance:d,point:Fc.clone(),object:r}}function zc(r,t,i,s,l,c,h,p,m,d){r.getVertexPosition(p,Nc),r.getVertexPosition(m,Oc),r.getVertexPosition(d,Pc);const _=Zy(r,t,i,s,Nc,Oc,Pc,B_);if(_){const x=new $;Ai.getBarycoord(B_,Nc,Oc,Pc,x),l&&(_.uv=Ai.getInterpolatedAttribute(l,p,m,d,x,new re)),c&&(_.uv1=Ai.getInterpolatedAttribute(c,p,m,d,x,new re)),h&&(_.normal=Ai.getInterpolatedAttribute(h,p,m,d,x,new $),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new $,materialIndex:0};Ai.getNormal(Nc,Oc,Pc,g.normal),_.face=g,_.barycoord=x}return _}class Ky extends Vn{constructor(t=null,i=1,s=1,l,c,h,p,m,d=Ln,_=Ln,x,g){super(null,h,p,m,d,_,l,c,x,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jh=new $,Qy=new $,Jy=new se;class cs{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Jh.subVectors(s,i).cross(Qy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Jh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Jy.getNormalMatrix(t),l=this.coplanarPoint(Jh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new pu,$y=new re(.5,.5),Bc=new $;class vp{constructor(t=new cs,i=new cs,s=new cs,l=new cs,c=new cs,h=new cs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=qi,s=!1){const l=this.planes,c=t.elements,h=c[0],p=c[1],m=c[2],d=c[3],_=c[4],x=c[5],g=c[6],y=c[7],T=c[8],w=c[9],M=c[10],S=c[11],C=c[12],N=c[13],P=c[14],z=c[15];if(l[0].setComponents(d-h,y-_,S-T,z-C).normalize(),l[1].setComponents(d+h,y+_,S+T,z+C).normalize(),l[2].setComponents(d+p,y+x,S+w,z+N).normalize(),l[3].setComponents(d-p,y-x,S-w,z-N).normalize(),s)l[4].setComponents(m,g,M,P).normalize(),l[5].setComponents(d-m,y-g,S-M,z-P).normalize();else if(l[4].setComponents(d-m,y-g,S-M,z-P).normalize(),i===qi)l[5].setComponents(d+m,y+g,S+M,z+P).normalize();else if(i===ll)l[5].setComponents(m,g,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(t){Bs.center.set(0,0,0);const i=$y.distanceTo(t.center);return Bs.radius=.7071067811865476+i,Bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Bc.x=l.normal.x>0?t.max.x:t.min.x,Bc.y=l.normal.y>0?t.max.y:t.min.y,Bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xp extends qs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ou=new $,lu=new $,H_=new on,$o=new _p,Hc=new pu,$h=new $,G_=new $;class tE extends Tn{constructor(t=new pi,i=new xp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)ou.fromBufferAttribute(i,l-1),lu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=ou.distanceTo(lu);t.setAttribute("lineDistance",new Jn(s,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,t.ray.intersectsSphere(Hc)===!1)return;H_.copy(l).invert(),$o.copy(t.ray).applyMatrix4(H_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const y=Math.max(0,h.start),T=Math.min(_.count,h.start+h.count);for(let w=y,M=T-1;w<M;w+=d){const S=_.getX(w),C=_.getX(w+1),N=Gc(this,t,$o,m,S,C,w);N&&i.push(N)}if(this.isLineLoop){const w=_.getX(T-1),M=_.getX(y),S=Gc(this,t,$o,m,w,M,T-1);S&&i.push(S)}}else{const y=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let w=y,M=T-1;w<M;w+=d){const S=Gc(this,t,$o,m,w,w+1,w);S&&i.push(S)}if(this.isLineLoop){const w=Gc(this,t,$o,m,T-1,y,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Gc(r,t,i,s,l,c,h){const p=r.geometry.attributes.position;if(ou.fromBufferAttribute(p,l),lu.fromBufferAttribute(p,c),i.distanceSqToSegment(ou,lu,$h,G_)>s)return;$h.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo($h);if(!(d<t.near||d>t.far))return{distance:d,point:G_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const V_=new $,k_=new $;class $v extends tE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)V_.fromBufferAttribute(i,l),k_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+V_.distanceTo(k_);t.setAttribute("lineDistance",new Jn(s,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tx extends Vn{constructor(t=[],i=Xs,s,l,c,h,p,m,d,_){super(t,i,s,l,c,h,p,m,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yr extends Vn{constructor(t,i,s=Ki,l,c,h,p=Ln,m=Ln,d,_=Ra,x=1){if(_!==Ra&&_!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:x};super(g,l,c,h,p,m,_,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class eE extends Yr{constructor(t,i=Ki,s=Xs,l,c,h=Ln,p=Ln,m,d=Ra){const _={width:t,height:t,depth:1},x=[_,_,_,_,_,_];super(t,t,i,s,l,c,h,p,m,d),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ex extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class fl extends pi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],_=[],x=[];let g=0,y=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Jn(d,3)),this.setAttribute("normal",new Jn(_,3)),this.setAttribute("uv",new Jn(x,2));function T(w,M,S,C,N,P,z,U,I,b,O){const X=P/I,B=z/b,K=P/2,ct=z/2,ut=U/2,W=I+1,L=b+1;let H=0,et=0;const mt=new $;for(let Mt=0;Mt<L;Mt++){const F=Mt*B-ct;for(let J=0;J<W;J++){const St=J*X-K;mt[w]=St*C,mt[M]=F*N,mt[S]=ut,d.push(mt.x,mt.y,mt.z),mt[w]=0,mt[M]=0,mt[S]=U>0?1:-1,_.push(mt.x,mt.y,mt.z),x.push(J/I),x.push(1-Mt/b),H+=1}}for(let Mt=0;Mt<b;Mt++)for(let F=0;F<I;F++){const J=g+F+W*Mt,St=g+F+W*(Mt+1),At=g+(F+1)+W*(Mt+1),Ct=g+(F+1)+W*Mt;m.push(J,St,Ct),m.push(St,At,Ct),et+=6}p.addGroup(y,et,O),y+=et,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const Vc=new $,kc=new $,td=new $,Xc=new Ai;class nx extends pi{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(sl*i),h=t.getIndex(),p=t.getAttribute("position"),m=h?h.count:p.count,d=[0,0,0],_=["a","b","c"],x=new Array(3),g={},y=[];for(let T=0;T<m;T+=3){h?(d[0]=h.getX(T),d[1]=h.getX(T+1),d[2]=h.getX(T+2)):(d[0]=T,d[1]=T+1,d[2]=T+2);const{a:w,b:M,c:S}=Xc;if(w.fromBufferAttribute(p,d[0]),M.fromBufferAttribute(p,d[1]),S.fromBufferAttribute(p,d[2]),Xc.getNormal(td),x[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,x[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,x[2]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let C=0;C<3;C++){const N=(C+1)%3,P=x[C],z=x[N],U=Xc[_[C]],I=Xc[_[N]],b=`${P}_${z}`,O=`${z}_${P}`;O in g&&g[O]?(td.dot(g[O].normal)<=c&&(y.push(U.x,U.y,U.z),y.push(I.x,I.y,I.z)),g[O]=null):b in g||(g[b]={index0:d[C],index1:d[N],normal:td.clone()})}}for(const T in g)if(g[T]){const{index0:w,index1:M}=g[T];Vc.fromBufferAttribute(p,w),kc.fromBufferAttribute(p,M),y.push(Vc.x,Vc.y,Vc.z),y.push(kc.x,kc.y,kc.z)}this.setAttribute("position",new Jn(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Qr extends pi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,_=m+1,x=t/p,g=i/m,y=[],T=[],w=[],M=[];for(let S=0;S<_;S++){const C=S*g-h;for(let N=0;N<d;N++){const P=N*x-c;T.push(P,-C,0),w.push(0,0,1),M.push(N/p),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<p;C++){const N=C+d*S,P=C+d*(S+1),z=C+1+d*(S+1),U=C+1+d*S;y.push(N,P,U),y.push(P,z,U)}this.setIndex(y),this.setAttribute("position",new Jn(T,3)),this.setAttribute("normal",new Jn(w,3)),this.setAttribute("uv",new Jn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.width,t.height,t.widthSegments,t.heightSegments)}}class ix extends qs{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new fe(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function Zr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];if(X_(l))l.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(X_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Hn(r){const t={};for(let i=0;i<r.length;i++){const s=Zr(r[i]);for(const l in s)t[l]=s[l]}return t}function X_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function nE(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function ax(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const iE={clone:Zr,merge:Hn};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zr(t.uniforms),this.uniformsGroups=nE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class rE extends Qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oE extends qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sx extends oE{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class lE extends qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cE extends qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const W_={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(j_(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!j_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function j_(r){try{const t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class uE{constructor(t,i,s){const l=this;let c=!1,h=0,p=0,m;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){p++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,p),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,p),h===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,x){return d.push(_,x),this},this.removeHandler=function(_){const x=d.indexOf(_);return x!==-1&&d.splice(x,2),this},this.getHandler=function(_){for(let x=0,g=d.length;x<g;x+=2){const y=d[x],T=d[x+1];if(y.global&&(y.lastIndex=0),y.test(_))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const fE=new uE;class Sp{constructor(t){this.manager=t!==void 0?t:fE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Sp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ma={};class hE extends Error{constructor(t,i){super(t),this.response=i}}class dE extends Sp{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=W_.get(`file:${t}`);if(c!==void 0){this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0);return}if(Ma[t]!==void 0){Ma[t].push({onLoad:i,onProgress:s,onError:l});return}Ma[t]=[],Ma[t].push({onLoad:i,onProgress:s,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,m=this.responseType;fetch(h).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Jt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const _=Ma[t],x=d.body.getReader(),g=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=g?parseInt(g):0,T=y!==0;let w=0;const M=new ReadableStream({start(S){C();function C(){x.read().then(({done:N,value:P})=>{if(N)S.close();else{w+=P.byteLength;const z=new ProgressEvent("progress",{lengthComputable:T,loaded:w,total:y});for(let U=0,I=_.length;U<I;U++){const b=_[U];b.onProgress&&b.onProgress(z)}S.enqueue(P),C()}},N=>{S.error(N)})}}});return new Response(M)}else throw new hE(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(m){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(_=>new DOMParser().parseFromString(_,p));case"json":return d.json();default:if(p==="")return d.text();{const x=/charset="?([^;"\s]*)"?/i.exec(p),g=x&&x[1]?x[1].toLowerCase():void 0,y=new TextDecoder(g);return d.arrayBuffer().then(T=>y.decode(T))}}}).then(d=>{W_.add(`file:${t}`,d);const _=Ma[t];delete Ma[t];for(let x=0,g=_.length;x<g;x++){const y=_[x];y.onLoad&&y.onLoad(d)}}).catch(d=>{const _=Ma[t];if(_===void 0)throw this.manager.itemError(t),d;delete Ma[t];for(let x=0,g=_.length;x<g;x++){const y=_[x];y.onError&&y.onError(d)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class rx extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class ox extends rx{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const ed=new on,q_=new $,Y_=new $;class pE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vp,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;q_.setFromMatrixPosition(t.matrixWorld),i.position.copy(q_),Y_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Y_),i.updateMatrixWorld(),ed.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===ll||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ed)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wc=new $,jc=new ps,Vi=new $;class lx extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wc,jc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,jc,Vi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Wc,jc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,jc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new $,Z_=new re,K_=new re;class fi extends lx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=tp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,i){return this.getViewBounds(t,Z_,K_),i.subVectors(K_,Z_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Mp extends lx{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class mE extends pE{constructor(){super(new Mp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wr extends rx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new mE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const Fr=-90,zr=1;class gE extends Tn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Fr,zr,t,i);l.layers=this.layers,this.add(l);const c=new fi(Fr,zr,t,i);c.layers=this.layers,this.add(c);const h=new fi(Fr,zr,t,i);h.layers=this.layers,this.add(h);const p=new fi(Fr,zr,t,i);p.layers=this.layers,this.add(p);const m=new fi(Fr,zr,t,i);m.layers=this.layers,this.add(m);const d=new fi(Fr,zr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(t===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ll)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,_]=this.children,x=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(x,g,y),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class _E extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class vE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Jt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class Q_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Cp=class Cp{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Cp.prototype.isMatrix2=!0;let J_=Cp;class xE extends gs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Jt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $_(r,t,i,s){const l=SE(s);switch(i){case Vv:return r*t;case Xv:return r*t/l.components*l.byteLength;case fp:return r*t/l.components*l.byteLength;case Ws:return r*t*2/l.components*l.byteLength;case hp:return r*t*2/l.components*l.byteLength;case kv:return r*t*3/l.components*l.byteLength;case Pi:return r*t*4/l.components*l.byteLength;case dp:return r*t*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $c:case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ed:case Td:return Math.max(r,16)*Math.max(t,8)/4;case yd:case bd:return Math.max(r,8)*Math.max(t,8)/2;case Ad:case Rd:case wd:case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Cd:case nu:case Ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Od:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Id:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case kd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case jd:case qd:case Yd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case iu:case Qd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function SE(r){switch(r){case hi:case zv:return{byteLength:1,components:1};case rl:case Bv:case Aa:return{byteLength:2,components:1};case cp:case up:return{byteLength:2,components:4};case Ki:case lp:case ji:return{byteLength:4,components:1};case Hv:case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);function cx(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function ME(r){const t=new WeakMap;function i(p,m){const d=p.array,_=p.usage,x=d.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,d,_),p.onUploadCallback();let y;if(d instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=r.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=r.SHORT;else if(d instanceof Uint32Array)y=r.UNSIGNED_INT;else if(d instanceof Int32Array)y=r.INT;else if(d instanceof Int8Array)y=r.BYTE;else if(d instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,d){const _=m.array,x=m.updateRanges;if(r.bindBuffer(d,p),x.length===0)r.bufferSubData(d,0,_);else{x.sort((y,T)=>y.start-T.start);let g=0;for(let y=1;y<x.length;y++){const T=x[g],w=x[y];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,x[g]=w)}x.length=g+1;for(let y=0,T=x.length;y<T;y++){const w=x[y];r.bufferSubData(d,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var yE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EE=`#ifdef USE_ALPHAHASH
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
#endif`,bE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CE=`#ifdef USE_AOMAP
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
#endif`,wE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DE=`#ifdef USE_BATCHING
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
#endif`,UE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PE=`#ifdef USE_IRIDESCENCE
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
#endif`,IE=`#ifdef USE_BUMPMAP
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
#endif`,FE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,WE=`#define PI 3.141592653589793
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
} // validated`,jE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qE=`vec3 transformedNormal = objectNormal;
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
#endif`,YE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JE="gl_FragColor = linearToOutputTexel( gl_FragColor );",$E=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tb=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cb=`#ifdef USE_GRADIENTMAP
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
}`,ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,db=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xb=`PhysicalMaterial material;
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
#endif`,Sb=`uniform sampler2D dfgLUT;
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
}`,Mb=`
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
#endif`,yb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ub=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lb=`#if defined( USE_POINTS_UV )
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
#endif`,Nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ob=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`#ifdef USE_MORPHTARGETS
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
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
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
#endif`,jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oT=`float getShadowMask() {
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
}`,lT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cT=`#ifdef USE_SKINNING
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
#endif`,uT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fT=`#ifdef USE_SKINNING
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
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gT=`#ifdef USE_TRANSMISSION
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
#endif`,_T=`#ifdef USE_TRANSMISSION
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ET=`uniform sampler2D t2D;
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
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`#include <common>
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
}`,wT=`#if DEPTH_PACKING == 3200
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
}`,DT=`#define DISTANCE
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
}`,UT=`#define DISTANCE
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`uniform float scale;
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
}`,PT=`uniform vec3 diffuse;
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
}`,IT=`#include <common>
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
}`,FT=`uniform vec3 diffuse;
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
}`,zT=`#define LAMBERT
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
}`,BT=`#define LAMBERT
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
}`,HT=`#define MATCAP
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
}`,GT=`#define MATCAP
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
}`,VT=`#define NORMAL
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
}`,kT=`#define NORMAL
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
}`,XT=`#define PHONG
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
}`,WT=`#define PHONG
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
}`,jT=`#define STANDARD
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
}`,qT=`#define STANDARD
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
}`,YT=`#define TOON
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
}`,ZT=`#define TOON
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
}`,KT=`uniform float size;
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
}`,QT=`uniform vec3 diffuse;
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
}`,JT=`#include <common>
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
}`,$T=`uniform vec3 color;
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
}`,t1=`uniform float rotation;
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
}`,e1=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:yE,alphahash_pars_fragment:EE,alphamap_fragment:bE,alphamap_pars_fragment:TE,alphatest_fragment:AE,alphatest_pars_fragment:RE,aomap_fragment:CE,aomap_pars_fragment:wE,batching_pars_vertex:DE,batching_vertex:UE,begin_vertex:LE,beginnormal_vertex:NE,bsdfs:OE,iridescence_fragment:PE,bumpmap_pars_fragment:IE,clipping_planes_fragment:FE,clipping_planes_pars_fragment:zE,clipping_planes_pars_vertex:BE,clipping_planes_vertex:HE,color_fragment:GE,color_pars_fragment:VE,color_pars_vertex:kE,color_vertex:XE,common:WE,cube_uv_reflection_fragment:jE,defaultnormal_vertex:qE,displacementmap_pars_vertex:YE,displacementmap_vertex:ZE,emissivemap_fragment:KE,emissivemap_pars_fragment:QE,colorspace_fragment:JE,colorspace_pars_fragment:$E,envmap_fragment:tb,envmap_common_pars_fragment:eb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:pb,envmap_vertex:ab,fog_vertex:sb,fog_pars_vertex:rb,fog_fragment:ob,fog_pars_fragment:lb,gradientmap_pars_fragment:cb,lightmap_pars_fragment:ub,lights_lambert_fragment:fb,lights_lambert_pars_fragment:hb,lights_pars_begin:db,lights_toon_fragment:mb,lights_toon_pars_fragment:gb,lights_phong_fragment:_b,lights_phong_pars_fragment:vb,lights_physical_fragment:xb,lights_physical_pars_fragment:Sb,lights_fragment_begin:Mb,lights_fragment_maps:yb,lights_fragment_end:Eb,lightprobes_pars_fragment:bb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Rb,logdepthbuf_vertex:Cb,map_fragment:wb,map_pars_fragment:Db,map_particle_fragment:Ub,map_particle_pars_fragment:Lb,metalnessmap_fragment:Nb,metalnessmap_pars_fragment:Ob,morphinstance_vertex:Pb,morphcolor_vertex:Ib,morphnormal_vertex:Fb,morphtarget_pars_vertex:zb,morphtarget_vertex:Bb,normal_fragment_begin:Hb,normal_fragment_maps:Gb,normal_pars_fragment:Vb,normal_pars_vertex:kb,normal_vertex:Xb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:jb,clearcoat_normal_fragment_maps:qb,clearcoat_pars_fragment:Yb,iridescence_pars_fragment:Zb,opaque_fragment:Kb,packing:Qb,premultiplied_alpha_fragment:Jb,project_vertex:$b,dithering_fragment:tT,dithering_pars_fragment:eT,roughnessmap_fragment:nT,roughnessmap_pars_fragment:iT,shadowmap_pars_fragment:aT,shadowmap_pars_vertex:sT,shadowmap_vertex:rT,shadowmask_pars_fragment:oT,skinbase_vertex:lT,skinning_pars_vertex:cT,skinning_vertex:uT,skinnormal_vertex:fT,specularmap_fragment:hT,specularmap_pars_fragment:dT,tonemapping_fragment:pT,tonemapping_pars_fragment:mT,transmission_fragment:gT,transmission_pars_fragment:_T,uv_pars_fragment:vT,uv_pars_vertex:xT,uv_vertex:ST,worldpos_vertex:MT,background_vert:yT,background_frag:ET,backgroundCube_vert:bT,backgroundCube_frag:TT,cube_vert:AT,cube_frag:RT,depth_vert:CT,depth_frag:wT,distance_vert:DT,distance_frag:UT,equirect_vert:LT,equirect_frag:NT,linedashed_vert:OT,linedashed_frag:PT,meshbasic_vert:IT,meshbasic_frag:FT,meshlambert_vert:zT,meshlambert_frag:BT,meshmatcap_vert:HT,meshmatcap_frag:GT,meshnormal_vert:VT,meshnormal_frag:kT,meshphong_vert:XT,meshphong_frag:WT,meshphysical_vert:jT,meshphysical_frag:qT,meshtoon_vert:YT,meshtoon_frag:ZT,points_vert:KT,points_frag:QT,shadow_vert:JT,shadow_frag:$T,sprite_vert:t1,sprite_frag:e1},Ht={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Wi={basic:{uniforms:Hn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Hn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Hn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Hn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Hn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Hn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Hn([Ht.points,Ht.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Hn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Hn([Ht.common,Ht.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Hn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Hn([Ht.sprite,Ht.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:Hn([Ht.common,Ht.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:Hn([Ht.lights,Ht.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Wi.physical={uniforms:Hn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const qc={r:0,b:0,g:0},n1=new on,ux=new se;ux.set(-1,0,0,0,1,0,0,0,1);function i1(r,t,i,s,l,c){const h=new fe(0);let p=l===!0?0:1,m,d,_=null,x=0,g=null;function y(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const P=C.backgroundBlurriness>0;N=t.get(N,P)}return N}function T(C){let N=!1;const P=y(C);P===null?M(h,p):P&&P.isColor&&(M(P,1),N=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(C,N){const P=y(N);P&&(P.isCubeTexture||P.mapping===hu)?(d===void 0&&(d=new mi(new fl(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Zr(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(z,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=P,d.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(N.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(ux),d.material.toneMapped=Te.getTransfer(P.colorSpace)!==Be,(_!==P||x!==P.version||g!==r.toneMapping)&&(d.material.needsUpdate=!0,_=P,x=P.version,g=r.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new mi(new Qr(2,2),new Qi({name:"BackgroundMaterial",uniforms:Zr(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Te.getTransfer(P.colorSpace)!==Be,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=P,x=P.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function M(C,N){C.getRGB(qc,ax(r)),i.buffers.color.setClear(qc.r,qc.g,qc.b,N,c)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(C,N=1){h.set(C),p=N,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,M(h,p)},render:T,addToRenderList:w,dispose:S}}function a1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(B,K,ct,ut,W){let L=!1;const H=x(B,ut,ct,K);c!==H&&(c=H,d(c.object)),L=y(B,ut,ct,W),L&&T(B,ut,ct,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,P(B,K,ct,ut),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function m(){return r.createVertexArray()}function d(B){return r.bindVertexArray(B)}function _(B){return r.deleteVertexArray(B)}function x(B,K,ct,ut){const W=ut.wireframe===!0;let L=s[K.id];L===void 0&&(L={},s[K.id]=L);const H=B.isInstancedMesh===!0?B.id:0;let et=L[H];et===void 0&&(et={},L[H]=et);let mt=et[ct.id];mt===void 0&&(mt={},et[ct.id]=mt);let Mt=mt[W];return Mt===void 0&&(Mt=g(m()),mt[W]=Mt),Mt}function g(B){const K=[],ct=[],ut=[];for(let W=0;W<i;W++)K[W]=0,ct[W]=0,ut[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ct,attributeDivisors:ut,object:B,attributes:{},index:null}}function y(B,K,ct,ut){const W=c.attributes,L=K.attributes;let H=0;const et=ct.getAttributes();for(const mt in et)if(et[mt].location>=0){const F=W[mt];let J=L[mt];if(J===void 0&&(mt==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),mt==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),F===void 0||F.attribute!==J||J&&F.data!==J.data)return!0;H++}return c.attributesNum!==H||c.index!==ut}function T(B,K,ct,ut){const W={},L=K.attributes;let H=0;const et=ct.getAttributes();for(const mt in et)if(et[mt].location>=0){let F=L[mt];F===void 0&&(mt==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),mt==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));const J={};J.attribute=F,F&&F.data&&(J.data=F.data),W[mt]=J,H++}c.attributes=W,c.attributesNum=H,c.index=ut}function w(){const B=c.newAttributes;for(let K=0,ct=B.length;K<ct;K++)B[K]=0}function M(B){S(B,0)}function S(B,K){const ct=c.newAttributes,ut=c.enabledAttributes,W=c.attributeDivisors;ct[B]=1,ut[B]===0&&(r.enableVertexAttribArray(B),ut[B]=1),W[B]!==K&&(r.vertexAttribDivisor(B,K),W[B]=K)}function C(){const B=c.newAttributes,K=c.enabledAttributes;for(let ct=0,ut=K.length;ct<ut;ct++)K[ct]!==B[ct]&&(r.disableVertexAttribArray(ct),K[ct]=0)}function N(B,K,ct,ut,W,L,H){H===!0?r.vertexAttribIPointer(B,K,ct,W,L):r.vertexAttribPointer(B,K,ct,ut,W,L)}function P(B,K,ct,ut){w();const W=ut.attributes,L=ct.getAttributes(),H=K.defaultAttributeValues;for(const et in L){const mt=L[et];if(mt.location>=0){let Mt=W[et];if(Mt===void 0&&(et==="instanceMatrix"&&B.instanceMatrix&&(Mt=B.instanceMatrix),et==="instanceColor"&&B.instanceColor&&(Mt=B.instanceColor)),Mt!==void 0){const F=Mt.normalized,J=Mt.itemSize,St=t.get(Mt);if(St===void 0)continue;const At=St.buffer,Ct=St.type,lt=St.bytesPerElement,yt=Ct===r.INT||Ct===r.UNSIGNED_INT||Mt.gpuType===lp;if(Mt.isInterleavedBufferAttribute){const Z=Mt.data,Tt=Z.stride,te=Mt.offset;if(Z.isInstancedInterleavedBuffer){for(let Qt=0;Qt<mt.locationSize;Qt++)S(mt.location+Qt,Z.meshPerAttribute);B.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Qt=0;Qt<mt.locationSize;Qt++)M(mt.location+Qt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let Qt=0;Qt<mt.locationSize;Qt++)N(mt.location+Qt,J/mt.locationSize,Ct,F,Tt*lt,(te+J/mt.locationSize*Qt)*lt,yt)}else{if(Mt.isInstancedBufferAttribute){for(let Z=0;Z<mt.locationSize;Z++)S(mt.location+Z,Mt.meshPerAttribute);B.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Z=0;Z<mt.locationSize;Z++)M(mt.location+Z);r.bindBuffer(r.ARRAY_BUFFER,At);for(let Z=0;Z<mt.locationSize;Z++)N(mt.location+Z,J/mt.locationSize,Ct,F,J*lt,J/mt.locationSize*Z*lt,yt)}}else if(H!==void 0){const F=H[et];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(mt.location,F);break;case 3:r.vertexAttrib3fv(mt.location,F);break;case 4:r.vertexAttrib4fv(mt.location,F);break;default:r.vertexAttrib1fv(mt.location,F)}}}}C()}function z(){O();for(const B in s){const K=s[B];for(const ct in K){const ut=K[ct];for(const W in ut){const L=ut[W];for(const H in L)_(L[H].object),delete L[H];delete ut[W]}}delete s[B]}}function U(B){if(s[B.id]===void 0)return;const K=s[B.id];for(const ct in K){const ut=K[ct];for(const W in ut){const L=ut[W];for(const H in L)_(L[H].object),delete L[H];delete ut[W]}}delete s[B.id]}function I(B){for(const K in s){const ct=s[K];for(const ut in ct){const W=ct[ut];if(W[B.id]===void 0)continue;const L=W[B.id];for(const H in L)_(L[H].object),delete L[H];delete W[B.id]}}}function b(B){for(const K in s){const ct=s[K],ut=B.isInstancedMesh===!0?B.id:0,W=ct[ut];if(W!==void 0){for(const L in W){const H=W[L];for(const et in H)_(H[et].object),delete H[et];delete W[L]}delete ct[ut],Object.keys(ct).length===0&&delete s[K]}}}function O(){X(),h=!0,c!==l&&(c=l,d(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:X,dispose:z,releaseStatesOfGeometry:U,releaseStatesOfObject:b,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:M,disableUnusedAttributes:C}}function s1(r,t,i){let s;function l(m){s=m}function c(m,d){r.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,_){_!==0&&(r.drawArraysInstanced(s,m,d,_),i.update(d,s,_))}function p(m,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,_);let g=0;for(let y=0;y<_;y++)g+=d[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function r1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Pi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const b=I===Aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==hi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ji&&!b)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const _=m(d);_!==d&&(Jt("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const x=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:P,maxSamples:z,samples:U}}function o1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new cs,p=new se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const y=x.length!==0||g||s!==0||l;return l=g,s=x.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,g){i=_(x,g,0)},this.setState=function(x,g,y){const T=x.clippingPlanes,w=x.clipIntersection,M=x.clipShadows,S=r.get(x);if(!l||T===null||T.length===0||c&&!M)c?_(null):d();else{const C=c?0:s,N=C*4;let P=S.clippingState||null;m.value=P,P=_(T,g,N,y);for(let z=0;z!==N;++z)P[z]=i[z];S.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(x,g,y,T){const w=x!==null?x.length:0;let M=null;if(w!==0){if(M=m.value,T!==!0||M===null){const S=y+w*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,P=y;N!==w;++N,P+=4)h.copy(x[N]).applyMatrix4(C,p),h.normal.toArray(M,P),M[P+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const hs=4,tv=[.125,.215,.35,.446,.526,.582],Gs=20,l1=256,tl=new Mp,ev=new fe;let nd=null,id=0,ad=0,sd=!1;const c1=new $;class nv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=c1}=c;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nd,id,ad),this._renderer.xr.enabled=sd,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Xs||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Aa,format:Pi,colorSpace:au,depthBuffer:!1},l=iv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=u1(c)),this._blurMaterial=h1(c,t,i),this._ggxMaterial=f1(c,t,i)}return l}_compileMaterial(t){const i=new mi(new pi,t);this._renderer.compile(i,tl)}_sceneToCubeUV(t,i,s,l,c){const m=new fi(90,1,i,s),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,y=x.toneMapping;x.getClearColor(ev),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new fl,new Jv({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,S=!0):(M.color.copy(ev),S=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[N],c.y,c.z)):P===1?(m.up.set(0,0,d[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[N],c.z)):(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[N]));const z=this._cubeSize;Br(l,P*z,N>2?z:0,z,z),x.setRenderTarget(l),S&&x.render(w,m),x.render(t,m)}x.toneMapping=y,x.autoClear=g,t.background=C}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Xs||t.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,tl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(d*d-_*_),g=0+d*1.25,y=x*g,{_lodMax:T}=this,w=this._sizeLods[s],M=3*w*(s>T-hs?s-T+hs:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=T-i,Br(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(p,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Br(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(p,tl)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ae("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=d;const g=d.uniforms,y=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Gs-1),w=c/T,M=isFinite(c)?1+Math.floor(_*w):Gs;M>Gs&&Jt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Gs}`);const S=[];let C=0;for(let I=0;I<Gs;++I){const b=I/w,O=Math.exp(-b*b/2);S.push(O),I===0?C+=O:I<M&&(C+=2*O)}for(let I=0;I<S.length;I++)S[I]=S[I]/C;g.envMap.value=t.texture,g.samples.value=M,g.weights.value=S,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=T,g.mipInt.value=N-s;const P=this._sizeLods[l],z=3*P*(l>N-hs?l-N+hs:0),U=4*(this._cubeSize-P);Br(i,z,U,3*P,2*P),m.setRenderTarget(i),m.render(x,tl)}}function u1(r){const t=[],i=[],s=[];let l=r;const c=r-hs+1+tv.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);t.push(p);let m=1/p;h>r-hs?m=tv[h-r+hs-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),_=-d,x=1+d,g=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,T=6,w=3,M=2,S=1,C=new Float32Array(w*T*y),N=new Float32Array(M*T*y),P=new Float32Array(S*T*y);for(let U=0;U<y;U++){const I=U%3*2/3-1,b=U>2?0:-1,O=[I,b,0,I+2/3,b,0,I+2/3,b+1,0,I,b,0,I+2/3,b+1,0,I,b+1,0];C.set(O,w*T*U),N.set(g,M*T*U);const X=[U,U,U,U,U,U];P.set(X,S*T*U)}const z=new pi;z.setAttribute("position",new di(C,w)),z.setAttribute("uv",new di(N,M)),z.setAttribute("faceIndex",new di(P,S)),s.push(new mi(z,null)),l>hs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function iv(r,t,i){const s=new Zi(r,t,i);return s.texture.mapping=hu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function f1(r,t,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function h1(r,t,i){const s=new Float32Array(Gs),l=new $(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:mu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function av(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function sv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}class fx extends Zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new tx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new fl(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Qn,blending:ba});c.uniforms.tEquirect.value=i;const h=new mi(l,c),p=i.minFilter;return i.minFilter===Vs&&(i.minFilter=zn),new gE(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function d1(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Rh||y===Ch)if(t.has(g)){const T=t.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new fx(T.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",d),p(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,T=y===Rh||y===Ch,w=y===Xs||y===qr;if(T||w){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new nv(r)),M=T?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const C=g.image;return T&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new nv(r)),M=T?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function p(g,y){return y===Rh?g.mapping=Xs:y===Ch&&(g.mapping=qr),g}function m(g){let y=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&y++;return y===T}function d(g){const y=g.target;y.removeEventListener("dispose",d);const T=t.get(y);T!==void 0&&(t.delete(y),T.dispose())}function _(g){const y=g.target;y.removeEventListener("dispose",_);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function x(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function p1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&$d("WebGLRenderer: "+s+" extension not supported."),l}}}function m1(r,t,i,s){const l={},c=new WeakMap;function h(x){const g=x.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(x,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(x){const g=x.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function d(x){const g=[],y=x.index,T=x.attributes.position;let w=0;if(T===void 0)return;if(y!==null){const C=y.array;w=y.version;for(let N=0,P=C.length;N<P;N+=3){const z=C[N+0],U=C[N+1],I=C[N+2];g.push(z,U,U,I,I,z)}}else{const C=T.array;w=T.version;for(let N=0,P=C.length/3-1;N<P;N+=3){const z=N+0,U=N+1,I=N+2;g.push(z,U,U,I,I,z)}}const M=new(T.count>=65535?Qv:Kv)(g,1);M.version=w;const S=c.get(x);S&&t.remove(S),c.set(x,M)}function _(x){const g=c.get(x);if(g){const y=x.index;y!==null&&g.version<y.version&&d(x)}else d(x);return c.get(x)}return{get:p,update:m,getWireframeAttribute:_}}function g1(r,t,i){let s;function l(x){s=x}let c,h;function p(x){c=x.type,h=x.bytesPerElement}function m(x,g){r.drawElements(s,g,c,x*h),i.update(g,s,1)}function d(x,g,y){y!==0&&(r.drawElementsInstanced(s,g,c,x*h,y),i.update(g,s,y))}function _(x,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,x,0,y);let w=0;for(let M=0;M<y;M++)w+=g[M];i.update(w,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=_}function _1(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ae("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function v1(r,t,i){const s=new WeakMap,l=new rn;function c(h,p,m){const d=h.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==x){let X=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",X)};var y=X;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let P=0;T===!0&&(P=1),w===!0&&(P=2),M===!0&&(P=3);let z=p.attributes.position.count*P,U=1;z>t.maxTextureSize&&(U=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const I=new Float32Array(z*U*4*x),b=new jv(I,z,U,x);b.type=ji,b.needsUpdate=!0;const O=P*4;for(let B=0;B<x;B++){const K=S[B],ct=C[B],ut=N[B],W=z*U*4*B;for(let L=0;L<K.count;L++){const H=L*O;T===!0&&(l.fromBufferAttribute(K,L),I[W+H+0]=l.x,I[W+H+1]=l.y,I[W+H+2]=l.z,I[W+H+3]=0),w===!0&&(l.fromBufferAttribute(ct,L),I[W+H+4]=l.x,I[W+H+5]=l.y,I[W+H+6]=l.z,I[W+H+7]=0),M===!0&&(l.fromBufferAttribute(ut,L),I[W+H+8]=l.x,I[W+H+9]=l.y,I[W+H+10]=l.z,I[W+H+11]=ut.itemSize===4?l.w:1)}}g={count:x,texture:b,size:new re(z,U)},s.set(p,g),p.addEventListener("dispose",X)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<d.length;M++)T+=d[M];const w=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",d)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function x1(r,t,i,s,l){let c=new WeakMap;function h(d){const _=l.render.frame,x=d.geometry,g=t.get(d,x);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==_&&(i.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,r.ARRAY_BUFFER),c.set(d,_))),d.isSkinnedMesh){const y=d.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return g}function p(){c=new WeakMap}function m(d){const _=d.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:p}}const S1={[Uv]:"LINEAR_TONE_MAPPING",[Lv]:"REINHARD_TONE_MAPPING",[Nv]:"CINEON_TONE_MAPPING",[fu]:"ACES_FILMIC_TONE_MAPPING",[Pv]:"AGX_TONE_MAPPING",[Iv]:"NEUTRAL_TONE_MAPPING",[Ov]:"CUSTOM_TONE_MAPPING"};function M1(r,t,i,s,l){const c=new Zi(t,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Yr(t,i):void 0}),h=new Zi(t,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),p=new pi;p.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Jn([0,2,0,0,2,0],2));const m=new rE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new mi(p,m),_=new Mp(-1,1,1,-1,0,1);let x=null,g=null,y=!1,T,w=null,M=[],S=!1;this.setSize=function(C,N){c.setSize(C,N),h.setSize(C,N);for(let P=0;P<M.length;P++){const z=M[P];z.setSize&&z.setSize(C,N)}},this.setEffects=function(C){M=C,S=M.length>0&&M[0].isRenderPass===!0;const N=c.width,P=c.height;for(let z=0;z<M.length;z++){const U=M[z];U.setSize&&U.setSize(N,P)}},this.begin=function(C,N){if(y||C.toneMapping===Yi&&M.length===0)return!1;if(w=N,N!==null){const P=N.width,z=N.height;(c.width!==P||c.height!==z)&&this.setSize(P,z)}return S===!1&&C.setRenderTarget(c),T=C.toneMapping,C.toneMapping=Yi,!0},this.hasRenderPass=function(){return S},this.end=function(C,N){C.toneMapping=T,y=!0;let P=c,z=h;for(let U=0;U<M.length;U++){const I=M[U];if(I.enabled!==!1&&(I.render(C,z,P,N),I.needsSwap!==!1)){const b=P;P=z,z=b}}if(x!==C.outputColorSpace||g!==C.toneMapping){x=C.outputColorSpace,g=C.toneMapping,m.defines={},Te.getTransfer(x)===Be&&(m.defines.SRGB_TRANSFER="");const U=S1[g];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(w),C.render(d,_),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),p.dispose(),m.dispose()}}const hx=new Vn,ep=new Yr(1,1),dx=new jv,px=new Fy,mx=new tx,rv=[],ov=[],lv=new Float32Array(16),cv=new Float32Array(9),uv=new Float32Array(4);function Jr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=rv[l];if(c===void 0&&(c=new Float32Array(l),rv[l]=c),t!==0){s.toArray(c,0);for(let h=1,p=0;h!==t;++h)p+=i,r[h].toArray(c,p)}return c}function Mn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function yn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function gu(r,t){let i=ov[t];i===void 0&&(i=new Int32Array(t),ov[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function y1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function E1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2fv(this.addr,t),yn(i,t)}}function b1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Mn(i,t))return;r.uniform3fv(this.addr,t),yn(i,t)}}function T1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4fv(this.addr,t),yn(i,t)}}function A1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Mn(i,s))return;uv.set(s),r.uniformMatrix2fv(this.addr,!1,uv),yn(i,s)}}function R1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Mn(i,s))return;cv.set(s),r.uniformMatrix3fv(this.addr,!1,cv),yn(i,s)}}function C1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Mn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Mn(i,s))return;lv.set(s),r.uniformMatrix4fv(this.addr,!1,lv),yn(i,s)}}function w1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function D1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2iv(this.addr,t),yn(i,t)}}function U1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Mn(i,t))return;r.uniform3iv(this.addr,t),yn(i,t)}}function L1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4iv(this.addr,t),yn(i,t)}}function N1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function O1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Mn(i,t))return;r.uniform2uiv(this.addr,t),yn(i,t)}}function P1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Mn(i,t))return;r.uniform3uiv(this.addr,t),yn(i,t)}}function I1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Mn(i,t))return;r.uniform4uiv(this.addr,t),yn(i,t)}}function F1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(ep.compareFunction=i.isReversedDepthBuffer()?mp:pp,c=ep):c=hx,i.setTexture2D(t||c,l)}function z1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||px,l)}function B1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||mx,l)}function H1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||dx,l)}function G1(r){switch(r){case 5126:return y1;case 35664:return E1;case 35665:return b1;case 35666:return T1;case 35674:return A1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return w1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return L1;case 5125:return N1;case 36294:return O1;case 36295:return P1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return H1}}function V1(r,t){r.uniform1fv(this.addr,t)}function k1(r,t){const i=Jr(t,this.size,2);r.uniform2fv(this.addr,i)}function X1(r,t){const i=Jr(t,this.size,3);r.uniform3fv(this.addr,i)}function W1(r,t){const i=Jr(t,this.size,4);r.uniform4fv(this.addr,i)}function j1(r,t){const i=Jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function q1(r,t){const i=Jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Y1(r,t){const i=Jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Z1(r,t){r.uniform1iv(this.addr,t)}function K1(r,t){r.uniform2iv(this.addr,t)}function Q1(r,t){r.uniform3iv(this.addr,t)}function J1(r,t){r.uniform4iv(this.addr,t)}function $1(r,t){r.uniform1uiv(this.addr,t)}function tA(r,t){r.uniform2uiv(this.addr,t)}function eA(r,t){r.uniform3uiv(this.addr,t)}function nA(r,t){r.uniform4uiv(this.addr,t)}function iA(r,t,i){const s=this.cache,l=t.length,c=gu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=ep:h=hx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,c[p])}function aA(r,t,i){const s=this.cache,l=t.length,c=gu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||px,c[h])}function sA(r,t,i){const s=this.cache,l=t.length,c=gu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||mx,c[h])}function rA(r,t,i){const s=this.cache,l=t.length,c=gu(i,l);Mn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||dx,c[h])}function oA(r){switch(r){case 5126:return V1;case 35664:return k1;case 35665:return X1;case 35666:return W1;case 35674:return j1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return Z1;case 35667:case 35671:return K1;case 35668:case 35672:return Q1;case 35669:case 35673:return J1;case 5125:return $1;case 36294:return tA;case 36295:return eA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return rA}}class lA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=G1(i.type)}}class cA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=oA(i.type)}}class uA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function fv(r,t){r.seq.push(t),r.map[t.id]=t}function fA(r,t,i){const s=r.name,l=s.length;for(rd.lastIndex=0;;){const c=rd.exec(s),h=rd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){fv(i,d===void 0?new lA(p,r,t):new cA(p,r,t));break}else{let x=i.map[p];x===void 0&&(x=new uA(p),fv(i,x)),i=x}}}class eu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=t.getActiveUniform(i,h),m=t.getUniformLocation(i,p.name);fA(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function hv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const hA=37297;let dA=0;function pA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const dv=new se;function mA(r){Te._getMatrix(dv,Te.workingColorSpace,r);const t=`mat3( ${dv.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(r)){case su:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function pv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+pA(r.getShaderSource(t),p)}else return c}function gA(r,t){const i=mA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const _A={[Uv]:"Linear",[Lv]:"Reinhard",[Nv]:"Cineon",[fu]:"ACESFilmic",[Pv]:"AgX",[Iv]:"Neutral",[Ov]:"Custom"};function vA(r,t){const i=_A[t];return i===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new $;function xA(){Te.getLuminanceCoefficients(Yc);const r=Yc.x.toFixed(4),t=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function MA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function yA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:p}}return i}function il(r){return r!==""}function mv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const EA=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(r){return r.replace(EA,TA)}const bA=new Map;function TA(r,t){let i=he[t];if(i===void 0){const s=bA.get(t);if(s!==void 0)i=he[s],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return np(i)}const AA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(r){return r.replace(AA,RA)}function RA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function vv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const CA={[Kc]:"SHADOWMAP_TYPE_PCF",[nl]:"SHADOWMAP_TYPE_VSM"};function wA(r){return CA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const DA={[Xs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function UA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":DA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const LA={[qr]:"ENVMAP_MODE_REFRACTION"};function NA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":LA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OA={[Dv]:"ENVMAP_BLENDING_MULTIPLY",[my]:"ENVMAP_BLENDING_MIX",[gy]:"ENVMAP_BLENDING_ADD"};function PA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":OA[r.combine]||"ENVMAP_BLENDING_NONE"}function IA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function FA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=wA(i),d=UA(i),_=NA(i),x=PA(i),g=IA(i),y=SA(i),T=MA(c),w=l.createProgram();let M,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(il).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(il).join(`
`),S.length>0&&(S+=`
`)):(M=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),S=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?he.tonemapping_pars_fragment:"",i.toneMapping!==Yi?vA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,gA("linearToOutputTexel",i.outputColorSpace),xA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(il).join(`
`)),h=np(h),h=mv(h,i),h=gv(h,i),p=np(p),p=mv(p,i),p=gv(p,i),h=_v(h),p=_v(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===E_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===E_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=C+M+h,P=C+S+p,z=hv(l,l.VERTEX_SHADER,N),U=hv(l,l.FRAGMENT_SHADER,P);l.attachShader(w,z),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(B){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(w)||"",ct=l.getShaderInfoLog(z)||"",ut=l.getShaderInfoLog(U)||"",W=K.trim(),L=ct.trim(),H=ut.trim();let et=!0,mt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(et=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,z,U);else{const Mt=pv(l,z,"vertex"),F=pv(l,U,"fragment");Ae("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+Mt+`
`+F)}else W!==""?Jt("WebGLProgram: Program Info Log:",W):(L===""||H==="")&&(mt=!1);mt&&(B.diagnostics={runnable:et,programLog:W,vertexShader:{log:L,prefix:M},fragmentShader:{log:H,prefix:S}})}l.deleteShader(z),l.deleteShader(U),b=new eu(l,w),O=yA(l,w)}let b;this.getUniforms=function(){return b===void 0&&I(this),b};let O;this.getAttributes=function(){return O===void 0&&I(this),O};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(w,hA)),X},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=U,this}let zA=0;class BA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new HA(t),i.set(t,s)),s}}class HA{constructor(t){this.id=zA++,this.code=t,this.usedTimes=0}}function GA(r){return r===Ws||r===nu||r===iu}function VA(r,t,i,s,l,c){const h=new qv,p=new BA,m=new Set,d=[],_=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,O,X,B,K,ct){const ut=B.fog,W=K.geometry,L=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,et=t.get(b.envMap||L,H),mt=et&&et.mapping===hu?et.image.height:null,Mt=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&Jt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const F=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,J=F!==void 0?F.length:0;let St=0;W.morphAttributes.position!==void 0&&(St=1),W.morphAttributes.normal!==void 0&&(St=2),W.morphAttributes.color!==void 0&&(St=3);let At,Ct,lt,yt;if(Mt){const ee=Wi[Mt];At=ee.vertexShader,Ct=ee.fragmentShader}else At=b.vertexShader,Ct=b.fragmentShader,p.update(b),lt=p.getVertexShaderID(b),yt=p.getFragmentShaderID(b);const Z=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),te=K.isInstancedMesh===!0,Qt=K.isBatchedMesh===!0,We=!!b.map,de=!!b.matcap,Me=!!et,Ne=!!b.aoMap,ce=!!b.lightMap,ln=!!b.bumpMap,Ye=!!b.normalMap,An=!!b.displacementMap,q=!!b.emissiveMap,en=!!b.metalnessMap,pe=!!b.roughnessMap,He=b.anisotropy>0,wt=b.clearcoat>0,Qe=b.dispersion>0,D=b.iridescence>0,E=b.sheen>0,tt=b.transmission>0,vt=He&&!!b.anisotropyMap,bt=wt&&!!b.clearcoatMap,Dt=wt&&!!b.clearcoatNormalMap,Ot=wt&&!!b.clearcoatRoughnessMap,ht=D&&!!b.iridescenceMap,dt=D&&!!b.iridescenceThicknessMap,Pt=E&&!!b.sheenColorMap,It=E&&!!b.sheenRoughnessMap,Lt=!!b.specularMap,Ut=!!b.specularColorMap,ne=!!b.specularIntensityMap,ie=tt&&!!b.transmissionMap,ge=tt&&!!b.thicknessMap,V=!!b.gradientMap,Rt=!!b.alphaMap,gt=b.alphaTest>0,Bt=!!b.alphaHash,Nt=!!b.extensions;let Et=Yi;b.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Et=r.toneMapping);const jt={shaderID:Mt,shaderType:b.type,shaderName:b.name,vertexShader:At,fragmentShader:Ct,defines:b.defines,customVertexShaderID:lt,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&K._colorsTexture!==null,instancing:te,instancingColor:te&&K.instanceColor!==null,instancingMorph:te&&K.morphTexture!==null,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:We,matcap:de,envMap:Me,envMapMode:Me&&et.mapping,envMapCubeUVHeight:mt,aoMap:Ne,lightMap:ce,bumpMap:ln,normalMap:Ye,displacementMap:An,emissiveMap:q,normalMapObjectSpace:Ye&&b.normalMapType===xy,normalMapTangentSpace:Ye&&b.normalMapType===Jd,packedNormalMap:Ye&&b.normalMapType===Jd&&GA(b.normalMap.format),metalnessMap:en,roughnessMap:pe,anisotropy:He,anisotropyMap:vt,clearcoat:wt,clearcoatMap:bt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Ot,dispersion:Qe,iridescence:D,iridescenceMap:ht,iridescenceThicknessMap:dt,sheen:E,sheenColorMap:Pt,sheenRoughnessMap:It,specularMap:Lt,specularColorMap:Ut,specularIntensityMap:ne,transmission:tt,transmissionMap:ie,thicknessMap:ge,gradientMap:V,opaque:b.transparent===!1&&b.blending===kr&&b.alphaToCoverage===!1,alphaMap:Rt,alphaTest:gt,alphaHash:Bt,combine:b.combine,mapUv:We&&T(b.map.channel),aoMapUv:Ne&&T(b.aoMap.channel),lightMapUv:ce&&T(b.lightMap.channel),bumpMapUv:ln&&T(b.bumpMap.channel),normalMapUv:Ye&&T(b.normalMap.channel),displacementMapUv:An&&T(b.displacementMap.channel),emissiveMapUv:q&&T(b.emissiveMap.channel),metalnessMapUv:en&&T(b.metalnessMap.channel),roughnessMapUv:pe&&T(b.roughnessMap.channel),anisotropyMapUv:vt&&T(b.anisotropyMap.channel),clearcoatMapUv:bt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(b.sheenRoughnessMap.channel),specularMapUv:Lt&&T(b.specularMap.channel),specularColorMapUv:Ut&&T(b.specularColorMap.channel),specularIntensityMapUv:ne&&T(b.specularIntensityMap.channel),transmissionMapUv:ie&&T(b.transmissionMap.channel),thicknessMapUv:ge&&T(b.thicknessMap.channel),alphaMapUv:Rt&&T(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ye||He),vertexNormals:!!W.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!W.attributes.uv&&(We||Rt),fog:!!ut,useFog:b.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||W.attributes.normal===void 0&&Ye===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Tt,skinning:K.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:St,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ct.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:Et,decodeVideoTexture:We&&b.map.isVideoTexture===!0&&Te.getTransfer(b.map.colorSpace)===Be,decodeVideoTextureEmissive:q&&b.emissiveMap.isVideoTexture===!0&&Te.getTransfer(b.emissiveMap.colorSpace)===Be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ya,flipSided:b.side===Qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Nt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&b.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return jt.vertexUv1s=m.has(1),jt.vertexUv2s=m.has(2),jt.vertexUv3s=m.has(3),m.clear(),jt}function M(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const X in b.defines)O.push(X),O.push(b.defines[X]);return b.isRawShaderMaterial===!1&&(S(O,b),C(O,b),O.push(r.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function S(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function C(b,O){h.disableAll(),O.instancing&&h.enable(0),O.instancingColor&&h.enable(1),O.instancingMorph&&h.enable(2),O.matcap&&h.enable(3),O.envMap&&h.enable(4),O.normalMapObjectSpace&&h.enable(5),O.normalMapTangentSpace&&h.enable(6),O.clearcoat&&h.enable(7),O.iridescence&&h.enable(8),O.alphaTest&&h.enable(9),O.vertexColors&&h.enable(10),O.vertexAlphas&&h.enable(11),O.vertexUv1s&&h.enable(12),O.vertexUv2s&&h.enable(13),O.vertexUv3s&&h.enable(14),O.vertexTangents&&h.enable(15),O.anisotropy&&h.enable(16),O.alphaHash&&h.enable(17),O.batching&&h.enable(18),O.dispersion&&h.enable(19),O.batchingColor&&h.enable(20),O.gradientMap&&h.enable(21),O.packedNormalMap&&h.enable(22),O.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.reversedDepthBuffer&&h.enable(4),O.skinning&&h.enable(5),O.morphTargets&&h.enable(6),O.morphNormals&&h.enable(7),O.morphColors&&h.enable(8),O.premultipliedAlpha&&h.enable(9),O.shadowMapEnabled&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),O.decodeVideoTexture&&h.enable(19),O.decodeVideoTextureEmissive&&h.enable(20),O.alphaToCoverage&&h.enable(21),O.numLightProbeGrids>0&&h.enable(22),b.push(h.mask)}function N(b){const O=y[b.type];let X;if(O){const B=Wi[O];X=iE.clone(B.uniforms)}else X=b.uniforms;return X}function P(b,O){let X=_.get(O);return X!==void 0?++X.usedTimes:(X=new FA(r,O,b,l),d.push(X),_.set(O,X)),X}function z(b){if(--b.usedTimes===0){const O=d.indexOf(b);d[O]=d[d.length-1],d.pop(),_.delete(b.cacheKey),b.destroy()}}function U(b){p.remove(b)}function I(){p.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:N,acquireProgram:P,releaseProgram:z,releaseShaderCache:U,programs:d,dispose:I}}function kA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let p=r.get(h);return p===void 0&&(p={},r.set(h,p)),p}function s(h){r.delete(h)}function l(h,p,m){r.get(h)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function XA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function xv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Sv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,T,w,M,S){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:y,material:T,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},r[t]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=T,C.materialVariant=h(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=M,C.group=S),t++,C}function m(g,y,T,w,M,S){const C=p(g,y,T,w,M,S);T.transmission>0?s.push(C):T.transparent===!0?l.push(C):i.push(C)}function d(g,y,T,w,M,S){const C=p(g,y,T,w,M,S);T.transmission>0?s.unshift(C):T.transparent===!0?l.unshift(C):i.unshift(C)}function _(g,y){i.length>1&&i.sort(g||XA),s.length>1&&s.sort(y||xv),l.length>1&&l.sort(y||xv)}function x(){for(let g=t,y=r.length;g<y;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:x,sort:_}}function WA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Sv,r.set(s,[h])):l>=c.length?(h=new Sv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function jA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new fe};break;case"SpotLight":i={position:new $,direction:new $,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new $,halfWidth:new $,halfHeight:new $};break}return r[t.id]=i,i}}}function qA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let YA=0;function ZA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function KA(r){const t=new jA,i=qA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new $);const l=new $,c=new on,h=new on;function p(d){let _=0,x=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,T=0,w=0,M=0,S=0,C=0,N=0,P=0,z=0,U=0,I=0;d.sort(ZA);for(let O=0,X=d.length;O<X;O++){const B=d[O],K=B.color,ct=B.intensity,ut=B.distance;let W=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ws?W=B.shadow.map.texture:W=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)_+=K.r*ct,x+=K.g*ct,g+=K.b*ct;else if(B.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(B.sh.coefficients[L],ct);I++}else if(B.isDirectionalLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const H=B.shadow,et=i.get(B);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,s.directionalShadow[y]=et,s.directionalShadowMap[y]=W,s.directionalShadowMatrix[y]=B.shadow.matrix,C++}s.directional[y]=L,y++}else if(B.isSpotLight){const L=t.get(B);L.position.setFromMatrixPosition(B.matrixWorld),L.color.copy(K).multiplyScalar(ct),L.distance=ut,L.coneCos=Math.cos(B.angle),L.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),L.decay=B.decay,s.spot[w]=L;const H=B.shadow;if(B.map&&(s.spotLightMap[z]=B.map,z++,H.updateMatrices(B),B.castShadow&&U++),s.spotLightMatrix[w]=H.matrix,B.castShadow){const et=i.get(B);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,s.spotShadow[w]=et,s.spotShadowMap[w]=W,P++}w++}else if(B.isRectAreaLight){const L=t.get(B);L.color.copy(K).multiplyScalar(ct),L.halfWidth.set(B.width*.5,0,0),L.halfHeight.set(0,B.height*.5,0),s.rectArea[M]=L,M++}else if(B.isPointLight){const L=t.get(B);if(L.color.copy(B.color).multiplyScalar(B.intensity),L.distance=B.distance,L.decay=B.decay,B.castShadow){const H=B.shadow,et=i.get(B);et.shadowIntensity=H.intensity,et.shadowBias=H.bias,et.shadowNormalBias=H.normalBias,et.shadowRadius=H.radius,et.shadowMapSize=H.mapSize,et.shadowCameraNear=H.camera.near,et.shadowCameraFar=H.camera.far,s.pointShadow[T]=et,s.pointShadowMap[T]=W,s.pointShadowMatrix[T]=B.shadow.matrix,N++}s.point[T]=L,T++}else if(B.isHemisphereLight){const L=t.get(B);L.skyColor.copy(B.color).multiplyScalar(ct),L.groundColor.copy(B.groundColor).multiplyScalar(ct),s.hemi[S]=L,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==y||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==M||b.hemiLength!==S||b.numDirectionalShadows!==C||b.numPointShadows!==N||b.numSpotShadows!==P||b.numSpotMaps!==z||b.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=M,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=P+z-U,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=I,b.directionalLength=y,b.pointLength=T,b.spotLength=w,b.rectAreaLength=M,b.hemiLength=S,b.numDirectionalShadows=C,b.numPointShadows=N,b.numSpotShadows=P,b.numSpotMaps=z,b.numLightProbes=I,s.version=YA++)}function m(d,_){let x=0,g=0,y=0,T=0,w=0;const M=_.matrixWorldInverse;for(let S=0,C=d.length;S<C;S++){const N=d[S];if(N.isDirectionalLight){const P=s.directional[x];P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),x++}else if(N.isSpotLight){const P=s.spot[y];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const P=s.rectArea[T];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(h),P.halfHeight.applyMatrix4(h),T++}else if(N.isPointLight){const P=s.point[g];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(M),g++}else if(N.isHemisphereLight){const P=s.hemi[w];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(M),w++}}}return{setup:p,setupView:m,state:s}}function Mv(r){const t=new KA(r),i=[],s=[],l=[];function c(g){x.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){t.setup(i)}function _(g){t.setupView(i,g)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:x,setupLights:d,setupLightsView:_,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function QA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let p;return h===void 0?(p=new Mv(r),t.set(l,[p])):c>=h.length?(p=new Mv(r),h.push(p)):p=h[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$A=`uniform sampler2D shadow_pass;
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
}`,tR=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],eR=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],yv=new on,el=new $,od=new $;function nR(r,t,i){let s=new vp;const l=new re,c=new re,h=new rn,p=new lE,m=new cE,d={},_=i.maxTextureSize,x={[ds]:Qn,[Qn]:ds,[ya]:ya},g=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:JA,fragmentShader:$A}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const T=new pi;T.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new mi(T,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let S=this.type;this.render=function(U,I,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;this.type===op&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kc);const O=r.getRenderTarget(),X=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),K=r.state;K.setBlending(ba),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ct=S!==this.type;ct&&I.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(W=>W.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,W=U.length;ut<W;ut++){const L=U[ut],H=L.shadow;if(H===void 0){Jt("WebGLShadowMap:",L,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const et=H.getFrameExtents();l.multiply(et),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/et.x),l.x=c.x*et.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/et.y),l.y=c.y*et.y,H.mapSize.y=c.y));const mt=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=mt,H.map===null||ct===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===nl){if(L.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Zi(l.x,l.y,{format:Ws,type:Aa,minFilter:zn,magFilter:zn,generateMipmaps:!1}),H.map.texture.name=L.name+".shadowMap",H.map.depthTexture=new Yr(l.x,l.y,ji),H.map.depthTexture.name=L.name+".shadowMapDepth",H.map.depthTexture.format=Ra,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln}else L.isPointLight?(H.map=new fx(l.x),H.map.depthTexture=new eE(l.x,Ki)):(H.map=new Zi(l.x,l.y),H.map.depthTexture=new Yr(l.x,l.y,Ki)),H.map.depthTexture.name=L.name+".shadowMap",H.map.depthTexture.format=Ra,this.type===Kc?(H.map.depthTexture.compareFunction=mt?mp:pp,H.map.depthTexture.minFilter=zn,H.map.depthTexture.magFilter=zn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln);H.camera.updateProjectionMatrix()}const Mt=H.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<Mt;F++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,F),r.clear();else{F===0&&(r.setRenderTarget(H.map),r.clear());const J=H.getViewport(F);h.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),K.viewport(h)}if(L.isPointLight){const J=H.camera,St=H.matrix,At=L.distance||J.far;At!==J.far&&(J.far=At,J.updateProjectionMatrix()),el.setFromMatrixPosition(L.matrixWorld),J.position.copy(el),od.copy(J.position),od.add(tR[F]),J.up.copy(eR[F]),J.lookAt(od),J.updateMatrixWorld(),St.makeTranslation(-el.x,-el.y,-el.z),yv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(yv,J.coordinateSystem,J.reversedDepth)}else H.updateMatrices(L);s=H.getFrustum(),P(I,b,H.camera,L,this.type)}H.isPointLightShadow!==!0&&this.type===nl&&C(H,b),H.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(O,X,B)};function C(U,I){const b=t.update(w);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Zi(l.x,l.y,{format:Ws,type:Aa})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(I,null,b,g,w,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(I,null,b,y,w,null)}function N(U,I,b,O){let X=null;const B=b.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)X=B;else if(X=b.isPointLight===!0?m:p,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const K=X.uuid,ct=I.uuid;let ut=d[K];ut===void 0&&(ut={},d[K]=ut);let W=ut[ct];W===void 0&&(W=X.clone(),ut[ct]=W,I.addEventListener("dispose",z)),X=W}if(X.visible=I.visible,X.wireframe=I.wireframe,O===nl?X.side=I.shadowSide!==null?I.shadowSide:I.side:X.side=I.shadowSide!==null?I.shadowSide:x[I.side],X.alphaMap=I.alphaMap,X.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,X.map=I.map,X.clipShadows=I.clipShadows,X.clippingPlanes=I.clippingPlanes,X.clipIntersection=I.clipIntersection,X.displacementMap=I.displacementMap,X.displacementScale=I.displacementScale,X.displacementBias=I.displacementBias,X.wireframeLinewidth=I.wireframeLinewidth,X.linewidth=I.linewidth,b.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const K=r.properties.get(X);K.light=b}return X}function P(U,I,b,O,X){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&X===nl)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,U.matrixWorld);const ct=t.update(U),ut=U.material;if(Array.isArray(ut)){const W=ct.groups;for(let L=0,H=W.length;L<H;L++){const et=W[L],mt=ut[et.materialIndex];if(mt&&mt.visible){const Mt=N(U,mt,O,X);U.onBeforeShadow(r,U,I,b,ct,Mt,et),r.renderBufferDirect(b,null,ct,Mt,U,et),U.onAfterShadow(r,U,I,b,ct,Mt,et)}}}else if(ut.visible){const W=N(U,ut,O,X);U.onBeforeShadow(r,U,I,b,ct,W,null),r.renderBufferDirect(b,null,ct,W,U,null),U.onAfterShadow(r,U,I,b,ct,W,null)}}const K=U.children;for(let ct=0,ut=K.length;ct<ut;ct++)P(K[ct],I,b,O,X)}function z(U){U.target.removeEventListener("dispose",z);for(const b in d){const O=d[b],X=U.target.uuid;X in O&&(O[X].dispose(),delete O[X])}}}function iR(r,t){function i(){let V=!1;const Rt=new rn;let gt=null;const Bt=new rn(0,0,0,0);return{setMask:function(Nt){gt!==Nt&&!V&&(r.colorMask(Nt,Nt,Nt,Nt),gt=Nt)},setLocked:function(Nt){V=Nt},setClear:function(Nt,Et,jt,ee,nn){nn===!0&&(Nt*=ee,Et*=ee,jt*=ee),Rt.set(Nt,Et,jt,ee),Bt.equals(Rt)===!1&&(r.clearColor(Nt,Et,jt,ee),Bt.copy(Rt))},reset:function(){V=!1,gt=null,Bt.set(-1,0,0,0)}}}function s(){let V=!1,Rt=!1,gt=null,Bt=null,Nt=null;return{setReversed:function(Et){if(Rt!==Et){const jt=t.get("EXT_clip_control");Et?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),Rt=Et;const ee=Nt;Nt=null,this.setClear(ee)}},getReversed:function(){return Rt},setTest:function(Et){Et?Z(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(Et){gt!==Et&&!V&&(r.depthMask(Et),gt=Et)},setFunc:function(Et){if(Rt&&(Et=wy[Et]),Bt!==Et){switch(Et){case dd:r.depthFunc(r.NEVER);break;case pd:r.depthFunc(r.ALWAYS);break;case md:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case gd:r.depthFunc(r.EQUAL);break;case _d:r.depthFunc(r.GEQUAL);break;case vd:r.depthFunc(r.GREATER);break;case xd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=Et}},setLocked:function(Et){V=Et},setClear:function(Et){Nt!==Et&&(Nt=Et,Rt&&(Et=1-Et),r.clearDepth(Et))},reset:function(){V=!1,gt=null,Bt=null,Nt=null,Rt=!1}}}function l(){let V=!1,Rt=null,gt=null,Bt=null,Nt=null,Et=null,jt=null,ee=null,nn=null;return{setTest:function(De){V||(De?Z(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(De){Rt!==De&&!V&&(r.stencilMask(De),Rt=De)},setFunc:function(De,gi,$n){(gt!==De||Bt!==gi||Nt!==$n)&&(r.stencilFunc(De,gi,$n),gt=De,Bt=gi,Nt=$n)},setOp:function(De,gi,$n){(Et!==De||jt!==gi||ee!==$n)&&(r.stencilOp(De,gi,$n),Et=De,jt=gi,ee=$n)},setLocked:function(De){V=De},setClear:function(De){nn!==De&&(r.clearStencil(De),nn=De)},reset:function(){V=!1,Rt=null,gt=null,Bt=null,Nt=null,Et=null,jt=null,ee=null,nn=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let _={},x={},g={},y=new WeakMap,T=[],w=null,M=!1,S=null,C=null,N=null,P=null,z=null,U=null,I=null,b=new fe(0,0,0),O=0,X=!1,B=null,K=null,ct=null,ut=null,W=null;const L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,et=0;const mt=r.getParameter(r.VERSION);mt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(mt)[1]),H=et>=1):mt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),H=et>=2);let Mt=null,F={};const J=r.getParameter(r.SCISSOR_BOX),St=r.getParameter(r.VIEWPORT),At=new rn().fromArray(J),Ct=new rn().fromArray(St);function lt(V,Rt,gt,Bt){const Nt=new Uint8Array(4),Et=r.createTexture();r.bindTexture(V,Et),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let jt=0;jt<gt;jt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Nt):r.texImage2D(Rt+jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Nt);return Et}const yt={};yt[r.TEXTURE_2D]=lt(r.TEXTURE_2D,r.TEXTURE_2D,1),yt[r.TEXTURE_CUBE_MAP]=lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[r.TEXTURE_2D_ARRAY]=lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),yt[r.TEXTURE_3D]=lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Z(r.DEPTH_TEST),h.setFunc(jr),ln(!1),Ye(__),Z(r.CULL_FACE),Ne(ba);function Z(V){_[V]!==!0&&(r.enable(V),_[V]=!0)}function Tt(V){_[V]!==!1&&(r.disable(V),_[V]=!1)}function te(V,Rt){return g[V]!==Rt?(r.bindFramebuffer(V,Rt),g[V]=Rt,V===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Rt),V===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Qt(V,Rt){let gt=T,Bt=!1;if(V){gt=y.get(Rt),gt===void 0&&(gt=[],y.set(Rt,gt));const Nt=V.textures;if(gt.length!==Nt.length||gt[0]!==r.COLOR_ATTACHMENT0){for(let Et=0,jt=Nt.length;Et<jt;Et++)gt[Et]=r.COLOR_ATTACHMENT0+Et;gt.length=Nt.length,Bt=!0}}else gt[0]!==r.BACK&&(gt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(gt)}function We(V){return w!==V?(r.useProgram(V),w=V,!0):!1}const de={[Hs]:r.FUNC_ADD,[JM]:r.FUNC_SUBTRACT,[$M]:r.FUNC_REVERSE_SUBTRACT};de[ty]=r.MIN,de[ey]=r.MAX;const Me={[ny]:r.ZERO,[iy]:r.ONE,[ay]:r.SRC_COLOR,[fd]:r.SRC_ALPHA,[uy]:r.SRC_ALPHA_SATURATE,[ly]:r.DST_COLOR,[ry]:r.DST_ALPHA,[sy]:r.ONE_MINUS_SRC_COLOR,[hd]:r.ONE_MINUS_SRC_ALPHA,[cy]:r.ONE_MINUS_DST_COLOR,[oy]:r.ONE_MINUS_DST_ALPHA,[fy]:r.CONSTANT_COLOR,[hy]:r.ONE_MINUS_CONSTANT_COLOR,[dy]:r.CONSTANT_ALPHA,[py]:r.ONE_MINUS_CONSTANT_ALPHA};function Ne(V,Rt,gt,Bt,Nt,Et,jt,ee,nn,De){if(V===ba){M===!0&&(Tt(r.BLEND),M=!1);return}if(M===!1&&(Z(r.BLEND),M=!0),V!==QM){if(V!==S||De!==X){if((C!==Hs||z!==Hs)&&(r.blendEquation(r.FUNC_ADD),C=Hs,z=Hs),De)switch(V){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case v_:r.blendFunc(r.ONE,r.ONE);break;case x_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case S_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ae("WebGLState: Invalid blending: ",V);break}else switch(V){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case v_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case x_:Ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case S_:Ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ae("WebGLState: Invalid blending: ",V);break}N=null,P=null,U=null,I=null,b.set(0,0,0),O=0,S=V,X=De}return}Nt=Nt||Rt,Et=Et||gt,jt=jt||Bt,(Rt!==C||Nt!==z)&&(r.blendEquationSeparate(de[Rt],de[Nt]),C=Rt,z=Nt),(gt!==N||Bt!==P||Et!==U||jt!==I)&&(r.blendFuncSeparate(Me[gt],Me[Bt],Me[Et],Me[jt]),N=gt,P=Bt,U=Et,I=jt),(ee.equals(b)===!1||nn!==O)&&(r.blendColor(ee.r,ee.g,ee.b,nn),b.copy(ee),O=nn),S=V,X=!1}function ce(V,Rt){V.side===ya?Tt(r.CULL_FACE):Z(r.CULL_FACE);let gt=V.side===Qn;Rt&&(gt=!gt),ln(gt),V.blending===kr&&V.transparent===!1?Ne(ba):Ne(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),c.setMask(V.colorWrite);const Bt=V.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(V.stencilWriteMask),p.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),p.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),q(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ln(V){B!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),B=V)}function Ye(V){V!==ZM?(Z(r.CULL_FACE),V!==K&&(V===__?r.cullFace(r.BACK):V===KM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),K=V}function An(V){V!==ct&&(H&&r.lineWidth(V),ct=V)}function q(V,Rt,gt){V?(Z(r.POLYGON_OFFSET_FILL),(ut!==Rt||W!==gt)&&(ut=Rt,W=gt,h.getReversed()&&(Rt=-Rt),r.polygonOffset(Rt,gt))):Tt(r.POLYGON_OFFSET_FILL)}function en(V){V?Z(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function pe(V){V===void 0&&(V=r.TEXTURE0+L-1),Mt!==V&&(r.activeTexture(V),Mt=V)}function He(V,Rt,gt){gt===void 0&&(Mt===null?gt=r.TEXTURE0+L-1:gt=Mt);let Bt=F[gt];Bt===void 0&&(Bt={type:void 0,texture:void 0},F[gt]=Bt),(Bt.type!==V||Bt.texture!==Rt)&&(Mt!==gt&&(r.activeTexture(gt),Mt=gt),r.bindTexture(V,Rt||yt[V]),Bt.type=V,Bt.texture=Rt)}function wt(){const V=F[Mt];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Qe(){try{r.compressedTexImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function E(){try{r.texSubImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function tt(){try{r.texSubImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function vt(){try{r.compressedTexSubImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function bt(){try{r.compressedTexSubImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function Dt(){try{r.texStorage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function Ot(){try{r.texStorage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function ht(){try{r.texImage2D(...arguments)}catch(V){Ae("WebGLState:",V)}}function dt(){try{r.texImage3D(...arguments)}catch(V){Ae("WebGLState:",V)}}function Pt(V){return x[V]!==void 0?x[V]:r.getParameter(V)}function It(V,Rt){x[V]!==Rt&&(r.pixelStorei(V,Rt),x[V]=Rt)}function Lt(V){At.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),At.copy(V))}function Ut(V){Ct.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Ct.copy(V))}function ne(V,Rt){let gt=d.get(Rt);gt===void 0&&(gt=new WeakMap,d.set(Rt,gt));let Bt=gt.get(V);Bt===void 0&&(Bt=r.getUniformBlockIndex(Rt,V.name),gt.set(V,Bt))}function ie(V,Rt){const Bt=d.get(Rt).get(V);m.get(Rt)!==Bt&&(r.uniformBlockBinding(Rt,Bt,V.__bindingPointIndex),m.set(Rt,Bt))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},x={},Mt=null,F={},g={},y=new WeakMap,T=[],w=null,M=!1,S=null,C=null,N=null,P=null,z=null,U=null,I=null,b=new fe(0,0,0),O=0,X=!1,B=null,K=null,ct=null,ut=null,W=null,At.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:Z,disable:Tt,bindFramebuffer:te,drawBuffers:Qt,useProgram:We,setBlending:Ne,setMaterial:ce,setFlipSided:ln,setCullFace:Ye,setLineWidth:An,setPolygonOffset:q,setScissorTest:en,activeTexture:pe,bindTexture:He,unbindTexture:wt,compressedTexImage2D:Qe,compressedTexImage3D:D,texImage2D:ht,texImage3D:dt,pixelStorei:It,getParameter:Pt,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:Dt,texStorage3D:Ot,texSubImage2D:E,texSubImage3D:tt,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:Lt,viewport:Ut,reset:ge}}function aR(r,t,i,s,l,c,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new re,_=new WeakMap,x=new Set;let g;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return T?new OffscreenCanvas(D,E):ru("canvas")}function M(D,E,tt){let vt=1;const bt=Qe(D);if((bt.width>tt||bt.height>tt)&&(vt=tt/Math.max(bt.width,bt.height)),vt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Dt=Math.floor(vt*bt.width),Ot=Math.floor(vt*bt.height);g===void 0&&(g=w(Dt,Ot));const ht=E?w(Dt,Ot):g;return ht.width=Dt,ht.height=Ot,ht.getContext("2d").drawImage(D,0,0,Dt,Ot),Jt("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+Dt+"x"+Ot+")."),ht}else return"data"in D&&Jt("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),D;return D}function S(D){return D.generateMipmaps}function C(D){r.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(D,E,tt,vt,bt,Dt=!1){if(D!==null){if(r[D]!==void 0)return r[D];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ot;vt&&(Ot=t.get("EXT_texture_norm16"),Ot||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ht=E;if(E===r.RED&&(tt===r.FLOAT&&(ht=r.R32F),tt===r.HALF_FLOAT&&(ht=r.R16F),tt===r.UNSIGNED_BYTE&&(ht=r.R8),tt===r.UNSIGNED_SHORT&&Ot&&(ht=Ot.R16_EXT),tt===r.SHORT&&Ot&&(ht=Ot.R16_SNORM_EXT)),E===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ht=r.R8UI),tt===r.UNSIGNED_SHORT&&(ht=r.R16UI),tt===r.UNSIGNED_INT&&(ht=r.R32UI),tt===r.BYTE&&(ht=r.R8I),tt===r.SHORT&&(ht=r.R16I),tt===r.INT&&(ht=r.R32I)),E===r.RG&&(tt===r.FLOAT&&(ht=r.RG32F),tt===r.HALF_FLOAT&&(ht=r.RG16F),tt===r.UNSIGNED_BYTE&&(ht=r.RG8),tt===r.UNSIGNED_SHORT&&Ot&&(ht=Ot.RG16_EXT),tt===r.SHORT&&Ot&&(ht=Ot.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ht=r.RG8UI),tt===r.UNSIGNED_SHORT&&(ht=r.RG16UI),tt===r.UNSIGNED_INT&&(ht=r.RG32UI),tt===r.BYTE&&(ht=r.RG8I),tt===r.SHORT&&(ht=r.RG16I),tt===r.INT&&(ht=r.RG32I)),E===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),tt===r.UNSIGNED_INT&&(ht=r.RGB32UI),tt===r.BYTE&&(ht=r.RGB8I),tt===r.SHORT&&(ht=r.RGB16I),tt===r.INT&&(ht=r.RGB32I)),E===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),tt===r.UNSIGNED_INT&&(ht=r.RGBA32UI),tt===r.BYTE&&(ht=r.RGBA8I),tt===r.SHORT&&(ht=r.RGBA16I),tt===r.INT&&(ht=r.RGBA32I)),E===r.RGB&&(tt===r.UNSIGNED_SHORT&&Ot&&(ht=Ot.RGB16_EXT),tt===r.SHORT&&Ot&&(ht=Ot.RGB16_SNORM_EXT),tt===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),tt===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),E===r.RGBA){const dt=Dt?su:Te.getTransfer(bt);tt===r.FLOAT&&(ht=r.RGBA32F),tt===r.HALF_FLOAT&&(ht=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(ht=dt===Be?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT&&Ot&&(ht=Ot.RGBA16_EXT),tt===r.SHORT&&Ot&&(ht=Ot.RGBA16_SNORM_EXT),tt===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function z(D,E){let tt;return D?E===null||E===Ki||E===ol?tt=r.DEPTH24_STENCIL8:E===ji?tt=r.DEPTH32F_STENCIL8:E===rl&&(tt=r.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===ol?tt=r.DEPTH_COMPONENT24:E===ji?tt=r.DEPTH_COMPONENT32F:E===rl&&(tt=r.DEPTH_COMPONENT16),tt}function U(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ln&&D.minFilter!==zn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){const E=D.target;E.removeEventListener("dispose",I),O(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&x.delete(E)}function b(D){const E=D.target;E.removeEventListener("dispose",b),B(E)}function O(D){const E=s.get(D);if(E.__webglInit===void 0)return;const tt=D.source,vt=y.get(tt);if(vt){const bt=vt[E.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&X(D),Object.keys(vt).length===0&&y.delete(tt)}s.remove(D)}function X(D){const E=s.get(D);r.deleteTexture(E.__webglTexture);const tt=D.source,vt=y.get(tt);delete vt[E.__cacheKey],h.memory.textures--}function B(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(E.__webglFramebuffer[vt]))for(let bt=0;bt<E.__webglFramebuffer[vt].length;bt++)r.deleteFramebuffer(E.__webglFramebuffer[vt][bt]);else r.deleteFramebuffer(E.__webglFramebuffer[vt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[vt])}else{if(Array.isArray(E.__webglFramebuffer))for(let vt=0;vt<E.__webglFramebuffer.length;vt++)r.deleteFramebuffer(E.__webglFramebuffer[vt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let vt=0;vt<E.__webglColorRenderbuffer.length;vt++)E.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[vt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=D.textures;for(let vt=0,bt=tt.length;vt<bt;vt++){const Dt=s.get(tt[vt]);Dt.__webglTexture&&(r.deleteTexture(Dt.__webglTexture),h.memory.textures--),s.remove(tt[vt])}s.remove(D)}let K=0;function ct(){K=0}function ut(){return K}function W(D){K=D}function L(){const D=K;return D>=l.maxTextures&&Jt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),K+=1,D}function H(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function et(D,E){const tt=s.get(D);if(D.isVideoTexture&&He(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&tt.__version!==D.version){const vt=D.image;if(vt===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(tt,D,E);return}}else D.isExternalTexture&&(tt.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+E)}function mt(D,E){const tt=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&tt.__version!==D.version){Tt(tt,D,E);return}else D.isExternalTexture&&(tt.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+E)}function Mt(D,E){const tt=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&tt.__version!==D.version){Tt(tt,D,E);return}i.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+E)}function F(D,E){const tt=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&tt.__version!==D.version){te(tt,D,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+E)}const J={[Sd]:r.REPEAT,[Ea]:r.CLAMP_TO_EDGE,[Md]:r.MIRRORED_REPEAT},St={[Ln]:r.NEAREST,[_y]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[wh]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},At={[Sy]:r.NEVER,[Ty]:r.ALWAYS,[My]:r.LESS,[pp]:r.LEQUAL,[yy]:r.EQUAL,[mp]:r.GEQUAL,[Ey]:r.GREATER,[by]:r.NOTEQUAL};function Ct(D,E){if(E.type===ji&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===zn||E.magFilter===wh||E.magFilter===yc||E.magFilter===Vs||E.minFilter===zn||E.minFilter===wh||E.minFilter===yc||E.minFilter===Vs)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,J[E.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,J[E.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,J[E.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,St[E.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==yc&&E.minFilter!==Vs||E.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function lt(D,E){let tt=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",I));const vt=E.source;let bt=y.get(vt);bt===void 0&&(bt={},y.set(vt,bt));const Dt=H(E);if(Dt!==D.__cacheKey){bt[Dt]===void 0&&(bt[Dt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),bt[Dt].usedTimes++;const Ot=bt[D.__cacheKey];Ot!==void 0&&(bt[D.__cacheKey].usedTimes--,Ot.usedTimes===0&&X(E)),D.__cacheKey=Dt,D.__webglTexture=bt[Dt].texture}return tt}function yt(D,E,tt){return Math.floor(Math.floor(D/tt)/E)}function Z(D,E,tt,vt){const Dt=D.updateRanges;if(Dt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,tt,vt,E.data);else{Dt.sort((It,Lt)=>It.start-Lt.start);let Ot=0;for(let It=1;It<Dt.length;It++){const Lt=Dt[Ot],Ut=Dt[It],ne=Lt.start+Lt.count,ie=yt(Ut.start,E.width,4),ge=yt(Lt.start,E.width,4);Ut.start<=ne+1&&ie===ge&&yt(Ut.start+Ut.count-1,E.width,4)===ie?Lt.count=Math.max(Lt.count,Ut.start+Ut.count-Lt.start):(++Ot,Dt[Ot]=Ut)}Dt.length=Ot+1;const ht=i.getParameter(r.UNPACK_ROW_LENGTH),dt=i.getParameter(r.UNPACK_SKIP_PIXELS),Pt=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let It=0,Lt=Dt.length;It<Lt;It++){const Ut=Dt[It],ne=Math.floor(Ut.start/4),ie=Math.ceil(Ut.count/4),ge=ne%E.width,V=Math.floor(ne/E.width),Rt=ie,gt=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(r.UNPACK_SKIP_ROWS,V),i.texSubImage2D(r.TEXTURE_2D,0,ge,V,Rt,gt,tt,vt,E.data)}D.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ht),i.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(r.UNPACK_SKIP_ROWS,Pt)}}function Tt(D,E,tt){let vt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(vt=r.TEXTURE_3D);const bt=lt(D,E),Dt=E.source;i.bindTexture(vt,D.__webglTexture,r.TEXTURE0+tt);const Ot=s.get(Dt);if(Dt.version!==Ot.__version||bt===!0){if(i.activeTexture(r.TEXTURE0+tt),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const gt=Te.getPrimaries(Te.workingColorSpace),Bt=E.colorSpace===us?null:Te.getPrimaries(E.colorSpace),Nt=E.colorSpace===us||gt===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let dt=M(E.image,!1,l.maxTextureSize);dt=wt(E,dt);const Pt=c.convert(E.format,E.colorSpace),It=c.convert(E.type);let Lt=P(E.internalFormat,Pt,It,E.normalized,E.colorSpace,E.isVideoTexture);Ct(vt,E);let Ut;const ne=E.mipmaps,ie=E.isVideoTexture!==!0,ge=Ot.__version===void 0||bt===!0,V=Dt.dataReady,Rt=U(E,dt);if(E.isDepthTexture)Lt=z(E.format===ks,E.type),ge&&(ie?i.texStorage2D(r.TEXTURE_2D,1,Lt,dt.width,dt.height):i.texImage2D(r.TEXTURE_2D,0,Lt,dt.width,dt.height,0,Pt,It,null));else if(E.isDataTexture)if(ne.length>0){ie&&ge&&i.texStorage2D(r.TEXTURE_2D,Rt,Lt,ne[0].width,ne[0].height);for(let gt=0,Bt=ne.length;gt<Bt;gt++)Ut=ne[gt],ie?V&&i.texSubImage2D(r.TEXTURE_2D,gt,0,0,Ut.width,Ut.height,Pt,It,Ut.data):i.texImage2D(r.TEXTURE_2D,gt,Lt,Ut.width,Ut.height,0,Pt,It,Ut.data);E.generateMipmaps=!1}else ie?(ge&&i.texStorage2D(r.TEXTURE_2D,Rt,Lt,dt.width,dt.height),V&&Z(E,dt,Pt,It)):i.texImage2D(r.TEXTURE_2D,0,Lt,dt.width,dt.height,0,Pt,It,dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&ge&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Lt,ne[0].width,ne[0].height,dt.depth);for(let gt=0,Bt=ne.length;gt<Bt;gt++)if(Ut=ne[gt],E.format!==Pi)if(Pt!==null)if(ie){if(V)if(E.layerUpdates.size>0){const Nt=$_(Ut.width,Ut.height,E.format,E.type);for(const Et of E.layerUpdates){const jt=Ut.data.subarray(Et*Nt/Ut.data.BYTES_PER_ELEMENT,(Et+1)*Nt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,Et,Ut.width,Ut.height,1,Pt,jt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,0,Ut.width,Ut.height,dt.depth,Pt,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,gt,Lt,Ut.width,Ut.height,dt.depth,0,Ut.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?V&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,0,Ut.width,Ut.height,dt.depth,Pt,It,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,gt,Lt,Ut.width,Ut.height,dt.depth,0,Pt,It,Ut.data)}else{ie&&ge&&i.texStorage2D(r.TEXTURE_2D,Rt,Lt,ne[0].width,ne[0].height);for(let gt=0,Bt=ne.length;gt<Bt;gt++)Ut=ne[gt],E.format!==Pi?Pt!==null?ie?V&&i.compressedTexSubImage2D(r.TEXTURE_2D,gt,0,0,Ut.width,Ut.height,Pt,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,gt,Lt,Ut.width,Ut.height,0,Ut.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?V&&i.texSubImage2D(r.TEXTURE_2D,gt,0,0,Ut.width,Ut.height,Pt,It,Ut.data):i.texImage2D(r.TEXTURE_2D,gt,Lt,Ut.width,Ut.height,0,Pt,It,Ut.data)}else if(E.isDataArrayTexture)if(ie){if(ge&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Rt,Lt,dt.width,dt.height,dt.depth),V)if(E.layerUpdates.size>0){const gt=$_(dt.width,dt.height,E.format,E.type);for(const Bt of E.layerUpdates){const Nt=dt.data.subarray(Bt*gt/dt.data.BYTES_PER_ELEMENT,(Bt+1)*gt/dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Bt,dt.width,dt.height,1,Pt,It,Nt)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Pt,It,dt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,dt.width,dt.height,dt.depth,0,Pt,It,dt.data);else if(E.isData3DTexture)ie?(ge&&i.texStorage3D(r.TEXTURE_3D,Rt,Lt,dt.width,dt.height,dt.depth),V&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Pt,It,dt.data)):i.texImage3D(r.TEXTURE_3D,0,Lt,dt.width,dt.height,dt.depth,0,Pt,It,dt.data);else if(E.isFramebufferTexture){if(ge)if(ie)i.texStorage2D(r.TEXTURE_2D,Rt,Lt,dt.width,dt.height);else{let gt=dt.width,Bt=dt.height;for(let Nt=0;Nt<Rt;Nt++)i.texImage2D(r.TEXTURE_2D,Nt,Lt,gt,Bt,0,Pt,It,null),gt>>=1,Bt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const gt=r.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),dt.parentNode!==gt){gt.appendChild(dt),x.add(E),gt.onpaint=ee=>{const nn=ee.changedElements;for(const De of x)nn.includes(De.image)&&(De.needsUpdate=!0)},gt.requestPaint();return}const Bt=0,Nt=r.RGBA,Et=r.RGBA,jt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Bt,Nt,Et,jt,dt),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ne.length>0){if(ie&&ge){const gt=Qe(ne[0]);i.texStorage2D(r.TEXTURE_2D,Rt,Lt,gt.width,gt.height)}for(let gt=0,Bt=ne.length;gt<Bt;gt++)Ut=ne[gt],ie?V&&i.texSubImage2D(r.TEXTURE_2D,gt,0,0,Pt,It,Ut):i.texImage2D(r.TEXTURE_2D,gt,Lt,Pt,It,Ut);E.generateMipmaps=!1}else if(ie){if(ge){const gt=Qe(dt);i.texStorage2D(r.TEXTURE_2D,Rt,Lt,gt.width,gt.height)}V&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Pt,It,dt)}else i.texImage2D(r.TEXTURE_2D,0,Lt,Pt,It,dt);S(E)&&C(vt),Ot.__version=Dt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function te(D,E,tt){if(E.image.length!==6)return;const vt=lt(D,E),bt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+tt);const Dt=s.get(bt);if(bt.version!==Dt.__version||vt===!0){i.activeTexture(r.TEXTURE0+tt);const Ot=Te.getPrimaries(Te.workingColorSpace),ht=E.colorSpace===us?null:Te.getPrimaries(E.colorSpace),dt=E.colorSpace===us||Ot===ht?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,It=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let Et=0;Et<6;Et++)!Pt&&!It?Lt[Et]=M(E.image[Et],!0,l.maxCubemapSize):Lt[Et]=It?E.image[Et].image:E.image[Et],Lt[Et]=wt(E,Lt[Et]);const Ut=Lt[0],ne=c.convert(E.format,E.colorSpace),ie=c.convert(E.type),ge=P(E.internalFormat,ne,ie,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Rt=Dt.__version===void 0||vt===!0,gt=bt.dataReady;let Bt=U(E,Ut);Ct(r.TEXTURE_CUBE_MAP,E);let Nt;if(Pt){V&&Rt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ge,Ut.width,Ut.height);for(let Et=0;Et<6;Et++){Nt=Lt[Et].mipmaps;for(let jt=0;jt<Nt.length;jt++){const ee=Nt[jt];E.format!==Pi?ne!==null?V?gt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,0,0,ee.width,ee.height,ne,ee.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,ge,ee.width,ee.height,0,ee.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,0,0,ee.width,ee.height,ne,ie,ee.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt,ge,ee.width,ee.height,0,ne,ie,ee.data)}}}else{if(Nt=E.mipmaps,V&&Rt){Nt.length>0&&Bt++;const Et=Qe(Lt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,ge,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(It){V?gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Lt[Et].width,Lt[Et].height,ne,ie,Lt[Et].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ge,Lt[Et].width,Lt[Et].height,0,ne,ie,Lt[Et].data);for(let jt=0;jt<Nt.length;jt++){const nn=Nt[jt].image[Et].image;V?gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,0,0,nn.width,nn.height,ne,ie,nn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,ge,nn.width,nn.height,0,ne,ie,nn.data)}}else{V?gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ne,ie,Lt[Et]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ge,ne,ie,Lt[Et]);for(let jt=0;jt<Nt.length;jt++){const ee=Nt[jt];V?gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,0,0,ne,ie,ee.image[Et]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,jt+1,ge,ne,ie,ee.image[Et])}}}S(E)&&C(r.TEXTURE_CUBE_MAP),Dt.__version=bt.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Qt(D,E,tt,vt,bt,Dt){const Ot=c.convert(tt.format,tt.colorSpace),ht=c.convert(tt.type),dt=P(tt.internalFormat,Ot,ht,tt.normalized,tt.colorSpace),Pt=s.get(E),It=s.get(tt);if(It.__renderTarget=E,!Pt.__hasExternalTextures){const Lt=Math.max(1,E.width>>Dt),Ut=Math.max(1,E.height>>Dt);bt===r.TEXTURE_3D||bt===r.TEXTURE_2D_ARRAY?i.texImage3D(bt,Dt,dt,Lt,Ut,E.depth,0,Ot,ht,null):i.texImage2D(bt,Dt,dt,Lt,Ut,0,Ot,ht,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),pe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,bt,It.__webglTexture,0,en(E)):(bt===r.TEXTURE_2D||bt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,bt,It.__webglTexture,Dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function We(D,E,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,D),E.depthBuffer){const vt=E.depthTexture,bt=vt&&vt.isDepthTexture?vt.type:null,Dt=z(E.stencilBuffer,bt),Ot=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pe(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(E),Dt,E.width,E.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(E),Dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Dt,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ot,r.RENDERBUFFER,D)}else{const vt=E.textures;for(let bt=0;bt<vt.length;bt++){const Dt=vt[bt],Ot=c.convert(Dt.format,Dt.colorSpace),ht=c.convert(Dt.type),dt=P(Dt.internalFormat,Ot,ht,Dt.normalized,Dt.colorSpace);pe(E)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,en(E),dt,E.width,E.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,en(E),dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(D,E,tt){const vt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=s.get(E.depthTexture);if(bt.__renderTarget=E,(!bt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),vt){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),bt.__webglTexture===void 0){bt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,bt.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,E.depthTexture);const Pt=c.convert(E.depthTexture.format),It=c.convert(E.depthTexture.type);let Lt;E.depthTexture.format===Ra?Lt=r.DEPTH_COMPONENT24:E.depthTexture.format===ks&&(Lt=r.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Lt,E.width,E.height,0,Pt,It,null)}}else et(E.depthTexture,0);const Dt=bt.__webglTexture,Ot=en(E),ht=vt?r.TEXTURE_CUBE_MAP_POSITIVE_X+tt:r.TEXTURE_2D,dt=E.depthTexture.format===ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ra)pe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,ht,Dt,0,Ot):r.framebufferTexture2D(r.FRAMEBUFFER,dt,ht,Dt,0);else if(E.depthTexture.format===ks)pe(E)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,ht,Dt,0,Ot):r.framebufferTexture2D(r.FRAMEBUFFER,dt,ht,Dt,0);else throw new Error("Unknown depthTexture format")}function Me(D){const E=s.get(D),tt=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const vt=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),vt){const bt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,vt.removeEventListener("dispose",bt)};vt.addEventListener("dispose",bt),E.__depthDisposeCallback=bt}E.__boundDepthTexture=vt}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(tt)for(let vt=0;vt<6;vt++)de(E.__webglFramebuffer[vt],D,vt);else{const vt=D.texture.mipmaps;vt&&vt.length>0?de(E.__webglFramebuffer[0],D,0):de(E.__webglFramebuffer,D,0)}else if(tt){E.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[vt]),E.__webglDepthbuffer[vt]===void 0)E.__webglDepthbuffer[vt]=r.createRenderbuffer(),We(E.__webglDepthbuffer[vt],D,!1);else{const bt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=E.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,Dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,Dt)}}else{const vt=D.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),We(E.__webglDepthbuffer,D,!1);else{const bt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Dt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,Dt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(D,E,tt){const vt=s.get(D);E!==void 0&&Qt(vt.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&Me(D)}function ce(D){const E=D.texture,tt=s.get(D),vt=s.get(E);D.addEventListener("dispose",b);const bt=D.textures,Dt=D.isWebGLCubeRenderTarget===!0,Ot=bt.length>1;if(Ot||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=E.version,h.memory.textures++),Dt){tt.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[ht]=[];for(let dt=0;dt<E.mipmaps.length;dt++)tt.__webglFramebuffer[ht][dt]=r.createFramebuffer()}else tt.__webglFramebuffer[ht]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let ht=0;ht<E.mipmaps.length;ht++)tt.__webglFramebuffer[ht]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(Ot)for(let ht=0,dt=bt.length;ht<dt;ht++){const Pt=s.get(bt[ht]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=r.createTexture(),h.memory.textures++)}if(D.samples>0&&pe(D)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let ht=0;ht<bt.length;ht++){const dt=bt[ht];tt.__webglColorRenderbuffer[ht]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[ht]);const Pt=c.convert(dt.format,dt.colorSpace),It=c.convert(dt.type),Lt=P(dt.internalFormat,Pt,It,dt.normalized,dt.colorSpace,D.isXRRenderTarget===!0),Ut=en(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,Lt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,tt.__webglColorRenderbuffer[ht])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),We(tt.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Dt){i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,E);for(let ht=0;ht<6;ht++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)Qt(tt.__webglFramebuffer[ht][dt],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else Qt(tt.__webglFramebuffer[ht],D,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);S(E)&&C(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let ht=0,dt=bt.length;ht<dt;ht++){const Pt=bt[ht],It=s.get(Pt);let Lt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Lt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,It.__webglTexture),Ct(Lt,Pt),Qt(tt.__webglFramebuffer,D,Pt,r.COLOR_ATTACHMENT0+ht,Lt,0),S(Pt)&&C(Lt)}i.unbindTexture()}else{let ht=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ht=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ht,vt.__webglTexture),Ct(ht,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)Qt(tt.__webglFramebuffer[dt],D,E,r.COLOR_ATTACHMENT0,ht,dt);else Qt(tt.__webglFramebuffer,D,E,r.COLOR_ATTACHMENT0,ht,0);S(E)&&C(ht),i.unbindTexture()}D.depthBuffer&&Me(D)}function ln(D){const E=D.textures;for(let tt=0,vt=E.length;tt<vt;tt++){const bt=E[tt];if(S(bt)){const Dt=N(D),Ot=s.get(bt).__webglTexture;i.bindTexture(Dt,Ot),C(Dt),i.unbindTexture()}}}const Ye=[],An=[];function q(D){if(D.samples>0){if(pe(D)===!1){const E=D.textures,tt=D.width,vt=D.height;let bt=r.COLOR_BUFFER_BIT;const Dt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ot=s.get(D),ht=E.length>1;if(ht)for(let Pt=0;Pt<E.length;Pt++)i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const dt=D.texture.mipmaps;dt&&dt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Pt=0;Pt<E.length;Pt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(bt|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(bt|=r.STENCIL_BUFFER_BIT)),ht){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const It=s.get(E[Pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,It,0)}r.blitFramebuffer(0,0,tt,vt,0,0,tt,vt,bt,r.NEAREST),m===!0&&(Ye.length=0,An.length=0,Ye.push(r.COLOR_ATTACHMENT0+Pt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ye.push(Dt),An.push(Dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,An)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ye))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ht)for(let Pt=0;Pt<E.length;Pt++){i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const It=s.get(E[Pt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,It,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function en(D){return Math.min(l.maxSamples,D.samples)}function pe(D){const E=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function He(D){const E=h.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function wt(D,E){const tt=D.colorSpace,vt=D.format,bt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||tt!==au&&tt!==us&&(Te.getTransfer(tt)===Be?(vt!==Pi||bt!==hi)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ae("WebGLTextures: Unsupported texture color space:",tt)),E}function Qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=L,this.resetTextureUnits=ct,this.getTextureUnits=ut,this.setTextureUnits=W,this.setTexture2D=et,this.setTexture2DArray=mt,this.setTexture3D=Mt,this.setTextureCube=F,this.rebindTextures=Ne,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=ln,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function sR(r,t){function i(s,l=us){let c;const h=Te.getTransfer(l);if(s===hi)return r.UNSIGNED_BYTE;if(s===cp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===up)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Hv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Gv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===zv)return r.BYTE;if(s===Bv)return r.SHORT;if(s===rl)return r.UNSIGNED_SHORT;if(s===lp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===Vv)return r.ALPHA;if(s===kv)return r.RGB;if(s===Pi)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===ks)return r.DEPTH_STENCIL;if(s===Xv)return r.RED;if(s===fp)return r.RED_INTEGER;if(s===Ws)return r.RG;if(s===hp)return r.RG_INTEGER;if(s===dp)return r.RGBA_INTEGER;if(s===Qc||s===Jc||s===$c||s===tu)if(h===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yd||s===Ed||s===bd||s===Td)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===yd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ed)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===bd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Td)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===nu||s===Ud)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ad||s===Rd)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Cd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===wd)return c.COMPRESSED_R11_EAC;if(s===Dd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===nu)return c.COMPRESSED_RG11_EAC;if(s===Ud)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ld||s===Nd||s===Od||s===Pd||s===Id||s===Fd||s===zd||s===Bd||s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ld)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Od)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Id)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Vd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jd||s===qd||s===Yd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===jd)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zd||s===Kd||s===iu||s===Qd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Zd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===iu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ol?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const rR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oR=`
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

}`;class lR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ex(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Qi({vertexShader:rR,fragmentShader:oR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mi(new Qr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cR extends gs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,_=null,x=null,g=null,y=null,T=null;const w=typeof XRWebGLBinding<"u",M=new lR,S={},C=i.getContextAttributes();let N=null,P=null;const z=[],U=[],I=new re;let b=null;const O=new fi;O.viewport=new rn;const X=new fi;X.viewport=new rn;const B=[O,X],K=new _E;let ct=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let yt=z[lt];return yt===void 0&&(yt=new Ih,z[lt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(lt){let yt=z[lt];return yt===void 0&&(yt=new Ih,z[lt]=yt),yt.getGripSpace()},this.getHand=function(lt){let yt=z[lt];return yt===void 0&&(yt=new Ih,z[lt]=yt),yt.getHandSpace()};function W(lt){const yt=U.indexOf(lt.inputSource);if(yt===-1)return;const Z=z[yt];Z!==void 0&&(Z.update(lt.inputSource,lt.frame,d||h),Z.dispatchEvent({type:lt.type,data:lt.inputSource}))}function L(){l.removeEventListener("select",W),l.removeEventListener("selectstart",W),l.removeEventListener("selectend",W),l.removeEventListener("squeeze",W),l.removeEventListener("squeezestart",W),l.removeEventListener("squeezeend",W),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",H);for(let lt=0;lt<z.length;lt++){const yt=U[lt];yt!==null&&(U[lt]=null,z[lt].disconnect(yt))}ct=null,ut=null,M.reset();for(const lt in S)delete S[lt];t.setRenderTarget(N),y=null,g=null,x=null,l=null,P=null,Ct.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){c=lt,s.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){p=lt,s.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(lt){d=lt},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return x===null&&w&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(lt){if(l=lt,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",W),l.addEventListener("selectstart",W),l.addEventListener("selectend",W),l.addEventListener("squeeze",W),l.addEventListener("squeezestart",W),l.addEventListener("squeezeend",W),l.addEventListener("end",L),l.addEventListener("inputsourceschange",H),C.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,Tt=null,te=null;C.depth&&(te=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Z=C.stencil?ks:Ra,Tt=C.stencil?ol:Ki);const Qt={colorFormat:i.RGBA8,depthFormat:te,scaleFactor:c};x=this.getBinding(),g=x.createProjectionLayer(Qt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),P=new Zi(g.textureWidth,g.textureHeight,{format:Pi,type:hi,depthTexture:new Yr(g.textureWidth,g.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Z={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Z),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Zi(y.framebufferWidth,y.framebufferHeight,{format:Pi,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Ct.setContext(l),Ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(lt){for(let yt=0;yt<lt.removed.length;yt++){const Z=lt.removed[yt],Tt=U.indexOf(Z);Tt>=0&&(U[Tt]=null,z[Tt].disconnect(Z))}for(let yt=0;yt<lt.added.length;yt++){const Z=lt.added[yt];let Tt=U.indexOf(Z);if(Tt===-1){for(let Qt=0;Qt<z.length;Qt++)if(Qt>=U.length){U.push(Z),Tt=Qt;break}else if(U[Qt]===null){U[Qt]=Z,Tt=Qt;break}if(Tt===-1)break}const te=z[Tt];te&&te.connect(Z)}}const et=new $,mt=new $;function Mt(lt,yt,Z){et.setFromMatrixPosition(yt.matrixWorld),mt.setFromMatrixPosition(Z.matrixWorld);const Tt=et.distanceTo(mt),te=yt.projectionMatrix.elements,Qt=Z.projectionMatrix.elements,We=te[14]/(te[10]-1),de=te[14]/(te[10]+1),Me=(te[9]+1)/te[5],Ne=(te[9]-1)/te[5],ce=(te[8]-1)/te[0],ln=(Qt[8]+1)/Qt[0],Ye=We*ce,An=We*ln,q=Tt/(-ce+ln),en=q*-ce;if(yt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(en),lt.translateZ(q),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),te[10]===-1)lt.projectionMatrix.copy(yt.projectionMatrix),lt.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const pe=We+q,He=de+q,wt=Ye-en,Qe=An+(Tt-en),D=Me*de/He*pe,E=Ne*de/He*pe;lt.projectionMatrix.makePerspective(wt,Qe,D,E,pe,He),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function F(lt,yt){yt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(yt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(l===null)return;let yt=lt.near,Z=lt.far;M.texture!==null&&(M.depthNear>0&&(yt=M.depthNear),M.depthFar>0&&(Z=M.depthFar)),K.near=X.near=O.near=yt,K.far=X.far=O.far=Z,(ct!==K.near||ut!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ct=K.near,ut=K.far),K.layers.mask=lt.layers.mask|6,O.layers.mask=K.layers.mask&-5,X.layers.mask=K.layers.mask&-3;const Tt=lt.parent,te=K.cameras;F(K,Tt);for(let Qt=0;Qt<te.length;Qt++)F(te[Qt],Tt);te.length===2?Mt(K,O,X):K.projectionMatrix.copy(O.projectionMatrix),J(lt,K,Tt)};function J(lt,yt,Z){Z===null?lt.matrix.copy(yt.matrixWorld):(lt.matrix.copy(Z.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(yt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(yt.projectionMatrix),lt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=tp*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(lt){m=lt,g!==null&&(g.fixedFoveation=lt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=lt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(lt){return S[lt]};let St=null;function At(lt,yt){if(_=yt.getViewerPose(d||h),T=yt,_!==null){const Z=_.views;y!==null&&(t.setRenderTargetFramebuffer(P,y.framebuffer),t.setRenderTarget(P));let Tt=!1;Z.length!==K.cameras.length&&(K.cameras.length=0,Tt=!0);for(let de=0;de<Z.length;de++){const Me=Z[de];let Ne=null;if(y!==null)Ne=y.getViewport(Me);else{const ln=x.getViewSubImage(g,Me);Ne=ln.viewport,de===0&&(t.setRenderTargetTextures(P,ln.colorTexture,ln.depthStencilTexture),t.setRenderTarget(P))}let ce=B[de];ce===void 0&&(ce=new fi,ce.layers.enable(de),ce.viewport=new rn,B[de]=ce),ce.matrix.fromArray(Me.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(Me.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),de===0&&(K.matrix.copy(ce.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Tt===!0&&K.cameras.push(ce)}const te=l.enabledFeatures;if(te&&te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){x=s.getBinding();const de=x.getDepthInformation(Z[0]);de&&de.isValid&&de.texture&&M.init(de,l.renderState)}if(te&&te.includes("camera-access")&&w){t.state.unbindTexture(),x=s.getBinding();for(let de=0;de<Z.length;de++){const Me=Z[de].camera;if(Me){let Ne=S[Me];Ne||(Ne=new ex,S[Me]=Ne);const ce=x.getCameraImage(Me);Ne.sourceTexture=ce}}}}for(let Z=0;Z<z.length;Z++){const Tt=U[Z],te=z[Z];Tt!==null&&te!==void 0&&te.update(Tt,yt,d||h)}St&&St(lt,yt),yt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:yt}),T=null}const Ct=new cx;Ct.setAnimationLoop(At),this.setAnimationLoop=function(lt){St=lt},this.dispose=function(){}}}const uR=new on,gx=new se;gx.set(-1,0,0,0,1,0,0,0,1);function fR(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,ax(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,C,N,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),x(M,S)):S.isMeshPhongMaterial?(c(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,P)):S.isMeshMatcapMaterial?(c(M,S),T(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&p(M,S)):S.isPointsMaterial?m(M,S,C,N):S.isSpriteMaterial?d(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Qn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Qn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const C=t.get(S),N=C.envMap,P=C.envMapRotation;N&&(M.envMap.value=N,M.envMapRotation.value.setFromMatrix4(uR.makeRotationFromEuler(P)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(gx),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function p(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,C,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*C,M.scale.value=N*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function x(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,C){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Qn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const C=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function hR(r,t,i,s){let l={},c={},h=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const P=N.program;s.uniformBlockBinding(C,P)}function d(C,N){let P=l[C.id];P===void 0&&(T(C),P=_(C),l[C.id]=P,C.addEventListener("dispose",M));const z=N.program;s.updateUBOMapping(C,z);const U=t.render.frame;c[C.id]!==U&&(g(C),c[C.id]=U)}function _(C){const N=x();C.__bindingPointIndex=N;const P=r.createBuffer(),z=C.__size,U=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,z,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,P),P}function x(){for(let C=0;C<p;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=l[C.id],P=C.uniforms,z=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let U=0,I=P.length;U<I;U++){const b=Array.isArray(P[U])?P[U]:[P[U]];for(let O=0,X=b.length;O<X;O++){const B=b[O];if(y(B,U,O,z)===!0){const K=B.__offset,ct=Array.isArray(B.value)?B.value:[B.value];let ut=0;for(let W=0;W<ct.length;W++){const L=ct[W],H=w(L);typeof L=="number"||typeof L=="boolean"?(B.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,K+ut,B.__data)):L.isMatrix3?(B.__data[0]=L.elements[0],B.__data[1]=L.elements[1],B.__data[2]=L.elements[2],B.__data[3]=0,B.__data[4]=L.elements[3],B.__data[5]=L.elements[4],B.__data[6]=L.elements[5],B.__data[7]=0,B.__data[8]=L.elements[6],B.__data[9]=L.elements[7],B.__data[10]=L.elements[8],B.__data[11]=0):ArrayBuffer.isView(L)?B.__data.set(new L.constructor(L.buffer,L.byteOffset,B.__data.length)):(L.toArray(B.__data,ut),ut+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(C,N,P,z){const U=C.value,I=N+"_"+P;if(z[I]===void 0)return typeof U=="number"||typeof U=="boolean"?z[I]=U:ArrayBuffer.isView(U)?z[I]=U.slice():z[I]=U.clone(),!0;{const b=z[I];if(typeof U=="number"||typeof U=="boolean"){if(b!==U)return z[I]=U,!0}else{if(ArrayBuffer.isView(U))return!0;if(b.equals(U)===!1)return b.copy(U),!0}}return!1}function T(C){const N=C.uniforms;let P=0;const z=16;for(let I=0,b=N.length;I<b;I++){const O=Array.isArray(N[I])?N[I]:[N[I]];for(let X=0,B=O.length;X<B;X++){const K=O[X],ct=Array.isArray(K.value)?K.value:[K.value];for(let ut=0,W=ct.length;ut<W;ut++){const L=ct[ut],H=w(L),et=P%z,mt=et%H.boundary,Mt=et+mt;P+=mt,Mt!==0&&z-Mt<H.storage&&(P+=z-Mt),K.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=P,P+=H.storage}}}const U=P%z;return U>0&&(P+=z-U),C.__size=P,C.__cache={},this}function w(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",C),N}function M(C){const N=C.target;N.removeEventListener("dispose",M);const P=h.indexOf(N.__bindingPointIndex);h.splice(P,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const C in l)r.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:d,dispose:S}}const dR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function pR(){return ki===null&&(ki=new Ky(dR,16,16,Ws,Aa),ki.name="DFG_LUT",ki.minFilter=zn,ki.magFilter=zn,ki.wrapS=Ea,ki.wrapT=Ea,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class _x{constructor(t={}){const{canvas:i=Ry(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:y=hi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const w=y,M=new Set([dp,hp,fp]),S=new Set([hi,Ki,rl,ol,cp,up]),C=new Uint32Array(4),N=new Int32Array(4),P=new $;let z=null,U=null;const I=[],b=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let B=!1,K=null;this._outputColorSpace=Gn;let ct=0,ut=0,W=null,L=-1,H=null;const et=new rn,mt=new rn;let Mt=null;const F=new fe(0);let J=0,St=i.width,At=i.height,Ct=1,lt=null,yt=null;const Z=new rn(0,0,St,At),Tt=new rn(0,0,St,At);let te=!1;const Qt=new vp;let We=!1,de=!1;const Me=new on,Ne=new $,ce=new rn,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function An(){return W===null?Ct:1}let q=s;function en(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rp}`),i.addEventListener("webglcontextlost",Et,!1),i.addEventListener("webglcontextrestored",jt,!1),i.addEventListener("webglcontextcreationerror",ee,!1),q===null){const Y="webgl2";if(q=en(Y,A),q===null)throw en(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ae("WebGLRenderer: "+A.message),A}let pe,He,wt,Qe,D,E,tt,vt,bt,Dt,Ot,ht,dt,Pt,It,Lt,Ut,ne,ie,ge,V,Rt,gt;function Bt(){pe=new p1(q),pe.init(),V=new sR(q,pe),He=new r1(q,pe,t,V),wt=new iR(q,pe),He.reversedDepthBuffer&&g&&wt.buffers.depth.setReversed(!0),Qe=new _1(q),D=new kA,E=new aR(q,pe,wt,D,He,V,Qe),tt=new d1(X),vt=new ME(q),Rt=new a1(q,vt),bt=new m1(q,vt,Qe,Rt),Dt=new x1(q,bt,vt,Rt,Qe),ne=new v1(q,He,E),It=new o1(D),Ot=new VA(X,tt,pe,He,Rt,It),ht=new fR(X,D),dt=new WA,Pt=new QA(pe),Ut=new i1(X,tt,wt,Dt,T,m),Lt=new nR(X,Dt,He),gt=new hR(q,Qe,He,wt),ie=new s1(q,pe,Qe),ge=new g1(q,pe,Qe),Qe.programs=Ot.programs,X.capabilities=He,X.extensions=pe,X.properties=D,X.renderLists=dt,X.shadowMap=Lt,X.state=wt,X.info=Qe}Bt(),w!==hi&&(O=new M1(w,i.width,i.height,l,c));const Nt=new cR(X,q);this.xr=Nt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ct},this.setPixelRatio=function(A){A!==void 0&&(Ct=A,this.setSize(St,At,!1))},this.getSize=function(A){return A.set(St,At)},this.setSize=function(A,Y,rt=!0){if(Nt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}St=A,At=Y,i.width=Math.floor(A*Ct),i.height=Math.floor(Y*Ct),rt===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(St*Ct,At*Ct).floor()},this.setDrawingBufferSize=function(A,Y,rt){St=A,At=Y,Ct=rt,i.width=Math.floor(A*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(w===hi){Ae("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){Jt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(et)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,Y,rt,at){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,Y,rt,at),wt.viewport(et.copy(Z).multiplyScalar(Ct).round())},this.getScissor=function(A){return A.copy(Tt)},this.setScissor=function(A,Y,rt,at){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,Y,rt,at),wt.scissor(mt.copy(Tt).multiplyScalar(Ct).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){wt.setScissorTest(te=A)},this.setOpaqueSort=function(A){lt=A},this.setTransparentSort=function(A){yt=A},this.getClearColor=function(A){return A.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,rt=!0){let at=0;if(A){let st=!1;if(W!==null){const zt=W.texture.format;st=M.has(zt)}if(st){const zt=W.texture.type,Vt=S.has(zt),Ft=Ut.getClearColor(),Xt=Ut.getClearAlpha(),kt=Ft.r,Zt=Ft.g,oe=Ft.b;Vt?(C[0]=kt,C[1]=Zt,C[2]=oe,C[3]=Xt,q.clearBufferuiv(q.COLOR,0,C)):(N[0]=kt,N[1]=Zt,N[2]=oe,N[3]=Xt,q.clearBufferiv(q.COLOR,0,N))}else at|=q.COLOR_BUFFER_BIT}Y&&(at|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(at|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&q.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Et,!1),i.removeEventListener("webglcontextrestored",jt,!1),i.removeEventListener("webglcontextcreationerror",ee,!1),Ut.dispose(),dt.dispose(),Pt.dispose(),D.dispose(),tt.dispose(),Dt.dispose(),Rt.dispose(),gt.dispose(),Ot.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",to),Nt.removeEventListener("sessionend",eo),Nn.stop()};function Et(A){A.preventDefault(),T_("WebGLRenderer: Context Lost."),B=!0}function jt(){T_("WebGLRenderer: Context Restored."),B=!1;const A=Qe.autoReset,Y=Lt.enabled,rt=Lt.autoUpdate,at=Lt.needsUpdate,st=Lt.type;Bt(),Qe.autoReset=A,Lt.enabled=Y,Lt.autoUpdate=rt,Lt.needsUpdate=at,Lt.type=st}function ee(A){Ae("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nn(A){const Y=A.target;Y.removeEventListener("dispose",nn),De(Y)}function De(A){gi(A),D.remove(A)}function gi(A){const Y=D.get(A).programs;Y!==void 0&&(Y.forEach(function(rt){Ot.releaseProgram(rt)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,rt,at,st,zt){Y===null&&(Y=ln);const Vt=st.isMesh&&st.matrixWorld.determinant()<0,Ft=Da(A,Y,rt,at,st);wt.setMaterial(at,Vt);let Xt=rt.index,kt=1;if(at.wireframe===!0){if(Xt=bt.getWireframeAttribute(rt),Xt===void 0)return;kt=2}const Zt=rt.drawRange,oe=rt.attributes.position;let Yt=Zt.start*kt,Re=(Zt.start+Zt.count)*kt;zt!==null&&(Yt=Math.max(Yt,zt.start*kt),Re=Math.min(Re,(zt.start+zt.count)*kt)),Xt!==null?(Yt=Math.max(Yt,0),Re=Math.min(Re,Xt.count)):oe!=null&&(Yt=Math.max(Yt,0),Re=Math.min(Re,oe.count));const Je=Re-Yt;if(Je<0||Je===1/0)return;Rt.setup(st,at,Ft,rt,Xt);let je,Oe=ie;if(Xt!==null&&(je=vt.get(Xt),Oe=ge,Oe.setIndex(je)),st.isMesh)at.wireframe===!0?(wt.setLineWidth(at.wireframeLinewidth*An()),Oe.setMode(q.LINES)):Oe.setMode(q.TRIANGLES);else if(st.isLine){let Pe=at.linewidth;Pe===void 0&&(Pe=1),wt.setLineWidth(Pe*An()),st.isLineSegments?Oe.setMode(q.LINES):st.isLineLoop?Oe.setMode(q.LINE_LOOP):Oe.setMode(q.LINE_STRIP)}else st.isPoints?Oe.setMode(q.POINTS):st.isSprite&&Oe.setMode(q.TRIANGLES);if(st.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Oe.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const Pe=st._multiDrawStarts,Gt=st._multiDrawCounts,On=st._multiDrawCount,_e=Xt?vt.get(Xt).bytesPerElement:1,vn=D.get(at).currentProgram.getUniforms();for(let ti=0;ti<On;ti++)vn.setValue(q,"_gl_DrawID",ti),Oe.render(Pe[ti]/_e,Gt[ti])}else if(st.isInstancedMesh)Oe.renderInstances(Yt,Je,st.count);else if(rt.isInstancedBufferGeometry){const Pe=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Gt=Math.min(rt.instanceCount,Pe);Oe.renderInstances(Yt,Je,Gt)}else Oe.render(Yt,Je)};function $n(A,Y,rt){A.transparent===!0&&A.side===ya&&A.forceSinglePass===!1?(A.side=Qn,A.needsUpdate=!0,Ys(A,Y,rt),A.side=ds,A.needsUpdate=!0,Ys(A,Y,rt),A.side=ya):Ys(A,Y,rt)}this.compile=function(A,Y,rt=null){rt===null&&(rt=A),U=Pt.get(rt),U.init(Y),b.push(U),rt.traverseVisible(function(st){st.isLight&&st.layers.test(Y.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),A!==rt&&A.traverseVisible(function(st){st.isLight&&st.layers.test(Y.layers)&&(U.pushLight(st),st.castShadow&&U.pushShadow(st))}),U.setupLights();const at=new Set;return A.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const zt=st.material;if(zt)if(Array.isArray(zt))for(let Vt=0;Vt<zt.length;Vt++){const Ft=zt[Vt];$n(Ft,rt,st),at.add(Ft)}else $n(zt,rt,st),at.add(zt)}),U=b.pop(),at},this.compileAsync=function(A,Y,rt=null){const at=this.compile(A,Y,rt);return new Promise(st=>{function zt(){if(at.forEach(function(Vt){D.get(Vt).currentProgram.isReady()&&at.delete(Vt)}),at.size===0){st(A);return}setTimeout(zt,10)}pe.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let _s=null;function $r(A){_s&&_s(A)}function to(){Nn.stop()}function eo(){Nn.start()}const Nn=new cx;Nn.setAnimationLoop($r),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){_s=A,Nt.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Nt.addEventListener("sessionstart",to),Nt.addEventListener("sessionend",eo),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;K!==null&&K.renderStart(A,Y);const rt=Nt.enabled===!0&&Nt.isPresenting===!0,at=O!==null&&(W===null||rt)&&O.begin(X,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(Y),Y=Nt.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,Y,W),U=Pt.get(A,b.length),U.init(Y),U.state.textureUnits=E.getTextureUnits(),b.push(U),Me.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Qt.setFromProjectionMatrix(Me,qi,Y.reversedDepth),de=this.localClippingEnabled,We=It.init(this.clippingPlanes,de),z=dt.get(A,I.length),z.init(),I.push(z),Nt.enabled===!0&&Nt.isPresenting===!0){const Vt=X.xr.getDepthSensingMesh();Vt!==null&&cn(Vt,Y,-1/0,X.sortObjects)}cn(A,Y,0,X.sortObjects),z.finish(),X.sortObjects===!0&&z.sort(lt,yt),Ye=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Ye&&Ut.addToRenderList(z,A),this.info.render.frame++,We===!0&&It.beginShadows();const st=U.state.shadowsArray;if(Lt.render(st,A,Y),We===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&O.hasRenderPass())===!1){const Vt=z.opaque,Ft=z.transmissive;if(U.setupLights(),Y.isArrayCamera){const Xt=Y.cameras;if(Ft.length>0)for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const oe=Xt[kt];Ji(Vt,Ft,A,oe)}Ye&&Ut.render(A);for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const oe=Xt[kt];Rn(z,A,oe,oe.viewport)}}else Ft.length>0&&Ji(Vt,Ft,A,Y),Ye&&Ut.render(A),Rn(z,A,Y)}W!==null&&ut===0&&(E.updateMultisampleRenderTarget(W),E.updateRenderTargetMipmap(W)),at&&O.end(X),A.isScene===!0&&A.onAfterRender(X,A,Y),Rt.resetDefaultState(),L=-1,H=null,b.pop(),b.length>0?(U=b[b.length-1],E.setTextureUnits(U.state.textureUnits),We===!0&&It.setGlobalState(X.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?z=I[I.length-1]:z=null,K!==null&&K.renderEnd()};function cn(A,Y,rt,at){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qt.intersectsSprite(A)){at&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const Vt=Dt.update(A),Ft=A.material;Ft.visible&&z.push(A,Vt,Ft,rt,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qt.intersectsObject(A))){const Vt=Dt.update(A),Ft=A.material;if(at&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ce.copy(Vt.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Ft)){const Xt=Vt.groups;for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const oe=Xt[kt],Yt=Ft[oe.materialIndex];Yt&&Yt.visible&&z.push(A,Vt,Yt,rt,ce.z,oe)}}else Ft.visible&&z.push(A,Vt,Ft,rt,ce.z,null)}}const zt=A.children;for(let Vt=0,Ft=zt.length;Vt<Ft;Vt++)cn(zt[Vt],Y,rt,at)}function Rn(A,Y,rt,at){const{opaque:st,transmissive:zt,transparent:Vt}=A;U.setupLightsView(rt),We===!0&&It.setGlobalState(X.clippingPlanes,rt),at&&wt.viewport(et.copy(at)),st.length>0&&Ca(st,Y,rt),zt.length>0&&Ca(zt,Y,rt),Vt.length>0&&Ca(Vt,Y,rt),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Ji(A,Y,rt,at){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[at.id]===void 0){const Yt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[at.id]=new Zi(1,1,{generateMipmaps:!0,type:Yt?Aa:hi,minFilter:Vs,samples:Math.max(4,He.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const zt=U.state.transmissionRenderTarget[at.id],Vt=at.viewport||et;zt.setSize(Vt.z*X.transmissionResolutionScale,Vt.w*X.transmissionResolutionScale);const Ft=X.getRenderTarget(),Xt=X.getActiveCubeFace(),kt=X.getActiveMipmapLevel();X.setRenderTarget(zt),X.getClearColor(F),J=X.getClearAlpha(),J<1&&X.setClearColor(16777215,.5),X.clear(),Ye&&Ut.render(rt);const Zt=X.toneMapping;X.toneMapping=Yi;const oe=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),U.setupLightsView(at),We===!0&&It.setGlobalState(X.clippingPlanes,at),Ca(A,rt,at),E.updateMultisampleRenderTarget(zt),E.updateRenderTargetMipmap(zt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Re=0,Je=Y.length;Re<Je;Re++){const je=Y[Re],{object:Oe,geometry:Pe,material:Gt,group:On}=je;if(Gt.side===ya&&Oe.layers.test(at.layers)){const _e=Gt.side;Gt.side=Qn,Gt.needsUpdate=!0,hl(Oe,rt,at,Pe,Gt,On),Gt.side=_e,Gt.needsUpdate=!0,Yt=!0}}Yt===!0&&(E.updateMultisampleRenderTarget(zt),E.updateRenderTargetMipmap(zt))}X.setRenderTarget(Ft,Xt,kt),X.setClearColor(F,J),oe!==void 0&&(at.viewport=oe),X.toneMapping=Zt}function Ca(A,Y,rt){const at=Y.isScene===!0?Y.overrideMaterial:null;for(let st=0,zt=A.length;st<zt;st++){const Vt=A[st],{object:Ft,geometry:Xt,group:kt}=Vt;let Zt=Vt.material;Zt.allowOverride===!0&&at!==null&&(Zt=at),Ft.layers.test(rt.layers)&&hl(Ft,Y,rt,Xt,Zt,kt)}}function hl(A,Y,rt,at,st,zt){A.onBeforeRender(X,Y,rt,at,st,zt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),st.onBeforeRender(X,Y,rt,at,A,zt),st.transparent===!0&&st.side===ya&&st.forceSinglePass===!1?(st.side=Qn,st.needsUpdate=!0,X.renderBufferDirect(rt,Y,at,st,A,zt),st.side=ds,st.needsUpdate=!0,X.renderBufferDirect(rt,Y,at,st,A,zt),st.side=ya):X.renderBufferDirect(rt,Y,at,st,A,zt),A.onAfterRender(X,Y,rt,at,st,zt)}function Ys(A,Y,rt){Y.isScene!==!0&&(Y=ln);const at=D.get(A),st=U.state.lights,zt=U.state.shadowsArray,Vt=st.state.version,Ft=Ot.getParameters(A,st.state,zt,Y,rt,U.state.lightProbeGridArray),Xt=Ot.getProgramCacheKey(Ft);let kt=at.programs;at.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,at.fog=Y.fog;const Zt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;at.envMap=tt.get(A.envMap||at.environment,Zt),at.envMapRotation=at.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",nn),kt=new Map,at.programs=kt);let oe=kt.get(Xt);if(oe!==void 0){if(at.currentProgram===oe&&at.lightsStateVersion===Vt)return wa(A,Ft),oe}else Ft.uniforms=Ot.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,rt,Ft),A.onBeforeCompile(Ft,X),oe=Ot.acquireProgram(Ft,Xt),kt.set(Xt,oe),at.uniforms=Ft.uniforms;const Yt=at.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=It.uniform),wa(A,Ft),at.needsLights=vs(A),at.lightsStateVersion=Vt,at.needsLights&&(Yt.ambientLightColor.value=st.state.ambient,Yt.lightProbe.value=st.state.probe,Yt.directionalLights.value=st.state.directional,Yt.directionalLightShadows.value=st.state.directionalShadow,Yt.spotLights.value=st.state.spot,Yt.spotLightShadows.value=st.state.spotShadow,Yt.rectAreaLights.value=st.state.rectArea,Yt.ltc_1.value=st.state.rectAreaLTC1,Yt.ltc_2.value=st.state.rectAreaLTC2,Yt.pointLights.value=st.state.point,Yt.pointLightShadows.value=st.state.pointShadow,Yt.hemisphereLights.value=st.state.hemi,Yt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Yt.spotLightMatrix.value=st.state.spotLightMatrix,Yt.spotLightMap.value=st.state.spotLightMap,Yt.pointShadowMatrix.value=st.state.pointShadowMatrix),at.lightProbeGrid=U.state.lightProbeGridArray.length>0,at.currentProgram=oe,at.uniformsList=null,oe}function no(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=eu.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function wa(A,Y){const rt=D.get(A);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function io(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(Y.matrixWorld);for(let rt=0,at=A.length;rt<at;rt++){const st=A[rt];if(st.texture!==null&&st.boundingBox.containsPoint(P))return st}return null}function Da(A,Y,rt,at,st){Y.isScene!==!0&&(Y=ln),E.resetTextureUnits();const zt=Y.fog,Vt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?Y.environment:null,Ft=W===null?X.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Te.workingColorSpace,Xt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,kt=tt.get(at.envMap||Vt,Xt),Zt=at.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,oe=!!rt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Yt=!!rt.morphAttributes.position,Re=!!rt.morphAttributes.normal,Je=!!rt.morphAttributes.color;let je=Yi;at.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(je=X.toneMapping);const Oe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=Oe!==void 0?Oe.length:0,Gt=D.get(at),On=U.state.lights;if(We===!0&&(de===!0||A!==H)){const Le=A===H&&at.id===L;It.setState(at,A,Le)}let _e=!1;at.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==On.state.version||Gt.outputColorSpace!==Ft||st.isBatchedMesh&&Gt.batching===!1||!st.isBatchedMesh&&Gt.batching===!0||st.isBatchedMesh&&Gt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&Gt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&Gt.instancing===!1||!st.isInstancedMesh&&Gt.instancing===!0||st.isSkinnedMesh&&Gt.skinning===!1||!st.isSkinnedMesh&&Gt.skinning===!0||st.isInstancedMesh&&Gt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Gt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Gt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Gt.instancingMorph===!1&&st.morphTexture!==null||Gt.envMap!==kt||at.fog===!0&&Gt.fog!==zt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==It.numPlanes||Gt.numIntersection!==It.numIntersection)||Gt.vertexAlphas!==Zt||Gt.vertexTangents!==oe||Gt.morphTargets!==Yt||Gt.morphNormals!==Re||Gt.morphColors!==Je||Gt.toneMapping!==je||Gt.morphTargetsCount!==Pe||!!Gt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Gt.__version=at.version);let vn=Gt.currentProgram;_e===!0&&(vn=Ys(at,Y,st),K&&at.isNodeMaterial&&K.onUpdateProgram(at,vn,Gt));let ti=!1,Ri=!1,ei=!1;const Ie=vn.getUniforms(),$e=Gt.uniforms;if(wt.useProgram(vn.program)&&(ti=!0,Ri=!0,ei=!0),at.id!==L&&(L=at.id,Ri=!0),Gt.needsLights){const Le=io(U.state.lightProbeGridArray,st);Gt.lightProbeGrid!==Le&&(Gt.lightProbeGrid=Le,Ri=!0)}if(ti||H!==A){wt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ie.setValue(q,"projectionMatrix",A.projectionMatrix),Ie.setValue(q,"viewMatrix",A.matrixWorldInverse);const Fi=Ie.map.cameraPosition;Fi!==void 0&&Fi.setValue(q,Ne.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&Ie.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ie.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,Ri=!0,ei=!0)}if(Gt.needsLights&&(On.state.directionalShadowMap.length>0&&Ie.setValue(q,"directionalShadowMap",On.state.directionalShadowMap,E),On.state.spotShadowMap.length>0&&Ie.setValue(q,"spotShadowMap",On.state.spotShadowMap,E),On.state.pointShadowMap.length>0&&Ie.setValue(q,"pointShadowMap",On.state.pointShadowMap,E)),st.isSkinnedMesh){Ie.setOptional(q,st,"bindMatrix"),Ie.setOptional(q,st,"bindMatrixInverse");const Le=st.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Ie.setValue(q,"boneTexture",Le.boneTexture,E))}st.isBatchedMesh&&(Ie.setOptional(q,st,"batchingTexture"),Ie.setValue(q,"batchingTexture",st._matricesTexture,E),Ie.setOptional(q,st,"batchingIdTexture"),Ie.setValue(q,"batchingIdTexture",st._indirectTexture,E),Ie.setOptional(q,st,"batchingColorTexture"),st._colorsTexture!==null&&Ie.setValue(q,"batchingColorTexture",st._colorsTexture,E));const Ci=rt.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&ne.update(st,rt,vn),(Ri||Gt.receiveShadow!==st.receiveShadow)&&(Gt.receiveShadow=st.receiveShadow,Ie.setValue(q,"receiveShadow",st.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&Y.environment!==null&&($e.envMapIntensity.value=Y.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=pR()),Ri){if(Ie.setValue(q,"toneMappingExposure",X.toneMappingExposure),Gt.needsLights&&Ua($e,ei),zt&&at.fog===!0&&ht.refreshFogUniforms($e,zt),ht.refreshMaterialUniforms($e,at,Ct,At,U.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const Le=Gt.lightProbeGrid;$e.probesSH.value=Le.texture,$e.probesMin.value.copy(Le.boundingBox.min),$e.probesMax.value.copy(Le.boundingBox.max),$e.probesResolution.value.copy(Le.resolution)}eu.upload(q,no(Gt),$e,E)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(eu.upload(q,no(Gt),$e,E),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ie.setValue(q,"center",st.center),Ie.setValue(q,"modelViewMatrix",st.modelViewMatrix),Ie.setValue(q,"normalMatrix",st.normalMatrix),Ie.setValue(q,"modelMatrix",st.matrixWorld),at.uniformsGroups!==void 0){const Le=at.uniformsGroups;for(let Fi=0,Na=Le.length;Fi<Na;Fi++){const xs=Le[Fi];gt.update(xs,vn),gt.bind(xs,vn)}}return vn}function Ua(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function vs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return ut},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,Y,rt){const at=D.get(A);at.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=Y,D.get(A.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:rt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const rt=D.get(A);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const La=q.createFramebuffer();this.setRenderTarget=function(A,Y=0,rt=0){W=A,ct=Y,ut=rt;let at=null,st=!1,zt=!1;if(A){const Ft=D.get(A);if(Ft.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(q.FRAMEBUFFER,Ft.__webglFramebuffer),et.copy(A.viewport),mt.copy(A.scissor),Mt=A.scissorTest,wt.viewport(et),wt.scissor(mt),wt.setScissorTest(Mt),L=-1;return}else if(Ft.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ft.__hasExternalTextures)E.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(Ft.__boundDepthTexture!==Zt){if(Zt!==null&&D.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(zt=!0);const kt=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[Y])?at=kt[Y][rt]:at=kt[Y],st=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?at=D.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?at=kt[rt]:at=kt,et.copy(A.viewport),mt.copy(A.scissor),Mt=A.scissorTest}else et.copy(Z).multiplyScalar(Ct).floor(),mt.copy(Tt).multiplyScalar(Ct).floor(),Mt=te;if(rt!==0&&(at=La),wt.bindFramebuffer(q.FRAMEBUFFER,at)&&wt.drawBuffers(A,at),wt.viewport(et),wt.scissor(mt),wt.setScissorTest(Mt),st){const Ft=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ft.__webglTexture,rt)}else if(zt){const Ft=Y;for(let Xt=0;Xt<A.textures.length;Xt++){const kt=D.get(A.textures[Xt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Xt,kt.__webglTexture,rt,Ft)}}else if(A!==null&&rt!==0){const Ft=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ft.__webglTexture,rt)}L=-1},this.readRenderTargetPixels=function(A,Y,rt,at,st,zt,Vt,Ft=0){if(!(A&&A.isWebGLRenderTarget)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){wt.bindFramebuffer(q.FRAMEBUFFER,Xt);try{const kt=A.textures[Ft],Zt=kt.format,oe=kt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft),!He.textureFormatReadable(Zt)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(oe)){Ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-at&&rt>=0&&rt<=A.height-st&&q.readPixels(Y,rt,at,st,V.convert(Zt),V.convert(oe),zt)}finally{const kt=W!==null?D.get(W).__webglFramebuffer:null;wt.bindFramebuffer(q.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,rt,at,st,zt,Vt,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(Y>=0&&Y<=A.width-at&&rt>=0&&rt<=A.height-st){wt.bindFramebuffer(q.FRAMEBUFFER,Xt);const kt=A.textures[Ft],Zt=kt.format,oe=kt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ft),!He.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Yt),q.bufferData(q.PIXEL_PACK_BUFFER,zt.byteLength,q.STREAM_READ),q.readPixels(Y,rt,at,st,V.convert(Zt),V.convert(oe),0);const Re=W!==null?D.get(W).__webglFramebuffer:null;wt.bindFramebuffer(q.FRAMEBUFFER,Re);const Je=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Cy(q,Je,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Yt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,zt),q.deleteBuffer(Yt),q.deleteSync(Je),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,rt=0){const at=Math.pow(2,-rt),st=Math.floor(A.image.width*at),zt=Math.floor(A.image.height*at),Vt=Y!==null?Y.x:0,Ft=Y!==null?Y.y:0;E.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,rt,0,0,Vt,Ft,st,zt),wt.unbindTexture()};const hn=q.createFramebuffer(),dl=q.createFramebuffer();this.copyTextureToTexture=function(A,Y,rt=null,at=null,st=0,zt=0){let Vt,Ft,Xt,kt,Zt,oe,Yt,Re,Je;const je=A.isCompressedTexture?A.mipmaps[zt]:A.image;if(rt!==null)Vt=rt.max.x-rt.min.x,Ft=rt.max.y-rt.min.y,Xt=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,Zt=rt.min.y,oe=rt.isBox3?rt.min.z:0;else{const $e=Math.pow(2,-st);Vt=Math.floor(je.width*$e),Ft=Math.floor(je.height*$e),A.isDataArrayTexture?Xt=je.depth:A.isData3DTexture?Xt=Math.floor(je.depth*$e):Xt=1,kt=0,Zt=0,oe=0}at!==null?(Yt=at.x,Re=at.y,Je=at.z):(Yt=0,Re=0,Je=0);const Oe=V.convert(Y.format),Pe=V.convert(Y.type);let Gt;Y.isData3DTexture?(E.setTexture3D(Y,0),Gt=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(E.setTexture2DArray(Y,0),Gt=q.TEXTURE_2D_ARRAY):(E.setTexture2D(Y,0),Gt=q.TEXTURE_2D),wt.activeTexture(q.TEXTURE0),wt.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),wt.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),wt.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const On=wt.getParameter(q.UNPACK_ROW_LENGTH),_e=wt.getParameter(q.UNPACK_IMAGE_HEIGHT),vn=wt.getParameter(q.UNPACK_SKIP_PIXELS),ti=wt.getParameter(q.UNPACK_SKIP_ROWS),Ri=wt.getParameter(q.UNPACK_SKIP_IMAGES);wt.pixelStorei(q.UNPACK_ROW_LENGTH,je.width),wt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,je.height),wt.pixelStorei(q.UNPACK_SKIP_PIXELS,kt),wt.pixelStorei(q.UNPACK_SKIP_ROWS,Zt),wt.pixelStorei(q.UNPACK_SKIP_IMAGES,oe);const ei=A.isDataArrayTexture||A.isData3DTexture,Ie=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const $e=D.get(A),Ci=D.get(Y),Le=D.get($e.__renderTarget),Fi=D.get(Ci.__renderTarget);wt.bindFramebuffer(q.READ_FRAMEBUFFER,Le.__webglFramebuffer),wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Na=0;Na<Xt;Na++)ei&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(A).__webglTexture,st,oe+Na),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(Y).__webglTexture,zt,Je+Na)),q.blitFramebuffer(kt,Zt,Vt,Ft,Yt,Re,Vt,Ft,q.DEPTH_BUFFER_BIT,q.NEAREST);wt.bindFramebuffer(q.READ_FRAMEBUFFER,null),wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(st!==0||A.isRenderTargetTexture||D.has(A)){const $e=D.get(A),Ci=D.get(Y);wt.bindFramebuffer(q.READ_FRAMEBUFFER,hn),wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,dl);for(let Le=0;Le<Xt;Le++)ei?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$e.__webglTexture,st,oe+Le):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,$e.__webglTexture,st),Ie?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ci.__webglTexture,zt,Je+Le):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ci.__webglTexture,zt),st!==0?q.blitFramebuffer(kt,Zt,Vt,Ft,Yt,Re,Vt,Ft,q.COLOR_BUFFER_BIT,q.NEAREST):Ie?q.copyTexSubImage3D(Gt,zt,Yt,Re,Je+Le,kt,Zt,Vt,Ft):q.copyTexSubImage2D(Gt,zt,Yt,Re,kt,Zt,Vt,Ft);wt.bindFramebuffer(q.READ_FRAMEBUFFER,null),wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ie?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Gt,zt,Yt,Re,Je,Vt,Ft,Xt,Oe,Pe,je.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(Gt,zt,Yt,Re,Je,Vt,Ft,Xt,Oe,je.data):q.texSubImage3D(Gt,zt,Yt,Re,Je,Vt,Ft,Xt,Oe,Pe,je):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,zt,Yt,Re,Vt,Ft,Oe,Pe,je.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,zt,Yt,Re,je.width,je.height,Oe,je.data):q.texSubImage2D(q.TEXTURE_2D,zt,Yt,Re,Vt,Ft,Oe,Pe,je);wt.pixelStorei(q.UNPACK_ROW_LENGTH,On),wt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,_e),wt.pixelStorei(q.UNPACK_SKIP_PIXELS,vn),wt.pixelStorei(q.UNPACK_SKIP_ROWS,ti),wt.pixelStorei(q.UNPACK_SKIP_IMAGES,Ri),zt===0&&Y.generateMipmaps&&q.generateMipmap(Gt),wt.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){ct=0,ut=0,W=null,wt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const Ev={type:"change"},yp={type:"start"},vx={type:"end"},Zc=new _p,bv=new cs,mR=Math.cos(70*Uy.DEG2RAD),Sn=new $,Kn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ld=1e-6;class gR extends xE{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vr.ROTATE,MIDDLE:Vr.DOLLY,RIGHT:Vr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new ps,this._lastTargetPosition=new $,this._quat=new ps().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Q_,this._sphericalDelta=new Q_,this._scale=1,this._panOffset=new $,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new $,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vR.bind(this),this._onPointerDown=_R.bind(this),this._onPointerUp=xR.bind(this),this._onContextMenu=AR.bind(this),this._onMouseWheel=yR.bind(this),this._onKeyDown=ER.bind(this),this._onTouchStart=bR.bind(this),this._onTouchMove=TR.bind(this),this._onMouseDown=SR.bind(this),this._onMouseMove=MR.bind(this),this._interceptControlDown=RR.bind(this),this._interceptControlUp=CR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ev),this.update(),this.state=Xe.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Sn.copy(i).sub(this.target),Sn.applyQuaternion(this._quat),this._spherical.setFromVector3(Sn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Sn.setFromSpherical(this._spherical),Sn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const p=Sn.length();h=this._clampDistance(p*this._scale);const m=p-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),h=Sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Zc.origin.copy(this.object.position),Zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zc.direction))<mR?this.object.lookAt(this.target):(bv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zc.intersectPlane(bv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ld||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ld||this._lastTargetPosition.distanceToSquared(this.target)>ld?(this.dispatchEvent(Ev),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Sn.setFromMatrixColumn(i,0),Sn.multiplyScalar(-t),this._panOffset.add(Sn)}_panUp(t,i){this.screenSpacePanning===!0?Sn.setFromMatrixColumn(i,1):(Sn.setFromMatrixColumn(i,0),Sn.crossVectors(this.object.up,Sn)),Sn.multiplyScalar(t),this._panOffset.add(Sn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Sn.copy(l).sub(this.target);let c=Sn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,p=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(h,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new re,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function _R(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function vR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function xR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vx),this.state=Xe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function SR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Vr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Vr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Vr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(yp)}function MR(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function yR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(yp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(vx))}function ER(r){this.enabled!==!1&&this._handleKeyDown(r)}function bR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case Gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(yp)}function TR(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function AR(r){this.enabled!==!1&&r.preventDefault()}function RR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class xx extends Sp{constructor(t){super(t)}load(t,i,s,l){const c=this,h=new dE(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(p){try{i(c.parse(p))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},s,l)}parse(t){function i(d){const _=new DataView(d),x=32/8*3+32/8*3*3+16/8,g=_.getUint32(80,!0);if(80+32/8+g*x===_.byteLength)return!0;const T=[115,111,108,105,100];for(let w=0;w<5;w++)if(s(T,_,w))return!1;return!0}function s(d,_,x){for(let g=0,y=d.length;g<y;g++)if(d[g]!==_.getUint8(x+g))return!1;return!0}function l(d){const _=new DataView(d),x=_.getUint32(80,!0);let g,y,T,w=!1,M,S,C,N,P;for(let B=0;B<70;B++)_.getUint32(B,!1)==1129270351&&_.getUint8(B+4)==82&&_.getUint8(B+5)==61&&(w=!0,M=new Float32Array(x*3*3),S=_.getUint8(B+6)/255,C=_.getUint8(B+7)/255,N=_.getUint8(B+8)/255,P=_.getUint8(B+9)/255);const z=84,U=50,I=new pi,b=new Float32Array(x*3*3),O=new Float32Array(x*3*3),X=new fe;for(let B=0;B<x;B++){const K=z+B*U,ct=_.getFloat32(K,!0),ut=_.getFloat32(K+4,!0),W=_.getFloat32(K+8,!0);if(w){const L=_.getUint16(K+48,!0);(L&32768)===0?(g=(L&31)/31,y=(L>>5&31)/31,T=(L>>10&31)/31):(g=S,y=C,T=N)}for(let L=1;L<=3;L++){const H=K+L*12,et=B*3*3+(L-1)*3;b[et]=_.getFloat32(H,!0),b[et+1]=_.getFloat32(H+4,!0),b[et+2]=_.getFloat32(H+8,!0),O[et]=ct,O[et+1]=ut,O[et+2]=W,w&&(X.setRGB(g,y,T,Gn),M[et]=X.r,M[et+1]=X.g,M[et+2]=X.b)}}return I.setAttribute("position",new di(b,3)),I.setAttribute("normal",new di(O,3)),w&&(I.setAttribute("color",new di(M,3)),I.hasColors=!0,I.alpha=P),I}function c(d){const _=new pi,x=/solid([\s\S]*?)endsolid/g,g=/facet([\s\S]*?)endfacet/g,y=/solid\s(.+)/;let T=0;const w=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,M=new RegExp("vertex"+w+w+w,"g"),S=new RegExp("normal"+w+w+w,"g"),C=[],N=[],P=[],z=new $;let U,I=0,b=0,O=0;for(;(U=x.exec(d))!==null;){b=O;const X=U[0],B=(U=y.exec(X))!==null?U[1]:"";for(P.push(B);(U=g.exec(X))!==null;){let ut=0,W=0;const L=U[0];for(;(U=S.exec(L))!==null;)z.x=parseFloat(U[1]),z.y=parseFloat(U[2]),z.z=parseFloat(U[3]),W++;for(;(U=M.exec(L))!==null;)C.push(parseFloat(U[1]),parseFloat(U[2]),parseFloat(U[3])),N.push(z.x,z.y,z.z),ut++,O++;W!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+T),ut!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+T),T++}const K=b,ct=O-b;_.userData.groupNames=P,_.addGroup(K,ct,I),I++}return _.setAttribute("position",new Jn(C,3)),_.setAttribute("normal",new Jn(N,3)),_}function h(d){return typeof d!="string"?new TextDecoder().decode(d):d}function p(d){if(typeof d=="string"){const _=new Uint8Array(d.length);for(let x=0;x<d.length;x++)_[x]=d.charCodeAt(x)&255;return _.buffer||_}else return d}const m=p(t);return i(m)?l(m):c(h(t))}}const cd={schema_version:1,paper:{title:"P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning",authors:["Yikang Yang¹,²,*","Zhanpeng Hu¹,*","Youtian Lin¹","Mengqi Zhou¹,²","Jingxi Xu²","Feihu Zhang²","Jiaheng Liu¹","Yao Yao¹"],affiliations:["¹Nanjing University","²DreamTech","*Equal contribution."],abstract:"Multimodal large language models can write code and interpret rendered images of 3D designs, but it remains unclear whether they can produce executable parametric 3D programs that are geometrically precise, semantically aligned and assembly-consistent. We introduce P3D-Bench, a benchmark that evaluates this ability under a unified protocol across three task families: text-conditioned part synthesis, image-conditioned multi-part reconstruction and image-plus-annotation assembly composition, with metrics that jointly probe executability, geometric fidelity, topology, text-grounded constraints, multiview semantic alignment and part-level assembly structure.",links:{code:"https://github.com/LucasQAQ/p3d"}},tasks:[{id:"text2cad",label:"Text-to-3D",formats:["JSON","OpenSCAD"],status:"interactive"},{id:"image2cad",label:"Image-to-3D",formats:["CadQuery","OpenSCAD","Three.js"],status:"interactive"},{id:"text_image2cad",label:"Assembly-3D",formats:["CadQuery","OpenSCAD"],status:"interactive"}],models:[],cases:[],runs:[],figures:[{id:"pipeline",title:"Pipeline",placeholder:!0},{id:"leaderboard",title:"Leaderboard",placeholder:!0}],gallery:[]};function Ii(r){return r?r.startsWith("http")||r.startsWith("/")?r:`${"./".endsWith("/")?"./":".//"}demo/${r}`:""}function wR(){const[r,t]=Se.useState(cd),[i,s]=Se.useState("text2cad"),[l,c]=Se.useState(""),[h,p]=Se.useState(""),[m,d]=Se.useState("descriptive"),[_,x]=Se.useState("openscad"),[g,y]=Se.useState(""),[T,w]=Se.useState(null);Se.useEffect(()=>{fetch(Ii("manifest.json")).then(Z=>Z.ok?Z.json():cd).then(Z=>t(Z)).catch(()=>t(cd))},[]);const M=Se.useMemo(()=>r.runs.filter(Z=>Z.task===i&&Sx(Z)),[r,i]),S=Se.useMemo(()=>LR(M),[M]),C=Se.useMemo(()=>M.filter(Z=>S.has(Z.case_id)),[M,S]),N=Se.useMemo(()=>r.cases.filter(Z=>Z.task===i&&S.has(Z.id)),[S,r,i]),P=Se.useMemo(()=>C.find(Z=>Z.case_id===l&&Z.model===h&&Z.format===_),[l,_,h,C]),z=Se.useMemo(()=>P||Xi(C.filter(Z=>Z.case_id===l&&Z.model===h))||Xi(C.filter(Z=>Z.case_id===l))||Xi(C),[l,P,h,C]),U=z?.case_id||l,I=z?.model||h,b=z?.spec||m,O=z?.format||_,X=Se.useMemo(()=>C.filter(Z=>Z.case_id===U),[U,C]),B=Se.useMemo(()=>r.models.filter(Z=>X.some(Tt=>Tt.model===Z.id)),[X,r.models]),K=Se.useMemo(()=>X.filter(Z=>Z.model===I),[I,X]),ct=Se.useMemo(()=>Array.from(new Set(C.map(Z=>Z.format))).sort((Z,Tt)=>Kr(Z)-Kr(Tt)),[C]),ut=ct.length?ct:K.map(Z=>Z.format),W=Se.useMemo(()=>NR(N,C),[N,C]);Se.useEffect(()=>{z&&(l!==z.case_id&&c(z.case_id),h!==z.model&&p(z.model),m!==z.spec&&d(z.spec),_!==z.format&&x(z.format))},[l,_,h,z,m]);const L=r.cases.find(Z=>Z.id===U),H=r.models.find(Z=>Z.id===I),et=r.tasks.find(Z=>Z.id===z?.task),mt=Se.useMemo(()=>DR(r),[r]),Mt=Se.useMemo(()=>XR(mt),[mt]),F=Se.useMemo(()=>r.tasks.filter(Z=>Z.status==="interactive"),[r]),J=N.some(Z=>Z.thumbnail),St=z?.condition||L?.title||"No input.",At=z?{title:L?.title||`Case ${z.case_id}`,taskLabel:et?.label||z.task,specLabel:ip(z.spec),input:St,inputImage:J?void 0:z.assets.input_image,subtitle:`${H?.label||z.model} / ${al(z.format)}`}:null,Ct=Z=>{Z&&(c(Z.case_id),p(Z.model),d(Z.spec),x(Z.format))},lt=Z=>Xi(C.filter(Tt=>Tt.case_id===U&&Tt.model===I&&Tt.format===Z))||Xi(C.filter(Tt=>Tt.case_id===U&&Tt.format===Z))||Xi(C.filter(Tt=>Tt.model===I&&Tt.format===Z))||Xi(C.filter(Tt=>Tt.format===Z));Se.useEffect(()=>{const Z=z?.assets.generated||z?.assets.generated_json;if(!Z){y("");return}fetch(Ii(Z)).then(Tt=>Tt.ok?Tt.text():"").then(y).catch(()=>y(""))},[z]);const yt=r.paper;return j.jsxs("main",{children:[j.jsxs("nav",{className:"nav",children:[j.jsx("a",{className:"brand",href:"#top",children:"P3D-Bench"}),j.jsxs("div",{children:[j.jsx("a",{href:"#results",children:"Results"}),j.jsx("a",{href:"#pipeline",children:"Pipeline"}),j.jsx("a",{href:"#gallery",children:"Viewer"})]})]}),j.jsxs("section",{id:"top",className:"hero",children:[j.jsxs("div",{className:"hero-copy",children:[j.jsx("p",{className:"eyebrow",children:"Parametric 3D CAD Benchmark"}),j.jsxs("h1",{className:"hero-title",children:[j.jsx("span",{children:"P3D-Bench"}),j.jsxs("small",{children:["Benchmarking MLLMs for ",j.jsx("em",{children:"Parametric 3D"})," Generation and ",j.jsx("em",{children:"Structural Reasoning"})]})]}),j.jsx("div",{className:"authors",children:yt.authors.map(Z=>j.jsx("span",{className:"author-name",children:KR(Z)},Z))}),j.jsx("div",{className:"affiliations",children:yt.affiliations?.map(Z=>j.jsx("span",{className:"affiliation-item",children:QR(Z)},Z))}),j.jsxs("div",{className:"actions",children:[j.jsxs("a",{href:yt.links?.paper||"#pipeline",children:[j.jsx(VM,{size:17})," Paper"]}),j.jsxs("a",{href:yt.links?.code||"https://github.com/LucasQAQ/p3d",children:[j.jsx(WM,{size:17})," Page Repo"]}),j.jsxs("a",{href:"#results",children:[j.jsx(YM,{size:17})," Demo"]}),j.jsxs("a",{href:"#citation",children:[j.jsx(kM,{size:17})," BibTeX"]})]})]}),j.jsx(WR,{items:Mt}),j.jsxs("div",{className:"abstract-panel",children:[j.jsx("p",{className:"eyebrow",children:"Abstract"}),j.jsx("p",{className:"abstract",children:yt.abstract})]})]}),j.jsx("section",{className:"task-strip",children:F.map(Z=>j.jsxs("button",{className:i===Z.id?"task-card active":"task-card",onClick:()=>s(Z.id),children:[j.jsx("span",{children:Z.label}),j.jsx("strong",{children:Z.formats.join(" / ")})]},Z.id))}),j.jsxs("section",{id:"results",className:"section",children:[j.jsx("div",{className:"section-heading",children:j.jsx("h2",{children:"Interactive Results"})}),C.length?j.jsxs("div",{className:"workbench",children:[j.jsxs("aside",{className:"controls",children:[j.jsx(ud,{label:"Case",value:U,options:N.map(Z=>[Z.id,Z.title]),onChange:Z=>Ct(Xi(C.filter(Tt=>Tt.case_id===Z)))}),J?j.jsx(YR,{cases:N,activeCaseId:U,onSelect:Z=>Ct(Xi(C.filter(Tt=>Tt.case_id===Z)))}):null,j.jsx(ud,{label:"Model",value:I,options:B.map(Z=>[Z.id,Z.label]),onChange:Z=>Ct(Xi(X.filter(Tt=>Tt.model===Z)))}),j.jsx(ud,{label:"Format",value:O,options:ut.map(Z=>[Z,al(Z)]),onChange:Z=>Ct(lt(Z))}),j.jsxs("div",{className:"select-label readonly-select",children:[j.jsx("span",{children:"Input protocol"}),j.jsx("strong",{children:ip(b)})]}),j.jsx(OR,{summary:W}),j.jsxs("div",{className:"condition",children:[j.jsx("span",{children:"Input"}),z?.assets.input_image&&!J?j.jsx("img",{className:"condition-image",src:Ii(z.assets.input_image),alt:"Input reference"}):null,j.jsx("p",{children:St}),At&&Ex(At)?j.jsx("button",{className:"condition-full-input",type:"button",onClick:()=>w(At),children:"View full input"}):null]})]}),j.jsxs("div",{className:"result-stage",children:[j.jsxs("div",{className:"render-pair",children:[j.jsx(jR,{run:z,title:L?.title||"Ground Truth",subtitle:"Reference geometry"}),j.jsx(qR,{run:z,title:L?.title||"Prediction",subtitle:`${H?.label||z?.model||""}${z?` / ${al(z.format)}`:""}`})]}),j.jsx(JR,{run:z}),j.jsxs("div",{className:"code-panel",children:[j.jsxs("div",{className:"panel-title",children:[j.jsx(XM,{size:18})," Generated ",al(O)]}),j.jsx("pre",{children:j.jsx("code",{children:g||"No generated output."})})]})]})]}):j.jsx(Ax,{title:"Results"})]}),j.jsxs("section",{id:"pipeline",className:"section",children:[j.jsx("div",{className:"section-heading",children:j.jsx("h2",{children:"Pipeline & Leaderboard"})}),j.jsx(zR,{})]}),j.jsxs("section",{id:"gallery",className:"section",children:[j.jsx("div",{className:"section-heading",children:j.jsx("h2",{children:"Render Showcase"})}),j.jsx(kR,{items:mt})]}),j.jsxs("section",{id:"citation",className:"section citation",children:[j.jsxs("div",{className:"citation-heading",children:[j.jsx("h2",{children:"Citation"}),j.jsx("p",{className:"citation-format",children:"BibTeX"})]}),j.jsx("pre",{children:j.jsx("code",{children:`@article{p3dbench2026,
  title={P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning},
  author={Yang, Yikang and Hu, Zhanpeng and Lin, Youtian and Zhou, Mengqi and Xu, Jingxi and Zhang, Feihu and Liu, Jiaheng and Yao, Yao},
  year={2026}
}`})})]}),T?j.jsx(Mx,{item:T,onClose:()=>w(null)}):null]})}function DR(r){const t=["gpt55-reason","gemini-reason","claude-reason","kimi_k26-reason","doubao-reason","qwen-reason","mimo_omni-reason"],i=["openscad","cadquery","threejs","json"],s=new Map(r.models.map(m=>[m.id,m.label])),l=new Map(r.tasks.map(m=>[m.id,m.label])),c=new Map(r.cases.map(m=>[m.id,m.title])),h=new Map;r.runs.filter(m=>Sx(m)&&m.valid!==!1).forEach(m=>{const d=`${m.task}/${m.case_id}`,_=h.get(d)||[];_.push(m),h.set(d,_)});const p=r.cases.map((m,d)=>{const _=t[d%t.length],x=i[d%i.length];return[...h.get(`${m.task}/${m.id}`)||[]].sort((y,T)=>{const w=cu(T)-cu(y);if(w)return w;const M=+(y.model!==_)-+(T.model!==_);if(M)return M;const S=+(y.format!==x)-+(T.format!==x);return S||y.id.localeCompare(T.id)})[0]}).filter(m=>!!m).map(m=>({id:m.id,task:m.task,title:c.get(m.case_id)||`Case ${m.case_id.split("/").pop()||m.case_id}`,subtitle:`${s.get(m.model)||m.model} / ${PR((h.get(`${m.task}/${m.case_id}`)||[]).filter(d=>d.model===m.model).map(d=>d.format))}`,taskLabel:l.get(m.task)||m.task,specLabel:ip(m.spec),input:m.condition||c.get(m.case_id)||`Case ${m.case_id}`,inputImage:m.assets.input_image,src:m.assets.pred_render||"",mesh:m.assets.mesh||""}));return UR(p)}function UR(r){const t=["text2cad","image2cad","text_image2cad"],i=new Map;r.forEach(c=>i.set(c.task,[...i.get(c.task)||[],c]));const s=[];let l=0;for(;s.length<r.length;){let c=!1;for(const h of t){const p=i.get(h)?.[l];p&&(s.push(p),c=!0)}if(!c)break;l+=1}return s}function Sx(r){return!!((r.condition||"").trim()&&(r.assets.generated||r.assets.generated_json)&&r.assets.gt_mesh&&r.assets.gt_render&&r.assets.mesh&&r.assets.pred_render)}function LR(r){return new Set(r.map(t=>t.case_id))}function NR(r,t){const i=new Set(r.map(p=>p.id)),s=new Set(t.map(p=>p.model)),l=new Set(t.map(p=>p.format)),c=new Set(t.map(p=>`${p.case_id}/${p.model}/${p.format}`)),h=i.size*s.size*l.size;return{invalidCount:Math.max(0,h-c.size),caseCount:i.size,modelCount:s.size,formatCount:l.size}}function OR({summary:r}){return r.invalidCount?j.jsxs("p",{className:"availability-note",title:`${r.caseCount} cases, ${r.modelCount} models, ${r.formatCount} formats`,children:[j.jsx("span",{"aria-hidden":"true"}),"Invalid or non-renderable outputs are omitted from these selectors (",r.invalidCount," combinations)."]}):null}function Xi(r){return[...r].sort((t,i)=>{const s=+(i.valid!==!1)-+(t.valid!==!1);if(s)return s;const l=Kr(t.format)-Kr(i.format);if(l)return l;const c=cu(i)-cu(t);if(c)return c;const h=Tv(t.spec)-Tv(i.spec);return h||t.id.localeCompare(i.id)})[0]}function ip(r){return r==="image"?"Image input":r==="image_text"?"Image + text input":r==="parametric"?"Parametric input":"Descriptive input"}function al(r){return r==="json"?"JSON":r==="openscad"?"OpenSCAD":r==="cadquery"?"CadQuery":r==="threejs"?"Three.js":r}function PR(r){return Array.from(new Set(r)).sort((i,s)=>Kr(i)-Kr(s)).map(al).join(" + ")}function Tv(r){return r==="parametric"?0:r==="image_text"||r==="image"?1:r==="descriptive"?2:3}function Kr(r){return r==="json"?0:r==="cadquery"?1:r==="openscad"?2:r==="threejs"?3:4}const IR={openai:{color:"#202123",icon:"icons/src/openai.svg"},gemini:{color:"#14B86A",icon:"icons/src/gemini-color.svg"},claude:{color:"#D97757",icon:"icons/src/claude-color.svg"},kimi:{color:"#1783FF",icon:"icons/src/kimi-color.svg",tile:"#111619"},zai:{color:"#8E5CFB",icon:"icons/src/zai.svg"},doubao:{color:"#00A6B8",icon:"icons/src/bytedance-color.svg"},deepseek:{color:"#4D6BFE",icon:"icons/src/deepseek-color.svg"},qwen:{color:"#FF6003",icon:"icons/src/qwen-color.svg"},mimo:{color:"#FF6900",icon:"icons/src/xiaomimimo.svg",tile:"#111619",filter:"invert(1)"}},FR=[{title:"Text-to-3D",accent:"#285c8f",rows:[{model:"GPT-5.5",family:"openai",score:.848},{model:"Gemini 3.1 Pro",family:"gemini",score:.835},{model:"Claude Opus 4.6",family:"claude",score:.831},{model:"Kimi K2.6",family:"kimi",score:.796},{model:"GLM-5.1",family:"zai",score:.782},{model:"Doubao Seed 2.0 Pro",family:"doubao",score:.762},{model:"DeepSeek V4 Pro",family:"deepseek",score:.762},{model:"Qwen3.6-Plus",family:"qwen",score:.748},{model:"MiMo v2.5 Pro",family:"mimo",score:.744},{model:"MiMo v2 Pro",family:"mimo",score:.741}]},{title:"Image-to-3D",accent:"#b46e4c",rows:[{model:"GPT-5.5",family:"openai",score:.675},{model:"Gemini 3.1 Pro",family:"gemini",score:.667},{model:"Claude Opus 4.6",family:"claude",score:.62},{model:"Kimi K2.6",family:"kimi",score:.592},{model:"GLM 5V Turbo",family:"zai",score:.491},{model:"Qwen3.6-Plus",family:"qwen",score:.475},{model:"MiMo v2 Omni",family:"mimo",score:.452},{model:"Doubao Seed 2.0 Pro",family:"doubao",score:.437}]},{title:"Assembly-3D",accent:"#337665",rows:[{model:"Gemini 3.1 Pro",family:"gemini",score:.659},{model:"GPT-5.5",family:"openai",score:.657},{model:"Claude Opus 4.6",family:"claude",score:.594},{model:"Kimi K2.6",family:"kimi",score:.538},{model:"MiMo v2 Omni",family:"mimo",score:.359},{model:"Qwen3.6-Plus",family:"qwen",score:.353},{model:"GLM 5V Turbo",family:"zai",score:.33},{model:"Doubao Seed 2.0 Pro",family:"doubao",score:.316}]}];function zR(){return j.jsxs("div",{className:"main-figures",children:[j.jsx(BR,{}),j.jsx(HR,{})]})}function BR(){return j.jsxs("article",{className:"pipeline-placeholder",children:[j.jsxs("div",{className:"pipeline-copy",children:[j.jsx("span",{children:"Pipeline"}),j.jsx("h3",{children:"Placeholder"})]}),j.jsxs("div",{className:"pipeline-skeleton","aria-hidden":"true",children:[j.jsx("div",{className:"skeleton-node wide"}),j.jsx("div",{className:"skeleton-arrow"}),j.jsx("div",{className:"skeleton-node"}),j.jsx("div",{className:"skeleton-arrow"}),j.jsx("div",{className:"skeleton-node accent"})]})]})}function HR(){return j.jsxs("article",{className:"leaderboard-card",children:[j.jsx("div",{className:"leaderboard-head",children:j.jsxs("div",{children:[j.jsx("span",{children:"Leaderboard"}),j.jsx("h3",{children:"Model Ranking"})]})}),j.jsxs("div",{className:"leaderboard-axis","aria-hidden":"true",children:[j.jsx("span",{children:"0.0"}),j.jsx("span",{children:"0.3"}),j.jsx("span",{children:"0.6"}),j.jsx("span",{children:"0.9"})]}),j.jsx("div",{className:"leaderboard-panels",children:FR.map(r=>j.jsx(GR,{task:r},r.title))})]})}function GR({task:r}){return j.jsxs("section",{className:"leaderboard-panel",style:{"--task-accent":r.accent},children:[j.jsx("div",{className:"leaderboard-task",children:j.jsx("h4",{children:r.title})}),j.jsx("div",{className:"leaderboard-rows",children:r.rows.map((t,i)=>{const s=IR[t.family]||{color:r.accent,icon:"icons/src/openai.svg"},l=`${Math.max(2,t.score/.9*100)}%`;return j.jsxs("div",{className:"leaderboard-row",children:[j.jsxs("div",{className:"model-label",children:[j.jsx("span",{className:"model-rank",children:i+1}),j.jsx("span",{className:"model-mark",style:{"--model-tile":s.tile||"#fffdfa","--icon-filter":s.filter||"none"},children:j.jsx("img",{src:Ii(s.icon),alt:"","aria-hidden":"true"})}),j.jsx("strong",{children:t.model})]}),j.jsx("div",{className:"bar-track",children:j.jsx("span",{className:"bar-fill",style:{"--bar-color":s.color,"--bar-width":l}})}),j.jsx("em",{children:t.score.toFixed(3)})]},`${r.title}-${t.model}`)})})]})}function cu(r){const t=r.metrics||{};let i=r.valid===!1?-200:20;const s=VR(r);return i+=s*35,s||(i-=90),i+=Hr(t.qa_overall??t.qa_overall_accuracy)*120,i+=Hr(t.qa_semantic)*28,i+=Hr(t.qa_parametric)*16,i+=Hr(t.judge_geometry)*3,i+=Hr(t.judge_semantic)*3,i+=Hr(t.judge_aesthetics)*3,typeof t.chamfer_distance=="number"&&t.chamfer_distance>0&&(i+=Math.max(0,18-Math.log10(t.chamfer_distance*1e4+1)*5)),i}function Hr(r){return typeof r=="number"&&Number.isFinite(r)?r:0}function VR(r){return Object.entries(r.metrics||{}).filter(([t,i])=>ap(t,i,r)).length}function kR({items:r}){const[t,i]=Se.useState(""),[s,l]=Se.useState(null),c=r.find(h=>h.id===t)||r[0];return Se.useEffect(()=>{!t&&r[0]&&i(r[0].id)},[r,t]),r.length?j.jsxs("div",{className:"render-showcase",children:[j.jsxs("div",{className:"viewer-shell",children:[j.jsxs("div",{className:"viewer-stage",children:[j.jsx(Ep,{item:c}),j.jsxs("div",{className:"viewer-meta",children:[j.jsxs("span",{children:[c.taskLabel," · ",c.specLabel]}),j.jsx("strong",{children:c.title}),c.inputImage?j.jsx("img",{className:"viewer-input-image",src:Ii(c.inputImage),alt:"Input reference"}):null,j.jsx("p",{children:c.input}),Ex(c)?j.jsx("button",{className:"viewer-full-input",type:"button",onClick:()=>l(c),children:"View full input"}):null,j.jsx("em",{children:c.subtitle})]})]}),j.jsxs("div",{className:"viewer-rail",children:[j.jsxs("div",{className:"viewer-rail-header",children:[j.jsx("span",{children:r.length}),j.jsx("strong",{children:"Cases"})]}),r.map((h,p)=>j.jsxs("button",{className:h.id===c.id?"viewer-case active":"viewer-case",onClick:()=>i(h.id),title:h.input,style:{"--case-accent":Av[p%Av.length]},children:[j.jsx("img",{src:Ii(h.src),alt:h.title}),j.jsxs("em",{className:"case-task",children:[h.taskLabel," · ",h.specLabel]}),j.jsx("span",{children:h.input}),j.jsx("strong",{children:h.subtitle})]},h.id))]})]}),s?j.jsx(Mx,{item:s,onClose:()=>l(null)}):null]}):j.jsx(Ax,{title:"Render Showcase"})}function Mx({item:r,onClose:t}){return j.jsx("div",{className:"input-modal",role:"dialog","aria-modal":"true","aria-labelledby":"input-modal-title",onClick:t,children:j.jsxs("div",{className:"input-modal-panel",onClick:i=>i.stopPropagation(),children:[j.jsxs("div",{className:"input-modal-head",children:[j.jsxs("span",{children:[r.taskLabel," · ",r.specLabel]}),j.jsx("button",{type:"button",onClick:t,children:"Close"})]}),j.jsx("h3",{id:"input-modal-title",children:r.title}),r.inputImage?j.jsx("img",{className:"input-modal-image",src:Ii(r.inputImage),alt:"Input reference"}):null,j.jsx("p",{children:r.input}),j.jsx("em",{children:r.subtitle})]})})}const Av=["#337665","#2f7a86","#4f88a8","#7aa08f"],Rv={text2cad:{body:12573164,edge:3239058,shadow:5927810,rim:14282751},image2cad:{body:11918799,edge:3044708,shadow:5208172,rim:14284010},text_image2cad:{body:12574175,edge:4945280,shadow:5993595,rim:14808566}};function yx(r){return Rv[r||""]||Rv.text2cad}function XR(r){const t=["text2cad","image2cad","text_image2cad"],s=[],l=new Set;for(const c of t)r.filter(p=>p.task===c).slice(0,4).forEach(p=>{s.push(p),l.add(p.id)});for(const c of r){if(s.length>=t.length*4)break;l.has(c.id)||s.push(c)}return s}function WR({items:r}){const t=Se.useRef(null);return Se.useEffect(()=>{const i=t.current;if(!i||!r.length)return;const s=new Zv;s.background=new fe(15398385),s.fog=new du(15398385,9.2,15.6);const l=new fi(30,1,.01,100);l.position.set(0,3.35,6.55),l.lookAt(0,0,0);const c=new _x({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(15398385,1),c.outputColorSpace=Gn,c.toneMapping=fu,c.toneMappingExposure=1,c.shadowMap.enabled=!0,c.shadowMap.type=op,i.appendChild(c.domElement),s.add(new ox(16318459,11388349,1.9));const h=new Wr(16777215,2.55);h.position.set(4.7,6.6,5.4),h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.near=.1,h.shadow.camera.far=16,s.add(h);const p=new Wr(11922143,.82);p.position.set(-5,3,-3),s.add(p);const m=new Wr(12049663,.68);m.position.set(-2.6,4.6,4.8),s.add(m);const d=new fs;d.position.set(0,.16,-.05),s.add(d);const _=new mi(new Qr(7.4,4.4),new ix({color:5074535,opacity:.1}));_.rotation.x=-Math.PI/2,_.position.y=-.88,_.receiveShadow=!0,d.add(_);const x=r.slice(0,12),g=new xx,y=[_.geometry],T=[_.material],w=[],M=[];let S=!1;x.forEach((I,b)=>{const O=b%4,X=Math.floor(b/4),B=[-.9,.02,.94][X]??0,K=[.22,.04,-.1][X]??0,ct=new fs;ct.position.set((O-1.5)*1.32,K,B),ct.rotation.y=(O-1.5)*.05+(X-1)*.035,d.add(ct),w.push(ct),M.push(K),g.load(Ii(I.mesh),ut=>{if(S){ut.dispose();return}ut.computeVertexNormals(),ut.computeBoundingBox(),ut.center();const W=ut.boundingBox,L=new $;W?.getSize(L);const H=Math.max(L.x,L.y,L.z)||1;ut.scale(.93/H,.93/H,.93/H),y.push(ut);const et=yx(I.task),mt=new sx({color:et.body,roughness:.58,metalness:.02,clearcoat:.1,clearcoatRoughness:.64,emissive:et.rim,emissiveIntensity:.006});T.push(mt);const Mt=new fs;Mt.rotation.x=-Math.PI/2,Mt.rotation.z=(b%2?-1:1)*.12;const F=new mi(ut,mt);F.castShadow=!0,F.receiveShadow=!0,Mt.add(F);const J=new nx(ut,30),St=new xp({color:et.edge,transparent:!0,opacity:.26});y.push(J),T.push(St),Mt.add(new $v(J,St)),ct.add(Mt)})});const C=()=>{const{clientWidth:I,clientHeight:b}=i,O=Math.max(320,I),X=Math.max(360,b),B=O<560?.68:O<760?.88:1.08;d.scale.setScalar(B),l.position.set(0,O<560?3.45:3.35,O<560?7.35:O<760?6.85:6.55),l.lookAt(0,0,0),c.setSize(O,X,!1),l.aspect=O/X,l.updateProjectionMatrix()},N=new ResizeObserver(C);N.observe(i),C();let P=0;const z=new vE,U=()=>{const I=z.getElapsedTime();P=requestAnimationFrame(U),d.rotation.y=Math.sin(I*.3)*.06,w.forEach((b,O)=>{b.position.y=M[O]+Math.sin(I*.72+O*.57)*.028}),c.render(s,l)};return U(),()=>{S=!0,cancelAnimationFrame(P),N.disconnect(),y.forEach(I=>I.dispose()),T.forEach(I=>I.dispose()),c.dispose(),c.domElement.remove()}},[r]),j.jsx("div",{className:"hero-visual hero-cad-scene",children:j.jsx("div",{className:"hero-cad-canvas",ref:t})})}function jR({run:r,title:t,subtitle:i}){return r?.assets.gt_mesh?j.jsxs("figure",{className:"render-card result-viewer-card",children:[j.jsx("span",{children:"Ground Truth"}),j.jsx("div",{className:"result-viewer",children:j.jsx(Ep,{item:{id:`${r.case_id}-${r.spec}-ground-truth`,task:r.task,title:t,subtitle:i,src:r.assets.gt_render||"",mesh:r.assets.gt_mesh},variant:"result"})})]}):j.jsx(Tx,{title:"Ground Truth",src:r?.assets.gt_render})}function qR({run:r,title:t,subtitle:i}){return r?.assets.mesh?j.jsxs("figure",{className:"render-card result-viewer-card",children:[j.jsx("span",{children:"Prediction"}),j.jsx("div",{className:"result-viewer",children:j.jsx(Ep,{item:{id:r.id,task:r.task,title:t,subtitle:i,src:r.assets.pred_render||"",mesh:r.assets.mesh},variant:"result"})})]}):j.jsx(Tx,{title:"Prediction",src:r?.assets.pred_render})}function Ep({item:r,variant:t="showcase"}){const i=Se.useRef(null);return Se.useEffect(()=>{const s=i.current;if(!s||!r.mesh)return;const l=new Zv;l.background=new fe(15989495),l.fog=new du(15989495,6.8,12.2);const c=yx(r.task),h=new fi(38,1,.01,100);h.position.set(3.6,2.35,t==="result"?4.35:4.7);const p=new _x({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setClearColor(15989495,1),p.outputColorSpace=Gn,p.toneMapping=fu,p.toneMappingExposure=1,p.shadowMap.enabled=!0,p.shadowMap.type=op,s.appendChild(p.domElement);const m=new gR(h,p.domElement);m.enableDamping=!0,m.autoRotate=!0,m.autoRotateSpeed=1.2,m.enablePan=!1,m.minDistance=2.2,m.maxDistance=7.5,l.add(new ox(16449532,12176066,1.95));const d=new Wr(16777215,2.65);d.position.set(3.8,4.8,3.5),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),l.add(d);const _=new Wr(12053215,.86);_.position.set(-3.2,2.2,-2.6),l.add(_);const x=new Wr(13035007,.62);x.position.set(-2.4,3.4,3.4),l.add(x);const g=new mi(new Qr(6,4),new ix({color:c.shadow,opacity:.09}));g.rotation.x=-Math.PI/2,g.position.y=-1.06,g.receiveShadow=!0,l.add(g);const y=new fs;y.rotation.x=-Math.PI/2,l.add(y);let T=!1,w=0,M=null,S=null,C=null,N=null;new xx().load(Ii(r.mesh),b=>{if(T){b.dispose();return}b.computeVertexNormals(),b.computeBoundingBox(),b.center();const O=b.boundingBox,X=new $;O?.getSize(X);const B=Math.max(X.x,X.y,X.z)||1,K=t==="result"?2.32:2.08;b.scale(K/B,K/B,K/B),b.computeBoundingBox(),M=b;const ct=new sx({color:c.body,roughness:.58,metalness:.02,clearcoat:.1,clearcoatRoughness:.68,emissive:c.rim,emissiveIntensity:.006});S=ct;const ut=new mi(b,ct);ut.castShadow=!0,ut.receiveShadow=!0,y.add(ut),C=new nx(b,28),N=new xp({color:c.edge,transparent:!0,opacity:t==="result"?.24:.28}),y.add(new $v(C,N))});const z=()=>{const{clientWidth:b,clientHeight:O}=s,X=Math.max(320,b),B=Math.max(360,O);p.setSize(X,B,!1),h.aspect=X/B,h.updateProjectionMatrix()},U=new ResizeObserver(z);U.observe(s),z();const I=()=>{w=requestAnimationFrame(I),m.update(),p.render(l,h)};return I(),()=>{T=!0,cancelAnimationFrame(w),U.disconnect(),m.dispose(),M?.dispose(),S?.dispose(),C?.dispose(),N?.dispose(),g.geometry.dispose(),g.material.dispose(),p.dispose(),p.domElement.remove()}},[r.id,r.mesh,t]),j.jsx("div",{className:"cad-viewer",ref:i})}function ud({label:r,value:t,options:i,onChange:s}){return j.jsxs("label",{className:"select-label",children:[j.jsx("span",{children:r}),j.jsx("select",{value:t,onChange:l=>s(l.target.value),children:i.map(([l,c])=>j.jsx("option",{value:l,children:c},l))})]})}function YR({cases:r,activeCaseId:t,onSelect:i}){const s=r.filter(l=>l.thumbnail);return s.length?j.jsx("div",{className:"case-image-picker","aria-label":"Image case picker",children:s.map(l=>j.jsxs("button",{type:"button",className:l.id===t?"case-image-tile active":"case-image-tile",onClick:()=>i(l.id),title:l.title,children:[j.jsx("img",{src:Ii(l.thumbnail),alt:"","aria-hidden":"true"}),j.jsx("span",{children:l.title})]},l.id))}):null}function Ex(r){const t=r.input||"";return!!(r.inputImage||t.length>180||t.includes(`
`))}const ZR={"⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9"};function bx(r){return r.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,t=>ZR[t]||t)}function KR(r){const t=r.match(/^(.+?)([⁰¹²³⁴⁵⁶⁷⁸⁹,\*]+)$/);return t?j.jsxs(j.Fragment,{children:[t[1],j.jsx("sup",{children:bx(t[2])})]}):r}function QR(r){const t=r.match(/^([⁰¹²³⁴⁵⁶⁷⁸⁹]+)(.+)$/);return t?j.jsxs(j.Fragment,{children:[j.jsx("sup",{children:bx(t[1])}),t[2]]}):r}function Tx({title:r,src:t}){return j.jsxs("figure",{className:"render-card",children:[j.jsx("span",{children:r}),t?j.jsx("img",{src:Ii(t),alt:r}):j.jsxs("div",{className:"render-missing",children:[j.jsx(jM,{}),"No render"]})]})}function JR({run:r}){const t=t3(r);return t.length?j.jsx("div",{className:"metrics",children:t.length?t.map(i=>j.jsxs("div",{className:"metric",children:[j.jsx("span",{children:i.label}),j.jsx("strong",{children:i.value})]},i.key)):null}):null}const Cv=["chamfer_distance","hausdorff_distance","f_score_005","f_score_001","normal_consistency","iou_csg","iou_voxel","pred_open_edge_ratio","qa_overall","qa_overall_accuracy","qa_semantic","qa_parametric","judge_geometry","judge_semantic","judge_aesthetics"],$R={chamfer_distance:"Chamfer",hausdorff_distance:"Hausdorff",f_score_005:"F@0.05",f_score_001:"F@0.01",normal_consistency:"Normal",iou_csg:"IoU CSG",iou_voxel:"IoU voxel",pred_open_edge_ratio:"Open edge",qa_overall:"Overall QA",qa_overall_accuracy:"Overall QA",qa_semantic:"Semantic QA",qa_parametric:"Parametric QA",judge_geometry:"Geometry score",judge_semantic:"Semantic score",judge_aesthetics:"Aesthetic score",acc_cmd:"Command acc.",acc_param:"Parameter acc."};function t3(r){if(!r)return[];const t=r.metrics||{},s=[...Cv.filter(l=>ap(l,t[l],r)),...Object.keys(t).filter(l=>!Cv.includes(l)&&ap(l,t[l],r)).sort()].map(l=>({key:l,label:$R[l]||l.replace(/_/g," "),value:n3(l,t[l])}));return s.length&&r.valid!==null&&r.valid!==void 0&&s.unshift({key:"valid",label:"Executable",value:r.valid?"yes":"no"}),s}function ap(r,t,i){return!(!e3(t)||r==="qa_parametric"&&i.spec!=="parametric"||r==="qa_parametric"&&typeof t=="number"&&t<=0)}function e3(r){return r!=null&&r!==""&&!(typeof r=="number"&&Number.isNaN(r))}function n3(r,t){return typeof t!="number"||r.startsWith("judge_")&&Number.isInteger(t)?String(t):r==="pred_open_edge_ratio"?t.toFixed(3):r.includes("chamfer")||r.includes("hausdorff")?t===0?"0":t<.01?t.toFixed(4):t.toFixed(3):t<1?t.toFixed(3):t.toFixed(2)}function Ax({title:r,text:t}){return j.jsxs("div",{className:"placeholder",children:[j.jsx(qM,{size:32}),j.jsx("h3",{children:r}),t?j.jsx("p",{children:t}):null]})}zM.createRoot(document.getElementById("root")).render(j.jsx(wR,{}));
