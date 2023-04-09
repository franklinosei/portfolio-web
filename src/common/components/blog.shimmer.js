import React from 'react'

function BlogShimmer() {
  return (
    <div className='h-max bg-[#242430] mt-2 shadow-md'>
      <div className='animate-pulse'>

        <div className='mb-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="#2e383e" className="w-full h-48 bg-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>

        <div className='px-4 pb-4'>


        <div className='w-36 bg-gray-700 rounded h-2 mb-4 mt-4'></div>
        <div className='w-full bg-gray-700 rounded h-4 mb-1'></div>
        <div className='w-[80%] bg-gray-700 rounded h-4 mb-4'></div>

        <div className='mt-4'>
          <div className='mt-2 w-full bg-gray-700 rounded h-2'></div>
          <div className='mt-2 w-full bg-gray-700 rounded h-2'></div>
          <div className='mt-2 w-[50%] bg-gray-700 rounded h-2'></div>
        </div>

        </div>



      </div>
    </div>
  )
}

export default BlogShimmer