import coffee from '../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { PurchaseInfoContext } from '../context/PurchaseInfoContext'

export function Header() {
  const { cartCount } = useContext(PurchaseInfoContext)

  function showCartCount() {
    if (cartCount <= 0) {
      return <p></p>
    } else {
      return <span
        className='text-xs font-bold text-white bg-product-yellow-dark rounded-full py-1 px-2'>
        {cartCount}
      </span>
    }
  }
  return (
    <header>
      <nav className='flex justify-between items-center mt-8 mb-24 '>
        <NavLink to="/" title='Home'>
          <a href="/"><img src={coffee} alt="Go to home" title='Home' className='cursor-pointer' /></a>
        </NavLink>
        <div className='flex gap-3 content-center'>
          <div className='flex items-center gap-1 bg-product-purple-light p-2 rounded-md '>
            <span className='text-product-purple'>
              <MapPin size={22} weight="fill" />
            </span>
            <span className='text-sm text-product-purple-dark'>
              Porto Alegre, RS
            </span>
          </div>
          <NavLink
            to="/Checkout"
            title='Checkout'
            className='text-product-yellow-dark bg-product-yellow-light p-2 rounded-md cursor-pointer flex '
          >
            <ShoppingCart size={22} weight="fill" />
            <div className='absolute ml-4 mt-[-1rem]'>
              {showCartCount()}
            </div>
          </NavLink>
        </div>
      </nav>
    </header>

  )
}