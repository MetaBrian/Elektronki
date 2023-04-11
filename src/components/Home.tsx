
import {useState, useEffect} from 'react';

function Home (){

    const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("http://localhost:8080/getCards")
        .then((res) => res.json())
        .then((data) => {setMessage(JSON.stringify(data[0])); console.log(data)});
    }, []);

    return (
        <>
        <div className='Home'>
            <h2 className='HomeText'>Welcome! </h2>
            {/* <h2>{message}</h2>  */}
        </div>
        </>
    )
}

export default Home;