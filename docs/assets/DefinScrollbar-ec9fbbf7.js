import{_ as f,d as u,aV as d,r as h,bg as i,aE as m,o as p,e as _,f as w,aZ as S,c as v,aC as C,g as b,aB as g}from"./index-df7e4a51.js";import"./el-scrollbar-1cd9d3fa.js";import{E as B}from"./index-344724fa.js";function T({end:e=0,time:l=100,target:o}={}){o=o||document.documentElement||document.body;let a,n=+new Date,r=o.scrollTop||0,s=r-e;a=requestAnimationFrame(function t(){let c=l-Math.max(0,n-+new Date+l);o.scrollTop=c*-s/l+r,a=requestAnimationFrame(t),c==l&&cancelAnimationFrame(a)})}const U=u({props:{height:{type:String,default:"100%"},showUpBt:{type:Boolean,default:!1}},emits:["onScroll"],setup(e,{emit:l}){const o=d(null),a=h({height:i(e,"height"),showUpBt:i(e,"showUpBt"),show:!1}),n={top:0,left:0};m(()=>{g(()=>{o.value&&(o.value.setScrollTop(n.top),o.value.setScrollLeft(n.left))})});function r(t){t=t||{},t.scrollTop>40&&t.scrollTop>n.top?a.show=!0:a.show=!1,n.top=t.scrollTop||0,n.left=t.scrollLeft||0,l("onScroll",t)}function s(){o.value&&T({target:o.value.wrapRef})}return{dataContainer:a,ElScrollbarRef:o,handleScroll:r,handleUp:s}}});function E(e,l,o,a,n,r){const s=B;return p(),_(s,{ref:"ElScrollbarRef",onScroll:e.handleScroll,"wrap-class":"defin-scrollbar",height:e.dataContainer.height},{default:w(()=>[S(e.$slots,"default",{},void 0,!0),e.dataContainer.showUpBt?(p(),v("div",{key:0,onClick:l[0]||(l[0]=(...t)=>e.handleUp&&e.handleUp(...t)),class:C({"scrollbar-up-bt":!0,show:e.dataContainer.show})}," UP ",2)):b("",!0)]),_:3},8,["onScroll","height"])}const $=f(U,[["render",E],["__scopeId","data-v-34245621"]]);export{$ as _};
