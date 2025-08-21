import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Socials from "@/components/Socials"
import WorkExperience from "@/components/WorkExperience"
import Education from "@/components/Education"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <main className={`${inter.className} max-w-2xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <Navbar />
        <Hero />
        <Socials />
        <Education />
        <Projects />
        <WorkExperience />
        <Footer />
      </main>
    </>
  )
}
