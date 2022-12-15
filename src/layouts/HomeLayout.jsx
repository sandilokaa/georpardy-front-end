import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";

const HomeLayout = ({ children }) => {
    return (
        <Box minH="100vh" w="full">
            <Box display="block">
                <Navbar />
            </Box>
            <Container maxW="1200px" pt="65px" centerContent>
                {children}
            </Container>
        </Box>
    );
};

export default HomeLayout;