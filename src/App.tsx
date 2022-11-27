import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductView from './pages/ProductView'
import Cart from './pages/Cart'   
import ShopDone from './pages/ShoppingDone'
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/signIn" element={<SignIn />}/>
            <Route path="/" element={<SignUp />}/>
            <Route path='/products/:id' element={<ProductView/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/cart/done' element={<ShopDone/>}/>
            <Route path='/LandingPage' element={<LandingPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
