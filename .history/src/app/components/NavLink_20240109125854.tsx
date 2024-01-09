'use client'
import React from 'react'
import { scroller } from 'react-scroll';

interface NavLinkProps {
    path: string,
    title: string,
}

const NavLink: React.FC<NavLinkProps> = ({ path, title }) => {

    return <>
        <button onClick={() => scroller.scrollTo('myScrollToElement', {
            duration: 1500,
            containerId: 'services',
        })}>
            {title}
        </button>
    </>
}

export default NavLink