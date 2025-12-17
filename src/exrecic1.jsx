import { useState } from "react"

export default function Exercic() {

    const [inputValue, setInputValue] = useState('')
    const [title , setTitle] = useState('ERROR 4 0 4')
    
    function handleTitle(){
        
        setTitle(inputValue)
    }

    return (
        <>
            <h1 id="screen">{title}</h1>
            <input
                id="input"
                type="text"
                onChange={(e)=>{
                    setInputValue(e.target.value)
                }}
            />
            <button onClick={()=>{handleTitle()}} >Add</button>
            <button onClick={handleTitle} >gawr</button>
        </>
    )
};
