import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const HomeLayout = ({ children }) => {
    return (
        <Box minH="100vh" w="full">
            <Box display="block">
                <Navbar />
            </Box>
            <Container maxW="1200px" pt="65px" centerContent>
                {children}
            </Container>
            <Box display="block">
                <Footer />
            </Box>
        </Box>
    );
};

export default HomeLayout;