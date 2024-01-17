'use client'
import React from 'react'
import PriceListItems from './PriceListItems';

const PriceList = () => {

    return (
        <div id='price-list' className='bg-[#67A27D] h-[100vh] w-[100vw]' >
            <div className='h-[100%] p-8 flex flex-col justify-center'>
                <h2 className='text-primary mb-2 mt-36 text-4xl font-bold'>Cennik</h2>
                <div>
                    <div id='swiper-container' className='mt-8'>
                        <PriceListItems />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceList