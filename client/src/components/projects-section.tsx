import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/lib/portfolio-data";

export default function ProjectsSection() {
  const getColorClasses = (color: "sage" | "lavender" | "peach") => {
    switch (color) {
      case "sage":
        return {
          tag: "green-100 text-green-700",
          link: "text-muted-foreground hover:text-green-400"
        };
      case "lavender":
        return {
          tag: "green-200 text-green-700",
          link: "text-muted-foreground hover:text-green-400"
        };
      case "peach":
        return {
          tag: "green-300 text-green-700",
          link: "text-muted-foreground hover:text-green-400"
        };
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl lg:text-4xl text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my best work, showcasing different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const colors = getColorClasses(project.color);

            return (
              <div
                key={project.id}
                className={
                  `bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-border` +
                  (project.isConstruction
                    ? " bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-2 border-dashed border-yellow-500"
                    : "")
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-xl text-foreground">{project.title}</h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className={colors.link + " transition-colors"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        className={colors.link + " transition-colors"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`${colors.tag} px-3 py-1 rounded-full text-xs font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
