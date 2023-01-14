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

    const salaryChangeRequest = () => {
        
        //leave request

        nav('/human-resource/salary-change-request')
    }

    const createScheduleAdjustment = () => {
        
        //leave request

        nav('/human-resource/salary-change-request')
    }

    return(

    <div className="row">
        <button onClick={createScheduleAdjustment}>Create Schedule Adjustment</button>
        <button onClick={salaryChangeRequest}>Create Salary Adjustment</button>
        <button onClick={issueWarningLetter}>Issue Warning Letter</button>
        <button onClick={viewEmployee}>View Employee</button>
        <button onClick={addEmployee}>Add Employee</button>
        <Header/>
    </div>

    )

}

export default HumanResourceHeader