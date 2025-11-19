import { useEffect, useState } from "react";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import TeamsCards from "@/components/shared/TeamsCards";
import { projectInfo, teamMembers } from "@/components/jsondata/index";
import AboutInfo from "@/components/shared/AboutInfo";
import ProjectShowCase from "@/components/shared/ProjectShowCase";
import ContactInfo from "@/components/shared/ContactInfo";
import FinisherHeaderComponent from "@/components/style/FinisherHeaderComponent";

function App() {
  const arr = ['Build', 'design', 'redesign', 'optimize', 'systemize'];
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 1850);
    return () => clearInterval(interval);
  }, [arr.length]);

  return (
    <main>
      <NavBar />
      <div className="w-full center flex-col">
        <FinisherHeaderComponent />
        
        {/* Home Section */}
        <section id="home" className="hero w-full h-[450px] md:h-[500px] center flex-col gap-4">
          <h1 className="text-[28px] md:text-4xl lg:text-6xl capitalize text-center font-sans">Transforming Your Vision
            <br></br> into a
            <span className="uppercase font-medium md:font-semibold font-serif"> Digital Presence</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl center flex-col lg:flex-row gap-4">
            <span>we help you</span>
            <span className="relative text-4xl uppercase bg-accent text-text rounded-full h-10 overflow-hidden px-4">
              <span
                className="relative top-0 left-0 transition-transform duration-700 ease-in-out flex flex-col items-center"
                style={{ transform: `translateY(-${index * 2.5}rem)` }}
              >
                {arr.map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </span>
            </span>
            <span>your website</span>
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="h-full w-full center justify-start flex-col text-text">
          <AboutInfo />
          <div className="center flex-col">
            <h2 className="uppercase text-xl font-medium pt-4 pb-12">team members</h2>
            <TeamsCards members={teamMembers} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full center flex-col gap-4 pt-24 text-text">
          <h2 className="text-4xl font-bold">Our Creations</h2>
          <ProjectShowCase projectInfo={projectInfo} />
          <ProjectShowCase projectInfo={projectInfo} />
        </section>

        {/* Contact Section */}
        <section id="contact" className='w-full center flex-col gap-4 py-24'>

        <ContactInfo />
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default App
