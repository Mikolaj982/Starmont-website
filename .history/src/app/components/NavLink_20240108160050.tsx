'use client'
import React from 'react'
import { Link } from 'react-scroll';

interface NavLinkProps {
    path: string,
    title: string,
}

const NavLink: React.FC<NavLinkProps> = ({ path, title, ...rest }) => {
    return (
        <Link to={path} smooth={true} duration={500} {...rest}>
            {title}
        </Link>
    )
}

export default NavLink