var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
let d = Color[1];
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 4] = "Blue";
})(Color1 || (Color1 = {}));
let c1 = Color.Green;
let d1 = Color[1];
let unusable = null;
let num = 12;
let len = num.length;
let l2n = num.toFixed();
document.getElementById("id").addEventListener("click", function () {
    console.log(123);
});
"strictNullChecks";
let n = undefined;
let m = null;
let o = null;
function foo() {
    // okay to capture 'a'
    return a;
}
// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();
let a = 12;
//# sourceMappingURL=enum.js.map