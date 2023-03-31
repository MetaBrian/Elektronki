import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const myURI = 'mongodb+srv://MetaBrian:Kaiser712@elektronkidb.tdzgdkx.mongodb.net/test';

const URI = process.env.MONGO_URI || myURI;

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

const mongoCard = mongoose.model('Card', cardSchema);

export default mongoCard;
console.log(mongoCard)