
import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css'
import HumanResourceHeader from '../component/HumanResourceHeader';
import { auth, db } from '../firebase_setup/firebase';
import handleRequest from '../handles/handleRequest';


function HumanResourceSalaryAdjustment (){
    
    const [employees, setEmployee] = useState([]);
    const EmployeeDatabase = collection(db, "Employee")

    useEffect(() => {
        const getuser = async () => {
        const data = await getDocs(EmployeeDatabase);
        setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
    
        getuser();
    }, [])

    const location = useLocation()
    const employee = location.state.employee 
    const [newSalary, setNewSalary] = useState("")
    const [newContent, setContent] = useState("")
    const oldSalary = employee.employeeSalary
     
    const addRequest = (e) => {
        e.preventDefault()

        let currentRole = "";

        employees.map((employee) => {
            if (auth.currentUser.email.toLocaleLowerCase() === employee.employeeEmail.toLocaleLowerCase()) {
              currentRole = employee.employeeRoleId
            }
          });

        handleRequest("Salary", newContent, newSalary, employee.employeeEmail)
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