//新增變數
var a = 1;
console.log(a);
var b;
b = 2;
console.log(b);
var c = 123;
console.log(c);
//迴圈
for (var i = 0; i < 3; i++) {
    console.log("迴圈:" + i);
}
console.log("結束迴圈 i的值是:" + 3);
// 迴圈
for (var i = 0; i < 10; i++) {
    console.log("迴圈次數:" + i);
}
console.log("迴圈結束，但此行會報錯，因為'i'已在區塊外無效。");
console.log("由於上一行的錯誤，程式執行中斷，這一行不會被印出。");
//多重迴圈
for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
        console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
    }
}
