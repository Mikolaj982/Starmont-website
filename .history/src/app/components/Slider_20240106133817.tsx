'use client'
import React from 'react'
import Home from './Home';
import Services from './Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Slider = () => {
    const slideComponents = [Home, Services];
    const swiperOptions = {
        direction: 'vertical' as const,
        slidesPerView: 1,
        mousewheel: true,
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        },
        spaceBetween: 30,
        // paginationBulletMessage: {index},
    }

    return (
        <div className='h-100%'>
            <Swiper {...swiperOptions}>
                {slideComponents.map((SlideComponent, index) => {
                    return <>
                        <SwiperSlide key={index}>
                            <SlideComponent />
                        </SwiperSlide>
                    </>
                })}
            </Swiper>
        </div>
    )
}

export default Slider