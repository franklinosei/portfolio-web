import React from 'react'

function ProjectFeature({ feature }) {
    return (
        <li className='flex flex-row mt-[4px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFC107" className="w-4 h-4 self-center mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
            <p className='text-gray-400 text-sm'>{feature}</p>
        </li>
    )
}

export default ProjectFeature