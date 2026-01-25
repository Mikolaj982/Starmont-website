import React from 'react'
import Image from 'next/image';
import example from '../../../public/images/logo.png'
import { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export interface menuProps {
    name: string,
    description: string,
    price: number,
    image: StaticImageData,
}

const PriceListItems = () => {
    const menu: menuProps[] = [
        {
            name: 'Blacha trapezowa T-18 oraz T-6',
            description: 'Produkcja na wymiar w wybranym kolorze. Grubość 0.5 mm.',
            price: 30,
            image: example,
        },
        {
            name: 'Blacha trapezowa T-18 oraz T-6',
            description: 'Ocynk lub lakier podkładowy. Docinana na wymiar. Grubość 0.5 mm.',
            price: 30,
            image: example,
        },
        {
            name: 'Blacha płaska',
            description: '2,0 m x 1,25 m w ocynku. Dostępne blachy powlekane w różnych kolorach.',
            price: 90,
            image: example,
        },
        {
            name: 'Blachodachówka',
            description: 'Na wymiar w wybranym kolorze.',
            price: 35,
            image: example,
        },
        {
            name: 'Wkręty',
            description: '',
            price: 32,
            image: example,
        },
        {
            name: 'Rynna PCV',
            description: '75 mm, 125 mm, 150 mm.',
            price: 25,
            image: example,
        },
    ];

    const ListElement = ({ name, description, price, image }: menuProps) => {
        return (
            <li
                className="
        h-full
        bg-white/10 backdrop-blur
        rounded-xl
        px-4 py-2
        flex
        gap-3
        items-center
      "
            >
                {/* LEWA STRONA */}
                <div className="flex flex-col flex-1 min-w-0">
                    <p className="text-slate-100 text-base md:text-lg font-bold leading-tight break-words">
                        {name}
                    </p>

                    {description && (
                        <p className="text-slate-300 text-xs md:text-sm leading-tight line-clamp-1 md:line-clamp-2">
                            {description}
                        </p>
                    )}

                    <p className="text-slate-100 text-sm md:text-base font-bold mt-auto">
                        od {price} zł
                    </p>

                    <a
                        href="tel:+48696350433"
                        className="
            mt-1
            w-fit
            text-xs md:text-sm
            font-semibold
            text-orange-400
            hover:text-orange-300
            underline
          "
                    >
                        Zamów
                    </a>
                </div>

                {/* PRAWA STRONA – ZDJĘCIE */}
                <Image
                    src={image}
                    alt={name}
                    className="
          w-[3.5rem] h-[3.5rem]
          md:w-[5rem] md:h-[5rem]
          object-cover
          rounded-md
          bg-slate-500
          flex-shrink-0
        "
                />
            </li>
        );
    };




    return (<>
        <ul
            className="
    grid
    h-full
    gap-3
    grid-cols-1
    grid-rows-6
    md:grid-cols-2
    md:grid-rows-3
  "
        >
            {menu.slice(0, 6).map((item, index) => (
                <ListElement key={index} {...item} />
            ))}
        </ul>
    </>
    );
};



export default PriceListItems