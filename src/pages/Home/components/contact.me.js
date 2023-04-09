import React from "react";
import SectionHeader from "../../../common/components/section.header";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import ContactForm from "../../../common/components/contact.form";


export default function ContactMe() {
    return (
        <div className="">

            <SectionHeader titleText={"Contact Me"} />
            <section className="contact__form mt-8">

                <div className="flex flex-col-reverse md:flex-row justify-evenly">

                    {/* form side */}
                    <ContactForm />



                    <div className="pt-8 w-[100%] md:w-[80%] md:pl-8 md:pt-0">
                        {/* Socials side */}

                        <div className="mb-4">
                            <img src="https://unsplash.com/photos/V5vqWC9gyEU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc1NDI4NDkw&force=true&w=640"/>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-amber-400 mb-1">
                                    Have a project in mind?
                                </h3>

                                <h3 className="text-xl text-amber-400 mb-2">
                                    I would love to help.
                                </h3>
                            </div>




                            <div className="flex flex-row mb-4 mt-6 justify-center">
                                <a
                                    href="https://twitter.com/iamdveloper?t=8ULTGF00kLF3KXppTscEhA&s=09"
                                    target="_blank"
                                    className="w-10 h-10 mb-4 rounded-full mr-4 bg-blue-500 text-white text-center flex items-center justify-center"
                                >
                                    <TwitterIcon /> 
                                </a>
                                <a
                                    href="https://linkedin.com/in/franklin-osei-258b7210a"
                                    target="_blank"
                                    className="w-10 h-10 mb-4 rounded-full mr-4 bg-blue-700 text-white text-center flex items-center justify-center"
                                >
                                    <LinkedInIcon /> 
                                </a>
                               
                                <a
                                    href="https://github.com/franklinosei"
                                    target="_blank"
                                    className="w-10 h-10 rounded-full mr-4 bg-black mb-4 text-white text-center flex items-center justify-center"
                                >
                                    <GithubIcon />
                                </a>
                                
                            </div>
                           
                        </div>
                    </div>


                </div>


            </section>

        </div>
    )
}