
import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import '../App.css'
import HumanResourceHeader from '../component/HumanResourceHeader';
import { db } from '../firebase_setup/firebase';
import handleWarningLetter from '../handles/handleIssueWarning';

function HumanResourceIssueWarningLetter (){

    const [employee, setEmployee] = useState("")
    const [warningReason, setWarningReason] = useState("")
    const [employees, setEmployees] = useState([])
    
    const EmployeeDatabase = collection(db, "Employee")

    const addReport = (e) => {

        e.preventDefault()
            if(warningReason != "" && employee != ""){
                handleWarningLetter(warningReason, employee.employeeEmail, "Inactive")
                alert("Successfully Issue Warning")
            }

    }

    const findEmployee = (id) => {
        setEmployee("")
        employees.map((ie) => {
            console.log("Result :" + ie.employeeEmail.toLocaleLowerCase())
            console.log("Target :" + id.toLocaleLowerCase())
            if(ie.employeeEmail.toLocaleLowerCase() == id.toLocaleLowerCase()){
                console.log("Display")
                setEmployee(ie) 
            }
        })
    }

    useEffect(()=>{
        const getuser = async() =>{
          const data = await getDocs(EmployeeDatabase);
          setEmployees(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
    
      getuser();

      },[])
    
    return(
        <div>
            <HumanResourceHeader/>
            <div className='form-container'>
            <h1>{ employee.employeeName? "Employee Name: " + employee.employeeName: "Employee Name:" }</h1>
            <form className="form">
                <label >Employee Email </label>
                <input type="text" onChange={(event) => {
                    findEmployee(event.target.value)
                    
                    }}></input>
                <label >Report </label>
                <input type="text" onChange={(event) => {setWarningReason(event.target.value)}}></input>
                <button onClick={addReport}>Add Report</button>
            </form>

            </div>
        </div>
    )
}



export default HumanResourceIssueWarningLetter;