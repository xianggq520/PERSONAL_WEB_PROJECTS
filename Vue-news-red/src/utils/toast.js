import { Toast } from 'mint-ui';
import Vue from 'vue';

export default {
	install(){
		
		Vue.prototype.Stoast = (msg,time) => {  //自定义函数挂到全局，插件开发
			Toast({
			  message: msg,
			  position: 'middle',
			  duration: time ? time : 2000,
			  // iconClass: 'mintui mintui-success',
			  className: ''
			});
		};
	}
}