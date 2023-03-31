const express = require('express');
const app = express();
const PORT = 3333;
const cardController = require('./server/cardController.cjs')

app.get('/', cardController.newCard, (req, res) =>{
    return res.status(200).console.log('you are sending responses')
} )

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)});