'use client'
import React from 'react'

interface RightSidebarProps {
    setIsOpen: (boolean: boolean) => void;
    isOpen: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ setIsOpen, isOpen }) => {

    return (
        <div className={`w-56 h-[100vh] fixed top-0 right-[-250px] z-20 bg-[#67A27D] ${isOpen ? 'transform -translate-x-56 transition-transform duration-300 ease-in-out' : ''}`}>
            <button onClick={() => setIsOpen(false)} className='z-20 top-0'>X</button>
        </div>
    )
}

export default RightSidebar