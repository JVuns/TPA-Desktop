import { useState } from 'react';
import '../App.css'
import handleRequest from '../handles/handleRequest';

function FundRequest (){

    const [content, setContent] = useState("")
    const [amount, setAmount] = useState("")

    const addRequest = (e) => {

        e.preventDefault()
        
        handleRequest("Fund", content, amount)

    }
    
    return(
        <div>
            <div className='form-container'>

            <form className="form">
                <label >Request Content</label>
                <textarea onChange={(event) => {setContent(event.target.value)}}></textarea>
                <label >Fund Amount</label>
                <input type="text" onChange={(event) => {setAmount(event.target.value)}}></input>
                <button onClick={addRequest}>Send Request</button>
            </form>

            </div>
        </div>
    )
}



export default FundRequest;