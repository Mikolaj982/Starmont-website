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
        <a onClick={() => handleChangeSlide(index)}>{title}</a>
    </>
}

export default NavLink