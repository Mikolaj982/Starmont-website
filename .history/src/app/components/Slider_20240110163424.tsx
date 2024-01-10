'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import Pagination from 'swiper/core';
import Mousewheel from 'swiper/core';
import Virtual from 'swiper/core';
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

// SwiperCore.use([Mousewheel, Pagination]);

const Slider = () => {
    const slideComponents = [Home, Services, PriceList, Contact];
    const [swiper, setSwiper] = useState<any>();
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

    // useEffect(() => {
    //     if (swiperRef.current) {
    //         swiperRef.current.update();
    //     }
    // }, []);

    // const handleNavigate = (index: number) => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.slideTo(index);
    //     }
    // };

    const handleChangeSlide = (index: number) => {
        swiper.slideTo(index);
    }

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
        <Navbar handleNav={handleChangeSlide} />
        <div>
            <Swiper
                onSwiper={(swiper: any) => {
                    setSwiper(swiper)
                }}
                ref={swiperRef}
                {...swiperOptions}
                className='h-[100vh]' >
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