import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { EffectCards } from 'swiper/modules';
import example from '../../../public/images/logo.png';

const ImagesSlider = () => {
    const Images = [example, example, example, example, example];

    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className='w-[15rem] mt-[2rem] sm:w-[17rem] md:w-[19rem] md:mt-[4rem] lg:mr-[7rem] xl:mr-[16rem]'
        >
            {Images.map((slide, index) => {
                return <>
                    <SwiperSlide
                        key={index}
                        className='rounded-lg'
                    >

                        <Image
                            src={slide}
                            alt='blacha trapezowa'
                            className='bg-[#8b9c94] rounded-lg w-[13rem] h-[13rem] sm:w-[16rem] sm:h-[16rem] md:w-[18rem] md:h-[18rem]'
                        />
                    </SwiperSlide>
                </>
            })}
        </Swiper>
    )
}

export default ImagesSlider