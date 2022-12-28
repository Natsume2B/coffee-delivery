import expressoTradicional from './assets/coffees/expresso-tradicional.svg'
import expressoAmericano from './assets/coffees/expresso-americano.svg'
import expressoCremoso from './assets/coffees/expresso-cremoso.svg'
import expressoGelado from './assets/coffees/expresso-gelado.svg'
import cafeComLeite from './assets/coffees/cafe-com-leite.svg'
import latte from './assets/coffees/latte.svg'
import capuccino from './assets/coffees/capuccino.svg'
import macchiato from './assets/coffees/macchiato.svg'
import mocaccino from './assets/coffees/mocaccino.svg'
import chocolateQuente from './assets/coffees/chocolate-quente.svg'
import cubano from './assets/coffees/cubano.svg'
import havaiano from './assets/coffees/havaiano.svg'
import arabe from './assets/coffees/arabe.svg'
import irlandes from './assets/coffees/irlandes.svg'

export interface ProductProps {
  id?: string,
  name: string,
  price: string,
  about: string,
  src: any,
  numberOfTypes: number,
  coffeeType1: string,
  coffeeType2?: string,
  coffeeType3?: string,
}

export const productsArray: ProductProps[] = [
  {
    name: 'Expresso Tradicional',
    src: expressoTradicional,
    numberOfTypes: 1,
    coffeeType1: 'TRADICIONAL',
    about: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  {
    name: 'Expresso Ameriano',
    src: expressoAmericano,
    numberOfTypes: 1,
    coffeeType1: 'TRADICIONAL',
    about: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
  {
    name: 'Expresso Cremoso',
    src: expressoCremoso,
    numberOfTypes: 1,
    coffeeType1: 'TRADICIONAL',
    about: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
  },
  {
    name: 'Expresso Gelado',
    src: expressoGelado,
    numberOfTypes: 2,
    coffeeType1: 'TRADICIONAL',
    coffeeType2: 'GELADO',
    about: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
  },
  {
    name: 'Café com Leite',
    src: cafeComLeite,
    numberOfTypes: 2,
    coffeeType1: 'TRADICIONAL',
    coffeeType2: 'COM LEITE',
    about: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
  },
  {
    name: 'Latte',
    src: latte,
    numberOfTypes: 2,
    coffeeType1: 'TRADICIONAL',
    coffeeType2: 'COM LEITE',
    about: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
  },
  {
    name: 'Capuccino',
    src: capuccino,
    numberOfTypes: 2,
    coffeeType1: 'TRADICIONAL',
    coffeeType2: 'COM LEITE',
    about: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
  },
  {
    name: 'Macchiato',
    src: macchiato,
    numberOfTypes: 2,
    coffeeType1: 'TRADICIONAL',
    coffeeType2: 'COM LEITE',
    about: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  {
    name: 'Mocaccino',
    src: mocaccino,
    numberOfTypes: 2,
    coffeeType1: 'TRADICIONAL',
    coffeeType2: 'COM LEITE',
    about: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
  },
  {
    name: 'Chocolate Quente',
    src: chocolateQuente,
    numberOfTypes: 2,
    coffeeType1: 'ESPECIAL COM LEITE',
    coffeeType2: 'COM LEITE',
    about: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
  },
  {
    name: 'Cubano',
    src: cubano,
    numberOfTypes: 3,
    coffeeType1: 'ESPECIAL',
    coffeeType2: 'ALCOÓLICO',
    coffeeType3: 'GELADO',
    about: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  {
    name: 'Havaiano',
    src: havaiano,
    numberOfTypes: 1,
    coffeeType1: 'ESPECIAL',
    about: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
  },
  {
    name: 'Árabe',
    src: arabe,
    numberOfTypes: 1,
    coffeeType1: 'ESPECIAL',
    about: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
  },
  {
    name: 'Irlandês',
    src: irlandes,
    numberOfTypes: 2,
    coffeeType1: 'ESPECIAL',
    coffeeType2: 'ALCOÓLICO',
    about: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
  },
]

export function getProductData(name) {
  let productData = productsArray.find(product => product.name === name)
  
  return productData
}