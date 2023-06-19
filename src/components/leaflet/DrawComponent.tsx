import { useMap, useMapEvents, Polygon } from "react-leaflet";
import { Fragment, useState, useRef } from "react";
import { LatLngExpression } from 'leaflet';
import L from "leaflet";

export const DrawComponent = () => {
    const mapRef = useMap();
    const [latlang, updateLatlang] = useState<LatLngExpression[]>([])
    const [showPoly, updateShow] = useState(false);
    const polyRef = useRef<L.Polygon>(null!);

    useMapEvents({
        click(e) {
            if (!showPoly) return;
            updateLatlang([...latlang, [e.latlng.lat, e.latlng.lng], [e.latlng.lat, e.latlng.lng]]);
        },
        mousemove(e) {
            if (!showPoly) return;
            debugger;
            let tempCoord = [...latlang];
            tempCoord.pop(); 
            tempCoord.push([e.latlng.lat, e.latlng.lng]);
            updateLatlang(tempCoord);
        },
        dblclick() {
            mapRef.removeEventListener("mousemove");
            mapRef.removeEventListener("click");
        },
    })

    const useDraw = () => {
        updateShow(true);
        // debugger;
        // console.log(polygon);
        // updatePolygon(L.polygon(latlang, {color: 'blue'}));
        // polygon.addTo(mapRef);
        // console.log(mapRef.hasLayer(polygon));
    }

    const clearDraw = () => {
        // console.log(mapRef.hasLayer(polygon));
        mapRef.removeLayer(polyRef.current);
        // console.log(mapRef.hasLayer(polygon));
    }

    const getBackend = () => {
        // sample get request.
        // fetch('http://127.0.0.1:8000/room/').then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     })

        // sample post request.
        fetch("http://127.0.0.1:8000/room/", 
        {method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //make sure to serialize your JSON body
            body: JSON.stringify({"key": "value"})
        })
        .then( (response) => { 
            console.log(response);
            return response.json()
        })
        .then(res => console.log(res))
        .catch( (error => {console.log(error)}));
    }

    return (
        <Fragment>
        <button style={{position: "absolute",
            left: "10vh",
            top: "2vh",
            zIndex: 1000,
            width: "20vh"}}
            onClick={useDraw}>
            Start Draw
        </button>
        <button style={{position: "absolute",
            left: "10vh",
            top: "8vh",
            zIndex: 1000,
            width: "20vh"}}
            onClick={clearDraw}>
            Clear Draw
        </button>
        <button style={{position: "absolute",
            left: "10vh",
            top: "14vh",
            zIndex: 1000,
            width: "20vh"}}
            onClick={getBackend}>
            Backend test
        </button>

            {showPoly? <Polygon ref={polyRef} pathOptions={{color: "blue"}} positions={latlang}></Polygon>: null}
        </Fragment>
    )
};
