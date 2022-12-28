import { ShoppingCart } from "phosphor-react"
import { Plus } from 'phosphor-react'
import { Minus } from 'phosphor-react'
import { useState } from "react"

export function CoffeeCard(props) {
  const product = props.product

  const [quantity, setQuantity] = useState(0)

  function increaseQuantity() {
    if (quantity >= 0) {
      setQuantity(quantity + 1)
    }
  }

  function decreaseQuantity() {
    if (quantity >= 1) {
      setQuantity(quantity - 1)
    }
  }

  function coffeeTypeText() {
    if (product.numberOfTypes === 1) {
      return (
        <div className="flex flex-row gap-1 mb-4">
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{product.coffeeType1}</span>
        </div>
      )
    } else if (product.numberOfTypes === 2) {
      return (
        <div className="flex flex-row gap-1 mb-4">
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{product.coffeeType1}</span>
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{product.coffeeType2}</span>
        </div>
      )

    } else if (product.numberOfTypes === 3) {
      return (
        <div className="flex flex-row gap-1 mb-4">
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{product.coffeeType1}</span>
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{product.coffeeType2}</span>
          <span className="text-[10px] font-bold p-1 px-2 rounded-full bg-product-yellow-light text-product-yellow-dark">{product.coffeeType3}</span>
        </div>
      )
    }
  }

  return (
    <div className="flex flex-col items-center text-center w-[22.75%] rounded-tr-[2.250rem] rounded-bl-[2.250rem] rounded-tl-md rounded-br-md bg-base-card mb-5">
      <img className="mt-[-1.45rem] mb-3" src={product.src} alt="" />
      {coffeeTypeText()}
      <h1 className="font-baloo2 text-xl mb-2">{product.name}</h1>
      <p className="text-sm text-base-label mb-8 px-2">{product.about}</p>
      <div className="flex items-center mb-5">
        <span className="text-sm mr-1">R$</span>
        <span className="font-baloo2 text-2xl mr-6"> {product.price}</span>
        <div className="flex gap-3 mr-2 p-2  rounded-md bg-base-button">
          <button
            className="text-product-purple hover:text-product-purple-dark"
            onClick={decreaseQuantity}>
            <Minus weight="bold" size={14} />
          </button>
          <span>{quantity}</span>
          <button
            className="text-product-purple hover:text-product-purple-dark"
            onClick={increaseQuantity}>
            <Plus weight="bold" size={14} />
          </button>
        </div>
        <button
          className="rounded-md text-base-card p-2 bg-product-purple-dark hover:bg-product-purple"
        >
          <ShoppingCart weight="fill" size={22} />
        </button>
      </div>
    </div>
  )
}