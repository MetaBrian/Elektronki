import { Link } from "react-router-dom"

function NavBar() {

    return (
        <>
        <div className="navBar">

            <div className='navBarLogo'>
              
                <img id='LogoImage' src='../src/assets/elektronki.png'/>
               <Link id='LogoText'to='/'><h1>Elektronki</h1></Link>
           <div></div>
                

            </div>

        
            <div className="navBarLinks">

            <Link to='/flashcards' className="navLinks">
           <h1>Flashcards</h1> 
            </Link>

            <Link to='/exammode' className="navLinks">
            <h1>Exam Mode</h1>
            </Link>

            <Link to='/createcards' className="navLinks">
            <h1>New Card</h1>
            </Link>

            <Link to='/testingerrors' className="navLinks">
            Error Page
            </Link>
            </div>


            <div className='navBarButtons'>
            <button className='navButtons' onClick={() => {window.open('https://github.com/MetaBrian/Elektronki','_blank'); console.log('clicked')}}>
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