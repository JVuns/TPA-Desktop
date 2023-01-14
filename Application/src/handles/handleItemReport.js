import { addDoc, collection } from "firebase/firestore/lite"
import { auth, db } from "../firebase_setup/firebase"

const handleItemReport = (description, item) => {
    const ref = collection(db, "Report") // Firebase creates this automatically
    
    let data = {
        reportDescription: description,
        item: item,
        reporter: auth.currentUser.email
    }

    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

export default handleItemReport