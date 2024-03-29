import React from "react";
import { 
    Flex, 
    Container, 
    Link, 
    Button, 
    Text,
    Image 
} from "@chakra-ui/react";
import { NavLink as LinkRouter } from "react-router-dom";
import Logo from "../../assets/images/Logo.png"

const Navbar = () => {

    const handleScroll = (e, targetId, offset) => {
        e.preventDefault();
    
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {

            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY + offset;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (

        <Flex
            w="full"
            h="65px"
            bg="white"
            zIndex="300"
            pos="fixed"
            boxShadow="0px 1px 25px rgba(167, 166, 174, 0.1)"
        >

            <Container
                maxW="1202px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >

                <Flex gap="32px">
                    <Link
                        as={LinkRouter}
                        end
                        to="/"
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                    >
                        <Image display="block" w="140px" src={Logo} alt="Geopardy Logo" />
                    </Link>
                </Flex>
                
                <Flex gap="32px" alignItems="center" color="#323232" fontFamily="Poppins">
                    <Link
                        as={LinkRouter}
                        end
                        to="/"
                        _hover={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: "medium"
                        }}
                        _activeLink={{
                            color: "#000",
                            fontWeight: "medium",
                        }}
                    >
                        <Text fontWeight="regular" fontSize="16px">
                            Home
                        </Text>
                    </Link>
                    <Link
                        as={LinkRouter}
                        end
                        to="/area-distribution"
                        _hover={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: "medium",
                        }}
                        _activeLink={{
                            color: "#000",
                            fontWeight: "medium",
                        }}
                    >
                        <Text fontWeight="regular" fontSize="16px">
                            Area Distribution
                        </Text>
                    </Link>
                    <Link
                        as={LinkRouter}
                        to="/"
                        onClick={(e) => handleScroll(e, "behind-project", -200)}
                        _hover={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: "medium",
                        }}
                        _active={{
                            color: "#000",
                            fontWeight: "medium",
                        }}
                    >
                        <Text fontWeight="regular" fontSize="16px">
                            Behind Project
                        </Text>
                    </Link>
                    <Link
                        as={LinkRouter}
                        to="/"
                        onClick={(e) => handleScroll(e, "contact-us", -200)}
                        _hover={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: "medium",
                        }}
                        _active={{
                            color: "#000",
                            fontWeight: "medium",
                        }}
                    >
                        <Text fontWeight="regular" fontSize="16px">
                            Contact Us
                        </Text>
                    </Link>
                </Flex>
                <Flex>
                    <Link
                        as={LinkRouter}
                        to="/data-test"
                        textDecoration="none"
                        _hover={{ textDecoration: "none" }}
                    >
                        <Button
                            variant="solid"
                            bgColor="#0D72CC"
                            color="white"
                            _hover={{ bgColor: "#0D72CC" }}
                            _active={{ bgColor: "#0D72CC" }}
                        >
                            Data Test
                        </Button>
                    </Link>
                </Flex>

            </Container>

        </Flex>

    );

};

export default Navbar;