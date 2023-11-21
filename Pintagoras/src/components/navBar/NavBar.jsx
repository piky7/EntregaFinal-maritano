import { Link } from "react-router-dom"
import { CartLogo } from "./cartLogo/CartLogo"



export const NavBar = () => {
  return (

    
    <>
    
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div><h3 className="me-5">Pintagoras</h3></div>

  
  <Link to={'/'}>
  <button className="btn btn-warning">Home</button>
  </Link>
  <Link to={'/category/Formas'}>
  <button className="btn btn-warning">Formas</button>
  </Link>
  <Link to={'/category/Floral'}>
  <button className="btn btn-warning">Floral</button>
  </Link>
  <Link to={'/category/Personalizado'}>
  <button className="btn btn-warning">Personalizado</button>
  </Link>

<Link to={'/cart'}>

  <CartLogo/>
</Link>
  
  
</nav>


    </>
  )
}
