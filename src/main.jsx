import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import Exercic from './exrecic1'
import ShowInputValue from './ShowInputValue'
import ToDoList from './ToDoList'
import DynamiqueStyle from './DynamiqueStyle'

// function Btn(props){
//   function show (a){
//   alert('hello'+a)
// }
//   return(
//     <button onClick={()=>show('agrah')}>{props.title}</button>
//   )
// }
// function Aa(){
// const [fname, setFname] = useState('malika')
//   return(
//     <>
//     <Btn  title='add' />
//     <Btn  title='delete' />
//     <Btn  title='create' />
//     <h1>hello {fname}</h1>
//     <button onClick={()=>setFname('khalil')} >{fname}</button>
//     <button onClick={()=>setFname('Driss')} >{fname}</button>
//     <button onClick={()=>setFname(' Faysal')} >{fname} chi</button>
//     <a href='https://www.w3schools.com/react/react_hooks.asp' >hello</a>
//     </>
//   )
// }



createRoot(document.getElementById('root')).render(<ShowInputValue/>)
