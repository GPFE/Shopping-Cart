import "./App.css";
import ProductList from "./components/ProductList";
import { Spinner } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import useProducts from "./hooks/useProducts";

function App() {
  const { isLoading, products } = useProducts()

  return (
    <Box pt={"2rem"}>
      {isLoading ? <Spinner /> : <ProductList products={products} />}
    </Box>
  );
}

export default App;
