import Card from './cardModel.js'

cardController = {

    newCard(req,res,next){
        try{
            console.log(req)
            Card.create({
                title: '',
                content:''
            })
            console.log(res)
            return next();
        }
        catch(error){
            console.log('this is your error', error)
        }
    }

};

export default cardController;