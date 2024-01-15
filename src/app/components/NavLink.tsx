'use client'
import React from 'react'

interface NavLinkProps {
    path?: string,
    title: string,
    handleNav: any,
    index: number,
}

const NavLink: React.FC<NavLinkProps> = ({ title, handleNav, index }) => {
    return <>
        <a onClick={() => {
            handleNav(index);
            console.log(index);
        }
        }>{title}</a>
    </>
}

export default NavLink