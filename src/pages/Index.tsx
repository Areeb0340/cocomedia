
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
   
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <ProcessSection />
      <FAQSection />
    
      
    </div>
  );
};

export default Index;
