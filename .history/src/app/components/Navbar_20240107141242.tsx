import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'
import Image from 'next/image';
import logo from '../../../public/images/starmont.png';

const Navbar = () => {
    return (
        <div className='fixed top-0 w-[100%] flex justify-between z-10 p-4'>
            <Image src={logo} width={100} alt='starmont logo' className='border-t-4 rounded-t' />
            <Bars3Icon className='h-[25px]' />
        </div>
    )
}

export default Navbar