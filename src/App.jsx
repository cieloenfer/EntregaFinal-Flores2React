import ItemListContainer from './Componentes/itemListContainer'
import Navbar from './Componentes/Navbar/Navbar'
import ItemDetailContainer from './Componentes/itemDetailContainer'
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { CartProvider } from './Context/Cartcontext'
import Checkout from '../src/Componentes/checkout'
import './App.css'

function App() {
  
  return (
   
   
    <BrowserRouter>
    <CartProvider>
     <div  id='app'>
      <Navbar/> 
      <itemCount initial={1} stock={5} onAdd={(quantify) => console.log(`cantidad agregada`, quantify)} />
      <Routes>
      <Route path="" element={<ItemListContainer saludo="Bienvenido a Iuris Help"/>}/> 
      <Route path='/categorías/:categoria' elemnt={<ItemListContainer saludo="Bienvenido a Iuris Help"/>}/>
      <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
      <Route path="/carrito" element={<Carrito />} />
   <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </div>
    </CartProvider>
    </BrowserRouter>   
      
  )
}

export default App
