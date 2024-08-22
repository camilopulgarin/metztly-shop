import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import { Link, useParams } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"

function MyOrder() {
  const {
    order
  } = useContext(ShoppingCartContext)

  const params = useParams();
  console.log("params: ", params)
  let indexOrderPath = params.id;

  if (!indexOrderPath) indexOrderPath = order?.length -1
  console.log("indexOrderPath: ", indexOrderPath)
    return (
        <Layout className='bg-red-100'>
          <div className="flex w-80 relative items-center justify-center mb-6">
            <Link to='/my-orders' className="absolute left-0">
              <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
            </Link>
            <h1>MyOrder</h1>
          </div>
          <div className="flex flex-col w-80">
                {
                    order?.[indexOrderPath]?.products?.map(product => (
                        <OrderCard
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={product.image} 
                        price={product.price}
                        />
                    ))
                }
            </div>
        </Layout>
    )
  }
  
  export default MyOrder
  