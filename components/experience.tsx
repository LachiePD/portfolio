import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import Image from "next/image";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
  logo,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center overflow-hidden">
            {logo ? (
              <Image src={logo} alt={company} width={36} height={36} className="object-contain" />
            ) : (
              <Building2 className="size-5 text-muted-foreground" />
            )}
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "100devs",
      period: "October 2025 — Present",
      description:
        "Collaborating with a team of developers to build modern, responsive full-stack web applications using best practices. Building semantically structured applications and applying agile methodologies like SCRUM for project management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "JavaScript", "TypeScript"],
      logo: "/100devsLogo.jpeg",
    },
    {
      title: "Full Stack Web Developer",
      company: "Big Think Consulting",
      period: "April 2026",
      description:
        "Developed a professional website for a cosmetic nurse training academy, enhancing brand presence and supporting course enquiries through improved design and usability.",
      technologies: ["React", "Next.js", "TailwindCSS", "JavaScript"],
      logo: "/Cosmetic-Nurse-Training-Academy-Icon-Logo-2.png",
    },
    {
      title: "Warehouse Operator",
      company: "Various",
      period: "January 2020 — June 2025",
      description:
        "Worked across multiple warehouse functions in dynamic, fast-paced environments. Developed strong attention to detail, structured problem-solving, and the ability to collaborate within team-based processes under time pressure — skills that translate directly into software engineering.",
      technologies: ["Team Collaboration", "Process Optimisation", "Attention to Detail"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
