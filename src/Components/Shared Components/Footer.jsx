import React from 'react'
import { FaWhatsapp, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {

        // Scroll to top function
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" }); // 📝format - window.scrollTo({ horizontal(x), vertical(y) })
        };

        return (
            <>
            <footer className="bg-gray-900 text-gray-300 px-6 py-12">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

                        {/* Identity */}
                        <div>
                            <h2 className="text-xl font-semibold text-white">
                                Orisunmibare Muiz Olamilekan
                            </h2>
                            <p className="mt-2 text-sm text-gray-400">
                                Frontend Developer building modern, responsive, and user-focused web experiences.
                            </p>

                            <p className="mt-4 text-green-400 text-sm">
                                ● Open to opportunities
                            </p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Contact</h3>

                            <p className="text-sm text-gray-400">
                                Email:
                                <a
                                    href="mailto:orismuiz2003@gmail.com"
                                    className="ml-1 text-gray-200 hover:text-white"
                                >
                                    orismuiz2003@gmail.com
                                </a>
                            </p>

                            <div className="flex gap-4 mt-4 text-xl">
                                <a
                                    href="https://wa.me/2348088626755"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-green-400"
                                >
                                    <FaWhatsapp />
                                </a>

                                <a
                                    href="https://linkedin.com/in/muiz-orisunmibare-b397892a8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400"
                                >
                                    <FaLinkedin />
                                </a>

                                <a
                                    href="https://www.instagram.com/muizorisunmibare"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-400"
                                >
                                    <FaInstagram />
                                </a>
                            </div>

                            <a
                                href="/file/Orisunmibare Muiz Resume.docx"
                                download
                                className="inline-block mt-4 text-sm bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                            >
                                Download Resume
                            </a>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-white font-semibold mb-3">Tech Stack</h3>

                            <div className="flex flex-wrap gap-2 text-sm">
                                <span className="bg-gray-800 px-3 py-1 rounded">React</span>
                                <span className="bg-gray-800 px-3 py-1 rounded">Tailwind</span>
                                <span className="bg-gray-800 px-3 py-1 rounded">JavaScript</span>
                                <span className="bg-gray-800 px-3 py-1 rounded">HTML</span>
                                <span className="bg-gray-800 px-3 py-1 rounded">CSS</span>
                                <span className="bg-gray-800 px-3 py-1 rounded">Git</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-800 mt-10 pt-6 flex justify-between items-center max-w-6xl mx-auto">

                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Orisunmibare Muiz Olamilekan. All rights reserved.
                        </p>

                        <button
                            onClick={scrollToTop}
                            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
                        >
                            <FaArrowUp />
                        </button>

                    </div>
                </footer>
            </>
        )
    } 