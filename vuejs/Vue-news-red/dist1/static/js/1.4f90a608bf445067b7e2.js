webpackJsonp([1],{158:function(n,t,o){o(245);var e=o(16)(o(192),o(264),null,null);n.exports=e.exports},167:function(n,t){t.f={}.propertyIsEnumerable},168:function(n,t){t.f=Object.getOwnPropertySymbols},169:function(n,t,o){n.exports={default:o(172),__esModule:!0}},170:function(n,t,o){n.exports={default:o(173),__esModule:!0}},171:function(n,t,o){"use strict";t.__esModule=!0;var e=o(170),i=function(n){return n&&n.__esModule?n:{default:n}}(e);t.default=i.default||function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(n[e]=o[e])}return n}},172:function(n,t,o){var e=o(3),i=e.JSON||(e.JSON={stringify:JSON.stringify});n.exports=function(n){return i.stringify.apply(i,arguments)}},173:function(n,t,o){o(175),n.exports=o(3).Object.assign},174:function(n,t,o){"use strict";var e=o(59),i=o(168),r=o(167),a=o(61),s=o(60),p=Object.assign;n.exports=!p||o(30)(function(){var n={},t={},o=Symbol(),e="abcdefghijklmnopqrst";return n[o]=7,e.split("").forEach(function(n){t[n]=n}),7!=p({},n)[o]||Object.keys(p({},t)).join("")!=e})?function(n,t){for(var o=a(n),p=arguments.length,u=1,c=i.f,d=r.f;p>u;)for(var A,l=s(arguments[u++]),g=c?e(l).concat(c(l)):e(l),f=g.length,m=0;f>m;)d.call(l,A=g[m++])&&(o[A]=l[A]);return o}:p},175:function(n,t,o){var e=o(8);e(e.S+e.F,"Object",{assign:o(174)})},192:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=o(169),i=o.n(e),r=o(171),a=o.n(r),s=o(62);t.default={data:function(){return{info:{username:"15079111716",password:"123456"}}},created:function(){this.$emit("title","用户登录")},activated:function(){this.$emit("title","用户登录")},computed:a()({},o.i(s.b)({token:function(n){return n.data.token},LoginInfo:function(n){return n.data.LoginInfo}})),methods:{Login:function(){console.log(i()(this.token)),this.token||localStorage.getItem("token")?(alert("已经登录了"),this.$router.push({path:"/home"})):this.$store.dispatch("FECTH_Login",this.info)},isLogin:function(){this.token||localStorage.getItem("token")}},components:{}}},225:function(n,t,o){t=n.exports=o(145)(),t.push([n.i,'\n#login {\n    padding-top: 100px;\n    background: url("https://dn-coding-net-production-pp.qbox.me/757014a2-76bc-4da7-bcb4-5fd79186fc50.png");\n    box-sizing: border-box;\n    height: 100%;\n    min-height: 100%;\n    width: 100%;\n    margin-top: -50px;\n    background-size: cover;\n}\n#form {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 10px;\n    margin-top: 50px;\n}\n#form li {\n    padding: 10px 0;\n}\n#form li input {\n    width: 100%;\n    height: 40px;\n    outline: none;\n    background: transparent;\n    -webkit-appearance: none;\n    border: 1px solid #DDD;\n    border-radius: 8px;\n    box-sizing: border-box;\n    padding: 10px;\n    font-size: 16px;\n    color: #444;\n}\n#login_btn {\n    padding: 30px 10px;\n}\n.msg {\n    text-align: center;\n    color: #666\n}\n',"",{version:3,sources:["D:/wamp/www/A-share/Vue-news-red/src/components/User/Login.vue"],names:[],mappings:";AACA;IACI,mBAAmB;IACnB,wGAAwG;IACxG,uBAAuB;IACvB,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;CAC1B;AACD;IACI,YAAY;IACZ,uBAAuB;IACvB,cAAc;IACd,iBAAiB;CACpB;AACD;IACI,gBAAgB;CACnB;AACD;IACI,YAAY;IACZ,aAAa;IACb,cAAc;IACd,wBAAwB;IACxB,yBAAyB;IACzB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,gBAAgB;IAChB,YAAY;CACf;AACD;IACI,mBAAmB;CACtB;AACD;IACI,mBAAmB;IACnB,WAAW;CACd",file:"Login.vue",sourcesContent:['\n#login {\n    padding-top: 100px;\n    background: url("https://dn-coding-net-production-pp.qbox.me/757014a2-76bc-4da7-bcb4-5fd79186fc50.png");\n    box-sizing: border-box;\n    height: 100%;\n    min-height: 100%;\n    width: 100%;\n    margin-top: -50px;\n    background-size: cover;\n}\n#form {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 10px;\n    margin-top: 50px;\n}\n#form li {\n    padding: 10px 0;\n}\n#form li input {\n    width: 100%;\n    height: 40px;\n    outline: none;\n    background: transparent;\n    -webkit-appearance: none;\n    border: 1px solid #DDD;\n    border-radius: 8px;\n    box-sizing: border-box;\n    padding: 10px;\n    font-size: 16px;\n    color: #444;\n}\n#login_btn {\n    padding: 30px 10px;\n}\n.msg {\n    text-align: center;\n    color: #666\n}\n'],sourceRoot:""}])},245:function(n,t,o){var e=o(225);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);o(146)("2fcefc78",e,!0)},264:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{attrs:{id:"login"}},[o("ul",{attrs:{id:"form"}},[o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:n.info.username,expression:"info.username"}],attrs:{type:"text",placeholder:"请输入您的账号"},domProps:{value:n.info.username},on:{input:function(t){t.target.composing||n.$set(n.info,"username",t.target.value)}}})]),n._v(" "),o("li",[o("input",{directives:[{name:"model",rawName:"v-model",value:n.info.password,expression:"info.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:n.info.password},on:{input:function(t){t.target.composing||n.$set(n.info,"password",t.target.value)}}})])]),n._v(" "),o("p",{staticClass:"msg"},[n._v(" "+n._s(n.LoginInfo.msg))]),n._v(" "),o("div",{attrs:{id:"login_btn"}},[o("mt-button",{attrs:{plain:"",type:"danger",size:"large"},nativeOn:{click:function(t){n.Login(t)}}},[n._v("登录")])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=1.4f90a608bf445067b7e2.js.map