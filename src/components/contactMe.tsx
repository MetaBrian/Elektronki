function contactMe() {

    return(
        <>
        <div className='footer'>
            <div>
                <span>
                    <p>@2023 Elektronki</p>
                    <p>All rights reserved</p>
                </span>
            </div>
        <div>
            Questions or Concerns? Contact me via Github or LinkedIn
            <button className='navButtons'>
                <img height='100vh' width='100vw' src='../src/assets/linkedinicon.png' alt='linkedin icon'/>
            </button>
            <button className='navButtons'>
                <img height='100vh' width='100vw' src='../src/assets/GitHub-logo.png' alt='Github Logo'/>
            </button>
            </div>
        </div>
        </>
    )
}

export default contactMe;