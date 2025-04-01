(function(J,Ie,De,he,me,Ue){"use strict";var le={exports:{}},f={},Ee;function Ye(){if(Ee)return f;Ee=1;var T=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),D=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),G=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,re={};function k(t,r,c){this.props=t,this.context=r,this.refs=re,this.updater=c||Q}k.prototype.isReactComponent={},k.prototype.setState=function(t,r){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,r,"setState")},k.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function U(){}U.prototype=k.prototype;function F(t,r,c){this.props=t,this.context=r,this.refs=re,this.updater=c||Q}var C=F.prototype=new U;C.constructor=F,K(C,k.prototype),C.isPureReactComponent=!0;var oe=Array.isArray,m={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function V(t,r,c,a,v,E){return c=E.ref,{$$typeof:T,type:t,key:r,ref:c!==void 0?c:null,props:E}}function P(t,r){return V(t.type,r,void 0,void 0,void 0,t.props)}function j(t){return typeof t=="object"&&t!==null&&t.$$typeof===T}function _e(t){var r={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(c){return r[c]})}var g=/\/+/g;function Z(t,r){return typeof t=="object"&&t!==null&&t.key!=null?_e(""+t.key):r.toString(36)}function L(){}function I(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(L,L):(t.status="pending",t.then(function(r){t.status==="pending"&&(t.status="fulfilled",t.value=r)},function(r){t.status==="pending"&&(t.status="rejected",t.reason=r)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function b(t,r,c,a,v){var E=typeof t;(E==="undefined"||E==="boolean")&&(t=null);var p=!1;if(t===null)p=!0;else switch(E){case"bigint":case"string":case"number":p=!0;break;case"object":switch(t.$$typeof){case T:case i:p=!0;break;case $:return p=t._init,b(p(t._payload),r,c,a,v)}}if(p)return v=v(t),p=a===""?"."+Z(t,0):a,oe(v)?(c="",p!=null&&(c=p.replace(g,"$&/")+"/"),b(v,r,c,"",function(H){return H})):v!=null&&(j(v)&&(v=P(v,c+(v.key==null||t&&t.key===v.key?"":(""+v.key).replace(g,"$&/")+"/")+p)),r.push(v)),1;p=0;var O=a===""?".":a+":";if(oe(t))for(var w=0;w<t.length;w++)a=t[w],E=O+Z(a,w),p+=b(a,r,c,E,v);else if(w=ne(t),typeof w=="function")for(t=w.call(t),w=0;!(a=t.next()).done;)a=a.value,E=O+Z(a,w++),p+=b(a,r,c,E,v);else if(E==="object"){if(typeof t.then=="function")return b(I(t),r,c,a,v);throw r=String(t),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}return p}function N(t,r,c){if(t==null)return t;var a=[],v=0;return b(t,a,"","",function(E){return r.call(c,E,v++)}),a}function x(t){if(t._status===-1){var r=t._result;r=r(),r.then(function(c){(t._status===0||t._status===-1)&&(t._status=1,t._result=c)},function(c){(t._status===0||t._status===-1)&&(t._status=2,t._result=c)}),t._status===-1&&(t._status=0,t._result=r)}if(t._status===1)return t._result.default;throw t._result}var Y=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ue(){}return f.Children={map:N,forEach:function(t,r,c){N(t,function(){r.apply(this,arguments)},c)},count:function(t){var r=0;return N(t,function(){r++}),r},toArray:function(t){return N(t,function(r){return r})||[]},only:function(t){if(!j(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},f.Component=k,f.Fragment=A,f.Profiler=z,f.PureComponent=F,f.StrictMode=de,f.Suspense=te,f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,f.__COMPILER_RUNTIME={__proto__:null,c:function(t){return m.H.useMemoCache(t)}},f.cache=function(t){return function(){return t.apply(null,arguments)}},f.cloneElement=function(t,r,c){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var a=K({},t.props),v=t.key,E=void 0;if(r!=null)for(p in r.ref!==void 0&&(E=void 0),r.key!==void 0&&(v=""+r.key),r)!X.call(r,p)||p==="key"||p==="__self"||p==="__source"||p==="ref"&&r.ref===void 0||(a[p]=r[p]);var p=arguments.length-2;if(p===1)a.children=c;else if(1<p){for(var O=Array(p),w=0;w<p;w++)O[w]=arguments[w+2];a.children=O}return V(t.type,v,void 0,void 0,E,a)},f.createContext=function(t){return t={$$typeof:ee,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:S,_context:t},t},f.createElement=function(t,r,c){var a,v={},E=null;if(r!=null)for(a in r.key!==void 0&&(E=""+r.key),r)X.call(r,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(v[a]=r[a]);var p=arguments.length-2;if(p===1)v.children=c;else if(1<p){for(var O=Array(p),w=0;w<p;w++)O[w]=arguments[w+2];v.children=O}if(t&&t.defaultProps)for(a in p=t.defaultProps,p)v[a]===void 0&&(v[a]=p[a]);return V(t,E,void 0,void 0,null,v)},f.createRef=function(){return{current:null}},f.forwardRef=function(t){return{$$typeof:B,render:t}},f.isValidElement=j,f.lazy=function(t){return{$$typeof:$,_payload:{_status:-1,_result:t},_init:x}},f.memo=function(t,r){return{$$typeof:D,type:t,compare:r===void 0?null:r}},f.startTransition=function(t){var r=m.T,c={};m.T=c;try{var a=t(),v=m.S;v!==null&&v(c,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(ue,Y)}catch(E){Y(E)}finally{m.T=r}},f.unstable_useCacheRefresh=function(){return m.H.useCacheRefresh()},f.use=function(t){return m.H.use(t)},f.useActionState=function(t,r,c){return m.H.useActionState(t,r,c)},f.useCallback=function(t,r){return m.H.useCallback(t,r)},f.useContext=function(t){return m.H.useContext(t)},f.useDebugValue=function(){},f.useDeferredValue=function(t,r){return m.H.useDeferredValue(t,r)},f.useEffect=function(t,r,c){var a=m.H;if(typeof c=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return a.useEffect(t,r)},f.useId=function(){return m.H.useId()},f.useImperativeHandle=function(t,r,c){return m.H.useImperativeHandle(t,r,c)},f.useInsertionEffect=function(t,r){return m.H.useInsertionEffect(t,r)},f.useLayoutEffect=function(t,r){return m.H.useLayoutEffect(t,r)},f.useMemo=function(t,r){return m.H.useMemo(t,r)},f.useOptimistic=function(t,r){return m.H.useOptimistic(t,r)},f.useReducer=function(t,r,c){return m.H.useReducer(t,r,c)},f.useRef=function(t){return m.H.useRef(t)},f.useState=function(t){return m.H.useState(t)},f.useSyncExternalStore=function(t,r,c){return m.H.useSyncExternalStore(t,r,c)},f.useTransition=function(){return m.H.useTransition()},f.version="19.1.0",f}var W={exports:{}};W.exports;var ge;function He(){return ge||(ge=1,function(T,i){process.env.NODE_ENV!=="production"&&function(){function A(e,n){Object.defineProperty(S.prototype,e,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",n[0],n[1])}})}function de(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}function z(e,n){e=(e=e.constructor)&&(e.displayName||e.name)||"ReactClass";var o=e+"."+n;Te[o]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",n,e),Te[o]=!0)}function S(e,n,o){this.props=e,this.context=n,this.refs=ye,this.updater=o||be}function ee(){}function B(e,n,o){this.props=e,this.context=n,this.refs=ye,this.updater=o||be}function te(e){return""+e}function D(e){try{te(e);var n=!1}catch{n=!0}if(n){n=console;var o=n.error,u=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(n,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",u),te(e)}}function $(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Qe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case t:return"Fragment";case c:return"Profiler";case r:return"StrictMode";case p:return"Suspense";case O:return"SuspenseList";case Ge:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case ue:return"Portal";case v:return(e.displayName||"Context")+".Provider";case a:return(e._context.displayName||"Context")+".Consumer";case E:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case w:return n=e.displayName||null,n!==null?n:$(e.type)||"Memo";case H:n=e._payload,e=e._init;try{return $(e(n))}catch{}}return null}function G(e){if(e===t)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===H)return"<...>";try{var n=$(e);return n?"<"+n+">":"<...>"}catch{return"<...>"}}function ne(){var e=_.A;return e===null?null:e.getOwner()}function Q(){return Error("react-stack-top-frame")}function K(e){if(ie.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return e.key!==void 0}function re(e,n){function o(){Ae||(Ae=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",n))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function k(){var e=$(this.type);return Pe[e]||(Pe[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function U(e,n,o,u,s,y,l,h){return o=y.ref,e={$$typeof:Y,type:e,key:n,props:y,_owner:s},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:k}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:l}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:h}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function F(e,n){return n=U(e.type,n,void 0,void 0,e._owner,e.props,e._debugStack,e._debugTask),e._store&&(n._store.validated=e._store.validated),n}function C(e){return typeof e=="object"&&e!==null&&e.$$typeof===Y}function oe(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return n[o]})}function m(e,n){return typeof e=="object"&&e!==null&&e.key!=null?(D(e.key),oe(""+e.key)):n.toString(36)}function X(){}function V(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(X,X):(e.status="pending",e.then(function(n){e.status==="pending"&&(e.status="fulfilled",e.value=n)},function(n){e.status==="pending"&&(e.status="rejected",e.reason=n)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function P(e,n,o,u,s){var y=typeof e;(y==="undefined"||y==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(y){case"bigint":case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Y:case ue:l=!0;break;case H:return l=e._init,P(l(e._payload),n,o,u,s)}}if(l){l=e,s=s(l);var h=u===""?"."+m(l,0):u;return Oe(s)?(o="",h!=null&&(o=h.replace(Ne,"$&/")+"/"),P(s,n,o,"",function(M){return M})):s!=null&&(C(s)&&(s.key!=null&&(l&&l.key===s.key||D(s.key)),o=F(s,o+(s.key==null||l&&l.key===s.key?"":(""+s.key).replace(Ne,"$&/")+"/")+h),u!==""&&l!=null&&C(l)&&l.key==null&&l._store&&!l._store.validated&&(o._store.validated=2),s=o),n.push(s)),1}if(l=0,h=u===""?".":u+":",Oe(e))for(var d=0;d<e.length;d++)u=e[d],y=h+m(u,d),l+=P(u,n,o,y,s);else if(d=de(e),typeof d=="function")for(d===e.entries&&(je||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),je=!0),e=d.call(e),d=0;!(u=e.next()).done;)u=u.value,y=h+m(u,d++),l+=P(u,n,o,y,s);else if(y==="object"){if(typeof e.then=="function")return P(V(e),n,o,u,s);throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}return l}function j(e,n,o){if(e==null)return e;var u=[],s=0;return P(e,u,"","",function(y){return n.call(o,y,s++)}),u}function _e(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return n=e._result,n===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,n),"default"in n||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,n),n.default;throw e._result}function g(){var e=_.H;return e===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}function Z(){}function L(e){if(ae===null)try{var n=("require"+Math.random()).slice(0,7);ae=(T&&T[n]).call(T,"timers").setImmediate}catch{ae=function(u){$e===!1&&($e=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var s=new MessageChannel;s.port1.onmessage=u,s.port2.postMessage(void 0)}}return ae(e)}function I(e){return 1<e.length&&typeof AggregateError=="function"?new AggregateError(e):e[0]}function b(e,n){n!==ce-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),ce=n}function N(e,n,o){var u=_.actQueue;if(u!==null)if(u.length!==0)try{x(u),L(function(){return N(e,n,o)});return}catch(s){_.thrownErrors.push(s)}else _.actQueue=null;0<_.thrownErrors.length?(u=I(_.thrownErrors),_.thrownErrors.length=0,o(u)):n(e)}function x(e){if(!ve){ve=!0;var n=0;try{for(;n<e.length;n++){var o=e[n];do{_.didUsePromise=!1;var u=o(!1);if(u!==null){if(_.didUsePromise){e[n]=o,e.splice(0,n);return}o=u}else break}while(1)}e.length=0}catch(s){e.splice(0,n+1),_.thrownErrors.push(s)}finally{ve=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var Y=Symbol.for("react.transitional.element"),ue=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.consumer"),v=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),Ge=Symbol.for("react.activity"),Re=Symbol.iterator,Te={},be={isMounted:function(){return!1},enqueueForceUpdate:function(e){z(e,"forceUpdate")},enqueueReplaceState:function(e){z(e,"replaceState")},enqueueSetState:function(e){z(e,"setState")}},Ce=Object.assign,ye={};Object.freeze(ye),S.prototype.isReactComponent={},S.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},S.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var R={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},se;for(se in R)R.hasOwnProperty(se)&&A(se,R[se]);ee.prototype=S.prototype,R=B.prototype=new ee,R.constructor=B,Ce(R,S.prototype),R.isPureReactComponent=!0;var Oe=Array.isArray,Qe=Symbol.for("react.client.reference"),_={H:null,A:null,T:null,S:null,V:null,actQueue:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},ie=Object.prototype.hasOwnProperty,Se=console.createTask?console.createTask:function(){return null};R={"react-stack-bottom-frame":function(e){return e()}};var Ae,ke,Pe={},Ke=R["react-stack-bottom-frame"].bind(R,Q)(),Fe=Se(G(Q)),je=!1,Ne=/\/+/g,Me=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$e=!1,ae=null,ce=0,fe=!1,ve=!1,Le=typeof queueMicrotask=="function"?function(e){queueMicrotask(function(){return queueMicrotask(e)})}:L;R=Object.freeze({__proto__:null,c:function(e){return g().useMemoCache(e)}}),i.Children={map:j,forEach:function(e,n,o){j(e,function(){n.apply(this,arguments)},o)},count:function(e){var n=0;return j(e,function(){n++}),n},toArray:function(e){return j(e,function(n){return n})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i.Component=S,i.Fragment=t,i.Profiler=c,i.PureComponent=B,i.StrictMode=r,i.Suspense=p,i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,i.__COMPILER_RUNTIME=R,i.act=function(e){var n=_.actQueue,o=ce;ce++;var u=_.actQueue=n!==null?n:[],s=!1;try{var y=e()}catch(d){_.thrownErrors.push(d)}if(0<_.thrownErrors.length)throw b(n,o),e=I(_.thrownErrors),_.thrownErrors.length=0,e;if(y!==null&&typeof y=="object"&&typeof y.then=="function"){var l=y;return Le(function(){s||fe||(fe=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(d,M){s=!0,l.then(function(q){if(b(n,o),o===0){try{x(u),L(function(){return N(q,d,M)})}catch(Ve){_.thrownErrors.push(Ve)}if(0<_.thrownErrors.length){var Xe=I(_.thrownErrors);_.thrownErrors.length=0,M(Xe)}}else d(q)},function(q){b(n,o),0<_.thrownErrors.length&&(q=I(_.thrownErrors),_.thrownErrors.length=0),M(q)})}}}var h=y;if(b(n,o),o===0&&(x(u),u.length!==0&&Le(function(){s||fe||(fe=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),_.actQueue=null),0<_.thrownErrors.length)throw e=I(_.thrownErrors),_.thrownErrors.length=0,e;return{then:function(d,M){s=!0,o===0?(_.actQueue=u,L(function(){return N(h,d,M)})):d(h)}}},i.cache=function(e){return function(){return e.apply(null,arguments)}},i.captureOwnerStack=function(){var e=_.getCurrentStack;return e===null?null:e()},i.cloneElement=function(e,n,o){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var u=Ce({},e.props),s=e.key,y=e._owner;if(n!=null){var l;e:{if(ie.call(n,"ref")&&(l=Object.getOwnPropertyDescriptor(n,"ref").get)&&l.isReactWarning){l=!1;break e}l=n.ref!==void 0}l&&(y=ne()),K(n)&&(D(n.key),s=""+n.key);for(h in n)!ie.call(n,h)||h==="key"||h==="__self"||h==="__source"||h==="ref"&&n.ref===void 0||(u[h]=n[h])}var h=arguments.length-2;if(h===1)u.children=o;else if(1<h){l=Array(h);for(var d=0;d<h;d++)l[d]=arguments[d+2];u.children=l}for(u=U(e.type,s,void 0,void 0,y,u,e._debugStack,e._debugTask),s=2;s<arguments.length;s++)y=arguments[s],C(y)&&y._store&&(y._store.validated=1);return u},i.createContext=function(e){return e={$$typeof:v,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:a,_context:e},e._currentRenderer=null,e._currentRenderer2=null,e},i.createElement=function(e,n,o){for(var u=2;u<arguments.length;u++){var s=arguments[u];C(s)&&s._store&&(s._store.validated=1)}if(u={},s=null,n!=null)for(d in ke||!("__self"in n)||"key"in n||(ke=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),K(n)&&(D(n.key),s=""+n.key),n)ie.call(n,d)&&d!=="key"&&d!=="__self"&&d!=="__source"&&(u[d]=n[d]);var y=arguments.length-2;if(y===1)u.children=o;else if(1<y){for(var l=Array(y),h=0;h<y;h++)l[h]=arguments[h+2];Object.freeze&&Object.freeze(l),u.children=l}if(e&&e.defaultProps)for(d in y=e.defaultProps,y)u[d]===void 0&&(u[d]=y[d]);s&&re(u,typeof e=="function"?e.displayName||e.name||"Unknown":e);var d=1e4>_.recentlyCreatedOwnerStacks++;return U(e,s,void 0,void 0,ne(),u,d?Error("react-stack-top-frame"):Ke,d?Se(G(e)):Fe)},i.createRef=function(){var e={current:null};return Object.seal(e),e},i.forwardRef=function(e){e!=null&&e.$$typeof===w?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof e!="function"?console.error("forwardRef requires a render function but was given %s.",e===null?"null":typeof e):e.length!==0&&e.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",e.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),e!=null&&e.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var n={$$typeof:E,render:e},o;return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return o},set:function(u){o=u,e.name||e.displayName||(Object.defineProperty(e,"name",{value:u}),e.displayName=u)}}),n},i.isValidElement=C,i.lazy=function(e){return{$$typeof:H,_payload:{_status:-1,_result:e},_init:_e}},i.memo=function(e,n){e==null&&console.error("memo: The first argument must be a component. Instead received: %s",e===null?"null":typeof e),n={$$typeof:w,type:e,compare:n===void 0?null:n};var o;return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return o},set:function(u){o=u,e.name||e.displayName||(Object.defineProperty(e,"name",{value:u}),e.displayName=u)}}),n},i.startTransition=function(e){var n=_.T,o={};_.T=o,o._updatedFibers=new Set;try{var u=e(),s=_.S;s!==null&&s(o,u),typeof u=="object"&&u!==null&&typeof u.then=="function"&&u.then(Z,Me)}catch(y){Me(y)}finally{n===null&&o._updatedFibers&&(e=o._updatedFibers.size,o._updatedFibers.clear(),10<e&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),_.T=n}},i.unstable_useCacheRefresh=function(){return g().useCacheRefresh()},i.use=function(e){return g().use(e)},i.useActionState=function(e,n,o){return g().useActionState(e,n,o)},i.useCallback=function(e,n){return g().useCallback(e,n)},i.useContext=function(e){var n=g();return e.$$typeof===a&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),n.useContext(e)},i.useDebugValue=function(e,n){return g().useDebugValue(e,n)},i.useDeferredValue=function(e,n){return g().useDeferredValue(e,n)},i.useEffect=function(e,n,o){e==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");var u=g();if(typeof o=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return u.useEffect(e,n)},i.useId=function(){return g().useId()},i.useImperativeHandle=function(e,n,o){return g().useImperativeHandle(e,n,o)},i.useInsertionEffect=function(e,n){return e==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),g().useInsertionEffect(e,n)},i.useLayoutEffect=function(e,n){return e==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),g().useLayoutEffect(e,n)},i.useMemo=function(e,n){return g().useMemo(e,n)},i.useOptimistic=function(e,n){return g().useOptimistic(e,n)},i.useReducer=function(e,n,o){return g().useReducer(e,n,o)},i.useRef=function(e){return g().useRef(e)},i.useState=function(e){return g().useState(e)},i.useSyncExternalStore=function(e,n,o){return g().useSyncExternalStore(e,n,o)},i.useTransition=function(){return g().useTransition()},i.version="19.1.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()}(W,W.exports)),W.exports}process.env.NODE_ENV==="production"?le.exports=Ye():le.exports=He();var qe=le.exports;const We=function(){const[T,i]=qe.useState(he.storage.ignoreNitroColors??!0);return React.createElement(me.View,{style:{padding:10}},React.createElement(me.Text,{style:{fontSize:16,marginBottom:10}},"Disable Nitro Profile Colors"),React.createElement(Ue.Switch,{value:T,onValueChange:function(A){i(A),he.storage.ignoreNitroColors=A}}))};let pe;const we=De.findByProps("default","UserProfileBadgeWrapper"),ze=function(){if(!we){console.error("[Ignore Nitro Colors] Failed to find UserProfile.");return}pe=Ie.after("default",we,function(T,i){let[A]=T;return A?.user&&i?.props?.style&&(i.props.style.color="#FFFFFF"),i}),console.log("[Ignore Nitro Colors] Plugin successfully loaded!")},Be=function(){pe&&pe(),console.log("[Ignore Nitro Colors] Plugin unloaded.")};return J.onLoad=ze,J.onUnload=Be,J.settings=We,J})({},vendetta.patcher,vendetta.metro,vendetta.plugin,vendetta.metro.common,vendetta.ui.components);
