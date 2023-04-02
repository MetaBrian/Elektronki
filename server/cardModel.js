const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}
})

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
