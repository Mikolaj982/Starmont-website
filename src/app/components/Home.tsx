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
                className='text-3xl font-extrabold text-white pt-28 md:pt-40 md:text-4xl pl-8 lg:text-5xl'
            />
            <div className='absolute md:ml-[20rem] md:mt-[2rem] lg:ml-0 lg:mt-0'>
                <Image src={example} alt='blacha trapezowa' className='bg-slate-500 w-60 h-52 mt-8 ml-8 relative z-10 lg:ml-[46rem] xl:ml-[55rem] xl:w-72 xl:h-64' />
                <div className='bg-slate-300 h-52 w-60 absolute top-[70px] left-[80px] lg:ml-[43rem] xl:ml-[53rem] xl:h-64 xl:w-72'></div>
            </div>
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