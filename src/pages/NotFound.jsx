import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center bg-petal px-6 py-36 text-brand dark:bg-brand dark:text-petal">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand/60 dark:text-cocoa-soft">
          Error 404
        </p>
        <h1 className="mb-6 font-serif text-4xl md:text-6xl">Page not found</h1>
        <p className="mx-auto mb-10 max-w-xl text-brand/70 dark:text-cocoa-soft">
          The page you requested may have moved or no longer exists. Explore our services or return to the homepage.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="bg-brand px-8 py-4 text-xs font-bold uppercase tracking-widest text-petal transition-opacity hover:opacity-85 dark:bg-petal dark:text-brand"
          >
            Return home
          </Link>
          <Link
            to="/services"
            className="border border-brand/40 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:border-brand dark:border-petal/40 dark:hover:border-petal"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
