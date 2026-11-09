import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import ProjectsSection from "../../components/ProjectsSection";
import ContactSection from "../../components/ContactSection";
import Skills from "../../components/SkillsSection";
import ExperienceSection from "../../components/ExperienceSection";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <HomeSection />
      <AboutSection />
      <Skills />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
