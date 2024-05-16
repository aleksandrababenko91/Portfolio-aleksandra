import HeroSection from '../components/HeroSection/HeroSection';
import HistorySection from '../components/HistorySection/HistorySection';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import CVSection from '../components/CVSection/CVSection';
import ToolsSection from '../components/ToolsSection/ToolsSection';



export default function Home() {

  return(
    <main>
      <HeroSection />
      <HistorySection />
      <ProjectSection />
      <CVSection /> 
      <ToolsSection />
    </main>
  )
}