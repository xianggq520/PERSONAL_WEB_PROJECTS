webpackJsonp([15],{152:function(n,t,i){i(247);var e=i(16)(i(186),i(266),"data-v-39233e08",null);n.exports=e.exports},186:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=i(29),r=i.n(e),a=i(28);i.n(a);t.default={data:function(){return{list:[]}},created:function(){this.get()},activated:function(){this.$emit("title","音乐特色榜")},methods:{loading:function(){a.Indicator.open({text:"加载中...",spinnerType:"fading-circle"})},pushUrl:function(n){this.$router.push({path:"/music",query:{id:n}})},get:function(){this.loading();r.a.get(bird+"http://m.kugou.com/rank/list?json=true").then(function(n){console.log(n.data.rank.list),this.list=n.data.rank.list,a.Indicator.close()}.bind(this)).catch(function(n){console.log(n)})}},components:{}}},227:function(n,t,i){t=n.exports=i(145)(),t.push([n.i,"\n.m-type[data-v-39233e08] {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 10px;\n}\n.m-type li[data-v-39233e08] {\r\n  width: 33.33%;\r\n  float: left;\r\n  box-sizing: border-box;\r\n  padding: 5px;\n}\n.m-type li img[data-v-39233e08] {\r\n  width: 100%;\n}\r\n","",{version:3,sources:["D:/wamp/www/A-share/Vue-news-red/src/components/MusicList.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,uBAAuB;EACvB,cAAc;CACf;AACD;EACE,cAAc;EACd,YAAY;EACZ,uBAAuB;EACvB,aAAa;CACd;AACD;EACE,YAAY;CACb",file:"MusicList.vue",sourcesContent:["\n.m-type[data-v-39233e08] {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 10px;\n}\n.m-type li[data-v-39233e08] {\r\n  width: 33.33%;\r\n  float: left;\r\n  box-sizing: border-box;\r\n  padding: 5px;\n}\n.m-type li img[data-v-39233e08] {\r\n  width: 100%;\n}\r\n"],sourceRoot:""}])},247:function(n,t,i){var e=i(227);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);i(146)("2f21ec42",e,!0)},266:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"musiclist"}},[i("ul",{staticClass:"m-type"},n._l(n.list,function(t){return i("li",{attrs:{data:t.rankid},on:{click:function(i){n.pushUrl(t.rankid)}}},[i("img",{attrs:{src:t.imgurl.replace("{size}",400),alt:t.rankname}})])}))])},staticRenderFns:[]}}});
//# sourceMappingURL=15.f6a6f0e7c9f288c81a39.js.map