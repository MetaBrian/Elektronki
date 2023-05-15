import { useLocation } from "react-router-dom";

 function DisplayCards (){

    const test = useLocation().state;
    console.log(test)




    return (
        <>
        <div className='FlashCards'>
            
            <h2 className='PageTitle'>Flashcards</h2>
            
            <div className='myFlashCards'>

            
               <button id='testCard' className='displayCards'
                onClick={()=>{
                    const testCard = document.getElementById('testCard')
                    if (testCard.innerText === test.frontContent){
                        testCard.innerText = test.backContent 
                    }
                    else {
                        testCard.innerText = test.frontContent
                    }
                    
                }}
               >{test.frontContent}</button>


            </div>

        </div>
        </>
    )

}

export default DisplayCards;