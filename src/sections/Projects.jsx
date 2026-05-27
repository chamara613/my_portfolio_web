import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  // {
  //   title: "Fintech Dashboard",
  //   description:
  //     "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
  //   image: "/projects/project1.png",
  //   tags: ["React", "Typescript", "NodeJS"],
  //   link: "#",
  //   github: "#",
  // },
  {
    title: "BPC Computer E-Commerce Website",
    description:
      "A modern MERN stack web application developed for BPC Computer to manage products, customer interactions, and digital business operations with a responsive user experience.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://bpc-computers-frontend.vercel.app/",
    github: "https://github.com/chamara613?tab=repositories",
  },
  {
    title: "Sri Lanka Escapes - Travel & Tourism Platform",
    description:
      "A responsive travel and tourism web application designed to promote Sri Lanka’s travel destinations and tourism experiences. Built with a modern user interface, the platform enhances user engagement through smooth navigation, interactive design, and optimized performance.",
    image: "/projects/project3.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lovable AI"],
    link: "https://sri-lanka-escapes-phi.vercel.app/",
    github: "https://github.com/chamara613/sri-lanka-escapes.git",
  },
  {
    title: "BPC Hotel Booking System",
    description:
      "A mini hotel booking system developed to streamline room reservation and customer management processes. The system includes features such as user authentication, room browsing, booking management, and responsive web design to improve user experience.",
    image: "/projects/project4.png",
    tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "#",
    github: "https://github.com/chamara613/hotel-booking-system.git",
  },
  {
    title: "University Learning Management System (LMS)",
    description:
      "A full-featured University Learning Management System (LMS) built to manage academic operations, including course enrollment, assignment submission, grading, and student performance tracking. The system features secure authentication, role-based dashboards for administrators and students, and a responsive interface for efficient learning management.",
    image: "/projects/project5.png",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    link: "#",
    github: "https://github.com/chamara613/University_LMS.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
