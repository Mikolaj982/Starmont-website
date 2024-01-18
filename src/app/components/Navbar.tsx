'use client'
import { Bars3Icon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import NavigationMenu from './NavigationMenu';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    }

    return (<>
        <div className='fixed top-0 w-[100%] flex justify-between z-10'>
            <Image src={logo} alt='starmont logo' className='relative -top-7 -left-3 m-6 w-24 lg:w-32 lg:-top-10' />
            <Bars3Icon className='h-[25px] text-white m-6 lg:hidden' onClick={() => toggleSidebar()} />
            <NavigationMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
    </>
    )
}

export default Navbar