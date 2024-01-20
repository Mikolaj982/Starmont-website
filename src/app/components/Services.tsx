'use client'
import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/20/solid';
import { useGlobalContext } from '../context/context';
import example from '../../../public/images/logo.png';
import Image from 'next/image';

const Services = () => {
    const { handleChangeSlide } = useGlobalContext();
    const services = [
        'Blacha T-18 na wymiar',
        'Blacha T-6 na wymiar',
        'Blacha płaska 2,0 m x 1,5 m',
        'Wkręty',
        'Blachodachówka',
        'Membrana',
        'Dostawa po wcześniejszym ustaleniu',
    ];

    return (
        <div id='services' className='bg-gradient-to-t from-[#27162e] via-[#5e376e] to-[#7c5191] h-[100vh] w-[100vw]'>
            <div className='h-[100%] p-8'>
                <div className='flex flex-col'>
                    <h2 className='text-slate-100 mb-6 mt-16 text-4xl font-bold lg:mt-20'>Oferta</h2>
                    <ol className='flex flex-col list-disc pl-4'>
                        {services.map((service, index) => {
                            return (
                                <li
                                    key={index}
                                    className='mb-2 font-semibold text-slate-100 text-xl'
                                >
                                    {service}
                                </li>
                            )
                        })}
                    </ol>
                    <p className='text-xl font-semibold text-slate-100 mt-6'>Zamów dzwoniąc pod numer: XXX XXX XXX</p>
                    <span className='text-xl underline text-slate-100 absolute bottom-12 lg:cursor-pointer'><a className='flex' onClick={() => handleChangeSlide(2)}>Cennik poniżej<ArrowDownIcon className='h-8 font-bold' /></a></span>
                </div>
                <div className='hidden lg:block lg:absolute lg:ml-[15rem] lg:-mt-[18rem] xl:ml-[0rem]'>
                    <Image src={example} alt='blacha trapezowa' className='bg-slate-500 w-60 h-52 mt-8 ml-8 relative z-10 lg:ml-[25rem] xl:ml-[55rem] xl:w-72 xl:h-64 rounded-lg' />
                    <div className='bg-slate-300 h-52 w-60 absolute top-[70px] left-[80px] lg:ml-[23rem] xl:ml-[53rem] xl:h-64 xl:w-72 rounded-lg'></div>
                </div>
            </div >
        </div >
    )
}

export default Services