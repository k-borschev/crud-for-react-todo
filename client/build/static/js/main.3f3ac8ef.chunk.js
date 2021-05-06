(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{132:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},152:function(e,t){},154:function(e,t){},167:function(e,t){},169:function(e,t){},197:function(e,t){},199:function(e,t){},200:function(e,t){},205:function(e,t){},207:function(e,t){},226:function(e,t){},238:function(e,t){},241:function(e,t){},258:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(37),o=n.n(r),c=(n(132),n(126)),i=n(4),u=n.n(i),l=n(8),p=n(122),h=n(123),d=n(127),j=n(125),f=(n(134),n(7)),O=(n(135),n(0));var b=function(e){var t=e.addTask,n=e.completeAll,a=e.isNotEmpty,r=e.isAllCompleted,o=Object(s.useState)(""),c=Object(f.a)(o,2),i=c[0],u=c[1];return Object(O.jsxs)("div",{id:"input",children:[Object(O.jsx)("button",{id:"completeAllBtn",onClick:n,className:r&&a?"completed ":a?"":"empty",children:"\xa0"}),Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim()&&t(i),u("")},children:Object(O.jsx)("input",{type:"text",placeholder:"What needs to be done",value:i,onChange:function(e){u(e.currentTarget.value)}})})]})};n(137);function g(e){var t=e.id,n=e.isCompleted,a=e.deleteTask,r=e.changeCompleteness,o=e.changeTask,c=e.title,i=Object(s.useState)(!0),u=Object(f.a)(i,2),l=u[0],p=u[1],h=Object(s.useState)(c),d=Object(f.a)(h,2),j=d[0],b=d[1],g=function(e){console.log("blur"===e.type||"Enter"===e.key),"blur"!==e.type&&"Enter"!==e.key||(o(j,t),p(!0))};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("li",{className:"taskElement",children:l?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{type:"checkbox",className:"checkbox",onChange:function(){return r(t,!n)},checked:n}),Object(O.jsxs)("div",{id:"inputArea",onDoubleClick:function(){return p(!1)},children:[Object(O.jsx)("p",{className:n?"completed taskvalue":"uncompleted taskvalue",children:c}),Object(O.jsx)("button",{className:"delete",onClick:function(){return a(t)},children:"\xd7"})]})]}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("input",{className:"valueChanger",value:j,onChange:function(e){return b(e.currentTarget.value)},onKeyDown:g,onBlur:g,type:"text"})})})})}n(138);var m=function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("hr",{}),Object(O.jsx)("ul",{children:e.tasks.length?e.tasks.map((function(t){return"all"===e.showCondition||"uncompleted"===e.showCondition&&!t.isCompleted||"completed"===e.showCondition&&t.isCompleted?Object(O.jsx)(g,{title:t.title,id:t.id,isCompleted:t.isCompleted,changeCompleteness:e.changeCompleteness,deleteTask:e.deleteTask,changeTask:e.changeTask},t.id):null})):Object(O.jsx)("p",{children:"No tasks"})})]})};n(139);var k=function(e){var t=e.clearCompleted,n=e.showActive,s=e.showAll,a=e.showCompleted,r=e.tasksCounter,o=e.showCondition;return e.logout,Object(O.jsxs)("div",{id:"footer",children:[Object(O.jsxs)("p",{className:"itemsLeft",children:[r.active," items left"]}),Object(O.jsxs)("ul",{className:"menu",children:[Object(O.jsx)("li",{className:"menuElement ".concat("all"===o?"active":"n"),onClick:function(){return s()},children:"All"}),Object(O.jsx)("li",{className:"menuElement ".concat("uncompleted"===o?"active":"n"),onClick:function(){return n()},children:"Active"}),Object(O.jsx)("li",{className:"menuElement ".concat("completed"===o?"active":"n"),onClick:function(){return a()},children:"Completed"})]}),Object(O.jsx)("button",{className:"footerBtn ".concat(r?"":"hidden"),onClick:function(){return t()},children:"Clear completed"})]})};n(140);var v=function(e){var t=Object(s.useState)(""),n=Object(f.a)(t,2),a=n[0],r=n[1],o=Object(s.useState)(""),c=Object(f.a)(o,2),i=c[0],p=c[1],h=Object(s.useState)(""),d=Object(f.a)(h,2),j=d[0],b=d[1],g=Object(s.useState)(""),m=Object(f.a)(g,2),k=m[0],v=m[1],x=function(){var t=Object(l.a)(u.a.mark((function t(n){var s,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,fetch("/login",{method:"POST",body:JSON.stringify({email:a,password:j}),headers:{"Content-Type":"application/json"}});case 4:return s=t.sent,t.next=7,s.json();case 7:(r=t.sent).errors?(p(r.errors.email),v(r.errors.password)):(localStorage.setItem("auth",JSON.stringify(r.token)),e.checkAuth()),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"login",children:Object(O.jsxs)("form",{onSubmit:x,children:[Object(O.jsx)("div",{className:"loginMenu",children:Object(O.jsx)("h2",{children:"Login"})}),Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{type:"text",value:a,onChange:function(e){return r(e.currentTarget.value)}}),Object(O.jsx)("div",{className:"email error",children:i}),Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{type:"password",value:j,onChange:function(e){return b(e.currentTarget.value)}}),Object(O.jsx)("div",{className:"password error",children:k}),Object(O.jsx)("button",{children:"Login"}),Object(O.jsx)("p",{onClick:e.setSignup,className:"link",children:"Don't have an account?"})]})})};n(141);var x=function(e){var t=Object(s.useState)(""),n=Object(f.a)(t,2),a=n[0],r=n[1],o=Object(s.useState)(""),c=Object(f.a)(o,2),i=c[0],p=c[1],h=Object(s.useState)(""),d=Object(f.a)(h,2),j=d[0],b=d[1],g=Object(s.useState)(""),m=Object(f.a)(g,2),k=m[0],v=m[1],x=Object(s.useState)(""),C=Object(f.a)(x,2),y=C[0],S=C[1],T=function(){var t=Object(l.a)(u.a.mark((function t(n){var s,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),j!==k){t.next=17;break}return t.prev=2,t.next=5,fetch("/signup",{method:"POST",body:JSON.stringify({email:a,password:j}),headers:{"Content-Type":"application/json"}});case 5:return s=t.sent,t.next=8,s.json();case 8:(r=t.sent).errors?(p(r.errors.email),S(r.errors.password)):e.setLogin(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0);case 15:t.next=18;break;case 17:S("Passwords don't match");case 18:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"signup",children:Object(O.jsxs)("form",{onSubmit:T,children:[Object(O.jsx)("div",{className:"signupMenu",children:Object(O.jsx)("h2",{children:"Signup"})}),Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{type:"text",value:a,onChange:function(e){return r(e.currentTarget.value)}}),Object(O.jsx)("div",{className:"email error",children:i}),Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{type:"password",value:j,onChange:function(e){return b(e.currentTarget.value)}}),Object(O.jsx)("div",{className:"password error",children:y}),Object(O.jsx)("label",{children:"Confirm password"}),Object(O.jsx)("input",{type:"password",value:k,onChange:function(e){return v(e.currentTarget.value)}}),Object(O.jsx)("button",{children:"Signup"}),Object(O.jsx)("p",{onClick:e.setLogin,className:"link",children:"Already have an account?"})]})})},C=n(39),y=n(148),S=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(p.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.checkAuth();case 2:case"end":return t.stop()}}),t)}))),e.showActive=function(){return e.props.showActive()},e.showAll=function(){return e.props.showAll()},e.showCompleted=function(){return e.props.showCompleted()},e.checkAuth=Object(l.a)(u.a.mark((function t(){var n,s,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.auth){t.next=12;break}return n=JSON.parse(localStorage.auth),t.next=4,fetch("/verifyToken",{method:"POST",body:JSON.stringify({token:n}),headers:{"Content-Type":"application/json"}});case 4:return s=t.sent,t.next=7,s.json();case 7:a=t.sent,console.log(a),e.props.setLoginCondition(a.status),t.next=13;break;case 12:e.props.setLoginCondition(!1);case 13:if(!e.props.isLoggedIn){t.next=16;break}return t.next=16,e.fetchTasks();case 16:case"end":return t.stop()}}),t)}))),e.fetchTasks=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("/tasks/",{method:"GET",headers:{authorization:JSON.parse(localStorage.auth)}}).then((function(e){return e.json()})).then(function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateTasks(n);case 2:e.stateTasksCounter();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)}))),e.setSignup=function(){return e.props.setLogOrSignUp("signup")},e.setLogin=function(){return e.props.setLogOrSignUp("login")},e.logout=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.clearTasks();case 2:return t.next=4,localStorage.removeItem("auth");case 4:return t.next=6,e.checkAuth();case 6:case"end":return t.stop()}}),t)}))),e.addTask=function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/tasks/",{headers:{Accept:"application/json","Content-Type":"application/json",authorization:JSON.parse(localStorage.auth)},method:"POST",body:JSON.stringify({title:n})}).catch((function(e){console.log(e)}));case 2:return t.next=4,e.fetchTasks();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.findIndexById=function(t){for(var n=0;n<e.props.tasks.length;n++)if(t===e.props.tasks[n].id)return n},e.stateTasksCounter=function(){e.props.updateCounter({all:e.props.tasks.length,completed:e.props.tasks.reduce((function(e,t){return e+t.isCompleted}),0),active:e.props.tasks.reduce((function(e,t){return e+!t.isCompleted}),0)})},e.changeCompleteness=function(){var t=Object(l.a)(u.a.mark((function t(n,s){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/tasks/",{headers:{Accept:"application/json","Content-Type":"application/json",authorization:JSON.parse(localStorage.auth)},method:"PATCH",body:JSON.stringify([{id:n,setComplete:s}])});case 2:return t.next=4,e.fetchTasks();case 4:e.stateTasksCounter();case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.deleteTask=function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/tasks/",{headers:{Accept:"application/json","Content-Type":"application/json",authorization:JSON.parse(localStorage.auth)},method:"DELETE",body:JSON.stringify([n])});case 2:return t.next=4,e.fetchTasks();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.changeTask=function(){var t=Object(l.a)(u.a.mark((function t(n,s){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/tasks/",{headers:{Accept:"application/json","Content-Type":"application/json",authorization:JSON.parse(localStorage.auth)},method:"PATCH",body:JSON.stringify([{id:s,title:n}])});case 2:return t.next=4,e.fetchTasks();case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.completeAll=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=Object(c.a)(e.props.tasks))[0].setComplete=!1,n.forEach((function(e){e.isCompleted||(n[0].setComplete=!0)})),t.next=5,fetch("/tasks/",{headers:{Accept:"application/json","Content-Type":"application/json",authorization:JSON.parse(localStorage.auth)},method:"PATCH",body:JSON.stringify(n.map((function(e){return e.hasOwnProperty("setComplete")?{id:e.id,setComplete:e.setComplete}:{id:e.id}})))});case 5:return t.next=7,e.fetchTasks();case 7:e.stateTasksCounter();case 8:case"end":return t.stop()}}),t)}))),e.clearCompleted=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.tasks.filter((function(e){return!e.isCompleted})),fetch("/tasks/",{headers:{Accept:"application/json","Content-Type":"application/json",authorization:JSON.parse(localStorage.auth)},method:"DELETE",body:JSON.stringify(e.props.tasks.filter((function(e){return-1===n.indexOf(e)})).map((function(e){return e.id})))}),t.next=4,e.fetchTasks();case 4:e.stateTasksCounter();case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"render",value:function(){return localStorage.auth&&!this.props.isLoggedIn?Object(O.jsx)(O.Fragment,{}):Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"todos"}),this.props.isLoggedIn&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{className:"username",children:["Logged as ",y.decode(JSON.parse(localStorage.auth)).email," ",Object(O.jsxs)("span",{onClick:this.logout,className:"logout",children:[" ","Logout"," "]})]}),Object(O.jsx)(b,{addTask:this.addTask,completeAll:this.completeAll,isAllCompleted:this.props.tasksCounter.all===this.props.tasksCounter.completed,isNotEmpty:this.props.tasksCounter.all}),!!this.props.tasks.length&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m,{tasks:this.props.tasks,changeCompleteness:this.changeCompleteness,showCondition:this.props.visibility,deleteTask:this.deleteTask,taskElemHandler:this.taskElemHandler,changeTask:this.changeTask}),Object(O.jsx)(k,{clearCompleted:this.clearCompleted,showActive:this.showActive,showAll:this.showAll,showCompleted:this.showCompleted,showCondition:this.props.visibility,tasksCounter:this.props.tasksCounter,logout:this.logout})]})]}),!this.props.isLoggedIn&&"login"===this.props.logOrSignUp&&Object(O.jsx)(v,{checkAuth:this.checkAuth,setSignup:this.setSignup}),!this.props.isLoggedIn&&"signup"===this.props.logOrSignUp&&Object(O.jsx)(x,{checkAuth:this.checkAuth,setLogin:this.setLogin})]})}}]),n}(a.a.Component),T=Object(C.b)((function(e){return{visibility:e.visibility,isLoggedIn:e.isLoggedIn,tasksCounter:e.tasksCounter,tasks:e.tasks,logOrSignUp:e.logOrSignUp}}),(function(e){return{showActive:function(){return e({type:"SHOW_ACTIVE"})},showAll:function(){return e({type:"SHOW_ALL"})},showCompleted:function(){return e({type:"SHOW_COMPLETED"})},setLoginCondition:function(t){return e({type:"SET_LOGIN_CONDITION",payload:t})},updateCounter:function(t){return e({type:"UPDATE_COUNTER",payload:t})},updateTasks:function(t){return e({type:"UPDATE_TASKS",payload:t})},clearTasks:function(){return e({type:"CLEAR_TASKS"})},setLogOrSignUp:function(t){return e({type:"SET_LOGORSIGNUP_CONDITION",payload:t})}}}))(S),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,259)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),r(e),o(e)}))},N=n(40);var A={all:0,completed:0,active:0};var L=[];var E="login";var I=Object(N.a)({visibility:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_ACTIVE":return"uncompleted";case"SHOW_ALL":return"all";case"SHOW_COMPLETED":return"completed";default:return e}},isLoggedIn:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN_CONDITION":return t.payload;default:return e}},tasksCounter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_COUNTER":return console.log("updfate tasks asdsadad"),{all:t.payload.all,completed:t.payload.completed,active:t.payload.active};default:return e}},tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TASKS":return t.payload;case"CLEAR_TASKS":return[];default:return e}},logOrSignUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGORSIGNUP_CONDITION":return t.payload;default:return e}}}),J=Object(N.b)(I);o.a.render(Object(O.jsx)(C.a,{store:J,children:Object(O.jsx)(T,{})}),document.getElementById("root")),w()}},[[258,1,2]]]);
//# sourceMappingURL=main.3f3ac8ef.chunk.js.map