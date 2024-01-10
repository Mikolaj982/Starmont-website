'use client'
import React, { useEffect } from 'react';
import Home from './Home';
import Services from './Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
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
        modules: [Mousewheel, Pagination],
    }

    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
    }, []);

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
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide" data-hash="slide1">Slide 1</div>
                <div className="swiper-slide" data-hash="slide2">Slide 2</div>
                <div className="swiper-slide" data-hash="slide3">Slide 3</div>
                <div className="swiper-slide" data-hash="slide4">Slide 4</div>
                <div className="swiper-slide" data-hash="slide5">Slide 5</div>
                <div className="swiper-slide" data-hash="slide6">Slide 6</div>
                <div className="swiper-slide" data-hash="slide7">Slide 7</div>
                <div className="swiper-slide" data-hash="slide8">Slide 8</div>
                <div className="swiper-slide" data-hash="slide9">Slide 9</div>
                <div className="swiper-slide" data-hash="slide10">Slide 10</div>
            </div>
            <div className="swiper-pagination"></div>
        </>
        )
}

        export default Slider