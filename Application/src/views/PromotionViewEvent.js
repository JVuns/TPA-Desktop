import { collection, doc, getDocs, updateDoc } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db } from "../firebase_setup/firebase"
import HumanResourceHeader from "../component/HumanResourceHeader"
import DataTable from "react-data-table-component"

const PromotionViewEvent = () => {

    const [voucher, setRequest] = useState([])
    const VoucherDatabase = collection(db, "Voucher")

    useEffect(() => {
        const getuser = async () => {
            const data = await getDocs(VoucherDatabase);
            setRequest(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getuser();

    }, [])

    const columns = [
        {
            name: 'Voucher Name',
            selector: row => row.voucherName,
        },
        {
            name: 'Valid Until',
            selector: row => row.validUntil,
        },
        {
            name: 'Voucher Modifier',
            selector: row => row.voucherModifier,
        }];
        console.log(voucher);
    return (

        <DataTable columns={columns} data={voucher} theme={'tableTheme'} />

    )

}

export default PromotionViewEvent