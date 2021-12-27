var Y=Object.defineProperty,q=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var P=(t,a,r)=>a in t?Y(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,m=(t,a)=>{for(var r in a||(a={}))Q.call(a,r)&&P(t,r,a[r]);if(H)for(var r of H(a))Z.call(a,r)&&P(t,r,a[r]);return t},w=(t,a)=>q(t,K(a));import{s as f,S as ee,u as A,a as T,j as e,F as te,b as ae,L as $,c as l,d as re,e as z,f as ne,g as d,r as u,B as _,h as oe,i as ie,k as se,T as I,l as M,m as B,n as le,o as D,p as L,q as g,t as J,v as V,w as ce,x as W,y as de,z as he,A as pe,C as ue,R as O,D as U,E as me,G as fe,H as ge,I as ye,J as ve,K as be,M as xe,N as ke,O as Se,P as we,Q as C,U as Ce,V as _e,W as Ne,X as Re,Y as Ee,Z as Ae,_ as Te,$ as $e,a0 as Me}from"./vendor.1b250ecc.js";const Be=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))h(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&h(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};Be();const De=t=>a=>{console.log("switchTheme: ",t),a({type:"SWITCH_THEME",payload:{darkMode:t}})},Le=f(ee)(({theme:t})=>({width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`},"& + .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:t.palette.mode==="dark"?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`}},"& .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be",borderRadius:20/2}})),je=f("header")(({theme:t})=>({position:"absolute",top:0,right:"10px"}));function He(){const t=A(r=>r.app),a=T();return e(je,{children:e(te,{children:e(ae,{control:e(Le,{sx:{m:1},checked:t.darkMode,onClick:()=>a(De(!t.darkMode))}),label:""})})})}const Pe=f("aside")(({theme:t})=>({backgroundImage:`linear-gradient(to bottom, ${t.palette.primary.main} 0%, ${t.palette.primary.dark} 100%)`})),ze=f("nav")(({theme:t})=>({color:t.palette.text.secondary})),j=f("li")(({theme:t})=>({})),Ie=f("hr")(({theme:t})=>({border:`1px solid ${t.palette.divider.secondary}`})),N=f($)(({theme:t})=>({display:"block",padding:"0.5rem 1rem",textDecoration:"none",color:t.palette.text.secondary,transition:"all 0.1s ease-in-out",textAlign:"left","&:hover":{backgroundColor:t.palette.primary.light,color:t.palette.text.secondary,fontWeight:"bold"}}));function Je(){return l(Pe,{className:"sideNavigation",children:[e($,{to:"/",children:e(re,{sx:{color:"text.secondary",fontSize:"4rem"}})}),e(Ie,{}),e(ze,{className:"sideNavigation__nav",children:l("ul",{className:"sideNavigation__list",children:[e(j,{children:e(N,{to:"/create",className:"sideNavigation__link",children:"Make Job"})}),e(j,{children:e(N,{to:"/upload",className:"sideNavigation__link",children:"Upload"})}),l(j,{children:[e(N,{to:"/jobs",className:"sideNavigation__link",children:"Jobs"}),e(N,{to:"/plot-playground",className:"sideNavigation__link",children:"Plot Playground"})]})]})})]})}function Ve(){return l(z,{children:[e(He,{}),e(Je,{})]})}function x({children:t,shouldHover:a=!0,styles:r={width:"fit-content",height:"fit-content"}}){const h=ne();let o=a?{"&:hover":{backgroundColor:h.palette.background.dark}}:{};const n=f("div")(({theme:i})=>m(m({borderRadius:"0.5rem",margin:"0.5rem",padding:"1rem",backgroundColor:i.palette.background.light,transition:"all .2s ease-in-out","@media (max-width: 768px)":{width:"100%"}},o),r));return e(n,{children:t})}d.name.findName();function We(){return e("div",{className:"main-container",children:l("div",{className:"wrapper-container",children:[e(x,{styles:{width:"32%"},children:e("div",{children:e("h1",{children:"This app is a data driven NLP platform to understand your customer better"})})}),e(x,{styles:{width:"32%"},children:e("div",{children:"test"})}),e(x,{styles:{width:"32%"},children:e("div",{children:"test"})}),e(x,{styles:{width:"32%"},children:e("div",{children:"test"})})]})})}const Oe=t=>a=>{console.log("type: SET_ACTIVE_JOB_CREATE_STEP"),console.log(t),a({type:"SET_ACTIVE_JOB_CREATE_STEP",payload:{activeJobCreateStep:t}})},Ue=t=>a=>{a({type:"CHANGE_CURRENT_SMALL_BAR_CHART_VALUE",payload:{value:t}})};function Fe({children:t,steps:a}){const[r,h]=u.exports.useState(0),[o,n]=u.exports.useState(new Set),i=T();u.exports.useEffect(()=>{i(Oe(r))},[r]);const k=p=>o.has(p),y=()=>{let p=o;k(r)&&(p=new Set(p.values()),p.delete(r)),h(c=>c+1),n(p)},v=()=>{h(p=>p-1)},b=()=>{h(0)};return l(_,{sx:{width:"100%",height:"80%"},children:[e(oe,{activeStep:r,children:a.map((p,c)=>{const s={},S={};return k(c)&&(s.completed=!1),e(ie,w(m({},s),{children:e(se,w(m({},S),{children:p}))}),p)})}),t,r===a.length?l(u.exports.Fragment,{children:[e(I,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),l(_,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e(_,{sx:{flex:"1 1 auto"}}),e(M,{onClick:b,children:"Reset"})]})]}):l(u.exports.Fragment,{children:[l(I,{sx:{mt:2,mb:1},children:["Step ",r+1]}),l(_,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e(M,{color:"inherit",disabled:r===0,onClick:v,sx:{mr:1},children:"Back"}),e(_,{sx:{flex:"1 1 auto"}}),e(M,{onClick:y,children:r===a.length-1?"Finish":"Next"})]})]})]})}const F=()=>T(),R=A;function G({data:t,chartId:a,options:r}){const h=u.exports.useRef(null),{chartHeight:o,chartWidth:n,chartMargin:i}=r,k=B(),y=le().domain(D(t.length)).range([i.left,n-i.right]).padding(.1),v=L().domain([0,100]).range([o-i.bottom,i.top]),b=c=>{c.attr("transform",`translate(0,${o-i.bottom})`).call(J(y).tickFormat(s=>t[s].name)).attr("font-size","20px")},p=c=>{c.attr("transform",`translate(${i.left},0)`).call(V(v).ticks(null,t.format)).attr("font-size","20px")};return u.exports.useEffect(()=>{g(`#${a}`).remove();const c=g(h.current).append("svg").attr("id",`${a}`).attr("width",n-i.left-i.right).attr("height",o-i.top-i.bottom).attr("viewBox",`0 0 ${n} ${o}`);c.append("g").attr("fill",k.palette.primary.main).selectAll("rect").data(t).join("rect").attr("class","bar-chart__bar").attr("x",(s,S)=>y(S)).attr("y",s=>v(s.value)).attr("height",s=>v(0)-v(s.value)).attr("width",y.bandwidth()).attr("fill-opacity",.2).attr("stroke",k.palette.primary.main).attr("stroke-width","2px").on("mouseover",(s,S)=>{console.log(s,S),g(s.srcElement).attr("fill-opacity",.8)}).on("mouseout",(s,S)=>{console.log(s,S),g(s.srcElement).attr("fill-opacity",.3)}),c.append("g").call(b),c.append("g").call(p)}),e("div",{ref:h})}const Ge=[{name:"Simon",value:50},{name:"John",value:80},{name:"Dave",value:100},{name:"Tim",value:60},{name:"Ti",value:80},{name:"Mark",value:40}],Xe={chartWidth:800,chartHeight:400,chartMargin:{top:20,right:20,bottom:30,left:40}};function Ye(){return R(t=>t.app),l("div",{className:"main-container",children:[e("h1",{children:"Some Data"}),e(x,{styles:{width:"fit-content"},shouldHover:!1,children:e(G,{data:Ge,options:Xe})})]})}function qe(){return e("div",{children:"DateRange"})}function Ke(){return e("div",{children:"Summary Job"})}function Qe(){F();const t=R(a=>a.job);return e("div",{className:"main-container",children:e(Fe,{steps:["Choose Data","Set Date Range","Summary&Create"],children:l("div",{className:"stepper-inner-container",children:[t.activeJobCreateStep===0&&e(Ye,{}),t.activeJobCreateStep===1&&e(qe,{}),t.activeJobCreateStep===2&&e(Ke,{})]})})})}function Ze(){return e("div",{className:"main-container",children:"Upload"})}function et(){const t=R(r=>r.job);f(ce)(({theme:r})=>({backgroundColor:r.palette.background.default}));const a=f($)(({theme:r})=>({color:"unset",textDecoration:"none",width:"100%",display:"block"}));return e("div",{className:"main-container",children:e("div",{className:"wrapper-container",children:t.jobs?t.jobs.map(r=>e(a,{to:`/job/${r.id}`,children:e(x,{shouldHover:!0,styles:{width:"100%"},children:l("div",{className:"job-list__container",children:[l("h1",{className:"job-list__title",children:["#",r.id," ",r.title]}),e("p",{className:"job-list__paragraph",children:r.descriptionShort}),e("p",{className:"job-list__paragraph",children:r.author}),e("div",{className:"job-list__date",children:new Date(r.creationDate).toLocaleDateString()}),e("div",{className:"job-list__status",children:r.status})]})})},r.id)):null})})}const tt=W({palette:{mode:"dark",primary:de,secondary:he,background:{default:"#222222",light:"#303030",dark:"#101010"},text:{primary:"#ffffff",secondary:"#000000"},divider:{primary:"#ffffff",secondary:"#000000"}}}),at=W({palette:{mode:"light",primary:pe,secondary:ue,background:{default:"#e4f0e2",light:"#effced",dark:"#c2cfc0"},text:{primary:"#000000",secondary:"#ffffff"},divider:{primary:"#000000",secondary:"#ffffff"}}});function rt(){const{id:t}=me(),a=U("div")(({theme:r})=>({display:"flex",justifyContent:"flex-end","& .bar-chart__bar":{borderRadius:"5px 5px 0 0",backgroundColor:r.palette.primary.main,backgroundImage:`linear-gradient(to bottom, ${r.palette.primary.main} 0%, ${r.palette.primary.dark} 100%)`,margin:"5px"}}));return l("div",{className:"main-container",children:[l("h1",{children:["Job Details ",t]}),e(x,{shouldHover:!1,styles:{width:"20%"},children:l("div",{className:"small-bar-chart",children:[e("div",{className:"flex-container",children:e(nt,{})}),e(a,{children:e(ot,{})})]})})]})}function nt(){const t=fe(),a=R(r=>r.job);return u.exports.useEffect(()=>{},[a.smallBarChart.currentValue]),e("div",{style:{backgroundImage:`linear-gradient(to bottom, ${t.palette.primary.main} 0%, ${t.palette.primary.dark} 100%)`},className:"small-bar-chart__number",children:a.smallBarChart.currentValue?a.smallBarChart.currentValue:0})}const ot=O.memo(()=>{const t=u.exports.useRef(null),[a,r]=u.exports.useState([3,2,3,10,5,2,7,1,9,8]),h=F();U("div")(({theme:n})=>({display:"flex",justifyContent:"flex-end","& .bar-chart__bar":{borderRadius:"5px 5px 0 0",backgroundColor:n.palette.primary.main,backgroundImage:`linear-gradient(to bottom, ${n.palette.primary.main} 0%, ${n.palette.primary.dark} 100%)`,margin:"5px"}}));const o=n=>{h(Ue(n))};return u.exports.useEffect(()=>{g(t.current).selectAll("div").data(a).enter().append("div").style("width",n=>5+"px").style("height",n=>n*10+"px").attr("class","bar-chart__bar").on("mouseover",(n,i)=>o(i))}),e("div",{ref:t,className:"bar-chart"})});function it({data:t,chartId:a,options:r}){const h=u.exports.useRef(null),{chartHeight:o,chartWidth:n,chartMargin:i}=r,k=B(),y=L().domain([0,600]).range([i.left,n-i.right]),v=L().domain([0,150]).range([o-i.bottom,i.top]);return u.exports.useEffect(()=>{g(`#${a}`).remove();const b=g(h.current).append("svg").attr("id",a).attr("width",n-i.left-i.right).attr("height",o-i.top-i.bottom).attr("viewBox",`0 0 ${n} ${o}`),p=ge().curve(ye).x((c,s)=>(console.log(c.x),y(c.x))).y(c=>v(c.y));b.append("path").attr("d",p(t)).attr("stroke",k.palette.primary.main).attr("fill","none").attr("stroke-width","2px"),b.append("g").attr("transform",`translate(0,${o-i.bottom})`).call(J(y).tickValues(D(0,601,100))).attr("font-size","20px"),b.append("g").attr("transform",`translate(${i.left},0)`).call(V(v).tickValues(D(0,151,50))).attr("font-size","20px")}),e("div",{ref:h})}function st({data:t,chartId:a,options:r}){const h=u.exports.useRef(null),{chartHeight:o,chartWidth:n,chartMargin:i}=r;B();const k=Math.min(n,o)/2-i,y=ve().range(be),b=xe().value(function(c){return c[1]})(Object.entries(t)),p=ke().innerRadius(100).outerRadius(k);return u.exports.useEffect(()=>{g(`#${a}`).remove();const c=g(h.current).append("svg").attr("id",a).attr("width",n-i-i).attr("height",o-i-i).attr("viewBox",`0 0 ${n} ${o}`).append("g").attr("transform","translate("+n/2+","+o/2+")");c.selectAll("mySlices").data(b).join("path").attr("d",p).attr("fill",function(s){return y(s.data[0])}).attr("stroke","black").style("stroke-width","2px").attr("fill-opacity",.3).on("mouseover",function(s,S){g(s.srcElement).attr("fill-opacity",.8)}).on("mouseout",function(s,S){g(s.srcElement).attr("fill-opacity",.3)}),c.selectAll("mySlices").data(b).join("text").text(function(s){return s.data[0]}).attr("transform",function(s){return`translate(${p.centroid(s)})`}).style("text-anchor","middle").style("font-size",17)}),e("div",{ref:h})}const lt=[{x:0,y:0},{x:150,y:150},{x:300,y:100},{x:450,y:20},{x:600,y:130}],ct=[{name:"Simon",value:50},{name:"John",value:80},{name:"Dave",value:100},{name:"Tim",value:60},{name:"Ti",value:80},{name:"Mark",value:40}],dt={python:20,javascript:30,c:10,cpp:40,java:50},X={chartWidth:800,chartHeight:400,chartMargin:{top:20,right:20,bottom:30,left:40}},ht={chartWidth:800,chartHeight:400,chartMargin:20};function pt(){return l("div",{className:"main-container",children:[l(x,{shouldHover:!1,children:[e("h1",{children:"Simple  PieChart"}),e(st,{chartId:"pieChart",data:dt,options:ht})]}),l(x,{shouldHover:!1,children:[e("h1",{children:"Simple LineChart"}),e(it,{chartId:"lineChart",data:lt,options:X})]}),l(x,{shouldHover:!1,children:[e("h1",{children:"Simple BarChart"}),e(G,{chartId:"arChart1",data:ct,options:X})]})]})}const ut=f("div")(({theme:t})=>({backgroundColor:t.palette.background.default,minHeight:"100vh",color:t.palette.text.primary}));function mt(){const t=A(a=>a.app);return e(Se,{theme:t.darkMode?tt:at,children:l(ut,{children:[e(Ve,{}),l(we,{children:[e(C,{path:"/",element:e(We,{})}),e(C,{path:"/create",element:e(Qe,{})}),e(C,{path:"/upload",element:e(Ze,{})}),e(C,{path:"/jobs",element:e(et,{})}),e(C,{path:"/job/:id",element:e(rt,{})}),e(C,{path:"/plot-playground",element:e(pt,{})})]})]})})}function ft(t={ready:!1},a){switch(console.log("type: "+a.type),a.type){case"APP_READY":return m(w(m({},t),{ready:!0,darkMode:!0}),a.payload);case"SWITCH_THEME":return m(m({},t),a.payload);default:return t}}const gt=[{id:1,title:d.lorem.word(),author:d.name.firstName(),creationDate:d.date.past(),status:"pending",descriptionShort:d.lorem.sentence()},{id:2,title:d.lorem.word(),author:d.name.firstName(),creationDate:d.date.past(),status:"pending",descriptionShort:d.lorem.sentence()},{id:3,title:d.lorem.word(),author:d.name.firstName(),creationDate:d.date.past(),status:"pending",descriptionShort:d.lorem.sentence()},{id:4,title:d.lorem.word(),author:d.name.firstName(),creationDate:d.date.past(),status:"pending",descriptionShort:d.lorem.sentence()},{id:6,title:d.lorem.word(),author:d.name.firstName(),creationDate:d.date.past(),status:"pending",descriptionShort:d.lorem.sentence()}];function yt(t={jobs:[...gt],activeJobCreateStep:0,smallBarChart:{}},a){switch(console.log("type: "+a.type),a.type){case"SET_ACTIVE_JOB_CREATE_STEP":return m(m({},t),a.payload);case"CHANGE_CURRENT_SMALL_BAR_CHART_VALUE":return w(m({},t),{smallBarChart:w(m({},t.smallBarChart),{currentValue:a.payload.value})});default:return t}}const vt=Ce({app:ft,job:yt}),bt=[Re],E=_e(vt,Ne(...bt)),xt=()=>{E.dispatch({type:"APP_READY",payload:{ready:!0}})};xt();console.log("store: ",E.getState());Ee.render(e(O.StrictMode,{children:e(Ae,{children:e(Te,{store:E,children:E.getState().app.ready?l(z,{children:[e($e,{}),e(mt,{})]}):e("div",{className:"loader",children:e(Me,{})})})})}),document.getElementById("root"));