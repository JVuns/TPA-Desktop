import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import ExternalHeader from "../component/ExternalHeader"
import { db } from "../firebase_setup/firebase"

const ExternalViewMovie = () => {
    const [request, setRequest] = useState([])
    const MovieDatabase = collection(db, "Movie")

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
          const data = await getDocs(MovieDatabase);
          setRequest(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
    
      getuser();

      },[])

      const columns = [
        {
            name: 'Movie Name',
            selector: row => row.name,
        },
        {
          name: 'Duration',
          selector: row => row.length + ' Minutes',
        },
        {
          name: 'Producer',
          selector: row => row.producer,
        },{
            name: 'Cast',
            selector: row => row.cast
        }
    ];

      return (
        <div>
          <ExternalHeader/>
          <DataTable columns={columns} data={request} theme={'tableTheme'} expandableRows expandOnRowClicked expandableRowsComponent={
            (row) => {
                return(<p> Description: {row.data.description}</p>)
        }
        }/>
        </div>
        
      )
}

export default ExternalViewMovie
