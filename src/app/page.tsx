import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={inter.className}>
        <Navbar />
        <Hero />
        <Socials />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
