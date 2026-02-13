'use client'
import React from 'react'
import { useGlobalContext } from '../context/context';

interface NavLinkProps {
    path?: string,
    title: string,
    index: number,
    setIsOpen: (boolean: boolean) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ title, index, setIsOpen }) => {
    const { handleChangeSlide } = useGlobalContext();
    return <>
        <a
            id='nav-link'
            className='lg:text-white lg:text-lg'
            onClick={() => { handleChangeSlide(index); setIsOpen(false) }}>{title}</a>
    </>
}

export default NavLink