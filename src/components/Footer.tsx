function ContactMe() {

    return(
        <>
        <div className='footer'>
            <div className='footerLeft'>
                <span>
                    <p>@2023 Elektronki
                        <br/>
                    All rights reserved</p>
                </span>
            </div>


            
                    
                
         <div className='footerRight'>
                <p>Questions or Concerns?</p>
                
                <button className='footerButtons' onClick={()=>{window.open('https://www.linkedin.com/in/leonardo-brian-campos/','_blank')}}>
                    <img height='100%' width='100%'src='../src/assets/linkedinicon.png' alt='linkedin icon'/>
                </button>
                <button className='footerButtons' onClick={()=>{window.open('https://github.com/MetaBrian','_blank')}}>
                    <img height='100%' width='100%'src='../src/assets/GitHub-logo.png' alt='Github Logo'/>
                </button>
              
        
        </div>

        </div>
        </>
    )
}

export default ContactMe;