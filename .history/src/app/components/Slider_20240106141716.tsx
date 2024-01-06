'use client'
import React from 'react'
import Home from './Home';
import Services from './Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Slider = () => {
    const slideComponents = [Home, Services];
    const swiperOptions = {
        direction: 'vertical' as const,
        pagination: {
            clickable: true,
        },
        modules: [Pagination],
    }

    return (
        <div>
            <Swiper {...swiperOptions}>
                <SwiperSlide><Home /></SwiperSlide>
                {/* {slideComponents.map((SlideComponent, index) => {
                    return <>
                        <SwiperSlide key={index}>
                            <SlideComponent />
                        </SwiperSlide>
                    </>
                })} */}
            </Swiper>
            <div className='swiper-pagination'></div>
        </div>
    )
}

export default Slider