var express = require('express')
var app = express();
var ejs = require('ejs');

app.set('view engine','ejs')

app.use(
    express.static('static_files')
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const home = require('./routes/home.js')
app.use(home);

var listener = app.listen(process.env.PORT || 8000, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
    console.log("Visit http://localhost:8000/")
});