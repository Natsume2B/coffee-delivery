import { ShoppingCart } from "phosphor-react"
import { Plus } from 'phosphor-react'
import { Minus } from 'phosphor-react'
import { useState } from "react"
import { Type1 } from "./CoffeeTypes"

interface CoffeeProductProps {
  src: string,
  numberOfType: string,
  coffeeType1: string,
  coffeeType2?: string,
  coffeeType3?: string,
  name: string,
  about: string,
  price: string,
}


export function CoffeeCard1Type({ src, numberOfType, coffeeType1, coffeeType2, coffeeType3, name, about, price }: CoffeeProductProps) {
  const [productCount, setProductCount] = useState(0)

  function increaseProductCount() {
    if (productCount >= 0) {
      setProductCount(productCount + 1)
    }
  }

  function decreaseProductCount() {
    if (productCount >= 1) {
      setProductCount(productCount - 1)
    }
  }

  function coffeeTypeText() {
    if (numberOfType === '1') {
      return (
        <div className="flex flex-row gap-1 mb-4">
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{coffeeType1}</span>
        </div>
      )
    } else if (numberOfType === '2') {
      return (
        <div className="flex flex-row gap-1 mb-4">
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{coffeeType1}</span>
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{coffeeType2}</span>
        </div>
      )

    } else if (numberOfType === '3') {
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
    <div className="flex flex-col items-center text-center w-[22%] rounded-tr-[2.250rem] rounded-bl-[2.250rem] rounded-tl-md rounded-br-md bg-base-card mb-5">
      <img className="mt-[-1.45rem] mb-3" src={src} alt="" />
      {coffeeTypeText()}
      <h1 className="font-baloo2 text-xl mb-2">{name}</h1>
      <p className="text-sm text-base-label mb-8 px-1">{about}</p>
      <div className="flex items-center mb-5">
        <span className="text-sm mr-1">R$</span>
        <span className="font-baloo2 text-2xl mr-6"> {price}</span>
        <div className="flex gap-3 mr-2 p-2  rounded-md bg-base-button">
          <button
            className="text-product-purple hover:text-product-purple-dark"
            onClick={decreaseProductCount}>
            <Minus weight="bold" size={14} />
          </button>
          <span>{productCount}</span>
          <button
            className="text-product-purple hover:text-product-purple-dark"
            onClick={increaseProductCount}>
            <Plus weight="bold" size={14} />
          </button>
        </div>
        <button className="rounded-md text-base-card p-2 bg-product-purple-dark hover:bg-product-purple"><ShoppingCart weight="fill" size={22} /></button>
      </div>
    </div>
  )
}