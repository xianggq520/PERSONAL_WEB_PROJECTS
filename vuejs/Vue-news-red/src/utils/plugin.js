import Vue from 'vue';
import LoadingComponent from '../components/common/Header.vue'
import { Toast } from 'mint-ui';
// import utils from './utils.js'
import * as utils from './utils.js'
//Vue.2.0.5-插件: https://www.cnblogs.com/jiangxiaobo/p/6076813.html
// 插件通常会为Vue添加全局功能。插件的范围没有限制——一般有下面几种：

// 1.添加全局方法或者属性，如: vue-element

// 2.添加全局资源：指令/过滤器/过渡等，如 vue-touch

// 3.通过全局 mixin方法添加一些组件选项，如: vuex

// 4.添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。

// 5.一个库，提供自己的 API，同时提供上面提到的一个或多个功能，如 vue-router

// Vue.js 的插件应当有一个公开方法 install 。这个方法的第一个参数是 Vue 构造器 , 第二个参数是一个可选的选项对象:

export default {
	install: function (Vue, options) {
	//1.添加全局方法或者属性,通过 Vue.myGlobalMethod 来调用，就是一个定义在 Vue 下的静态方法而已
	Vue.myGlobalMethod = function(msg, time){
		//逻辑...
		Toast({
		  message: msg,
		  position: 'middle',
		  duration: time ? time : 2000,
		  // iconClass: 'mintui mintui-success',
		  className: ''
		});
	}
	//2.添加全局资源,指令/过滤器/过渡等
	Vue.directive('my-demo', {
		bind (el, binding, vnode, oldVnode){
			//逻辑...
			el.style.backgroundColor = binding.value.color;
			// <p v-my-demo="{ color: 'red', text: 'hello!' }">邮箱+当前组件data:{{countAlias}} </p>
		}
	})
	Vue.component('Loading',LoadingComponent)//直接在所有组件中调用 <loading></loading>
	//3.注入组件
	//谨慎使用全局混合对象，因为会影响到每个单独创建的 Vue 实例 (包括第三方模板)。大多数情况下，只应当应用于自定义选项，就像上面示例一样。也可以将其用作 Plugins 以避免产生重复应用
	Vue.mixin({  //全局混合：混合对象被混入所有组件的本身选项；局部混合只被混入当前组件的选项； 混合 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混合对象可以包含任意组件选项。当组件使用混合对象时，所有混合对象的选项将被混入该组件本身的选项。
		created: function(){  //同名钩子函数将混合为一个数组，因此都将被调用。另外，混合对象的 钩子将在组件自身钩子 之前 调用 
			//逻辑...
			console.log('混合对象的钩子被调用');
			var myOption = this.$options.myOption
		    if (myOption) {
		      console.log(myOption)
		    }
		},
		methods: {  //值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。
			MoboToastTwo: function(msg, time){
				Toast({
				  message: msg,
				  position: 'middle',
				  duration: time ? time : 2000,
				  // iconClass: 'mintui mintui-success',
				  className: ''
				});
			},
			conflicting: function () {
		      console.log('from mixin')
		    }
		}
	})
	// 4.添加实例方法
	// Vue.prototype.$myMethods = {
	// 	Stoast: function(msg, time){
	// 		// console.log('1');
	// 		Toast({
	// 		  message: msg,
	// 		  position: 'middle',
	// 		  duration: time ? time : 2000,
	// 		  // iconClass: 'mintui mintui-success',
	// 		  className: ''
	// 		});
	// 		// 通过 this.$myMethods.Stoast("plugins")在别的子组件调用
	// 	}
	// }
	Vue.prototype.$myMethods = utils;
}
}