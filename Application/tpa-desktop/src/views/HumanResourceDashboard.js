import { useNavigate } from "react-router-dom";
import HumanResourceHeader from "../component/HumanResourceHeader";


function HumanResource(){

    let nav = useNavigate()

console.log("Hello Rico");
return(
    <div>
        <HumanResourceHeader/>
    </div>
    )
}

export default HumanResource