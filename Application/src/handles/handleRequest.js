import { addDoc, collection, getDocs } from "firebase/firestore/lite"
import { useState } from "react"
import { auth, db } from "../firebase_setup/firebase"

const handleRequest = (type, content, amount, department) => {
    const ref = collection(db, "Request") // Firebase creates this automatically
     
    let data = {
        requestType: type,
        employeeId: auth.currentUser.email,
        requestDate: new Date(),
        requestContent: content,
        fundAmount: amount,
        status: "Pending",
        department: department
    }

    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

export default handleRequest