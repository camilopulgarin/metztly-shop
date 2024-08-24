import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon, MoonIcon } from "@heroicons/react/24/solid"

const Navbar = () => {
    const {carProducts, setSearchByCategory} = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className="flex justify-between items-center fixed z-0 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        <p className="flex gap-2">
                            Metztly <MoonIcon className="h-6 text-black"/>
                        </p>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/all'
                        onClick={() => setSearchByCategory('')}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        onClick={() => setSearchByCategory('clothing')}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => setSearchByCategory('electronics')}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        onClick={() => setSearchByCategory('electronics')}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        onClick={() => setSearchByCategory('electronics')}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        onClick={() => setSearchByCategory('jewelery')}
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    @shop
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <ShoppingBagIcon className="h-6 text-black" /> 
                    <div>
                        {carProducts.length}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar