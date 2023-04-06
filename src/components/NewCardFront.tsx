import { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';


    function CardFront(){
        const x = useLocation();
        const [title, setTitle] = useState('')
        const [frontContent, setFrontContent] = useState('')
        const y = useEffect(() => console.log(title, frontContent))
        
        return(
            <>
        <div className='newCards'>
            <h2 className='PageTitle'>Create a Card!</h2>

            <div id='cardFront'>
   
                    <form>
                        <input id='CardTitle' type='text' placeholder="Card Title" name='frontTitle' onChange={(e)=>setTitle(e.target.value)}></input>
                    </form>
            
       
            <textarea id='textAreaFront' placeholder='Enter your text here' rows={4} cols={50} name='frontContent' onChange={(e)=>setFrontContent(e.target.value)}>

            </textarea>
         

            </div>

           <Link to='/createcardsback'

          onClick={()=> {x.state=title ; console.log(x, title)}}
             id='flipButtonFront' >
                <img height='100%' width='100%' src='../src/assets/flip.png'/>
           </Link>

        </div>
        </>

        )
    }


export default CardFront;


