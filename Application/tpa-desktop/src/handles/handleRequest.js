import { addDoc, collection } from "firebase/firestore/lite"
import { auth, db } from "../firebase_setup/firebase"

const handleRequest = (type, content, amount) => {
    const ref = collection(db, "Request") // Firebase creates this automatically
    
    let data = {
        requestType: type,
        employeeId: auth.currentUser.email,
        requestDate: new Date(),
        requestContent: content,
        fundAmount: amount
    }

    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

export default handleRequest