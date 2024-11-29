import Layout from "../../components/Layout"
import OrderCard from "../../components/OrderCard"
import { ShoppingCartContext } from "../../Context"

const MyOrders = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      MyOrders
      <div className='px-6 overflow-y-scroll flex-1'>
      {
        context.order?.map((order, index) => 
          (
            <Link key={index} to={`/my-orders/${order.id}`}>
              <OrderCard 
                key={order.id}
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

