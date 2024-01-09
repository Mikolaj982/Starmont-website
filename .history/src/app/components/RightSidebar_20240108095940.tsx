'use client'
import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';

interface RightSidebarProps {
    setIsOpen: (boolean: boolean) => void;
    isOpen: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ setIsOpen, isOpen }) => {

    return (
        <div className={`w-56 h-[100vh] p-2 pb-16 fixed z-20 bg-[#67A27D] transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-x-24' : 'translate-x-[333px]'}`}>

            <XMarkIcon onClick={() => setIsOpen(false)} className='z-20 absolute right-0 mt-2 mr-1 h-9' />
        </div>
    )
}

export default RightSidebar