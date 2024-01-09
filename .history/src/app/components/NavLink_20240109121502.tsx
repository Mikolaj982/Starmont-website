'use client'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

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