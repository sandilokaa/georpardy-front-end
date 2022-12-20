import React from "react";
import { NavLink as LinkRouter } from "react-router-dom";
import {
    Box,
    Flex,
    Heading,
    Image,
    Button,
    Input
} from "@chakra-ui/react";
import HomeLayout from "../../layouts/HomeLayout";
import SearchIcon from "../../assets/icons/search.png";

const AreaDistribution = () => {

    return (

        <HomeLayout>
            <Flex
                mt="40px"
                mb="60px"
                alignItems="center"
                w="100%"
                flexDirection="column"
            >
                <Flex position="relative" flexDirection="column" alignItems="center" background="linear-gradient(180deg, #0D72CC 0%, #0FF9E7 157.97%)" padding="4% 24% 12%" borderRadius="20px">
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
                        mt="150px"
                        background="#FFFFFF"
                        position="absolute"
                    >
                        <Box h="30px">
                            <Image display="block" maxW="30px" src={SearchIcon} alt="Geopardy Search" />
                        </Box>
                        <Input
                            placeholder="Cari untuk temukan kecamatan"
                            color="#CECECE"
                            variant="unstyled"
                            w="100%"
                            fontSize="20px"
                            fontWeight="regular"
                            ml="50px"
                        />
                        <Button
                            variant="solid"
                            bgColor="#0D72CC"
                            color="white"
                            _hover={{ bgColor: "#0D72CC" }}
                            _active={{ bgColor: "#0D72CC" }}
                        >
                            Cari
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </HomeLayout>

    );

};

export default AreaDistribution;