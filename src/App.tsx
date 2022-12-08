
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './styles/global.css'

export function App() {

  return (
    <div className='max-w-[66.6666%] m-auto min-w-min'>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </div>
  )
}
