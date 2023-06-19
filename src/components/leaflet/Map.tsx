import "leaflet-draw/dist/leaflet.draw-src.css";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet"
import { DrawComponent } from "./DrawComponent";
import { EditControl } from 'react-leaflet-draw';
import { MarkerComponent } from "./MarkerComponent";


export const Map = () => {
    return (
        <MapContainer center={[41.55677234570851, -83.62646838914807]}
                        zoom={13}
                        scrollWheelZoom={true}
                        style={{height: "100%"}}
                        // whenReady={()=>{window.alert("Welcome user!")}}
                        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* 1, Single marker: */}
            {/* <Marker position={[51.505, -0.09]} icon={myIcon}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker> */}

            <DrawComponent/>
            <MarkerComponent/>

            <FeatureGroup>
                <EditControl 
                    position="bottomright"
                    draw={{
                    rectangle: true,
                    circle: true,
                    marker: false,
                    circlemarker: false,
                    polyline: false,
                    }}
                    edit={{
                    edit: true,
                    remove: true,
                    }}
                />
            </FeatureGroup>

            
        </MapContainer>
    )
}