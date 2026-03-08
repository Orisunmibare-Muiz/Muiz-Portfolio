import React from 'react'
import { FaGithub, FaRocket } from 'react-icons/fa'
import { CaseCardData } from '../Data/CaseCardData'

// Individual Card component to display project details
const Card = ({ props }) => {
    return (
        <div
            className="rounded-lg shadow-lg overflow-hidden relative bg-cover bg-center hover:scale-[1.04] ease-in-out duration-300"
            style={{ backgroundImage: `url(${props.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="bg-linear-to-b from-[#ffffff00] to-[#04072d] bg-opacity-90 p-6 pt-30">
                <div className='bg-radial-[at_50%_90%] from-[#07011587] to-[#ffffff00] to-80% max-w-75 p-4 md:p-0 rounded-lg'>
                    <h2 className="text-xl text-white font-bold mb-2 border-b border-white max-w-75">{props.title}</h2>
                    <p className="text-sm text-white mb-2">{props.description}</p>
                    <p className="text-xs text-white  mb-1"><span className='font-bold text-[13px]'>Role:</span> {props.role}</p>
                    <p className="text-xs text-white  mb-1"><span className='font-bold text-[13px]'>Status:</span> {props.status}</p>
                    <p className="text-xs text-white  mb-1"><span className='font-bold text-[13px]'>Solution:</span> {props.solution}</p>
                    <p className="text-xs text-white  mb-3"><span className='font-bold text-[13px]'>Result:</span> {props.result}</p>
                </div>
                <div className="flex gap-2 flex-wrap mb-4">
                    {props.techStack.map((stack, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm bg-white rounded-md"
                        >
                            {stack}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3">
                    <a
                        href={props.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-white text-[#0d0444] px-3 py-1 rounded hover:bg-blue-700 hover:text-white transition"
                    >
                        <FaGithub /> View Code
                    </a>
                    <a
                        href={props.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                        <FaRocket /> Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};


// Main CaseCard component to render all project cards
export default function CaseCard() {
    return (
        <>
            <div id='#project' className='md:py-20'>
                <h2 className='text-4xl md:text-5xl font-bold leading-tight text-center mb-12'>
                    RESULT SHOWCASE / <span className='text-red-600'>IMPACT STORIES</span> / CASE STUDIES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-6">
                    {CaseCardData.map((props, index) => (
                        <Card key={index} props={props} />
                    ))}
                </div>
            </div>
        </>
    )
}
