import searchBarIcon from '../assets/images/icons/search.svg'
import { useEffect, useState } from 'react'
import Products from '../widgets/Products'
import AddProduct from '../widgets/AddProduct'

function Specials(props) {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [productData, setProductData] = useState([])
  const baseUrl = import.meta.env.VITE_BASE_URL

  const filteredProducts = items.filter((item) => {
    if (query === '') {
      return item.category === props.clickedCategory
    } else {
      return item.title.toLowerCase().includes(query.toLowerCase())
    }
  })

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${baseUrl}/products`)
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchItems()
  }, [])

  const handleClick = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="mb-40">
      <h4 className="lg:text-md orange-heading mb-3 uppercase">
        Special Dishes
      </h4>
      <h1 className="normal-heading max-w-[500px]">
        Standout Dishes From Our Menu
      </h1>

      <div className="mb-20 flex items-center justify-center rounded-full bg-gradient-to-r from-[#73cdab] to-[#39db4a] py-8">
        <div className="flex w-[750px] max-w-full items-center rounded-full bg-white py-2 pr-3 pl-5 shadow-lg">
          <input
            type="text"
            className="flex-1 px-4 py-2 text-2xl font-medium text-gray-700 placeholder-gray-500 outline-none"
            placeholder="Search for anything..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />

          <button className="rounded-full bg-neutral-500 p-4">
            <img className="" src={searchBarIcon} alt="search" />
          </button>
        </div>
      </div>

      <button
        className="bg-green-color-light mb-15 ml-13 rounded-lg px-5 py-3 text-2xl font-semibold text-white shadow-md"
        onClick={handleClick}
      >
        Add Item
      </button>

      {showForm && <AddProduct setProductData={setProductData} />}

      {productData.length > 0 && (
        <div className="mb-4 flex justify-start px-10">
          <div className="flex flex-wrap gap-10 p-3">
            {productData.map((product, index) => (
              <Products
                key={index}
                productImage={product.productImage}
                productTitle={product.productTitle}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center px-10">
        <div className="flex flex-wrap gap-10 p-3">
          {filteredProducts.length === 0 ? (
            <h2>No results for your search</h2>
          ) : (
            filteredProducts.map((item, index) => (
              <Products
                key={index}
                productId={item.id}
                productImage={item.image}
                productTitle={item.title}
                price={item.price}
                rating={item.rating.rate}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Specials
