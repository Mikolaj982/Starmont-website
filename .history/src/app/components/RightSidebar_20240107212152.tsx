'use client'
import React from 'react'

interface RightSidebarProps {
    setIsOpen: (boolean: boolean) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ setIsOpen }) => {

    return (
        <div className='w-56 h-[100vh] fixed top-0 z-20 transition-left duration-300 ease-in-out bg-[#67A27D]'>
            <button onClick={() => setIsOpen(false)}></button>
        </div>
    )
}

export default RightSidebar