import{b as T,c as z,a as w,Q as N,e as M,o as t,g as V,y as n,l as m,m as o,u as a,h as c,j as r,t as g,B as k,A as y,n as C,T as $,p as I}from"./index.d15ac50b.js";import{_ as P,u as j,d as h,E as b}from"./index.ac17342c.js";const A=T({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:z,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Q={close:l=>l instanceof MouseEvent,click:l=>l instanceof MouseEvent},q={name:"ElTag"},D=w({...q,props:A,emits:Q,setup(l,{emit:i}){const v=l,_=N(),s=j("tag"),u=M(()=>{const{type:e,hit:f,effect:B,closable:E,round:S}=v;return[s.b(),s.is("closable",E),s.m(e),s.m(_.value),s.m(B),s.is("hit",f),s.is("round",S)]}),p=e=>{i("close",e)},d=e=>{i("click",e)};return(e,f)=>e.disableTransitions?(t(),V("span",{key:0,class:o(a(u)),style:C({backgroundColor:e.color}),onClick:d},[n("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(t(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:k(p,["stop"])},{default:r(()=>[g(a(h))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(t(),c($,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[n("span",{class:o(a(u)),style:C({backgroundColor:e.color}),onClick:d},[n("span",{class:o(a(s).e("content"))},[m(e.$slots,"default")],2),e.closable?(t(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:k(p,["stop"])},{default:r(()=>[g(a(h))]),_:1},8,["class","onClick"])):y("v-if",!0)],6)]),_:3},8,["name"]))}});var F=P(D,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const J=I(F);export{J as E,A as t};
