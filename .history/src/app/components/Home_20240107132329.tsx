import React from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid';

const Home = () => {
    return (
        <div className="bg-[#373F6C] h-[100vh]">
            <div className='sticky mt-0 w-[100%] flex justify-between'>
                <h1 className='uppercase'>starmont</h1>
                <Bars3Icon className='h-[25px]' />
            </div>
        </div>
    )
}

export default Home