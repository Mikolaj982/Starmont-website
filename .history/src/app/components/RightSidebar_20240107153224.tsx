'use client'
import React from 'react'

interface RightSidebarProps {
    setIsOpen: (boolean: boolean) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ setIsOpen }) => {
    return (
        <div className='w-[100vh] h-[100vh] fixed right-96 overflow-hidden'>
            <button onClick={() => setIsOpen(false)}></button>
        </div>
    )
}

export default RightSidebar