!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.audioPlayer=e():t.audioPlayer=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";function o(){}n.r(e),n.d(e,"initPlayer",(function(){return ft}));function r(t){return t()}function i(){return Object.create(null)}function l(t){t.forEach(r)}function a(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function h(){return m(" ")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.data!==e&&(t.data=e)}function y(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}new Set;let b;function x(t){b=t}function w(){if(!b)throw new Error("Function called outside component initialization");return b}const E=[],C=[],L=[],F=[],_=Promise.resolve();let k=!1;function q(){k||(k=!0,_.then(P))}function M(t){L.push(t)}let S=!1;const j=new Set;function P(){if(!S){S=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];x(e),T(e.$$)}for(E.length=0;C.length;)C.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];j.has(e)||(j.add(e),e())}L.length=0}while(E.length);for(;F.length;)F.pop()();k=!1,S=!1,j.clear()}}function T(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const O=new Set;let N;function B(){N={r:0,c:[],p:N}}function R(){N.r||l(N.c),N=N.p}function A(t,e){t&&t.i&&(O.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(O.has(t))return;O.add(t),N.c.push(()=>{O.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let V;function G(t){t&&t.c()}function H(t,e,n){const{fragment:o,on_mount:i,on_destroy:u,after_update:c}=t.$$;o&&o.m(e,n),M(()=>{const e=i.map(r).filter(a);u?u.push(...e):l(e),t.$$.on_mount=[]}),c.forEach(M)}function X(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e,n,r,a,u,c=[-1]){const s=b;x(t);const f=e.props||{},p=t.$$={fragment:null,ctx:null,props:u,update:o,not_equal:a,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:i(),dirty:c};let m=!1;if(p.ctx=n?n(t,f,(e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=r)&&(p.bound[e]&&p.bound[e](r),m&&function(t,e){-1===t.$$.dirty[0]&&(E.push(t),q(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],p.update(),m=!0,l(p.before_update),p.fragment=!!r&&r(p.ctx),e.target){if(e.hydrate){const t=(h=e.target,Array.from(h.childNodes));p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();e.intro&&A(t.$$.fragment),H(t,e.target,e.anchor),P()}var h;x(s)}"function"==typeof HTMLElement&&(V=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){X(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class U{$destroy(){X(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function D(t){let e,n,r,i,l;return{c(){e=p("svg"),n=p("title"),r=m("Play"),i=p("g"),l=p("polygon"),$(l,"id","Triangle"),$(l,"stroke","#FFFEFE"),$(l,"fill","#FFFEFE"),$(l,"transform","translate(25.000000, 20.000000) rotate(90.000000)\n      translate(-25.000000, -20.000000) "),$(l,"points","25 12 33 28 17 28"),$(i,"id","Video"),$(i,"stroke","none"),$(i,"fill","none"),$(e,"width","50px"),$(e,"height","40px"),$(e,"viewBox","0 0 50 40")},m(t,o){s(t,e,o),c(e,n),c(n,r),c(e,i),c(i,l)},p:o,i:o,o:o,d(t){t&&d(e)}}}var I=class extends U{constructor(t){super(),Z(this,t,null,D,u,{})}};function J(t){let e,n,r,i,l,a;return{c(){e=p("svg"),n=p("title"),r=m("Pause"),i=p("g"),l=p("rect"),a=p("rect"),$(l,"id","Rectangle"),$(l,"x","0"),$(l,"y","0"),$(l,"width","8"),$(l,"height","18"),$(a,"id","Rectangle"),$(a,"x","13"),$(a,"y","0"),$(a,"width","8"),$(a,"height","18"),$(i,"transform","translate(15.000000, 11.000000)"),$(i,"fill","#FFFEFE"),$(e,"width","50px"),$(e,"height","40px"),$(e,"viewBox","0 0 50 40")},m(t,o){s(t,e,o),c(e,n),c(n,r),c(e,i),c(i,l),c(i,a)},p:o,i:o,o:o,d(t){t&&d(e)}}}var K=class extends U{constructor(t){super(),Z(this,t,null,J,u,{})}};function Q(t){let e,n,r,i,l,a,u,f,h;return{c(){e=p("svg"),n=p("title"),r=m("Volume on"),i=p("g"),l=p("path"),a=p("g"),u=p("rect"),f=p("rect"),h=p("rect"),$(l,"d","M13.090717,11.1015971 L19,19 L-3,19 L2.90928303,11.1015971\n      C2.89837721,10.8961548 2.89285714,10.6636807 2.89285714,10.3974154\n      L2.89285714,6.8458278 C2.89285714,5.50854969 3.03209556,5.02362033\n      3.2935562,4.53473144 C3.55501684,4.04584256 3.9386997,3.66215969\n      4.42758859,3.40069906 C4.91647748,3.13923842 5.40140683,3 6.73868494,3\n      L9.26131506,3 C10.5985932,3 11.0835225,3.13923842 11.5724114,3.40069906\n      C12.0613003,3.66215969 12.4449832,4.04584256 12.7064438,4.53473144\n      C12.9679044,5.02362033 13.1071429,5.50854969 13.1071429,6.8458278\n      L13.1071429,10.3974154 C13.1071429,10.6636807 13.1016228,10.8961548\n      13.090717,11.1015971 Z"),$(l,"id","Combined-Shape"),$(l,"transform","translate(8.000000, 11.000000) scale(-1, 1) rotate(90.000000)\n      translate(-8.000000, -11.000000) "),$(u,"id","Rectangle"),$(u,"x","12"),$(u,"y","0"),$(u,"width","3"),$(u,"height","18"),$(f,"id","Rectangle"),$(f,"x","6"),$(f,"y","3"),$(f,"width","3"),$(f,"height","13"),$(h,"id","Rectangle"),$(h,"x","0"),$(h,"y","6"),$(h,"width","3"),$(h,"height","7"),$(a,"id","Group"),$(a,"transform","translate(19.000000, 2.000000)"),$(i,"id","Lautstärke-an"),$(i,"transform","translate(16.000000, 9.000000)"),$(i,"fill","#FFFEFE"),$(e,"width","65px"),$(e,"height","40px"),$(e,"viewBox","0 0 65 40")},m(t,o){s(t,e,o),c(e,n),c(n,r),c(e,i),c(i,l),c(i,a),c(a,u),c(a,f),c(a,h)},p:o,i:o,o:o,d(t){t&&d(e)}}}var W=class extends U{constructor(t){super(),Z(this,t,null,Q,u,{})}};function Y(t){let e,n,r,i,l,a,u,f;return{c(){e=p("svg"),n=p("title"),r=m("Volume off"),i=p("g"),l=p("path"),a=p("g"),u=p("rect"),f=p("rect"),$(l,"d","M13.090717,11.1015971 L19,19 L-3,19 L2.90928303,11.1015971\n      C2.89837721,10.8961548 2.89285714,10.6636807 2.89285714,10.3974154\n      L2.89285714,6.8458278 C2.89285714,5.50854969 3.03209556,5.02362033\n      3.2935562,4.53473144 C3.55501684,4.04584256 3.9386997,3.66215969\n      4.42758859,3.40069906 C4.91647748,3.13923842 5.40140683,3 6.73868494,3\n      L9.26131506,3 C10.5985932,3 11.0835225,3.13923842 11.5724114,3.40069906\n      C12.0613003,3.66215969 12.4449832,4.04584256 12.7064438,4.53473144\n      C12.9679044,5.02362033 13.1071429,5.50854969 13.1071429,6.8458278\n      L13.1071429,10.3974154 C13.1071429,10.6636807 13.1016228,10.8961548\n      13.090717,11.1015971 Z"),$(l,"id","Combined-Shape"),$(l,"transform","translate(8.000000, 11.000000) scale(-1, 1) rotate(90.000000)\n      translate(-8.000000, -11.000000) "),$(u,"id","Rectangle"),$(u,"x","6"),$(u,"y","0"),$(u,"width","3"),$(u,"height","15"),$(f,"id","Rectangle"),$(f,"x","0"),$(f,"y","6"),$(f,"width","15"),$(f,"height","3"),$(a,"id","Group"),$(a,"transform","translate(25.000000, 1.000000) rotate(45)"),$(i,"id","Lautstärke-an"),$(i,"transform","translate(16.000000, 9.000000)"),$(i,"fill","#FFFEFE"),$(e,"width","65px"),$(e,"height","40px"),$(e,"viewBox","0 0 65 40")},m(t,o){s(t,e,o),c(e,n),c(n,r),c(e,i),c(i,l),c(i,a),c(a,u),c(a,f)},p:o,i:o,o:o,d(t){t&&d(e)}}}var tt=class extends U{constructor(t){super(),Z(this,t,null,Y,u,{})}};n(0);function et(t){let e,n,r;return{c(){e=f("div"),n=f("span"),$(n,"class","marker svelte-1im1maz"),$(e,"class","audio-player-component-dragger svelte-1im1maz")},m(o,i,a){s(o,e,i),c(e,n),t[7](n),t[8](e),a&&l(r),r=[g(e,"mousedown",t[2]),g(e,"mousemove",t[3]),g(e,"touchstart",t[2]),g(e,"touchmove",t[2])]},p:o,i:o,o:o,d(n){n&&d(e),t[7](null),t[8](null),l(r)}}}function nt(t,e,n){const o=function(){const t=w();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=y(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}();let r,i,{value:l}=e,a=!1;function u(t){let e;if(a=!0,e="touches"in t?t.touches[0].clientX:t.clientX,i){const t=i.getBoundingClientRect();if(t&&e){const n=Math.max(0,Math.min((e-t.left)/t.width,1));o("change",n)}}}var c;return c=()=>{function t(){a=!1}document.body.addEventListener("mouseup",t),document.body.addEventListener("mouseleave",t)},w().$$.on_mount.push(c),t.$set=t=>{"value"in t&&n(4,l=t.value)},t.$$.update=()=>{if(17&t.$$.dirty){let t=Math.floor(100*l)+"%";r&&n(0,r.style.left=t,r)}},[r,i,u,function(t){a&&u(t)},l,a,o,function(t){C[t?"unshift":"push"](()=>{n(0,r=t)})},function(t){C[t?"unshift":"push"](()=>{n(1,i=t)})}]}var ot=class extends U{constructor(t){super(),Z(this,t,nt,et,u,{value:4})}};n(1);function rt(t){let e,n,r,i,l;const a=new I({});return{c(){e=f("button"),n=f("span"),n.textContent="Play",r=h(),G(a.$$.fragment),$(n,"class","svelte-116be7q"),$(e,"class","button-play svelte-116be7q")},m(o,u,d){s(o,e,u),c(e,n),c(e,r),H(a,e,null),i=!0,d&&l(),l=g(e,"click",t[7])},p:o,i(t){i||(A(a.$$.fragment,t),i=!0)},o(t){z(a.$$.fragment,t),i=!1},d(t){t&&d(e),X(a),l()}}}function it(t){let e,n,r,i,l;const a=new K({});return{c(){e=f("button"),n=f("span"),n.textContent="Pause",r=h(),G(a.$$.fragment),$(n,"class","svelte-116be7q"),$(e,"class","button-pause svelte-116be7q")},m(o,u,d){s(o,e,u),c(e,n),c(e,r),H(a,e,null),i=!0,d&&l(),l=g(e,"click",t[8])},p:o,i(t){i||(A(a.$$.fragment,t),i=!0)},o(t){z(a.$$.fragment,t),i=!1},d(t){t&&d(e),X(a),l()}}}function lt(t){let e,n,r,i,l;const a=new W({});return{c(){e=f("button"),n=f("span"),n.textContent="Mute",r=h(),G(a.$$.fragment),$(n,"class","svelte-116be7q"),$(e,"class","button-play svelte-116be7q")},m(o,u,d){s(o,e,u),c(e,n),c(e,r),H(a,e,null),i=!0,d&&l(),l=g(e,"click",t[9])},p:o,i(t){i||(A(a.$$.fragment,t),i=!0)},o(t){z(a.$$.fragment,t),i=!1},d(t){t&&d(e),X(a),l()}}}function at(t){let e,n,r,i,l;const a=new tt({});return{c(){e=f("button"),n=f("span"),n.textContent="Unmute",r=h(),G(a.$$.fragment),$(n,"class","svelte-116be7q"),$(e,"class","button-pause svelte-116be7q")},m(o,u,d){s(o,e,u),c(e,n),c(e,r),H(a,e,null),i=!0,d&&l(),l=g(e,"click",t[10])},p:o,i(t){i||(A(a.$$.fragment,t),i=!0)},o(t){z(a.$$.fragment,t),i=!1},d(t){t&&d(e),X(a),l()}}}function ut(t){let e,n,o,r,i,l,a,u,p,g,y,b,x,w,E,C,L,F=ct(t[1])+"",_=ct(t[2])+"";const k=[it,rt],q=[];function M(t,e){return t[0]?0:1}n=M(t),o=q[n]=k[n](t);const S=new ot({props:{value:t[3]}});S.$on("change",t[11]);const j=[at,lt],P=[];function T(t,e){return t[5]?0:1}b=T(t),x=P[b]=j[b](t);const O=new ot({props:{value:t[4]}});return O.$on("change",t[12]),{c(){var n;e=f("div"),o.c(),r=h(),i=f("div"),G(S.$$.fragment),l=h(),a=f("p"),u=m(F),p=m(" / "),g=m(_),y=h(),x.c(),w=h(),E=f("div"),G(O.$$.fragment),$(i,"class","timeline svelte-116be7q"),$(a,"class","svelte-116be7q"),$(E,"class","volume svelte-116be7q"),$(e,"class",(n=t[6],C=(null==n?"":n)+" svelte-116be7q"))},m(t,o){s(t,e,o),q[n].m(e,null),c(e,r),c(e,i),H(S,i,null),c(e,l),c(e,a),c(a,u),c(a,p),c(a,g),c(e,y),P[b].m(e,null),c(e,w),c(e,E),H(O,E,null),L=!0},p(t,[i]){let l=n;n=M(t),n===l?q[n].p(t,i):(B(),z(q[l],1,1,()=>{q[l]=null}),R(),o=q[n],o||(o=q[n]=k[n](t),o.c()),A(o,1),o.m(e,r));const a={};8&i&&(a.value=t[3]),S.$set(a),(!L||2&i)&&F!==(F=ct(t[1])+"")&&v(u,F),(!L||4&i)&&_!==(_=ct(t[2])+"")&&v(g,_);let c=b;b=T(t),b===c?P[b].p(t,i):(B(),z(P[c],1,1,()=>{P[c]=null}),R(),x=P[b],x||(x=P[b]=j[b](t),x.c()),A(x,1),x.m(e,w));const s={};16&i&&(s.value=t[4]),O.$set(s)},i(t){L||(A(o),A(S.$$.fragment,t),A(x),A(O.$$.fragment,t),L=!0)},o(t){z(o),z(S.$$.fragment,t),z(x),z(O.$$.fragment,t),L=!1},d(t){t&&d(e),q[n].d(),X(S),P[b].d(),X(O)}}}function ct(t){const e=Math.floor(t%60);return Math.floor(t/60)+":"+("0"+e).substr(-2)}function st(t,e,n){let{audioElement:o}=e;const r="";let i=!0,l=!1,a=[r,"audio-player-component"].filter(Boolean).join(" "),u=0,c=0,s=0,d=1,f=!1;function p(){n(2,c=isNaN(o.duration)?0:o.duration),c&&(i=!1)}function m(){n(0,l=!1),o.pause()}return console.log(o),o.style.display="none",o.readyState>=2&&p(),o.addEventListener("canplay",p),o.addEventListener("ended",(function(){m(),n(13,o.currentTime=0,o)})),o.addEventListener("timeupdate",(function(){n(1,u=o.currentTime)})),o.addEventListener("volumechange",(function(){n(4,d=o.volume)})),t.$set=t=>{"audioElement"in t&&n(13,o=t.audioElement)},t.$$.update=()=>{22&t.$$.dirty&&(c&&n(3,s=u/c),n(5,f=0===d))},[l,u,c,s,d,f,a,function(){i||(n(0,l=!0),o.play())},m,function(){n(13,o.volume=0,o)},function(){n(13,o.volume=1,o)},function(t){n(13,o.currentTime=t.detail*c,o)},function(t){n(13,o.volume=t.detail,o)},o,r]}var dt=class extends U{constructor(t){super(),Z(this,t,st,ut,u,{audioElement:13,className:14})}get className(){return this.$$.ctx[14]}};function ft({audioElement:t=null}={}){if(!(t&&t instanceof Audio))return void console.error("not a valid audio element",t);const e=t.parentNode,n=document.createElement("div");e.insertBefore(n,t),new dt({target:n,props:{audioElement:t}})}e.default=ft}])}));