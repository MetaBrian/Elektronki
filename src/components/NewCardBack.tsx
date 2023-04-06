import {Link, useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react'

function NewCardBack(){

    const [backContent, setBackContent] = useState('')
    useEffect(()=> console.log(backContent))
    const x = useLocation()

    return (
        <>
        <div className='newCards'>


        <h2 className='PageTitle'>Create a Card!</h2>
            

            <div id='cardBack'>
           
           
                <textarea id='textAreaBack' placeholder={ backContent ? 'false': 'Enter your text here' } rows={4} cols={100} onChange={(e)=>setBackContent(e.target.value)}></textarea>

     
        
            </div>
            {/* onClick={// 
            createCard(document.getElementById('CardTitle').value,  document.getElementById('textAreaFront').value), document.getElementById('textAreaBack).value
            } */}
        

            <Link to='/createcardsfront' id='flipButtonBack' onClick={()=>console.log(x)}
            > 
            <img height='100%' width='100%'src='../src/assets/flip.png' alt='flip icon'/>
           </Link>
        

        </div>
        </>
    )

}
export default NewCardBack;