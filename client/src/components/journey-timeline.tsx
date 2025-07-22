import { useEffect, useRef } from "react";
import { Building2, Rocket, Code, Hammer } from "lucide-react";
import { timelineData } from "@/lib/portfolio-data";

export default function JourneyTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    };

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll(".timeline-item");
      timelineItems.forEach(item => {
        timelineObserver.observe(item);
      });
    }

    return () => timelineObserver.disconnect();
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case "company": return <Building2 className="w-5 h-5" />;
      case "startup": return <Rocket className="w-5 h-5" />;
      case "agency": return <Code className="w-5 h-5" />;
      case "project": return <Hammer className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  const getColorClasses = (color: "sage" | "lavender" | "peach" | "yellow") => {
    switch (color) {
      case "sage":
        return {
          dot: "bg-green-500",
          icon: "green-100 text-green-700",
          company: "text-green-400",
          tag: "green-100 text-green-700"
        };
      case "lavender":
        return {
          dot: "bg-green-600",
          icon: "green-200 text-green-700",
          company: "text-green-400",
          tag: "green-200 text-green-700"
        };
      case "peach":
        return {
          dot: "bg-green-400",
          icon: "green-200 text-green-700",
          company: "text-green-300",
          tag: "green-200 text-green-700"
        };
      case "yellow":
        return {
          dot: "bg-yellow-400",
          icon: "bg-yellow-100 text-yellow-700",
          company: "text-yellow-700",
          tag: "bg-yellow-100 text-yellow-700"
        };
    }
  };

  return (
    <section id="journey" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl lg:text-4xl text-foreground mb-4">My Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional growth, key milestones, contributions, and the experiences that started from humble beginnings.
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>
          
          {timelineData.map((item, index) => {
            const colors = getColorClasses(item.color);
            const isEven = index % 2 === 0;
            
            return (
              <div key={item.id} className="timeline-item relative flex items-center mb-12 md:mb-20">
                <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 ${colors.dot} rounded-full border-4 border-white shadow-lg z-10`}></div>
                
                <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
                  <div className={`bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow ${item.isConstruction ? "bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-2 border-dashed border-yellow-500" : ""}`}>
                    <div className={`flex items-center mb-3 ${isEven ? "md:justify-end" : ""}`}>
                      <div className={`w-10 h-10 ${colors.icon} rounded-lg flex items-center justify-center ${isEven ? "mr-3 md:mr-0 md:ml-3 md:order-2" : "mr-3"}`}>
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={item.company + " logo"}
                            className="w-7 h-7 object-contain"
                            style={{ maxHeight: 28, maxWidth: 28 }}
                          />
                        ) : (
                          getIcon(item.type)
                        )}
                      </div>
                      <div className={isEven ? "md:order-1" : ""}>
                        <h3 className="font-semibold text-xl text-foreground">{item.title}</h3>
                        <p className={`${colors.company} font-medium`}>{item.company}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-3 ${isEven ? "md:justify-end" : ""}`}>
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`${colors.tag} px-3 py-1 rounded-full text-xs font-medium`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
