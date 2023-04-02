const error = require('console');
const Card = require('./cardModel');

const cardController = {

   async createCard (req, res, next){
        try{
            const {frontTitle, frontContent} = await req.body;
            await Card.create({
                title: 'testingcontroller',
                content: 'testingcontroller'
            }).then(
                card => {
                res.locals.card = card;
                return next();
            });
        }
        catch{return next(error)}
    }

};

module.exports = cardController;