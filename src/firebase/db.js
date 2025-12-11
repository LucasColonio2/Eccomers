import {
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";


import { app } from "./config";
const db = getFirestore(app) //Instancia de db


//Obtener productos
export const getProducts = async (setItems) => { 
  const documentoproductos = await getDocs(collection(db, "Productos")) //getDocs sirve para obtener los documentos de firebase
  const products = []

  documentoproductos.forEach((doc) => { //Iterando el documentoproductos y por cada documento hace algo
    //Dentro de este data vamos a sacar las propiedades      
    products.push({ ...doc.data(), id: doc.id })
  })
  setItems(products)
}


//Funcion obtenercategorias de productos
export const getCategorias = async () => { 
  const documentocategorias = await getDocs(collection(db, "Categorias"))
  const categorias = []

  documentocategorias.forEach((doc) => {
    categorias.push(doc.data().name)

    })
    return categorias
  }



export const getProductsByCategory = async (category, setItems) => { //Funcion getproductosbycategori
  const products = [];

  const q = query(collection(db, "Productos"), where("category", "==", category));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    products.push({ ...doc.data(), id: doc.id });
  });

  setItems(products);
};