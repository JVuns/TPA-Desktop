import { useNavigate } from "react-router-dom";
import Header from "./Header";

const HumanResourceHeader = () =>{


    const nav = useNavigate();

    const createEvent = () => {

        nav('/promotion/create-event')
    }

    return(

    <div className="row">
        <button onClick={createEvent}>Create Event</button>
        <Header/>
    </div>

    )

}

export default HumanResourceHeader