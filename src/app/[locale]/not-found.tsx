import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center justify-center py-24 text-center">
      <p className="text-sm uppercase tracking-widest text-muted-light dark:text-muted-dark">
        404 error
      </p>

      <h1 className="mt-4 text-4xl font-bold text-text-light dark:text-text-dark">
        Page not found
      </h1>

      <p className="mt-4 max-w-md text-muted-light dark:text-muted-dark">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="
          mt-8 inline-flex items-center justify-center rounded-lg
          bg-primary-light px-6 py-3 font-medium text-white
          shadow-card-light transition hover:opacity-90
          dark:bg-primary-dark dark:shadow-card-dark
        "
      >
        Back to home
      </Link>
    </section>
  );
}
