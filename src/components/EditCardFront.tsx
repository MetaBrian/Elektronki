import { Link, useLocation } from "react-router-dom";
import editCard from "./editCard";

function EditCardFront(){

    const EditCard = useLocation().state;
  
    return (
        <>
        <div className='newCards'>


        <h2 className='PageTitle'>Edit your card!</h2>
            

            <div id='cardBack'>           
                <textarea id='textAreaBack' placeholder={EditCard.frontContent} rows={4} cols={100} ></textarea>

            
               <button id='EditButton' onClick={()=>{
                const textArea = document.getElementById('textAreaBack')

                if (textArea.value){
                editCard(EditCard._id, textArea.value)
                location.href='/'; 
                window.alert('Edited your Card\'s front content successfully')
                }
                else {
                    window.alert('Please enter text')
                }
                //add the edit request here
              }
               }>Edit FlashCard</button> 
            </div>

            <Link to='/EditCardsBack' state={EditCard} id='flipButtonBack'> 
                <img height='100%' width='100%'src='../src/assets/flip.png' alt='flip icon'/>
           </Link>

        </div>
        </>
    )

}
export default EditCardFront;