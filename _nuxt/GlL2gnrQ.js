import{t as x,b as u}from"./CBddJfa5.js";import{aj as Q,ak as _,al as b,k as j,n as M}from"./DZ8GocjN.js";const f=new WeakMap;function z(i,a,m={}){const{mode:q="replace",route:c=Q(),router:o=_(),transform:t}=m,p=t&&"get"in t?t.get:t??(r=>r),h=t&&"set"in t?t.set:r=>r;f.has(o)||f.set(o,new Map);const n=f.get(o);let s=c.query[i];x(()=>{s=void 0});let y;const g=b((r,l)=>(y=l,{get(){return r(),p(s!==void 0?s:u(a))},set(e){e=h(e),s!==e&&(s=e===u(a)||e===null?void 0:e,n.set(i,e===u(a)||e===null?void 0:e),l(),M(()=>{if(n.size===0)return;const k=Object.fromEntries(n.entries());n.clear();const{params:w,query:R,hash:d}=c;o[u(q)]({params:w,query:{...R,...k},hash:d})}))}}));return j(()=>c.query[i],r=>{s!==p(r)&&(s=r,y())},{flush:"sync"}),g}export{z as u};
