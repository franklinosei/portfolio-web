import React from 'react'

function ProjectImages(props) {
  return (
    <div className='mt-4'>
        {
            props.images ?
             props.images.map((image) => {
                return <img src={image} className="mt-4 h-[500px]" />
            }) 
            : <></>
        }
    </div>
  )
}

export default ProjectImages