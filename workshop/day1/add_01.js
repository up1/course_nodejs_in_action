var add = function(num1, num2, callback) {
    callback(num1 + num2)
}

var converter = (num1, num2) => {
    return { "data1" : parseInt(num1), 
                "data2" : parseInt(num2)}
}

//Start program
var datas = converter(process.argv[2],
                                   process.argv[3])

add(datas.data1, datas.data2, function(result) {
    console.log("Result : " + result)
});
