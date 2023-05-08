const express = require('express');
const app = express();

app.use(express.json());
app.use(middleWare);


const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegex = /^\d{10}$/;

 function middleWare(req,res,next){

  const { name, address, email, phoneno, Dob } = req.body;

  const errorMessage={};

    if (name.length==0){
     errorMessage.name="Name is empty"
    }
    if (email.length==0){
      errorMessage.email="email is empty"}
    else{
      if (!emailRegex.test(email) ){
        errorMessage.email="Invalid email"
      }
      } 
    if (phoneno.length==0){
        errorMessage.phoneno="phone number is empty"}
    else{
      if  (!phoneRegex.test(phoneno)){
          errorMessage.phoneno="Invalid phone number"}
        }

    if(errorMessage.name || errorMessage.email || errorMessage.phoneno){
          errorMessage.result="Registration unsuccessfull!"
        }
    else{
          errorMessage.result="User registered successfully!"
        }

        req.validator = errorMessage;
        next();
}

app.post('/Registeruser', (req, res) => {
  const { name, email, phoneno ,result} = req.validator;
  res.send({name,email,phoneno,result});
  // res.end() ;
  
  //   res.json(errorMessage)
});

app.listen(2000, () => {
  console.log('Server started on port 2000');
});
