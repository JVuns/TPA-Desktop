
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase_setup/firebase";

const ResetPassword = () =>{



  const nav = useNavigate();

  const returnPage = () => {

      nav(-1)
  }
    const [email, setEmail] = useState("")

    const sendEmail = async (e) =>{
        e.preventDefault()
        console.log(email);
        await sendPasswordResetEmail(auth, email)
        .then(function () {
            alert('Please check your email...')
        }).catch(function (e) {
            console.log(e)
        }) 
    }

    return (
        <div className="App">
          <button onClick={returnPage}>return</button>
          <form>
            <div className="form">
              <label>Username/Email</label>
              <input type="text" onChange={(event) => {setEmail(event.target.value)}} />
            <div>  
              <button onClick={sendEmail}>reset password</button> 
            </div>
            </div>
          </form>
        </div>
      );

}

export default ResetPassword