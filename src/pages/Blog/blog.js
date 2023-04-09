import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../common/components/blog.card";
import BlogShimmer from "../../common/components/blog.shimmer";
import { getAllBlogs } from "../../utilities/handlers/blogs.handler";
import StringCarousel from "./components/categories";


function Blog() {

  const dispatch = useDispatch()
  
  const { selectedCategory } = useSelector((state) => state.blogsData)

  const [isLoading, setIsLoading] = useState(false)



  async function getBlogs() {



    setIsLoading(true)

    let res = await getAllBlogs({ dispatch: dispatch, selectedCategory: selectedCategory })

    setIsLoading(!res)

  }


  useEffect(() => {
    
    getBlogs()

  },[])

  const { blogs, filteredBlogs } = useSelector((state) => state.blogsData)


  return (
    <section className="flex p-4 flex-col relative mt-16 sm:mt-12">


      <div className="mb-6 min-w-full max-w-full h-12 sm:h-8 border-b-[1px] border-b-gray-800 text-neutral-500">

        <StringCarousel />

      </div>

      <div className="w-[100%] md:w-[100%] lg:w-full sm:w-[100%] mt-4 md:mt-0 mb-8 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-flow-row gap-4 overflox-y-scroll">
        {
          isLoading ?
            <>
              <BlogShimmer />
              <BlogShimmer />
              <BlogShimmer />
              <BlogShimmer />
              <BlogShimmer />
              <BlogShimmer />
              <BlogShimmer />
              <BlogShimmer />
              <BlogShimmer />


            </>

            :

            filteredBlogs.map(blog => {
              return <BlogCard blog={blog} />
            })
        }
      </div>
    </section>
  )
}

export default Blog