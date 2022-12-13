import { MapPinLine } from 'phosphor-react'
import { CurrencyDollar } from 'phosphor-react'
import { CreditCard } from 'phosphor-react'
import { Bank } from 'phosphor-react'
import { Money } from 'phosphor-react'

export function Checkout() {
  return (
    <div className='grid grid-cols-2'>
      <section>
        <h1 className='font-baloo2 text-lg mb-4' >
          Complete seu pedido
        </h1>
        <div className="p-10 bg-base-card mb-3 rounded-md">
          <div className='flex mb-8 gap-2'>
            <MapPinLine size={22} className="text-product-yellow-dark" />
            <header>
              <h2>
                Endereço de entrega
              </h2>
              <span> Informe o endereço onde deseja receber o seu pedido</span>
            </header>
          </div>

          <form action="" className='grid grid-cols-[30%_55%_15%] gap-3'>

            <input type="number"
              placeholder="CEP"
              name="cep"
              className='mb-1 p-3 rounded row-start-1 bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="cep"></label>

            <input
              type="text"
              placeholder="Rua"
              name="rua"
              className='mb-1 p-3 rounded row-start-2 col-span-3  bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="rua"></label>


            <input
              type="number"
              placeholder="Número"
              name="numero"
              className='mb-1 p-3 rounded row-start-3  bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="numero"></label>

            <input
              type="text"
              placeholder="Complemento"
              name="complemento"
              className='mb-1 p-3 rounded row-start-3  bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="complemento"></label>

            <input
              type="text"
              placeholder="Bairro"
              name="bairro"
              className='mb-1 p-3 rounded row-start-4 bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="bairro"></label>

            <input
              type="text"
              placeholder="Cidade"
              name="cidade"
              className='mb-1 p-3 rounded row-start-4 bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="cidade"></label>

            <input
              type="text"
              placeholder="UF"
              name="uf"
              className='mb-1 p-3 rounded row-start-4 bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="uf"></label>

          </form>
        </div>

        <div className='bg-base-card p-10 rounded-md'>
          <header className='flex flex-row mb-8 gap-2'>
            <CurrencyDollar size={22} className='text-product-purple' />
            <div>
              <h2>
                Pagamento
              </h2>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </header>

          <div className='flex gap-3'>
            <button className='w-1/3 inline-flex items-center gap-3 p-4 rounded-md bg-base-button text-product-purple'>
              <CreditCard />
              <span className='text-xs'>CARTÃO DE CRÉDITO</span>
            </button>
            <button className='w-1/3 inline-flex items-center gap-3 p-4 rounded-md bg-base-button text-product-purple'>
              <Bank />
              <span className='text-xs'>CARTÃO DE DÉBITO</span>
            </button>
            <button className='w-1/3 inline-flex items-center gap-3 p-4 rounded-md bg-base-button text-product-purple'>
              <Money />
              <span className='text-xs'>DINHEIRO</span>
            </button>
          </div>
        </div>
      </section>
    </div>

  )
}