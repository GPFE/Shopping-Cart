import {
  Card,
  CardFooter,
  Box,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
  Container,
  Grid,
  Image,
  Stack,
  HStack,
  CardBody,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import reactShop from "../../public/images/react_shop.png";
import react_guy from "../../public/images/react_guy.png";
import Rating from "./Rating";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const catHight = "15rem";
  const starSize = "1rem";

  return (
    <Container pt={"2rem"} maxWidth={"1000px"}>
      <main>
        <Card p={"1rem"}>
          <HStack spacing={"1rem"}>
            <Stack>
              <CardBody>
                <Heading>Fake shop</Heading>
                <Text>
                  This is a showcase of a user-friendly shopping site. It is
                  built in React. The design is clean and simple. Users can
                  browse products easily. The layout works on all devices. It
                  includes a cart to add items.
                </Text>
              </CardBody>
              <CardFooter>
                <Link to={"/shop"}>
                  <Button>Explore</Button>
                </Link>
              </CardFooter>
            </Stack>
            <Image src={reactShop} />
          </HStack>
        </Card>
      </main>
      <Box p={"2rem"}>
        <Grid gridTemplateColumns={"1fr 1fr 1fr"} gap={"1rem"}>
          <Card>
            <Image height={catHight} objectFit={"scale-down"} src={react_guy} />
            <Rating stars={5} />
            <CardBody>
              <Heading fontSize={"xl"}>
                Sleek, minimal, and super intuitive!
              </Heading>
              <Text p={".5rem"} opacity={0.8}>
                Browsing products is a breeze. Love how fast it loads on my
                phone too.
              </Text>
            </CardBody>
          </Card>
          <Card>
            <Image height={catHight} objectFit={"scale-down"} src={react_guy} />
            <Rating stars={5} />
            <CardBody>
              <Heading fontSize={"xl"}>
                Didn’t expect a fake shop to look this real
              </Heading>
              <Text p={".5rem"} opacity={0.8}>
                The design is so clean it feels like a legit ecommerce site.
                Smooth transitions, too.
              </Text>
            </CardBody>
          </Card>
          <Card>
            <Image height={catHight} objectFit={"scale-down"} src={react_guy} />
            <Rating stars={4} />
            <CardBody>
              <Heading fontSize={"xl"}>
                Looks better than some real shops
              </Heading>
              <Text p={".5rem"} opacity={0.8}>
                Seriously—navigation is on point, and the cart system works
                flawlessly.
              </Text>
            </CardBody>
          </Card>
        </Grid>
      </Box>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" fontWeight={800} flex={1} textAlign={"left"}>
                Made with Chakra ui
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>chakra</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box textAlign={"left"} flex={1} fontWeight={800}>
                Made with React
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>react</AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Link to={"/shop"}>
        <Button>Explore</Button>
      </Link>
      <footer>...</footer>
    </Container>
  );
}
