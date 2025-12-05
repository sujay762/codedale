import Image from "next/image"

interface ProjectCard {
  id: number
  image: string
  testimonial: string
  clientName: string
  response: string
  avatar: string
  fullName: string
  title: string
  companyHighlight?: string
}

const projects: ProjectCard[] = [
  {
    id: 1,
    image: "/english-ai-learning-app-with-purple-background-car.jpg",
    testimonial:
      "CodeDale turned our vision into reality. Instant, personalized feedback changed student learning forever.",
    clientName: "Sujith Reddy Gopu",
    response: "Honored to drive lasting impact.",
    avatar: "/professional-indian-man-headshot.jpg",
    fullName: "Sujith Reddy Gopu",
    title: "Founder of",
    companyHighlight: "Fluent Pro",
  },
  {
    id: 2,
    image: "/project-management-dashboard-multiple-ui-screens-m.jpg",
    testimonial:
      "CodeDale met our most ambitious requirements. Their team became a trusted extension, not just a vendor.",
    clientName: "Abhishek",
    response: "Proud to be your trusted partner.",
    avatar: "/professional-indian-man-headshot-smiling.jpg",
    fullName: "Abhishek",
    title: "Senior Business Analyst at",
    companyHighlight: "Conquer",
  },
  {
    id: 3,
    image: "/3d-dark-textured-carbon-fiber-background-with-text.jpg",
    testimonial:
      "We imagined the extraordinary—a 3D immersive experience. CodeDale brought it to life with precision and creativity.",
    clientName: "Nino Gorbach",
    response: "Pushing boundaries is what we do",
    avatar: "/professional-woman-headshot.png",
    fullName: "Nino Gorbach",
    title: "COO,",
    companyHighlight: "ATH",
  },
  {
    id: 4,
    image: "/tfs-finserv-mobile-app-mockup-pink-coral-backgroun.jpg",
    testimonial: "We thought it was impossible. CodeDale made it possible and changed how we see tech partners.",
    clientName: "Narasimha Reddy",
    response: "Grateful to set new standards together.",
    avatar: "/professional-indian-businessman-headshot.jpg",
    fullName: "Narasimha Reddy",
    title: "Founder & CEO of",
    companyHighlight: "TFS",
  },
]

export function ProjectShowcase() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/30"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Project by ${project.clientName}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Testimonial Content */}
              <div className="p-5">
                {/* Client Quote */}
                <p className="text-[15px] leading-relaxed text-foreground mb-2">{project.testimonial}</p>

                {/* Client Name (small) */}
                <p className="text-sm text-muted-foreground mb-4">{project.clientName}</p>

                {/* Response Banner */}
                <div className="bg-[#f5f5f5] rounded-lg px-4 py-3 flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-foreground">{project.response}</p>
                  <span className="text-xs text-muted-foreground">CodeDale</span>
                </div>

                {/* Client Info Footer */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={project.avatar || "/placeholder.svg"}
                      alt={project.fullName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{project.fullName}</p>
                    <p className="text-xs text-muted-foreground">
                      {project.title}{" "}
                      {project.companyHighlight && <span className="text-[#0066FF]">{project.companyHighlight}</span>}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
