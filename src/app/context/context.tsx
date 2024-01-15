import { createContext, useContext, useRef } from 'react';
import SwiperCore from 'swiper/core';
import { Keyboard, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
export type GlobalContent = {
    handleChangeSlide: (index: number) => void,
    swiper: null | SwiperCore,
}

export const MyGlobalContext = createContext<GlobalContent>({
    handleChangeSlide: (index: number): void => { },
    swiper: null,
});

export const useGlobalContext = () => {
    return useContext(MyGlobalContext);
}

export const MyContextProvider = (props: any) => {
    const swiperRef = useRef<SwiperCore | null>(null);

    const handleChangeSlide = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    }

    return (
        <MyGlobalContext.Provider value={{ handleChangeSlide, swiper: swiperRef.current }}>
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
                {props.children}
            </Swiper>
        </MyGlobalContext.Provider >
    )
}
