'use client'

import { TypeAnimation } from 'react-type-animation'
import { useGlobalContext } from '../context/context'
import 'swiper/css';
import 'swiper/css/effect-cards';

export default function HeroClient() {
    const { handleChangeSlide } = useGlobalContext()

    return (
        <>
            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight pb-8">
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
            </p>

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
        </>
    )
}