const express = require('express');
const app = express();
const PORT = 3333;
const cardController = require('./server/cardController.js');

app.get('/createcardsfront', cardController.newCard, (req, res) =>{
    return res.status(200).json(res.locals.newCard)
} )

console.log(res)

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)});