import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesApp from './routes'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <RoutesApp />
  </React.StrictMode>
)
