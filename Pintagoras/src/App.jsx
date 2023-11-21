import { ItemListContainer, Map, NavBar,  } from "./components"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  


  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
       <Route path="/" element={<Map/> }/>
       <Route path="/category/:categoria" element={<Map/>}/>
       <Route path="/item/:id" element={<Map/>}/>

      </Routes>
   
       
      
    </BrowserRouter>
  )
}

export default App
