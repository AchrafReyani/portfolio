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

// Text Styles
export const textPrimaryClass = 'text-text-light dark:text-text-dark';

export const mutedTextClass = 'text-muted-light dark:text-muted-dark';

// Section & Heading Styles
export const sectionTitleClass = `text-4xl font-bold border-b-4 border-primary-light dark:border-primary-dark inline-block pb-2`;

// Form Styles
export const formLabelClass = 'block mb-2 text-sm font-medium text-text-light dark:text-text-dark';

export const formInputClass =
  'w-full px-4 py-2 rounded-md bg-secondary-light border border-muted-light text-text-light dark:bg-secondary-dark dark:border-muted-dark dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark';

export const formTextareaClass = formInputClass;
