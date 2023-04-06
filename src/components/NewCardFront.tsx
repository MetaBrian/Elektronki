import {Link} from 'react-router-dom'
import React, { Component } from 'react'

class CardFront extends Component {
    constructor (props:string) {
        super (props)

        this.state = {title:'', frontContent:''}

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            title: document.getElementById('CardTitle').value, 
        frontContent:document.getElementById('textAreaFront').value
        }, ()=>console.log(this.state, 'this is your state')
        )
    }

   

    render(){
        
        return(
            <>
        <div className='newCards'>
            <h2 className='PageTitle'>Create a Card!</h2>

            <div id='cardFront'>
   
                    <form>
                        <input id='CardTitle' type='text' placeholder="Card Title" name='frontTitle'></input>
                    </form>
            
       
            <textarea id='textAreaFront' placeholder='Enter your text here' rows={4} cols={50} name='frontContent'></textarea>
         

            </div>
<button onClick={()=>{
          {this.handleClick()}}}></button>

           <Link to='/createcardsback'
           onClick={()=>{
          {this.handleClick();}
          }}
             id='flipButtonFront' >
                <img height='100%' width='100%' src='../src/assets/flip.png'/>
           </Link>

        </div>
        </>

        )
    }

}

export default CardFront;


