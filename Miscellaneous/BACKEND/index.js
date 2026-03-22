const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/register', (req, res) => {
    let {username, password} = req.query;
    res.send(`standard GET response. Welcome ${username}!`);
})

app.post('/register', (req, res) => {
    let {username, password} = req.body;  
    res.send(`standard POST response. Welcome ${username}!`);
})


// app.post('/register', (req, res) => {
//   console.log(req.body);  
//   res.json({
//     message: 'Register API working',
//     data: req.body
//   });
// });

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});