
import { Header } from './components/pages/Header'
import { Home } from './components/pages/Home'
import './styles/global.css'

export function App() {

  return (
    <div className='max-w-[66.6666%] m-auto min-w-min'>
      <Header/>
      <Home/>
    </div>
  )
}
