import { Link } from 'react-router-dom';

const ProjectPageNav = () => (
  <nav
    className="flex flex-wrap justify-between items-center gap-4 mt-16 pt-8 border-t border-border dark:border-darkborder"
    aria-label="Page navigation"
  >
    <div className="flex flex-wrap gap-3">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-bg-surface dark:bg-darksurface text-ink-secondary dark:text-darkink-secondary font-semibold rounded-lg border border-border dark:border-darkborder hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        Back to Portfolio
      </Link>
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 px-6 py-3 bg-bg-surface dark:bg-darksurface text-ink-secondary dark:text-darkink-secondary font-semibold rounded-lg border border-border dark:border-darkborder hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        All Projects
      </Link>
      <Link
        to="/#contact"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        Get in Touch
      </Link>
    </div>
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="inline-flex items-center gap-2 px-6 py-3 bg-bg-surface dark:bg-darksurface text-ink-secondary dark:text-darkink-secondary font-semibold rounded-lg border border-border dark:border-darkborder hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      Back to Top
    </button>
  </nav>
);

export default ProjectPageNav;
