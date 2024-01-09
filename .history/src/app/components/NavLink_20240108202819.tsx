'use client'
import React from 'react'
import { Link } from 'react-scroll';
import { useSlider } from '../context/Context';

interface NavLinkProps {
    path: string,
    title: string,
}


const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {
    const { handleSlideTo } = useSlider();

    return (
        <Link to={path} smooth={true} duration={500} onClick={() => handleSlideTo(path)}>
            {title}
        </Link>
    )
}

export default NavLink