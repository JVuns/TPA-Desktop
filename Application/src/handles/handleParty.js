import { addDoc, collection } from "firebase/firestore/lite"
import { auth, db } from "../firebase_setup/firebase"

const handleParty = (name, contact, type) => {
    const ref = collection(db, "Party") // Firebase creates this automatically
    
    let data = {
        partyName: name,
        partyContact: contact,
        partyType: type
    }

    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

export default handleParty