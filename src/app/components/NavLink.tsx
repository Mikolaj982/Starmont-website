'use client'
import React from 'react'
import { useGlobalContext } from '../context/context';

interface NavLinkProps {
    path?: string,
    title: string,
    index: number,
}

const NavLink: React.FC<NavLinkProps> = ({ title, index }) => {
    const { handleChangeSlide } = useGlobalContext();
    return <>
        <a
            id='nav-link'
            className='lg:text-white lg:text-lg'
            onClick={() => handleChangeSlide(index)}>{title}</a>
    </>
}

export default NavLink