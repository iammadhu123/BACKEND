const express = require('express');
const app = express();
// const path = require('path');
const Path = require('path');

const port = 8080;

// const ejs = require('ejs'); //by default express will look for ejs in views folder

app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "/views")); //optional if views folder is in root directory 


app.get("/", (req, res) => {
    // res.send("Hello from EJS server  ");
    res.render("home.ejs");// or home
})

app.get("/hello", (req, res) => {
    res.send("hello");
})

//res.render will render ejs file


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});