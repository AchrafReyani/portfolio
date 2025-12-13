import Image from 'next/image';
import {FaExternalLinkAlt} from 'react-icons/fa';

type Props = {
  image: string;
  name: string;
  url: string;
};

export function ProjectImage({image, name, url}: Props) {
  return (
    <div className="relative w-full md:w-1/2 rounded-lg shadow-card-light dark:shadow-card-dark overflow-hidden group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full relative aspect-[1899/1045]"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-overlay-light dark:bg-overlay-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-text-light dark:text-text-dark text-lg font-semibold flex items-center gap-2">
            View Project <FaExternalLinkAlt />
          </span>
        </div>
      </a>
    </div>
  );
}
