import Mock from 'mockjs'


var template = {
	//数据模板定义规范
	'name': '@name', //数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值
	'age|1-100': 100, //属性名 和 生成规则 之间用竖线 | 分隔
	// 生成规则 是可选的
	// 生成规则 有 7 种格式：
	// 'name|min-max': value
	// 'name|count': value
	// 'name|min-max.dmin-dmax': value
	// 'name|min-max.dcount': value
	// 'name|count.dmin-dmax': value
	// 'name|count.dcount': value
	// 'name|+step': value
	// 生成规则 的 含义 需要依赖 属性值的类型 才能确定
	// 属性值 中可以含有 @占位符。
	// 属性值 还指定了最终值的初始值和类型。
	'color': '@color',
	'number|+1': 1,
	'num|1-20.1-6':0,
	'num1|123.10':123.1231091814, //十位小数
	'boolean1|1': true, //随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
	'boolean2|1-5': true, //随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。
	'object1|3-5': {
					'name': '@name', //数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值
					'age|1-100': 100, //属性名 和 生成规则 之间用竖线 | 分隔
					// 生成规则 是可选的
					// 生成规则 有 7 种格式：
					// 'name|min-max': value
					// 'name|count': value
					// 'name|min-max.dmin-dmax': value
					// 'name|min-max.dcount': value
					// 'name|count.dmin-dmax': value
					// 'name|count.dcount': value
					// 'name|+step': value
					// 生成规则 的 含义 需要依赖 属性值的类型 才能确定
					// 属性值 中可以含有 @占位符。
					// 属性值 还指定了最终值的初始值和类型。
					'color': '@color',
					'number|+1': 1,
					'num|1-20.1-6':0,
					'num1|123.10':123.1231091814, //十位小数
					'boolean1|1': true, //随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
					'boolean2|1-5': true, //随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。
				},
	'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
	'array2|1-10': ['Mock.js'],
    'array3|3': ['Mock.js'],
	'function1': function(){return 2},  //执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。
	'function2': function(){return this.name},
	'regexp1': /[a-z][A-Z][0-9]/, //根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串
	'regexp3': /\d{5,10}/, //5-10位数字
	//数据占位符定义规范
	//占位符 只是在属性值字符串中占个位置，并不出现在最终的属性值中。
	//占位符 的格式为：
	// @占位符
	// @占位符(参数 [, 参数])
	
	// 用 @ 来标识其后的字符串是 占位符。
	// 占位符 引用的是 Mock.Random 中的方法。
	// 通过 Mock.Random.extend() 来扩展自定义占位符。
	// 占位符 也可以引用 数据模板 中的属性。
	// 占位符 会优先引用 数据模板 中的属性。
	// 占位符 支持 相对路径 和 绝对路径。
	'name1': {
        first: '@FIRST',
        middle: '@FIRST',
        last: '@LAST',
        full: '@first @middle @last'
    },
    'list|20': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
}


export default Mock.mock('http://g.cn', template);