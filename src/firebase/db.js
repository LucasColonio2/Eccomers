import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc
  
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


//Funcion obtener productos por categoria
export const getProductsByCategory = async (categoryName, setItems) => { 
 const q = query(collection(db, "Productos"), where("category", "==", categoryName));
const productosporcategoria = []


const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  productosporcategoria.push({ ...doc.data(), id: doc.id });
})
  setItems(productosporcategoria)


}


//Funcion para obtener un producto 
export const getProduct = async (id, setItem) => {
const docRef = doc(db, "Productos", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  setItem({...docSnap.data(), id: docSnap.id})
} else {
  console.log("Colocar ALERT");
}


}

//Funcion para obtener una orden
export const createOrder = async (order) =>  {
try {
  const docRef = await addDoc(collection(db, "orders"), order)
  console.log("Document written with ID: ", docRef.id);
  return true
} catch (e) {
  console.error("Error adding document: ", e);
return false

}

}