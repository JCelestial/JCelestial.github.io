import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "jarvisterrel.celestial@gmail.com",
      href: "mailto:jarvisterrel.celestial@gmail.com",
      description: "Drop me a line if you want to know more about my work (or send me coffee beans)"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@JCelestial",
      href: "https://github.com/JCelestial",
      description: "Check out my open source work"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Jarvis Celestial",
      href: "https://www.linkedin.com/in/jarviscelestial/",
      description: "Let's connect!"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl lg:text-4xl text-foreground mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-6 rounded-2xl border border-border hover:border-green-400/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-400/20 rounded-xl mb-4 group-hover:bg-green-400/30 transition-colors">
                <method.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-1">{method.label}</h3>
              <p className="text-green-400 font-medium mb-2">{method.value}</p>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              <div className="flex items-center text-green-400 text-sm group-hover:text-green-300 transition-colors">
                <span>Connect</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </div>
            </a>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <div className="bg-card border border-border p-8 rounded-2xl">
            <h3 className="font-semibold text-xl text-foreground mb-4">
              Ready to start a project?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm currently available for freelance work and new opportunities.
            </p>
            <a
              href="mailto:hello@alexchen.dev?subject=Project Inquiry"
              className="inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}