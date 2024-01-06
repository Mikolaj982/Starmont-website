import React from 'react'
import Home from './Home';
import Services from './Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Slider = () => {
    const slideComponents = [Home, Services];
    return (
        <Swiper>
            {slideComponents.map((SlideComponent, index) => {
                return <SwiperSlide key={index}>
                    <SlideComponent />
                </SwiperSlide>
            })}
        </Swiper>
    )
}

export default Slider