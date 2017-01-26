var users = ["User 1", "User 2"];

for (var i = 0; i < users.length; i++) {
  console.log(users[i]);
}

for (var index in users) {
  console.log(index + "=>" + users[index]);
}

for (user of users) {
  console.log(user);
}

users.forEach(function(user){
  console.log(user);
})

while(user = users.reverse().pop()) {
  console.log(user);
}
