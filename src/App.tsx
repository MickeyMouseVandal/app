import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductView from './pages/ProductView'
import { ChakraProvider } from '@chakra-ui/react'
import Cart from './pages/Cart'   
import { useAppContext } from './context/hook'
import { ICart } from './pages/Cart'

function App() {

  const {state} = useAppContext()

  const items = state.items

  return (
    <>
    <ChakraProvider>
    <Router>
      <Routes>
          <Route path='/*' element={<LandingPage/>}/>
          <Route path='/ver-produto/:id' element={<ProductView/>}/>
          <Route path='/carrinho' element={<Cart/>}/>
      </Routes>
    </Router>
    </ChakraProvider>
    </>
  )
}

export default App
