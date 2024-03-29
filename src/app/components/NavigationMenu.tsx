'use client'
import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';
import NavLink from './NavLink';

interface NavigationMenuProps {
    setIsOpen: (boolean: boolean) => void;
    isOpen: boolean;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ setIsOpen, isOpen }) => {
    const menuNavigator = [
        {
            name: 'główna',
            path: '#'
        },
        {
            name: 'oferta',
            path: '#services',
        },
        {
            name: 'cennik',
            path: '#price-list',
        },
        {
            name: 'kontakt',
            path: '#contact',
        }
    ]

    return (
        <div className={`top-0 bg-white-200 backdrop-blur-sm backdrop-brightness-150 w-[100vw] fixed z-20 transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-72'} lg:backdrop-brightness-none lg:backdrop-filter-none lg:transform-none lg:border-b-2 lg:pb-3`}>
            <XMarkIcon onClick={() => setIsOpen(false)} className='z-20 absolute right-0 m-3 h-8 text-slate-600 bg-slate-200 rounded-sm active:bg-slate-500 lg:hidden' />
            <div className='flex flex-col text-center'>
                <h2 className='uppercase font-bold mt-3 text-2xl text-slate-900 lg:hidden'>menu</h2>
                <ul className='mt-4 mb-4 min-h-32 lg:h-10 lg:flex lg:min-h-4 lg:justify-end lg:pr-6'>
                    {menuNavigator.map((obj, index) => {
                        return <li key={index} className='uppercase p-3 text-slate-900 font-semibold lg:cursor-pointer'>
                            <NavLink title={obj.name} index={index} />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NavigationMenu