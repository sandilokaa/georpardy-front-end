import React, { useState, useRef } from "react";
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
import { useSnackbar } from 'notistack';

import { fetchDataAccuracy } from "../../redux/slices/accuracySlice";
import BASE_URL from "../../apiConfig";
import axios from "axios";

const ModalDataTestStarted = (
    {
        isOpen,
        onClose
    }
) => {


    /* --------- Fetch Accuracy --------- */

    const dispatch = useDispatch();

    const data = useSelector(state => (state.accuracy.data.accuracy_ensemble[0]?.accuracy * 100).toFixed(2));

    /* --------- End Fetch Accuracy --------- */


    /* --------- Predict --------- */

    const { enqueueSnackbar } = useSnackbar();
    
    const [predictRainfall, setPredictRainfall] = useState();
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [showButton, setShowButton] = useState(true);

    const minTempField = useRef();
    const maxTempField = useRef();
    const rainfallField = useRef();
    const evaporationField = useRef();
    const sunshineField = useRef();
    const windGustSpeedField = useRef();
    const windSpeed9amField = useRef();
    const windSpeed3pmField = useRef();
    const humitidy9amField = useRef();
    const humidity3pmField = useRef();
    const pressure9amField = useRef();
    const pressure3pmField = useRef();
    const cloud9amField = useRef();
    const cloud3pmField = useRef();
    const temp3pmField = useRef();
    const rainTodayField = useRef();

    const onPredictRainfall = async() => {

        setLoading(true);

        try {

            const weatherValuePayload = {
                MinTemp: minTempField.current.value,
                MaxTemp: maxTempField.current.value,
                Rainfall: rainfallField.current.value,
                WindGustSpeed: windGustSpeedField.current.value,
                Humidity9am: humitidy9amField.current.value,
                Humidity3pm: humidity3pmField.current.value,
                Pressure9am: pressure9amField.current.value,
                Pressure3pm: pressure3pmField.current.value,
                Cloud9am: cloud9amField.current.value,
                Cloud3pm: cloud3pmField.current.value,
                Temp3pm: temp3pmField.current.value,
                RainToday: rainTodayField.current.value
            };

            const isAnyValueEmpty = Object.values(weatherValuePayload).some(value => value === "");

            if (isAnyValueEmpty) {
                enqueueSnackbar('Harap lengkapi semua field sebelum melakukan prediksi!', { 
                    variant: 'error', 
                    anchorOrigin: { 
                        vertical: 'top', 
                        horizontal: 'center' 
                    },
                    autoHideDuration: 2000 
                });

                return;
            }

            const predictRequest = await axios.post(
                `${BASE_URL["backend-flask"]}/predict`,
                weatherValuePayload,
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
                                    <Input ref={minTempField}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>MaxTemp</p>
                                    <Input ref={maxTempField}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Rainfall</p>
                                    <Input ref={rainfallField}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>WindGustSpeed</p>
                                    <Input ref={windGustSpeedField}/>
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
                                    <Input ref={humitidy9amField}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Humidity3pm</p>
                                    <Input ref={humidity3pmField}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Pressure9am</p>
                                    <Input ref={pressure9amField}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Pressure3pm</p>
                                    <Input ref={pressure3pmField}/>
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
                                    <Input ref={cloud9amField}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Cloud3pm</p>
                                    <Input ref={cloud3pmField}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Temp3pm</p>
                                    <Input ref={temp3pmField}/>
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>RainToday</p>
                                    <Input ref={rainTodayField}/>
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
                            window.location.reload('/data-test')
                        }
                    }}>
                        Close
                    </Button>
                    {showButton && (
                        <Button colorScheme='blue' onClick={onPredictRainfall}>
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

export default ModalDataTestStarted;