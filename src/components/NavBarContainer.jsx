import { useState, useEffect } from "react"
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";
import { getCategories } from "../firebase/db";

export default function NavBarContainer() {
    const [categorias, setCategorias] = useState([])
    const [isCartOpen, setIsCartOpen] = useState (false)

    useEffect(() => {
      /*   fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setCategorias(data)); */
            getCategories()
            .then (cats=> setCategorias (cats))
    }, [])
   
    return (
    <>
      <Navbar
        categorias={categorias}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}






