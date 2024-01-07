'use client'
import React from 'react'

interface RightSidebarProps {
    setIsOpen: (boolean: boolean) => void;
    isOpen: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ setIsOpen, isOpen }) => {

    return (
        <div className={`w-56 h-[100vh] fixed top-0 right-[250px] z-20 transition-all duration-300 ease-in-out bg-[#67A27D] left-0 ${isOpen ? 'left-[250px]' : ''}`}>
            <button onClick={() => setIsOpen(false)}></button>
        </div>
    )
}

export default RightSidebar