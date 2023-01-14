import { useNavigate } from "react-router-dom";
import Header from "./Header";

const HumanResourceHeader = () =>{


    const nav = useNavigate();

    const issueWarningLetter = () => {
        
        //leave request

        nav('/human-resource/issue-warning-letter')
    }

    const viewEmployee = () => {
         
        //leave request

        nav('/human-resource/view-employee')
    }

    const addEmployee = () => {
        
        //leave request

        nav('/human-resource/add-employee')
    }
    
    const viewRequest = () => {
        
        //leave request

        nav('/human-resource/view-request')
    }
    return(

    <div className="row">
        <button onClick={issueWarningLetter}>Issue Warning Letter</button>
        <button onClick={viewEmployee}>View Employee</button>
        <button onClick={addEmployee}>Add Employee</button>
        <button onClick={viewRequest}>View Request</button>
        <Header/>
    </div>

    )

}

export default HumanResourceHeader