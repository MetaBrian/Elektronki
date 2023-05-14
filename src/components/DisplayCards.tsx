import { useLocation } from "react-router-dom";

 function DisplayCards (){

    const test = useLocation().state;

    const cards = [];
    
     fetch("http://localhost:8080/getCards")
    .then((res) => res.json())
    .then((data) => {
        for (let i=0; i<data.length; i++){
            if (data[i].title === test){
                cards.push(<button key={`${[i]}`} >{data[i].frontContent}</button>)
            }
        }
         });


    return (
        <>
        <div className='FlashCards'>
            
            <h2 className='PageTitle'>Flashcards</h2>
            
            <div className='myFlashCards'>

            {[...cards]}
               


            </div>

        </div>
        </>
    )

}

export default DisplayCards;