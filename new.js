var request = require("request");
var fs = require("fs");

console.log("downloading image......")

request.get("https://sytantris.github.io/http-examples/future.jpg")
.on("error", function (err){
  throw err;
})

.on('response', function (response){

  console.log("Response Status Message: ", response.StatusMessage)
  console.log(response.headers['content-type']);
  console.log("Image Downloaded!")
})
.pipe(fs.createWriteStream("./future.jpg"))


