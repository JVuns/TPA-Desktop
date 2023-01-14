
import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import '../App.css'
import { db } from '../firebase_setup/firebase';
import handleItemReport from '../handles/handleItemReport';

function EmployeeReportItem (){

    

    const [report, setReport] = useState("")
    const [obj, setObj] = useState("")
    const [item, setItem] = useState([])
    const ItemDatabase = collection(db, "Item")

    const addReport = (e) => {

        e.preventDefault()
            if(obj != ""){
                handleItemReport(obj, report)
            }

    }

    const findItem = (id) => {
        setObj("")
        item.map((ie) => {
            console.log(ie.ItemId)
            console.log(id)
            if(ie.ItemId == id){
                console.log("Display")
                setObj(ie) 
            }else{
                setObj("")
            }
        })
    }

    useEffect(()=>{
        const getuser = async() =>{
          const data = await getDocs(ItemDatabase);
          setItem(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }
    
      getuser();
      },[])
    
    return(
        <div>
            <div className='form-container'>
            <h1>{ obj.ItemName? "Item: " + obj.ItemName : "Item:" }</h1>
            <form className="form">
                <label >Item Id </label>
                <input type="text" onChange={(event) => {
                    findItem(event.target.value)
                    
                    }}></input>
                <label >Report </label>
                <input type="text" onChange={(event) => {setReport(event.target.value)}}></input>
                <button onClick={addReport}>Add Report</button>
            </form>

            </div>
        </div>
    )
}



export default EmployeeReportItem;