import{_ as r,d as c,o as p,e as _,f as d,cP as l,j as f,k as m,r as u,a as o,bc as s,p as h,q as g}from"./index-df7e4a51.js";import"./el-scrollbar-1cd9d3fa.js";import{S as v}from"./index-aa17eed7.js";import{E as w}from"./index-344724fa.js";const S=c({components:{SvgIcon:v,Delete:l},setup(){f();const e=m(),t=u({loading:!1,form:{},nowTime:new Date,nowTime_1:new Date().getTime()});function a(){let n=e.params;n.sign&&(t.form={id:n.sign})}return a(),{dataContainer:t,initData:a}}}),C=e=>(h("data-v-96c9e38f"),e=e(),g(),e),D={class:"page-container main-view"},I={class:"container"},T=C(()=>o("h3",null," 数据详情页面 ",-1));function $(e,t,a,n,b,k){const i=w;return p(),_(i,{height:"100%"},{default:d(()=>[o("div",D,[o("div",I,[T,o("p",null," 当前加载时间："+s(e.dataContainer.nowTime),1),o("p",null," 当前加载时间戳："+s(e.dataContainer.nowTime_1),1),o("p",null," 数据唯一标识："+s(e.dataContainer.form.id),1)])])]),_:1})}const R=r(S,[["render",$],["__scopeId","data-v-96c9e38f"]]);export{R as default};
