import { ShoppingCart } from "phosphor-react"
import { Plus } from 'phosphor-react'
import { Minus } from 'phosphor-react'

interface CoffeeProductProps {
  src: string,
  coffeeType: string,
  name: string,
  about: string,
  price: string,
}


export function CoffeeCard({ src, coffeeType, name, about, price }: CoffeeProductProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-[256px] rounded-tr-[2.250rem] rounded-bl-[2.250rem] bg-base-card mb-5">
      <img className="mt-[-1.45rem] mb-3" src={src} alt="" />
        <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{coffeeType}</span>
      <h1 className="font-baloo2 text-xl mb-2">{name}</h1>
      <p className="text-sm text-base-label mb-8 px-1">{about}</p>
      <div className="flex items-center mb-5">
        <span className="text-sm mr-1">R$</span>
        <span className="font-baloo2 text-2xl mr-6"> {price}</span>
        <div className="flex gap-3 mr-2 py-2 px-2  rounded-md bg-base-button">
          <button className="text-product-purple hover:text-product-purple-dark"><Minus weight="bold" size={14} /></button>
          <span>1</span>
          <button className="text-product-purple hover:text-product-purple-dark"><Plus weight="bold" size={14} /></button>
        </div>
        <button className="rounded-md text-base-card p-2 bg-product-purple-dark hover:bg-product-purple"><ShoppingCart weight="fill" size={22} /></button>
      </div>
    </div>


  )
}