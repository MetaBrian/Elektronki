import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"

function FlashCards(){

    const fetchedFolders = useLocation();


    const teststring = [];
    for (let i=0; i < fetchedFolders.state.length; i++){
  
      teststring.push(<Link to='/displayCards' key={`${[i]}`} state={fetchedFolders.state[i]} className='displayCards'>{fetchedFolders.state[i]}</Link>)}

  
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