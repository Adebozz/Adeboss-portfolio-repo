import Image from "next/image";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import ProjectsSection from "../../components/ProjectsSection";
import ContactSection from "../../components/ContactSection";
import Skills from "../../components/SkillsSection";

export default function Home() {
  return (
     <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
       
   
         {/* Sections */}
         <section id="home" className="min-h-max flex items-center justify-center">
           <HomeSection />
         </section>
   
         <section id="about" className="min-h-[80] flex items-center justify-center py-20">
           <AboutSection />
         </section>
   
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
           <Skills />
         </section>

         <section id="projects" className="min-h-[80] flex items-center justify-center py-20">
           <ProjectsSection />
         </section>
   
         <section id="contact" className="min-h-screen flex items-center justify-center py-20">
           <ContactSection />
         </section>
   
        
       </main>
  );
}
