import { addDoc, collection } from "firebase/firestore/lite"
import { auth, db } from "../firebase_setup/firebase"

const HandleVoucher = (name, modifier, valid) => {
    const ref = collection(db, "Voucher") // Firebase creates this automatically

    let data = {
        voucherName: name,
        voucherModifier: modifier,
        validUntil: valid,
    }

    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

export default HandleVoucher