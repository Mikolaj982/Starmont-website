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
            price: 10,
            image: example,
        },
        {
            name: 'Blacha trapezowa T-18 oraz T-6',
            description: 'Ocynk lub lakier podkładowy. Docinana na wymiar. Grubość 0.5 mm.',
            price: 10,
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
            price: 10,
            image: example,
        },
        {
            name: 'Wkręty',
            description: '',
            price: 10,
            image: example,
        },
        {
            name: 'Rynna PCV',
            description: '75 mm, 125 mm, 150 mm.',
            price: 10,
            image: example,
        },
    ];

    const ListElement = ({ name, description, price, image }: menuProps) => {
        return <><li className='md:flex md:flex-col '>
            <Image src={image} alt='item' className='w-[20rem] h-[16.5rem] mb-4 bg-black' />
            <p className='text-3xl mb-1 font-bold'>{name}</p>
            <p className='text-xl mb-1 font-medium'>{description}</p>
            <p className='text-2xl mb-1 font-bold'>Cena: {price} zł</p>
        </li></>
    }

    // const ListElements = menu.map((item, index) => {
    //     return (
    //         <ListElement key={index} {...item} />
    //     )
    // })

    return (
        <>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={20}
                className='h-[90vh] w-[85vw]'
            >
                {menu.map((item, index) => (
                    <SwiperSlide key={index}>
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