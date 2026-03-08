import React from 'react'
import Nav from '../Components/Shared Components/Nav'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import CaseStudy from '../Components/CaseStudy'
import Footer from '../Components/Shared Components/Footer'
import CaseCard from '../Components/CaseCard'

export default function Home() {
    return (
        <div className="scroll-smooth">
            <Nav />
            <HeroSection />
            <About />
            <CaseStudy />
            <CaseCard />
            <Footer />
        </div>
    )
}
