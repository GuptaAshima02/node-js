const express= require('express');
const app= express();



app.get('/',(req,res)=>{
    res.send("welcome to home page");
});

app.get('/users',(req,res)=>{
    res.send("welcome to user page");
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
  });