import{r as S,i as g,ac as h,af as y,ad as C,g as j}from"./DopW-7J7.js";function m(t){return y()?(C(t),!0):!1}function l(t){return typeof t=="function"?t():j(t)}const p=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const d=()=>{};function w(t,o){function n(...e){return new Promise((i,r)=>{Promise.resolve(t(()=>o.apply(this,e),{fn:o,thisArg:this,args:e})).then(i).catch(r)})}return n}function T(t,o={}){let n,e,i=d;const r=s=>{clearTimeout(s),i(),i=d};return s=>{const f=l(t),a=l(o.maxWait);return n&&r(n),f<=0||a!==void 0&&a<=0?(e&&(r(e),e=null),Promise.resolve(s())):new Promise((u,b)=>{i=o.rejectOnCancel?b:u,a&&!e&&(e=setTimeout(()=>{n&&r(n),e=null,u(s())},a)),n=setTimeout(()=>{e&&r(e),e=null,u(s())},f)})}}function I(t,o=200,n={}){return w(T(o,n),t)}function P(t,o=1e3,n={}){const{immediate:e=!0,immediateCallback:i=!1}=n;let r=null;const c=S(!1);function s(){r&&(clearInterval(r),r=null)}function f(){c.value=!1,s()}function a(){const u=l(o);u<=0||(c.value=!0,i&&t(),s(),c.value&&(r=setInterval(t,u)))}if(e&&p&&a(),g(o)||typeof o=="function"){const u=h(o,()=>{c.value&&p&&a()});m(u)}return m(f),{isActive:c,pause:f,resume:a}}function W(){return{encodeBase64:n=>{const e=JSON.stringify(n);return btoa(encodeURIComponent(e))},decodeBase64:n=>{const e=decodeURIComponent(atob(n));return JSON.parse(e)}}}export{P as a,I as b,l as c,m as t,W as u};
