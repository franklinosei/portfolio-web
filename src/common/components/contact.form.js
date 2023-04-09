import React, { useState } from "react";
import { contactFormSchema } from "../../utilities/validationSchemas";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { sendEmail } from "../../utilities/handlers/contact.handler";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export default function ContactForm(props) {

    const navigate = useNavigate()

    const [isLoading, setLoading] = useState(false)

    async function sendEmailHandler(contactData) {
        setLoading(true);

        // handler here
        let res = await sendEmail({ data: contactData, navigate: navigate })

        setLoading(false);

        reset()

        if((res >= 200) && (res < 300)) {
            toast.success("👍 message sent successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        } else {
        
            toast.warning("🥲 Coundn't send message", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }

      
    }


    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        resolver: yupResolver(contactFormSchema),
    });


    return (
        <div className="p-6 rounded-lg shadow-xl bg-[#1E1E28] text-gray-400 w-[100%] md:w-[80%]">
            <form>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="name">
                        Name

                        <input
                            type="text"
                            id="name"
                            {...register("name")}
                            className="text-sm w-full p-2 rounded-lg bg-[#242430] focus:outline-none focus:shadow-md focus:shadow-amber-400"
                            placeholder="What's your name"
                        />


                        {errors?.name ? (
                            <span className="text-red-400 text-sm">{errors?.name.message?.toString()}</span>
                        ) : (
                            <></>
                        )}
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="email">
                        Email

                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="text-sm w-full p-2 rounded-lg bg-[#242430]  focus:outline-none focus:shadow-md focus:shadow-amber-400"
                            placeholder="What's your email"
                        />

                        {errors?.email ? (
                            <span className="text-red-400 text-sm">{errors?.email.message?.toString()}</span>
                        ) : (
                            <></>
                        )}

                    </label>
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="message">
                        Message

                        <textarea
                            id="message"
                            {...register("message")}
                            className="text-sm w-full p-2 rounded-lg min-h-[150px] bg-[#242430]  focus:outline-none focus:shadow-md focus:shadow-amber-400"
                            placeholder="Let it flow..."
                        />

                        {errors?.message ? (
                            <span className="text-red-400 text-sm">{errors?.message.message?.toString()}</span>
                        ) : (
                            <></>
                        )}
                    </label>
                </div>
                <div className="flex justify-end">

                    {isLoading ?
                        (
                            <button intent="disabled" disabled
                                className="flex flex-row self-center text-amber-400 border border-amber-400 px-4 py-2 max-w-[250px] min-w-[50px]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-spin mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>


                                Sending message
                            </button>
                        ) :

                        <button onClick={
                            handleSubmit(sendEmailHandler)  
                            } role={"submit"} type="button" className="bg-transparent hover:bg-amber-400 text-amber-400 font-semibold py-2 px-4 border border-amber-400 hover:text-[#1E1E28] rounded">
                            Send Message
                        </button>
                    }
                </div>

                <div>
                    <ToastContainer 
                    // bodyClassName={ () => "bg-amber-400 w-full p-0"}
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    theme="colored"
                    />
                </div>
            </form>
        </div>
    )

}