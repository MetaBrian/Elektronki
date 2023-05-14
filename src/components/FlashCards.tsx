import { useLocation } from "react-router-dom";

function FlashCards(){

    const fetchedFolders = useLocation();

    // fetchedFolders.state

    const teststring = [];
    for (let i=0; i < fetchedFolders.state.length; i++){
  
      teststring.push(<button key={`${[i]}`} onClick={()=>{console.log()}} className='displayCards'>{fetchedFolders.state[i]}</button>)}

  
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