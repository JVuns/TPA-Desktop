import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../firebase_setup/firebase"
import HumanResourceHeader from "../component/HumanResourceHeader"
import DataTable from "react-data-table-component"

const HumanResourceViewRequest = () => {

    const [request, setRequest] = useState([])
    const RequestDatabase = collection(db, "Request")

    const rejectRequest = async (request) => {
        console.log("Reject");
        const oldEmployee = doc(db, "Request", request.id);
        const newVal = { requestStatus: "Rejected" };
        await updateDoc(oldEmployee, newVal);
    }

    const acceptRequest = async (request) => {
        console.log("Accept");
        const oldEmployee = doc(db, "Request", request.id);
        const newVal = { requestStatus: "Accepted" };
        await updateDoc(oldEmployee, newVal);
    }

    useEffect(()=>{
        const getuser = async() =>{
          const data = await getDocs(RequestDatabase);
          setRequest(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
    
      getuser();

      },[])

      const columns = [
        {
            name: 'Requestee',
            selector: row => row.employeeId,
        },
        {
          name: 'Header',
          selector: row => row.requestContent,
        },
        {
          name: 'Type',
          selector: row => row.requestType,
        }];

      return (

        <DataTable columns={columns} data={request} theme={'tableTheme'} expandableRows expandOnRowClicked expandableRowsComponent={
            (row) => {
                console.log(row.data);
                if(('Salary' in request)){
                if (row.data.requestType === "Salary" || row.data.requestType === "Fund") {
                    return (<div className="row">
                    <div>
                        <p>Amount</p>
                        {row.data.fundAmount}
                    </div>
                    <button onClick={(event) => {rejectRequest(row.data)}} className="reject">Reject</button>
                    <button onClick={(event) => {acceptRequest(row.data)}} className="accept left-space">Accept</button>
                    </div>)
                }else if(row.data.requestType === "Leave"){
                    return (<div className="row">
                        <div>
                            <p>Start Date</p>
                            {row.data.fundAmount[0]}
                        </div>
                        <div className="left-space">
                            <p>End Date</p>
                            {row.data.fundAmount[1]}
                        </div>
                        <button onClick={(event) => {rejectRequest(row.data)}} className="reject">Reject</button>
                        <button onClick={(event) => {acceptRequest(row.data)}}  className="accept left-space">Accept</button>
                        </div>)
                }
            }
        }
        }/>
        
      )

}

export default HumanResourceViewRequest