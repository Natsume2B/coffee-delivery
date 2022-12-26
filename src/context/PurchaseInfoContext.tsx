import { CreditCard } from "phosphor-react";
import { Bank } from 'phosphor-react'
import { Money } from 'phosphor-react'

import { createContext, ReactNode, useState } from "react";


interface PurchaseInfoContextProviderProps {
  children: ReactNode
}

export const PurchaseInfoContext = createContext({})

export function PurchaseInfoContextProvider({
  children,
}: PurchaseInfoContextProviderProps) {


  const [totalQuantity, setTotalQuantity] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const [cart, setCart] = useState([])

  const [firstChecked, setfirstChecked] = useState(true)
  const [secondChecked, setSecondChecked] = useState(false)
  const [thirdChecked, setThirdChecked] = useState(false)

  function checkFirstButton() {
    setfirstChecked(true)
    setSecondChecked(false)
    setThirdChecked(false)
  }

  function checkSecondButton() {
    setfirstChecked(false)
    setSecondChecked(true)
    setThirdChecked(false)
  }

  function checkThirdButton() {
    setfirstChecked(false)
    setSecondChecked(false)
    setThirdChecked(true)
  }

  function creditCardButton() {
    if (firstChecked === false) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-base-button text-product-purple' onClick={checkFirstButton}>
        <CreditCard />
        <span className='text-xs'>CARTÃO DE CRÉDITO</span>
      </button>
    } else if (firstChecked === true) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-product-purple bg-opacity-10 border-0 outline outline-2 outline-product-purple text-product-purple' onClick={checkFirstButton}>
        <CreditCard />
        <span className='text-xs'>CARTÃO DE CRÉDITO</span>
      </button>
    }
  }

  function debitCardButton() {
    if (secondChecked === false) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-base-button text-product-purple' onClick={checkSecondButton}>
        <Bank />
        <span className='text-xs'>CARTÃO DE DÉBITO</span>
      </button>
    } else if (secondChecked === true) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-product-purple bg-opacity-10 border-0 outline outline-2 outline-product-purple text-product-purple' onClick={checkSecondButton}>
        <Bank />
        <span className='text-xs'>CARTÃO DE DÉBITO</span>
      </button>
    }
  }

  function moneyButton() {
    if (thirdChecked === false) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-base-button text-product-purple' onClick={checkThirdButton}>
        <Money />
        <span className='text-xs'>DINHEIRO</span>
      </button>
    } else if (thirdChecked === true) {
      return <button className='w-1/3 inline-flex items-center p-4 gap-2 rounded-md bg-product-purple bg-opacity-10 border-0 outline outline-2 outline-product-purple text-product-purple' onClick={checkThirdButton}>
        <Money />
        <span className='text-xs'>DINHEIRO</span>
      </button>
    }
  }

  return (
    <PurchaseInfoContext.Provider
      value={{
        creditCardButton,
        debitCardButton,
        moneyButton,
        totalQuantity,
        setTotalQuantity,
        cartCount,
        cart,
        setCart,
      }}
    >
      {children}
    </PurchaseInfoContext.Provider>
  )
}
