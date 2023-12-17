import { collection, getDocs, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../config/firebaseConfig"
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = () => {

  const {categoria} = useParams()
  

const [productos, setProductos] = useState([])

useEffect(()=>{
    const myProducts = query(collection (db,"ProductosPintagoras"))

    getDocs(myProducts)
    .then((resp) => {
 
      if(categoria){
        const data = resp.docs.map(doc=>{
          const productoFiltrado = {
            id : doc.id,
            ...doc.data()
          }
          return productoFiltrado
        })
   
        const productoCategoria = data.filter(p => p.categoria === categoria)
        
          setProductos(productoCategoria)
        

        
      } else {
        const productList = resp.docs.map(doc=>{
            const producto = {
                id : doc.id,
                ...doc.data()
            }
            return producto

        })   
         setProductos(productList)       
       
      }
    })
    .catch(error => console.log(error))

},[categoria])

  return (
    <>
   
  <ItemList arrayDeMates={productos}/>
  
  
    </>
  )
}