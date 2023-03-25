import { Link } from "react-router-dom"

function NavBar() {

    return (
        <>
        <div className="navBar">

            <Link to='/' className='navLinks'>
            <img id='elektronkiLogo' src='../src/assets/elektronki.png' alt="Elektronki's logo"/>
                <p>Elektronki</p>
            </Link>

            <Link to='/flashcards'>
            FlashCards
            </Link>

            <Link to='/exammode'>
            Exam Mode
            </Link>

            <Link to='/createcards'>
            Create a card
            </Link>

            <Link to='/testingerrors'>
            Error Page
            </Link>



            <button className='navButtons' onClick= {() => {window.open('https://github.com/MetaBrian/Elektronki','_blank')}}>
                <img height= '100vh' width='100vw'src='../src/assets/GitHub-logo.png' alt='Github logo button leading to the project"s repo'/>
            </button>

            <button className='navButtons'>
                <img height='100vh' width= '100vw'src="../src/assets/light&dark-icon.png" alt='light and dark icon'/>
            </button>
            
        </div>
    </>
   
  
)
}

export default NavBar;