import{S as w,i as M,s as V,F as $,e as u,k as E,t as j,c as d,a as _,d as f,m as I,h as N,b as h,g as v,G as m,j as T,l as b,H as q,I as A,J as W,q as z,o as B,K as k,v as C}from"../chunks/vendor-4f17f806.js";import{b as y}from"../chunks/paths-4b3c6e7e.js";import{l as F,t as G}from"../chunks/state-ad2d99d9.js";import{t as S,s as H}from"../chunks/theme-cdf18b87.js";import"../chunks/preload-helper-e4860ae8.js";function D(n){let o,i,l,r,c,s=n[0].message+"",t;return{c(){o=u("div"),i=u("div"),l=u("div"),r=E(),c=u("div"),t=j(s),this.h()},l(e){o=d(e,"DIV",{class:!0});var a=_(o);i=d(a,"DIV",{class:!0});var p=_(i);l=d(p,"DIV",{class:!0}),_(l).forEach(f),r=I(p),c=d(p,"DIV",{});var g=_(c);t=N(g,s),g.forEach(f),p.forEach(f),a.forEach(f),this.h()},h(){h(l,"class","loader mx-auto svelte-1ub1m40"),h(i,"class","text-indigo-100 text-4xl font-bold my-auto"),h(o,"class","w-screen h-screen z-50 absolute left-0 top-0 bg-gray-600 opacity-50 flex align-middle justify-center")},m(e,a){v(e,o,a),m(o,i),m(i,l),m(i,r),m(i,c),m(c,t)},p(e,a){a&1&&s!==(s=e[0].message+"")&&T(t,s)},d(e){e&&f(o)}}}function J(n){let o,i,l,r;const c=n[2].default,s=$(c,n,n[1],null);let t=n[0].loading&&D(n);return{c(){o=u("main"),s&&s.c(),i=E(),t&&t.c(),l=b(),this.h()},l(e){o=d(e,"MAIN",{class:!0});var a=_(o);s&&s.l(a),a.forEach(f),i=I(e),t&&t.l(e),l=b(),this.h()},h(){h(o,"class","h-screen text-primary-content")},m(e,a){v(e,o,a),s&&s.m(o,null),v(e,i,a),t&&t.m(e,a),v(e,l,a),r=!0},p(e,[a]){s&&s.p&&(!r||a&2)&&q(s,c,e,e[1],r?W(c,e[1],a,null):A(e[1]),null),e[0].loading?t?t.p(e,a):(t=D(e),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},i(e){r||(z(s,e),r=!0)},o(e){B(s,e),r=!1},d(e){e&&f(o),s&&s.d(e),e&&f(i),t&&t.d(e),e&&f(l)}}}function K(n,o,i){let l,r;k(n,S,t=>i(3,l=t)),k(n,F,t=>i(0,r=t));let{$$slots:c={},$$scope:s}=o;return C(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(`${y}/service-worker.js`,{scope:`${y}/`}).then(function(e){console.log("Registration successful, scope is:",e.scope)}).catch(function(e){console.log("Service worker registration failed, error:",e)});const t=window.matchMedia("(prefers-color-scheme: dark)").matches;l.theme===void 0&&H(t?"dark":"light"),S.subscribe(({theme:e,isDark:a})=>{e&&(document.getElementsByTagName("html")[0].setAttribute("data-theme",e),G(a))})}),n.$$set=t=>{"$$scope"in t&&i(1,s=t.$$scope)},[r,s,c]}class Q extends w{constructor(o){super();M(this,o,K,J,V,{})}}export{Q as default};
