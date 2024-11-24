"use Server"
import AvailableExams from "@/components/AvailableExams"
import Banner from "@/components/Banner"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Herosection from "@/components/HeroSection"
import Menu from "@/components/Menu"
import { Testimonials } from "@/components/Testimonials"

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Menu />
      <Herosection />
      <AvailableExams />
      <Features />
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  )
}





