import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { genProjectCover } from '../../utilities/config';
import ProjectStack from './project.stack';
import ProjectFeature from './project.feature';
import ProjectImages from './project.images';
import { formatProjectDate } from '../../utilities/convert.proj.date';

function ProjectDetailsModal(props) {

  return (
    <>

      <Transition appear show={props.isOpen} as={Fragment}>

        <Dialog as="div" className="relative z-150" onClose={props.onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />

          </Transition.Child>

          <div className="fixed inset-0 overflow-y-scroll">



            <div className="flex min-h-full items-center justify-center p-4 text-center">


              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >

                <Dialog.Panel className="mt-12 lg:mt-0 min-w-[50%] max-w-[50%] min-h-screen bg-[#242430] transform overflow-hidden text-left align-middle shadow-xl transition-all">

                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 h-[400px] bg-cover bg-center"

                    style={{ backgroundImage: `url(${props.project.projectCoverImage.length > 1 ? props.project.projectCoverImage : genProjectCover})` }}

                  >
                    <button onClick={props.onClose} className='text-black z-10 self-right float-right'>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="#FFC107" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                    </button>

                  </Dialog.Title>

                  <Dialog.Description>
                    <div className='p-8 bg-[#242430]'>
                      <div className='flex justify-between'>
                        <div>
                          <h3 className='text-white font-semibold text-xl'>{props.project.projectName}</h3>
                          <p className='text-sm text-white rounded-xl px-2 w-max bg-blue-800 mt-1'>{props.project.projectCategory}</p>
                        </div>



                        <div className='flex justify-center'>

                          {props.project.projectViewLink ?


                            <a href={props.project.projectViewLink} target={"_blank"} className='mr-3 text-white text-sm flex flex-row hover:shadow-amber-500 hover:shadow-md bg-amber-400 px-2 py-[7px] rounded-xl h-max'>
                              <p className='self-center'>View</p>
                              <span className='self-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                              </span>
                            </a>

                            : <></>}

                          {
                            props.project.projectGithubLink ?


                              <a href={props.project.projectGithubLink} target={"_blank"} className='text-white bg-black px-2 py-1 rounded-xl hover:shadow-amber-500 hover:shadow-md h-max'>
                                <span className='mr-1 text-sm'>Github</span>
                                <GitHubIcon />
                              </a>
                              :
                              <></>

                          }

                        </div>
                      </div>



                      <div className='flex flex-col mt-4'>
                        <div className='grid grid-cols-2 text-white'>
                          <h3>Created By: <span className='text-gray-400'>iamdveloper</span></h3>

                          <h3>Client: <span className='text-gray-400'>{ props.project.projectClient}</span> </h3>
                       
                          <h3>Start: <span className='text-gray-400'>{formatProjectDate(props.project.projectStartDate)}</span> </h3>
                          <h3>End: <span className='text-gray-400'>{formatProjectDate(props.project.projectEndDate)}</span></h3>
                        </div>

                      </div>

                      <div className='flex flex-col md:flex-row'>

                        <div className='mt-4 md:mr-12'>
                          <h3 className='font-semibold text-md text-white'>Tech-Stack</h3>
                          <ul className='list-inside grid grid-cols-1'>
                            {/* {
                              props.project.projectStack.map((stack) => {
                                return <ProjectStack stack={stack} />
                              })
                            } */}

                            { props.project.projectStack ?
                              props.project.projectStack.map(stack => {
                                return <ProjectStack stack={stack} />
                              }) 
                              : <></>
                            }
                        
                      
                          </ul>
                        </div>




                        <div className='mt-4'>
                          <h3 className='font-semibold text-md text-white'>Features</h3>

                          <ul className=''>

                          { props.project.projectFeatures ?
                              props.project.projectFeatures.map(feature => {
                                return <ProjectFeature feature={feature} />
                              }) 
                              : <></>
                            }
                           

                          </ul>
                        </div>


                      </div>



{/* images */}

<div className='mt-4'>
  <ProjectImages images={props.project.projectImages} />
</div>


                    </div>
                  </Dialog.Description>

                </Dialog.Panel>

              </Transition.Child>
            </div>
          </div>

        </Dialog>
      </Transition>
    </>
  )
}

export default ProjectDetailsModal