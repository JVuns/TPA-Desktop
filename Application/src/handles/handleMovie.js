import { addDoc, collection } from "firebase/firestore/lite"
import { auth, db } from "../firebase_setup/firebase"

const handleMovie = (name, producer, length, description, cast) => {
    const ref = collection(db, "Movie") // Firebase creates this automatically
    
    let data = {
        name: name,
        producer: producer,
        length: length,
        description:description,
        cast:cast
    }

    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

export default handleMovie