'use client'
import React from 'react'

interface NavLinkProps {
    path: string,
    title: string,

}

const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {
    return <>
        <a href={path}>{title}</a>
    </>
}

export default NavLink