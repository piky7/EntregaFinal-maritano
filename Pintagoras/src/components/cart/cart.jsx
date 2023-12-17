import { Button, Stack, TextField } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { ItemCart } from "../itemCart/ItemCart"




export const Cart = () => {

 const {carrito} = useContext(CartContext)

 const totalCompra = carrito.map(producto => producto.subTotal)


  return (
  
 <>
      <h2 className="m-2">Carrito de compras</h2>
      
     <div className="d-flex flex-wrap">


{carrito.map( product => <ItemCart key={product.id} {...product}  />)}
</div>


<div className="m-2">
<h3 >
   Total: ${totalCompra.length > 0 ?  (totalCompra.reduce(function (a,b) {return a+b})) : 0}
</h3>
</div>

<hr />



{totalCompra.length > 0 && 

<div className="d-flex flex-column m-2 " >
<h2>Finalizar compra</h2>

<Stack direction="row"
  justifyContent="start"
  alignItems="flex-start"
  spacing={2}
  mt={2}
  ml={2}
  >


 
 
<TextField id="outlined-basic" label="Nombre" variant="outlined" />
<TextField id="outlined-basic" label="Apellido" variant="outlined" />
<TextField id="outlined-basic" type="email" label="Email" variant="outlined" />
<TextField id="outlined-basic" type="email" label="Repetir Email" variant="outlined" />



</Stack >

<Stack direction="row"
  justifyContent="start"
  alignItems="flex-start"
  spacing={2}
  mt={2}
  ml={2}>

<Button variant="contained" color="success">
           Comprar
        </Button>
</Stack>


</div>
        
        }
 



    </>
  )
}
