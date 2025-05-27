import { Card, CardBody, Heading, Text, Image } from "@chakra-ui/react"
import Rating from "./Rating"

export default function SuggesterCard({imageHeight, image, title, description, stars = 5}) {
  return (
    <Card>
        <Image pt="1rem" height={imageHeight} objectFit={"scale-down"} src={image} />
        <Rating stars={stars} />
        <CardBody>
            <Heading fontSize={"xl"}>
                {title}
            </Heading>
            <Text p={".5rem"} opacity={0.8}>
                {description}
            </Text>
        </CardBody>
    </Card>
  )
}
