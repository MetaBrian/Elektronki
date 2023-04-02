import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGO_URI

mongoose.connect(URI)
    .then( ()=> {
        console.log('Connected successfully')
    }) 
    .catch((err) => {
    console.log(err)
})


// mongoose.connection.on("open", function(){
//     console.log('mongoDB is connected')
// })

