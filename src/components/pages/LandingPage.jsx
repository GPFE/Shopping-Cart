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
import reactShop from "../../../public/images/react_shop.png";
import react_guy from "../../../public/images/react_guy.png";
import Rating from "./../Rating";
import { Link } from "react-router-dom";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import SuggesterCard from "../SuggesterCard";

export default function LandingPage() {
  const catHight = "15rem";
  const starSize = "1rem";

  return (
    <Grid gap="1rem" pt={"2rem"} maxWidth={"1000px"}>
      <main>
        <Card
          p={"1rem"}
          bgGradient="linear(blue.300, cyan.400)"
        >
          <HStack spacing={"1rem"}>
            <Stack
              backdropBlur="8rem"
              bgGradient="linear(to-r, whiteAlpha.600, whiteAlpha.500)"
              borderRadius="1rem"
              backdropFilter="auto"
              // color="white"
            >
              <CardBody
              >
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
                  <Button
                    backgroundColor="blue.700"
                    color="white"
                    colorScheme="blue"
                    _hover={{
                      transform:"scale(1.1)",
                      cursor: "pointer"
                    }}
                    rightIcon={
                    <Box
                      backgroundColor="blue.600"
                      borderRadius="69rem"
                      color="white"
                    ><HugeiconsIcon icon={ArrowRight01Icon} /></Box>
                    }>Explore</Button>
                </Link>
              </CardFooter>
            </Stack>
            <Image
              src={reactShop}
              borderRadius="1rem"
            />
          </HStack>
        </Card>
      </main>
      <Box
        bgGradient="linear(red.300, purple.300, purple.400)"
        borderRadius=".5rem"
        p={"2rem"}
      >
        <Grid gridTemplateColumns={"1fr 1fr 1fr"} gap={"1rem"}>
          <SuggesterCard
            imageHeight={catHight}
            image={react_guy}
            title="Sleek, minimal, and super intuitive!"
            description="Browsing products is a breeze. Love how fast it loads on my
            phone too."
          />
          <SuggesterCard
            imageHeight={catHight}
            image={react_guy}
            title="Didn’t expect a fake shop to look this real"
            description="The design is so clean it feels like a legit ecommerce site.
                Smooth transitions, too."
          />
          <SuggesterCard
            stars={4}
            imageHeight={catHight}
            image={react_guy}
            title="Looks better than some real shops"
            description="Seriously—navigation is on point, and the cart system works
                flawlessly."
          />
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
        <Button
          backgroundColor="blue.700"
          color="white"
          colorScheme="blue"
          _hover={{
            transform:"scale(1.1)",
            cursor: "pointer"
          }}
          rightIcon={
          <Box
            backgroundColor="blue.600"
            borderRadius="69rem"
            color="white"
          ><HugeiconsIcon icon={ArrowRight01Icon} /></Box>
          }>Explore</Button>
      </Link>
      <footer>...</footer>
    </Grid>
  );
}
