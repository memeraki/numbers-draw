(this["webpackJsonpnumbers-draw"]=this["webpackJsonpnumbers-draw"]||[]).push([[0],{170:function(e,t,n){},309:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),u=n(59),r=n.n(u),i=(n(170),n(54)),s=n(13),o=n(77),l=n(55),j=n(2),b={n0:"",n1:"",n2:"",n3:"",n4:"",n5:"",unique:[]};var d=function(e){var t=e.data,n=e.isUp,a=e.close,u=Object(c.useState)(null),r=Object(s.a)(u,2),i=r[0],d=r[1],h=Object(c.useState)(b),f=Object(s.a)(h,2),m=f[0],O=f[1],x=Object(c.useCallback)((function(e){27===e.keyCode&&a()}),[a]);Object(c.useEffect)((function(){return n&&document.addEventListener("keydown",x,!1),function(){document.removeEventListener("keydown",x,!1),O(b)}}),[x,n]),Object(c.useEffect)((function(){if(n){var e=0;t.forEach((function(t){g(t,m.unique)&&e++})),d(e)}}),[m.unique]);var p=function(e){e.target.value>49&&(e.target.value=49),e.target.value<1&&""!==e.target.value&&(e.target.value=1);var t=e.target,n=t.name,c=t.value;O(Object(l.a)(Object(l.a)({},m),{},Object(o.a)({},n,Number(c)>0?Number(c):"")))},v=function(e){var t=[],n=[];return e.forEach((function(e,c){t.includes(e)||""===e?n.push(c):t.push(e)})),{unique:t,duplicate:n}},g=function(e,t){return t.every((function(t){return e.includes(t)}))};return n?Object(j.jsx)("div",{className:"modal-backdrop",onClick:function(){a()},children:Object(j.jsxs)("div",{className:"modal-content",onClick:function(e){e.stopPropagation()},children:[Object(j.jsx)("button",{onClick:a,children:"Close"}),Object(j.jsx)("h1",{children:"Combinations"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=v(Object.values(m).slice(0,-1)),n=t.unique,c=t.duplicate,a={};n.length>=0&&(c.forEach((function(e){a["n"+e]=""})),O(Object(l.a)(Object(l.a)(Object(l.a)({},m),a),{},{unique:n})))},children:[Object(j.jsx)("input",{type:"number",value:m.n0,onChange:p,name:"n0",min:1,max:49}),Object(j.jsx)("input",{type:"number",value:m.n1,onChange:p,name:"n1",min:1,max:49}),Object(j.jsx)("input",{type:"number",value:m.n2,onChange:p,name:"n2",min:1,max:49}),Object(j.jsx)("input",{type:"number",value:m.n3,onChange:p,name:"n3",min:1,max:49}),Object(j.jsx)("input",{type:"number",value:m.n4,onChange:p,name:"n4",min:1,max:49}),Object(j.jsx)("input",{type:"number",value:m.n5,onChange:p,name:"n5",min:1,max:49}),Object(j.jsx)("button",{type:"submit",children:" Check "})]}),m.unique.length>0?Object(j.jsxs)("p",{children:["your number(s) have been drawn ",i," time(s)"]}):Object(j.jsxs)("p",{children:["there were ",t.length," draws"]})]})}):null},h=n(312),f=n(313),m=n(158),O=n(159),x=n(317),p=n(68),v=n(161),g=n(157);var k=function(e){var t=e.data,n=e.isUp,a=e.close,u=Object(c.useState)([]),r=Object(s.a)(u,2),o=r[0],l=r[1],b=Object(c.useState)([]),d=Object(s.a)(b,2),k=d[0],y=d[1],C=Object(c.useState)([]),E=Object(s.a)(C,2),w=E[0],N=E[1],S=Object(c.useState)(!1),q=Object(s.a)(S,2),A=q[0],L=q[1],D=["#1E90FF","#187DE9","#126AD2","#0C56BC","#0643A5","#00308F"],F=Object(c.useCallback)((function(e){27===e.keyCode&&a()}),[a]);Object(c.useEffect)((function(){return n&&(document.addEventListener("keydown",F,!1),l(t.flat())),function(){document.removeEventListener("keydown",F,!1)}}),[F,n]),Object(c.useEffect)((function(){if(n){y([]),N([]);for(var e=function(e){y((function(t){return[].concat(Object(i.a)(t),[{number:e,value:U(e)}])}))},t=1;t<50;t++)e(t)}}),[o]),Object(c.useEffect)((function(){n&&N(Object(i.a)(k).sort((function(e,t){return t.value-e.value})))}),[k]);var U=function(e){for(var t=0,n=0;n<o.length;n++)o[n]===e&&t++;return t},M=function(e){var t=e.active,n=e.payload,c=e.label;return t&&n&&n.length?Object(j.jsx)("div",{className:"custom-tooltip",children:Object(j.jsx)("p",{className:"label",children:"number ".concat(c," : ").concat(n[0].value)})}):null};return n?Object(j.jsx)("div",{className:"modal-backdrop",onClick:function(){a()},children:Object(j.jsxs)("div",{className:"modal-content",onClick:function(e){e.stopPropagation()},children:[Object(j.jsx)("button",{onClick:a,children:"Close"}),Object(j.jsx)("h1",{children:"Histogram"}),Object(j.jsx)("div",{className:"switch-container",children:Object(j.jsxs)("label",{className:"switch",children:[Object(j.jsx)("input",{type:"checkbox",onChange:function(e){L(!A)}}),Object(j.jsx)("div",{})]})}),Object(j.jsx)(h.a,{width:"100%",height:200,children:Object(j.jsxs)(f.a,{data:!1===A?k:w,children:[Object(j.jsx)(m.a,{dataKey:"number"}),Object(j.jsx)(O.a,{}),Object(j.jsx)(x.a,{strokeDasharray:"3 3"}),Object(j.jsx)(p.a,{content:Object(j.jsx)(M,{})}),Object(j.jsx)(v.a,{dataKey:"value",children:t.map((function(e,t){return Object(j.jsx)(g.a,{fill:D[t%6]},t)}))})]})}),Object(j.jsx)("p",{children:"..."})]})}):null};n(309);var y=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],u=Object(c.useState)([]),r=Object(s.a)(u,2),o=r[0],l=r[1],b=Object(c.useState)({same:[],sum:-1}),h=Object(s.a)(b,2),f=h[0],m=h[1],O=Object(c.useRef)(!1),x=Object(c.useState)(!1),p=Object(s.a)(x,2),v=p[0],g=p[1],y=Object(c.useState)(!1),C=Object(s.a)(y,2),E=C[0],w=C[1],N=Object(c.useState)([]),S=Object(s.a)(N,2),q=S[0],A=S[1];Object(c.useEffect)((function(){fetch("https://justcors.com/tl_bc01f9c/http://www.mbnet.com.pl/dl.txt").then((function(e){return e.text()})).then((function(e){A(e.split("\r\n").map((function(e){return e.split(/ |,/).slice(2).map((function(e){return Number(e)}))})))})).catch((function(e){A("error"),console.log(e)}))}),[]),Object(c.useEffect)((function(){F()}),[n]),Object(c.useEffect)((function(){O.current?o.length>0?m(M(n,o)):m({same:[],sum:-1}):O.current=!0}),[o]);var L=function(e){"histogram"===e.target.value?g(!v):w(!E)},D=function(e){var t;e.target.checked?n.length<6?function(e){a((function(t){return[].concat(Object(i.a)(t),[Number(e)])}))}(e.target.id):function(e){e.target.checked=!1}(e):(t=e.target.id,a((function(e){return Object(i.a)(e.filter((function(e){return e!==Number(t)})))})))},F=function(){Array.from(document.querySelectorAll("input[type=checkbox]")).forEach((function(e){e.checked||6!==n.length?e.disabled=!1:e.disabled=!0}))},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=0;do{t=Math.floor(49*Math.random()+1)}while(e.includes(t));return t},M=function(e,t){var n=[],c=0;return e.forEach((function(e){t.includes(e)&&(n.push(e),c++)})),{same:n,sum:c}};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"simple lotto simulator"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:L,value:"histogram",children:"histogram"}),Object(j.jsx)("button",{onClick:L,value:"combinations",children:"combinations"})]})]}),Object(j.jsxs)("main",{children:[Object(j.jsxs)("div",{className:"lotto-buttons",children:[6===n.length&&Object(j.jsx)("button",{onClick:function(){for(var e=[],t=0;t<6;t++)e.push(U(e));l(e)},children:"draw"}),Object(j.jsx)("button",{onClick:function(e){a([]),l([]),Array.from(document.querySelectorAll("input[type=checkbox]")).forEach((function(e){e.checked=!1}))},children:"clear"})]}),Object(j.jsx)("div",{className:"lotto-checkboxes",children:function(e){return e.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{name:e,type:"checkbox",id:e,onChange:D}),Object(j.jsx)("label",{htmlFor:e,children:e})]},e)}))}([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49])}),n.length>0&&Object(j.jsxs)("p",{children:["Yours: ",n.sort((function(e,t){return e-t})).map((function(e){return e+" "}))]}),o.length>0&&Object(j.jsxs)("p",{children:["Last drawn: ",o.sort((function(e,t){return e-t})).map((function(e){return e+" "}))]}),-1!==f.sum&&Object(j.jsxs)("div",{className:"results",children:[Object(j.jsxs)("p",{children:["you hit ",f.sum," numbers!"]}),f.sum>0&&Object(j.jsxs)("p",{children:["Same: ",f.same.sort((function(e,t){return e-t})).map((function(e){return e+" "}))]})]})]}),q.length>0&&Object(j.jsx)(k,{data:q,isUp:v,close:function(){g(!1)}}),q.length>0&&Object(j.jsx)(d,{data:q,isUp:E,close:function(){w(!1)}})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[310,1,2]]]);
//# sourceMappingURL=main.1b4b53aa.chunk.js.map