import { Card, Box, CardBody, Button, Grid, Text, Heading, Image, ButtonGroup, IconButton, Center, Spinner, Container } from "@chakra-ui/react"
import { AddIcon, ArrowForwardIcon, MinusIcon } from "@chakra-ui/icons"
import { useContext } from "react"
import { CartContext } from "../CartContext"
import useProducts from "../../hooks/useProducts"
import { Link } from "react-router"

const findProductByName = (products, name) => {
    return products.filter(({title}) => title === name)[0]
}

const generateCaption = (description) => {
    return description.substring(0, 100).concat("...");
}

const generateTitle = (title) => {
    return title.split(" ").splice(0, 6).join(" ") 
}


export default function CartPage() {
    const { cart, addToCart, removeFromCart } = useContext(CartContext)
    const { isLoading, products } = useProducts()

    if (!isLoading && Object.keys(cart).length < 1) {
        return(
            <Text fontWeight={"bold"} pt={"1rem"}>
                No items
            </Text>
        )
    }

    return(
        <Container maxW={"1000px"} pt={"1rem"}>
            <Grid gap={".8rem"}>
                {
                    isLoading ? <Spinner /> : Object.keys(cart).map((productName, index) => {
                        const product = findProductByName(products, productName) || {
                            "id": 7806890057,
                            "title": "Not found",
                            "price": 0,
                            "description": "unknown",
                            "category": "unknown",
                            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                            "rating": {
                                "rate": 4.7,
                                "count": 500
                            }
                            }
                        return (
                        <Card key={index} borderRadius={"lg"}>
                            <Grid templateColumns={"3fr 5fr"}>
                                <Image
                                    borderLeftRadius={"lg"}
                                    objectFit={"scale-down"}
                                    src={product.image}
                                    height={"15rem"}
                                    p={"1.6rem"}
                                />
                                <CardBody>
                                    <Heading>{generateTitle(productName)}</Heading>
                                    <CardBody fontSize="2xl" p="0 2rem">
                                        <Box borderRadius="1rem" backgroundColor="orange.200" fontSize="2xl">{`$${product.price}`}</Box>
                                    </CardBody>
                                    <ButtonGroup pt={"1.8rem"} isAttached variant={"outline"}>
                                        <IconButton onClick={() => addToCart(product.title, 1)} aria-label="Increase product count" icon={<AddIcon />} />
                                        <Center maxW={"sm"} borderWidth={"1px"} px={"1rem"}>{cart[productName]}</Center>
                                        <IconButton onClick={() => removeFromCart(product.title, 1)} aria-label="Decrease product count" icon={<MinusIcon />} />
                                    </ButtonGroup>
                                </CardBody>
                            </Grid>
                        </Card>)
                })}
            </Grid>
            <div style={{marginTop: "1rem"}}>
                <Link to={"payment"}>
                    <Button colorScheme="green" _hover={{transform: "scale(1.1)"}} backgroundColor={"green.600"} color={"white"} rightIcon={<ArrowForwardIcon />}>Next</Button>
                </Link>
            </div>
        </Container>
    )
}