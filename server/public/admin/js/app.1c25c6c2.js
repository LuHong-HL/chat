(function(e){function t(t){for(var r,o,u=t[0],i=t[1],l=t[2],d=0,p=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);c&&c(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/admin/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"22de":function(e,t,n){"use strict";var r=n("8319"),a=n.n(r);a.a},"42ce":function(e,t,n){"use strict";var r=n("7d0b"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o={},u=o,i=n("2877"),l=Object(i["a"])(u,a,s,!1,null,null,null),c=l.exports,d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-container",{staticStyle:{height:"100vh",border:"1px solid #eee"}},[n("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[n("el-menu",{attrs:{router:"","unique-opened":"","default-active":e.$route.path}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-message"}),e._v("用户 ")]),n("el-menu-item-group",[n("template",{slot:"title"},[e._v("用户")]),n("el-menu-item",{attrs:{index:"/users/list"}},[e._v("用户列表")])],2)],2),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-message"}),e._v("系统设置 ")]),n("el-menu-item-group",[n("template",{slot:"title"},[e._v("管理员")]),n("el-menu-item",{attrs:{index:"/admin_users/create"}},[e._v("创建管理员")]),n("el-menu-item",{attrs:{index:"/admin_users/list"}},[e._v("管理员列表")])],2)],2)],1)],1),n("el-container",[n("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[n("el-dropdown",{attrs:{"split-button":""},on:{click:e.logout}},[e._v(" 确认功能 "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("退出登录")])],1)],1),n("span",[e._v("Chat后台")])],1),n("el-main",[n("router-view")],1)],1)],1)],1)},m=[],f=(n("cb29"),{data:function(){var e={date:"2016-05-02",name:"Chat后台",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(e)}},methods:{logout:function(){sessionStorage.clear(),this.$router.push({path:"/login"})}}}),h=f,b=(n("22de"),Object(i["a"])(h,p,m,!1,null,null,null)),v=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("用户账号列表")]),n("el-table",{attrs:{data:e.items,stripe:!0}},[n("el-table-column",{attrs:{label:"ID",prop:"_id"}}),n("el-table-column",{attrs:{label:"用户名",prop:"username"}}),n("el-table-column",{attrs:{label:"手机号",prop:"phone"}}),n("el-table-column",{attrs:{label:"状态"}},[e._v("正常")]),n("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.freeze(t.row)}}},[e._v("冻结")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.unfreeze(t.row)}}},[e._v("解冻")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},w=[],_=(n("96cf"),n("1da1")),x={created:function(){this.fetch()},data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/users");case 2:n=t.sent,e.items=n.data;case 4:case"end":return t.stop()}}),t)})))()},freeze:function(e){console.log("冻结",e)},unfreeze:function(e){console.log("解冻",e)},remove:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$confirm("是否删除 ".concat(e.username," 用户账号"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(_["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.delete("/rest/users/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return n.stop()}}),n)}))));case 1:case"end":return n.stop()}}),n)})))()}}},y=x,$=Object(i["a"])(y,g,w,!1,null,null,null),k=$.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.id?"编辑":"创建")+"管理员账号")]),n("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.create(t)}}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v(e._s(e.id?"保存":"创建"))])],1)],1)],1)},j=[],R={props:{id:{}},created:function(){this.id&&this.fetch()},data:function(){return{model:{}}},methods:{create:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("/rest/admin_users/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("/rest/admin_users",e.model);case 7:e.$router.push("/admin_users/list"),e.$message({type:"success",message:"操作成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/admin_users/".concat(e.id));case 2:n=t.sent,e.model=n.data;case 4:case"end":return t.stop()}}),t)})))()}}},S=R,P=Object(i["a"])(S,O,j,!1,null,null,null),z=P.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("管理员账号列表")]),n("el-table",{attrs:{data:e.items,stripe:!0}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"100"}}),n("el-table-column",{attrs:{label:"ID",prop:"_id"}}),n("el-table-column",{attrs:{label:"用户名",prop:"username"}}),n("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},C=[],T={created:function(){this.fetch()},data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/admin_users");case 2:n=t.sent,e.items=n.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$confirm("是否删除 ".concat(e.username," 管理员账号"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(_["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.delete("/rest/admin_users/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return n.stop()}}),n)}))));case 1:case"end":return n.stop()}}),n)})))()}}},U=T,A=Object(i["a"])(U,E,C,!1,null,null,null),B=A.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-card",{staticClass:"login-card",attrs:{header:"请先登陆"}},[n("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("登录")])],1)],1)],1)],1)},L=[],M={data:function(){return{model:{}}},methods:{login:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("/login",e.model);case 2:n=t.sent,sessionStorage.token=n.data.token,e.$router.push("/"),e.$message({type:"success",message:"登录成功"});case 6:case"end":return t.stop()}}),t)})))()}}},I=M,q=(n("42ce"),Object(i["a"])(I,D,L,!1,null,"64e64250",null)),J=q.exports;r["default"].use(d["a"]);var N=[{path:"/login",component:J,meta:{isPublic:!0}},{path:"/",name:"Main",redirect:{name:"UserList"},component:v,children:[{path:"users/list",name:"UserList",component:k},{path:"admin_users/create",name:"AdminUserCreate",component:z},{path:"admin_users/edit/:id",component:z,props:!0},{path:"admin_users/list",component:B}]}],V=new d["a"]({routes:N});V.beforeEach((function(e,t,n){if(!e.meta.isPublic&&!sessionStorage.token)return n({path:"/login"});n()}));var F=V,G=(n("9e1f"),n("450d"),n("6ed5")),H=n.n(G),K=(n("0fb7"),n("f529")),Q=n.n(K),W=(n("5466"),n("ecdf")),X=n.n(W),Y=(n("adec"),n("3d2d")),Z=n.n(Y),ee=(n("38a0"),n("ad41")),te=n.n(ee),ne=(n("de31"),n("c69e")),re=n.n(ne),ae=(n("bd49"),n("18ff")),se=n.n(ae),oe=(n("960d"),n("defb")),ue=n.n(oe),ie=(n("cb70"),n("b370")),le=n.n(ie),ce=(n("8bd8"),n("4cb2")),de=n.n(ce),pe=(n("34db"),n("3803")),me=n.n(pe),fe=(n("ce18"),n("f58e")),he=n.n(fe),be=(n("a673"),n("7b31")),ve=n.n(be),ge=(n("a769"),n("5cc3")),we=n.n(ge),_e=(n("4ca3"),n("443e")),xe=n.n(_e),ye=(n("1951"),n("eedf")),$e=n.n(ye),ke=(n("425f"),n("4105")),Oe=n.n(ke),je=(n("eca7"),n("3787")),Re=n.n(je),Se=(n("10cb"),n("f3ad")),Pe=n.n(Se),ze=(n("b8e0"),n("a4c4")),Ee=n.n(ze);r["default"].use(Ee.a),r["default"].use(Pe.a),r["default"].use(Re.a),r["default"].use(Oe.a),r["default"].use($e.a),r["default"].use(xe.a),r["default"].use(we.a),r["default"].use(ve.a),r["default"].use(he.a),r["default"].use(me.a),r["default"].use(de.a),r["default"].use(le.a),r["default"].use(ue.a),r["default"].use(se.a),r["default"].use(re.a),r["default"].use(te.a),r["default"].use(Z.a),r["default"].use(X.a),r["default"].prototype.$message=Q.a,r["default"].prototype.$confirm=H.a.confirm;n("d3b7");var Ce=n("bc3a"),Te=n.n(Ce),Ue=Te.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});Ue.interceptors.request.use((function(e){return sessionStorage.token&&(e.headers.Authorization="Bearer "+sessionStorage.token),e}),(function(e){return Promise.reject(e)})),Ue.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&r["default"].prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&F.push("/login"),Promise.reject(e)}));var Ae=Ue;r["default"].prototype.$http=Ae,r["default"].config.productionTip=!1,new r["default"]({router:F,render:function(e){return e(c)}}).$mount("#app")},"7d0b":function(e,t,n){},8319:function(e,t,n){}});
//# sourceMappingURL=app.1c25c6c2.js.map