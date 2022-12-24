import expressoTradicional from '../assets/coffees/expresso-tradicional.svg'
import expressoAmericano from '../assets/coffees/expresso-americano.svg'
import expressoCremoso from '../assets/coffees/expresso-cremoso.svg'
import expressoGelado from '../assets/coffees/expresso-gelado.svg'
import cafeComLeite from '../assets/coffees/cafe-com-leite.svg'
import latte from '../assets/coffees/latte.svg'
import capuccino from '../assets/coffees/capuccino.svg'
import macchiato from '../assets/coffees/macchiato.svg'
import mocaccino from '../assets/coffees/mocaccino.svg'
import chocolateQuente from '../assets/coffees/chocolate-quente.svg'
import cubano from '../assets/coffees/cubano.svg'
import havaiano from '../assets/coffees/havaiano.svg'
import arabe from '../assets/coffees/arabe.svg'
import irlandes from '../assets/coffees/irlandes.svg'
import { Minus, Plus, Trash } from 'phosphor-react'

export function CheckoutCoffeeCard() {
  return (
    <div className='flex gap-5 pt-10 pb-6 border-b border-base-button justify-between'>
      <img className='w-16' alt="" />
      <div>
        <span className='text-base-subtitle'></span>
        <div className="flex gap-2">
          <div className='flex gap-3 p-2 rounded-md bg-base-button'>
            <button className="text-product-purple hover:text-product-purple-dark"><Minus weight="bold" size={14} /></button>
            <span>1</span>
            <button className="text-product-purple hover:text-product-purple-dark"><Plus weight="bold" size={14} /></button>
          </div>
          <div className='p-2 gap-1 rounded-md bg-base-button hover:bg-base-hover '>
            <button className='text-base-text flex items-center gap-1 hover:text-base-subtitle  '>
              <span><Trash
                className='text-product-purple hover:text-product-purple-dark'
              />
              </span>
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <span className='font-bold'>R$ 9,90</span>
    </div>
  )
}