import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <div className='max-w-[66%] m-auto min-w-min'>
      <Header />
      <Outlet />
    </div>

  )
}