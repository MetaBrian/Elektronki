function ContactMe() {

    return(
        <>
        <div className='footer'>
            <div className='footerLeft'>
                <span>
                    <h4>© 2023 Elektronki
                        <br/>
                    All rights reserved</h4>
                </span>
            </div>

       
            
                
            <div className='footerRight'>
                <h4>Contact me! </h4>
                <button className='footerButtons' onClick={()=>{window.open('https://github.com/MetaBrian','_blank')}}>
                    <img height='70%' width='100%'src='../src/assets/GitHub-logo.png' alt='Github Logo'/>
                </button>
                <button className='footerButtons' onClick={()=>{window.open('https://www.linkedin.com/in/leonardo-brian-campos/','_blank')}}>
                    <img height='60%' width='80%'src='../src/assets/linkedinicon.png' alt='linkedin icon'/>
                </button>
            </div>

        </div>
        </>
    )
}

export default ContactMe;