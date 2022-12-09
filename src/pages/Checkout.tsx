import { MapPinLine } from 'phosphor-react'

export function Checkout() {
  return (
    <div className='grid grid-cols-2'>
      <section className='max-w-full'>
        <h1 className='font-baloo2 text-lg mb-4' >
          Complete seu pedido
        </h1>
        <div className="p-10 bg-base-card">
          <div className='flex mb-8 gap-2'>
            <MapPinLine size={22} className="text-product-yellow-dark" />
            <header className='flex flex-col'>
              <h2 className='flex items-center'>
                Endereço de entrega
              </h2>
              <span> Informe o endereço onde deseja receber o seu pedido</span>
            </header>
          </div>

          <form action="" className='grid grid-cols-3'>

            <input type="number"
              placeholder="CEP"
              name="cep"
              className='mb-4 p-3 rounded  bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="cep"></label>

            <input
              type="text"
              placeholder="Rua"
              name="rua"
              className='mb-4 p-3 rounded col-start-1 col-span-3 bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="rua"></label>


            <input
              type="number"
              placeholder="Número"
              name="numero"
              className='mb-4 p-3 rounded col-start-1 row-start-3 bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="numero"></label>

            <input
              type="text"
              placeholder="Complemento"
              name="complemento"
              className='mb-4 p-3 ml-3 rounded col-start-2 row-start-3 col-span-2 bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="complemento"></label>

            <input
              type="text"
              placeholder="Bairro"
              name="bairro"
              className='mb-4 p-3 rounded col-start-1 row-start-5 bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="bairro"></label>

            <input
              type="text"
              placeholder="Cidade"
              name="cidade"
              className='mb-4 p-3 rounded ml-3 col-start-2 row-start-5 w-[146.5%] bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="cidade"></label>

            <input
              type="text"
              placeholder="UF"
              name="uf"
              className='mb-4 p-3 rounded ml-[calc(53.5%_+_0.75rem)] max-w-max col-start-3 row-start-5 w-2/5 bg-base-input border border-base-button text-base-label'
            />
            <label htmlFor="uf"></label>

          </form>
        </div>

      </section>
    </div>

  )
}