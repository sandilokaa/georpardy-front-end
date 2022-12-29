import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    Button
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";
import axios from "axios";

const DetailArea = () => {

    const [districtData, setDistrictData] = useState();

    const params = useLocation();

    const districtId = (params.pathname).split('/')[3];

    useEffect(() => {

        const onSearch = async () => {

            try {

                const getDistrictDataRequest = await axios.get(
                    `http://localhost:8080/v1/sub-district/results/${districtId}`,
                    {
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );

                const getDistrictDataResponse = getDistrictDataRequest.data;

                setDistrictData(getDistrictDataResponse.data.subDistrictData);

            } catch (err) {
                alert(err.message);
            }

        };

        onSearch();

    }, [districtId]);

    return (

        <HomeLayout>
            <Flex
                gap="40px"
                mt="40px"
                mb="40px"
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex flexDirection="column" w={["100%", "51%"]} gap="20px" justifyContent="flex-start">
                    <Flex w="full" flexDirection="column" mt="40px">
                        <Box>
                            <Heading fontSize="20px" fontWeight="bold" fontFamily="Poppins" color="#323232">Nama Kecamatan</Heading>
                            <Text
                                fontSize="20px"
                                fontWeight="regular"
                                color="#323232"
                                mt="4px"
                                mb="20px"
                                fontFamily="Poppins"
                            >
                                {districtData ? districtData.districtName : null}
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
                                {districtData ? districtData.latitude : null}
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
                                {districtData ? districtData.longitude : null}
                            </Text>
                            <Heading fontSize="20px" fontWeight="bold" fontFamily="Poppins" color="#323232">Tingkat Kerawanan</Heading>
                            <Text
                                fontSize="20px"
                                fontWeight="regular"
                                color="#323232"
                                mt="4px"
                                mb="20px"
                                fontFamily="Poppins"
                            >
                                {districtData ? districtData.riskLevel : null}
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
                                {districtData ? districtData.description : null}
                            </Text>
                        </Box>
                    </Flex>

                    <Flex>
                        <Button
                            variant="solid"
                            bgColor="#0D72CC"
                            color="white"
                            width="50%"
                            _hover={{ bgColor: "#0D72CC" }}
                            _active={{ bgColor: "#0D72CC" }}
                        >
                            Buka Lokasi Kecamatan
                        </Button>

                        <Button
                            variant="solid"
                            bgColor="#0D72CC"
                            color="white"
                            width="50%"
                            ml="2%"
                            _hover={{ bgColor: "#0D72CC" }}
                            _active={{ bgColor: "#0D72CC" }}
                        >
                            Buka Gambar Geologi
                        </Button>
                    </Flex>

                </Flex>

            </Flex>
        </HomeLayout>

    );

};

export default DetailArea;