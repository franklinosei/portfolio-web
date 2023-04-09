import React from "react";
import { useNavigate } from "react-router-dom";
import { amberColor } from "../../utilities/config";



export default function ProfileComponent() {

    const navigate = useNavigate()
  
    return (
        <div>
       
            <div className="flex justify-center">
            <button onClick={() => navigate("/")}>
                <svg className="h-16 w-16"  id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 205.09 137.95">
                    <polygon fill={amberColor} points="155.77 0 110.46 0 110.46 31.8 126.01 31.8 92.79 110.46 65.42 31.8 82.35 31.8 82.35 0 0 0 0 31.8 19.52 31.8 65.42 137.95 102.14 137.95 146.35 31.8 155.77 31.8 155.77 0" />
                    <path fill={amberColor} d="M175.77,79.3c-16.19,0-29.32,13.13-29.32,29.32s13.13,29.32,29.32,29.32,29.32-13.13,29.32-29.32-13.13-29.32-29.32-29.32Z" />
                </svg>
                </button>
            </div>
            <div className="flex flex-col align-center py-2 bg-slate-900 sidebar-profile">
                <h4 className="">Franklin Osei</h4>

                <h3 className="">SWE | Data Scientist</h3>
            </div>
       
        </div>
    )
}