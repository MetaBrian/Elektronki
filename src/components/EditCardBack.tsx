import { Link, useLocation } from "react-router-dom";
import editCard from "./editCard";

function EditCardBack(){

    const EditCard = useLocation().state;
  
    return (
        <>
        <div className='newCards'>


        <h2 id='EditCardsTitle' className='PageTitle'>Edit your card!</h2>
            

            <div id='cardBack'>           
                <textarea id='textAreaBack' placeholder={EditCard.backContent} rows={4} cols={100} ></textarea>

            
               <button id='EditButton' onClick={()=>{

            const textArea = document.getElementById('textAreaBack')
            if (textArea.value){
            editCard(EditCard._id, textArea.value)
    
            }
            else {
                window.alert('Please enter text')
            }
                }
               }>Edit FlashCard</button> 
            </div>

            <Link to='/EditCardsFront' id='flipButtonFront' state={EditCard}> 
                <img height='100%' width='100%'src='../src/assets/flip.png' alt='flip icon'/>
           </Link>

        </div>
        </>
    )

}
export default EditCardBack;