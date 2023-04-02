const express = require("express");
const cors = require("cors");
const app = express();
const Card =require("./cardModel");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv/config');

const URI = process.env.MONGO_URI

app.use(cors());
app.use(express.json());

mongoose.connect(URI)
    .then( ()=> {
        console.log('Connected to MongoDB successfully')
    }) 
    .catch((err) => {
    console.log(err)
})

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post('/newCard', async (req, res, next) =>{
  // console.log(req.body);
  const { title, content } = await req.body;
 await Card.create({title: req.body.title, content: req.body.content });
  await res.json();
 return next();
})


app.use('*', (err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});