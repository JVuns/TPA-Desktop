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

        // if(imageAsFile == null){
        //     alert("invalid picture format")
        // }
        console.log(voucherName + voucherModifier + validUntil);
        HandleVoucher(voucherName, voucherModifier, validUntil)
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
                        {/* <label>Image</label> */}
                    </div>
                    <div className="left-space column">
                        <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
                        <input type="date" onChange={(e)=>{setValid(e.target.value)}}></input>
                        <input type="text" onChange={(e)=>{setModifier(e.target.value)}}></input>
                        {/* <input type="file" onChange={(e) => {setImageAsFile(e.target.files[0])}}></input> */}
                    </div>

                </form>
                <button onClick={handleUpload}> submit </button>
            </div>
        </div>)

}

export default PromotionCreateEvent