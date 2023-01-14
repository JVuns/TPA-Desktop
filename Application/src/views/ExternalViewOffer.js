import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import DataTable from "react-data-table-component"
import ExternalHeader from "../component/ExternalHeader"
import { db } from "../firebase_setup/firebase"

const ExternalViewOffer = () => {
    const [offer, setOffer] = useState([])
    const offerDatabase = collection(db, "Party")

    useEffect(() => {
        const getuser = async () => {
            const data = await getDocs(offerDatabase);
            setOffer(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getuser();

    }, [])

    const columns = [
        {
            name: 'Party',
            selector: row => row.partyContact,
        },
        {
            name: 'Offer Date',
            selector: row => row.partyDate,
        },
        {
            name: 'Status',
            selector: row => row.partyStatus,
        },
        {
            name: 'Summary',
            selector: row => row.partySummary,
        },
        {
            name: 'type',
            selector: row => row.partyType
        }
    ];

    return (
        <div>
            <ExternalHeader />
            <DataTable columns={columns} data={offer} theme={'tableTheme'}/>
        </div>

    )
}

export default ExternalViewOffer
