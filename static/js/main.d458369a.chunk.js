(this.webpackJsonpnotas=this.webpackJsonpnotas||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),r=n.n(s),l=n(0);function i(){return Object(l.jsx)("nav",{className:"navbar fixed-bottom bg-light",children:Object(l.jsx)("div",{className:"container-sm d-flex justify-content-center",children:Object(l.jsxs)("a",{className:" nav-link d-flex align-items-center text-dark",href:"https://github.com/jarrisoncano",target:"_blank",children:[Object(l.jsx)("img",{className:"mr-2 rounded-circle align-top",src:"image.jpg",alt:"Jarrison Cano",width:"30"}),Object(l.jsx)("p",{className:"d-inline mb-0 fs-2",children:"Jarrison Cano"})]})})})}var o=n(2);function d(e){var t,n,c=e.setTokenOfSend,s=e.tokenOfSend,r=Object(a.useState)(!0),i=Object(o.a)(r,2),d=i[0],j=i[1],b=Object(a.useRef)(null),m=Object(a.useRef)(null);function u(){if(t=b.current,n=m.current,""===t.value)j(!1);else{for(var e=!0,a=1;a<=localStorage.length;a++){var r=JSON.parse(localStorage.getItem(a));t.value===r.name&&(e=!1)}!0===e?function(){var e={id:localStorage.length+1,name:t.value,description:n.value};localStorage.setItem(e.id,JSON.stringify(e)),t.value="",n.value="",j(!0),c(!s)}():j(!1)}}return Object(l.jsx)("div",{className:"container-sm",children:Object(l.jsxs)("form",{className:" mb-5 needs-validation",noValidate:!0,children:[Object(l.jsx)("h1",{className:"mb-5 mt-5",children:"Add Task"}),Object(l.jsxs)("div",{className:"input-group mb-4",children:[Object(l.jsx)("span",{className:"input-group-text",children:"\ud83d\udca1"}),Object(l.jsx)("input",{ref:b,type:"text",className:"form-control",placeholder:"Task Name","aria-label":"name","aria-describedby":"basic-addon1",required:!0,maxLength:"60"})]}),Object(l.jsxs)("div",{className:"input-group mb-4",children:[Object(l.jsx)("span",{className:"input-group-text",children:"\ud83d\udcdd"}),Object(l.jsx)("input",{ref:m,type:"text",className:"form-control",placeholder:"Description","aria-label":"description","aria-describedby":"basic-addon2",required:!0,maxLength:"200"})]}),d?null:Object(l.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Complete the form / Invalid task."}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return u()},children:"Add Task"})]})})}function j(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.description}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{className:"btn btn-success",onClick:function(){return e.deleteTask(e.id)},children:"\u2714"})})]})})}function b(e){return Object(l.jsxs)("div",{className:"container-sm mb-5",children:[Object(l.jsxs)("table",{className:"table  table-hover mb-5",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Description"}),Object(l.jsx)("th",{})]})}),Object(l.jsx)("tbody",{children:e.items.map((function(t){return Object(l.jsx)(j,{id:t.id,name:t.name,description:t.description,deleteTask:e.deleteTask},t.id)}))})]}),Object(l.jsx)("div",{className:"container d-flex justify-content-end",children:Object(l.jsx)("button",{className:"btn btn-danger mb-5",onClick:function(){return e.deleteAll()},children:"Delete All"})})]})}function m(){for(var e=[],t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=n[1],r=0;r<localStorage.length;r++){var i=localStorage.key(r),j=JSON.parse(localStorage.getItem(i));e.push(j)}return Object(l.jsxs)("div",{className:"container-xl",children:[Object(l.jsx)(d,{setTokenOfSend:s,tokenOfSend:c}),Object(l.jsx)(b,{items:e,deleteAll:function(){localStorage.clear(),s(!c)},deleteTask:function(e){localStorage.removeItem(e),s(!c)}})]})}n(10);function u(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(i,{})]})}r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.d458369a.chunk.js.map