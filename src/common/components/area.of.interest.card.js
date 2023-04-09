import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform } from "framer-motion";


export default function AoFCard(props) {

    const [ref, inView] = useInView({ triggerOnce: true });
    const y = useMotionValue(0);
    const opacity = useTransform(y, [-100, 0, 100], [0, 1, 0]);

    return (

        <motion.div
            ref={ref}
            className="overflow-hidden shadow-2xl hover:shadow-md hover:shadow-gray-700"
            style={{ y, opacity }}
            animate={{ y: inView ? 0 : 100 }}
            transition={{ duration: 1 }}
        >
            <div className="min-w-[200px] h-[350px] bg-[#242430] p-4
                 post__card text-gray-400 flex flex-col">
                <div className="w-12 h-12 self-center mt-2">
                   {props.icon}
                </div>


                <h3 className="font-bold text-xl text-center mt-6">{props.title}</h3>

                <p className="text-center mt-4">{props.body}</p>

            </div>

        </motion.div>
    )
}