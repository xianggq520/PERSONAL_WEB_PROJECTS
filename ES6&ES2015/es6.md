#ES6 = es2015 , ie10+、chrome、firfox...

#ES6

#1.变量
#2.函数
#3.数组
#4.字符串
#5.面向对象
#6.Promise
#7.generator
#8.模块化


#var 声明变量的问题
#1.可以重复声明
#2.无法限制修改
#3.不是块级作用域

#let 不能重复声明，变量可以修改，属于块级作用域

#const 不能重复声明，变量不能修改，属于块级作用域

	for(var i =0; i < btns.length; i++){
		btns[i].onclick = function(){
			alert(i);
		}
	}
	// 1 1 1

	for(let i =0; i < btns.length; i++){
		btns[i].onclick = function(){
			alert(i);
		}
	}
	// 1 2 3


#箭头函数

#1.如果只有一个参数，()可以省略
#2.如果只有一个return语句，{}可以省略
	let a = () => {}
	let b = (a) => { a + 1}
	let c = a => { a + 1 }
	let d = a => a + 1
	let e = (a, b) => a + b

#函数的参数

#1.参数扩展、扩展
#2.默认参数

#1.收集剩余参数，args
	function show(a, b, ...args){}
#2.展开数组
	let arr = [1,2,3];
	let show = (a,b,c) => {
		alert(a);
		alert(b);
		alert(c);
	} 
	show(...arr); 
	let arr1 = [...arr, 4];
	let arr2 = [...arr, ...arr1];

#3.默认参数

	function show(a, b = 12, c = 0) {
		console.log(a, b, c)
	}
	show(1); // 1, 12, 0
	show(1,2); // 1, 2, 0
	
#解构赋值

1.左右两边结构必须一样
2.右边必须是个合法的数据
3.声明和赋值不能分开

	let [a, b, c] = [1, 2, 4];
	console.log(a, b, c);
	let [a, b, e] = [1, 2, 4];
	console.log(a, b, e);
	let {a, b, e} = {a : 1, b : 2, c : 12};
	console.log(a, b, e); //1 2 undefined


#数组

1.map
2.reduce
3.filter
4.forEach







