import{aV as D,aK as F,a_ as O,o as P,c as R,b as S,f as v,m as i,bc as U,bl as $,bH as w,bx as y,a as u,F as K}from"./index-df7e4a51.js";import{i as z}from"./index-c13506ae.js";const G=u("br",null,null,-1),J=u("div",{id:"chart-container"},null,-1),X={__name:"test",setup(L){let T=D(""),s=0;const m=D(""),d=D("");let a=[{logDateTime:"2024-02-04 09:28:44,227",logDateTimea:0,StatisticsData:[{name:"whw",value:23},{name:"qqq",value:234}]},{logDateTime:"2024-02-04 10:28:44,227",logDateTimea:0,StatisticsData:[{name:"whw",value:34},{name:"qqq",value:88}]},{logDateTime:"2024-02-04 11:28:44,227",logDateTimea:0,StatisticsData:[{name:"whw",value:1},{name:"qqq",value:56}]},{logDateTime:"2024-02-04 12:28:44,227",logDateTimea:0,StatisticsData:[{name:"whw",value:56},{name:"qqq",value:32}]},{logDateTime:"2024-02-04 13:28:44,227",logDateTimea:0,StatisticsData:[{name:"whw",value:29},{name:"qqq",value:2}]}];const b=()=>{s>0&&(s--,l())},q=()=>{s<a[0].StatisticsData.length-1&&(s++,l())},l=()=>{const h=document.getElementById("chart-container"),n=z(h),t=new Date(m.value),e=new Date(d.value);T.value=a[0].StatisticsData[s].name;const M=t&&e&&!isNaN(t.getTime())&&!isNaN(e.getTime());let r;if(M){const o=(t.getMonth()+1).toString().padStart(2,"0"),g=t.getDate().toString().padStart(2,"0"),p=t.getHours().toString().padStart(2,"0"),V=t.getMinutes().toString().padStart(2,"0"),_=o+g+p+V+"00000";console.log("Start Time String:",_);const k=(e.getMonth()+1).toString().padStart(2,"0"),H=e.getDate().toString().padStart(2,"0"),B=e.getHours().toString().padStart(2,"0"),E=e.getMinutes().toString().padStart(2,"0"),x=k+H+B+E+"99999";console.log("End Time String:",x),a.forEach(c=>{c.logDateTimea=c.logDateTime.substring(5).replace(/\D/g,"")}),console.log(a[1].logDateTime,a[1].logDateTimea);let A=parseInt(_),j=parseInt(x);r=a.filter(c=>{const f=c.logDateTimea;return f>=A&&f<=j})}else r=a;const I=r.map(o=>o.logDateTime),C=r.map(o=>o.StatisticsData[s].value),N={xAxis:{type:"category",data:I},yAxis:{type:"value"},series:[{type:"line",smooth:!0,data:C}],tooltip:{trigger:"axis",formatter:o=>{const{name:g,value:p}=o[0];return`时间: ${g}<br/>取值: ${p}<br/>`}}};n.setOption(N),n.setOption({toolbox:{feature:{saveAsImage:{name:"chart",title:"保存图表",pixelRatio:2}}}})};return F(()=>{l()}),(h,n)=>{const t=O("n-button");return P(),R(K,null,[S(t,{class:"round-button",onClick:b},{default:v(()=>[i("＜")]),_:1}),i(" "+U($(T))+" ",1),S(t,{class:"round-button",onClick:q},{default:v(()=>[i("＞")]),_:1}),G,i(" 输入时间范围 "),w(u("input",{id:"start",type:"datetime-local","onUpdate:modelValue":n[0]||(n[0]=e=>m.value=e),style:{width:"200px"}},null,512),[[y,m.value]]),i(" — "),w(u("input",{id:"end",type:"datetime-local","onUpdate:modelValue":n[1]||(n[1]=e=>d.value=e),style:{width:"200px"}},null,512),[[y,d.value]]),S(t,{class:"pause-n-button",onClick:l},{default:v(()=>[i("更新图表")]),_:1}),J],64)}}};export{X as default};
