import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  </StrictMode>,
);
