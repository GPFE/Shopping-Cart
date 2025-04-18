import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom"

export default function NavBar() {
    return(
        <ButtonGroup>
            <Link to={"home"}>Home</Link>
            <Link></Link>
        </ButtonGroup>
    )
}