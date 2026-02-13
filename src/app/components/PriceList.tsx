'use client'
import React from 'react'
import PriceListItems from './PriceListItems';

const PriceList = () => {
    return (
        <section
            id="price-list"
            className="h-[100vh] w-[100vw] bg-gradient-to-t from-[#171a2c] via-[#373f6c] to-[#505b9c]"
        >
            <div className="h-full px-8 pt-20 pb-6 flex flex-col">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 lg:mt-12">
                    Cennik
                </h2>
                <div className="flex-1 min-h-0">
                    <PriceListItems />
                </div>
                <p className="text-xs md:text-xl text-slate-200 mt-1 self-center">
                    Wysoka jakość • Szybki czas realizacji • Dostawa
                </p>
            </div>
        </section>
    );
};

export default PriceList