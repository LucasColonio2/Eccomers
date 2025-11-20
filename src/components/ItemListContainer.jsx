import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { withLoading } from '../hoc/withLoading'
import Loader from "./Loader"
import { useParams } from 'react-router'

const ItemListWithLoading = withLoading(ItemList)

export default function ItemListContainer({ text }) {
  const [items, setItems] = useState([])
  const {categoryName} = useParams ()


  useEffect(() => {
    const urlCategories =`https://dummyjson.com/products/category/${categoryName}`
    const urlBase ='https://dummyjson.com/products'

    fetch (categoryName ? urlCategories : urlBase)
    .then(res => res.json())
    .then(data => setItems(data.products));
    }, [categoryName])

  return (
    <ItemList items={items} />
  );
}
