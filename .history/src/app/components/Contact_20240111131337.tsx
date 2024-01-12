'use client'
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';
const Contact = () => {
    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: -34.397,
        lng: 150.644,
    };
    return (
        <div id='contact' className='bg-[#88D78B] h-[100vh]'>
            <div>
                <LoadScript googleMapsApiKey={googleMapsApiKey}>
                    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}

export default Contact