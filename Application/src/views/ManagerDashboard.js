import { useNavigate } from "react-router-dom";
import ManagerHeader from "../component/ManagerHeader";


function ManagerDashboard(){

    let nav = useNavigate()

console.log("Hello Dico");
return(
    <div>
        <ManagerHeader/>
    </div>
    )
}

export default ManagerDashboard