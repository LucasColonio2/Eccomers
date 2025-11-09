export default function Counter (props){
    console.log (props)
    const [counter, setCounter]= useState(0)
let i =10
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