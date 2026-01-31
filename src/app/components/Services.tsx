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
            name: 'Blachy trapezowe: T-18 / T-6',
            desc: 'Cięcie pod wymiar, różne kolory',
        },
        {
            name: 'Blacha płaska',
            desc: 'Ocynk / powlekana / różne kolory',
        },
        {
            name: 'Blachodachówka',
            desc: 'Różne profile i kolory',
        },
        {
            name: 'Wkręty / Membrany dachowe / Rynny oraz akcesoria',
            desc: 'Dachowe i konstrukcyjne',
        },
    ]

    return (
        <section
            id="services"
            className="h-[100vh] bg-gradient-to-t from-[#171a2c] via-[#373f6c] to-[#505b9c] px-6 py-16 flex flex-col"
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
                Oferta
            </h2>
            <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="bg-white/10 backdrop-blur rounded-lg p-2 flex flex-col"
                        >
                            <h3 className="text-base font-semibold text-white">
                                {service.name}
                            </h3>
                            <p className="text-slate-200 mt-1 text-sm">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                    onClick={() => handleChangeSlide(2)}
                    className="
                w-full
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-md
                border
                border-orange-400/40
                px-3 py-2
                text-sm
                font-semibold
                text-orange-400
                hover:bg-orange-400/10
                hover:text-orange-300
                transition
            "
                >
                    Przejdź do cennika ↓
                </button>
                <a
                    href={phoneNumber}
                    className="
                sm:hidden
                w-full
                bg-orange-500
                text-white
                text-center
                py-3
                rounded-xl
                font-bold
                shadow-lg
            "
                >
                    📞 Zadzwoń – szybka wycena
                </a>
            </div>
        </section>

    );
};

export default Services