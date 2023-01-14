import { useNavigate } from "react-router-dom";
import Header from "./Header";

const ExternalHeader = () =>{


    const nav = useNavigate();

    const addOffer = () => {
        
        //leave request

        nav('/external/add-offer')
    }

    const viewOffer = () => {
        
        //leave request

        nav('/external/view-offer')
    }

    const addMovie = () => {
        
        //leave request

        nav('/external/add-movie')
    }

    const viewMovie = () => {
        
        //leave request

        nav('/external/view-Movie')
    }

    const addfnb = () => {
        
        //leave request

        nav('/external/view-Movie')
    }

    const viewfnb = () => {
        
        //leave request

        nav('/external/view-fnb')
    }

    const addAdvertisement = () => {
        
        //leave request

        nav('/external/view-Movie')
    }

    const generateAdvertisementReport = () => {
        
        //leave request

        nav('/external/view-Movie')
    }

    const viewAdvertisementData = () => {
        
        //leave request

        nav('/external/view-Movie')
    }

    return(

    <div className="row">
        <button onClick={viewOffer}>View Offer</button>
        <button onClick={addOffer}>Add Offer</button>
        <button onClick={addMovie}>Add Movie</button>
        <button onClick={viewMovie}>View Movies</button>
        <button onClick={addfnb}>Add Food and Beverage</button>
        <button onClick={viewfnb}>View Food and Beverage</button>
        <button onClick={addAdvertisement}>Add Advertisement</button>
        <button onClick={generateAdvertisementReport}>Generate Advertisement Report</button>
        <button onClick={viewAdvertisementData}>View Advertisement Data</button>
        <Header/>
    </div>

    )

}

export default ExternalHeader