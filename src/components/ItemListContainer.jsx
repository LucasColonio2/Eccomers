import { useState, useEffect } from 'react'
import Itemlist from './ItemList'

const products = [
    // 👩‍🦰 Mujeres
    {
        id: 1,
        categoria: "mujeres",
        nombre: "Campera de cuero ecológico",
        imagen: "https://picsum.photos/seed/producto1/400/300",
        precio: 42000,
        descripcion: "Campera negra de cuero ecológico con cierre metálico y forro interno suave."
    },
    {
        id: 2,
        categoria: "mujeres",
        nombre: "Jean Mom Fit",
        imagen: "https://picsum.photos/seed/producto1/400/300",
        precio: 31000,
        descripcion: "Jean celeste tiro alto estilo mom fit, ideal para looks casuales."
    },
    {
        id: 3,
        categoria: "mujeres",
        nombre: "Blusa de seda con lazo",
        imagen: "https://picsum.photos/seed/producto1/400/300",
        precio: 28000,
        descripcion: "Blusa elegante de seda con lazo al cuello y mangas largas."
    },


    // 👨 Hombres
    {
        id: 4,
        categoria: "hombres",
        nombre: "Camisa de lino blanca",
        imagen: "https://picsum.photos/seed/producto1/400/300",
        precio: 33500,
        descripcion: "Camisa liviana de lino 100% natural, ideal para clima cálido."
    },
    {
        id: 5,
        categoria: "hombres",
        nombre: "Pantalón chino beige",
        precio: 29800,
        descripcion: "Pantalón de algodón estilo chino con corte recto y bolsillos laterales."
    },
    {
        id: 6,
        categoria: "hombres",
        nombre: "Remera oversize negra",
        precio: 19500,
        descripcion: "Remera negra oversize de algodón peinado, corte relajado."
    },

    // 🧒 Niños
    {
        id: 7,
        categoria: "niños",
        nombre: "Campera inflable azul",
        precio: 27000,
        descripcion: "Campera inflable liviana, resistente al agua, con cierre frontal."
    },
    {
        id: 8,
        categoria: "niños",
        nombre: "Pantalón jogger de algodón",
        precio: 16500,
        descripcion: "Jogger gris con puños elásticos y cintura ajustable."
    },
    {
        id: 9,
        categoria: "niños",
        nombre: "Remera estampada de superhéroes",
        precio: 14500,
        descripcion: "Remera de manga corta con estampado de personajes favoritos."
    },

    // 👶 Bebés
    {
        id: 10,
        categoria: "bebes",
        nombre: "Body de algodón orgánico",
        precio: 8900,
        descripcion: "Body blanco de algodón orgánico con broches reforzados."
    },
    {
        id: 11,
        categoria: "bebes",
        nombre: "Enterito polar con capucha",
        precio: 12500,
        descripcion: "Enterito térmico polar con capucha y cierre frontal, ideal para invierno."
    },
    {
        id: 12,
        categoria: "bebes",
        nombre: "Babero impermeable",
        precio: 4200,
        descripcion: "Babero impermeable con diseño divertido y cierre ajustable."
    }

];

export default function ItemListContainer({ text }) {
    const [items, setItems] = useState([])

    const obtenerproductos = () => new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {

                resolve(products)
            }, 3000);

        } else {
            reject("NO se encontraron productos")
        }
    })

    useEffect(() => {
        obtenerproductos()
            .then(data => setItems(data))
    }, [])

    return (
        <Itemlist items= {items} />
    );
}
