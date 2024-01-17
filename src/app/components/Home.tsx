'use client'
import React from 'react';
import { useGlobalContext } from '../context/context';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import example from '../../../public/images/logo.png';

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
                className='text-3xl font-extrabold text-white pt-28 pl-8'
            />
            <div className='absolute'>
                <Image src={example} alt='blacha trapezowa' className='bg-slate-500 w-60 h-52 mt-8 ml-8 relative z-10' />
                <div className='bg-slate-300 h-52 w-60 absolute top-[70px] left-[80px]'></div>
            </div>
            <div className='fixed bottom-3 p-6 flex flex-col text-white'>
                <a className='text-semibold text-xl underline mb-2'
                    onClick={() => handleChangeSlide(1)}
                >
                    Sprawdź ofertę
                </a>
                <a className='text-semibold underline'
                    onClick={() => handleChangeSlide(3)}
                >
                    Skontaktuj się z nami
                </a>
            </div>
        </div>
    )
}

export default Home