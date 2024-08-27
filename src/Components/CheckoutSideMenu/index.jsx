import { useContext } from "react"
import { Link } from "react-router-dom"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard"
import { totalPrice } from "../../utils"
import "./styles.css"

const CheckoutSideMenu = () => {
    const {
        isCheckoutSideMenuOpen, 
        closeCheckoutSideMenu, 
        carProducts, 
        setCarProducts, 
        order,
        setOrder,
        setSearchByTitle
    } = useContext(ShoppingCartContext)
    
    const handleDelete = (id) => {
        const filteredProducts = carProducts.filter(product => product.id != id)
        setCarProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: carProducts,
            totalProducts: carProducts.length,
            totalPrice: totalPrice(carProducts)
        }

        setOrder([...order, orderToAdd])
        setCarProducts([])
        closeCheckoutSideMenu()
        //setSearchByTitle(null)
    }

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div className="cursor-pointer"
                    onClick={() => closeCheckoutSideMenu()}
                > <XMarkIcon className="h-6 text-black" /> </div>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {
                    carProducts.map(product => (
                        <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title} 
                        imageUrl={product.image} 
                        price={product.price?.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
                        handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-2xl">{totalPrice(carProducts)?.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</span>
                </p>
                <Link to='my-orders/last'>
                    <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu