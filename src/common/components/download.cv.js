import React from "react";
import DownloadIcon from '@mui/icons-material/Download';


export default function DownloadCV() {
    return (
        <div className="hover:shadow-md hover:shadow-amber-400 p-2 rounded-xl flex flex-row justify-center content-evenly my-8 mx-2 downloadcv cursor-pointer">
            <div className="animate-bounce text-sm"><DownloadIcon /></div>
            <p className="text-sm">Download CV</p>
        </div>
    )
}