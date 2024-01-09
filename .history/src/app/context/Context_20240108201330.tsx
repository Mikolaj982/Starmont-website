import { createContext, useContext } from 'react';

interface SliderContextProps {
    handleSlideTo: (index: number, swiperRef: any) => void;
}

const Context = createContext<SliderContextProps | undefined>(undefined);

export const SliderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const handleSlideTo = (index: number, swiperRef: any) => {
        if (swiperRef.current) {
            (swiperRef.current).slideTo(index);
        }
    };

    return <Context.Provider value={{ handleSlideTo }}>{children}</Context.Provider>;
};

export const useSlider = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('Context must be used within a SliderProvider');
    }
    return context;
};
