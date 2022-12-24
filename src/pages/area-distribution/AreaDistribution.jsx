import React, { useState, useEffect, useRef } from "react";
// import { NavLink as LinkRouter } from "react-router-dom";
import {
    Box,
    Flex,
    Heading,
    Image,
    Button,
    Input,
    Grid,
    GridItem
} from "@chakra-ui/react";
import HomeLayout from "../../layouts/HomeLayout";
import SearchIcon from "../../assets/icons/search.png";
import AreaDistributionCard from "../../components/area-distribution/AreaDistributionCard";
import axios from "axios";


const AreaDistribution = () => {

    const [districtData, setDistrictData] = useState();

    const districtField = useRef();


    const onSearch = async () => {

        const getDistrictName = districtField.current.value;

        try {

            const getDistrictDataRequest = await axios.get(
                `http://localhost:8080/v1/sub-district/results?districtName=${getDistrictName}`,
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

    useEffect(() => {
        onSearch();
    }, [districtField]);


    const onReset = () => {
        districtField.current.value = ""

        onSearch();
    };


    return (

        <HomeLayout>

            <Flex
                mt="40px"
                mb="60px"
                alignItems="center"
                w="100%"
                flexDirection="column"
            >
                <Flex position="relative" flexDirection="column" alignItems="center" background="linear-gradient(180deg, #0D72CC 0%, #0FF9E7 157.97%)" padding="4% 24% 8%" borderRadius="20px">
                    <Heading fontSize="48px" fontWeight="bold" fontFamily="Poppins" color="#FFFFFF" w={["150%"]} textAlign="center">
                        Kecamatan di Kota Semarang
                    </Heading>
                    <Flex
                        borderRadius="10px"
                        p="16px"
                        justifyContent="center"
                        alignItems="center"
                        boxShadow="0px 2px 4px 2px rgba(15, 249, 231, 0.25), inset 0px 2px 4px rgba(0, 0, 0, 0.25);"
                        w={["100%", "650px"]}
                        h="80px"
                        mt="110px"
                        background="#FFFFFF"
                        position="absolute"
                    >
                        <Box h="30px">
                            <Image display="block" maxW="30px" src={SearchIcon} alt="Geopardy Search" />
                        </Box>
                        <Input
                            placeholder="Cari untuk temukan kecamatan"
                            color="#323232"
                            variant="unstyled"
                            w="100%"
                            fontSize="20px"
                            fontWeight="regular"
                            ml="50px"
                            ref={districtField}
                        />
                        <Button
                            variant="solid"
                            bgColor="#0D72CC"
                            color="white"
                            padding="0 6%"
                            mr="2%"
                            _hover={{ bgColor: "#0D72CC" }}
                            onClick={onSearch}
                        >
                            Cari
                        </Button>
                        <Button
                            variant="solid"
                            bgColor="#EB455F"
                            color="white"
                            padding="0 6%"
                            mr="2%"
                            _hover={{ bgColor: "#EB455F" }}
                            onClick={onReset}
                        >
                            Reset
                        </Button>
                    </Flex>
                </Flex>
            </Flex>

            <Flex position="relative">
                <Grid w="100%" templateColumns="repeat(4, 1fr)" gap={12}>
                    {districtData != null ?
                        districtData.map((item) => {
                            return (
                                <GridItem key={item.id}>
                                    <AreaDistributionCard
                                        districtPicture={item.picture}
                                        title={item.districtName}
                                        districtName={item.districtName}
                                    />
                                </GridItem>
                            )
                        }) : null
                    }
                </Grid>
            </Flex>

        </HomeLayout>

    );

};

export default AreaDistribution;