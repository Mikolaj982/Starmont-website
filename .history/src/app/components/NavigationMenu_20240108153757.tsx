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
            name: 'oferta',
            path: 'services'
        },
        {
            name: 'cennik',
            path: '#'
        },
        {
            name: 'kontakt',
            path: '#'
        }
    ]

    return (
        <div className={`bg-white-200 backdrop-blur-sm backdrop-brightness-150 w-[100vw] fixed z-20 transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-72'}`}>
            <XMarkIcon onClick={() => setIsOpen(false)} className='z-20 absolute right-0 m-3 h-8 text-slate-600 bg-slate-200 rounded-sm active:bg-slate-500' />
            <div className='flex flex-col text-center'>
                <h2 className='uppercase font-bold mt-3 text-2xl text-slate-900'>menu</h2>
                <ul className='mt-4 min-h-32'>
                    {menuNavigator.map((obj, index) => {
                        return <li key={index} className='uppercase p-3 text-slate-900 font-semibold active:bg-gray-500'>
                            <NavLink path={obj.path} title={obj.name} />
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NavigationMenu