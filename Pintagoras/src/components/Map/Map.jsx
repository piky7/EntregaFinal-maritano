import { useEffect, useState } from "react"
import { getProducts } from "../productos/productos"
import { Card } from "../card/Card"
import { useParams } from "react-router-dom"



export const Map = () => {

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
    <div>

        
        <h2>Productos</h2>
        {productosMates.map(mate => <Card key={mate.id} titulo={mate.name} descripcion={mate.description}/>)}
    </div>
  )
}
