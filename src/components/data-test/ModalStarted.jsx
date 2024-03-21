import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Flex,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Input
} from "@chakra-ui/react";
import { fetchDataAccuracy } from "../../redux/slices/accuracySlice";

const ModalDataTestStarted = (
    {
        isOpen,
        onClose,
        minTemp,
        maxTemp,
        rainfall,
        evaporation,
        sunshine,
        humidity3pm,
        humidity9am,
        pressure9am,
        pressure3pm,
        cloud9am,
        cloud3pm,
        windGustSpeed,
        windSpeed9am,
        windSpeed3pm,
        temp3pm,
        rainToday,
        cautionText
    }
) => {

    const dispatch = useDispatch();

    /* --------- Fetch Accuracy --------- */

    const data = useSelector((state) => state.accuracy.data.accuracy_ensemble[0]?.accuracy);
    const status = useSelector((state) => state.accuracy.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchDataAccuracy());
        }
    }, [ status, dispatch ]);

    const [result, setResult] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [showButton, setShowButton] = useState(true);

    const checkResult = () => {
        const hasil = `Accuracy ${(data * 100).toFixed(2)}%`;
        setResult(hasil);
        setShowForm(false);
        setShowButton(false)
    };

    /* --------- End Fetch Accuracy --------- */


    /* --------- Predict --------- */



    /* --------- End Predict --------- */

    return (

        <Modal isOpen={isOpen} onClose={onClose} size="4xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader
                    style={{
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                        fontSize: "24px"
                    }}
                >
                    Form Rainfall Prediction Example
                </ModalHeader>
                <ModalBody>
                    {showForm && (
                        <>
                            <Flex
                                gap="20px"
                                justifyContent="center"
                                mt="20px"
                                color="#323232"
                                fontFamily="Poppins"
                                fontWeight="medium"
                            >
                                <div>
                                    <p style={{ marginBottom: "6px" }}>MinTemp</p>
                                    <Input ref={minTemp} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>MaxTemp</p>
                                    <Input ref={maxTemp} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Rainfall</p>
                                    <Input ref={rainfall} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Evaporation</p>
                                    <Input ref={evaporation} />
                                </div>
                            </Flex>
                            <Flex
                                gap="20px"
                                justifyContent="center"
                                mt="20px"
                                color="#323232"
                                fontFamily="Poppins"
                                fontWeight="medium"
                            >
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Sunshine</p>
                                    <Input ref={sunshine} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>WindGustSpeed</p>
                                    <Input ref={windGustSpeed} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>WindSpeed9am</p>
                                    <Input ref={windSpeed9am} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>WindSpeed3pm</p>
                                    <Input ref={windSpeed3pm} />
                                </div>
                            </Flex>
                            <Flex
                                gap="20px"
                                justifyContent="center"
                                mt="20px"
                                color="#323232"
                                fontFamily="Poppins"
                                fontWeight="medium"
                            >
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Humidity9am</p>
                                    <Input ref={humidity9am} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Humidity3pm</p>
                                    <Input ref={humidity3pm} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Pressure9am</p>
                                    <Input ref={pressure9am} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Pressure3pm</p>
                                    <Input ref={pressure3pm} />
                                </div>
                            </Flex>
                            <Flex
                                gap="20px"
                                justifyContent="center"
                                mt="20px"
                                color="#323232"
                                fontFamily="Poppins"
                                fontWeight="medium"
                            >
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Cloud9am</p>
                                    <Input ref={cloud9am} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Cloud3pm</p>
                                    <Input ref={cloud3pm} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Temp3pm</p>
                                    <Input ref={temp3pm} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>RainToday</p>
                                    <Input ref={rainToday} />
                                </div>
                            </Flex>

                            <Flex
                                mt="40px"
                            >
                                <Text
                                    style={
                                        {
                                            fontFamily: "Poppins",
                                            fontWeight: "medium",
                                            color: '#323232'
                                        }
                                    }
                                >
                                    {cautionText}
                                </Text>
                            </Flex>
                        </>
                    )}
                    {!showForm && (
                        <Flex justifyContent="center" mb="20px">
                            <Text>{result}</Text>
                        </Flex>
                    )}

                </ModalBody>

                <ModalFooter style={{ marginTop: "20px" }}>
                    <Button variant='ghost' mr={3} onClick={() => {
                        onClose();
                        if (!showButton) {
                            window.location.reload('/data-test')
                        }
                    }}>
                        Close
                    </Button>
                    {showButton && (
                        <Button colorScheme='blue' onClick={checkResult}>Check Result</Button>
                    )}
                </ModalFooter>

            </ModalContent>
        </Modal>

    );

};

export default ModalDataTestStarted;