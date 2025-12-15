import { useState, useEffect } from 'react'
import ItemList from "./ItemList"
import { useParams } from "react-router"
import { getProducts, getProductsByCategory } from '../firebase/db'


export default function ItemListContainer() {
  const [items, setItems] = useState([])
  const {categoryId} = useParams()


useEffect(() => {
if (categoryId) {
      getProductsByCategory(categoryId, setItems);
    } else {
      getProducts(setItems);
    }
  }, [categoryId]);
  return (
    <ItemList items={items} />
  );
}
