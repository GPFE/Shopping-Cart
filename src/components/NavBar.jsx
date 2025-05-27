import { Button, Heading, Flex, Image, Box, Highlight } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import cartImage from "../../public/images/react_cart.png";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Home01Icon, ShoppingCart01Icon, ShoppingCart02Icon, Store01Icon, Store02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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
        p=".5rem 1rem"
        gap={"1rem"}
        borderRadius={"1rem"}
        bgColor="white"
        boxShadow=".3rem .3rem .5rem hsla(0, 0.00%, 0.00%, 0.30)"
        width="calc(10rem + 20vw)"
        justifyContent="center"
        maxWidth="40rem"
      >
        <Link to={"/home"}>
          <Button
            bgGradient={
              "linear(to-r, blue.400, blue.600)"
            }
            color="white"
            colorScheme="blue"
            leftIcon={
              <HugeiconsIcon icon={Home01Icon} />
            }
          >Home</Button>
        </Link>
        <Link to={"/shop"}>
          <Button
             bgGradient={
              "linear(to-r, blue.400, blue.600)"
            }
            leftIcon={
              <HugeiconsIcon icon={Store02Icon} />
            }
            color="white"         
            colorScheme="blue"
          >Shop</Button>
        </Link>
      </Flex>
      <Box
        boxShadow=".3rem .3rem .5rem hsla(0, 0.00%, 0.00%, 0.08)"
        borderRadius="1rem"
      >
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
            contrast="1"
          />
        </Link>
      </Box>
    </Flex>
  );
}
