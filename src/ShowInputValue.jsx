import { useState } from "react"

export default function ShowInputValue() {
    const [inputValue,setInputValue] = useState('')
    const [screenValue, setScreenValue] = useState('ERROR 4 0 4 ') 
    const handleInputValue = (e)=>{
        setInputValue(e.target.value)
    }

    const HandleShowInputValue = ()=> {
        setScreenValue(inputValue)
    }

    return(
        <>
           <h1> {screenValue} </h1>
           <input
            type="text" 
            onChange={handleInputValue}
            // value={inputValue}
            />
           <button onClick={HandleShowInputValue} >Show</button>
        </>
    )
};
