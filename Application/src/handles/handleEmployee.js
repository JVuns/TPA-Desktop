import { addDoc, collection } from "firebase/firestore/lite"
import { db } from "../firebase_setup/firebase"

const handleEmployee = (username, password, roleId, email, address, BOD, salary, status, shift) => {
    const ref = collection(db, "Employee") // Firebase creates this automatically
    
    let data = {
        employeeName: username,
        employeePassword: password,
        employeeRoleId: roleId,
        employeeEmail: email,
        employeeAddress: address,
        employeeBOD: BOD,
        employeeSalary: salary,
        employeeStatus: status,
        employeeShift: shift
    }

    try {
        addDoc(ref, data)
    } catch(err) {
    console.log(err)
    }
}

export default handleEmployee