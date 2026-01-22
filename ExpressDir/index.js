const express = require('express');
const app = express(); 

// console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`); 
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     // res.send("Hello from app.use()");
//     // res.send({
//     //     name: "John Doe",
//     //     age: 30,
//     //     city: "New York"
//     // });

//     let code = "<h1> Hello from Express.js </h1> <ul>Items <li> Item 1 </li> <li> Item 2 </li> <li> Item 3 </li> </ul>";
//     res.send(code); 
// });

app.get('/', (req, res) => {
    res.send('hello! i am root');
});

// app.get('/item1', (req, res) => {
//     res.send('you contacted item 1 path');
// });

// app.get('/item2', (req, res) => { //localhost:8080/item2
//     res.send('you contacted item 2 path');
// })

// app.use((req, res) => {
//     res.send("this path does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("you send a post request to root");
// })


//PATH PARAMETERS
// app.get("/:username/:id", (req, res) => {
//     console.log(req.params);
    
//     res.send("you send a get request to root");
// });

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    console.log(`username is ${username} and id is ${id}`);
    
    let htmlStr = `<h1> Welcome to the page of @${username} </h1>`;
    res.send(htmlStr);
    // res.send("Welcome user" );
});

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("no results found");
// })

app.get("/search", (req, res) => {
    let  {q} = req.query;
    if(!q){
        return res.send("nothing searched");
    }
    
    res.send(`<h1>search result for query: ${q}</h1>`);
    // res.send(`search result for query: ${q}`);
})