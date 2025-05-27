import ProductCard from "./ProductCard";
import { Grid, GridItem } from "@chakra-ui/react";

export default function ProductList ({ products }) {
  return (
    <Grid
     templateColumns="repeat(auto-fill, minmax(20rem, 1fr))" gap="1rem">
      {products.map((product) => (
        <GridItem key={product.id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  );
}
