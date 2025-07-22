export default function AboutSection() {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-bold text-4xl lg:text-5xl text-foreground leading-tight">
              My Little Slice of the World &<br />
              <span className="text-green-400">Mindless Musings</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Always been an oddball and an unorthodox journey through life to boot, but I think that's what makes the
              wild outcomes of life so interesting.  
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                Get In Touch
              </button>
              {/* <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-green-500 text-green-400 px-6 py-3 rounded-lg font-medium hover:bg-green-500/20 transition-colors"
              >
                View Work
              </button> */}
            </div>
          </div>
          <div className="relative max-w-md mx-auto">
            <img
              src="/personal-pic.png"
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                {/* <span className="text-sm font-medium text-foreground">Open to Work</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
