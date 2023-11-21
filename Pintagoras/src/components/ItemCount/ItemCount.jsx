import { useState } from "react"


export const ItemCount = ({stock,initial = 1 , onAdd }) => {

     const [count, setcount] = useState(initial)

     const incrementar = () =>{
        if(count < stock){
           return setcount(count + 1)
        } else {
            setcount(count)
        }
     }

     const decrementar = () => {
        if(count === 0 ){
          return  setcount(0)
        } else {
            setcount(count - 1)
        }
     }

  return (
    <div className="d-flex flex-column col-2 justify-content-center align-content-center p-4">
    <div>
      <button className="btn btn-outline-secondary mx-3" onClick={decrementar}>
        -
      </button>
      <strong>{count}</strong>
      <button className="btn btn-outline-secondary mx-3" onClick={incrementar}>
        +
      </button>
    </div>
    <button className="btn btn-outline-primary mt-2" onClick={() => onAdd(count)}>Agregar al carrito</button>
  </div>
  )
}
