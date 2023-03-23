import { Link } from "react-router-dom"

function NavBar() {

    return (
        <>
        <div className="navBar">

            <img id='elektronkiLogo' src='../src/assets/elektronki.png' alt="Elektronki's logo"/>
            <Link to='/error'>Error page</Link>
            
            <button className='navButtons'onClick= {() => {window.open('https://github.com/MetaBrian/Elektronki','_blank')}}>
                Github
            </button>

            <button className='navButtons'>
                Quiz Mode
            </button>

            <button className='navButtons'>
                My FlashCards
            </button>

            <button className='navButtons'>
                Mode Switch
            </button>
            
        </div>
    </>
   
  
)
}

export default NavBar