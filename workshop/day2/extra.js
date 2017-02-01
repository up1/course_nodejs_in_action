var users = ['user 01', 'user 02']

for(var index = users.length - 1; index >= 0; index--) {
    console.log(users[index])
}

while( user = users.pop() ) {
    console.log(user)
}

var users = ['user 01', 'user 02']
while( user = users.reverse().pop() ) {
    console.log(user)
}

var users = ['user 01', 'user 02']
while( user = users.shift() ) {
    console.log(user)
}
