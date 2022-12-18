import React from "react";
import {
    Flex,
    Image
} from "@chakra-ui/react";
import "../../assets/css/swiper.css";

const AreaInformationSwiper = ({ imageLandslide }) => {
    return (
        <Flex flexDirection="column" gap="20px">
            <Image display="block" backgroundSize="cover" className="swiper-image" src={imageLandslide} alt="Geopardy Tanah Longsor" />
        </Flex>
    );
};

export default AreaInformationSwiper;