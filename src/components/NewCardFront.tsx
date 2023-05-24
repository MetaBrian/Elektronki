import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';


    function CardFront(){
        const cardBack = useLocation();
        const [title, setTitle] = useState('')
        const [frontContent, setFrontContent] = useState('')
        let header:string='Create a card!'; 
        if ((cardBack.state !== null) && (cardBack.state.frontContent === true) && (cardBack.state.backContent !=='')){
            header ='Successfully created a card!'
        }
        else if ((cardBack.state !== null) && (cardBack.state.backContent === '') && (cardBack.state.frontContent === false))
        {
            header='Please fill out both sides of the card!!!'
        }
        else if((cardBack.state !== null) && (cardBack.state.frontContent === false)){
            header='Please fill out the front of the card & try again!'
        }
        else if((cardBack.state !== null && (cardBack.state.backContent === '') &&(cardBack.state.frontContent === true))){
            header='Please fill out the back of the card & try again!'
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
          
             id='flipButtonFront' >
                <img height='100%' width='100%' src='../src/assets/flip.png'/>
           </Link>

        </div>
        </>

        )
    }


export default CardFront;


