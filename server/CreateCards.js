
import Card from "./cardModel";

async function createCard(title, content){
    const card = await Card.create({title: 'testingfrommoduleafterjoining', content:'testingfromModuleafterjoining'})
    console.log(card);
    };


export default createCard;