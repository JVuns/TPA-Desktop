import { useNavigate } from "react-router-dom";
import Header from "./Header";

const HeaderAccounting = () =>{


    const nav = useNavigate();
    


    const calculate = () => {

    nav('/accounting/calculate')

    }

    const viewRequest = () => {

    nav('/accounting/view-request')

    }

    const viewPurchase = () => {

    nav('/accounting/purchase')

    }

    return(
    <div className="row">
        <button onClick={viewPurchase}>View Purchase</button>
        <button onClick={viewRequest}>View Request</button>
        <button onClick={calculate}>Calculate Tax</button>
        <button onClick={viewRequest}>View Request</button>
        <Header/>
    </div>
    )

}

export default HeaderAccounting