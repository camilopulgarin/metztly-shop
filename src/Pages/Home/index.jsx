import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {

  const {
    items,
    setSearchByTitle,
    searchByTitle,
    filteredItems,
    searchByCategory
} = useContext(ShoppingCartContext)

const renderView = () => {
  if (filteredItems?.length > 0) {
    return (
      filteredItems?.map(item => (
        <Card key={item.id} data={item} />
      ))
    )
  } else {
    return (
      <div>We don't have anything :(</div>
    )
  }
}
  return (
      <Layout className='bg-red-100'>
        <div className="flex w-80 relative items-center justify-center mb-4">
          <h1 className="font-medium text-xl">Exclusive products</h1>
        </div>
        <input 
        type="text" 
        placeholder="Search a porduct" 
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
        />
        <div className="grid gap-6 grid-cols-4 w-full max-w-screen-lg">
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
  )
}

export default Home
