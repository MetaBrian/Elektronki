function FlashCards(){

    interface CardTitles {
        title: string
    }

    const folders:string[] = [];

    fetch("http://localhost:8080/getCards")
    .then((res) => res.json())
    .then((data) => {data.forEach((e: CardTitles)=>
      
        folders.push((e.title))); console.log(data)});
  
    return (
        <>
        <div className='FlashCards'>
            
            <h2 className='PageTitle'>Flashcards</h2>

            <div id='myFlashCards'className='childDiv'>

                <button id='button1' className='FlashCardsButtons' onClick={()=>{console.log(folders)}}>
                    <img height='50%' width='50%' src='../src/assets/black-folder.png' alt="a black folder"/>
                    <p>{folders[0]}</p>
                </button>
 
                <button id='folder2' className='FlashCardsButtons' onClick={()=>{

                for (let i=0; i < folders.length; i++){
                    const buttonFolders = document.createElement("button")
                    buttonFolders.textContent=folders[i]
                    document.getElementById('myFlashCards').appendChild(buttonFolders)
                }
                }}>
                    <img height='50%' width='50%' src='../src/assets/black-folder.png' alt="a black folder"/>
              
            </button>
            




            </div>

        </div>
        </>
    )

}

export default FlashCards;