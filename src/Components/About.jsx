import React from 'react'
import Hero from "../../public/Images/Hero.jpg"
import Hero1 from "../../public/Images/Hero1.jpg"
import Hero4 from "../../public/Images/Hero4.jpg"

export default function About() {
    return (
        <>
            <section id="about" className="bg-hero md:bg-radial-[at_100%_100%] from-white to-[#06062e] to-50% py-20 px-6 md:px-20">
                <div className="max-w-2xl outline-white outline-1">
                    <h2 className="text-3xl font-bold text-dark mb-6 text-white">About Me</h2>

                    <p className="text-white mb-4">
                        I’m a frontend developer passionate about building interfaces that are
                        visually refined and technically solid.
                    </p>

                    <p className="text-white">
                        My focus is on performance-first development, scalable UI architecture,
                        and data-driven decision making.
                    </p>
                    <button className="bg-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition text-red-600 font-bolder mt-7" >
                        let's Connect <span className='text-red-600 font-bold'>&gt;&gt;</span>
                    </button>
                </div>
            </section>
        </>
    )
}
