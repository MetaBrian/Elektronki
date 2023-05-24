function deleteCard(_id: string){
    fetch('http://localhost:8080/deleteCard', {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            _id: _id
        })        
    })
    .catch(error => console.log(error))
    }
    // implement safeguard for accidental click
    //add an alert for users if delete is not working
    //add success message
export default deleteCard;