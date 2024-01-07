import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed top-0 w-[100%] flex justify-between z-10 p-4'>
            <img src='../../../public/images/starmont.png'></img>
            <Bars3Icon className='h-[25px]' />
        </div>
    )
}

export default Navbar