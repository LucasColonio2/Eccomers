import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {withLoading} from '../hoc/withLoading'
import Loader from "./Loader"

const ItemListWithLoading = withLoading(ItemList) 

export default function ItemListContainer({ text }) {
    const [items, setItems] = useState([])


    useEffect(() => {
      fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data=> setItems(data.products));
    }, [])

    return (
       //<ItemListWithLoading items={items} />
       <Loader render = { () => <ItemList items = {items} /> } />
    );
}
