'use client'
import React from 'react'

interface RightSidebarProps {
    setIsOpen: (boolean: boolean) => void;
    isOpen: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ setIsOpen, isOpen }) => {

    return (
        <div className={`w-56 h-[100vh] fixed z-20 bg-[#67A27D] transform transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) ${isOpen ? 'translate-x-32' : 'translate-x-[333px]'}`}>
            <button onClick={() => setIsOpen(false)} className='z-20 top-0'>X</button>
        </div>
    )
}

export default RightSidebar