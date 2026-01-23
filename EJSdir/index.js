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

app.use(express.static("public"));


// app.get("/ig/:username", (req, res) => {
//     const { username } = req.params;
//     const instaData = require("./data.json");
//     const data = instaData[username];

//     console.log(data);

//     if (!data) {
//         return res.render("error.ejs"); // stop here
//     }

//     return res.render("instagram.ejs", { data }); // only one response
// }); OR

app.get("/ig/:username", (req, res) => {
    const { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];

    console.log(data);

    if (data) {
        return res.render("instagram.ejs", { data });
    } else {
        return res.render("error.ejs");
    }
});




app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor( Math.random() * 6) + 1;
    // res.send("Your rolled number is " + diceVal);
    // res.render("rolldice.ejs", { num: diceVal});
    res.render("rolldice.ejs", {diceVal});
});

//res.render will render ejs file


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});