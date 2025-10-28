import {useState} from "react"

function Counter (){
    const [counter, setCounter]= useState(0)
 
    
let counter =10
const handleAdd= ()=> {
    counter ++
}
    return(
        <div>
        <p>{counter}</p>
        <button>restar</button>
        <button onClick={handleAdd}>Sumar</button>
        <button>reset</button>
        </div>
    )
}
export default Counter  