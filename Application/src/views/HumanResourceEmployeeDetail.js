import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite"
import { db } from "../firebase_setup/firebase"
import handleWarningLetter from "../handles/handleIssueWarning"
import handleTerminationLetter from "../handles/handleTerminationLetter"
import HumanResourceHeader from "../component/HumanResourceHeader"

const HumanResourceEmployeeDetail = () => {


    const location = useLocation()
    const employee = location.state.employee
    
    const [currentShift, setShift] = useState("")
    const [WarningLetters, setWarningLetter] = useState([])
    const WarningLetterDatabase = collection(db, "WarningLetter")
    const [FilteredResult, setFiltered] = useState([])

    const init = () =>{
        setShift(employee.employeeShift)
    }

    useEffect(init, [])

    const terminate = () =>{
        console.log(employee.employeeEmail);
        handleTerminationLetter(employee.employeeEmail, "Pending")
        alert("Termination Letter Created")
    }

    const adjustShift = async () =>{
        console.log(currentShift);
        const oldEmployee = doc(db, "Employee", employee.id);
        const newVal = { employeeShift: currentShift };
        await updateDoc(oldEmployee, newVal);

    }

    const adjustSalary = () =>{
        nav('/human-resource/salary-adjustment', { state: { employee } });
    }

    let nav = useNavigate()

    useEffect(() => {
        const getWarn = async () => {
            const data = await getDocs(WarningLetterDatabase);
            // setWarningLetter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            let arr = []
            data.docs.forEach((letter) => {
                let d = letter.data()
                if(employee.employeeEmail == d.EmployeeId && d.LetterStatus !== "Inactive"){
                    arr.push({...d, id: letter.id})
                }
            })
            // console.log(arr);
            setWarningLetter(arr)
        }
        getWarn();

    }, [])

    return (
        <div className="App font-large">
            <HumanResourceHeader/>
            <div className="form">
                <div className="row fill">
                    <div className="left">
                        <div>Employee Name</div>
                        <div>Employee Role</div>
                        <div>Employee Email</div>
                        <div>Employee Address</div>
                        <div>Employee BOD</div>
                        <div>Employee Salary</div>
                        <div>Employee Status</div>
                        <div>Emplotee Shift</div>
                        <div>Employee Warning Letters</div>
                    </div>
                    <div className="left">
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                    </div>
                    <div className="right left-space">
                        <div>{employee.employeeName}</div>
                        <div>{employee.employeeRoleId}</div>
                        <div>{employee.employeeEmail}</div>
                        <div>{employee.employeeAddress}</div>
                        <div>{employee.employeeBOD} </div>
                        <div>{employee.employeeSalary} <button onClick={adjustSalary}>Adjust Salary</button> </div>
                        <div>{employee.employeeStatus}</div>
                        <div>
                        <select value={currentShift} onChange={(event)=>{setShift(event.target.value)}}>
                            <option value="DayShift">Day Shift</option>
                            <option value="NormalShift">Normal Shift</option>
                            <option value="NightShift">Night Shift</option>
                            <option value="MidnightShift">Midnight Shift</option>
                        </select>
                             <button onClick={adjustShift}>Adjust Shift</button> </div>
                        {WarningLetters.map((warningLetter)=>{
                            return(
                                <div>- Cause : {warningLetter.Reason}</div>
                            )
                        })}
                    {WarningLetters.length >= 3 ? <button onClick={terminate}>IssueTerminationLetter</button> : ""}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HumanResourceEmployeeDetail