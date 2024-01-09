'use client'
import React from 'react'
import Scroll from 'react-scroll';
const ScrollLink: any = Scroll.ScrollLink;

interface NavLinkProps {
    path: string,
    title: string,
}


const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {

    return <>
        <ScrollLink to={path} smooth={true} spy={true} duration={500}>
            {title}
        </ScrollLink>
    </>
}

export default NavLink