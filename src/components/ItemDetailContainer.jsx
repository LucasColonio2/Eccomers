import { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import { getProduct } from '../firebase/db';


export default function ItemDetailContainer() {
    const [item, setItem] = useState()
    const { id } = useParams()
    
    useEffect(() => {

        getProduct(id, setItem)


    }, [id])


    return (
        <ItemDetail item={item} />

    )
}