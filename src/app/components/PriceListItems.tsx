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
        return <><li className='flex flex-col items-center w-[12rem] h-[12rem] lg:w-[18rem] xl:w-[16rem] xl:h-[16rem]'>
            <Image src={image} alt='item' className='w-[20rem] h-[16.5rem] mb-2 md:mr-0 bg-slate-500 rounded-lg' />
            <p className='text-slate-200 text-lg md:text-3xl mb-1 font-bold text-justify'>{name}</p>
            <p className='text-slate-200 text-sm md:text-xl mb-1 font-medium text-justify'>{description}</p>
            <p className='text-slate-200 text-md md:text-2xl mb-1 font-bold'>Cena: {price} zł</p>
        </li></>
    }

    return (
        <>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    }
                }}
                slidesPerView={1}
                spaceBetween={20}
                className='h-[90vh]'
            >
                {menu.map((item, index) => (
                    <SwiperSlide key={index} className='flex justify-center'>
                        <ListElement
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default PriceListItems