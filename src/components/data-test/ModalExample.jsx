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
    }
) => {

    /* --------- Accuracy --------- */

    const dispatch = useDispatch();

    const data = useSelector(state => (state.accuracy.data.accuracy_ensemble[0]?.accuracy * 100).toFixed(2));

    /* --------- End Accuracy --------- */


    /* --------- Predict --------- */

    const [predictRainfall, setPredictRainfall] = useState();
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [showButton, setShowButton] = useState(true);

    const [values, setValues] = useState({
        MinTemp: 20.2,
        MaxTemp: 26.2,
        Rainfall: 2.2,
        WindGustSpeed: 50.2,
        Humidity9am: 90.2,
        Humidity3pm: 82.2,
        Pressure9am: 1200.2,
        Pressure3pm: 1100.56,
        Cloud9am: 12.3,
        Cloud3pm: 18.2,
        Temp3pm: 40.4,
        RainToday: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]: parseFloat(value)
        }));
    };

    const onPredictRainfall = async () => {

        setLoading(true);

        try {

            const predictRequest = await axios.post(
                `${BASE_URL["backend-flask"]}/predict`,
                values,
                { 
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }
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
                                    <Input name="MinTemp" defaultValue={values.MinTemp} onChange={handleChange}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>MaxTemp</p>
                                    <Input name="MaxTemp" defaultValue={values.MaxTemp} onChange={handleChange}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Rainfall</p>
                                    <Input name="Rainfall" defaultValue={values.Rainfall} onChange={handleChange}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>WindGustSpeed</p>
                                    <Input name="WindGustSpeed" defaultValue={values.WindGustSpeed} onChange={handleChange}/>
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
                                    <p style={{ marginBottom: "6px" }}>Pressure9am</p>
                                    <Input name="Pressure9am" defaultValue={values.Pressure9am} onChange={handleChange}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Pressure3pm</p>
                                    <Input name="Pressure3pm" defaultValue={values.Pressure3pm} onChange={handleChange}/>
                                </div>

                                <div>
                                    <p style={{ marginBottom: "6px" }}>Humidity9am</p>
                                    <Input name="Humidity9am" defaultValue={values.Humidity9am} onChange={handleChange}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Humidity3pm</p>
                                    <Input name="Humidity3pm" defaultValue={values.Humidity3pm} onChange={handleChange}/>
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
                                    <Input name="CLoud9am" defaultValue={values.Cloud9am} onChange={handleChange}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Cloud3pm</p>
                                    <Input name="Cloud3pm" defaultValue={values.Cloud3pm} onChange={handleChange}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Temp3pm</p>
                                    <Input name="Temp3pm" defaultValue={values.Temp3pm} onChange={handleChange}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>RainToday</p>
                                    <Input name="RainToday" defaultValue={values.RainToday} onChange={handleChange}/>
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
                                    NB: Isi form tersebut dengan data cuaca hari ini, untuk RainToday(1: Rain, 0: No)
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
                            window.location.reload()
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