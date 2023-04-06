function createCard(cardTitle:string, cardFrontText: string, cardBackContent: string){
    fetch('http://localhost:8080/newCard', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: cardTitle, 
            frontContent: cardFrontText, 
            backContent: cardBackContent
        })        
    })
    .then(res => console.log(res, 'this is your res'))
    .catch(error => console.log(error))
    }
    //add an alert for users if submit is not working
    //add success message
export default createCard;