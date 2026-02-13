'use client'
import React from 'react';
import { useGlobalContext } from '../context/context';
import { TypeAnimation } from 'react-type-animation';
import ImagesSlider from './ImagesSlider';
import 'swiper/css';
import 'swiper/css/effect-cards';
import image from '../../../public/images/blacha-trapezowa-tlo.webp';
import Image from 'next/image';

const Home = () => {
    const { handleChangeSlide } = useGlobalContext();

    return (
        <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-t from-[#171a2c] via-[#373f6c] to-[#505b9c]">
            <section className="relative min-h-[100vh] flex items-center">
                <Image
                    src={image}
                    alt="blacha trapezowa"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight pb-8">
                        <span className="block mb-2">Blachy trapezowe i pokrycia dachowe</span>
                        <span className="text-orange-500">
                            <TypeAnimation
                                sequence={[
                                    'Blacha trapezowa',
                                    2000,
                                    'Blacha płaska',
                                    2000,
                                    'Wkręty',
                                    2000,
                                ]}
                                cursor
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-200">
                        Produkcja na wymiar • Dostawa • Doradztwo
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => handleChangeSlide(1)}
                            className="px-6 py-3 font-semibold rounded-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition"
                        >
                            Sprawdź ofertę
                        </button>
                        <button
                            onClick={() => handleChangeSlide(3)}
                            className="px-6 py-3 font-bold rounded-lg bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition"
                        >
                            Skontaktuj się z nami
                        </button>
                    </div>
                </div>
            </section>
            <a
                href="tel:+48696350433"
                className="md:hidden fixed bottom-4 left-4 right-4 z-50 py-4 rounded-xl bg-orange-500 text-white text-lg font-bold text-center shadow-2xl"
            >
                +48 696 350 433
            </a>
        </div>

    )
}

export default Home