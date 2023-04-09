// import React from "react";
// import { useInView } from "react-intersection-observer";
// import { motion, useMotionValue, useTransform } from "framer-motion";


// export default function ProjectCard(props) {

//     const [ref, inView] = useInView({ triggerOnce: true });
//     const y = useMotionValue(0);
//     const opacity = useTransform(y, [-100, 0, 100], [0, 1, 0]);

//     return (
//         <motion.div
//             ref={ref}
//             className="overflow-hidden"
//             style={{ y, opacity }}
//             animate={{ y: inView ? 0 : 100 }}
//             transition={{ duration: 0.7 }}
//         >
//             <div className="z-10 bg-[url(https://unsplash.com/photos/kdHOdg1Bi3U/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc1NjE0NjQ3&force=true&w=640)] min-w-[200px] h-[300px] bg-[#242430] p-4 shadow-2xl shadow-amber-400/150  
//                             transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-102 duration-300 post__card text-amber-400">
//                 Project Card
//             </div>
            
//         </motion.div>
//     )
// }