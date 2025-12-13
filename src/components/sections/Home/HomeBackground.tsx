type Props = {
  hero: React.ReactNode;
  scrollButton: React.ReactNode;
};

export function HomeBackground({hero, scrollButton}: Props) {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center relative flex flex-col justify-center items-center px-4 text-center"
      style={{backgroundImage: "url('/images/background.jpg')"}}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-bg-dark/50 dark:bg-bg-dark/50" />

      {/* Hero content */}
      <div className="relative z-10">
        {hero}
      </div>

      {/* Scroll button */}
      {scrollButton}
    </section>
  );
}
