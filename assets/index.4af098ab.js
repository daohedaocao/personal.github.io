import{i as $,t as j,y as L,z as y,A as F}from"./index.ac17342c.js";import{w as h,u as P,r as f,e as N,L as S,E as w,an as W,a7 as D,H as V,N as z,ao as K}from"./index.d15ac50b.js";function _(e){var t;const s=P(e);return(t=s==null?void 0:s.$el)!=null?t:s}const I=$?window:void 0,U=$?window.document:void 0;function b(...e){let t,s,n,o;if(L(e[0])?([s,n,o]=e,t=I):[t,s,n,o]=e,!t)return y;let a=y;const r=h(()=>_(t),l=>{a(),l&&(l.addEventListener(s,n,o),a=()=>{l.removeEventListener(s,n,o),a=y})},{immediate:!0,flush:"post"}),u=()=>{r(),a()};return j(u),u}function X(e,t,s={}){const{window:n=I,ignore:o,capture:a=!0}=s;if(!n)return;const r=f(!0);let u;const l=i=>{n.clearTimeout(u);const d=_(e),v=i.composedPath();!d||d===i.target||v.includes(d)||!r.value||o&&o.length>0&&o.some(m=>{const O=_(m);return O&&(i.target===O||v.includes(O))})||t(i)},c=[b(n,"click",l,{passive:!0,capture:a}),b(n,"pointerdown",i=>{const d=_(e);r.value=!!d&&!i.composedPath().includes(d)},{passive:!0}),b(n,"pointerup",i=>{if(i.button===0){const d=i.composedPath();i.composedPath=()=>d,u=n.setTimeout(()=>l(i),50)}},{passive:!0})];return()=>c.forEach(i=>i())}const g=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},E="__vueuse_ssr_handlers__";g[E]=g[E]||{};g[E];function Z({document:e=U}={}){if(!e)return f("visible");const t=f(e.visibilityState);return b(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var R=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,B=(e,t)=>{var s={};for(var n in e)H.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&R)for(var n of R(e))t.indexOf(n)<0&&A.call(e,n)&&(s[n]=e[n]);return s};function G(e,t,s={}){const n=s,{window:o=I}=n,a=B(n,["window"]);let r;const u=o&&"ResizeObserver"in o,l=()=>{r&&(r.disconnect(),r=void 0)},c=h(()=>_(e),i=>{l(),u&&o&&i&&(r=new ResizeObserver(t),r.observe(i,a))},{immediate:!0,flush:"post"}),p=()=>{l(),c()};return j(p),{isSupported:u,stop:p}}var T;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(T||(T={}));function x(e,t,s,n={}){var o;const{passive:a=!1,eventName:r,deep:u=!1,defaultValue:l}=n,c=S(),p=s||(c==null?void 0:c.emit)||((o=c==null?void 0:c.$emit)==null?void 0:o.bind(c));let i=r;t||(t="modelValue"),i=r||i||`update:${t.toString()}`;const d=()=>F(e[t])?e[t]:l;if(a){const v=f(d());return h(()=>e[t],m=>v.value=m),h(v,m=>{(m!==e[t]||u)&&p(i,m)},{deep:u}),v}else return N({get(){return d()},set(v){p(i,v)}})}function k({window:e=I}={}){if(!e)return f(!1);const t=f(e.document.hasFocus());return b(e,"blur",()=>{t.value=!1}),b(e,"focus",()=>{t.value=!0}),t}const C=({from:e,replacement:t,scope:s,version:n,ref:o,type:a="API"},r)=>{h(()=>P(r),u=>{},{immediate:!0})},J={prefix:Math.floor(Math.random()*1e4),current:0},M=Symbol("elIdInjection"),Y=e=>{const t=w(M,J);return N(()=>P(e)||`el-id-${t.prefix}-${t.current++}`)},ee=()=>{const e=w(W,void 0),t=w(D,void 0);return{form:e,formItem:t}},te=(e,{formItemContext:t,disableIdGeneration:s,disableIdManagement:n})=>{s||(s=f(!1)),n||(n=f(!1));const o=f();let a;const r=N(()=>{var u;return!!(!e.label&&t&&t.inputIds&&((u=t.inputIds)==null?void 0:u.length)<=1)});return V(()=>{a=h([z(e,"id"),s],([u,l])=>{const c=u!=null?u:l?void 0:Y().value;c!==o.value&&(t!=null&&t.removeInputId&&(o.value&&t.removeInputId(o.value),!(n!=null&&n.value)&&!l&&c&&t.addInputId(c)),o.value=c)},{immediate:!0})}),K(()=>{a&&a(),t!=null&&t.removeInputId&&o.value&&t.removeInputId(o.value)}),{isLabeledByFormItem:r,inputId:o}};export{Y as a,_ as b,ee as c,te as d,G as e,b as f,Z as g,k as h,x as i,X as o,C as u};