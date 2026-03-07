import React from 'react'
import { FaGithub, FaRocket } from 'react-icons/fa'
import { CaseCardData } from '../Data/CaseCardData'

// Individual Card component to display project details
const Card = ({ props }) => {
    return (
        <div
            className="rounded-lg shadow-lg overflow-hidden relative bg-cover bg-center"
            style={{ backgroundImage: `url(${props.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="bg-linear-to-b from-[#ffffff00] to-black bg-opacity-90 p-6 pt-30">
                <div className='bg-radial-[at_50%_49%] from-[#0000003d] to-[#ffffff00] to-70% max-w-75 p-4 rounded-lg'>
                    <h2 className="text-xl text-white font-bold mb-2 border-b border-white max-w-75">{props.title}</h2>
                    <p className="text-sm text-white mb-2">{props.description}</p>
                    <p className="text-xs text-white  mb-1">Role: {props.role}</p>
                    <p className="text-xs text-white  mb-3">Status: {props.status}</p>
                </div>
                <div className="flex gap-3">
                    <a
                        href={props.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {CaseCardData.map((props, index) => (
                    <Card key={index} props={props} />
                ))}
            </div>

        </>
    )
}
