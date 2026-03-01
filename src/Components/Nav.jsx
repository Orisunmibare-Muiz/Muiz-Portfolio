import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-dark/80 backdrop-blur border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-20 h-16 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-2 text-white font-bold text-lg">
                        <span className="w-3 h-3 bg-primary rounded-sm" />
                        MyPortfolio
                    </div>

                    {/* DESKTOP LINKS */}
                    <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
                        <Link to="/" className="hover:text-white transition cursor-pointer">Home</Link>
                        <Link to="/" className="hover:text-white transition cursor-pointer">Case Studies</Link>
                        <Link to="/" className="hover:text-primary transition cursor-pointer">Skills</Link>
                        <HashLink
                            to="#about"
                            scroll={el => {
                                const y = el.getBoundingClientRect().top + window.pageYOffset;
                                const start = window.pageYOffset;
                                const duration = 500; // 0.5 seconds
                                let startTime = null;

                                function animateScroll(currentTime) {
                                    if (!startTime) startTime = currentTime;
                                    const timeElapsed = currentTime - startTime;
                                    const progress = Math.min(timeElapsed / duration, 1);

                                    window.scrollTo(0, start + (y - start) * progress);

                                    if (progress < 1) {
                                        requestAnimationFrame(animateScroll);
                                    }
                                }

                                requestAnimationFrame(animateScroll);
                            }}
                        >
                            About
                        </HashLink>

                        <Link to="/" className="hover:text-white transition cursor-pointer">Contact</Link>
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
                        <Link to="/" onClick={() => setOpen(false)} className="hover:text-white">Case Studies</Link>
                        <Link to="/" onClick={() => setOpen(false)} className="hover:text-primary">Skills</Link>
                        <Link to="/about" onClick={() => setOpen(false)} className="hover:text-white">About</Link>
                        <Link to="/" onClick={() => setOpen(false)} className="hover:text-white">Contact</Link>

                        <button className="w-full bg-accent py-2 rounded-md text-white font-semibold mt-4">
                            Hire Me
                        </button>
                    </div>
                )}
            </nav>
        </>
    )
}
