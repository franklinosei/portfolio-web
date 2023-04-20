import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { convertDate } from "../../utilities/convertBlogDate";
import { Link } from "react-router-dom";


export default function BlogCard(props) {

    const [ref, inView] = useInView({ triggerOnce: true });
    const y = useMotionValue(0);
    const opacity = useTransform(y, [-100, 0, 100], [0, 1, 0]);

    return (

        <Link to={`/blog/${props.blog.id}` } state={{ blog: props.blog }}>
            
        <motion.div
            ref={ref}
            className="overflow-hidden hover:shadow-md hover:shadow-amber-400"
            style={{ y, opacity }}
            animate={{ y: inView ? 0 : 100 }}
            transition={{ duration: 1 }}
        >
            
            <div className="shadow-2xl shadow-amber-400/150  
                            "
                        
                            >
                {/* cover image */}
                <div className="bg-cover h-[250px] transition ease-in-out delay-100 hover:scale-110 duration-300" style={{ backgroundImage: `url(${props.blog.blogCoverImage})` }}>

                </div>

                {/* content */}
                <div className='p-4 bg-[#1E1E28]'>

                    {/* Blog category */}
                    <div className='mb-4 flex justify-between'>
                        <p className='text-gray-300 text-sm'>{convertDate(props.blog.publishedAt)}</p>
                        <p className='text-sm text-white rounded-xl px-2 w-max bg-blue-800'>{props.blog.blogSeries}</p>
                    </div>

                    {/* Blog title */}
                    <div>
                        <h3 className='text-gray-300 text-lg font-semibold'>{props.blog.title}</h3>
                    </div>

                    {/* Blog description text */}
                    <div className='mt-2'>
                        <p className='text-gray-300 text-sm truncate'>
                            {props.blog.blogHeading}
                        </p>
                    </div>
                </div>
            </div>
          

        </motion.div>
        </Link>
    )
}