import React, { useState } from 'react'
import { FaLinkedin, FaEnvelope, FaCopy } from 'react-icons/fa';

export default function Contact() {

    const [copy, setCopy] = useState(false);
    const numberToCopy = "+2348088626755";

    const handleCopy = () => {
        navigator.clipboard.writeText(numberToCopy).then(() => {
            setCopy(true);
            setTimeout(() => setCopy(false), 2000); // Reset copy state after 2 seconds and keeps UI CLean
        })
    }



    return (
        <>
            <div class="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-lg md:p-16">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-red-500 inline-block">
                    Contact Me
                </h2>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Card Section  */}
                    <div class="space-y-6">
                        <div class="p-6 rounded-lg shadow-md bg-gray-50">
                            <div className='hover:text-red-400'>
                                <div className='flex flex-row '>
                                    <div className="text-[25px] md:mr-1">
                                        <FaEnvelope />
                                    </div>
                                    <h3 class="text-lg font-semibold text-gray-700">Email</h3>
                                </div>
                                <a href="mailto:orismuiz2003@gmail.com" target="_blank" rel="noopener noreferrer" class="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                    Send Email
                                </a>
                            </div>
                        </div>
                        <div class="p-6 rounded-lg shadow-md bg-gray-50">
                            <h3 class="text-lg font-semibold text-gray-700">Phone</h3>
                            <p class="text-gray-600">{numberToCopy} <button onClick={handleCopy} title={copy ? "Copied!" : "Copy"}><FaCopy /></button></p>
                            {copy && <p class="text-green-600 text-sm mt-2">Copied to clipboard!</p>}
                        </div>
                        <div class="p-6 rounded-lg shadow-md bg-gray-50">
                            <div className='hover:text-blue-400'>
                                <div className='flex flex-row '> <div className="text-[25px]"><FaLinkedin /></div> <h3 class="text-lg font-semibold text-gray-700">LinkedIn</h3></div>
                                <a href="https://linkedin.com/in/muiz-orisunmibare-b397892a8" target="_blank" rel="noopener noreferrer" class="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                    View Profile
                                </a>
                            </div>

                        </div>
                        <div class="p-6 rounded-lg shadow-md bg-gray-50">
                            <h3 class="text-lg font-semibold text-gray-700">Twitter</h3>
                            <a href="#" class="inline-block mt-2 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600">
                                @yourtwitter
                            </a>
                        </div>
                    </div>
                    {/* Contact Form Section  */}
                    <div class="p-6 rounded-lg shadow-md bg-gray-50">
                        <h3 class="text-lg font-semibold text-gray-700 mb-4">Contact Form</h3>
                        <form class="space-y-4">
                            <input type="text" placeholder="Name" class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" />
                            <input type="email" placeholder="Email" class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500" />
                            <textarea placeholder="Message" rows="4" class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
                            <button type="submit" class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
