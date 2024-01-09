'use client'
import React, { useRef, useState } from 'react';
import Home from './Home';
import Services from './Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { SwiperOptions } from 'swiper/types';
import Navbar from './Navbar';


const Slider = () => {
    const slideComponents = [Home, Services];
    const swiperOptions: SwiperOptions = {
        direction: 'vertical' as const,
        mousewheel: true,
        pagination: {
            clickable: true,
        },
        modules: [Mousewheel, Pagination],
    }



    return (<>
        <Navbar />
        <div>
            <Swiper {...swiperOptions} className='h-[100vh]' >
                {slideComponents.map((SlideComponent, index) => {
                    return <SwiperSlide key={index} >
                        <Element>
                            <SlideComponent />
                        </Element>
                    </SwiperSlide>
                })}
            </Swiper>
            <div className='swiper-pagination mr-2'></div>
        </div>
    </>
    )
}

export default Slider