import{r as b,_ as y,d as w,a_ as M,o as d,c as T,b as v,f as C,j as x,k as P,u as j,bg as f,Q as D,bB as O,G as B,e as L,b0 as I,K as $,ai as S,cg as k,ch as A,ci as N}from"./index-df7e4a51.js";const R={tagList:[],activeSign:"",setTagList(t){this.tagList=t||[]},setActiveSign(t){this.activeSign=t||""}},p=b(R);const E=w({name:"ScreenLayout",components:{},props:{},setup(){x();const t=P();let h=j();const s=b({tagList:f(p,"tagList"),activeSign:f(p,"activeSign"),hasSysMenuConfigObj:f(h,"hasSysMenuConfigObj")}),m=D(()=>s.tagList.filter(e=>e.isCache).map(e=>e.path)),o=new Map;function _(e,r){let i;if(!e)return;const a=r.path;o.has(a)?i=o.get(a):(i={name:a,render(){return S(e)}},o.set(a,i));let c=s.tagList.map(n=>n.path);return o.forEach((n,u)=>{c.includes(u)||o.delete(u)}),S(i)}function g(e){return s.hasSysMenuConfigObj[e.path]||s.hasSysMenuConfigObj[e.name]||{}}function l(){let e=k(s.tagList),r=s.activeSign;const i=g(t);let a={title:i.title,menuName:i.name,path:t.path,fullPath:t.fullPath,sign:A(),isCache:i.isCache,redirectPath:{name:"big-screen-redirect",params:{path:t.fullPath}}};if(!N.find(n=>n.name==t.name))return;let c=e.find(n=>n.path==a.path);if(c)r=c.sign,c.redirectPath=c.redirectPath||a.redirectPath;else{let n=e.findIndex(u=>u.sign==r);n!=-1?e.splice(n+1,0,a):e.push(a),r=a.sign}p.setTagList(e),p.setActiveSign(r)}return O(t,()=>{l()},{immediate:!0}),{formatComponentInstance:_,dataContainer:s,cacheTagList:m}}}),K={class:"big-screen-layout"};function G(t,h,s,m,o,_){const g=M("router-view");return d(),T("div",K,[v(g,null,{default:C(({Component:l,route:e})=>[v(B,{name:"el-fade-in"},{default:C(()=>[(d(),L($,{include:t.cacheTagList},[(d(),L(I(t.formatComponentInstance(l,e))))],1032,["include"]))]),_:2},1024)]),_:1})])}const U=y(E,[["render",G],["__scopeId","data-v-a0a1f378"]]);export{U as default};
