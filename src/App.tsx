
import { BrowserRouter } from 'react-router-dom'
import { PurchaseInfoContextProvider } from './context/PurchaseInfoContext'
import { Router } from './Router'
import './styles/global.css'

export function App() {

  return (
    <BrowserRouter>
      <PurchaseInfoContextProvider>
        <Router />
      </PurchaseInfoContextProvider>
    </BrowserRouter>
  )
}
