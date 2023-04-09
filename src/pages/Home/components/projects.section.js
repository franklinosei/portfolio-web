import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../../../common/components/project.card";
import ProjectShimmer from "../../../common/components/projects.shimmer";
import SectionHeader from "../../../common/components/section.header";
import { useDispatch, useSelector } from 'react-redux'
import { getAllProjects } from "../../../utilities/handlers/projects.handler";



export default function HomeProjectSection() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)

    const { projects } = useSelector((state) => state.projectsData)

    async function getProjects() {
        setIsLoading(true)

       let res = await getAllProjects({ dispatch: dispatch })

        setIsLoading(!res)

    }

    useEffect(() => {
        getProjects()
    }, [])







    return (
        <div>
            <SectionHeader titleText={"My Projects"} />


            <section className="projects__section__cards grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-3 pt-6 min-w-[100%]">

                {isLoading ?


                    <>
                        <ProjectShimmer />
                        <ProjectShimmer />
                        <ProjectShimmer />
                        <ProjectShimmer />
                        <ProjectShimmer />
                        <ProjectShimmer />
                        <ProjectShimmer />
                        <ProjectShimmer />
                    </>

                    : projects.slice(0, 6).map(project => {

                        return <ProjectCard project={project} />
                    }

                    )
                }



            </section>

            <div className="flex justify-center mt-8 text-amber-400">
                <button onClick={() => navigate("/projects")} className="p-2 hover:text-black
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-amber-400 duration-300 border-b-2 border-b-amber-400
                ">View more</button>
            </div>

        </div>
    )
}