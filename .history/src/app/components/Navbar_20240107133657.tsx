import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed top-0 w-[100%] flex justify-between z-10'>
            <h1 className='uppercase'>starmont</h1>
            <Bars3Icon className='h-[25px]' />
        </div>
    )
}

export default Navbar