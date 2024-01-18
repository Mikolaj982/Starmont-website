'use client'
import React, { useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import { Mousewheel, Pagination, Keyboard } from 'swiper/modules';
import Home from './Home';
import Services from './Services';
import Navbar from './Navbar';
import PriceList from './PriceList';
import Contact from './Contact';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { MyContextProvider } from '../context/context';
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
        <MyContextProvider value={{ handleChangeSlide, swiperRef }}>
            <Navbar />
            {slideComponents.map((SlideComponent, index) => {
                return <SwiperSlide key={index} data-hash={SlideComponent.name.toLowerCase()}>
                    <SlideComponent key={index} />
                </SwiperSlide>
            })}
            <div className='swiper-pagination mr-2 fixed'></div>
        </MyContextProvider>
    </>
    )
}

export default Slider