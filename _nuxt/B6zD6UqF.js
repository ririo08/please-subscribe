import{e as c,h as i,o as l,c as u,t as f,m as d,_ as h,f as p,b as a,a as b,g as _,u as g,r as x,j as y}from"./DopW-7J7.js";import{u as v,g as C}from"./DcUeQLm8.js";import{a as k,u as O}from"./sK23vPg7.js";import"./Dq3ANapq.js";const S=c({__name:"OutLineText",props:{label:{},stroke:{default:6},color:{default:"black"}},setup(n){return i(e=>({"44a3d48a":e.color})),(e,o)=>(l(),u("span",d(e.$attrs,{class:`text-shadow-${e.stroke}`}),f(e.label),17))}}),B=h(S,[["__scopeId","data-v-a23e86e6"]]),w={class:"text-center text-white"},D=c({__name:"SubCounter",props:{count:{}},setup(n){const e=n,o=p(()=>e.count.toLocaleString());return(r,s)=>{const t=B;return l(),u("section",w,[a(t,{label:"チャンネル登録者数",class:"font-['Dela_Gothic_One'] text-5xl"}),b("div",null,[a(t,{label:_(o),stroke:16,color:"#ff9600",class:"font-['Cherry_Bomb_One'] text-[8rem] leading-[8rem]"},null,8,["label"]),a(t,{label:"人",class:"font-['Dela_Gothic_One'] ml-4 text-4xl"})])])}}}),V=c({__name:"overlay",setup(n){g({link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Dela+Gothic+One&display=swap"}]});const{decodeBase64:e}=O(),o=x(0),r=p(()=>{const t=v("value");return console.log(t.value),e(t.value)}),s=async()=>{o.value=await C(r.value.key,r.value.channelId)};return k(s,6e4),y(()=>s()),(t,$)=>{const m=D;return l(),u("section",null,[a(m,{count:_(o),onUpdate:s},null,8,["count"])])}}});export{V as default};
