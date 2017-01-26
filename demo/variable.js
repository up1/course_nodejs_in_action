var counter = 0;
var message = "Hello world";
var isLogin = false;

var users = ["User 1", "User 2"];
var mixData = [1, 2, false, "User 1", "User 2"];

var dataDictionary = {"id": 1, "name": "Name 1"};
console.log(dataDictionary['id']);
console.log(dataDictionary.id);
console.log(dataDictionary.name);

var userList = [{"id": 1, "name": "Name 1"}, {"id": 2, "name": "Name 2"}];
console.log(userList[0].id);
console.log(userList[0].name);
userList.forEach(function(user){
  console.log(user.id + " : " + user.name);
});

var add = function(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}
console.log(add(1, 2));
