
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css'
import HumanResourceHeader from '../component/HumanResourceHeader';
import handleRequest from '../handles/handleRequest';


function HumanResourceSalaryAdjustment (){

    const location = useLocation()
    const employee = location.state.employee 
    const [newSalary, setNewSalary] = useState("")
    const [newContent, setContent] = useState("")
    const oldSalary = employee.employeeSalary
    
    const addRequest = (e) => {
        e.preventDefault()

        handleRequest("Salary", newContent, newSalary)
        alert("Request Created")
    }

    return(
        <div>
            <HumanResourceHeader/>
            <form className="form">
                <div className='row'>
                    <h1>Employee Name: </h1>
                    <h1>{employee.employeeName}</h1>
                </div>
                <label>Old Salary</label>
                <input type="text" value={employee.employeeSalary} disabled></input>
                <label>New Salary</label>
                <input type="text" onChange={(event) => {setNewSalary(event.target.value)}}></input>
                <label>Description</label>
                <input type="text" onChange={(event) => {setContent(event.target.value)}}></input>
                <button onClick={addRequest}>Add Request</button>
            </form>
        </div>
    )
}



export default HumanResourceSalaryAdjustment;