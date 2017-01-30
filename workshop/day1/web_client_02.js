var http = require("http");

// GET
var get_options = {
  host: "localhost",
  port: 8080,
  path: "/article"
};

http.get(get_options, function(response) {
  response.setEncoding("utf8");
  console.log("Response status code: " + response.statusCode);
  response.on("data", function(data) {
    console.log("Data: " + data);
  });
});

// POST
var post_data = "{'content': 'Blah Blah Blah'}";
var post_options = {
  host: "localhost",
  port: 8080,
  path: "/article/10/comment",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": post_data.length
  }
};

var request = http.request(post_options, function(response) {
  response.setEncoding("utf8");
  console.log("Response status code: " + response.statusCode);
  response.on("data", function(data) {
    console.log("Data: " + data);
  });
});
request.write(post_data);
request.end();