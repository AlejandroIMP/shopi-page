import { useContext } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import ProductDetail from '../../components/ProductDetail'
import { ShoppingCartContext } from "../../Context"

const Home = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <h1 className='font-medium text-xl'>Home</h1>
      </div>
      <input 
        type='text' 
        placeholder='Search a product' 
        className='w-80 p-4 border border-black rounded-lg mb-5 focus:outline-none' 
        onChange={(e) => {context.setSearchBy.e.target.value}}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          context.items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home

