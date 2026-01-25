'use client'
import React from 'react'
import PriceListItems from './PriceListItems';

const PriceList = () => {

    return (
        <div id='price-list' className='bg-gradient-to-t from-[#171a2c] via-[#373f6c] to-[#505b9c] h-[100vh] w-[100vw]' >
            <div className='h-[100%] p-8 flex flex-col justify-center'>
                <h2 className='text-white mb-2 mt-36 text-3xl lg:mt-44 md:text-4xl font-bold'>Cennik</h2>
                <div>
                    <div id='swiper-container' className='mt-1'>
                        <PriceListItems />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceList