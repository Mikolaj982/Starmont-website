'use client'
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { PhoneIcon, MapPinIcon, LinkIcon } from '@heroicons/react/20/solid';

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
        width: '100%',
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
            <div className='flex justify-end flex-col column h-[100vh] p-8'>
                <div className='mb-24'>
                    <h2 className='text-primary mb-12 text-3xl font-bold'>Kontakt</h2>
                    <span className='flex mb-3'><MapPinIcon className='h-6 mr-2 text-primary' /><p className='text-primary font-semibold'>Dziurów, ul. Słoneczna 25, 27-230</p></span>
                    <span className='flex mb-3'><PhoneIcon className='h-6 mr-2 text-primary' /><p className='text-primary font-semibold'>+48 XXX XXX XXX</p></span>
                    <span className='flex'><LinkIcon className='h-6 mr-2 text-primary' /><p className='text-primary font-semibold'>example@gmail.com</p></span>
                </div>
                <div className='flex justify-between flex-col'>
                    <h3 className='text-secondary-text-color mb-3 text-2xl font-semibold text-primary'>Lokalizacja:</h3>
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