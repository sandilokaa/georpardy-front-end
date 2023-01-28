import React from "react";
import {
    Flex,
    Text
} from "@chakra-ui/react";


const Footer = () => {

    return (

        <Flex flexDirection="column" alignItems="center">
            <Text
                fontSize="14px"
                fontWeight="regular"
                color="#323232"
                mb="12px"
                fontFamily="Poppins"
                display="inline"
            >
                © 2022 Geopardy. All rights reserved!. Powered by Sandi Loka
            </Text>
        </Flex>

    );

};

export default Footer;