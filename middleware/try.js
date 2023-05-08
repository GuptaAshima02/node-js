const express= require('express');
const app= express();

const reqfilter=(req,res,next)=>{
    if(!req.query.age)
    {
        res.send("please provide age");
    }
    else if(req.query.age<18)
    {
        res.send("you can not access this page");
    }
    else{
        next();
    }
}
app.use(reqfilter)

app.get('/',(req,res)=>{
    res.send("welcome to home page");
});

app.get('/users',(req,res)=>{
    res.send("welcome to user page");
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
  });