import '../App.css';
// import handleSubmit from './handles/handlesubmit';
import { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [employees, setEmployee] = useState([]);
  const EmployeeDatabase = collection(db, "Employee")
  let nav = useNavigate();
  
  const login = async (e) => {
    e.preventDefault()

    try{
      await signInWithEmailAndPassword(auth, username, password).then((userCred) => {
        sessionStorage.setItem('LoggedInUser', userCred.user)
        let currentRole;
        employees.map((employee) => {
          if(auth.currentUser.email.toLocaleLowerCase() == employee.employeeEmail.toLocaleLowerCase()){
            currentRole = employee.employeeRoleId
          }
        });
        if(currentRole == "Manager"){
          nav('/human-resource')
        }else if(currentRole == "Promotion"){
          // 
        }else if(currentRole == "Front"){
          // 
        }else if(currentRole == "Kitchen"){
          // 
        }else if(currentRole == "Schedule"){
          // 
        }else if(currentRole == "Operation"){
          // 
        }else if(currentRole == "External"){
          // 
        }else if(currentRole == "Admin"){
          // 
        }else if(currentRole == "Storage"){
          // 
        }else if(currentRole == "Accounting"){
          // 
        }else if(currentRole == "HumanResource"){
          // 
        }
      });
      // console.log(username);
    }catch(error){
      console.log(error.message);
    }
  };

  useEffect(()=>{
    const getuser = async() =>{
      const data = await getDocs(EmployeeDatabase);
      setEmployee(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  getuser();
  },[])
  
  const forgot = async () => {
    nav('/reset-password')
  };

  return (
    <div className="App">
      <form>
        <div className="form">
          <label>Username/Email</label>
          <input type="text" onChange={(event) => {setUsername(event.target.value)}} />
          <label>Password</label>
          <input type="password" onChange={(event) => {setPassword(event.target.value)}}/>
        <div>  
          <button onClick={login}>Sign In</button>
          <button onClick={forgot}>reset password</button> 
        </div>
        </div>
      </form>
    </div>
  );
}

export default App;