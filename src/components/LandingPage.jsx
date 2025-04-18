import { Card, CardFooter, Box, Container, Grid, Image, Stack, HStack, CardBody, Heading, Text, Button } from "@chakra-ui/react"
import reactShop from "../../public/images/react_shop.png"
import react_guy from "../../public/images/react_guy.png"
import Rating from "./Rating"


export default function LandingPage() {
    const catHight = "15rem"
    const starSize = "1rem"

    return(
        <Container maxWidth={"1000px"}>
            <Card p={"1rem"}>
                <HStack spacing={"1rem"}>
                    <Stack>
                        <CardBody>
                            <Heading>Fake shop</Heading>
                            <Text>This is a showcase of a user-friendly shopping site. It is built in React. The design is clean and simple. Users can browse products easily. The layout works on all devices. It includes a cart to add items.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>Explore</Button>
                        </CardFooter>
                    </Stack>
                    <Image src={reactShop} />
                </HStack>
            </Card>
            <Box p={"2rem"}>
                <Grid gridTemplateColumns={"1fr 1fr 1fr"} gap={"1rem"} height={"25rem"}>
                    <Card>
                        <Image height={catHight} objectFit={"scale-down"} src={react_guy} />
                        <Rating stars={5} />
                    </Card>
                    <Card>
                        <Image height={catHight} objectFit={"scale-down"} src={react_guy} />
                        <Rating stars={5} />
                    </Card>
                    <Card>
                        <Image height={catHight} objectFit={"scale-down"} src={react_guy} />
                        <Rating stars={4} />
                    </Card>
                </Grid>
            </Box>
        </Container>
    )
}