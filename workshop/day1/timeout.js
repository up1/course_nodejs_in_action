var counter = 0
setTimeout( (error, data) =>{
    counter ++;
    console.log("Called" + counter)
} , 2000)

console.log("Finish" + counter)