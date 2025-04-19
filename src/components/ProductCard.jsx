import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Image,
  Center,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function ProductCard({ product }) {
  const { title, description, price, image, category } = product;
  const caption = description.substring(0, 100).concat("...");
  const {addToCart} = useContext(CartContext)

  return (
    <Card>
      <Center>
        <Image
          p="1rem"
          src={image}
          category={category}
          boxSize="sm"
          objectFit="contain"
        />
      </Center>
      <CardHeader fontSize={"3xl"}>{title}</CardHeader>
      <CardBody fontSize="2xl" color="tomato" p="0">
        {`${price},-`}
      </CardBody>
      <CardFooter opacity={0.5}>{caption}</CardFooter>
      <Button
        onClick={() => {
          addToCart(title, 1)
        }} 
      >Add to cart</Button>
    </Card>
  );
}
