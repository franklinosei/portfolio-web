import React from "react";

export default function GenericBanner({title, subtitle, bannerClassName}) {

    const styles = "relative h-[40vh] md:h-[45vh] sm:h-[35vh] bg-cover bg-no-repeat bg-centeraspect-auto ";
    
    return (
        <div className={styles + bannerClassName}>
            <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
            <div className="relative pt-28 ml-8">
                <h1 className="text-amber-400 text-4xl md:text-6xl font-bold leading-tight mb-2">{title}</h1>
                <h1 className="text-amber-400 text-lg md:text-xl font-bold leading-tight mb-4 pr-4">{subtitle}</h1>
            </div>
        </div>
    )
}