import { ShoppingCart } from "phosphor-react"
import { Plus } from 'phosphor-react'
import { Minus } from 'phosphor-react'
import expressoTradicional from "../assets/coffees/expresso-tradicional.svg"


export function CoffeeProduct() {
  return (
    <div className="flex flex-col items-center text-center max-w-[256px] rounded-tr-[2.250rem] rounded-bl-[2.250rem] bg-base-card mb-5">
      <img className="mt-[-1.45rem] mb-3" src={expressoTradicional} alt="" />
      <span className="text-[10px] font-bold p-1 px-2 rounded-full mb-4 bg-product-yellow-light text-product-yellow-dark">TRADICIONAL</span>
      <h1 className="font-baloo2 text-xl mb-2">Expresso Tradicional</h1>
      <p className="text-sm text-base-label mb-8 px-1">O tradicional café feito com água quente e grãos moídos</p>
      <div className="flex items-center mb-5">
        <span className="text-sm mr-1">R$</span>
        <span className="font-baloo2 text-2xl mr-6"> 9,90</span>
        <div className="flex gap-3 mr-2 py-2 px-2  rounded-md bg-base-button">
          <button className="text-product-purple"><Minus weight="bold" size={14} /></button>
          <span>1</span>
          <button className="text-product-purple"><Plus weight="bold" size={14} /></button>
        </div>
        <button className="rounded-md text-base-card p-2 bg-product-purple-dark"><ShoppingCart weight="fill" size={22} /></button>
      </div>
    </div>


  )
}