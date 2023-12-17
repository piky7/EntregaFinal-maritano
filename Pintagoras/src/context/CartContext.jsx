import { createContext, useState } from "react";


export const CartContext = createContext(null)

export const CartContextProvider = ({children})=>{

  const [carrito, setCarrito] = useState([])

  const addItem = (item, quantity) =>{
   


    const {id,name,precio,description} = item

    const posicion = carrito.findIndex((producto)=> producto.id === id)

    if(posicion !== -1){
      const nuevoCarrito = [...carrito]
      nuevoCarrito[posicion].quantity += quantity
      nuevoCarrito[posicion].subTotal = nuevoCarrito[posicion].quantity * nuevoCarrito[posicion].precio 
      setCarrito(nuevoCarrito)
    } else {

      const newItem = {
          id,
          name,
          precio,
          quantity,
          description,
          subTotal: +(precio * quantity)
  
        }
        setCarrito([...carrito,newItem])
        
    }

    

    

  
    
  }

  const removeItem = (id)=>{

    const productosFiltrados = carrito.filter(item => item.id !== id)

    setCarrito(productosFiltrados)
  }


  const objetValue = {
    carrito,
    addItem,
    removeItem

  }

    return <CartContext.Provider value={objetValue}>  {children}   </CartContext.Provider>
}