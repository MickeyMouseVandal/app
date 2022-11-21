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
import ShopDone from './pages/ShoppingDone'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"

function App() {

  const {state} = useAppContext()

  const items = state.items

  return (
    <>
    <ChakraProvider>
    <Router>
      <Routes>
          <Route path="/signIn" element={<SignIn />}/>
          <Route path="/signUp" element={<SignUp />}/>
          <Route path='/*' element={<LandingPage/>}/>
          <Route path='/ver-produto/:id' element={<ProductView/>}/>
          <Route path='/carrinho/:id' element={<Cart/>}/>
          <Route path='/compra-feita' element={<ShopDone/>}/>
      </Routes>
    </Router>
    </ChakraProvider>
    </>
  )
}

export default App
