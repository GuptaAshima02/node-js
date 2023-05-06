const express = require('express');
const details=require('./obj.js')
const params = express();

params.get('/details/:userId', (req, res) => {
    const newList=[...details];
    const userId=req.params.userId;
    console.log("user params",userId);
    const detail=newList.find(detail =>detail.id ===userId);
    console.log("detail",detail);
    // res.send('Hello world')
    res.json(detail);
  });
params.listen(9000,()=>{
    console.log("Hello world")
});