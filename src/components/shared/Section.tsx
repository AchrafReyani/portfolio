type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  minHeight?: 'screen' | 'auto';
};

export function Section({id, children, className, minHeight = 'auto'}: SectionProps) {
  const minHeightClass = minHeight === 'screen' ? 'min-h-screen' : 'min-h-auto';
  
  return (
    <div className="bg-bg-light dark:bg-bg-dark w-full">
      <section
        id={id}
        className={`
          ${minHeightClass}
          px-6 md:px-20 py-16
          max-w-7xl mx-auto
          flex flex-col md:flex-row items-center
          text-text-light dark:text-text-dark
          ${className ?? ''}
        `}
      >
        {children}
      </section>
    </div>
  );
}
