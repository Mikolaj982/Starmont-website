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
        <button

        // onClick={() => scroller.scrollTo('myScrollToElement', {
        //     duration: 1500,
        //     containerId: 'services',
        // })}
        >
            {title}
        </button>
        {/* <Link to='services' smooth={true}>{title}</Link> */}
    </>
}

export default NavLink