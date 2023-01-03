import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useContext } from "react"
import deliveryBike from '../assets/deliveryBike.svg'
import { PurchaseInfoContext } from "../context/PurchaseInfoContext"

export function CheckoutSuccess() {

  const { creditChecked, debitChecked, moneyChecked, data } = useContext(PurchaseInfoContext)

  function checkPaymentMethod() {
    if (creditChecked == true) {
      return <span>Pagamento na entrega <br /><strong> Cartão de Crédito</strong></span>
    } else if (debitChecked) {
      return <span>Pagamento na entrega <br /><strong> Cartão de Débito</strong></span>
    } else if (moneyChecked) {
      return <span>Pagamento na entrega <br /><strong>Dinheiro</strong></span>
    }
  }

  return (
    <div className="grid grid-cols-2 gap-20">
      <section>
        <div className="mb-10">
          <h1 className="font-baloo2 text-[2rem] text-product-yellow-dark">Uhu! Pedido confirmado</h1>
          <p className="text-xl">Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div className="flex flex-col p-[1px] rounded-tr-[2.250rem] rounded-bl-[2.250rem] rounded-tl-md rounded-br-md bg-gradient-to-r from-product-yellow to-product-purple">
          <div className="bg-background p-10 rounded-tr-[2.250rem] rounded-bl-[2.250rem] rounded-tl-md rounded-br-md">
            <div className="flex gap-3 items-center mb-8 h-full w-full">
              <span className="p-2 rounded-full text-white bg-product-purple">
                <MapPin weight="fill" />
              </span>
              <span>Entrega em <strong> {data.rua}, {data.numero}</strong><br /> {data.bairro} - {data.cidade}, {data.uf}</span>
            </div>

            <div className="flex gap-3 items-center mb-8 ">
              <span className="p-2 rounded-full text-white bg-product-yellow">
                <Timer weight="fill" />
              </span>
              <span>Previsão de entrega <br /><strong> 20 min - 30 min</strong></span>
            </div>
            <div className="flex gap-3 items-center mb-8 ">
              <span className="p-2 rounded-full text-white bg-product-yellow-dark">
                <CurrencyDollar />
              </span>
              {checkPaymentMethod()}
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-end">
        <img src={deliveryBike} className='w-3/4' alt="" />
      </section>
    </div>
  )
}