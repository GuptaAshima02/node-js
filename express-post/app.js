const express = require('express');
const app = express();

app.use(express.json());

const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex = /^\d{10}$/;

app.post('/Registeruser', (req, res) => {
  const { name, address, email, phoneno, Dob } = req.body;
  if (!emailRegex.test(email) || !phoneRegex.test(phoneno)) {
    return res.json({ message: 'Invalid email or phone number' });
  }
  else{
  // Return a success message to the client
  res.json({ message: 'User registered successfully!' });
  }
});

app.listen(2000, () => {
  console.log('Server started on port 2000');
});