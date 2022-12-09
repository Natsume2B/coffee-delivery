
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

export function Products() {
  return (
    <div className='flex flex-wrap gap-8 '>
      <CoffeeCard
        src={expressoTradicional}
        coffeeType='Tradicional'
        name='Expresso Tradicional'
        about='O tradicional café feito com água quente e grãos moídos'
        price='9,90'
      />
      <CoffeeCard
        src={expressoAmericano}
        coffeeType='Tradicional'
        name='Expresso Ameriano'
        about='Expresso diluído, menos intenso que o tradicional'
        price='9,90'
      />
      <CoffeeCard
        src={expressoCremoso}
        coffeeType='Tradicional'
        name='Expresso Cremoso'
        about='Café expresso tradicional com espuma cremosa'
        price='9,90'
      />
      <CoffeeCard
        src={expressoGelado}
        coffeeType='Tradicional'
        name='Expresso Gelado'
        about='Bebida preparada com café expresso e cubos de gelo'
        price='9,90'
      />
      <CoffeeCard
        src={cafeComLeite}
        coffeeType='Tradicional'
        name='Café com Leite'
        about='Meio a meio de expresso tradicional com leite vaporizado'
        price='9,90'
      />
      <CoffeeCard
        src={latte}
        coffeeType='Tradicional'
        name='Latte'
        about='Uma dose de café expresso com o dobro de leite e espuma cremosa'
        price='9,90'
      />
      <CoffeeCard
        src={capuccino}
        coffeeType='Tradicional'
        name='Capuccino'
        about='Bebida com canela feita de doses iguais de café, leite e espuma'
        price='9,90'
      />
      <CoffeeCard
        src={macchiato}
        coffeeType='Tradicional'
        name='Macchiato'
        about='Café expresso misturado com um pouco de leite quente e espuma'
        price='9,90'
      />
      <CoffeeCard
        src={mocaccino}
        coffeeType='Tradicional'
        name='Mocaccino'
        about='Café expresso com calda de chocolate, pouco leite e espuma'
        price='9,90'
      />
      <CoffeeCard
        src={chocolateQuente}
        coffeeType='Especial'
        name='Chocolate Quente'
        about='Bebida feita com chocolate dissolvido no leite quente e café'
        price='9,90'
      />
      <CoffeeCard
        src={cubano}
        coffeeType='Especial'
        name='Cubano'
        about='Drink gelado de café expresso com rum, creme de leite e hortelã'
        price='9,90'
      />
      <CoffeeCard
        src={havaiano}
        coffeeType='Especial'
        name='Havaiano'
        about='Bebida adocicada preparada com café e leite de coco'
        price='9,90'
      />
      <CoffeeCard
        src={arabe}
        coffeeType='Especial'
        name='Árabe'
        about='Bebida preparada com grãos de café árabe e especiarias'
        price='9,90'
      />
      <CoffeeCard
        src={irlandes}
        coffeeType='Especial'
        name='Irlandês'
        about='Bebida a base de café, uísque irlandês, açúcar e chantilly'
        price='9,90'
      />
    </div>
  )
}