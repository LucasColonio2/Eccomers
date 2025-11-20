import { useState, useEffect } from "react"
import Navbar from "./Navbar";

export default function NavBarContainer() {
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setCategorias(data));
    }, [])
    return (
        <Navbar categorias={categorias} />

    )
}