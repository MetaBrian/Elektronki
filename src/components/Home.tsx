
import {useState, useEffect} from 'react';

function Home (){

    const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("http://localhost:8080/message")
        .then((res) => res.json())
        .then((data) => {setMessage(data.find[0].backContent); console.log(data.find[0].backContent)});
    }, []);

    return (
        <>
        <div className='Home'>
            <h2 className='HomeText'>Welcome! {JSON.stringify(message)}</h2>
            
        </div>
        </>
    )
}

export default Home;