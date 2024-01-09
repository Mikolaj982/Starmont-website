'use client'
import React from 'react'
import { scroller, Link } from 'react-scroll';
import swiper from 'swiper';

interface NavLinkProps {
    path: string,
    title: string,

}

const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {
    return <>
        {/* <a href={path}>{title}</a> */}
        <Link to='services'>{title}</Link>
    </>
}

export default NavLink