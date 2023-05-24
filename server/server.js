const dotenv = require('dotenv/config');
const express = require("express");
const cors = require("cors");
const Card = require("./cardModel");
const mongoose = require('mongoose');
const app = express();

const URI = process.env.MONGO_URI;

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

app.get("/getCards", async (req, res, next) => {
  try{
    const cards = await Card.find({});
    await res.json(cards);
  }
  catch(err) {
    return next(err);
  }
});

app.post('/newCard', async (req, res, next) =>{
  const { title, frontContent, backContent } = await req.body;
  try{
    await Card.create({title: req.body.title, frontContent: req.body.frontContent, backContent: req.body.backContent })
  }
catch(err){
  return next(err);
}
// await res.json();
})

app.post('/deleteCard', async (req, res, next) => {
  const _id = await req.body

  try {
    await console.log(_id)
    await Card.deleteOne({
      "_id": _id
    })
  }
  catch (err){
    return next(err)
  }

})

app.post('/editCardFront', async (req, res, next) => {
  const {_id, content }= await req.body

  try {
    await Card.updateOne({_id: _id}, { $set: {frontContent: content}})

  }
  catch (err){
    return next(err)
  }

})

app.post('/editCardBack', async (req, res, next) => {
  const {_id, content }= await req.body

  try {
    await Card.updateOne({_id: _id}, { $set: {backContent: content}})

  }
  catch (err){
    return next(err)
  }

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