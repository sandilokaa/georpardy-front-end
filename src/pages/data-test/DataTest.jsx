import React, { useState } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Input
} from "@chakra-ui/react";
import HomeLayout from "../../layouts/HomeLayout";
import DataTestImage from "../../assets/images/data-test-image.png";

const DataTest = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (

        <HomeLayout>

            <Flex
                id="data-test"
                gap="20px"
                mt="71px"
                mb="71px"
                justifyContent="space-between"
                alignItems="center"
                position="relative"
            >
                <Flex flexDirection="column" w={["100%", "50%"]} gap="20px">
                    <Flex w="full" flexDirection="column" mt="20px">
                        <Box>
                            <Heading fontSize="82px" fontWeight="black" fontFamily="Poppins" color="#323232">
                                Advanced ML
                                <Heading as="span" color="#0D72CC" fontSize="82px" fontWeight="black" ml="14px" mr="14px">
                                    forecast
                                </Heading>
                                , for everyone.
                            </Heading>
                        </Box>
                    </Flex>
                    <Flex
                        id="home"
                        gap="20px"
                        mt="57px"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Flex flexDirection="column" w={["100%", "50%"]} gap="20px">
                            <Flex w="full" flexDirection="column">
                                <Box>
                                    <Text fontSize="20px" fontWeight="black" fontFamily="Poppins" color="#323232">
                                        Sandi
                                    </Text>
                                    <Text fontSize="20px" fontWeight="medium" fontFamily="Poppins" color="#323232">
                                        Loka
                                    </Text>
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex flexDirection="column" w={["100%", "50%"]} gap="20px">
                            <Flex w="full" flexDirection="column">
                                <Box>
                                    <Text fontSize="20px" fontWeight="black" fontFamily="Poppins" color="#323232">
                                        Study Case
                                    </Text>
                                    <Text fontSize="20px" fontWeight="medium" fontFamily="Poppins" color="#323232">
                                        Rain in Australia
                                    </Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        id="home"
                        gap="20px"
                        mt="57px"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Flex w="full" flexDirection="column">
                            <Box>
                                <Text fontSize="20px" fontWeight="medium" fontFamily="Poppins" color="#323232">
                                    Prediksi curah hujan menggunakan Machine Learning
                                    melibatkan pemanfaatan algoritma dan model Machine
                                    Learning untuk menganalisis data historis cuaca dan faktor-faktor
                                    lainnya guna membuat perkiraan tentang kapan, di mana dan seberapa banyak hujan yang mungkin terjadi di masa depan.
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>

                <Image display="block" w="50%" src={DataTestImage} alt="Geopardy Data Test" />

                <Button
                    onClick={onOpen}
                    position="absolute"
                    right="26%"
                    top="88%"
                    width="20%"
                    height="8%"
                    variant="solid"
                    border="3px solid #ffffff"
                    color="white"
                    fontFamily="Poppins"
                    bgColor="transparent"
                    fontWeight="bold"
                    _hover={{ bgColor: "#0D72CC", border: "none" }}
                    _active={{ bgColor: "#0D72CC" }}
                >
                    Example
                </Button>

                <Button
                    position="absolute"
                    right="3%"
                    top="88%"
                    width="20%"
                    height="8%"
                    variant="solid"
                    border="3px solid #ffffff"
                    color="white"
                    fontFamily="Poppins"
                    bgColor="transparent"
                    fontWeight="bold"
                    _hover={{ bgColor: "#0D72CC", border: "none" }}
                    _active={{ bgColor: "#0D72CC" }}
                >
                    Get Started
                </Button>

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
                                    <Input placeholder='20.9' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>MaxTemp</p>
                                    <Input placeholder='37.2' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Rainfall</p>
                                    <Input placeholder='0.8' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Evaporation</p>
                                    <Input placeholder='6.0' readOnly />
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
                                    <Input placeholder='5.0' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>WindGustSpeed</p>
                                    <Input placeholder='34.1' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>WindSpeed9am</p>
                                    <Input placeholder='20.2' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>WindSpeed3pm</p>
                                    <Input placeholder='49.5' readOnly />
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
                                    <Input placeholder='90.2' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Humidity3pm</p>
                                    <Input placeholder='20' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Pressure9am</p>
                                    <Input placeholder='1200.2' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Pressure3pm</p>
                                    <Input placeholder='1130.4' readOnly />
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
                                    <Input placeholder='12.5' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Cloud3pm</p>
                                    <Input placeholder='8.2' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>Temp3pm</p>
                                    <Input placeholder='18.4' readOnly />
                                </div>
                                <div>
                                    <p style={{ marginBottom: "6px" }}>RainToday</p>
                                    <Input placeholder='1' readOnly />
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
                                    NB: Masukkan kondisi cuaca sekarang untuk prediksi hujan besok.
                                </Text>
                            </Flex>

                        </ModalBody>

                        <ModalFooter style={{ marginTop: "20px" }}>
                            <Button variant='ghost' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button colorScheme='blue'>Check Result</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                
            </Flex>

        </HomeLayout>

    );

};

export default DataTest;