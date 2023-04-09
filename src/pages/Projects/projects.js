import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GenericBanner from "../../common/components/generic.banner";
import ProjectCard from "../../common/components/project.card";
import ProjectShimmer from "../../common/components/projects.shimmer";
import { getAllProjects } from "../../utilities/handlers/projects.handler";


export default function Projects() {

    const dispatch = useDispatch()

    const { projects } = useSelector((state) => state.projectsData)

    const [isLoading, setIsLoading] = useState(true)

    async function getProjects() {

        // if (projects.length < 1) {
            setIsLoading(true)
            let res = await getAllProjects({ dispatch: dispatch })
            setIsLoading(!res)
        // }

    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <div className="pb-12">
            <GenericBanner title={"Projects"} subtitle={"Here are some projects I work on. Enjoy"} bannerClassName={"projects__banner"} />

            <section className="projects__section__cards grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-3 py-6 min-w-[100%] px-4">

                {
                    isLoading ?
                        <>
                            <ProjectShimmer />
                            <ProjectShimmer />
                            <ProjectShimmer />
                            <ProjectShimmer />
                            <ProjectShimmer />
                            <ProjectShimmer />
                            <ProjectShimmer />
                            <ProjectShimmer />
                        </> :

                        projects.map((project) => {
                            return <ProjectCard project={project} />
                        })
                }

            </section>
        </div>
    )
}