import{_}from"./CxMlhXeL.js";import{e as c,f as l,o as u,c as m,b as n,a as f,g as i,u as h,r as d,h as b}from"./DZ8GocjN.js";import{u as g}from"./GlL2gnrQ.js";import{u as y}from"./DCph-MMh.js";import{g as x}from"./CGSJuLou.js";import{u as v}from"./CBddJfa5.js";import"./Dq3ANapq.js";const C={class:"text-center text-white"},B=c({__name:"SubCounter",props:{count:{}},setup(r){const s=r,t=l(()=>s.count.toLocaleString());return(a,o)=>{const e=_;return u(),m("section",C,[n(e,{label:"チャンネル登録者数",class:"font-['Dela_Gothic_One'] text-5xl"}),f("div",null,[n(e,{label:i(t),stroke:16,color:"#ff9600",class:"font-['Cherry_Bomb_One'] text-[8rem] leading-[8rem]"},null,8,["label"]),n(e,{label:"人",class:"font-['Dela_Gothic_One'] ml-4 text-4xl"})])])}}}),N=c({__name:"overlay",setup(r){h({link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Dela+Gothic+One&display=swap"}]});const{decodeBase64:s}=y(),t=d(0),a=l(()=>{const e=g("value");return console.log(e.value),s(e.value)}),o=async()=>{t.value=await x(a.value.key,a.value.channelId)};return v(o,6e4),b(()=>o()),(e,O)=>{const p=B;return u(),m("section",null,[n(p,{count:i(t),onUpdate:o},null,8,["count"])])}}});export{N as default};