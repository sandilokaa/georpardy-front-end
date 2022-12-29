import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AreaDistributionCard = ({ districtName, title, districtPicture, districtId  }) => {

    const navigate = useNavigate();

    return (
        <Flex
            flexDirection="column"
            minW="240px"
            mt="50px"
            bg="#FFFFFF"
            borderRadius="10px"
            justifyContent="space-between"
            alignItems="center"
            gap="44px"
            zIndex="100"
            transition="0.4s all ease-in-out"
            _hover={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", cursor: "pointer"}}
            onClick={() => navigate(`/area-distribution/detail/${districtId}`)}
        >
            <Flex
                flexDirection="column"
                maxH="300px"
                maxW="277px"
                gap="30px"
                padding="0 12px"
                mb="10px"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
            >
                <Flex
                    mt="20px"
                    borderRadius="10px"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Image borderRadius="10px" maxW="240px" src={districtPicture} alt={title} />
                </Flex>
                <Heading fontSize="20px" mb="10px" fontWeight="medium" fontFamily="Poppins" color="#323232">
                    {districtName}
                </Heading>
            </Flex>
        </Flex>
    );
};

export default AreaDistributionCard;