
import {useState, useEffect} from 'react';
import Folder from './Folder';

function Home (){

    // const [message, setMessage] = useState("");

    // useEffect(() => {
    //   fetch("http://localhost:8080/getCards")
    //     .then((res) => res.json())
    //     .then((data) => {setMessage(JSON.stringify(data[0])); console.log(data)});
    // }, []);

    const x:any = [];

    fetch("http://localhost:8080/getCards")
    .then((res) => res.json())
    .then((data) => {data.forEach((e: any)=>
      
        x.push((e.title))); console.log(data)});

        console.log(x, 'this is x after the fetch')

    return (
        <>
        <div className='Home'>
            <h2 className='HomeText'>Welcome!{x[0]}</h2>
           <button onClick={()=> {console.log(x)}}></button>
            {/* <h2>{message}</h2>  */}
        </div>
        </>
    )
}

export default Home;