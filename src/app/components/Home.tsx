import React from 'react';
import Image from "next/image"
import image from "../../../public/images/blacha-trapezowa-tlo.webp"
import HeroClient from './HeroClient';

const Home = () => {
    return (
        <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-t from-[#171a2c] via-[#373f6c] to-[#505b9c]">
            <section className="relative min-h-[100vh] flex items-center">
                <Image
                    src={image}
                    alt="blacha trapezowa"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 mx-auto px-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        Blachy trapezowe i pokrycia dachowe
                    </h1>
                    <HeroClient />
                </div>
            </section>
        </div>

    )
}

export default Home