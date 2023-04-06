const dotenv = require('dotenv/config');
const express = require("express");
const cors = require("cors");
const Card = require("./cardModel");
const mongoose = require('mongoose');
const app = express();

const URI = process.env.MONGO_URI;

const Schema = mongoose.Schema;

app.use(cors());
app.use(express.json());

mongoose.connect(URI)
    .then( ()=> {
        console.log('Connected to MongoDB successfully')
    }) 
    .catch((err) => {
    console.log(err)
});


//for fetch requests made by the front-end

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post('/newCard', async (req, res, next) =>{
  // console.log(req.body);
  const { title, frontContent, backContent } = await req.body;
 await Card.create({title: req.body.title, frontContent: req.body.frontContent, backContent: req.body.backContent });
  await res.json();
 return next();
})




//Global error handler

app.use('*', (err, res) => {
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