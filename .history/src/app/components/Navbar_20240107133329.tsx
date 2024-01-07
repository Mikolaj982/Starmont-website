import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

const Navbar = () => {
    return (
        <div className='sticky top-0 w-[100%] flex justify-between bg-transparent'>
            <h1 className='uppercase'>starmont</h1>
            <Bars3Icon className='h-[25px]' />
        </div>
    )
}

export default Navbar