import Image from 'next/image';

export function AboutImage() {
  return (
    <div className="hidden md:flex md:w-1/3 justify-center items-center">
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-text-light dark:border-text-dark shadow-lg">
        <Image
          src="/images/about.png"
          alt="My face"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
