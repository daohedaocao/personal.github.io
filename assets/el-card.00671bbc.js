import{b as d,e as n,f as p,u as c,o,k as t,t as r,l as s,s as l,aa as i,I as u,J as y,H as m,n as f,_ as h,v}from"./index.6615d0be.js";const S=d({header:{type:String,default:""},bodyStyle:{type:n([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),_={name:"ElCard"},b=p({..._,props:S,setup(C){const a=c("card");return(e,k)=>(o(),t("div",{class:r([s(a).b(),s(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(o(),t("div",{key:0,class:r(s(a).e("header"))},[l(e.$slots,"header",{},()=>[i(u(e.header),1)])],2)):y("v-if",!0),m("div",{class:r(s(a).e("body")),style:f(e.bodyStyle)},[l(e.$slots,"default")],6)],2))}});var w=h(b,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const E=v(w);export{E};