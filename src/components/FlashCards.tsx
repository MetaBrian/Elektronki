function FlashCards(){
    //get total cards from db
    const total: number = 99;

    //get folder card total from db
    const folder1: number = 20;
    const folder2: number = 79;

    //get folder name from db
    const dbFolder: string = 'placeholder';

    return (
        <>
        <div className='FlashCards'>
            
            <h2>FlashCards</h2>

            <div className='childDiv'>
            <button className='FlashCardsButtons' onClick={()=>{console.log('clickedfolder1')}}>
                <img height='50%' width='50%' src='../src/assets/black-folder.png' alt="a black folder"/>
                <p>Folder 1 ({folder1})</p>
            </button>

            <button className='FlashCardsButtons' onClick={()=>{console.log('clickedfolder2')}}>
                <img height='50%' width='50%' src='../src/assets/black-folder.png' alt="a black folder"/>
                Folder 2 ({folder2})
            </button>

            <button className='FlashCardsButtons' onClick={()=>{console.log('clickedfoldertotal')}}>
                <img height='50%' width='50%' src='../src/assets/black-folder.png' alt="a black folder"/>
                All Cards ({total})
            </button>
            </div>

        </div>
        </>
    )

}

export default FlashCards;