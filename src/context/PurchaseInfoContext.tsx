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

  const [firstChecked, setfirstChecked] = useState(true)
  const [secondChecked, setSecondChecked] = useState(false)
  const [thirdChecked, setThirdChecked] = useState(false)

  const productsInfo = {
    expressoTradicional: {
      name: 'Expresso Tradicional',
      numberOfTypes: 1,
      coffeeType1: 'TRADICIONAL',
      about: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
    },
    expressoAmericano: {
      name: 'Expresso Ameriano',
      numberOfTypes: 1,
      coffeeType1: 'TRADICIONAL',
      about: 'Expresso diluído, menos intenso que o tradicional',
      price: '9,90',
    },
    expressoCremoso: {
      name: 'Expresso Cremoso',
      numberOfTypes: 1,
      coffeeType1: 'TRADICIONAL',
      about: 'Café expresso tradicional com espuma cremosa',
      price: '9,90',
    },
    expressoGelado: {
      name: 'Expresso Gelado',
      numberOfTypes: 2,
      coffeeType1: 'TRADICIONAL',
      coffeeType2: 'GELADO',
      about: 'Bebida preparada com café expresso e cubos de gelo',
      price: '9,90',
    },
    cafeComLeite: {
      name: 'Café com Leite',
      numberOfTypes: 2,
      coffeeType1: 'TRADICIONAL',
      coffeeType2: 'COM LEITE',
      about: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: '9,90',
    },
    latte: {
      name: 'Latte',
      numberOfTypes: 2,
      coffeeType1: 'TRADICIONAL',
      coffeeType2: 'COM LEITE',
      about: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: '9,90',
    },
    capuccino: {
      name: 'Capuccino',
      numberOfTypes: 2,
      coffeeType1: 'TRADICIONAL',
      coffeeType2: 'COM LEITE',
      about: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: '9,90',
    },
    macchiato: {
      name: 'Macchiato',
      numberOfTypes: 2,
      coffeeType1: 'TRADICIONAL',
      coffeeType2: 'COM LEITE',
      about: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: '9,90',
    },
    mocaccino: {
      name: 'Mocaccino',
      numberOfTypes: 2,
      coffeeType1: 'TRADICIONAL',
      coffeeType2: 'COM LEITE',
      about: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: '9,90',
    },
    chocolateQuente: {
      name: 'Chocolate Quente',
      numberOfTypes: 2,
      coffeeType1: 'ESPECIAL COM LEITE',
      coffeeType2: 'COM LEITE',
      about: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: '9,90',
    },
    cubano: {
      name: 'Cubano',
      numberOfTypes: 3,
      coffeeType1: 'ESPECIAL',
      coffeeType2: 'ALCOÓLICO',
      coffeeType3: 'GELADO',
      about: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: '9,90',
    },
    havaiano: {
      name: 'Havaiano',
      numberOfTypes: 1,
      coffeeType1: 'ESPECIAL',
      about: 'Bebida adocicada preparada com café e leite de coco',
      price: '9,90',
    },
    arabe: {
      name: 'Árabe',
      numberOfTypes: 1,
      coffeeType1: 'ESPECIAL',
      about: 'Bebida preparada com grãos de café árabe e especiarias',
      price: '9,90',
    },
    irlandes: {
      name: 'Irlandês',
      numberOfTypes: 2,
      coffeeType1: 'ESPECIAL',
      coffeeType2: 'ALCOÓLICO',
      about: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: '9,90',
    },

  }

  function increaseTotalQuantity() {
    if (totalQuantity >= 0) {
      setTotalQuantity(totalQuantity + 1)
    }
  }

  function decreaseTotalQuantity() {
    if (totalQuantity >= 0) {
      setTotalQuantity(totalQuantity - 1)
    }
  }

  function addCartCount() {
    setCartCount(totalQuantity)
  }

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
        productsInfo,
        totalQuantity,
        setTotalQuantity,
        increaseTotalQuantity,
        decreaseTotalQuantity,
        addCartCount,
        cartCount,
      }}
    >
      {children}
    </PurchaseInfoContext.Provider>
  )
}
