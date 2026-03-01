import React from 'react'
import HeroSection from '../Components/HeroSection'
import Nav from '../Components/Nav'
import About from '../Components/About'

export default function Home() {
    return (
        <div className="scroll-smooth">
            <Nav />
            <HeroSection />
            <About />
        </div>
    )
}
