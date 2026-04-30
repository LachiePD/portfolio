import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo, LinkedInLogo } from "./icons";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Passionate about building applications that solve real problems
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Creative, detail-oriented software engineer specialising in
              full-stack development with the PERN stack (PostgreSQL, Express.js,
              React, Node.js). I build scalable web applications with a focus on
              clean, maintainable code and thoughtful user experiences. Currently
              deepening my expertise in System Design, Cloud Technologies, and the
              growing role of AI in software development — and always open to
              collaborating on interesting projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full" asChild>
                <a
                  href="https://github.com/LachiePD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo />
                  View GitHub
                </a>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <a
                  href="https://www.linkedin.com/in/lachie-sims"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInLogo />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/headshot.jpeg" alt="Lachie Sims" className="object-cover" fill />
    </div>
  </div>
);

export default About;
