import React from 'react'
import Nav from '../Components/Shared Components/Nav'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import ExperimentFutureSection from '../Components/ExperimentFutureSection'
import Footer from '../Components/Shared Components/Footer'

export default function Home() {
    return (
        <div className="scroll-smooth">
            <Nav />
            <HeroSection />
            <About />
            <ExperimentFutureSection />
            <Footer />
        </div>
    )
}
