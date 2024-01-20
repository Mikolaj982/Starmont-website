'use client'
import React from 'react'
import PriceListItems from './PriceListItems';

const PriceList = () => {

    return (
        <div id='price-list' className='bg-gradient-to-t from-[#395a46] via-[#4e7a5e] to-[#70af87] h-[100vh] w-[100vw]' >
            <div className='h-[100%] p-8 flex flex-col justify-center'>
                <h2 className='text-white mb-2 mt-36 lg:mt-44 text-4xl font-bold'>Cennik</h2>
                <div>
                    <div id='swiper-container' className='mt-4'>
                        <PriceListItems />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceList