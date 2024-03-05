import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Button
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";
import axios from "axios";
import MapWrapped from "../../components/area-distribution/MapWrapped";

const DetailArea = () => {

    const [cityData, setCityData] = useState();
    const [loading, setLoading] = useState(true);

    const params = useLocation();

    const cityId = (params.pathname).split('/')[3];

    useEffect(() => {

        const onSearch = async () => {

            try {

                const getCityDataRequest = await axios.get(
                    `http://localhost:8080/api/v1/city/${cityId}`,
                    {
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );

                const getCityDataResponse = getCityDataRequest.data;

                setCityData(getCityDataResponse.data.getedCityByCityId);
                setLoading(false);

            } catch (err) {
                alert(err.message);
            }

        };

        onSearch();

    }, [cityId]);

    return (

        <HomeLayout>
            <Flex
                gap="40px"
                mt="40px"
                mb="8%"
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex flexDirection="column" w={["100%", "51%"]} gap="20px" justifyContent="flex-start">
                    <Flex w="full" flexDirection="column" mt="10px">
                        <Box>
                            <Heading fontSize="20px" fontWeight="bold" fontFamily="Poppins" color="#323232">Nama Kota</Heading>
                            <Text
                                fontSize="20px"
                                fontWeight="regular"
                                color="#323232"
                                mt="4px"
                                mb="20px"
                                fontFamily="Poppins"
                            >
                                {cityData ? cityData.City.cityName : null}
                            </Text>
                            <Heading fontSize="20px" fontWeight="bold" fontFamily="Poppins" color="#323232">Lintang Selatan</Heading>
                            <Text
                                fontSize="20px"
                                fontWeight="regular"
                                color="#323232"
                                mt="4px"
                                mb="20px"
                                fontFamily="Poppins"
                            >
                                {cityData ? cityData.latitude : null}
                            </Text>
                            <Heading fontSize="20px" fontWeight="bold" fontFamily="Poppins" color="#323232">Bujur Timur</Heading>
                            <Text
                                fontSize="20px"
                                fontWeight="regular"
                                color="#323232"
                                mt="4px"
                                mb="20px"
                                fontFamily="Poppins"
                            >
                                {cityData ? cityData.longitude : null}
                            </Text>
                            <Heading fontSize="20px" fontWeight="bold" fontFamily="Poppins" color="#323232">Tingkat Curah Hujan</Heading>
                            <Text
                                fontSize="20px"
                                fontWeight="regular"
                                color="#323232"
                                mt="4px"
                                mb="20px"
                                fontFamily="Poppins"
                            >
                                {cityData ? cityData.RiskLevel.riskLevel : null}
                            </Text>
                            <Heading fontSize="20px" fontWeight="bold" fontFamily="Poppins" color="#323232">Deskripsi</Heading>
                            <Text
                                fontSize="20px"
                                fontWeight="regular"
                                color="#323232"
                                mt="4px"
                                mb="20px"
                                fontFamily="Poppins"
                                textAlign="justify"
                            >
                                {cityData ? cityData.description : null}
                            </Text>
                        </Box>
                    </Flex>

                    <Flex>
                        <Button
                            variant="solid"
                            bgColor="#0D72CC"
                            color="white"
                            width="49%"
                            onClick={() => { 
                                window.history.back();
                                setTimeout(() => {
                                    window.location.reload();
                                }, 100)
                            }}
                            _hover={{ bgColor: "#0D72CC" }}
                            _active={{ bgColor: "#0D72CC" }}
                        >
                            Kembali
                        </Button>

                        <Button
                            variant="solid"
                            bgColor="#0D72CC"
                            color="white"
                            width="49%"
                            ml="2%"
                            _hover={{ bgColor: "#0D72CC" }}
                            _active={{ bgColor: "#0D72CC" }}
                        >
                            Buka Gambar Geologi
                        </Button>
                    </Flex>

                </Flex>

                <Flex
                    flexDirection="column"
                    bg="transparent"
                    gap="16px"
                    maxW="100%"
                    zIndex="1"
                    w={["100%", "49%"]}
                >
                    <Box w={["100%", "560px"]} maxH="630px">
                        {loading ? (
                            <p>Loading...</p>
                        ): (
                            <MapWrapped
                                centerCoordinates = {
                                    [
                                        cityData ? cityData.latitude : 0,
                                        cityData ? cityData.longitude : 0
                                    ]
                                }
                            />
                        )}
                    </Box>
                </Flex>

            </Flex>
        </HomeLayout>

    );

};

export default DetailArea;