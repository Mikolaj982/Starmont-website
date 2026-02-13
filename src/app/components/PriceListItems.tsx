import React from 'react'
import Image from 'next/image';
import example from '../../../public/images/blacha-trapezowa-biala.webp'
import { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export interface menuProps {
    name: string,
    description?: string,
    price: number,
    image?: StaticImageData,
}

const PriceListItems = () => {
    const menu: menuProps[] = [
        { name: 'Blacha trapezowa T-18', price: 30, image: example },
        { name: 'Blacha trapezowa T-6', price: 30, image: example },
        { name: 'Blacha płaska', price: 90, image: example },
        { name: 'Blachodachówka', price: 32, image: example },
        { name: 'Wkręty', price: 32, image: example },
        { name: 'Rynna PCV', price: 25, image: example },
        { name: 'Membrana dachowa', price: 25, image: example },
    ];

    const ListElement = ({ name, price, image }: menuProps) => {
        return (
            <li
                className="
                    bg-white/10 backdrop-blur
                    rounded-xl
                    px-3 py-2
                    md:px-4 md:py-3
                    flex
                    items-center
                    gap-3
                "
            >
                <div className="flex flex-col min-w-0 flex-1">
                    <p className="text-slate-100 text-sm md:text-base font-bold leading-tight">
                        {name}
                    </p>
                    <p className="text-slate-100 text-xs md:text-sm font-semibold">
                        od {price} zł
                    </p>
                </div>
                {image && (
                    <Image
                        src={image}
                        alt={name}
                        width={64}
                        height={64}
                        className="
                            w-12 h-12
                            md:w-14 md:h-14
                            lg:w-16 lg:h-16
                            object-cover
                            rounded-md
                            bg-slate-600
                            flex-shrink-0
                        "
                    />
                )}
            </li>
        );
    };

    return (
        <ul
            className="
                grid
                gap-3
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
            "
        >
            {menu.slice(0, 6).map((item, index) => (
                <ListElement key={index} {...item} />
            ))}
        </ul>
    );
};

export default PriceListItems;