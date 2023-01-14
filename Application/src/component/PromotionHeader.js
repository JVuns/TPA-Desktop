import { useNavigate } from "react-router-dom";
import Header from "./Header";

const HumanResourceHeader = () =>{


    const nav = useNavigate();

    const createEvent = () => {

        nav('/promotion/create-event')
    }

    const viewEvent = () => {
        nav('/promotion/view-event')
    }

    return(

    <div className="row">
        <button onClick={viewEvent}>View Event</button>
        <button onClick={createEvent}>Create Event</button>
        <Header/>
    </div>

    )

}

export default HumanResourceHeader