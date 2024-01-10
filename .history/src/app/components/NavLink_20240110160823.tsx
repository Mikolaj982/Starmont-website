'use client'
import React from 'react'

interface NavLinkProps {
    path: string,
    title: string,
    handleNav: any,
}

const NavLink: React.FC<NavLinkProps> = ({ path, title, handleNav }) => {
    return <>
        <a href={path} onClick={() => handleNav()}>{title}</a>
    </>
}

export default NavLink