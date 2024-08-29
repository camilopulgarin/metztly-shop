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
  function generateWhatsAppLink(phoneNumber, items) {
    const formattedMessage = items.map(item => `* ${item}`).join('\n');
    const encodedMessage = encodeURIComponent(formattedMessage);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  }

  const handleClick = (items) => {
    const titles = items.map(item => item.title);
    const url = generateWhatsAppLink("+573183455014", titles);
    window.open(url, '_blank');
  };
    return (
        <Layout className='bg-red-100'>
          <div className="flex w-80 relative items-center justify-center mb-6">
            <Link to='/my-orders' className="absolute left-0">
              <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
            </Link>
            <h1>Mi pedido</h1>
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
          <div className="flex flex-col w-80 mt-4">
            <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => handleClick(order?.[indexOrderPath]?.products)}>Contactar</button>
          </div>
        </Layout>
    )
  }
  
  export default MyOrder
  