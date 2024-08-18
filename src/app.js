const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000;

// Public static Path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));


// Routing 
app.get("/", function(req, res){
    res.render("index");
});


app.get("/Weather", function(req, res){
    res.render("weather");
});

app.get("*", function(req, res){
    res.render("404error", {
        errorMsg: "Oops! Page Not Found"
    });
});

app.listen(port, function(){
    console.log(`listening to the port at ${port}`);
});