import {Link, useLocation} from 'react-router-dom';
import {useState} from 'react'
import createCard from './submitCard';

function NewCardBack(){

    const [backContent, setBackContent] = useState('');
    const cardFront = useLocation();
    let check:boolean = false;
    if ((cardFront.state.title !== '') && (cardFront.state.frontContent !== '')){
        check = true;
    }
  
    return (
        <>
        <div className='newCards'>


        <h2 className='PageTitle'>Create a Card!</h2>
            

            <div id='cardBack'>           
                <textarea id='textAreaBack' placeholder='Enter your text here' rows={4} cols={100} onChange={(e)=>setBackContent(e.target.value)}></textarea>
            </div>

            <Link to='/createcardsfront' state={{backContent:backContent, frontContent: check}} id='SubmitButton' className='SubmitButton' onClick={()=>{
                createCard(cardFront.state.title, cardFront.state.frontContent, backContent);
        }}>Submit</Link>
           
            <Link to='/createcardsfront' id='flipButtonBack' onClick={()=>{console.log(cardFront.state)}}> 
                <img height='100%' width='100%'src='../src/assets/flip.png' alt='flip icon'/>
           </Link>
        

        </div>
        </>
    )

}
export default NewCardBack;