(this.webpackJsonpnotas=this.webpackJsonpnotas||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),i=n(2),l=n(0);function d(e){var t=e.setTokenOfSend,n=e.tokenOfSend,r=Object(c.useState)(!0),s=Object(i.a)(r,2),a=s[0],d=s[1],o=Object(c.useRef)(null),j=Object(c.useRef)(null);return Object(l.jsxs)("form",{className:"container w-75 mb-5 needs-validation",noValidate:!0,children:[Object(l.jsx)("h1",{className:"mb-5",children:"Add Task"}),Object(l.jsxs)("div",{className:"input-group mb-4",children:[Object(l.jsx)("span",{className:"input-group-text",children:"\ud83d\udca1"}),Object(l.jsx)("input",{ref:o,type:"text",className:"form-control",placeholder:"Task Name","aria-label":"name","aria-describedby":"basic-addon1",required:!0,maxLength:"60"})]}),Object(l.jsxs)("div",{className:"input-group mb-4",children:[Object(l.jsx)("span",{className:"input-group-text",children:"\ud83d\udcdd"}),Object(l.jsx)("input",{ref:j,type:"text",className:"form-control",placeholder:"Description","aria-label":"description","aria-describedby":"basic-addon2",required:!0,maxLength:"200"})]}),a?null:Object(l.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Complete the form"}),Object(l.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return function(){var e=o.current.value,c=j.current.value;if(""===e||""===c)d(!1);else{var r={id:localStorage.length+1,name:e,description:c};localStorage.setItem(r.id,JSON.stringify(r)),d(!0),t(!n)}}()},children:"Add Task"})]})}function o(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.id}),Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{children:e.description})]})})}function j(e){var t=e.items,n=e.setTokenOfSend,c=e.tokenOfSend;return Object(l.jsxs)("div",{className:"container w-75",children:[Object(l.jsxs)("table",{className:"table  table-hover mb-5",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Id"}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Description"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(o,{id:e.id,name:e.name,description:e.description},e.id)}))})]}),Object(l.jsx)("div",{className:"container d-flex justify-content-end",children:Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return localStorage.clear(),void n(!c)},children:"Delete All"})})]})}function b(){for(var e=[{id:"",name:"",description:""}],t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],s=n[1],a=1;a<=localStorage.length;a++){var o=JSON.parse(localStorage.getItem(a));e.push(o)}return Object(l.jsxs)("div",{className:"container-xl",children:[Object(l.jsx)(d,{setTokenOfSend:s,tokenOfSend:r}),Object(l.jsx)(j,{items:e,setTokenOfSend:s,tokenOfSend:r})]})}n(10);function u(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(b,{})})}a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.0acb47c2.chunk.js.map