'use client'
import React from 'react';
import Home from './Home';
import Services from './Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { v4 as uuidv4 } from 'uuid';

const Slider = () => {
    const slideComponents = [Home, Services];
    const swiperOptions = {
        direction: 'vertical' as const,
        mousewheel: true,
        pagination: {
            clickable: true,
        },
        modules: [Mousewheel, Pagination],
    }

    return (
        <div>
            <Swiper key={uuidv4()} {...swiperOptions} className='h-[100vh]'>
                {slideComponents.map((SlideComponent) => {
                    return <SwiperSlide key={uuidv4()}>
                        <SlideComponent key={uuidv4()} />
                    </SwiperSlide>
                })}
            </Swiper>
            <div className='swiper-pagination mr-2'></div>
        </div>
    )
}

export default Slider