import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "WIAG Customer Tracker",
      description:
        "Full-stack issue tracking system enabling users to create customer issues and assign them to team members for resolution. Improves visibility and accountability by tracking issues through defined stages rather than losing them in communication gaps.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "PostgreSQL", "Express.js"],
      githubUrl: "https://github.com/LachiePD",
    },
    {
      title: "Sticky Brain",
      description:
        "Personal note-taking app with user authentication. Users can log in to their profile and manage a list of notes — creating, editing, and deleting them all within their own account.",
      image: "/Sticky Brain.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Express.js"],
      githubUrl: "https://github.com/LachiePD",
    },
    {
      title: "Euro Kick Currency Tracker",
      description:
        "Real-time currency tracker built with server-side rendering and open-source API integration, delivering fast and accurate exchange rate data with minimal client-side overhead.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "React", "SSR", "REST API"],
      githubUrl: "https://github.com/LachiePD",
    },
    {
      title: "StarGazers APOD App",
      description:
        "Astronomy Picture of the Day web app built for the Los Angeles StarGazers Society. Integrates NASA's APOD API to surface daily space imagery and descriptions in a clean, accessible interface.",
      image: "/placeholder.svg",
      technologies: ["JavaScript", "NASA API", "HTML", "CSS"],
      githubUrl: "https://github.com/LachiePD",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
