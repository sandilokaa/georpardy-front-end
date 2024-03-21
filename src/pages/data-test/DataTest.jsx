import React from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import HomeLayout from "../../layouts/HomeLayout";
import DataTestImage from "../../assets/images/data-test-image.png";
import ModalDataTestExample from "../../components/data-test/ModalExample";
// import ModalDataTestStarted from "../../components/data-test/ModalStarted";

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

                <ModalDataTestExample
                    isOpen={isOpen}
                    onClose={onClose}
                    minTemp={20.2}
                    maxTemp={26.2}
                    rainfall={2.2}
                    evaporation={12.3}
                    sunshine={8.8}
                    windGustSpeed={50.2}
                    windSpeed9am={20.2}
                    windSpeed3pm={34.5}
                    humidity9am={90.2}
                    humidity3pm={82.2}
                    pressure9am={1200.2}
                    pressure3pm={1100.56}
                    cloud9am={12.3}
                    cloud3pm={18.2}
                    temp3pm={40.4}
                    rainToday={1}
                    cautionText={"NB: Isi form tersebut dengan data cuaca hari ini! (Form di atas hanya contoh)"}
                />

                {/* <ModalDataTestStarted
                    isOpen={isOpen}
                    onClose={onClose}
                    minTemp={minTempField}
                    maxTemp={maxTemp}
                    rainfall={rainfall}
                    evaporation={evaporation}
                    sunshine={sunshine}
                    windGustSpeed={windGustSpeed}
                    windSpeed9am={windSpeed9am}
                    windSpeed3pm={windSpeed3pm}
                    humidity9am={humidity9am}
                    humidity3pm={humidity3pm}
                    pressure9am={pressure9am}
                    pressure3pm={pressure3pm}
                    cloud9am={cloud9am}
                    cloud3pm={cloud3pm}
                    temp3pm={temp3pm}
                    rainToday={rainToday}
                    cautionText={"NB: Isi form tersebut dengan data cuaca hari ini!"}
                /> */}

            </Flex>

        </HomeLayout>

    );

};

export default DataTest;