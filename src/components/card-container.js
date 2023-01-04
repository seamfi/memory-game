import { useEffect } from "react"
import {useRef} from "react"
import {useState} from "react"

function CardContainer(props) {
    const {imgArray, addClickedImage} = props
    
    
   
    return(
    <div>
    <div className="container" >
        <div  onClick={addClickedImage} className="card">
            <img src={imgArray[0]}  alt="" ></img>
        </div>
        <div onClick={addClickedImage} className="card">
            <img src={imgArray[1]}  alt=""></img>
        </div>
        <div onClick={addClickedImage} className="card">
            <img src={imgArray[2]}  alt=""></img>
        </div>
        <div onClick={addClickedImage} className="card">
            <img src={imgArray[3]}  alt=""></img>
        </div>
        <div onClick={addClickedImage} className="card">
        <img src={imgArray[4]}  alt=""></img>
        </div>
        <div>

        </div>
    </div>
    </div>
    )
}

export default CardContainer