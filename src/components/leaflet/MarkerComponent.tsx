import { Fragment, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

type markerType = {
    id: number,
    position: L.LatLngTuple
}

export const MarkerComponent = () => {
    const initialIcon = L.point(40, 40);
    const [iconSize, updateIcon] = useState<L.Point>(initialIcon);
    
    const myIcon = L.icon({
        iconUrl: require("../../images/logo192.png"),
        iconSize: iconSize,
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });

    const markers: markerType[] = [
        {id: 0, position: [41.524120981373784, -83.63314940620646]},
        {id: 1, position: [41.50823057328478, -83.66616149049693]}
    ]

    const hideIcon = ()=> {
        if (iconSize.x > 0 && iconSize.y > 0) updateIcon(L.point(0, 0))
        else updateIcon(initialIcon);
    }

    return (
        <Fragment>
            <button style={{position: "absolute",
                right: "2vh",
                top: "2vh",
                zIndex: 1000,
                width: "20vh"}}
                onClick={hideIcon}>
                Toggle Icons
            </button>
                {/* if there are multiple markers in an array, use following syntax: */}
                {markers.map(marker => {
                    return (
                        <Marker position={marker.position} icon={myIcon} key={marker.id}>
                            <Popup>
                                I am popup
                            </Popup>
                        </Marker>
                    )
                })}
        </Fragment>
    )
};
