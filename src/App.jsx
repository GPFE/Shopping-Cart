import "./App.css";
import ProductList from "./components/ProductList";
import { useMediaQuery } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function App() {
  const [isWiderThan750] = useMediaQuery("(min-width: 750px)")

  return (
    <Box width={isWiderThan750 ? "calc(20rem + 40vw)" : ""} maxWidth="1280px" pt={"2rem"}>
      <ProductList />
    </Box>
  );
}

export default App;
