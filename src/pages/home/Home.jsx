import React from "react";
import { NavLink as LinkRouter } from "react-router-dom";
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    Button,
    Link
} from "@chakra-ui/react";
import HomeLayout from "../../layouts/HomeLayout";
import ImageMainContent from "../../assets/images/img-content-1.png";
import GeopardyInformationCard from "../../components/home/GeopardyInformationCard";
import AlertIcon from "../../assets/icons/alert.png";
import OpenIcon from "../../assets/icons/open.png";
import MailboxIcon from "../../assets/icons/mailbox.png";
import RadioactiveIcon from "../../assets/icons/radioactive.png";
import DotVector from "../../assets/icons/dot-vector.svg";

const Home = () => {

    return (

        <HomeLayout>

            <Flex
                gap="40px"
                mt="60px"
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex flexDirection="column" w={["100%", "51%"]} gap="20px">
                    <Flex w="full" flexDirection="column" mt="60px">
                        <Box>
                            <Heading fontSize="48px" fontWeight="900" fontFamily="Poppins" color="#323232">
                                Temukan
                                <Heading as="span" color="#0D72CC" fontSize="48px" fontWeight="900" ml="14px" mr="14px">
                                    lokasi yang cocok
                                </Heading>
                                untuk bangun rumah tinggal
                            </Heading>
                        </Box>
                    </Flex>
                    <Text
                        fontSize="20px"
                        fontWeight="medium"
                        color="#323232"
                        mb="12px"
                        mt="10px"
                        fontFamily="Poppins"
                    >
                        Memberikan pelayanan informasi mengenai  daerah
                        rawan tanah longsor di Kota Semarang.
                    </Text>
                    <Link
                        as={LinkRouter}
                        to="/login"
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
                            Eksplor Informasi
                        </Button>
                    </Link>
                </Flex>

                <Image display="block" w="49%" src={ImageMainContent} alt="Geopardy Main Content" />
            </Flex>

            <Flex
                gap="40px"
                mt="100px"
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex flexDirection="column" w={["100%", "32%"]} gap="20px">
                    <Flex w="full" flexDirection="column">
                        <Box>
                            <Heading fontSize="48px" fontWeight="900" fontFamily="Poppins" color="#323232">
                                Cerita dibalik
                            </Heading>
                            <Heading color="#0D72CC" fontSize="48px" fontWeight="900" fontFamily="Poppins">
                                Geopardy
                            </Heading>
                            <Heading color="#0D72CC" fontSize="48px" fontWeight="900" fontFamily="Poppins">
                                Project
                            </Heading>
                        </Box>
                    </Flex>
                </Flex>

                <Text
                    fontSize="20px"
                    fontWeight="medium"
                    color="#323232"
                    mb="12px"
                    mt="10px"
                    fontFamily="Poppins"
                    width="68%"
                    textAlign="justify"
                >
                    Geopardy dibuat karena topografi Kota Semarang yang unik. Secara geografis,
                    wilayah Kota Semarang terletak diantara 6◦50'-7◦10' LS dan 109◦35'110◦50' BT.
                    Jika dilihat dari karakteristik wilayah Kota Semarang yang memiliki topografi berbukit,
                    maka perlu adanya pemetaan risiko longsor yang bertujuan untuk memberikan informasi mengenai
                    lokasi-lokasi yang memiliki risiko tanah longsor terhadap pembangunan rumah.
                </Text>

            </Flex>

            <Flex
                gap="60px"
                mt="100px"
                mb="160px"
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                flexDirection="column"
            >
                <Flex flexDirection="column" mt="60px" alignItems="center">
                    <Box>
                        <Heading fontSize="48px" fontWeight="900" fontFamily="Poppins" color="#323232">
                            Mengapa harus
                            <Heading as="span" color="#0D72CC" fontSize="48px" fontWeight="900" ml="14px" mr="14px">
                                Geopardy?
                            </Heading>
                        </Heading>
                    </Box>
                    <Text
                        fontSize="20px"
                        fontWeight="medium"
                        color="#323232"
                        mb="12px"
                        mt="25px"
                        fontFamily="Poppins"
                    >
                        Mengapa harus memilih Geopardy sebagai alat informasi?
                    </Text>
                </Flex>
                <Flex gap="40px" position="relative">
                    <Flex display="block" ml="-75px" pos="absolute" mt="-90px">
                    <Image display="block" src={DotVector} alt="Geopardy Dot Vector" />
                    </Flex>
                    <GeopardyInformationCard
                        bgColor="#0D72CC"
                        icon={AlertIcon}
                        title="Informasi Akurat"
                        paragraph="Geopardy menyediakan informasi dan data terpercaya yang diolah sedemikian rupa."
                    />
                    <GeopardyInformationCard
                        bgColor="#EBD151"
                        icon={OpenIcon}
                        title="Untuk Publik"
                        paragraph="Geopardy menyediakan informasi yang dapat digunakan oleh semua orang yang membutuhkannya."
                    />
                    <GeopardyInformationCard
                        bgColor="#E03F3D"
                        icon={RadioactiveIcon}
                        title="Pengingat Bahaya"
                        paragraph="Geopardy memberikan informasi bahaya tentang daerah rawan longsor."
                    />
                    <GeopardyInformationCard
                        bgColor="#74D149"
                        icon={MailboxIcon}
                        title="Area Semarang"
                        paragraph="Geopardy memberikan informasi daerah rawan longsor khusus Kota Semarang."
                    />
                </Flex>
            </Flex>
        </HomeLayout >

    );

};

export default Home;