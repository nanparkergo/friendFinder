var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;

// create json parser
var jsonParser = bodyParser.json();
// create url parser
var urlencodedParser = bodyParser.urlencoded({ extended: false})
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json'}))
// parse into a buffer
app.use(bodyParser.raw({ type: 'application/vnd.suctom-type'}))
// parse an html body into a string
app.use(bodyParser.text({ type: 'text/html'}) )

require("./app/routing/html-routes.js")(app);
require("./app/routing/api-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
