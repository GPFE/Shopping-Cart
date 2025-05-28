import "./App.css";
import ProductList from "./components/ProductList";
import { Spinner, useMediaQuery } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import useProducts from "./hooks/useProducts";

function App() {
  const { isLoading, products } = useProducts()
  const [isWiderThan750] = useMediaQuery("(min-width: 750px)")

  return (
    <Box width={isWiderThan750 ? "calc(20rem + 40vw)" : ""} maxWidth="1280px" pt={"2rem"}>
      {isLoading ? <Spinner /> : <ProductList products={products} />}
    </Box>
  );
}

export default App;
