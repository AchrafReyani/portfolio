type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

export function Section({id, children}: SectionProps) {
  return (
    <div className="bg-bg-light dark:bg-bg-dark w-full">
      <section
        id={id}
        className="
          min-h-screen
          px-6 md:px-20 py-16
          max-w-7xl mx-auto
          flex flex-col md:flex-row items-center
          text-text-light dark:text-text-dark
        "
      >
        {children}
      </section>
    </div>
  );
}
