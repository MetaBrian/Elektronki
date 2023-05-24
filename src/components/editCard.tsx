function editCard (_id: string, content: string){

if (window.location.pathname === '/EditCardsFront'){

    fetch('http://localhost:8080/editCardFront', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            _id: _id,
            content: content
        })        
    })
    .catch(error => console.log(error))
    }



else if (window.location.pathname === '/EditCardsBack'){
    fetch('http://localhost:8080/editCardBack', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            _id: _id,
            content: content
        })        
    })
    .catch(error => console.log(error))
    }
}
    // implement safeguard for accidental click
    //add an alert for users if delete is not working
    //add success message


export default editCard;