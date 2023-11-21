import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../productos/productos"
import { ItemDetail } from "../ItemDetail/ItemDetail"



export const ItemDetailConteiner = () => {


    const {id} = useParams()
    const [item, setitem] = useState(null)

    useEffect(()=>{
        getProductById(id)
            .then(resp => setitem(resp))
            .catch(error=> console.log(error))
        
    },[])

  return (
    <>
    {item && <ItemDetail {...item}/>}
    </>
  )
}
