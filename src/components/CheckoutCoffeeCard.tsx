import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { PurchaseInfoContext } from '../context/PurchaseInfoContext'
import storeItems from '../data/items.json'

interface CheckoutCoffeeProps {
  name: string,
  quantity: number
}

export function CheckoutCoffeeCard({ name, quantity }: CheckoutCoffeeProps) {

  const item = storeItems.find(item => item.name === name)
  if (item == null) return null
  const { removeFromCart, increaseCartQuantityFromCart, decreaseCartQuantityFromCart, currencyFormat } = useContext(PurchaseInfoContext)

  return (
    <div className='flex gap-5 pt-10 pb-6 border-b border-base-button justify-between'>
      <img className='w-16' alt="" src={item.src} />
      <div>
        <span className='text-base-subtitle'>{item.name}</span>
        <div className="flex gap-2 mt-2">
          <div className='flex gap-3 p-2 rounded-md bg-base-button'>
            <button
              className="text-product-purple hover:text-product-purple-dark"
              onClick={() => decreaseCartQuantityFromCart(item.name)}
            >
              <Minus weight="bold" size={14} />
            </button>
            <span>{quantity}</span>
            <button
              className="text-product-purple hover:text-product-purple-dark"
              onClick={() => increaseCartQuantityFromCart(item.name)}
            >
              <Plus weight="bold" size={14} />
            </button>
          </div>
          <div className='p-2 gap-1 rounded-md bg-base-button hover:bg-base-hover '>
            <button
              className='text-base-text flex items-center gap-1 hover:text-base-subtitle  '
              onClick={() => removeFromCart(item.name)}
            >
              <span><Trash
                className='text-product-purple hover:text-product-purple-dark'
              />
              </span>
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <span className='font-bold'>R$ {currencyFormat(item.price * quantity)}</span>
    </div>
  )
}