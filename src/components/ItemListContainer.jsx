import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'


export default function ItemListContainer({ text }) {
  const [items, setItems] = useState([])
  const { categoryName } = useParams()


  useEffect(() => {
    const urlCategories = `https://dummyjson.com/products/category/${categoryName}`
    const urlBase = 'https://dummyjson.com/products'

    fetch(categoryName ? urlCategories : urlBase)
      .then(res => res.json())
      .then(data => setItems(data.products));
  }, [categoryName])

  return (
    <ItemList items={items} />
  );
}
