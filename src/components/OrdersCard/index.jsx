import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = props => {
  const { totalPrice, totalProducts, date } = props

  return (
    <div className='flex flex-col justify-between items-start mb-3 border border-black w-52 h-full rounded-lg p-2 m-2 relative'>
      <p>
        <strong>Date:</strong> <span>{ date }</span>
      </p>
      <p>
        <strong>Quantity: </strong><span>{ totalProducts }</span>
      </p>
      <p>
        <strong>Total Price: </strong>$<span>{ totalPrice.toFixed(2) }</span>
      </p>
      <ChevronRightIcon 
        className='h-8 w-8 text-black cursor-pointer absolute right-3 top-9' 
        
      /> 
    </div>
  )
}

export default OrdersCard