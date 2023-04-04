function ExamMode(){
    return (
        <>
        <div className='ExamMode'>

       
            <h2 className='PageTitle'>Choose a Topic</h2>
       

            <div className='childDiv'>
            <button className='FlashCardsButtons' onClick={()=>{console.log('clickedfolder1')}}>
                <img height='50%' width='50%' src='../client/assets/black-folder.png' alt="a black folder"/>
                <p>Folder 1 (20)</p>
            </button>

            <button className='FlashCardsButtons' onClick={()=>{console.log('clickedfolder2')}}>
                <img height='50%' width='50%' src='../client/assets/black-folder.png' alt="a black folder"/>
                Folder 2 (79)
            </button>

            <button className='FlashCardsButtons' onClick={()=>{console.log('clickedfoldertotal')}}>
                <img height='50%' width='50%' src='../client/assets/black-folder.png' alt="a black folder"/>
                All Cards (99)
            </button>
            </div>
            
        </div>
        </>
    )
}

export default ExamMode;