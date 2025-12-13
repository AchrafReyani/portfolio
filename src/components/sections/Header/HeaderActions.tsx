import LocaleSwitcher from './LocaleSwitcher';
import ThemeToggle from './ThemeToggle';

export function HeaderActions() {
  return (
    <div className="hidden md:flex items-center space-x-2">
      <LocaleSwitcher />
      <ThemeToggle />
    </div>
  );
}
