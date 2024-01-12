'use client'
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Contact = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_API_KEY"
    })

    return (
        <div id='contact' className='bg-[#88D78B] h-[100vh]'></div>
    )
}

export default Contact