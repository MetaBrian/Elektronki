import { Link } from "react-router-dom"

function NavBar() {

    return (
        <>
        <div className="navBar">

            <div className='navBarLogo'>
              
            <img height='100%' width='37%'src='../src/assets/elektronki.gif' alt='Elektronki logo'/>
               <Link id='LogoText'to='/'><h1>Elektronki</h1></Link>
           <div></div>
                

            </div>

        
            <div className="navBarLinks">

            <Link to='/flashcards' className="navLinks">
           <h2>My Flashcards</h2> 
            </Link>

            <Link to='/createcardsfront' className="navLinks">
            <h2>Create a Card</h2>
            </Link>

            <Link to='/exammode' className="navLinks">
                <h2>Quiz me</h2>
            </Link>



            {/* <Link to='/testingerrors' className="navLinks">
            <h2>Error Page</h2>
            </Link> */}
            </div>


            <div className='navBarButtons'>
               
            <button className='navButtons' onClick={() => {window.open('https://github.com/MetaBrian/Elektronki','_blank'); console.log('clicked')}}>
                <img height= '63%' width='100%'src='../src/assets/GitHub-logo.png' alt='Github logo button leading to the project"s repo'/>
            </button>

            {/* <button className='navButtons'>
                <img id='colorswitch'height='50%' width='100%' src="../src/assets/lightdark.png" alt='light and dark icon'/>
            </button> */}
            </div>

        </div>
    </>
   
  
)
}

export default NavBar;