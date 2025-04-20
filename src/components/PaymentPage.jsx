import PaymentRadio from "./PaymentRadio";
import { Button, useRadioGroup, VStack } from "@chakra-ui/react";
import { Link } from "react-router";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function PaymentPage(props) {
    const paymentOptions = ["Credit / Debit Card", "During pick up", "Google pay", "Bank Transfer", "Cryptocurrency"]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "payment method",
        defaultValue: paymentOptions[0],
        onChange: console.log
    })

    const group = getRootProps()

    return(
        <>
            <VStack pt={"1rem"} { ...group }>
                {
                    paymentOptions.map((value) => {
                        const radio = getRadioProps({ value })
                        return (
                            <PaymentRadio key={value} {...radio}>
                                {value}
                            </PaymentRadio>
                        )
                    })
                }
            </VStack>
            <div style={{marginTop: "1rem"}}>
                <Link to={"/cart/delivery"}>
                    <Button backgroundColor={"green.600"} color={"white"} rightIcon={<ArrowForwardIcon />}>Next</Button>
                </Link>
            </div>
        </>
    )
}