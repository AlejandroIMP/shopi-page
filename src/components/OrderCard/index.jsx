import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props

  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
  }

  return (
    <div className='flex justify-between items-center mb-3 border border-black p-3 rounded-lg'>
      <div className='flex items-center gap-2'>
        <figure className='w-24 h-20'>
          <img className='w-full h-full rounded-lg object-fill' 
          src={imageUrl} 
          alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price.toFixed(2)}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )

}

export default OrderCard;