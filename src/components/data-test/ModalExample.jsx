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
import BASE_URL from "../../apiConfig";
import axios from "axios";

const ModalDataTestExample = (
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

    /* --------- Accuracy --------- */

    const dispatch = useDispatch();

    const data = useSelector(state => (state.accuracy.data.accuracy_ensemble?.[0]?.accuracy * 100).toFixed(2));

    /* --------- End Accuracy --------- */


    /* --------- Predict --------- */

    const [predictRainfall, setPredictRainfall] = useState();
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [showButton, setShowButton] = useState(true);

    const onPredictRainfall = async () => {
        
        setLoading(true);
        
        try {
            
            const featurePayload = {
                MinTemp: minTemp,
                MaxTemp: maxTemp,
                Rainfall: rainfall, 
                Evaporation: evaporation,
                Sunshine: sunshine, 
                WindGustSpeed: windGustSpeed, 
                WindSpeed9am: windSpeed9am, 
                WindSpeed3pm: windSpeed3pm, 
                Humidity9am: humidity9am, 
                Humidity3pm: humidity3pm, 
                Pressure9am: pressure9am, 
                Pressure3pm: pressure3pm, 
                Cloud9am: cloud9am, 
                Cloud3pm: cloud3pm, 
                Temp3pm: temp3pm,
                RainToday: rainToday
            };

            const predictRequest = await axios.post(
                `${BASE_URL["backend-flask"]}/predict`,
                featurePayload
            );

            const predictResponse = predictRequest.data;
            setPredictRainfall(predictResponse);
            setShowForm(false);
            setShowButton(false);
            dispatch(fetchDataAccuracy());

        } catch (err) {
            
            console.log(err.message);

        } finally {

            setLoading(false);

        }

    };

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
                                    <Input defaultValue={minTemp} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>MaxTemp</p>
                                    <Input defaultValue={maxTemp} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Rainfall</p>
                                    <Input defaultValue={rainfall} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Evaporation</p>
                                    <Input defaultValue={evaporation} />
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
                                    <Input defaultValue={sunshine} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>WindGustSpeed</p>
                                    <Input defaultValue={windGustSpeed} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>WindSpeed9am</p>
                                    <Input defaultValue={windSpeed9am} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>WindSpeed3pm</p>
                                    <Input defaultValue={windSpeed3pm} />
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
                                    <Input defaultValue={humidity9am} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Humidity3pm</p>
                                    <Input defaultValue={humidity3pm} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Pressure9am</p>
                                    <Input defaultValue={pressure9am} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Pressure3pm</p>
                                    <Input defaultValue={pressure3pm} />
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
                                    <Input defaultValue={cloud9am} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Cloud3pm</p>
                                    <Input defaultValue={cloud3pm} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Temp3pm</p>
                                    <Input defaultValue={temp3pm} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>RainToday</p>
                                    <Input defaultValue={rainToday} />
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
                        <Flex justifyContent="center" flexDirection="column" alignItems="center">
                            <Text><strong>Prediction :</strong> {predictRainfall ? predictRainfall.Prediction : null}</Text>
                            <Text><strong>Probability :</strong> {predictRainfall ? predictRainfall.Probability : null}</Text>
                            <Text><strong>Accuracy :</strong> {data} %</Text>
                        </Flex>
                    )}

                </ModalBody>

                <ModalFooter>
                    <Button variant='ghost' mr={3} onClick={() => {
                        onClose();
                        if (!showButton) {
                            window.location.reload('/data-test')
                        }
                    }}>
                        Close
                    </Button>
                    {showButton && (
                        <Button colorScheme='blue' onClick={onPredictRainfall} disabled={loading}>
                            {
                                loading ? `Loading...` : 'Check Result'
                            }
                        </Button>
                    )}
                </ModalFooter>

            </ModalContent>
        </Modal>

    );

};

export default ModalDataTestExample;