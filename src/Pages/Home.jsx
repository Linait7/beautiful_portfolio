import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import Navbar from "../components/Navbar"
import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
export const Home = () => {
    return <div className ="min-h-screen bg-background overflow-x-hidden" >
            <ThemeToggle />
            <StarBackground />
                <Navbar />
                <main>
                    <HeroSection/>
                    <AboutSection />
                </main>
    </div>
}