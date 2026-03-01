import React from 'react'
import Hero from "/Images/Hero.jpg"
import Hero1 from "/Images/Hero1.jpg"
import Hero4 from "/Images/Hero4.jpg"
import myPic from "/Images/my-pic.jpg"

import {
    FaReact,
    FaCode,
    FaPaintBrush,
    FaGitAlt,
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaWhatsapp,
    FaHtml5,
    FaCss3Alt,
    FaJs,
} from "react-icons/fa";

export default function About() {

    const SkillData = [

        {
            name: "UI/UX Design",
            description:
                "Blending visual design principles with functional code for accessible products.",
            icon: <FaPaintBrush className="text-3xl text-pink-500 mb-4" />,
        },
        {
            name: "HTML5",
            description: "Structuring clean, semantic, and accessible web content.",
            icon: <FaHtml5 className="text-3xl text-orange-600 mb-4" />
        },
        {
            name: "CSS3",
            description: "Styling responsive and visually engaging user interfaces.",
            icon: <FaCss3Alt className="text-3xl text-blue-600 mb-4" />
        },
        {
            name: "JavaScript",
            description: "Adding complex logic, interactivity, and dynamic features to web pages.",
            icon: <FaJs className="text-3xl text-yellow-500 mb-4" />
        },
        {
            name: "React",
            description:
                "Building dynamic, state-driven interfaces and reusable components.",
            icon: <FaReact className="text-3xl text-blue-500 mb-4" />,
        },
        {
            name: "Git & Version Control",
            description:
                "Managing code changes and collaborating efficiently on team projects.",
            icon: <FaGitAlt className="text-3xl text-orange-500 mb-4" />,
        },
    ];


    return (
        <>
            {/* // pt-20 gives it that nice breathing room at the top we talked about earlier */}
            <section className="bg-[#ffffff] text-gray-900 py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">

                    {/* Main Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">The Coder Behind the Innovation</h2>
                        <div className="w-24 h-1 bg-red-600 mx-auto rounded"></div>
                    </div>

                    {/* Top Section: Image and Bio */}
                    <div className="flex flex-col lg:flex-row gap-12 items-start mb-24">

                        {/* Left: Professional Image */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src={myPic}
                                alt="Developer working at desk"
                                className="w-full h-150 rounded-2xl shadow-lg object-cover aspect-square"
                            />
                        </div>

                        {/* Right: Text Content Grid */}
                        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-3">My Journey</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    I am a frontend developer driven by curiosity and precision. I enjoy crafting interfaces where clean design meets solid engineering—turning complex ideas into fast, intuitive, and scalable digital products.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-3">Technical Craft</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    My approach combines analytical thinking with creative problem-solving. Whether I am building a full-blown e-commerce platform or mapping complex data, I ensure the code is as clean as the final user interface.
                                </p>
                            </div>
                            <div className="md:col-span-2 mt-4">
                                <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-3">Core Philosophy</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    I believe the best products don't just work well; they feel right. By bridging the gap between graphic design and frontend development, I build experiences that are corporate-premium, trustworthy, and highly functional.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section: Skills Grid */}
                    <div className="mb-20">
                        <h3 className="text-xl font-bold mb-8 text-gray-800 uppercase tracking-wide">Skills & Tech Stack</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* The mapping function we discussed previously! */}
                            {SkillData.map((skill, index) => (
                                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                                    {skill.icon}
                                    <h4 className="text-lg font-bold mb-2">{skill.name}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section: Strong CTA and Contact */}
                    <div className="flex flex-col items-center">
                        <button className="px-10 py-4 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300">
                            Let's Connect
                        </button>

                        {/* Social Icons using react-icons */}
                        <div className="flex gap-6 mt-8">
                            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors text-2xl"><FaGithub /></a>
                            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors text-2xl"><FaLinkedin /></a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors text-2xl"><FaEnvelope /></a>
                            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-2xl"><FaWhatsapp /></a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
