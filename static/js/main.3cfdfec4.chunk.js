(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{62:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(11),u=n.n(a),o=n(9),i=n(19),s=n(4),l=n(31),d=n.n(l),b=n(6),p=n(8),f=n(5),j=n.n(f),O=n(10),h=n(16),x=n(17),m=n.n(x);function v(){return g.apply(this,arguments)}function g(){return(g=Object(O.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(O.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return C.apply(this,arguments)}function C(){return(C=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("/contacts/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.a.defaults.baseURL="https://611560258f38520017a3849b.mockapi.io/api/v1";var A,z,F,L,Z,B=function(e){return h.b.error("".concat(e))},J=Object(s.c)("users/fetchContacts",function(){var e=Object(O.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,v();case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),B(e.t0.message),e.abrupt("return",r(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),S=Object(s.c)("contacts/add",function(){var e=Object(O.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,a="Contact ".concat(t.name," added"),h.b.success("".concat(a)),e.next=5,y(t);case 5:return c=e.sent,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),B(e.t0.message),e.abrupt("return",r(e.t0));case 13:case"end":return e.stop()}var a}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),T=Object(s.c)("contacts/delete",function(){var e=Object(O.a)(j.a.mark((function e(t,n){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,k(t);case 4:return c=e.sent,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(1),B(e.t0.message),e.abrupt("return",r(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),q=Object(s.b)("contacts/changeFilter"),M={changeFilter:q},P=Object(s.d)([],(A={},Object(b.a)(A,J.fulfilled,(function(e,t){return t.payload})),Object(b.a)(A,S.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(i.a)(e),[n])})),Object(b.a)(A,T.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),A)),V=Object(s.d)(!1,(z={},Object(b.a)(z,J.pending,(function(){return!0})),Object(b.a)(z,J.fulfilled,(function(){return!1})),Object(b.a)(z,J.rejected,(function(){return!1})),z)),W=Object(s.d)(null,(F={},Object(b.a)(F,J.rejected,(function(e,t){return t.payload})),Object(b.a)(F,J.pending,(function(){return null})),Object(b.a)(F,S.rejected,(function(e,t){return t.payload})),Object(b.a)(F,S.pending,(function(){return null})),Object(b.a)(F,T.rejected,(function(e,t){return t.payload})),Object(b.a)(F,T.pending,(function(){return null})),F)),E=Object(s.d)("",Object(b.a)({},q,(function(e,t){return t.payload}))),$=Object(p.b)({items:P,filter:E,isLoading:V,error:W}),D=[].concat(Object(i.a)(Object(s.e)()),[d.a]),H=Object(s.a)({reducer:{contacts:$},middleware:D,devTools:!1}),I=(n(62),n(22)),N=n(12),R=n(13),U=R.a.form(L||(L=Object(N.a)(["\n  display: grid;\n  grid-template-columns: min-content;\n\n  & button {\n    margin: 10px 0;\n    background-color: #e6ffe0d5;\n    border: 1px solid #000;\n    border-radius: 4px;\n    &:hover,\n    :focus {\n      background-color: #bffab0d3;\n      transform: scale(1.1);\n    }\n  }\n"]))),G=function(e){return e.contacts.items},K=function(e){return e.contacts.filter},Q=function(e){return e.contacts.isLoading},X=function(e){var t=G(e),n=K(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},Y=n(1);function _(){var e=Object(r.useState)(""),t=Object(I.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),u=Object(I.a)(a,2),i=u[0],s=u[1],l=Object(o.b)(),d=Object(o.c)(G),b=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":return c(r);case"phone":return s(r);default:console.log("default")}},p=function(){c(""),s("")};return Object(Y.jsx)("div",{children:Object(Y.jsxs)(U,{onSubmit:function(e){e.preventDefault(),d.find((function(e){return e.name.includes(n)}))?alert("".concat(n," is already in contacts")):(l(S({name:n,phone:i})),p())},children:[Object(Y.jsxs)("label",{children:["Name",Object(Y.jsx)("input",{type:"text",name:"name",onChange:b,value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off"})]}),Object(Y.jsxs)("label",{children:["Phone",Object(Y.jsx)("input",{type:"tel",name:"phone",onChange:b,value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off"})]}),Object(Y.jsx)("button",{type:"submit",children:"Add contact"})]})})}var ee=R.a.ul(Z||(Z=Object(N.a)(["\n  padding: 5px;\n  margin: 10px 0;\n  width: 280px;\n\n  & li {\n    margin: 5px 0;\n    padding-bottom: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid grey;\n    & button {\n      background-color: #f0c8c8;\n      border: 1px solid #000;\n      border-radius: 4px;\n      &:hover,\n      :focus {\n        background-color: #f09797;\n        transform: scale(1.05);\n      }\n    }\n  }\n"]))),te=n(33),ne=n(32),re=n.n(ne);function ce(){return Object(Y.jsx)(re.a,{type:"Oval",color:"#f39f21",height:30,width:30})}var ae,ue=function(){var e=Object(o.b)(),t=Object(o.c)(X),n=Object(o.c)(Q);return Object(r.useEffect)((function(){return e(J())}),[e]),Object(Y.jsxs)(Y.Fragment,{children:[n&&Object(Y.jsx)(ce,{}),Object(Y.jsx)(ee,{children:t.map((function(t){return Object(Y.jsxs)("li",{children:[t.name,": ",t.phone,Object(Y.jsx)("button",{type:"button",onClick:function(){return n=t.id,e(T(n));var n},children:Object(Y.jsx)(te.a,{size:"20"})})]},t.id)}))})]})},oe=R.a.div(ae||(ae=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  & p {\n    margin: 5px 0;\n  }\n"]))),ie=function(){var e=Object(o.c)(K),t=Object(o.b)();return Object(Y.jsxs)(oe,{children:[Object(Y.jsx)("p",{children:"Find contacts by name"}),Object(Y.jsx)("input",{type:"text",name:"filter",onChange:function(e){return t(M.changeFilter(e.currentTarget.value))},value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off"})]})};n(83);function se(){return Object(Y.jsxs)("div",{id:"container",children:[Object(Y.jsx)(h.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(Y.jsx)("h1",{children:"Phonebook"}),Object(Y.jsx)(_,{}),Object(Y.jsx)("h2",{children:"Contacts"}),Object(Y.jsx)(ie,{}),Object(Y.jsx)(ue,{})]})}u.a.render(Object(Y.jsx)(c.a.StrictMode,{children:Object(Y.jsx)(o.a,{store:H,children:Object(Y.jsx)(se,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.3cfdfec4.chunk.js.map