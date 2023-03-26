function ExamMode(){
    return (
        <>
        <div className='containers'>

            <div className='ExamMode'>
                <h2>Pick a topic</h2>
            </div>
            <div>
                <button ><img src='../src/assets/black-folder.png'/></button>
            </div>


{/* 
        once topic clicked */}

            <div>
            <form>
                <label htmlFor="fname">ExamMode</label>
                <input id='fname' placeholder='Coming Soon...' type='text'/>
            </form>
            </div>
            
        </div>
        </>
    )
}

export default ExamMode;