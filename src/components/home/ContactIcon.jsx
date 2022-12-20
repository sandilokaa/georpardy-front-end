import React from "react";
import { Flex, Image, Link } from "@chakra-ui/react";

const ContactIcon = ({ icon, title, linkContact }) => {

    return (

        <Flex
            alignItems="center"
            boxSize="30px"
            justifyContent="center"
            borderRadius="full"
            background="#FFFFFF"
        >
            <Link to={linkContact}>
                <Image maxW="22px" src={icon} alt={title} />
            </Link>
        </Flex>

    );

};

export default ContactIcon;