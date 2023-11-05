
import './App.css'
import { ItemListContainer } from './components/Items/ItemListContainer'
import { NavBar } from './components/navBar/NavBar'

function App() {


  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a Pintagoras, tu tienda del mate'/>
    </>
  )
}

export default App
