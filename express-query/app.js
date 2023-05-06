const express = require('express');
const details=require('./obj.js')
const params = express();

params.get('/details', (req, res) => {
    const newList=[...details];
    const userId=req.query;
    console.log(userId)
    // console.log(newList)
    if (userId) {
        const detail=newList.filter((s) =>s.id == userId.id);
        res.send(detail)
        res.json(detail);
        // console.log(detail)
    }
    else res.send(details);
    // console.log("user params",userId);
    // console.log("detail",detail);
    // // res.send('Hello world')
    
  });
params.listen(1000,()=>{
    console.log("Hello world")
});