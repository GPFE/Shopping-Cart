import ProductCard from "./ProductCard"
import { Grid, GridItem } from "@chakra-ui/react"

export default function({ products }) {
    console.log(products)
    return(
        <Grid
        templateColumns="1fr 1fr 1fr"
        gap={4}
        >
            {products.map(product => <GridItem><ProductCard key={product.id} product={product}/></GridItem>)}
        </Grid>
    )
}