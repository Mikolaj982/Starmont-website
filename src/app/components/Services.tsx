import React from 'react';
import { useGlobalContext } from '../context/context';
import blachaTrapez from '../../../public/images/blacha-trapezowa-magazyn.webp';
import blachodachówka from '../../../public/images/blachodachówka.jpg';
import wkręty from '../../../public/images/wkrety-rynny-membrana.webp';
import płaska from '../../../public/images/blacha-plaska-czarna-paleta.webp';
import Image from 'next/image';

const Services = () => {
    const phoneNumber = '+48608852733';
    const { handleChangeSlide } = useGlobalContext();
    const services = [
        {
            name: 'Blachy trapezowe: T-18 / T-6',
            desc: 'Cięcie pod wymiar, różne kolory',
            image: blachaTrapez,
            descForDesktop: 'Materiał jest trwały, odporny na warunki atmosferyczne i estetyczny, dzięki czemu znajduje zastosowanie w garażach, wiatach, halach oraz budynkach mieszkalnych. Oferujemy szeroki wybór kolorów oraz możliwość precyzyjnego cięcia pod wymiar, co pozwala ograniczyć straty materiału i przyspieszyć montaż.',
        },
        {
            name: 'Blacha płaska',
            desc: 'Ocynk / powlekana / różne kolory',
            image: płaska,
            descForDesktop: 'Blacha płaska to wszechstronny materiał wykorzystywany do obróbek blacharskich, parapetów, pasów nadrynnowych i elementów wykończeniowych. Dostępna w wersji ocynkowanej oraz powlekanej, zapewnia trwałość i odporność na warunki atmosferyczne. Standardowe arkusze oraz możliwość dopasowania pod indywidualne potrzeby.',
        },
        {
            name: 'Blachodachówka',
            desc: 'Różne profile i kolory',
            image: blachodachówka,
            descForDesktop: 'Blachodachówka to połączenie estetyki klasycznego dachu z nowoczesną technologią. Oferujemy różne profile i kolory, które dopasujesz do stylu budynku – od domów jednorodzinnych po obiekty gospodarcze. Materiał lekki, trwały i łatwy w montażu, z możliwością zamówienia kompletnego zestawu akcesoriów.',
        },
        {
            name: 'Wkręty / Membrany dachowe / Rynny oraz akcesoria',
            desc: 'Dachowe i konstrukcyjne',
            image: wkręty,
            descForDesktop: 'Odpowiednio dobrane elementy zapewniają trwałość. Oferowane produkty charakteryzują się odpornością na warunki atmosferyczne, łatwym montażem oraz kompatybilnością z popularnymi systemami dachowymi. To praktyczne rozwiązania zarówno dla nowych inwestycji, jak i prac modernizacyjnych.',
        },
    ]

    return (
        <section
            id="services"
            className="h-[100vh] w-[100vw] bg-gradient-to-t from-[#171a2c] via-[#373f6c] to-[#505b9c] px-6 pt-16 pb-4 flex flex-col"
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 lg:mt-12">
                Oferta
            </h2>
            <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service, i) => (
                        <div key={i}>
                            <div
                                className="bg-white/10 backdrop-blur rounded-lg p-2 flex items-center lg:p-4 flex-row justify-between"
                            >
                                <div>
                                    <h3 className="text-base font-semibold text-white">
                                        {service.name}
                                    </h3>
                                    <p className="text-slate-200 mt-1 text-sm lg:hidden">
                                        {service.desc}
                                    </p>
                                    <p className="hidden lg:block text-slate-200 mt-1 text-sm">
                                        {service.descForDesktop}
                                    </p>
                                </div>
                                {service.image && (
                                    <Image
                                        src={service.image}
                                        alt={''}
                                        width={120}
                                        height={120}
                                        className="hidden lg:block
                                                        ml-9
                                                        object-cover
                                                        rounded-md
                                                        bg-slate-600
                                                        flex-shrink-0
                                                    "
                                    />
                                )}
                                {service.image && (
                                    <Image
                                        src={service.image}
                                        alt={''}
                                        width={70}
                                        height={70}
                                        className="lg:hidden
                                        ml-5
                                                        object-cover
                                                        rounded-md
                                                        bg-slate-600
                                                        flex-shrink-0
                                                    "
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
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