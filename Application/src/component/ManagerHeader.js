import { useNavigate } from "react-router-dom";
import Header from "./Header";

const ManagerHeader = () =>{


    const nav = useNavigate();

    const viewLetter = () => {

        nav('/manager/view-letter')
    }

    const viewRequest = () => {

        nav('/manager/view-request')
    }

    return(

    <div className="row">
        <button onClick={viewLetter}>View Letters</button>
        <button onClick={viewRequest}>View Request</button>
        <Header/>
    </div>

    )

}

export default ManagerHeader