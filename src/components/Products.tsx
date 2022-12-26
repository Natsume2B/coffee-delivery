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
        name='Expresso Tradicional'
        src={expressoTradicional}
        numberOfTypes={1}
        coffeeType1='TRADICIONAL'
        about='O tradicional café feito com água quente e grãos moídos'
        price='9,90'
      />
      <CoffeeCard
        name='Expresso Americano'
        src={expressoAmericano}
        numberOfTypes={1}
        coffeeType1='TRADICIONAL'
        about='Expresso diluído, menos intenso que o tradicional'
        price='9,90'
      />
      <CoffeeCard
        name='expressoCremoso'
        src={expressoCremoso}
        numberOfTypes={1}
        coffeeType1='TRADICIONAL'
        about='Café expresso tradicional com espuma cremosa'
        price='9,90'
      />
      <CoffeeCard
        name='expressoGelado'
        src={expressoGelado}
        numberOfTypes={2}
        coffeeType1='TRADICIONAL'
        coffeeType2='GELADO'
        about='Bebida preparada com café expresso e cubos de gelo'
        price='990'
      />
      <CoffeeCard
        name='cafeComLeite'
        src={cafeComLeite}
        numberOfTypes={2}
        coffeeType1='TRADICIONAL'
        coffeeType2='COM LEITE'
        about='Meio a meio de expresso tradicional com leite vaporizado'
        price='990'
      />
      <CoffeeCard
        name='latte'
        src={latte}
        numberOfTypes={2}
        coffeeType1='TRADICIONAL'
        coffeeType2='COM LEITE'
        about='Uma dose de café expresso com o dobro de leite e espuma cremosa'
        price='990'
      />
      <CoffeeCard
        name='capuccino'
        src={capuccino}
        numberOfTypes={2}
        coffeeType1='TRADICIONAL'
        coffeeType2='COM LEITE'
        about='Bebida com canela feita de doses iguais de café leite e espuma'
        price='990'
      />
      <CoffeeCard
        name='macchiato'
        src={macchiato}
        numberOfTypes={2}
        coffeeType1='TRADICIONAL'
        coffeeType2='COM LEITE'
        about='Café expresso misturado com um pouco de leite quente e espuma'
        price='990'
      />
      <CoffeeCard
        name='mocaccino'
        src={mocaccino}
        numberOfTypes={2}
        coffeeType1='TRADICIONAL'
        coffeeType2='COM LEITE'
        about='Café expresso com calda de chocolate pouco leite e espuma'
        price='990'
      />
      <CoffeeCard
        name='chocolateQuente'
        src={chocolateQuente}
        numberOfTypes={2}
        coffeeType1='ESPECIAL COM LEITE'
        coffeeType2='COM LEITE'
        about='Bebida feita com chocolate dissolvido no leite quente e café'
        price='990'
      />
      <CoffeeCard
        name='cubano'
        src={cubano}
        numberOfTypes={3}
        coffeeType1='ESPECIAL'
        coffeeType2='ALCOÓLICO'
        coffeeType3='GELADO'
        about='Drink gelado de café expresso com rum creme de leite e hortelã'
        price='990'
      />
      <CoffeeCard
        name='havaiano'
        src={havaiano}
        numberOfTypes={1}
        coffeeType1='ESPECIAL'
        about='Bebida adocicada preparada com café e leite de coco'
        price='990'
      />
      <CoffeeCard
        name='arabe'
        src={arabe}
        numberOfTypes={1}
        coffeeType1='ESPECIAL'
        about='Bebida preparada com grãos de café árabe e especiarias'
        price='990'
      />
      <CoffeeCard
        name='irlandes'
        src={irlandes}
        numberOfTypes={2}
        coffeeType1='ESPECIAL'
        coffeeType2='ALCOÓLICO'
        about='Bebida a base de café uísque irlandês açúcar e chantilly'
        price='990'
      />
    </div>
  )
}