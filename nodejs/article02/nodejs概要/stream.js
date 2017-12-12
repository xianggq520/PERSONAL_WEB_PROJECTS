var Writable = require('stream').Writable;
var util = require('util');

function MyWritable(options) {
    Writable.call(this, options);
}  

util.inherits(MyWritable, Writable); // 继承自Writable

MyWritable.prototype._write = function(chunk, encoding, callback) {
    console.log("被写入的数据是:", chunk.toString()); // 此处可对写入的数据进行处理
    // 回车结束输入
    callback();
};

var mw = new MyWritable();

console.log(mw);

process.stdin.pipe(mw); // stdin作为输入源，MyWritable作为输出源  