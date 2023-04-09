import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogCard from "../../../common/components/blog.card";
import BlogShimmer from "../../../common/components/blog.shimmer";
import { getAllBlogs } from "../../../utilities/handlers/blogs.handler";


export default function PersonalBlogSection() {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(true)

    const { blogs } = useSelector((state) => state.blogsData)

    async function getBlogs() {
        setIsLoading(true)

        let res = await getAllBlogs({ dispatch: dispatch })

        setIsLoading(!res)

    }

    useEffect(() => {
        getBlogs()
    }, [getAllBlogs])


    return (
        <div>
            {/* <SectionHeader titleText={"My Projects"} /> */}

            <p className="text-amber-400 text-lg text-center">Checkout some of my articles</p>


            <section className="projects__section__cards grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-3 pt-6 min-w-[100%]">

                {
                    isLoading ?

                        <>
                            <BlogShimmer />
                            <BlogShimmer />
                            <BlogShimmer />
                            <BlogShimmer />
                            <BlogShimmer />
                            <BlogShimmer />
                        </>

                        : blogs.slice(0, 9).map((blog) => {
                            return <BlogCard blog={blog} />
                        })
                }




            </section>

            <div className="flex justify-center mt-8 text-amber-400">
                <button onClick={() => navigate("/blog")} className="p-2 hover:text-black
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-amber-400 duration-300 border-b-2 border-b-amber-400
                ">View all articles</button>
            </div>

        </div>
    )
}