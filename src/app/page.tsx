import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import FeatureSection from "./_components/FeatureSection";
import CardProject from "./_components/CardProject";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Services from "./_components/Services";
import AnimationSection from "./_components/AnimationSection";
AnimationSection;

export default function Home() {
  return (
    <main className="bg-[#161615]">
      
        <HeroSection />
      

      <AnimationSection delay={0.05}>
        <FeatureSection />
      </AnimationSection>

      <AnimationSection delay={0.05}>
        <CardProject />
      </AnimationSection>

      <AnimationSection delay={0.05}>
        <About />
      </AnimationSection>

      <AnimationSection delay={0.05}>
        <Skills />
      </AnimationSection>

      <AnimationSection delay={0.05}>
        <Services />
      </AnimationSection>
    </main>
  );
}
