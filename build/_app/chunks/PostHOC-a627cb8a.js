import{S as t,i as o,s,U as a,l as n,f as e,V as c,v as r,r as l,d as i,H as d,D as p,F as u,t as f,g as m}from"./vendor-ad960fc4.js";import{_ as b}from"./preload-helper-9f12a5fd.js";async function h(t){const o=await function(t){switch(t){case"../data/posts/box-shadow-button.svx":return b((()=>import("./box-shadow-button-bafa36dc.js")),["/_app/chunks/box-shadow-button-bafa36dc.js","/_app/chunks/vendor-ad960fc4.js"]);case"../data/posts/typography-guidlines.svx":return b((()=>import("./typography-guidlines-2df5d9d9.js")),["/_app/chunks/typography-guidlines-2df5d9d9.js","/_app/chunks/vendor-ad960fc4.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+t))}}(`../data/posts/${t}.svx`);return{content:o.default,title:o.metadata.title,tags:o.metadata.tags,id:t}}const $=t=>({post:1&t}),_=t=>({post:t[3]});function g(t){return{c:d,l:d,m:d,p:d,i:d,o:d,d:d}}function k(t){let o;const s=t[2].default,a=p(s,t,t[1],_);return{c(){a&&a.c()},l(t){a&&a.l(t)},m(t,s){a&&a.m(t,s),o=!0},p(t,n){a&&a.p&&(!o||3&n)&&u(a,s,t,t[1],n,$,_)},i(t){o||(r(a,t),o=!0)},o(t){l(a,t),o=!1},d(t){a&&a.d(t)}}}function x(t){let o;return{c(){o=f("Loading...")},l(t){o=m(t,"Loading...")},m(t,s){e(t,o,s)},p:d,i:d,o:d,d(t){t&&i(o)}}}function v(t){let o,s,d,p={ctx:t,current:null,token:null,hasCatch:!1,pending:x,then:k,catch:g,value:3,blocks:[,,,]};return a(s=h(t[0]),p),{c(){o=n(),p.block.c()},l(t){o=n(),p.block.l(t)},m(t,s){e(t,o,s),p.block.m(t,p.anchor=s),p.mount=()=>o.parentNode,p.anchor=o,d=!0},p(o,[n]){t=o,p.ctx=t,1&n&&s!==(s=h(t[0]))&&a(s,p)||c(p,t,n)},i(t){d||(r(p.block),d=!0)},o(t){for(let o=0;o<3;o+=1){const t=p.blocks[o];l(t)}d=!1},d(t){t&&i(o),p.block.d(t),p.token=null,p=null}}}function w(t,o,s){let{$$slots:a={},$$scope:n}=o,{postid:e}=o;return t.$$set=t=>{"postid"in t&&s(0,e=t.postid),"$$scope"in t&&s(1,n=t.$$scope)},[e,n,a]}class y extends t{constructor(t){super(),o(this,t,w,v,s,{postid:0})}}export{y as P};