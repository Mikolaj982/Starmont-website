import { createContext, useContext } from 'react';

interface ContextProps {
    handleSlideTo: (index: number, swiperRef: any) => void;
}

const Context = createContext<ContextProps | undefined>(undefined);

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
