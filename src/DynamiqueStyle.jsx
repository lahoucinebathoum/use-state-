import { useState } from "react"

export default function DynamiqueStyle() {
    
    const[textTransform, setTextTransform] = useState("capitalize")

    return (
        <>
            <section >
                <h6>SCREEN</h6>
                <div style={{
                    border: 'solid 1px green',
                    textAlign: 'center',
                    textTransform:textTransform
                }}>
                    <h1>abc abc</h1>
                </div>
            </section>
            <section>
                <h6>UPPERCASE / LOWERCASE</h6>
                <button onClick={()=>{
                    setTextTransform('uppercase')
                }}>To UPPERCASE</button>
                <button onClick={
                    ()=>{
                        setTextTransform('lowercase')
                    }
                }
                
                >To lowercase</button>
            </section>
            <section>
                <h1></h1>
            </section>
            <section>
                <h1></h1>
            </section>
        </>
    )
};
