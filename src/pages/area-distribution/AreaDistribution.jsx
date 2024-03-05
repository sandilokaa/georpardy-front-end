import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/slices/searchSlice";
import {
    Box,
    Flex,
    Heading,
    Image,
    Input,
    Grid,
    GridItem
} from "@chakra-ui/react";
import HomeLayout from "../../layouts/HomeLayout";
import SearchIcon from "../../assets/icons/search.png";
import AreaDistributionCard from "../../components/area-distribution/AreaDistributionCard";


const AreaDistribution = () => {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const data = useSelector((state) => state.search.data.getedAllCity);
    const status = useSelector((state) => state.search.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchData(searchQuery));
        }
    }, [searchQuery, status, dispatch]);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        dispatch(fetchData(query));
    };

    return (

        <HomeLayout>

            <Flex
                mt="40px"
                mb="60px"
                alignItems="center"
                w="100%"
                flexDirection="column"
            >
                <Flex position="relative" flexDirection="column" alignItems="center" background="linear-gradient(180deg, #0D72CC 0%, #0FF9E7 157.97%)" padding="4% 24% 8%" borderRadius="20px">
                    <Heading fontSize="48px" fontWeight="bold" fontFamily="Poppins" color="#FFFFFF" w={["150%"]} textAlign="center">
                        Nama Kota di Australia
                    </Heading>
                    <Flex
                        borderRadius="10px"
                        p="16px"
                        justifyContent="center"
                        alignItems="center"
                        boxShadow="0px 2px 4px 2px rgba(15, 249, 231, 0.25), inset 0px 2px 4px rgba(0, 0, 0, 0.25);"
                        w={["100%", "550px"]}
                        h="80px"
                        mt="110px"
                        background="#FFFFFF"
                        position="absolute"
                    >
                        <Box h="30px">
                            <Image display="block" maxW="30px" src={SearchIcon} alt="Geopardy Search" />
                        </Box>
                        <Input
                            placeholder="Cari untuk temukan nama kota"
                            color="#323232"
                            variant="unstyled"
                            w="100%"
                            fontSize="20px"
                            fontWeight="regular"
                            ml="50px"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </Flex>
                </Flex>
            </Flex>

            <Flex position="relative" mb="8%">
                <Grid w="100%" templateColumns="repeat(4, 1fr)" gap={14}>
                    {data &&
                        data.map((item) => {
                            return (
                                <GridItem key={item.id}>
                                    <AreaDistributionCard
                                        cityId={item.id}
                                        cityPicture={item.picture}
                                        title={item.cityName}
                                        cityName={item.cityName}
                                    />
                                </GridItem>
                            )
                        })
                    }
                </Grid>
            </Flex>

        </HomeLayout>

    );

};

export default AreaDistribution;