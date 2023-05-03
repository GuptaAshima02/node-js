const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world')
  });
  app.get('/home', (req, res) => {
    res.send('Home')
  });
  app.get('/name', (req, res) => {
    res.send('Contact')
  });
app.listen(3000,()=>{
    console.log("Hello world")
});