import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const ContactIcon = ({ icon, title }) => {

    return (

        <Flex
            alignItems="center"
            boxSize="30px"
            justifyContent="center"
            borderRadius="full"
            background="#FFFFFF"
        >
            <Image maxW="22px" src={icon} alt={title} />
        </Flex>

    );

};

export default ContactIcon;