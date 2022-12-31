import { ShoppingCart } from "phosphor-react"
import { Plus } from 'phosphor-react'
import { Minus } from 'phosphor-react'
import { useContext, useState } from "react"
import { PurchaseInfoContext } from "../context/PurchaseInfoContext"

interface CoffeeCardProps {
  name: string,
  src: any,
  numberOfTypes: number,
  coffeeType1: string,
  coffeeType2?: string,
  coffeeType3?: string,
  about: string,
  price: number
}

export function CoffeeCard({ name, src, numberOfTypes, coffeeType1, coffeeType2, coffeeType3, about, price }: CoffeeCardProps) {

  const { getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    currencyFormat,
  } = useContext(PurchaseInfoContext)

  const quantity = getItemQuantity(name)

  function coffeeTypeText() {
    if (numberOfTypes === 1) {
      return (
        <div className="flex flex-row gap-1 mb-4">
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{coffeeType1}</span>
        </div>
      )
    } else if (numberOfTypes === 2) {
      return (
        <div className="flex flex-row gap-1 mb-4">
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{coffeeType1}</span>
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{coffeeType2}</span>
        </div>
      )

    } else if (numberOfTypes === 3) {
      return (
        <div className="flex flex-row gap-1 mb-4">
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{coffeeType1}</span>
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{coffeeType2}</span>
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{coffeeType3}</span>
        </div>
      )
    }
  }

  return (
    <div className="flex flex-col items-center text-center w-[22.75%] rounded-tr-[2.250rem] rounded-bl-[2.250rem] rounded-tl-md rounded-br-md bg-base-card mb-5">
      <img className="mt-[-1.45rem] mb-3" src={src} alt="" />
      {coffeeTypeText()}
      <h1 className="font-baloo2 text-xl mb-2">{name}</h1>
      <p className="text-sm text-base-label mb-8 px-2">{about}</p>
      <div className="flex items-center mb-5">
        <span className="text-sm mr-1">R$</span>
        <span className="font-baloo2 text-2xl mr-6">{currencyFormat(price)}</span>
        <div className="flex gap-3 mr-2 py-2 px-4  rounded-md bg-base-button">
          <button
            className="text-product-purple hover:text-product-purple-dark"
            onClick={() => decreaseCartQuantity(name)}
          >
            <Minus weight="bold" size={14} />
          </button>
          <span>{quantity}</span>
          <button
            className="text-product-purple hover:text-product-purple-dark"
            onClick={() => increaseCartQuantity(name)}
          >
            <Plus weight="bold" size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}