'use client'
import React, { useRef } from 'react'
import { useGlobalContext } from '../context/context'

const Home = () => {
    const { handleChangeSlide } = useGlobalContext();

    return (
        <div className="bg-[#373F6C] h-[100vh]">
            <div className='fixed bottom-3 p-6 flex flex-col text-white'>
                <a onClick={() => handleChangeSlide(1)}>Sprawdź ofertę</a>
                <a onClick={() => handleChangeSlide(3)}>Skontaktuj się z nami</a>
            </div>
        </div>
    )
}

export default Home