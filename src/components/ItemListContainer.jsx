import { useState, useEffect } from 'react'
import ItemList from "./ItemList"
import { useParams } from "react-router"
import { getProducts, getProductsByCategory } from '../firebase/db'


export default function ItemListContainer() {
  const [items, setItems] = useState([])
  const {categoryName} = useParams()


useEffect(() => {
if (categoryName) {
      getProductsByCategory(categoryName, setItems);
    } else {
      getProducts(setItems);
    }
  }, [categoryName]);
  return (
    <ItemList items={items} />
  );
}
