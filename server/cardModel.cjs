require('dotenv').config()
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const URI = process.env.MONGO_URI;

mongoose.connect(URI)
.then(() => {
    console.log('Connected Successfully2')
})
.catch ((err) => {
    console.log(err)
});

const cardSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;