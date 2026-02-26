import React from 'react';
import Image from "next/image"
import HeroClient from './HeroClient';

const Home = () => {
    return (
        <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-t from-[#171a2c] via-[#373f6c] to-[#505b9c]">
            <section className="relative min-h-[100vh] flex items-center">
                <Image
                    src="/images/blacha-trapezowa-tlo.webp"
                    alt="blacha trapezowa"
                    fill
                    className="object-cover"
                    priority
                    quality={70}
                    sizes="(max-width: 768px) 100vw, 1400px"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Blachy trapezowe i pokrycia dachowe
                    </h1>
                    <HeroClient />
                </div>
            </section>
        </div>

    )
}

export default Home;