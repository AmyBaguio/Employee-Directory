(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(12),s=n.n(a),l=n(13),i=n(14),o=n(15),h=n(20),u=n(18);n(26);var d=function(e){return Object(r.jsx)("form",{children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For an Employee",id:"search"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search"})]})})},j=(n(27),{navbarStyle:{background:"teal"}});var b=function(){return Object(r.jsx)("nav",{style:j.navbarStyle,className:"navbar",children:Object(r.jsx)("a",{href:"/",children:"Employee Directory"})})},O=(n(28),{headerStyle:{background:"teal",padding:"20px"},h1Style:{fontsize:100}});var m=function(){return Object(r.jsx)("header",{style:O.headerStyle,className:"header",children:Object(r.jsx)("h1",{style:O.headingStyle,children:"Use the search box to narrow your results."})})},x=(n(29),n(19));var p=function(e){return console.log(e.results),Object(r.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"FirstName"}),Object(r.jsx)("th",{children:"LastName"}),Object(r.jsx)("th",{children:"Phone"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"DOB"})]})}),Object(r.jsx)("tbody",{children:e.results.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name.first}),Object(r.jsx)("td",{children:e.name.last}),Object(r.jsx)("td",{children:e.cell}),Object(r.jsx)("td",{children:e.email}),Object(r.jsx)("td",{children:e.dob.age})]},e.name.last)}))})]})};var f=function(e){return Object(r.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var y=function(e){return Object(r.jsx)("div",{className:"row".concat(e.fluid?"-fluid":""),children:e.children})},v=n(17),g=n.n(v),S=function(){return g.a.get("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=10",{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin,X-Requested-With,Content-Type,x-auth,Accept,content-type,application/json"}})},w=(n(48),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={search:"",results:[]},e.searchEmployee=function(){S().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.name,r=t.target.value;e.setState(Object(l.a)({},n,r))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployee(e.state.search)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.searchEmployee()}},{key:"render",value:function(){return Object(r.jsxs)(f,{children:[Object(r.jsx)("row",{children:Object(r.jsx)(b,{})}),Object(r.jsx)("row",{children:Object(r.jsx)(m,{})}),Object(r.jsx)("row",{children:Object(r.jsx)(d,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})}),Object(r.jsx)(y,{children:Object(r.jsx)(p,{results:this.state.results})})]})}}]),n}(c.Component));var C=function(){return Object(r.jsx)(w,{})};n(49),n(50);s.a.render(Object(r.jsx)(C,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.1602f39a.chunk.js.map