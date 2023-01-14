import { collection, getDocs } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../firebase_setup/firebase"
import DataTable from "react-data-table-component"
import HumanResourceHeader from "../component/HumanResourceHeader"

const HumanResourceViewEmployee = () => {

    const [employees, setEmployee] = useState([])
    const EmployeeDatabase = collection(db, "Employee")

    const [WarningLetters, setWarningLetter] = useState([])
    const WarningLetterDatabase = collection(db, "WarningLetter")

    let nav = useNavigate()

    useEffect(() => {
        const getuser = async () => {
            const data = await getDocs(EmployeeDatabase);
            setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getuser();

        const getWarn = async () => {
            const data = await getDocs(WarningLetterDatabase);
            setWarningLetter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getWarn();

    }, [])

    const getDetail = (employee) => {

        nav('/human-resource/employee-detail', { state: { employee } });
    
    }

    const columns = [
        {
            name: "Employee Name",
            selector: (row) => row.employeeName
        }, {
            name: "Employee Role",
            selector: (row) => row.employeeRoleId
        }, {
            name: "Employee Email",
            selector: (row) => row.employeeEmail
        }, {
            name: "Employee BOD",
            selector: (row) => row.employeeEmail
        }, {
            name: "Employee Address",
            selector: (row) => row.employeeEmail
        }, {
            name: "Employee Salary",
            selector: (row) => row.employeeEmail
        }, {
            name: "Employee Status",
            selector: (row) => row.employeeEmail
        }
    ]

    console.log(employees);

    return (

        <div className="App">
            <HumanResourceHeader/>
            <form className="form">

                <h1> Employee List </h1>


                {employees.map((employee) =>{

            return(
            <div>
                <button className="hoverable clickable employee-list" onClick={ (e) =>{getDetail(employee)}}>Name {employee.employeeName}</button>
            </div>
            )
            
        })}

            </form>

        </div>
    )

}

export default HumanResourceViewEmployee