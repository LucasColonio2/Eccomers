import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore (app)




export const getProducts= async() => {
    
    const querySnapshot = await getDocs (collection (db, "Productos"))
    const products = []

    querySnapshot.forEach ((doc) => {
products.push ({...doc.data(), id: doc.id})

        
    });

    return products
} 


export const getCategories= async() => {
    
    const querySnapshot = await getDocs (collection (db, "categories"))
    const categories = []

    querySnapshot.forEach ((doc) => {
        categories.push (doc.data().name)})
        
        return categories}


