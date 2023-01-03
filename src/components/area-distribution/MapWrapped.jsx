import React from "react";
import { useLocation } from "react-router-dom";
import {
    MapContainer,
    TileLayer,
    Polygon
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "../../data/geo";

const MapWrapped = ({ centerCoordinates }) => {

    const params = useLocation();

    const districtId = (params.pathname).split('/')[3];

    return (

        <MapContainer
            center={centerCoordinates}
            zoom={12}
            style={{
                width: '100%',
                height: '630px',
                borderRadius: '20px'
            }}
        >
            <TileLayer
                url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=aA11V8lEYGnQr9zR8OgO"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {
                statesData.features.map((state) => {

                    if(state.id === districtId) {

                        const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

                        return (
                            <Polygon
                                pathOptions={{
                                    fillColor: '#FD8D3C',
                                    fillOpacity: 0.7,
                                    weight: 2,
                                    opacity: 1,
                                    dashArray: 3,
                                    color: 'white'
                                }}
                                positions={coordinates}
                                eventHandlers={{
                                    mouseover: (e) => {
                                        const layer = e.target;
                                        layer.setStyle({
                                            dashArray: "",
                                            fillColor: "#D45962",
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
                                            color: 'white',
                                            fillColor: '#FD8D3C'
                                        });
                                    },
                                    click: (e) => {

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