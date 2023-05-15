import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"

function FlashCards(){

    const fetchedCards = useLocation().state[0][0];
    console.log(fetchedCards);

    const teststring = [];
    for (let i=0; i < fetchedCards.length; i++){
  
      teststring.push(<Link to='/displayCards' key={`${fetchedCards[i]._id}`} state={fetchedCards[i]} className='displayCards'>{fetchedCards[i].title}</Link>)}

  
    return (
        <>
        <div className='FlashCards'>
            
            <h2 className='PageTitle'>Flashcards</h2>

            <div className='myFlashCards'>

                {[...teststring]}
            



            </div>

        </div>
        </>
    )

}

export default FlashCards;