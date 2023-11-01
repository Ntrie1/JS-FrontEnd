import { useState } from "react"

export default function NameField(){
   
    const [text, setText] = useState('Some text');
   


    function changeHandler(e){
        setText(e.target.value)
    }
   
    function resetHandler(){
        setText(t => t = '')
    }
   
   
    return(
        <div>
            <br />
            <h4>You have typed:</h4>
            <p>{text ? text : 'You are yet to type...'}</p>
            <input value={text} onChange={changeHandler} />
            <br />
            <button onClick={resetHandler} >Reset</button>
        </div>
    )
}