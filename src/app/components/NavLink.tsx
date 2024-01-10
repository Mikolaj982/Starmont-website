'use client'
import React from 'react'

interface NavLinkProps {
    path: string,
    title: string,
    handleNav: any,
    index: number,
}

const NavLink: React.FC<NavLinkProps> = ({ path, title, handleNav, index }) => {
    return <>
        <a href={path} onClick={() => handleNav(index)}>{title}</a>
    </>
}

export default NavLink