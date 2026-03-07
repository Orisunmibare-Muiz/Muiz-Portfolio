import React from 'react'

export default function ExperimentFutureSection() {
    return (
        <>
            <section className="relative bg-linear-to-br from-[#0a192f] via-[#0f2747] to-[#375983] text-white py-24 px-6 md:px-20 overflow-hidden">

                {/* <!-- Subtle Background Glow --> */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* <!-- LEFT CONTENT --> */}
                    <div className='max-w-7xl'>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Exploring the Future of Web
                            <span className="text-red-500">Development</span>
                        </h2>

                        <div className="w-20 h-1 bg-red-500 mt-4 mb-8"></div>

                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            I actively explore emerging technologies and experimental UI patterns
                            to stay ahead of industry trends and engineer forward-thinking digital experiences.
                        </p>

                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✔</span>
                                Advanced animations and micro-interactions
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✔</span>
                                Data visualization & real-time dashboards
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✔</span>
                                AI-assisted user experiences
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1">✔</span>
                                Immersive layouts & motion-driven storytelling
                            </li>
                        </ul>
                    </div>

                    {/* <!-- RIGHT VISUAL --> */}
                    <div className="relative flex justify-center max-w-7xl">

                        {/* <!-- Glass Card --> */}
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 w-full max-w-md shadow-2xl">

                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-2xl rounded-full"></div>

                            <h3 className="text-xl font-semibold mb-4 text-white">
                                Innovation Lab
                            </h3>

                            <div className="space-y-4">
                                <div className="bg-white/10 rounded-lg p-4">
                                    <p className="text-sm text-gray-300">AI Interface Prototype</p>
                                </div>
                                <div className="bg-white/10 rounded-lg p-4">
                                    <p className="text-sm text-gray-300">Real-time Analytics Dashboard</p>
                                </div>
                                <div className="bg-white/10 rounded-lg p-4">
                                    <p className="text-sm text-gray-300">Motion-Based Story UI</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
