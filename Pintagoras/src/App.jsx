import { Cart, ItemDetailConteiner, ItemListContainer, NavBar,  } from "./components"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartContextProvider } from "./context/CartContext"


function App() {

  


  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route path="/" element={<ItemListContainer/> }/>
       <Route path="/category/:categoria" element={<ItemListContainer/>}/>
       <Route path="/item/:id" element={<ItemDetailConteiner/>}/>
       <Route path="/cart" element={<Cart />} />
      </Routes>
   
       
    </BrowserRouter>


    </CartContextProvider>

  )
}

export default App
