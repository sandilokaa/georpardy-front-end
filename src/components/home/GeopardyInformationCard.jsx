import React from "react";
import { Flex, Text, Heading, Image } from "@chakra-ui/react";

const GeopardyInformationCard = ({ icon, title, bgColor, paragraph }) => {

    return (
        <Flex
            flexDirection="column"
            minW="257px"
            bg="white"
            borderRadius="10px"
            border="1px solid #BFBFBF"
            justifyContent="space-between"
            alignItems="center"
            gap="44px"
            zIndex="100"
        >
            <Flex
                flexDirection="column"
                maxH="300px"
                maxW="277px"
                gap="20px"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                mt="25px"
            >
                <Flex
                    borderRadius="full"
                    backgroundColor={bgColor}
                    boxSize="50px"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Image maxW="42px" src={icon} alt={title} />
                </Flex>
                <Heading fontSize="22px" fontWeight="bold" fontFamily="Poppins" color="#323232">
                    {title}
                </Heading>
                <Text fontSize="20px" fontWeight="regular" color="#323232" fontFamily="Poppins">
                    {paragraph}
                </Text>
            </Flex>
        </Flex>
    );
};

export default GeopardyInformationCard;