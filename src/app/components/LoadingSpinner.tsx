import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-[#2a416b]">
            <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 border-solid h-12 w-12"></div>
        </div>
    )
}

export default LoadingSpinner