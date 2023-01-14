import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase_setup/firebase";

function Header () {

    let nav = useNavigate()

    const logOut = async () => {
        
        await signOut(auth);

        nav('/')
    }

    const back = async () => {
        nav(-1)
    }
    
    const leaveRequest = () => {
        
        //leave request

        nav('/request/leave')
    }

    const TimeChangeRequest = () => {
        
        //sign out

        nav('/')
    }


    const ResignationRequest = () => {
        
        //Resign

        nav('/')
    }

    const FundRequest  = () => {
        
        nav('/request/fund')
    }

    return(
        <div>
            <button onClick={logOut}>Sign Out</button>
            <button onClick={leaveRequest}>Leave Request</button>
            <button onClick={TimeChangeRequest}>Working Time Change Request</button>
            <button onClick={ResignationRequest}>Resignation Request</button>
            <button onClick={FundRequest}>Fund Request</button>
            <button onClick={back}>Return</button>
        </div>
    )

}

export default Header