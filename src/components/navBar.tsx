import { Link } from "react-router-dom"

function NavBar() {

    return (
        <>
        <div className="navBar">
        



            <div className="navBarLinks">

           

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
            </div>

            <div className='navBarButtons'>
            <button className='navButtons' onClick= {() => {window.open('https://github.com/MetaBrian/Elektronki','_blank')}}>
                <img height= '100%' width='100%'src='../src/assets/GitHub-logo.png' alt='Github logo button leading to the project"s repo'/>
            </button>

            <button className='navButtons'>
                <img height='100%' width='100%' src="../src/assets/light&dark-icon.png" alt='light and dark icon'/>
            </button>
            </div>

        </div>
    </>
   
  
)
}

export default NavBar;