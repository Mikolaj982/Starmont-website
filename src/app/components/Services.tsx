'use client'
import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/20/solid';
import { useGlobalContext } from '../context/context';
import example from '../../../public/images/logo.png';
import Image from 'next/image';

const Services = () => {
    const phoneNumber = '+48608852733';
    const { handleChangeSlide } = useGlobalContext();
    const services = [
        {
            name: 'Blacha T-18 na wymiar',
            desc: 'Cięcie pod wymiar, różne kolory',
        },
        {
            name: 'Blacha T-6 na wymiar',
            desc: 'Lekka, na garaże i wiaty',
        },
        {
            name: 'Blacha płaska 2,0 x 1,5 m',
            desc: 'Ocynk / powlekana',
        },
        {
            name: 'Blachodachówka',
            desc: 'Różne profile i kolory',
        },
        {
            name: 'Wkręty',
            desc: 'Dachowe i konstrukcyjne',
        },
        {
            name: 'Membrana dachowa',
            desc: 'Paroprzepuszczalna',
        },
    ]


    // return (
    //     <div id='services' className='bg-gradient-to-t from-[#171a2c] via-[#373f6c] to-[#505b9c] h-[100vh] w-[100vw]'>
    //         <div className='h-[100%] p-8'>
    //             <div className='flex flex-col'>
    //                 <h2 className='text-slate-100 mb-2 sm:mb-6 mt-8 sm:mt-16 text-3xl sm:text-4xl font-bold lg:mt-20'>Oferta</h2>
    //                 <ol className='flex flex-col list-disc pl-4'>
    //                     {services.map((service, index) => {
    //                         return (
    //                             <li
    //                                 key={index}
    //                                 className='text-md mb-2 font-semibold text-slate-100 sm:text-xl'
    //                             >
    //                                 {service.name}
    //                             </li>
    //                         )
    //                     })}
    //                 </ol>
    //                 <p className='text-sm sm:text-xl font-semibold text-slate-100 mt-2 sm:mt-6'>Zamów dzwoniąc pod numer: <button
    //                     className="px-6 py-3 text-base md:text-lg font-semibold rounded-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-200"
    //                 >XXX XXX XXX</button></p>

    //                 <span className='text-xl underline text-slate-100 absolute bottom-4 sm:bottom-12 lg:cursor-pointer'><a className='flex' onClick={() => handleChangeSlide(2)}>Cennik poniżej<ArrowDownIcon className='h-8 font-bold' /></a></span>
    //             </div>
    //             <div className='hidden lg:block lg:absolute lg:ml-[15rem] lg:-mt-[18rem] xl:ml-[0rem]'>
    //                 <Image src={example} alt='blacha trapezowa' className='bg-slate-500 w-60 h-52 mt-8 ml-8 relative z-10 lg:ml-[25rem] xl:ml-[55rem] xl:w-72 xl:h-64 rounded-lg' />
    //                 <div className='bg-slate-300 h-52 w-60 absolute top-[70px] left-[80px] lg:ml-[23rem] xl:ml-[53rem] xl:h-64 xl:w-72 rounded-lg'></div>
    //             </div>
    //         </div >
    //     </div >
    // )
    return (
        <section
            id="services"
            className="h-[100vh] bg-gradient-to-t from-[#171a2c] via-[#373f6c] to-[#505b9c] px-6 py-16"
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
                Oferta
            </h2>
            <div className="flex-1 overflow-y-auto pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="bg-white/10 backdrop-blur rounded-lg p-3 flex flex-col justify-between"
                        >
                            <h3 className="text-base font-semibold text-white">
                                {service.name}
                            </h3>
                            <p className="text-slate-200 mt-1 text-sm">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                    <button
                        onClick={() => handleChangeSlide(2)}
                        className="
    
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-md
    border
    border-orange-400/40
    px-3 py-1.5
    text-xs
    font-semibold
    text-orange-400
    hover:bg-orange-400/10
    hover:text-orange-300
    transition
  "
                    >
                        Przejdź do cennika
                    </button>
                </div>
            </div>
            <a
                href={phoneNumber}
                className="fixed bottom-4 left-2 right-2 sm:hidden bg-orange-500 text-white text-center py-3 rounded-xl font-bold shadow-lg"
            >
                📞 Zadzwoń – szybka wycena
            </a>
        </section>
    );
}

export default Services