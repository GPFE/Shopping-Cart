import { Button, Heading, Flex, Image, Box, Highlight, useMediaQuery, Popover, PopoverTrigger, PopoverContent, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import cartImage from "../../public/images/react_cart.png";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Cancel02Icon, Home01Icon, Menu01Icon, ShoppingCart01Icon, ShoppingCart02Icon, Store01Icon, Store02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function NavBar() {
  const { getNumberOfItems } = useContext(CartContext)
  const cartItemsCount = getNumberOfItems() || 0
  const [isWiderThan750] = useMediaQuery("(min-width: 750px)")
  const { isOpen, onOpen, onClose } = useDisclosure()

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
      boxShadow={isWiderThan750 ? "none" : ".3rem .3rem .5rem hsla(0, 0.00%, 0.00%, 0.08)"}
      bgColor={isWiderThan750 ? "" : "white"}
    >
      {
      isWiderThan750 ?
      <>
        <Link to={"/"}>
        <Box
          bgColor="white"
          boxShadow=".3rem .3rem .5rem hsla(0, 0.00%, 0.00%, 0.10)"
          fontWeight={"bold"}
          p=".5rem 1rem"
          borderRadius="1rem"
        >Fake shop</Box>
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
      </> :
      <>
        <Button
          onClick={onOpen}
          bgColor="white"
          >            
          <HugeiconsIcon icon={Menu01Icon} />
        </Button>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerContent display="flex" flexDirection="row" p="1rem 2rem" gap="1rem">
          <Button
            bgGradient={
              "linear(to-r, red.400, orange.600)"
            }
            borderRadius="69rem"
            color="white"
            colorScheme="red"
            onClick={onClose}
            ><HugeiconsIcon fill="white" color="white" icon={Cancel02Icon} /></Button>
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
        </DrawerContent>
      </Drawer>
        <Box
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
    </>
    }
    </Flex>
  );
}
