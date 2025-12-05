import { useContext } from "react"
import { primerContext } from "../context/CartContext"


export default function CartContainer () {
    const {carrito} = useContext (primerContext)
    
    if (!Array.isArray(carrito) || carrito.length === 0) {
    return <p>Carrito vacío</p>;}
  
    return (
        <div className="d-flex flex-column">
            {carrito.map (prod => <p key={prod.id}>{prod.title}</p>)}
        </div>

    )
}