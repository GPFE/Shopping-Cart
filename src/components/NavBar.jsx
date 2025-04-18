import { Button, Flex, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import cart from "../../public/images/react_cart.png"

export default function NavBar() {
    return(
        <Flex alignItems={"center"} width={"100%"} justifyContent={"space-between"} left={"0"} top={"1"} position={"fixed"} zIndex={1} borderRadius={"1rem"} px={"1rem"}>
            <Link to={"/home"} backdropFilter={"auto"} backdropBlur={"1rem"} px={"1rem"} borderRadius={"1rem"} py=".3rem"><Image borderRadius={".9rem"} p={".3rem"} maxHeight={"3rem"} objectFit={"scale-down"} src={cart} /></Link>
            <Flex gap={"1rem"} backdropFilter={"auto"} backdropBlur={"1rem"} px={"1rem"} borderRadius={"1rem"} py=".3rem" bgGradient={"linear(to-r, rgba(97, 158, 255, 0.29), rgba(0, 98, 255, 0.28), rgba(0, 97, 158, 0.45))"} >
                <Link to={"/home"}><Button>Home</Button></Link>
                <Link to={"/shop"}><Button>Shop</Button></Link>
            </Flex>
            <Box></Box>
        </Flex>
    )
}