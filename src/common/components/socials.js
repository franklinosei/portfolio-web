import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';



export default function Socials() {
    return (
        <div className="flex flex-row socials py-2 shadow-xl">
            <a className="text-white hover:shadow-md hover:shadow-amber-400 rounded-xl" href="https://github.com/franklinosei" target={"_blank"}>
                <GitHubIcon />
            </a>

            <a href="https://linkedin.com/in/franklin-osei-258b7210a" target={"_blank"}>
                <button className="text-sky-600 hover:shadow-md hover:shadow-amber-400"><LinkedInIcon /></button>
            </a>
            <a href="https://twitter.com/iamdveloper?t=8ULTGF00kLF3KXppTscEhA&s=09" target={"_blank"}>
                <button className="text-sky-600 hover:shadow-md hover:shadow-amber-400"><TwitterIcon /></button>
            </a>
        </div>
    )
}