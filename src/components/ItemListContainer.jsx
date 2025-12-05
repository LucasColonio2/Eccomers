import { useState, useEffect, useContext } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'
import { primerContext } from '../context/CartContext'
import { getProducts } from '../firebase/db'

export default function ItemListContainer({ text }) {
  const [items, setItems] = useState([])
  const { categoryName } = useParams()


  useEffect(() => {
    getProducts()
    .then (prods => setItems(prods))



    /* const urlCategories = `https://dummyjson.com/products/category/${categoryName}`
    const urlBase = 'https://dummyjson.com/products'

    fetch(categoryName ? urlCategories : urlBase)
      .then(res => res.json())
      .then(data => setItems(data.products)); */
  }, [categoryName])

  return (
    <ItemList items={items} />
  );
}
