import { Link } from "react-router-dom"

function NavBar() {

    return (
        <>
        <div className="navBar">

            
            <Link to='/error'>
            <img id='elektronkiLogo' src='../src/assets/elektronki.png' alt="Elektronki's logo"/>
                Elektronki
            </Link>
            
         

          
{/* 
                make below into links */}
            <button className='navButtons'>
                Flashcards
            </button>

            <button className='navButtons'>
                Create a card
            </button>

            <button className='navButtons'>
                Exam Mode
            </button>
{/* 
            below buttons remain buttons */}

            <button className='navButtons'onClick= {() => {window.open('https://github.com/MetaBrian/Elektronki','_blank')}}>
                <img height= '100vh' width='100vw'src='../src/assets/GitHub-logo.png' alt='Github logo button leading to the project"s repo'/>
            </button>

            <button className='navButtons'>
                <img height='50vh' width= '100vw'src="../src/assets/light&dark-icon.png" alt='light and dark icon'/>
            </button>
            
        </div>
    </>
   
  
)
}

export default NavBar