import React from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid';

const Home = () => {
    return (
        <div className="bg-[#373F6C] h-[100vh]">
            <div className='fixed mt-0 flex'>
                <h1 className='uppercase'>starmont</h1>
                <Bars3Icon className='relative' />
            </div>
        </div>
    )
}

export default Home