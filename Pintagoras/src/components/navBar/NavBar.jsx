import { Button, Stack } from "@mui/material";
import * as React from 'react';
import { Link } from "react-router-dom";
import { CartLogo } from "./cartLogo/CartLogo";

export const NavBar = () => {

  return (


 
 
 <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
  <div ><h3 className="me-5">Pintagoras</h3></div>

  <Stack direction="row" spacing={2} >
  <Link to={'/'}>
  <Button  variant="contained">Home</Button>
  </Link>
  <Link to={'/category/Formas'}>
  <Button variant="contained">Formas</Button>
  </Link>
  <Link to={'/category/Floral'}>
  <Button variant="contained">Floral</Button>
  </Link>
  <Link to={'/category/Personalizado'}>
  <Button variant="contained">Personalizado</Button>
  </Link>
<Link to={'/cart'}>

  <CartLogo/>
</Link>

  </Stack>

  
  
</nav> 



    
  )
}
