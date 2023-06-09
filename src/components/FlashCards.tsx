import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"

function FlashCards(){

    const fetchedCards = useLocation().state[0][0];

    const folderLinks = [];
    for (let i=0; i < fetchedCards.length; i++){
  
      folderLinks.push(<Link to='/displayCards' key={`${fetchedCards[i]._id}`} state={fetchedCards[i]} className='displayCards'>{fetchedCards[i].title}</Link>)}

      const content = folderLinks[0] !== undefined  ? [...folderLinks] : <h2 id='noCards'>You have no cards!</h2>
      
      
    return (
        <>
        <div className='FlashCards'>
            
            <h2 className='PageTitle'>Flashcards</h2>

            <div className='myFlashCards'>

                
                {content}

            
            



            </div>

        </div>
        </>
    )

}

export default FlashCards;