import { Button } from "bootstrap"
import { Stack } from "bootstrap"
import { useState } from "react"
import PromotionHeader from "../component/PromotionHeader"
import HandleVoucher from "../handles/handleVoucher"
const PromotionCreateEvent = () => {

    const [imageAsFile, setImageAsFile] = useState('')
    const [voucherName, setName] = useState('')
    const [validUntil, setValid] = useState('')
    const [voucherModifier, setModifier] = useState('')

    const handleUpload = async (e) => {
        e.preventDefault();

        HandleVoucher(voucherName, voucherModifier, validUntil, imageAsFile)
        alert("Voucher has been successfuly created")
    }

    return (
        <div>
            <PromotionHeader />
            <div class="small-area">
                <form className="row">
                    <div className="column">
                        <label>Vourcher Name</label>
                        <label>Valid Until</label>
                        <label>Voucher Modifier</label>
                        <label>Image</label>
                    </div>
                    <div className="left-space column">
                        <input type="text" onClick={(e)=>{setName(e.target.value)}}></input>
                        <input type="date" onClick={(e)=>{setValid(e.target.value)}}></input>
                        <input type="text" onClick={(e)=>{setModifier(e.target.value)}}></input>
                        <input type="file" onChange={setImageAsFile}></input>
                    </div>

                </form>
                <button onClick={handleUpload}> submit </button>
            </div>
        </div>)

}

export default PromotionCreateEvent