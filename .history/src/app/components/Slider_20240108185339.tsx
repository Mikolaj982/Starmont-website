'use client'
import React, { useRef } from 'react';
import Home from './Home';
import Services from './Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

const Slider = () => {
    const swiperRef = useRef(null);
    const slideComponents = [Home, Services];
    const swiperOptions = {
        direction: 'vertical' as const,
        mousewheel: true,
        pagination: {
            clickable: true,
        },
        modules: [Mousewheel, Pagination],
    }

    const handleSlideTo = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    }

    return (
        <div>
            <Swiper {...swiperOptions} className='h-[100vh]'>
                {slideComponents.map((SlideComponent, index) => {
                    return <SwiperSlide key={index} data-hash={`${SlideComponent.name}`}>
                        <SlideComponent />
                    </SwiperSlide>
                })}
            </Swiper>
            <div className='swiper-pagination mr-2'></div>
        </div>
    )
}

export default Slider