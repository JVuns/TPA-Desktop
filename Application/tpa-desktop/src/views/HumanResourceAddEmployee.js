
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import '../App.css'
import HumanResourceHeader from '../component/HumanResourceHeader';
import { auth } from '../firebase_setup/firebase';
import handleEmployee from '../handles/handleEmployee';

function AddEmployee (){

    const [username, setUsername] = useState("")
    const [roleId, setRoleId] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [BOD, setBOD] = useState("")
    const [salary, setSalary] = useState("")
    const [status, setStatus] = useState("")
    const [shift, setShift] = useState("")

    let successMessage = null
    let isValid = true

    const updateSchedule = (key) => {
        setShift(key)
    }

    const register = async (email, password) => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                email,
                password
            );
        } catch (error) {
            console.log.error(error.message)
        }
    }

    const addEmployee = (e) => {

        e.preventDefault()

        console.log(status);

        if(isValid){
            var length = 8,
                charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                password = "";
            for (var i = 0, n = charset.length; i < length; ++i) {
                password += charset.charAt(Math.floor(Math.random() * n));
            }
            console.log(username);
            handleEmployee(username, password, roleId, email, address, BOD, salary, status, shift)
            register(email, password)
        }else{
            console.log("Some are empty");
        }


    }
    
    return(
        <div>
            <HumanResourceHeader/>
            <div className='form-container'>

            <form className="form">
                <label>Employee Name</label>
                <input type="text" onChange={(event) => {setUsername(event.target.value)}}></input>
                <label >Employee Role</label>
                <input type="text" onChange={(event) => {setRoleId(event.target.value)}}></input>
                <label >Employee Email</label>
                <input type="text" onChange={(event) => {setEmail(event.target.value)}}></input>
                <label >Employee Address</label>
                <input type="text" onChange={(event) => {setAddress(event.target.value)}}></input>
                <label >Employee BOD</label>
                <input type="text" onChange={(event) => {setBOD(event.target.value)}}></input>
                <label >Employee Salary</label>
                <input type="text" onChange={(event) => {setSalary(event.target.value)}}></input>
                <label >Employee Status</label>
                <input type="text" onChange={(event) => {setStatus(event.target.value)}}></input>
                <div className=''>
                            <input name="shift" type="radio" onChange={(event)=>{updateSchedule("DayShift")}}/><label>Day Shift</label>
                </div>
                <div className=''>
                            <input name="shift" type="radio" onChange={(event)=>{updateSchedule("NormalShift")}}/><label>Normal Shift</label>
                </div>
                <div className=''>
                            <input name="shift" type="radio" onChange={(event)=>{updateSchedule("NightShift")}}/><label>Night Shift</label>
                </div>
                <div className=''>
                            <input name="shift" type="radio" onChange={(event)=>{updateSchedule("MidnightShift")}}/><label>Midnight Shift</label>
                </div>
                <button onClick={addEmployee}>AddEmployee</button>
                
            </form>

            <div className="success-notification">{ successMessage }</div>

            </div>
        </div>
    )
}

    

export default AddEmployee;