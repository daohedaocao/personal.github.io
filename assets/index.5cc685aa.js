import{E as d,t as m}from"./index.d15ac50b.js";var L={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function y(){return"icon-"+((1+Math.random())*4294967296|0).toString(16).substring(1)}function v(s,t,r){var e=typeof t.fill=="string"?[t.fill]:t.fill||[],o=[],i=t.theme||r.theme;switch(i){case"outline":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push("none"),o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push("none");break;case"filled":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push("#FFF"),o.push("#FFF");break;case"two-tone":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone),o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[1]=="string"?e[1]:r.colors.twoTone.twoTone);break;case"multi-color":o.push(typeof e[0]=="string"?e[0]:"currentColor"),o.push(typeof e[1]=="string"?e[1]:r.colors.multiColor.outFillColor),o.push(typeof e[2]=="string"?e[2]:r.colors.multiColor.innerStrokeColor),o.push(typeof e[3]=="string"?e[3]:r.colors.multiColor.innerFillColor);break}return{size:t.size||r.size,strokeWidth:t.strokeWidth||r.strokeWidth,strokeLinecap:t.strokeLinecap||r.strokeLinecap,strokeLinejoin:t.strokeLinejoin||r.strokeLinejoin,colors:o,id:s}}var g=Symbol("icon-context");function x(s,t,r){var e={name:"icon-"+s,props:["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","spin"],setup:function(i){var u=y(),n=d(g,L);return function(){var p=i.size,a=i.strokeWidth,h=i.strokeLinecap,c=i.strokeLinejoin,k=i.theme,f=i.fill,C=i.spin,F=v(u,{size:p,strokeWidth:a,strokeLinecap:h,strokeLinejoin:c,theme:k,fill:f},n),l=[n.prefix+"-icon"];return l.push(n.prefix+"-icon-"+s),t&&n.rtl&&l.push(n.prefix+"-icon-rtl"),C&&l.push(n.prefix+"-icon-spin"),m("span",{class:l.join(" ")},[r(F)])}}};return e}export{x as I};
