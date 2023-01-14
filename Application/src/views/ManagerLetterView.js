import { Alert } from "bootstrap";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import ManagerHeader from "../component/ManagerHeader";
import { db } from "../firebase_setup/firebase";

const ManagerLetterView = () =>{

    const [warning, setWarningLetter] = useState([])
    const [termination, setTerminationLetter] = useState([])
    const [letter, setLetter] = useState([])
    const WarningLetterDatabase = collection(db, "WarningLetter")
    const TerminationLetterDatabase = collection(db, "TerminationLetter")
    

    useEffect(() => {
        const getWarn = async () => {
            const data = await getDocs(WarningLetterDatabase);
            // setWarningLetter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            let arr = []
            data.docs.forEach((letter) => {
                let d = letter.data()
                console.log("Warning " + d.LetterStatus);
                if(d.LetterStatus === "Inactive"){
                    arr.push({...d, id: letter.id})
                }
            })
            // console.log(arr);
            setWarningLetter(arr)
        }
        getWarn();

        const getTerm = async () => {
            const data = await getDocs(TerminationLetterDatabase);
            // setWarningLetter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            let arr = []
            data.docs.forEach((letter) => {
                let d = letter.data()
                console.log("Termination " + d.Approved);
                if( d.Approved == "Pending"){
                    arr.push({...d, id: letter.id})
                }
            })

            setTerminationLetter(arr)
            setLetter(arr)
        }
        getTerm();

        // letterAdapter()

    }, [])

    const letterAdapter = () => {
        
        let arr = [];

        termination.forEach(element => {
            let obj = {}
            arr.push(
                obj = {
                    "id" : element.id,
                    "status" : element.Approved,
                    "employeeId" : element.EmployeeId,
                    "issuer" : element.Issuer, 
                    "date" : element.Date,
                    "Type" : "Termination Letter"
                }
            )
        });

        warning.forEach(element => {
            let obj = {}
            arr.push(
                obj = {
                    "id" : element.id,
                    "status" : element.LetterStatus,
                    "employeeId" : element.EmployeeId,
                    "issuer" : element.Issuer, 
                    "date" : element.Date,
                    "Type" : "Warning Letter"
                }
                )
        });

        arr.forEach(element => {
            console.log(element.Type);
        });

        setLetter(arr)

    } 

    const updateStatus = async (status, id, type) =>{
        if(type === "Warning Letter"){
            const oldWarning = doc(db, "WarningLetter", id);
            const newVal = { LetterStatus : status === "Approved" ? "Active" : "Denied"};
            await updateDoc(oldWarning, newVal);
            console.log("Successfuly " + status + " " + type + " of letter" + id);
            alert("Successfuly " + status + " " + type + " of letter " + id)
        }else if(type === "Termination Letter"){
            const oldTermination = doc(db, "TerminationLetter", id);
            const newVal = { Approved : status === "Approved" ? "Approved" : "Denied"};
            await updateDoc(oldTermination, newVal);
            console.log("Successfuly " + status + " " + type + " of letter" + id);
            alert("Successfuly " + status + " " + type + " of letter " + id)
        }

    }

    const columns = [
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Employee ID',
            selector: row => row.employeeId,
        },
        {
            name: 'Issuer',
            selector: row => row.issuer,
        },
        {
            name: 'Date',
            selector: row => row.date?.toDate()?.toString(),
        }
    ];

return(
    <div>
        <ManagerHeader />
        <button onClick={letterAdapter}>View Letters</button>
        {
            letter.length == 0 ? "" : <DataTable columns={columns} data={letter} theme={'tableTheme'} expandableRows expandOnRowClicked expandableRowsComponent={
                (row) => {
                    return(<div>
                        <p>{row.data.Type}</p>
                        <button onClick={(e) => {updateStatus('Approved', row.data.id, row.data.Type)}}>Approve</button>
                        <button onClick={(e) => {updateStatus('Rejected', row.data.id, row.data.Type)}}>Reject</button>
                        </div>)
            }
            }/>
        }
    </div>
)

}

export default ManagerLetterView