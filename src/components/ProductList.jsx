import ProductCard from "./ProductCard";
import { Grid, GridItem, useMediaQuery } from "@chakra-ui/react";

export default function ProductList ({ products }) {
  const [isWiderThan750] = useMediaQuery("(min-width: 750px)")

  return (
    <Grid
     templateColumns={isWiderThan750 ? "repeat(auto-fill, minmax(20rem, 1fr))" : "1fr"} gap="1rem">
      {products.map((product) => (
        <GridItem key={product.id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  );
}
