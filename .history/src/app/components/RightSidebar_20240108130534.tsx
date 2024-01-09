'use client'
import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface RightSidebarProps {
    setIsOpen: (boolean: boolean) => void;
    isOpen: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ setIsOpen, isOpen }) => {
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
        <div className={`bg-white-200 backdrop-blur-sm backdrop-brightness-150 w-[100vw] h-72 fixed z-20 transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-72'}`}>
            <XMarkIcon onClick={() => setIsOpen(false)} className='z-20 absolute right-0 m-3 h-8 text-slate-600 bg-slate-200 rounded-sm active:bg-slate-500' />
            <div className='flex flex-col justify-center'>
                <h2 className='uppercase'>menu</h2>
                <ul>{menuNavigator.map((obj) => {
                    return <>
                        <li><Link href={obj.reference}>{obj.name}</Link></li>
                    </>
                })}</ul>
            </div>
        </div>
    )
}

export default RightSidebar