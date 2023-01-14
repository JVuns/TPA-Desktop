import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import ExternalHeader from "../component/ExternalHeader"
import { db } from "../firebase_setup/firebase"

const ExternalViewFnB = () => {
    const [offer, setOffer] = useState([])
    const offerDatabase = collection(db, "FnB")

    useEffect(() => {
        const getuser = async () => {
            const data = await getDocs(offerDatabase);
            setOffer(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getuser();

    }, [])

    const columns = [
        {
            name: 'Batch',
            selector: row => row.Batch,
        },
        {
            name: 'Name',
            selector: row => row.Name,
        },
        {
            name: 'Quantity',
            selector: row => row.Quantity,
        },
        {
            name: 'Shelf Life',
            selector: row => row.ShelfLife,
        }
    ];

    return (
        <div>
            <ExternalHeader />
            <DataTable columns={columns} data={offer} theme={'tableTheme'}/>
        </div>

    )
}

export default ExternalViewFnB
