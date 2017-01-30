var user = { "id" : 1234, "name" : "somkiat", "age": 30 }
console.log( user.id )
console.log( user.name )
console.log( user.age )

var users = [  
    { "id" : 1, "name" : "somkiat 01", "age": 30 },
    { "id" : 2,  "age": 30 }
]

for (var i = 0; i < users.length; i++) {
    if( users[i].name == undefined ) {
        console.log( users[i].id )
    } else {
        console.log( users[i].id + ", " + users[i].name )
    }
};


