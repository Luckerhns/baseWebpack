!function(){"use strict";var n,r={3576:function(n,r,t){var e,o,u,i=t(5638);window.analytics=(e=0,o=!1,u=function(){return e++},i(document).on("click",u),{destroy:function(){i(document).off("click",u),o=!0},getClicks:function(){return o?"Analytics is destroyed. Total clicks = ".concat(e):e}})}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return r[n].call(u.exports,u,u.exports,e),u.exports}e.m=r,n=[],e.O=function(r,t,o,u){if(!t){var i=1/0;for(l=0;l<n.length;l++){t=n[l][0],o=n[l][1],u=n[l][2];for(var c=!0,f=0;f<t.length;f++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](t[f])}))?t.splice(f--,1):(c=!1,u<i&&(i=u));if(c){n.splice(l--,1);var a=o();void 0!==a&&(r=a)}}return r}u=u||0;for(var l=n.length;l>0&&n[l-1][2]>u;l--)n[l]=n[l-1];n[l]=[t,o,u]},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,{a:r}),r},e.d=function(n,r){for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},function(){var n={142:0};e.O.j=function(r){return 0===n[r]};var r=function(r,t){var o,u,i=t[0],c=t[1],f=t[2],a=0;if(i.some((function(r){return 0!==n[r]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(f)var l=f(e)}for(r&&r(t);a<i.length;a++)u=i[a],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(l)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var o=e.O(void 0,[638],(function(){return e(3576)}));o=e.O(o)}();
//# sourceMappingURL=analytics.js.map