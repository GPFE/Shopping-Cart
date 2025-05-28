import { FormControl, Select, FormLabel, Input, FormHelperText, Button } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import { Link } from "react-router"

export default function DeliveryPage() {
    return(
        <form>
            <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input type="text"></Input>
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email"></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input type="text"></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>ZIP / Postal Code</FormLabel>
                <Input type="text"></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Country</FormLabel>
                <Select placeholder="Select country">
                    <option value="USA">United States</option>
                    <option value="Germany">Germany</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                </Select>
            </FormControl>
            <div style={{marginTop: "1rem"}}>
                <Link to={"/thanks"}>
                    <Button type="submit" colorScheme="green" _hover={{transform: "scale(1.2)"}} backgroundColor={"green.600"} color={"white"} rightIcon={<CheckIcon />}>Submit</Button>
                </Link>
            </div>
        </form>
    )
}