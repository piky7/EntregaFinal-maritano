import { useContext } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"


export const ItemDetail = ({id,description,img,precio,stock,name}) => {

  
    
  return (
    <div className="border m-2">
    <div className="card ">
      <div className="card-body ">
        <h5 className="card-title">{name}</h5>
        <img src={img} alt="" />
        <p className="card-text"> {description} </p>
        <p>Precio: ${precio} </p>
        <ItemCount stock={stock} name={name} id={id} precio={precio} description={description} />
      </div>
    </div>
  </div>

  )
}
