import {Link, useLocation} from 'react-router-dom';
import {useState} from 'react'
import createCard from './submitCard';

function NewCardBack(){

    const [backContent, setBackContent] = useState('')
    const cardFront = useLocation()

    return (
        <>
        <div className='newCards'>


        <h2 className='PageTitle'>Create a Card!</h2>
            

            <div id='cardBack'>           
                <textarea id='textAreaBack' placeholder='Enter your text here' rows={4} cols={100} onChange={(e)=>setBackContent(e.target.value)}></textarea>
            </div>

            <Link to='/createcardsfront' state={backContent} id='SubmitButton' className='SubmitButton' onClick={()=>{createCard(cardFront.state.title, cardFront.state.frontContent, document.getElementById('textAreaBack').value); console.log(backContent)}}>Submit</Link>
           
            <Link to='/createcardsfront' id='flipButtonBack'> 
                <img height='100%' width='100%'src='../src/assets/flip.png' alt='flip icon'/>
           </Link>
        

        </div>
        </>
    )

}
export default NewCardBack;