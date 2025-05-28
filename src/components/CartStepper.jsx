import { Step, StepIcon, StepIndicator, Card, CardBody, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle, useSteps, Box, useMediaQuery } from "@chakra-ui/react"
import { useState, useEffect } from "react"

const steps = [
    { title: "Cart" },
    { title: "Shipping and payment" },
    { title: "Delivery details" }
]

export default function CartStepper({index}) {
    useEffect(() => {
        setActiveStep(index)
    },[index])

    const { activeStep, setActiveStep } = useSteps({
        index: index,
        count: steps.length
    })

    const [isWiderThan750] = useMediaQuery("(min-width: 750px)")

    return(
            <Card>
                <CardBody>
                    <Stepper
                    orientation={isWiderThan750 ? "horizontal" : "vertical"}
                    size={"lg"} pt={"2rem"} index={activeStep}>
                        {
                            steps.map((step, index) => {
                                return(
                                    <>
                                        <Step pl={isWiderThan750 ? "" : "1rem"} key={index}>
                                            <StepIndicator>
                                                <StepStatus
                                                    complete={<StepIcon />}
                                                    incomplete={<StepNumber />}
                                                    active={<StepNumber />}
                                                />
                                            </StepIndicator>
                    
                                        <Box>
                                            <StepTitle>{step.title}</StepTitle>
                                        </Box>
                                        </Step>
                                        {isWiderThan750 && <StepSeparator />}
                                    </>
                                )
                            })
                        }
                    </Stepper>
                </CardBody>
            </Card>
    )
}