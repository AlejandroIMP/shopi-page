import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Layout from '../../components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-5'>
        <Link to='/' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      <div className='grid grid-cols-2 place-self-center'>
      {
        context.order.map((order, index) => 
          (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard 
                key={index}
                id={index}
                date={order.date}
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          )
        )
      }
      </div>
    </Layout>
  )
}

export default MyOrders

