const Card = require('./cardModel.cjs')

cardController = {

    newCard(req,res,next){
        try{
            const {title, content} = req
            console.log(req)
            Card.create({
                title: {title},
                content:{content}
            })
            .then(
            next());
        }
        catch(error){
            console.log('this is your error', error)
        }
    }

};

module.exports = cardController;