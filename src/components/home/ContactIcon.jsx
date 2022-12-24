import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const ContactIcon = ({ icon, title, linkContact }) => {

    return (

        <Flex
            alignItems="center"
            boxSize="30px"
            justifyContent="center"
            borderRadius="full"
            background="#FFFFFF"
            transition="0.2s all ease-in-out"
            _hover={{transform: "translateY(-6%)"}}
        >
            <a href={linkContact} >
                <Image maxW="22px" src={icon} alt={title} />
            </a>
        </Flex>

    );

};

export default ContactIcon;