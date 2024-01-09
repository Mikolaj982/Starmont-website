'use client'
import React from 'react'
import { Link } from 'react-scroll';

interface NavLinkProps {
    path: string,
    title: string,

}

const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {
    return <>
        {/* <a href={path}>{title}</a> */}
        <Link to='services' smooth={true} duration={500} name='services'>{title}</Link>
    </>
}

export default NavLink