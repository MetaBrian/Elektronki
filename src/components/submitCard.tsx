function createCard(cardTitle:string, cardFrontText: string){
    fetch('http://localhost:8080/newCard', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({title:cardTitle, content:cardFrontText})        
    })
    .then(res => console.log(res, 'this is your res'))
    .catch(error => console.log(error))
    }
export default createCard;