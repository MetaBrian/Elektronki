import { useLocation } from "react-router-dom";

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


            </div>

        </div>
        </>
    )

}

export default DisplayCards;