'use client'
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { PhoneIcon, MapPinIcon } from '@heroicons/react/20/solid';

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

type Coordinates = {
    lat: number;
    lng: number;
};

const Contact = () => {
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [address, setAddress] = useState<string>('Dziurów Słoneczna 25, Poland');
    const [location, setLocation] = useState<Coordinates>({ lat: 0, lng: 0 });

    const mapContainerStyle = {
        width: '80%',
        height: '14rem',
        alignSelf: 'center',
    };

    useEffect(() => {
        if (map) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address }, (results, status) => {
                if (status === 'OK') {
                    if (results && results.length > 0) {
                        const location = results[0].geometry?.location;
                        map.setOptions({ gestureHandling: 'cooperative' });
                        if (location) {
                            const lat = location.lat();
                            const lng = location.lng();

                            setLocation({ lat, lng });
                            map.panTo({ lat, lng });
                        } else {
                            console.error('Geocode response is missing geometry.location.');
                        }
                    } else {
                        console.error('Geocode response is empty.');
                    }
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
            <div className='flex justify-evenly flex-col column h-[100vh]'>
                <div>
                    <h2>Kontakt</h2>
                    <span><MapPinIcon className='h-6' /><p>Dziurów, ul. Słoneczna 25, 27-230</p></span>
                    <span><PhoneIcon className='h-6' /><p>+48 XXX XXX XXX</p></span>
                </div>
                <div className='flex justify-between column'>
                    <h3>Lokalizacja:</h3>
                    <LoadScript googleMapsApiKey={googleMapsApiKey}>
                        <GoogleMap
                            onLoad={handleMapLoad}
                            mapContainerStyle={mapContainerStyle}
                            center={location}
                            zoom={10}
                            options={{
                                streetViewControl: false,
                                mapTypeControl: false,
                                fullscreenControl: false,
                            }}
                        >
                            <Marker position={location} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    )
}

export default Contact