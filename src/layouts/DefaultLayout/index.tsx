import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div className='px-[10%]'>
      <Header />
      <Outlet />
    </div>

  )
}