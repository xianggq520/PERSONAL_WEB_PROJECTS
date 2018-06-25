enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let d: string = Color[1];  



enum Color1 {Red=1, Green=2, Blue=4}
let c1: Color = Color.Green;
let d1: string = Color[1];  


let unusable: void = null;


let num: any = 12;

let len = (<string>num).length;

let l2n = (num as number).toFixed();


document.getElementById("id").addEventListener("click", function () { 
    console.log(123);
})

"strictNullChecks"

let n: null = undefined;

let m: number = null;

let o: undefined = null;


function foo() {
    // okay to capture 'a'
    return a;
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();

let a:any = 12;