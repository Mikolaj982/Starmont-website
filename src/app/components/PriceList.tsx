'use client'
import React from 'react'
import Image from 'next/image'
import example from '../../../public/images/starmont.png'

interface menuProps {
    name: string,
    description: string,
    price: number,
}

const PriceList = () => {
    const menu: menuProps[] = [
        {
            name: 'Blacha trapezowa T-18 oraz T-6',
            description: 'Produkcja na wymiar w wybranym kolorze. Grubość 0.5 mm.',
            price: 10,
        },
        {
            name: 'Blacha trapezowa T-18 oraz T-6',
            description: 'Ocynk lub lakier podkładowy. Docinana na wymiar. Grubość 0.5 mm.',
            price: 10,
        },
        {
            name: 'Blacha płaska',
            description: '2,0 m x 1,25 m w ocynku. Dostępne blachy powlekane w różnych kolorach.',
            price: 90,
        },
        {
            name: 'Blachodachówka',
            description: 'Na wymiar w wybranym kolorze.',
            price: 10,
        },
        {
            name: 'Wkręty',
            description: '',
            price: 10,
        },
        {
            name: 'Rynna PCV',
            description: '75 mm, 125 mm, 150 mm.',
            price: 10,
        },
    ];

    return (
        <div id='price-list' className='bg-[#67A27D] h-[100vh]'>
            <div className='h-[100vh] p-8 flex'>
                <div>
                    <h2 className='text-primary mb-2 mt-8 text-3xl font-bold'>Cennik</h2>
                    <div>
                        <ol className='grid grid-cols-2 gap-3'>
                            {menu.map((item, index) => {
                                return <>
                                    <li key={index} className='flex flex-col'>
                                        <Image src={example} alt='item' className='w-24 h-14 mb-1' />
                                        <p className='text-sm mb-1 font-semibold'>{item.name}</p>
                                        <p className='text-xs mb-1 font-medium'>{item.description}</p>
                                        <p className='text-xs mb-1 font-bold'>Cena: {item.price} zł</p>
                                    </li>
                                </>
                            })}
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PriceList