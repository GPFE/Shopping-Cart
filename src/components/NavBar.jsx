import { Button, Heading, Flex, Image, Box, Highlight } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import cartImage from "../../public/images/react_cart.png";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function NavBar() {
  const { getNumberOfItems } = useContext(CartContext)
  const cartItemsCount = getNumberOfItems() || 0

  return (
    <Flex
      alignItems={"center"}
      width={"100%"}
      justifyContent={"space-between"}
      left={"0"}
      top={"1"}
      position={"fixed"}
      zIndex={1}
      borderRadius={"1rem"}
      px={"1rem"}
    >
      <Link to={"/"}>
        <Box fontWeight={"bold"}>Fake shop</Box>
      </Link>
      <Flex
        gap={"1rem"}
        backdropFilter={"auto"}
        backdropBlur={"1rem"}
        px={"1rem"}
        borderRadius={"1rem"}
        py=".3rem"
        bgGradient={
          "linear(to-r, rgba(97, 158, 255, 0.29), rgba(0, 98, 255, 0.28), rgba(0, 97, 158, 0.45))"
        }
      >
        <Link to={"/home"}>
          <Button>Home</Button>
        </Link>
        <Link to={"/shop"}>
          <Button>Shop</Button>
        </Link>
      </Flex>
      <Link
        to={"/cart"}
        backdropFilter={"auto"}
        backdropBlur={"1rem"}
        px={"1rem"}
        borderRadius={"1rem"}
        py=".3rem"
      >
        <Heading pos={"absolute"} bottom={"-.3rem"}>
          <Highlight
            query={`${cartItemsCount}`}
            styles={{ px: '2', rounded: 'full', bg: 'red.100', fontSize: "small" }}
          >
            {`${cartItemsCount}`}
          </Highlight>
        </Heading>
        <Image
          borderRadius={".9rem"}
          p={".3rem"}
          maxHeight={"3rem"}
          objectFit={"scale-down"}
          src={cartImage}
        />
      </Link>
    </Flex>
  );
}
