'use client'
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';
const Contact = () => {
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [address, setAddress] = useState<string>('Kraków, Poland');
    const [location, setLocation] = useState<{ lat: number, lng: number }>({ lat: 0, lng: 0 });

    const mapContainerStyle = {
        width: '80%',
        height: '200px',
    };

    const center = {
        lat: -34.397,
        lng: 150.644,
    };

    useEffect(() => {
        if (map) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === 'OK') {
                    const { lat, lng } = results[0].geometry.location;
                    setLocation({ lat, lng });
                    map.panTo({ lat, lng });
                } else {
                    console.error('Geocode was not successful for the following reason: ', status);
                }
            });
        }
    }, [map, address]);

    const handleMapLoad = (map: google.maps.Map) => {
        setMap(map);
    };

    return (
        <div id='contact' className='bg-[#88D78B] h-[100vh]'>
            <div className='flex justify-center items-center'>
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={10}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}

export default Contact