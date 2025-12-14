import { useState, useContext } from "react";
import Button from 'react-bootstrap/Button'
import { primerContext } from "../context/CartContext";
import toast from 'react-hot-toast';

export default function ItemCount({ item }) {
    const [counter, setCounter] = useState(0)
    
    const { addToCart } = useContext(primerContext)



    const handleAdd = () => setCounter(counter + 1)
    const handleRes = () => counter > 0 && setCounter(counter - 1)


    const handleaddToCart = () =>{
        addToCart({...item, count: counter })
        toast ("Se agrego producto al carrito", {duration: 1000,  removeDelay: 500})
    } 

    return (
        < div >
            <p>{counter}</p>

            <div>


                <Button onClick={handleAdd} variant="danger">Sumar</Button>
                <Button onClick={handleRes} variant="success">Restar</Button>

                <Button
                    disabled={counter === 0}
                    onClick={handleaddToCart}
                >
                    Add to cart</Button>

            </div>

        </div>

    )
}