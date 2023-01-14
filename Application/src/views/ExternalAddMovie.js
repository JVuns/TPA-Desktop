import { useState } from "react"
import ExternalHeader from "../component/ExternalHeader"
import handleMovie from "../handles/handleMovie"

const ExternalAddMovie = () => {
    
    const [movieName, setName] = useState("")
    const [producer, setProducer] = useState("")
    const [length, setLength] = useState("")
    const [description, setDescription] = useState("")
    const [cast, setCast] = useState("")

    const createMovie = () =>{
        handleMovie(movieName, producer, length, description, cast)

        alert("Successfuly created movie")
    }

    return(
        <div>
            <ExternalHeader/>
              <div className="small-area">
                <form className="row">
                    <div className="column">
                        <label>Movie Name</label>
                        <label>Producer</label>
                        <label>Length</label>
                        <label className="text-area-height text-area-height-margin">Movie Description</label>
                        <label>Cast</label>
                        {/* <label>Image</label> */}
                    </div>
                    <div className="left-space column">
                        <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
                        <input type="text" onChange={(e)=>{setProducer(e.target.value)}}></input>
                        <input type="text" onChange={(e)=>{setLength(e.target.value)}}></input>
                        <textarea className="text-area-height" type="text" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                        <input type="text" onChange={(e)=>{setCast(e.target.value)}}></input>
                        
                    </div>

                </form>
                <button onClick={createMovie}> submit </button>
            </div>
        </div>
    )
}

export default ExternalAddMovie