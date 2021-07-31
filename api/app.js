const express = require("express");
const app = express();

// load mongoose models
//conste { User } = 

app.get('/users', (req, res) => 
{ // retorna array de user
  res.send("Hello word");
})

app.post('/user', (req, res) => {

});

app.patch('/user/:id', (req, res) => {

});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
})