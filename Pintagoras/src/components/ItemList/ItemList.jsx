import { Item } from "../Item/Item"


export const ItemList = ({productosMates}) => {
  return (
    <>
     <div className="d-flex flex-wrap">

{productosMates.map( product => <Item key={product.id} {...product}  />)}
</div>
    
    </>


  )
}
