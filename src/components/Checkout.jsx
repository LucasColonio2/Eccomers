import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createOrder } from '../firebase/db';
import { serverTimestamp } from 'firebase/firestore';
import { useContext } from "react";
import { primerContext } from "../context/CartContext";
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

export default function Checkout() {
const { total ,carrito, clearCart} = useContext (primerContext)
const navigate = useNavigate ()

const handleSumbit = async (e) => {
    e.preventDefault()
const form = e.target
const email = form.email.value
const name= form.name.value
const phone = form.phone.value

const order = {
    buyer: {email,name,phone},
    total: total,
    items: carrito,
    date: serverTimestamp ()

}

const ok = await createOrder (order)
    
if (ok) {
  clearCart()
  navigate('/')
   toast ("Pedido realizado",{duration:500})
} else {
  toast ("No se pudo realizar el pedido")
}
}


  return (
    <div className="d-flex justify-content-center">
      <Form 
      onSubmit = {handleSumbit}
      className="mt-5 border p-3 rounded w-50">
        <p className="fw-bold">
          Para finalizar tu compra necesitamos
        </p>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pepito Perez"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Numero de celular</Form.Label>
          <Form.Control
            type="text"
            placeholder="1123434565"
            required
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          className="w-100"
        >
          Finalizar compra 🛒
        </Button>
      </Form>
    </div>
  );
}

