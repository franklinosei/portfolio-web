import React from 'react'

function BlogCard(props) {
    return (
        <div className='shadow-2xl'>
            {/* cover image */}
            <div className='bg-cover h-[200px] bg-[url(https://unsplash.com/photos/o0Qqw21-0NI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjJ8fGJsb2d8ZW58MHx8fHwxNjc2Mjc5MDgz&force=true&w=640)]'>

            </div>

            {/* content */}
            <div className='p-4 bg-[#1E1E28]'>

                {/* Blog category */}
                <div className='mb-4 flex justify-between'>
                    <p className='text-gray-300 text-sm'>Jun, 23, 2023</p>
                    <p className='text-sm text-white rounded-xl px-2 w-max bg-blue-800'>Machine Learning</p>
                </div>

                {/* Blog title */}
                <div>
                    <h3 className='text-gray-300 text-lg font-semibold'>Blog Heading Blog Heading</h3>
                </div>

                {/* Blog description text */}
                <div className='mt-2'>
                    <p className='text-gray-300 text-sm truncate'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum nec lectus eget dignissim. Etiam at suscipit eros. Cras sed leo sed leo dignissim interdum eu ac tortor
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard