import { addDoc, collection } from "firebase/firestore/lite"
import { auth, db } from "../firebase_setup/firebase"

const handleWarningLetter = (Reason, EmployeeId, LetterStatus) => {
    const ref = collection(db, "WarningLetter") // Firebase creates this automatically
    
    let data = {
        Reason: Reason,
        Date: new Date(),
        EmployeeId: EmployeeId,
        LetterStatus: LetterStatus,
        Issuer: auth.currentUser.email
    }

    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

export default handleWarningLetter