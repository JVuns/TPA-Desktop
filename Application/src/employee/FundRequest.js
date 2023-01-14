import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import '../App.css'
import Header from '../component/Header';
import { auth, db } from '../firebase_setup/firebase';
import handleRequest from '../handles/handleRequest';

function FundRequest (){

    const [content, setContent] = useState("")
    const [amount, setAmount] = useState("")

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

        employees.map((employee) => {
            if (auth.currentUser.email.toLocaleLowerCase() === employee.employeeEmail.toLocaleLowerCase()) {
              currentRole = employee.employeeRoleId
            }
          });

        e.preventDefault()
        
        handleRequest("Fund", content, amount, currentRole)
        alert("Request created")
    }
    
    return(
        <div>
            <Header/>
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