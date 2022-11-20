import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'
import ProductView from './pages/ProductView'

function App() {


  return (
    <>
    <Router>
      <Routes>
          <Route path='/ver-produto' element={<ProductView/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
