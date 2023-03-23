function cardFront (){

    const cardTitle:string = 'Card Title'
 //allow user to input, should have 'card title' as a placeholder

    const frontBodyText:string ='frontText'
   
   
    return(
        <>
        <div className='newCard'>
            <div className='cardTitle'>
                {cardTitle}
            </div>
            
            <br/><br/>

            <div className='cardFrontBody'>
                {frontBodyText}
            </div>

            <br/><br/>
            
            

        </div>
        <div className="cardButtons">
                <button>
                    Flip
                </button>
        </div>
        </>
    
    )

}

export default cardFront;