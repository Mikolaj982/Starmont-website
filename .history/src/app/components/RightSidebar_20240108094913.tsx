'use client'
import React from 'react'
import { XMarkIcon } from '@heroicons/react/16/solid';

interface RightSidebarProps {
    setIsOpen: (boolean: boolean) => void;
    isOpen: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ setIsOpen, isOpen }) => {

    return (
        <div className={`w-56 h-[100vh] fixed z-20 bg-[#67A27D] transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-x-32' : 'translate-x-[333px]'}`}>
            <XMarkIcon onClick={() => setIsOpen(false)} className='z-20 top-0' />
        </div>
    )
}

export default RightSidebar