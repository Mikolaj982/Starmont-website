'use client'
import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface NavigationMenuProps {
    setIsOpen: (boolean: boolean) => void;
    isOpen: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ setIsOpen, isOpen }) => {
    const menuNavigator = [
        {
            name: 'oferta',
            reference: './Services'
        },
        {
            name: 'cennik',
            reference: '#'
        },
        {
            name: 'kontakt',
            reference: '#'
        }
    ]

    return (
        <div className={`bg-white-200 backdrop-blur-sm backdrop-brightness-150 w-[100vw] fixed z-20 transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-72'}`}>
            <XMarkIcon onClick={() => setIsOpen(false)} className='z-20 absolute right-0 m-3 h-8 text-slate-600 bg-slate-200 rounded-sm active:bg-slate-500' />
            <div className='flex flex-col text-center'>
                <h2 className='uppercase font-semibold mt-3 text-2xl text-slate-700'>menu</h2>
                <ul className='mt-4 min-h-32'>
                    {menuNavigator.map((obj) => {
                        return <>
                            <li className='uppercase p-3 text-slate-600 active:bg-white-200 active:backdrop-blur-sm'>
                                <Link href={obj.reference}>{obj.name}</Link>
                            </li>
                        </>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NavigationMenu