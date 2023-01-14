import { addDoc, collection } from "firebase/firestore/lite"
import { auth, db } from "../firebase_setup/firebase"

const handleTerminationLetter = (employeeId, status) => {
    const ref = collection(db, "TerminationLetter") // Firebase creates this automatically

    let data = {
        Date: new Date(),
        Issuer: auth.currentUser.email,
        Approved: status,
        EmployeeId: employeeId
    }

    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

export default handleTerminationLetter