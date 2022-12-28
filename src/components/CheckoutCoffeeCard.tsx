import { Minus, Plus, Trash } from 'phosphor-react'

export function CheckoutCoffeeCard() {
  return (
    <div className='flex gap-5 pt-10 pb-6 border-b border-base-button justify-between'>
      <img className='w-16' alt="" />
      <div>
        <span className='text-base-subtitle'>a</span>
        <div className="flex gap-2">
          <div className='flex gap-3 p-2 rounded-md bg-base-button'>
            <button className="text-product-purple hover:text-product-purple-dark"><Minus weight="bold" size={14} /></button>
            <span>0</span>
            <button className="text-product-purple hover:text-product-purple-dark"><Plus weight="bold" size={14} /></button>
          </div>
          <div className='p-2 gap-1 rounded-md bg-base-button hover:bg-base-hover '>
            <button className='text-base-text flex items-center gap-1 hover:text-base-subtitle  '>
              <span><Trash
                className='text-product-purple hover:text-product-purple-dark'
              />
              </span>
              REMOVER
            </button>
          </div>
        </div>
      </div>
      <span className='font-bold'>R$ 9,90</span>
    </div>
  )
}