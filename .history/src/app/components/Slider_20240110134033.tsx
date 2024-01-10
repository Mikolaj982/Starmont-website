'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Virtual } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { Element } from 'react-scroll';
import Home from './Home';
import Services from './Services';
import Navbar from './Navbar';
import PriceList from './PriceList';
import Contact from './Contact';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

const Slider = () => {
    const slideComponents = [Home, Services, PriceList, Contact];
    const swiperRef = useRef(null);
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

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.update();
        }
    }, []);

    const handleNavigate = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index); // Przewijanie do odpowiedniego slajdu
        }
    };

    // const swiper = Swiper({
    //     direction: 'vertical' as const,
    //     mousewheel: true,
    //     hashNavigation: {
    //         watchState: true,
    //     },
    //     pagination: {
    //         clickable: true,
    //         el: '.swiper-pagination',
    //     },
    //     modules: [Mousewheel, Pagination, Virtual],
    // });

    // useEffect(() => {
    //     window.dispatchEvent(new Event('resize'));
    // }, []);

    return (<>
        <Navbar handleNavigate={handleNavigate} />
        <div>
            <Swiper ref={swiperRef} {...swiperOptions} className='h-[100vh]' >
                {slideComponents.map((SlideComponent, index) => {
                    return <SwiperSlide key={index} data-hash={SlideComponent.name.toLowerCase()} >
                        <Element name={SlideComponent.name.toLowerCase()} id={SlideComponent.name.toLowerCase()}>
                            <SlideComponent />
                        </Element>
                    </SwiperSlide>
                })}
            </Swiper>
            <div className='swiper-pagination mr-2 fixed'></div>
        </div>
        {/* <div className={`swiper`}>
            <div className="swiper-wrapper">
                {slideComponents.map((SlideComponent, index) => {
                    return <>
                        <div className='swiper-slide' data-hash={`slide${index}`} key={index}>{<SlideComponent />}</div>
                    </>
                })}
            </div>
            <div className="swiper-pagination"></div>
        </div> */}
    </>
    )
}

export default Slider