/* 
    描述

JSON.stringify() 将值转换为表示它的JSON表示法：

Boolean，Number并且在String对象被转换为相应的原始值时，按照传统的转换语义进行串化。
如果undefined在转换过程中遇到某个函数或符号，则会将其忽略（在对象中找到它时）或者将其删除null（在数组中找到它时）。
JSON.stringify也可以只返回undefined 传入喜欢“纯”的值时，JSON.stringify(function(){})或JSON.stringify(undefined)。
所有符号键属性将被完全忽略，即使使用该replacer函数。
不可枚举的属性将被忽略

*/

JSON.stringify({});                  // '{}'
JSON.stringify(true);                // 'true'
JSON.stringify('foo');               // '"foo"'
JSON.stringify([1, 'false', false]); // '[1,"false",false]'
JSON.stringify({ x: 5 });            // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)) 
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// '[3,"false",false]'

JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }); 
// '{"x":[10,null,null,null]}' 
 
// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// '{}'

// Non-enumerable properties:
JSON.stringify( Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
// '{"y":"y"}'


/* 
该replacer参数

该replacer参数可以是一个函数或一个数组。作为一个函数，它需要两个参数，键和值被串行化。
提供密钥的对象作为替代者的this参数。最初，它被调用一个空的键代表对象正在字符串化，然后被调用的对象或数组被串化的每个属性。
它应该返回应该添加到JSON字符串的值，如下所示：

如果返回a Number，则将该数字对应的字符串作为添加到JSON字符串时的值。
如果返回a String，那么在将该字符串添加到JSON字符串时，该字符串将用作该属性的值。
如果返回a Boolean，则在将其添加到JSON字符串时，将使用“true”或“false”作为属性的值。
如果返回任何其他对象，对象将被递归地串入JSON字符串中replacer，除非对象是函数，否则不会向JSON字符串添加任何内容。
如果返回undefined，则在输出的JSON字符串中不包括该属性（即过滤掉）。
注意：您不能使用该replacer函数从数组中删除值。如果你返回undefined或者使用一个函数null来代替。

*/

/* 
如果replacer是函數，要串行化的是object, 如果返回undefined, 则object的该属性将被删除
*/
function replacer(key, value) {
    // Filtering out properties
    if (typeof value === 'string') {
        return undefined;
    }
    return value;
}

var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'

/* 
   如果replacer是函數，要串行化的是数组，如果函數返回undefined，则数组的元素将被替换成null 
*/
var too = ["12", "34", "sss", 12];
var re = JSON.stringify(too, replacer);
// "[null,null,null,12]"

/* 

一个数组的例子

如果replacer是数组，则数组的值指示应包含在生成的JSON字符串中的对象中的属性的名称。
*/

JSON.stringify(foo, ['week', 'month']);  
// '{"week":45,"month":7}', only keep "week" and "month" properties





