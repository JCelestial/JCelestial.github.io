import Navigation from "@/components/navigation";
import AboutSection from "@/components/about-section";
import JourneyTimeline from "@/components/journey-timeline";
import ProjectsSection from "@/components/projects-section";
import HobbiesSection from "@/components/hobbies-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="bg-background font-sans text-foreground leading-relaxed">
      <Navigation />
      <AboutSection />
      <JourneyTimeline />
      {/* <ProjectsSection /> */}
      <HobbiesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-muted/20 border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2019 Jarvis Celestial. Built with caffeine and some cat hair.</p>
        </div>
      </footer>
    </div>
  );
}
