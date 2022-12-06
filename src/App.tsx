
import { Header } from './components/Header'
import { Home } from './pages/Home'
import './styles/global.css'

export function App() {

  return (
    <div className='max-w-[66.6666%] m-auto min-w-min'>
      <Header/>
      <Home/>
    </div>
  )
}
