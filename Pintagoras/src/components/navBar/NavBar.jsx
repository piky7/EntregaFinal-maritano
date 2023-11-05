import { Cart } from "./cart/Cart"



export const NavBar = () => {
  return (

    
    <>
    
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div><h3 className="me-5">Pintagoras</h3></div>
  
  <button className="btn btn-warning">Home</button>
  <button className="btn btn-warning">Productos</button>
  <button className="btn btn-warning">Quienes Somos?</button>
  
  <Cart/>
  
</nav>


    </>
  )
}
