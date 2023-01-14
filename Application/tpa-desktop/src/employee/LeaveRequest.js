import { useState } from 'react';
import '../App.css'
import handleRequest from '../handles/handleRequest';
import handleFundRequest from '../handles/handleRequest';

function LeaveRequest (){

    const [content, setContent] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const addRequest = (e) => {

        e.preventDefault()
        
        handleRequest("Leave", content, [startDate, endDate])

        alert("Request Sent ")
    }
    
    return(
        <div>
            <div className='form-container'>

            <form className="form">
                <label >Request Content</label>
                <textarea onChange={(event) => {setContent(event.target.value)}}></textarea>
                <label >Start Date</label>
                <input type="date" onChange={(event) => {setStartDate(event.target.value)}}></input>
                <label>End Date</label>
                <input type="date" onChange={(event) => {setEndDate(event.target.value)}}></input>
                <button onClick={addRequest}>Send Request</button>
            </form>

            </div>
        </div>
    )
}



export default LeaveRequest;