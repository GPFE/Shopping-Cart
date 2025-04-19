import "./App.css";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";
import { Box } from "@chakra-ui/react";

function App({addToCart}) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Box pt={"2rem"}>
      {isLoading ? <Spinner /> : <ProductList products={products} addToCart={addToCart} />}
    </Box>
  );
}

export default App;
