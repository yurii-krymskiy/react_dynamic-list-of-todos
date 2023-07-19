(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1);c(10),c(11);function i(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var o;!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(o||(o={}));var d=c(3),r=c.n(d),j=c(0),u=function(e){var t=e.todos,c=e.onSelectTodo,s=e.selectedTodo,a=function(e){return function(t){c(t,e)}};return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":e.id===(null===s||void 0===s?void 0:s.id)}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:a(e),children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:r()("far",{"fa-eye":e.id!==(null===s||void 0===s?void 0:s.id),"fa-eye-slash":e.id===(null===s||void 0===s?void 0:s.id)})})})})})]},e.id)}))})]})},b=function(e){var t=e.query,c=e.handleInput,s=e.setFilterStatus;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){s(e.target.value)},children:[Object(j.jsx)("option",{value:o.ALL,children:"All"}),Object(j.jsx)("option",{value:o.ACTIVE,children:"Active"}),Object(j.jsx)("option",{value:o.COMPLETED,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")},"aria-label":"clear search"})})]})]})},h=(c(13),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.todo,c=e.onClose,s=Object(l.useState)(null),a=Object(n.a)(s,2),o=a[0],d=a[1],r=Object(l.useState)(!0),u=Object(n.a)(r,2),b=u[0],m=u[1];return Object(l.useEffect)((function(){var e;(e=t.userId,i("/users/".concat(e))).then((function(e){d(e)})).catch((function(e){throw new Error(e.message)})).finally((function(){return m(!1)}))}),[t.userId]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),b?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===o||void 0===o?void 0:o.email),children:null===o||void 0===o?void 0:o.name})]})]})]})]})},O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(null),d=Object(n.a)(a,2),r=d[0],O=d[1],x=Object(l.useState)(o.ALL),f=Object(n.a)(x,2),v=f[0],p=f[1],N=Object(l.useState)(""),y=Object(n.a)(N,2),g=y[0],C=y[1],w=Object(l.useState)(!0),E=Object(n.a)(w,2),L=E[0],k=E[1];Object(l.useEffect)((function(){i("/todos").then((function(e){s(e)})).catch((function(e){throw new Error(e.message)})).finally((function(){return k(!1)}))}),[]);var S=Object(l.useMemo)((function(){return c.filter((function(e){var t=g.toLowerCase().trim(),c=e.title.toLowerCase().trim().includes(t);switch(v){case o.ALL:return c;case o.ACTIVE:return c&&!e.completed;case o.COMPLETED:return c&&e.completed;default:throw new Error("Unknown status selector")}}))}),[c,g,v]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{query:g,handleInput:function(e){C(e)},setFilterStatus:p})}),Object(j.jsx)("div",{className:"block",children:L?Object(j.jsx)(h,{}):Object(j.jsx)(u,{todos:S,onSelectTodo:function(e,t){e.preventDefault(),O(t)},selectedTodo:r})})]})})}),r&&Object(j.jsx)(m,{todo:r,onClose:function(){O(null)}})]})};a.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.38bfa247.chunk.js.map