import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Store } from './components/context/store'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Store>
      <GlobalStyles />
      <App/>
    </Store>
  </React.StrictMode>
)
