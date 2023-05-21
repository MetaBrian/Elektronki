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

               <button id='EditButton' onClick={()=>{
                //insert mongodb edit request function here
                console.log('edit button clicked')}
               }>Edit FlashCard</button>
               <button id='DeleteButton' onClick={()=>{
                //insert mongodb delete function here
                //may need to refresh the page in order to resolve ui that does not reflect updated status of available flashcards
                console.log('delete button clicked')}}>Delete FlashCard</button>

            </div>

        </div>
        </>
    )

}

export default DisplayCards;