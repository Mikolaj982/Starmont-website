'use client'
import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/20/solid';

const Services = () => {
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
        <div id='services' className='bg-[#43264F] h-[100vh]'>
            <div className='h-[100%] p-8'>
                <div className='flex flex-col'>
                    <h2 className='text-slate-100 mb-6 mt-10 text-4xl font-bold'>Oferta</h2>
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
                    <span className='flex text-xl font-semibold text-slate-100 absolute bottom-12'><p>Cennik poniżej</p><ArrowDownIcon className='h-8 font-bold' /></span>
                </div>
            </div >
        </div >
    )
}

export default Services