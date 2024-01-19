'use client'
import React from 'react';
import { useGlobalContext } from '../context/context';
import { TypeAnimation } from 'react-type-animation';
import ImagesSlider from './ImagesSlider';
import 'swiper/css';
import 'swiper/css/effect-cards';

const Home = () => {
    const { handleChangeSlide } = useGlobalContext();

    return (
        <div className="bg-[#373F6C] h-[100vh] w-[100vw]">
            <TypeAnimation
                sequence={[
                    'Blacha trapezowa',
                    2000,
                    'Blacha płaska',
                    2000,
                    'Wkręty',
                    2000
                ]}
                wrapper='h1'
                cursor={true}
                speed={50}
                repeat={Infinity}
                className='text-3xl font-extrabold text-white pt-28 md:pt-40 md:text-4xl pl-8 lg:text-5xl'
            />
            <ImagesSlider />
            <div className='fixed bottom-3 p-6 flex flex-col text-white lg:p-20 lg:w-[25rem]'>
                <a className='text-semibold text-xl underline mb-2 lg:cursor-pointer lg:text-2xl lg:font-semibold'
                    onClick={() => handleChangeSlide(1)}
                >
                    Sprawdź ofertę
                </a>
                <a className='text-semibold underline lg:cursor-pointer lg:text-xl lg:font-semibold'
                    onClick={() => handleChangeSlide(3)}
                >
                    Skontaktuj się z nami
                </a>
            </div>
        </div>
    )
}

export default Home