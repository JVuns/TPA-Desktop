import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase_setup/firebase";

function Content () {

    let nav = useNavigate()

    const logOut = async () => {
        
        await signOut(auth);

        nav('/')
    }

    return(
        <div>
            <button onClick={logOut}>Sign Out</button>
        </div>
    )

}

export default Content