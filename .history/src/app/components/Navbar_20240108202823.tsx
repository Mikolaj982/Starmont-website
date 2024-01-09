'use client'
import { Bars3Icon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import NavigationMenu from './NavigationMenu';
import { useSlider } from '../context/Context';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { handleSlideTo } = useSlider();
    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    }

    return (<>
        <div className='fixed top-0 w-[100%] flex justify-between z-10 p-6'>
            <Image src={logo} width={100} alt='starmont logo' className='relative -top-7 -left-3' />
            <Bars3Icon className='h-[25px] text-white' onClick={() => toggleSidebar()} />
        </div>
        <NavigationMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
    )
}

export default Navbar