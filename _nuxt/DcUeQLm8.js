import{t as S,c as P}from"./sK23vPg7.js";import{R as j,a9 as b,r as O,aa as B,E as x,ab as F,B as z,ac as $,ad as M,ae as H,g as U,C as L,af as N,ag as V,ah as I,ai as K,aj as Q,f as k,s as _,ak as G,al as W}from"./DopW-7J7.js";import{h as Y}from"./Dq3ANapq.js";const J=t=>t==="defer"||t===!1;function X(...t){var d;const r=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(r);let[s,c,a={}]=t;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof c!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=j(),i=c,D=()=>b.value,w=()=>e.isHydrating?e.payload.data[s]:e.static.data[s];a.server=a.server??!0,a.default=a.default??D,a.getCachedData=a.getCachedData??w,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??b.deep,a.dedupe=a.dedupe??"cancel";const h=a.getCachedData(s,e),y=h!=null;if(!e._asyncData[s]||!a.immediate){(d=e.payload._errors)[s]??(d[s]=b.errorValue);const u=a.deep?O:B;e._asyncData[s]={data:u(y?h:a.default()),pending:O(!y),error:x(e.payload._errors,s),status:O("idle"),_default:a.default}}const n={...e._asyncData[s]};delete n._default,n.refresh=n.execute=(u={})=>{if(e._asyncDataPromises[s]){if(J(u.dedupe??a.dedupe))return e._asyncDataPromises[s];e._asyncDataPromises[s].cancelled=!0}if(u._initial||e.isHydrating&&u._initial!==!1){const l=u._initial?h:a.getCachedData(s,e);if(l!=null)return Promise.resolve(l)}n.pending.value=!0,n.status.value="pending";const m=new Promise((l,o)=>{try{l(i(e))}catch(C){o(C)}}).then(async l=>{if(m.cancelled)return e._asyncDataPromises[s];let o=l;a.transform&&(o=await a.transform(l)),a.pick&&(o=A(o,a.pick)),e.payload.data[s]=o,n.data.value=o,n.error.value=b.errorValue,n.status.value="success"}).catch(l=>{if(m.cancelled)return e._asyncDataPromises[s];n.error.value=H(l),n.data.value=U(a.default()),n.status.value="error"}).finally(()=>{m.cancelled||(n.pending.value=!1,delete e._asyncDataPromises[s])});return e._asyncDataPromises[s]=m,e._asyncDataPromises[s]},n.clear=()=>Z(e,s);const v=()=>n.refresh({_initial:!0}),f=a.server!==!1&&e.payload.serverRendered;{const u=L();if(u&&f&&a.immediate&&!u.sp&&(u.sp=[]),u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const o=u._nuxtOnBeforeMountCbs;F(()=>{o.forEach(C=>{C()}),o.splice(0,o.length)}),z(()=>o.splice(0,o.length))}f&&e.isHydrating&&(n.error.value||h!=null)?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):u&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?u._nuxtOnBeforeMountCbs.push(v):a.immediate&&v();const m=N();if(a.watch){const o=$(a.watch,()=>n.refresh());m&&M(o)}const l=e.hook("app:data:refresh",async o=>{(!o||o.includes(s))&&await n.refresh()});m&&M(l)}const g=Promise.resolve(e._asyncDataPromises[s]).then(()=>n);return Object.assign(g,n),g}function Z(t,r){r in t.payload.data&&(t.payload.data[r]=void 0),r in t.payload._errors&&(t.payload._errors[r]=b.errorValue),t._asyncData[r]&&(t._asyncData[r].data.value=void 0,t._asyncData[r].error.value=b.errorValue,t._asyncData[r].pending.value=!1,t._asyncData[r].status.value="idle"),r in t._asyncDataPromises&&(t._asyncDataPromises[r]&&(t._asyncDataPromises[r].cancelled=!0),t._asyncDataPromises[r]=void 0)}function A(t,r){const s={};for(const c of r)s[c]=t[c];return s}const R=new WeakMap;function ie(t,r,s={}){const{mode:c="replace",route:a=V(),router:e=I(),transform:i}=s,D=i&&"get"in i?i.get:i??(f=>f),w=i&&"set"in i?i.set:f=>f;R.has(e)||R.set(e,new Map);const h=R.get(e);let y=a.query[t];S(()=>{y=void 0});let n;const v=K((f,g)=>(n=g,{get(){return f(),D(y!==void 0?y:P(r))},set(d){d=w(d),y!==d&&(y=d===P(r)||d===null?void 0:d,h.set(t,d===P(r)||d===null?void 0:d),g(),Q(()=>{if(h.size===0)return;const u=Object.fromEntries(h.entries());h.clear();const{params:m,query:l,hash:o}=a;e[P(c)]({params:m,query:{...l,...u},hash:o})}))}}));return $(()=>a.query[t],f=>{y!==D(f)&&(y=f,n())},{flush:"sync"}),v}function ee(t,r,s){const[c={},a]=[{},r],e=k(()=>_(t)),i=c.key||Y([a,typeof e.value=="string"?e.value:"",...ae(c)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!t)throw new Error("[nuxt] [useFetch] request is missing.");const D=i===a?"$f"+i:i;if(!c.baseURL&&typeof e.value=="string"&&e.value[0]==="/"&&e.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:w,lazy:h,default:y,transform:n,pick:v,watch:f,immediate:g,getCachedData:d,deep:u,dedupe:m,...l}=c,o=G({...W,...l,cache:typeof c.cache=="boolean"?void 0:c.cache}),C={server:w,lazy:h,default:y,transform:n,pick:v,immediate:g,getCachedData:d,deep:u,dedupe:m,watch:f===!1?[]:[o,e,...f||[]]};let p;return X(D,()=>{var T;(T=p==null?void 0:p.abort)==null||T.call(p,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),p=typeof AbortController<"u"?new AbortController:{};const q=_(c.timeout);let E;return q&&(E=setTimeout(()=>p.abort(new DOMException("Request aborted due to timeout.","AbortError")),q),p.signal.onabort=()=>clearTimeout(E)),(c.$fetch||globalThis.$fetch)(e.value,{signal:p.signal,...o}).finally(()=>{clearTimeout(E)})},C)}function ae(t){var s;const r=[((s=_(t.method))==null?void 0:s.toUpperCase())||"GET",_(t.baseURL)];for(const c of[t.params||t.query]){const a=_(c);if(!a)continue;const e={};for(const[i,D]of Object.entries(a))e[_(i)]=_(D);r.push(e)}return r}const ce=async(t,r)=>{var c,a,e;const s=await ee(`https://www.googleapis.com/youtube/v3/channels?id=${r}&key=${t}&part=statistics`,"$eyTubiREEH");if((c=s.data.value)!=null&&c.items&&(a=s.data.value.items[0].statistics)!=null&&a.subscriberCount){const i=parseInt((e=s.data.value.items[0].statistics)==null?void 0:e.subscriberCount);return isNaN(i)?0:i}return 0};export{ce as g,ie as u};
