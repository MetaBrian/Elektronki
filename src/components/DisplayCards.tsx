import { Link, useLocation } from "react-router-dom";
import deleteCard from "./deleteCard";

 function DisplayCards (){

    const UniqueCard = useLocation().state;

    return (
        <>
        <div className='FlashCards'>
            
            <h2 className='PageTitle'>Flashcards</h2>
            
            <div className='myFlashCards'>

            
               <button id='uniqueCard' className='displayCards'
                onClick={()=>{
                    const card = document.getElementById('uniqueCard')
                    if (card.innerText === UniqueCard.frontContent){
                        card.innerText = UniqueCard.backContent 
                    }
                    else {
                        card.innerText = UniqueCard.frontContent
                    }
                    
                }}
               >{UniqueCard.frontContent}</button>

               <Link id='EditButton' state={UniqueCard} to='/EditCardsFront'>Edit FlashCard</Link>


               <button id='DeleteButton' onClick={()=>{
                deleteCard(UniqueCard._id)
                location.href='/'; 
            window.alert('Your card has been successfully deleted')
                }}>Delete FlashCard</button>

            </div>

        </div>
        </>
    )

}

export default DisplayCards;