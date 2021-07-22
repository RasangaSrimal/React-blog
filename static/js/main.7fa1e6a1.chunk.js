(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{17:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(9),i=n.n(a),s=(n(17),n(12)),o=n(2),l=(n(8),n(4)),u=n.n(l),d=n(7),j=n(10),b=n(11),f=function(){function t(){Object(j.a)(this,t)}return Object(b.a)(t,null,[{key:"UpdateArticle",value:function(){var t=Object(d.a)(u.a.mark((function t(e,n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts/".concat(e),{method:"PUT",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return c=t.sent,t.next=5,c.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"AddArticle",value:function(){var t=Object(d.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"DeleteArticle",value:function(t){return fetch("https://jsonplaceholder.typicode.com/posts/".concat(t),{method:"DELETE"})}}]),t}(),h=n(0);var p=function(t){return Object(h.jsx)("div",{"data-testid":"article",children:t.articles&&t.articles.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:e.title}),Object(h.jsx)("p",{children:e.body}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-1",children:Object(h.jsx)("button",{className:"btn btn-primary",onClick:function(){return function(e){t.editBtn(e)}(e)},children:"Update"})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("button",{onClick:function(){return function(e){f.DeleteArticle(e.id).then((function(){return t.deleteBtn(e)}))}(e)},className:"btn btn-danger",children:"Delete"})})]}),Object(h.jsx)("hr",{})]},e.id)}))})};var O=function(t){var e=Object(c.useState)(""),n=Object(o.a)(e,2),r=n[0],a=n[1],i=Object(c.useState)(""),s=Object(o.a)(i,2),l=s[0],u=s[1];return Object(c.useEffect)((function(){a(t.article.title),u(t.article.body)}),[t.article]),Object(h.jsx)("div",{children:t.article?Object(h.jsxs)("div",{"data-testid":"form",className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"title",placeholder:"Please enter the title",value:r,onChange:function(t){return a(t.target.value)}}),Object(h.jsx)("label",{htmlFor:"body",className:"form-label pt-3",children:"Description "}),Object(h.jsx)("textarea",{className:"form-control",id:"body",rows:"5",value:l,onChange:function(t){return u(t.target.value)}}),Object(h.jsx)("br",{}),t.article.id?Object(h.jsx)("button",{onClick:function(){f.UpdateArticle(t.article.id,{title:r,body:l}).then((function(e){return t.updatedInformation(e)}))},className:"btn btn-success",children:"Update Article"}):Object(h.jsx)("button",{onClick:function(){f.AddArticle({title:r,body:l}).then((function(e){return t.addedInformation(e)}))},className:"btn btn-success",children:"Add Article"})]}):null})};function m(){return Object(h.jsx)("div",{className:"top",children:Object(h.jsx)("h1",{children:"React Blog"})})}var x=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(null),i=Object(o.a)(a,2),l=i[0],u=i[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(t){return t.json()})).then((function(t){return r(t)})).catch((function(t){return console.log(t)}))}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{}),Object(h.jsxs)("div",{className:"body",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("button",{onClick:function(){u({title:"",body:""})},className:"btn btn-primary",children:"Add article"})}),Object(h.jsx)("hr",{}),l?Object(h.jsx)(O,{article:l,updatedInformation:function(t){var e=n.map((function(e){return e.id===t.id?t:e}));r(e)},addedInformation:function(t){var e=[t].concat(Object(s.a)(n));r(e)}}):null,Object(h.jsx)(p,{articles:n,editBtn:function(t){u(t)},deleteBtn:function(t){var e=n.filter((function(e){return e.id!==t.id}));r(e)}})]})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};n(20);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),v()},8:function(t,e,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.7fa1e6a1.chunk.js.map