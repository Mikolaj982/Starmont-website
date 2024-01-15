'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { Mousewheel, Pagination, Keyboard } from 'swiper/modules';
import { Element } from 'react-scroll';
import Home from './Home';
import Services from './Services';
import Navbar from './Navbar';
import PriceList from './PriceList';
import Contact from './Contact';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Mousewheel, Pagination, Keyboard]);

const Slider = () => {
    const slideComponents = [Home, Services, PriceList, Contact];
    const swiperRef = useRef<SwiperCore | null>(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.update();
        }
    }, [swiperRef.current]);

    const handleChangeSlide = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    }

    return (<>
        <Navbar handleNav={handleChangeSlide} />
        <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            direction="vertical"
            keyboard
            mousewheel
            pagination={{
                clickable: true
            }}
            onSwiper={(swiper) => {
                swiperRef.current = swiper
            }}
            className='h-[100vh]'
        >
            {slideComponents.map((SlideComponent, index) => {
                return <SwiperSlide key={index} data-hash={SlideComponent.name.toLowerCase()}>
                    {/* <Element name={SlideComponent.name.toLowerCase()} id={SlideComponent.name.toLowerCase()}> */}
                    <SlideComponent key={index} />
                    {/* </Element> */}
                </SwiperSlide>
            })}
        </Swiper>
        <div className='swiper-pagination mr-2 fixed'></div>
    </>
    )
}

export default Slider