import {Link} from 'react-router-dom'
import createCard from './submitCard'
import { useState, useEffect } from 'react'

function CardFront (){
    const [cardContentFront, setcardContentFront] = useState('')


    return(
        <>
        <div className='newCards'>
            <h2 className='PageTitle'>Create a Card!</h2>

            <div id='cardFront'>
   
                    <form>
                        <input id='CardTitle' type='text' placeholder="Card Title" name='frontTitle'></input>
                    </form>
            
            <div id='cardFrontText'>
            <textarea id='textAreaFront' placeholder='Enter content here' rows={4} cols={50} name='frontContent'></textarea>
            </div>

            </div>
          <button onClick={()=>{
            setcardContentFront(document.getElementById('textAreaFront').value);
            useEffect(()=>{console.log(cardContentFront, [cardContentFront], 'this is your state')})
            // createCard(document.getElementById('CardTitle').value,  document.getElementById('textAreaFront').value)
            }}>testingMongo</button>

           <Link to='/createcardsback' id='flipButtonFront'>
                <img height='100%' width='100%' src='../src/assets/flip.png'/>
           </Link>

        </div>
        </>
    
    )

}

export default CardFront;