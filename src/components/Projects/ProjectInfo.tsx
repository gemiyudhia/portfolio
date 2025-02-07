import { ExternalLink, Github } from "lucide-react";
import { Button } from "../ui/button";
import { Project } from "./types";

type ProjectInfoProps = Omit<Project, "images">;

export const ProjectInfo = ({
  title,
  description,
  demoLink,
  repoLink,
}: ProjectInfoProps) => (
  <div className="p-4 bg-primary-foreground">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-sm text-gray-600 mb-3">{description}</p>
    <div className="flex space-x-2">
      <Button size="sm" asChild className="bg-slate-800">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-4 w-4" />
          Demo
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-4 w-4" />
          Repo
        </a>
      </Button>
    </div>
  </div>
);
