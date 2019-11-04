const express = require('express')
const app = express()
 
// settting view engine
app.set("view engien", "ejs")

/* 
ROUTES
*/

// get /
app.get('/', function (req, res) {
  res.render("home.ejs");
});
 
app.listen(3000,function(){
    console.log("server is live on port:3000");
});