import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import '../App.css'
import Header from '../component/Header';
import { auth, db } from '../firebase_setup/firebase';
import handleRequest from '../handles/handleRequest';

function ResignationRequest (){

    const [date, setDate] = useState("")

    const [employees, setEmployee] = useState([]);
    const EmployeeDatabase = collection(db, "Employee")

    useEffect(() => {
        const getuser = async () => {
          const data = await getDocs(EmployeeDatabase);
          setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
    
        getuser();
      }, [])


    const addRequest = (e) => {

        let currentRole = "";
        let employeeName = "";

        employees.map((employee) => {
            if (auth.currentUser.email.toLocaleLowerCase() === employee.employeeEmail.toLocaleLowerCase()) {
              currentRole = employee.employeeRoleId
              employeeName = employee.employeeName
            }
          });

        e.preventDefault()
        
        handleRequest("Resignation", "Resignation of " + employeeName, date, currentRole)
        alert("Request created")
    }
    
    return(
        <div>
            <Header/>
            <div className='form-container'>

            <form className="form">
                <label >Resignation Date</label>
                <input type={'date'} onChange={(event) => {setDate(event.target.value)}}></input>
                <button onClick={addRequest}>Send Request</button>
            </form>

            </div>
        </div>
    )
}



export default ResignationRequest;