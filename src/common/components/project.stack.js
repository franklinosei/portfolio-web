import React from 'react'

function ProjectStack(props) {
  return (
    <li className='flex flex-row'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFC107" className="w-4 h-4 self-center mr-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
    </svg>

    <span className='text-gray-400'>{props.stack}</span>
  </li>
  )
}

export default ProjectStack