import React, { useEffect } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import ContactForm from "../../common/components/contact.form";
import GenericBanner from "../../common/components/generic.banner";


export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div>
            <GenericBanner title={"Contact me"} subtitle={"Got a new idea? let's connect"} bannerClassName={"contact__banner"}/>
           
            <div className="p-4 md:p-8 sm:p-4 lg:p-8 mt-[-80px] md:mt-[-80px] sm:mt[-70px] relative flex flex-col md:flex-row">
                
                <ContactForm />

                <div className="flex flex-col justify-center bg-[#1E1E28]">
                    <div className="flex flex-col justify-center px-4 md:pl-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                            Have a project in mind?
                        </h3>

                        <h3 className="text-lg text-amber-400 mb-4">
                            You have the idea, I got the skills.
                        </h3>
                    </div>




                    <div className="flex flex-row mb-4 mt-8 justify-center">
                        <a
                            href="https://twitter.com/iamdveloper?t=8ULTGF00kLF3KXppTscEhA&s=09"
                            target="_blank"
                            className="w-10 h-10 mb-4 rounded-full mr-4 bg-blue-500 text-white text-center flex items-center justify-center hover:shadow-md hover:shadow-amber-400"
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            href="https://linkedin.com/in/franklin-osei-258b7210a"
                            target="_blank"
                            className="w-10 h-10 mb-4 rounded-full mr-4 bg-blue-700 text-white text-center flex items-center justify-center hover:shadow-md hover:shadow-amber-400"
                        >
                            <LinkedInIcon />
                        </a>

                        <a
                            href="https://github.com/franklinosei"
                            target="_blank"
                            className="w-10 h-10 rounded-full mr-4 bg-black mb-4 text-white text-center flex items-center justify-center hover:shadow-md hover:shadow-amber-400"
                        >
                            <GithubIcon />
                        </a>

                    </div>

                </div>
            </div>

        </div>
    )
}