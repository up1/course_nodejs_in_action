function add(num1) {
    return add2(num1, num1);
}

var add2 = function(num1, num2) {
    return num1 + num2;
}

console.log(add2(2, 3));
console.log(add(1));

var add3 = (num1, num2) => {
    return num1 + num2;
}
