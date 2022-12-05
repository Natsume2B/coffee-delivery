
import { Header } from './components/Header'
import { Home } from './components/Home'
import './styles/global.css'

export function App() {

  return (
    <div className='w-2/3 m-auto min-w-max'>
      <Header/>
      <Home/>
    </div>
  )
}
