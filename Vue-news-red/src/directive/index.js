
// <div v-demo="{ color: 'white', text: 'hello!' }"></div>
export const demo = (el, binding) => {
	el.style.backgroundColor = binding.value.color
}


// 全局使用的组件 https://www.cnblogs.com/stoneniqiu/p/6877460.html
// http://blog.csdn.net/Tank_in_the_street/article/details/73135410