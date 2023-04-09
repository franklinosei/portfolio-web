import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navigate = useNavigate()
    return (
        <div className="relative h-[50vh] md:h-[40vh] lg:h-[55vh] sm:h-[35vh] 

        bg-cover bg-no-repeat bg-center banner aspect-auto">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative pt-28 md:pt-32 lg:pt-28 ml-4 md:ml-8">
                <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-2">Franklin Osei</h1>
                <h1 className="text-white text-xl md:text-2xl font-bold leading-tight mb-4">Software Engineer | Data Scientist</h1>

                <button onClick={() => navigate("/projects")} className="rounded shadow-xl bg-amber-400 text-sm p-3
                  transition ease-in-out delay-100 hover:-translate-y-0.5 hover:scale-104 hover:bg-amber-400 duration-200 ">
                    View projects</button>
            </div>
        </div>
    )
}