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
    const contactData = {
        adress: 'Dziurów ul.Słoneczna 25, 27-230',
        phoneNumber: '+48 666 350 433',
        email: 'starmont@wp.pl'
    }

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
        <div id='contact' className='bg-gradient-to-t from-[#171a2c] via-[#373f6c] to-[#505b9c] h-[100vh] w-[100vw]'>
            <div className='flex flex-col justify-around h-[100vh] p-8 lg:flex-row lg:justify-start'>
                <div className='mb-4'>
                    <h2 className='text-white mb-10 mt-12 sm:mt-8 text-3xl sm:text-4xl font-bold lg:mt-20'>Kontakt</h2>
                    <span className='flex mb-3'>
                        <MapPinIcon className='h-4 sm:h-8 mr-2 text-red-600' />
                        <p className='text-white font-semibold md:text-xl'>{contactData.adress}</p>
                    </span>
                    <span className='flex mb-3'>
                        <PhoneIcon className='h-4 sm:h-8 mr-2 text-black' />
                        <a className='text-white font-semibold md:text-xl' href="tel:+48123123123">{contactData.phoneNumber}</a>
                    </span>
                    <span className='flex'>
                        <LinkIcon className='h-4 sm:h-8 mr-2 text-white' />
                        <p className='text-white font-semibold md:text-xl'>{contactData.email}</p>
                    </span>
                </div>
                <div className='flex justify-between flex-col lg:justify-center lg:ml-32'>
                    <div className='lg:absolute'>
                        <h3 className='text-secondary-text-color mb-4 text-xl sm:text-2xl font-semibold text-white'>Gdzie nas znaleźć?</h3>
                        <LoadScript googleMapsApiKey={googleMapsApiKey}>
                            <GoogleMap
                                onLoad={handleMapLoad}
                                center={location}
                                zoom={10}
                                options={{
                                    streetViewControl: false,
                                    mapTypeControl: false,
                                    fullscreenControl: false,
                                }}
                                mapContainerClassName='w-[100%] h-[14rem] mb-4 sm:w-[60%] md:h-[19rem] md:w-[80%] mx-auto lg:w-[32rem] xl:w-[44rem] xl:h-[22rem] z-10 rounded-lg'
                            >
                                <Marker position={location} />
                            </GoogleMap>
                        </LoadScript>
                        <div className='lg:w-[32rem] lg:h-[20rem] lg:-bottom-8 lg:left-12 xl:w-[44rem] xl:h-[22rem] lg:bg-[#67A27D] lg:absolute xl:-bottom-8 xl:left-16 rounded-lg'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact