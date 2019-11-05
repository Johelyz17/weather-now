const express = require('express');
const bodyParser = require("body-parser");

const app = express();
 
// settting view engine
app.set("view engien", "ejs");

// middleware
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false}));

/* 
ROUTES
*/

// get /
app.get('/', function (req, res) {
  res.render("home.ejs", {weather: "coming soon"} );
});

app.post("/", function(req, res){
  let weatherNow = "The weather in" + req.body.city + "is 70 C";
  let err = false;
  res.render("home.ejs", {weather: weatherNow, error: err} );
});
 
app.listen(3000,function() {
    console.log("server is live on port:3000")
})