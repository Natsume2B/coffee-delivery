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
import { CoffeeCard } from './CoffeeCard'
import { useContext } from 'react'
import { PurchaseInfoContext } from '../context/PurchaseInfoContext'

export function Products() {
  const {productsInfo} = useContext(PurchaseInfoContext)

  return (
    <div className='flex flex-wrap gap-8 '>
      <CoffeeCard
        name={productsInfo.expressoTradicional.name}
        src={expressoTradicional}
        numberOfTypes={productsInfo.expressoTradicional.numberOfTypes}
        coffeeType1={productsInfo.expressoTradicional.coffeeType1}
        about={productsInfo.expressoTradicional.about}
        price={productsInfo.expressoTradicional.price}
      />
      <CoffeeCard
        name={productsInfo.expressoAmericano.name}
        src={expressoAmericano}
        numberOfTypes={productsInfo.expressoAmericano.numberOfTypes}
        coffeeType1={productsInfo.expressoAmericano.coffeeType1}
        about={productsInfo.expressoAmericano.about}
        price={productsInfo.expressoAmericano.price}
      />
      <CoffeeCard
        name={productsInfo.expressoCremoso.name}
        src={expressoCremoso}
        numberOfTypes={productsInfo.expressoCremoso.numberOfTypes}
        coffeeType1={productsInfo.expressoCremoso.coffeeType1}
        about={productsInfo.expressoCremoso.about}
        price={productsInfo.expressoCremoso.price}
      />
      <CoffeeCard
        name={productsInfo.expressoGelado.name}
        src={expressoGelado}
        numberOfTypes={productsInfo.expressoGelado.numberOfTypes}
        coffeeType1={productsInfo.expressoGelado.coffeeType1}
        coffeeType2={productsInfo.expressoGelado.coffeeType2}
        about={productsInfo.expressoGelado.about}
        price={productsInfo.expressoGelado.price}
      />
      <CoffeeCard
        name={productsInfo.cafeComLeite.name}
        src={cafeComLeite}
        numberOfTypes={productsInfo.cafeComLeite.numberOfTypes}
        coffeeType1={productsInfo.cafeComLeite.coffeeType1}
        coffeeType2={productsInfo.cafeComLeite.coffeeType2}
        about={productsInfo.cafeComLeite.about}
        price={productsInfo.cafeComLeite.price}
      />
      <CoffeeCard
        name={productsInfo.latte.name}
        src={latte}
        numberOfTypes={productsInfo.latte.numberOfTypes}
        coffeeType1={productsInfo.latte.coffeeType1}
        coffeeType2={productsInfo.latte.coffeeType2}
        about={productsInfo.latte.about}
        price={productsInfo.latte.price}
      />
      <CoffeeCard
        name={productsInfo.capuccino.name}
        src={capuccino}
        numberOfTypes={productsInfo.capuccino.numberOfTypes}
        coffeeType1={productsInfo.capuccino.coffeeType1}
        coffeeType2={productsInfo.capuccino.coffeeType2}
        about={productsInfo.capuccino.about}
        price={productsInfo.capuccino.price}
      />
      <CoffeeCard
        name={productsInfo.macchiato.name}
        src={macchiato}
        numberOfTypes={productsInfo.macchiato.numberOfTypes}
        coffeeType1={productsInfo.macchiato.coffeeType1}
        coffeeType2={productsInfo.macchiato.coffeeType2}
        about={productsInfo.macchiato.about}
        price={productsInfo.macchiato.price}
      />
      <CoffeeCard
        name={productsInfo.mocaccino.name}
        src={mocaccino}
        numberOfTypes={productsInfo.mocaccino.numberOfTypes}
        coffeeType1={productsInfo.mocaccino.coffeeType1}
        coffeeType2={productsInfo.mocaccino.coffeeType2}
        about={productsInfo.mocaccino.about}
        price={productsInfo.mocaccino.price}
      />
      <CoffeeCard
        name={productsInfo.chocolateQuente.name}
        src={chocolateQuente}
        numberOfTypes={productsInfo.chocolateQuente.numberOfTypes}
        coffeeType1={productsInfo.chocolateQuente.coffeeType1}
        coffeeType2={productsInfo.chocolateQuente.coffeeType2}
        about={productsInfo.chocolateQuente.about}
        price={productsInfo.chocolateQuente.price}
      />
      <CoffeeCard
        name={productsInfo.cubano.name}
        src={cubano}
        numberOfTypes={productsInfo.cubano.numberOfTypes}
        coffeeType1={productsInfo.cubano.coffeeType1}
        coffeeType2={productsInfo.cubano.coffeeType2}
        about={productsInfo.cubano.about}
        price={productsInfo.cubano.price}
      />
      <CoffeeCard
        name={productsInfo.havaiano.name}
        src={havaiano}
        numberOfTypes={productsInfo.havaiano.numberOfTypes}
        coffeeType1={productsInfo.havaiano.coffeeType1}
        coffeeType2={productsInfo.havaiano.coffeeType2}
        about={productsInfo.havaiano.about}
        price={productsInfo.havaiano.price}
      />
      <CoffeeCard
        name={productsInfo.arabe.name}
        src={arabe}
        numberOfTypes={productsInfo.arabe.numberOfTypes}
        coffeeType1={productsInfo.arabe.coffeeType1}
        coffeeType2={productsInfo.arabe.coffeeType2}
        about={productsInfo.arabe.about}
        price={productsInfo.arabe.price}
      />
      <CoffeeCard
        name={productsInfo.irlandes.name}
        src={irlandes}
        numberOfTypes={productsInfo.irlandes.numberOfTypes}
        coffeeType1={productsInfo.irlandes.coffeeType1}
        coffeeType2={productsInfo.irlandes.coffeeType2}
        about={productsInfo.irlandes.about}
        price={productsInfo.irlandes.price}
      />
    </div>
  )
}