import {Link} from 'react-router-dom'

function CardFront (){


    return(
        <>
        <div className='newCards'>
            <h2 className='PageTitle'>Create a Card!</h2>

            <div id='cardFront'>
   
                    <form>
                        <input id='CardTitle' type='text' placeholder="Card Title" name='frontTitle'></input>
                    </form>
            
       
            <textarea id='textAreaFront' placeholder='Enter your text here' rows={4} cols={50} name='frontContent'></textarea>
         

            </div>
    
           <Link to='/createcardsback' id='flipButtonFront' onClick={()=>{
          console.log('link clicked')
          // createCard(document.getElementById('CardTitle').value,  document.getElementById('textAreaFront').value)
          }}>
                <img height='100%' width='100%' src='../src/assets/flip.png'/>
           </Link>

        </div>
        </>
    
    )

}

export default CardFront;