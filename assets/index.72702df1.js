var Y=Object.defineProperty,q=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var H=(t,a,r)=>a in t?Y(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,p=(t,a)=>{for(var r in a||(a={}))Q.call(a,r)&&H(t,r,a[r]);if($)for(var r of $(a))Z.call(a,r)&&H(t,r,a[r]);return t},k=(t,a)=>q(t,K(a));import{s as u,S as ee,u as E,a as T,j as e,F as te,b as ae,L as A,c as s,d as re,e as P,f as ne,g as l,r as m,B as C,h as oe,i as ie,k as se,T as j,l as B,m as z,n as le,o as M,p as D,q as x,t as I,v as J,w as ce,x as V,y as de,z as he,A as pe,C as me,R as U,D as W,E as ue,G as fe,H as ge,I as ye,J as be,K as ve,M as S,N as xe,O as ke,P as Se,Q as we,U as Ce,V as _e,W as Ne,X as Re,Y as Ee}from"./vendor.0b188cd9.js";const Te=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};Te();const Ae=t=>a=>{console.log("switchTheme: ",t),a({type:"SWITCH_THEME",payload:{darkMode:t}})},Be=u(ee)(({theme:t})=>({width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`},"& + .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:t.palette.mode==="dark"?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`}},"& .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be",borderRadius:20/2}})),Me=u("header")(({theme:t})=>({position:"absolute",top:0,right:"10px"}));function De(){const t=E(r=>r.app),a=T();return e(Me,{children:e(te,{children:e(ae,{control:e(Be,{sx:{m:1},checked:t.darkMode,onClick:()=>a(Ae(!t.darkMode))}),label:""})})})}const Le=u("aside")(({theme:t})=>({backgroundImage:`linear-gradient(to bottom, ${t.palette.primary.main} 0%, ${t.palette.primary.dark} 100%)`})),$e=u("nav")(({theme:t})=>({color:t.palette.text.secondary})),L=u("li")(({theme:t})=>({})),He=u("hr")(({theme:t})=>({border:`1px solid ${t.palette.divider.secondary}`})),_=u(A)(({theme:t})=>({display:"block",padding:"0.5rem 1rem",textDecoration:"none",color:t.palette.text.secondary,transition:"all 0.1s ease-in-out",textAlign:"left","&:hover":{backgroundColor:t.palette.primary.light,color:t.palette.text.secondary,fontWeight:"bold"}}));function Pe(){return s(Le,{className:"sideNavigation",children:[e(A,{to:"/",children:e(re,{sx:{color:"text.secondary",fontSize:"4rem"}})}),e(He,{}),e($e,{className:"sideNavigation__nav",children:s("ul",{className:"sideNavigation__list",children:[e(L,{children:e(_,{to:"/create",className:"sideNavigation__link",children:"Make Job"})}),e(L,{children:e(_,{to:"/upload",className:"sideNavigation__link",children:"Upload"})}),s(L,{children:[e(_,{to:"/jobs",className:"sideNavigation__link",children:"Jobs"}),e(_,{to:"/plot-playground",className:"sideNavigation__link",children:"Plot Playground"})]})]})})]})}function je(){return s(P,{children:[e(De,{}),e(Pe,{})]})}function y({children:t,shouldHover:a=!0,styles:r={width:"fit-content",height:"fit-content"}}){const c=ne();let o=a?{"&:hover":{backgroundColor:c.palette.background.dark}}:{};const n=u("div")(({theme:h})=>p(p({borderRadius:"0.5rem",margin:"0.5rem",padding:"1rem",backgroundColor:h.palette.background.light,transition:"all .2s ease-in-out","@media (max-width: 768px)":{width:"100%"}},o),r));return e(n,{children:t})}l.name.findName();function ze(){return e("div",{className:"main-container",children:s("div",{className:"wrapper-container",children:[e(y,{styles:{width:"32%"},children:e("div",{children:e("h1",{children:"This app is a data driven NLP platform to understand your customer better"})})}),e(y,{styles:{width:"32%"},children:e("div",{children:"test"})}),e(y,{styles:{width:"32%"},children:e("div",{children:"test"})}),e(y,{styles:{width:"32%"},children:e("div",{children:"test"})})]})})}const Ie=t=>a=>{console.log("type: SET_ACTIVE_JOB_CREATE_STEP"),console.log(t),a({type:"SET_ACTIVE_JOB_CREATE_STEP",payload:{activeJobCreateStep:t}})},Je=t=>a=>{a({type:"CHANGE_CURRENT_SMALL_BAR_CHART_VALUE",payload:{value:t}})};function Ve({children:t,steps:a}){const[r,c]=m.exports.useState(0),[o,n]=m.exports.useState(new Set),h=T();m.exports.useEffect(()=>{h(Ie(r))},[r]);const f=i=>o.has(i),g=()=>{let i=o;f(r)&&(i=new Set(i.values()),i.delete(r)),c(d=>d+1),n(i)},v=()=>{c(i=>i-1)},w=()=>{c(0)};return s(C,{sx:{width:"100%",height:"80%"},children:[e(oe,{activeStep:r,children:a.map((i,d)=>{const b={},X={};return f(d)&&(b.completed=!1),e(ie,k(p({},b),{children:e(se,k(p({},X),{children:i}))}),i)})}),t,r===a.length?s(m.exports.Fragment,{children:[e(j,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),s(C,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e(C,{sx:{flex:"1 1 auto"}}),e(B,{onClick:w,children:"Reset"})]})]}):s(m.exports.Fragment,{children:[s(j,{sx:{mt:2,mb:1},children:["Step ",r+1]}),s(C,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e(B,{color:"inherit",disabled:r===0,onClick:v,sx:{mr:1},children:"Back"}),e(C,{sx:{flex:"1 1 auto"}}),e(B,{onClick:g,children:r===a.length-1?"Finish":"Next"})]})]})]})}const F=()=>T(),N=E;function O({data:t,options:a}){const r=m.exports.useRef(null),{chartHeight:c,chartWidth:o,chartMargin:n}=a,h=z(),f=le().domain(M(t.length)).range([n.left,o-n.right]).padding(.1),g=D().domain([0,100]).range([c-n.bottom,n.top]),v=i=>{i.attr("transform",`translate(0,${c-n.bottom})`).call(I(f).tickFormat(d=>t[d].name)).attr("font-size","20px")},w=i=>{i.attr("transform",`translate(${n.left},0)`).call(J(g).ticks(null,t.format)).attr("font-size","20px")};return m.exports.useEffect(()=>{x("#barChart").remove();const i=x(r.current).append("svg").attr("id","barChart").attr("width",o-n.left-n.right).attr("height",c-n.top-n.bottom).attr("viewBox",`0 0 ${o} ${c}`);i.append("g").attr("fill",h.palette.primary.main).selectAll("rect").data(t).join("rect").attr("class","bar-chart__bar").attr("x",(d,b)=>f(b)).attr("y",d=>g(d.value)).attr("height",d=>g(0)-g(d.value)).attr("width",f.bandwidth()).attr("fill-opacity",.2).attr("stroke",h.palette.primary.main).attr("stroke-width","2px").on("mouseover",(d,b)=>{console.log(d,b),x(d.srcElement).attr("fill-opacity",.8)}).on("mouseout",(d,b)=>{console.log(d,b),x(d.srcElement).attr("fill-opacity",.3)}),i.append("g").call(v),i.append("g").call(w)}),e("div",{ref:r})}const Ue=[{name:"Simon",value:50},{name:"John",value:80},{name:"Dave",value:100},{name:"Tim",value:60},{name:"Ti",value:80},{name:"Mark",value:40}],We={chartWidth:800,chartHeight:400,chartMargin:{top:20,right:20,bottom:30,left:40}};function Fe(){return N(t=>t.app),s("div",{className:"main-container",children:[e("h1",{children:"Some Data"}),e(y,{styles:{width:"fit-content"},shouldHover:!1,children:e(O,{data:Ue,options:We})})]})}function Oe(){return e("div",{children:"DateRange"})}function Ge(){return e("div",{children:"Summary Job"})}function Xe(){F();const t=N(a=>a.job);return e("div",{className:"main-container",children:e(Ve,{steps:["Choose Data","Set Date Range","Summary&Create"],children:s("div",{className:"stepper-inner-container",children:[t.activeJobCreateStep===0&&e(Fe,{}),t.activeJobCreateStep===1&&e(Oe,{}),t.activeJobCreateStep===2&&e(Ge,{})]})})})}function Ye(){return e("div",{className:"main-container",children:"Upload"})}function qe(){const t=N(r=>r.job);u(ce)(({theme:r})=>({backgroundColor:r.palette.background.default}));const a=u(A)(({theme:r})=>({color:"unset",textDecoration:"none",width:"100%",display:"block"}));return e("div",{className:"main-container",children:e("div",{className:"wrapper-container",children:t.jobs?t.jobs.map(r=>e(a,{to:`/job/${r.id}`,children:e(y,{shouldHover:!0,styles:{width:"100%"},children:s("div",{className:"job-list__container",children:[s("h1",{className:"job-list__title",children:["#",r.id," ",r.title]}),e("p",{className:"job-list__paragraph",children:r.descriptionShort}),e("p",{className:"job-list__paragraph",children:r.author}),e("div",{className:"job-list__date",children:new Date(r.creationDate).toLocaleDateString()}),e("div",{className:"job-list__status",children:r.status})]})})},r.id)):null})})}const Ke=V({palette:{mode:"dark",primary:de,secondary:he,background:{default:"#222222",light:"#303030",dark:"#101010"},text:{primary:"#ffffff",secondary:"#000000"},divider:{primary:"#ffffff",secondary:"#000000"}}}),Qe=V({palette:{mode:"light",primary:pe,secondary:me,background:{default:"#e4f0e2",light:"#effced",dark:"#c2cfc0"},text:{primary:"#000000",secondary:"#ffffff"},divider:{primary:"#000000",secondary:"#ffffff"}}});function Ze(){const{id:t}=ue(),a=W("div")(({theme:r})=>({display:"flex",justifyContent:"flex-end","& .bar-chart__bar":{borderRadius:"5px 5px 0 0",backgroundColor:r.palette.primary.main,backgroundImage:`linear-gradient(to bottom, ${r.palette.primary.main} 0%, ${r.palette.primary.dark} 100%)`,margin:"5px"}}));return s("div",{className:"main-container",children:[s("h1",{children:["Job Details ",t]}),e(y,{shouldHover:!1,styles:{width:"20%"},children:s("div",{className:"small-bar-chart",children:[e("div",{className:"flex-container",children:e(et,{})}),e(a,{children:e(tt,{})})]})})]})}function et(){const t=fe(),a=N(r=>r.job);return m.exports.useEffect(()=>{},[a.smallBarChart.currentValue]),e("div",{style:{backgroundImage:`linear-gradient(to bottom, ${t.palette.primary.main} 0%, ${t.palette.primary.dark} 100%)`},className:"small-bar-chart__number",children:a.smallBarChart.currentValue?a.smallBarChart.currentValue:0})}const tt=U.memo(()=>{const t=m.exports.useRef(null),[a,r]=m.exports.useState([3,2,3,10,5,2,7,1,9,8]),c=F();W("div")(({theme:n})=>({display:"flex",justifyContent:"flex-end","& .bar-chart__bar":{borderRadius:"5px 5px 0 0",backgroundColor:n.palette.primary.main,backgroundImage:`linear-gradient(to bottom, ${n.palette.primary.main} 0%, ${n.palette.primary.dark} 100%)`,margin:"5px"}}));const o=n=>{c(Je(n))};return m.exports.useEffect(()=>{x(t.current).selectAll("div").data(a).enter().append("div").style("width",n=>5+"px").style("height",n=>n*10+"px").attr("class","bar-chart__bar").on("mouseover",(n,h)=>o(h))}),e("div",{ref:t,className:"bar-chart"})});function at({data:t,options:a}){const r=m.exports.useRef(null),{chartHeight:c,chartWidth:o,chartMargin:n}=a,h=z(),f=D().domain([0,600]).range([n.left,o-n.right]),g=D().domain([0,150]).range([c-n.bottom,n.top]);return m.exports.useEffect(()=>{x("#lineChart").remove();const v=x(r.current).append("svg").attr("id","lineChart").attr("width",o-n.left-n.right).attr("height",c-n.top-n.bottom).attr("viewBox",`0 0 ${o} ${c}`),w=ge().curve(ye).x((i,d)=>(console.log(i.x),f(i.x))).y(i=>g(i.y));v.append("path").attr("d",w(t)).attr("stroke",h.palette.primary.main).attr("fill","none").attr("stroke-width","2px"),v.append("g").attr("transform",`translate(0,${c-n.bottom})`).call(I(f).tickValues(M(0,601,100))).attr("font-size","20px"),v.append("g").attr("transform",`translate(${n.left},0)`).call(J(g).tickValues(M(0,151,50))).attr("font-size","20px")}),e("div",{ref:r})}const rt=[{x:0,y:0},{x:150,y:150},{x:300,y:100},{x:450,y:20},{x:600,y:130}],G={chartWidth:800,chartHeight:400,chartMargin:{top:20,right:20,bottom:30,left:40}},nt=[{name:"Simon",value:50},{name:"John",value:80},{name:"Dave",value:100},{name:"Tim",value:60},{name:"Ti",value:80},{name:"Mark",value:40}];function ot(){return s("div",{className:"main-container",children:[s(y,{shouldHover:!1,children:[e("h1",{children:"Simple Line Chart"}),e(at,{data:rt,options:G})]}),s(y,{shouldHover:!1,children:[e("h1",{children:"Simple Line BarChart"}),e(O,{data:nt,options:G})]})]})}const it=u("div")(({theme:t})=>({backgroundColor:t.palette.background.default,minHeight:"100vh",color:t.palette.text.primary}));function st(){const t=E(a=>a.app);return e(be,{theme:t.darkMode?Ke:Qe,children:s(it,{children:[e(je,{}),s(ve,{children:[e(S,{path:"/",element:e(ze,{})}),e(S,{path:"/create",element:e(Xe,{})}),e(S,{path:"/upload",element:e(Ye,{})}),e(S,{path:"/jobs",element:e(qe,{})}),e(S,{path:"/job/:id",element:e(Ze,{})}),e(S,{path:"/plot-playground",element:e(ot,{})})]})]})})}function lt(t={ready:!1},a){switch(console.log("type: "+a.type),a.type){case"APP_READY":return p(k(p({},t),{ready:!0,darkMode:!0}),a.payload);case"SWITCH_THEME":return p(p({},t),a.payload);default:return t}}const ct=[{id:1,title:l.lorem.word(),author:l.name.firstName(),creationDate:l.date.past(),status:"pending",descriptionShort:l.lorem.sentence()},{id:2,title:l.lorem.word(),author:l.name.firstName(),creationDate:l.date.past(),status:"pending",descriptionShort:l.lorem.sentence()},{id:3,title:l.lorem.word(),author:l.name.firstName(),creationDate:l.date.past(),status:"pending",descriptionShort:l.lorem.sentence()},{id:4,title:l.lorem.word(),author:l.name.firstName(),creationDate:l.date.past(),status:"pending",descriptionShort:l.lorem.sentence()},{id:6,title:l.lorem.word(),author:l.name.firstName(),creationDate:l.date.past(),status:"pending",descriptionShort:l.lorem.sentence()}];function dt(t={jobs:[...ct],activeJobCreateStep:0,smallBarChart:{}},a){switch(console.log("type: "+a.type),a.type){case"SET_ACTIVE_JOB_CREATE_STEP":return p(p({},t),a.payload);case"CHANGE_CURRENT_SMALL_BAR_CHART_VALUE":return k(p({},t),{smallBarChart:k(p({},t.smallBarChart),{currentValue:a.payload.value})});default:return t}}const ht=xe({app:lt,job:dt}),pt=[we],R=ke(ht,Se(...pt)),mt=()=>{R.dispatch({type:"APP_READY",payload:{ready:!0}})};mt();console.log("store: ",R.getState());Ce.render(e(U.StrictMode,{children:e(_e,{children:e(Ne,{store:R,children:R.getState().app.ready?s(P,{children:[e(Re,{}),e(st,{})]}):e("div",{className:"loader",children:e(Ee,{})})})})}),document.getElementById("root"));