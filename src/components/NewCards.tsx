function CardFront (){

   
    return(
        <>
        <div className='newCards'>
            <h2>Create a Card!</h2>

            <div id='cardFront'>
   
                    <form>
                        <input type='text' placeholder="Card Title"></input>
                    </form>
            
            <div id='cardFrontText'>
                <input type='text' placeholder='Enter your text here'/>
            </div>

            </div>
               
               {/* Link to card back below instead */}
           <button id='flipButton'>
                <img height='100%' width='100%' src='../src/assets/flip.png'/>
           </button>

        </div>
        </>
    
    )

}

export default CardFront;