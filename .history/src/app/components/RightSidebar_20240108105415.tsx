'use client'
import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';

interface RightSidebarProps {
    setIsOpen: (boolean: boolean) => void;
    isOpen: boolean;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ setIsOpen, isOpen }) => {

    return (
        <div className={`bg-gradient-to-r from-blue-500 to-green-500 bg-opacity-50 p-8 rounded-md shadow-md w-56 h-[100vh] pb-16 fixed z-20 transform transition-transform duration-1000 ease-in-out ${isOpen ? 'translate-x-24' : 'translate-x-[333px]'}`}>

            <XMarkIcon onClick={() => setIsOpen(false)} className='z-20 absolute right-0 mt-2 mr-3 h-9' />
        </div>
    )
}

export default RightSidebar