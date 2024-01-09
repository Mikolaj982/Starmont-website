'use client'
import React from 'react'
import { Link } from 'react-scroll';

interface NavLinkProps {
    path: string,
    title: string,
}

const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {

    return <>
        <Link to='services' smooth={true} spy={true} duration={500}>
            {title}
        </Link>
    </>
}

export default NavLink