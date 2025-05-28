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
  CardHeader,
  useMediaQuery,
} from "@chakra-ui/react";
import reactShop from "../../../public/images/react_shop.png";
import react_guy from "../../../public/images/react_guy.png";
import Rating from "./../Rating";
import { Link } from "react-router-dom";
import { ApiIcon, ArrowRight01Icon, Css3Icon, Html5Icon, JavaScriptIcon, ReactIcon, Router02Icon, ZapIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import SuggesterCard from "../SuggesterCard";
import TechnologyCard from "../TechnologyCard";

export default function LandingPage() {
  const catHight = "15rem";
  const starSize = "1rem";
  const [isWiderThan750] = useMediaQuery("(min-width: 750px)")

  return (
    <Grid gap="1rem" pt={"2rem"} maxWidth={"1000px"}>
      <main>
        <Card
          p={"1rem"}
          bgGradient="linear(blue.300, cyan.400)"
        >
          <HStack flexWrap={isWiderThan750 ? "" : "wrap"} gap="1rem" spacing={"1rem"}>
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
              margin={isWiderThan750 ? "" : "0 auto"}
            />
          </HStack>
        </Card>
      </main>
      <Box
        bgGradient="linear(red.300, purple.300, purple.400)"
        borderRadius=".5rem"
        p={"2rem"}
      >
        <Grid gridTemplateColumns="repeat(auto-fit, minmax(14rem, 1fr))" gap={"1rem"}>
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
      <Accordion
        bgGradient="linear(red.100, orange.200)"
        borderRadius=".5rem"
        allowMultiple
        allowToggle
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" fontWeight={800} flex={1} textAlign={"left"}>
                What technologies are used to build Fake Shop?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel display="grid" gridTemplateColumns="repeat(auto-fill, minmax(15rem, 1fr))" gap="1rem" pb={4}>
            <TechnologyCard
              title="React"
              icon={ReactIcon}
            />
            <TechnologyCard
              title="Chakra UI"
              icon={ZapIcon}
            />
            <TechnologyCard
              title="React Router"
              icon={Router02Icon}
            />
            <TechnologyCard
              title="Context API"
              icon={ApiIcon}
            />
            <TechnologyCard
              title="JavaScript"
              icon={JavaScriptIcon}
            />
            <TechnologyCard
              title="HTML 5"
              icon={Html5Icon}
            />
            <TechnologyCard
              title="CSS 3"
              icon={Css3Icon}
            />
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box textAlign={"left"} flex={1} fontWeight={800}>
                How is the shopping cart functionality implemented?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Card>
              <CardBody>The cart is managed using <strong>React’s Context API</strong>. Cart data is stored in a global context, which allows components across the app (like product listings and the cart page) to access and modify cart state.</CardBody>
            </Card>
          </AccordionPanel>
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
      <footer>
        <Box mt="3rem">Proudly made in 🇨🇿 by <Link style={{textDecoration: "underline"}} to="https://arnost-portfolio.netlify.app/">Arnošt Havelka</Link></Box>
      </footer>
    </Grid>
  );
}
