'use client'

import { Loader } from "@googlemaps/js-api-loader";
import React, {useEffect} from "react"

export function MapContainer() {

    const mapRef = React.useRef(null);

    useEffect(() => {
        const initMap = async () => {
            
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
                version: 'weekly'
            });

            const { Map } = await loader.importLibrary('maps');
            
            const position = {
                lat: 43.642693,
                lng: -79.3871189
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'map-food-desert'
            }

            const map = new Map(mapRef.current as unknown as HTMLDivElement, mapOptions)
        }

        initMap()
    }, []);
    return (
        <div className="w-10/12 place-content-center items-center ">
            <div style={{height: '800px'}} ref={mapRef} className="place-content-center"></div>
        </div>
        
    )
}