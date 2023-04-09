import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { genProjectCover } from "../../utilities/config";
import ProjectDetailsModal from "./project.details";


export default function ProjectCard(props) {

    const [ref, inView] = useInView({ triggerOnce: true });
    const y = useMotionValue(0);
    const opacity = useTransform(y, [-100, 0, 100], [0, 1, 0]);

    
  let [isOpen, setIsOpen] = useState(false)


  function closeModal() {
      setIsOpen(false)
      
  }

  function openModal() {
      setIsOpen(true)

  }


    return (
        <motion.div
            ref={ref}
            className="overflow-hidden hover:shadow-md hover:shadow-amber-400"
            style={{ y, opacity }}
            animate={{ y: inView ? 0 : 100 }}
            transition={{ duration: 0.7 }}
        >
            {/* <div className="z-10 bg-[url(https://unsplash.com/photos/kdHOdg1Bi3U/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc1NjE0NjQ3&force=true&w=640)] min-w-[200px] h-[300px] bg-[#242430] p-4 shadow-2xl shadow-amber-400/150  
                            transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-102 duration-300 post__card text-amber-400">
                Project Card
            </div> */}


            <div className="relative 
                            bg-cover bg-no-repeat bg-center aspect-auto

                            min-w-[200px] h-[250px] bg-[#242430] shadow-2xl shadow-amber-400/150  
                            transition ease-in-out delay-100 hover:scale-110 duration-300 post__card
                            " style={{ backgroundImage: `url(${props.project.projectCoverImage.length > 1 ? props.project.projectCoverImage  : genProjectCover})` }}>
               
                <div className="absolute inset-0 bg-gray-900 opacity-50 "></div>

              

                
              


                <div className="flex justify-center relative h-[100%] ">

                    <div className="z-10 flex justify-center items-center h-[100%] w-[100%]  project_middle__button ">

                        <button onClick={openModal} className="rounded-full items-center flex justify-center h-[100px] w-[100px] bg-amber-400 text-white text-sm">View Project</button>

                    </div>

                </div>

            </div>

            <p className="text-sm bg-[#1E1E28] px-2 mt-[-25px] absolute text-white text-center shadow-2xl">{props.project.projectName}</p>

            <ProjectDetailsModal project={props.project} isOpen={isOpen} onClose={closeModal}/>

        </motion.div>
    )
}