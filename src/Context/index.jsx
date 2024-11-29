import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0)

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart Order
  const [order, setOrder] = useState([])

  // Fetching data
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)
  
  const [searchBy, setSearchBy] = useState(null)

  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  // Get Products by title

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  
  // Get Products by category
  
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchBy && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchBy, searchByCategory))
    if (searchBy && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchBy, searchByCategory))
    if (!searchBy && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchBy, searchByCategory))
    if (!searchBy && !searchByCategory) setFilteredItems(filterBy(null, items, searchBy, searchByCategory))
  },[items, searchBy, searchByCategory])



  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder, 
      items,
      setItems,
      searchBy,
      setSearchBy,
      filteredItems,
      setFilteredItems,
      searchByCategory,
      setSearchByCategory,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}