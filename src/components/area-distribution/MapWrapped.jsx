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
    CloseButton
} from '@chakra-ui/react'
import "leaflet/dist/leaflet.css";
import { statesData } from "../../data/geo";
import axios from "axios";

const MapWrapped = ({ centerCoordinates }) => {

    const [trueResponse, setTrueResponse] = useState({
        isTrue: false,
        message: "",
        url: ""
    });

    const [cityData, setCityData] = useState();

    const params = useLocation();

    const cityId = (params.pathname).split('/')[3];

    useEffect(() => {

        const onSearch = async () => {

            try {

                const getCityDataRequest = await axios.get(
                    `http://localhost:8080/api/v1/city/${cityId}`,
                    {
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );

                const getCityDataResponse = getCityDataRequest.data;

                setCityData(getCityDataResponse.data.getedCityByCityId);

            } catch (err) {
                alert(err.message);
            }

        };

        onSearch();

    }, [cityId]);

    function onMapClick(e) {

        let coordinatesLatLng = e.latlng;

        setTrueResponse({
            isTrue: true,
            message: `You clicked the map at ` + e.latlng,
            url: `http://maps.google.com/maps?z=18&q=${coordinatesLatLng.lat},${coordinatesLatLng.lng}`
        });

        // tautan http://maps.google.com/maps?z=18&q=10.8061,106.7130

    };


    return (

        <MapContainer
            center={centerCoordinates}
            zoom={10}
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
                            borderRadius: '3px',
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

                        <a href={trueResponse.url} target="blank">Open</a>

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

                    if (state.id === cityId) {

                        const coordinates = state.geometry.coordinates[0].map((item) => [item[0], item[1]]);

                        const handleColor = state.properties.riskLevel === "Rendah" ?
                            "#82CD47" :
                            state.properties.riskLevel === "Menengah" ?
                                "#FFB26B" :
                                state.properties.riskLevel === "Tinggi" ?
                                    "#D9534F" :
                                    "#82CD47";

                        return (
                            <Polygon
                                key={cityId}
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