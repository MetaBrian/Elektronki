import { Link } from "react-router-dom"

function NavBar() {

    return (
        <>
        <div className="navBar">
            <div className='logo'>
            <img id='elektronkiLogo' src='../src/assets/elektronki.png' alt="Elektronki's logo"/>
            <Link to='/' className='navLinks'>
                <p id='LogoText'>Elektronki</p>
            </Link>
            
            
            
            </div>

            <Link to='/flashcards' className="navLinks">
            FlashCards
            </Link>

            <Link to='/exammode' className="navLinks">
            Exam Mode
            </Link>

            <Link to='/createcards' className="navLinks">
            Create a card
            </Link>

            <Link to='/testingerrors' className="navLinks">
            Error Page
            </Link>



            <button className='navButtons' onClick= {() => {window.open('https://github.com/MetaBrian/Elektronki','_blank')}}>
                <img height= '100vh' width='100vw'src='../src/assets/GitHub-logo.png' alt='Github logo button leading to the project"s repo'/>
            </button>

            <button className='navButtons'>
                <img height='100vh' width='100vw' src="../src/assets/light&dark-icon.png" alt='light and dark icon'/>
            </button>
            
        </div>
    </>
   
  
)
}

export default NavBar;