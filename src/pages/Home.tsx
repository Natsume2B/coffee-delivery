import coffeeDelivery from '../assets/coffee-delivery.svg'

import { ShoppingCart } from 'phosphor-react'
import { Package } from 'phosphor-react'
import { Timer } from 'phosphor-react'
import { Coffee } from 'phosphor-react'
import { productsArray } from '../productsStore'
import { CoffeeCard } from '../components/CoffeeCard'

export function Home() {
  return (
    <main className='mb-36'>
      <section className='flex flex-row justify-between mb-24'>
        <div>
          <h1 className='font-baloo2 font-extrabold text-5xl mb-4 text-base-title leading-snug'>Enconte o café perfeito<br />para qualquer hora do dia</h1>
          <p className='text-xl mb-16'>Com o Coffee Delivery você recebe seu café onde estiver, a<br /> qualquer hora</p>
          <div className=' flex none list-none'>
            <li className='mr-10'>
              <ul className='flex items-center gap-3 mb-5'>
                <span className='text-white bg-product-yellow-dark p-1.5 rounded-full' >
                  <ShoppingCart weight='fill' />
                </span>
                <p>Compra simples e segura</p>
              </ul>
              <ul className='flex items-center gap-3'>
                <span className='text-white bg-product-yellow p-1.5 rounded-full'>
                  <Timer weight='fill' />
                </span>
                <p>Entrega rápida e rastreada</p>
              </ul>
            </li>
            <li>
              <ul className='flex items-center gap-3 mb-5'>
                <span className='text-white bg-base-text  p-1.5 rounded-full'>
                  <Package weight='fill' />
                </span>
                <p>Embalagem mantém o café intacto</p>
              </ul>
              <ul className='flex items-center gap-3'>
                <span className='text-white bg-product-purple p-1.5 rounded-full'>
                  <Coffee weight='fill' />
                </span>
                <p>O café chega fresquinho até você</p>
              </ul>
            </li>
          </div>
        </div>
        <img className='ml-14' src={coffeeDelivery} alt="Copo de café" />
      </section>

      <section className='col-span-2 row-span-2'>
        <h1 className='font-baloo2 text-3xl mb-14'>
          Nossos cafés
        </h1>
        <div className='flex flex-wrap gap-8'>
          {productsArray.map((product) => (
            <CoffeeCard product={product} />
          ))}
        </div>

      </section>
    </main>


  )
}