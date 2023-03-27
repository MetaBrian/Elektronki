import {Link} from 'react-router-dom';

function NewCardBack(){
    return (
        <>
        <div className='newCards'>
            <h2 className='PageTitle'>Create a Card!</h2>

            <div id='cardBack'>
            
    
                <textarea id='textAreaBack' rows={4} cols={100}>Enter your text here</textarea>

                <div>
           <Link to='/createcardsfront' id='flipButtonBack'>
                <img height='50%' width='50%' src='../src/assets/flip.png'/>
           </Link>

     
           <button id='flipButtonFront'>
                <img height='100%' width='100%' src='../src/assets/elektronki.gif'/>
           </button>
           </div>
          
    

            </div>
               
        

        </div>
        </>
    )

}
export default NewCardBack;