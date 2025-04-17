import './App.css'
import ProductList from './components/ProductList'
import { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'
import axios from 'axios'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      {isLoading ? <Spinner /> : <ProductList products={products} />}
    </>
  )
}

export default App
