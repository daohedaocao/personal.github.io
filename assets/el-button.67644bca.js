import{b as P,s as ot,u as $,E as z,_ as Q}from"./index.ac17342c.js";import{b as it,ae as st,e as M,af as Z,a as J,ag as ft,E as ut,ad as ht,Q as ct,r as lt,a5 as dt,o as p,g as H,K as gt,l as T,h as B,j,k as D,m as N,u,A as O,n as bt,G as pt,F as vt,N as W,p as yt,P as mt}from"./index.d15ac50b.js";import{u as kt,c as St}from"./index.4af098ab.js";const X=Symbol("buttonGroupContextKey"),xt=["default","primary","success","warning","info","danger","text",""],Mt=["button","submit","reset"],C=it({size:st,disabled:Boolean,type:{type:String,values:xt,default:""},icon:{type:P,default:""},nativeType:{type:String,values:Mt,default:"button"},loading:Boolean,loadingIcon:{type:P,default:()=>ot},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),wt={click:r=>r instanceof MouseEvent};function c(r,e){Bt(r)&&(r="100%");var t=At(r);return r=e===360?r:Math.min(e,Math.max(0,parseFloat(r))),t&&(r=parseInt(String(r*e),10)/100),Math.abs(r-e)<1e-6?1:(e===360?r=(r<0?r%e+e:r%e)/parseFloat(String(e)):r=r%e/parseFloat(String(e)),r)}function A(r){return Math.min(1,Math.max(0,r))}function Bt(r){return typeof r=="string"&&r.indexOf(".")!==-1&&parseFloat(r)===1}function At(r){return typeof r=="string"&&r.indexOf("%")!==-1}function Y(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function R(r){return r<=1?"".concat(Number(r)*100,"%"):r}function k(r){return r.length===1?"0"+r:String(r)}function Rt(r,e,t){return{r:c(r,255)*255,g:c(e,255)*255,b:c(t,255)*255}}function U(r,e,t){r=c(r,255),e=c(e,255),t=c(t,255);var a=Math.max(r,e,t),o=Math.min(r,e,t),n=0,s=0,i=(a+o)/2;if(a===o)s=0,n=0;else{var h=a-o;switch(s=i>.5?h/(2-a-o):h/(a+o),a){case r:n=(e-t)/h+(e<t?6:0);break;case e:n=(t-r)/h+2;break;case t:n=(r-e)/h+4;break}n/=6}return{h:n,s,l:i}}function F(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*(6*t):t<1/2?e:t<2/3?r+(e-r)*(2/3-t)*6:r}function Ht(r,e,t){var a,o,n;if(r=c(r,360),e=c(e,100),t=c(t,100),e===0)o=t,n=t,a=t;else{var s=t<.5?t*(1+e):t+e-t*e,i=2*t-s;a=F(i,s,r+1/3),o=F(i,s,r),n=F(i,s,r-1/3)}return{r:a*255,g:o*255,b:n*255}}function q(r,e,t){r=c(r,255),e=c(e,255),t=c(t,255);var a=Math.max(r,e,t),o=Math.min(r,e,t),n=0,s=a,i=a-o,h=a===0?0:i/a;if(a===o)n=0;else{switch(a){case r:n=(e-t)/i+(e<t?6:0);break;case e:n=(t-r)/i+2;break;case t:n=(r-e)/i+4;break}n/=6}return{h:n,s:h,v:s}}function Tt(r,e,t){r=c(r,360)*6,e=c(e,100),t=c(t,100);var a=Math.floor(r),o=r-a,n=t*(1-e),s=t*(1-o*e),i=t*(1-(1-o)*e),h=a%6,y=[t,s,n,n,i,t][h],S=[i,t,t,s,n,n][h],w=[n,n,i,t,t,s][h];return{r:y*255,g:S*255,b:w*255}}function K(r,e,t,a){var o=[k(Math.round(r).toString(16)),k(Math.round(e).toString(16)),k(Math.round(t).toString(16))];return a&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Nt(r,e,t,a,o){var n=[k(Math.round(r).toString(16)),k(Math.round(e).toString(16)),k(Math.round(t).toString(16)),k(Ft(a))];return o&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function Ft(r){return Math.round(parseFloat(r)*255).toString(16)}function L(r){return l(r)/255}function l(r){return parseInt(r,16)}function It(r){return{r:r>>16,g:(r&65280)>>8,b:r&255}}var _={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Et(r){var e={r:0,g:0,b:0},t=1,a=null,o=null,n=null,s=!1,i=!1;return typeof r=="string"&&(r=$t(r)),typeof r=="object"&&(g(r.r)&&g(r.g)&&g(r.b)?(e=Rt(r.r,r.g,r.b),s=!0,i=String(r.r).substr(-1)==="%"?"prgb":"rgb"):g(r.h)&&g(r.s)&&g(r.v)?(a=R(r.s),o=R(r.v),e=Tt(r.h,a,o),s=!0,i="hsv"):g(r.h)&&g(r.s)&&g(r.l)&&(a=R(r.s),n=R(r.l),e=Ht(r.h,a,n),s=!0,i="hsl"),Object.prototype.hasOwnProperty.call(r,"a")&&(t=r.a)),t=Y(t),{ok:s,format:r.format||i,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}var Ct="[-\\+]?\\d+%?",_t="[-\\+]?\\d*\\.\\d+%?",v="(?:".concat(_t,")|(?:").concat(Ct,")"),I="[\\s|\\(]+(".concat(v,")[,|\\s]+(").concat(v,")[,|\\s]+(").concat(v,")\\s*\\)?"),E="[\\s|\\(]+(".concat(v,")[,|\\s]+(").concat(v,")[,|\\s]+(").concat(v,")[,|\\s]+(").concat(v,")\\s*\\)?"),d={CSS_UNIT:new RegExp(v),rgb:new RegExp("rgb"+I),rgba:new RegExp("rgba"+E),hsl:new RegExp("hsl"+I),hsla:new RegExp("hsla"+E),hsv:new RegExp("hsv"+I),hsva:new RegExp("hsva"+E),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function $t(r){if(r=r.trim().toLowerCase(),r.length===0)return!1;var e=!1;if(_[r])r=_[r],e=!0;else if(r==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=d.rgb.exec(r);return t?{r:t[1],g:t[2],b:t[3]}:(t=d.rgba.exec(r),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=d.hsl.exec(r),t?{h:t[1],s:t[2],l:t[3]}:(t=d.hsla.exec(r),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=d.hsv.exec(r),t?{h:t[1],s:t[2],v:t[3]}:(t=d.hsva.exec(r),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=d.hex8.exec(r),t?{r:l(t[1]),g:l(t[2]),b:l(t[3]),a:L(t[4]),format:e?"name":"hex8"}:(t=d.hex6.exec(r),t?{r:l(t[1]),g:l(t[2]),b:l(t[3]),format:e?"name":"hex"}:(t=d.hex4.exec(r),t?{r:l(t[1]+t[1]),g:l(t[2]+t[2]),b:l(t[3]+t[3]),a:L(t[4]+t[4]),format:e?"name":"hex8"}:(t=d.hex3.exec(r),t?{r:l(t[1]+t[1]),g:l(t[2]+t[2]),b:l(t[3]+t[3]),format:e?"name":"hex"}:!1)))))))))}function g(r){return Boolean(d.CSS_UNIT.exec(String(r)))}var Vt=function(){function r(e,t){e===void 0&&(e=""),t===void 0&&(t={});var a;if(e instanceof r)return e;typeof e=="number"&&(e=It(e)),this.originalInput=e;var o=Et(e);this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(a=t.format)!==null&&a!==void 0?a:o.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return r.prototype.isDark=function(){return this.getBrightness()<128},r.prototype.isLight=function(){return!this.isDark()},r.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},r.prototype.getLuminance=function(){var e=this.toRgb(),t,a,o,n=e.r/255,s=e.g/255,i=e.b/255;return n<=.03928?t=n/12.92:t=Math.pow((n+.055)/1.055,2.4),s<=.03928?a=s/12.92:a=Math.pow((s+.055)/1.055,2.4),i<=.03928?o=i/12.92:o=Math.pow((i+.055)/1.055,2.4),.2126*t+.7152*a+.0722*o},r.prototype.getAlpha=function(){return this.a},r.prototype.setAlpha=function(e){return this.a=Y(e),this.roundA=Math.round(100*this.a)/100,this},r.prototype.toHsv=function(){var e=q(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},r.prototype.toHsvString=function(){var e=q(this.r,this.g,this.b),t=Math.round(e.h*360),a=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?"hsv(".concat(t,", ").concat(a,"%, ").concat(o,"%)"):"hsva(".concat(t,", ").concat(a,"%, ").concat(o,"%, ").concat(this.roundA,")")},r.prototype.toHsl=function(){var e=U(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},r.prototype.toHslString=function(){var e=U(this.r,this.g,this.b),t=Math.round(e.h*360),a=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?"hsl(".concat(t,", ").concat(a,"%, ").concat(o,"%)"):"hsla(".concat(t,", ").concat(a,"%, ").concat(o,"%, ").concat(this.roundA,")")},r.prototype.toHex=function(e){return e===void 0&&(e=!1),K(this.r,this.g,this.b,e)},r.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},r.prototype.toHex8=function(e){return e===void 0&&(e=!1),Nt(this.r,this.g,this.b,this.a,e)},r.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},r.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},r.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),a=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(t,", ").concat(a,")"):"rgba(".concat(e,", ").concat(t,", ").concat(a,", ").concat(this.roundA,")")},r.prototype.toPercentageRgb=function(){var e=function(t){return"".concat(Math.round(c(t,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},r.prototype.toPercentageRgbString=function(){var e=function(t){return Math.round(c(t,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},r.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+K(this.r,this.g,this.b,!1),t=0,a=Object.entries(_);t<a.length;t++){var o=a[t],n=o[0],s=o[1];if(e===s)return n}return!1},r.prototype.toString=function(e){var t=Boolean(e);e=e!=null?e:this.format;var a=!1,o=this.a<1&&this.a>=0,n=!t&&o&&(e.startsWith("hex")||e==="name");return n?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(a=this.toRgbString()),e==="prgb"&&(a=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(a=this.toHexString()),e==="hex3"&&(a=this.toHexString(!0)),e==="hex4"&&(a=this.toHex8String(!0)),e==="hex8"&&(a=this.toHex8String()),e==="name"&&(a=this.toName()),e==="hsl"&&(a=this.toHslString()),e==="hsv"&&(a=this.toHsvString()),a||this.toHexString())},r.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},r.prototype.clone=function(){return new r(this.toString())},r.prototype.lighten=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l+=e/100,t.l=A(t.l),new r(t)},r.prototype.brighten=function(e){e===void 0&&(e=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new r(t)},r.prototype.darken=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l-=e/100,t.l=A(t.l),new r(t)},r.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},r.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},r.prototype.desaturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s-=e/100,t.s=A(t.s),new r(t)},r.prototype.saturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s+=e/100,t.s=A(t.s),new r(t)},r.prototype.greyscale=function(){return this.desaturate(100)},r.prototype.spin=function(e){var t=this.toHsl(),a=(t.h+e)%360;return t.h=a<0?360+a:a,new r(t)},r.prototype.mix=function(e,t){t===void 0&&(t=50);var a=this.toRgb(),o=new r(e).toRgb(),n=t/100,s={r:(o.r-a.r)*n+a.r,g:(o.g-a.g)*n+a.g,b:(o.b-a.b)*n+a.b,a:(o.a-a.a)*n+a.a};return new r(s)},r.prototype.analogous=function(e,t){e===void 0&&(e=6),t===void 0&&(t=30);var a=this.toHsl(),o=360/t,n=[this];for(a.h=(a.h-(o*e>>1)+720)%360;--e;)a.h=(a.h+o)%360,n.push(new r(a));return n},r.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new r(e)},r.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var t=this.toHsv(),a=t.h,o=t.s,n=t.v,s=[],i=1/e;e--;)s.push(new r({h:a,s:o,v:n})),n=(n+i)%1;return s},r.prototype.splitcomplement=function(){var e=this.toHsl(),t=e.h;return[this,new r({h:(t+72)%360,s:e.s,l:e.l}),new r({h:(t+216)%360,s:e.s,l:e.l})]},r.prototype.onBackground=function(e){var t=this.toRgb(),a=new r(e).toRgb();return new r({r:a.r+(t.r-a.r)*t.a,g:a.g+(t.g-a.g)*t.a,b:a.b+(t.b-a.b)*t.a})},r.prototype.triad=function(){return this.polyad(3)},r.prototype.tetrad=function(){return this.polyad(4)},r.prototype.polyad=function(e){for(var t=this.toHsl(),a=t.h,o=[this],n=360/e,s=1;s<e;s++)o.push(new r({h:(a+s*n)%360,s:t.s,l:t.l}));return o},r.prototype.equals=function(e){return this.toRgbString()===new r(e).toRgbString()},r}();function b(r,e=20){return r.mix("#141414",e).toString()}function Gt(r){const e=Z(),t=$("button");return M(()=>{let a={};const o=r.color;if(o){const n=new Vt(o),s=r.dark?n.tint(20).toString():b(n,20);if(r.plain)a=t.cssVarBlock({"bg-color":r.dark?b(n,90):n.tint(90).toString(),"text-color":o,"border-color":r.dark?b(n,50):n.tint(50).toString(),"hover-text-color":`var(${t.cssVarName("color-white")})`,"hover-bg-color":o,"hover-border-color":o,"active-bg-color":s,"active-text-color":`var(${t.cssVarName("color-white")})`,"active-border-color":s}),e.value&&(a[t.cssVarBlockName("disabled-bg-color")]=r.dark?b(n,90):n.tint(90).toString(),a[t.cssVarBlockName("disabled-text-color")]=r.dark?b(n,50):n.tint(50).toString(),a[t.cssVarBlockName("disabled-border-color")]=r.dark?b(n,80):n.tint(80).toString());else{const i=r.dark?b(n,30):n.tint(30).toString(),h=n.isDark()?`var(${t.cssVarName("color-white")})`:`var(${t.cssVarName("color-black")})`;if(a=t.cssVarBlock({"bg-color":o,"text-color":h,"border-color":o,"hover-bg-color":i,"hover-text-color":h,"hover-border-color":i,"active-bg-color":s,"active-border-color":s}),e.value){const y=r.dark?b(n,50):n.tint(50).toString();a[t.cssVarBlockName("disabled-bg-color")]=y,a[t.cssVarBlockName("disabled-text-color")]=r.dark?"rgba(255, 255, 255, 0.5)":`var(${t.cssVarName("color-white")})`,a[t.cssVarBlockName("disabled-border-color")]=y}}}return a})}const Pt=["aria-disabled","disabled","autofocus","type"],zt={name:"ElButton"},jt=J({...zt,props:C,emits:wt,setup(r,{expose:e,emit:t}){const a=r,o=ft();kt({from:"type.text",replacement:"type.link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},M(()=>a.type==="text"));const n=ut(X,void 0),s=ht("button"),i=$("button"),{form:h}=St(),y=ct(M(()=>n==null?void 0:n.size)),S=Z(),w=lt(),V=M(()=>a.type||(n==null?void 0:n.type)||""),et=M(()=>{var f,m,x;return(x=(m=a.autoInsertSpace)!=null?m:(f=s.value)==null?void 0:f.autoInsertSpace)!=null?x:!1}),G=M(()=>{var f;const m=(f=o.default)==null?void 0:f.call(o);if(et.value&&(m==null?void 0:m.length)===1){const x=m[0];if((x==null?void 0:x.type)===dt){const nt=x.children;return/^\p{Unified_Ideograph}{2}$/u.test(nt.trim())}}return!1}),rt=Gt(a),at=f=>{a.nativeType==="reset"&&(h==null||h.resetFields()),t("click",f)};return e({ref:w,size:y,type:V,disabled:S,shouldAddSpace:G}),(f,m)=>(p(),H("button",{ref_key:"_ref",ref:w,class:N([u(i).b(),u(i).m(u(V)),u(i).m(u(y)),u(i).is("disabled",u(S)),u(i).is("loading",f.loading),u(i).is("plain",f.plain),u(i).is("round",f.round),u(i).is("circle",f.circle),u(i).is("text",f.text),u(i).is("link",f.link),u(i).is("has-bg",f.bg)]),"aria-disabled":u(S)||f.loading,disabled:u(S)||f.loading,autofocus:f.autofocus,type:f.nativeType,style:bt(u(rt)),onClick:at},[f.loading?(p(),H(gt,{key:0},[f.$slots.loading?T(f.$slots,"loading",{key:0}):(p(),B(u(z),{key:1,class:N(u(i).is("loading"))},{default:j(()=>[(p(),B(D(f.loadingIcon)))]),_:1},8,["class"]))],64)):f.icon||f.$slots.icon?(p(),B(u(z),{key:1},{default:j(()=>[f.icon?(p(),B(D(f.icon),{key:0})):T(f.$slots,"icon",{key:1})]),_:3})):O("v-if",!0),f.$slots.default?(p(),H("span",{key:2,class:N({[u(i).em("text","expand")]:u(G)})},[T(f.$slots,"default")],2)):O("v-if",!0)],14,Pt))}});var Dt=Q(jt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const Ot={size:C.size,type:C.type},Wt={name:"ElButtonGroup"},Ut=J({...Wt,props:Ot,setup(r){const e=r;pt(X,vt({size:W(e,"size"),type:W(e,"type")}));const t=$("button");return(a,o)=>(p(),H("div",{class:N(`${u(t).b("group")}`)},[T(a.$slots,"default")],2))}});var tt=Q(Ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const Qt=yt(Dt,{ButtonGroup:tt}),Zt=mt(tt);export{Qt as E,Vt as T,Zt as a};
