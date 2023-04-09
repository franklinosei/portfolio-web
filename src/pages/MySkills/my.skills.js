import React from 'react'
import ProgressBar from '../../common/components/progress.bar'
import SectionHeader from '../../common/components/section.header'
import { motion } from 'framer-motion';


function MySkills() {
    return (

        <section className='flex flex-col md:flex-row pt-[80px] px-4 lg:pt-8 skills__wrapper min-w-[100%] max-w-[100%] flex-wrap'>

            <div className='pl-0 md:pl-8 min-w-[100%] max-w-[100%] md:min-w-[50%] md:max-w-[50%]'>
                <SectionHeader titleText={"Hey there!"} />

                <div className="pr-8 pt-6">
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg font-medium leading-relaxed text-gray-400"
                    >
                        I am a driven software engineer based in Ghana with a Bachelor's degree in Computer Science. With experience in both software engineering and machine learning, I have honed my skills in developing scalable, robust, and highly available systems.
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg font-medium leading-relaxed text-gray-400 mt-4"
                    >
                        I take pride in my ability to design and build efficient systems that meet the needs of businesses and organizations. My passion for technology drives me to stay current with industry trends and to continuously improve my skills.
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg font-medium leading-relaxed text-gray-400 mt-4"
                    >
                        I am excited to bring my expertise to your organization and help drive success through technology.
                    </motion.p>
                </div>
            </div>

            <div className='min-w-[100%] max-w-[100%] md:min-w-[50%] md:max-w-[50%] mb-8'>
                <div className='mt-8 md:mt-0'>
                    {/* section header */}
                    <div>
                        <h6 className='text-amber-400 text-2xl'>Machine Learning</h6>
                    </div>

                    {/* section body */}
                    <div className='text-white text-sm pt-2'>

                        <div className='mb-4'>
                            <h6 className='pb-2 text-gray-400'>Python</h6>
                            <ProgressBar progress={95} barColor={"bg-gradient-to-r from-[#ffde57] to-[#4584b6]"} barHeight={"h-[3px]"} />
                        </div>

                        <div className='mb-4'>
                            <h6 className='pb-2 text-gray-400'>Computer Vision(Tensorflow)</h6>
                            <ProgressBar progress={95} barColor={"bg-gradient-to-r from-[#FFA800] to-[#FF6F00]"} barHeight={"h-[3px]"} />
                        </div>

                        <div className='mb-4'>
                            <h6 className='pb-2 text-gray-400'>NLP(Spacy/Tensorflow)</h6>
                            <ProgressBar progress={95} barColor={"bg-gradient-to-r from-[#077fa6] to-[#FF6F00]"} barHeight={"h-[3px]"} />
                        </div>

                        <div className='mb-4'>
                            <h6 className='pb-2 text-gray-400'>Deep Learning(Pytorch/Tensorflow)</h6>
                            <ProgressBar progress={95} barColor={"bg-gradient-to-r from-[#de3412] to-[#FF6F00]"} barHeight={"h-[3px]"} />
                        </div>

                    </div>

                </div>
                <div className='mt-8'>
                    {/* section header */}
                    <div>
                        <h6 className='text-amber-400 text-2xl'>Mobile & Frontend</h6>
                    </div>

                    {/* section body */}
                    <div className='text-white text-sm pt-2'>

                        <div className='mb-4'>
                            <h6 className='pb-2 text-gray-400'>Flutter(Dart)</h6>
                            <ProgressBar progress={95} barColor={"bg-gradient-to-r from-[#42A5F5] to-[#57c7d4]"} barHeight={"h-[3px]"} />
                        </div>

                        <div className='mb-4'>
                            <h6 className='pb-2 text-gray-400'>React.js(Javascript)</h6>
                            <ProgressBar progress={95} barColor={"bg-gradient-to-r from-[#61DBFB] to-[#61DBFB]"} barHeight={"h-[3px]"} />
                        </div>

                        <div className='mb-4'>
                            <h6 className='pb-2 text-gray-400'>HMTL/CSS/Javascript</h6>
                            <ProgressBar progress={95} barColor={"bg-gradient-to-r from-[#e34c26] to-[#264de4]"} barHeight={"h-[3px]"} />
                        </div>

                    </div>

                </div>
                <div className='mt-8'>
                    {/* section header */}
                    <div>
                        <h6 className='text-amber-400 text-2xl'>Backend & DevOps</h6>
                    </div>

                    {/* section body */}
                    <div className='text-white text-sm pt-2'>

                        <div className='mb-4'>
                            <h6 className='pb-2 text-gray-400'>Golang(Gin-gonic)</h6>
                            <ProgressBar progress={95} barHeight={"h-[3px]"} barColor={"bg-gradient-to-r from-[#29beb0] to-[#29beb0]"} />
                        </div>

                        <div className='mb-4'>
                            <h6 className='pb-2 text-gray-400'>FastAPI</h6>
                            <ProgressBar progress={95} barHeight={"h-[3px]"} barColor={"bg-gradient-to-r from-[#05998b] to-[#05998b]"} />
                        </div>

                        <div className='mb-4'>
                            <h6 className='pb-2 text-gray-400'>Docker</h6>
                            <ProgressBar progress={95} barHeight={"h-[3px]"} barColor={"bg-gradient-to-r from-[#0db7ed] to-[#384d54]"} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default MySkills