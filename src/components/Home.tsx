
import {useState, useEffect} from 'react';

function Home (){

    const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("http://localhost:8080/message")
        .then((res) => res.json())
        .then((data) => setMessage(data.message));
    }, []);

    return (
        <>
        <div className='Home'>
            <h2 className='HomeText'>Welcome! {message}</h2>
            
        </div>
        </>
    )
}

export default Home;