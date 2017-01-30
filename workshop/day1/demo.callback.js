var add = function(num1, num2, callback) {
    callback(num1 + num2)
}

function show(result) {
    console.log(result)
}

add(2, 3, show);
add(2, 4, function(result){
    console.log("Custom result : " + result)
});
