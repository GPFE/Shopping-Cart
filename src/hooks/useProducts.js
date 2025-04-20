import { useEffect, useState } from "react";
import axios from "axios";

export default function useProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    });
  }, []);
  
  return({isLoading, products})
}