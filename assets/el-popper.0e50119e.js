import{c as gn,a0 as jt,d as D,e as I,a1 as $e,w as N,H as Xe,L as hn,a2 as bn,b as Q,u as E,G as Se,a as ne,r as M,l as le,E as ue,I as We,o as U,g as _e,m as Ye,a3 as Ue,v as Lt,a4 as yn,M as wn,K as On,t as Be,a5 as En,a6 as Cn,h as he,j as te,D as $t,A as ge,a7 as yt,R as Tn,n as An,p as Dt,s as me,x as Pn,T as Rn,C as Sn,a8 as Bn,N as Ge,a9 as kn,aa as In,z as Mn}from"./index.d15ac50b.js";import{i as Ae,n as Je,t as xn,_ as pe,u as Ke,o as He,l as wt}from"./index.ac17342c.js";import{b as Nt,o as jn,a as Ln}from"./index.4af098ab.js";import{g as $n}from"./rand.6d0d1e93.js";import{u as Dn,E as Ot}from"./index.bff7b787.js";import{E as Nn}from"./focus-trap.b05075ab.js";import{i as _t}from"./isNil.98bb3b88.js";const _n=(e,t,n,o=!1)=>{e&&t&&n&&(e==null||e.addEventListener(t,n,o))},Hn=(e,t,n,o=!1)=>{e&&t&&n&&(e==null||e.removeEventListener(t,n,o))},Vr=(e,t,n)=>{const o=function(...r){n&&n.apply(this,r),Hn(e,t,o)};_n(e,t,o)},X=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const a=e==null?void 0:e(r);if(n===!1||!a)return t==null?void 0:t(r)},Ur=e=>["",...gn].includes(e),Qe=Symbol("popper"),Ht=Symbol("popperContent"),Fn=jt({type:D(Boolean),default:null}),Wn=jt({type:D(Function)}),Kn=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,o=[t],r={[e]:Fn,[n]:Wn};return{useModelToggle:({indicator:i,toggleReason:s,shouldHideWhenRouteChanges:l,shouldProceed:u,onShow:p,onHide:m})=>{const g=hn(),{emit:c}=g,v=g.props,f=I(()=>$e(v[n])),d=I(()=>v[e]===null),h=y=>{i.value!==!0&&(i.value=!0,s&&(s.value=y),$e(p)&&p(y))},b=y=>{i.value!==!1&&(i.value=!1,s&&(s.value=y),$e(m)&&m(y))},C=y=>{if(v.disabled===!0||$e(u)&&!u())return;const R=f.value&&Ae;R&&c(t,!0),(d.value||!R)&&h(y)},O=y=>{if(v.disabled===!0||!Ae)return;const R=f.value&&Ae;R&&c(t,!1),(d.value||!R)&&b(y)},A=y=>{!Je(y)||(v.disabled&&y?f.value&&c(t,!1):i.value!==y&&(y?h():b()))},P=()=>{i.value?O():C()};return N(()=>v[e],A),l&&g.appContext.config.globalProperties.$route!==void 0&&N(()=>({...g.proxy.$route}),()=>{l.value&&i.value&&O()}),Xe(()=>{A(v[e])}),{hide:O,show:C,toggle:P}},useModelToggleProps:r,useModelToggleEmits:o}};function zn(){let e;const t=(o,r)=>{n(),e=window.setTimeout(o,r)},n=()=>window.clearTimeout(e);return xn(()=>n()),{registerTimeout:t,cancelTimeout:n}}let Et;const Ft=`el-popper-container-${$n()}`,Wt=`#${Ft}`,qn=()=>{const e=document.createElement("div");return e.id=Ft,document.body.appendChild(e),e},Vn=()=>{bn(()=>{!Ae||(!Et||!document.body.querySelector(Wt))&&(Et=qn())})},Un=Q({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200}}),Gn=({showAfter:e,hideAfter:t,open:n,close:o})=>{const{registerTimeout:r}=zn();return{onOpen:s=>{r(()=>{n(s)},E(e))},onClose:s=>{r(()=>{o(s)},E(t))}}},Kt=Symbol("elForwardRef"),Jn=e=>{Se(Kt,{setForwardRef:n=>{e.value=n}})},Zn=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),Gr={LIGHT:"light",DARK:"dark"},zt=Q({role:{type:String,default:"tooltip"}}),Xn={name:"ElPopperRoot",inheritAttrs:!1},Yn=ne({...Xn,props:zt,setup(e,{expose:t}){const n=e,o=M(),r=M(),a=M(),i=M(),s=I(()=>n.role),l={triggerRef:o,popperInstanceRef:r,contentRef:a,referenceRef:i,role:s};return t(l),Se(Qe,l),(u,p)=>le(u.$slots,"default")}});var Qn=pe(Yn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const qt=Q({arrowOffset:{type:Number,default:5}}),eo={name:"ElPopperArrow",inheritAttrs:!1},to=ne({...eo,props:qt,setup(e,{expose:t}){const n=e,o=Ke("popper"),{arrowOffset:r,arrowRef:a}=ue(Ht,void 0);return N(()=>n.arrowOffset,i=>{r.value=i}),We(()=>{a.value=void 0}),t({arrowRef:a}),(i,s)=>(U(),_e("span",{ref_key:"arrowRef",ref:a,class:Ye(E(o).e("arrow")),"data-popper-arrow":""},null,2))}});var no=pe(to,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const oo="ElOnlyChild",ro=ne({name:oo,setup(e,{slots:t,attrs:n}){var o;const r=ue(Kt),a=Zn((o=r==null?void 0:r.setForwardRef)!=null?o:Ue);return()=>{var i;const s=(i=t.default)==null?void 0:i.call(t,n);if(!s||s.length>1)return null;const l=Vt(s);return l?Lt(yn(l,n),[[a]]):null}}});function Vt(e){if(!e)return null;const t=e;for(const n of t){if(wn(n))switch(n.type){case Cn:continue;case En:case"svg":return Ct(n);case On:return Vt(n.children);default:return n}return Ct(n)}return null}function Ct(e){return Be("span",{class:"el-only-child__content"},[e])}const Ut=Q({virtualRef:{type:D(Object)},virtualTriggering:Boolean,onMouseenter:Function,onMouseleave:Function,onClick:Function,onKeydown:Function,onFocus:Function,onBlur:Function,onContextmenu:Function,id:String,open:Boolean}),io={name:"ElPopperTrigger",inheritAttrs:!1},ao=ne({...io,props:Ut,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=ue(Qe,void 0);Jn(r);const a=I(()=>s.value?n.id:void 0),i=I(()=>{if(o&&o.value==="tooltip")return n.open&&n.id?n.id:void 0}),s=I(()=>{if(o&&o.value!=="tooltip")return o.value}),l=I(()=>s.value?`${n.open}`:void 0);let u;return Xe(()=>{N(()=>n.virtualRef,p=>{p&&(r.value=Nt(p))},{immediate:!0}),N(()=>r.value,(p,m)=>{u==null||u(),u=void 0,He(p)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(g=>{var c;const v=n[g];v&&(p.addEventListener(g.slice(2).toLowerCase(),v),(c=m==null?void 0:m.removeEventListener)==null||c.call(m,g.slice(2).toLowerCase(),v))}),u=N([a,i,s,l],g=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((c,v)=>{_t(g[v])?p.removeAttribute(c):p.setAttribute(c,g[v])})},{immediate:!0})),He(m)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(g=>m.removeAttribute(g))},{immediate:!0})}),We(()=>{u==null||u(),u=void 0}),t({triggerRef:r}),(p,m)=>p.virtualTriggering?ge("v-if",!0):(U(),he(E(ro),$t({key:0},p.$attrs,{"aria-controls":E(a),"aria-describedby":E(i),"aria-expanded":E(l),"aria-haspopup":E(s)}),{default:te(()=>[le(p.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var so=pe(ao,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]),_="top",W="bottom",K="right",H="left",et="auto",Me=[_,W,K,H],be="start",ke="end",lo="clippingParents",Gt="viewport",Te="popper",uo="reference",Tt=Me.reduce(function(e,t){return e.concat([t+"-"+be,t+"-"+ke])},[]),tt=[].concat(Me,[et]).reduce(function(e,t){return e.concat([t,t+"-"+be,t+"-"+ke])},[]),po="beforeRead",fo="read",co="afterRead",vo="beforeMain",mo="main",go="afterMain",ho="beforeWrite",bo="write",yo="afterWrite",wo=[po,fo,co,vo,mo,go,ho,bo,yo];function J(e){return e?(e.nodeName||"").toLowerCase():null}function q(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ye(e){var t=q(e).Element;return e instanceof t||e instanceof Element}function F(e){var t=q(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function nt(e){if(typeof ShadowRoot=="undefined")return!1;var t=q(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Oo(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},a=t.elements[n];!F(a)||!J(a)||(Object.assign(a.style,o),Object.keys(r).forEach(function(i){var s=r[i];s===!1?a.removeAttribute(i):a.setAttribute(i,s===!0?"":s)}))})}function Eo(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],a=t.attributes[o]||{},i=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),s=i.reduce(function(l,u){return l[u]="",l},{});!F(r)||!J(r)||(Object.assign(r.style,s),Object.keys(a).forEach(function(l){r.removeAttribute(l)}))})}}var Jt={name:"applyStyles",enabled:!0,phase:"write",fn:Oo,effect:Eo,requires:["computeStyles"]};function G(e){return e.split("-")[0]}var se=Math.max,Fe=Math.min,we=Math.round;function Oe(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(F(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=we(n.width)/i||1),a>0&&(r=we(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function ot(e){var t=Oe(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Zt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&nt(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Y(e){return q(e).getComputedStyle(e)}function Co(e){return["table","td","th"].indexOf(J(e))>=0}function oe(e){return((ye(e)?e.ownerDocument:e.document)||window.document).documentElement}function ze(e){return J(e)==="html"?e:e.assignedSlot||e.parentNode||(nt(e)?e.host:null)||oe(e)}function At(e){return!F(e)||Y(e).position==="fixed"?null:e.offsetParent}function To(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&F(e)){var o=Y(e);if(o.position==="fixed")return null}var r=ze(e);for(nt(r)&&(r=r.host);F(r)&&["html","body"].indexOf(J(r))<0;){var a=Y(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function xe(e){for(var t=q(e),n=At(e);n&&Co(n)&&Y(n).position==="static";)n=At(n);return n&&(J(n)==="html"||J(n)==="body"&&Y(n).position==="static")?t:n||To(e)||t}function rt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Pe(e,t,n){return se(e,Fe(t,n))}function Ao(e,t,n){var o=Pe(e,t,n);return o>n?n:o}function Xt(){return{top:0,right:0,bottom:0,left:0}}function Yt(e){return Object.assign({},Xt(),e)}function Qt(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var Po=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Yt(typeof e!="number"?e:Qt(e,Me))};function Ro(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=G(n.placement),l=rt(s),u=[H,K].indexOf(s)>=0,p=u?"height":"width";if(!(!a||!i)){var m=Po(r.padding,n),g=ot(a),c=l==="y"?_:H,v=l==="y"?W:K,f=n.rects.reference[p]+n.rects.reference[l]-i[l]-n.rects.popper[p],d=i[l]-n.rects.reference[l],h=xe(a),b=h?l==="y"?h.clientHeight||0:h.clientWidth||0:0,C=f/2-d/2,O=m[c],A=b-g[p]-m[v],P=b/2-g[p]/2+C,y=Pe(O,P,A),R=l;n.modifiersData[o]=(t={},t[R]=y,t.centerOffset=y-P,t)}}function So(e){var t=e.state,n=e.options,o=n.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Zt(t.elements.popper,r)||(t.elements.arrow=r))}var Bo={name:"arrow",enabled:!0,phase:"main",fn:Ro,effect:So,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ee(e){return e.split("-")[1]}var ko={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Io(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:we(t*r)/r||0,y:we(n*r)/r||0}}function Pt(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,m=e.isFixed,g=i.x,c=g===void 0?0:g,v=i.y,f=v===void 0?0:v,d=typeof p=="function"?p({x:c,y:f}):{x:c,y:f};c=d.x,f=d.y;var h=i.hasOwnProperty("x"),b=i.hasOwnProperty("y"),C=H,O=_,A=window;if(u){var P=xe(n),y="clientHeight",R="clientWidth";if(P===q(n)&&(P=oe(n),Y(P).position!=="static"&&s==="absolute"&&(y="scrollHeight",R="scrollWidth")),P=P,r===_||(r===H||r===K)&&a===ke){O=W;var j=m&&P===A&&A.visualViewport?A.visualViewport.height:P[y];f-=j-o.height,f*=l?1:-1}if(r===H||(r===_||r===W)&&a===ke){C=K;var L=m&&P===A&&A.visualViewport?A.visualViewport.width:P[R];c-=L-o.width,c*=l?1:-1}}var k=Object.assign({position:s},u&&ko),$=p===!0?Io({x:c,y:f}):{x:c,y:f};if(c=$.x,f=$.y,l){var x;return Object.assign({},k,(x={},x[O]=b?"0":"",x[C]=h?"0":"",x.transform=(A.devicePixelRatio||1)<=1?"translate("+c+"px, "+f+"px)":"translate3d("+c+"px, "+f+"px, 0)",x))}return Object.assign({},k,(t={},t[O]=b?f+"px":"",t[C]=h?c+"px":"",t.transform="",t))}function Mo(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,a=n.adaptive,i=a===void 0?!0:a,s=n.roundOffsets,l=s===void 0?!0:s,u={placement:G(t.placement),variation:Ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Pt(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Pt(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var en={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Mo,data:{}},De={passive:!0};function xo(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=r===void 0?!0:r,i=o.resize,s=i===void 0?!0:i,l=q(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(p){p.addEventListener("scroll",n.update,De)}),s&&l.addEventListener("resize",n.update,De),function(){a&&u.forEach(function(p){p.removeEventListener("scroll",n.update,De)}),s&&l.removeEventListener("resize",n.update,De)}}var tn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:xo,data:{}},jo={left:"right",right:"left",bottom:"top",top:"bottom"};function Ne(e){return e.replace(/left|right|bottom|top/g,function(t){return jo[t]})}var Lo={start:"end",end:"start"};function Rt(e){return e.replace(/start|end/g,function(t){return Lo[t]})}function it(e){var t=q(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function at(e){return Oe(oe(e)).left+it(e).scrollLeft}function $o(e){var t=q(e),n=oe(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,s=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,s=o.offsetTop)),{width:r,height:a,x:i+at(e),y:s}}function Do(e){var t,n=oe(e),o=it(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=se(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=se(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+at(e),l=-o.scrollTop;return Y(r||n).direction==="rtl"&&(s+=se(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}function st(e){var t=Y(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function nn(e){return["html","body","#document"].indexOf(J(e))>=0?e.ownerDocument.body:F(e)&&st(e)?e:nn(ze(e))}function Re(e,t){var n;t===void 0&&(t=[]);var o=nn(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=q(o),i=r?[a].concat(a.visualViewport||[],st(o)?o:[]):o,s=t.concat(i);return r?s:s.concat(Re(ze(i)))}function Ze(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function No(e){var t=Oe(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function St(e,t){return t===Gt?Ze($o(e)):ye(t)?No(t):Ze(Do(oe(e)))}function _o(e){var t=Re(ze(e)),n=["absolute","fixed"].indexOf(Y(e).position)>=0,o=n&&F(e)?xe(e):e;return ye(o)?t.filter(function(r){return ye(r)&&Zt(r,o)&&J(r)!=="body"}):[]}function Ho(e,t,n){var o=t==="clippingParents"?_o(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce(function(s,l){var u=St(e,l);return s.top=se(u.top,s.top),s.right=Fe(u.right,s.right),s.bottom=Fe(u.bottom,s.bottom),s.left=se(u.left,s.left),s},St(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function on(e){var t=e.reference,n=e.element,o=e.placement,r=o?G(o):null,a=o?Ee(o):null,i=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,l;switch(r){case _:l={x:i,y:t.y-n.height};break;case W:l={x:i,y:t.y+t.height};break;case K:l={x:t.x+t.width,y:s};break;case H:l={x:t.x-n.width,y:s};break;default:l={x:t.x,y:t.y}}var u=r?rt(r):null;if(u!=null){var p=u==="y"?"height":"width";switch(a){case be:l[u]=l[u]-(t[p]/2-n[p]/2);break;case ke:l[u]=l[u]+(t[p]/2-n[p]/2);break}}return l}function Ie(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=o===void 0?e.placement:o,a=n.boundary,i=a===void 0?lo:a,s=n.rootBoundary,l=s===void 0?Gt:s,u=n.elementContext,p=u===void 0?Te:u,m=n.altBoundary,g=m===void 0?!1:m,c=n.padding,v=c===void 0?0:c,f=Yt(typeof v!="number"?v:Qt(v,Me)),d=p===Te?uo:Te,h=e.rects.popper,b=e.elements[g?d:p],C=Ho(ye(b)?b:b.contextElement||oe(e.elements.popper),i,l),O=Oe(e.elements.reference),A=on({reference:O,element:h,strategy:"absolute",placement:r}),P=Ze(Object.assign({},h,A)),y=p===Te?P:O,R={top:C.top-y.top+f.top,bottom:y.bottom-C.bottom+f.bottom,left:C.left-y.left+f.left,right:y.right-C.right+f.right},j=e.modifiersData.offset;if(p===Te&&j){var L=j[r];Object.keys(R).forEach(function(k){var $=[K,W].indexOf(k)>=0?1:-1,x=[_,W].indexOf(k)>=0?"y":"x";R[k]+=L[x]*$})}return R}function Fo(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?tt:l,p=Ee(o),m=p?s?Tt:Tt.filter(function(v){return Ee(v)===p}):Me,g=m.filter(function(v){return u.indexOf(v)>=0});g.length===0&&(g=m);var c=g.reduce(function(v,f){return v[f]=Ie(e,{placement:f,boundary:r,rootBoundary:a,padding:i})[G(f)],v},{});return Object.keys(c).sort(function(v,f){return c[v]-c[f]})}function Wo(e){if(G(e)===et)return[];var t=Ne(e);return[Rt(e),t,Rt(t)]}function Ko(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,s=i===void 0?!0:i,l=n.fallbackPlacements,u=n.padding,p=n.boundary,m=n.rootBoundary,g=n.altBoundary,c=n.flipVariations,v=c===void 0?!0:c,f=n.allowedAutoPlacements,d=t.options.placement,h=G(d),b=h===d,C=l||(b||!v?[Ne(d)]:Wo(d)),O=[d].concat(C).reduce(function(ie,Z){return ie.concat(G(Z)===et?Fo(t,{placement:Z,boundary:p,rootBoundary:m,padding:u,flipVariations:v,allowedAutoPlacements:f}):Z)},[]),A=t.rects.reference,P=t.rects.popper,y=new Map,R=!0,j=O[0],L=0;L<O.length;L++){var k=O[L],$=G(k),x=Ee(k)===be,w=[_,W].indexOf($)>=0,T=w?"width":"height",S=Ie(t,{placement:k,boundary:p,rootBoundary:m,altBoundary:g,padding:u}),B=w?x?K:H:x?W:_;A[T]>P[T]&&(B=Ne(B));var V=Ne(B),z=[];if(a&&z.push(S[$]<=0),s&&z.push(S[B]<=0,S[V]<=0),z.every(function(ie){return ie})){j=k,R=!1;break}y.set(k,z)}if(R)for(var fe=v?3:1,ce=function(ie){var Z=O.find(function(je){var Ce=y.get(je);if(Ce)return Ce.slice(0,ie).every(function(de){return de})});if(Z)return j=Z,"break"},ee=fe;ee>0;ee--){var re=ce(ee);if(re==="break")break}t.placement!==j&&(t.modifiersData[o]._skip=!0,t.placement=j,t.reset=!0)}}var zo={name:"flip",enabled:!0,phase:"main",fn:Ko,requiresIfExists:["offset"],data:{_skip:!1}};function Bt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function kt(e){return[_,K,W,H].some(function(t){return e[t]>=0})}function qo(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=Ie(t,{elementContext:"reference"}),s=Ie(t,{altBoundary:!0}),l=Bt(i,o),u=Bt(s,r,a),p=kt(l),m=kt(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}var Vo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:qo};function Uo(e,t,n){var o=G(e),r=[H,_].indexOf(o)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*r,[H,K].indexOf(o)>=0?{x:s,y:i}:{x:i,y:s}}function Go(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=r===void 0?[0,0]:r,i=tt.reduce(function(p,m){return p[m]=Uo(m,t.rects,a),p},{}),s=i[t.placement],l=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=i}var Jo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Go};function Zo(e){var t=e.state,n=e.name;t.modifiersData[n]=on({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var rn={name:"popperOffsets",enabled:!0,phase:"read",fn:Zo,data:{}};function Xo(e){return e==="x"?"y":"x"}function Yo(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,s=i===void 0?!1:i,l=n.boundary,u=n.rootBoundary,p=n.altBoundary,m=n.padding,g=n.tether,c=g===void 0?!0:g,v=n.tetherOffset,f=v===void 0?0:v,d=Ie(t,{boundary:l,rootBoundary:u,padding:m,altBoundary:p}),h=G(t.placement),b=Ee(t.placement),C=!b,O=rt(h),A=Xo(O),P=t.modifiersData.popperOffsets,y=t.rects.reference,R=t.rects.popper,j=typeof f=="function"?f(Object.assign({},t.rects,{placement:t.placement})):f,L=typeof j=="number"?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,$={x:0,y:0};if(P){if(a){var x,w=O==="y"?_:H,T=O==="y"?W:K,S=O==="y"?"height":"width",B=P[O],V=B+d[w],z=B-d[T],fe=c?-R[S]/2:0,ce=b===be?y[S]:R[S],ee=b===be?-R[S]:-y[S],re=t.elements.arrow,ie=c&&re?ot(re):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Xt(),je=Z[w],Ce=Z[T],de=Pe(0,y[S],ie[S]),un=C?y[S]/2-fe-de-je-L.mainAxis:ce-de-je-L.mainAxis,pn=C?-y[S]/2+fe+de+Ce+L.mainAxis:ee+de+Ce+L.mainAxis,qe=t.elements.arrow&&xe(t.elements.arrow),fn=qe?O==="y"?qe.clientTop||0:qe.clientLeft||0:0,pt=(x=k==null?void 0:k[O])!=null?x:0,cn=B+un-pt-fn,dn=B+pn-pt,ft=Pe(c?Fe(V,cn):V,B,c?se(z,dn):z);P[O]=ft,$[O]=ft-B}if(s){var ct,vn=O==="x"?_:H,mn=O==="x"?W:K,ae=P[A],Le=A==="y"?"height":"width",dt=ae+d[vn],vt=ae-d[mn],Ve=[_,H].indexOf(h)!==-1,mt=(ct=k==null?void 0:k[A])!=null?ct:0,gt=Ve?dt:ae-y[Le]-R[Le]-mt+L.altAxis,ht=Ve?ae+y[Le]+R[Le]-mt-L.altAxis:vt,bt=c&&Ve?Ao(gt,ae,ht):Pe(c?gt:dt,ae,c?ht:vt);P[A]=bt,$[A]=bt-ae}t.modifiersData[o]=$}}var Qo={name:"preventOverflow",enabled:!0,phase:"main",fn:Yo,requiresIfExists:["offset"]};function er(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function tr(e){return e===q(e)||!F(e)?it(e):er(e)}function nr(e){var t=e.getBoundingClientRect(),n=we(t.width)/e.offsetWidth||1,o=we(t.height)/e.offsetHeight||1;return n!==1||o!==1}function or(e,t,n){n===void 0&&(n=!1);var o=F(t),r=F(t)&&nr(t),a=oe(t),i=Oe(e,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!n)&&((J(t)!=="body"||st(a))&&(s=tr(t)),F(t)?(l=Oe(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=at(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function rr(e){var t=new Map,n=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function r(a){n.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(s){if(!n.has(s)){var l=t.get(s);l&&r(l)}}),o.push(a)}return e.forEach(function(a){n.has(a.name)||r(a)}),o}function ir(e){var t=rr(e);return wo.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function ar(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function sr(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var It={placement:"bottom",modifiers:[],strategy:"absolute"};function Mt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function lt(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,a=r===void 0?It:r;return function(i,s,l){l===void 0&&(l=a);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},It,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},p=[],m=!1,g={state:u,setOptions:function(f){var d=typeof f=="function"?f(u.options):f;v(),u.options=Object.assign({},a,u.options,d),u.scrollParents={reference:ye(i)?Re(i):i.contextElement?Re(i.contextElement):[],popper:Re(s)};var h=ir(sr([].concat(o,u.options.modifiers)));return u.orderedModifiers=h.filter(function(b){return b.enabled}),c(),g.update()},forceUpdate:function(){if(!m){var f=u.elements,d=f.reference,h=f.popper;if(Mt(d,h)){u.rects={reference:or(d,xe(h),u.options.strategy==="fixed"),popper:ot(h)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(R){return u.modifiersData[R.name]=Object.assign({},R.data)});for(var b=0;b<u.orderedModifiers.length;b++){if(u.reset===!0){u.reset=!1,b=-1;continue}var C=u.orderedModifiers[b],O=C.fn,A=C.options,P=A===void 0?{}:A,y=C.name;typeof O=="function"&&(u=O({state:u,options:P,name:y,instance:g})||u)}}}},update:ar(function(){return new Promise(function(f){g.forceUpdate(),f(u)})}),destroy:function(){v(),m=!0}};if(!Mt(i,s))return g;g.setOptions(l).then(function(f){!m&&l.onFirstUpdate&&l.onFirstUpdate(f)});function c(){u.orderedModifiers.forEach(function(f){var d=f.name,h=f.options,b=h===void 0?{}:h,C=f.effect;if(typeof C=="function"){var O=C({state:u,name:d,instance:g,options:b}),A=function(){};p.push(O||A)}})}function v(){p.forEach(function(f){return f()}),p=[]}return g}}lt();var lr=[tn,rn,en,Jt];lt({defaultModifiers:lr});var ur=[tn,rn,en,Jt,Jo,zo,Qo,Bo,Vo],pr=lt({defaultModifiers:ur});const fr=["fixed","absolute"],cr=Q({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:D(Array),default:()=>[]},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:tt,default:"bottom"},popperOptions:{type:D(Object),default:()=>({})},strategy:{type:String,values:fr,default:"absolute"}}),an=Q({...cr,id:String,style:{type:D([String,Array,Object])},className:{type:D([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:D([String,Array,Object])},popperStyle:{type:D([String,Array,Object])},referenceEl:{type:D(Object)},triggerTargetEl:{type:D(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),dr=["mouseenter","mouseleave","focus","blur","close"],xt=(e,t)=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:mr(e)};return gr(a,t),hr(a,r==null?void 0:r.modifiers),a},vr=e=>{if(!!Ae)return Nt(e)};function mr(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,t!=null?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o!=null?o:[]}},{name:"computeStyles",options:{gpuAcceleration:n,adaptive:n}}]}function gr(e,{arrowEl:t,arrowOffset:n}){e.modifiers.push({name:"arrow",options:{element:t,padding:n!=null?n:5}})}function hr(e,t){t&&(e.modifiers=[...e.modifiers,...t!=null?t:[]])}const br={name:"ElPopperContent"},yr=ne({...br,props:an,emits:dr,setup(e,{expose:t,emit:n}){const o=e,{popperInstanceRef:r,contentRef:a,triggerRef:i,role:s}=ue(Qe,void 0),l=ue(yt,void 0),{nextZIndex:u}=Dn(),p=Ke("popper"),m=M(),g=M("first"),c=M(),v=M();Se(Ht,{arrowRef:c,arrowOffset:v}),l&&(l.addInputId||l.removeInputId)&&Se(yt,{...l,addInputId:Ue,removeInputId:Ue});const f=M(o.zIndex||u()),d=M(!1);let h;const b=I(()=>vr(o.referenceEl)||E(i)),C=I(()=>[{zIndex:E(f)},o.popperStyle]),O=I(()=>[p.b(),p.is("pure",o.pure),p.is(o.effect),o.popperClass]),A=I(()=>s&&s.value==="dialog"?"false":void 0),P=({referenceEl:w,popperContentEl:T,arrowEl:S})=>{const B=xt(o,{arrowEl:S,arrowOffset:E(v)});return pr(w,T,B)},y=(w=!0)=>{var T;(T=E(r))==null||T.update(),w&&(f.value=o.zIndex||u())},R=()=>{var w,T;const S={name:"eventListeners",enabled:o.visible};(T=(w=E(r))==null?void 0:w.setOptions)==null||T.call(w,B=>({...B,modifiers:[...B.modifiers||[],S]})),y(!1),o.visible&&o.focusOnShow?d.value=!0:o.visible===!1&&(d.value=!1)},j=()=>{n("focus")},L=()=>{g.value="first",n("blur")},k=w=>{var T;o.visible&&!d.value&&(w.relatedTarget&&((T=w.relatedTarget)==null||T.focus()),w.target&&(g.value=w.target),d.value=!0)},$=()=>{o.trapping||(d.value=!1)},x=()=>{d.value=!1,n("close")};return Xe(()=>{let w;N(b,T=>{var S;w==null||w();const B=E(r);if((S=B==null?void 0:B.destroy)==null||S.call(B),T){const V=E(m);a.value=V,r.value=P({referenceEl:T,popperContentEl:V,arrowEl:E(c)}),w=N(()=>T.getBoundingClientRect(),()=>y(),{immediate:!0})}else r.value=void 0},{immediate:!0}),N(()=>o.triggerTargetEl,(T,S)=>{h==null||h(),h=void 0;const B=E(T||m.value),V=E(S||m.value);if(He(B)){const{ariaLabel:z,id:fe}=Tn(o);h=N([s,z,A,fe],ce=>{["role","aria-label","aria-modal","id"].forEach((ee,re)=>{_t(ce[re])?B.removeAttribute(ee):B.setAttribute(ee,ce[re])})},{immediate:!0})}He(V)&&["role","aria-label","aria-modal","id"].forEach(z=>{V.removeAttribute(z)})},{immediate:!0}),N(()=>o.visible,R,{immediate:!0}),N(()=>xt(o,{arrowEl:E(c),arrowOffset:E(v)}),T=>{var S;return(S=r.value)==null?void 0:S.setOptions(T)})}),We(()=>{h==null||h(),h=void 0}),t({popperContentRef:m,popperInstanceRef:r,updatePopper:y,contentStyle:C}),(w,T)=>(U(),_e("div",{ref_key:"popperContentRef",ref:m,style:An(E(C)),class:Ye(E(O)),tabindex:"-1",onMouseenter:T[0]||(T[0]=S=>w.$emit("mouseenter",S)),onMouseleave:T[1]||(T[1]=S=>w.$emit("mouseleave",S))},[Be(E(Nn),{trapped:d.value,"trap-on-focus-in":!0,"focus-trap-el":m.value,"focus-start-el":g.value,onFocusAfterTrapped:j,onFocusAfterReleased:L,onFocusin:k,onFocusoutPrevented:$,onReleaseRequested:x},{default:te(()=>[le(w.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el"])],38))}});var wr=pe(yr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const Or=Dt(Qn),Er=Ke("tooltip"),sn=Q({...Un,...an,appendTo:{type:D([String,Object]),default:Wt},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:D(Boolean),default:null},transition:{type:String,default:`${Er.namespace.value}-fade-in-linear`},teleported:{type:Boolean,default:!0},disabled:{type:Boolean}}),ln=Q({...Ut,disabled:Boolean,trigger:{type:D([String,Array]),default:"hover"},triggerKeys:{type:D(Array),default:()=>[Ot.enter,Ot.space]}}),Cr=Q({openDelay:{type:Number},visibleArrow:{type:Boolean,default:void 0},hideAfter:{type:Number,default:200},showArrow:{type:Boolean,default:!0}}),ut=Symbol("elTooltip"),Tr=ne({name:"ElTooltipContent",components:{ElPopperContent:wr},inheritAttrs:!1,props:sn,setup(e){const t=M(null),n=M(!1),o=M(!1),r=M(!1),a=M(!1),{controlled:i,id:s,open:l,trigger:u,onClose:p,onOpen:m,onShow:g,onHide:c,onBeforeShow:v,onBeforeHide:f}=ue(ut,void 0),d=I(()=>e.persistent);We(()=>{a.value=!0});const h=I(()=>E(d)?!0:E(l)),b=I(()=>e.disabled?!1:E(l)),C=I(()=>{var w;return(w=e.style)!=null?w:{}}),O=I(()=>!E(l)),A=()=>{c()},P=()=>{if(E(i))return!0},y=X(P,()=>{e.enterable&&E(u)==="hover"&&m()}),R=X(P,()=>{E(u)==="hover"&&p()}),j=()=>{var w,T;(T=(w=t.value)==null?void 0:w.updatePopper)==null||T.call(w),v==null||v()},L=()=>{f==null||f()},k=()=>{g(),x=jn(I(()=>{var w;return(w=t.value)==null?void 0:w.popperContentRef}),()=>{if(E(i))return;E(u)!=="hover"&&p()})},$=()=>{e.virtualTriggering||p()};let x;return N(()=>E(l),w=>{w||x==null||x()},{flush:"post"}),{ariaHidden:O,entering:o,leaving:r,id:s,intermediateOpen:n,contentStyle:C,contentRef:t,destroyed:a,shouldRender:h,shouldShow:b,onClose:p,open:l,onAfterShow:k,onBeforeEnter:j,onBeforeLeave:L,onContentEnter:y,onContentLeave:R,onTransitionLeave:A,onBlur:$}}});function Ar(e,t,n,o,r,a){const i=me("el-popper-content");return U(),he(Sn,{disabled:!e.teleported,to:e.appendTo},[Be(Rn,{name:e.transition,onAfterLeave:e.onTransitionLeave,onBeforeEnter:e.onBeforeEnter,onAfterEnter:e.onAfterShow,onBeforeLeave:e.onBeforeLeave},{default:te(()=>[e.shouldRender?Lt((U(),he(i,$t({key:0,id:e.id,ref:"contentRef"},e.$attrs,{"aria-label":e.ariaLabel,"aria-hidden":e.ariaHidden,"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,e.contentStyle],"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,visible:e.shouldShow,"z-index":e.zIndex,onMouseenter:e.onContentEnter,onMouseleave:e.onContentLeave,onBlur:e.onBlur,onClose:e.onClose}),{default:te(()=>[ge(" Workaround bug #6378 "),e.destroyed?ge("v-if",!0):le(e.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onBlur","onClose"])),[[Pn,e.shouldShow]]):ge("v-if",!0)]),_:3},8,["name","onAfterLeave","onBeforeEnter","onAfterEnter","onBeforeLeave"])],8,["disabled","to"])}var Pr=pe(Tr,[["render",Ar],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const Rr=(e,t)=>Bn(e)?e.includes(t):e===t,ve=(e,t,n)=>o=>{Rr(E(e),t)&&n(o)},Sr=ne({name:"ElTooltipTrigger",components:{ElPopperTrigger:so},props:ln,setup(e){const t=Ke("tooltip"),{controlled:n,id:o,open:r,onOpen:a,onClose:i,onToggle:s}=ue(ut,void 0),l=M(null),u=()=>{if(E(n)||e.disabled)return!0},p=Ge(e,"trigger"),m=X(u,ve(p,"hover",a)),g=X(u,ve(p,"hover",i)),c=X(u,ve(p,"click",b=>{b.button===0&&s(b)})),v=X(u,ve(p,"focus",a)),f=X(u,ve(p,"focus",i)),d=X(u,ve(p,"contextmenu",b=>{b.preventDefault(),s(b)})),h=X(u,b=>{const{code:C}=b;e.triggerKeys.includes(C)&&(b.preventDefault(),s(b))});return{onBlur:f,onContextMenu:d,onFocus:v,onMouseenter:m,onMouseleave:g,onClick:c,onKeydown:h,open:r,id:o,triggerRef:l,ns:t}}});function Br(e,t,n,o,r,a){const i=me("el-popper-trigger");return U(),he(i,{id:e.id,"virtual-ref":e.virtualRef,open:e.open,"virtual-triggering":e.virtualTriggering,class:Ye(e.ns.e("trigger")),onBlur:e.onBlur,onClick:e.onClick,onContextmenu:e.onContextMenu,onFocus:e.onFocus,onMouseenter:e.onMouseenter,onMouseleave:e.onMouseleave,onKeydown:e.onKeydown},{default:te(()=>[le(e.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"])}var kr=pe(Sr,[["render",Br],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const{useModelToggleProps:Ir,useModelToggle:Mr,useModelToggleEmits:xr}=Kn("visible"),jr=ne({name:"ElTooltip",components:{ElPopper:Or,ElPopperArrow:no,ElTooltipContent:Pr,ElTooltipTrigger:kr},props:{...zt,...Ir,...sn,...ln,...qt,...Cr},emits:[...xr,"before-show","before-hide","show","hide","open","close"],setup(e,{emit:t}){Vn();const n=I(()=>(wt(e.openDelay),e.openDelay||e.showAfter)),o=I(()=>(wt(e.visibleArrow),Je(e.visibleArrow)?e.visibleArrow:e.showArrow)),r=Ln(),a=M(null),i=M(null),s=()=>{var d;const h=E(a);h&&((d=h.popperInstanceRef)==null||d.update())},l=M(!1),u=M(void 0),{show:p,hide:m}=Mr({indicator:l,toggleReason:u}),{onOpen:g,onClose:c}=Gn({showAfter:n,hideAfter:Ge(e,"hideAfter"),open:p,close:m}),v=I(()=>Je(e.visible));Se(ut,{controlled:v,id:r,open:kn(l),trigger:Ge(e,"trigger"),onOpen:d=>{g(d)},onClose:d=>{c(d)},onToggle:d=>{E(l)?c(d):g(d)},onShow:()=>{t("show",u.value)},onHide:()=>{t("hide",u.value)},onBeforeShow:()=>{t("before-show",u.value)},onBeforeHide:()=>{t("before-hide",u.value)},updatePopper:s}),N(()=>e.disabled,d=>{d&&l.value&&(l.value=!1)});const f=()=>{var d,h;const b=(h=(d=i.value)==null?void 0:d.contentRef)==null?void 0:h.popperContentRef;return b&&b.contains(document.activeElement)};return In(()=>l.value&&m()),{compatShowAfter:n,compatShowArrow:o,popperRef:a,contentRef:i,open:l,hide:m,isFocusInsideContent:f,updatePopper:s,onOpen:g,onClose:c}}}),Lr=["innerHTML"],$r={key:1};function Dr(e,t,n,o,r,a){const i=me("el-tooltip-trigger"),s=me("el-popper-arrow"),l=me("el-tooltip-content"),u=me("el-popper");return U(),he(u,{ref:"popperRef",role:e.role},{default:te(()=>[Be(i,{disabled:e.disabled,trigger:e.trigger,"trigger-keys":e.triggerKeys,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:te(()=>[e.$slots.default?le(e.$slots,"default",{key:0}):ge("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Be(l,{ref:"contentRef","aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,"show-after":e.compatShowAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"virtual-triggering":e.virtualTriggering,"z-index":e.zIndex,"append-to":e.appendTo},{default:te(()=>[le(e.$slots,"content",{},()=>[e.rawContent?(U(),_e("span",{key:0,innerHTML:e.content},null,8,Lr)):(U(),_e("span",$r,Mn(e.content),1))]),e.compatShowArrow?(U(),he(s,{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):ge("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"])}var Nr=pe(jr,[["render",Dr],["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);const Jr=Dt(Nr);export{Jr as E,ut as T,Hn as a,Gr as b,Vr as c,Ur as i,_n as o,sn as u};