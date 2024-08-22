import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrders() {
  const {
      order
  } = useContext(ShoppingCartContext)
    return (
        <Layout className='bg-red-100'>
          <div className="flex w-80 relative items-center justify-center mb-4">
            <h1 className="font-medium text-xl">MyOrders</h1>
          </div>
          
          {
            order.map((order, index) => (
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard 
                  totalPrice={order.totalPrice} 
                  totalProducts={order.totalProducts} />
              </Link>
              
            ))
          }
        </Layout>
    )
  }
  
  export default MyOrders
  