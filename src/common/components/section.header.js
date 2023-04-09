import React from 'react';
import ProgressBar from './progress.bar';



export default function SectionHeader({titleText}) {
    return (
        <div className='section__header text-3xl sm:text-3xl md:text-3xl text-amber-400 font-extrabold w-[100%] md:w-[40%]'>
            <span>{titleText}</span>
            <ProgressBar progress={80}/>
        </div>
    )
}