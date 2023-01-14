import { Alert } from "bootstrap";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ManagerHeader from "../component/ManagerHeader";
import { db } from "../firebase_setup/firebase";

const ManagerRequestView = () =>{

    const [request, setRequest] = useState([])
    const WarningLetterDatabase = collection(db, "Request")
    

    useEffect(() => {
        const getWarn = async () => {
            const data = await getDocs(WarningLetterDatabase);
            // setWarningLetter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            let arr = []
            data.docs.forEach((letter) => {
                let d = letter.data()
                console.log("Warning " + d.status + " " + d.requestType);
                if(d.status === "Pending" && (
                    d.requestType === "Resignation"||
                    d.requestType === "Salary" ||
                    d.requestType === "Fund")){
                    arr.push({...d, id: letter.id})
                }
            })
            // console.log(arr);
            setRequest(arr)
        }
        getWarn();

    }, [])

    const updateStatus = async (status, id, type) =>{
        const oldWarning = doc(db, "Request", id);
        const newVal = { status : status === "Approved" ? "Active" : "Denied"};
        await updateDoc(oldWarning, newVal);
        alert("Successfuly " + status + " " + type + " of letter " + id)
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
        <ManagerHeader />
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
                        <button onClick={(e) => {updateStatus('Approved', row.data.id, row.data.requestType)}}>Approve</button>
                        <button onClick={(e) => {updateStatus('Rejected', row.data.id, row.data.requestType)}}>Reject</button>
                        </div>)
            }
            }/>
        }
    </div>
)

}

export default ManagerRequestView
