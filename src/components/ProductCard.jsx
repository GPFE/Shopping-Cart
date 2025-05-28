import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Image,
  Center,
  Box
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { HugeiconsIcon } from "@hugeicons/react"
import { ShoppingBasketAdd03Icon } from "@hugeicons/core-free-icons";

export default function ProductCard({ product }) {
  const { title, description, price, image, category } = product;
  const caption = description.substring(0, 100).concat("...");
  const {addToCart} = useContext(CartContext)

  return (
    <Card
      height="100%"
      width="100%"
    >
      <Center>
        <Image
          p="1rem"
          src={image}
          category={category}
          boxSize="sm"
          objectFit="contain"
        />
      </Center>
      <CardBody fontSize="2xl" p="0 2rem">
        <Box borderRadius="1rem" backgroundColor="orange.200" fontSize="2xl">{`$${price}`}</Box>
      </CardBody>
      <CardHeader fontSize={"3xl"}>{title.split(" ").splice(0, 6).join(" ")}</CardHeader>
      {/* <CardFooter opacity={0.5}>{caption}</CardFooter> */}
      <Button
        onClick={() => {
          addToCart(title, 1)
        }}
        rightIcon={
          <HugeiconsIcon icon={ShoppingBasketAdd03Icon} />
        }
        _hover={{
          bgGradient: "linear(to-r, orange.400, yellow.300)",
          transform: "scale(1.01)"
        }}
      >Add To Cart</Button>
    </Card>
  );
}
