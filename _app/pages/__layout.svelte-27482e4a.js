import{S as I,i as w,s as M,F as V,e as u,k as b,t as $,c as d,a as m,d as f,m as k,h as N,b as p,g as v,G as _,j as T,l as y,H as q,I as A,J as W,q as z,o as B,K as S,v as C}from"../chunks/vendor-ec61dc28.js";import{b as j}from"../chunks/paths-4b3c6e7e.js";import{l as F,t as G}from"../chunks/state-1ee9ee32.js";import{t as D,s as H}from"../chunks/theme-3cd23280.js";import"../chunks/preload-helper-1db36302.js";function E(n){let o,i,l,r,c,s=n[0].message+"",t;return{c(){o=u("div"),i=u("div"),l=u("div"),r=b(),c=u("div"),t=$(s),this.h()},l(e){o=d(e,"DIV",{class:!0});var a=m(o);i=d(a,"DIV",{class:!0});var h=m(i);l=d(h,"DIV",{class:!0}),m(l).forEach(f),r=k(h),c=d(h,"DIV",{});var g=m(c);t=N(g,s),g.forEach(f),h.forEach(f),a.forEach(f),this.h()},h(){p(l,"class","loader mx-auto svelte-1ub1m40"),p(i,"class","text-indigo-100 text-4xl font-bold my-auto"),p(o,"class","w-screen h-screen z-50 absolute left-0 top-0 bg-gray-600 opacity-50 flex align-middle justify-center")},m(e,a){v(e,o,a),_(o,i),_(i,l),_(i,r),_(i,c),_(c,t)},p(e,a){a&1&&s!==(s=e[0].message+"")&&T(t,s)},d(e){e&&f(o)}}}function J(n){let o,i,l,r;const c=n[2].default,s=V(c,n,n[1],null);let t=n[0].loading&&E(n);return{c(){o=u("main"),s&&s.c(),i=b(),t&&t.c(),l=y(),this.h()},l(e){o=d(e,"MAIN",{class:!0});var a=m(o);s&&s.l(a),a.forEach(f),i=k(e),t&&t.l(e),l=y(),this.h()},h(){p(o,"class","h-screen text-primary-content")},m(e,a){v(e,o,a),s&&s.m(o,null),v(e,i,a),t&&t.m(e,a),v(e,l,a),r=!0},p(e,[a]){s&&s.p&&(!r||a&2)&&q(s,c,e,e[1],r?W(c,e[1],a,null):A(e[1]),null),e[0].loading?t?t.p(e,a):(t=E(e),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},i(e){r||(z(s,e),r=!0)},o(e){B(s,e),r=!1},d(e){e&&f(o),s&&s.d(e),e&&f(i),t&&t.d(e),e&&f(l)}}}function K(n,o,i){let l,r;S(n,D,t=>i(3,l=t)),S(n,F,t=>i(0,r=t));let{$$slots:c={},$$scope:s}=o;return C(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(`${j}/service-worker.js`,{scope:`${j}/`}).then(function(e){console.log("Registration successful, scope is:",e.scope)}).catch(function(e){console.log("Service worker registration failed, error:",e)});const t=window.matchMedia("(prefers-color-scheme: dark)").matches;l.theme===void 0&&H(t?"dark":"light"),D.subscribe(({theme:e,isDark:a})=>{e&&(document.getElementsByTagName("html")[0].setAttribute("data-theme",e),G(a))})}),n.$$set=t=>{"$$scope"in t&&i(1,s=t.$$scope)},[r,s,c]}class Q extends I{constructor(o){super();w(this,o,K,J,M,{})}}export{Q as default};
