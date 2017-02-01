var users = [ 'user 01', 'user 02' ]

for( var index in users ) {
    console.log(index + " : " + users[index])
}

for( var user of users ) {
    console.log(user)
}

users.forEach(function(user) {
    console.log(user)
})

users.forEach((user) => {
    console.log(user)
})

var show = function(user) {
    console.log(user)
}
users.forEach(show)
