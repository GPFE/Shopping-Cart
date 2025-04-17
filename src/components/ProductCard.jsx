import { Card, CardHeader, CardBody, CardFooter, Image, Center } from '@chakra-ui/react'

export default function ProductCard({product}) {
    const { title, description, price, image, category } = product
    const caption = description.substring(0, 100).concat("...")

    return (<Card>
        <Center>
            <Image p="1rem" src={image} category={category} boxSize='sm' objectFit="contain" />
        </Center>
        <CardHeader fontSize={"3xl"}>{title}</CardHeader>
        <CardBody fontSize="2xl" color="tomato" p="0">
            {`${price},-`}
        </CardBody>
        <CardFooter opacity={.5}>{caption}</CardFooter>
    </Card>)
}