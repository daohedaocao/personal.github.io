import{_ as e,f as n,u as i,o as p,m as r,p as l,s as g,R as m,aS as f,l as y,T as c}from"./index.6615d0be.js";const T={name:"ElCollapseTransition"},_=n({...T,setup(o){const s=i("collapse-transition"),d={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?(t.style.maxHeight=`${t.scrollHeight}px`,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};return(t,h)=>(p(),r(c,m({name:y(s).b()},f(d)),{default:l(()=>[g(t.$slots,"default")]),_:3},16,["name"]))}});var a=e(_,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);a.install=o=>{o.component(a.name,a)};const B=a;export{B as _};