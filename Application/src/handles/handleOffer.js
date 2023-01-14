import { addDoc, collection } from "firebase/firestore/lite"
import { auth, db } from "../firebase_setup/firebase"

const handleOffer = (date, sender, description, summary, status) => {
    const ref = collection(db, "Party") // Firebase creates this automatically
    
    let data = {
        partyDate: date,
        partyContact: sender,
        partyType: description,
        partySummary: summary,
        partyStatus: status
    }

    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

export default handleOffer