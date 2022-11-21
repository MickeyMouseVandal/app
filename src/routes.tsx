import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom'

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/signIn" element={<SignIn />}/>
        <Route path="/signUp" element={<SignUp />}/>
      </Routes>
    </Router>
  )
}