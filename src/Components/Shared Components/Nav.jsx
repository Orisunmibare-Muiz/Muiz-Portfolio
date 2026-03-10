import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

export default function Nav() {
    const [open, setOpen] = useState(false);
    const topReload = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // 📝format - window.scrollTo({ horizontal(x), vertical(y) })
        window.location.href = "/"; // 📝format - window.location.href = "url"
    }

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-0 h-16 flex items-center justify-between">

                    {/* LOGO */}
                    <div onClick={topReload} className=" text-white font-bold text-lg cursor-pointer">
                        <span className="w-3 h-3 bg-primary rounded-sm" />
                        MyPortfolio
                    </div>

                    {/* DESKTOP LINKS */}
                    <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
                        <Link to="/" className="hover:text-white transition cursor-pointer">Home</Link>
                        <HashLink to="#case-studies" className="hover:text-white transition cursor-pointer">Case Studies</HashLink>
                        <HashLink to="#project" className="hover:text-primary transition cursor-pointer">Project</HashLink>
                        <HashLink to="#about" className="hover:text-white transition cursor-pointer">About</HashLink>
                        <HashLink to="/contact" className="hover:text-white transition cursor-pointer">Contact</HashLink>
                    </ul>

                    {/* CTA - Call to action */}
                    <button className="hidden md:block md:text-red-600 md:bg-white md:border bg-accent px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-700 hover:text-white transition">
                        Hire Me
                    </button>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-white text-2xl"
                    >
                        ☰
                    </button>
                </div>

                {/* MOBILE MENU */}
                {open && (
                    <div className="md:hidden bg-dark border-t border-white/10 px-6 py-6 space-y-4 text-gray-300">
                        <Link to="/" onClick={() => setOpen(false)} className="hover:text-white">Home</Link>
                        <HashLink to="#case-studies" onClick={() => setOpen(false)} className="hover:text-white">Case Studies</HashLink>
                        <HashLink to="#project" onClick={() => setOpen(false)} className="hover:text-primary">Project</HashLink>
                        <HashLink to="#about" onClick={() => setOpen(false)} className="hover:text-white">About</HashLink>
                        <HashLink to="#contact" onClick={() => setOpen(false)} className="hover:text-white">Contact</HashLink>

                        <button className="w-full bg-accent py-2 rounded-md text-white font-semibold mt-4">
                            Hire Me
                        </button>
                    </div>
                )}
            </nav>
        </>
    )
}
