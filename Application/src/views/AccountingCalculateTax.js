import { Alert } from "bootstrap";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import HeaderAccounting from "../component/HeaderAccounting";
import ManagerHeader from "../component/ManagerHeader";
import { auth, db } from "../firebase_setup/firebase";

const AccountingCalculateTax = () =>{

    const [request, setRequest] = useState([])
    const [employees, setEmployee] = useState([])

    const WarningLetterDatabase = collection(db, "Request")
    const EmployeeDatabase = collection(db, "Employee")

    useEffect(() => {
        const getWarn = async () => {
            const data = await getDocs(WarningLetterDatabase);
            // setWarningLetter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            let arr = []
            data.docs.forEach((letter) => {
                let d = letter.data()
                // console.log("Warning " + d.status + " " + d.requestType);
                if(d.status === "Active" && ( d.requestType === "Salary" || d.requestType === "Fund" )){
                    arr.push({...d, id: letter.id})
                }
            })

            const getuser = async () => {
                const data = await getDocs(EmployeeDatabase);
                setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            }
          
            getuser();

            // console.log(arr);
            setRequest(arr)
        }
        getWarn();

    }, [])

    const updateStatus = async (status, id, type, amount, employeeEmail) =>{

        let currentid = "";

        console.log(employeeEmail);

        if(status === 'Approved'){
            employees.map((employee) => {
                if (employeeEmail.toLocaleLowerCase() === employee.employeeEmail.toLocaleLowerCase()) {
                    console.log("FOUND");
                    currentid = employee.id
                }
            });
            console.log(currentid);
            const oldEmployee = doc(db, "Employee", currentid);
            const newVal = { employeeSalary : amount};
            await updateDoc(oldEmployee, newVal);
        }

        const oldWarning = doc(db, "Request", id);
        const newVal = { status : "Archived"};
        await updateDoc(oldWarning, newVal);

        alert("Successfuly Approved Salary Change")
    }

    const columns = [
        {
            name: 'Requester',
            selector: row => row.employeeId,
        },
        {
            name: 'Department',
            selector: row => row.department,
        },
        {
            name: 'Request Type',
            selector: row => row.requestType,
        }
    ];

return(
    <div>
        <HeaderAccounting />
        {
            request.length == 0 ? "" : <DataTable columns={columns} data={request} theme={'tableTheme'} expandableRows expandOnRowClicked expandableRowsComponent={
                (row) => {
                    return(
                        <div>
                            {row.data.requestType == "Fund" ?  
                            <div>
                                <div>Type: {row.data.requestContent}</div>
                                <div>Fund: {row.data.fundAmount}</div>
                            </div>
                             : ""  }
                            {row.data.requestType == "Salary" ?  
                            <div>
                                <div>Request Reason: {row.data.requestContent}</div>
                                <div>Raise Amount: {row.data.fundAmount}</div>
                            </div>
                             : ""  }
                            {row.data.requestType == "Resignation" ?  
                            <div>
                                <div>Request Reason: {row.data.requestType}</div>
                                <div>Request Date: {row.data.fundAmount}</div>
                            </div>
                             : ""  }
                        <button onClick={(e) => {updateStatus('CalculateTax', row.data.id, row.data.requestType, row.data.fundAmount, row.data.employeeId)}}>Approve</button>
                        </div>)
            }
            }/>
        }
    </div>
)

}

export default AccountingCalculateTax
