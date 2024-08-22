import { useContext } from "react"
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context"

const Card = (data) => {
  const {
    count, 
    setCount, 
    openProductDetail, 
    setIsProductToShow, 
    setCarProducts, 
    carProducts, 
    openCheckoutSideMenu,
    closeProductDetail
  } = useContext(ShoppingCartContext)

  const showPorduct = (productDetail) => {
    setIsProductToShow(productDetail)
    openProductDetail()
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    closeProductDetail()
    setCount(count + 1)
    setCarProducts([...carProducts, productData])
    openCheckoutSideMenu()

  }

  const renderIcon = (id) => {
    const isInCart = carProducts.filter(product => product.id === id).length > 0


    if (isInCart) {
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
        >
          <CheckIcon className="h-6 text-white" /> 
        </div>
      )
    } else {
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <PlusIcon className="h-6 text-black" /> 
        </div>
      )
    }
    
  }

    return (
      <div 
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showPorduct(data.data)}
      >
        <figure className='relative mb-2 w-full h-4/5'>
          <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data?.data?.category}</span>
          <img className='w-full h-full object-cover rounded-lg' src={`${data?.data?.image}`} alt={data?.data?.title} />
          {renderIcon(data?.data?.id)}
        </figure>
        <p className='flex justify-between'>
          <span className='text-sm font-light'>{data?.data?.title}</span>
          <span className='text-lg font-medium'>${data?.data?.price}</span>
        </p>
      </div>
    )
  }
  
  export default Card