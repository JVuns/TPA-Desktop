import { collection, getDocs } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../firebase_setup/firebase"
import HumanResourceHeader from "../component/HumanResourceHeader"

const HumanResourceViewRequest = () => {

    const [request, setRequest] = useState([])
    const RequestDatabase = collection(db, "Request")

    useEffect(()=>{
        const getuser = async() =>{
          const data = await getDocs(RequestDatabase);
          setRequest(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
    
      getuser();

      },[])

      const columns = [
        {
            name: 'Employee',
            selector: row => row.id,
        },
        {
            name: 'Amount Requested',
            selector: row => row.amountOfMoney,
        },
        {
          name: 'Reason',
          selector: row => row.reason,
        },
        {
          name: 'Status',
          selector: row => row.status,
        }
        ];

      return (

        <DataTable columns={columns} data={request} theme={'tableTheme'} customStyles={tableStyle} expandableRows expandableRowsComponent={
            (row) => {
              return expand(row.data) 
            }
          } />
        
      )

}

export default HumanResourceViewRequest