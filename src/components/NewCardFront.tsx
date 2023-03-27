import {Link} from 'react-router-dom'

function CardFront (){

   
    return(
        <>
        <div className='newCards'>
            <h2 className='PageTitle'>Create a Card!</h2>

            <div id='cardFront'>
   
                    <form>
                        <input id='CardTitle' type='text' placeholder="Card Title"></input>
                    </form>
            
            <div id='cardFrontText'>
            <textarea id='textAreaFront' placeholder='Enter content here' rows={4} cols={50}></textarea>
            </div>

            </div>
               
               {/* Link to card back below instead */}
           <Link to='/createcardsback' id='flipButtonFront'>
                <img height='100%' width='100%' src='../src/assets/flip.png'/>
           </Link>

        </div>
        </>
    
    )

}

export default CardFront;