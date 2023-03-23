function NavBar() {

    return (
        <>
        <div className="navBar">

            <img id='elektronkiLogo' src='../src/assets/elektronki.png' alt="Elektronki's logo"/>
            <button onClick = {() => {window.location.replace('localhost:5173') }} className='navButtons'>
                Elektronki
            </button>
            
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