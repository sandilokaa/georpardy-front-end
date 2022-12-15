import React from "react";
import {
    Box,
    Flex,
    Container,
    HStack,
    Heading,
    Text,
    Image,
    Button,
    Link
} from "@chakra-ui/react";
import HomeLayout from "../../layouts/HomeLayout";
import ImageMainContent from "../../assets/images/img-content-1.png"
import { NavLink as LinkRouter } from "react-router-dom";

const Home = () => {

    return (

        <HomeLayout>

            <Flex
                gap="40px"
                mt="60px"
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex flexDirection="column" w={["100%", "51%"]} gap="20px">
                    <Flex w="full" flexDirection="column" mt="60px">
                        <Box>
                            <Heading fontSize="48px" fontWeight="900" fontFamily="Poppins" color="#323232">
                                Temukan
                                <Heading as="span" color="#0D72CC" fontSize="48px" fontWeight="900" ml="14px" mr="14px">
                                    lokasi yang cocok
                                </Heading>
                                untuk bangun rumah tinggal
                            </Heading>
                        </Box>
                    </Flex>
                    <Text
                        fontSize="20px"
                        fontWeight="medium"
                        color="#323232"
                        mb="12px"
                        mt="10px"
                        fontFamily="Poppins"
                    >
                        Memberikan pelayanan informasi mengenai  daerah
                        rawan tanah longsor di Kota Semarang.
                    </Text>
                    <Link
                        as={LinkRouter}
                        to="/login"
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                    >
                        <Button
                            variant="solid"
                            bgColor="#0D72CC"
                            color="white"
                            _hover={{ bgColor: "#0D72CC" }}
                            _active={{ bgColor: "#0D72CC" }}
                        >
                            Eksplor Informasi
                        </Button>
                    </Link>
                </Flex>

                <Image display="block" w="49%" src={ImageMainContent} alt="Geopardy Main Content" />
            </Flex>

            <Flex
                gap="40px"
                mt="100px"
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex flexDirection="column" w={["100%", "32%"]} gap="20px">
                    <Flex w="full" flexDirection="column">
                        <Box>
                            <Heading fontSize="48px" fontWeight="900" fontFamily="Poppins" color="#323232">
                                Cerita dibalik
                            </Heading>
                            <Heading color="#0D72CC" fontSize="48px" fontWeight="900" fontFamily="Poppins">
                                Geopardy
                            </Heading>
                            <Heading color="#0D72CC" fontSize="48px" fontWeight="900" fontFamily="Poppins">
                                Project
                            </Heading>
                        </Box>
                    </Flex>
                </Flex>

                <Text
                    fontSize="20px"
                    fontWeight="medium"
                    color="#323232"
                    mb="12px"
                    mt="10px"
                    fontFamily="Poppins"
                    width="68%"
                    textAlign="justify"
                >
                    Geopardy dibuat karena topografi Kota Semarang yang unik. Secara geografis, 
                    wilayah Kota Semarang terletak diantara 6◦50'-7◦10' LS dan 109◦35'110◦50' BT. 
                    Jika dilihat dari karakteristik wilayah Kota Semarang yang memiliki topografi berbukit, 
                    maka perlu adanya pemetaan risiko longsor yang bertujuan untuk memberikan informasi mengenai 
                    lokasi-lokasi yang memiliki risiko tanah longsor terhadap pembangunan rumah.
                </Text>

            </Flex>

        </HomeLayout >

    );

};

export default Home;