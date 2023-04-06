import {Link, useLocation} from 'react-router-dom';

function NewCardBack(){


    return (
        <>
        <div className='newCards'>


        <h2 className='PageTitle'>Create a Card!</h2>
            

            <div id='cardBack'>
           
           
                <textarea id='textAreaBack' placeholder='Enter your text here' rows={4} cols={100}></textarea>

     
        
            </div>
            {/* onClick={// 
            createCard(document.getElementById('CardTitle').value,  document.getElementById('textAreaFront').value), document.getElementById('textAreaBack).value
            } */}
            <Link to='/createcardsfront' id='SubmitButton' className='SubmitButton' 
               >Submit</Link>

            <Link to='/createcardsfront' id='flipButtonBack'> 
            <img height='100%' width='100%'src='../src/assets/flip.png' alt='flip icon'/>
           </Link>
        

        </div>
        </>
    )

}
export default NewCardBack;