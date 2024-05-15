import HeroSection from '@/src/components/HeroSection/HeroSection';
import HistorySection from '@/src/components/HistorySection/HistorySection';
import CVSection from '@/src/components/CVSection/CVSection';
import ProjectSection from '@/src/components/ProjectSection/ProjectSection';
import ToolsSection from '@/src/components/ToolsSection/ToolsSection';

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