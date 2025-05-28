import { Card, CardHeader, CardBody, Grid, Heading } from "@chakra-ui/react"
import { HugeiconsIcon } from "@hugeicons/react"

export default function TechnologyCard({icon, title}) {
  return (
    <Card>
        <CardBody>
        <Grid borderRadius="1rem" p="1rem" placeContent="center" bgGradient="linear(to-r,hsl(25, 90.00%, 60.00%),hsl(331, 82.70%, 58.40%))">
            <HugeiconsIcon fill="none" icon={icon} size={80} />
        </Grid>
        <CardHeader>
            <Heading as="h3" fontSize="xl">{title}</Heading>
        </CardHeader>
        </CardBody>
    </Card>
  )
}
