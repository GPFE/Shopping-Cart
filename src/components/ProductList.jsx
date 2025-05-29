import ProductCard from "./ProductCard";
import { Grid, Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Image,
  Center,
  Box
, Spinner, GridItem, useMediaQuery, Skeleton } from "@chakra-ui/react";
import useProducts from "./../hooks/useProducts";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingBasketAdd03Icon } from "@hugeicons/core-free-icons";

export default function ProductList () {
  const [isWiderThan750] = useMediaQuery("(min-width: 750px)")
  const { isLoading, products } = useProducts()

  return (
    <Grid
     templateColumns={isWiderThan750 ? "repeat(auto-fill, minmax(20rem, 1fr))" : "1fr"} gap="1rem">

      {isLoading ? <>
        <Skeleton endColor="orange.100" height="36.875rem" width="100%" borderRadius=".5rem" />
        <Skeleton endColor="orange.100" height="36.875rem" width="100%" borderRadius=".5rem" />
        <Skeleton endColor="orange.100" height="36.875rem" width="100%" borderRadius=".5rem" />
        <Skeleton endColor="orange.100" height="36.875rem" width="100%" borderRadius=".5rem" />
        <Skeleton endColor="orange.100" height="36.875rem" width="100%" borderRadius=".5rem" />
        <Skeleton endColor="orange.100" height="36.875rem" width="100%" borderRadius=".5rem" />
      </> :
      products.map((product) => (
        <GridItem key={product.id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  );
}
