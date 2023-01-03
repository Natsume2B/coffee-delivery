import { CreditCard } from "phosphor-react";
import { Bank } from 'phosphor-react'
import { Money } from 'phosphor-react'

import React, { createContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


interface PurchaseInfoContextProviderProps {
  children: ReactNode
}

interface cartItem {
  name: string,
  quantity: number
}

interface PurschaseInfoContext {
  getItemQuantity: (name: string) => number
  increaseCartQuantity: (name: string) => void
  decreaseCartQuantity: (name: string) => void
  removeFromCart: (name: string) => void
  cartQuantity: number
  cartItems: cartItem[]

  currencyFormat: (num: number) => number
  creditCardButton: () => any
  debitCardButton: () => any
  moneyButton: () => any
  creditChecked: boolean
  debitChecked: boolean
  moneyChecked: boolean


  handle: (e: React.FormEvent) => void
  submit: (e: React.FormEvent) => void
  data: {
    rua: string,
    numero: number,
    bairro: string,
    cidade: string,
    uf: string,
  }
}

export const PurchaseInfoContext = createContext({} as PurschaseInfoContext)

export function PurchaseInfoContextProvider({
  children,
}: PurchaseInfoContextProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<cartItem[]>("shopping-cart", [])

  const [creditChecked, setCreditChecked] = useState(true)
  const [debitChecked, setDebitChecked] = useState(false)
  const [moneyChecked, setMoneyChecked] = useState(false)

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
  )

  const [data, setData] = useLocalStorage("adress-data", {
    rua: "",
    numero: 0,
    bairro: "",
    cidade: "",
    uf: "",
  })

  function handle(e: React.FormEvent) {
    const newdata = { ...data }
    newdata[e.target.id] = (event?.target as HTMLInputElement).value
    setData(newdata)
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    window.location.href = '/CheckoutSuccess'
    setCartItems([])
  }

  function getItemQuantity(name: string) {
    return cartItems.find(item => item.name === name)?.quantity || 0
  }

  function increaseCartQuantity(name: string) {
    setCartItems(currentItem => {
      if (currentItem.find(item => item.name === name) == null) {
        return [...currentItem, { name, quantity: 1 }]
      } else {
        return currentItem.map(item => {
          if (item.name === name) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(name: string) {
    setCartItems(currentItem => {
      if (currentItem.find(item => item.name === name)?.quantity == 1) {
        return currentItem.filter(item => item.name !== name)
      } else {
        return currentItem.map(item => {
          if (item.name === name) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(name: string) {
    setCartItems(currentItem => {
      return currentItem.filter(item => item.name !== name)
    })
  }


  function checkFirstButton() {
    setCreditChecked(true)
    setDebitChecked(false)
    setMoneyChecked(false)
  }

  function checkSecondButton() {
    setCreditChecked(false)
    setDebitChecked(true)
    setMoneyChecked(false)
  }

  function checkThirdButton() {
    setCreditChecked(false)
    setDebitChecked(false)
    setMoneyChecked(true)
  }

  function creditCardButton() {
    if (creditChecked === false) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-base-button text-product-purple' onClick={checkFirstButton}>
        <CreditCard />
        <span className='text-xs'>CARTÃO DE CRÉDITO</span>
      </button>
    } else if (creditChecked === true) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-product-purple bg-opacity-10 border-0 outline outline-2 outline-product-purple text-product-purple' onClick={checkFirstButton}>
        <CreditCard />
        <span className='text-xs'>CARTÃO DE CRÉDITO</span>
      </button>
    }
  }

  function debitCardButton() {
    if (debitChecked === false) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-base-button text-product-purple' onClick={checkSecondButton}>
        <Bank />
        <span className='text-xs'>CARTÃO DE DÉBITO</span>
      </button>
    } else if (debitChecked === true) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-product-purple bg-opacity-10 border-0 outline outline-2 outline-product-purple text-product-purple' onClick={checkSecondButton}>
        <Bank />
        <span className='text-xs'>CARTÃO DE DÉBITO</span>
      </button>
    }
  }

  function moneyButton() {
    if (moneyChecked === false) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-base-button text-product-purple' onClick={checkThirdButton}>
        <Money />
        <span className='text-xs'>DINHEIRO</span>
      </button>
    } else if (moneyChecked === true) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-product-purple bg-opacity-10 border-0 outline outline-2 outline-product-purple text-product-purple' onClick={checkThirdButton}>
        <Money />
        <span className='text-xs'>DINHEIRO</span>
      </button>
    }
  }

  function currencyFormat(num: any) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,).replaceAll('.', ',')
  }

  return (
    <PurchaseInfoContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        currencyFormat,
        creditCardButton,
        debitCardButton,
        moneyButton,
        creditChecked,
        debitChecked,
        moneyChecked,
        handle,
        submit,
        data,
      }}
    >
      {children}
    </PurchaseInfoContext.Provider>
  )
}
