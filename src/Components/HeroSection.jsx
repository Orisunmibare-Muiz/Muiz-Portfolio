import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Hero1 from "/Images/Hero1.jpg"
import Hero from "/Images/Hero.jpg"
import Hero4 from "/Images/Hero4.jpg"
import Hero5 from "/Images/Hero5.jpg"

export default function HeroSection() {
    return (
        <>
            <section id='' className="min-h-screen bg-hero md:bg-center bg-no-repeat bg-cover text-white flex items-center px-6 md:px-38 md:bg-none" style={{
                backgroundImage: `url(${Hero1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="max-w-4xl space-y-6 ">
                    <h1 className="text-4xl md:text-8xl font-bold leading-tight">
                        Innovative{" "} <br />
                        <span className="text-red-600">Frontend</span>{" "} <br />
                        Developer
                    </h1>

                    <p className="text-white text-lg">
                        I design and engineer scalable, data-driven interfaces that help
                        startups and businesses convert users into customers.
                    </p>

                    <div className="flex gap-4">
                        <HashLink to="#project" className="bg-primary px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition cursor-pointer">
                                View My Work
                        </HashLink>
                        <button className="border border-accent text-accent px-6 py-3 rounded-md hover:bg-accent hover:text-white transition cursor-pointer">
                            Let’s Work Together
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
