import { addDoc, collection } from "firebase/firestore/lite"
import { db } from "../firebase_setup/firebase"

const handleSubmit = (username, password) => {
    const ref = collection(db, "credential") // Firebase creates this automatically

    let data = {
        username: username,
        password: password
    }

    console.log(data.username);

    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

export default handleSubmit