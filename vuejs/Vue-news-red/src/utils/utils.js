import { Toast } from 'mint-ui';

// export default {
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

export const Stoast = function(msg, time){
		// console.log('1');
		Toast({
		  message: msg,
		  position: 'middle',
		  duration: time ? time : 2000,
		  // iconClass: 'mintui mintui-success',
		  className: ''
		});
		// 通过 this.$myMethods.Stoast("plugins")在别的子组件调用
	}
