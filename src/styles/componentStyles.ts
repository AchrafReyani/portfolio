/**
 * Reusable component styling constants
 * Update these to change styling across all components that use them
 */

// Button Styles
export const buttonPrimaryBase =
  'bg-primary-light text-text-light dark:bg-primary-dark dark:text-text-dark hover:bg-accent-light dark:hover:bg-accent-dark transition';

export const buttonPrimaryLarge = `${buttonPrimaryBase} inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-md shadow-md`;

export const buttonPrimaryCircular = `${buttonPrimaryBase} rounded-full p-3 flex items-center justify-center`;

export const buttonPrimary404 =
  'inline-flex items-center justify-center rounded-lg bg-primary-light px-6 py-3 font-medium text-white shadow-card-light transition hover:opacity-90 dark:bg-primary-dark dark:shadow-card-dark';
