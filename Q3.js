function printMultiplicationTable() {
    for (var i = 1; i <= 9; i++) {
        for (var j = 1; j <= 9; j++) {
            console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
        }
    }
}
printMultiplicationTable();
