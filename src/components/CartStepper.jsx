import { Step, StepIcon, StepIndicator, StepNumber, Stepper, StepSeparator, StepStatus, StepTitle, useSteps, Box } from "@chakra-ui/react"
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

    return(
            <Stepper size={"lg"} pt={"2rem"} index={activeStep}>
                {
                    steps.map((step, index) => {
                        return(
                            <>
                                <Step key={index}>
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
                                <StepSeparator />
                            </>
                        )
                    })
                }
            </Stepper>
    )
}