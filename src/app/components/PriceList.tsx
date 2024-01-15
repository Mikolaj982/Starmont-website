'use client'
import React from 'react'
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination } from 'swiper/modules';
import PriceListItems from './PriceListItems';

const PriceList = () => {

    return (
        <div id='price-list' className='bg-[#67A27D] h-[100vh]'>
            <div className='h-[100%] p-8 flex justify-center'>
                <div>
                    <h2 className='text-primary mb-2 mt-8 text-4xl font-bold'>Cennik</h2>
                    <div className='mt-14'>
                        <PriceListItems />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceList