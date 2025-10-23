"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Experience } from "@/components/Experience"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/reload
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    
    // Disable browser's scroll restoration
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual"
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

