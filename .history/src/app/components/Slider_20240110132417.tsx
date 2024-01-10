'use client'
import React, { useEffect } from 'react';
import Home from './Home';
import Services from './Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { SwiperOptions } from 'swiper/types';
import Navbar from './Navbar';
import { Element } from 'react-scroll';
import PriceList from './PriceList';
import Contact from './Contact';

const Slider = () => {
    const slideComponents = [Home, Services, PriceList, Contact];
    const swiperOptions: SwiperOptions = {
        direction: 'vertical' as const,
        mousewheel: true,
        hashNavigation: {
            watchState: true,
        },
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        },
        modules: [Mousewheel, Pagination, Virtual],
    }

    // useEffect(() => {
    //     window.dispatchEvent(new Event('resize'));
    // }, []);

    return (<>
        <Navbar />
        {/* <div>
            <Swiper {...swiperOptions} className='h-[100vh]' >
                {slideComponents.map((SlideComponent, index) => {
                    return <SwiperSlide key={index} data-hash={SlideComponent.name.toLowerCase()} >
                        <Element name={SlideComponent.name.toLowerCase()} id={SlideComponent.name.toLowerCase()}>
                            <SlideComponent />
                        </Element>
                    </SwiperSlide>
                })}
            </Swiper>
            <div className='swiper-pagination mr-2 fixed'></div>
        </div> */}
        <div className={`swiper ${{ ...swiperOptions }}`}>
            <div className="swiper-wrapper">
                {slideComponents.map((SlideComponent, index) => {
                    return <>
                        <div className='swiper-slide' data-hash={`slide${index}`} key={index}>{<SlideComponent />}</div>
                    </>
                })}
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </>
    )
}

export default Slider