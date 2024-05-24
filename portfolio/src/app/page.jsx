import HeroSection from '../components/HeroSection/HeroSection';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import CVSection from '../components/CVSection/CVSection';
import ToolsSection from '../components/ToolsSection/ToolsSection';


export default function Home() {

  return(
    <main>
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <CVSection /> 
      <ToolsSection />
    </main>
  )
}
