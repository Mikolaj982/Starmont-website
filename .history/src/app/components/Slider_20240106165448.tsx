'use client'
import React from 'react'
import Home from './Home';
import Services from './Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const Slider = () => {
    const slideComponents = [Home, Services];
    const swiperOptions = {
        direction: 'vertical' as const,
        freeMode: true,
        // mousewheel: true,
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        },
        modules: [Pagination],
    }

    return (
        <div>
            <Swiper {...swiperOptions} className='h-[100vh]'>
                {slideComponents.map((SlideComponent, index) => {
                    return <>
                        <SwiperSlide key={index}>
                            <SlideComponent />
                        </SwiperSlide>
                    </>
                })}
            </Swiper>
            <div className='swiper-pagination'></div>
        </div>
    )
}

export default Slider