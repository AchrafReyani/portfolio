import { ViewSourceButton } from './ViewSourceButton';

type Props = {
  name: string;
  bullets: string[];
  githubUrl: string;
};

export function ProjectDetails({ name, bullets, githubUrl }: Props) {

  return (
    <div className="flex flex-col justify-start w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
      <h3 className="text-2xl font-semibold">{name}</h3>

      <ul className="list-disc list-inside space-y-1">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>

      <div className="mt-4">
        <ViewSourceButton githubUrl={githubUrl} />
      </div>
    </div>
  );
}
