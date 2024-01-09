'use client'
import React from 'react'
import Scroll from 'react-scroll';

interface NavLinkProps {
    path: string,
    title: string,
}


const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {
    const ScrollLink: any = Scroll.ScrollLink;

    return <ScrollLink to={path} smooth={true} spy={true} duration={500}>
        {title}
    </ScrollLink>

}

export default NavLink