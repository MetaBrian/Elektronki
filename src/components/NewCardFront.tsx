import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';


    function CardFront(){
        const cardBack = useLocation();
        const [title, setTitle] = useState('')
        const [frontContent, setFrontContent] = useState('')
        let header:string='Create a card'; 
        if ((cardBack.state !== null) && (cardBack.state.frontContent === true) && (cardBack.state.backContent !=='')){
            header ='Successfully created a card!'
        }
        
        return(
            <>
        <div className='newCards'>
            <h2 className='PageTitle'>{header}</h2>

            <div id='cardFront'>
   
                    <form>
                        <input id='CardTitle' type='text' placeholder="Card Title" name='frontTitle' onChange={(e)=>setTitle(e.target.value)}></input>
                    </form>
            
       
            <textarea id='textAreaFront' placeholder='Enter your text here' rows={4} cols={50} name='frontContent' onChange={(e)=>setFrontContent(e.target.value)}>

            </textarea>
         

            </div>

           <Link to='/createcardsback'
            state={{title:title, frontContent:frontContent}}
            onClick={()=>console.log(cardBack.state)}
             id='flipButtonFront' >
                <img height='100%' width='100%' src='../src/assets/flip.png'/>
           </Link>

        </div>
        </>

        )
    }


export default CardFront;


