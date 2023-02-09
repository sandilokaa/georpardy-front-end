import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    MapContainer,
    TileLayer,
    Polygon
} from "react-leaflet";
import {
    Alert,
    AlertIcon,
    CloseButton,
    useDisclosure
} from '@chakra-ui/react'
import "leaflet/dist/leaflet.css";
import { statesData } from "../../data/geo";
import axios from "axios";

const MapWrapped = ({ centerCoordinates }) => {

    const [trueResponse, setTrueResponse] = useState({
        isTrue: false,
        message: ""
    });

    const params = useLocation();

    const districtId = (params.pathname).split('/')[3];

    const [districtData, setDistrictData] = useState();

    useEffect(() => {

        const onSearch = async () => {

            try {

                const getDistrictDataRequest = await axios.get(
                    `http://localhost:8080/v1/sub-district/results/${districtId}`,
                    {
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );

                const getDistrictDataResponse = getDistrictDataRequest.data;

                setDistrictData(getDistrictDataResponse.data.subDistrictData);

            } catch (err) {
                alert(err.message);
            }

        };

        onSearch();

    }, [districtId]);

    function onMapClick(e) {

        setTrueResponse({
            isTrue: true,
            message: "You clicked the map at " + e.latlng
        });

    };


    return (

        <MapContainer
            center={centerCoordinates}
            zoom={12}
            style={{
                width: "100%",
                height: "630px",
                borderRadius: "20px"
            }}
        >
            {
                trueResponse.isTrue && (
                    <Alert
                        status='info'
                        style={{
                            height: '9.5%',
                            width: "80%",
                            margin: "2% auto",
                            fontSize: "14px",
                            fontWeight: "700",
                            zIndex: "1000",
                            cursor: "pointer"
                        }}
                    >
                        <AlertIcon />

                        {trueResponse.message}

                        <CloseButton
                            alignSelf='flex-start'
                            position='relative'
                            right={-2}
                            top={0}
                            margin='auto 0'
                            onClick={() => setTrueResponse(false)}
                        />
                        
                    </Alert>
                )
            }

            <TileLayer
                url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=aA11V8lEYGnQr9zR8OgO"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {
                statesData.features.map((state) => {

                    if (state.id === districtId) {

                        const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

                        const handleColor = state.properties.riskLevel === "Tidak Rawan" ?
                            "#82CD47" :
                            state.properties.riskLevel === "Kerawanan Rendah" ?
                                "#FFD56F" :
                                state.properties.riskLevel === "Kerawanan Sedang" ?
                                    "#FFB26B" :
                                    state.properties.riskLevel === "Kerawanan Tinggi" ?
                                        "#FF7B54" :
                                        state.properties.riskLevel === "Sangat Rawan" ?
                                            "#D9534F" :
                                            "#82CD47";

                        return (
                            <Polygon
                                key={districtId}
                                pathOptions={{
                                    fillColor: `${handleColor}`,
                                    fillOpacity: 0.7,
                                    weight: 2,
                                    opacity: 1,
                                    dashArray: 3,
                                    color: "#323232"
                                }}
                                positions={coordinates}
                                eventHandlers={{
                                    mouseover: (e) => {
                                        const layer = e.target;
                                        layer.setStyle({
                                            dashArray: "",
                                            fillColor: `${handleColor}`,
                                            fillOpacity: 0.7,
                                            weight: 2,
                                            opacity: 1,
                                            color: "#323232",
                                        })
                                    },
                                    mouseout: (e) => {
                                        const layer = e.target;
                                        layer.setStyle({
                                            fillOpacity: 0.7,
                                            weight: 2,
                                            dashArray: "3",
                                            color: "#323232",
                                            fillColor: `${handleColor}`,
                                        });
                                    },
                                    click: (e) => {
                                        onMapClick(e)
                                    }
                                }}
                            />
                        )
                    }
                    return true;
                })
            }
        </MapContainer>

    );

};

export default MapWrapped;