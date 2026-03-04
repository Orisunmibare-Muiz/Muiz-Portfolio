import React from 'react'
import HeroSection from '../Components/HeroSection'
import Nav from '../Components/Nav'
import About from '../Components/About'
import ExperimentFutureSection from '../Components/ExperimentFutureSection'

export default function Home() {
    return (
        <div className="scroll-smooth">
            <Nav />
            <HeroSection />
            <About />
            <ExperimentFutureSection />
        </div>
    )
}
