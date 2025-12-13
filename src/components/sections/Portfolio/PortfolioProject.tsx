import {ProjectImage} from './ProjectImage';
import {ProjectDetails} from './ProjectDetails';

type Project = {
  name: string;
  image: string;
  url: string;
  githubUrl: string;
  bullets: string[];
};

type Props = {
  project: Project;
};

export function PortfolioProject({project}: Props) {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl">
      <ProjectImage
        image={project.image}
        name={project.name}
        url={project.url}
      />

      <ProjectDetails
        name={project.name}
        bullets={project.bullets}
        githubUrl={project.githubUrl}
      />
    </div>
  );
}
