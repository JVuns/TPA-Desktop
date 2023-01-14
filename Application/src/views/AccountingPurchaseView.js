import { Alert } from "bootstrap";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import HeaderAccounting from "../component/HeaderAccounting";
import ManagerHeader from "../component/ManagerHeader";
import { auth, db } from "../firebase_setup/firebase";

const AccountingPurchaseView = () =>{

    const [report, setReport] = useState([])
    const [invoice, setInvoice] = useState([])
    const [fullReport, setFReport] = useState([])
    const [employees, setEmployee] = useState([])

    const InvoiceDatabase = collection(db, "Invoice")
    const PurchaseDatabase = collection(db, "Purchase")
    const EmployeeDatabase = collection(db, "Employee")

    useEffect(() => {
        const getPurchase = async () => {
            const data = await getDocs(PurchaseDatabase);
            let arr = []
            data.docs.forEach((letter) => {
                let d = letter.data()
                if(true){
                    arr.push({...d, id: letter.id})
                }
            })
            setReport(arr)
        }
        getPurchase();

        const getInvoice = async () => {
            const data = await getDocs(InvoiceDatabase);
            let arr = []
            data.docs.forEach((letter) => {
                let d = letter.data()
                if(true){
                    arr.push({...d, id: letter.id})
                }
            })
            setInvoice(arr)
        }
        getInvoice();

    }, [])

    const reportAdapter = () => {
        
        let arr = [];

        report.forEach(element => {
            let obj = {}
            let einvoice = {}
            // console.log(element);
            invoice.forEach( minvoice =>{
                // console.log(minvoice.id + " " + element.invoiceId);
                if(minvoice.id == element.invoiceId){
                    einvoice = minvoice
                }
            })

            arr.push(
                obj = {
                    "id" : element.id,
                    "costProjection" : element.costProjection,
                    "invoice1" : element.invoiceId,
                    "purchaseDate" : element.purchaseDate, 
                    "purchaseItem" : element.purchaseItem,
                    "invoice2" : einvoice
                }
            )
        });
        // console.log(arr);
        arr.forEach(element => {
            console.log(element);
        });

        setFReport(arr)

    } 

    const columns = [
        {
            name: 'Cost Projection',
            selector: row => row.costProjection,
        },
        {
            name: 'Purchase Date',
            selector: row => row.purchaseDate?.toDate()?.toString(),
        },
        {
            name: 'Purchase Item',
            selector: row => row.purchaseItem,
        },
        {
            name: 'Invoice',
            selector: row => row.invoice1?"Invoice Available":"Invoice Pending"
        }
    ];

return(
    <div>
        <HeaderAccounting />
        <button onClick={(e) => {reportAdapter()}}>View Purchase Report</button>
        {
            fullReport.length == 0 ? "" : <DataTable columns={columns} data={fullReport} theme={'tableTheme'} expandableRows expandOnRowClicked expandableRowsComponent={
                (row) => {
                    return(
                        <div>
                            {row.data.invoice1 === "" ?  
                            <div>
                                Invoice has not been uploaded yet
                            </div>
                             : ""  }
                             {row.data.invoice1 !== "" ?  
                            <div>
                                <div>Quantity: {row.data.invoice2.quantity}</div>
                                <div>Invoice Date: {row.data.invoice2.invoiceDate?.toDate()?.toString()}</div>
                                <div>Total: {row.data.invoice2.total}</div>
                            </div>
                             : ""  }
                        {/* {/* <button onClick={(e) => {updateStatus('Approved', row.data.id, row.data.requestType, row.data.fundAmount, row.data.employeeId)}}>Approve</button> */}
                        {/* <button onClick={(e) => {reportAdapter('Rejected', row.data.id, row.data.requestType, row.data.fundAmount, row.data.employeeId)}}>Reject</button> */} 
                        </div>)
            }
            }/>
        }
    </div>
)

}

export default AccountingPurchaseView
