import { useState } from "react"
import ExternalHeader from "../component/ExternalHeader"
import handleOffer from "../handles/handleOffer"

const ExternalAddOffer = () => {

    const [offerDate, setDate] = useState('')
    const [offerSender, setSender] = useState('')
    const [offerDescription, setDescription] = useState('')
    const [offerSummary, setSummary] = useState('')
    const [offerStatus, setStatus] = useState('')
    const [offerType, setType] = useState('')

    const createOffer = () =>{

        handleOffer(offerDate, offerSender, offerDescription, offerSummary, offerStatus)
        alert("Offer successfuly created")

    }

    return (
        <div>
            <ExternalHeader/>
            <div class="small-area">
                <form className="row">
                    <div className="column">
                        <label>Offer Date</label>
                        <label>Offer Sender</label>
                        <label>Offer Description</label>
                        <label className="text-area-height text-area-height-margin">Offer Summary</label>
                        <label>Offer Status</label>
                        <label>Offer Type</label>
                        {/* <label>Image</label> */}
                    </div>
                    <div className="left-space column">
                        <input type="date" onChange={(e)=>{setDate(e.target.value)}}></input>
                        <input type="text" onChange={(e)=>{setSender(e.target.value)}}></input>
                        <input type="text" onChange={(e)=>{setDescription(e.target.value)}}></input>
                        <textarea className="text-area-height" type="text" onChange={(e)=>{setSummary(e.target.value)}}></textarea>
                        {/* <input type="text" onChange={(e)=>{setStatus(e.target.value)}}></input> */}
                        <select onChange={(e)=>{setStatus(e.target.value)}}>
                            <option value="Accepted">Accept</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                        <input type="text" onChange={(e)=>{setType(e.target.value)}}></input>
                        {/* <input type="file" onChange={(e) => {setImageAsFile(e.target.files[0])}}></input> */}
                    </div>

                </form>
                <button onClick={createOffer}> submit </button>
            </div>
        </div>
    )

}

export default ExternalAddOffer

