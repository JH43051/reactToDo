(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,n){t.exports=n(53)},49:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(21),c=n.n(r),l=n(14),i=n(6),d=n(7),s=n(9),u=n(8),p=n(10),m=n(56),f=n(55),h=n(12),b=n.n(h),y=(n(49),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #cccccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n.markComplete=function(){},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",style:{marginRight:"10px"},onChange:this.props.markComplete.bind(this,e)}),n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:v},"X")))}}]),e}(a.Component)),v={background:"#ff0000",color:"#000000",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},E=y,g=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return o.a.createElement(E,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(a.Component),j=n(54);var O={textAlign:"center",background:"#333333",color:"#ffffff",padding:"10px"},k={color:"#ffffff",padding:"5px 100px"},x=function(){return o.a.createElement("header",{style:O},o.a.createElement("h1",null,"Todo List"),o.a.createElement(j.a,{style:k,to:"/"},"HOME"),o.a.createElement(j.a,{style:k,to:"/about"},"ABOUT"))},T=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={title:""},n.inputHandler=function(t){n.setState({title:t.target.value})},n.submitHandler=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.submitHandler,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",value:this.state.title,onChange:this.inputHandler,style:{flex:"10",padding:"5px"}}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(a.Component);var C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the Todo List App v.1.0.0"))},S=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){b.a.delete("http://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){var e=n.state.todos[n.state.todos.length-1].id+1;b.a.post("http://jsonplaceholder.typicode.com/todos",{id:e,title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=this;b.a.get("http://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(x,null),o.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{addTodo:t.addTodo}),o.a.createElement(g,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),o.a.createElement(f.a,{path:"/about",component:C}))))}}]),e}(a.Component);c.a.render(o.a.createElement(S,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.540e7c47.chunk.js.map