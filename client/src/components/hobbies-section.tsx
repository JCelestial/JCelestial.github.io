import { hobbiesData } from "@/lib/portfolio-data";

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl lg:text-4xl text-foreground mb-4">What do I do outside of my computer?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I like to categorize my hobbies into 3 different buckets: Creative, Physical, and Intellectual.
          </p>
        </div>

        {hobbiesData.map((section, index) => (
          <div key={section.id} className={index < hobbiesData.length - 1 ? "mb-16" : ""}>
            <h3 className="font-semibold text-2xl text-foreground mb-6 text-center">{section.title}</h3>
            <div className={`grid gap-4 ${section.gridCols}`}>
              {section.images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  src={image.src}
                  alt={image.alt}
                  // className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-48 object-cover border border-border"
                  className="rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-h-64 object-contain bg-muted border border-border"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
