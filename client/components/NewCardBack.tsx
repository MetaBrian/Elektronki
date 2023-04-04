import {Link} from 'react-router-dom';

function NewCardBack(){
    return (
        <>
        <div className='newCards'>



            <h2 className='PageTitle'>Create a Card!</h2>

            <div id='cardBack'>
            
           
                <textarea id='textAreaBack' placeholder='Enter your text here' rows={4} cols={100}></textarea>

     
                <Link to='/createcardsfront' id='SubmitButton' className='SubmitButton' onClick={()=>{alert('Successfully created a flashcard!')}}>Submit</Link>
           
  

    
          
    

            </div>
          
            <Link to='/createcardsfront' id='flipButtonBack'> 
            <img height='100%' width='100%'src='../client/assets/flip.png' alt='flip icon'/>
           </Link>
        

        </div>
        </>
    )

}
export default NewCardBack;