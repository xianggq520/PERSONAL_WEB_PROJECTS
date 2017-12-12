var EventEmitter = require('events').EventEmitter;
var util = require('util');

function MyEmitter() {
    EventEmitter.call(this);
}  

util.inherits(MyEmitter, EventEmitter); // 继承
    
var emitter3 = new MyEmitter();

//监听向事件循环中新增事件的事件  "newListener"是系统提供的事件
emitter3.on("newListener", function(name, listener) {
	console.log("新事件的名字:", name);
	console.log("新事件的代码:", listener);
	setTimeout(function() {
		console.log("我是自定义延时处理机制");
	}, 1000);
});

// 新增监听 node 事件
emitter3.on('node', function(msg) {
	console.log('hello　node ' + msg);
});

// 新增监听 world 事件
emitter3.on('world', function(msg) {
	console.log('hello　world ' + msg);
});

// 触发node事件
emitter3.emit('node', '@@@@@@@@@@@@@@@@@@@@@@@');

// 触发world事件
emitter3.emit('world', '~~~~~~~~~~~~~~~~~~~~~~~');

console.log("emitter3", emitter3)
/*
 * 如果有多个EventEmitter,也可以用domain来统一处理错误事件.
 * */
var domain = require("domain");
var myDomain = domain.create();

console.log(myDomain, "myDomain on before........");

myDomain.on("error", function(err){
    console.log("domain接收到的错误事件:", err);
}); 
// 接收事件并打印
console.log(myDomain, "myDomain on end........");

myDomain.run(function(){
    var emitter1 = new MyEmitter();
    emitter1.emit('error', '错误事件来自emitter1');
    var emitter2 = new MyEmitter();
    emitter2.emit('error', '错误事件来自emitter2');
});
    

