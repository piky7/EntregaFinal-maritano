import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { getProducts } from "../productos/productos"


export const ItemListContainer = () => {

  const {categoria} = useParams()
  

  const [productosMates, setproductosMates] = useState([])




  useEffect(()=>{
   getProducts()
   .then(resp =>{
      if(categoria){
          const productsFilter = resp.filter(prod => prod.categoria === categoria)

          if(productsFilter.length > 0){
              setproductosMates(productsFilter)        
          } else {
              setproductosMates(resp)
          }

          
          
      } else {
          setproductosMates(resp)
      }
      
   } )  // dentro de productosMates ya esta el array de mates
   .catch(err=>console.log(err))
}, [categoria] )


  return (
    <>
   
  <ItemList productosMates={productosMates}/>
    </>
  )
}