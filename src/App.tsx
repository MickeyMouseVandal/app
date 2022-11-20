import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductView from './pages/ProductView'
import { ChakraProvider } from '@chakra-ui/react'

function App() {


  return (
    <>
    <ChakraProvider>
    <Router>
      <Routes>
          <Route path='/*' element={<LandingPage/>}/>
          <Route path='/ver-produto' element={<ProductView/>}/>
      </Routes>
    </Router>
    </ChakraProvider>
    </>
  )
}

export default App
