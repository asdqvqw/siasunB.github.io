import{_ as O,aV as l,o as p,c as g,a as u,b as c,f as d,cn as m,cj as s,l as k,E as w,F as j,aY as B,e as I,m as y,p as C,q as L}from"./index-df7e4a51.js";import"./el-tag-cac9c3fa.js";import{a as D,E as F}from"./el-select-546e2bfa.js";import"./el-scrollbar-1cd9d3fa.js";import"./el-popper-d7ccd5c0.js";import"./_Uint8Array-f4037249.js";import"./index-344724fa.js";import"./index-d321402d.js";import"./strings-76a06904.js";import"./debounce-8185d5a4.js";const h=r=>(C("data-v-ecbe0802"),r=r(),L(),r),U={class:"page-container main-view"},q={class:"table-box content-container page-content-box"},A={style:{display:"flex","align-items":"center"}},M=h(()=>u("br",null,null,-1)),P=h(()=>u("br",null,null,-1)),T={__name:"index",setup(r){const t=l(""),_=l(null),i=l(""),v=l(""),x=l(".json"),b=()=>{let a={data:x.value};m({method:"post",url:"/api/get/files",data:JSON.stringify(a)}).then(e=>{_.value=e.data}).catch(e=>{}).finally(()=>{}),t.value="",n.value=JSON.stringify(t.value,null,2)},S=()=>{let a={data:i.value,group:"siasun",account:"test",password:"123456"};m({method:"post",url:"/api/data/jsoneditor",data:JSON.stringify(a)}).then(e=>{s.success("请求成功"),t.value=e.data,n.value=JSON.stringify(t.value,null,2),v.value=i.value}).catch(e=>{s.error("请求失败")}).finally(()=>{})},n=l(JSON.stringify(t.value,null,2)),N=()=>{try{t.value=JSON.parse(n.value)}catch(e){s.error("json格式错误"),s.info(e.message)}let a={data:{file:v.value,value:t.value},group:"siasun",account:"test",password:"123456"};console.log(a),m({method:"post",url:"/api/ctrl/jsoneditor",data:JSON.stringify(a)}).then(e=>{s.success("提交成功")}).catch(e=>{s.error("提交失败")}).finally(()=>{})};return(a,e)=>{const V=F,J=D,f=k,E=w;return p(),g("div",U,[u("div",q,[u("div",A,[c(J,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=o=>i.value=o),style:{width:"70%","margin-right":"4%","margin-left":"2%","margin-top":"2%"},placeholder:"链接车体后选择文件..",onClick:b},{default:d(()=>[(p(!0),g(j,null,B(_.value,o=>(p(),I(V,{key:o.name,label:o.name,value:o.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),c(f,{onClick:S,type:"primary",style:{width:"15%","margin-top":"2%"}},{default:d(()=>[y("加载")]),_:1})]),M,c(E,{type:"textarea",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=o=>n.value=o),class:"custom-textarea"},null,8,["modelValue"]),P,c(f,{onClick:N,type:"primary",style:{"margin-top":"2%"}},{default:d(()=>[y("提交")]),_:1})])])}}},$=O(T,[["__scopeId","data-v-ecbe0802"]]);export{$ as default};
